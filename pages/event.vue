<script setup lang="ts">
import { computed, ref } from 'vue'
import UiTableView from '@/components/ui/UiTableView.vue'

definePageMeta({
  sidebarRoute: 'event',
})

interface EventItem {
  id: string
  name: string
  students: number
  startDate: string
  endDate: string
  teachers: { name: string; initials: string }[]
  type: 'Trial' | 'Public'
  status: 'Active' | 'Inactive'
}

const teachers = [
  { name: 'Chris Martin', initials: 'CM' },
  { name: 'Ian Gillan', initials: 'IG' },
  { name: 'Nadia Yusuf', initials: 'NY' },
  { name: 'Freddie Brown', initials: 'FB' },
  { name: 'Lina Adi', initials: 'LA' },
  { name: 'Tara Xavier', initials: 'TX' },
  { name: 'Thom Wilson', initials: 'TW' },
  { name: 'Wayan Adi', initials: 'WA' },
  { name: 'Luna Nugraha', initials: 'LN' },
  { name: 'Clara Ananda', initials: 'CA' },
  { name: 'Yuki Tsuno', initials: 'YT' },
]

// Prototype fixtures; no API or persistence.
const events: EventItem[] = [
  { id: 'EVT-001', name: 'Workshop Online Coding Camp 2026', startDate: '2026-06-24', endDate: '2026-07-31', students: 10, teachers: [teachers[0], teachers[1]], type: 'Public', status: 'Active' },
  { id: 'EVT-002', name: 'AI & Machine Learning Bootcamp', startDate: '2026-07-05', endDate: '2026-07-12', students: 15, teachers: [teachers[2], teachers[3]], type: 'Public', status: 'Active' },
  { id: 'EVT-003', name: 'Creative UX/UI Design Workshop', startDate: '2026-08-10', endDate: '2026-08-17', students: 20, teachers: [teachers[4], teachers[1]], type: 'Public', status: 'Active' },
  { id: 'EVT-004', name: 'Data Science Immersive Program', startDate: '2026-09-01', endDate: '2026-09-08', students: 12, teachers: [teachers[5], teachers[6]], type: 'Public', status: 'Inactive' },
  { id: 'EVT-005', name: 'Cybersecurity Fundamentals Course', startDate: '2026-09-15', endDate: '2026-09-22', students: 18, teachers: [teachers[7], teachers[8]], type: 'Public', status: 'Active' },
  { id: 'EVT-006', name: 'Mobile App Development Sprint', startDate: '2026-10-05', endDate: '2026-10-12', students: 14, teachers: [teachers[9], teachers[10]], type: 'Public', status: 'Inactive' },
  { id: 'EVT-007', name: 'Robotics Discovery Trial', startDate: '2026-10-15', endDate: '2026-10-15', students: 8, teachers: [teachers[0], teachers[10]], type: 'Trial', status: 'Active' },
  { id: 'EVT-008', name: 'Scratch Creative Trial', startDate: '2026-10-24', endDate: '2026-10-24', students: 16, teachers: [teachers[1], teachers[4]], type: 'Trial', status: 'Active' },
  { id: 'EVT-009', name: 'Junior Web Creators', startDate: '2026-11-01', endDate: '2026-11-08', students: 22, teachers: [teachers[0], teachers[9]], type: 'Public', status: 'Active' },
  { id: 'EVT-010', name: 'Python Discovery Trial', startDate: '2026-11-14', endDate: '2026-11-14', students: 0, teachers: [teachers[2], teachers[6]], type: 'Trial', status: 'Inactive' },
  { id: 'EVT-011', name: 'Student Project Showcase', startDate: '2026-11-21', endDate: '2026-11-22', students: 36, teachers: [teachers[3], teachers[8]], type: 'Public', status: 'Active' },
  { id: 'EVT-012', name: 'Game Design Trial', startDate: '2026-12-05', endDate: '2026-12-05', students: 12, teachers: [teachers[5], teachers[10]], type: 'Trial', status: 'Active' },
  { id: 'EVT-013', name: 'Family Coding Day', startDate: '2026-12-12', endDate: '2026-12-12', students: 28, teachers: [teachers[7], teachers[9]], type: 'Public', status: 'Active' },
]

const headers = [
  { title: 'Event name', key: 'name', minWidth: 360, sortable: false },
  { title: 'Number of students', key: 'students', minWidth: 200, sortable: false },
  { title: 'Teacher', key: 'teachers', minWidth: 140, sortable: false },
  { title: 'Status', key: 'status', minWidth: 140, sortable: false },
  { title: 'Action', key: 'action', sortable: false, align: 'center' as const, width: 100 },
]

