<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import UiSectionHeader from '@/components/ui/UiSectionHeader.vue'
import MeetingJournalReportPreview from '@/components/MeetingJournalReportPreview.vue'
import MarketingJournalPage from '@/components/marketing/MarketingJournalPage.vue'
import { buildDailyJournalPrompt } from '@/utils/dailyJournalPrompt'
import { validateJournalVideo, validateJournalMedia } from '@/utils/dailyJournalMedia'
import { formatMeetingDate, formatMeetingTime } from '@/data/studentMeetings'
import { attendanceJournalId, attendanceJournalStudents, type AttendanceJournalStudent } from '@/data/attendanceJournalDemo'
import { DEMO_SEND_LIMIT, journalPublicPath, journalStatusColor, useDailyJournalDemo } from '@/composables/useDailyJournalDemo'
import { createMarketingPageSnapshot, journalMarketingPreview, useMarketingTemplates } from '@/composables/useMarketingTemplates'

definePageMeta({
  sidebarRoute: 'attendance',
})

const route = useRoute()
const router = useRouter()

const classId = computed(() => (route.query.classId as string) || '1')
const studentId = computed(() => (route.query.studentId as string) || 's1')
const demo = useDailyJournalDemo()
const journalId = computed(() => String(route.query.journalId || attendanceJournalId(classId.value, studentId.value)))

type JournalReturnTarget = 'dashboard-teacher' | 'reports' | 'attendance-detail'

const returnTo = computed<JournalReturnTarget>(() => {
  const target = route.query.returnTo

  if (target === 'dashboard-teacher' || target === 'reports' || target === 'attendance-detail') {
    return target
  }

  return 'attendance-detail'
})

// ─────────────────────── Mock Data (aligned with attendance-detail.vue) ───────────────────────
type StudentDetail = Omit<AttendanceJournalStudent, 'studentType'> & { studentType?: AttendanceJournalStudent['studentType'] }

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
    students: attendanceJournalStudents,
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
  const record = demo.records.value[journalId.value]
  if (record || route.query.studentName) {
    return {
      id: studentId.value, studentId: record?.studentCode || String(route.query.studentCode || ''),
      name: record?.studentName || String(route.query.studentName), sessionText: record?.sessionCode || 'Session 6',
      bookTitle: record?.bookTitle || String(route.query.bookTitle || 'Python for Beginners'),
      presence: 'On time', hasLaptop: true, bookStatus: 'Completed', notes: '', status: '-',
      actionText: 'Continue', actionIcon: 'ri-pencil-line',
    } as StudentDetail
  }
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
  const record = demo.records.value[journalId.value]
  if (record) return record.teacherName
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
  if (returnTo.value === 'dashboard-teacher') return { path: '/dashboard-teacher' }
  if (returnTo.value === 'reports') return { path: '/reports' }

  return { path: '/attendance-detail', query: { id: classId.value } }
})

const projectName = ref('Project A')
const isActiveProject = ref(true)
const teacherNotes = ref(`${currentStudent.value.name} mengikuti kelas ${currentStudent.value.bookTitle} dengan baik.`)
const isDetailsCollapsed = ref(false)

// AI Summary States
const aiSummary = ref('')
const isGeneratingAI = ref(false)
const aiGenerationCount = ref(0)
const aiFailed = ref(false)
const simulateAIFailure = ref(false)
let aiTimer: ReturnType<typeof setTimeout>

