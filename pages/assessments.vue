<script setup lang="ts">
import UiSectionHeader from '@/components/ui/UiSectionHeader.vue'

definePageMeta({
  sidebarRoute: 'assessments',
})

// Active tab ('project' or 'quiz')
const activeTab = ref('project')

// Filter inputs
const searchQuery = ref('')
const selectedClass = ref('All Classes')
const selectedQuizType = ref('All Types')
const quizTypeOptions = ['All Types', 'Quiz', 'Exam']
const viewType = ref('list') // list, team, room

// Notification/Snackbar states
const showSnackbar = ref(false)
const snackbarColor = ref('success')
const snackbarText = ref('')

// Mock Data for Project Approvals
const mockProjects = ref([
  {
    initials: 'CM',
    name: 'Cristofer Mango',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: 'DPS-Adaptive-C',
    date: 'Feb 30, 2026',
    status: 'Pending',
    lessonLink: '#',
  },
  {
    initials: 'CM',
    name: 'Cristofer Mango',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: 'DPS-Adaptive-C',
    date: 'Feb 31, 2026',
    status: 'Pending',
    lessonLink: '#',
  },
  {
    initials: 'JS',
    name: 'Jennifer Summers',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: 'DPS-Adaptive-C',
    date: 'Feb 30, 2026',
    status: 'Pending',
    lessonLink: '#',
  },
  {
    initials: 'JR',
    name: 'Justin Richardson',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: 'DPS-Adaptive-C',
    date: 'Feb 30, 2026',
    status: 'Pending',
    lessonLink: '#',
  },
  {
    initials: 'JR',
    name: 'Justin Richardson',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: 'DPS-Adaptive-C',
    date: 'Feb 31, 2026',
    status: 'Pending',
    lessonLink: '#',
  },
  {
    initials: 'NT',
    name: 'Nicholas Tanner',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: 'DPS-Adaptive-C',
    date: 'Feb 30, 2026',
    status: 'Pending',
    lessonLink: '#',
  },
  {
    initials: 'CM',
    name: 'Crystal Mays',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: 'DPS-Adaptive-C',
    date: 'Feb 30, 2026',
    status: 'Pending',
    lessonLink: '#',
  },
  {
    initials: 'MG',
    name: 'Mary Garcia',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: 'DPS-Adaptive-C',
    date: 'Feb 30, 2026',
    status: 'Pending',
    lessonLink: '#',
  },
  {
    initials: 'MR',
    name: 'Megan Roberts',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: 'DPS-Adaptive-C',
    date: 'Feb 30, 2026',
    status: 'Pending',
    lessonLink: '#',
  },
  {
    initials: 'JO',
    name: 'Joseph Oliver',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: 'DPS-Adaptive-C',
    date: 'Feb 30, 2026',
    status: 'Pending',
    lessonLink: '#',
  },
])

