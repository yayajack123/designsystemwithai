<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import UiSectionHeader from '@/components/ui/UiSectionHeader.vue'

definePageMeta({
  sidebarRoute: 'attendance',
})

const route = useRoute()
const router = useRouter()

const classId = computed(() => (route.query.classId as string) || '1')
const studentId = computed(() => (route.query.studentId as string) || 's1')

// ─────────────────────── Mock Data (aligned with attendance-detail.vue) ───────────────────────
interface StudentDetail {
  id: string
  studentId: string
  name: string
  sessionText: string
  bookTitle: string
  bookStatus: 'Completed' | 'Idle' | 'Incomplete'
  hasLaptop: boolean
  presence: 'On time' | 'Late 5 minutes' | 'Absent'
  notes: string
  status: 'Sent' | 'Not send yet' | 'Revision' | '-'
  actionText: string
  actionIcon: string
}

interface TeacherDetail {
  id: string
  name: string
  isMain: boolean
}

interface ClassSession {
  id: string
  name: string
  room: string
  date: string
  teachersCount: number
  teachers: TeacherDetail[]
  timeStart: string
  timeEnd: string
  duration: string
  className: string
  meetingType: string
  meetingNumber: string
  status: 'Active' | 'Ongoing' | 'Waiting Approval' | 'Completed'
  students: StudentDetail[]
}

const mockClasses = ref<ClassSession[]>([
  {
    id: '1',
    name: 'RDA-9012',
    room: 'Rio Room',
    date: 'Thu, 26 Feb 2026',
    teachersCount: 2,
    teachers: [
      { id: 'TCR-20260123-003', name: 'Kaylynn Herwitz', isMain: true },
      { id: 'TCR-20260123-004', name: 'Randy Aminoff', isMain: false },
    ],
    timeStart: '00:00',
    timeEnd: '01:30',
    duration: '2 hrs',
    className: 'Private Teen Class Coding Camp',
    meetingType: 'Group Class',
    meetingNumber: 'Meeting 20',
    status: 'Active',
    students: [
      { id: 's1', studentId: 'STD-20260326-019', name: 'Cristofer Mango', sessionText: 'Session 6', bookTitle: 'Python for Beginners', bookStatus: 'Completed', hasLaptop: true, presence: 'On time', notes: 'The Web Developer for Beginners class had a good attendance rate, with students engaging in discussions.', status: '-', actionText: 'Create Journal', actionIcon: 'ri-pencil-line' },
      { id: 's2', studentId: 'STD-20260326-019', name: 'Richard Payne', sessionText: 'Session 6', bookTitle: 'Python for Beginners', bookStatus: 'Idle', hasLaptop: true, presence: 'On time', notes: 'In the Android Developer for Beginners course, attendance was strong, with most students actively participating.', status: 'Sent', actionText: 'View', actionIcon: 'ri-eye-line' },
      { id: 's3', studentId: 'STD-20260326-019', name: 'Mr. Justin Richardson', sessionText: 'Session 6', bookTitle: 'Python for Beginners', bookStatus: 'Incomplete', hasLaptop: true, presence: 'Late 5 minutes', notes: 'This week in Coding Kids, attendance was perfect, with every student eager to learn.', status: 'Not send yet', actionText: 'Continue', actionIcon: 'ri-share-forward-2-line' },
      { id: 's4', studentId: 'STD-20260326-019', name: 'Cristofer Mango', sessionText: 'Session 6', bookTitle: 'Python for Beginners', bookStatus: 'Completed', hasLaptop: true, presence: 'On time', notes: 'The Coding Kids session saw a full turnout, showcasing great enthusiasm among the participants.', status: '-', actionText: 'Continue', actionIcon: 'ri-share-forward-2-line' },
      { id: 's5', studentId: 'STD-20260326-019', name: 'Jennifer Summers', sessionText: 'Session 6', bookTitle: 'Python for Beginners', bookStatus: 'Completed', hasLaptop: false, presence: 'Absent', notes: 'Attendance for the Coding Kids class was excellent this week, with all students present.', status: '-', actionText: 'Create Journal', actionIcon: 'ri-pencil-line' }
    ],
  },
  {
    id: '2',
    name: 'Advanced Teens',
    room: 'Zoom Room 12',
    date: 'Thu, 26 Feb 2026',
    teachersCount: 3,
    teachers: [
      { id: 'TCR-20260123-001', name: "Liam O'Connor", isMain: true },
      { id: 'TCR-20260123-002', name: 'Sophia Tran', isMain: false },
      { id: 'TCR-20260123-005', name: 'Marcus Aurelius', isMain: false },
    ],
    timeStart: '00:00',
    timeEnd: '01:30',
    duration: '2 hrs',
    className: 'Private Teen Class Coding Camp',
    meetingType: 'Group Class',
    meetingNumber: 'Meeting 20',
    status: 'Ongoing',
    students: [
      { id: 's11', studentId: 'STD-20260326-011', name: 'Alex Rivera', sessionText: 'Session 6', bookTitle: 'AI Enthusiast', bookStatus: 'Completed', hasLaptop: true, presence: 'On time', notes: 'Student participated actively.', status: 'Sent', actionText: 'View', actionIcon: 'ri-eye-line' },
      { id: 's12', studentId: 'STD-20260326-012', name: 'Jamie Lee', sessionText: 'Session 6', bookTitle: 'Robotics Explorer', bookStatus: 'Idle', hasLaptop: false, presence: 'Absent', notes: 'Excused absence.', status: '-', actionText: 'Create Journal', actionIcon: 'ri-pencil-line' }
    ],
  }
])

// ─────────────────────── Lookup Computed Properties ───────────────────────
const classSession = computed(() => {
  return mockClasses.value.find(c => c.id === classId.value) || null
})

const currentStudent = computed(() => {
  if (classSession.value) {
    const s = classSession.value.students.find(student => student.id === studentId.value)
    if (s) return s
  }
  return {
    id: 's1',
    studentId: 'STD-20260326-019',
    name: 'Cristofer Mango',
    sessionText: 'Session 6',
    bookTitle: 'Python for Beginners',
    presence: 'On time',
    hasLaptop: true,
    bookStatus: 'Completed',
    notes: '',
    status: '-',
    actionText: 'Create Journal',
    actionIcon: 'ri-pencil-line'
  } as StudentDetail
})

