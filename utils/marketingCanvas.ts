import type { MarketingBlock } from '../composables/useMarketingTemplates'

export type ResizeHandle = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w'
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)
export const marketingContentHeight = (blocks: MarketingBlock[], baseMargin = 0) =>
  Math.max(400, ...blocks.map(block => block.y + block.height + (Number.isFinite(baseMargin) ? clamp(baseMargin, 0, 96) : 0)))

export const resizeMarketingBlock = (block: MarketingBlock, handle: ResizeHandle, dx: number, dy: number, canvasHeight: number) => {
  const minHeight = ['line', 'divider'].includes(block.type) ? 1 : 16
  let left = block.x
  let top = block.y
  let right = block.x + block.width
  let bottom = block.y + block.height
  if (handle.includes('w')) left = clamp(Math.round(left + dx), 0, right - 16)
  if (handle.includes('e')) right = clamp(Math.round(right + dx), left + 16, Math.max(390, left + 16))
  if (handle.includes('n')) top = clamp(Math.round(top + dy), 0, bottom - minHeight)
  if (handle.includes('s')) bottom = clamp(Math.round(bottom + dy), top + minHeight, Math.max(canvasHeight, top + minHeight))
  return { x: left, y: top, width: right - left, height: bottom - top }
}

export const marketingImageError = (file: { type: string; size: number }) => {
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) return 'Choose a JPG, PNG or WebP image.'
  if (file.size > 5 * 1024 * 1024) return 'Choose an image smaller than 5 MB.'
  return ''
}

export const prepareMarketingImage = async (file: File): Promise<string> => {
  const error = marketingImageError(file)
  if (error) throw new Error(error)
  let bitmap: ImageBitmap
  try {
    bitmap = await createImageBitmap(file)
  } catch {
    throw new Error('Could not read this image. Choose a valid JPG, PNG or WebP file.')
  }
  try {
    const ratio = Math.min(1, 1200 / Math.max(bitmap.width, bitmap.height))
    const canvas = document.createElement('canvas')
    canvas.width = Math.max(1, Math.round(bitmap.width * ratio))
    canvas.height = Math.max(1, Math.round(bitmap.height * ratio))
    const context = canvas.getContext('2d')
    if (!context) throw new Error('Image processing is unavailable. Try another browser.')
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    const source = canvas.toDataURL('image/webp', 0.85)
    if (source.length > 600_000) throw new Error('This image is too detailed to save locally. Choose a smaller image.')
    return source
  } finally {
    bitmap.close()
  }
}
