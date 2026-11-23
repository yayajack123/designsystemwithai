import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { parse } from 'vue/compiler-sfc'

const violations = []

async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) {
      await inspect(path)
      continue
    }
    if (!entry.isFile() || !path.endsWith('.vue')) continue

    const source = await readFile(path, 'utf8')
    const { descriptor, errors } = parse(source, { filename: path })
    if (errors.length) throw new Error(`Could not parse ${path}: ${errors.join(', ')}`)
    if (!descriptor.template?.ast) continue

    function visit(node, inActionSlot = false) {
      if (node.type !== 1 && node.type !== 0) return
      const props = node.props || []
      const actionSlot = inActionSlot || props.some(prop => prop.type === 7 && prop.name === 'slot' && ['item.action', 'item.actions'].includes(prop.arg?.content))
      const attr = name => props.find(prop => prop.type === 6 && prop.name === name)?.value?.content
      const isIcon = node.tag === 'IconBtn' || (node.tag === 'VBtn' && props.some(prop => (prop.type === 6 && prop.name === 'icon') || (prop.type === 7 && prop.name === 'bind' && prop.arg?.content === 'icon')))
      if (actionSlot && isIcon) {
        const classes = (attr('class') || '').split(/\s+/)
        if (attr('variant') !== 'outlined' || attr('size') !== 'small' || !classes.some(name => ['action-btn', 'table-action-button'].includes(name)))
          violations.push(`${path}:${node.loc.start.line}`)
      }
      for (const child of node.children || []) visit(child, actionSlot)
    }

    visit(descriptor.template.ast)
  }
}

for (const root of ['pages', 'components']) await inspect(root)

if (violations.length) {
  console.error('Table icon actions to review:')
  console.error(violations.join('\n'))
  process.exitCode = 1
}
else {
  console.log('No table icon action deviations found.')
}
