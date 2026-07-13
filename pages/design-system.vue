<script setup lang="ts">
import UiTableView from '@/components/ui/UiTableView.vue'

definePageMeta({
  sidebarRoute: 'design-system',
})

// Active tab
const activeTab = ref('typography')

// ─────────Typography tokens from spec─────────
const typographyTokens = [
  { token: 'h1', size: '2.875rem (46px)', weight: 500, lineHeight: '4.25rem (68px)', letterSpacing: 'normal', class: 'text-h1' },
  { token: 'h2', size: '2.375rem (38px)', weight: 500, lineHeight: '3.5rem (56px)', letterSpacing: 'normal', class: 'text-h2' },
  { token: 'h3', size: '1.75rem (28px)', weight: 500, lineHeight: '2.625rem (42px)', letterSpacing: 'normal', class: 'text-h3' },
  { token: 'h4', size: '1.5rem (24px)', weight: 500, lineHeight: '2.375rem (38px)', letterSpacing: 'normal', class: 'text-h4' },
  { token: 'h5', size: '1.125rem (18px)', weight: 500, lineHeight: '1.75rem (28px)', letterSpacing: 'normal', class: 'text-h5' },
  { token: 'h6', size: '0.9375rem (15px)', weight: 400, lineHeight: '1.375rem (22px)', letterSpacing: 'normal', class: 'text-h6' },
  { token: 'subtitle-1', size: '0.9375rem (15px)', weight: 400, lineHeight: '1.375rem (22px)', letterSpacing: 'normal', class: 'text-subtitle-1' },
  { token: 'subtitle-2', size: '0.8125rem (13px)', weight: 400, lineHeight: '1.25rem (20px)', letterSpacing: 'normal', class: 'text-subtitle-2' },
  { token: 'body-1', size: '0.9375rem (15px)', weight: 400, lineHeight: '1.375rem (22px)', letterSpacing: 'normal', class: 'text-body-1' },
  { token: 'body-2', size: '0.8125rem (13px)', weight: 400, lineHeight: '1.25rem (20px)', letterSpacing: 'normal', class: 'text-body-2' },
  { token: 'caption', size: '0.8125rem (13px)', weight: 400, lineHeight: '1.125rem (18px)', letterSpacing: '0.025rem', class: 'text-caption' },
  { token: 'overline', size: '—', weight: 400, lineHeight: '0.875rem (14px)', letterSpacing: '0.05rem', class: 'text-overline' },
  { token: 'button', size: '0.9375rem (15px)', weight: 500, lineHeight: '1.375rem (22px)', letterSpacing: 'normal', class: 'text-button' },
]

// ─────────Color palette from theme─────────
const primaryPalette = [
  { token: 'primary-100', light: '#DBFDDB', dark: '#DBFDDB', desc: 'Softest green tint' },
  { token: 'primary-200', light: '#B8FAB8', dark: '#B8FAB8', desc: 'Very light accent' },
  { token: 'primary-300', light: '#81F483', dark: '#81F483', desc: 'Light green tint' },
  { token: 'primary-400', light: '#43E545', dark: '#43E545', desc: 'Light brand green' },
  { token: 'primary-500', light: '#10AF13', dark: '#10AF13', desc: 'Brand primary' },
  { token: 'primary-600', light: '#108513', dark: '#108513', desc: 'Hover / active' },
  { token: 'primary-700', light: '#126915', dark: '#126915', desc: 'Dark green' },
  { token: 'primary-800', light: '#115614', dark: '#115614', desc: 'Deeper green' },
  { token: 'primary-900', light: '#033006', dark: '#10AF13', desc: 'Deepest green' },
]

const opacityTokens = [
  { token: 'primary-opacity-lighter', value: '#10AF1314', opacity: '8%', desc: 'Subtle hover overlays' },
  { token: 'primary-opacity-light', value: '#10AF1329', opacity: '16%', desc: 'Focus states' },
  { token: 'primary-opacity-main', value: '#10AF133D', opacity: '24%', desc: 'Active selection bg' },
  { token: 'primary-opacity-dark', value: '#10AF1352', opacity: '32%', desc: 'High contrast selection' },
  { token: 'primary-opacity-darker', value: '#10AF1361', opacity: '38%', desc: 'Strongest overlay' },
]

const semanticColors = [
  { token: 'success', light: '#56CA00', dark: '#56CA00', desc: 'Success indicators' },
  { token: 'info', light: '#16B1FF', dark: '#16B1FF', desc: 'Informational highlights' },
  { token: 'warning', light: '#FFB400', dark: '#FFB400', desc: 'Warning alerts' },
  { token: 'error', light: '#FF4C51', dark: '#FF4C51', desc: 'Error states' },
]

