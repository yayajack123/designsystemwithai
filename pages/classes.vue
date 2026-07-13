<script setup lang="ts">
import { ref, computed } from 'vue'
import UiTableView from '@/components/ui/UiTableView.vue'

definePageMeta({
  sidebarRoute: 'classes',
})

// Filter states
const searchQuery = ref('')
const selectedBranch = ref<string | null>(null)
const selectedStatus = ref<string | null>(null)
const selectedType = ref<string | null>(null)

// Dropdown options
const branchOptions = [
  'Offline Bali - Renon',
  'Offline Bali - Canggu',
  'Online Jakarta',
  'Offline Bali - Seminyak',
  'Online Surabaya',
  'Offline Bali - Ubud'
]

const statusOptions = ['Active', 'Scheduled', 'Completed']

const typeOptions = [
  'Adaptive Class',
  'Traditional Class',
  'Hybrid Class',
  'Intensive Class'
]

// Table Headers
const headers = computed(() => [
  { title: 'Class Name', key: 'className', sortable: true },
  { title: 'Type', key: 'type', sortable: true },
  { title: 'Room & Schedule', key: 'roomSchedule', sortable: true },
  { title: 'Teachers', key: 'teachers', sortable: false },
  { title: 'Students', key: 'students', sortable: true },
  { title: 'Status', key: 'status', sortable: true },
  { title: 'Action', key: 'action', sortable: false, align: 'center', width: 120 }
])

// Interfaces
interface Teacher {
  initials: string
  name: string
  avatarColor?: string
}

interface ClassItem {
  id: string
  name: string
  branch: string
  type: string
  schedule: string
  detailedSchedule: string
  room: string
  teachers: Teacher[]
  studentsCount: number
  status: 'Active' | 'Scheduled' | 'Completed'
}

