<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { avatarText } from '@core/utils/formatters'
import UiTableView from '@/components/ui/UiTableView.vue'
import { studentRecords, type StudentRecord } from '@/data/students'
import { sessionsForStudent } from '@/data/studentSessions'

definePageMeta({
  sidebarRoute: 'students',
})

// Filter states
const searchQuery = ref('')
const activeTab = ref('my-student')

// Tabs list
const tabs = [
  { label: 'My Student', value: 'my-student' },
  { label: 'Homeroom Student', value: 'homeroom-student' },
  { label: 'Replacement Student', value: 'replacement-student', count: 1, badgeColor: 'error' },
  { label: 'Event’s Student', value: 'events-student' },
]

// Table Headers
const headers = computed(() => [
  { title: 'STUDENT NAME', key: 'student', sortable: true },
  { title: 'COURSE', key: 'course', sortable: true },
  { title: 'SESSION', key: 'session', sortable: true },
  { title: 'ACTION', key: 'action', sortable: false, align: 'center', width: 220 },
])

const students = computed<StudentRecord[]>(() => studentRecords.map(student => {
  const activeCount = sessionsForStudent(student.id).filter(session => session.status === 'Active').length
  return { ...student, session: activeCount ? `${activeCount} Active` : 'No active session' }
}))
const showDetailDialog = ref(false)
const selectedStudent = ref<StudentRecord | null>(null)

// Filter logic
const filteredItems = computed(() => {
  return students.value.filter(item => {
    // Filter by active tab
    if (item.tab !== activeTab.value) return false

    // Filter by search query
    const query = searchQuery.value.toLowerCase().trim()
    if (!query) return true

    return (
      item.name.toLowerCase().includes(query) ||
      item.studentId.toLowerCase().includes(query) ||
      item.course.toLowerCase().includes(query)
    )
  })
})

const resetFilters = () => {
  searchQuery.value = ''
}

const router = useRouter()

const handleViewDetail = (item: StudentRecord) => {
  router.push({ path: '/student-detail', query: { id: item.id } })
}

const handleViewBooks = (item: StudentRecord) => {
  router.push({ path: '/student-detail', query: { id: item.id, tab: 'books' } })
}

const getAvatarText = (name: string) => {
  const cleanName = name.replace(/^(Mr\.|Ms\.|Mrs\.|Dr\.)\s+/i, '')

  return avatarText(cleanName)
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <div class="d-flex align-center gap-3 mb-5">
      <VRow>
        <VCol cols="12" md="8">
          <h4 class="text-h4 font-weight-medium text-high-emphasis">
            Student
          </h4>
          <p class="mb-0 text-body-1 text-medium-emphasis">
            Check your related student based on your active class
          </p>
        </VCol>
      </VRow>
    </div>

    <!-- UiTableView Component -->
    <UiTableView
      v-model:activeTab="activeTab"
      title=""
      :tabs="tabs"
      :headers="headers"
      :items="filteredItems"
      @reset-filters="resetFilters"
    >
      <!-- Filters slot -->
      <template #filters>
        <div style="width: 250px">
          <VTextField
            v-model="searchQuery"
            placeholder="Search student..."
            prepend-inner-icon="ri-search-line"
            clearable
            hide-details
            density="compact"
            variant="outlined"
          />
        </div>
      </template>

      <!-- Custom column: Student Name -->
      <template #item.student="{ item }">
        <div class="d-flex align-center gap-3 py-2">
          <VAvatar
            size="34"
            color="grey-100"
            class="border border-white"
          >
            <span class="text-caption font-weight-medium text-high-emphasis">
              {{ getAvatarText(item.name) }}
            </span>
          </VAvatar>
          <div class="d-flex flex-column">
            <span class="text-body-1 font-weight-medium text-high-emphasis">{{ item.name }}</span>
            <span class="text-body-2 text-medium-emphasis">{{ item.studentId }}</span>
          </div>
        </div>
      </template>

      <!-- Custom column: Course -->
      <template #item.course="{ item }">
        <span class="text-body-1 text-high-emphasis">{{ item.course }}</span>
      </template>

      <!-- Custom column: Session -->
      <template #item.session="{ item }">
        <span class="text-body-1 text-high-emphasis">{{ item.session }}</span>
      </template>

      <!-- Custom column: Action -->
      <template #item.action="{ item }">
        <VBtn
          variant="text"
          color="primary"
          size="small"
          class="me-2"
          @click="handleViewBooks(item)"
        >
          View books
        </VBtn>
        <VTooltip
          text="View Details"
          location="top"
        >
          <template #activator="{ props }">
            <VBtn
              v-bind="props"
              icon="ri-eye-line"
              variant="outlined"
              size="small"
              color="secondary"
              class="action-btn"
              @click="handleViewDetail(item)"
            />
          </template>
        </VTooltip>
      </template>
    </UiTableView>

    <!-- Dialog: View Detail -->
    <VDialog v-model="showDetailDialog" max-width="500">
      <VCard v-if="selectedStudent">
        <VCardTitle class="text-h6 font-weight-medium pa-4 pb-2">
          Student Details
        </VCardTitle>
        <VCardText class="pa-4 pt-2">
          <VList lines="two" class="pa-0">
            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Student Name</VListItemTitle>
              <VListItemSubtitle class="text-body-1 font-weight-medium text-high-emphasis">
                {{ selectedStudent.name }}
              </VListItemSubtitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Student ID</VListItemTitle>
              <VListItemSubtitle class="text-body-1 text-high-emphasis">
                {{ selectedStudent.studentId }}
              </VListItemSubtitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Course</VListItemTitle>
              <VListItemSubtitle class="text-body-1 text-high-emphasis">
                {{ selectedStudent.course }}
              </VListItemSubtitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Session Status</VListItemTitle>
              <VListItemSubtitle class="text-body-1 text-high-emphasis">
                {{ selectedStudent.session }}
              </VListItemSubtitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Classification</VListItemTitle>
              <VListItemSubtitle class="text-body-1 text-high-emphasis">
                {{ tabs.find(t => t.value === selectedStudent?.tab)?.label }}
              </VListItemSubtitle>
            </VListItem>
          </VList>
        </VCardText>
        <VCardActions class="pa-4">
          <VSpacer />
          <VBtn color="primary" variant="flat" @click="showDetailDialog = false">
            Close
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>

<style lang="scss" scoped>
.gap-3 {
  gap: 12px;
}

.action-btn {
  border-color: rgba(var(--v-theme-on-surface), 0.08) !important;
  border-radius: 4px;

  &:hover {
    background-color: rgba(var(--v-theme-on-surface), 0.04);
  }
}
</style>
