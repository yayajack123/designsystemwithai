<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { marketingContentHeight, prepareMarketingImage, resizeMarketingBlock, type ResizeHandle } from '@/utils/marketingCanvas'
import type { MarketingBlock, MarketingVariable, MarketingVariableType } from '@/composables/useMarketingTemplates'
import { builtinMarketingVariables, isBuiltinMarketingVariable } from '@/composables/useMarketingTemplates'
import MarketingCanvas from './MarketingCanvas.vue'
import MarketingElementProperties from './MarketingElementProperties.vue'
import { normalizeMarketingBlock, exportMarketingHtml } from '@/utils/marketingBlock'

const props = defineProps<{ modelValue: MarketingBlock[]; variables: MarketingVariable[]; baseMargin?: number }>()
const emit = defineEmits<{
  'update:modelValue': [MarketingBlock[]]
  'update:variables': [MarketingVariable[]]
  'update:baseMargin': [number]
}>()
const baseMargin = computed(() => Number.isFinite(props.baseMargin) ? Math.min(96, Math.max(0, Math.round(props.baseMargin!))) : 24)
const updateBaseMargin = (value: unknown) => {
  if (value === '' || value === null || !Number.isFinite(Number(value))) return
  emit('update:baseMargin', Math.min(96, Math.max(0, Math.round(Number(value)))))
}

const activePanel = ref<'elements' | 'layers' | 'styles' | 'variables'>('elements')
const { smAndDown } = useDisplay()
const panelTabs = [
  { value: 'elements', label: 'Elements', icon: 'ri-layout-grid-line' },
  { value: 'layers', label: 'Layers', icon: 'ri-stack-line' },
  { value: 'styles', label: 'Styles', icon: 'ri-palette-line' },
  { value: 'variables', label: 'Variables', icon: 'ri-braces-line' },
] as const
const selectedId = ref('')
const showPreview = ref(false)
const showSidebar = ref(true)
const canvasStage = ref<HTMLElement | null>(null)
const designFileInput = ref<HTMLInputElement | null>(null)
const importFormat = ref<'json' | 'html'>('json')
const elementGroups = [
  { label: 'Text', items: [{ label: 'Heading', type: 'heading', sample: 'Heading', typography: 'text-h5', fontSize: 24 }, { label: 'Subheading', type: 'heading', sample: 'Subheading', typography: 'text-body-1 font-weight-medium', fontSize: 18 }, { label: 'Body', type: 'text', sample: 'Body text', typography: 'text-body-2', fontSize: 15 }, { label: 'Caption', type: 'text', sample: 'Caption', typography: 'text-caption text-medium-emphasis', fontSize: 13 }] },
  { label: 'Media', items: [{ label: 'Image', type: 'image' }] },
  { label: 'Interactive', items: [{ label: 'Button', type: 'button' }, { label: 'Icon', type: 'icon' }] },
  { label: 'Shapes', items: [{ label: 'Rectangle', type: 'rectangle' }, { label: 'Circle', type: 'circle' }, { label: 'Line', type: 'line' }] },
  { label: 'Layout', items: [{ label: 'Frame', type: 'frame' }, { label: 'Divider', type: 'divider' }] },
] satisfies { label: string; items: { label: string; type: MarketingBlock['type']; sample?: string; typography?: string; fontSize?: number }[] }[]
const elementIcons: Record<MarketingBlock['type'], string> = { text: 'ri-text', heading: 'ri-heading', image: 'ri-image-line', button: 'ri-cursor-line', icon: 'ri-emotion-line', rectangle: 'ri-checkbox-blank-line', circle: 'ri-checkbox-blank-circle-line', line: 'ri-subtract-line', frame: 'ri-artboard-line', divider: 'ri-separator' }
const pageMode = ref<'mobile' | 'a4'>('mobile')
const canvasHeightMode = ref<'fixed' | 'content'>(props.modelValue.some(block => block.y + block.height > 400) ? 'content' : 'fixed')
const flexibleHeight = computed(() => pageMode.value === 'mobile' && canvasHeightMode.value === 'content')
const scale = ref(0.75)
const canvasHeight = computed(() => {
  if (pageMode.value === 'a4') return 551
  if (canvasHeightMode.value === 'fixed') return 400
  return marketingContentHeight(props.modelValue, baseMargin.value)
})
const history = ref<MarketingBlock[][]>([])
const future = ref<MarketingBlock[][]>([])
const canvasFrame = ref<HTMLElement | null>(null)
const drag = ref<{ id: string; pointerId: number; startX: number; startY: number; block: MarketingBlock; handle?: ResizeHandle } | null>(null)
const dragOriginal = ref<MarketingBlock[] | null>(null)
const imageInput = ref<HTMLInputElement | null>(null)
const imageBusy = ref(false)
const imageError = ref('')
const feedback = ref('')
const selectedBlock = computed(() => props.modelValue.find(block => block.id === selectedId.value))
const a4Overflow = computed(() => props.modelValue.some(block => block.y + block.height > 551))
const canvasFootprintHeight = computed(() => pageMode.value === 'a4' && a4Overflow.value ? Math.max(canvasHeight.value, marketingContentHeight(props.modelValue, baseMargin.value)) : canvasHeight.value)
const selectedVariable = ref('student_name')
const variableOptions = computed(() => [...builtinMarketingVariables, ...props.variables.filter(variable => !isBuiltinMarketingVariable(variable))].map(variable => ({ title: variable.label, value: variable.name })))
const updateVariable = (index: number, key: keyof MarketingVariable, value: string) => emit('update:variables', props.variables.map((variable, i) => i === index ? { ...variable, [key]: value } : variable))
const removeVariable = (index: number) => {
  if (window.confirm(`Remove {{${props.variables[index].name}}}? Used placeholders will need to be replaced.`)) emit('update:variables', props.variables.filter((_, i) => i !== index))
}