const generateAISummary = () => {
  if (isGeneratingAI.value) return
  isGeneratingAI.value = true
  aiFailed.value = false
  aiTimer = setTimeout(() => {
    isGeneratingAI.value = false
    aiGenerationCount.value++
    if (simulateAIFailure.value) {
      aiFailed.value = true
      return
    }
    aiSummary.value = `${currentStudent.value.name} mengikuti ${currentStudent.value.bookTitle}. ${coveredLessons.value.map(lesson => `${lesson.title}: progress ${lesson.progress}, nilai ${lesson.score}/${lesson.maxScore}.`).join(' ')} Lanjutkan latihan pada objective yang belum selesai.`
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

const lessonPresets: Record<string, Array<Omit<Lesson, 'id' | 'expanded'>>> = {
  'Python Game Dev': [
    { title: 'Lesson 7 – Add Another Sprite', progress: '100%', statusText: 'Complete', statusColor: 'success', score: 85, maxScore: 100, objectives: ['Add a new sprite to the game scene.', 'Set the sprite position and appearance.'] },
    { title: 'Lesson 8 – Sprite Animation', progress: '75%', statusText: 'Progress', statusColor: 'info', score: 72, maxScore: 100, objectives: ['Create animation frames.', 'Use a game loop to update the sprite.'] },
    { title: 'Game Loop and Sound Effects', progress: '50%', statusText: 'Progress', statusColor: 'info', score: 68, maxScore: 100, objectives: ['Add a game loop.', 'Play a sound effect after an event.'] },
    { title: 'Collision Detection', progress: '25%', statusText: 'Progress', statusColor: 'info', score: 60, maxScore: 100, objectives: ['Detect when two sprites touch.', 'Update the score after a collision.'] },
  ],
  'Roblox Studio': [
    { title: 'Build a Roblox obstacle course', progress: '100%', statusText: 'Complete', statusColor: 'success', score: 85, maxScore: 100, objectives: ['Place and resize parts.', 'Set checkpoints for the player.'] },
  ],
  'Web Developer': [
    { title: 'Lesson 7 – JS Basics', progress: '100%', statusText: 'Complete', statusColor: 'success', score: 85, maxScore: 100, objectives: ['Use variables and values in JavaScript.', 'Connect a script to a webpage.'] },
  ],
  'Scratch Basic': [
    { title: 'Create a Scratch animation', progress: '88%', statusText: 'Progress', statusColor: 'info', score: 0, maxScore: 100, objectives: ['Choose a sprite and backdrop.', 'Use events and motion blocks to animate it.'] },
  ],
}
const coveredLessons = ref<Lesson[]>((lessonPresets[currentStudent.value.bookTitle] || lessonPresets['Python Game Dev']).map((lesson, index) => ({
  ...lesson,
  id: index + 1,
  expanded: index === 0,
})))

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
  objectives: string[]
}

const lessonCatalogByBook: Record<string, AvailableLesson[]> = {
  'Python Game Dev': [
    { id: 1, title: 'Lesson 7 – Add Another Sprite', progress: '100%', statusText: 'Complete', statusColor: 'success', score: 85, maxScore: 100, objectives: ['Add a new sprite to the game scene.', 'Set the sprite position and appearance.'] },
    { id: 2, title: 'Lesson 8 – Sprite Animation', progress: '75%', statusText: 'Progress', statusColor: 'info', score: 72, maxScore: 100, objectives: ['Create animation frames.', 'Use a game loop to update the sprite.'] },
    { id: 3, title: 'Game Loop and Sound Effects', progress: '50%', statusText: 'Progress', statusColor: 'info', score: 68, maxScore: 100, objectives: ['Add a game loop.', 'Play a sound effect after an event.'] },
    { id: 4, title: 'Collision Detection', progress: '25%', statusText: 'Progress', statusColor: 'info', score: 60, maxScore: 100, objectives: ['Detect when two sprites touch.', 'Update the score after a collision.'] },
  ],
  'Roblox Studio': [
    { id: 1, title: 'Build a Roblox obstacle course', progress: '100%', statusText: 'Complete', statusColor: 'success', score: 85, maxScore: 100, objectives: ['Place and resize parts.', 'Set checkpoints for the player.'] },
    { id: 2, title: 'Add checkpoints and hazards', progress: '0%', statusText: 'Progress', statusColor: 'info', score: 0, maxScore: 100, objectives: ['Add a checkpoint.', 'Create a hazard players can avoid.'] },
  ],
  'Web Developer': [
    { id: 1, title: 'Lesson 7 – JS Basics', progress: '100%', statusText: 'Complete', statusColor: 'success', score: 85, maxScore: 100, objectives: ['Use variables and values in JavaScript.', 'Connect a script to a webpage.'] },
    { id: 2, title: 'Lesson 8 – JS Functions', progress: '0%', statusText: 'Progress', statusColor: 'info', score: 0, maxScore: 100, objectives: ['Write a reusable function.', 'Call the function from a webpage event.'] },
    { id: 3, title: 'Lesson 9 – CSS Flexbox', progress: '0%', statusText: 'Progress', statusColor: 'info', score: 0, maxScore: 100, objectives: ['Arrange items with Flexbox.', 'Adjust spacing and alignment.'] },
  ],
  'Scratch Basic': [
    { id: 1, title: 'Create a Scratch animation', progress: '88%', statusText: 'Progress', statusColor: 'info', score: 0, maxScore: 100, objectives: ['Choose a sprite and backdrop.', 'Use events and motion blocks to animate it.'] },
    { id: 2, title: 'Add interactions with events', progress: '0%', statusText: 'Progress', statusColor: 'info', score: 0, maxScore: 100, objectives: ['Respond to a key press.', 'Add a sound to an interaction.'] },
  ],
}
const availableLessonsList = computed(() => lessonCatalogByBook[currentStudent.value.bookTitle] || lessonCatalogByBook['Python Game Dev'])

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
          objectives: avail.objectives,
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
const uploadedVideo = ref<{ name: string; url: string; size: number }>()
const mediaMode = ref<'photo' | 'video'>('photo')
const videoFileInput = ref<HTMLInputElement | null>(null)
const isCompressing = ref(false)
const mediaError = ref('')
let compressionTimer: ReturnType<typeof setTimeout>
let videoReadVersion = 0
const readMedia = (file: File): Promise<string> => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.onload = () => resolve(String(reader.result))
  reader.onerror = () => reject(new Error('Media tidak dapat dibaca.'))
  reader.readAsDataURL(file)
})
const onVideoChange = async (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  input.value = ''
  if (!file) return
  mediaError.value = validateJournalVideo(file)
  if (mediaError.value) return
  clearTimeout(compressionTimer)
  const version = ++videoReadVersion
  isCompressing.value = true
  try {
    const url = await readMedia(file)
    if (version !== videoReadVersion) return
    uploadedVideo.value = { name: file.name, url, size: file.size }
    compressionTimer = setTimeout(() => { isCompressing.value = false }, 1000)
  }
  catch {
    if (version !== videoReadVersion) return
    isCompressing.value = false
    mediaError.value = 'Media tidak dapat dibaca. Pilih file lagi.'
  }
}
const removeVideo = () => {
  videoReadVersion++
  clearTimeout(compressionTimer)
  if (uploadedVideo.value) URL.revokeObjectURL(uploadedVideo.value.url)
  uploadedVideo.value = undefined
  isCompressing.value = false
}
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

