<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNow, useStorage } from '@vueuse/core'
import { MARKETING_TEST_LIMIT, marketingTestWhitelist, marketingTestPhoneError, normalizeMarketingTestPhone } from '@/utils/marketingTestSend'
import UiSectionHeader from '@/components/ui/UiSectionHeader.vue'
import MarketingBuilder from '@/components/marketing/MarketingBuilder.vue'
import MarketingPreviewDocument from '@/components/marketing/MarketingPreviewDocument.vue'
import { studentRecords } from '@/data/students'
import UiTableView from '@/components/ui/UiTableView.vue'
import { isBuiltinMarketingVariable } from '@/composables/useMarketingTemplates'
import { marketingCourses, builtinMarketingVariables, normalizeMarketingTemplate, usedMarketingVariables, targetMarketingBranches, branchCountry, marketingBranchWhatsapp, marketingCurrency, hasMarketingValue, resolveMarketingValues, matchesMarketingTemplate, marketingTemplatesOverlap, substituteMarketingValues, validMarketingUrl } from '@/composables/useMarketingTemplates'
import { marketingBranches, marketingCountries, selectMarketingTemplate, useMarketingTemplates, type MarketingTemplate } from '@/composables/useMarketingTemplates'

definePageMeta({ sidebarRoute: 'marketing-templates' })

const route = useRoute()
const router = useRouter()
const { templates, students, saveTemplate } = useMarketingTemplates()
const steps = ['Info and target', 'Design', 'Variable values', 'Preview and test', 'Review and save']
const stepperLabels = ['Audience', 'Design', 'Variables', 'Preview', 'Review']
const initialStep = Number(route.query.step || 0)
const currentStep = ref(Number.isInteger(initialStep) && initialStep >= 0 && initialStep < steps.length ? initialStep : 0)
const stepperItems = stepperLabels.map(title => ({ title }))
const selectedBranches = ref<string[]>([])
const lastSavedDraft = ref(false)
const draftStorage = useStorage<MarketingTemplate | null>('microdemy-marketing-current-draft-v1', null)
const lastAutoSavedAt = useStorage<string | null>('microdemy-marketing-current-draft-saved-at-v1', null)
const draftReady = ref(false)
const toast = ref('')
const today = new Date().toISOString().slice(0, 10)
const blankTemplate = (): MarketingTemplate => ({
  id: `template-${Date.now()}`, name: '', status: 'Draft', periodStart: today, periodEnd: today, country: 'Indonesia', branches: [], priority: 100, isDefault: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
  variables: [{ name: 'student_name', label: 'Student name', type: 'text', defaultValue: 'Alya', branchValues: {} }],
  blocks: [{ id: 'heading-1', type: 'heading', content: 'Hello, {{student_name}}', x: 24, y: 30, width: 320, height: 60, color: 'primary', fontSize: 25 }, { id: 'text-1', type: 'text', content: 'Write your message for the next learning milestone.', x: 24, y: 104, width: 320, height: 60, fontSize: 15 }, { id: 'button-1', type: 'button', content: 'View details', x: 24, y: 184, width: 176, height: 44, color: 'primary' }],
})
const normalizeTemplate = (value: Partial<MarketingTemplate>): MarketingTemplate => {
  const fallback = blankTemplate()

  return normalizeMarketingTemplate({
    ...fallback,
    ...value,
    branches: Array.isArray(value.branches) ? value.branches : [],
    variables: Array.isArray(value.variables) ? value.variables.map(variable => ({ ...variable, branchValues: variable.branchValues && typeof variable.branchValues === 'object' ? variable.branchValues : {} })) : fallback.variables,
    blocks: Array.isArray(value.blocks) ? value.blocks : fallback.blocks,
  })
}

const template = ref<MarketingTemplate>(blankTemplate())
const anyAge = ref(true)
const isEdit = computed(() => typeof route.params.id === 'string' || typeof route.query.edit === 'string')
const editId = computed(() => String(route.params.id || route.query.edit || ''))
const availableBranches = computed(() => marketingBranches[template.value.country] || [])
const isActiveDefault = computed(() => templates.value.some(item => item.id === template.value.id && item.isDefault && item.status === 'Published'))
const activeCountryDefault = computed(() => templates.value.find(item => item.id !== template.value.id
  && item.isDefault
  && item.defaultScope === 'country'
  && item.country === template.value.country
  && item.status === 'Published'))

if (isEdit.value) {
  const found = templates.value.find(item => item.id === editId.value)
  if (found) {
    template.value = normalizeTemplate(JSON.parse(JSON.stringify(found)))
    selectedBranches.value = [...template.value.branches]
    anyAge.value = !hasMarketingValue(template.value.ageMin) && !hasMarketingValue(template.value.ageMax)
  } else {
    onMounted(() => router.replace('/marketing/templates'))
  }
}

onMounted(() => {
  if (!isEdit.value && draftStorage.value) {
    template.value = normalizeTemplate(draftStorage.value)
    selectedBranches.value = [...template.value.branches]
    anyAge.value = !hasMarketingValue(template.value.ageMin) && !hasMarketingValue(template.value.ageMax)
    draftStorage.value = JSON.parse(JSON.stringify(template.value)) as MarketingTemplate
    lastSavedDraft.value = true
  }
  draftReady.value = true
})

