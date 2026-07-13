<script setup lang="ts">
definePageMeta({
  sidebarRoute: 'dashboard-teacher',
})

// ─────────────────────── Mock Data: Stats ───────────────────────
const skillCount = ref(3)
const studentCount = ref(20)
const classCount = ref(24)
const pendingJournalCount = ref(20)
const pendingReportCount = ref(12)

// Stat items for the "Your statistic" card
const statItems = [
  {
    icon: 'ri-pie-chart-2-line',
    iconColor: 'primary',
    label: 'Skill',
    value: skillCount,
  },
  {
    icon: 'ri-group-line',
    iconColor: 'primary',
    label: 'Student',
    value: studentCount,
  },
  {
    icon: 'ri-book-2-line',
    iconColor: 'info',
    label: 'Class',
    value: classCount,
  },
]

// ─────────────────────── Types ───────────────────────
interface UpcomingStudent {
  id: string
  name: string
  studentId: string
  avatar: string
  course: string
  lesson: string
  isPresent: boolean
  quota: number
  isLate: boolean
  lateMinutes: number
  notes: string
  addOns: number
  rentLaptop: string
}

interface UpcomingClass {
  id: string
  name: string
  date: string
  startTime: string
  endTime: string
  status: 'Ongoing' | 'Active' | 'Completed'
  sessionType: string
  students: UpcomingStudent[]
}

