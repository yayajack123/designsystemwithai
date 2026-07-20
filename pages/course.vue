<script setup lang="ts">
import { ref, computed } from 'vue'
import UiTableView from '@/components/ui/UiTableView.vue'

definePageMeta({
  sidebarRoute: 'course',
})

// Filter states
const searchQuery = ref('')
const selectedSubject = ref<string | null>(null)
const selectedLearningPath = ref<string | null>(null)

// Dropdown options
const subjectOptions = [
  'Coding',
  'Skill Lab',
  'Debug Zone',
  'Creative Hub',
  'Analytics Arena'
]

const learningPathOptions = [
  'Adaptive Class',
  'Interactive Workshop',
  'Project Sprint',
  'Insight Session'
]

// Table Headers
const headers = computed(() => [
  { title: 'Course & Subject', key: 'course', sortable: true },
  { title: 'Learning Path', key: 'learningPath', sortable: true },
  { title: 'Created At', key: 'createdAt', sortable: true },
  { title: 'Action', key: 'action', sortable: false, align: 'center', width: 120 }
])

// Interfaces
interface CourseItem {
  id: string
  name: string
  subject: string
  learningPath: string
  createdAt: string
}

// Mock Data (13 rows matching figma total)
const courses = ref<CourseItem[]>([
  {
    id: '1',
    name: 'AI Workshop',
    subject: 'Coding',
    learningPath: 'Adaptive Class',
    createdAt: '24 Mar 2026'
  },
  {
    id: '2',
    name: 'AI Buddy',
    subject: 'Skill Lab',
    learningPath: 'Adaptive Class',
    createdAt: '24 Mar 2026'
  },
  {
    id: '3',
    name: 'Code Companion',
    subject: 'Debug Zone',
    learningPath: 'Interactive Workshop',
    createdAt: '25 Mar 2026'
  },
  {
    id: '4',
    name: 'Design Guru',
    subject: 'Creative Hub',
    learningPath: 'Project Sprint',
    createdAt: '26 Mar 2026'
  },
  {
    id: '5',
    name: 'Data Whisperer',
    subject: 'Analytics Arena',
    learningPath: 'Insight Session',
    createdAt: '27 Mar 2026'
  },
  {
    id: '6',
    name: 'Web Dev Starter',
    subject: 'Coding',
    learningPath: 'Interactive Workshop',
    createdAt: '28 Mar 2026'
  },
  {
    id: '7',
    name: 'Mobile App Basics',
    subject: 'Coding',
    learningPath: 'Project Sprint',
    createdAt: '29 Mar 2026'
  },
  {
    id: '8',
    name: 'UX/UI Foundations',
    subject: 'Creative Hub',
    learningPath: 'Adaptive Class',
    createdAt: '30 Mar 2026'
  },
  {
    id: '9',
    name: 'Database Architectures',
    subject: 'Debug Zone',
    learningPath: 'Insight Session',
    createdAt: '31 Mar 2026'
  },
  {
    id: '10',
    name: 'Math for AI',
    subject: 'Skill Lab',
    learningPath: 'Adaptive Class',
    createdAt: '01 Apr 2026'
  },
  {
    id: '11',
    name: 'Robotics Lab',
    subject: 'Coding',
    learningPath: 'Project Sprint',
    createdAt: '02 Apr 2026'
  },
  {
    id: '12',
    name: 'Creative Writing',
    subject: 'Creative Hub',
    learningPath: 'Interactive Workshop',
    createdAt: '03 Apr 2026'
  },
  {
    id: '13',
    name: 'Data Visualization',
    subject: 'Analytics Arena',
    learningPath: 'Insight Session',
    createdAt: '04 Apr 2026'
  }
])

// Filter Logic
const filteredItems = computed(() => {
  return courses.value.filter(item => {
    const query = searchQuery.value.toLowerCase().trim()
    const matchesSearch = !query || 
      item.name.toLowerCase().includes(query) ||
      item.subject.toLowerCase().includes(query)
    
    const matchesSubject = !selectedSubject.value || item.subject === selectedSubject.value
    const matchesLearningPath = !selectedLearningPath.value || item.learningPath === selectedLearningPath.value
    
    return matchesSearch && matchesSubject && matchesLearningPath
  })
})

// Actions & UI States
const resetFilters = () => {
  searchQuery.value = ''
  selectedSubject.value = null
  selectedLearningPath.value = null
}

// Dialog States
const showDetailDialog = ref(false)
const selectedCourse = ref<CourseItem | null>(null)

const handleViewDetail = (item: CourseItem) => {
  selectedCourse.value = item
  showDetailDialog.value = true
}
</script>

<template>
  <div>
    <!-- Custom Page Header with h4 typography -->
    <div class="d-flex align-center gap-3 mb-5">
      <VRow>
        <VCol cols="12" md="8">
          <h4 class="text-h4 font-weight-medium text-high-emphasis">
            Course
          </h4>
          <p class="mb-0 text-body-1 text-medium-emphasis">
            Manage and find all course data
          </p>
        </VCol>
      </VRow>
    </div>

    <UiTableView
      title=""
      :headers="headers"
      :items="filteredItems"
      @reset-filters="resetFilters"
    >
      <!-- Filters slot -->
      <template #filters>
        <div style="width: 240px">
          <VTextField
            v-model="searchQuery"
            placeholder="Search course..."
            prepend-inner-icon="ri-search-line"
            clearable
            hide-details
            density="compact"
            variant="outlined"
          />
        </div>
        
        <div style="width: 200px">
          <VSelect
            v-model="selectedSubject"
            label="Subject"
            :items="subjectOptions"
            clearable
            hide-details
            density="compact"
            variant="outlined"
          />
        </div>

        <div style="width: 200px">
          <VSelect
            v-model="selectedLearningPath"
            label="Learning Path"
            :items="learningPathOptions"
            clearable
            hide-details
            density="compact"
            variant="outlined"
          />
        </div>
      </template>

      <!-- Custom column: Course & Subject -->
      <template #item.course="{ item }">
        <div class="d-flex flex-column py-2">
          <span class="text-body-1 font-weight-medium text-high-emphasis">{{ item.name }}</span>
          <span class="text-body-2 text-medium-emphasis">{{ item.subject }}</span>
        </div>
      </template>

      <!-- Custom column: Learning Path -->
      <template #item.learningPath="{ item }">
        <span class="text-body-1 text-high-emphasis">{{ item.learningPath }}</span>
      </template>

      <!-- Custom column: Created At -->
      <template #item.createdAt="{ item }">
        <span class="text-body-1 text-high-emphasis">{{ item.createdAt }}</span>
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
      <VCard v-if="selectedCourse">
        <VCardTitle class="text-h6 font-weight-medium pa-4 pb-2">
          Course Details
        </VCardTitle>
        <VCardText class="pa-4 pt-2">
          <VList lines="two" class="pa-0">
            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Course Name</VListItemTitle>
              <VListItemSubtitle class="text-body-1 font-weight-medium text-high-emphasis">
                {{ selectedCourse.name }}
              </VListItemSubtitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Subject</VListItemTitle>
              <VListItemSubtitle class="text-body-1 text-high-emphasis">
                {{ selectedCourse.subject }}
              </VListItemSubtitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Learning Path</VListItemTitle>
              <VListItemSubtitle class="text-body-1 text-high-emphasis">
                {{ selectedCourse.learningPath }}
              </VListItemSubtitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Created At</VListItemTitle>
              <VListItemSubtitle class="text-body-1 text-high-emphasis">
                {{ selectedCourse.createdAt }}
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
