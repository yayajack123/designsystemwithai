<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import MarketingPreviewDocument from '@/components/marketing/MarketingPreviewDocument.vue'
import { studentRecords } from '@/data/students'
import {
  branchCountry,
  builtinMarketingVariables,
  isBuiltinMarketingVariable,
  marketingBranchWhatsapp,
  marketingCourses,
  resolveMarketingValues,
  targetMarketingBranches,
  templateDisplayStatus,
  usedMarketingVariables,
  type MarketingBlock,
  type MarketingTemplate,
} from '@/composables/useMarketingTemplates'

const props = defineProps<{ modelValue: boolean; template: MarketingTemplate | null }>()
const emit = defineEmits<{ 'update:modelValue': [boolean] }>()

const drawerModel = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})
const activeTab = ref('overview')
const previewMode = ref<'a4' | 'mobile'>('a4')
const previewBranch = ref('')
const branches = computed(() => props.template ? targetMarketingBranches(props.template) : [])
const customVariables = computed(() => props.template?.variables.filter(variable => !isBuiltinMarketingVariable(variable)) || [])
const resolvedProfile = computed(() => {
  const template = props.template
  const branch = previewBranch.value || branches.value[0] || ''
  const country = branch ? branchCountry(branch) : template?.country === 'All countries' ? 'Indonesia' : template?.country || 'Indonesia'

  return {
    id: 'marketing-template-preview',
    code: 'PREVIEW',
    initials: 'CM',
    name: studentRecords[0]?.name || 'Sample student',
    country,
    branch,
    branchWhatsapp: marketingBranchWhatsapp(branch),
    course: template?.courses?.[0] || marketingCourses[0] || '',
  }
})
const resolvedValues = computed(() => props.template ? resolveMarketingValues(props.template, resolvedProfile.value) : {})
const builtinPreviewRows = computed(() => builtinMarketingVariables.map(variable => {
  const saved = props.template?.variables.find(item => item.name === variable.name)

  return {
    ...variable,
    value: resolvedValues.value[variable.name] || '',
    savedDefault: saved?.defaultValue || '',
    branchValues: saved?.branchValues || {},
  }
}))
const unresolvedVariables = computed(() => {
  if (!props.template) return []

  const known = new Set([...builtinMarketingVariables.map(variable => variable.name), ...props.template.variables.map(variable => variable.name)])

  return usedMarketingVariables(props.template.blocks).filter(name => !known.has(name))
})

watch(() => props.template?.id, () => {
  activeTab.value = 'overview'
  previewMode.value = 'a4'
  previewBranch.value = branches.value[0] || ''
})

