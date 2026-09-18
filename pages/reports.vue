<script setup lang="ts">
import { avatarText } from '@core/utils/formatters'

definePageMeta({
  sidebarRoute: 'reports',
})

type ReportsTab = 'daily-journal' | 'reports' | 'ptm'
type JournalStatus = 'Not Created' | 'Pending'
type ReportStatus = 'Not Created' | 'Waiting for Daily Journal' | 'Created'
type PtmStatus = 'Pending' | 'Confirmed'
type RowStatus = JournalStatus | ReportStatus | PtmStatus
type ViewType = 'flat' | 'student' | 'class'
type ReportGroup = { key: string; order: 'asc' }

interface ReportRow {
  id: string
  studentName: string
  studentId: string
  bookSession: string
  lessonName?: string
  lessons?: string
  className?: string
  date?: string
  dailyJournalsDone?: number
  dailyJournalsTotal?: number
  reportsDone?: number
  reportsTotal?: number
  status: RowStatus
}

const activeTab = ref<ReportsTab>('daily-journal')
const searchQuery = ref('')
const selectedClass = ref('All Classes')
const selectedStatus = ref('All Status')
const viewType = ref<ViewType>('flat')
const currentPage = ref(1)
const itemsPerPage = ref(10)
const isLoading = ref(true)
const toastShow = ref(false)
const toastText = ref('')
const isReportDialogOpen = ref(false)
const selectedReport = ref<ReportRow | null>(null)
let loadingTimer: ReturnType<typeof setTimeout> | undefined

const dailyJournalData = ref<ReportRow[]>([
  { id: 'dj-1', studentName: 'I Wayan Sahadewa Putra', studentId: 'STD-20260109-001', bookSession: 'Python Game Dev', lessonName: 'Lesson 7 – Add Another Sprite', className: 'DPS-Adaptive-8C', date: '2026-04-20', status: 'Not Created' },
  { id: 'dj-2', studentName: 'Winston Arya Liaudo', studentId: 'STD-20260109-003', bookSession: 'Web Developer', lessonName: 'Lesson 7 – JS Basics', date: '2026-03-24', status: 'Not Created' },
  { id: 'dj-3', studentName: 'Winston Arya Liaudo', studentId: 'STD-20260109-003', bookSession: 'Web Developer', lessonName: 'Lesson 8 – JS Functions', date: '2026-04-07', status: 'Pending' },
  { id: 'dj-4', studentName: 'Winston Arya Liaudo', studentId: 'STD-20260109-003', bookSession: 'Web Developer', lessonName: 'Lesson 9 – CSS Flexbox', date: '2026-04-15', status: 'Not Created' },
  { id: 'dj-5', studentName: 'Sean Nehemiah Pranoto', studentId: 'STD-20260109-004', bookSession: 'Python Game Dev', lessonName: 'Lesson 1 – Intro to Pygame', date: '2026-04-07', status: 'Not Created' },
  { id: 'dj-6', studentName: 'Sean Nehemiah Pranoto', studentId: 'STD-20260109-004', bookSession: 'Python Game Dev', lessonName: 'Lesson 2 – Game Loop', date: '2026-04-14', status: 'Not Created' },
  { id: 'dj-7', studentName: 'Sean Nehemiah Pranoto', studentId: 'STD-20260109-004', bookSession: 'Python Game Dev', lessonName: 'Lesson 3 – Sprites', className: 'DPS-Adaptive-8C', date: '2026-04-20', status: 'Not Created' },
  { id: 'dj-8', studentName: 'Sean Nehemiah Pranoto', studentId: 'STD-20260109-004', bookSession: 'Python Game Dev', lessonName: 'Lesson 4 – Canvas Setup', date: '2026-04-27', status: 'Not Created' },
  { id: 'dj-9', studentName: 'Sean Nehemiah Pranoto', studentId: 'STD-20260109-004', bookSession: 'Python Game Dev', lessonName: 'Lesson 5 – FPS Control', date: '2026-05-04', status: 'Not Created' },
  { id: 'dj-10', studentName: 'Sean Nehemiah Pranoto', studentId: 'STD-20260109-004', bookSession: 'Python Game Dev', lessonName: 'Lesson 6 – Sound Effects', date: '2026-05-11', status: 'Not Created' },
  { id: 'dj-11', studentName: 'Sean Nehemiah Pranoto', studentId: 'STD-20260109-004', bookSession: 'Python Game Dev', lessonName: 'Lesson 7 – Add Sprite', date: '2026-05-18', status: 'Not Created' },
  { id: 'dj-12', studentName: 'Sean Nehemiah Pranoto', studentId: 'STD-20260109-004', bookSession: 'Python Game Dev', lessonName: 'Lesson 8 – Collision', date: '2026-05-25', status: 'Not Created' },
  { id: 'dj-13', studentName: 'Velcan Kido Andika', studentId: 'STD-20260109-005', bookSession: 'IoT Kids', lessonName: 'Lesson 6 – Sensors', date: '2026-04-16', status: 'Not Created' },
  { id: 'dj-14', studentName: 'Velcan Kido Andika', studentId: 'STD-20260109-005', bookSession: 'Python Game Dev', lessonName: 'Lesson 8 – Collision', date: '2026-02-28', status: 'Not Created' },
  { id: 'dj-15', studentName: 'Reinhart Yohanes Ernathan', studentId: 'STD-20260122-002', bookSession: 'IoT Kids', lessonName: 'Lesson 3 – LED Control', date: '2026-04-15', status: 'Not Created' },
  { id: 'dj-16', studentName: 'Daffa Diandi Althaf', studentId: 'STD-20260119-001', bookSession: 'Web Developer', lessonName: 'Lesson 8 – Responsive Layout', date: '2026-04-12', status: 'Not Created' },
])