// Mock Data (10 rows)
const classes = ref<ClassItem[]>([
  {
    id: '1',
    name: 'DPS-Adaptive-8C',
    branch: 'Offline Bali - Renon',
    type: 'Adaptive Class',
    schedule: '3 times a week',
    detailedSchedule: 'Mon, Wed, Fri • 14:00 - 15:30',
    room: 'Room A - Renon',
    teachers: [
      { initials: 'CM', name: 'Chris Martin', avatarColor: '#E8F5E9' },
      { initials: 'IG', name: 'Ian Gillan', avatarColor: '#FFF3E0' }
    ],
    studentsCount: 5,
    status: 'Active'
  },
  {
    id: '2',
    name: 'DPS-Adaptive-8D',
    branch: 'Offline Bali - Canggu',
    type: 'Adaptive Class',
    schedule: '3 times a week',
    detailedSchedule: 'Mon, Wed, Fri • 16:00 - 17:30',
    room: 'Room B - Canggu',
    teachers: [
      { initials: 'CM', name: 'Chris Martin', avatarColor: '#E8F5E9' },
      { initials: 'FB', name: 'Freddie Mercury', avatarColor: '#E3F2FD' }
    ],
    studentsCount: 8,
    status: 'Active'
  },
  {
    id: '3',
    name: 'DPS-Traditional-10A',
    branch: 'Online Jakarta',
    type: 'Traditional Class',
    schedule: '3 times a week',
    detailedSchedule: 'Tue, Thu, Sat • 09:00 - 10:30',
    room: 'Virtual Classroom 1',
    teachers: [
      { initials: 'CP', name: 'Chris Pratt', avatarColor: '#F3E5F5' },
      { initials: 'IG', name: 'Ian Gillan', avatarColor: '#FFF3E0' }
    ],
    studentsCount: 12,
    status: 'Scheduled'
  },
  {
    id: '4',
    name: 'DPS-Hybrid-7B',
    branch: 'Offline Bali - Seminyak',
    type: 'Hybrid Class',
    schedule: '3 times a week',
    detailedSchedule: 'Mon, Wed, Fri • 10:00 - 11:30',
    room: 'Room C - Seminyak',
    teachers: [
      { initials: 'CM', name: 'Chris Martin', avatarColor: '#E8F5E9' },
      { initials: 'YT', name: 'Yuki Tsuno', avatarColor: '#E0F7FA' }
    ],
    studentsCount: 10,
    status: 'Active'
  },
  {
    id: '5',
    name: 'DPS-Intensive-9C',
    branch: 'Online Surabaya',
    type: 'Intensive Class',
    schedule: '3 times a week',
    detailedSchedule: 'Mon, Wed, Fri • 18:30 - 20:00',
    room: 'Virtual Classroom 2',
    teachers: [
      { initials: 'CP', name: 'Chris Pratt', avatarColor: '#F3E5F5' },
      { initials: 'TW', name: 'Thom Yorke', avatarColor: '#FFEBEE' }
    ],
    studentsCount: 7,
    status: 'Completed'
  },
  {
    id: '6',
    name: 'DPS-Adaptive-6A',
    branch: 'Offline Bali - Ubud',
    type: 'Adaptive Class',
    schedule: '3 times a week',
    detailedSchedule: 'Tue, Thu, Sat • 14:00 - 15:30',
    room: 'Room A - Ubud',
    teachers: [
      { initials: 'CM', name: 'Chris Martin', avatarColor: '#E8F5E9' },
      { initials: 'IG', name: 'Ian Gillan', avatarColor: '#FFF3E0' }
    ],
    studentsCount: 6,
    status: 'Active'
  },
  {
    id: '7',
    name: 'DPS-Traditional-9B',
    branch: 'Offline Bali - Canggu',
    type: 'Traditional Class',
    schedule: '2 times a week',
    detailedSchedule: 'Tue, Thu • 16:00 - 17:30',
    room: 'Room A - Canggu',
    teachers: [
      { initials: 'FB', name: 'Freddie Mercury', avatarColor: '#E3F2FD' }
    ],
    studentsCount: 15,
    status: 'Scheduled'
  },
  {
    id: '8',
    name: 'DPS-Hybrid-8A',
    branch: 'Offline Bali - Seminyak',
    type: 'Hybrid Class',
    schedule: '3 times a week',
    detailedSchedule: 'Mon, Wed, Fri • 13:00 - 14:30',
    room: 'Room B - Seminyak',
    teachers: [
      { initials: 'YT', name: 'Yuki Tsuno', avatarColor: '#E0F7FA' },
      { initials: 'TW', name: 'Thom Yorke', avatarColor: '#FFEBEE' }
    ],
    studentsCount: 9,
    status: 'Active'
  },
  {
    id: '9',
    name: 'DPS-Intensive-10B',
    branch: 'Online Jakarta',
    type: 'Intensive Class',
    schedule: '5 times a week',
    detailedSchedule: 'Mon to Fri • 08:00 - 09:30',
    room: 'Virtual Classroom 3',
    teachers: [
      { initials: 'CP', name: 'Chris Pratt', avatarColor: '#F3E5F5' }
    ],
    studentsCount: 11,
    status: 'Completed'
  },
  {
    id: '10',
    name: 'DPS-Adaptive-7A',
    branch: 'Offline Bali - Renon',
    type: 'Adaptive Class',
    schedule: '3 times a week',
    detailedSchedule: 'Tue, Thu, Sat • 10:00 - 11:30',
    room: 'Room B - Renon',
    teachers: [
      { initials: 'CM', name: 'Chris Martin', avatarColor: '#E8F5E9' },
      { initials: 'YT', name: 'Yuki Tsuno', avatarColor: '#E0F7FA' }
    ],
    studentsCount: 4,
    status: 'Active'
  }
])

// Filter Logic
const filteredItems = computed(() => {
  return classes.value.filter(item => {
    const query = searchQuery.value.toLowerCase().trim()
    const matchesSearch = !query || 
      item.name.toLowerCase().includes(query) ||
      item.branch.toLowerCase().includes(query)
    
    const matchesBranch = !selectedBranch.value || item.branch === selectedBranch.value
    const matchesStatus = !selectedStatus.value || item.status === selectedStatus.value
    const matchesType = !selectedType.value || item.type === selectedType.value
    
    return matchesSearch && matchesBranch && matchesStatus && matchesType
  })
})