const greyPalette = [
  { token: 'grey-50', light: '#FAFAFA', dark: '#2A2E42' },
  { token: 'grey-100', light: '#F5F5F5', dark: '#2F3349' },
  { token: 'grey-200', light: '#EEEEEE', dark: '#4A5072' },
  { token: 'grey-300', light: '#E0E0E0', dark: '#5E6692' },
  { token: 'grey-400', light: '#BDBDBD', dark: '#7983BB' },
  { token: 'grey-500', light: '#9E9E9E', dark: '#8692D0' },
  { token: 'grey-600', light: '#757575', dark: '#AAB3DE' },
  { token: 'grey-700', light: '#616161', dark: '#B6BEE3' },
  { token: 'grey-800', light: '#424242', dark: '#CFD3EC' },
  { token: 'grey-900', light: '#212121', dark: '#E7E9F6' },
]

const surfaceColors = [
  { token: 'background', light: '#FAFAFA', dark: '#28243D', desc: 'Page background' },
  { token: 'surface', light: '#FFFFFF', dark: '#312D4B', desc: 'Card / container bg' },
  { token: 'on-background', light: '#2E263D', dark: '#E7E3FC', desc: 'Body text color' },
  { token: 'on-surface', light: '#2E263D', dark: '#E7E3FC', desc: 'Text on surface' },
]

// ───────── Component showcase helpers ─────────
const showSnackbar = ref(false)
const snackbarColor = ref('success')
const snackbarText = ref('')

const demoItems = [
  { initials: 'JS', name: 'Jennifer Summers', studentId: 'STD-293012302-12320', book: 'Python Game Dev', lessonName: 'Lesson 4 - Canvas Setup', date: 'Feb 30, 2026', status: 'Pending', score: 92 },
  { initials: 'CM', name: 'Cristofer Mango', studentId: 'STD-293012302-12321', book: 'Web Dev Basics', lessonName: 'Lesson 2 - HTML Structure', date: 'Mar 2, 2026', status: 'Approved', score: 78 },
  { initials: 'JR', name: 'Justin Richardson', studentId: 'STD-293012302-12322', book: 'Data Science 101', lessonName: 'Lesson 6 - Pandas', date: 'Mar 5, 2026', status: 'Rejected', score: 55 },
]

const selectedStatusFilter = ref('All')
const statusFilterOptions = ['All', 'Pending', 'Approved', 'Rejected']

// Separate state for the Components tab's toggle demo
const demoViewType = ref('list')

const getStatusColor = (status: string) => {
  if (status === 'Pending') return 'warning'
  if (status === 'Approved') return 'success'
  if (status === 'Rejected') return 'error'
  return 'secondary'
}

const getScoreColor = (score: number) => {
  if (score >= 80) return 'success'
  if (score >= 60) return 'warning'
  return 'error'
}

const toast = (color: string, text: string) => {
  snackbarColor.value = color
  snackbarText.value = text
  showSnackbar.value = true
}

// Component Review tab states & handlers
const reviewActiveTab = ref('project')
const reviewViewType = ref('list')
const reviewLoading = ref(false)
const reviewSearch = ref('')
const reviewSelectedStatus = ref('All')
const reviewStatusOptions = ['All', 'Pending', 'Approved', 'Rejected']
const reviewSelectedQuiz = ref('All')

const reviewTabs = computed(() => [
  { label: 'Project Approvals', value: 'project', count: demoItems.filter(i => i.status === 'Pending').length, icon: 'ri-file-text-line' },
  { label: 'Quiz & Exams', value: 'quiz', count: 12, icon: 'ri-todo-line' }
])

const reviewHeaders = computed(() => {
  if (reviewActiveTab.value === 'project') {
    return [
      { title: 'Student Name', key: 'student' },
      { title: 'Book / Session', key: 'book' },
      { title: 'LESSON & CLASS', key: 'lessonName' },
      { title: 'Date', key: 'date' },
      { title: 'Status', key: 'status' },
      { title: 'Action', key: 'action', sortable: false, align: 'center' as const, width: '120px' }
    ]
  } else {
    return [
      { title: 'Student Name', key: 'student' },
      { title: 'Book / Session', key: 'book' },
      { title: 'LESSON & CLASS', key: 'lessonName' },
      { title: 'Date', key: 'date' },
      { title: 'Score', key: 'score' },
      { title: 'Action', key: 'action', sortable: false, align: 'center' as const, width: '120px' }
    ]
  }
})

const filteredReviewItems = computed(() => {
  return demoItems.filter(item => {
    const matchesSearch = !reviewSearch.value || item.name.toLowerCase().includes(reviewSearch.value.toLowerCase()) || item.studentId.toLowerCase().includes(reviewSearch.value.toLowerCase())
    const matchesStatus = reviewSelectedStatus.value === 'All' || item.status === reviewSelectedStatus.value
    return matchesSearch && matchesStatus
  })
})

const resetReviewFilters = () => {
  reviewSearch.value = ''
  reviewSelectedStatus.value = 'All'
  reviewSelectedQuiz.value = 'All'
}
</script>