// ─────────────────────── Mock Data: Upcoming Classes ───────────────────────
const upcomingClasses = ref<UpcomingClass[]>([
  {
    id: 'u1',
    name: 'Regular Kids',
    date: '8 Sep',
    startTime: '10:30',
    endTime: '12:00',
    status: 'Ongoing',
    sessionType: 'Adaptive',
    students: [
      { id: 'us1', name: 'Alice Johnson', studentId: 'STD-120392032-551', avatar: 'AJ', course: 'Coding Xplorer - Adaptive with Robot New', lesson: 'Lesson 1', isPresent: true, quota: 2, isLate: false, lateMinutes: 0, notes: '', addOns: 2, rentLaptop: '2x Session' },
      { id: 'us2', name: 'Bob Smith', studentId: 'STD-120392032-552', avatar: 'BS', course: 'Coding Xplorer - Adaptive with Robot New', lesson: 'Lesson 1', isPresent: false, quota: 0, isLate: false, lateMinutes: 0, notes: '', addOns: 0, rentLaptop: '' },
      { id: 'us3', name: 'Charlie Brown', studentId: 'STD-120392032-553', avatar: 'CB', course: 'Coding Xplorer - Adaptive with Robot New', lesson: 'Lesson 1', isPresent: true, quota: 1, isLate: true, lateMinutes: 10, notes: 'Forgot homework', addOns: 1, rentLaptop: '1x Session' },
      { id: 'us4', name: 'Diana Prince', studentId: 'STD-120392032-554', avatar: 'DP', course: 'Coding Xplorer - Adaptive with Robot New', lesson: 'Lesson 1', isPresent: true, quota: 3, isLate: false, lateMinutes: 0, notes: '', addOns: 0, rentLaptop: '' },
      { id: 'us5', name: 'Eve Adams', studentId: 'STD-120392032-555', avatar: 'EA', course: 'Coding Xplorer - Adaptive with Robot New', lesson: 'Lesson 1', isPresent: false, quota: 0, isLate: false, lateMinutes: 0, notes: '', addOns: 0, rentLaptop: '' },
    ],
  },
  {
    id: 'u2',
    name: 'Advanced Teens',
    date: '12 Sep',
    startTime: '14:00',
    endTime: '15:30',
    status: 'Active',
    sessionType: 'Dynamic',
    students: [
      { id: 'us6', name: 'Frank Castle', studentId: 'STD-120392032-556', avatar: 'FC', course: 'Advanced Python', lesson: 'Lesson 5', isPresent: true, quota: 2, isLate: false, lateMinutes: 0, notes: '', addOns: 0, rentLaptop: '' },
      { id: 'us7', name: 'Grace Hopper', studentId: 'STD-120392032-557', avatar: 'GH', course: 'Advanced Python', lesson: 'Lesson 5', isPresent: true, quota: 1, isLate: true, lateMinutes: 5, notes: '', addOns: 0, rentLaptop: '' },
    ],
  },
  {
    id: 'u3',
    name: 'Future Coders',
    date: '14 Sep',
    startTime: '08:00',
    endTime: '09:30',
    status: 'Active',
    sessionType: 'Adaptive',
    students: [
      { id: 'us8', name: 'Hank Pym', studentId: 'STD-120392032-558', avatar: 'HP', course: 'Game Design Basics', lesson: 'Lesson 3', isPresent: true, quota: 1, isLate: false, lateMinutes: 0, notes: '', addOns: 0, rentLaptop: '' },
      { id: 'us9', name: 'Ivy League', studentId: 'STD-120392032-559', avatar: 'IL', course: 'Game Design Basics', lesson: 'Lesson 3', isPresent: false, quota: 0, isLate: false, lateMinutes: 0, notes: '', addOns: 0, rentLaptop: '' },
      { id: 'us10', name: 'Jack Sparrow', studentId: 'STD-120392032-560', avatar: 'JS', course: 'Game Design Basics', lesson: 'Lesson 3', isPresent: true, quota: 2, isLate: false, lateMinutes: 0, notes: '', addOns: 0, rentLaptop: '' },
    ],
  },
  {
    id: 'u4',
    name: 'Web Dev Novices',
    date: '15 Sep',
    startTime: '13:00',
    endTime: '14:30',
    status: 'Active',
    sessionType: 'Dynamic',
    students: [
      { id: 'us11', name: 'Kate Bishop', studentId: 'STD-120392032-561', avatar: 'KB', course: 'HTML & CSS', lesson: 'Lesson 2', isPresent: true, quota: 0, isLate: false, lateMinutes: 0, notes: '', addOns: 0, rentLaptop: '' },
      { id: 'us12', name: 'Logan Howlett', studentId: 'STD-120392032-562', avatar: 'LH', course: 'HTML & CSS', lesson: 'Lesson 2', isPresent: false, quota: 0, isLate: false, lateMinutes: 0, notes: '', addOns: 0, rentLaptop: '' },
    ],
  },
  {
    id: 'u5',
    name: 'Robotics Club',
    date: '16 Sep',
    startTime: '16:00',
    endTime: '18:00',
    status: 'Active',
    sessionType: 'Adaptive',
    students: [
      { id: 'us13', name: 'Miles Morales', studentId: 'STD-120392032-563', avatar: 'MM', course: 'Robotics Engineering', lesson: 'Lesson 4', isPresent: true, quota: 2, isLate: true, lateMinutes: 15, notes: '', addOns: 0, rentLaptop: '' },
    ],
  },
  {
    id: 'u6',
    name: 'AI Researchers',
    date: '18 Sep',
    startTime: '10:00',
    endTime: '12:00',
    status: 'Active',
    sessionType: 'Dynamic',
    students: [
      { id: 'us14', name: 'Natasha Romanoff', studentId: 'STD-120392032-564', avatar: 'NR', course: 'Neural Networks 101', lesson: 'Lesson 6', isPresent: true, quota: 1, isLate: false, lateMinutes: 0, notes: '', addOns: 0, rentLaptop: '' },
      { id: 'us15', name: 'Otto Octavius', studentId: 'STD-120392032-565', avatar: 'OO', course: 'Neural Networks 101', lesson: 'Lesson 6', isPresent: true, quota: 1, isLate: false, lateMinutes: 0, notes: '', addOns: 0, rentLaptop: '' },
    ],
  },
])

// ─────────────────────── Toast State ───────────────────────
const toastShow = ref(false)
const toastText = ref('')
const toastColor = ref('success')

// ─────────────────────── Accordion Toggle ───────────────────────
const isStudentListExpanded = ref(true)

const toggleStudentList = () => {
  isStudentListExpanded.value = !isStudentListExpanded.value
}

// ─────────────────────── Selection State ───────────────────────
const selectedClassId = ref(upcomingClasses.value.find(c => c.status === 'Ongoing')?.id ?? upcomingClasses.value[0]?.id ?? '')

const selectClass = (id: string) => {
  selectedClassId.value = id
}

const selectedClass = computed(() => upcomingClasses.value.find(c => c.id === selectedClassId.value))

// ─────────────────────── Per-student state helpers ───────────────────────
const togglePresence = (studentId: string) => {
  const cls = selectedClass.value
  if (!cls) return
  const student = cls.students.find(s => s.id === studentId)
  if (student) student.isPresent = !student.isPresent
}