watch(template, value => {
  if (draftReady.value && !isEdit.value) {
    draftStorage.value = JSON.parse(JSON.stringify(value)) as MarketingTemplate
    lastAutoSavedAt.value = new Date().toISOString()
    lastSavedDraft.value = false
  }
}, { deep: true, flush: 'sync' })

const lastAutoSavedLabel = computed(() => {
  if (!lastAutoSavedAt.value) return draftStorage.value ? 'Last saved time unavailable' : 'Not saved yet'

  const savedAt = new Date(lastAutoSavedAt.value)
  if (Number.isNaN(savedAt.getTime())) return 'Last saved time unavailable'

  return `Last autosaved ${new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(savedAt)}`
})

watch(() => template.value.country, country => {
  const valid = marketingBranches[country] || []
  template.value.branches = (Array.isArray(template.value.branches) ? template.value.branches : []).filter(branch => valid.includes(branch))
  selectedBranches.value = [...template.value.branches]
})

watch(currentStep, step => router.replace({ query: { ...route.query, step: String(step) } }))

const goStep = (next: number) => {
  infoAttempted.value = true
  if (next < 0 || next >= steps.length) return
  if (next > currentStep.value && infoErrors.value.length) { toast.value = infoErrors.value[0]; return }
  if (next > currentStep.value && currentStep.value === 1 && variableErrors.value.length) { toast.value = variableErrors.value[0]; return }
  if (next > currentStep.value && currentStep.value === 2 && invalidValues.value.length) { toast.value = invalidValues.value[0]; return }
  currentStep.value = next
  window.scrollTo({ top: 0, behavior: 'auto' })
}

const updateBranches = (branches: string[]) => {
  template.value.branches = branches
  selectedBranches.value = branches
}

const setDefaultCampaign = (enabled: boolean | null) => {
  if (!enabled && isActiveDefault.value) return

  template.value.isDefault = Boolean(enabled)
  template.value.defaultScope = enabled ? 'country' : undefined
}

const setAnyAge = (enabled: boolean | null) => {
  anyAge.value = Boolean(enabled)
  if (anyAge.value) {
    template.value.ageMin = undefined
    template.value.ageMax = undefined
  }
}

const saveDraft = () => {
  if (!isActiveDefault.value) template.value.status = 'Draft'
  saveTemplate(template.value)
  draftStorage.value = JSON.parse(JSON.stringify(template.value)) as MarketingTemplate
  lastSavedDraft.value = true
  toast.value = 'Draft saved in this browser.'
}

const startOver = () => {
  draftReady.value = false
  draftStorage.value = null
  lastAutoSavedAt.value = null
  template.value = blankTemplate()
  selectedBranches.value = []
  anyAge.value = true
  lastSavedDraft.value = false
  nextTick(() => { draftReady.value = true })
}