const displayStatus = (template: MarketingTemplate) => templateDisplayStatus(template)
const statusColor = (status: string) => status === 'Active' ? 'success' : status === 'Scheduled' ? 'warning' : status === 'Draft' ? 'secondary' : 'error'
const dateLabel = (value?: string) => {
  if (!value) return 'Not set'
  const date = new Date(`${value.slice(0, 10)}T00:00:00`)

  return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(date)
}
const dateTimeLabel = (value?: string) => {
  if (!value) return 'Not set'
  const date = new Date(value)

  return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(date)
}
const valueLabel = (value: unknown) => value === undefined || value === null || value === '' ? 'Not set' : String(value)
const placeholderLabel = (name: string) => `{{${name}}}`
const ageLabel = (template: MarketingTemplate) => {
  if (template.ageMin === undefined && template.ageMax === undefined) return 'Any age'
  if (template.ageMin === undefined) return `Up to ${template.ageMax}`
  if (template.ageMax === undefined) return `${template.ageMin}+`

  return `${template.ageMin}–${template.ageMax}`
}
const blockTypeLabel = (type: MarketingBlock['type']) => type.charAt(0).toUpperCase() + type.slice(1)
const imageSourceLabel = (source: string) => {
  if (!source.startsWith('data:')) return source

  const mimeType = source.match(/^data:([^;,]+)/)?.[1]

  return `Embedded image asset${mimeType ? ` · ${mimeType}` : ''}`
}
const blockSettings = (block: MarketingBlock) => {
  const rows = [
    { label: 'Element ID', value: block.id },
    { label: 'Type', value: blockTypeLabel(block.type) },
    { label: 'Name', value: valueLabel(block.name) },
    { label: block.type === 'image' ? 'Alternative text' : 'Content', value: block.content || 'Empty' },
    { label: 'Position', value: `X ${block.x}px · Y ${block.y}px` },
    { label: 'Size', value: `${block.width} × ${block.height}px` },
  ]

  if (block.color !== undefined) rows.push({ label: 'Color', value: block.color })
  if (block.fontSize !== undefined) rows.push({ label: 'Font size', value: `${block.fontSize}px` })
  if (block.imageSrc) rows.push({ label: 'Image source', value: imageSourceLabel(block.imageSrc) })
  if (block.type === 'button') {
    rows.push({ label: 'Button URL', value: valueLabel(block.url) })
    rows.push({ label: 'Link target', value: block.linkTarget === '_self' ? 'Same tab' : 'New tab' })
    rows.push({ label: 'Button icon', value: block.buttonIcon || 'No icon' })
  }

  const style = block.style
  if (style?.fontFamily !== undefined) rows.push({ label: 'Font family', value: style.fontFamily })
  if (style?.fontWeight !== undefined) rows.push({ label: 'Font weight', value: String(style.fontWeight) })
  if (style?.textColor !== undefined) rows.push({ label: 'Text color', value: style.textColor })
  if (style?.textAlign !== undefined) rows.push({ label: 'Text alignment', value: style.textAlign })
  if (style?.textStrokeWidth !== undefined) rows.push({ label: 'Text stroke width', value: `${style.textStrokeWidth}px` })
  if (style?.textStrokeColor !== undefined) rows.push({ label: 'Text stroke color', value: style.textStrokeColor })
  if (style?.padding !== undefined) rows.push({ label: 'Padding', value: `Top ${style.padding.top}px · Right ${style.padding.right}px · Bottom ${style.padding.bottom}px · Left ${style.padding.left}px` })
  if (style?.fill !== undefined) rows.push({ label: 'Fill', value: style.fill })
  if (style?.borderWidth !== undefined) rows.push({ label: 'Border width', value: `${style.borderWidth}px` })
  if (style?.borderColor !== undefined) rows.push({ label: 'Border color', value: style.borderColor })
  if (style?.radius !== undefined) rows.push({ label: 'Corner radius', value: `TL ${style.radius.topLeft}px · TR ${style.radius.topRight}px · BR ${style.radius.bottomRight}px · BL ${style.radius.bottomLeft}px` })
  if (style?.opacity !== undefined) rows.push({ label: 'Opacity', value: `${style.opacity}%` })
  if (style?.imageFit !== undefined) rows.push({ label: 'Image fit', value: style.imageFit })
  for (const [name, value] of Object.entries(block.dataAttributes || {})) rows.push({ label: `data-${name}`, value })

  return rows
}
const variableBranchRows = (variable: MarketingTemplate['variables'][number]) => {
  const configuredBranches = Object.keys(variable.branchValues || {})
  const allBranches = [...new Set([...branches.value, ...configuredBranches])]

  return allBranches.map(branch => {
    const override = variable.branchValues?.[branch]

    return {
      branch,
      value: override !== undefined && override !== '' ? override : variable.defaultValue ? `Uses default · ${variable.defaultValue}` : 'Not set',
      isOverride: override !== undefined && override !== '',
    }
  })
}
</script>

