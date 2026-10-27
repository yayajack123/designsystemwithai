import type { MarketingBlock, MarketingBlockStyle } from '../composables/useMarketingTemplates'

const colors = new Set(['primary', 'primary-opacity-lighter', 'primary-darken-1', 'secondary', 'surface', 'background', 'on-primary', 'on-surface', 'success', 'warning', 'error', 'info', 'transparent'])
export const isMarketingColor = (value: string) => colors.has(value) || /^#(?:[\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})$/i.test(value)
export const marketingColor = (value: string) => value === 'primary-opacity-lighter' ? 'rgba(var(--v-theme-primary), .08)' : colors.has(value) && value !== 'transparent' ? `rgb(var(--v-theme-${value}))` : isMarketingColor(value) ? value : 'transparent'
export const marketingAttributeName = (name: string) => name.toLowerCase().replace(/^data-/, '')
export const validMarketingAttribute = (name: string) => /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(marketingAttributeName(name)) && !marketingAttributeName(name).startsWith('cms')
export const marketingDataAttributes = (attributes?: Record<string, string>) => Object.fromEntries(Object.entries(attributes || {}).filter(([name, value]) => validMarketingAttribute(name) && typeof value === 'string').map(([name, value]) => [`data-${marketingAttributeName(name)}`, value]))
const number = (value: unknown, fallback: number, min = 0, max = 10000) => value !== '' && value !== null && Number.isFinite(Number(value)) ? Math.min(max, Math.max(min, Number(value))) : fallback
const icon = (value: unknown) => typeof value === 'string' && /^(?:ri|mdi|bxl)[-:][a-z0-9-]+$/.test(value) ? value.replace(':', '-') : ''
export const normalizeMarketingBlock = (block: MarketingBlock): MarketingBlock => {
  const next: MarketingBlock = { ...block, x: number(block.x, 0, -10000), y: number(block.y, 0), width: number(block.width, 100, 1, 390), height: number(block.height, 44, 1) }
  if (block.fontSize !== undefined) next.fontSize = number(block.fontSize, 15, 1, 200)
  if (block.name !== undefined) next.name = String(block.name).slice(0, 200)
  if (block.dataAttributes) next.dataAttributes = Object.fromEntries(Object.entries(marketingDataAttributes(block.dataAttributes)).map(([name, value]) => [name.slice(5), value]))
  if (block.linkTarget !== undefined) next.linkTarget = block.linkTarget === '_self' ? '_self' : '_blank'
  if (block.buttonIcon !== undefined) next.buttonIcon = icon(block.buttonIcon)
  if (!block.style) return next
  const source = block.style
  const style: MarketingBlockStyle = {}
  if (['Poppins', 'Arial', 'Georgia', 'monospace'].includes(source.fontFamily || '')) style.fontFamily = source.fontFamily
  if ([400, 500, 600, 700].includes(Number(source.fontWeight))) style.fontWeight = Number(source.fontWeight) as MarketingBlockStyle['fontWeight']
  if (['left', 'center', 'right', 'justify'].includes(source.textAlign || '')) style.textAlign = source.textAlign
  for (const key of ['textColor', 'textStrokeColor', 'fill', 'borderColor'] as const) {
    if (typeof source[key] === 'string' && isMarketingColor(source[key])) style[key] = source[key]
  }
  for (const key of ['textStrokeWidth', 'borderWidth'] as const) if (source[key] !== undefined) style[key] = number(source[key], 0, 0, 50)
  if (source.opacity !== undefined) style.opacity = number(source.opacity, 100, 0, 100)
  if (source.imageFit === 'contain' || source.imageFit === 'cover') style.imageFit = source.imageFit
  if (source.padding) style.padding = { top: number(source.padding.top, 0), right: number(source.padding.right, 0), bottom: number(source.padding.bottom, 0), left: number(source.padding.left, 0) }
  if (source.radius) style.radius = { topLeft: number(source.radius.topLeft, 0), topRight: number(source.radius.topRight, 0), bottomRight: number(source.radius.bottomRight, 0), bottomLeft: number(source.radius.bottomLeft, 0) }
  return { ...next, style }
}