const previewBranch = ref('')
const previewMode = ref<'mobile' | 'a4'>('a4')
const previewContent = ref<'page2' | 'full'>('page2')
const testPhone = ref('')
const testPhoneTouched = ref(false)
const testNow = useNow({ interval: 60_000 })
const testDate = computed(() => new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(testNow.value))
const testUsage = useStorage('microdemy-marketing-test-usage-v1', { date: '', count: 0 })
const testsUsedToday = computed(() => testUsage.value.date === testDate.value ? testUsage.value.count : 0)
const testPhoneError = computed(() => marketingTestPhoneError(testPhone.value))
const testLimitReached = computed(() => testsUsedToday.value >= MARKETING_TEST_LIMIT)
const testResult = ref<{ phone: string; branch: string; mode: 'a4' | 'mobile'; content: 'page2' | 'full'; values: Record<string, string>; blocks: MarketingTemplate['blocks'] } | null>(null)
const confirmActivation = ref(false)
const infoAttempted = ref(false)
const infoErrors = computed(() => {
  const value = template.value
  const errors: string[] = []
  if (!value.name.trim()) errors.push('Enter a template name before continuing.')
  if (value.isDefault && !marketingCountries.includes(value.country)) errors.push('Choose one country for this default campaign.')
  if (value.isDefault) return errors
  if (!anyAge.value && !hasMarketingValue(value.ageMin) && !hasMarketingValue(value.ageMax)) errors.push('Enter a minimum or maximum age, or select Any age.')
  const validDate = (date: string) => /^\d{4}-\d{2}-\d{2}$/.test(date) && !Number.isNaN(Date.parse(date)) && new Date(date).toISOString().slice(0, 10) === date
  if (!validDate(value.periodStart) || !validDate(value.periodEnd) || value.periodStart > value.periodEnd) errors.push('Enter valid start and end dates in order.')
  const ages = [value.ageMin, value.ageMax].filter(age => age !== undefined && age !== null && String(age) !== '')
  if (ages.some(age => !Number.isInteger(Number(age)) || Number(age) < 1 || Number(age) > 100) || (hasMarketingValue(value.ageMin) && hasMarketingValue(value.ageMax) && Number(value.ageMin) > Number(value.ageMax))) errors.push('Enter a valid age range between 1 and 100.')
  if (!Number.isFinite(Number(value.priority)) || Number(value.priority) <= 0) errors.push('Priority must be a positive number.')
  return errors
})
const customVariables = computed(() => template.value.variables.filter(variable => !isBuiltinMarketingVariable(variable)))
const variableErrors = computed(() => {
  const names = customVariables.value.map(variable => variable.name)
  return names.some(name => !/^[a-z][a-z0-9_]*$/.test(name)) || new Set(names).size !== names.length || names.some(name => builtinMarketingVariables.some(variable => variable.name === name))
    ? ['Custom variable names must be unique lowercase names and cannot replace built-in variables.'] : []
})
const usedNames = computed(() => usedMarketingVariables(template.value.blocks))
const unresolvedVariables = computed(() => usedNames.value.filter(name => !builtinMarketingVariables.some(variable => variable.name === name) && !customVariables.value.some(variable => variable.name === name)))
const targetBranches = computed(() => targetMarketingBranches(template.value))
watch(targetBranches, branches => { if (!branches.includes(previewBranch.value)) previewBranch.value = branches[0] || '' }, { immediate: true })
const matrixHeaders = computed(() => [{ title: 'Branch', key: 'branch', sortable: false, minWidth: 200 }, ...customVariables.value.map(variable => ({ title: variable.label || variable.name, key: variable.name, sortable: false, minWidth: 220 }))])
const matrixRows = computed(() => [{ id: 'default', branch: 'Default values', isDefault: true }, ...targetBranches.value.map(branch => ({ id: branch, branch, isDefault: false }))])
const missingBranchValues = computed(() => targetBranches.value.flatMap(branch => customVariables.value.filter(variable => !hasMarketingValue(variable.branchValues[branch])).map(variable => `${branch}: ${variable.label || variable.name}`)))
const invalidValues = computed(() => customVariables.value.flatMap(variable => {
  const valid = (raw: string) => !hasMarketingValue(raw) || (variable.type === 'number' || variable.type === 'money' ? Number.isFinite(Number(raw)) : variable.type === 'date' ? /^\d{4}-\d{2}-\d{2}$/.test(raw) && !Number.isNaN(Date.parse(raw)) && new Date(raw).toISOString().slice(0, 10) === raw : true)
  return [variable.defaultValue, ...targetBranches.value.map(branch => variable.branchValues[branch])].some(raw => !valid(raw)) ? [`Check values for ${variable.label || variable.name}.`] : []
}))
const setMatrixValue = (name: string, branch: string, isDefault: boolean, value: unknown) => {
  const variable = template.value.variables.find(item => item.name === name)
  if (!variable) return
  if (isDefault) variable.defaultValue = String(value ?? '')
  else variable.branchValues[branch] = String(value ?? '')
}
const exampleProfile = computed(() => ({
  id: 'preview', code: 'PREVIEW', initials: 'CM', name: studentRecords[0].name, country: branchCountry(previewBranch.value), branch: previewBranch.value,
  branchWhatsapp: marketingBranchWhatsapp(previewBranch.value),
  course: template.value.courses?.[0] || marketingCourses[0],
}))
const previewValues = computed(() => resolveMarketingValues(template.value, exampleProfile.value))
const estimateDate = computed(() => template.value.isDefault ? today : today < template.value.periodStart ? template.value.periodStart : today > template.value.periodEnd ? template.value.periodEnd : today)
const estimates = computed(() => {
  const candidate = { ...template.value, status: 'Published' as const }
  const pool = [...templates.value.filter(item => item.id !== candidate.id), candidate]
  const matching = students.value.filter(student => candidate.isDefault ? targetBranches.value.includes(student.branch) : matchesMarketingTemplate(candidate, student, estimateDate.value))
  const recipients = matching.filter(student => selectMarketingTemplate(pool, student, estimateDate.value)?.template.id === candidate.id)
  return { matching: matching.length, others: matching.length - recipients.length, recipients }
})
const collisions = computed(() => templates.value.filter(item => item.id !== template.value.id && item.status === 'Published' && item.priority === template.value.priority && marketingTemplatesOverlap(item, template.value)))
const urlErrors = computed(() => {
  const errors: string[] = []
  for (const branch of targetBranches.value) {
    const values = resolveMarketingValues(template.value, { ...exampleProfile.value, country: branchCountry(branch), branch, branchWhatsapp: marketingBranchWhatsapp(branch) })
    for (const block of template.value.blocks.filter(block => block.type === 'button')) {
      const url = substituteMarketingValues(block.url || '', values)
      if (!validMarketingUrl(url)) errors.push('Add a valid URL to each button for every targeted branch.')
    }
  }
  return [...new Set(errors)]
})
const activationErrors = computed(() => [...infoErrors.value, ...variableErrors.value, ...invalidValues.value, ...urlErrors.value, ...(unresolvedVariables.value.length ? [`Unknown variables: ${unresolvedVariables.value.join(', ')}`] : [])])
const persistComplete = (activate: boolean) => {
  if (!activate && isActiveDefault.value) { toast.value = 'An active default can only be replaced by activating another default.'; return }
  if (activate && activationErrors.value.length) { toast.value = activationErrors.value[0]; confirmActivation.value = false; return }
  const previousDefault = activate && template.value.isDefault ? activeCountryDefault.value : undefined
  if (previousDefault) {
    saveTemplate({ ...previousDefault, status: 'Inactive', isDefault: false, defaultScope: undefined })
  }
  template.value.status = activate ? 'Published' : 'Draft'
  saveTemplate(template.value)
  draftReady.value = false
  draftStorage.value = null
  lastAutoSavedAt.value = null
  confirmActivation.value = false
  router.push('/marketing/templates')
}
const complete = (activate: boolean) => {
  infoAttempted.value = true
  if (!activate) return persistComplete(false)
  if (activationErrors.value.length) { toast.value = activationErrors.value[0]; return }
  if (collisions.value.length || missingBranchValues.value.length || (template.value.isDefault && activeCountryDefault.value)) { confirmActivation.value = true; return }
  persistComplete(true)
}
const simulateTest = () => {
  testPhoneTouched.value = true
  if (testPhoneError.value || testLimitReached.value || !previewBranch.value) return
  testUsage.value = { date: testDate.value, count: testsUsedToday.value + 1 }
  testResult.value = { phone: normalizeMarketingTestPhone(testPhone.value), branch: previewBranch.value, mode: 'a4', content: 'full', values: { ...previewValues.value, student_name: 'Siswa Contoh' }, blocks: JSON.parse(JSON.stringify(template.value.blocks)) }
}
</script>

