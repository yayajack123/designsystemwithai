import assert from 'node:assert/strict'
import { test } from 'node:test'
import { mkdtemp, readFile, writeFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createRequire } from 'node:module'
import { parse, compileScript } from 'vue/compiler-sfc'
import ts from 'typescript'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createMarketingDemoTemplates } from '../data/marketingDemoTemplates'
import { normalizeMarketingBlock, marketingContentStyle, marketingDataAttributes, exportMarketingHtml, safeMarketingLink } from '../utils/marketingBlock'
import { createMarketingPageSnapshot, makeMarketingStudents, normalizeMarketingTemplate } from '../composables/useMarketingTemplates'

test('demo artwork fits A4 and the CTA is positioned over the printed registration button', () => {
  const demos = createMarketingDemoTemplates('2026-10-26')
  assert.equal(new Set(demos.map(item => item.id)).size, 3)
  for (const demo of demos) {
    assert.equal(demo.status, 'Draft')
    assert.equal(demo.blocks[0].width, 390)
    assert.ok(demo.blocks[0].height <= 551)
    assert.equal(demo.blocks[0].style?.imageFit, 'contain')
  }
  const button = demos[2].blocks[1]
  assert.deepEqual([button.x, button.y, button.width, button.height], [61, 411, 269, 47])
  assert.equal(button.style?.fill, 'transparent')
  assert.equal(button.content, '')
  assert.equal(button.name, 'Daftar sekarang')
  assert.equal(button.url, 'https://wa.me/{{branch_whatsapp}}')
})

test('Surabaya trial demo includes editable campaign copy and a WhatsApp action below the artwork', () => {
  const template = createMarketingDemoTemplates('2026-10-26').find(item => item.id === 'demo-surabaya-trial-gratis')!
  const [heading, description, button] = template.blocks.slice(2)
  assert.equal(heading.content, 'Coba kelas coding gratis')
  assert.equal(heading.type, 'heading')
  assert.equal(description.type, 'text')
  assert.match(description.content, /Surabaya/)
  assert.equal(button.content, 'Jadwalkan trial gratis')
  assert.match(button.url!, /^https:\/\/wa.me\/\{\{branch_whatsapp\}\}\?text=/)
  assert.ok(heading.y >= template.blocks[0].height)
  assert.ok(description.y >= heading.y + heading.height)
  assert.ok(button.y >= description.y + description.height)
})

test('canvas base margin defaults safely and survives template normalization', () => {
  const template = createMarketingDemoTemplates('2026-10-26')[0]
  assert.equal(normalizeMarketingTemplate(template).baseMargin, 24)
  assert.equal(normalizeMarketingTemplate({ ...template, baseMargin: 0 }).baseMargin, 0)
  assert.equal(normalizeMarketingTemplate({ ...template, baseMargin: 32 }).baseMargin, 32)
  assert.equal(normalizeMarketingTemplate({ ...template, baseMargin: 999 }).baseMargin, 96)
  assert.equal(normalizeMarketingTemplate({ ...template, baseMargin: -5 }).baseMargin, 0)
  assert.equal(normalizeMarketingTemplate({ ...template, baseMargin: Number.NaN }).baseMargin, 24)
})

test('unsafe imported styles, data attributes and navigation targets are normalized', () => {
  const source = createMarketingDemoTemplates()[2].blocks[1]
  const block = normalizeMarketingBlock({ ...source, width: Infinity, height: -20, dataAttributes: { redirect: 'info', 'data-cms-secret': 'blocked', 'CMSprivate': 'blocked', 'bad name': 'blocked' }, style: { fill: 'url(javascript:alert(1))', opacity: 200, textColor: '#fff', padding: { top: -20, right: 10, bottom: 0, left: 5 } } })
  assert.equal(block.width, 100)
  assert.equal(block.height, 1)
  assert.equal(block.style?.fill, undefined)
  assert.equal(block.style?.opacity, 100)
  assert.equal(block.style?.padding?.top, 0)
  assert.deepEqual(marketingDataAttributes(block.dataAttributes), { 'data-redirect': 'info' })
  for (const url of ['javascript:alert(1)', '//evil.test', '/\\evil.test', 'https://example.com/{{missing}}']) assert.equal(safeMarketingLink(url), undefined)
  assert.equal(safeMarketingLink('https://wa.me/620000000001'), 'https://wa.me/620000000001')
})