const reportsData = ref<ReportRow[]>([
  { id: 'report-1', studentName: 'Putu Pradhira Armananda', studentId: 'STD-20260109-002', bookSession: 'Roblox Studio', lessons: 'Lessons 1–8', dailyJournalsDone: 8, dailyJournalsTotal: 8, status: 'Created' },
  { id: 'report-2', studentName: 'Winston Arya Liaudo', studentId: 'STD-20260109-003', bookSession: 'Web Developer', lessons: 'Lessons 1–8', dailyJournalsDone: 7, dailyJournalsTotal: 8, status: 'Waiting for Daily Journal' },
  { id: 'report-3', studentName: 'Winston Arya Liaudo', studentId: 'STD-20260109-003', bookSession: 'Python Beginner', lessons: 'Lessons 1–8', dailyJournalsDone: 8, dailyJournalsTotal: 8, status: 'Not Created' },
  { id: 'report-4', studentName: 'Sean Nehemiah Pranoto', studentId: 'STD-20260109-004', bookSession: 'Python Game Dev', lessons: 'Lessons 1–8', className: 'DPS-Adaptive-8C', dailyJournalsDone: 0, dailyJournalsTotal: 8, status: 'Waiting for Daily Journal' },
  { id: 'report-5', studentName: 'Velcan Kido Andika', studentId: 'STD-20260109-005', bookSession: 'Python Game Dev', lessons: 'Lessons 1–8', dailyJournalsDone: 7, dailyJournalsTotal: 8, status: 'Created' },
  { id: 'report-6', studentName: 'Kynan Go', studentId: 'STD-20260122-001', bookSession: 'Web Developer', lessons: 'Lessons 1–8', dailyJournalsDone: 8, dailyJournalsTotal: 8, status: 'Not Created' },
  { id: 'report-7', studentName: 'Daffa Diandi Althaf', studentId: 'STD-20260119-001', bookSession: 'Web Developer', lessons: 'Lessons 1–8', dailyJournalsDone: 7, dailyJournalsTotal: 8, status: 'Waiting for Daily Journal' },
  { id: 'report-8', studentName: 'I Wayan Sahadewa Putra', studentId: 'STD-20260109-001', bookSession: 'Scratch Basic', lessons: 'Lessons 1–2', dailyJournalsDone: 2, dailyJournalsTotal: 2, status: 'Created' },
])

const ptmData = ref<ReportRow[]>([
  { id: 'ptm-1', studentName: 'I Wayan Sahadewa Putra', studentId: 'STD-20260109-001', bookSession: 'Scratch Basic', className: 'DPS-Adaptive-8C', reportsDone: 2, reportsTotal: 2, status: 'Pending' },
  { id: 'ptm-2', studentName: 'Putu Pradhira Armananda', studentId: 'STD-20260109-002', bookSession: 'Roblox Studio', className: 'DPS-Adaptive-3B', reportsDone: 1, reportsTotal: 1, status: 'Pending' },
  { id: 'ptm-3', studentName: 'Winston Arya Liaudo', studentId: 'STD-20260109-003', bookSession: 'Python Beginner', className: 'DPS-Teens-2B', reportsDone: 0, reportsTotal: 2, status: 'Pending' },
  { id: 'ptm-4', studentName: 'Velcan Kido Andika', studentId: 'STD-20260109-005', bookSession: 'Python Game Dev', className: 'DPS-Adaptive-2A', reportsDone: 1, reportsTotal: 2, status: 'Pending' },
])