<template>
  <div class="marketing-editor-page">
    <UiSectionHeader :title="isEdit ? 'Edit marketing template' : 'New marketing template'" description="Build page 2 content for daily journal messages." :back="{ path: '/marketing/templates' }">
      <template #actions>
        <div class="d-flex align-center ga-3 flex-nowrap">
          <span v-if="!isEdit" class="text-caption text-medium-emphasis">
            {{ lastAutoSavedLabel }}<template v-if="lastSavedDraft"> · Draft restored from this browser</template>
          </span>
          <VDivider v-if="!isEdit" vertical class="autosave-divider" />
        <VBtn color="secondary" variant="outlined" prepend-icon="ri-save-line" :disabled="isActiveDefault" @click="saveDraft">Save draft</VBtn>
          <VBtn v-if="lastSavedDraft" variant="text" color="error" @click="startOver">Start over</VBtn>
        </div>
      </template>
    </UiSectionHeader>

    <VCard class="stepper-card mb-6" variant="flat" role="group" aria-label="Template creation progress">
      <div class="stepper-mobile-summary d-sm-none">
        <div class="d-flex align-center justify-space-between ga-3">
          <span class="stepper-mobile-count">Step {{ currentStep + 1 }} of {{ steps.length }}</span>
          <span class="stepper-mobile-title">{{ steps[currentStep] }}</span>
        </div>
        <VProgressLinear :model-value="((currentStep + 1) / steps.length) * 100" color="primary" height="4" rounded aria-label="Template creation progress" />
      </div>
      <div class="stepper-desktop d-none d-sm-block">
        <AppStepper v-model:current-step="currentStep" :items="stepperItems" :is-active-step-valid="true" />
      </div>
    </VCard>

    <VCard class="step-content" rounded="lg" variant="flat" border>
      <VCardText class="pa-5 pa-md-7">
        <template v-if="currentStep === 0">
          <div class="step-heading"><h2 class="text-h5 mb-1">Template information</h2><p class="text-body-2 text-medium-emphasis">{{ template.isDefault ? 'Update the default template for its existing scope.' : 'Set the audience and period that decide when this design applies.' }}</p></div>
          <VRow class="form-section">
            <VCol cols="12" md="3"><h3 class="text-body-1 font-weight-medium mb-1">Information</h3><p class="text-body-2 text-medium-emphasis mb-0">{{ template.isDefault ? 'Name this default template.' : 'Name this template and set its availability.' }}</p></VCol>
            <VCol cols="12" md="9"><VRow>
              <VCol cols="12"><VTextField v-model="template.name" label="Template name" placeholder="Example: October learning week" maxlength="80" required hide-details="auto" /></VCol>
              <VCol v-if="!template.isDefault" cols="12" sm="6"><VTextField v-model="template.periodStart" class="marketing-date-field" label="Start date" type="date" hide-details="auto" /></VCol>
              <VCol v-if="!template.isDefault" cols="12" sm="6"><VTextField v-model="template.periodEnd" class="marketing-date-field" label="End date" type="date" hide-details="auto" /></VCol>
            </VRow></VCol>
          </VRow>
          <VDivider class="my-6" />
          <VRow class="form-section">
            <VCol cols="12" md="3"><h3 class="text-body-1 font-weight-medium mb-1">Audience</h3><p class="text-body-2 text-medium-emphasis mb-0">{{ template.isDefault ? 'Choose the country this default applies to.' : 'Choose where and who this template is for.' }}</p></VCol>
            <VCol cols="12" md="9"><VRow>
              <VCol cols="12"><VSelect v-model="template.country" :items="marketingCountries" label="Country" :disabled="isActiveDefault" hide-details="auto" /></VCol>
              <VCol v-if="template.defaultScope !== 'global'" cols="12">
                <VCard class="default-campaign-card pa-3" variant="outlined" rounded="lg">
                  <VCheckbox :model-value="template.isDefault" :label="`Use as Default Campaign · ${template.country}`" :disabled="isActiveDefault" density="compact" hide-details @update:model-value="setDefaultCampaign" />
                  <p class="text-body-2 text-medium-emphasis mb-0 ms-8">The fallback when no other campaign matches. One per country; a country without an active default sends the journal without page 2.</p>
                  <p v-if="isActiveDefault" class="text-caption text-medium-emphasis mb-0 ms-8 mt-2">An active default can only be replaced by activating another default.</p>
                </VCard>
              </VCol>
              <template v-if="!template.isDefault">
                <VCol cols="12" sm="6"><VSelect :model-value="selectedBranches" :items="availableBranches" label="Branches" multiple chips closable-chips hint="Leave empty for all branches." persistent-hint @update:model-value="updateBranches" /></VCol>
                <VCol cols="12" sm="6"><VAutocomplete v-model="template.courses" :items="marketingCourses" label="Course" multiple chips closable-chips hint="Leave empty for all courses." persistent-hint><template #prepend-item><div class="d-flex gap-2 pa-3"><VBtn color="secondary" variant="text" size="small" @click="template.courses = [...marketingCourses]">Select all</VBtn><VBtn color="secondary" variant="text" size="small" @click="template.courses = []">Clear</VBtn></div><VDivider /></template></VAutocomplete></VCol>
                <VCol cols="12"><VCheckbox :model-value="anyAge" label="Any age" hide-details @update:model-value="setAnyAge" /></VCol>
                <template v-if="!anyAge">
                  <VCol cols="12" sm="6"><VTextField v-model.number="template.ageMin" label="Minimum age" type="number" min="1" max="100" hide-details="auto" /></VCol>
                  <VCol cols="12" sm="6"><VTextField v-model.number="template.ageMax" label="Maximum age" type="number" min="1" max="100" hide-details="auto" /></VCol>
                </template>
              </template>
            </VRow></VCol>
          </VRow>
          <template v-if="!template.isDefault">
            <VDivider class="my-6" />
            <VRow class="form-section">
              <VCol cols="12" md="3"><h3 class="text-body-1 font-weight-medium mb-1">Selection priority</h3><p class="text-body-2 text-medium-emphasis mb-0">Decide which template wins when audiences overlap.</p></VCol>
              <VCol cols="12" md="9"><VRow>
                <VCol cols="12"><VTextField v-model.number="template.priority" label="Priority" type="number" min="1" hint="Lower numbers take priority." persistent-hint /></VCol>
                <VCol cols="12"><p class="text-body-2 text-medium-emphasis mb-0">Unmatched students use the active default for their country, if one is configured.</p></VCol>
              </VRow></VCol>
            </VRow>
          </template>
          <VAlert v-if="infoAttempted && infoErrors.length" type="error" variant="tonal" class="mt-4"><div v-for="error in infoErrors" :key="error">{{ error }}</div></VAlert>
        </template>

        <template v-else-if="currentStep === 1">
          <div class="step-heading"><h2 class="text-h5 mb-1">Design your journal page</h2><p class="text-body-2 text-medium-emphasis">Add text, images, or buttons on the canvas. Students will see this design in their journal.</p></div>
          <MarketingBuilder v-model="template.blocks" v-model:variables="template.variables" v-model:base-margin="template.baseMargin" />
          <VAlert v-if="variableErrors.length" type="error" variant="tonal" class="mt-4">{{ variableErrors[0] }}</VAlert>
        </template>

        <template v-else-if="currentStep === 2">
          <div class="step-heading"><h2 class="text-h5 mb-1">Variable values</h2><p class="text-body-2 text-medium-emphasis">Set a default for each custom variable, then override it per branch. Built-in values are filled automatically.</p></div>
          <UiTableView v-if="customVariables.length" title="" :headers="matrixHeaders" :items="matrixRows" hide-filters hide-pagination>
            <template #table-content>
              <div class="variable-table-scroll" role="region" aria-label="Branch variable values" tabindex="0">
                <VDataTable :headers="matrixHeaders" :items="matrixRows" item-value="id" :items-per-page="-1" hide-default-footer>
                  <template #item.branch="{ item }"><span class="text-body-2 font-weight-medium">{{ item.branch }}</span><p v-if="item.isDefault" class="text-caption text-medium-emphasis mb-0">Used when a branch value is empty</p></template>
                  <template v-for="variable in customVariables" :key="variable.name" #[`item.${variable.name}`]="{ item }">
                    <VTextField :model-value="item.isDefault ? variable.defaultValue : variable.branchValues[item.branch]" :label="(variable.label || variable.name) + ' · ' + item.branch" :type="variable.type === 'date' ? 'date' : ['money', 'number'].includes(variable.type) ? 'number' : 'text'" :step="['money', 'number'].includes(variable.type) ? 'any' : undefined" :prefix="variable.type === 'money' ? item.isDefault && template.country === 'All countries' ? 'Local currency' : marketingCurrency(item.isDefault ? template.country : branchCountry(item.branch)) : undefined" :hint="!item.isDefault && !hasMarketingValue(variable.branchValues[item.branch]) ? 'Uses default: ' + (variable.defaultValue || 'Not set') : undefined" :persistent-hint="!item.isDefault && !hasMarketingValue(variable.branchValues[item.branch])" density="compact" class="py-3" hide-details="auto" @update:model-value="setMatrixValue(variable.name, item.branch, item.isDefault, $event)" />
                  </template>
                </VDataTable>
              </div>
            </template>
          </UiTableView>
          <VAlert v-else type="info" variant="tonal">No custom variables have been added yet. You can add them in Design.</VAlert>
          <VAlert v-if="missingBranchValues.length" type="warning" variant="tonal" class="mt-4">{{ missingBranchValues.length }} branch values are empty and will use defaults. Activation requires confirmation.</VAlert>
          <VAlert v-if="invalidValues.length" type="error" variant="tonal" class="mt-4">{{ invalidValues.join(' ') }}</VAlert>
        </template>

        <template v-else-if="currentStep === 3">
          <div class="step-heading"><h2 class="text-h5 mb-1">Preview and test send</h2><p class="text-body-2 text-medium-emphasis">Check your campaign on its own or alongside a sample daily journal.</p></div>
          <VRow>
            <VCol cols="12" lg="8" class="preview-column">
              <VCard variant="outlined" class="preview-panel">
                <VCardText class="pa-4 pa-sm-6">
                  <VSelect v-model="previewBranch" :items="targetBranches" label="Example branch" hide-details :disabled="!targetBranches.length" />
                  <div class="preview-toolbar mt-4">
                    <VBtnToggle v-model="previewMode" class="marketing-preview-segment" mandatory divided color="primary" variant="outlined" density="comfortable" aria-label="Preview format">
                      <VBtn value="a4">A4</VBtn>
                      <VBtn value="mobile">Mobile</VBtn>
                    </VBtnToggle>
                    <VBtnToggle v-model="previewContent" class="marketing-preview-segment" mandatory divided color="primary" variant="outlined" density="comfortable" aria-label="Preview content">
                      <VBtn value="page2">Page 2</VBtn>
                      <VBtn value="full">Full journal sample</VBtn>
                    </VBtnToggle>
                  </div>
                </VCardText>
                <VDivider />
                <div class="preview-stage">
                  <MarketingPreviewDocument :blocks="template.blocks" :base-margin="template.baseMargin" :values="previewValues" :mode="previewMode" :content="previewContent" />
                </div>
                <VDivider />
                <VCardText class="pa-4 text-caption text-medium-emphasis">Sample: {{ exampleProfile.name }} · {{ previewBranch || 'Choose a branch' }}. Branch selection changes this preview; recipient estimates cover all campaign targets.</VCardText>
              </VCard>
            </VCol>
            <VCol cols="12" lg="4" class="preview-column">
              <aside class="recipient-panel" aria-label="Campaign recipients">
                <VCard variant="flat" color="primary" class="recipient-estimate">
                  <VCardText class="pa-5" aria-live="polite" aria-atomic="true">
                    <div class="d-flex align-center gap-3 mb-3"><VIcon icon="ri-group-line" size="24" /><h3 class="text-body-1 font-weight-medium mb-0">Estimated recipients</h3></div>
                    <div class="d-flex align-baseline flex-wrap gap-2 mb-4"><span class="text-h2 font-weight-medium">{{ estimates.recipients.length.toLocaleString() }}</span><span class="text-body-2">students</span></div>
                    <VDivider class="mb-4" />
                    <dl class="estimate-facts text-body-2">
                      <div><dt>Matching filters</dt><dd>{{ estimates.matching.toLocaleString() }}</dd></div>
                      <div><dt>Selected by other campaigns</dt><dd>{{ estimates.others.toLocaleString() }}</dd></div>
                    </dl>
                    <p class="text-caption mt-4 mb-0">Estimated for {{ estimateDate }}, as if published. Based on existing demo profiles.</p>
                  </VCardText>
                </VCard>
                <VCard variant="outlined">
                  <VCardText class="pa-5 pb-3"><h3 class="text-body-1 font-weight-medium mb-1">Example recipients</h3><p class="text-body-2 text-medium-emphasis mb-0">{{ Math.min(10, estimates.recipients.length) }} of {{ estimates.recipients.length.toLocaleString() }} students</p></VCardText>
                  <VList v-if="estimates.recipients.length" tag="ul" role="list" class="recipient-list py-0" aria-label="Example recipients" lines="two">
                    <VListItem v-for="student in estimates.recipients.slice(0, 10)" :key="student.id" tag="li" role="listitem" :title="student.code" :subtitle="`${student.branch} · ${student.course || 'Course not set'}`" class="px-5 py-3">
                      <template #prepend><VAvatar color="primary" variant="tonal" size="36" class="text-body-2">{{ student.initials }}</VAvatar></template>
                    </VListItem>
                  </VList>
                  <VCardText v-else class="pa-5 pt-2"><VIcon icon="ri-user-search-line" color="secondary" class="mb-2" /><p class="text-body-2 mb-1">No matching recipients for this date.</p><p class="text-caption text-medium-emphasis mb-0">Review the audience filters and campaign priority.</p></VCardText>
                  <VCardText v-if="estimates.recipients.length > 10" class="pa-5 pt-3 text-caption text-medium-emphasis">And {{ (estimates.recipients.length - 10).toLocaleString() }} more recipients</VCardText>
                </VCard>
                <VCard variant="outlined">
                  <VCardText class="pa-5">
                    <h3 class="text-body-1 font-weight-medium mb-2">Send a test journal to WhatsApp</h3>
                    <p class="text-body-2 text-medium-emphasis mb-4">Test a full sample journal: a dummy page 1 for “Siswa Contoh” and this campaign as page 2, using the selected branch. Production test numbers must be whitelisted by Admin. Max 10 per day per user; excluded from statistics.</p>
                    <VTextField v-model="testPhone" label="WhatsApp number" type="tel" inputmode="tel" autocomplete="tel" placeholder="+62812…" :error-messages="testPhoneTouched ? testPhoneError : ''" hide-details="auto" :disabled="testLimitReached" @blur="testPhoneTouched = true" @keydown.enter.prevent="simulateTest" />
                    <VBtn class="mt-3" color="primary" variant="flat" prepend-icon="ri-send-plane-line" block :disabled="!!testPhoneError || !previewBranch || testLimitReached" @click="simulateTest">Simulate test send</VBtn>
                    <p class="text-caption text-medium-emphasis mt-3 mb-1">Demo whitelist: {{ marketingTestWhitelist.join(', ') }}.</p>
                    <p class="text-caption text-medium-emphasis mb-0" role="status">{{ testsUsedToday }}/{{ MARKETING_TEST_LIMIT }} local tests today on this browser. {{ testLimitReached ? 'Daily limit reached. Try again tomorrow.' : 'Local simulation only. No WhatsApp message is sent.' }}</p>
                  </VCardText>
                </VCard>
                <VAlert v-if="usedNames.includes('branch_whatsapp')" type="info" variant="tonal">This preview uses dummy WhatsApp numbers for each branch.</VAlert>
              </aside>
            </VCol>
          </VRow>
        </template>

        <template v-else>
          <div class="step-heading"><h2 class="text-h5 mb-1">Review and save</h2><p class="text-body-2 text-medium-emphasis">Check targeting and warnings before activation.</p></div>
          <VList lines="two" class="review-list">
            <VListItem title="Template name" :subtitle="template.name || 'Not set'" />
            <VListItem title="Audience" :subtitle="template.country + ' · ' + (template.isDefault ? 'Default ' + template.defaultScope : template.branches.length ? template.branches.join(', ') : 'All branches')" />
            <template v-if="!template.isDefault">
              <VListItem title="Period" :subtitle="template.periodStart + ' to ' + template.periodEnd" />
              <VListItem title="Courses" :subtitle="template.courses?.length ? template.courses.join(', ') : 'All courses'" />
              <VListItem title="Age range" :subtitle="anyAge ? 'Any age' : (hasMarketingValue(template.ageMin) ? template.ageMin : 'Any') + ' to ' + (hasMarketingValue(template.ageMax) ? template.ageMax : 'Any')" />
              <VListItem title="Priority" :subtitle="String(template.priority)" />
            </template>
            <VListItem title="Estimated recipients" :subtitle="estimates.recipients.length + ' demo profiles on ' + estimateDate" />
          </VList>
          <VAlert v-for="error in activationErrors" :key="error" type="error" variant="tonal" class="mt-4">{{ error }}</VAlert>
          <VAlert v-if="collisions.length" type="warning" variant="tonal" class="mt-4">Same-priority audience conflicts: {{ collisions.map(item => item.name).join(', ') }}. The earlier-created template wins.</VAlert>
          <VAlert v-if="missingBranchValues.length" type="warning" variant="tonal" class="mt-4">{{ missingBranchValues.length }} branch values are empty. Defaults will be used. Confirm before activation.</VAlert>
          <VAlert type="info" variant="tonal" class="mt-4">Changes apply to new journals. Existing journals keep their saved snapshot.</VAlert>
        </template>
      </VCardText>
      <VDivider />
      <VCardActions class="step-actions pa-4">
        <VBtn color="secondary" variant="outlined" :disabled="currentStep === 0" prepend-icon="ri-arrow-left-line" @click="goStep(currentStep - 1)">Back</VBtn>
        <div class="step-actions__forward">
          <VBtn v-if="currentStep < steps.length - 1" color="primary" variant="flat" append-icon="ri-arrow-right-line" @click="goStep(currentStep + 1)">Continue</VBtn>
          <template v-else><VBtn color="secondary" variant="outlined" :disabled="isActiveDefault" @click="complete(false)">Save draft</VBtn><VBtn color="primary" variant="flat" @click="complete(true)">Activate template</VBtn></template>
        </div>
      </VCardActions>
    </VCard>
    <VDialog v-model="confirmActivation" max-width="560">
      <VCard :title="template.isDefault && activeCountryDefault ? `Replace ${template.country} default?` : 'Activate with warnings?'">
        <VCardText><p v-if="template.isDefault && activeCountryDefault">The active {{ template.country }} default is “{{ activeCountryDefault.name }}”. Replacing it makes the current default Inactive.</p><p v-if="collisions.length">Same-priority conflicts: {{ collisions.map(item => item.name).join(', ') }}. The earlier-created template wins.</p><p v-if="missingBranchValues.length">{{ missingBranchValues.length }} empty branch values will use defaults.</p></VCardText>
        <VCardActions class="justify-end flex-wrap gap-2 pa-4"><VBtn color="secondary" variant="outlined" @click="confirmActivation = false">Cancel</VBtn><VBtn color="primary" variant="flat" @click="persistComplete(true)">{{ template.isDefault && activeCountryDefault ? 'Replace default' : 'Activate anyway' }}</VBtn></VCardActions>
      </VCard>
    </VDialog>
    <VDialog :model-value="!!testResult" max-width="560" @update:model-value="!$event && (testResult = null)">
      <VCard v-if="testResult" title="TEST · Local simulation">
        <VCardText><p class="text-body-2">{{ testResult.phone }} · {{ testResult.branch }} · A4 · Full journal sample. Local simulation; no message was sent.</p><div class="preview-stage"><MarketingPreviewDocument :blocks="testResult.blocks" :values="testResult.values" :mode="testResult.mode" :content="testResult.content" test-sample /></div></VCardText>
        <VCardActions class="justify-end pa-4"><VBtn color="secondary" variant="outlined" @click="testResult = null">Close</VBtn></VCardActions>
      </VCard>
    </VDialog>
    <VSnackbar :model-value="!!toast" timeout="3500" @update:model-value="!$event && (toast = '')">{{ toast }}</VSnackbar>
  </div>