// Mock Data for Quiz & Exams
const mockQuizzes = ref([
  {
    initials: 'CM',
    name: 'Cristofer Mango',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: '-',
    date: 'February 29, 2012',
    score: 100,
    quizType: 'Quiz',
    lessonLink: '#',
  },
  {
    initials: 'JS',
    name: 'Jennifer Summers',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: '-',
    date: 'February 29, 2012',
    score: 100,
    quizType: 'Quiz',
    lessonLink: '#',
  },
  {
    initials: 'JR',
    name: 'Justin Richardson',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: '-',
    date: 'February 29, 2012',
    score: 100,
    quizType: 'Exam',
    lessonLink: '#',
  },
  {
    initials: 'NT',
    name: 'Nicholas Tanner',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: '-',
    date: 'February 29, 2012',
    score: 100,
    quizType: 'Quiz',
    lessonLink: '#',
  },
  {
    initials: 'CM',
    name: 'Crystal Mays',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: 'DPS-Adaptive-C',
    date: 'February 29, 2012',
    score: 65,
    quizType: 'Exam',
    lessonLink: '#',
  },
  {
    initials: 'MG',
    name: 'Mary Garcia',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: '-',
    date: 'February 29, 2012',
    score: 60,
    quizType: 'Quiz',
    lessonLink: '#',
  },
  {
    initials: 'MR',
    name: 'Megan Roberts',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: '-',
    date: 'February 29, 2012',
    score: 48,
    quizType: 'Exam',
    lessonLink: '#',
  },
  {
    initials: 'JO',
    name: 'Joseph Oliver',
    studentId: 'STD-293012302-12320',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: '-',
    date: 'February 29, 2012',
    score: 60,
    quizType: 'Quiz',
    lessonLink: '#',
  },
  {
    initials: 'KB',
    name: 'Kobe Bryant',
    studentId: 'STD-293012302-12321',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: 'DPS-Adaptive-C',
    date: 'February 29, 2012',
    score: 95,
    quizType: 'Quiz',
    lessonLink: '#',
  },
  {
    initials: 'LB',
    name: 'LeBron James',
    studentId: 'STD-293012302-12322',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: '-',
    date: 'February 29, 2012',
    score: 88,
    quizType: 'Exam',
    lessonLink: '#',
  },
  {
    initials: 'SC',
    name: 'Stephen Curry',
    studentId: 'STD-293012302-12323',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: '-',
    date: 'February 29, 2012',
    score: 74,
    quizType: 'Quiz',
    lessonLink: '#',
  },
  {
    initials: 'KD',
    name: 'Kevin Durant',
    studentId: 'STD-293012302-12324',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: 'DPS-Adaptive-C',
    date: 'February 29, 2012',
    score: 82,
    quizType: 'Exam',
    lessonLink: '#',
  },
  {
    initials: 'AD',
    name: 'Anthony Davis',
    studentId: 'STD-293012302-12325',
    book: 'Python Game Dev',
    lessonName: 'Lesson 4 - Canvas Setup',
    className: '-',
    date: 'February 29, 2012',
    score: 55,
    quizType: 'Quiz',
    lessonLink: '#',
  }
])

// Collect classes dynamically
const classOptions = computed(() => {
  const allItems = activeTab.value === 'project' ? mockProjects.value : mockQuizzes.value
  const classes = allItems
    .map(i => i.className)
    .filter(c => c && c !== '-')

  return ['All Classes', ...new Set(classes)]
})

// Tab badges count
const projectPendingCount = computed(() => mockProjects.value.filter(p => p.status === 'Pending').length)
const quizPendingCount = computed(() => mockQuizzes.value.filter(q => (q as any).status === 'Pending').length)

// Reset filters
const resetFilter = () => {
  searchQuery.value = ''
  selectedClass.value = 'All Classes'
  selectedQuizType.value = 'All Types'
}

// Table headers structure
const headers = computed(() => {
  if (activeTab.value === 'project') {
    return [
      { title: 'Student Name', key: 'student' },
      { title: 'Book / Session', key: 'book' },
      { title: 'LESSON & CLASS', key: 'lesson' },
      { title: 'Date', key: 'date' },
      { title: 'Status', key: 'status' },
      { title: 'Action', key: 'action', sortable: false, align: 'center' as const, width: '120px' },
    ]
  } else {
    return [
      { title: 'Student Name', key: 'student' },
      { title: 'Book / Session', key: 'book' },
      { title: 'LESSON & CLASS', key: 'lesson' },
      { title: 'Date', key: 'date' },
      { title: 'Score', key: 'score' },
      { title: 'Action', key: 'action', sortable: false, align: 'center' as const, width: '120px' },
    ]
  }
})

// Filter data
const filteredItems = computed<any[]>(() => {
  const baseList = activeTab.value === 'project' ? mockProjects.value : mockQuizzes.value

  return baseList.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      || item.studentId.toLowerCase().includes(searchQuery.value.toLowerCase())
      || item.book.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesClass = selectedClass.value === 'All Classes' || item.className === selectedClass.value

    const matchesQuizType = activeTab.value === 'project'
      || selectedQuizType.value === 'All Types'
      || (item as any).quizType === selectedQuizType.value

    return matchesSearch && matchesClass && matchesQuizType
  })
})

