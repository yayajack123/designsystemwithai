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
const currentStep = ref(1)

const projectName = ref('Project A')
const isActiveProject = ref(true)
const teacherNotes = ref('Student already good to apply the pelajaran')

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
    ]
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
    ]
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
    ]
  }
])

const openedPanels = ref<number[]>([0]) // First panel expanded by default

// Delete lesson handler
const deleteLesson = (id: number) => {
  coveredLessons.value = coveredLessons.value.filter(l => l.id !== id)
  showToast('Lesson removed.', 'warning')
}

// Add lesson dialog states
const showAddLessonDialog = ref(false)
const newLessonTitle = ref('')
const availableLessons = [
  'Lesson 2 - Drawing Shapes in Pygame',
  'Lesson 3 - Keyboard and Mouse Events',
  'Lesson 4 - Sprites and Collisions',
  'Lesson 5 - Game Loop and Sound FX',
  'Lesson 6 - Project Build and Finalization'
]

const addLesson = () => {
  if (!newLessonTitle.value) return
  
  const newId = coveredLessons.value.length ? Math.max(...coveredLessons.value.map(l => l.id)) + 1 : 1
  coveredLessons.value.push({
    id: newId,
    title: newLessonTitle.value,
    progress: '100%',
    statusText: 'Complete',
    statusColor: 'success',
    score: 0,
    maxScore: 100,
    objectives: [
      'Understand basic logic of the selected module',
      'Implement practical applications and verify results',
      'Demonstrate capabilities in coding exercises'
    ]
  })
  
  // Auto-expand new panel
  openedPanels.value.push(coveredLessons.value.length - 1)
  
  newLessonTitle.value = ''
  showAddLessonDialog.value = false
  showToast('Lesson added successfully.', 'success')
}

// ─────────────────────── Evidence Photo States & Handlers ───────────────────────
interface PhotoFile {
  name: string
  url: string
}
const uploadedPhotos = ref<PhotoFile[]>([])
const fileInput = ref<HTMLInputElement | null>(null)

const triggerFileInput = () => {
  fileInput.value?.click()
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
    // Check size < 1MB
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

// Example Dialog
const showExampleDialog = ref(false)

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
  showToast('Journal Step 1 saved successfully!', 'success')
  setTimeout(() => {
    router.push({
      path: '/attendance-detail',
      query: { id: classId.value }
    })
  }, 1000)
}
</script>

