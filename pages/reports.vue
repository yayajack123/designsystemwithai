<script setup lang="ts">
import { avatarText } from '@core/utils/formatters'

definePageMeta({
  sidebarRoute: 'reports',
})

type ReportsTab = 'daily-journal' | 'reports' | 'ptm'
type JournalStatus = 'Not Created' | 'Pending' | 'Mixed'
type LessonJournalStatus = Exclude<JournalStatus, 'Mixed'>
type ReportStatus = 'Not Created' | 'Waiting for Daily Journal' | 'Created'
type PtmStatus = 'Pending' | 'Confirmed'
type RowStatus = JournalStatus | ReportStatus | PtmStatus
type ViewType = 'flat' | 'student' | 'class'
type ReportGroup = { key: string; order: 'asc' }

interface DailyJournalLesson {
  name: string
  date?: string
  status: LessonJournalStatus
}

interface ReportRow {
  id: string
  studentName: string
  studentId: string
  bookSession: string
  lessonName?: string
  lessonNames?: string[]
  lessonDetails?: DailyJournalLesson[]
  lessons?: string
  className?: string
  classNames?: string[]
  date?: string
  dateRangeStart?: string
  dateRangeEnd?: string
  ptmNotes?: string
  estimatedPtmDate?: string
  dailyJournalsDone?: number
  dailyJournalsTotal?: number
  reportsDone?: number
  reportsTotal?: number
  status: RowStatus
}

const groupDailyJournalRows = (records: ReportRow[]): ReportRow[] => {
  const groupedRecords = new Map<string, ReportRow[]>()

  records.forEach(record => {
    const key = JSON.stringify([record.studentId, record.bookSession])
    const group = groupedRecords.get(key) || []

    group.push(record)
    groupedRecords.set(key, group)
  })

  return Array.from(groupedRecords.values()).map(group => {
    const lessonDetails = group.flatMap(record => {
      const names = record.lessonNames?.length
        ? record.lessonNames
        : record.lessonName
          ? [record.lessonName]
          : []
      const status: LessonJournalStatus = record.status === 'Pending' ? 'Pending' : 'Not Created'

      return names.map(name => ({ name, date: record.date, status }))
    })
    const dates = group.map(record => record.date).filter((date): date is string => Boolean(date)).sort()
    const classNames = [...new Set(group
      .map(record => record.className)
      .filter((className): className is string => Boolean(className && className !== '-')))]
    const journalStatuses = new Set(lessonDetails.map(lesson => lesson.status))
    const firstRecord = group[0]

    return {
      ...firstRecord,
      id: `daily-journal-${firstRecord.studentId}-${firstRecord.bookSession}`,
      lessonNames: lessonDetails.map(lesson => lesson.name),
      lessonDetails,
      classNames,
      className: classNames.length ? classNames.join(', ') : undefined,
      date: dates[dates.length - 1],
      dateRangeStart: dates[0],
      dateRangeEnd: dates[dates.length - 1],
      status: journalStatuses.size === 1 ? lessonDetails[0]?.status || 'Not Created' : 'Mixed',
    }
  })
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
const isPtmDialogOpen = ref(false)
const selectedPtm = ref<ReportRow | null>(null)
const ptmNotes = ref('')
const estimatedPtmDate = ref('')
const isLessonsDialogOpen = ref(false)
const selectedDailyJournal = ref<ReportRow | null>(null)
let loadingTimer: ReturnType<typeof setTimeout> | undefined

const dailyJournalRecords: ReportRow[] = [
  { id: 'dj-1', studentName: 'I Wayan Sahadewa Putra', studentId: 'STD-20260109-001', bookSession: 'Python Game Dev', lessonName: 'Lesson 7 – Add Another Sprite', lessonNames: ['Lesson 7 – Add Another Sprite', 'Lesson 8 – Sprite Animation'], className: 'DPS-Adaptive-8C', date: '2026-04-20', status: 'Not Created' },
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
  { id: 'dj-13', studentName: 'Velcan Kido Andika', studentId: 'STD-20260109-005', bookSession: 'IoT Kids', lessonName: 'Lesson 6 – Sensors', lessonNames: ['Lesson 6 – Sensors', 'Lesson 7 – Sensor Calibration', 'Lesson 8 – Smart Alerts'], date: '2026-04-16', status: 'Not Created' },
  { id: 'dj-14', studentName: 'Velcan Kido Andika', studentId: 'STD-20260109-005', bookSession: 'Python Game Dev', lessonName: 'Lesson 8 – Collision', date: '2026-02-28', status: 'Not Created' },
  { id: 'dj-15', studentName: 'Reinhart Yohanes Ernathan', studentId: 'STD-20260122-002', bookSession: 'IoT Kids', lessonName: 'Lesson 3 – LED Control', date: '2026-04-15', status: 'Not Created' },
  { id: 'dj-16', studentName: 'Daffa Diandi Althaf', studentId: 'STD-20260119-001', bookSession: 'Web Developer', lessonName: 'Lesson 8 – Responsive Layout', lessonNames: ['Lesson 8 – Responsive Layout', 'Lesson 9 – CSS Grid', 'Lesson 10 – Web Accessibility', 'Lesson 11 – Final Project'], date: '2026-04-12', status: 'Not Created' },
]

const dailyJournalData = ref<ReportRow[]>(groupDailyJournalRows(dailyJournalRecords))

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
    { title: 'LESSONS', key: 'lessonName', sortable: false, minWidth: '260px' },
    { title: 'CLASS', key: 'className', sortable: false, minWidth: '170px' },
    { title: 'DATE', key: 'date', sortable: false, minWidth: '150px' },
    { title: 'STATUS', key: 'status', sortable: false, minWidth: '160px' },
    { title: 'ACTION', key: 'action', sortable: false, align: 'end' as const, minWidth: '150px' },
  ]
})