const dailyJournalCount = computed(() => dailyJournalData.value.length)
const reportsCount = computed(() => reportsData.value.length)
const ptmCount = computed(() => ptmData.value.length)

const tabs = computed(() => [
  { label: 'Pending Daily Journal', value: 'daily-journal' as const, count: dailyJournalCount.value, icon: 'ri-book-open-line' },
  { label: 'Reports', value: 'reports' as const, count: reportsCount.value, icon: 'ri-file-list-3-line' },
  { label: 'PTM', value: 'ptm' as const, count: ptmCount.value, icon: 'ri-user-heart-line' },
])

const currentData = computed(() => {
  if (activeTab.value === 'reports') return reportsData.value
  if (activeTab.value === 'ptm') return ptmData.value

  return dailyJournalData.value
})

const tableHeaders = computed(() => {
  if (activeTab.value === 'reports') {
    return [
      { title: 'STUDENT', key: 'student', sortable: false, minWidth: '240px' },
      { title: 'BOOK / SESSION', key: 'bookSession', sortable: false, minWidth: '180px' },
      { title: 'LESSONS', key: 'lessons', sortable: false, minWidth: '180px' },
      { title: 'CLASS', key: 'className', sortable: false, minWidth: '170px' },
      { title: 'PROGRESS', key: 'progress', sortable: false, minWidth: '190px' },
      { title: 'STATUS', key: 'status', sortable: false, minWidth: '210px' },
      { title: 'ACTION', key: 'action', sortable: false, align: 'end' as const, minWidth: '190px' },
    ]
  }

  if (activeTab.value === 'ptm') {
    return [
      { title: 'STUDENT', key: 'student', sortable: false, minWidth: '260px' },
      { title: 'BOOK', key: 'bookSession', sortable: false, minWidth: '220px' },
      { title: 'REPORTS', key: 'reports', sortable: false, minWidth: '240px' },
      { title: 'STATUS', key: 'status', sortable: false, minWidth: '180px' },
      { title: '', key: 'action', sortable: false, align: 'center' as const, width: '84px' },
    ]
  }

  return [
    { title: 'STUDENT', key: 'student', sortable: false, minWidth: '240px' },
    { title: 'BOOK / SESSION', key: 'bookSession', sortable: false, minWidth: '180px' },
    { title: 'LESSON', key: 'lessonName', sortable: false, minWidth: '260px' },
    { title: 'CLASS', key: 'className', sortable: false, minWidth: '170px' },
    { title: 'DATE', key: 'date', sortable: false, minWidth: '150px' },
    { title: 'STATUS', key: 'status', sortable: false, minWidth: '160px' },
    { title: 'ACTION', key: 'action', sortable: false, align: 'end' as const, minWidth: '150px' },
  ]
})

const classOptions = computed(() => {
  const classes = currentData.value
    .map(item => item.className)
    .filter((className): className is string => Boolean(className && className !== '-'))

  return ['All Classes', ...new Set(classes)]
})

const reportStatusOptions = computed(() => [
  'All Status',
  ...new Set(reportsData.value.map(item => item.status).filter((status): status is ReportStatus => status !== 'Pending' && status !== 'Confirmed')),
])

const currentStatusOptions = computed(() => {
  if (activeTab.value === 'reports') return reportStatusOptions.value.slice(1)
  if (activeTab.value === 'ptm') return ['Pending', 'Confirmed']

  return ['Not Created', 'Pending']
})

const filteredData = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return currentData.value.filter(item => {
    const searchableValues = [
      item.studentName,
      item.studentId,
      item.bookSession,
      item.lessonName,
      item.lessons,
      item.className,
    ]
    const matchesSearch = !query || searchableValues.some(value => value?.toLowerCase().includes(query))
    const matchesClass = selectedClass.value === 'All Classes' || item.className === selectedClass.value
    const matchesStatus = activeTab.value !== 'reports' || selectedStatus.value === 'All Status' || item.status === selectedStatus.value

    return matchesSearch && matchesClass && matchesStatus
  })
})