watch(() => props.modelValue, blocks => {
  if (selectedId.value && !blocks.some(block => block.id === selectedId.value)) selectedId.value = ''
}, { deep: true })
watch(selectedId, () => { imageError.value = '' })

const commit = (blocks: MarketingBlock[]) => {
  history.value.push(JSON.parse(JSON.stringify(props.modelValue)))
  if (history.value.length > 30) history.value.shift()
  future.value = []
  emit('update:modelValue', blocks.map(normalizeMarketingBlock))
}

const updateSelected = (key: keyof MarketingBlock, value: string | number | undefined) => {
  if (!selectedBlock.value) return
  commit(props.modelValue.map(block => block.id === selectedId.value ? { ...block, [key]: value } : block))
}

const patchSelected = (patch: Partial<MarketingBlock>) => {
  if (!selectedBlock.value) return
  commit(props.modelValue.map(block => block.id === selectedId.value ? { ...block, ...patch } : block))
}

const addElement = (type: MarketingBlock['type'], fontSize?: number) => {
  const defaults: Record<MarketingBlock['type'], Partial<MarketingBlock>> = {
    heading: { content: 'New heading', width: 300, height: 48, fontSize: 24, color: 'primary' },
    text: { content: 'Write your message here.', width: 300, height: 60, fontSize: 15 },
    image: { content: 'Image placeholder', width: 330, height: 144 },
    button: { content: 'Button label', width: 176, height: 44, color: 'primary' },
    divider: { content: '', width: 330, height: 1 }, rectangle: { content: '', width: 240, height: 80 },
    circle: { content: '', width: 80, height: 80 }, line: { content: '', width: 220, height: 2 },
    frame: { content: '', width: 330, height: 120 }, icon: { content: 'ri-book-open-line', width: 40, height: 40 },
  }
  const block = { id: `block-${Date.now()}`, type, x: 24, y: 240 + props.modelValue.length * 12, ...defaults[type] } as MarketingBlock
  block.x = baseMargin.value
  block.width = Math.min(block.width, 390 - baseMargin.value * 2)
  if (flexibleHeight.value) block.y = props.modelValue.length ? Math.max(...props.modelValue.map(item => item.y + item.height)) + 16 : baseMargin.value
  else block.y = Math.max(baseMargin.value, Math.min(block.y, canvasHeight.value - baseMargin.value - block.height))
  if (fontSize) block.fontSize = fontSize
  commit([...props.modelValue, block])
  selectedId.value = block.id
}

const startDrag = (event: PointerEvent, block: MarketingBlock) => {
  startGesture(event, block)
}

const startResize = (event: PointerEvent, block: MarketingBlock, handle: ResizeHandle) => {
  startGesture(event, block, handle)
}

const startGesture = (event: PointerEvent, block: MarketingBlock, handle?: ResizeHandle) => {
  if (event.button !== 0 || drag.value) return
  event.preventDefault()
  selectedId.value = block.id
  drag.value = { id: block.id, pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, block: { ...block }, handle }
  dragOriginal.value = JSON.parse(JSON.stringify(props.modelValue)) as MarketingBlock[]
  canvasFrame.value?.focus({ preventScroll: true })
  canvasFrame.value?.setPointerCapture(event.pointerId)
}

const moveCanvas = (event: PointerEvent) => {
  if (!drag.value || event.pointerId !== drag.value.pointerId) return
  const { block, handle } = drag.value
  const dx = (event.clientX - drag.value.startX) / scale.value
  const dy = (event.clientY - drag.value.startY) / scale.value
  const heightLimit = flexibleHeight.value ? Number.POSITIVE_INFINITY : canvasHeight.value
  const geometry = handle ? resizeMarketingBlock(block, handle, dx, dy, heightLimit) : {
    x: Math.max(0, Math.min(390 - block.width, Math.round(block.x + dx))),
    y: Math.max(0, Math.min(heightLimit - block.height, Math.round(block.y + dy))),
  }
  emit('update:modelValue', props.modelValue.map(item => item.id === block.id ? { ...item, ...geometry } : item))
}

const finishDrag = () => {
  if (dragOriginal.value && JSON.stringify(dragOriginal.value) !== JSON.stringify(props.modelValue)) {
    history.value.push(dragOriginal.value)
    if (history.value.length > 30) history.value.shift()
    future.value = []
  }
  const pointerId = drag.value?.pointerId
  drag.value = null
  dragOriginal.value = null
  if (pointerId !== undefined && canvasFrame.value?.hasPointerCapture(pointerId)) canvasFrame.value.releasePointerCapture(pointerId)
}

const cancelDrag = () => {
  if (dragOriginal.value) emit('update:modelValue', dragOriginal.value)
  dragOriginal.value = null
  finishDrag()
}

const undo = () => {
  const previous = history.value.pop()
  if (!previous) return
  future.value.push(JSON.parse(JSON.stringify(props.modelValue)))
  emit('update:modelValue', previous)
}

const redo = () => {
  const next = future.value.pop()
  if (!next) return
  history.value.push(JSON.parse(JSON.stringify(props.modelValue)))
  emit('update:modelValue', next)
}

