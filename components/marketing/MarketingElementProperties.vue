<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import MarketingColorField from './MarketingColorField.vue'
import type { MarketingBlock, MarketingBlockStyle } from '@/composables/useMarketingTemplates'
import { isMarketingColor, marketingAttributeName, validMarketingAttribute } from '@/utils/marketingBlock'

const props = defineProps<{ block: MarketingBlock; canvasHeight: number; canForward: boolean; canBackward: boolean }>()
const emit = defineEmits<{ patch: [Partial<MarketingBlock>]; reorder: [number] }>()
const typography = computed(() => ['text', 'heading', 'button', 'icon'].includes(props.block.type))
const style = computed(() => props.block.style || {})
const paddingMode = ref<'paired' | 'sides'>('paired')
const radiusMode = ref<'all' | 'corners'>('all')
const padding = computed(() => style.value.padding || { top: props.block.type === 'button' ? 4 : 0, right: props.block.type === 'button' ? 8 : 0, bottom: props.block.type === 'button' ? 4 : 0, left: props.block.type === 'button' ? 8 : 0 })
const defaultRadius = computed(() => props.block.type === 'button' ? 999 : props.block.type === 'circle' ? Math.min(props.block.width, props.block.height) / 2 : 0)
const radius = computed(() => style.value.radius || { topLeft: defaultRadius.value, topRight: defaultRadius.value, bottomRight: defaultRadius.value, bottomLeft: defaultRadius.value })
const colorOptions = ['primary', 'primary-opacity-lighter', 'on-primary', 'on-surface', 'surface', 'background', 'secondary', 'success', 'warning', 'error', 'info', 'transparent']
const setStyle = (patch: Partial<MarketingBlockStyle>) => emit('patch', { style: { ...style.value, ...patch } })
const setColor = (key: 'fill' | 'borderColor' | 'textColor' | 'textStrokeColor', value: unknown) => {
  if (typeof value === 'string' && isMarketingColor(value)) setStyle({ [key]: value })
}
const setNumber = (key: 'x' | 'y' | 'width' | 'height' | 'fontSize', value: unknown) => {
  if (value !== '' && Number.isFinite(Number(value))) emit('patch', { [key]: Number(value) })
}
const setPadding = (keys: (keyof NonNullable<MarketingBlockStyle['padding']>)[], value: unknown) => {
  if (value === '' || !Number.isFinite(Number(value))) return
  setStyle({ padding: { ...padding.value, ...Object.fromEntries(keys.map(key => [key, Number(value)])) } })
}
const setRadius = (keys: (keyof NonNullable<MarketingBlockStyle['radius']>)[], value: unknown) => {
  if (value === '' || !Number.isFinite(Number(value))) return
  setStyle({ radius: { ...radius.value, ...Object.fromEntries(keys.map(key => [key, Number(value)])) } })
}
const align = (direction: string) => {
  const block = props.block
  const positions: Record<string, Partial<MarketingBlock>> = {
    left: { x: 0 }, center: { x: (390 - block.width) / 2 }, right: { x: 390 - block.width },
    top: { y: 0 }, middle: { y: Math.max(0, (props.canvasHeight - block.height) / 2) }, bottom: { y: Math.max(0, props.canvasHeight - block.height) },
  }
  emit('patch', positions[direction])
}

const attributeRows = ref<{ name: string; value: string }[]>([])
const attributeError = computed(() => {
  const names = attributeRows.value.filter(row => row.name.trim()).map(row => marketingAttributeName(row.name.trim()))
  if (names.some(name => !validMarketingAttribute(name))) return 'Use lowercase attribute names; data-cms* is reserved.'
  if (new Set(names).size !== names.length) return 'Attribute names must be unique.'
  return ''
})
const saveAttributes = () => {
  if (attributeError.value) return
  emit('patch', { dataAttributes: Object.fromEntries(attributeRows.value.filter(row => row.name.trim()).map(row => [marketingAttributeName(row.name.trim()), row.value])) })
}
watch(() => props.block.dataAttributes, value => { attributeRows.value = Object.entries(value || {}).map(([name, value]) => ({ name, value })) }, { immediate: true, deep: true })
const removeAttribute = (index: number) => { attributeRows.value.splice(index, 1); saveAttributes() }

