<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { avatarText } from '@core/utils/formatters'
import UiSectionHeader from '@/components/ui/UiSectionHeader.vue'
import UiTableView from '@/components/ui/UiTableView.vue'
import PresenceDialog from '@/components/dialogs/PresenceDialog.vue'
import { findStudentByName } from '@/data/students'
import { attendanceJournalId, attendanceJournalStudents, type AttendanceJournalStudent } from '@/data/attendanceJournalDemo'
import { DEMO_SEND_LIMIT, journalPublicPath, useDailyJournalDemo } from '@/composables/useDailyJournalDemo'

definePageMeta({
  sidebarRoute: 'attendance',
})

// ─────────────────────── Types ───────────────────────
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

// ─────────────────────── Mock Data (aligned with attendance.vue) ───────────────────────
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

const route = useRoute()
const router = useRouter()
const classId = computed(() => (route.query.id as string) || '1')
const demo = useDailyJournalDemo()
onMounted(demo.restore)
const demoRecord = (item: StudentDetail) => demo.records.value[attendanceJournalId(classId.value, item.id)]
const selectedBooksStudent = ref<StudentDetail | null>(null)
const isBooksDialogOpen = ref(false)
const showStudentBooks = (item: StudentDetail) => {
  selectedBooksStudent.value = item
  isBooksDialogOpen.value = true
}
const openStudentBooks = (name: string) => {
  const student = findStudentByName(name)
  if (student) router.push({ path: '/student-detail', query: { id: student.id, tab: 'books' } })
}

// Active class session lookup with fallback
const classSession = computed(() => {
  const found = mockClasses.value.find(c => c.id === classId.value)
  if (found) return found
  
  // Fallback dynamic generation for other IDs
  return {
    id: classId.value,
    name: `Class-${classId.value}`,
    room: 'Virtual Room',
    date: 'Thu, 26 Feb 2026',
    teachersCount: 1,
    teachers: [
      { id: 'TCR-20260123-999', name: 'Default Instructor', isMain: true }
    ],
    timeStart: '10:00',
    timeEnd: '12:00',
    duration: '2 hrs',
    className: 'Standard Learning Track',
    meetingType: 'Group Class',
    meetingNumber: 'Meeting 1',
    status: 'Active' as const,
    students: [
      { id: 's99', studentId: 'STD-20260326-999', name: 'Default Student', sessionText: 'Session 6', bookTitle: 'Introductory Course', bookStatus: 'Completed' as const, hasLaptop: true, presence: 'On time' as const, notes: 'Good progress.', status: '-' as const, actionText: 'Create Journal', actionIcon: 'ri-pencil-line' }
    ]
  }
})

// Local reactive state for students list to handle edits from Dialog
const studentsList = ref<StudentDetail[]>([])

// Initialize local students list from classSession
watch(classSession, (newVal) => {
  if (newVal) {
    studentsList.value = JSON.parse(JSON.stringify(newVal.students))
  }
}, { immediate: true })

// ─────────────────────── Filter & Search ───────────────────────
const searchQuery = ref('')
const filteredStudents = computed(() => {
  return studentsList.value.filter(s => {
    const query = searchQuery.value.toLowerCase().trim()
    return !query || 
      s.name.toLowerCase().includes(query) ||
      s.studentId.toLowerCase().includes(query)
  })
})

const resetFilters = () => {
  searchQuery.value = ''
}

// ─────────────────────── Table Columns Headers ───────────────────────
const teacherHeaders = computed(() => [
  { title: 'NAME', key: 'name', sortable: false }
])

const headers = computed(() => [
  { title: 'STUDENT NAME', key: 'studentName', sortable: true, minWidth: '260px' },
  { title: 'BOOK', key: 'book', sortable: true, minWidth: '180px' },
  { title: 'ADDONS', key: 'addons', sortable: true, align: 'center' as const, width: '90px' },
  { title: 'PRESENCE', key: 'presence', sortable: true, minWidth: '140px' },
  { title: 'NOTES', key: 'notes', sortable: false, minWidth: '200px' },
  { title: 'STATUS', key: 'status', sortable: true, minWidth: '130px' },
  { title: 'MEETING JOURNAL', key: 'action', sortable: false, minWidth: '320px' }
])

