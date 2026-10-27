<script setup lang="ts">
import { computed } from 'vue'
import type { MarketingBlock } from '@/composables/useMarketingTemplates'
import { substituteMarketingValues } from '@/composables/useMarketingTemplates'
import type { ResizeHandle } from '@/utils/marketingCanvas'
import { marketingFrameStyle, marketingContentStyle, marketingDataAttributes, safeMarketingImage, safeMarketingLink } from '@/utils/marketingBlock'

const props = withDefaults(defineProps<{ blocks: MarketingBlock[]; values?: Record<string, string>; editable?: boolean; interactive?: boolean; dragging?: boolean; selectedId?: string; pageMode?: 'mobile' | 'a4'; height?: number; showPageLimit?: boolean }>(), { values: undefined, editable: false, interactive: false, dragging: false, selectedId: '', pageMode: 'mobile', height: undefined, showPageLimit: true })
const emit = defineEmits<{ select: [string]; drag: [PointerEvent, MarketingBlock]; resize: [PointerEvent, MarketingBlock, ResizeHandle] }>()
const handles: { direction: ResizeHandle; label: string }[] = [{ direction: 'nw', label: 'top left' }, { direction: 'n', label: 'top' }, { direction: 'ne', label: 'top right' }, { direction: 'e', label: 'right' }, { direction: 'se', label: 'bottom right' }, { direction: 's', label: 'bottom' }, { direction: 'sw', label: 'bottom left' }, { direction: 'w', label: 'left' }]
const selectedBlock = computed(() => props.blocks.find(block => block.id === props.selectedId))
const canvasHeight = computed(() => props.height || (props.pageMode === 'a4' ? 551 : 844))
const showVerticalCenterGuide = computed(() => props.editable && props.dragging && selectedBlock.value && Math.abs(selectedBlock.value.x + selectedBlock.value.width / 2 - 195) <= 4)
const showHorizontalCenterGuide = computed(() => props.editable && props.dragging && selectedBlock.value && Math.abs(selectedBlock.value.y + selectedBlock.value.height / 2 - canvasHeight.value / 2) <= 4)
const text = (value: string) => props.values ? substituteMarketingValues(value, props.values) : value
const link = (block: MarketingBlock) => safeMarketingLink(text(block.url || ''))
const justify = (block: MarketingBlock) => ({ left: 'flex-start', center: 'center', right: 'flex-end', justify: 'space-between' }[block.style?.textAlign || 'center'])
</script>

<template>
  <div class="marketing-canvas" :class="`marketing-canvas--${pageMode}`" :style="height ? { height: `${height}px` } : undefined" role="region" aria-label="Template preview canvas" @click.self="editable && emit('select', '')">
    <div v-for="block in blocks" :key="block.id" v-bind="marketingDataAttributes(block.dataAttributes)" class="canvas-block" :class="[`canvas-block--${block.type}`, { editable }]" :style="marketingFrameStyle(block)" :role="editable ? 'group' : undefined" :tabindex="editable ? 0 : undefined" :aria-label="editable ? `Select ${block.type}: ${block.name || block.content || block.type}` : undefined" @pointerdown="editable && emit('drag', $event, block)" @click.stop="editable && emit('select', block.id)" @keydown.enter.self.prevent="editable && emit('select', block.id)" @keydown.space.self.prevent="editable && emit('select', block.id)">
      <component :is="interactive && !editable && link(block) ? 'a' : 'span'" v-if="block.type === 'button'" class="canvas-button" :style="{ ...marketingContentStyle(block), justifyContent: justify(block) }" :href="interactive && !editable ? link(block) : undefined" :target="interactive ? block.linkTarget || '_blank' : undefined" :rel="interactive ? 'noopener noreferrer' : undefined" :aria-label="block.name || text(block.content) || 'Open link'"><VIcon v-if="block.buttonIcon" :icon="block.buttonIcon" size="1em" />{{ text(block.content) }}</component>
      <img v-else-if="block.type === 'image' && safeMarketingImage(block.imageSrc || '')" :src="safeMarketingImage(block.imageSrc || '')" :alt="text(block.content)" class="canvas-image" :style="{ ...marketingContentStyle(block), objectFit: block.style?.imageFit || 'cover' }" draggable="false">
      <div v-else-if="block.type === 'image'" class="image-placeholder" :style="{ ...marketingContentStyle(block), background: 'rgb(var(--v-theme-grey-100))' }"><VIcon icon="ri-image-line" />{{ text(block.content) }}</div>
      <div v-else-if="block.type === 'divider' || block.type === 'line'" class="canvas-line" :style="{ ...marketingContentStyle(block), borderTopWidth: `${block.style?.borderWidth ?? 1}px` }" />
      <span v-else-if="['circle', 'rectangle', 'frame'].includes(block.type)" class="canvas-shape" :style="marketingContentStyle(block)" />
      <span v-else-if="block.type === 'icon'" class="canvas-symbol" :style="marketingContentStyle(block)"><VIcon :icon="block.content || 'ri-book-open-line'" size="1em" /></span>
      <component :is="block.type === 'heading' ? 'h2' : 'p'" v-else class="canvas-copy" :style="marketingContentStyle(block)">{{ text(block.content) }}</component>
    </div>
    <div v-if="editable && selectedBlock" class="selection-overlay" :style="marketingFrameStyle(selectedBlock)">
      <span class="selection-size" aria-hidden="true">{{ Math.round(selectedBlock.width) }} × {{ Math.round(selectedBlock.height) }}</span>
      <button v-for="handle in handles" :key="handle.direction" type="button" class="resize-handle" :class="`resize-handle--${handle.direction}`" :aria-label="`Resize ${handle.label}; use Width and Height fields for keyboard resizing`" @pointerdown.stop.prevent="emit('resize', $event, selectedBlock, handle.direction)" @click.stop />
    </div>
    <span v-if="showVerticalCenterGuide" class="center-guide center-guide--vertical" aria-hidden="true" />
    <span v-if="showHorizontalCenterGuide" class="center-guide center-guide--horizontal" :style="{ top: `${canvasHeight / 2}px` }" aria-hidden="true" />
    <div v-if="pageMode === 'a4' && showPageLimit" class="page-limit"><span>Page 2 limit · 551 px</span></div>
  </div>