const onFileChange = async (e: Event) => {
  const target = e.target as HTMLInputElement
  if (!target.files) return

  const files = Array.from(target.files)
  
  if (uploadedPhotos.value.length + files.length > 3) {
    showToast('You can upload up to 3 photos only.', 'error')
    return
  }

  for (const file of files) {
    if (!file.type.startsWith('image/')) {
      showToast('Pilih file gambar.', 'error')
      continue
    }
    if (file.size > 1024 * 1024) {
      showToast(`File "${file.name}" exceeds 1MB limit.`, 'error')
      continue
    }

    try {
      const url = await readMedia(file)
      if (uploadedPhotos.value.length < 3) uploadedPhotos.value.push({ name: file.name, url })
    }
    catch { showToast('Foto tidak dapat dibaca. Pilih file lagi.', 'error') }
  }
  target.value = ''
}

const removePhoto = (index: number) => {
  URL.revokeObjectURL(uploadedPhotos.value[index].url)
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
    uploadedPhotos.value.length !== initialData.uploadedPhotosCount ||
    mediaMode.value !== 'photo' || uploadedVideo.value || aiSummary.value
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

const marketing = useMarketingTemplates()
const savedRecord = computed(() => demo.records.value[journalId.value])
const campaignPreview = computed(() => journalMarketingPreview(marketing.templates.value, savedRecord.value?.marketingPageSnapshot, currentStudent.value.name))
const parentPhone = ref('6281234567890')
const manualSend = ref(false)
const sendDialog = ref(false)
const previewChannel = ref('html')
const locked = computed(() => (savedRecord.value?.sendCount || 0) >= DEMO_SEND_LIMIT)
const sending = computed(() => savedRecord.value?.journal.status === 'Sending')
const sent = computed(() => ['Sent', 'Sent (Manual)'].includes(savedRecord.value?.journal.status || '') || Boolean(savedRecord.value?.sendCount || savedRecord.value?.journal.sentAt))
const requestOrigin = useRequestURL().origin
const publicUrl = computed(() => `${requestOrigin}${journalPublicPath(journalId.value)}`)
const previewMeeting = computed(() => ({
  startsAt: savedRecord.value?.startsAt || `${String(route.query.journalDate || '2026-02-26')}T00:00:00+07:00`, endsAt: savedRecord.value?.endsAt || `${String(route.query.journalDate || '2026-02-26')}T01:30:00+07:00`,
  teacherName: currentTeacherName.value, className: savedRecord.value?.className || String(route.query.className || classSession.value?.name || 'Demo class'),
  lessons: coveredLessons.value.map(lesson => ({ ...lesson, id: String(lesson.id), progress: Number.parseFloat(lesson.progress) })),
}))
const previewJournal = computed(() => ({
  status: savedRecord.value?.journal.status || 'Draft' as const,
  sentAt: savedRecord.value?.journal.sentAt,
  updatedAt: new Date().toISOString(), activeProject: isActiveProject.value, projectName: projectName.value,
  aiSummary: aiSummary.value, evidencePhotos: uploadedPhotos.value.map(photo => photo.url),
  mediaMode: mediaMode.value, video: uploadedVideo.value,
  publicUrl: publicUrl.value, reportCode: journalId.value,
}))
const persist = () => {
  if (locked.value || sending.value) return false
  const currentStatus = savedRecord.value?.journal.status
  const status = ['Sent', 'Sent (Manual)'].includes(currentStatus || '') ? 'Draft' : previewJournal.value.status
  const stored = demo.save({
    id: journalId.value, studentName: currentStudent.value.name, studentCode: currentStudent.value.studentId,
    sessionCode: currentStudent.value.sessionText, bookTitle: currentStudent.value.bookTitle,
    ...previewMeeting.value, journal: { ...previewJournal.value, status, teacherNotes: teacherNotes.value },
    parentPhone: parentPhone.value, sendCount: savedRecord.value?.sendCount || 0,
    marketingPageSnapshot: savedRecord.value?.marketingPageSnapshot || campaignPreview.value || createMarketingPageSnapshot(
      marketing.templates.value,
      marketing.students.value,
      currentStudent.value.studentId,
      String(route.query.journalDate || '2026-02-26'),
    ),
  })
  if (!stored) showToast('Penyimpanan browser penuh. Data hanya tersimpan selama sesi ini.', 'warning')
  return true
}
const copyText = async (text: string, message: string) => {
  try { await navigator.clipboard.writeText(text); showToast(message) }
  catch { showToast('Gagal menyalin. Periksa izin clipboard browser.', 'error') }
}
const copyPrompt = () => copyText(buildDailyJournalPrompt({
  studentName: currentStudent.value.name, bookTitle: currentStudent.value.bookTitle,
  projectName: projectName.value, teacherNotes: teacherNotes.value, lessons: coveredLessons.value,
}), 'Prompt disalin')
const saveAsDraft = () => { if (persist()) showToast('Journal saved as draft.') }

const saveAndContinue = () => {
  const error = validateJournalMedia(uploadedPhotos.value.length, Boolean(uploadedVideo.value), isCompressing.value, mediaMode.value)
  if (error) {
    showToast(error, 'error')
    return
  }
  if (!persist()) return
  currentStep.value = 2
}

const downloadPDF = () => {
  showToast('Demo preview HTML/PDF tersedia di atas. Generator PDF produksi belum tersedia.', 'info')
}

const sendReport = () => {
  if (locked.value || sending.value) return
  if (!aiSummary.value || isGeneratingAI.value || validateJournalMedia(uploadedPhotos.value.length, Boolean(uploadedVideo.value), isCompressing.value, mediaMode.value)) {
    showToast('Lengkapi Teacher Notes dan media sebelum mengirim.', 'error')
    return
  }
  persist()
  manualSend.value = !parentPhone.value.trim() || savedRecord.value?.journal.status === 'Sent (Manual)'
  sendDialog.value = true
}
const confirmSend = () => {
  if (!persist()) return
  if (!demo.beginSend(journalId.value, manualSend.value || !parentPhone.value.trim())) return
  sendDialog.value = false
}
onMounted(() => {
  demo.restore()
  const record = savedRecord.value
  if (!record) {
    if (typeof route.query.lessons === 'string') {
      try {
        const titles: unknown = JSON.parse(route.query.lessons)
        if (Array.isArray(titles) && titles.every(title => typeof title === 'string')) {
          coveredLessons.value = titles.map((title, index) => ({ id: index + 1, title, progress: '0%', score: 0, maxScore: 100, objectives: [], statusText: 'Progress', statusColor: 'info' }))
        }
      }
      catch { showToast('Daftar lesson tidak dapat dimuat.', 'error') }
    }
    return
  }
  projectName.value = record.journal.projectName || ''
  isActiveProject.value = record.journal.activeProject
  teacherNotes.value = record.journal.teacherNotes || ''
  aiSummary.value = record.journal.aiSummary || ''
  uploadedVideo.value = record.journal.video
  mediaMode.value = record.journal.mediaMode || (record.journal.video ? 'video' : 'photo')
  uploadedPhotos.value = record.journal.evidencePhotos.map(url => ({ name: 'Evidence photo', url }))
  parentPhone.value = record.parentPhone
  coveredLessons.value = record.lessons.map(lesson => ({ ...lesson, id: Number(lesson.id), progress: `${lesson.progress}%`, statusText: lesson.progress === 100 ? 'Complete' : 'Progress', statusColor: lesson.progress === 100 ? 'success' : 'info' }))
  if (route.query.send === '1') sendReport()
})
onBeforeUnmount(() => {
  videoReadVersion++
  clearTimeout(aiTimer)
  clearTimeout(compressionTimer)
})
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
    <fieldset v-if="currentStep === 1" :disabled="locked || sending" class="create-journal-content-container journal-fields">
      <VAlert v-if="locked || sending" type="info" variant="tonal" class="mb-4">{{ locked ? 'Locked: jatah 2 kali kirim demo sudah digunakan.' : 'Sending: menunggu hasil pengiriman simulasi.' }}</VAlert>
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
                    :aria-label="`Score ${lesson.title}`"
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
                :aria-label="`Hapus ${lesson.title}`"
                @click="deleteLesson(lesson.id)"
              />
            </div>
          </div>

          <!-- Collapsible Accordion Part -->
          <div class="lesson-accordion-section">
            <!-- Accordion Header Row -->
            <div
              class="accordion-header d-flex align-center justify-space-between px-4 py-3 cursor-pointer"
              role="button"
              tabindex="0"
              :aria-expanded="Boolean(lesson.expanded)"
              @click="lesson.expanded = !lesson.expanded"
              @keydown.enter.prevent="lesson.expanded = !lesson.expanded"
              @keydown.space.prevent="lesson.expanded = !lesson.expanded"
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
              <div class="accordion-arrow bg-surface border rounded">
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
        style="border-color: rgba(var(--v-border-color), 0.08) !important; background-color: rgb(var(--v-theme-surface)); border-radius: 4px;"
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
              <p class="text-caption text-medium-emphasis mb-0">Bahan untuk AI. Catatan ini tidak ditampilkan langsung ke Parents.</p>
            </div>
          </VCard>

          <!-- Evidence media card -->
          <VCard border elevation="0" class="rounded-lg pa-5">
            <div class="mb-4">
              <h5 class="text-body-1 font-weight-medium text-high-emphasis mb-3">Media</h5>
              <div class="media-mode-toggle" role="group" aria-label="Pilih mode media">
                <VBtn
                  variant="outlined"
                  class="media-mode-option"
                  :class="{ 'media-mode-option--active': mediaMode === 'photo' }"
                  :aria-pressed="mediaMode === 'photo'"
                  aria-label="Mode foto"
                  @click="mediaMode = 'photo'"
                >
                  <span class="media-mode-copy">
                    <span class="d-flex align-center gap-2 font-weight-bold">
                      <VIcon icon="ri-image-line" size="16" />
                      <span>Mode Foto: Photo + URL</span>
                    </span>
                    <span class="text-caption text-medium-emphasis">Preview di WhatsApp menampilkan foto</span>
                  </span>
                </VBtn>
                <VBtn
                  variant="outlined"
                  class="media-mode-option"
                  :class="{ 'media-mode-option--active': mediaMode === 'video' }"
                  :aria-pressed="mediaMode === 'video'"
                  aria-label="Mode video"
                  @click="mediaMode = 'video'"
                >
                  <span class="media-mode-copy">
                    <span class="d-flex align-center gap-2 font-weight-bold">
                      <VIcon icon="ri-video-line" size="16" />
                      <span>Mode Video: Video + Photo (opsional) + URL</span>
                    </span>
                    <span class="text-caption text-medium-emphasis">Preview di WhatsApp menampilkan video</span>
                  </span>
                </VBtn>
              </div>
            </div>

            <input id="journal-video" ref="videoFileInput" type="file" accept="video/mp4,video/quicktime,.mp4,.mov" class="d-none" aria-label="Unggah video" @change="onVideoChange" />
            <section v-if="mediaMode === 'video'" aria-labelledby="journal-video-heading">
              <div class="d-flex align-center justify-space-between flex-wrap gap-2 mb-3">
                <h6 id="journal-video-heading" class="text-body-1 font-weight-medium mb-0">Video <span class="text-error">*</span></h6>
                <span class="text-caption text-medium-emphasis">MP4 atau MOV, maks. 30 MB</span>
              </div>
              <div class="media-empty-box rounded-lg mb-3">
                <div v-if="!uploadedVideo" class="media-empty-state">
                  <VIcon icon="ri-video-line" size="28" class="text-disabled mb-2" />
                  <span class="text-body-2 text-medium-emphasis">No video uploaded yet.</span>
                </div>
                <div v-else class="media-video-content">
                  <div class="d-flex align-center justify-space-between gap-2 mb-2">
                    <span class="text-body-2 font-weight-medium media-file-name">{{ uploadedVideo.name }}</span>
                    <VBtn icon="ri-delete-bin-line" variant="text" color="error" size="small" aria-label="Hapus video" @click="removeVideo" />
                  </div>
                  <VProgressLinear v-if="isCompressing" indeterminate color="primary" aria-label="Simulasi kompresi video" />
                  <video v-else :src="uploadedVideo.url" controls preload="metadata" class="journal-video" />
                  <p class="text-caption text-medium-emphasis mt-2 mb-0" role="status">{{ isCompressing ? 'Simulasi kompresi berlangsung...' : 'Video siap. Demo menggunakan file asli tanpa kompresi.' }}</p>
                </div>
              </div>
              <VBtn variant="outlined" color="primary" size="small" rounded="pill" class="media-upload-button mb-4" prepend-icon="ri-upload-2-line" @click="videoFileInput?.click()">{{ uploadedVideo ? 'Ganti video' : 'Upload Video' }}</VBtn>
              <VDivider class="mb-4" />
            </section>

            <div class="d-flex align-center justify-space-between flex-wrap gap-2 mb-3">
              <div>
                <h5 class="text-body-1 font-weight-medium text-high-emphasis mb-0">{{ mediaMode === 'video' ? 'Photo (optional)' : 'Evidence Photo' }}</h5>
                <span v-if="mediaMode === 'photo'" class="text-caption text-medium-emphasis">Wajib jika tanpa video</span>
              </div>
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
            <div class="upload-dashed-box mb-3">
              <button v-if="uploadedPhotos.length === 0" type="button" class="photo-empty" @click="showUploadPhotoDialog = true">
                <VIcon icon="ri-image-line" size="26" class="text-disabled mb-2" />
                <span class="text-body-2 text-medium-emphasis">There are no photos uploaded yet.</span>
              </button>
              <div v-else class="photo-upload-grid">
                <div v-for="(photo, idx) in uploadedPhotos" :key="photo.url" class="position-relative ratio-square rounded-lg overflow-hidden">
                  <VImg :src="photo.url" :alt="`Foto kegiatan ${idx + 1}`" cover class="w-100 h-100" />
                  <VBtn icon="ri-close-line" color="error" size="small" variant="flat" class="photo-delete-badge" :aria-label="`Hapus foto ${idx + 1}`" @click="removePhoto(idx)" />
                </div>
              </div>
            </div>

            <VBtn
              variant="outlined"
              color="primary"
              class="media-upload-button mb-3 text-capitalize font-weight-medium"
              size="small"
              prepend-icon="ri-upload-2-line"
              @click="showUploadPhotoDialog = true"
            >
              Upload Photo
            </VBtn>

            <span class="text-caption text-medium-emphasis d-block">
              You can upload up to 3 photos from your camera or gallery, and each photo can be a maximum of 1 MB.
            </span>
            <VAlert v-if="mediaError" type="error" variant="tonal" density="compact" class="journal-error mt-3" role="alert"><span class="text-body-2">{{ mediaError }}</span></VAlert>
          </VCard>
        </VCol>

        <!-- Right Column: AI Summary Card -->
        <VCol cols="12" md="6">
          <VCard border elevation="0" class="rounded-lg pa-5 d-flex flex-column">
            <div class="d-flex align-center justify-space-between mb-4">
              <div class="d-flex align-center gap-2">
                <VAvatar size="24" color="primary" class="text-white">
                  <VIcon icon="ri-magic-line" size="14" />
                </VAvatar>
                <h5 class="text-body-1 font-weight-medium text-high-emphasis mb-0">Teacher Notes di Daily Journal</h5>
              </div>
              <div class="d-flex align-center gap-1">
                <VIcon icon="ri-time-line" size="16" class="text-medium-emphasis" />
                <span class="text-caption text-medium-emphasis font-weight-medium">
                  {{ aiGenerationCount }} AI Generation
                </span>
              </div>
            </div>

            <p class="text-body-2 text-medium-emphasis">Hasil olahan AI. Periksa ringkasan sebelum dikirim ke Parents. Demo memakai prompt dummy.</p>
            <VCheckbox v-model="simulateAIFailure" label="Demo: simulasikan generate gagal" hide-details class="mb-3" />
            <div class="d-flex flex-wrap gap-3">
            <VBtn
              color="info"
              variant="flat"
              prepend-icon="ri-magic-line"
              rounded="xl"
              size="default"
              :loading="isGeneratingAI"
              @click="generateAISummary"
              class="font-weight-medium text-capitalize mb-4 align-self-start"
            >
              Generate AI Summary
            </VBtn>
            <VBtn v-if="aiFailed" variant="outlined" color="primary" @click="copyPrompt">Copy Prompt</VBtn>
            </div>
            <VAlert v-if="aiFailed" type="error" variant="tonal" density="compact" class="journal-error mb-4" role="alert">
              <p class="text-body-2 font-weight-medium mb-1">Teacher Notes gagal dibuat</p>
              <p class="text-body-2 text-high-emphasis mb-0">Coba generate lagi, atau salin prompt untuk membuat catatan secara manual.</p>
            </VAlert>

            <div class="ai-summary-box border rounded-lg pa-4 bg-light-gray">
              <p v-if="isGeneratingAI || !aiSummary" class="text-body-2 text-medium-emphasis" role="status">{{ isGeneratingAI ? 'Sedang membuat Teacher Notes...' : 'Teacher Notes belum dibuat.' }}</p>
              <VTextarea v-model="aiSummary" label="Hasil olahan AI" :disabled="isGeneratingAI" placeholder="Hasil AI atau hasil olahan prompt manual" auto-grow rows="5" hide-details />
            </div>
          </VCard>
        </VCol>
      </VRow>
    </VExpandTransition>
    </fieldset>

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
          <span class="text-body-2 font-weight-medium text-high-emphasis">{{ savedRecord?.journal.sentAt || 'Belum dikirim' }}</span>
        </div>
      </div>

      <!-- SECTION: Report Preview Card -->
      <VCard border elevation="0" class="rounded-lg pa-4 bg-surface mb-6">
        <!-- PDF / Document Preview Area (Placeholder) -->
        <VRadioGroup v-model="previewChannel" inline label="Preview output" hide-details class="mb-4">
          <VRadio label="HTML / PDF demo" value="html" /><VRadio label="WhatsApp demo" value="whatsapp" />
        </VRadioGroup>
        <MeetingJournalReportPreview :student="{ name: currentStudent.name }" :session="{ code: currentStudent.sessionText }" :book="{ title: currentStudent.bookTitle }" :meeting="previewMeeting" :journal="previewJournal" class="mb-4" />
        <template v-if="campaignPreview">
          <VDivider class="my-6" />
          <MarketingJournalPage :snapshot="campaignPreview" class="mb-4" />
        </template>
        <video v-if="previewChannel === 'whatsapp' && mediaMode === 'video' && uploadedVideo" :src="uploadedVideo.url" controls class="journal-video mb-4" />
        <VAlert v-if="savedRecord" :type="savedRecord.journal.status === 'Failed' ? 'error' : 'info'" variant="tonal" class="mb-4">
          {{ savedRecord.journal.status }} · {{ savedRecord.sendCount }}/{{ DEMO_SEND_LIMIT }} kali kirim demo {{ locked ? '· Locked' : '' }}
          <div v-if="sending" class="d-flex flex-wrap gap-2 mt-3">
            <VBtn variant="outlined" @click="demo.settleSend(journalId, true)">Demo: berhasil</VBtn>
            <VBtn variant="outlined" color="error" @click="demo.settleSend(journalId, false)">Demo: gagal</VBtn>
          </div>
          <p v-if="sending" class="mt-2 mb-0">Status menunggu hasil simulasi; tidak berubah karena timeout.</p>
        </VAlert>

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
                {{ previewMeeting.className }}
              </span>
              <span class="text-medium-emphasis">•</span>
              <span class="text-medium-emphasis">
                {{ currentStudent.bookTitle }}
              </span>
            </div>
          </div>
          <span class="text-body-2 text-medium-emphasis">
            {{ formatMeetingDate(previewMeeting.startsAt) }} · {{ formatMeetingTime(previewMeeting.startsAt) }} WIB
          </span>
        </div>
      </VCard>
      <div v-if="savedRecord" class="d-flex justify-end flex-wrap gap-3 mb-4">
        <VBtn variant="outlined" prepend-icon="ri-link" @click="copyText(publicUrl, 'Link disalin')">Copy Link</VBtn>
        <VBtn variant="outlined" prepend-icon="ri-external-link-line" :to="journalPublicPath(journalId)" target="_blank">Buka jurnal public demo</VBtn>
      </div>
    </div>

    <!-- ACTION FOOTER BAR -->
    <div class="action-footer-bar border-t d-flex align-center justify-end gap-3 py-4 bg-surface mt-6">
      <template v-if="currentStep === 1">
        <VBtn
          variant="outlined"
          color="primary"
          class="px-6 rounded-pill"
          @click="saveAsDraft"
          :disabled="locked || sending"
        >
          Save As Draft
        </VBtn>
        <VBtn
          color="primary"
          variant="flat"
          class="px-6 rounded-pill"
          @click="saveAndContinue"
          :disabled="locked || sending || isCompressing"
        >
          Save & Continue
        </VBtn>
      </template>
      <template v-else-if="currentStep === 2">
        <VBtn
          variant="outlined"
          color="secondary"
          class="px-6 rounded-pill me-auto"
          :to="returnTo === 'reports' ? { path: '/reports' } : returnTo === 'dashboard-teacher' ? { path: '/dashboard-teacher' } : { path: '/attendance-detail', query: { id: classId } }"
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
          PDF demo info
        </VBtn>
        <VBtn
          color="primary"
          variant="flat"
          class="px-6 rounded-pill"
          prepend-icon="ri-send-plane-2-line"
          @click="sendReport"
          :disabled="locked || sending"
        >
          {{ savedRecord?.journal.status === 'Failed' ? 'Retry' : sent ? 'Kirim revisi' : 'Send To Parent' }}
        </VBtn>
      </template>
    </div>

    <VDialog v-model="sendDialog" max-width="540">
      <VCard title="Send to Parent">
        <VCardText>
          <p class="text-body-2">Demo lokal. Tidak ada pesan WhatsApp yang dikirim.</p>
          <VTextField v-model="parentPhone" label="Nomor WhatsApp Parents" :disabled="sending" />
          <VCheckbox :model-value="!parentPhone.trim() || manualSend" :disabled="!parentPhone.trim()" label="Kirim manual, tandai jurnal sudah dikirim" @update:model-value="manualSend = Boolean($event)" />
          <p class="text-body-2">Jika kirim manual dipilih, bagikan link sendiri. Status menjadi Sent (Manual), memakai jatah kirim, dan revisi tidak dikirim otomatis.</p>
          <p v-if="!parentPhone.trim()" class="text-body-2 text-medium-emphasis">Nomor Parents kosong. Kirim manual wajib dipilih.</p>
          <p class="text-body-2 text-break">{{ publicUrl }}</p>
        </VCardText>
        <VCardActions><VSpacer /><VBtn @click="sendDialog = false">Batal</VBtn><VBtn color="primary" @click="confirmSend">{{ manualSend || !parentPhone.trim() ? 'Tandai Sent (Manual)' : 'Mulai kirim demo' }}</VBtn></VCardActions>
      </VCard>
    </VDialog>

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
              role="checkbox"
              tabindex="0"
              :aria-checked="selectedLessonIds.includes(lesson.id)"
              :aria-label="lesson.title"
              :class="{ 'border-primary bg-primary-light-tint': selectedLessonIds.includes(lesson.id) }"
              @click="toggleLessonSelection(lesson.id)"
              @keydown.enter.prevent="toggleLessonSelection(lesson.id)"
              @keydown.space.prevent="toggleLessonSelection(lesson.id)"
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
.journal-fields {
  min-inline-size: 0;
  border: 0;
}

.journal-video {
  display: block;
  inline-size: 100%;
  max-block-size: 360px;
}
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
  background-color: rgba(var(--v-theme-on-surface), 0.03);
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

.media-mode-toggle {
  display: grid !important;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  inline-size: 100%;
  gap: 8px;

  :deep(.v-btn) {
    justify-content: flex-start;
    inline-size: 100%;
    block-size: auto !important;
    min-block-size: 78px;
    padding: 10px 12px;
    border: 1px solid rgba(var(--v-border-color), 0.2) !important;
    border-radius: 8px !important;
    color: rgb(var(--v-theme-on-surface));
    box-shadow: none !important;
    text-align: start;
    text-transform: none;
    white-space: normal;
  }

  :deep(.media-mode-option--active) {
    border-color: rgb(var(--v-theme-primary)) !important;
    background-color: rgba(var(--v-theme-primary), 0.08) !important;
    color: rgb(var(--v-theme-primary)) !important;
  }

  :deep(.v-btn__content) {
    display: block;
    inline-size: 100%;
    white-space: normal;
  }
}

.media-mode-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  inline-size: 100%;
  font-size: 13px;
  line-height: 18px;
  text-align: start;
}

