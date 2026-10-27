<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MarketingTemplateDetailsDrawer from '@/components/marketing/MarketingTemplateDetailsDrawer.vue'
import UiTableView from '@/components/ui/UiTableView.vue'
import UiSectionHeader from '@/components/ui/UiSectionHeader.vue'
import { isBuiltinMarketingVariable, templateDisplayStatus, useMarketingTemplates, type MarketingTemplate } from '@/composables/useMarketingTemplates'

definePageMeta({ path: '/marketing/templates', sidebarRoute: 'marketing-templates' })

const route = useRoute()
const router = useRouter()
const { templates, duplicateTemplate } = useMarketingTemplates()
const query = ref('')
const selected = ref<string[]>([])
const previewTemplate = ref<MarketingTemplate | null>(null)
const previewDrawerOpen = ref(false)
const toast = ref('')
const activeStatus = computed(() => typeof route.query.status === 'string' ? route.query.status : 'All')
const statuses = ['All', 'Draft', 'Scheduled', 'Active', 'Expired', 'Inactive']
const statusCards = [
  { label: 'Total templates', status: 'All', description: 'Across all statuses', icon: 'ri-file-list-3-line' },
  { label: 'Active now', status: 'Active', description: 'Published templates', icon: 'ri-checkbox-circle-line' },
  { label: 'Scheduled', status: 'Scheduled', description: 'Upcoming campaigns', icon: 'ri-calendar-line' },
  { label: 'Drafts', status: 'Draft', description: 'Not yet published', icon: 'ri-draft-line' },
]
const headers = [
  { title: 'Name', key: 'name', sortable: true, minWidth: 320 },
  { title: 'Status', key: 'displayStatus', sortable: true, minWidth: 120 },
  { title: 'Period', key: 'period', sortable: false, minWidth: 180 },
  { title: 'Filters', key: 'filters', sortable: false, minWidth: 390 },
  { title: 'Priority', key: 'priority', sortable: true, minWidth: 100 },
  { title: 'Last modified', key: 'updatedAt', sortable: true, minWidth: 160 },
  { title: 'Actions', key: 'actions', sortable: false, align: 'end', minWidth: 140 },
]

const filterLabels = (template: MarketingTemplate) => {
  if (template.isDefault) return [`Default · ${template.country}`]

  const labels = [template.country]

  if (template.branches.length === 1) labels.push(template.branches[0])
  else if (template.branches.length > 1) labels.push(`${template.branches.length} branches`)
  else labels.push('All branches')

  if (template.ageMin !== undefined || template.ageMax !== undefined) {
    labels.push(`Age ${template.ageMin ?? 0}–${template.ageMax ?? '+'}`)
  }

  const courses = template.courses || []
  if (courses.length <= 2) labels.push(...courses)
  else labels.push(`${courses[0]}, ${courses[1]} +${courses.length - 2}`)

  return labels
}

const rows = computed(() => templates.value.map(template => ({
  ...template,
  displayStatus: templateDisplayStatus(template),
  period: template.isDefault ? 'Always on' : `${template.periodStart} – ${template.periodEnd}`,
  filters: filterLabels(template),
  customVariableCount: template.variables.filter(variable => !isBuiltinMarketingVariable(variable)).length,
})))
const filtered = computed(() => rows.value.filter(template => {
  const matchesStatus = activeStatus.value === 'All' || template.displayStatus === activeStatus.value
  const matchesQuery = !query.value.trim() || `${template.name} ${template.country} ${template.branches.join(' ')} ${(template.courses || []).join(' ')}`.toLowerCase().includes(query.value.toLowerCase().trim())
  return matchesStatus && matchesQuery
}))
const counts = computed<Record<string, number>>(() => Object.fromEntries(statuses.map(status => [status, status === 'All' ? templates.value.length : rows.value.filter(row => row.displayStatus === status).length])) as Record<string, number>)