const currentTeacherName = computed(() => {
  if (classSession.value && classSession.value.teachers.length > 0) {
    return classSession.value.teachers.find(t => t.isMain)?.name || classSession.value.teachers[0].name
  }
  return 'I Putu Andi Sentosa'
})

// ─────────────────────── Stepper & Form States ───────────────────────
const currentStep = computed({
  get: () => {
    const s = route.query.step as string
    return s === '2' ? 2 : 1
  },
  set: (val) => {
    router.replace({
      query: {
        ...route.query,
        step: val.toString()
      }
    })
  }
})

const backRoute = computed(() => {
  if (currentStep.value === 2) {
    return {
      path: '/meeting-journal/create',
      query: {
        ...route.query,
        step: '1'
      }
    }
  }
  return {
    path: '/attendance-detail',
    query: { id: classId.value }
  }
})

const projectName = ref('Project A')
const isActiveProject = ref(true)
const teacherNotes = ref('Student already good to apply the pelajaran')
const isDetailsCollapsed = ref(false)

// AI Summary States
const aiSummary = ref('')
const isGeneratingAI = ref(false)
const aiGenerationCount = ref(0)

const generateAISummary = () => {
  if (isGeneratingAI.value) return
  isGeneratingAI.value = true
  setTimeout(() => {
    aiSummary.value = `Student ${currentStudent.value.name} has demonstrated excellent progress in Session 6 (${currentStudent.value.bookTitle}). They achieved high scores in covered lessons and actively completed practical objectives. Notes: "${teacherNotes.value}".`
    isGeneratingAI.value = false
    aiGenerationCount.value++
    showToast('AI Summary generated successfully.', 'success')
  }, 1000)
}

// ─────────────────────── Covered Lessons States & Handlers ───────────────────────
interface Lesson {
  id: number
  title: string
  progress: string
  statusText: 'Complete' | 'Progress'
  statusColor: 'success' | 'info'
  score: number
  maxScore: number
  objectives: string[]
  expanded?: boolean
}

const coveredLessons = ref<Lesson[]>([
  {
    id: 1,
    title: 'Lesson 1 - Introduction to Pygame',
    progress: '100%',
    statusText: 'Complete',
    statusColor: 'success',
    score: 85,
    maxScore: 100,
    objectives: [
      'Introducing concepts related to Game development',
      'Know how to develop games using Pygame',
      'Know how to set the environment in Pygame',
      'Know how to initialize FPS in Pygame',
      'Add another object to the Pygame canvas',
      'Understand list operations in Python'
    ],
    expanded: true
  },
  {
    id: 2,
    title: 'Lesson 1 - Introduction to Pygame',
    progress: '100%',
    statusText: 'Complete',
    statusColor: 'success',
    score: 85,
    maxScore: 100,
    objectives: [
      'Introducing concepts related to Game development',
      'Know how to develop games using Pygame',
      'Understand basic variables and main loops'
    ],
    expanded: false
  },
  {
    id: 3,
    title: 'Lesson 1 - Introduction to Pygame',
    progress: '88%',
    statusText: 'Progress',
    statusColor: 'info',
    score: 0,
    maxScore: 100,
    objectives: [
      'Know how to initialize FPS in Pygame',
      'Add another object to the Pygame canvas',
      'Understand list operations in Python'
    ],
    expanded: false
  }
])

// Delete lesson handler
const deleteLesson = (id: number) => {
  coveredLessons.value = coveredLessons.value.filter(l => l.id !== id)
  showToast('Lesson removed.', 'warning')
}

// ─────────────────────── Covered Lessons Selection Dialog ───────────────────────
const showAddLessonDialog = ref(false)
const searchLessonQuery = ref('')
const selectedLessonIds = ref<number[]>([])

interface AvailableLesson {
  id: number
  title: string
  progress: string
  statusText: 'Complete' | 'Progress'
  statusColor: 'success' | 'info'
  score: number
  maxScore: number
}

const availableLessonsList = ref<AvailableLesson[]>([
  { id: 1, title: 'Lesson 1 - Introduction to Pygame', progress: '100%', statusText: 'Complete', statusColor: 'success', score: 85, maxScore: 100 },
  { id: 2, title: 'Lesson 2 - Drawing Shapes in Pygame', progress: '100%', statusText: 'Complete', statusColor: 'success', score: 85, maxScore: 100 },
  { id: 3, title: 'Lesson 3 - Keyboard and Mouse Events', progress: '88%', statusText: 'Progress', statusColor: 'info', score: 0, maxScore: 100 },
  { id: 4, title: 'Lesson 4 - Sprites and Collisions', progress: '0%', statusText: 'Progress', statusColor: 'info', score: 0, maxScore: 100 },
  { id: 5, title: 'Lesson 5 - Game Loop and Sound FX', progress: '0%', statusText: 'Progress', statusColor: 'info', score: 0, maxScore: 100 },
  { id: 6, title: 'Lesson 6 - Project Build and Finalization', progress: '0%', statusText: 'Progress', statusColor: 'info', score: 0, maxScore: 100 }
])

const filteredAvailableLessons = computed(() => {
  if (!searchLessonQuery.value) return availableLessonsList.value
  const q = searchLessonQuery.value.toLowerCase()
  return availableLessonsList.value.filter(l => l.title.toLowerCase().includes(q))
})

const openAddLessonDialog = () => {
  selectedLessonIds.value = coveredLessons.value.map(l => l.id)
  searchLessonQuery.value = ''
  showAddLessonDialog.value = true
}

const toggleLessonSelection = (id: number) => {
  const index = selectedLessonIds.value.indexOf(id)
  if (index > -1) {
    selectedLessonIds.value.splice(index, 1)
  } else {
    selectedLessonIds.value.push(id)
  }
}

const confirmLessonSelection = () => {
  const newCovered: Lesson[] = []
  selectedLessonIds.value.forEach(id => {
    const existing = coveredLessons.value.find(l => l.id === id)
    if (existing) {
      newCovered.push(existing)
    } else {
      const avail = availableLessonsList.value.find(l => l.id === id)
      if (avail) {
        newCovered.push({
          id: avail.id,
          title: avail.title,
          progress: avail.progress,
          statusText: avail.statusText,
          statusColor: avail.statusColor,
          score: avail.score,
          maxScore: avail.maxScore,
          objectives: [
            'Introducing concepts related to Game development',
            'Understand basic logic of the selected module',
            'Implement practical applications and verify results'
          ],
          expanded: true
        })
      }
    }
  })
  coveredLessons.value = newCovered
  showAddLessonDialog.value = false
  showToast('Covered lessons updated.', 'success')
}