test('zero opacity, per-corner radius and edited properties survive JSON and immutable snapshots', () => {
  const template = createMarketingDemoTemplates()[2]
  template.status = 'Published'
  template.isDefault = true
  template.defaultScope = 'country'
  template.blocks[1] = normalizeMarketingBlock({ ...template.blocks[1], fontSize: 18, buttonIcon: 'ri:arrow-right-line', style: { opacity: 0, fill: 'transparent', fontFamily: 'Georgia', fontWeight: 600, textAlign: 'right', radius: { topLeft: 2, topRight: 4, bottomRight: 6, bottomLeft: 8 }, padding: { top: 1, right: 2, bottom: 3, left: 4 } } })
  const roundTrip = normalizeMarketingTemplate(JSON.parse(JSON.stringify(template)))
  assert.deepEqual(roundTrip.blocks[1], template.blocks[1])
  const style = marketingContentStyle(roundTrip.blocks[1])
  assert.equal(style.opacity, '0')
  assert.equal(style.borderRadius, '2px 4px 6px 8px')
  assert.equal(style.padding, '1px 2px 3px 4px')
  const students = makeMarketingStudents()
  const snapshot = createMarketingPageSnapshot([roundTrip], students, students[0].code, '2026-10-26')!
  assert.equal(snapshot.blocks[1].buttonIcon, 'ri-arrow-right-line')
  roundTrip.blocks[1].style!.opacity = 100
  assert.equal(snapshot.blocks[1].style!.opacity, 0)
})

test('HTML export preserves artwork, overlays, attributes and styles without executable markup', () => {
  const blocks = createMarketingDemoTemplates()[2].blocks
  blocks[1].dataAttributes = { redirect: '"><script>alert(1)</script>', 'cms-secret': 'blocked' }
  blocks[1].style!.textColor = 'on-primary'
  const html = exportMarketingHtml(blocks, 551, { theme: { primary: '16,175,19' }, assetBaseUrl: 'https://example.test' })
  assert.match(html, /https:\/\/example.test\/marketing\/demo\/surabaya-trial-gratis.jpg/)
  assert.match(html, /left:61px;top:411px;width:269px;height:47px/)
  assert.match(html, /href="https:\/\/wa.me\/\{\{branch_whatsapp\}\}"/)
  assert.match(html, /background:transparent/)
  assert.match(html, /--v-theme-primary:16,175,19/)
  assert.match(html, /&lt;script&gt;/)
  assert.doesNotMatch(html, /<script>|data-cms-secret/)
})

test('public journal uses the shared absolute canvas and exposes an accessible branch-specific CTA', async () => {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
  const directory = await mkdtemp(resolve(tmpdir(), 'marketing-render-'))
  const require = createRequire(import.meta.url)
  const compiled = new Map<string, string>()
  const load = async (filename: string): Promise<string> => {
    if (compiled.has(filename)) return compiled.get(filename)!
    const output = resolve(directory, `${compiled.size}.mjs`)
    compiled.set(filename, output)
    const { descriptor } = parse(await readFile(filename, 'utf8'), { filename })
    const script = compileScript(descriptor, { id: filename, inlineTemplate: true })
    let code = ts.transpileModule(script.content, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } }).outputText
    const imports = [...code.matchAll(/from ['"]([^'"]+)['"]/g)]
    for (const match of imports) {
      const specifier = match[1]
      let dependency = specifier.startsWith('@/') ? resolve(root, specifier.slice(2)) : specifier.startsWith('.') ? resolve(dirname(filename), specifier) : require.resolve(specifier)
      if (dependency.endsWith('.vue')) dependency = await load(dependency)
      else if (specifier.startsWith('@/') && !/\.[a-z]+$/.test(dependency)) dependency += '.ts'
      code = code.replaceAll(`from ${JSON.stringify(specifier)}`, `from ${JSON.stringify(pathToFileURL(dependency).href)}`).replaceAll(`from '${specifier}'`, `from '${pathToFileURL(dependency).href}'`)
    }
    await writeFile(output, code)
    return output
  }
  try {
    const { default: Component } = await import(pathToFileURL(await load(resolve(root, 'components/marketing/MarketingJournalPage.vue'))).href)
    const demo = createMarketingDemoTemplates()[2]
    const snapshot = { templateId: demo.id, templateName: demo.name, createdAt: '2026-10-26', blocks: demo.blocks, values: { branch_whatsapp: '620000000002' } }
    const app = createSSRApp({ render: () => h(Component, { snapshot }) })
    app.component('VIcon', { render: () => h('i') })
    const html = await renderToString(app)
    assert.match(html, /href="https:\/\/wa.me\/620000000002"/)
    assert.match(html, /aria-label="Daftar sekarang"/)
    assert.match(html, /target="_blank"/)
    assert.match(html, /rel="noopener noreferrer"/)
    assert.match(html, /left:61px;top:411px;width:269px;height:47px/)
    assert.match(html, /background:transparent/)
  } finally { await rm(directory, { recursive: true, force: true }) }
})