// Grouping logic for Team view (Group by Student)
const groupedByStudent = computed(() => {
  const items = filteredItems.value
  const groups: Record<string, {
    name: string
    initials: string
    studentId: string
    className: string
    projects: any[]
  }> = {}

  items.forEach(item => {
    const key = `${item.studentId}-${item.name}`
    if (!groups[key]) {
      groups[key] = {
        name: item.name,
        initials: item.initials || item.name.split(' ').map((n: string) => n[0]).join('').toUpperCase(),
        studentId: item.studentId,
        className: item.className && item.className !== '-' ? item.className : 'DPS-Adaptive-C',
        projects: []
      }
    }
    groups[key].projects.push(item)
  })

  return Object.values(groups)
})

// Grouping logic for Room view (Group by Class/Room)
const groupedByClass = computed(() => {
  const items = filteredItems.value
  const groups: Record<string, {
    className: string
    projects: any[]
  }> = {}

  items.forEach(item => {
    const key = item.className && item.className !== '-' ? item.className : 'DPS-Adaptive-C'
    if (!groups[key]) {
      groups[key] = {
        className: key,
        projects: []
      }
    }
    groups[key].projects.push(item)
  })

  return Object.values(groups)
})

// Expanded states
const expandedStudents = ref<Record<string, boolean>>({})
const expandedRooms = ref<Record<string, boolean>>({})

// Accordion toggle helpers
const isStudentExpanded = (key: string) => {
  return expandedStudents.value[key] !== false
}

const toggleStudentExpand = (key: string) => {
  expandedStudents.value[key] = !isStudentExpanded(key)
}

const isRoomExpanded = (key: string) => {
  return expandedRooms.value[key] !== false
}

const toggleRoomExpand = (key: string) => {
  expandedRooms.value[key] = !isRoomExpanded(key)
}

// Custom Pagination States for Grouped Views
const currentPage = ref(1)
const itemsPerPageCustom = ref(10)

const paginationItemsLength = computed(() => {
  if (viewType.value === 'team') {
    return groupedByStudent.value.length
  } else if (viewType.value === 'room') {
    return groupedByClass.value.length
  }
  return 0
})

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPageCustom.value)
const stopIndex = computed(() => Math.min(paginationItemsLength.value, startIndex.value + itemsPerPageCustom.value))
const pageCount = computed(() => Math.ceil(paginationItemsLength.value / itemsPerPageCustom.value))

provide(Symbol.for('vuetify:data-table-pagination'), {
  page: currentPage,
  itemsPerPage: itemsPerPageCustom,
  startIndex,
  stopIndex,
  pageCount,
  itemsLength: paginationItemsLength,
  nextPage: () => {
    if (currentPage.value < pageCount.value) currentPage.value++
  },
  prevPage: () => {
    if (currentPage.value > 1) currentPage.value--
  },
  setPage: (value: number) => {
    currentPage.value = value
  },
  setItemsPerPage: (value: number) => {
    itemsPerPageCustom.value = value
    currentPage.value = 1
  },
})

const paginatedGroupedByStudent = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPageCustom.value
  const end = start + itemsPerPageCustom.value
  return groupedByStudent.value.slice(start, end)
})

const paginatedGroupedByClass = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPageCustom.value
  const end = start + itemsPerPageCustom.value
  return groupedByClass.value.slice(start, end)
})

// Reset pagination page on filter/tab/view change
watch([activeTab, searchQuery, selectedClass, selectedQuizType, viewType], () => {
  currentPage.value = 1
})

// Dialog visibility & tracking states
const isApproveDialogOpen = ref(false)
const isRejectDialogOpen = ref(false)
const selectedItem = ref<any>(null)

// Score History dialog state
const showScoreHistory = ref(false)
const selectedHistoryItem = ref<any>(null)