.media-mode-copy > :first-child { align-items: flex-start; }
.media-mode-copy > :last-child { font-weight: 400; }

.upload-dashed-box {
  min-block-size: 150px;
  padding: 8px;
  border: 1px dashed rgba(var(--v-border-color), 0.2);
  border-radius: 12px;
  background-color: rgba(var(--v-theme-on-surface), 0.01);
}

.photo-upload-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
.photo-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 132px;
  padding: 16px;
  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
  border-radius: 8px;
}
.photo-empty:focus-visible { outline: 2px solid rgb(var(--v-theme-primary)); outline-offset: 2px; }
.media-empty-box {
  display: flex;
  min-block-size: 150px;
  align-items: center;
  justify-content: center;
  border: 1px dashed rgba(var(--v-border-color), 0.2);
  background: rgba(var(--v-theme-on-surface), 0.01);
}
.media-empty-state { display: flex; min-block-size: 148px; flex-direction: column; align-items: center; justify-content: center; }
.media-video-content { inline-size: 100%; padding: 12px; }
.media-upload-button { align-self: flex-start; border-color: rgba(var(--v-theme-primary), 0.4) !important; }
.media-file-name { min-width: 0; overflow-wrap: anywhere; }
.journal-error {
  flex: 0 0 auto;
  align-items: flex-start;
  grid-template-rows: auto;
  padding: 12px 16px;
  :deep(.v-alert__prepend) { margin-inline-end: 12px; }
  :deep(.v-alert__content) { min-width: 0; align-self: start; }
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
  background-color: rgba(var(--v-theme-on-surface), 0.02) !important;
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

@media (max-width: 599px) {
  .meeting-journal-create-page {
    padding-bottom: 160px !important;
  }

  .media-mode-toggle {
    grid-template-columns: minmax(0, 1fr);
  }

  .action-footer-bar {
    flex-wrap: wrap;
    padding-inline: 16px;

    > a {
      flex-basis: 100%;
    }

    > .v-btn {
      flex-grow: 1;
    }
  }

  .preview-card-footer,
  .student-meta-info {
    flex-wrap: wrap;
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