<template>
  <VNavigationDrawer v-model="drawerModel" temporary location="right" :width="860" class="template-details-drawer" aria-label="Template details">
    <template v-if="template">
      <header class="template-details-header">
        <div class="min-width-0">
          <div class="d-flex align-center flex-wrap gap-2">
            <h2 class="text-h6 mb-0">{{ template.name || 'Untitled template' }}</h2>
            <VChip :color="statusColor(displayStatus(template))" variant="tonal" size="small">{{ displayStatus(template) }}</VChip>
          </div>
          <p class="text-body-2 text-medium-emphasis mb-0 mt-1">{{ template.country }} · {{ template.isDefault ? (template.defaultScope === 'global' ? 'Global default' : 'Country default') : template.branches.length ? `${template.branches.length} selected branch${template.branches.length === 1 ? '' : 'es'}` : 'All branches' }}</p>
        </div>
        <VBtn icon="ri-close-line" variant="text" color="secondary" aria-label="Close template details" @click="drawerModel = false" />
      </header>
      <VDivider />

      <VTabs v-model="activeTab" class="template-details-tabs flex-shrink-0" color="primary" :height="48" grow aria-label="Template detail sections">
        <VTab value="overview">Overview</VTab>
        <VTab value="audience">Audience</VTab>
        <VTab value="design">Design</VTab>
        <VTab value="variables">Variables</VTab>
      </VTabs>

      <div class="template-details-scroll">
        <div v-if="activeTab === 'overview'">
            <section class="detail-section">
              <h3 class="text-body-1 font-weight-medium mb-4">Campaign information</h3>
              <dl class="template-detail-grid">
                <div><dt>Template ID</dt><dd><code>{{ template.id }}</code></dd></div>
                <div><dt>Saved status</dt><dd>{{ template.status }}</dd></div>
                <div><dt>Availability</dt><dd>{{ dateLabel(template.periodStart) }} – {{ dateLabel(template.periodEnd) }}</dd></div>
                <div><dt>Priority</dt><dd>{{ template.priority }} <span class="text-medium-emphasis">· lower number wins</span></dd></div>
                <div><dt>Default campaign</dt><dd>{{ template.isDefault ? (template.defaultScope === 'global' ? 'Yes · global fallback' : 'Yes · country fallback') : 'No' }}</dd></div>
                <div><dt>Created</dt><dd>{{ dateTimeLabel(template.createdAt) }}</dd></div>
                <div><dt>Last updated</dt><dd>{{ dateTimeLabel(template.updatedAt) }}</dd></div>
              </dl>
            </section>
        </div>

        <div v-else-if="activeTab === 'audience'">
            <section class="detail-section">
              <h3 class="text-body-1 font-weight-medium mb-4">Audience filters</h3>
              <dl class="template-detail-grid">
                <div><dt>Country</dt><dd>{{ template.country }}</dd></div>
                <div><dt>Age range</dt><dd>{{ ageLabel(template) }}<span v-if="template.ageMin !== undefined || template.ageMax !== undefined"> years</span></dd></div>
                <div class="detail-grid-wide">
                  <dt>Branches</dt>
                  <dd>
                    <div class="template-detail-chips">
                      <VChip v-if="!template.branches.length" size="small" variant="tonal" color="primary">All branches</VChip>
                      <VChip v-for="branch in template.branches" :key="branch" size="small" variant="tonal">{{ branch }}</VChip>
                    </div>
                    <p v-if="!template.branches.length && branches.length" class="text-caption text-medium-emphasis mt-2 mb-0">{{ branches.join(' · ') }}</p>
                  </dd>
                </div>
                <div class="detail-grid-wide">
                  <dt>Courses</dt>
                  <dd>
                    <div class="template-detail-chips">
                      <VChip v-if="!template.courses?.length" size="small" variant="tonal" color="primary">All courses</VChip>
                      <VChip v-for="course in template.courses" :key="course" size="small" variant="tonal">{{ course }}</VChip>
                    </div>
                  </dd>
                </div>
                <div v-if="template.isDefault" class="detail-grid-wide"><dt>Default scope</dt><dd>{{ template.defaultScope === 'global' ? 'Global · applies when no campaign matches' : `Country · ${template.country}` }}</dd></div>
              </dl>
            </section>
        </div>

        <div v-else-if="activeTab === 'design'">
            <section class="detail-section">
              <div class="d-flex align-center justify-space-between flex-wrap gap-3 mb-4">
                <div><h3 class="text-body-1 font-weight-medium mb-1">Page 2 design</h3><p class="text-caption text-medium-emphasis mb-0">Sample values are resolved for the selected branch.</p></div>
                <VBtnToggle v-model="previewMode" class="marketing-preview-segment" mandatory divided color="primary" variant="outlined" density="comfortable" aria-label="Template preview format">
                  <VBtn value="a4">A4</VBtn>
                  <VBtn value="mobile">Mobile</VBtn>
                </VBtnToggle>
              </div>
              <VSelect :model-value="previewBranch || branches[0] || null" :items="branches" label="Preview branch" hide-details :disabled="!branches.length" class="mb-4" @update:model-value="previewBranch = String($event || '')" />
              <VCard variant="outlined" class="template-design-thumbnail">
                <VCardText class="pa-3"><MarketingPreviewDocument :blocks="template.blocks" :base-margin="template.baseMargin" :values="resolvedValues" :mode="previewMode" content="page2" /></VCardText>
              </VCard>
              <p class="text-caption text-medium-emphasis mt-3 mb-0">Preview only. It does not change the saved template. Branch WhatsApp values are demo data in this browser.</p>
            </section>
            <VDivider />
            <section class="detail-section">
              <div class="d-flex align-center justify-space-between gap-3 mb-4"><h3 class="text-body-1 font-weight-medium mb-0">Design elements</h3><VChip size="small" variant="tonal">{{ template.blocks.length }}</VChip></div>
              <VAlert v-if="!template.blocks.length" type="info" variant="tonal">This template has no design elements.</VAlert>
              <VExpansionPanels v-else variant="accordion" class="element-detail-panels">
                <VExpansionPanel v-for="block in template.blocks" :key="block.id" :value="block.id">
                  <VExpansionPanelTitle>
                    <div class="element-detail-title">
                      <span class="text-body-2 font-weight-medium">{{ block.name || block.content || blockTypeLabel(block.type) }}</span>
                      <span class="text-caption text-medium-emphasis">{{ blockTypeLabel(block.type) }} · X {{ block.x }}, Y {{ block.y }} · {{ block.width }} × {{ block.height }}</span>
                    </div>
                  </VExpansionPanelTitle>
                  <VExpansionPanelText>
                    <dl class="element-settings-list">
                      <div v-for="setting in blockSettings(block)" :key="setting.label"><dt>{{ setting.label }}</dt><dd>{{ setting.value }}</dd></div>
                    </dl>
                  </VExpansionPanelText>
                </VExpansionPanel>
              </VExpansionPanels>
            </section>
        </div>

        <div v-else-if="activeTab === 'variables'">
            <section class="detail-section">
              <h3 class="text-body-1 font-weight-medium mb-1">Built-in variables</h3>
              <p class="text-body-2 text-medium-emphasis mb-4">These values come from the student and branch profile. Examples use {{ previewBranch || branches[0] || 'the selected branch' }}.</p>
              <dl class="template-detail-grid">
                <div v-for="variable in builtinPreviewRows" :key="variable.name">
                  <dt>{{ variable.label }} <code>{{ placeholderLabel(variable.name) }}</code></dt>
                  <dd>{{ valueLabel(variable.value) }}</dd>
                  <p v-if="variable.savedDefault" class="text-caption text-medium-emphasis mb-0 mt-1">Saved default: {{ variable.savedDefault }}</p>
                  <p v-for="(value, branch) in variable.branchValues" :key="branch" class="text-caption text-medium-emphasis mb-0 mt-1">{{ branch }}: {{ valueLabel(value) }}</p>
                </div>
              </dl>
            </section>
            <VDivider />
            <section class="detail-section">
              <div class="d-flex align-center justify-space-between gap-3 mb-4"><h3 class="text-body-1 font-weight-medium mb-0">Custom variables</h3><VChip size="small" variant="tonal">{{ customVariables.length }}</VChip></div>
              <VAlert v-if="!customVariables.length" type="info" variant="tonal">No custom variables are configured.</VAlert>
              <VExpansionPanels v-else variant="accordion" class="element-detail-panels">
                <VExpansionPanel v-for="variable in customVariables" :key="variable.name" :value="variable.name">
                  <VExpansionPanelTitle>
                    <div class="element-detail-title">
                      <span class="text-body-2 font-weight-medium">{{ variable.label || variable.name }}</span>
                      <span class="text-caption text-medium-emphasis"><code>{{ placeholderLabel(variable.name) }}</code> · {{ variable.type }}</span>
                    </div>
                  </VExpansionPanelTitle>
                  <VExpansionPanelText>
                    <dl class="element-settings-list">
                      <div><dt>Variable name</dt><dd>{{ variable.name }}</dd></div>
                      <div><dt>Label</dt><dd>{{ valueLabel(variable.label) }}</dd></div>
                      <div><dt>Type</dt><dd>{{ variable.type }}</dd></div>
                      <div><dt>Default value</dt><dd>{{ valueLabel(variable.defaultValue) }}</dd></div>
                      <div v-for="row in variableBranchRows(variable)" :key="row.branch"><dt>{{ row.branch }}{{ row.isOverride ? ' · override' : '' }}</dt><dd>{{ row.value }}</dd></div>
                    </dl>
                  </VExpansionPanelText>
                </VExpansionPanel>
              </VExpansionPanels>
              <VAlert v-if="unresolvedVariables.length" type="warning" variant="tonal" class="mt-4">Unconfigured placeholders: {{ unresolvedVariables.map(placeholderLabel).join(', ') }}</VAlert>
            </section>
        </div>
      </div>
    </template>
  </VNavigationDrawer>