<template>
  <section>
    <!-- Page Header -->
    <div class="mb-5">
      <h4 class="text-h4 font-weight-medium text-high-emphasis">
        Design System
      </h4>
      <p class="text-body-1 text-medium-emphasis mb-0">
        Typography tokens, color palette, and component showcase
      </p>
    </div>

    <!-- Navigation Tabs -->
    <VTabs
      v-model="activeTab"
      class="v-tabs-bordered mb-6"
    >
      <VTab value="typography">
        <VIcon
          start
          icon="ri-font-size"
          class="me-2"
        />
        Typography
      </VTab>
      <VTab value="colors">
        <VIcon
          start
          icon="ri-palette-line"
          class="me-2"
        />
        Color System
      </VTab>
      <VTab value="components">
        <VIcon
          start
          icon="ri-component-line"
          class="me-2"
        />
        Components
      </VTab>
      <VTab value="component-review">
        <VIcon
          start
          icon="ri-article-line"
          class="me-2"
        />
        Component Review
      </VTab>
    </VTabs>

    <!-- ════════════════════════════════ TYPOGRAPHY TAB ════════════════════════════════ -->
    <VCard v-if="activeTab === 'typography'">
      <VCardText class="pa-6">
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-2">
          Font Family
        </h5>
        <p class="text-body-1 text-medium-emphasis mb-6">
          <code class="code-inline">"Poppins", sans-serif</code>
          — applied globally with system-specific fallbacks.
        </p>

        <VDivider class="mb-6" />

        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-4">
          Typography Tokens
        </h5>

        <!-- Preview Cards -->
        <VRow class="mb-6">
          <VCol
            v-for="t in typographyTokens"
            :key="t.token"
            cols="12"
            sm="6"
            lg="4"
          >
            <VCard
              variant="outlined"
              class="typo-card"
            >
              <VCardText class="pa-4">
                <div
                  :class="t.class"
                  class="font-weight-medium text-high-emphasis mb-1"
                >
                  {{ t.token === 'button' ? 'Button Text' : t.token === 'overline' ? 'OVERLINE TEXT' : 'AaBbCc 123' }}
                </div>
                <div class="text-caption text-medium-emphasis">
                  <span class="font-weight-medium">{{ t.class }}</span>
                  <span class="mx-1">•</span>
                  {{ t.size }}
                  <span class="mx-1">•</span>
                  Weight: {{ t.weight }}
                </div>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>

        <VDivider class="mb-6" />

        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-4">
              Token Reference Table
            </h5>

        <div class="table-responsive">
          <VTable class="typo-table">
            <thead>
              <tr>
                <th class="text-left font-weight-medium text-high-emphasis">Token</th>
                <th class="text-left font-weight-medium text-high-emphasis">Size</th>
                <th class="text-left font-weight-medium text-high-emphasis">Weight</th>
                <th class="text-left font-weight-medium text-high-emphasis">Line Height</th>
                <th class="text-left font-weight-medium text-high-emphasis">Letter Spacing</th>
                <th class="text-left font-weight-medium text-high-emphasis">Class</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="t in typographyTokens"
                :key="t.token"
              >
                <td class="font-weight-medium text-high-emphasis">{{ t.token }}</td>
                <td class="text-medium-emphasis">{{ t.size }}</td>
                <td class="text-medium-emphasis">{{ t.weight }}</td>
                <td class="text-medium-emphasis">{{ t.lineHeight }}</td>
                <td class="text-medium-emphasis">{{ t.letterSpacing }}</td>
                <td>
                  <code class="code-inline">{{ t.class }}</code>
                </td>
              </tr>
            </tbody>
          </VTable>
        </div>

        <VDivider class="my-6" />

        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-4">
          Live Preview
        </h5>

        <div class="d-flex flex-column gap-4">
          <div
            v-for="t in typographyTokens.slice(0, 9)"
            :key="t.token"
            class="d-flex align-baseline gap-4"
          >
            <span class="text-caption text-medium-emphasis" style="min-width: 90px;">
              {{ t.class }}
            </span>
            <span :class="t.class">
              The quick brown fox jumps over the lazy dog
            </span>
          </div>
        </div>
      </VCardText>
    </VCard>

    <!-- ════════════════════════════════ COLOR SYSTEM TAB ════════════════════════════════ -->
    <VCard v-if="activeTab === 'colors'">
      <VCardText class="pa-6">
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-2">
          Brand Primary Palette
        </h5>
        <p class="text-body-1 text-medium-emphasis mb-5">
          Green-based palette centered on <code class="code-inline">#10AF13</code>.
        </p>

        <!-- Primary Palette Swatches -->
        <VRow class="mb-6">
          <VCol
            v-for="c in primaryPalette"
            :key="c.token"
            cols="6"
            sm="4"
            md="3"
            lg="2"
          >
            <VCard variant="outlined" class="swatch-card">
              <div
                class="swatch-rect"
                :style="{ backgroundColor: c.light }"
              />
              <VCardText class="pa-2 text-center">
                <div class="text-caption font-weight-medium text-high-emphasis">{{ c.token }}</div>
                <div class="text-caption text-medium-emphasis">{{ c.light }}</div>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>

        <VDivider class="mb-6" />

        <!-- Opacity / Reference Tokens -->
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-4">
          Opacity / Reference Tokens
        </h5>

        <VRow class="mb-6">
          <VCol
            v-for="o in opacityTokens"
            :key="o.token"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <VCard variant="outlined" class="swatch-card">
              <div
                class="swatch-rect d-flex align-center justify-center"
                :style="{ backgroundColor: o.value }"
              >
                <span class="text-caption font-weight-medium" style="color: #fff; text-shadow: 0 1px 2px rgba(0,0,0,.5);">{{ o.opacity }}</span>
              </div>
              <VCardText class="pa-2 text-center">
                <div class="text-caption font-weight-medium text-high-emphasis">{{ o.token }}</div>
                <div class="text-caption text-medium-emphasis">{{ o.value }}</div>
                <div class="text-caption text-medium-emphasis">{{ o.desc }}</div>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>

        <VDivider class="mb-6" />

        <!-- Semantic Colors -->
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-4">
          Semantic Colors
        </h5>

        <VRow class="mb-6">
          <VCol
            v-for="c in semanticColors"
            :key="c.token"
            cols="12"
            sm="6"
            md="3"
          >
            <VCard variant="outlined" class="swatch-card">
              <div
                class="swatch-rect"
                :style="{ backgroundColor: c.light }"
              />
              <VCardText class="pa-2 text-center">
                <div class="text-caption font-weight-medium text-high-emphasis">{{ c.token }}</div>
                <div class="text-caption text-medium-emphasis">{{ c.light }}</div>
                <div class="text-caption text-medium-emphasis">{{ c.desc }}</div>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>

        <VDivider class="mb-6" />

        <!-- Grey Palette -->
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-4">
          Grey Palette
        </h5>

        <VTable class="color-table mb-6">
          <thead>
            <tr>
              <th class="font-weight-medium text-high-emphasis">Token</th>
              <th class="font-weight-medium text-high-emphasis">Light</th>
              <th class="font-weight-medium text-high-emphasis">Dark</th>
              <th class="font-weight-medium text-high-emphasis">Preview</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="g in greyPalette"
              :key="g.token"
            >
              <td class="font-weight-medium text-high-emphasis">{{ g.token }}</td>
              <td><code class="code-inline">{{ g.light }}</code></td>
              <td><code class="code-inline">{{ g.dark }}</code></td>
              <td>
                <div class="d-flex gap-2">
                  <div
                    class="swatch-mini"
                    :style="{ backgroundColor: g.light, border: '1px solid rgba(var(--v-theme-on-surface), 0.12)' }"
                  />
                  <div
                    class="swatch-mini"
                    :style="{ backgroundColor: g.dark }"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </VTable>

        <VDivider class="mb-6" />

        <!-- Surface & Background -->
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-4">
          Surface &amp; Background
        </h5>

        <VRow>
          <VCol
            v-for="s in surfaceColors"
            :key="s.token"
            cols="12"
            sm="6"
            md="3"
          >
            <VCard variant="outlined" class="swatch-card">
              <div
                class="swatch-rect"
                :style="{ backgroundColor: s.light }"
              />
              <VCardText class="pa-2 text-center">
                <div class="text-caption font-weight-medium text-high-emphasis">{{ s.token }}</div>
                <div class="text-caption text-medium-emphasis">{{ s.light }}</div>
                <div class="text-caption text-medium-emphasis">{{ s.desc }}</div>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <!-- ════════════════════════════════ COMPONENTS TAB ════════════════════════════════ -->
    <VCard v-if="activeTab === 'components'">
      <VCardText class="pa-6">
        <!-- Section: VBtn -->
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-2">
          Button
        </h5>
        <p class="text-body-1 text-medium-emphasis mb-4">
          Vuetify <code class="code-inline">VBtn</code> component in various styles used across the interface.
        </p>

        <VCard variant="outlined" class="mb-6">
          <VCardText class="pa-4 d-flex flex-wrap gap-3 align-center">
            <VBtn color="primary">
              <VIcon start icon="ri-check-line" />
              Primary
            </VBtn>
            <VBtn
              color="primary"
              variant="outlined"
            >
              <VIcon start icon="ri-check-line" />
              Outlined
            </VBtn>
            <VBtn
              color="primary"
              variant="tonal"
            >
              <VIcon start icon="ri-check-line" />
              Tonal
            </VBtn>
            <VBtn
              color="primary"
              variant="text"
            >
              <VIcon start icon="ri-check-line" />
              Text
            </VBtn>
            <VBtn
              icon="ri-check-line"
              color="success"
              variant="outlined"
              size="small"
              class="action-btn-demo"
            />
            <VBtn
              icon="ri-close-circle-line"
              color="error"
              variant="outlined"
              size="small"
              class="action-btn-demo"
            />
            <VBtn
              color="primary"
              rounded="xl"
              size="small"
              class="px-5"
            >
              Rounded Pill
            </VBtn>
          </VCardText>
        </VCard>

        <!-- Section: VBtnToggle -->
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-2">
          Button Toggle (View Switcher)
        </h5>
        <p class="text-body-1 text-medium-emphasis mb-4">
          Used on the assessments page to switch between List / Team / Room views.
        </p>

        <VCard variant="outlined" class="mb-6">
          <VCardText class="pa-4 d-flex align-center">
            <VBtnToggle
              v-model="demoViewType"
              mandatory
              class="custom-toggle-group-demo"
            >
              <VBtn
                value="list"
                icon="ri-list-unordered"
              />
              <VBtn
                value="team"
                icon="ri-team-line"
              />
              <VBtn
                value="room"
                icon="ri-door-closed-line"
              />
            </VBtnToggle>
          </VCardText>
        </VCard>

        <!-- Section: VChip -->
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-2">
          Chip (Status &amp; Score Badges)
        </h5>
        <p class="text-body-1 text-medium-emphasis mb-4">
          Vuetify <code class="code-inline">VChip</code> used for status indicators and score display.
        </p>

        <VCard variant="outlined" class="mb-6">
          <VCardText class="pa-4 d-flex flex-wrap gap-3 align-center">
            <VChip
              color="warning"
              variant="tonal"
              size="small"
              class="font-weight-medium"
            >
              Pending
            </VChip>
            <VChip
              color="success"
              variant="tonal"
              size="small"
              class="font-weight-medium"
            >
              Approved
            </VChip>
            <VChip
              color="error"
              variant="tonal"
              size="small"
              class="font-weight-medium"
            >
              Rejected
            </VChip>
            <VChip
              color="success"
              variant="tonal"
              size="small"
              class="font-weight-medium"
            >
              92
            </VChip>
            <VChip
              color="warning"
              variant="tonal"
              size="small"
              class="font-weight-medium"
            >
              65
            </VChip>
            <VChip
              color="error"
              variant="tonal"
              size="small"
              class="font-weight-medium"
            >
              48
            </VChip>
            <VChip
              color="info"
              variant="tonal"
              size="small"
              class="font-weight-medium"
            >
              3 Projects
            </VChip>
          </VCardText>
        </VCard>

        <!-- Section: VAvatar -->
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-2">
          Avatar (Initials)
        </h5>
        <p class="text-body-1 text-medium-emphasis mb-4">
          Vuetify <code class="code-inline">VAvatar</code> used with initials to represent students.
        </p>

        <VCard variant="outlined" class="mb-6">
          <VCardText class="pa-4 d-flex flex-wrap gap-3 align-center">
            <VAvatar
              size="34"
              color="grey-50"
              class="border"
              style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;"
            >
              <span class="text-caption font-weight-medium text-high-emphasis">JS</span>
            </VAvatar>
            <VAvatar
              size="34"
              color="grey-50"
              class="border"
              style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;"
            >
              <span class="text-caption font-weight-medium text-high-emphasis">CM</span>
            </VAvatar>
            <VAvatar
              size="34"
              color="grey-50"
              class="border"
              style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;"
            >
              <span class="text-caption font-weight-medium text-high-emphasis">JR</span>
            </VAvatar>
            <VAvatar
              size="40"
              class="bg-primary-opacity-lighter border"
              style="border-color: rgba(var(--v-theme-primary), 0.15) !important;"
            >
              <VIcon
                icon="ri-door-closed-line"
                color="primary"
                size="20"
              />
            </VAvatar>
            <VAvatar
              size="40"
              color="grey-50"
              class="border"
              style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;"
            >
              <span class="text-body-2 font-weight-medium text-high-emphasis">NT</span>
            </VAvatar>
          </VCardText>
        </VCard>

        <!-- Section: VTextField -->
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-2">
          Text Field &amp; Select
        </h5>
        <p class="text-body-1 text-medium-emphasis mb-4">
          Vuetify <code class="code-inline">VTextField</code> and <code class="code-inline">VSelect</code> used for filtering in the assessments page header.
        </p>

        <VCard variant="outlined" class="mb-6">
          <VCardText class="pa-4">
            <div class="d-flex flex-wrap gap-4">
              <div style="width: 240px">
                <VTextField
                  placeholder="Search student"
                  prepend-inner-icon="ri-search-line"
                  clearable
                />
              </div>
              <div style="width: 240px">
                <VSelect
                  v-model="selectedStatusFilter"
                  label="Status"
                  :items="statusFilterOptions"
                  clearable
                />
              </div>
              <div style="width: 240px">
                <VSelect
                  label="Class"
                  placeholder="All Classes"
                  :items="['All Classes', 'DPS-Adaptive-A', 'DPS-Adaptive-B', 'DPS-Adaptive-C']"
                  clearable
                />
              </div>
            </div>
          </VCardText>
        </VCard>

        <!-- Section: VTooltip -->
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-2">
          Tooltip
        </h5>
        <p class="text-body-1 text-medium-emphasis mb-4">
          Vuetify <code class="code-inline">VTooltip</code> used for icon button hints.
        </p>

        <VCard variant="outlined" class="mb-6">
          <VCardText class="pa-4 d-flex flex-wrap gap-3 align-center">
            <VTooltip
              text="Approve"
              location="top"
            >
              <template #activator="{ props }">
                <VBtn
                  v-bind="props"
                  icon="ri-check-line"
                  color="success"
                  variant="outlined"
                  size="small"
                  class="action-btn-demo"
                />
              </template>
            </VTooltip>
            <VTooltip
              text="Reject"
              location="top"
            >
              <template #activator="{ props }">
                <VBtn
                  v-bind="props"
                  icon="ri-close-circle-line"
                  color="error"
                  variant="outlined"
                  size="small"
                  class="action-btn-demo"
                />
              </template>
            </VTooltip>
            <VTooltip
              text="History"
              location="top"
            >
              <template #activator="{ props }">
                <VBtn
                  v-bind="props"
                  icon="ri-history-line"
                  variant="outlined"
                  size="small"
                  class="action-btn-demo"
                />
              </template>
            </VTooltip>
          </VCardText>
        </VCard>

        <!-- Section: VSnackbar -->
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-2">
          Snackbar (Toast Notification)
        </h5>
        <p class="text-body-1 text-medium-emphasis mb-4">
          Vuetify <code class="code-inline">VSnackbar</code> for success and error feedback messages.
        </p>

        <VCard variant="outlined" class="mb-6">
          <VCardText class="pa-4 d-flex flex-wrap gap-3">
            <VBtn
              color="success"
              @click="toast('success', 'Approved project successfully.')"
            >
              Show Success Toast
            </VBtn>
            <VBtn
              color="error"
              @click="toast('error', 'Rejected project.')"
            >
              Show Error Toast
            </VBtn>
            <VBtn
              color="warning"
              @click="toast('warning', 'This is a warning message.')"
            >
              Show Warning Toast
            </VBtn>
          </VCardText>
        </VCard>

        <!-- Section: VTabs -->
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-2">
          Tabs
        </h5>
        <p class="text-body-1 text-medium-emphasis mb-4">
          Vuetify <code class="code-inline">VTabs</code> with bordered style and count badges — as used for Project Approvals / Quiz &amp; Exams switching.
        </p>

        <VCard variant="outlined" class="mb-6">
          <VCardText class="pa-4">
            <VTabs class="v-tabs-bordered">
              <VTab value="projects-demo">
                <VIcon
                  start
                  icon="ri-file-text-line"
                  class="me-2"
                />
                Project Approvals
                <span class="count-badge-demo ms-2 bg-error text-white">20</span>
              </VTab>
              <VTab value="quizzes-demo">
                <VIcon
                  start
                  icon="ri-todo-line"
                  class="me-2"
                />
                Quiz &amp; Exams
                <span class="count-badge-demo ms-2 bg-primary text-white">15</span>
              </VTab>
            </VTabs>
          </VCardText>
        </VCard>

        <!-- Section: VDataTable -->
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-2">
          Data Table
        </h5>
        <p class="text-body-1 text-medium-emphasis mb-4">
          Vuetify <code class="code-inline">VDataTable</code> — the primary table component used on the assessments page for displaying student results.
        </p>

        <VCard variant="outlined" class="mb-6">
          <VDataTable
            :headers="[
              { title: 'Student Name', key: 'student' },
              { title: 'Book / Session', key: 'book' },
              { title: 'Score', key: 'score' },
              { title: 'Status', key: 'status' },
              { title: 'Action', key: 'action', sortable: false, align: 'center', width: '120px' },
            ]"
            :items="demoItems"
            :items-per-page="5"
            class="text-no-wrap"
            hide-default-footer
          >
            <!-- Student Avatar & Details -->
            <template #item.student="{ item }">
              <div class="d-flex align-center py-2">
                <VAvatar
                  size="34"
                  class="me-3"
                  color="grey-50"
                >
                  <span class="text-caption font-weight-medium">{{ item.initials }}</span>
                </VAvatar>
                <div class="d-flex flex-column">
                  <span class="text-body-1 font-weight-medium text-high-emphasis">{{ item.name }}</span>
                  <span class="text-body-2 text-medium-emphasis">{{ item.studentId }}</span>
                </div>
              </div>
            </template>

            <!-- Score pill -->
            <template #item.score="{ item }">
              <VChip
                :color="getScoreColor(item.score)"
                variant="tonal"
                size="small"
                class="font-weight-medium"
              >
                {{ item.score }}
              </VChip>
            </template>

            <!-- Status pill -->
            <template #item.status="{ item }">
              <VChip
                :color="getStatusColor(item.status)"
                variant="tonal"
                size="small"
                class="font-weight-medium text-capitalize"
              >
                {{ item.status }}
              </VChip>
            </template>

            <!-- Action buttons -->
            <template #item.action="{ item }">
              <div class="d-flex justify-center gap-2">
                <VTooltip
                  text="Approve"
                  location="top"
                >
                  <template #activator="{ props }">
                    <VBtn
                      v-bind="props"
                      icon="ri-check-line"
                      color="success"
                      variant="outlined"
                      size="small"
                      class="action-btn-demo"
                      :disabled="item.status === 'Approved'"
                    />
                  </template>
                </VTooltip>
                <VTooltip
                  text="Reject"
                  location="top"
                >
                  <template #activator="{ props }">
                    <VBtn
                      v-bind="props"
                      icon="ri-close-circle-line"
                      color="error"
                      variant="outlined"
                      size="small"
                      class="action-btn-demo"
                      :disabled="item.status === 'Rejected'"
                    />
                  </template>
                </VTooltip>
              </div>
            </template>

            <template #no-data>
              <div class="py-6 text-center text-medium-emphasis">
                No records found.
              </div>
            </template>
          </VDataTable>
        </VCard>

        <!-- Section: VCard with divider -->
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-2">
          Card &amp; Divider
        </h5>
        <p class="text-body-1 text-medium-emphasis mb-4">
          Vuetify <code class="code-inline">VCard</code> and <code class="code-inline">VDivider</code> — the foundational layout containers used throughout the assessments page.
        </p>

        <VCard variant="outlined" class="mb-6">
          <VCardItem>
            <VCardTitle class="font-weight-medium text-high-emphasis">
              Card with Title &amp; Text
            </VCardTitle>
          </VCardItem>
          <VCardText class="text-medium-emphasis">
            This is a standard VCard with a title and body text — the primary container for tab content on the assessments page.
          </VCardText>
          <VDivider />
          <VCardText class="text-medium-emphasis">
            Content below a divider — used for filter sections above the data table.
          </VCardText>
        </VCard>

        <!-- Code usage examples -->
        <VDivider class="my-6" />

        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-4">
          How It's Used in assessments.vue
        </h5>

        <VCard variant="outlined">
          <VCardText class="pa-4">
            <p class="text-body-1 mb-4 text-medium-emphasis">
              The assessments page combines all of the above components to create a full-featured assessment management interface with three view modes:
            </p>
            <VRow class="mb-2">
              <VCol
                cols="12"
                md="4"
              >
                <VCard
                  class="bg-primary-opacity-lighter pa-4 text-center"
                  variant="flat"
                >
                  <VIcon
                    icon="ri-list-unordered"
                    color="primary"
                    size="28"
                    class="mb-2"
                  />
                  <div class="text-body-1 font-weight-medium text-high-emphasis">List View</div>
                  <div class="text-caption text-medium-emphasis">VDataTable with inline editing</div>
                </VCard>
              </VCol>
              <VCol
                cols="12"
                md="4"
              >
                <VCard
                  class="bg-primary-opacity-lighter pa-4 text-center"
                  variant="flat"
                >
                  <VIcon
                    icon="ri-team-line"
                    color="primary"
                    size="28"
                    class="mb-2"
                  />
                  <div class="text-body-1 font-weight-medium text-high-emphasis">Team View</div>
                  <div class="text-caption text-medium-emphasis">Grouped accordion by student</div>
                </VCard>
              </VCol>
              <VCol
                cols="12"
                md="4"
              >
                <VCard
                  class="bg-primary-opacity-lighter pa-4 text-center"
                  variant="flat"
                >
                  <VIcon
                    icon="ri-door-closed-line"
                    color="primary"
                    size="28"
                    class="mb-2"
                  />
                  <div class="text-body-1 font-weight-medium text-high-emphasis">Room View</div>
                  <div class="text-caption text-medium-emphasis">Grouped accordion by class</div>
                </VCard>
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCardText>
    </VCard>

    <!-- ════════════════════════════════ COMPONENT REVIEW TAB ════════════════════════════════ -->
    <VCard v-else-if="activeTab === 'component-review'">
      <VCardText class="pa-6">
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-4">
          UiTableView Component Showcase
        </h5>
        
        <div class="mb-6">
          <p class="text-body-1 text-medium-emphasis">
            Interactive preview of the new reusable table layout component:
          </p>
        </div>

        <UiTableView
          title="Demo Page Header"
          description="Demo description of page data table"
          :tabs="reviewTabs"
          v-model:activeTab="reviewActiveTab"
          v-model:viewType="reviewViewType"
          :headers="reviewHeaders"
          :items="filteredReviewItems"
          :show-view-toggle="true"
          :loading="reviewLoading"
          @reset-filters="resetReviewFilters"
        >
          <!-- Filters Slot -->
          <template #filters>
            <div style="width: 240px">
              <VTextField
                v-model="reviewSearch"
                placeholder="Search student"
                prepend-inner-icon="ri-search-line"
                clearable
              />
            </div>
            <div style="width: 240px">
              <VSelect
                v-model="reviewSelectedStatus"
                label="Status"
                :items="reviewStatusOptions"
                clearable
              />
            </div>
            
            <!-- Dynamic second row filter to test 2-row layout wrapping -->
            <div style="width: 240px" v-if="reviewActiveTab === 'quiz'">
              <VSelect
                v-model="reviewSelectedQuiz"
                label="Quiz Type"
                :items="['All', 'Quiz', 'Exam']"
                clearable
              />
            </div>
          </template>

          <template #header-actions>
            <div class="d-flex align-center gap-2">
              <VCheckbox
                v-model="reviewLoading"
                label="Simulate Loading State"
                hide-details
                density="compact"
              />
            </div>
          </template>

          <!-- Custom Item Rendering (Table Columns) -->
          <template #item.student="{ item }">
            <div class="d-flex align-center py-2">
              <VAvatar
                size="34"
                class="me-3"
                color="grey-50"
              >
                <span class="text-caption font-weight-medium">{{ item.initials }}</span>
              </VAvatar>
              <div class="d-flex flex-column">
                <span class="text-body-1 font-weight-medium text-high-emphasis">{{ item.name }}</span>
                <span class="text-body-2 text-medium-emphasis">{{ item.studentId }}</span>
              </div>
            </div>
          </template>

          <template #item.status="{ item }">
            <VChip
              :color="getStatusColor(item.status)"
              variant="tonal"
              size="small"
              class="font-weight-medium text-capitalize"
            >
              {{ item.status }}
            </VChip>
          </template>

          <template #item.score="{ item }">
            <VChip
              :color="getScoreColor(item.score)"
              variant="tonal"
              size="small"
              class="font-weight-medium"
            >
              {{ item.score }}
            </VChip>
          </template>

          <template #item.action="{ item }">
            <VBtn
              size="small"
              color="primary"
              variant="outlined"
              @click="toast('success', `Clicked action for ${item.name}`)"
            >
              Action
            </VBtn>
          </template>

          <!-- Custom team view slot -->
          <template #view-team="{ items }">
            <div class="pa-5">
              <h6 class="text-h6 mb-4">Team View Accordion / Custom Layout</h6>
              <VRow>
                <VCol
                  v-for="item in items"
                  :key="item.studentId"
                  cols="12"
                  md="4"
                >
                  <VCard variant="outlined">
                    <VCardText class="d-flex align-center gap-3">
                      <VAvatar color="primary-opacity-lighter" class="text-primary">{{ item.initials }}</VAvatar>
                      <div>
                        <div class="font-weight-medium">{{ item.name }}</div>
                        <div class="text-caption">{{ item.book }}</div>
                      </div>
                    </VCardText>
                  </VCard>
                </VCol>
              </VRow>
            </div>
          </template>

          <!-- Custom room view slot -->
          <template #view-room="{ items }">
            <div class="pa-5">
              <h6 class="text-h6 mb-4">Room View Custom Layout</h6>
              <VAlert type="info" variant="tonal" class="mb-4">
                Mocking room grouping inside parent slot using {{ items.length }} items.
              </VAlert>
              <VList border rounded>
                <VListItem
                  v-for="item in items"
                  :key="item.studentId"
                  :title="item.name"
                  :subtitle="`Classroom: Room A • ${item.lessonName}`"
                />
              </VList>
            </div>
          </template>
        </UiTableView>
      </VCardText>
    </VCard>

    <!-- Snackbar Toast -->
    <VSnackbar
      v-model="showSnackbar"
      :color="snackbarColor"
      timeout="3000"
    >
      {{ snackbarText }}
    </VSnackbar>
  </section>