// ─────────────────────── Helpers ───────────────────────
const getBookBadgeColor = (status: 'Completed' | 'Idle' | 'Incomplete') => {
  if (status === 'Completed') return 'primary'
  if (status === 'Idle') return 'warning'
  return 'info'
}

const getStudentBooks = (item: StudentDetail) => item.books?.length
  ? item.books
  : [{ title: item.bookTitle, status: item.bookStatus }]

const getPresenceCircleColor = (presence: 'On time' | 'Late 5 minutes' | 'Absent') => {
  if (presence === 'On time') return 'primary'
  if (presence === 'Late 5 minutes') return 'warning'
  return 'error'
}

const getPresenceIcon = (presence: 'On time' | 'Late 5 minutes' | 'Absent') => {
  if (presence === 'Absent') return 'ri-close-line'
  if (presence === 'Late 5 minutes') return 'ri-time-line'
  return 'ri-check-line'
}

const getJournalStatus = (item: StudentDetail) => {
  const record = demoRecord(item)
  return record?.journal.status || (item.status === '-' ? 'Not send yet' : item.status)
}

const getStatusCircleColor = (status: string) => {
  if (status === 'Sent' || status === 'Sent (Manual)') return 'success'
  if (status === 'Sending') return 'info'
  if (status === 'Failed') return 'error'
  if (status === 'Draft' || status === 'Revision' || status === 'Not send yet') return 'warning'
  return 'secondary'
}

const getStatusIcon = (status: string) => {
  if (status === 'Sent' || status === 'Sent (Manual)') return 'ri-send-plane-2-line'
  if (status === 'Sending') return 'ri-loader-4-line'
  if (status === 'Failed') return 'ri-error-warning-line'
  if (status === 'Draft') return 'ri-edit-line'
  if (status === 'Revision') return 'ri-refresh-line'
  if (status === 'Not send yet') return 'ri-alert-line'
  return ''
}

// ─────────────────────── Interactive Actions ───────────────────────
const toastShow = ref(false)
const toastText = ref('')
const toastColor = ref('success')

const showToast = (message: string, color: string = 'success') => {
  toastText.value = message
  toastColor.value = color
  toastShow.value = true
}

const studentJournalId = (item: StudentDetail) => attendanceJournalId(classId.value, item.id)
const journalEditorRoute = (item: StudentDetail, step = '1', send = false) => ({
  path: '/meeting-journal/create',
  query: {
    classId: classId.value,
    studentId: item.id,
    journalId: studentJournalId(item),
    returnTo: 'attendance-detail',
    ...(step === '2' ? { step } : {}),
    ...(send ? { send: '1' } : {}),
  },
})
const handleActionClick = (item: StudentDetail) => {
  const record = demoRecord(item)
  if (!record) {
    if (item.actionText === 'Create Journal') return navigateTo(journalEditorRoute(item))
    if (item.actionText === 'Continue') return navigateTo(journalEditorRoute(item, '2'))
    showToast(item.actionText === 'View' ? `Opening journal record for ${item.name}...` : `Resuming journal review for ${item.name}...`, 'info')
    return
  }

  return navigateTo({ path: `/meeting-journal/${encodeURIComponent(record.id)}`, query: { returnTo: 'attendance-detail', classId: classId.value } })
}
const editJournal = (item: StudentDetail) => navigateTo(journalEditorRoute(item))
const sendJournal = (item: StudentDetail) => navigateTo(journalEditorRoute(item, '2', true))
const resumeJournal = (item: StudentDetail) => navigateTo(journalEditorRoute(item, '2'))
const copyJournalLink = async (item: StudentDetail) => {
  try {
    await navigator.clipboard.writeText(`${window.location.origin}${journalPublicPath(studentJournalId(item))}`)
    showToast('Link jurnal disalin.')
  }
  catch { showToast('Gagal menyalin link. Periksa izin clipboard browser.', 'error') }
}