const hasActiveFilter = computed(() =>
  Boolean(searchQuery.value) || selectedClass.value !== 'All Classes' || selectedStatus.value !== 'All Status',
)

const tableGroupBy = computed<ReportGroup[]>(() => {
  if (viewType.value === 'student') return [{ key: 'studentName', order: 'asc' }]
  if (viewType.value === 'class') return [{ key: 'className', order: 'asc' }]

  return []
})

const pageSubtitle = computed(() =>
  activeTab.value === 'ptm'
    ? 'Students with completed books — schedule parent-teacher meetings'
    : 'Pending daily journals and student reports',
)

const formatDate = (dateStr?: string) => {
  if (!dateStr) return '—'

  return new Date(dateStr + 'T00:00:00Z').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

const statusColor = (status: RowStatus) => {
  if (status === 'Pending' || status === 'Waiting for Daily Journal') return 'warning'
  if (status === 'Created' || status === 'Confirmed') return 'success'

  return 'secondary'
}

const progressColor = (done: number, total: number) => {
  if (done <= 0) return 'secondary'
  if (done >= total) return 'success'

  return 'primary'
}

const resetFilters = () => {
  searchQuery.value = ''
  selectedClass.value = 'All Classes'
  selectedStatus.value = 'All Status'
}

const showToast = (message: string) => {
  toastText.value = message
  toastShow.value = true
}

const runJournalAction = (item: ReportRow, action: 'Create' | 'Edit' | 'Send') => {
  if (action === 'Create') {
    item.status = 'Pending'
    showToast('Daily Journal draft created in demo mode.')
    return
  }

  showToast(action + ' action is a prototype only for ' + item.studentName + '.')
}

const runReportAction = (item: ReportRow) => {
  if (item.status === 'Waiting for Daily Journal') {
    activeTab.value = 'daily-journal'
    searchQuery.value = item.studentName
    selectedClass.value = 'All Classes'
    selectedStatus.value = 'All Status'
    viewType.value = 'flat'
    showToast('Showing Daily Journals for ' + item.studentName + '.')
    return
  }

  if (item.status === 'Not Created') {
    item.status = 'Created'
    showToast('Report marked as created in demo mode.')
    return
  }

  selectedReport.value = item
  isReportDialogOpen.value = true
}

const confirmPtm = (item: ReportRow) => {
  if (item.status !== 'Pending') return

  item.status = 'Confirmed'
  showToast('PTM confirmed for ' + item.studentName + '.')
}

watch([activeTab, searchQuery, selectedClass, selectedStatus, viewType], () => {
  currentPage.value = 1
})

watch(activeTab, () => {
  selectedClass.value = 'All Classes'
  selectedStatus.value = 'All Status'
  viewType.value = 'flat'
})

onMounted(() => {
  loadingTimer = setTimeout(() => {
    isLoading.value = false
  }, 450)
})

onBeforeUnmount(() => {
  if (loadingTimer) clearTimeout(loadingTimer)
})
</script>

<template>
  <section class="reports-page">
    <header class="mb-5">
      <h1 class="text-h4 font-weight-medium text-high-emphasis mb-1">
        Reports
      </h1>
      <p class="text-body-1 text-medium-emphasis mb-0">
        {{ pageSubtitle }}
      </p>
    </header>

    <VTabs
      v-model="activeTab"
      class="report-tabs v-tabs-bordered mb-6"
      aria-label="Report types"
    >
      <VTab
        v-for="tab in tabs"
        :key="tab.value"
        :value="tab.value"
        class="report-tab"
      >
        <VIcon start :icon="tab.icon" class="me-2" />
        {{ tab.label }}
        <span
          class="count-badge ms-2"
          :class="activeTab === tab.value ? 'bg-primary text-white' : 'bg-secondary text-white'"
        >
          {{ tab.count }}
        </span>
      </VTab>
    </VTabs>

    <VCard class="report-card">
      <VCardText class="report-filter-bar">
        <div class="report-filter-fields">
          <VTextField
            v-model="searchQuery"
            class="report-filter-field"
            label="Search student"
            placeholder="Search student..."
            prepend-inner-icon="ri-search-line"
            clearable
            hide-details
            density="compact"
            variant="outlined"
          />
          <VSelect
            v-model="selectedClass"
            class="report-filter-field"
            label="Class"
            :items="classOptions"
            hide-details
            density="compact"
            variant="outlined"
          />
          <VSelect
            v-if="activeTab === 'reports'"
            v-model="selectedStatus"
            class="report-filter-field"
            label="Status"
            :items="['All Status', ...currentStatusOptions]"
            hide-details
            density="compact"
            variant="outlined"
          />
          <VBtn
            v-if="hasActiveFilter"
            variant="text"
            color="primary"
            @click="resetFilters"
          >
            Reset filter
          </VBtn>
        </div>

        <VBtnToggle
          v-if="activeTab !== 'ptm'"
          v-model="viewType"
          class="report-view-toggle"
          mandatory
          aria-label="Change report grouping"
        >
          <VBtn
            value="flat"
            icon="ri-list-unordered"
            aria-label="Flat list"
            title="Flat list"
          />
          <VBtn
            value="student"
            icon="ri-team-line"
            aria-label="Group by student"
            title="Group by student"
          />
          <VBtn
            value="class"
            icon="ri-door-closed-line"
            aria-label="Group by class"
            title="Group by class"
          />
        </VBtnToggle>
      </VCardText>

      <VDivider />

      <div v-if="isLoading" class="pa-6" aria-label="Loading reports">
        <VSkeletonLoader
          v-for="index in 3"
          :key="index"
          type="table-row-divider@4"
          class="mb-2"
        />
      </div>

      <div
        v-else-if="filteredData.length === 0"
        class="report-empty-state py-12 text-center"
        role="status"
      >
        <VIcon icon="ri-file-search-line" size="42" color="secondary" class="mb-2" />
        <p class="text-body-1 text-medium-emphasis mb-2">
          No matching {{ activeTab === 'ptm' ? 'PTM records' : 'reports' }} found.
        </p>
        <VBtn
          v-if="hasActiveFilter"
          variant="text"
          color="primary"
          @click="resetFilters"
        >
          Clear filters
        </VBtn>
      </div>

      <VDataTable
        v-else
        v-model:page="currentPage"
        v-model:items-per-page="itemsPerPage"
        :headers="tableHeaders"
        :items="filteredData"
        :group-by="tableGroupBy"
        :items-per-page-options="[5, 10, 20]"
        :class="['report-table', 'report-table--' + activeTab]"
      >
        <template #item.student="{ item }">
          <div class="report-student-cell">
            <VAvatar
              size="34"
              color="primary"
              variant="tonal"
              class="report-student-avatar"
            >
              <span class="text-caption font-weight-medium">{{ avatarText(item.studentName) }}</span>
            </VAvatar>
            <div class="report-student-copy">
              <span class="text-body-2 font-weight-medium text-high-emphasis">{{ item.studentName }}</span>
              <span class="text-caption text-medium-emphasis">{{ item.studentId }}</span>
            </div>
          </div>
        </template>

        <template #item.bookSession="{ item }">
          <span class="text-body-2 text-high-emphasis">{{ item.bookSession }}</span>
        </template>

        <template #item.lessonName="{ item }">
          <span class="text-body-2 text-high-emphasis">{{ item.lessonName }}</span>
        </template>

        <template #item.lessons="{ item }">
          <span class="text-body-2 text-high-emphasis">{{ item.lessons }}</span>
        </template>

        <template #item.className="{ item }">
          <span class="text-body-2 text-medium-emphasis">{{ item.className || '—' }}</span>
        </template>

        <template #item.date="{ item }">
          <span class="text-body-2 text-high-emphasis">{{ formatDate(item.date) }}</span>
        </template>

        <template #item.progress="{ item }">
          <div class="report-progress-cell">
            <VProgressLinear
              :model-value="item.dailyJournalsTotal ? (item.dailyJournalsDone || 0) / item.dailyJournalsTotal * 100 : 0"
              :color="progressColor(item.dailyJournalsDone || 0, item.dailyJournalsTotal || 0)"
              height="7"
              rounded
              aria-hidden="true"
            />
            <span class="text-body-2 font-weight-medium text-no-wrap">
              {{ item.dailyJournalsDone || 0 }}/{{ item.dailyJournalsTotal || 0 }} DJ
            </span>
          </div>
        </template>

        <template #item.reports="{ item }">
          <div class="report-progress-cell">
            <VProgressLinear
              :model-value="item.reportsTotal ? (item.reportsDone || 0) / item.reportsTotal * 100 : 0"
              :color="progressColor(item.reportsDone || 0, item.reportsTotal || 0)"
              height="7"
              rounded
              aria-hidden="true"
            />
            <span class="text-body-2 font-weight-medium text-no-wrap">
              {{ item.reportsDone || 0 }}/{{ item.reportsTotal || 0 }}
            </span>
          </div>
        </template>

        <template #item.status="{ item }">
          <VChip
            :color="statusColor(item.status)"
            variant="tonal"
            size="small"
            class="font-weight-medium"
          >
            {{ item.status }}
          </VChip>
        </template>

        <template #item.action="{ item }">
          <div v-if="activeTab === 'daily-journal'" class="report-actions">
            <template v-if="item.status === 'Not Created'">
              <VBtn
                color="primary"
                variant="text"
                size="small"
                @click="runJournalAction(item, 'Create')"
              >
                Create
              </VBtn>
            </template>
            <template v-else>
              <VBtn
                color="secondary"
                variant="text"
                size="small"
                @click="runJournalAction(item, 'Edit')"
              >
                Edit
              </VBtn>
              <VBtn
                color="primary"
                variant="text"
                size="small"
                @click="runJournalAction(item, 'Send')"
              >
                Send
              </VBtn>
            </template>
          </div>

          <div v-else-if="activeTab === 'reports'" class="report-actions">
            <VBtn
              v-if="item.status === 'Waiting for Daily Journal'"
              color="primary"
              variant="text"
              size="small"
              @click="runReportAction(item)"
            >
              Create Daily Journal
            </VBtn>
            <VBtn
              v-else-if="item.status === 'Not Created'"
              color="primary"
              variant="text"
              size="small"
              @click="runReportAction(item)"
            >
              Create Report
            </VBtn>
            <VBtn
              v-else
              color="primary"
              variant="text"
              size="small"
              @click="runReportAction(item)"
            >
              View
            </VBtn>
          </div>

          <div v-else class="report-actions report-actions--center">
            <VMenu location="bottom end">
              <template #activator="{ props: menuProps }">
                <VBtn
                  v-bind="menuProps"
                  icon="ri-more-2-fill"
                  variant="outlined"
                  color="secondary"
                  size="small"
                  class="ptm-menu-button"
                  :aria-label="'More actions for ' + item.studentName"
                />
              </template>
              <VList density="compact" min-width="180">
                <VListItem
                  :disabled="item.status !== 'Pending'"
                  @click="confirmPtm(item)"
                >
                  <template #prepend>
                    <VIcon icon="ri-calendar-check-line" />
                  </template>
                  <VListItemTitle>Confirm PTM</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </div>
        </template>

        <template #no-data>
          <div class="py-6 text-center text-medium-emphasis">
            No records found.
          </div>
        </template>
      </VDataTable>
    </VCard>

    <VDialog v-model="isReportDialogOpen" max-width="520">
      <VCard v-if="selectedReport" class="report-detail-dialog">
        <VCardTitle class="d-flex align-start justify-space-between gap-4 pa-6 pb-2">
          <div>
            <span class="text-h5 text-high-emphasis">Report details</span>
            <p class="text-body-2 text-medium-emphasis mb-0 mt-1">{{ selectedReport.studentName }}</p>
          </div>
          <DialogCloseBtn aria-label="Close report details" @click="isReportDialogOpen = false" />
        </VCardTitle>
        <VCardText class="px-6 pt-4">
          <dl class="report-detail-list">
            <div>
              <dt class="text-caption text-medium-emphasis">Book / Session</dt>
              <dd class="text-body-2 text-high-emphasis">{{ selectedReport.bookSession }}</dd>
            </div>
            <div>
              <dt class="text-caption text-medium-emphasis">Lessons</dt>
              <dd class="text-body-2 text-high-emphasis">{{ selectedReport.lessons }}</dd>
            </div>
            <div>
              <dt class="text-caption text-medium-emphasis">Daily Journal progress</dt>
              <dd class="text-body-2 text-high-emphasis">
                {{ selectedReport.dailyJournalsDone || 0 }}/{{ selectedReport.dailyJournalsTotal || 0 }} DJ
              </dd>
            </div>
            <div>
              <dt class="text-caption text-medium-emphasis">Status</dt>
              <dd>
                <VChip :color="statusColor(selectedReport.status)" variant="tonal" size="small">
                  {{ selectedReport.status }}
                </VChip>
              </dd>
            </div>
          </dl>
        </VCardText>
        <VCardActions class="px-6 pb-6 pt-0 justify-end">
          <VBtn color="primary" @click="isReportDialogOpen = false">
            Close
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <VSnackbar v-model="toastShow" color="success" timeout="3000">
      {{ toastText }}
    </VSnackbar>
  </section>
</template>

<style lang="scss" scoped>
.report-tab {
  color: rgb(var(--v-theme-secondary));
  text-transform: none;
}

.report-tab.v-tab--selected {
  color: rgb(var(--v-theme-primary));
}

.count-badge {
  display: inline-flex;
  min-width: 24px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding-inline: 7px;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
}

.report-card {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.1);
  border-radius: 6px;
}

