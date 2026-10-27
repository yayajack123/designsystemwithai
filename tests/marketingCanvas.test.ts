import assert from 'node:assert/strict'
import test from 'node:test'
import { marketingContentHeight, marketingImageError, resizeMarketingBlock } from '../utils/marketingCanvas'
import { createMarketingPageSnapshot, makeMarketingStudents, normalizeMarketingTemplate, type MarketingBlock, type MarketingTemplate } from '../composables/useMarketingTemplates'

const block: MarketingBlock = { id: 'image', type: 'image', content: 'Class project', x: 24, y: 40, width: 200, height: 100 }

test('fit content reserves the base margin below the lowest element', () => {
  const button = { ...block, y: 704, height: 44 }
  assert.equal(marketingContentHeight([block, button], 24), 772)
  assert.equal(marketingContentHeight([block, button], 48), 796)
  assert.equal(marketingContentHeight([block, button], 0), 748)
  assert.equal(marketingContentHeight([], 24), 400)
  assert.equal(marketingContentHeight([block], 24), 400)
  assert.equal(marketingContentHeight([button]), 748)
})

test('corner resizing preserves the opposite corner and clamps canvas edges', () => {
  assert.deepEqual(resizeMarketingBlock(block, 'nw', -100, -100, 844), { x: 0, y: 0, width: 224, height: 140 })
  assert.deepEqual(resizeMarketingBlock(block, 'se', 1000, 1000, 844), { x: 24, y: 40, width: 366, height: 804 })
  assert.deepEqual(resizeMarketingBlock(block, 'nw', 1000, 1000, 844), { x: 208, y: 124, width: 16, height: 16 })
})

test('side resizing changes only its axis, and thin lines remain resizable', () => {
  assert.deepEqual(resizeMarketingBlock(block, 'e', 30, 90, 551), { x: 24, y: 40, width: 230, height: 100 })
  assert.deepEqual(resizeMarketingBlock(block, 's', 30, -1000, 551), { x: 24, y: 40, width: 200, height: 16 })
  assert.equal(resizeMarketingBlock({ ...block, type: 'line', height: 2 }, 's', 0, -30, 551).height, 1)
})

test('fit-content resizing can extend below the current canvas while retaining width and minimum size limits', () => {
  assert.deepEqual(resizeMarketingBlock(block, 'se', 1000, 1000, Number.POSITIVE_INFINITY), { x: 24, y: 40, width: 366, height: 1100 })
  assert.deepEqual(resizeMarketingBlock(block, 's', 0, -1000, Number.POSITIVE_INFINITY), { x: 24, y: 40, width: 200, height: 16 })
})

test('image upload validation rejects unsupported formats and oversized files', () => {
  assert.equal(marketingImageError({ type: 'image/png', size: 1000 }), '')
  assert.match(marketingImageError({ type: 'image/svg+xml', size: 1000 }), /JPG, PNG or WebP/)
  assert.match(marketingImageError({ type: 'image/jpeg', size: 6 * 1024 * 1024 }), /5 MB/)
})

test('uploaded image data survives normalization and snapshot cloning', () => {
  const template = normalizeMarketingTemplate({ id: 'image-template', name: 'Image template', status: 'Published', country: 'Indonesia', branches: [], periodStart: '2026-01-01', periodEnd: '2026-12-31', priority: 1, isDefault: true, defaultScope: 'country', createdAt: '2026-01-01', updatedAt: '2026-01-01', variables: [], blocks: [{ ...block, imageSrc: 'data:image/webp;base64,example' }] } as MarketingTemplate)
  const student = makeMarketingStudents().find(item => item.country === 'Indonesia')!
  const snapshot = createMarketingPageSnapshot([template], [student], student.code, '2026-10-26')!
  assert.equal(snapshot.blocks[0].imageSrc, template.blocks[0].imageSrc)
  template.blocks[0].imageSrc = 'replacement'
  assert.equal(snapshot.blocks[0].imageSrc, 'data:image/webp;base64,example')
})