const toggleLate = (studentId: string) => {
  const cls = selectedClass.value
  if (!cls) return
  const student = cls.students.find(s => s.id === studentId)
  if (student) student.isLate = !student.isLate
}

// ─────────────────────── Real Time Progress Types ───────────────────────
type SupportStatus = 'need-support' | 'on-track' | 'completed'
type PaceStatus = 'too-fast' | 'on-pace' | 'too-slow'
type RatingLabel = 'great' | 'good' | 'average' | 'needs-improvement'

interface ProgressStudent {
  id: string
  name: string
  avatar: string
  course: string
  meetingLabel: string
  progress: number
  lessonLabel: string
  lessonTitle: string
  duration: string
  pace: PaceStatus
  rating: RatingLabel
  supportStatus: SupportStatus
  isPresent: boolean
  checkedByTeacher: boolean
}

// ─────────────────────── Helper Maps ───────────────────────
const supportStatusMap: Record<SupportStatus, { color: string; label: string }> = {
  'need-support': { color: 'error', label: 'Need Support' },
  'on-track': { color: 'success', label: 'On Track' },
  'completed': { color: 'primary', label: 'Completed' },
}

const paceMap: Record<PaceStatus, { color: string; label: string }> = {
  'too-fast': { color: 'warning', label: 'Too Fast' },
  'on-pace': { color: 'success', label: 'On Pace' },
  'too-slow': { color: 'error', label: 'Too Slow' },
}

const ratingMap: Record<RatingLabel, { color: string; label: string }> = {
  'great': { color: 'info', label: 'Great' },
  'good': { color: 'success', label: 'Good' },
  'average': { color: 'warning', label: 'Average' },
  'needs-improvement': { color: 'error', label: 'Needs Improvement' },
}

const getSupportColor = (status: SupportStatus) => supportStatusMap[status]?.color ?? 'grey'
const getSupportLabel = (status: SupportStatus) => supportStatusMap[status]?.label ?? status
const getPaceLabel = (pace: PaceStatus) => paceMap[pace]?.label ?? pace
const getRatingLabel = (rating: RatingLabel) => ratingMap[rating]?.label ?? rating

// ─────────────────────── Mock Data: Real Time Progress ───────────────────────
const progressStudents = ref<ProgressStudent[]>([
  {
    id: 'rp1',
    name: 'Alice Johnson',
    avatar: 'AJ',
    course: 'Coding Xplorer - Adaptive with Robot New',
    meetingLabel: 'Meeting 5',
    progress: 72,
    lessonLabel: 'Lesson 2',
    lessonTitle: 'UX/UI Fundamentals',
    duration: '3h',
    pace: 'too-fast',
    rating: 'great',
    supportStatus: 'need-support',
    isPresent: true,
    checkedByTeacher: true,
  },
  {
    id: 'rp2',
    name: 'Bob Smith',
    avatar: 'BS',
    course: 'Coding Xplorer - Adaptive with Robot New',
    meetingLabel: 'Meeting 5',
    progress: 45,
    lessonLabel: 'Lesson 2',
    lessonTitle: 'UX/UI Fundamentals',
    duration: '2h',
    pace: 'on-pace',
    rating: 'good',
    supportStatus: 'on-track',
    isPresent: false,
    checkedByTeacher: false,
  },
  {
    id: 'rp3',
    name: 'Charlie Brown',
    avatar: 'CB',
    course: 'Coding Xplorer - Adaptive with Robot New',
    meetingLabel: 'Meeting 5',
    progress: 88,
    lessonLabel: 'Lesson 2',
    lessonTitle: 'UX/UI Fundamentals',
    duration: '4h',
    pace: 'too-slow',
    rating: 'average',
    supportStatus: 'completed',
    isPresent: true,
    checkedByTeacher: true,
  },
  {
    id: 'rp4',
    name: 'Diana Prince',
    avatar: 'DP',
    course: 'Coding Xplorer - Adaptive with Robot New',
    meetingLabel: 'Meeting 5',
    progress: 60,
    lessonLabel: 'Lesson 2',
    lessonTitle: 'UX/UI Fundamentals',
    duration: '2.5h',
    pace: 'on-pace',
    rating: 'great',
    supportStatus: 'need-support',
    isPresent: true,
    checkedByTeacher: false,
  },
  {
    id: 'rp5',
    name: 'Eve Adams',
    avatar: 'EA',
    course: 'Advanced Python',
    meetingLabel: 'Meeting 3',
    progress: 30,
    lessonLabel: 'Lesson 5',
    lessonTitle: 'Data Structures',
    duration: '1.5h',
    pace: 'too-fast',
    rating: 'needs-improvement',
    supportStatus: 'on-track',
    isPresent: false,
    checkedByTeacher: false,
  },
  {
    id: 'rp6',
    name: 'Frank Castle',
    avatar: 'FC',
    course: 'Game Design Basics',
    meetingLabel: 'Meeting 2',
    progress: 95,
    lessonLabel: 'Lesson 3',
    lessonTitle: 'Level Design Principles',
    duration: '3.5h',
    pace: 'on-pace',
    rating: 'great',
    supportStatus: 'completed',
    isPresent: true,
    checkedByTeacher: true,
  },
])