// ─────────────────────── Evidence Photo States & Handlers ───────────────────────
interface PhotoFile {
  name: string
  url: string
}
const uploadedPhotos = ref<PhotoFile[]>([])
const cameraFileInput = ref<HTMLInputElement | null>(null)
const galleryFileInput = ref<HTMLInputElement | null>(null)
const showUploadPhotoDialog = ref(false)

const triggerCameraInput = () => {
  showUploadPhotoDialog.value = false
  cameraFileInput.value?.click()
}

const triggerGalleryInput = () => {
  showUploadPhotoDialog.value = false
  galleryFileInput.value?.click()
}

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (!target.files) return

  const files = Array.from(target.files)
  
  if (uploadedPhotos.value.length + files.length > 3) {
    showToast('You can upload up to 3 photos only.', 'error')
    return
  }

  for (const file of files) {
    if (file.size > 1024 * 1024) {
      showToast(`File "${file.name}" exceeds 1MB limit.`, 'error')
      continue
    }

    uploadedPhotos.value.push({
      name: file.name,
      url: URL.createObjectURL(file)
    })
  }
}

const removePhoto = (index: number) => {
  uploadedPhotos.value.splice(index, 1)
  showToast('Photo removed.', 'info')
}

// Photo Guidelines Dialog
const showExampleDialog = ref(false)

// ─────────────────────── Back Button Confirmation Dialog ───────────────────────
const showBackConfirmDialog = ref(false)

const initialData = {
  projectName: 'Project A',
  isActiveProject: true,
  teacherNotes: 'Student already good to apply the pelajaran',
  uploadedPhotosCount: 0,
  coveredLessonsCount: 3
}

const isDataChanged = computed(() => {
  if (
    projectName.value !== initialData.projectName ||
    isActiveProject.value !== initialData.isActiveProject ||
    teacherNotes.value !== initialData.teacherNotes ||
    uploadedPhotos.value.length !== initialData.uploadedPhotosCount
  ) {
    return true
  }
  
  if (coveredLessons.value.length !== initialData.coveredLessonsCount) {
    return true
  }
  
  const initialScores = [85, 85, 0]
  for (let i = 0; i < coveredLessons.value.length; i++) {
    if (i < initialScores.length && coveredLessons.value[i].score !== initialScores[i]) {
      return true
    }
  }
  
  return false
})

const handleCustomBackClick = () => {
  if (isDataChanged.value) {
    showBackConfirmDialog.value = true
  } else {
    router.push(backRoute.value)
  }
}

const confirmBackNavigation = () => {
  showBackConfirmDialog.value = false
  router.push(backRoute.value)
}

// ─────────────────────── Action Footer Handlers ───────────────────────
const showToastActive = ref(false)
const toastMessage = ref('')
const toastColor = ref('success')

const showToast = (message: string, color: string = 'success') => {
  toastMessage.value = message
  toastColor.value = color
  showToastActive.value = true
}

const saveAsDraft = () => {
  showToast('Journal saved as draft.', 'success')
}

const saveAndContinue = () => {
  showToast('Journal Step 1 saved as draft.', 'success')
  currentStep.value = 2
}

const downloadPDF = () => {
  showToast('Report PDF downloaded successfully.', 'success')
}

const sendReport = () => {
  showToast('Report sent to parents successfully!', 'success')
  setTimeout(() => {
    router.push({
      path: '/attendance-detail',
      query: { id: classId.value }
    })
  }, 1500)
}
</script>