.report-filter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px 20px;
}

.report-filter-fields {
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.report-filter-field {
  flex: 0 1 220px;
  min-width: min(220px, 100%);
}

.report-view-toggle {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  height: 50px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.12) !important;
  border-radius: 8px !important;
  padding: 7px !important;
  background-color: rgb(var(--v-theme-surface)) !important;
  box-shadow: none !important;

  :deep(.v-btn) {
    width: 36px !important;
    min-width: 36px !important;
    height: 36px !important;
    margin: 0 !important;
    border: none !important;
    border-radius: 4px !important;
    padding-inline: 0 !important;
    background-color: transparent !important;
    color: rgba(var(--v-theme-on-surface), 0.7) !important;
    box-shadow: none !important;
  }

  :deep(.v-btn.v-btn--active) {
    background-color: rgba(var(--v-theme-on-surface), 0.08) !important;
    color: rgba(var(--v-theme-on-surface), 0.9) !important;
  }

  :deep(.v-btn.v-btn--active .v-btn__overlay) {
    opacity: 0 !important;
  }

  :deep(.v-btn:focus-visible) {
    outline: 2px solid rgb(var(--v-theme-primary));
    outline-offset: 1px;
  }
}

@media (hover: hover) and (pointer: fine) {
  .report-view-toggle :deep(.v-btn:not(.v-btn--active):hover) {
    background-color: rgba(var(--v-theme-on-surface), 0.04) !important;
  }
}