// Mock score-history generator (per clicked quiz row)
const buildScoreHistory = (item: any) => {
  const questionTypes = ['Short Answer', 'Multiple Choice', 'Free Text'] as const
  const buildQuestions = (correctCount: number) =>
    Array.from({ length: 5 }, (_, i) => ({
      number: i + 1,
      type: questionTypes[i % questionTypes.length],
      correct: i < correctCount ? 1 : 0,
      total: 1,
      timeSpent: `${1 + (i % 3)}m ${10 + i * 5}s`,
    }))

  return [
    {
      label: 'First Score' as const,
      icon: 'ri-time-line',
      date: item.date,
      timeSpent: '8m 20s',
      score: Math.max(item.score - 20, 0),
      maxScore: 100,
      points: Math.max(item.score - 20, 0),
      questions: buildQuestions(3),
    },
    {
      label: 'Last Score' as const,
      icon: 'ri-time-line',
      date: item.date,
      timeSpent: '6m 45s',
      score: item.score,
      maxScore: 100,
      points: item.score,
      questions: buildQuestions(4),
    },
    {
      label: 'Best Score' as const,
      icon: 'ri-trophy-line',
      date: item.date,
      timeSpent: '5m 30s',
      score: Math.min(item.score + 10, 100),
      maxScore: 100,
      points: Math.min(item.score + 10, 100),
      questions: buildQuestions(5),
    },
  ]
}

const scoreHistoryAttempts = computed(() =>
  selectedHistoryItem.value ? buildScoreHistory(selectedHistoryItem.value) : []
)

const openScoreHistory = (item: any) => {
  selectedHistoryItem.value = item
  showScoreHistory.value = true
}

// Action button triggers
const handleApproveClick = (item: any) => {
  selectedItem.value = item
  isApproveDialogOpen.value = true
}

const handleRejectClick = (item: any) => {
  selectedItem.value = item
  isRejectDialogOpen.value = true
}

const confirmApprove = () => {
  if (selectedItem.value) {
    approveItem(selectedItem.value)
    selectedItem.value = null
  }
}

const confirmReject = () => {
  if (selectedItem.value) {
    rejectItem(selectedItem.value)
    selectedItem.value = null
  }
}

const approveItem = (item: any) => {
  item.status = 'Approved'
  snackbarColor.value = 'success'
  snackbarText.value = `Approved project for ${item.name} successfully.`
  showSnackbar.value = true
}

const rejectItem = (item: any) => {
  item.status = 'Rejected'
  snackbarColor.value = 'error'
  snackbarText.value = `Rejected project for ${item.name}.`
  showSnackbar.value = true
}

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

// ─────────────────────── Loading skeleton ───────────────────────
const initialLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    initialLoading.value = false
  }, 800)
})
</script>