<template>
  <div class="meeting-journal-create-page">
    <!-- Header with Back Button and Student Roster Details -->
    <div class="full-width-header bg-surface border-b px-6">
      <UiSectionHeader
        :title="currentStudent.name"
        :description="`${currentStudent.studentId} • ${currentStudent.sessionText} • ${currentStudent.bookTitle}`"
        :back="(backRoute as any)"
        :custom-back="currentStep === 1"
        @click:back="handleCustomBackClick"
        class="mb-0"
      />
    </div>

    <!-- Stepper Banner -->
    <div class="full-width-stepper bg-surface border-b px-6 py-4 mb-6">
      <div class="d-flex align-center justify-space-between flex-wrap gap-4">
        <div class="d-flex align-center gap-4">
          <!-- circular stepper from presence dialog -->
          <VProgressCircular
            :model-value="currentStep === 1 ? 50 : 100"
            color="primary"
            size="64"
            width="5"
            class="font-weight-bold"
          >
            <span class="text-body-1 font-weight-medium text-high-emphasis">
              {{ currentStep }}/2
            </span>
          </VProgressCircular>

          <div class="d-flex flex-column">
            <h5 class="text-h5 font-weight-medium text-high-emphasis">
              {{ currentStep === 1 ? 'Lesson & Details' : 'Preview' }}
            </h5>
            <span class="text-body-2 text-medium-emphasis">
              {{ currentStep === 1 ? 'Topics, Photo & Observation' : 'Preview and send report to parents' }}
            </span>
          </div>
        </div>

        <div class="teacher-info-badge px-4 py-2 rounded-pill d-flex align-center gap-2 border">
          <VIcon icon="ri-user-line" size="20" class="text-medium-emphasis" />
          <span class="text-body-2 text-medium-emphasis">Teacher :</span>
          <span class="text-body-2 font-weight-medium text-primary">
            {{ currentTeacherName }}
          </span>
        </div>
      </div>
    </div>

    <!-- Step 1 Content Container -->
    <div v-if="currentStep === 1" class="create-journal-content-container">
      <!-- SECTION: Covered Lessons -->
      <div class="mb-6">
      <div class="d-flex align-center justify-space-between mb-4">
        <div>
          <h5 class="text-h5 font-weight-medium text-high-emphasis">Covered lessons</h5>
          <span class="text-body-2 text-medium-emphasis">Choose lessons covered in this meeting and add photo</span>
        </div>
        <VBtn
          variant="outlined"
          color="primary"
          prepend-icon="ri-add-line"
          class="rounded-pill"
          size="small"
          @click="openAddLessonDialog"
        >
          Add Another
        </VBtn>
      </div>

      <!-- Custom Lesson Cards List -->
      <div class="custom-lesson-list" v-if="coveredLessons.length > 0">
        <div
          v-for="(lesson, idx) in coveredLessons"
          :key="lesson.id"
          class="lesson-card border rounded-lg mb-4 overflow-hidden"
        >
          <!-- Top Row: Always Visible -->
          <div class="lesson-header-row d-flex align-center justify-space-between pa-4 bg-surface gap-4">
            <!-- Left Side: Status & Title -->
            <div class="d-flex align-center">
              <!-- Status circle indicator (20px) -->
              <div
                :class="['status-circle d-flex align-center justify-center me-3', lesson.statusColor]"
              >
                <VIcon
                  :icon="lesson.statusColor === 'success' ? 'ri-check-line' : 'ri-loader-line'"
                  size="14"
                  color="white"
                />
              </div>

              <div class="d-flex flex-column">
                <span class="text-body-1 font-weight-medium text-high-emphasis leading-normal">
                  {{ lesson.title }}
                </span>
                <div class="d-flex align-center gap-1 mt-1">
                  <VIcon
                    :icon="lesson.statusColor === 'success' ? 'ri-check-line' : 'ri-loader-2-line'"
                    size="12"
                    :class="`text-${lesson.statusColor === 'success' ? 'primary' : 'info'}`"
                  />
                  <span
                    class="text-caption font-weight-medium"
                    :class="`text-${lesson.statusColor === 'success' ? 'primary' : 'info'}`"
                  >
                    {{ lesson.progress }} {{ lesson.statusText }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Side: Score, Divider, Delete -->
            <div class="d-flex align-center gap-4">
              <!-- Score inputs -->
              <div class="d-flex align-center gap-2">
                <span class="text-body-2 text-medium-emphasis">Score :</span>
                <div class="score-input-box">
                  <input
                    type="number"
                    v-model.number="lesson.score"
                    min="0"
                    max="100"
                    class="text-center font-weight-medium"
                    :class="lesson.score > 0 ? 'text-primary' : 'text-medium-emphasis'"
                  />
                </div>
                <span class="text-body-2 text-medium-emphasis">/ 100</span>
              </div>

              <!-- Vertical Divider -->
              <div class="vertical-divider"></div>

              <!-- Styled Delete Button -->
              <VBtn
                icon="ri-delete-bin-line"
                variant="outlined"
                color="error"
                class="delete-btn rounded border-solid"
                @click="deleteLesson(lesson.id)"
              />
            </div>
          </div>

          <!-- Collapsible Accordion Part -->
          <div class="lesson-accordion-section">
            <!-- Accordion Header Row -->
            <div
              class="accordion-header d-flex align-center justify-space-between px-4 py-3 cursor-pointer"
              @click="lesson.expanded = !lesson.expanded"
            >
              <div class="d-flex align-center gap-2">
                <!-- Objective Circle Icon -->
                <div class="objective-circle d-flex align-center justify-center">
                  <VIcon icon="ri-focus-2-line" size="12" color="white" />
                </div>
                <span class="text-body-2 font-weight-medium text-high-emphasis">
                  Lesson Objective
                </span>
              </div>

              <!-- Collapse Arrow Wrapper -->
              <div class="accordion-arrow bg-white border rounded">
                <VIcon
                  :icon="lesson.expanded ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'"
                  size="18"
                  class="text-medium-emphasis"
                />
              </div>
            </div>

            <!-- Accordion Content (Visible when expanded) -->
            <VExpandTransition>
              <div v-show="lesson.expanded" class="accordion-content px-4 pb-4">
                <ul class="objective-list text-body-2 text-medium-emphasis pl-6">
                  <li v-for="(obj, oIdx) in lesson.objectives" :key="oIdx" class="mb-1 leading-relaxed">
                    {{ obj }}
                  </li>
                </ul>
              </div>
            </VExpandTransition>
          </div>
        </div>
      </div>
      <div v-if="coveredLessons.length === 0" class="text-center py-6 border rounded-lg bg-surface">
        <span class="text-body-1 text-medium-emphasis">No covered lessons added yet. Click "Add Another" to add.</span>
      </div>
    </div>

    <!-- Full-width Divider -->
    <VDivider class="my-6" />

    <!-- SECTION: Details Grid -->
    <div class="d-flex align-center justify-space-between mb-4 mt-6">
      <div class="d-flex flex-column gap-1">
        <h5 class="text-h5 font-weight-medium text-high-emphasis">Add Details</h5>
        <span class="text-body-2 text-medium-emphasis">
          Complete the project detail and your observation
        </span>
      </div>
      <VBtn
        variant="outlined"
        color="secondary"
        size="small"
        style="border-color: rgba(46, 38, 61, 0.08) !important; background-color: white; border-radius: 4px;"
        class="pa-0 min-width-0"
        @click="isDetailsCollapsed = !isDetailsCollapsed"
      >
        <VIcon :icon="isDetailsCollapsed ? 'ri-arrow-down-s-line' : 'ri-arrow-up-s-line'" size="22" color="secondary" />
      </VBtn>
    </div>

    <VExpandTransition>
      <VRow v-show="!isDetailsCollapsed" class="mb-6 gap-y-6">
        <!-- Left Column: Project Details & Evidence Photo -->
        <VCol cols="12" md="6" class="d-flex flex-column gap-6">
          <!-- Project Details Card -->
          <VCard border elevation="0" class="rounded-lg py-6 px-5">
            <h5 class="text-body-1 font-weight-medium text-high-emphasis mb-4">Project Details</h5>
            <div class="d-flex flex-column gap-4">
              <div class="d-flex align-center gap-3">
                <VTextField
                  v-model="projectName"
                  variant="outlined"
                  density="compact"
                  hide-details
                  placeholder="Enter project name"
                  label="Project"
                  class="bg-surface flex-grow-1"
                />
                <VCheckbox
                  v-model="isActiveProject"
                  label="Active project"
                  color="primary"
                  hide-details
                  class="mt-0 pt-0"
                />
              </div>

              <VTextField
                v-model="teacherNotes"
                variant="outlined"
                density="compact"
                placeholder="Write student observation notes..."
                hide-details
                label="Teacher Notes"
                class="bg-surface w-100"
              />
            </div>
          </VCard>

          <!-- Evidence Photo Card -->
          <VCard border elevation="0" class="rounded-lg pa-5">
            <div class="d-flex align-center justify-space-between mb-4">
              <h5 class="text-body-1 font-weight-medium text-high-emphasis mb-0">Evidence Photo</h5>
              <VBtn
                variant="text"
                color="primary"
                density="compact"
                prepend-icon="ri-information-line"
                @click="showExampleDialog = true"
                class="font-weight-medium text-capitalize pa-0"
              >
                See Example
              </VBtn>
            </div>

            <!-- Dashed upload box -->
            <div class="upload-dashed-box d-flex flex-column align-center justify-center py-12 px-4 mb-4" @click="showUploadPhotoDialog = true">
              <input
                type="file"
                ref="cameraFileInput"
                accept="image/*"
                capture="environment"
                @change="onFileChange"
                class="d-none"
              />
              <input
                type="file"
                ref="galleryFileInput"
                accept="image/*"
                multiple
                @change="onFileChange"
                class="d-none"
              />
              <VIcon icon="ri-image-line" size="24" class="text-medium-emphasis mb-2" />
              
              <span v-if="uploadedPhotos.length === 0" class="text-body-2 text-medium-emphasis text-center">
                There are no photos uploaded yet.
              </span>
              <span v-else class="text-body-2 text-primary font-weight-medium text-center">
                {{ uploadedPhotos.length }} photo(s) selected
              </span>
            </div>

            <!-- Choose Photo Button below upload box -->
            <VBtn
              block
              variant="outlined"
              color="primary"
              class="rounded-pill mb-3 text-capitalize font-weight-medium"
              size="small"
              style="border-color: rgba(var(--v-theme-primary), 0.3) !important;"
              prepend-icon="ri-upload-2-line"
              @click="showUploadPhotoDialog = true"
            >
              Choose Photo
            </VBtn>

            <span class="text-caption text-medium-emphasis d-block">
              You can upload up to 3 photos from your camera or gallery, and each photo can be a maximum of 1 MB.
            </span>

            <!-- Image Previews Grid -->
            <VRow v-if="uploadedPhotos.length > 0" class="mt-4">
              <VCol
                v-for="(photo, idx) in uploadedPhotos"
                :key="idx"
                cols="4"
                class="position-relative"
              >
                <VCard border flat class="rounded-lg overflow-hidden ratio-square">
                  <VImg :src="photo.url" cover class="w-100 h-100" />
                  <VBtn
                    icon="ri-close-line"
                    color="error"
                    size="x-small"
                    variant="flat"
                    class="photo-delete-badge"
                    @click="removePhoto(idx)"
                  />
                </VCard>
              </VCol>
            </VRow>
          </VCard>
        </VCol>

        <!-- Right Column: AI Summary Card -->
        <VCol cols="12" md="6">
          <VCard border elevation="0" class="rounded-lg pa-5 h-100 d-flex flex-column">
            <div class="d-flex align-center justify-space-between mb-4">
              <div class="d-flex align-center gap-2">
                <VAvatar size="24" color="primary" class="text-white">
                  <VIcon icon="ri-magic-line" size="14" />
                </VAvatar>
                <h5 class="text-body-1 font-weight-medium text-high-emphasis mb-0">AI Summary</h5>
              </div>
              <div class="d-flex align-center gap-1">
                <VIcon icon="ri-time-line" size="16" class="text-medium-emphasis" />
                <span class="text-caption text-medium-emphasis font-weight-medium">
                  {{ aiGenerationCount }} AI Generation
                </span>
              </div>
            </div>

            <VBtn
              color="info"
              variant="flat"
              rounded="xl"
              size="default"
              :loading="isGeneratingAI"
              @click="generateAISummary"
              class="font-weight-medium text-capitalize mb-4 align-self-start"
            >
              Generate AI Summary
            </VBtn>

            <div class="flex-grow-1 ai-summary-box border rounded-lg pa-4 bg-light-gray">
              <p class="text-body-2 mb-0" :class="aiSummary ? 'text-high-emphasis' : 'text-medium-emphasis'">
                {{ aiSummary || 'AI Summary will shown here' }}
              </p>
            </div>
          </VCard>
        </VCol>
      </VRow>
    </VExpandTransition>
    </div>

    <!-- Step 2 Content Container -->
    <div v-else-if="currentStep === 2" class="create-journal-content-container">
      <!-- SECTION: Preview Header -->
      <div class="d-flex align-center justify-space-between mb-4">
        <div>
          <h5 class="text-h5 font-weight-medium text-high-emphasis">Review report</h5>
          <span class="text-body-2 text-medium-emphasis">Check the report below before sending to parents</span>
        </div>
        <!-- Last sent time badge -->
        <div class="last-sent-badge px-4 py-2 rounded-pill d-flex align-center gap-2 border">
          <VIcon icon="ri-send-plane-2-line" size="16" class="text-primary" />
          <span class="text-body-2 text-medium-emphasis">Last sent time :</span>
          <span class="text-body-2 font-weight-medium text-high-emphasis">24 Jun 2026, 20:30</span>
        </div>
      </div>

      <!-- SECTION: Report Preview Card -->
      <VCard border elevation="0" class="rounded-lg pa-4 bg-surface mb-6">
        <!-- PDF / Document Preview Area (Placeholder) -->
        <div class="report-document-preview border rounded-lg d-flex flex-column align-center justify-center py-16 bg-light-gray mb-4" style="min-height: 400px;">
          <div class="pdf-icon-wrapper d-flex align-center justify-center rounded-circle bg-error-light mb-4" style="width: 72px; height: 72px;">
            <VIcon icon="ri-file-pdf-2-line" size="40" color="error" />
          </div>
          <h4 class="text-h6 font-weight-medium text-high-emphasis mb-2">Report Preview</h4>
          <p class="text-body-2 text-medium-emphasis text-center max-w-sm px-4">
            In production, the system will generate and embed the final progress report PDF here for your review.
          </p>
        </div>

        <!-- Card Footer (Actions Container) -->
        <div class="preview-card-footer d-flex align-center justify-space-between px-5 py-3 rounded-lg bg-light-gray">
          <div class="d-flex align-center gap-3">
            <div class="avatar-icon-box d-flex align-center justify-center rounded pa-1-5 bg-primary-light">
              <VIcon icon="ri-user-line" size="16" color="primary" />
            </div>
            <div class="student-meta-info d-flex align-center gap-3 text-body-2">
              <span class="font-weight-medium text-high-emphasis">
                {{ currentStudent.name }}
              </span>
              <span class="text-medium-emphasis">•</span>
              <span class="text-medium-emphasis">
                {{ classSession?.name || 'DPS-Adaptive8C' }}
              </span>
              <span class="text-medium-emphasis">•</span>
              <span class="text-medium-emphasis">
                {{ currentStudent.bookTitle }}
              </span>
            </div>
          </div>
          <span class="text-body-2 text-medium-emphasis">
            Mon, June 22, 2026 - 13:30
          </span>
        </div>
      </VCard>
    </div>

    <!-- ACTION FOOTER BAR -->
    <div class="action-footer-bar border-t d-flex align-center justify-end gap-3 py-4 bg-surface mt-6">
      <template v-if="currentStep === 1">
        <VBtn
          variant="outlined"
          color="primary"
          class="px-6 rounded-pill"
          @click="saveAsDraft"
        >
          Save As Draft
        </VBtn>
        <VBtn
          color="primary"
          variant="flat"
          class="px-6 rounded-pill"
          @click="saveAndContinue"
        >
          Save & Continue
        </VBtn>
      </template>
      <template v-else-if="currentStep === 2">
        <VBtn
          variant="outlined"
          color="secondary"
          class="px-6 rounded-pill me-auto"
          :to="{ path: '/attendance-detail', query: { id: classId } }"
          prepend-icon="ri-arrow-left-line"
        >
          Back to list
        </VBtn>
        <VBtn
          variant="outlined"
          color="primary"
          class="px-6 rounded-pill"
          prepend-icon="ri-download-line"
          @click="downloadPDF"
        >
          Download PDF
        </VBtn>
        <VBtn
          color="primary"
          variant="flat"
          class="px-6 rounded-pill"
          prepend-icon="ri-send-plane-2-line"
          @click="sendReport"
        >
          Send To Parent
        </VBtn>
      </template>
    </div>

    <!-- DIALOG 1: Select Covered Lessons -->
    <VDialog v-model="showAddLessonDialog" max-width="700">
      <VCard class="rounded-lg overflow-hidden shadow-xl bg-surface">
        <VCardTitle class="px-6 pt-5 pb-3 border-b d-flex align-center justify-space-between position-relative">
          <span class="text-h6 font-weight-medium text-high-emphasis">Select covered lessons</span>
          <VBtn
            icon="ri-close-line"
            variant="text"
            color="secondary"
            class="rounded-circle"
            size="small"
            @click="showAddLessonDialog = false"
          />
        </VCardTitle>
        <VCardText class="pa-6">
          <div class="mb-4">
            <VTextField
              v-model="searchLessonQuery"
              placeholder="Search lessons"
              variant="outlined"
              density="compact"
              hide-details
              prepend-inner-icon="ri-search-line"
              class="search-lessons-input"
            />
          </div>
          <div class="lessons-selection-list" style="max-height: 400px; overflow-y: auto;">
            <div
              v-for="lesson in filteredAvailableLessons"
              :key="lesson.id"
              class="lesson-select-card border rounded-lg pa-4 mb-4 d-flex align-center cursor-pointer transition-all"
              :class="{ 'border-primary bg-primary-light-tint': selectedLessonIds.includes(lesson.id) }"
              @click="toggleLessonSelection(lesson.id)"
            >
              <div class="checkbox-box me-3 flex-shrink-0 d-flex align-center justify-center">
                <div v-if="selectedLessonIds.includes(lesson.id)" class="checkbox-checked bg-primary d-flex align-center justify-center rounded">
                  <VIcon icon="ri-check-line" size="14" color="white" />
                </div>
                <div v-else class="checkbox-unchecked rounded border-2"></div>
              </div>
              <div class="d-flex flex-column flex-grow-1">
                <span class="text-body-1 font-weight-medium text-high-emphasis leading-normal">
                  {{ lesson.title }}
                </span>
                <div class="d-flex align-center flex-wrap gap-1 mt-1 text-body-2 text-medium-emphasis">
                  <VIcon
                    :icon="lesson.statusColor === 'success' ? 'ri-check-line' : 'ri-loader-2-line'"
                    size="12"
                    :class="`text-${lesson.statusColor === 'success' ? 'primary' : 'info'}`"
                  />
                  <span
                    class="font-weight-medium"
                    :class="`text-${lesson.statusColor === 'success' ? 'primary' : 'info'}`"
                  >
                    {{ lesson.progress }} {{ lesson.statusText }}
                  </span>
                  <span class="mx-2 text-disabled">•</span>
                  <span class="text-medium-emphasis">Score :</span>
                  <span class="font-weight-medium text-high-emphasis ms-1">
                    {{ lesson.score > 0 ? lesson.score : '85' }}
                  </span>
                  <span class="text-medium-emphasis">/ 100</span>
                </div>
              </div>
            </div>
            <div v-if="filteredAvailableLessons.length === 0" class="text-center py-6 text-body-2 text-medium-emphasis">
              No lessons match your search.
            </div>
          </div>
        </VCardText>
        <VCardActions class="px-6 py-4 bg-light-gray border-t d-flex justify-end gap-3">
          <VSpacer />
          <VBtn
            variant="outlined"
            color="secondary"
            class="px-6 rounded-pill text-capitalize"
            @click="showAddLessonDialog = false"
          >
            Close
          </VBtn>
          <VBtn
            color="primary"
            variant="flat"
            class="px-6 rounded-pill text-capitalize"
            @click="confirmLessonSelection"
          >
            Confirm Selection
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- DIALOG 2: Photo Guidelines -->
    <VDialog v-model="showExampleDialog" max-width="700">
      <VCard class="rounded-lg overflow-hidden shadow-xl bg-surface">
        <VCardTitle class="px-6 pt-6 pb-4 d-flex align-center justify-space-between position-relative">
          <span class="text-h5 font-weight-medium text-high-emphasis">Photo Guidelines</span>
          <VBtn
            icon="ri-close-line"
            variant="text"
            color="secondary"
            class="rounded-circle"
            size="small"
            @click="showExampleDialog = false"
          />
        </VCardTitle>
        <VCardText class="px-6 py-4">
          <div class="mb-6">
            <h6 class="text-body-1 font-weight-medium text-high-emphasis mb-3">Guidelines</h6>
            <div class="guideline-tips-box rounded-lg pa-4 bg-light-gray d-flex flex-column gap-3">
              <div class="d-flex align-center gap-2">
                <VIcon icon="ri-check-line" size="18" color="primary" />
                <span class="text-body-2 text-high-emphasis">
                  Show the student actively working or engaged in the lesson
                </span>
              </div>
              <div class="d-flex align-center gap-2">
                <VIcon icon="ri-check-line" size="18" color="primary" />
                <span class="text-body-2 text-high-emphasis">
                  Ensure the photo is clear and well-lit
                </span>
              </div>
              <div class="d-flex align-center gap-2">
                <VIcon icon="ri-check-line" size="18" color="primary" />
                <span class="text-body-2 text-high-emphasis">
                  Avoid capturing other students' faces without consent
                </span>
              </div>
            </div>
          </div>

          <div>
            <h6 class="text-body-1 font-weight-medium text-high-emphasis mb-3">Example</h6>
            <VRow>
              <VCol cols="12" sm="6">
                <div class="example-card good border rounded-xl pa-3 bg-primary-light-tint">
                  <div class="example-img-wrapper border rounded-lg overflow-hidden ratio-4-3 mb-3" style="border-color: rgb(var(--v-theme-primary)) !important;">
                    <VImg src="/good-photo.png" cover class="w-100 h-100" />
                  </div>
                  <div class="d-flex align-center gap-2 mb-1">
                    <div class="status-icon-wrapper good rounded-circle bg-primary d-flex align-center justify-center">
                      <VIcon icon="ri-check-line" size="12" color="white" />
                    </div>
                    <span class="text-body-2 font-weight-medium text-high-emphasis">Good photo</span>
                  </div>
                  <p class="text-caption text-medium-emphasis mb-0">
                    Student clearly visible, well-lit, activity shown
                  </p>
                </div>
              </VCol>
              <VCol cols="12" sm="6">
                <div class="example-card bad border rounded-xl pa-3 bg-error-light-tint">
                  <div class="example-img-wrapper border rounded-lg overflow-hidden ratio-4-3 mb-3" style="border-color: rgb(var(--v-theme-error)) !important;">
                    <VImg src="/bad-photo.png" cover class="w-100 h-100" />
                  </div>
                  <div class="d-flex align-center gap-2 mb-1">
                    <div class="status-icon-wrapper bad rounded-circle bg-error d-flex align-center justify-center">
                      <VIcon icon="ri-close-line" size="12" color="white" />
                    </div>
                    <span class="text-body-2 font-weight-medium text-error">Bad Photo</span>
                  </div>
                  <p class="text-caption text-medium-emphasis mb-0">
                    Dark, blurry, or unrelated to lesson
                  </p>
                </div>
              </VCol>
            </VRow>
          </div>
        </VCardText>
        <VCardActions class="px-6 py-4 bg-light-gray border-t d-flex justify-end">
          <VBtn
            color="primary"
            variant="flat"
            class="px-8 rounded-pill text-capitalize font-weight-medium"
            @click="showExampleDialog = false"
          >
            Got It
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- DIALOG 3: Back Confirmation -->
    <VDialog v-model="showBackConfirmDialog" max-width="500">
      <VCard class="rounded-lg overflow-hidden shadow-xl bg-surface">
        <VCardTitle class="px-6 pt-5 pb-3 border-b d-flex align-center justify-space-between">
          <span class="text-h6 font-weight-medium text-high-emphasis">Back to detail attendance?</span>
          <VBtn
            icon="ri-close-line"
            variant="text"
            color="secondary"
            class="rounded-circle"
            size="small"
            @click="showBackConfirmDialog = false"
          />
        </VCardTitle>
        <VCardText class="px-6 py-4 text-body-2 text-medium-emphasis">
          Are you sure you want to go back? Your current progress won't be saved. If you want to keep your changes, please click the 'Save as Draft' button below.
        </VCardText>
        <VCardActions class="px-6 py-4 bg-light-gray border-t d-flex justify-end gap-3">
          <VSpacer />
          <VBtn
            variant="outlined"
            color="secondary"
            class="px-6 rounded-pill text-capitalize"
            @click="confirmBackNavigation"
          >
            Back
          </VBtn>
          <VBtn
            color="primary"
            variant="flat"
            class="px-6 rounded-pill text-capitalize"
            @click="showBackConfirmDialog = false"
          >
            Stay on this page
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- DIALOG 4: Upload Photo Source -->
    <VDialog v-model="showUploadPhotoDialog" max-width="500">
      <VCard class="rounded-lg overflow-hidden shadow-xl bg-surface">
        <VCardTitle class="px-6 pt-5 pb-3 border-b d-flex align-center justify-space-between">
          <span class="text-h6 font-weight-medium text-high-emphasis">Upload photo</span>
          <VBtn
            icon="ri-close-line"
            variant="text"
            color="secondary"
            class="rounded-circle"
            size="small"
            @click="showUploadPhotoDialog = false"
          />
        </VCardTitle>
        <VCardText class="pa-6">
          <div class="d-flex flex-column gap-4">
            <div
              class="upload-option-card border rounded-lg pa-4 d-flex align-center cursor-pointer transition-all"
              @click="triggerCameraInput"
            >
              <div class="upload-icon-box rounded me-3 d-flex align-center justify-center text-primary">
                <VIcon icon="ri-camera-line" size="24" />
              </div>
              <span class="text-body-1 font-weight-medium text-high-emphasis flex-grow-1">
                Pick from camera
              </span>
              <VIcon icon="ri-arrow-right-s-line" size="20" class="text-medium-emphasis" />
            </div>
            <div
              class="upload-option-card border rounded-lg pa-4 d-flex align-center cursor-pointer transition-all"
              @click="triggerGalleryInput"
            >
              <div class="upload-icon-box rounded me-3 d-flex align-center justify-center text-primary">
                <VIcon icon="ri-folder-5-line" size="24" />
              </div>
              <span class="text-body-1 font-weight-medium text-high-emphasis flex-grow-1">
                Select from gallery
              </span>
              <VIcon icon="ri-arrow-right-s-line" size="20" class="text-medium-emphasis" />
            </div>
          </div>
        </VCardText>
      </VCard>
    </VDialog>

    <!-- Toast Alert -->
    <VSnackbar
      v-model="showToastActive"
      :color="toastColor"
      location="top right"
      timeout="3000"
    >
      {{ toastMessage }}
    </VSnackbar>
  </div>
</template>

<style lang="scss" scoped>
.meeting-journal-create-page {
  padding-bottom: 100px !important; /* spacing for footer */
}

.full-width-header {
  margin-inline: -1.5rem;
  margin-block-start: -1.5rem;
  padding-top: 20px;
  padding-bottom: 20px;

  :deep(.d-flex) {
    margin-bottom: 0 !important;
  }
}

.full-width-stepper {
  margin-inline: -1.5rem;
}

.create-journal-content-container {
  max-width: 1200px;
  margin: 0 auto;
}

.teacher-info-badge {
  border-color: rgba(var(--v-border-color), 0.12) !important;
  background-color: rgb(var(--v-theme-surface));
}

.lesson-card {
  border-color: rgba(var(--v-border-color), 0.12) !important;
  background-color: rgb(var(--v-theme-surface));
}

.lesson-header-row {
  border-bottom: 2px solid rgb(var(--v-theme-primary)) !important;
}

.status-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  
  &.success {
    background-color: rgb(var(--v-theme-primary));
  }
  &.info {
    background-color: rgb(var(--v-theme-info));
  }
}