watch(activeStatus, status => {
  if (status !== route.query.status) router.replace({ query: { ...route.query, ...(status === 'All' ? { status: undefined } : { status }) } })
})

const setStatus = (status: string) => router.push({ query: { ...route.query, ...(status === 'All' ? { status: undefined } : { status }) } })
const notify = (message: string) => { toast.value = message }
const openPreview = (template: MarketingTemplate) => {
  previewTemplate.value = template
  previewDrawerOpen.value = true
}

const removeTemplate = (template: MarketingTemplate) => {
  if (template.isDefault) return notify('Default templates are required and cannot be deleted.')
  if (!window.confirm(`Delete “${template.name}”?`)) return
  templates.value = templates.value.filter(item => item.id !== template.id)
  selected.value = selected.value.filter(id => id !== template.id)
  notify('Template deleted.')
}

const removeDefaultRole = (template: MarketingTemplate) => {
  if (!template.isDefault) return
  template.isDefault = false
  template.defaultScope = undefined
  template.status = 'Inactive'
  template.updatedAt = new Date().toISOString()
  notify('Default role removed.')
}

const statusColor = (status: string) => status === 'Active' ? 'success' : status === 'Scheduled' ? 'info' : status === 'Draft' ? 'warning' : status === 'Expired' ? 'secondary' : 'error'
const dateLabel = (value: string) => value.slice(0, 10)

const runBulk = (action: 'inactive' | 'delete') => {
  const targets = templates.value.filter(item => selected.value.includes(item.id))
  const failures = targets.filter(item => item.isDefault)
  targets.filter(item => !item.isDefault).forEach(item => {
    if (action === 'delete') templates.value = templates.value.filter(template => template.id !== item.id)
    else item.status = 'Inactive'
  })
  selected.value = []
  notify(failures.length ? `${targets.length - failures.length} updated; ${failures.length} default template(s) skipped.` : `${targets.length} template(s) ${action === 'delete' ? 'deleted' : 'set inactive'}.`)
}
</script>