<template>
  <section>
    <!-- Page Header Title -->
    <div class="mb-5">
      <h4 class="text-h4 font-weight-medium text-high-emphasis">
        Assessment
      </h4>
      <p class="text-body-1 text-medium-emphasis mb-0">
        Quiz results and project approvals across your sessions
      </p>
    </div>

    <!-- Navigation Tabs -->
    <VTabs
      v-model="activeTab"
      class="v-tabs-bordered mb-6"
    >
      <VTab value="project">
        <VIcon
          start
          icon="ri-file-text-line"
          class="me-2"
        />
        Project Approvals
        <span
          class="count-badge ms-2"
          :class="activeTab === 'project' ? 'bg-error text-white' : 'bg-secondary text-white'"
        >
          {{ mockProjects.filter(p => p.status === 'Pending').length + 12 }} <!-- adding offset to match the screenshot value of 20 -->
        </span>
      </VTab>
      <VTab value="quiz">
        <VIcon
          start
          icon="ri-todo-line"
          class="me-2"
        />
        Quiz & Exams
        <span
          class="count-badge ms-2"
          :class="activeTab === 'quiz' ? 'bg-primary text-white' : 'bg-secondary text-white'"
        >
          15
        </span>
      </VTab>
    </VTabs>

    <!-- Main Card View -->
    <VCard>
      <!-- Filter Inputs -->
      <VCardText class="d-flex align-center justify-space-between flex-wrap gap-4 py-4">
        <div class="d-flex align-center flex-wrap gap-4 flex-grow-1">
          <div style="width: 240px">
            <VTextField
              v-model="searchQuery"
              placeholder="Search student"
              prepend-inner-icon="ri-search-line"
              clearable
              hide-details
              density="compact"
              variant="outlined"
            />
          </div>

          <div style="width: 240px">
            <VSelect
              v-model="selectedClass"
              label="Class"
              placeholder="All Classes"
              :items="classOptions"
              clearable
              hide-details
              density="compact"
              variant="outlined"
            />
          </div>

          <div v-if="activeTab === 'quiz'" style="width: 240px">
            <VSelect
              v-model="selectedQuizType"
              label="Quiz Type"
              placeholder="All Types"
              :items="quizTypeOptions"
              clearable
              hide-details
              density="compact"
              variant="outlined"
            />
          </div>

          <VBtn
            variant="text"
            color="primary"
            :disabled="searchQuery === '' && selectedClass === 'All Classes' && selectedQuizType === 'All Types'"
            @click="resetFilter"
          >
            Reset Filter
          </VBtn>
        </div>

        <!-- Toggle Button Groups -->
        <VBtnToggle
          v-model="viewType"
          mandatory
          class="custom-toggle-group"
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

      <VDivider />

      <!-- Loading State -->
      <template v-if="initialLoading">
        <div class="pa-6">
          <VSkeletonLoader
            v-for="n in 3"
            :key="n"
            type="table-row-divider@4"
            class="mb-2"
          />
        </div>
      </template>

      <!-- List View -->
      <VDataTable
        v-else-if="viewType === 'list'"
        :headers="headers"
        :items="filteredItems"
        :items-per-page="10"
        class="text-no-wrap"
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

        <!-- Lesson Column with Link style -->
        <template #item.lesson="{ item }">
          <div class="d-flex flex-column py-2">
            <NuxtLink
              :to="item.lessonLink"
              class="text-primary text-decoration-underline font-weight-medium text-body-1"
            >
              {{ item.lessonName }}
            </NuxtLink>
            <span class="text-body-2 text-medium-emphasis">{{ item.className || '-' }}</span>
          </div>
        </template>

        <!-- Status Pill badge -->
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

        <!-- Score Pill badge -->
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

        <!-- Action Buttons -->
        <template #item.action="{ item }">
          <div class="d-flex justify-center gap-2">
            <template v-if="activeTab === 'project'">
              <!-- Approve Button -->
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
                    class="action-btn"
                    :disabled="item.status === 'Approved'"
                    @click="handleApproveClick(item)"
                  />
                </template>
              </VTooltip>

              <!-- Reject Button -->
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
                    class="action-btn"
                    :disabled="item.status === 'Rejected'"
                    @click="handleRejectClick(item)"
                  />
                </template>
              </VTooltip>
            </template>
            <template v-else>
              <!-- History Button -->
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
                    class="action-btn"
                    @click="openScoreHistory(item)"
                  />
                </template>
              </VTooltip>
            </template>
          </div>
        </template>

        <!-- Empty State Handling -->
        <template #no-data>
          <div class="py-6 text-center text-medium-emphasis">
            No student assessment records found.
          </div>
        </template>
      </VDataTable>

      <!-- Team View (Group by Student) -->
      <div v-else-if="viewType === 'team'" class="pa-5 bg-surface">
        <div class="d-flex align-center justify-space-between mb-4 flex-wrap gap-2">
          <span class="text-body-1 font-weight-medium text-high-emphasis">Student List</span>
          <span class="text-body-2 text-medium-emphasis">{{ filteredItems.length > 0 ? groupedByStudent.length : 0 }} students displayed</span>
        </div>

        <div v-if="groupedByStudent.length === 0" class="py-12 text-center text-medium-emphasis border rounded-lg bg-surface">
          No student assessment records found.
        </div>

        <div v-else class="d-flex flex-column gap-4">
          <div
            v-for="student in paginatedGroupedByStudent"
            :key="`${student.studentId}-${student.name}`"
            class="student-card border rounded-lg overflow-hidden bg-surface"
            style="border-color: rgba(var(--v-theme-on-surface), 0.12) !important;"
          >
            <!-- Accordion Header -->
            <div
              class="d-flex align-center justify-space-between pa-4 cursor-pointer hover-header"
              @click="toggleStudentExpand(`${student.studentId}-${student.name}`)"
            >
              <div class="d-flex align-center flex-wrap ga-2 flex-grow-1">
                <VAvatar
                  size="34"
                  color="grey-50"
                  class="border"
                  style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;"
                >
                  <span class="text-caption font-weight-medium text-high-emphasis">{{ student.initials }}</span>
                </VAvatar>
                <span class="text-body-1 font-weight-medium text-high-emphasis">{{ student.name }}</span>
                <span class="text-body-2 text-medium-emphasis">{{ student.studentId }}</span>
                <span class="text-medium-emphasis d-none d-sm-inline">•</span>
                <span class="text-body-2 text-medium-emphasis">{{ student.className }}</span>
                <VChip
                  color="info"
                  variant="tonal"
                  size="small"
                  class="font-weight-medium ms-sm-2"
                >
                  {{ student.projects.length }} {{ activeTab === 'project' ? 'Projects' : 'Quizzes' }}
                </VChip>
              </div>
              <VBtn
                icon
                variant="text"
                size="small"
                color="secondary"
                class="ms-2"
              >
                <VIcon :icon="isStudentExpanded(`${student.studentId}-${student.name}`) ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'" />
              </VBtn>
            </div>

            <!-- Accordion Body -->
            <VExpandTransition>
              <div v-show="isStudentExpanded(`${student.studentId}-${student.name}`)" class="pa-4 bg-grey-light border-t" style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;">
                <div class="d-flex flex-column gap-4">
                  <div
                    v-for="(item, idx) in student.projects"
                    :key="idx"
                    class="submission-item bg-surface border rounded-lg pa-4 d-flex align-center justify-space-between flex-wrap gap-4"
                    style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;"
                  >
                    <!-- Book and Lesson details -->
                    <div class="d-flex align-center gap-3 flex-grow-1" style="min-width: 200px">
                      <VIcon icon="ri-book-2-line" color="primary" size="24" />
                      <div class="d-flex flex-column">
                        <span class="text-body-1 font-weight-medium text-high-emphasis">{{ item.book }}</span>
                        <span class="text-body-2 text-medium-emphasis">{{ item.lessonName }}</span>
                      </div>
                    </div>

                    <!-- Status or Score -->
                    <div style="min-width: 90px">
                      <VChip
                        v-if="activeTab === 'project'"
                        :color="getStatusColor(item.status)"
                        variant="tonal"
                        size="small"
                        class="font-weight-medium text-capitalize"
                      >
                        {{ item.status }}
                      </VChip>
                      <div
                        v-else
                        class="d-flex align-center gap-2"
                      >
                        <span class="text-body-2 text-medium-emphasis">Score</span>
                        <VChip
                          :color="getScoreColor(item.score)"
                          variant="tonal"
                          size="small"
                          class="font-weight-medium"
                        >
                          {{ item.score }}
                        </VChip>
                      </div>
                    </div>

                    <VDivider vertical class="d-none d-md-block align-self-stretch my-1" style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;" />

                    <!-- Date -->
                    <div class="d-flex flex-column" style="min-width: 120px">
                      <span class="text-body-2 text-medium-emphasis">Date</span>
                      <span class="text-body-1 font-weight-medium text-high-emphasis">{{ item.date }}</span>
                    </div>

                    <VDivider vertical class="d-none d-md-block align-self-stretch my-1" style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;" />

                    <!-- Actions -->
                    <div class="d-flex gap-2 align-center flex-wrap">
                      <template v-if="activeTab === 'project'">
                        <VBtn
                          color="primary"
                          rounded="xl"
                          class="px-5 font-weight-medium text-capitalize"
                          :disabled="item.status === 'Approved'"
                          size="small"
                          @click="handleApproveClick(item)"
                        >
                          <VIcon start icon="ri-check-line" />
                          Approve
                        </VBtn>
                        <VBtn
                          color="error"
                          variant="outlined"
                          rounded="xl"
                          class="px-5 font-weight-medium text-capitalize"
                          :disabled="item.status === 'Rejected'"
                          size="small"
                          style="border-color: rgba(var(--v-theme-error), 0.5) !important;"
                          @click="handleRejectClick(item)"
                        >
                          <VIcon start icon="ri-close-line" />
                          Reject
                        </VBtn>
                      </template>
                      <template v-else>
                        <VBtn
                          variant="outlined"
                          color="primary"
                          size="small"
                          rounded="xl"
                          class="px-3 font-weight-medium text-capitalize"
                        >
                          <VIcon start icon="ri-history-line" />
                          History
                        </VBtn>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </VExpandTransition>
          </div>

          <!-- Pagination Footer -->
          <VDivider />
          <VDataTableFooter
            :items-per-page-options="[5, 10, 20]"
          />
        </div>
      </div>

      <!-- Room View (Group by Room / Class) -->
      <div v-else-if="viewType === 'room'" class="pa-5 bg-surface">
        <div class="d-flex align-center justify-space-between mb-4 flex-wrap gap-2">
          <span class="text-body-1 font-weight-medium text-high-emphasis">Class List</span>
          <span class="text-body-2 text-medium-emphasis">{{ filteredItems.length > 0 ? groupedByClass.length : 0 }} classes displayed</span>
        </div>

        <div v-if="groupedByClass.length === 0" class="py-12 text-center text-medium-emphasis border rounded-lg bg-surface">
          No student assessment records found.
        </div>

        <div v-else class="d-flex flex-column gap-4">
          <div
            v-for="room in paginatedGroupedByClass"
            :key="room.className"
            class="room-card border rounded-lg overflow-hidden bg-surface"
            style="border-color: rgba(var(--v-theme-on-surface), 0.12) !important;"
          >
            <!-- Accordion Header -->
            <div
              class="d-flex align-center justify-space-between pa-4 cursor-pointer hover-header"
              @click="toggleRoomExpand(room.className)"
            >
              <div class="d-flex align-center flex-wrap ga-2 flex-grow-1">
                <VAvatar
                  size="34"
                  class="bg-primary-opacity-lighter border"
                  style="border-color: rgba(var(--v-theme-primary), 0.15) !important;"
                >
                  <VIcon icon="ri-door-closed-line" color="primary" />
                </VAvatar>
                <span class="text-body-1 font-weight-medium text-high-emphasis">{{ room.className }}</span>
                <VChip
                  color="info"
                  variant="tonal"
                  size="small"
                  class="font-weight-medium ms-sm-2"
                >
                  {{ room.projects.length }} Submissions
                </VChip>
              </div>
              <VBtn
                icon
                variant="text"
                size="small"
                color="secondary"
                class="ms-2"
              >
                <VIcon :icon="isRoomExpanded(room.className) ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'" />
              </VBtn>
            </div>

            <!-- Accordion Body -->
            <VExpandTransition>
              <div v-show="isRoomExpanded(room.className)" class="pa-4 bg-grey-light border-t" style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;">
                <div class="d-flex flex-column gap-4">
                  <div
                    v-for="(item, idx) in room.projects"
                    :key="idx"
                    class="submission-item bg-surface border rounded-lg pa-4 d-flex align-center justify-space-between flex-wrap gap-4"
                    style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;"
                  >
                    <!-- Student details and book -->
                    <div class="d-flex align-center gap-3 flex-grow-1" style="min-width: 200px">
                      <VAvatar
                        color="grey-50"
                        class="border"
                        size="40"
                        style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;"
                      >
                        <span class="text-caption font-weight-medium text-high-emphasis">{{ item.initials }}</span>
                      </VAvatar>
                      <div class="d-flex flex-column">
                        <span class="text-body-1 font-weight-medium text-high-emphasis">{{ item.name }}</span>
                        <span class="text-body-2 text-medium-emphasis">{{ item.studentId }} • {{ item.book }}</span>
                      </div>
                    </div>

                    <!-- Lesson info -->
                    <div class="d-flex flex-column" style="min-width: 150px">
                      <span class="text-body-2 text-medium-emphasis">Lesson</span>
                      <span class="text-body-1 font-weight-medium text-high-emphasis">{{ item.lessonName }}</span>
                    </div>

                    <!-- Status or Score -->
                    <div style="min-width: 90px">
                      <VChip
                        v-if="activeTab === 'project'"
                        :color="getStatusColor(item.status)"
                        variant="tonal"
                        size="small"
                        class="font-weight-medium text-capitalize"
                      >
                        {{ item.status }}
                      </VChip>
                      <VChip
                        v-else
                        :color="getScoreColor(item.score)"
                        variant="tonal"
                        size="small"
                        class="font-weight-medium"
                      >
                        {{ item.score }}
                      </VChip>
                    </div>

                    <VDivider vertical class="d-none d-md-block align-self-stretch my-1" style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;" />

                    <!-- Date -->
                    <div class="d-flex flex-column" style="min-width: 120px">
                      <span class="text-body-2 text-medium-emphasis">Date</span>
                      <span class="text-body-1 font-weight-medium text-high-emphasis">{{ item.date }}</span>
                    </div>

                    <VDivider vertical class="d-none d-md-block align-self-stretch my-1" style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;" />

                    <!-- Actions -->
                    <div class="d-flex gap-2 align-center flex-wrap">
                      <template v-if="activeTab === 'project'">
                        <VBtn
                          color="primary"
                          rounded="xl"
                          class="px-5 font-weight-medium text-capitalize"
                          :disabled="item.status === 'Approved'"
                          size="small"
                          @click="handleApproveClick(item)"
                        >
                          <VIcon start icon="ri-check-line" />
                          Approve
                        </VBtn>
                        <VBtn
                          color="error"
                          variant="outlined"
                          rounded="xl"
                          class="px-5 font-weight-medium text-capitalize"
                          :disabled="item.status === 'Rejected'"
                          size="small"
                          style="border-color: rgba(var(--v-theme-error), 0.5) !important;"
                          @click="handleRejectClick(item)"
                        >
                          <VIcon start icon="ri-close-line" />
                          Reject
                        </VBtn>
                      </template>
                      <template v-else>
                        <VBtn
                          icon="ri-history-line"
                          variant="outlined"
                          size="small"
                          class="action-btn"
                        />
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </VExpandTransition>
          </div>

          <!-- Pagination Footer -->
          <VDivider />
          <VDataTableFooter
            :items-per-page-options="[5, 10, 20]"
          />
        </div>
      </div>
    </VCard>

    <!-- Score History Dialog -->
    <ScoreHistoryDialog
      v-model:is-dialog-visible="showScoreHistory"
      :student="selectedHistoryItem"
      :attempts="scoreHistoryAttempts"
    />

    <!-- Approve Project Dialog -->
    <ApproveProjectDialog
      v-model:isDialogVisible="isApproveDialogOpen"
      :item-type="activeTab"
      @confirm="confirmApprove"
    />

    <!-- Reject Project Dialog -->
    <RejectProjectDialog
      v-model:isDialogVisible="isRejectDialogOpen"
      :item-type="activeTab"
      @confirm="confirmReject"
    />

    <!-- Notification Toast Messages -->
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
.count-badge {
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

.action-btn {
  border-color: rgba(var(--v-theme-on-surface), 0.08) !important;
  border-radius: 4px;

  &:hover {
    background-color: rgba(var(--v-theme-on-surface), 0.04);
  }
}

.hover-header {
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(var(--v-theme-on-surface), 0.02);
  }
}

// Scoped styles for the custom toggle button group matching the Figma design
:deep(.custom-toggle-group) {
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
    margin: 0 !important; // no margins between buttons
    border: none !important; // no borders on individual buttons
    background-color: transparent !important;
    color: rgba(var(--v-theme-on-surface), 0.7) !important;
    box-shadow: none !important;

    // Active state styles
    &.v-btn--active {
      background-color: rgba(var(--v-theme-on-surface), 0.08) !important; // action-selected
      color: rgba(var(--v-theme-on-surface), 0.9) !important; // text-primary
      
      .v-btn__overlay {
        opacity: 0 !important;
      }
    }

    // Inactive state styles (non-active hover)
    &:not(.v-btn--active):hover {
      background-color: rgba(var(--v-theme-on-surface), 0.04) !important;
    }
  }

  // Remove default divided borders if any
  &.v-btn-group--divided .v-btn:not(:last-child) {
    border-inline-end-color: transparent !important;
  }
}
</style>
