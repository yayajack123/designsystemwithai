<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import UiTableView from '@/components/ui/UiTableView.vue'

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
  { title: 'ACTION', key: 'action', sortable: false, align: 'center', width: 120 },
])

// Interfaces
interface StudentItem {
  id: string
  name: string
  studentId: string
  course: string
  session: string
  tab: 'my-student' | 'homeroom-student' | 'replacement-student' | 'events-student'
}

// Mock Data
const students = ref<StudentItem[]>([
  // My Student tab (10 rows for pagination testing)
  {
    id: '1',
    name: 'Cristofer Mango',
    studentId: 'STD-20091032-001',
    course: 'Python Game Dev',
    session: '1 Active',
    tab: 'my-student'
  },
  {
    id: '2',
    name: 'Jennifer Summers',
    studentId: 'STD-20091032-001',
    course: 'Web Developer',
    session: '1 Active',
    tab: 'my-student'
  },
  {
    id: '3',
    name: 'Mr. Justin Richardson',
    studentId: 'STD-20091032-001',
    course: 'IoT Kids',
    session: '1 Active',
    tab: 'my-student'
  },
  {
    id: '4',
    name: 'Nicholas Tanner',
    studentId: 'STD-20091032-001',
    course: 'Web Developer',
    session: '1 Active',
    tab: 'my-student'
  },
  {
    id: '5',
    name: 'Crystal Mays',
    studentId: 'STD-20091032-001',
    course: 'Web Developer',
    session: '1 Active',
    tab: 'my-student'
  },
  {
    id: '6',
    name: 'Alexander Hamilton',
    studentId: 'STD-20091032-002',
    course: 'Python Game Dev',
    session: '2 Active',
    tab: 'my-student'
  },
  {
    id: '7',
    name: 'Eliza Schuyler',
    studentId: 'STD-20091032-003',
    course: 'IoT Kids',
    session: '1 Active',
    tab: 'my-student'
  },
  {
    id: '8',
    name: 'Angelica Schuyler',
    studentId: 'STD-20091032-004',
    course: 'Web Developer',
    session: '1 Active',
    tab: 'my-student'
  },
  {
    id: '9',
    name: 'Peggy Schuyler',
    studentId: 'STD-20091032-005',
    course: 'Python Game Dev',
    session: '1 Active',
    tab: 'my-student'
  },
  {
    id: '10',
    name: 'Aaron Burr',
    studentId: 'STD-20091032-006',
    course: 'Web Developer',
    session: '2 Active',
    tab: 'my-student'
  },

  // Homeroom Student tab
  {
    id: '11',
    name: 'Thomas Jefferson',
    studentId: 'STD-20091032-007',
    course: 'Python Game Dev',
    session: '1 Active',
    tab: 'homeroom-student'
  },
  {
    id: '12',
    name: 'James Madison',
    studentId: 'STD-20091032-008',
    course: 'IoT Kids',
    session: '1 Active',
    tab: 'homeroom-student'
  },
  {
    id: '13',
    name: 'George Washington',
    studentId: 'STD-20091032-009',
    course: 'Web Developer',
    session: '2 Active',
    tab: 'homeroom-student'
  },

  // Replacement Student tab (exactly 1 row to match the count 1)
  {
    id: '14',
    name: 'Marquis de Lafayette',
    studentId: 'STD-20091032-010',
    course: 'Python Game Dev',
    session: '1 Active',
    tab: 'replacement-student'
  },

  // Event’s Student tab
  {
    id: '15',
    name: 'Hercules Mulligan',
    studentId: 'STD-20091032-011',
    course: 'IoT Kids',
    session: '3 Active',
    tab: 'events-student'
  }
])

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

const handleViewDetail = (item: StudentItem) => {
  router.push({ path: '/student-detail', query: { id: item.id } })
}

// Extract initials for avatars safely
const getInitials = (name: string) => {
  const cleanName = name.replace(/^(Mr\.|Ms\.|Mrs\.|Dr\.)\s+/i, '')
  return cleanName
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
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
              {{ getInitials(item.name) }}
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