<template>
  <div class="meeting-journal-create-page pa-4">
    <!-- Header with Back Button and Student Roster Details -->
    <UiSectionHeader
      :title="currentStudent.name"
      :description="`${currentStudent.studentId} • ${currentStudent.sessionText} • ${currentStudent.bookTitle}`"
      :back="({ path: '/attendance-detail', query: { id: classId } } as any)"
      class="mb-6"
    />

    <!-- Stepper Banner -->
    <VCard border class="mb-6" elevation="0">
      <VCardText class="pa-4 d-flex align-center justify-space-between flex-wrap gap-4">
        <div class="d-flex align-center gap-4">
          <!-- circular stepper from presence dialog -->
          <VProgressCircular
            :model-value="50"
            color="primary"
            size="64"
            width="5"
            class="font-weight-bold"
          >
            <span class="text-body-1 font-weight-medium text-high-emphasis">
              1/2
            </span>
          </VProgressCircular>

          <div class="d-flex flex-column">
            <h5 class="text-h5 font-weight-medium text-high-emphasis">
              Lesson & Details
            </h5>
            <span class="text-body-2 text-medium-emphasis">
              Topics, Photo & Observation
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
      </VCardText>
    </VCard>

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
          @click="showAddLessonDialog = true"
        >
          Add Another
        </VBtn>
      </div>

      <!-- Lessons Expansion List -->
      <VExpansionPanels v-model="openedPanels" multiple class="custom-expansion-panels">
        <VExpansionPanel
          v-for="(lesson, idx) in coveredLessons"
          :key="lesson.id"
          elevation="0"
          border
          class="mb-4 rounded-lg overflow-hidden border-solid"
        >
          <VExpansionPanelTitle class="pa-4 bg-surface">
            <div class="d-flex align-center w-100 flex-wrap justify-space-between pr-4 gap-4">
              <!-- Left side: Status icon and Lesson Title -->
              <div class="d-flex align-center">
                <!-- Status icon badge -->
                <VAvatar
                  size="24"
                  :color="lesson.statusColor === 'success' ? 'primary' : 'info'"
                  class="me-3"
                >
                  <VIcon
                    :icon="lesson.statusColor === 'success' ? 'ri-check-line' : 'ri-loader-line'"
                    size="16"
                    color="white"
                  />
                </VAvatar>

                <div class="d-flex flex-column">
                  <span class="text-body-1 font-weight-medium text-high-emphasis">{{ lesson.title }}</span>
                  <div class="d-flex align-center gap-1 mt-1">
                    <VIcon
                      :icon="lesson.statusColor === 'success' ? 'ri-check-line' : 'ri-loader-2-line'"
                      size="14"
                      :class="`text-${lesson.statusColor}`"
                    />
                    <span class="text-caption" :class="`text-${lesson.statusColor} font-weight-medium`">
                      {{ lesson.progress }} {{ lesson.statusText }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Right side: Score inputs, Divider, and Delete button -->
              <div class="d-flex align-center gap-4 ml-auto" @click.stop>
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

                <div class="vertical-divider mx-2"></div>

                <VBtn
                  icon="ri-delete-bin-line"
                  variant="outlined"
                  size="small"
                  color="secondary"
                  class="delete-btn rounded border-solid"
                  @click="deleteLesson(lesson.id)"
                />
              </div>
            </div>
          </VExpansionPanelTitle>

          <VExpansionPanelText class="pa-0">
            <div class="bg-expansion-inner pa-4">
              <div class="d-flex align-center gap-2 mb-3">
                <VAvatar size="20" color="primary" class="text-white">
                  <VIcon icon="ri-focus-2-line" size="14" />
                </VAvatar>
                <span class="text-body-2 font-weight-medium text-high-emphasis">Lesson Objective</span>
              </div>
              <ul class="objective-list text-body-2 text-medium-emphasis pl-6">
                <li v-for="(obj, oIdx) in lesson.objectives" :key="oIdx" class="mb-1">
                  {{ obj }}
                </li>
              </ul>
            </div>
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>
      <div v-if="coveredLessons.length === 0" class="text-center py-6 border rounded-lg bg-surface">
        <span class="text-body-1 text-medium-emphasis">No covered lessons added yet. Click "Add Another" to add.</span>
      </div>
    </div>

    <!-- SECTION: Details Grid -->
    <VRow class="mb-6">
      <!-- Left Column: Project details Form -->
      <VCol cols="12" md="7">
        <h5 class="text-h5 font-weight-medium text-high-emphasis mb-4">Add Details</h5>
        <VCard border elevation="0" class="rounded-lg">
          <VCardText class="pa-5">
            <div class="d-flex flex-column gap-4">
              <div>
                <span class="text-body-2 text-medium-emphasis font-weight-medium mb-1 d-block">Project Details</span>
                <div class="d-flex align-center gap-3">
                  <VTextField
                    v-model="projectName"
                    variant="outlined"
                    density="compact"
                    hide-details
                    placeholder="Enter project name"
                    label="Project"
                    class="bg-surface"
                  />
                  <VCheckbox
                    v-model="isActiveProject"
                    label="Active project"
                    color="primary"
                    hide-details
                    class="mt-0"
                  />
                </div>
              </div>

              <div>
                <span class="text-body-2 text-medium-emphasis font-weight-medium mb-1 d-block">Teacher Notes</span>
                <VTextarea
                  v-model="teacherNotes"
                  variant="outlined"
                  density="compact"
                  placeholder="Write student observation notes..."
                  hide-details
                  rows="4"
                  class="bg-surface"
                />
              </div>
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <!-- Right Column: AI Summary Generation -->
      <VCol cols="12" md="5">
        <div class="d-flex align-center justify-space-between mb-4">
          <div class="d-flex align-center gap-2">
            <VIcon icon="ri-magic-line" color="primary" size="20" />
            <h5 class="text-h5 font-weight-medium text-high-emphasis">AI Summary</h5>
          </div>
          <span class="text-caption text-medium-emphasis">
            {{ aiGenerationCount }} AI Generation
          </span>
        </div>

        <VCard border elevation="0" class="rounded-lg h-100 d-flex flex-column justify-space-between">
          <VCardText class="pa-5 d-flex flex-column gap-4">
            <VBtn
              block
              color="primary"
              variant="flat"
              :loading="isGeneratingAI"
              @click="generateAISummary"
              class="font-weight-medium"
            >
              Generate AI Summary
            </VBtn>

            <VTextarea
              v-model="aiSummary"
              variant="outlined"
              readonly
              placeholder="AI Summary will shown here"
              hide-details
              rows="4"
              class="bg-light-gray"
            />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <!-- SECTION: Evidence Photo -->
    <div class="mb-8">
      <div class="d-flex align-center justify-space-between mb-4">
        <h5 class="text-h5 font-weight-medium text-high-emphasis">Evidence Photo</h5>
        <VBtn
          variant="text"
          color="primary"
          density="compact"
          prepend-icon="ri-information-line"
          @click="showExampleDialog = true"
          class="font-weight-medium"
        >
          See Example
        </VBtn>
      </div>

      <VCard border elevation="0" class="rounded-lg pa-5">
        <!-- Dashed upload box -->
        <div class="upload-dashed-box d-flex flex-column align-center justify-center py-6 px-4 mb-4" @click="triggerFileInput">
          <input
            type="file"
            ref="fileInput"
            multiple
            accept="image/*"
            @change="onFileChange"
            class="d-none"
          />
          <VIcon icon="ri-image-line" size="48" class="text-medium-emphasis mb-3" />
          
          <span v-if="uploadedPhotos.length === 0" class="text-body-2 text-medium-emphasis mb-4 text-center">
            There are no photos uploaded yet.
          </span>
          <span v-else class="text-body-2 text-primary font-weight-medium mb-4 text-center">
            {{ uploadedPhotos.length }} photo(s) selected
          </span>

          <VBtn
            variant="outlined"
            color="primary"
            class="rounded-pill px-6"
            size="small"
            @click.stop="triggerFileInput"
          >
            Choose Photo
          </VBtn>
        </div>

        <span class="text-caption text-medium-emphasis d-block text-center">
          You can upload up to 3 photos from your camera or gallery, and each photo can be a maximum of 1 MB.
        </span>

        <!-- Image Previews Grid -->
        <VRow v-if="uploadedPhotos.length > 0" class="mt-4">
          <VCol
            v-for="(photo, idx) in uploadedPhotos"
            :key="idx"
            cols="4"
            sm="3"
            md="2"
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
    </div>

    <!-- ACTION FOOTER BAR -->
    <div class="action-footer-bar border-t d-flex align-center justify-end gap-3 py-4 bg-surface mt-6">
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
    </div>

    <!-- DIALOG: Add Lesson -->
    <VDialog v-model="showAddLessonDialog" max-width="450">
      <VCard class="rounded-lg">
        <VCardTitle class="text-h6 font-weight-medium pa-4 border-b">
          Add Lesson
        </VCardTitle>
        <VCardText class="pa-4">
          <span class="text-body-2 text-medium-emphasis mb-3 d-block">Select a lesson to add to the covered list:</span>
          <VSelect
            v-model="newLessonTitle"
            :items="availableLessons"
            label="Lesson Title"
            variant="outlined"
            density="compact"
            class="bg-surface"
          />
        </VCardText>
        <VCardActions class="pa-4 border-t">
          <VSpacer />
          <VBtn color="secondary" variant="outlined" @click="showAddLessonDialog = false">Cancel</VBtn>
          <VBtn color="primary" variant="flat" :disabled="!newLessonTitle" @click="addLesson">Add Lesson</VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- DIALOG: Photo Example -->
    <VDialog v-model="showExampleDialog" max-width="500">
      <VCard class="rounded-lg">
        <VCardTitle class="text-h6 font-weight-medium pa-4 border-b d-flex align-center justify-space-between">
          <span>Evidence Photo Example</span>
          <VBtn icon="ri-close-line" variant="text" size="small" @click="showExampleDialog = false" />
        </VCardTitle>
        <VCardText class="pa-5 text-center">
          <VCard border flat class="rounded-lg mb-4 bg-light-gray pa-6 d-flex align-center justify-center" style="height: 250px;">
            <VIcon icon="ri-image-2-line" size="64" color="primary" />
          </VCard>
          <span class="text-body-1 font-weight-medium text-high-emphasis mb-1 d-block">High Quality Evidence Photo</span>
          <p class="text-body-2 text-medium-emphasis mb-0">
            Please capture clear visual progress of the student working on the dashboard, including code block or project output.
          </p>
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
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px !important; /* spacing for footer */
}

.teacher-info-badge {
  border-color: rgba(var(--v-border-color), 0.12) !important;
  background-color: rgb(var(--v-theme-surface));
}

.custom-expansion-panels {
  border-color: rgba(var(--v-border-color), 0.12) !important;
}

.bg-expansion-inner {
  background-color: rgba(var(--v-theme-on-surface), 0.02);
}

.vertical-divider {
  width: 1px;
  height: 32px;
  background-color: rgba(var(--v-border-color), 0.12);
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
</style>