</template>

<style scoped>
.marketing-editor-page { max-width: 1440px; margin-inline: auto; }
.autosave-divider { height: 24px; }
.marketing-date-field :deep(.v-field__input > input[type='date']) { flex: 1 1 0%; min-width: 0; position: relative; width: 100%; }
.marketing-date-field :deep(input[type='date']::-webkit-calendar-picker-indicator) { margin: 0; position: absolute; right: 12px; }
@media (min-width: 1920px) {
  .marketing-editor-page { width: 100%; max-width: none; }
}
.variable-table-scroll { max-width: 100%; overflow-x: auto; }
.variable-table-scroll :deep(table) { min-width: 680px; }
.preview-column { min-width: 0; }
.preview-toolbar { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.preview-stage { padding: 24px; background: rgb(var(--v-theme-background)); }
.recipient-panel { display: flex; flex-direction: column; gap: 24px; }
.estimate-facts { margin: 0; }
.estimate-facts > div { display: flex; justify-content: space-between; gap: 16px; margin-block: 8px; }
.estimate-facts dd { margin: 0; font-weight: 500; }
.recipient-estimate { color: rgb(var(--v-theme-on-primary)); }
.recipient-estimate :deep(.v-card-text) { color: rgb(var(--v-theme-on-primary)); }
.recipient-estimate h3, .recipient-estimate .text-h2, .recipient-estimate .text-body-2, .recipient-estimate .text-caption, .recipient-estimate dt, .recipient-estimate dd { color: rgb(var(--v-theme-on-primary)) !important; }
.recipient-list { max-height: 440px; overflow-y: auto; }
.recipient-list :deep(.v-list-item-title) { font-size: 13px; overflow-wrap: anywhere; white-space: normal; }
.recipient-list :deep(.v-list-item-subtitle) { font-size: 13px; white-space: normal; }
.stepper-card { padding: 20px 24px; border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); }
.stepper-mobile-summary { display: grid; gap: 12px; }
.stepper-mobile-count { color: rgb(var(--v-theme-primary)); font-size: 0.8125rem; font-weight: 600; white-space: nowrap; }
.stepper-mobile-title { color: rgb(var(--v-theme-on-surface)); font-size: 0.875rem; font-weight: 500; text-align: end; }
.step-content { min-height: 460px; }
.step-heading { margin-bottom: 32px; }
.step-heading p { margin-bottom: 0; max-width: 70ch; }
.form-section { align-items: flex-start; }
.review-list { border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px; }
.step-actions { justify-content: space-between; gap: 12px; padding: 20px 28px !important; }
.step-actions__forward { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 12px; }
.step-actions :deep(.v-btn) { min-height: 40px; padding-inline: 20px; }
@media (max-width: 960px) {
  .stepper-card { padding-inline: 16px; }
}
@media (max-width: 600px) {
  .preview-stage { padding: 12px; }
  .preview-toolbar { align-items: stretch; }
  .stepper-card { padding: 16px; }
  .step-content { min-height: 0; }
  .step-heading { margin-bottom: 16px; }
  .step-actions { padding: 12px !important; }
  .step-actions { flex-wrap: wrap; }
  .step-actions__forward { margin-inline-start: auto; }
}
</style>

<style scoped src="@/assets/styles/marketing-preview-toggle.css"></style>
<style src="@/assets/styles/marketing-preview-segment.css"></style>