</template>

<style lang="scss" scoped>
// ─── Code inline styling ───
.code-inline {
  background-color: rgba(var(--v-theme-on-surface), 0.06);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.8125rem;
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
}

// ─── Typography cards ───
.typo-card {
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 2px 8px rgba(var(--v-theme-on-surface), 0.08);
  }
}

// ─── Tables ───
.table-responsive {
  overflow-x: auto;
}

.typo-table,
.color-table {
  th {
    font-size: 0.8125rem;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
    padding: 12px 16px !important;
    border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.12);
  }

  td {
    padding: 12px 16px !important;
    border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.06);
    font-size: 0.875rem;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }
}

// ─── Color swatches ───
.swatch-card {
  transition: transform 0.15s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(var(--v-theme-on-surface), 0.1);
  }
}

.swatch-rect {
  height: 56px;
  border-radius: 6px 6px 0 0;
}

.swatch-mini {
  width: 24px;
  height: 24px;
  border-radius: 4px;
}

// ─── Count badge (replica of assessments.vue style) ───
.count-badge-demo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 500px;
  padding: 2px 8px;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
  min-width: 24px;
  height: 18px;
}

// ─── Action buttons ───
.action-btn-demo {
  border-color: rgba(var(--v-theme-on-surface), 0.08) !important;
  border-radius: 4px;

  &:hover {
    background-color: rgba(var(--v-theme-on-surface), 0.04);
  }
}

// ─── Custom toggle group (replica) ───
.custom-toggle-group-demo {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.12) !important;
  border-radius: 8px !important;
  padding: 7px !important;
  background-color: rgb(var(--v-theme-surface)) !important;
  height: 50px !important;
  align-items: center;
  display: inline-flex;
  box-shadow: none !important;

  .v-btn {
    border-radius: 4px !important;
    height: 36px !important;
    min-width: 36px !important;
    width: 36px !important;
    margin: 0 !important;
    border: none !important;
    background-color: transparent !important;
    color: rgba(var(--v-theme-on-surface), 0.7) !important;
    box-shadow: none !important;

    &.v-btn--active {
      background-color: rgba(var(--v-theme-on-surface), 0.08) !important;
      color: rgba(var(--v-theme-on-surface), 0.9) !important;

      .v-btn__overlay {
        opacity: 0 !important;
      }
    }

    &:not(.v-btn--active):hover {
      background-color: rgba(var(--v-theme-on-surface), 0.04) !important;
    }
  }

  &.v-btn-group--divided .v-btn:not(:last-child) {
    border-inline-end-color: transparent !important;
  }
}
</style>