.vertical-divider {
  width: 1px;
  height: 32px;
  background-color: rgba(var(--v-border-color), 0.12);
}

.delete-btn {
  width: 34px !important;
  height: 34px !important;
  min-width: 34px !important;
  padding: 0 !important;
  border-color: rgba(var(--v-border-color), 0.08) !important;
  color: rgb(var(--v-theme-error)) !important;
  background-color: transparent !important;

  &:hover {
    background-color: rgba(var(--v-theme-error), 0.04) !important;
  }

  :deep(.v-btn__content) {
    font-size: 18px;
  }
}

.lesson-accordion-section {
  background-color: #f4f5fa;
}

.objective-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(var(--v-theme-primary));
}

.accordion-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-color: rgba(var(--v-border-color), 0.08) !important;
}

.objective-list {
  list-style-type: disc;
}

.score-input-box {
  border: 1px solid rgba(var(--v-border-color), 0.12);
  border-radius: 8px;
  width: 48px;
  height: 48px;
  overflow: hidden;
  background-color: rgb(var(--v-theme-surface));
  
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1.25rem; /* 20px */
    font-family: inherit;
    text-align: center;
    background: transparent;
    
    // Hide arrows/spinners
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type=number] {
      -moz-appearance: textfield;
    }
  }
}

.upload-dashed-box {
  border: 2px dashed rgba(var(--v-border-color), 0.16);
  border-radius: 12px;
  cursor: pointer;
  background-color: rgba(var(--v-theme-on-surface), 0.01);
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(var(--v-theme-primary), 0.04);
    border-color: rgb(var(--v-theme-primary));
  }
}