const statusColors = { Active: 'success', Inactive: 'secondary' }
const typeOptions = ['Trial', 'Public']
const orderOptions = [
  { title: 'Newest', value: 'newest' },
  { title: 'Oldest', value: 'oldest' },
]
const searchQuery = ref<string | null>('')
const selectedType = ref<string | null>(null)
const selectedOrder = ref<'newest' | 'oldest' | null>(null)
const hasFilters = computed(() => Boolean(searchQuery.value?.trim() || selectedType.value || selectedOrder.value))
const filteredEvents = computed(() => {
  const query = (searchQuery.value ?? '').trim().toLowerCase()

  return events.filter(event => event.name.toLowerCase().includes(query)
    && (!selectedType.value || event.type === selectedType.value))
    .sort((a, b) => selectedOrder.value === 'newest'
      ? b.startDate.localeCompare(a.startDate)
      : a.startDate.localeCompare(b.startDate))
})

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC',
})

function formatDate(date: string) {
  return dateFormatter.format(new Date(`${date}T00:00:00Z`))
}

function resetFilters() {
  searchQuery.value = ''
  selectedType.value = null
  selectedOrder.value = null
}
useSeoMeta({ title: 'Events', description: 'Manage events and participants.' })
</script>

<template>
  <section>
    <VRow class="mb-6">
      <VCol cols="12">
        <h1 class="text-h4 font-weight-medium text-high-emphasis">Event</h1>
        <p class="text-body-1 text-medium-emphasis mt-1 mb-0">Manage and find academy event data.</p>
      </VCol>
    </VRow>
    <UiTableView
      title=""
      :headers="headers"
      :items="filteredEvents"
      :items-per-page="10"
    >
      <template #filters>
        <VTextField
          v-model="searchQuery"
          label="Search event"
          placeholder="Search event name"
          prepend-inner-icon="ri-search-line"
          clearable
          hide-details
          class="event-filter"
        />
        <VSelect
          v-model="selectedType"
          label="Event type"
          :items="typeOptions"
          clearable
          hide-details
          class="event-filter"
        />
        <VSelect
          v-model="selectedOrder"
          label="Order by"
          :items="orderOptions"
          clearable
          hide-details
          class="event-filter"
        />
      </template>
      <template #filter-actions>
        <VBtn variant="text" :disabled="!hasFilters" @click="resetFilters">
          Reset filter
        </VBtn>
      </template>
      <template #item.name="{ item }">
        <div class="py-4">
          <p class="text-body-1 font-weight-medium text-high-emphasis mb-1">{{ item.name }}</p>
          <p class="text-body-2 text-medium-emphasis mb-0">
            <time :datetime="item.startDate">{{ formatDate(item.startDate) }}</time>
            – <time :datetime="item.endDate">{{ formatDate(item.endDate) }}</time>
          </p>
        </div>
      </template>
      <template #item.students="{ item }">
        {{ item.students }} Students
      </template>
      <template #item.teachers="{ item }">
        <div class="v-avatar-group">
          <VTooltip v-for="teacher in item.teachers" :key="teacher.name" :text="teacher.name" location="top">
            <template #activator="{ props }">
              <VAvatar v-bind="props" color="secondary" variant="tonal" size="36" tabindex="0" :aria-label="teacher.name">
                <span class="text-body-2">{{ teacher.initials }}</span>
              </VAvatar>
            </template>
          </VTooltip>
        </div>
      </template>
      <template #item.status="{ item }">
        <VChip :color="statusColors[item.status as EventItem['status']]" size="small" variant="tonal">
          {{ item.status }}
        </VChip>
      </template>
      <template #item.action="{ item }">
        <VTooltip text="Event detail page is not available yet" location="top">
          <template #activator="{ props }">
            <span v-bind="props" tabindex="0" :aria-label="`Details for ${item.name} are not available yet`">
              <VBtn
                :aria-label="`View ${item.name} — detail page unavailable`"
                icon="ri-eye-line"
                variant="outlined"
                color="secondary"
                size="small"
                class="table-action-button"
                disabled
              />
            </span>
          </template>
        </VTooltip>
      </template>
      <template #no-data>
        <div class="pa-6 text-body-2">
          No events found. Try another name or reset the filters.
        </div>
      </template>
    </UiTableView>

  </section>
</template>

<style scoped lang="scss">
.event-filter {
  flex: 0 1 240px;
  min-inline-size: 0;
}

@media (max-width: 600px) {
  .event-filter {
    flex-basis: 100%;
  }
}
</style>