const iconInput = ref(props.block.type === 'icon' ? props.block.content : props.block.buttonIcon || '')
const iconPreview = ref<HTMLElement>()
const iconMissing = ref(false)
const iconName = computed(() => /^(ri|mdi|bxl)[-:][a-z0-9-]+$/.test(iconInput.value) ? iconInput.value.replace(':', '-') : '')
watch(() => props.block.buttonIcon, value => { if (props.block.type === 'button') iconInput.value = value || '' })
watch(() => props.block.content, value => { if (props.block.type === 'icon') iconInput.value = value })
const checkIcon = async () => {
  await nextTick()
  const element = iconPreview.value?.querySelector('i')
  iconMissing.value = !!iconInput.value && (!iconName.value || !element || !getComputedStyle(element).getPropertyValue('--svg').trim())
  const current = props.block.type === 'icon' ? props.block.content : props.block.buttonIcon || ''
  if (!iconMissing.value && current !== iconName.value) emit('patch', props.block.type === 'icon' ? { content: iconName.value } : { buttonIcon: iconName.value })
}
watch(iconInput, checkIcon, { flush: 'post' })
onMounted(checkIcon)
const alignmentIcons = { left: 'ri-align-left', center: 'ri-align-center', right: 'ri-align-right', justify: 'ri-align-justify' }
</script>