const addVariable = () => {
  let suffix = props.variables.length + 1
  while (props.variables.some(variable => variable.name === `custom_${suffix}`)) suffix++
  const variables = [...props.variables, { name: `custom_${suffix}`, label: 'Custom variable', source: 'custom' as const, type: 'text' as MarketingVariableType, defaultValue: '', branchValues: {} }]
  emit('update:variables', variables)
  activePanel.value = 'variables'
}

const removeSelected = () => {
  if (!selectedBlock.value || drag.value) return
  commit(props.modelValue.filter(block => block.id !== selectedId.value))
  selectedId.value = ''
  feedback.value = 'Element deleted. Use Undo to restore it.'
  nextTick(() => canvasFrame.value?.focus({ preventScroll: true }))
}
const onKeydown = (event: KeyboardEvent) => {
  if (showPreview.value || event.isComposing || (event.target as HTMLElement).closest('input, textarea, select, [contenteditable="true"], [role="textbox"], [role="combobox"]')) return
  if (event.key === 'Escape') {
    event.preventDefault()
    if (drag.value) cancelDrag()
    else selectedId.value = ''
  } else if (drag.value) return
  else if (['Delete', 'Backspace'].includes(event.key) && selectedBlock.value) {
    event.preventDefault()
    removeSelected()
  } else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z') {
    event.preventDefault()
    if (event.shiftKey) redo()
    else undo()
  }
}
const zoomBy = (delta: number) => {
  if (!drag.value) scale.value = Math.max(0.35, Math.min(2, Number((scale.value + delta).toFixed(2))))
}
const onWheel = (event: WheelEvent) => {
  if (!event.ctrlKey && !event.metaKey) return
  event.preventDefault()
  if (event.deltaY) zoomBy(event.deltaY < 0 ? 0.05 : -0.05)
}
const uploadImage = async (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  const block = selectedBlock.value
  input.value = ''
  if (!file || !block || block.type !== 'image' || imageBusy.value) return
  imageBusy.value = true
  imageError.value = ''
  try {
    const imageSrc = await prepareMarketingImage(file)
    if (selectedId.value !== block.id || !props.modelValue.some(item => item.id === block.id)) return
    const total = props.modelValue.reduce((size, item) => size + (item.id === block.id ? 0 : item.imageSrc?.length || 0), imageSrc.length)
    if (total > 1_500_000) throw new Error('Template image storage is full. Remove another image or use a smaller file.')
    commit(props.modelValue.map(item => item.id === block.id ? { ...item, imageSrc } : item))
    feedback.value = 'Image uploaded.'
  } catch (error) {
    if (selectedId.value === block.id) imageError.value = error instanceof Error ? error.message : 'Could not read this image. Choose another file.'
  } finally {
    imageBusy.value = false
  }
}
const reorderSelected = (delta: number) => {
  const index = props.modelValue.findIndex(block => block.id === selectedId.value)
  const target = index + delta
  if (index < 0 || target < 0 || target >= props.modelValue.length) return
  const blocks = [...props.modelValue]
  ;[blocks[index], blocks[target]] = [blocks[target], blocks[index]]
  commit(blocks)
}

const openImport = (format: 'json' | 'html') => {
  importFormat.value = format
  if (designFileInput.value) {
    designFileInput.value.accept = format === 'json' ? '.json,application/json' : '.html,.htm,text/html'
    designFileInput.value.value = ''
    designFileInput.value.click()
  }
}

const downloadDesign = (contents: string, filename: string, type: string) => {
  const url = URL.createObjectURL(new Blob([contents], { type }))
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  window.setTimeout(() => URL.revokeObjectURL(url), 0)
}