// Actions & UI States
const resetFilters = () => {
  searchQuery.value = ''
  selectedBranch.value = null
  selectedStatus.value = null
  selectedType.value = null
}

const getStatusColor = (status: string) => {
  if (status === 'Active') return 'primary'
  if (status === 'Scheduled') return 'info'
  if (status === 'Completed') return 'success'
  return 'secondary'
}

// Dialog States
const showScheduleDialog = ref(false)
const showDetailDialog = ref(false)
const selectedClass = ref<ClassItem | null>(null)

const handleSeeSchedule = (item: ClassItem) => {
  selectedClass.value = item
  showScheduleDialog.value = true
}

const handleViewDetail = (item: ClassItem) => {
  selectedClass.value = item
  showDetailDialog.value = true
}

// Snackbar states
const showSnackbar = ref(false)
const snackbarColor = ref('success')
const snackbarText = ref('')
const toast = (color: string, text: string) => {
  snackbarColor.value = color
  snackbarText.value = text
  showSnackbar.value = true
}
</script>

<template>
  <div>
    <!-- Custom Page Header with h4 typography -->
    <div class="d-flex align-center gap-3 mb-5">
      <VRow>
        <VCol cols="12" md="8">
          <h4 class="text-h4 font-weight-medium text-high-emphasis">
            Class List
          </h4>
          <p class="mb-0 text-body-1 text-medium-emphasis">
            Manage and view all your classes
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
            placeholder="Search class..."
            prepend-inner-icon="ri-search-line"
            clearable
            hide-details
            density="compact"
            variant="outlined"
          />
        </div>
        
        <div style="width: 200px">
          <VSelect
            v-model="selectedBranch"
            label="Branch"
            :items="branchOptions"
            clearable
            hide-details
            density="compact"
            variant="outlined"
          />
        </div>

        <div style="width: 200px">
          <VSelect
            v-model="selectedStatus"
            label="Status"
            :items="statusOptions"
            clearable
            hide-details
            density="compact"
            variant="outlined"
          />
        </div>

        <div style="width: 200px">
          <VSelect
            v-model="selectedType"
            label="Type"
            :items="typeOptions"
            clearable
            hide-details
            density="compact"
            variant="outlined"
          />
        </div>
      </template>

      <!-- Custom column: Class Name -->
      <template #item.className="{ item }">
        <div class="d-flex flex-column py-2">
          <span class="text-body-1 font-weight-medium text-high-emphasis">{{ item.name }}</span>
          <span class="text-body-2 text-medium-emphasis">{{ item.branch }}</span>
        </div>
      </template>

      <!-- Custom column: Type -->
      <template #item.type="{ item }">
        <span class="text-body-1 text-high-emphasis">{{ item.type }}</span>
      </template>

      <!-- Custom column: Room & Schedule -->
      <template #item.roomSchedule="{ item }">
        <div class="d-flex flex-column align-start py-2">
          <span class="text-body-1 text-medium-emphasis mb-1">{{ item.schedule }}</span>
          <VBtn
            variant="text"
            color="primary"
            size="small"
            class="px-0 font-weight-medium text-capitalize"
            density="compact"
            @click="handleSeeSchedule(item)"
          >
            See Schedule
          </VBtn>
        </div>
      </template>

      <!-- Custom column: Teachers -->
      <template #item.teachers="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            v-for="(teacher, idx) in item.teachers"
            :key="idx"
            size="34"
            :color="teacher.avatarColor || 'grey-100'"
            class="border border-white"
            :style="{ 
              marginLeft: Number(idx) > 0 ? '-10px' : '0',
              zIndex: 10 - Number(idx),
              borderWidth: '2px !important'
            }"
          >
            <VTooltip activator="parent" location="top">
              {{ teacher.name }}
            </VTooltip>
            <span class="text-caption font-weight-medium text-high-emphasis">{{ teacher.initials }}</span>
          </VAvatar>
        </div>
      </template>

      <!-- Custom column: Students -->
      <template #item.students="{ item }">
        <span class="text-body-1 text-high-emphasis">{{ item.studentsCount }} Students</span>
      </template>

      <!-- Custom column: Status -->
      <template #item.status="{ item }">
        <VChip
          :color="getStatusColor(item.status)"
          variant="tonal"
          size="small"
          class="font-weight-medium"
        >
          {{ item.status }}
        </VChip>
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

    <!-- Dialog: See Schedule -->
    <VDialog v-model="showScheduleDialog" max-width="400">
      <VCard v-if="selectedClass">
        <VCardTitle class="text-h6 font-weight-medium pa-4 pb-2">
          Class Schedule
        </VCardTitle>
        <VCardText class="pa-4 pt-2">
          <div class="d-flex flex-column gap-3">
            <div>
              <div class="text-caption text-medium-emphasis">Class Name</div>
              <div class="text-body-1 font-weight-medium">{{ selectedClass.name }}</div>
            </div>
            <div>
              <div class="text-caption text-medium-emphasis">Room</div>
              <div class="text-body-1">{{ selectedClass.room }}</div>
            </div>
            <div>
              <div class="text-caption text-medium-emphasis">Schedule</div>
              <div class="text-body-1 font-weight-medium text-primary">
                {{ selectedClass.detailedSchedule }}
              </div>
            </div>
          </div>
        </VCardText>
        <VCardActions class="pa-4">
          <VSpacer />
          <VBtn color="primary" variant="flat" @click="showScheduleDialog = false">
            Close
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Dialog: View Detail -->
    <VDialog v-model="showDetailDialog" max-width="500">
      <VCard v-if="selectedClass">
        <VCardTitle class="text-h6 font-weight-medium pa-4 pb-2">
          Class Details
        </VCardTitle>
        <VCardText class="pa-4 pt-2">
          <VList lines="two" class="pa-0">
            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Class Name</VListItemTitle>
              <VListItemSubtitle class="text-body-1 font-weight-medium text-high-emphasis">
                {{ selectedClass.name }}
              </VListItemSubtitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Branch & Location</VListItemTitle>
              <VListItemSubtitle class="text-body-1 text-high-emphasis">
                {{ selectedClass.branch }}
              </VListItemSubtitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Class Type</VListItemTitle>
              <VListItemSubtitle class="text-body-1 text-high-emphasis">
                {{ selectedClass.type }}
              </VListItemSubtitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Room & Schedule</VListItemTitle>
              <VListItemSubtitle class="text-body-1 text-high-emphasis">
                {{ selectedClass.room }} • {{ selectedClass.detailedSchedule }}
              </VListItemSubtitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Teachers</VListItemTitle>
              <VListItemSubtitle class="text-body-1 text-high-emphasis">
                {{ selectedClass.teachers.map(t => t.name).join(', ') }}
              </VListItemSubtitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Students</VListItemTitle>
              <VListItemSubtitle class="text-body-1 text-high-emphasis">
                {{ selectedClass.studentsCount }} active students
              </VListItemSubtitle>
            </VListItem>

            <VListItem class="px-0">
              <VListItemTitle class="text-caption text-medium-emphasis">Status</VListItemTitle>
              <VListItemSubtitle class="pt-1">
                <VChip
                  :color="getStatusColor(selectedClass.status)"
                  variant="tonal"
                  size="small"
                  class="font-weight-medium"
                >
                  {{ selectedClass.status }}
                </VChip>
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

    <!-- Global Alert Snackbar -->
    <VSnackbar
      v-model="showSnackbar"
      :color="snackbarColor"
      location="top right"
    >
      {{ snackbarText }}
    </VSnackbar>
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