.photo-delete-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 10;
}

.ratio-square {
  aspect-ratio: 1 / 1;
}

.bg-light-gray {
  background-color: rgba(var(--v-theme-on-surface), 0.02);
}

.border-solid {
  border-style: solid !important;
}

.ai-summary-box {
  min-height: 120px;
  background-color: #fafafa !important;
  border-color: rgba(var(--v-border-color), 0.12) !important;
}

.action-footer-bar {
  position: fixed;
  bottom: 0;
  left: 260px; /* Aligned next to vertical nav */
  right: 0;
  z-index: 99;
  padding-left: 24px;
  padding-right: 24px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.04);
}

@media (max-width: 1279px) {
  .action-footer-bar {
    left: 0; /* Full width if sidebar collapsed or on smaller screen */
  }
}

.last-sent-badge {
  border-color: rgba(var(--v-border-color), 0.12) !important;
  background-color: rgb(var(--v-theme-surface));
}

.bg-primary-light {
  background-color: rgba(var(--v-theme-primary), 0.08) !important;
}

.bg-success-light {
  background-color: rgba(var(--v-theme-success), 0.08) !important;
}

.bg-error-light {
  background-color: rgba(var(--v-theme-error), 0.08) !important;
}

.pa-1-5 {
  padding: 6px !important;
}