.report-student-cell {
  display: flex;
  min-width: 200px;
  align-items: center;
  gap: 10px;
  padding-block: 4px;
}

.report-student-avatar {
  flex: 0 0 auto;
}

.report-student-copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
}

.report-progress-cell {
  display: grid;
  min-width: 142px;
  grid-template-columns: minmax(72px, 1fr) auto;
  align-items: center;
  gap: 10px;
}

.report-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
  white-space: nowrap;
}

.report-actions--center {
  justify-content: center;
}

.ptm-menu-button {
  border-radius: 6px;
}

.report-empty-state {
  color: rgb(var(--v-theme-secondary));
}

.report-detail-dialog {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.1);
  border-radius: 6px;
}

.report-detail-list {
  display: grid;
  gap: 16px;
  margin: 0;
}

.report-detail-list > div {
  display: grid;
  grid-template-columns: minmax(150px, 0.7fr) minmax(0, 1.3fr);
  align-items: center;
  gap: 12px;
  border-block-end: 1px solid rgba(var(--v-theme-on-surface), 0.08);
  padding-block-end: 12px;
}

.report-detail-list > div:last-child {
  border-block-end: 0;
  padding-block-end: 0;
}

.report-detail-list dt,
.report-detail-list dd {
  margin: 0;
}

.report-table {
  width: 100%;
}

.report-table :deep(.v-table__wrapper) {
  max-width: 100%;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  -webkit-overflow-scrolling: touch;
}

.report-table :deep(table) {
  min-width: 1120px;
}

.report-table--reports :deep(table) {
  min-width: 1320px;
}

.report-table--ptm :deep(table) {
  min-width: 960px;
}

.report-table :deep(th) {
  color: rgb(var(--v-theme-secondary));
  white-space: nowrap;
}

.report-table :deep(td) {
  height: 60px;
  white-space: nowrap;
}

@media (max-width: 959px) {
  .report-filter-bar {
    align-items: stretch;
  }

}

@media (max-width: 600px) {
  .report-filter-bar {
    padding: 14px 16px;
  }

  .report-filter-fields {
    align-items: stretch;
  }

  .report-filter-field {
    flex-basis: 100%;
    min-width: 100%;
  }

  .report-filter-fields :deep(.v-btn) {
    align-self: flex-start;
  }

  .report-detail-list > div {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}
</style>