// ─────────────────────── Checked by teacher toggle ───────────────────────
const toggleCheckedByTeacher = (studentId: string) => {
  const student = progressStudents.value.find(s => s.id === studentId)
  if (student && student.isPresent) {
    student.checkedByTeacher = !student.checkedByTeacher
  }
}
</script>

<template>
  <section>
    <!-- Page Header -->
    <div class="mb-5">
      <h4 class="text-h4 font-weight-medium text-high-emphasis">
        Dashboard teacher
      </h4>
      <p class="text-body-1 text-medium-emphasis mb-0">
        See the progress of each student on dashboard
      </p>
    </div>

    <!-- Stats Row -->
    <VRow>
      <!-- Card 1: Your statistic (wide) -->
      <VCol
        cols="12"
        md="6"
      >
        <VCard class="overflow-hidden h-100">
          <div class="pa-5 pb-4">
            <span class="text-body-1 font-weight-medium text-high-emphasis d-block mb-5">
              Your statistic
            </span>

            <div class="d-flex align-start gap-8 flex-wrap">
              <div
                v-for="item in statItems"
                :key="item.label"
                class="d-flex align-center gap-3"
              >
                <div
                  class="d-flex align-center justify-center rounded"
                  style="width: 40px; height: 40px;"
                  :style="{ backgroundColor: `rgba(var(--v-theme-${item.iconColor}), 0.12)` }"
                >
                  <VIcon
                    :icon="item.icon"
                    :color="item.iconColor"
                    size="22"
                  />
                </div>
                <div>
                  <span class="text-caption text-medium-emphasis d-block">
                    {{ item.label }}
                  </span>
                  <span class="text-h4 font-weight-medium text-high-emphasis">
                    {{ item.value }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Green bottom accent bar -->
          <div class="bg-primary" style="height: 4px;" />
        </VCard>
      </VCol>

      <!-- Card 2: Pending Journal -->
      <VCol
        cols="12"
        sm="6"
        md="3"
      >
        <VCard class="overflow-hidden h-100">
          <div class="pa-5 pb-4 d-flex flex-column gap-1">
            <span class="text-caption text-medium-emphasis">
              Pending Journal
            </span>
            <span class="text-h3 font-weight-medium text-high-emphasis">
              {{ pendingJournalCount }}
            </span>
            <NuxtLink
              :to="{ name: 'reports' }"
              class="text-primary text-decoration-none font-weight-medium text-body-2 mt-1"
            >
              See Details
            </NuxtLink>
          </div>

          <!-- Amber bottom accent bar -->
          <div class="bg-warning" style="height: 4px;" />
        </VCard>
      </VCol>

      <!-- Card 3: Pending Report -->
      <VCol
        cols="12"
        sm="6"
        md="3"
      >
        <VCard class="overflow-hidden h-100">
          <div class="pa-5 pb-4 d-flex flex-column gap-1">
            <span class="text-caption text-medium-emphasis">
              Pending Report
            </span>
            <span class="text-h3 font-weight-medium text-high-emphasis">
              {{ pendingReportCount }}
            </span>
            <NuxtLink
              :to="{ name: 'reports' }"
              class="text-error text-decoration-none font-weight-medium text-body-2 mt-1"
            >
              See Details
            </NuxtLink>
          </div>

          <!-- Red bottom accent bar -->
          <div class="bg-error" style="height: 4px;" />
        </VCard>
      </VCol>
    </VRow>

    <!-- ─────────────────────── Upcoming Class Section ─────────────────────── -->
    <div class="mt-7">
      <VRow>
        <!-- Left Panel: Class List -->
        <VCol
          cols="12"
          md="4"
        >
          <VCard
            class="border overflow-hidden h-100 d-flex flex-column"
            style="border-color: rgba(var(--v-theme-on-surface), 0.12) !important;"
          >
            <!-- Card Header -->
            <div
              class="pa-4 d-flex align-center border-b"
              style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;"
            >
              <h5 class="text-h5 font-weight-medium text-high-emphasis mb-0">
                Upcoming class
              </h5>
            </div>

            <!-- Scrollable Body -->
            <div
              class="d-flex flex-column gap-2 pa-4 overflow-y-auto"
              style="max-height: 475px;"
            >
              <div
                v-for="cls in upcomingClasses"
                :key="cls.id"
                class="upcoming-row d-flex align-start ga-3 pa-3 rounded-lg cursor-pointer"
                :class="cls.id === selectedClassId ? 'bg-primary text-white' : 'bg-surface'"
                style="border: 1px solid rgba(var(--v-theme-on-surface), 0.08);"
                @click="selectClass(cls.id)"
              >
                <!-- Time Column -->
                <div class="d-flex flex-column align-center" style="min-width: 48px;">
                  <span
                    class="text-body-1 font-weight-medium lh-sm"
                    :class="cls.id === selectedClassId ? 'text-white' : 'text-primary'"
                  >
                    {{ cls.startTime }}
                  </span>
                  <span
                    class="text-caption"
                    :class="cls.id === selectedClassId ? 'text-white text-opacity-70' : 'text-medium-emphasis'"
                  >
                    {{ cls.endTime }}
                  </span>
                </div>

                <!-- Divider line -->
                <div
                  class="align-self-stretch"
                  style="width: 1px; background-color: rgba(var(--v-theme-on-surface), 0.12);"
                />

                <!-- Info Column -->
                <div class="d-flex flex-column flex-grow-1 min-w-0">
                  <span
                    class="text-body-1 font-weight-medium text-truncate"
                    :class="cls.id === selectedClassId ? 'text-white' : 'text-high-emphasis'"
                  >
                    {{ cls.name }}
                  </span>
                  <span
                    class="text-caption"
                    :class="cls.id === selectedClassId ? 'text-white text-opacity-70' : 'text-medium-emphasis'"
                  >
                    {{ cls.date }}
                    <span class="mx-1">·</span>
                    {{ cls.sessionType }}
                  </span>
                </div>
              </div>
            </div>
          </VCard>
        </VCol>

        <!-- Right Panel: Class Detail -->
        <VCol
          cols="12"
          md="8"
        >
          <VCard
            v-if="selectedClass"
            class="border overflow-hidden h-100 d-flex flex-column"
            style="border-color: rgba(var(--v-theme-on-surface), 0.12) !important;"
          >
            <!-- Right Panel Header -->
            <div class="pa-4 d-flex align-center justify-space-between flex-wrap gap-3 border-b" style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;">
              <div class="d-flex align-center gap-3">
                <VAvatar
                  size="40"
                  class="rounded bg-primary-opacity-lighter"
                >
                  <VIcon
                    icon="ri-user-line"
                    color="primary"
                    size="22"
                  />
                </VAvatar>

                <div class="d-flex flex-column">
                  <div class="d-flex align-center flex-wrap gap-2">
                    <span class="text-body-1 font-weight-medium text-high-emphasis">
                      {{ selectedClass.name }}
                    </span>
                    <span class="text-body-2 font-weight-medium text-primary">
                      {{ selectedClass.startTime }} - {{ selectedClass.endTime }}
                    </span>
                    <VChip
                      color="primary"
                      variant="tonal"
                      size="x-small"
                      class="font-weight-medium"
                    >
                      {{ selectedClass.status }}
                    </VChip>
                  </div>
                </div>
              </div>

              <div class="d-flex align-center gap-2">
                <VBtn
                  color="primary"
                  class="text-capitalize"
                  rounded="xl"
                  size="small"
                >
                  Finish Class
                </VBtn>
                <VBtn
                  icon
                  variant="outlined"
                  size="small"
                  rounded="lg"
                >
                  <VIcon
                    icon="ri-eye-line"
                    size="18"
                  />
                </VBtn>
                <VBtn
                  icon
                  variant="outlined"
                  size="small"
                  rounded="lg"
                  @click="toggleStudentList"
                >
                  <VIcon
                    :icon="isStudentListExpanded ? 'ri-arrow-down-s-line' : 'ri-arrow-up-s-line'"
                    size="18"
                  />
                </VBtn>
              </div>
            </div>

            <!-- Student List (collapsible) -->
            <VExpandTransition>
              <div
                v-show="isStudentListExpanded"
                class="pa-4 d-flex flex-column gap-4 overflow-y-auto"
                style="max-height: 475px;"
              >
                <div
                  v-for="student in selectedClass.students"
                  :key="student.id"
                  class="student-card pa-4 rounded-lg"
                  style="background-color: rgba(var(--v-theme-on-surface), 0.02); border: 1px solid rgba(var(--v-theme-on-surface), 0.08);"
                >
                <!-- Row 1: Identity + Presence + Send Key + Add-Ons -->
                <div class="d-flex align-center justify-space-between flex-wrap gap-3 mb-3">
                  <div class="d-flex align-center gap-3 flex-grow-1 min-w-0">
                    <VAvatar
                      size="34"
                      color="grey-50"
                      class="border"
                      style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;"
                    >
                      <span class="text-caption font-weight-medium text-high-emphasis">{{ student.avatar }}</span>
                    </VAvatar>

                    <div class="d-flex flex-column min-w-0">
                      <span class="text-body-1 font-weight-medium text-high-emphasis text-truncate">
                        {{ student.name }}
                      </span>
                      <span class="text-caption text-medium-emphasis text-truncate">
                        {{ student.studentId }}
                      </span>
                    </div>

                    <!-- Presence Indicator -->
                    <div class="d-flex align-center gap-1 ms-2">
                      <VIcon
                        :icon="student.isPresent ? 'ri-checkbox-circle-fill' : 'ri-checkbox-blank-circle-line'"
                        :color="student.isPresent ? 'success' : 'disabled'"
                        size="20"
                      />
                      <span
                        class="text-caption font-weight-medium"
                        :class="student.isPresent ? 'text-success' : 'text-disabled'"
                      >
                        Presence
                      </span>
                    </div>
                  </div>

                  <div class="d-flex align-center gap-2">
                    <!-- Send Key Button -->
                    <VBtn
                      variant="outlined"
                      color="primary"
                      size="x-small"
                      rounded="xl"
                      class="text-capitalize font-weight-medium"
                    >
                      <VIcon
                        start
                        icon="ri-key-line"
                        size="14"
                      />
                      Send Key
                    </VBtn>

                    <!-- Add-Ons chip -->
                    <VBtn
                      v-if="student.addOns > 0"
                      variant="outlined"
                      color="secondary"
                      size="x-small"
                      rounded="xl"
                      class="text-capitalize font-weight-medium"
                    >
                      {{ student.addOns }} Add-Ons
                    </VBtn>
                  </div>
                </div>

                <!-- Row 2: Course + Lesson -->
                <div class="d-flex align-center gap-1 mb-3">
                  <VIcon
                    icon="ri-book-2-line"
                    size="14"
                    color="secondary"
                  />
                  <span class="text-caption text-medium-emphasis text-truncate">
                    {{ student.course }}
                  </span>
                  <span class="dot-separator bg-secondary mx-1" />
                  <span class="text-caption font-weight-medium text-medium-emphasis">
                    {{ student.lesson }}
                  </span>
                </div>

                <!-- Row 3: Attendance Controls -->
                <div class="d-flex align-center flex-wrap gap-3">
                  <!-- Quota pill -->
                  <VChip
                    color="success"
                    variant="tonal"
                    size="x-small"
                    class="font-weight-medium"
                  >
                    Quota : {{ student.quota }}
                  </VChip>

                  <!-- Rent Laptop chip -->
                  <VChip
                    v-if="student.rentLaptop"
                    color="info"
                    variant="tonal"
                    size="x-small"
                    class="font-weight-medium"
                  >
                    Rent Laptop {{ student.rentLaptop }}
                  </VChip>

                  <!-- Late / On Time toggle -->
                  <div class="d-flex align-center gap-1">
                    <VCheckbox
                      :model-value="student.isLate"
                      hide-details
                      density="compact"
                      class="late-checkbox"
                      @change="toggleLate(student.id)"
                    />
                    <span class="text-caption font-weight-medium" :class="student.isLate ? 'text-error' : 'text-success'">
                      {{ student.isLate ? 'Late' : 'On Time' }}
                    </span>
                  </div>

                  <!-- Minutes input (shown only when late) -->
                  <div
                    v-if="student.isLate"
                    style="width: 80px;"
                  >
                    <VTextField
                      :model-value="student.lateMinutes"
                      label="Minutes"
                      type="number"
                      density="compact"
                      hide-details
                      variant="outlined"
                      class="minutes-input"
                    />
                  </div>

                  <!-- Notes input -->
                  <div style="min-width: 160px; flex: 1;">
                    <VTextField
                      v-model="student.notes"
                      placeholder="Notes"
                      density="compact"
                      hide-details
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
            </div>
            </VExpandTransition>

            <!-- Footer -->
            <VDivider />
            <div class="pa-4 d-flex align-center justify-end gap-3">
              <VBtn
                variant="outlined"
                color="secondary"
                class="text-capitalize"
                rounded="xl"
                @click="toastShow = true; toastText = 'Changes discarded'; toastColor = 'info'"
              >
                Discard
              </VBtn>
              <VBtn
                color="primary"
                class="text-capitalize"
                rounded="xl"
                @click="toastShow = true; toastText = 'Changes saved successfully'; toastColor = 'success'"
              >
                Save Changes
              </VBtn>
            </div>
          </VCard>

          <!-- Empty state if no class selected -->
          <VCard
            v-else
            class="d-flex align-center justify-center pa-12 border"
            style="border-color: rgba(var(--v-theme-on-surface), 0.12) !important;"
          >
            <p class="text-body-1 text-medium-emphasis mb-0">
              Select a class to view details
            </p>
          </VCard>
        </VCol>
      </VRow>
    </div>

    <!-- ─────────────────────── Real Time Progress ─────────────────────── -->
    <div class="mt-7">
      <h5 class="text-h5 font-weight-medium text-high-emphasis mb-4">
        Real Time Progress
      </h5>

      <VRow>
        <VCol
          v-for="student in progressStudents"
          :key="student.id"
          cols="12"
          sm="6"
          md="4"
        >
          <VCard
            class="border overflow-hidden position-relative"
            :class="{ 'card-disabled': !student.isPresent }"
            :style="{
              borderColor: student.isPresent
                ? 'rgba(var(--v-theme-primary), 0.24) !important'
                : 'rgba(var(--v-theme-on-surface), 0.08) !important',
            }"
          >
            <!-- 1. Header Row: Avatar + Name + Status Pill -->
            <div class="pa-4 d-flex align-center justify-space-between gap-2">
              <div class="d-flex align-center gap-3 min-w-0">
                <VAvatar
                  size="36"
                  color="primary"
                  class="rounded"
                >
                  <span class="text-caption font-weight-medium text-white">{{ student.avatar }}</span>
                </VAvatar>
                <span class="text-body-1 font-weight-medium text-high-emphasis text-truncate">
                  {{ student.name }}
                </span>
              </div>
              <VChip
                size="x-small"
                :color="getSupportColor(student.supportStatus)"
                variant="flat"
                class="font-weight-medium text-white flex-shrink-0"
              >
                {{ getSupportLabel(student.supportStatus) }}
              </VChip>
            </div>

            <!-- 2. Course / Meeting sub-row -->
            <div class="px-4 pb-3 d-flex align-center gap-2">
              <VIcon
                icon="ri-book-2-line"
                size="16"
                color="secondary"
              />
              <span class="text-caption text-medium-emphasis text-truncate">
                {{ student.course }}
              </span>
              <VChip
                size="x-small"
                color="info"
                variant="tonal"
                class="font-weight-medium flex-shrink-0"
              >
                {{ student.meetingLabel }}
              </VChip>
            </div>

            <!-- 3. Progress Bar -->
            <div class="px-4 pb-4">
              <VProgressLinear
                :model-value="student.progress"
                color="success"
                height="6"
                rounded
                track-color="rgba(var(--v-theme-on-surface), 0.08)"
              />
            </div>

            <!-- 4. Bottom Detail Box -->
            <div
              class="mx-4 mb-4 pa-3 rounded-lg"
              :style="{
                border: `1px solid ${student.isPresent
                  ? 'rgba(var(--v-theme-primary), 0.24)'
                  : 'rgba(var(--v-theme-on-surface), 0.08)'}`,
              }"
            >
              <!-- Lesson + Duration row -->
              <div class="d-flex align-start justify-space-between mb-2">
                <div class="min-w-0">
                  <span class="text-caption font-weight-medium text-primary">
                    {{ student.lessonLabel }}
                  </span>
                  <span class="text-body-2 text-high-emphasis d-block text-truncate">
                    {{ student.lessonTitle }}
                  </span>
                </div>
                <div class="text-right flex-shrink-0">
                  <div class="d-flex align-center gap-1 justify-end">
                    <VIcon
                      icon="ri-flashlight-line"
                      size="14"
                      color="warning"
                    />
                    <span class="text-body-1 font-weight-medium text-high-emphasis">
                      {{ student.duration }}
                    </span>
                  </div>
                  <span
                    class="text-caption font-weight-medium"
                    :style="{ color: `rgb(var(--v-theme-${paceMap[student.pace]?.color ?? 'warning'}))` }"
                  >
                    {{ getPaceLabel(student.pace) }}
                  </span>
                </div>
              </div>

              <!-- Checked by teacher + Rating row -->
              <div class="d-flex align-center justify-space-between gap-2">
                <VCheckbox
                  :model-value="student.checkedByTeacher"
                  :disabled="!student.isPresent"
                  label="Checked by teacher"
                  hide-details
                  density="compact"
                  color="success"
                  class="progress-checkbox"
                  @change="toggleCheckedByTeacher(student.id)"
                />
                <VChip
                  size="x-small"
                  color="info"
                  variant="tonal"
                  class="font-weight-medium flex-shrink-0"
                >
                  {{ getRatingLabel(student.rating) }}
                </VChip>
              </div>
            </div>

            <!-- 5. Disabled overlay (visible on hover) -->
            <div
              v-if="!student.isPresent"
              class="disabled-overlay"
            >
              <div class="d-flex align-center justify-center gap-2">
                <VIcon
                  icon="ri-information-line"
                  size="16"
                  color="white"
                />
                <span class="text-caption text-white font-weight-medium">
                  This student not presence yet.
                </span>
              </div>
            </div>
          </VCard>
        </VCol>
      </VRow>
    </div>

    <!-- Toast Snackbar -->
    <VSnackbar
      v-model="toastShow"
      :color="toastColor"
      timeout="3000"
    >
      {{ toastText }}
    </VSnackbar>
  </section>