</template>

<style src="@/assets/styles/marketing-preview-segment.css"></style>

<style scoped>
.template-details-drawer { --v-navigation-drawer-width: 860px; max-width: 100vw; }
.template-details-drawer :deep(.v-navigation-drawer__content) { display: flex; flex-direction: column; overflow: hidden; background: rgb(var(--v-theme-surface)); color: rgb(var(--v-theme-on-surface)); }
.template-details-header { display: flex; flex: 0 0 auto; min-height: 76px; align-items: flex-start; justify-content: space-between; gap: 16px; padding: 20px 24px 16px; background: rgb(var(--v-theme-surface)); }
.template-details-drawer :deep(.v-navigation-drawer__content > .v-divider) { flex: 0 0 auto; }
.template-details-tabs { flex: 0 0 auto; min-height: 48px; background: rgb(var(--v-theme-surface)); }
.template-details-tabs :deep(.v-tab.v-btn) { height: var(--v-tabs-height); border-radius: 0; }
.template-details-tabs.v-tabs--horizontal :deep(.v-tab__slider) { inset-block-end: 0; }
.template-details-scroll { flex: 1 1 0; min-height: 0; overflow-y: auto; overscroll-behavior: contain; }
.detail-section { padding: 24px; }
.template-detail-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px 24px; margin: 0; }
.template-detail-grid > div { min-width: 0; }
.template-detail-grid dt, .element-settings-list dt { margin-bottom: 4px; color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity)); font-size: .8125rem; }
.template-detail-grid dd, .element-settings-list dd { margin: 0; color: rgb(var(--v-theme-on-surface)); overflow-wrap: anywhere; }
.template-detail-grid code, .element-detail-title code { color: inherit; font-size: .9em; }
.detail-grid-wide { grid-column: 1 / -1; }
.template-detail-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.template-design-thumbnail { width: 100%; max-width: 200px; margin-inline: auto; overflow: hidden; background: rgb(var(--v-theme-background)); }
.element-detail-panels { border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px; }
.element-detail-title { display: flex; min-width: 0; flex-direction: column; gap: 4px; }
.element-detail-title > span { overflow-wrap: anywhere; }
.element-settings-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px 20px; margin: 0; }
.element-settings-list > div { min-width: 0; }
@media (max-width: 600px) {
  .template-details-drawer { --v-navigation-drawer-width: 100vw !important; width: 100vw !important; }
  .template-details-header { min-height: 80px; padding: 16px; }
  .detail-section { padding: 20px 16px; }
  .template-detail-grid, .element-settings-list { grid-template-columns: minmax(0, 1fr); }
  .detail-grid-wide { grid-column: auto; }
  .template-details-tabs :deep(.v-tab) { min-width: 0; padding-inline: 8px; font-size: .75rem; }
}
</style>