<template>
  <div class="marketing-list-page">
    <UiSectionHeader title="Marketing templates" description="Choose the page 2 message that matches each journal audience.">
      <template #actions>
        <VBtn color="primary" prepend-icon="ri-add-line" to="/marketing/templates/new">New template</VBtn>
      </template>
    </UiSectionHeader>

    <VCard class="status-summary mb-5" variant="elevated" elevation="4" rounded="md" role="group" aria-label="Template status summary">
      <VCardText class="pa-4 pa-sm-5">
        <VRow class="status-summary__grid" no-gutters>
          <VCol
            v-for="(item, index) in statusCards"
            :key="item.label"
            cols="12"
            sm="6"
            md="3"
            class="status-summary__column"
            :class="{
              'status-summary__column--desktop-divider': index > 0,
              'status-summary__column--mobile-divider': index % 2 === 1,
              'status-summary__column--mobile-row-start': index > 1,
              'status-summary__column--mobile-stack-divider': index > 0,
            }"
          >
            <div class="status-summary__item">
              <div class="status-summary__copy">
                <span class="text-body-1 text-medium-emphasis">{{ item.label }}</span>
                <div class="text-h4 font-weight-medium my-1">{{ counts[item.status] }}</div>
                <span class="text-body-1 text-medium-emphasis">{{ item.description }}</span>
              </div>
              <VSheet width="40" height="40" rounded="md" color="grey-100" class="status-summary__icon d-flex align-center justify-center" aria-hidden="true">
                <VIcon :icon="item.icon" size="28" color="on-surface" />
              </VSheet>
            </div>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <UiTableView title="" :headers="headers" :items="filtered" :hide-filters="false" :items-per-page="10" @reset-filters="query = ''">
      <template #filters>
        <VTextField v-model="query" label="Search templates" placeholder="Name, country or branch" prepend-inner-icon="ri-search-line" clearable hide-details density="compact" variant="outlined" class="template-search" />
        <VSelect :model-value="activeStatus" :items="statuses" label="Status" hide-details density="compact" variant="outlined" class="status-select" @update:model-value="setStatus" />
      </template>
      <template #filter-actions>
        <div v-if="selected.length" class="d-flex align-center gap-2">
          <span class="text-body-2">{{ selected.length }} selected</span>
          <VBtn size="small" variant="tonal" @click="runBulk('inactive')">Set inactive</VBtn>
          <VBtn size="small" color="error" variant="text" @click="runBulk('delete')">Delete</VBtn>
        </div>
        <VBtn variant="text" color="primary" @click="query = ''; setStatus('All')">Reset filters</VBtn>
      </template>
      <template #table-content>
        <div class="template-table-scroll" role="region" aria-label="Marketing templates table" tabindex="0">
          <VDataTable v-model="selected" :headers="headers" :items="filtered" item-value="id" show-select :items-per-page="10" class="text-no-wrap">
            <template #item.name="{ item }">
              <div class="template-name-cell">
                <div class="d-flex align-center flex-wrap gap-2">
                  <span class="text-body-1 font-weight-medium">{{ item.name }}</span>
                  <VChip v-if="item.isDefault" size="x-small" color="success" variant="tonal" class="template-default-chip">Default</VChip>
                </div>
                <span class="d-flex align-center gap-1 text-caption text-medium-emphasis">
                  <VIcon icon="ri-layout-grid-line" size="12" aria-hidden="true" />
                  {{ item.blocks.length }} elements · {{ item.customVariableCount }} custom {{ item.customVariableCount === 1 ? 'variable' : 'variables' }}
                </span>
              </div>
            </template>
            <template #item.displayStatus="{ item }">
              <VChip size="small" variant="tonal" :color="statusColor(item.displayStatus)" class="template-status-chip">{{ item.displayStatus }}</VChip>
            </template>
            <template #item.period="{ item }">
              <div v-if="item.isDefault" class="text-body-2 text-medium-emphasis">Always on</div>
              <div v-else class="template-period text-body-2 text-medium-emphasis">
                <span>{{ item.periodStart }}</span>
                <span>{{ item.periodEnd }}</span>
              </div>
            </template>
            <template #item.filters="{ item }">
              <div class="template-filter-list">
                <VChip v-for="filter in item.filters" :key="filter" size="x-small" color="grey-100" variant="flat" class="template-filter-chip">{{ filter }}</VChip>
              </div>
            </template>
            <template #item.priority="{ item }"><span class="text-body-2 font-weight-medium">{{ item.isDefault ? '—' : item.priority }}</span></template>
            <template #item.updatedAt="{ item }"><span class="text-body-2 text-medium-emphasis">{{ dateLabel(item.updatedAt) }}</span></template>
            <template #item.actions="{ item }">
              <div class="d-flex justify-end gap-1">
                <VTooltip text="Preview"><template #activator="{ props: tooltipProps }"><VBtn v-bind="tooltipProps" icon="ri-eye-line" size="small" variant="outlined" color="secondary" class="action-btn" aria-label="Preview template" @click="openPreview(item)" /></template></VTooltip>
                <VTooltip text="Edit"><template #activator="{ props: tooltipProps }"><VBtn v-bind="tooltipProps" icon="ri-edit-line" size="small" variant="outlined" color="secondary" class="action-btn" aria-label="Edit template" :to="{ path: '/marketing/templates/new', query: { edit: item.id } }" /></template></VTooltip>
                <VMenu location="bottom end">
                  <template #activator="{ props: menuProps }"><VBtn v-bind="menuProps" icon="ri-more-2-fill" size="small" variant="outlined" color="secondary" class="action-btn" :aria-label="`More actions for ${item.name}`" /></template>
                  <VList density="compact" min-width="208">
                    <VListItem prepend-icon="ri-file-copy-line" title="Duplicate as draft" @click="duplicateTemplate(item); notify('Draft copy created.')" />
                    <VListItem v-if="item.isDefault" prepend-icon="ri-star-line" title="Remove default role" @click="removeDefaultRole(item)" />
                    <VDivider v-if="item.isDefault" />
                    <VListItem prepend-icon="ri-delete-bin-line" title="Delete" :disabled="item.isDefault" @click="removeTemplate(item)" />
                  </VList>
                </VMenu>
              </div>
            </template>
            <template #no-data><div class="pa-10 text-center"><VIcon icon="ri-file-search-line" size="32" color="secondary" /><p class="text-body-1 mt-2 mb-1">No templates match these filters</p><p class="text-body-2 text-medium-emphasis mb-0">Try another status or search term.</p></div></template>
          </VDataTable>
        </div>
      </template>
    </UiTableView>

    <MarketingTemplateDetailsDrawer v-model="previewDrawerOpen" :template="previewTemplate" />
    <VSnackbar :model-value="!!toast" timeout="3000" @update:model-value="!$event && (toast = '')">{{ toast }}</VSnackbar>
  </div>