// ─────────────────────── Presence Dialog Integration ───────────────────────
const isPresenceDialogActive = ref(false)

const openPresenceDialog = () => {
  isPresenceDialogActive.value = true
}

// Map local custom students schema to dialog compatibility format
const dialogClassSession = computed(() => {
  if (!classSession.value) return null
  return {
    id: classSession.value.id,
    name: classSession.value.name,
    room: classSession.value.room,
    date: classSession.value.date,
    teachersCount: classSession.value.teachersCount,
    teachers: classSession.value.teachers.map(t => ({ id: t.id, name: t.name })),
    timeStart: classSession.value.timeStart,
    timeEnd: classSession.value.timeEnd,
    duration: classSession.value.duration,
    className: classSession.value.className,
    meetingType: classSession.value.meetingType,
    meetingNumber: classSession.value.meetingNumber,
    status: classSession.value.status,
    students: studentsList.value.map(s => ({
      id: s.id,
      name: s.name,
      course: s.bookTitle,
      badgeText: 'Quota : 0',
      badgeColor: s.presence === 'Absent' ? 'error' as const : 'success' as const,
      isPresent: s.presence !== 'Absent',
      hasLaptop: s.hasLaptop,
    }))
  }
})

const handlePresenceSubmit = (payload: { students: any[], isStartClass: boolean }) => {
  // Map dialog updates back to our detail page roster
  studentsList.value = studentsList.value.map(student => {
    const updated = payload.students.find(s => s.id === student.id)
    if (updated) {
      return {
        ...student,
        hasLaptop: updated.hasLaptop,
        presence: updated.isPresent ? 'On time' : 'Absent',
      }
    }
    return student
  })
  showToast('Attendance updated successfully.', 'success')
}
</script>

