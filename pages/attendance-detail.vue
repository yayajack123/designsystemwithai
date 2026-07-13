<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import UiSectionHeader from '@/components/ui/UiSectionHeader.vue'
import UiTableView from '@/components/ui/UiTableView.vue'
import PresenceDialog from '@/components/dialogs/PresenceDialog.vue'

definePageMeta({
  sidebarRoute: 'attendance',
})

// ─────────────────────── Types ───────────────────────
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
    students: [
      { id: 's1', studentId: 'STD-20260326-019', name: 'Cristofer Mango', sessionText: 'Session 6', bookTitle: 'Web Developer for Beginner', bookStatus: 'Completed', hasLaptop: true, presence: 'On time', notes: 'The Web Developer for Beginners class had a good attendance rate, with students engaging in discussions.', status: '-', actionText: 'Create Journal', actionIcon: 'ri-pencil-line' },
      { id: 's2', studentId: 'STD-20260326-019', name: 'Richard Payne', sessionText: 'Session 6', bookTitle: 'Web Developer for Beginner', bookStatus: 'Idle', hasLaptop: true, presence: 'On time', notes: 'In the Android Developer for Beginners course, attendance was strong, with most students actively participating.', status: 'Sent', actionText: 'View', actionIcon: 'ri-eye-line' },
      { id: 's3', studentId: 'STD-20260326-019', name: 'Mr. Justin Richardson', sessionText: 'Session 6', bookTitle: 'Web Developer for Beginner', bookStatus: 'Incomplete', hasLaptop: true, presence: 'Late 5 minutes', notes: 'This week in Coding Kids, attendance was perfect, with every student eager to learn.', status: 'Not send yet', actionText: 'Continue', actionIcon: 'ri-share-forward-2-line' },
      { id: 's4', studentId: 'STD-20260326-019', name: 'Cristofer Mango', sessionText: 'Session 6', bookTitle: 'Web Developer for Beginner', bookStatus: 'Completed', hasLaptop: true, presence: 'On time', notes: 'The Coding Kids session saw a full turnout, showcasing great enthusiasm among the participants.', status: '-', actionText: 'Continue', actionIcon: 'ri-share-forward-2-line' },
      { id: 's5', studentId: 'STD-20260326-019', name: 'Jennifer Summers', sessionText: 'Session 6', bookTitle: 'Web Developer for Beginner', bookStatus: 'Completed', hasLaptop: false, presence: 'Absent', notes: 'Attendance for the Coding Kids class was excellent this week, with all students present.', status: '-', actionText: 'Create Journal', actionIcon: 'ri-pencil-line' }
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

const route = useRoute()
const router = useRouter()
const classId = computed(() => (route.query.id as string) || '1')

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
  { title: 'STUDENT NAME', key: 'studentName', sortable: true },
  { title: 'BOOK', key: 'book', sortable: true },
  { title: 'ADDONS', key: 'addons', sortable: true, align: 'center' as const },
  { title: 'PRESENCE', key: 'presence', sortable: true },
  { title: 'NOTES', key: 'notes', sortable: false },
  { title: 'STATUS', key: 'status', sortable: true },
  { title: 'MEETING JOURNAL', key: 'action', sortable: false, align: 'center' as const, width: '160px' }
])

// ─────────────────────── Helpers ───────────────────────
const getInitials = (name: string) => {
  if (!name) return ''
  const parts = name.split(' ')
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

const getBookBadgeColor = (status: 'Completed' | 'Idle' | 'Incomplete') => {
  if (status === 'Completed') return 'primary'
  if (status === 'Idle') return 'warning'
  return 'info'
}

const getPresenceCircleColor = (presence: 'On time' | 'Late 5 minutes' | 'Absent') => {
  if (presence === 'On time') return 'primary'
  if (presence === 'Late 5 minutes') return 'warning'
  return 'error'
}

const getPresenceIcon = (presence: 'On time' | 'Late 5 minutes' | 'Absent') => {
  if (presence === 'Absent') return 'ri-close-line'
  return 'ri-check-line'
}

const getStatusCircleColor = (status: 'Sent' | 'Not send yet' | 'Revision' | '-') => {
  if (status === 'Sent') return 'primary'
  return 'warning'
}

const getStatusIcon = (status: 'Sent' | 'Not send yet' | 'Revision' | '-') => {
  if (status === 'Sent') return 'ri-send-plane-2-line'
  if (status === 'Not send yet') return 'ri-alert-line'
  if (status === 'Revision') return 'ri-refresh-line'
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

const handleActionClick = (item: StudentDetail) => {
  if (item.actionText === 'Create Journal' || item.actionText === 'Continue') {
    navigateTo({
      path: '/meeting-journal/create',
      query: {
        classId: classId.value,
        studentId: item.id
      }
    })
  } else if (item.actionText === 'View') {
    showToast(`Opening journal record for ${item.name}...`, 'info')
  } else {
    showToast(`Resuming journal review for ${item.name}...`, 'warning')
  }
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
              {{ getInitials(item.name) }}
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
            {{ getInitials(item.name) }}
          </VAvatar>
          <div class="d-flex flex-column justify-center">
            <span class="text-body-1 font-weight-medium text-high-emphasis leading-normal">{{ item.name }}</span>
            <div class="d-flex align-center mt-0.5">
              <span class="text-body-2 text-medium-emphasis">{{ item.studentId }}</span>
              <span class="dot-separator"></span>
              <span class="text-body-2 text-medium-emphasis">{{ item.sessionText }}</span>
            </div>
          </div>
        </div>
      </template>

      <template #item.book="{ item }">
        <div class="d-flex flex-column py-2 gap-1 align-start">
          <span class="text-body-2 text-high-emphasis leading-normal">{{ item.bookTitle }}</span>
          <VChip :color="getBookBadgeColor(item.bookStatus)" variant="tonal" size="small" class="font-weight-medium text-caption">
            {{ item.bookStatus }}
          </VChip>
        </div>
      </template>

      <template #item.addons="{ item }">
        <div class="d-flex align-center justify-center">
          <VAvatar v-if="item.hasLaptop" size="24" color="rgba(var(--v-theme-primary), 0.12)" class="rounded-circle text-primary border-none">
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
        <div class="text-body-2 text-medium-emphasis text-wrap py-2" style="max-width: 200px; min-width: 150px; line-height: 1.4;">
          {{ item.notes }}
        </div>
      </template>

      <template #item.status="{ item }">
        <div class="d-flex align-center gap-2">
          <template v-if="item.status !== '-'">
            <VAvatar :color="getStatusCircleColor(item.status)" size="24" class="rounded-circle text-white">
              <VIcon :icon="getStatusIcon(item.status)" size="14" />
            </VAvatar>
            <span class="text-body-2 text-medium-emphasis">{{ item.status }}</span>
          </template>
          <span v-else class="text-body-2 text-medium-emphasis">-</span>
        </div>
      </template>

      <template #item.action="{ item }">
        <VBtn
          variant="outlined"
          size="small"
          color="primary"
          rounded="xl"
          class="text-capitalize font-weight-medium"
          style="border-color: rgba(var(--v-theme-primary), 0.3) !important;"
          @click="handleActionClick(item)"
        >
          <VIcon :icon="item.actionIcon" start size="14" class="me-1" />
          {{ item.actionText }}
        </VBtn>
      </template>
    </UiTableView>

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
}
</style>