<template>
  <VDefaultsProvider :defaults="{ VTextField: { density: 'compact', variant: 'outlined', hideDetails: 'auto' }, VSelect: { density: 'compact', variant: 'outlined', hideDetails: 'auto', menuIcon: 'ri-arrow-down-s-line' }, VCombobox: { density: 'compact', variant: 'outlined', hideDetails: 'auto' } }">
    <div class="element-properties">
      <section class="property-section" aria-label="Element name">
        <h4 class="text-caption text-medium-emphasis property-section-title">Name</h4>
        <VTextField :model-value="block.name || ''" aria-label="Element name" :placeholder="block.type" @update:model-value="emit('patch', { name: String($event || '') })" />
      </section>
      <VDivider />
      <section class="property-section" aria-label="Data attributes">
        <div class="property-section-heading"><h4 class="text-caption text-medium-emphasis property-section-title">Data attributes</h4><VBtn icon="ri-add-line" size="x-small" variant="text" color="secondary" aria-label="Add data attribute" @click="attributeRows.push({ name: '', value: '' })" /></div>
        <div v-for="(entry, index) in attributeRows" :key="index" class="attribute-row">
          <VTextField v-model="entry.name" :aria-label="`Attribute ${index + 1} name`" placeholder="Name" @update:focused="!$event && saveAttributes()" />
          <VTextField v-model="entry.value" :aria-label="`Attribute ${index + 1} value`" placeholder="Value" @update:focused="!$event && saveAttributes()" />
          <VBtn icon="ri-delete-bin-line" color="secondary" variant="text" size="x-small" :aria-label="`Remove attribute ${index + 1}`" @click="removeAttribute(index)" />
        </div>
        <p v-if="attributeError" class="text-caption text-error mb-0" role="alert">{{ attributeError }}</p>
        <p class="text-caption text-medium-emphasis mb-0">Emitted as HTML data-* attributes · reserved data-cms-* names are blocked.</p>
      </section>
      <VDivider />
      <section class="property-section" aria-label="Position and size">
        <h4 class="text-caption text-medium-emphasis property-section-title">Position &amp; size</h4>
        <div class="property-position-grid">
          <div class="property-row"><span class="property-row-label">X</span><div class="property-row-controls"><VTextField :model-value="block.x" aria-label="X position" type="number" @update:model-value="setNumber('x', $event)" /></div></div>
          <div class="property-row"><span class="property-row-label">Y</span><div class="property-row-controls"><VTextField :model-value="block.y" aria-label="Y position" type="number" min="0" @update:model-value="setNumber('y', $event)" /></div></div>
          <div class="property-row"><span class="property-row-label">W</span><div class="property-row-controls"><VTextField :model-value="block.width" aria-label="Width" type="number" min="1" max="390" @update:model-value="setNumber('width', $event)" /></div></div>
          <div class="property-row"><span class="property-row-label">H</span><div class="property-row-controls"><VTextField :model-value="block.height" aria-label="Height" type="number" min="1" @update:model-value="setNumber('height', $event)" /></div></div>
        </div>
        <div class="property-row"><span class="property-row-label">Stretch</span><div class="property-row-controls"><VTooltip text="Stretch to full canvas width"><template #activator="{ props: tooltipProps }"><VBtn v-bind="tooltipProps" icon="ri-expand-width-line" variant="tonal" color="secondary" size="x-small" aria-label="Stretch to full canvas width" @click="emit('patch', { x: 0, width: 390 })" /></template></VTooltip></div></div>
      </section>
      <VDivider />
      <section class="property-section" aria-label="Appearance">
        <h4 class="text-caption text-medium-emphasis property-section-title">Appearance</h4>
        <div class="property-row"><span class="property-row-label">Fill</span><div class="property-row-controls"><MarketingColorField :model-value="style.fill || (block.type === 'button' ? 'primary' : ['rectangle', 'circle', 'frame'].includes(block.type) ? 'primary-opacity-lighter' : 'transparent')" label="Fill color" :items="colorOptions" @update:model-value="setColor('fill', $event)" /></div></div>
        <div class="property-row"><span class="property-row-label">Radius</span><div class="property-row-controls"><VTextField :model-value="radius.topLeft" aria-label="Corner radius" type="number" min="0" @update:model-value="setRadius(radiusMode === 'all' ? ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'] : ['topLeft'], $event)" /><VBtn variant="outlined" color="secondary" size="x-small" :aria-label="radiusMode === 'all' ? 'Edit individual corners' : 'Use one radius for all corners'" @click="radiusMode = radiusMode === 'all' ? 'corners' : 'all'">{{ radiusMode === 'all' ? 'All' : 'Corners' }}</VBtn></div></div>
        <VRow v-if="radiusMode === 'corners'" dense><VCol v-for="corner in (['topRight', 'bottomRight', 'bottomLeft'] as const)" :key="corner" cols="6"><VTextField :model-value="radius[corner]" :label="corner.replace(/([A-Z])/g, ' $1')" type="number" min="0" @update:model-value="setRadius([corner], $event)" /></VCol></VRow>
        <div class="property-row"><span class="property-row-label">Border</span><div class="property-row-controls"><VTextField :model-value="style.borderWidth ?? (['rectangle', 'circle', 'frame'].includes(block.type) ? 1 : 0)" aria-label="Border width" type="number" min="0" max="50" class="property-border-width" @update:model-value="setStyle({ borderWidth: Number($event) })" /><MarketingColorField :model-value="style.borderColor || 'primary'" label="Border color" :items="colorOptions" @update:model-value="setColor('borderColor', $event)" /></div></div>
        <div class="property-row"><span class="property-row-label">Opacity</span><div class="property-row-controls"><VSlider :model-value="style.opacity ?? 100" aria-label="Opacity" :min="0" :max="100" :step="1" thumb-label hide-details @update:model-value="setStyle({ opacity: $event })" /><output class="property-percentage">{{ style.opacity ?? 100 }}%</output></div></div>
        <div v-if="block.type === 'image'" class="property-row"><span class="property-row-label">Fit</span><VSelect :model-value="style.imageFit || 'cover'" aria-label="Image fit" :items="[{ title: 'Contain', value: 'contain' }, { title: 'Cover', value: 'cover' }]" @update:model-value="setStyle({ imageFit: $event })" /></div>
      </section>
      <template v-if="!['frame', 'rectangle', 'circle', 'line', 'divider', 'icon'].includes(block.type)">
        <VDivider />
        <section class="property-section" aria-label="Content">
          <h4 class="text-caption text-medium-emphasis property-section-title">Content</h4>
          <slot name="media" />
          <VTextarea :model-value="block.content" :aria-label="block.type === 'image' ? 'Alternative text' : 'Content'" :placeholder="block.type === 'image' ? 'Alternative text' : 'Content'" rows="2" auto-grow density="compact" variant="outlined" hide-details="auto" @update:model-value="emit('patch', { content: String($event || '') })" />
        </section>
      </template>
      <template v-if="typography">
        <VDivider />
        <section class="property-section" aria-label="Typography">
          <h4 class="text-caption text-medium-emphasis property-section-title">Typography</h4>
          <div v-if="block.type !== 'icon'" class="property-row"><span class="property-row-label">Font</span><VSelect :model-value="style.fontFamily || 'Poppins'" :items="['Poppins', 'Arial', 'Georgia', 'monospace']" aria-label="Font family" @update:model-value="setStyle({ fontFamily: $event })" /></div>
          <div class="property-row"><span class="property-row-label">Size</span><div class="property-row-controls"><VTextField :model-value="block.fontSize || (block.type === 'button' ? 13 : 15)" aria-label="Font size" type="number" min="1" max="200" @update:model-value="setNumber('fontSize', $event)" /></div></div>
          <div v-if="block.type !== 'icon'" class="property-row"><span class="property-row-label">Weight</span><VSelect :model-value="style.fontWeight || (block.type === 'button' ? 500 : 400)" :items="[{ title: 'Regular', value: 400 }, { title: 'Medium', value: 500 }, { title: 'Semibold', value: 600 }, { title: 'Bold', value: 700 }]" aria-label="Font weight" @update:model-value="setStyle({ fontWeight: $event })" /></div>
          <div class="property-row"><span class="property-row-label">Color</span><div class="property-row-controls"><MarketingColorField :model-value="style.textColor || (block.type === 'button' ? 'on-primary' : block.color || 'on-surface')" label="Text color" :items="colorOptions" @update:model-value="setColor('textColor', $event)" /></div></div>
          <div v-if="block.type !== 'icon'" class="property-row"><span class="property-row-label">Stroke</span><div class="property-row-controls"><VTextField :model-value="style.textStrokeWidth || 0" aria-label="Text stroke width" type="number" min="0" max="50" class="property-border-width" @update:model-value="setStyle({ textStrokeWidth: Number($event) })" /><MarketingColorField :model-value="style.textStrokeColor || 'on-surface'" label="Text stroke color" :items="colorOptions" @update:model-value="setColor('textStrokeColor', $event)" /></div></div>
          <div class="property-action-row" role="group" aria-label="Text alignment"><VBtn v-for="(icon, value) in alignmentIcons" :key="value" :icon="icon" :aria-label="`Align text ${value}`" :aria-pressed="(style.textAlign || (block.type === 'button' ? 'center' : 'left')) === value" :color="(style.textAlign || (block.type === 'button' ? 'center' : 'left')) === value ? 'primary' : 'secondary'" variant="tonal" size="x-small" @click="setStyle({ textAlign: value })" /></div>
        </section>
      </template>
      <VDivider />
      <section class="property-section" aria-label="Padding">
        <div class="property-section-heading"><h4 class="text-caption text-medium-emphasis property-section-title">Padding</h4><VBtn variant="text" color="secondary" size="x-small" @click="paddingMode = paddingMode === 'paired' ? 'sides' : 'paired'">{{ paddingMode === 'paired' ? 'Four sides' : 'H / V' }}</VBtn></div>
        <div v-if="paddingMode === 'paired'" class="property-position-grid">
          <div class="property-row"><span class="property-row-label">H</span><div class="property-row-controls"><VTextField :model-value="padding.left" aria-label="Horizontal padding" type="number" min="0" @update:model-value="setPadding(['left', 'right'], $event)" /></div></div>
          <div class="property-row"><span class="property-row-label">V</span><div class="property-row-controls"><VTextField :model-value="padding.top" aria-label="Vertical padding" type="number" min="0" @update:model-value="setPadding(['top', 'bottom'], $event)" /></div></div>
        </div>
        <VRow v-else dense><VCol v-for="side in (['top', 'right', 'bottom', 'left'] as const)" :key="side" cols="6"><VTextField :model-value="padding[side]" :label="`${side} padding`" type="number" min="0" @update:model-value="setPadding([side], $event)" /></VCol></VRow>
      </section>
      <template v-if="block.type === 'button'">
        <VDivider />
        <section class="property-section" aria-label="Link">
          <h4 class="text-caption text-medium-emphasis property-section-title">Link</h4>
          <div class="property-row"><span class="property-row-label">URL</span><div class="property-row-controls"><VTextField :model-value="block.url || ''" aria-label="Button URL" placeholder="https://wa.me/" @update:model-value="emit('patch', { url: String($event || '') })" /></div></div>
          <div class="property-row"><span class="property-row-label">Target</span><VSelect :model-value="block.linkTarget || '_blank'" aria-label="Open link in" :items="[{ title: 'New tab', value: '_blank' }, { title: 'Same tab', value: '_self' }]" @update:model-value="emit('patch', { linkTarget: $event })" /></div>
        </section>
      </template>
      <template v-if="block.type === 'button' || block.type === 'icon'">
        <VDivider />
        <section class="property-section" aria-label="Icon">
          <h4 class="text-caption text-medium-emphasis property-section-title">Icon</h4>
          <div class="property-row"><span class="property-row-label">Name</span><div class="property-row-controls"><VTextField v-model="iconInput" aria-label="Icon name" placeholder="ri:arrow-right-line" :error-messages="iconMissing ? 'This icon is not bundled in the project.' : ''" /><span ref="iconPreview"><VIcon v-if="iconName" :icon="iconName" /></span></div></div>
          <p class="text-caption text-medium-emphasis mb-0">Use a bundled Iconify name. Leave blank for no icon.</p>
        </section>
      </template>
      <VDivider />
      <section class="property-section" aria-label="Alignment">
        <h4 class="text-caption text-medium-emphasis property-section-title">Alignment</h4>
        <div class="property-row property-row--alignment"><span class="property-row-label">Horizontal</span><VBtnGroup class="property-alignment-group" divided variant="outlined" color="secondary" aria-label="Horizontal alignment"><VBtn v-for="direction in ['left', 'center', 'right']" :key="direction" :icon="`ri-align-${direction}`" size="small" :aria-label="`Align element ${direction}`" @click="align(direction)" /></VBtnGroup></div>
        <div class="property-row property-row--alignment"><span class="property-row-label">Vertical</span><VBtnGroup class="property-alignment-group" divided variant="outlined" color="secondary" aria-label="Vertical alignment"><VBtn v-for="(icon, direction) in { top: 'ri-align-top', middle: 'ri-align-vertically', bottom: 'ri-align-bottom' }" :key="direction" :icon="icon" size="small" :aria-label="`Align element ${direction}`" @click="align(direction)" /></VBtnGroup></div>
      </section>
      <VDivider />
      <section class="property-section" aria-label="Layer order">
        <h4 class="text-caption text-medium-emphasis property-section-title">Layer</h4>
        <div class="property-action-row"><VBtn variant="outlined" color="secondary" size="small" prepend-icon="ri-arrow-up-line" :disabled="!canForward" @click="emit('reorder', 1)">Forward</VBtn><VBtn variant="outlined" color="secondary" size="small" prepend-icon="ri-arrow-down-line" :disabled="!canBackward" @click="emit('reorder', -1)">Backward</VBtn></div>
      </section>
    </div>
  </VDefaultsProvider>