</template>

<style scoped>
.status-summary { overflow: hidden; }
.status-summary__grid { align-items: stretch; }
.status-summary__grid > .status-summary__column { display: flex; min-width: 0; padding-inline: 24px; }
.status-summary__grid > .status-summary__column:first-child { padding-inline-start: 0; }
.status-summary__grid > .status-summary__column:last-child { padding-inline-end: 0; }
.status-summary__column--desktop-divider { border-inline-start: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); }
.status-summary__item { display: flex; width: 100%; min-width: 0; align-items: flex-start; justify-content: space-between; gap: 12px; }
.status-summary__copy { min-width: 0; }
.status-summary__icon { flex: 0 0 auto; }
.template-search, .status-select { flex: 0 1 220px; min-width: min(220px, 100%); }
.template-table-scroll { max-width: 100%; overflow-x: auto; overscroll-behavior-inline: contain; }
.template-table-scroll :deep(table) { min-width: 1420px; }
.template-table-scroll :deep(.v-data-table__td) { height: auto; padding-block: 10px; vertical-align: middle; }
.template-table-scroll :deep(.action-btn) { border-color: rgba(var(--v-theme-on-surface), 0.08) !important; border-radius: 4px; }
.template-table-scroll :deep(.action-btn:hover) { background-color: rgba(var(--v-theme-on-surface), 0.04); }
.template-name-cell { display: flex; min-width: 240px; min-height: 48px; flex-direction: column; justify-content: center; gap: 4px; }
.template-default-chip { font-size: 10px; font-weight: 700; letter-spacing: 0.02em; text-transform: uppercase; }
.template-status-chip { min-width: 78px; justify-content: center; font-weight: 600; }
.template-period { display: flex; flex-direction: column; gap: 2px; white-space: nowrap; }
.template-filter-list { display: flex; min-width: 0; flex-wrap: wrap; align-items: center; gap: 4px; white-space: normal; }
.template-filter-chip { max-width: 100%; }
.template-filter-chip :deep(.v-chip__content) { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
@media (max-width: 959px) {
  .status-summary__grid > .status-summary__column { padding: 16px 12px; }
  .status-summary__column--desktop-divider { border-inline-start: 0; }
  .status-summary__column--mobile-divider { border-inline-start: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); }
  .status-summary__column--mobile-row-start { border-block-start: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); }
}
@media (max-width: 599px) {
  .status-summary__grid > .status-summary__column { padding: 12px 0; }
  .status-summary__column--mobile-divider { border-inline-start: 0; }
  .status-summary__column--mobile-row-start { border-block-start: 0; }
  .status-summary__column--mobile-stack-divider { border-block-start: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); }
}
@media (max-width: 600px) { .template-search, .status-select { flex-basis: 100%; min-width: 100%; } }
</style>