export const marketingFrameStyle = (block: MarketingBlock): Record<string, string> => ({
  position: 'absolute', left: `${block.x}px`, top: `${block.y}px`, width: `${block.width}px`, height: `${block.height}px`,
  padding: block.style ? '0' : '4px', boxSizing: 'border-box',
})
export const marketingContentStyle = (block: MarketingBlock): Record<string, string> => {
  const style = block.style || {}
  const button = block.type === 'button'
  const shape = ['circle', 'rectangle', 'frame'].includes(block.type)
  const padding = style.padding || (button ? { top: 4, right: 8, bottom: 4, left: 8 } : { top: 0, right: 0, bottom: 0, left: 0 })
  const radius = style.radius
  return {
    width: '100%', height: '100%', boxSizing: 'border-box',
    color: marketingColor(style.textColor || (button ? 'on-primary' : block.color === 'primary' ? 'primary' : 'on-surface')),
    fontFamily: style.fontFamily === 'Poppins' ? 'Poppins, sans-serif' : style.fontFamily || 'inherit',
    fontSize: `${block.fontSize || (button ? 13 : 15)}px`, fontWeight: String(style.fontWeight || (button ? 500 : 400)),
    lineHeight: '1.45', whiteSpace: 'pre-wrap',
    textAlign: style.textAlign || (button ? 'center' : 'left'),
    WebkitTextStroke: `${style.textStrokeWidth || 0}px ${marketingColor(style.textStrokeColor || 'on-surface')}`,
    padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`,
    background: style.fill !== undefined ? marketingColor(style.fill) : button ? marketingColor('primary') : shape ? 'rgba(var(--v-theme-primary), .08)' : 'transparent',
    border: `${style.borderWidth ?? (shape ? 1 : 0)}px solid ${marketingColor(style.borderColor || 'primary')}`,
    borderRadius: radius ? `${radius.topLeft}px ${radius.topRight}px ${radius.bottomRight}px ${radius.bottomLeft}px` : block.type === 'circle' ? '50%' : button ? '999px' : '0',
    opacity: String((style.opacity ?? 100) / 100),
  }
}

export const safeMarketingImage = (source: string) => /^(?:data:image\/(?:png|jpeg|webp);base64,|https?:\/\/|\/(?!\/))/i.test(source) && !/[\s<>"'\\]/.test(source) ? source : ''
export const safeMarketingLink = (url: string) => {
  if (!url || /[\s\\]|\{\{/.test(url)) return undefined
  if (url.startsWith('/') && !url.startsWith('//')) return url
  try { return ['https:', 'http:'].includes(new URL(url).protocol) ? url : undefined } catch { return undefined }
}

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]!))
const css = (styles: Record<string, string>) => Object.entries(styles).map(([name, value]) => `${name.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)}:${value}`).join(';')
export const exportMarketingHtml = (blocks: MarketingBlock[], height: number, options: { theme?: Record<string, string>; icons?: Record<string, string>; assetBaseUrl?: string; fontStylesheets?: string[] } = {}) => {
  const elements = blocks.map(raw => {
    const block = normalizeMarketingBlock(raw)
    const attributes = Object.entries(marketingDataAttributes(block.dataAttributes)).map(([name, value]) => ` ${name}="${escapeHtml(value)}"`).join('')
    const content = escapeHtml(block.content)
    const styles = escapeHtml(css(marketingContentStyle(block)))
    let html = `<p style="${styles};margin:0;white-space:pre-wrap;overflow:hidden">${content}</p>`
    if (block.type === 'image') {
      const source = safeMarketingImage(block.imageSrc || '')
      const url = source.startsWith('/') && options.assetBaseUrl ? new URL(source, options.assetBaseUrl).href : source
      html = `<img src="${escapeHtml(url)}" alt="${content}" style="${styles};display:block;object-fit:${block.style?.imageFit || 'cover'}">`
    }
    if (block.type === 'button') {
      const href = safeMarketingLink((block.url || '').replace(/\{\{[a-z][a-z0-9_]*\}\}/g, 'placeholder')) ? block.url || '' : ''
      const alignment = { left: 'flex-start', center: 'center', right: 'flex-end', justify: 'space-between' }[block.style?.textAlign || 'center']
      html = `<a${href ? ` href="${escapeHtml(href)}"` : ''} target="${block.linkTarget || '_blank'}" rel="noopener noreferrer" aria-label="${escapeHtml(block.name || block.content || 'Open link')}" style="${styles};display:flex;align-items:center;justify-content:${alignment};text-decoration:none">${block.buttonIcon ? `<i class="${escapeHtml(block.buttonIcon)}" aria-hidden="true"></i>` : ''}${content}</a>`
    }
    if (['rectangle', 'circle', 'frame', 'line', 'divider'].includes(block.type)) html = `<div style="${styles}${['line', 'divider'].includes(block.type) ? ';border-top-width:1px' : ''}"></div>`
    if (block.type === 'icon') html = `<i class="${escapeHtml(icon(block.content))}" style="${styles}" aria-label="${escapeHtml(block.name || 'Icon')}"></i>`
    if (block.type === 'heading') html = html.replace('<p ', '<h2 ').replace('</p>', '</h2>')
    return `<div${attributes} style="${escapeHtml(css(marketingFrameStyle(block)))}">${html}</div>`
  }).join('\n')
  const theme = Object.entries(options.theme || {}).filter(([name, value]) => colors.has(name) && /^[\d.,\s]+$/.test(value)).map(([name, value]) => `--v-theme-${name}:${value}`).join(';')
  const icons = Object.entries(options.icons || {}).filter(([name, svg]) => icon(name) && /^url\([\s\S]+\)$/.test(svg) && !/[<>]/.test(svg)).map(([name, svg]) => `.${name}{display:inline-block;width:1em;height:1em;background:currentColor;mask-image:${svg};mask-size:100% 100%;mask-repeat:no-repeat}`).join('')
  const fonts = (options.fontStylesheets || []).filter(url => url.startsWith('https://fonts.googleapis.com/')).map(url => `<link rel="stylesheet" href="${escapeHtml(url)}">`).join('')
  return `<!doctype html>\n<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Marketing design</title>${fonts}<style>:root{${theme}}*{box-sizing:border-box}body{margin:0;font-family:Poppins,sans-serif}a:focus-visible{outline:2px solid rgb(var(--v-theme-primary));outline-offset:2px}${icons}</style></head><body><main style="position:relative;width:390px;height:${number(height, 551)}px">\n${elements}\n</main></body></html>`
}