const classOptions = computed(() => {
  const classes = currentData.value.flatMap(item =>
    item.classNames?.length
      ? item.classNames
      : item.className && item.className !== '-'
        ? [item.className]
        : [],
  )

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
      ...(item.lessonNames || []),
      item.lessons,
      item.className,
      ...(item.classNames || []),
    ]
    const matchesSearch = !query || searchableValues.some(value => value?.toLowerCase().includes(query))
    const matchesClass = selectedClass.value === 'All Classes'
      || item.className === selectedClass.value
      || Boolean(item.classNames?.includes(selectedClass.value))
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

const formatDateRange = (item: ReportRow) => {
  if (!item.dateRangeStart || !item.dateRangeEnd || item.dateRangeStart === item.dateRangeEnd)
    return formatDate(item.date)

  return `${formatDate(item.dateRangeStart)} – ${formatDate(item.dateRangeEnd)}`
}

const statusColor = (status: RowStatus) => {
  if (status === 'Pending' || status === 'Mixed' || status === 'Waiting for Daily Journal') return 'warning'
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

const getDailyJournalLessons = (item: ReportRow) => {
  if (item.lessonNames?.length) return item.lessonNames

  return item.lessonName ? [item.lessonName] : []
}

const getJournalStatusCounts = (item: ReportRow) => {
  const counts = new Map<LessonJournalStatus, number>()

  item.lessonDetails?.forEach(lesson => {
    counts.set(lesson.status, (counts.get(lesson.status) || 0) + 1)
  })

  return Array.from(counts, ([status, count]) => ({ status, count }))
}

const hasJournalStatus = (item: ReportRow, status: LessonJournalStatus) =>
  getJournalStatusCounts(item).some(summary => summary.status === status)

const showDailyJournalLessons = (item: ReportRow) => {
  selectedDailyJournal.value = item
  isLessonsDialogOpen.value = true
}

const sendDailyJournal = (item: ReportRow) => {
  showToast('Send action is a prototype only for ' + item.studentName + '.')
}

const viewReportDetails = (item: ReportRow) => {
  selectedReport.value = item
  isReportDialogOpen.value = true
}

const openConfirmPtm = (item: ReportRow) => {
  if (item.status !== 'Pending') return

  selectedPtm.value = item
  ptmNotes.value = ''
  estimatedPtmDate.value = ''
  isPtmDialogOpen.value = true
}

const confirmPtm = () => {
  const item = selectedPtm.value
  if (!item || item.status !== 'Pending' || !estimatedPtmDate.value) return

  item.ptmNotes = ptmNotes.value.trim()
  item.estimatedPtmDate = estimatedPtmDate.value
  item.status = 'Confirmed'
  showToast('PTM confirmed for ' + item.studentName + '.')
  isPtmDialogOpen.value = false
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
          <div class="report-lessons-cell">
            <span class="text-body-2 text-high-emphasis">
              {{ getDailyJournalLessons(item).length > 1 ? `${getDailyJournalLessons(item).length} Lesson` : getDailyJournalLessons(item)[0] || '—' }}
            </span>
            <VBtn
              v-if="getDailyJournalLessons(item).length > 1"
              variant="text"
              color="primary"
              size="small"
              density="compact"
              class="px-0 font-weight-medium text-capitalize"
              @click="showDailyJournalLessons(item)"
            >
              See all
            </VBtn>
          </div>
        </template>

        <template #item.lessons="{ item }">
          <span class="text-body-2 text-high-emphasis">{{ item.lessons }}</span>
        </template>

        <template #item.className="{ item }">
          <span class="text-body-2 text-medium-emphasis">{{ item.className || '—' }}</span>
        </template>

        <template #item.date="{ item }">
          <span class="text-body-2 text-high-emphasis">
            {{ activeTab === 'daily-journal' ? formatDateRange(item) : formatDate(item.date) }}
          </span>
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
          <div
            v-if="activeTab === 'daily-journal' && (item.lessonDetails?.length || 0) > 1"
            class="report-journal-statuses"
          >
            <VChip
              v-for="summary in getJournalStatusCounts(item)"
              :key="summary.status"
              :color="statusColor(summary.status)"
              variant="tonal"
              size="small"
              class="font-weight-medium"
            >
              {{ summary.count }} {{ summary.status }}
            </VChip>
          </div>
          <VChip
            v-else
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
            <template v-if="hasJournalStatus(item, 'Not Created')">
              <VTooltip text="Create" location="top">
                <template #activator="{ props }">
                  <VBtn
                    v-bind="props"
                    icon="ri-pencil-line"
                    color="primary"
                    variant="outlined"
                    size="small"
                    class="action-btn"
                    :aria-label="`Create journal for ${item.studentName}`"
                    :to="{ path: '/meeting-journal/create', query: { returnTo: 'reports' } }"
                  />
                </template>
              </VTooltip>
            </template>
            <template v-if="hasJournalStatus(item, 'Pending')">
              <VTooltip text="Edit" location="top">
                <template #activator="{ props }">
                  <VBtn
                    v-bind="props"
                    icon="ri-edit-box-line"
                    color="primary"
                    variant="outlined"
                    size="small"
                    class="action-btn"
                    :aria-label="`Edit journal for ${item.studentName}`"
                    :to="{ path: '/meeting-journal/create', query: { returnTo: 'reports' } }"
                  />
                </template>
              </VTooltip>
              <VTooltip text="Send" location="top">
                <template #activator="{ props }">
                  <VBtn
                    v-bind="props"
                    icon="ri-send-plane-line"
                    color="primary"
                    variant="outlined"
                    size="small"
                    class="action-btn"
                    :aria-label="`Send journal for ${item.studentName}`"
                    @click="sendDailyJournal(item)"
                  />
                </template>
              </VTooltip>
            </template>
          </div>

          <div v-else-if="activeTab === 'reports'" class="report-actions">
            <VBtn
              v-if="item.status === 'Created'"
              icon
              variant="outlined"
              color="secondary"
              rounded="pill"
              size="small"
              class="pending-menu-button"
              :aria-label="`View report details for ${item.studentName}`"
              @click="viewReportDetails(item)"
            >
              <VIcon icon="ri-eye-line" />
              <VTooltip activator="parent" location="top">
                View details
              </VTooltip>
            </VBtn>

            <VMenu v-else location="bottom end">
              <template #activator="{ props: menuProps }">
                <VBtn
                  v-bind="menuProps"
                  icon
                  variant="outlined"
                  color="secondary"
                  rounded="pill"
                  size="small"
                  class="pending-menu-button"
                  :aria-label="`More actions for ${item.studentName}`"
                >
                  <VIcon icon="ri-more-2-fill" />
                  <VTooltip activator="parent" location="top">
                    More actions
                  </VTooltip>
                </VBtn>
              </template>
              <VList density="compact" min-width="210">
                <VListItem :to="{ path: '/meeting-journal/create', query: { returnTo: 'reports' } }">
                  <template #prepend>
                    <VIcon icon="ri-book-open-line" />
                  </template>
                  <VListItemTitle>Create Daily Journal</VListItemTitle>
                </VListItem>
                <VListItem
                  :to="{ name: 'reports' }"
                  :active="false"
                >
                  <template #prepend>
                    <VIcon icon="ri-file-list-3-line" />
                  </template>
                  <VListItemTitle>Create Report</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
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
                  @click="openConfirmPtm(item)"
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

    <VDialog v-model="isPtmDialogOpen" max-width="520">
      <VCard v-if="selectedPtm" class="ptm-confirm-dialog" elevation="0">
        <VCardTitle class="d-flex align-start justify-space-between gap-4 pa-6 pb-2">
          <span class="text-h5 text-high-emphasis">Confirm PTM</span>
          <DialogCloseBtn aria-label="Close confirm PTM dialog" @click="isPtmDialogOpen = false" />
        </VCardTitle>
        <VCardText class="px-6 pt-3">
          <div class="ptm-action-context mb-5 text-body-2 text-medium-emphasis">
            {{ selectedPtm.studentName }} · {{ selectedPtm.bookSession }}
          </div>
          <VTextarea
            v-model="ptmNotes"
            label="PTM Notes"
            placeholder="Catatan untuk PTM..."
            rows="4"
            variant="outlined"
            autofocus
          />
          <div class="mt-4">
            <label class="text-body-2 text-medium-emphasis font-weight-medium d-block mb-1">
              Estimated PTM Date
            </label>
            <AppDateTimePicker
              v-model="estimatedPtmDate"
              placeholder="Select date"
              append-inner-icon="ri-calendar-line"
              density="compact"
              hide-details
              :config="{ dateFormat: 'F j, Y' }"
            />
          </div>
        </VCardText>
        <VCardActions class="px-6 pb-6 pt-0 justify-end gap-2">
          <VBtn variant="text" color="secondary" @click="isPtmDialogOpen = false">Cancel</VBtn>
          <VBtn color="primary" :disabled="!estimatedPtmDate" @click="confirmPtm">
            Confirm
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <VDialog v-model="isLessonsDialogOpen" max-width="480">
      <VCard v-if="selectedDailyJournal" class="report-detail-dialog">
        <VCardTitle class="d-flex align-start justify-space-between gap-4 pa-6 pb-2">
          <div>
            <span class="text-h5 text-high-emphasis">Lessons</span>
            <p class="text-body-2 text-medium-emphasis mb-0 mt-1">
              {{ selectedDailyJournal.studentName }} · {{ selectedDailyJournal.bookSession }}
            </p>
          </div>
          <DialogCloseBtn aria-label="Close lessons" @click="isLessonsDialogOpen = false" />
        </VCardTitle>
        <VCardText class="pt-4">
          <VList density="compact" class="pa-0">
            <VListItem
              v-for="(lesson, index) in selectedDailyJournal.lessonDetails || []"
              :key="`${selectedDailyJournal.id}-${index}`"
              prepend-icon="ri-book-open-line"
              :title="lesson.name"
              :subtitle="formatDate(lesson.date)"
              class="px-0"
            >
              <template #append>
                <VChip :color="statusColor(lesson.status)" variant="tonal" size="small">
                  {{ lesson.status }}
                </VChip>
              </template>
            </VListItem>
          </VList>
        </VCardText>
        <VCardActions class="px-6 pb-6 pt-0 justify-end">
          <VBtn color="primary" @click="isLessonsDialogOpen = false">
            Close
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

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

.report-lessons-cell {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-block: 4px;
}

.report-journal-statuses {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.report-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
  white-space: nowrap;
}

.action-btn {
  border-color: rgba(var(--v-theme-on-surface), 0.08) !important;
  border-radius: 4px;

  &:hover {
    background-color: rgba(var(--v-theme-on-surface), 0.04);
  }
}

.pending-menu-button {
  min-width: 36px;
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

.ptm-confirm-dialog {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.1);
  border-radius: 6px;
}

.ptm-action-context {
  border-radius: 6px;
  background: rgba(var(--v-theme-on-surface), 0.035);
  padding: 10px 12px;
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