</template>

<style lang="scss" scoped>
.upcoming-row {
  transition: all 0.15s ease;

  &.bg-primary {
    border-color: transparent !important;
  }

  &:not(.bg-primary):hover {
    background-color: rgba(var(--v-theme-primary), 0.04) !important;
  }
}

.dot-separator {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  opacity: 0.5;
  flex-shrink: 0;
}

.student-card {
  transition: background-color 0.15s ease;
  &:hover {
    background-color: rgba(var(--v-theme-on-surface), 0.04) !important;
  }
}

:deep(.late-checkbox) {
  .v-checkbox .v-selection-control {
    min-height: unset;
  }
  .v-selection-control__wrapper {
    width: 18px;
    height: 18px;
  }
}

.card-disabled {
  filter: grayscale(0.6);
  opacity: 0.75;
  position: relative;
}

.disabled-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  cursor: pointer;
  z-index: 1;
}

.card-disabled:hover .disabled-overlay {
  opacity: 1;
}

:deep(.progress-checkbox) {
  .v-checkbox .v-selection-control {
    min-height: unset;
  }
  .v-label {
    font-size: 0.8125rem;
    opacity: 0.8;
  }
}

:deep(.minutes-input) {
  .v-field--variant-outlined {
    --v-field-padding-bottom: 4px;
    --v-field-padding-top: 4px;
  }
  .v-field__input {
    min-height: 28px;
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 0.8125rem;
  }
  .v-label {
    font-size: 0.75rem;
  }
}
</style>