<template>
  <section class="attendance-detail-page">
    <!-- Back Header -->
    <UiSectionHeader
      title="Class Attendance"
      description="Manage detail attendance student"
      :back="({ name: 'attendance' } as any)"
      class="mb-6"
    />

    <!-- Class Info Cards -->
    <VRow class="mb-6">
      <VCol cols="12" md="6">
        <VCard border class="d-flex align-center pa-5" elevation="0">
          <div class="flex-grow-1">
            <span class="text-body-1 text-medium-emphasis mb-1 d-block">Class name</span>
            <span class="text-h4 font-weight-medium text-high-emphasis">{{ classSession?.name }}</span>
          </div>
          <VAvatar size="42" color="rgba(var(--v-theme-primary), 0.08)" class="rounded-lg text-primary">
            <VIcon icon="ri-suitcase-line" size="24" />
          </VAvatar>
        </VCard>
      </VCol>
      <VCol cols="12" md="6">
        <VCard border class="d-flex align-center pa-5" elevation="0">
          <div class="flex-grow-1">
            <span class="text-body-1 text-medium-emphasis mb-1 d-block">Room Name</span>
            <span class="text-h4 font-weight-medium text-high-emphasis">{{ classSession?.room }}</span>
          </div>
          <VAvatar size="42" color="rgba(var(--v-theme-primary), 0.08)" class="rounded-lg text-primary">
            <VIcon icon="ri-user-follow-line" size="24" />
          </VAvatar>
        </VCard>
      </VCol>
    </VRow>

    <!-- Teacher Section Card -->
    <div class="d-flex align-center mb-4 gap-2">
      <span class="text-h5 font-weight-medium text-high-emphasis">Teacher</span>
      <VChip color="primary" size="small" class="font-weight-medium text-caption px-3">
        {{ classSession?.teachers.length || 0 }} Teachers
      </VChip>
    </div>
    
    <VCard border class="mb-6 overflow-hidden" elevation="0">
      <VDataTable
        :headers="teacherHeaders"
        :items="classSession?.teachers || []"
        class="text-no-wrap"
        hide-default-footer
      >
        <template #item.name="{ item }">
          <div class="d-flex align-center py-2 gap-3">
            <VAvatar size="34" color="grey-100" class="text-subtitle-1 font-weight-medium text-high-emphasis border">
              {{ avatarText(item.name) }}
            </VAvatar>
            <div class="d-flex flex-column justify-center">
              <span class="text-body-1 font-weight-medium text-high-emphasis leading-normal">{{ item.name }}</span>
              <span class="text-body-2 text-medium-emphasis">{{ item.id }}</span>
            </div>
            <VChip v-if="item.isMain" color="info" size="small" class="font-weight-medium text-caption px-3 ms-auto me-4">
              Main Teacher
            </VChip>
          </div>
        </template>
      </VDataTable>
    </VCard>

    <!-- Student Section Header & Table -->
    <div class="d-flex align-center justify-space-between mb-4 mt-6">
      <div class="d-flex align-center gap-2">
        <span class="text-h5 font-weight-medium text-high-emphasis">Students</span>
        <VChip color="primary" size="small" class="font-weight-medium text-caption px-3">
          {{ filteredStudents.length }} Students
        </VChip>
      </div>
      <VBtn color="primary" rounded="xl" class="text-capitalize" @click="openPresenceDialog">
        Change Presence
      </VBtn>
    </div>

    <UiTableView
      title=""
      :headers="headers"
      :items="filteredStudents"
      :items-per-page="5"
      @reset-filters="resetFilters"
    >
      <template #filters>
        <div style="width: 240px">
          <VTextField
            v-model="searchQuery"
            placeholder="Search student name or ID..."
            prepend-inner-icon="ri-search-line"
            clearable
            density="compact"
            hide-details
            variant="outlined"
          />
        </div>
      </template>

      <!-- Dynamic Custom Column Slots -->
      <template #item.studentName="{ item }">
        <div class="d-flex align-center gap-3 py-2">
          <VAvatar size="34" color="grey-100" class="text-body-1 font-weight-medium text-high-emphasis border">
            {{ avatarText(item.name) }}
          </VAvatar>
          <div class="d-flex flex-column justify-center">
            <span class="text-body-1 font-weight-medium text-high-emphasis leading-normal">{{ item.name }}</span>
            <div class="d-flex align-center mt-0.5">
              <span class="text-caption text-medium-emphasis">{{ item.studentId }}</span>
              <span class="dot-separator" />
              <VChip color="secondary" variant="tonal" size="x-small" class="font-weight-regular">{{ item.sessionText }}</VChip>
            </div>
          </div>
        </div>
      </template>

      <template #item.book="{ item }">
        <div class="d-flex flex-column py-2 gap-1 align-start">
          <span class="text-body-2 text-high-emphasis leading-normal">{{ getStudentBooks(item)[0].title }}</span>
          <VChip :color="getBookBadgeColor(getStudentBooks(item)[0].status)" variant="tonal" size="small" class="font-weight-medium text-caption">
            {{ getStudentBooks(item)[0].status }}
          </VChip>
          <VBtn
            v-if="item.books && item.books.length > 1"
            variant="text"
            color="primary"
            size="small"
            class="px-0 book-dialog-trigger"
            @click="showStudentBooks(item)"
          >
            See all books
          </VBtn>
          <VBtn
            v-else-if="findStudentByName(item.name)"
            variant="text"
            color="primary"
            size="small"
            class="px-0"
            @click="openStudentBooks(item.name)"
          >
            View all books
          </VBtn>
        </div>
      </template>

      <template #item.addons="{ item }">
        <div class="d-flex align-center justify-center">
          <VAvatar v-if="item.hasLaptop" size="24" color="rgba(var(--v-theme-primary), 0.12)" class="rounded-circle text-primary border-none" aria-label="Laptop" title="Laptop">
            <VIcon icon="ri-macbook-line" size="14" />
          </VAvatar>
          <VIcon v-else icon="ri-subtract-line" color="disabled" size="16" />
        </div>
      </template>

      <template #item.presence="{ item }">
        <div class="d-flex align-center gap-2">
          <VAvatar :color="getPresenceCircleColor(item.presence)" size="20" class="rounded-circle text-white">
            <VIcon :icon="getPresenceIcon(item.presence)" size="12" />
          </VAvatar>
          <span class="text-body-2 text-high-emphasis">{{ item.presence }}</span>
        </div>
      </template>

      <template #item.notes="{ item }">
        <div class="text-body-2 text-medium-emphasis text-wrap py-2 journal-note-cell">
          {{ item.notes }}
        </div>
      </template>

      <template #item.status="{ item }">
        <div class="d-flex align-center gap-2">
          <VAvatar :color="getStatusCircleColor(getJournalStatus(item))" size="24" class="rounded-circle text-white">
            <VIcon :icon="getStatusIcon(getJournalStatus(item))" size="14" />
          </VAvatar>
          <div class="d-flex flex-column">
            <span class="text-body-2 text-medium-emphasis">{{ getJournalStatus(item) }}</span>
            <span v-if="demoRecord(item) && demoRecord(item)!.sendCount >= DEMO_SEND_LIMIT" class="text-caption text-medium-emphasis">Locked</span>
          </div>
        </div>
      </template>

      <template #item.action="{ item }">
        <div class="d-flex align-center flex-wrap gap-2 py-2 meeting-journal-actions">
          <VBtn v-if="!demoRecord(item) && item.actionText === 'Create Journal'" variant="outlined" size="small" color="primary" rounded="xl" class="text-capitalize font-weight-medium" style="border-color: rgba(var(--v-theme-primary), 0.3) !important;" @click="handleActionClick(item)">
            <VIcon icon="ri-add-line" start size="14" class="me-1" />
            Create Journal
          </VBtn>

          <template v-else-if="!demoRecord(item)">
            <VBtn v-if="item.actionText === 'Continue'" variant="outlined" size="small" color="primary" rounded="xl" class="text-capitalize font-weight-medium" style="border-color: rgba(var(--v-theme-primary), 0.3) !important;" @click="handleActionClick(item)">
              <VIcon :icon="item.actionIcon" start size="14" class="me-1" />{{ item.actionText }}
            </VBtn>
            <VBtn v-else-if="item.actionText === 'View'" variant="outlined" size="small" color="primary" rounded="xl" class="text-capitalize font-weight-medium" style="border-color: rgba(var(--v-theme-primary), 0.3) !important;" @click="handleActionClick(item)">
              <VIcon icon="ri-eye-line" start size="14" class="me-1" />View
            </VBtn>
          </template>

          <template v-else-if="demoRecord(item)!.journal.status === 'Sending'">
            <VBtn variant="outlined" size="small" color="primary" rounded="xl" class="text-capitalize font-weight-medium" style="border-color: rgba(var(--v-theme-primary), 0.3) !important;" @click="handleActionClick(item)">
              <VIcon icon="ri-eye-line" start size="14" class="me-1" />View
            </VBtn>
            <VBtn variant="outlined" size="small" color="primary" rounded="xl" class="text-capitalize font-weight-medium" style="border-color: rgba(var(--v-theme-primary), 0.3) !important;" @click="resumeJournal(item)">
              <VIcon icon="ri-play-line" start size="14" class="me-1" />Continue
            </VBtn>
          </template>

          <template v-else>
            <VBtn variant="outlined" size="small" color="primary" rounded="xl" class="text-capitalize font-weight-medium" style="border-color: rgba(var(--v-theme-primary), 0.3) !important;" @click="handleActionClick(item)">
              <VIcon icon="ri-eye-line" start size="14" class="me-1" />View
            </VBtn>
            <VBtn variant="outlined" size="small" color="primary" rounded="xl" class="text-capitalize font-weight-medium" style="border-color: rgba(var(--v-theme-primary), 0.3) !important;" :disabled="demoRecord(item)!.sendCount >= DEMO_SEND_LIMIT || demoRecord(item)!.journal.status === 'Sending'" @click="editJournal(item)">
              <VIcon icon="ri-edit-line" start size="14" class="me-1" />Edit
            </VBtn>
            <VBtn v-if="['Sent', 'Sent (Manual)'].includes(demoRecord(item)!.journal.status)" icon variant="outlined" size="small" color="primary" rounded="circle" aria-label="Copy journal link" title="Copy Link" @click="copyJournalLink(item)">
              <VIcon icon="ri-link" size="16" />
            </VBtn>
            <VBtn variant="outlined" size="small" color="primary" rounded="xl" class="text-capitalize font-weight-medium" style="border-color: rgba(var(--v-theme-primary), 0.3) !important;" :disabled="demoRecord(item)!.sendCount >= DEMO_SEND_LIMIT" @click="sendJournal(item)">
              <VIcon :icon="demoRecord(item)!.journal.status === 'Failed' ? 'ri-refresh-line' : 'ri-send-plane-2-line'" start size="14" class="me-1" />
              {{ demoRecord(item)!.journal.status === 'Failed' ? 'Retry' : ['Sent', 'Sent (Manual)'].includes(demoRecord(item)!.journal.status) ? 'Send revision' : 'Send' }}
            </VBtn>
          </template>
        </div>
      </template>
    </UiTableView>

    <VDialog v-model="isBooksDialogOpen" max-width="480">
      <VCard v-if="selectedBooksStudent" :title="`All books · ${selectedBooksStudent.name}`">
        <VCardText class="d-flex flex-column gap-3">
          <div
            v-for="book in getStudentBooks(selectedBooksStudent)"
            :key="book.title"
            class="d-flex align-center justify-space-between gap-3 border rounded-lg pa-3"
          >
            <span class="text-body-2 font-weight-medium text-high-emphasis">{{ book.title }}</span>
            <VChip :color="getBookBadgeColor(book.status)" variant="tonal" size="small" class="font-weight-medium">
              {{ book.status }}
            </VChip>
          </div>
        </VCardText>
        <VCardActions class="px-6 pb-4">
          <VSpacer />
          <VBtn color="primary" variant="text" @click="isBooksDialogOpen = false">Close</VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Presence Dialog Integration -->
    <PresenceDialog
      v-model:is-dialog-visible="isPresenceDialogActive"
      :class-session="dialogClassSession"
      @submit-attendance="handlePresenceSubmit"
    />

    <!-- Global Toast Snackbar -->
    <VSnackbar
      v-model="toastShow"
      :color="toastColor"
      location="top right"
      :timeout="3000"
    >
      {{ toastText }}
    </VSnackbar>
  </section>
</template>

<style lang="scss" scoped>
.attendance-detail-page {
  .gap-2 {
    gap: 8px;
  }
  .gap-3 {
    gap: 12px;
  }
  
  .dot-separator {
    width: 4px;
    height: 4px;
    background-color: rgba(var(--v-theme-on-surface), 0.38);
    border-radius: 50%;
    display: inline-block;
    margin: 0 8px;
    align-self: center;
  }

  .bg-table-header {
    background-color: var(--table-header, #f6f7fb) !important;
  }

  .border-none {
    border: none !important;
  }

  .teacher-row {
    height: 64px;
    &:not(:last-child) {
      border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.12);
    }
  }

  .journal-note-cell {
    max-width: 220px;
    min-width: 150px;
    line-height: 1.4;
    white-space: normal;
  }

  .book-dialog-trigger { text-transform: none; }
  .meeting-journal-actions { min-inline-size: 280px; }
}
</style>