</template>

<style scoped>
.element-properties { min-width: 0; }
.property-section { display: flex; flex-direction: column; gap: 8px; padding: 16px 0; }
.property-section:first-child { padding-top: 0; }
.property-section-title { margin: 0 0 2px; font-weight: 500; }
.property-section-heading { display: flex; min-height: 24px; align-items: center; justify-content: space-between; gap: 8px; }
.element-properties > .v-divider { margin-inline: -16px; }
.property-row { display: grid; grid-template-columns: 54px minmax(0, 1fr); align-items: center; gap: 8px; min-width: 0; }
.property-row-label { color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity)); font-size: 12px; line-height: 18px; }
.property-row-controls { display: flex; min-width: 0; align-items: center; gap: 6px; }
.property-row-controls > .v-input { flex: 1 1 0; min-width: 0; }
.property-row-controls :deep(.color-trigger) { flex: 1 1 0; min-width: 0; }
.property-position-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px 8px; }
.property-position-grid .property-row { grid-template-columns: 14px minmax(0, 1fr); gap: 6px; }
.property-action-row { display: flex; flex-wrap: wrap; gap: 6px; }
.property-row--alignment { grid-template-columns: 72px minmax(0, 1fr); }
.property-row--alignment .property-row-label { white-space: nowrap; }
.property-alignment-group { justify-self: start; height: 36px; overflow: hidden; border: 1px solid rgba(var(--v-theme-on-surface), var(--v-border-opacity)); border-radius: 6px; }
.property-alignment-group :deep(.v-btn) { width: 36px; min-width: 36px; height: 36px; padding: 0; border-block: 0 !important; border-inline-start: 0 !important; border-color: rgba(var(--v-theme-on-surface), var(--v-border-opacity)) !important; border-radius: 0 !important; }
.property-alignment-group :deep(.v-btn:last-child) { border-inline-end: 0 !important; }
.element-properties :deep(.v-textarea .v-field) { --v-field-padding-top: 8px; --v-field-padding-bottom: 8px; }
.element-properties :deep(.v-textarea .v-field__input) { padding: 8px 10px !important; line-height: 18px; -webkit-mask-image: none; mask-image: none; }
.property-border-width { max-width: 64px; }
.property-percentage { width: 36px; flex: 0 0 36px; text-align: right; font-variant-numeric: tabular-nums; font-size: 11px; }
.attribute-row { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 24px; align-items: center; gap: 6px; }
.element-properties :deep(.v-input) { min-width: 0; }
.element-properties :deep(.v-slider) { margin-inline: 0; }
.element-properties :deep(.v-select .v-field) { --v-field-padding-start: 8px; --v-field-padding-end: 8px; }
.element-properties :deep(.v-select .v-field--appended) { padding-inline-end: 8px !important; }
.element-properties :deep(.v-select .v-field__append-inner) { align-self: stretch; align-items: center; padding-block: 0 !important; padding-inline-start: 8px; }
.element-properties :deep(.v-select__menu-icon) { width: 16px; height: 16px; font-size: 16px !important; margin: 0; }
@media (min-width: 960px) {
  .element-properties :deep(.v-field) { --v-input-control-height: 30px !important; --v-field-padding-top: 0px; --v-field-padding-bottom: 0px; --v-field-padding-start: 8px; --v-field-padding-end: 8px; }
  .element-properties :deep(.v-field__input) { min-height: 30px !important; padding-block: 4px; }
  .element-properties :deep(.v-textarea textarea:not(.v-textarea__sizer)) { min-height: 72px !important; }
  .element-properties :deep(.v-textarea .v-textarea__sizer) { min-height: 0 !important; }
  .element-properties :deep(.v-field__prepend-inner), .element-properties :deep(.v-field__append-inner) { align-self: stretch; align-items: center; padding-block: 0 !important; }
  .element-properties :deep(.v-textarea .v-field) { --v-field-padding-top: 8px; --v-field-padding-bottom: 8px; }
  .element-properties :deep(.v-select .v-field__input), .element-properties :deep(.v-combobox .v-field__input) { row-gap: 0; }
  .element-properties :deep(input[type='number']) { appearance: textfield; -moz-appearance: textfield; }
  .element-properties :deep(input::-webkit-inner-spin-button), .element-properties :deep(input::-webkit-outer-spin-button) { margin: 0; -webkit-appearance: none; }
}
</style>