const exportDesign = (format: 'json' | 'html') => {
  if (format === 'json') {
    downloadDesign(JSON.stringify({ format: 'marketing-design', version: 1, blocks: props.modelValue, variables: props.variables }, null, 2), 'marketing-design.json', 'application/json')
    feedback.value = 'Design exported as JSON.'
    return
  }

  const element = canvasFrame.value
  const computed = element ? getComputedStyle(element) : undefined
  const theme = Object.fromEntries(['primary', 'primary-darken-1', 'secondary', 'surface', 'background', 'on-primary', 'on-surface', 'success', 'warning', 'error', 'info'].map(name => [name, computed?.getPropertyValue(`--v-theme-${name}`).trim() || '']))
  const icons = Object.fromEntries([...(element?.querySelectorAll('.v-icon') || [])].flatMap(icon => {
    const name = [...icon.classList].find(name => /^(ri|mdi|bxl)-/.test(name))
    const svg = getComputedStyle(icon).getPropertyValue('--svg').trim()
    return name && svg ? [[name, svg]] : []
  }))
  const fontStylesheets = [...document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')].map(link => link.href).filter(url => url.startsWith('https://fonts.googleapis.com/'))
  const html = exportMarketingHtml(props.modelValue, canvasHeight.value, { theme, icons, assetBaseUrl: window.location.origin, fontStylesheets })
  downloadDesign(html, 'marketing-design.html', 'text/html')
  feedback.value = 'Design exported as HTML.'
}

const importDesign = async (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  input.value = ''
  if (!file) return

  try {
    const contents = await file.text()
    if (importFormat.value === 'json') {
      const parsed = JSON.parse(contents) as { blocks?: unknown; variables?: unknown } | unknown[]
      const source = Array.isArray(parsed) ? parsed : parsed && typeof parsed === 'object' ? parsed.blocks : undefined
      if (!Array.isArray(source)) throw new Error('This JSON file does not contain a design.')
      const allowedTypes: MarketingBlock['type'][] = ['heading', 'text', 'image', 'button', 'divider', 'rectangle', 'circle', 'line', 'frame', 'icon']
      const blocks = source.filter((block): block is MarketingBlock => {
        if (!block || typeof block !== 'object') return false
        const item = block as Partial<MarketingBlock>
        return typeof item.id === 'string' && typeof item.type === 'string' && allowedTypes.includes(item.type as MarketingBlock['type']) && typeof item.content === 'string' && ['x', 'y', 'width', 'height'].every(key => Number.isFinite(item[key as keyof MarketingBlock]))
      })
      if (!blocks.length && source.length) throw new Error('No valid design elements were found in this JSON file.')
      commit(blocks.map(normalizeMarketingBlock))
      const variables = !Array.isArray(parsed) && parsed && typeof parsed === 'object' ? parsed.variables : undefined
      if (Array.isArray(variables)) emit('update:variables', variables as MarketingVariable[])
      feedback.value = 'Design imported from JSON.'
      return
    }

    const documentContent = new DOMParser().parseFromString(contents, 'text/html')
    const elements = [...documentContent.body.querySelectorAll('h1,h2,h3,h4,h5,h6,p,a,button')]
    const blocks: MarketingBlock[] = elements.map((element, index) => {
      const type: MarketingBlock['type'] = /^h[1-6]$/.test(element.tagName.toLowerCase()) ? 'heading' : ['a', 'button'].includes(element.tagName.toLowerCase()) ? 'button' : 'text'
      return { id: `imported-${Date.now()}-${index}`, type, content: element.textContent?.trim() || '', url: type === 'button' ? element.getAttribute('href') || undefined : undefined, x: 24, y: 24 + index * 72, width: 330, height: 56 }
    }).filter(block => block.content)
    if (!blocks.length) throw new Error('No headings, paragraphs, or buttons were found in this HTML file.')
    commit(blocks)
    feedback.value = 'Design imported from HTML.'
  } catch (error) {
    feedback.value = error instanceof Error ? error.message : 'Could not import this design file.'
  }
}

const toggleFullscreen = async () => {
  if (document.fullscreenElement) await document.exitFullscreen()
  else await canvasStage.value?.requestFullscreen()
}

const variablePlaceholder = (name: string) => `{{${name}}}`
const insertFirstVariable = () => {
  if (selectedBlock.value && ['heading', 'text', 'button'].includes(selectedBlock.value.type)) updateSelected('content', `${selectedBlock.value.content} ${variablePlaceholder(selectedVariable.value)}`)
}
const insertFirstVariableIntoUrl = () => {
  if (selectedBlock.value?.type === 'button') updateSelected('url', `${selectedBlock.value.url || ''}${variablePlaceholder(selectedVariable.value)}`)
}
</script>

<template>
  <section class="marketing-builder" aria-label="Marketing template builder" @keydown="onKeydown">
    <span class="sr-only" role="status">{{ feedback }}</span>
    <header class="builder-toolbar">
      <div class="d-flex align-center gap-2">
        <span class="builder-title text-body-2 font-weight-medium"><VIcon icon="ri-pencil-ruler-2-line" size="18" />Builder</span>
        <VDivider vertical class="mx-1" />
        <VBtn icon="ri-arrow-go-back-line" variant="text" size="small" aria-label="Undo" :disabled="!history.length" @click="undo" />
        <VBtn icon="ri-arrow-go-forward-line" variant="text" size="small" aria-label="Redo" :disabled="!future.length" @click="redo" />
        <VDivider vertical class="mx-1" />
        <span class="text-caption text-medium-emphasis canvas-dimensions">390 × {{ canvasHeight }}</span>
      </div>
      <div class="d-flex align-center flex-wrap gap-2 builder-toolbar-actions">
        <div class="d-flex align-center">
          <VBtn icon="ri-subtract-line" variant="text" size="small" aria-label="Zoom out" :disabled="scale <= 0.35 || !!drag" @click="zoomBy(-0.1)" />
          <VBtn variant="text" size="small" class="zoom-value" aria-label="Reset zoom to 100%" :disabled="!!drag" @click="scale = 1">{{ Math.round(scale * 100) }}%</VBtn>
          <VBtn icon="ri-add-line" variant="text" size="small" aria-label="Zoom in" :disabled="scale >= 2 || !!drag" @click="zoomBy(0.1)" />
        </div>
        <VDivider vertical />
        <VBtn icon="ri-side-bar-line" color="on-surface" variant="text" size="small" aria-label="Toggle sidebar" :aria-pressed="showSidebar" @click="showSidebar = !showSidebar" />
        <VBtn icon="ri-eye-line" color="on-surface" variant="text" size="small" aria-label="Preview mode" @click="showPreview = true" />
        <VBtn icon="ri-arrow-up-down-line" color="on-surface" variant="text" size="small" aria-label="Flexible height" :aria-pressed="canvasHeightMode === 'content'" :disabled="pageMode === 'a4'" @click="canvasHeightMode = canvasHeightMode === 'content' ? 'fixed' : 'content'" />
        <VBtn icon="ri-fullscreen-line" color="on-surface" variant="text" size="small" aria-label="Fullscreen canvas" @click="toggleFullscreen" />
        <VMenu>
          <template #activator="{ props: menuProps }"><VBtn v-bind="menuProps" icon="ri-upload-2-line" color="on-surface" variant="text" size="small" aria-label="Import" /></template>
          <VList density="compact" aria-label="Import from">
            <VListSubheader>Import from</VListSubheader>
            <VListItem title="JSON design" @click="openImport('json')" />
            <VListItem title="CKEditor HTML" @click="openImport('html')" />
          </VList>
        </VMenu>
        <VMenu>
          <template #activator="{ props: menuProps }"><VBtn v-bind="menuProps" icon="ri-download-2-line" color="on-surface" variant="text" size="small" aria-label="Export" /></template>
          <VList density="compact" aria-label="Export as">
            <VListSubheader>Export as</VListSubheader>
            <VListItem title="JSON design" @click="exportDesign('json')" />
            <VListItem title="CKEditor HTML" @click="exportDesign('html')" />
          </VList>
        </VMenu>
        <VDivider vertical />
        <VBtnToggle v-model="pageMode" mandatory class="preview-mode-toggle" aria-label="Preview size">
          <VBtn value="mobile" icon="ri-smartphone-line" aria-label="Mobile preview"><VIcon icon="ri-smartphone-line" /><VTooltip activator="parent" location="top">Mobile</VTooltip></VBtn>
          <VBtn value="a4" icon="ri-file-paper-2-line" aria-label="A4 preview"><VIcon icon="ri-file-paper-2-line" /><VTooltip activator="parent" location="top">A4 page</VTooltip></VBtn>
        </VBtnToggle>
      </div>
    </header>

    <VRow no-gutters class="builder-workspace">
      <input ref="designFileInput" type="file" class="sr-only" :accept="importFormat === 'json' ? '.json,application/json' : '.html,.htm,text/html'" aria-label="Import design file" @change="importDesign">
      <VCol v-if="showSidebar" cols="12" md="3" class="builder-sidebar" tag="aside">
        <VTabs
          v-model="activePanel"
          class="builder-panel-tabs"
          :direction="smAndDown ? 'horizontal' : 'vertical'"
          :height="smAndDown ? 48 : undefined"
          :grow="smAndDown"
          color="primary"
          aria-label="Builder panels"
        >
          <VTab v-for="panel in panelTabs" :key="panel.value" :value="panel.value" :aria-label="panel.label">
            <VIcon :icon="panel.icon" size="20" class="builder-panel-tab-icon" />
            <span class="builder-panel-tab-label">{{ panel.label }}</span>
            <VTooltip v-if="!smAndDown" activator="parent" location="end">{{ panel.label }}</VTooltip>
          </VTab>
        </VTabs>

        <div v-if="activePanel === 'elements'" class="builder-panel-content">
          <section v-for="group in elementGroups" :key="group.label" class="element-group" :aria-label="group.label">
            <h3 class="text-caption text-medium-emphasis mb-2">{{ group.label }}</h3>
            <div class="element-grid" :class="{ 'element-grid--shapes': group.label === 'Shapes' }">
              <button v-for="element in group.items" :key="element.label" type="button" class="element-button" :aria-label="`Add ${element.label.toLowerCase()}`" @click="addElement(element.type, 'fontSize' in element ? element.fontSize : undefined)">
                <span v-if="'sample' in element" :class="element.typography">{{ element.sample }}</span>
                <VIcon v-else :icon="elementIcons[element.type]" size="24" />
                <span class="text-caption text-medium-emphasis">{{ element.label }}</span>
              </button>
            </div>
          </section>
        </div>

        <div v-else-if="activePanel === 'layers'" class="builder-panel-content">
          <p v-if="!modelValue.length" class="text-body-2 text-medium-emphasis">No layers yet. Add an element from Elements.</p>
          <button v-for="block in [...modelValue].reverse()" :key="block.id" type="button" class="layer-row" :class="{ selected: selectedId === block.id }" @click="selectedId = block.id">
            <VIcon :icon="block.type === 'heading' ? 'ri-text' : block.type === 'image' ? 'ri-image-line' : 'ri-square-line'" size="18" />
            <span class="text-body-2 text-truncate">{{ block.name || block.content || block.type }}</span>
          </button>
          <div v-if="selectedBlock" class="layer-actions mt-4">
            <VBtn size="small" variant="outlined" prepend-icon="ri-arrow-up-line" block :disabled="modelValue.findIndex(block => block.id === selectedId) === modelValue.length - 1" @click="reorderSelected(1)">Move forward</VBtn>
            <VBtn size="small" variant="outlined" prepend-icon="ri-arrow-down-line" block :disabled="modelValue.findIndex(block => block.id === selectedId) === 0" @click="reorderSelected(-1)">Move backward</VBtn>
          </div>
          <VBtn v-if="selectedBlock" class="mt-3" variant="text" color="error" size="small" prepend-icon="ri-delete-bin-line" @click="removeSelected">Delete selected</VBtn>
        </div>

        <div v-else-if="activePanel === 'styles'" class="builder-panel-content">
          <p class="text-body-2 text-medium-emphasis mb-0">Select an element on the canvas. Its properties appear in the right panel.</p>
        </div>
        <div v-else class="builder-panel-content">
          <VSelect v-model="selectedVariable" :items="variableOptions" label="Insert variable" class="mb-4" hide-details />
          <div class="d-flex flex-wrap gap-2 mb-4">
            <VBtn color="secondary" variant="outlined" size="small" :disabled="!selectedBlock || !['heading', 'text', 'button'].includes(selectedBlock.type)" @click="insertFirstVariable">Insert into content</VBtn>
            <VBtn color="secondary" variant="outlined" size="small" :disabled="selectedBlock?.type !== 'button'" @click="insertFirstVariableIntoUrl">Insert into button URL</VBtn>
          </div>
          <VAlert type="info" variant="tonal" density="compact" class="mb-4">
            <div class="text-body-2 font-weight-medium mb-2">Built-in variables</div>
            <div v-for="variable in builtinMarketingVariables" :key="variable.name" class="text-body-2 mb-1">{{ variablePlaceholder(variable.name) }} · {{ variable.label }}</div>
            <div class="text-caption mt-2">Filled from system data. Branch WhatsApp uses dummy numbers in this demo.</div>
          </VAlert>
          <VBtn color="primary" variant="outlined" size="small" prepend-icon="ri-add-line" class="mb-2" @click="addVariable">Add custom variable</VBtn>
          <p class="text-body-2 font-weight-medium mt-2">Custom variables</p>
          <template v-for="(variable, index) in variables" :key="index">
          <div v-if="!isBuiltinMarketingVariable(variable)" class="variable-row">
            <strong class="text-body-2">{{ variablePlaceholder(variable.name) }}</strong>
            <VTextField :model-value="variable.name" label="Variable name" density="compact" hide-details="auto" @update:model-value="updateVariable(index, 'name', String($event))" />
            <VTextField :model-value="variable.label" label="Label" density="compact" hide-details="auto" @update:model-value="updateVariable(index, 'label', String($event))" />
            <VSelect :model-value="variable.type" :items="['text', 'number', 'money', 'date']" label="Type" density="compact" hide-details="auto" @update:model-value="updateVariable(index, 'type', $event)" />
            <VBtn color="error" variant="text" size="small" @click="removeVariable(index)">Remove variable</VBtn>
          </div>
          </template>
        </div>
      </VCol>

      <VCol ref="canvasStage" cols="12" :md="showSidebar ? 6 : 9" class="canvas-stage" @wheel="onWheel">
        <div class="canvas-label text-caption text-medium-emphasis" :style="{ width: `${390 * scale}px` }"><VIcon icon="ri-artboard-line" size="14" /> Page 2</div>
        <div class="canvas-footprint" :style="{ width: `${390 * scale}px`, height: `${canvasFootprintHeight * scale}px` }">
        <div ref="canvasFrame" class="canvas-frame" :class="`canvas-frame--${pageMode}`" :style="{ transform: `scale(${scale})` }" role="region" tabindex="0" aria-label="Editable canvas. Delete removes selected element. Control or Command plus scroll zooms." @pointermove="moveCanvas" @pointerup="finishDrag" @pointercancel="cancelDrag" @lostpointercapture="cancelDrag">
        <MarketingCanvas :blocks="modelValue" :selected-id="selectedId" :height="canvasHeight" :dragging="!!drag" editable :page-mode="pageMode" @select="selectedId = $event" @drag="startDrag" @resize="startResize" />
        <div v-if="baseMargin > 0" class="canvas-margin-guide" :style="{ inset: `${baseMargin}px` }" aria-hidden="true" />
        </div>
        </div>
        <VAlert v-if="pageMode === 'a4' && a4Overflow" type="warning" variant="tonal" density="compact" class="canvas-warning">Some content extends beyond the A4 page limit.</VAlert>
      </VCol>
      <VCol cols="12" md="3" class="builder-properties" tag="aside" aria-label="Canvas and element properties">
        <div class="property-heading d-flex align-center justify-space-between gap-2">
          <h3 class="text-body-2 font-weight-medium mb-0">{{ selectedBlock ? selectedBlock.type.charAt(0).toUpperCase() + selectedBlock.type.slice(1) : 'Canvas' }}</h3>
          <div v-if="selectedBlock" class="d-flex align-center gap-1">
            <VTooltip text="Canvas properties"><template #activator="{ props: tooltipProps }"><VBtn v-bind="tooltipProps" icon="ri-artboard-line" color="secondary" variant="text" size="x-small" aria-label="Canvas properties" @click="selectedId = ''" /></template></VTooltip>
            <VTooltip text="Delete element"><template #activator="{ props: tooltipProps }"><VBtn v-bind="tooltipProps" icon="ri-delete-bin-line" color="secondary" variant="text" size="x-small" aria-label="Delete element" @click="removeSelected" /></template></VTooltip>
          </div>
        </div>
        <div class="property-fields">
          <template v-if="selectedBlock">
            <MarketingElementProperties :key="selectedBlock.id" :block="selectedBlock" :canvas-height="canvasHeight" :can-forward="modelValue.findIndex(block => block.id === selectedId) < modelValue.length - 1" :can-backward="modelValue.findIndex(block => block.id === selectedId) > 0" @patch="patchSelected" @reorder="reorderSelected">
            <template v-if="selectedBlock.type === 'image'" #media>
              <input ref="imageInput" type="file" accept="image/jpeg,image/png,image/webp" class="sr-only" tabindex="-1" aria-label="Upload image file" @change="uploadImage">
              <img v-if="selectedBlock.imageSrc" :src="selectedBlock.imageSrc" :alt="selectedBlock.content" class="property-image">
              <VBtn color="primary" variant="outlined" prepend-icon="ri-upload-2-line" :loading="imageBusy" :disabled="imageBusy" @click="imageInput?.click()">{{ selectedBlock.imageSrc ? 'Replace image' : 'Upload image' }}</VBtn>
              <p class="text-caption text-medium-emphasis mb-0">JPG, PNG or WebP · Up to 5 MB. Optimized and saved in this browser.</p>
              <VAlert v-if="imageError" type="error" variant="tonal" density="compact" class="text-body-2" role="alert">{{ imageError }}</VAlert>
              <VBtn v-if="selectedBlock.imageSrc" color="error" variant="text" size="small" :disabled="imageBusy" @click="updateSelected('imageSrc', undefined)">Remove image</VBtn>
            </template>
            </MarketingElementProperties>
          </template>
        </div>
        <template v-if="!selectedBlock">
          <section class="canvas-size" aria-label="Canvas size">
            <h4 class="text-caption text-medium-emphasis mb-4">Size</h4>
            <VTextField label="W" :model-value="390" readonly hide-details density="compact" variant="outlined" class="mb-3" />
            <VTextField label="H" :model-value="canvasHeight" readonly hide-details density="compact" variant="outlined" />
            <VSelect v-model="canvasHeightMode" :items="[{ title: 'Fixed height', value: 'fixed' }, { title: 'Fit content', value: 'content' }]" label="Height" density="compact" variant="outlined" hide-details class="mt-3" :disabled="pageMode === 'a4'" />
            <p class="text-caption text-medium-emphasis mt-3 mb-0">{{ pageMode === 'a4' ? 'A4 page · Fixed height' : canvasHeightMode === 'content' ? 'Mobile page · Fits content' : 'Mobile page · Fixed at 400 px' }}</p>
            <VDivider class="my-4" />
            <h4 class="text-caption text-medium-emphasis mb-3">Layout</h4>
            <VTextField :model-value="baseMargin" label="Base margin" suffix="px" type="number" min="0" max="96" step="1" density="compact" variant="outlined" hint="Fit content keeps this space below the last element. Existing positions stay unchanged." persistent-hint @update:model-value="updateBaseMargin" />
          </section>
          <p class="property-empty text-body-2 text-medium-emphasis">Select an element to edit its properties.</p>
        </template>
      </VCol>
    </VRow>
    <VDialog v-model="showPreview" max-width="520">
      <VCard title="Design preview">
        <VCardText><div class="builder-preview"><MarketingCanvas :blocks="modelValue" :height="canvasHeight" :page-mode="pageMode" /></div></VCardText>
        <VCardActions class="justify-end pa-4"><VBtn color="secondary" variant="outlined" @click="showPreview = false">Close</VBtn></VCardActions>
      </VCard>
    </VDialog>
  </section>
</template>

<style scoped>
.marketing-builder { overflow: hidden; border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 12px; background: rgb(var(--v-theme-surface)); }
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.property-image { display: block; width: 100%; max-height: 112px; object-fit: contain; border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px; }
.builder-toolbar { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; padding: 8px 16px; border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); }
.builder-toolbar-actions :deep(.v-btn) { min-width: 36px; }
.builder-workspace { min-height: 660px; align-items: stretch; }
.builder-sidebar { min-width: 0; border-right: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); }
.builder-workspace > .builder-properties { min-width: 0; max-height: 900px; overflow-y: auto; padding: 0 16px 20px; border-inline-start: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); }
.builder-title { display: inline-flex; align-items: center; gap: 8px; white-space: nowrap; }
.zoom-value { min-width: 40px; text-align: center; font-variant-numeric: tabular-nums; }
.property-heading { position: sticky; top: 0; z-index: 1; min-height: 48px; margin-inline: -16px; margin-bottom: 20px; padding: 8px 16px; border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); background: rgb(var(--v-theme-surface)); }
.canvas-size { padding-bottom: 20px; }
.property-empty { margin: 0 -16px; padding: 24px 16px; border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); }
.property-fields { display: flex; flex-direction: column; gap: 16px; }
.property-fields :deep(.v-input) { min-width: 0; }
.property-fields > .d-flex { flex-wrap: wrap; }
.property-fields > .d-flex > .v-input { flex: 1 1 72px; }
.canvas-dimensions { padding: 4px 8px; border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 6px; white-space: nowrap; }
.builder-preview { display: flex; justify-content: safe center; overflow: auto; padding: 12px; background: rgb(var(--v-theme-background)); }
.builder-panel-tabs { border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); }
.builder-panel-tabs :deep(.v-tab) { min-width: 0 !important; padding-inline: 8px; font-size: 0.8125rem; letter-spacing: normal; text-transform: none; }
.builder-panel-tabs :deep(.v-slide-group__prev), .builder-panel-tabs :deep(.v-slide-group__next) { min-width: 24px; flex-basis: 24px; }
.builder-panel-tab-icon { display: none; }
.builder-panel-tab-label { display: inline; }
.builder-panel-content { padding: 16px; }
.layer-actions { display: flex; flex-direction: column; gap: 12px; }
.layer-row > span { min-width: 0; }
.element-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
.element-group + .element-group { margin-top: 24px; }
.element-group h3 { font-weight: 400; }
.element-grid--shapes { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.element-button { display: flex; min-width: 0; flex-direction: column; align-items: center; justify-content: center; gap: 8px; padding: 8px 4px; block-size: 80px; border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px; background: rgb(var(--v-theme-surface)); color: rgb(var(--v-theme-on-surface)); cursor: pointer; }
.element-button > span { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.element-button:focus-visible { outline: 2px solid rgb(var(--v-theme-primary)); outline-offset: 2px; }
.element-button:active { background: rgba(var(--v-theme-primary), .16); }
@media (hover: hover) and (pointer: fine) {
  .element-button:hover { border-color: rgb(var(--v-theme-primary)); background: rgba(var(--v-theme-primary), .08); }
}
.layer-row:focus-visible { outline: 2px solid rgb(var(--v-theme-primary)); outline-offset: -2px; }
.layer-row { display: flex; width: 100%; align-items: center; gap: 10px; padding: 10px; border: 0; border-radius: 6px; background: transparent; color: rgb(var(--v-theme-on-surface)); text-align: left; cursor: pointer; }
.layer-row.selected { background: rgba(var(--v-theme-primary), .1); color: rgb(var(--v-theme-primary)); }
.variable-row { display: flex; flex-direction: column; align-items: stretch; gap: 20px; padding: 20px 0; border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); }
.variable-row > strong { overflow-wrap: anywhere; }
.variable-row > .v-btn { align-self: flex-start; }
.builder-workspace > .canvas-stage { display: flex; min-width: 0; flex-direction: column; align-items: safe center; overflow: auto; padding: 28px 24px; background: rgb(var(--v-theme-background)); }
.builder-workspace > .canvas-stage:fullscreen { width: 100vw; height: 100vh; align-items: safe center; padding: 32px; }
.canvas-label { display: flex; align-items: center; gap: 4px; margin-bottom: 8px; }
.canvas-footprint { flex: 0 0 auto; }
.canvas-frame { position: relative; width: 390px; transform-origin: top left; }
.canvas-margin-guide { position: absolute; z-index: 2; border: 1px dashed rgba(var(--v-theme-primary), .4); pointer-events: none; }
.canvas-frame:focus-visible { outline: 2px solid rgb(var(--v-theme-primary)); outline-offset: 6px; }
.canvas-frame :deep(.marketing-canvas) { border-radius: 0; box-shadow: 0 2px 8px rgba(var(--v-theme-on-surface), .08); }
.canvas-warning { flex: 0 0 auto; width: min(100%, 390px); min-height: 0; align-items: start; margin-top: 16px; }
@media (max-width: 959px) {
  .builder-sidebar { border-right: 0; border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); }
  .builder-panel-tab-icon { display: none; }
  .builder-panel-tab-label { display: inline; }
  .builder-properties { border-inline-start: 0; border-block-start: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); }
  .builder-panel-content { max-height: 250px; overflow: auto; }
  .canvas-stage { min-height: 600px; padding: 28px 12px; }
}
@media (min-width: 960px) {
  .builder-sidebar { position: relative; display: flex; max-height: 940px; overflow: hidden; }
  .builder-sidebar::after { position: absolute; z-index: 1; inset-block: 0; inset-inline-start: 48px; width: 1px; background: rgba(var(--v-border-color), var(--v-border-opacity)); content: ''; pointer-events: none; }
  .builder-panel-tabs { flex: 0 0 48px; align-self: stretch; width: 48px; padding-block-start: 8px; border-bottom: 0; }
  .builder-panel-tabs :deep(.v-tab) { width: 48px; min-width: 48px !important; justify-content: center; padding-inline: 0; }
  .builder-panel-tabs :deep(.v-tab--selected) { background: transparent; }
  .builder-panel-tabs :deep(.v-tab--selected .v-btn__overlay) { inset: 0; width: 32px; height: 32px; margin: auto; border-radius: 4px; background: rgba(var(--v-theme-primary), .12); opacity: 1; }
  .builder-panel-tabs :deep(.v-tab__slider) { display: none; }
  .builder-panel-tabs :deep(.v-slide-group__prev), .builder-panel-tabs :deep(.v-slide-group__next) { display: none; }
  .builder-panel-tab-icon { display: inline-flex; }
  .builder-panel-tab-label { display: none; }
  .builder-panel-content { flex: 1 1 auto; min-width: 0; max-height: 940px; overflow: auto; }
  .builder-properties { max-height: 940px; overflow-y: auto; }
  :is(.builder-sidebar, .builder-properties) { font-size: 12px; line-height: 18px; }
  :is(.builder-sidebar, .builder-properties) :deep(.text-body-1),
  :is(.builder-sidebar, .builder-properties) :deep(.text-body-2),
  :is(.builder-sidebar, .builder-properties) :deep(.v-field__input),
  :is(.builder-sidebar, .builder-properties) :deep(.v-btn) { font-size: 12px !important; line-height: 18px; letter-spacing: normal !important; }
  :is(.builder-sidebar, .builder-properties) :deep(.text-caption),
  :is(.builder-sidebar, .builder-properties) :deep(.v-messages) { font-size: 11px !important; line-height: 16px; letter-spacing: normal !important; }
  :is(.builder-sidebar, .builder-properties) :deep(.v-label) { font-size: 12px; }
  :is(.builder-sidebar, .builder-properties) :deep(.v-field-label--floating) { font-size: 13px; }
  :is(.builder-sidebar, .builder-properties) :deep(h3),
  :is(.builder-sidebar, .builder-properties) :deep(h4) { font-size: 13px !important; line-height: 18px; }
  .element-button > span:first-child:not(.text-caption) { font-size: 13px !important; line-height: 18px; }
  .element-button { block-size: 64px; gap: 4px; }
  .element-group + .element-group { margin-top: 16px; }
  .property-heading { margin-bottom: 12px; }
  .builder-properties :deep(.property-section) { gap: 8px; padding-block: 16px; }
  .builder-properties :deep(.property-section:first-child) { padding-top: 0; }
}
@media (max-width: 480px) {
  .builder-toolbar { align-items: flex-start; }
  .canvas-stage { align-items: flex-start; }
}
</style>

<style scoped src="@/assets/styles/marketing-preview-toggle.css"></style>