</template>

<style scoped>
.marketing-canvas { position: relative; width: 390px; height: 844px; flex: 0 0 auto; background: rgb(var(--v-theme-surface)); border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px; }
.marketing-canvas--a4 { height: 551px; }
.canvas-block { position: absolute; display: flex; align-items: flex-start; overflow-wrap: anywhere; }
.center-guide { position: absolute; z-index: 3; background: rgb(var(--v-theme-primary)); opacity: .72; pointer-events: none; }
.center-guide--vertical { top: 0; bottom: 0; left: 195px; width: 1px; }
.center-guide--horizontal { right: 0; left: 0; height: 1px; }
.canvas-image { display: block; width: 100%; height: 100%; object-fit: cover; }
.selection-overlay { z-index: 1000; border: 1px solid rgb(var(--v-theme-primary)); pointer-events: none; }
.selection-size { position: absolute; inset-inline-start: 50%; top: -26px; transform: translateX(-50%); padding: 2px 6px; background: rgb(var(--v-theme-primary)); color: rgb(var(--v-theme-on-primary)); font-size: 13px; white-space: nowrap; pointer-events: none; }
.resize-handle { position: absolute; z-index: 2; width: 12px; height: 12px; border: 1px solid rgb(var(--v-theme-primary)); border-radius: 2px; background: rgb(var(--v-theme-surface)); touch-action: none; pointer-events: auto; }
.resize-handle::after { position: absolute; content: ''; inset: -6px; }
.resize-handle:focus-visible { outline: 2px solid rgb(var(--v-theme-primary)); outline-offset: 3px; }
.resize-handle--nw { top: -6px; left: -6px; cursor: nwse-resize; }
.resize-handle--n { top: -6px; left: calc(50% - 6px); cursor: ns-resize; }
.resize-handle--ne { top: -6px; right: -6px; cursor: nesw-resize; }
.resize-handle--e { top: calc(50% - 6px); right: -6px; cursor: ew-resize; }
.resize-handle--se { bottom: -6px; right: -6px; cursor: nwse-resize; }
.resize-handle--s { bottom: -6px; left: calc(50% - 6px); cursor: ns-resize; }
.resize-handle--sw { bottom: -6px; left: -6px; cursor: nesw-resize; }
.resize-handle--w { top: calc(50% - 6px); left: -6px; cursor: ew-resize; }
.editable { cursor: grab; touch-action: none; user-select: none; }
.editable:focus-visible, .canvas-button:focus-visible { outline: 2px solid rgb(var(--v-theme-primary)); outline-offset: 2px; }
.canvas-copy { margin: 0; line-height: 1.45; white-space: pre-wrap; overflow: hidden; }
.canvas-button { display: inline-flex; width: 100%; height: 100%; justify-content: center; align-items: center; gap: 8px; text-decoration: none; overflow: hidden; white-space: pre-wrap; }
.image-placeholder { display: flex; width: 100%; height: 100%; align-items: center; justify-content: center; gap: 8px; }
.canvas-shape, .canvas-symbol, .canvas-line { display: block; width: 100%; height: 100%; }
@media print { .marketing-canvas--a4 { overflow: hidden; } }
.page-limit { position: absolute; top: 551px; inset-inline: 0; border-top: 1px dashed rgb(var(--v-theme-warning)); color: rgb(var(--v-theme-warning)); font-size: 10px; text-align: end; }
.page-limit span { position: relative; top: -19px; padding: 2px 5px; background: rgb(var(--v-theme-surface)); }
</style>