.report-document-preview {
  border-color: rgba(var(--v-border-color), 0.12) !important;
}

/* Modal Styles */
.bg-primary-light-tint {
  background-color: rgba(var(--v-theme-primary), 0.04) !important;
}

.bg-error-light-tint {
  background-color: rgba(var(--v-theme-error), 0.04) !important;
}

.ratio-4-3 {
  aspect-ratio: 4 / 3;
}

.example-card {
  border-radius: 16px !important;
}

.example-img-wrapper {
  border-radius: 12px !important;
}

.lesson-select-card {
  border-color: rgba(var(--v-border-color), 0.12) !important;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(var(--v-theme-primary), 0.02);
    border-color: rgba(var(--v-theme-primary), 0.4) !important;
  }
}

.checkbox-box {
  width: 20px;
  height: 20px;
}

.checkbox-checked {
  width: 18px;
  height: 18px;
}

.checkbox-unchecked {
  width: 18px;
  height: 18px;
  border-color: rgba(var(--v-theme-on-surface), 0.3) !important;
}

.guideline-tips-box {
  border-color: rgba(var(--v-border-color), 0.12) !important;
}

.status-icon-wrapper {
  width: 20px;
  height: 20px;
  
  &.good {
    background-color: rgb(var(--v-theme-primary)) !important;
  }
  &.bad {
    background-color: rgb(var(--v-theme-error)) !important;
  }
}

.upload-option-card {
  border-color: rgba(var(--v-border-color), 0.12) !important;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(var(--v-theme-primary), 0.04);
    border-color: rgb(var(--v-theme-primary)) !important;
    
    .upload-icon-box {
      background-color: rgb(var(--v-theme-primary)) !important;
      color: white !important;
    }
  }
}

.upload-icon-box {
  width: 44px;
  height: 44px;
  background-color: rgba(var(--v-theme-primary), 0.08) !important;
  transition: all 0.2s ease;
}
</style>
