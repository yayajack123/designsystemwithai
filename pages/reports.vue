<script setup lang="ts">
import { avatarText } from '@core/utils/formatters'

definePageMeta({
  sidebarRoute: 'reports',
})

// ─────────────────────── Types ───────────────────────
interface ReportRow {
  id: string
  studentName: string
  studentId: string
  bookSession: string
  lessonName: string
  className?: string
  date: string
  status: 'not_created' | 'pending'
}

// ─────────────────────── Tab state ───────────────────────
const activeTab = ref('daily-journal')

// ─────────────────────── Mock data: Daily Journal ───────────────────────
const dailyJournalData = ref<ReportRow[]>([
  { id: '1', studentName: 'Cristofer Mango', studentId: 'STD-293012302-12320', bookSession: 'Python Game Dev', lessonName: 'Lesson 4 - Canvas Setup', className: 'DPS-Adaptive-C', date: '2026-02-28', status: 'pending' },
  { id: '2', studentName: 'Jennifer Summers', studentId: 'STD-293012302-12321', bookSession: 'Python Game Dev', lessonName: 'Lesson 4 - Canvas Setup', className: 'DPS-Adaptive-C', date: '2026-02-28', status: 'not_created' },
  { id: '3', studentName: 'Justin Richardson', studentId: 'STD-293012302-12322', bookSession: 'Python Game Dev', lessonName: 'Lesson 4 - Canvas Setup', className: 'DPS-Adaptive-A', date: '2026-03-01', status: 'pending' },
  { id: '4', studentName: 'Nicholas Tanner', studentId: 'STD-293012302-12323', bookSession: 'Python Game Dev', lessonName: 'Lesson 4 - Canvas Setup', className: 'DPS-Adaptive-B', date: '2026-03-01', status: 'not_created' },
  { id: '5', studentName: 'Crystal Mays', studentId: 'STD-293012302-12324', bookSession: 'Python Game Dev', lessonName: 'Lesson 4 - Canvas Setup', className: 'DPS-Adaptive-C', date: '2026-03-02', status: 'pending' },
  { id: '6', studentName: 'Mary Garcia', studentId: 'STD-293012302-12325', bookSession: 'Python Game Dev', lessonName: 'Lesson 4 - Canvas Setup', className: 'DPS-Adaptive-A', date: '2026-03-02', status: 'not_created' },
  { id: '7', studentName: 'Megan Roberts', studentId: 'STD-293012302-12326', bookSession: 'Python Game Dev', lessonName: 'Lesson 4 - Canvas Setup', className: 'DPS-Adaptive-B', date: '2026-03-03', status: 'pending' },
  { id: '8', studentName: 'Joseph Oliver', studentId: 'STD-293012302-12327', bookSession: 'Python Game Dev', lessonName: 'Lesson 4 - Canvas Setup', className: 'DPS-Adaptive-C', date: '2026-03-03', status: 'not_created' },
])

// ─────────────────────── Mock data: Pending Report ───────────────────────
const pendingReportData = ref<ReportRow[]>([
  { id: '9', studentName: 'Cristofer Mango', studentId: 'STD-293012302-12320', bookSession: 'Python Game Dev', lessonName: 'Lesson 4 - Canvas Setup', className: 'DPS-Adaptive-C', date: '2026-02-28', status: 'pending' },
  { id: '10', studentName: 'Justin Richardson', studentId: 'STD-293012302-12322', bookSession: 'Python Game Dev', lessonName: 'Lesson 4 - Canvas Setup', className: 'DPS-Adaptive-A', date: '2026-03-01', status: 'not_created' },
  { id: '11', studentName: 'Crystal Mays', studentId: 'STD-293012302-12324', bookSession: 'Python Game Dev', lessonName: 'Lesson 4 - Canvas Setup', className: 'DPS-Adaptive-C', date: '2026-03-02', status: 'pending' },
  { id: '12', studentName: 'Megan Roberts', studentId: 'STD-293012302-12326', bookSession: 'Python Game Dev', lessonName: 'Lesson 4 - Canvas Setup', className: 'DPS-Adaptive-B', date: '2026-03-03', status: 'not_created' },
  { id: '13', studentName: 'Nicholas Tanner', studentId: 'STD-293012302-12323', bookSession: 'Python Game Dev', lessonName: 'Lesson 4 - Canvas Setup', className: 'DPS-Adaptive-B', date: '2026-03-01', status: 'pending' },
])

// ─────────────────────── Dynamic data source ───────────────────────
const currentData = computed(() =>
  activeTab.value === 'daily-journal' ? dailyJournalData.value : pendingReportData.value
)

// ─────────────────────── Column configs per tab ───────────────────────
const columns = computed(() => {
  const baseColumns = [
    { title: 'Student Name', key: 'student' },
    { title: 'Book / Session', key: 'book' },
    { title: 'Lesson & Class', key: 'lesson' },
    { title: 'Date', key: 'date' },
    { title: 'Status', key: 'status' },
    { title: 'Action', key: 'action', sortable: false, align: 'center' as const, width: '120px' },
  ]

  return baseColumns
})

// ─────────────────────── Tab counts ───────────────────────
const dailyJournalCount = computed(() =>
  dailyJournalData.value.filter(r => r.status === 'pending').length
)
const pendingReportCount = computed(() =>
  pendingReportData.value.length
)

// ─────────────────────── Filter state ───────────────────────
const searchQuery = ref('')
const selectedClass = ref('All Classes')
const viewType = ref('list')

// Derive class options from both datasets
const classOptions = computed(() => {
  const allItems = currentData.value
  const classes = allItems
    .map(i => i.className)
    .filter((c): c is string => !!c && c !== '-')

  return ['All Classes', ...new Set(classes)]
})

const resetFilter = () => {
  searchQuery.value = ''
  selectedClass.value = 'All Classes'
}

const hasActiveFilter = computed(() =>
  searchQuery.value !== '' || selectedClass.value !== 'All Classes'
)

// ─────────────────────── Filtered data ───────────────────────
const filteredData = computed(() => {
  return currentData.value.filter(item => {
    const matchesSearch =
      item.studentName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.studentId.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.bookSession.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesClass =
      selectedClass.value === 'All Classes' || item.className === selectedClass.value

    return matchesSearch && matchesClass
  })
})

// ─────────────────────── Loading skeleton ───────────────────────
const isLoading = ref(false)

// Simulate initial loading
const initialLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    initialLoading.value = false
  }, 800)
})

// ─────────────────────── Helpers ───────────────────────
const statusLabel = (status: 'not_created' | 'pending') => {
  if (status === 'not_created') return 'Not Created'
  return 'Pending'
}

const statusColor = (status: 'not_created' | 'pending') => {
  if (status === 'not_created') return 'secondary'
  return 'warning'
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// ─────────────────────── Pagination ───────────────────────
const itemsPerPage = ref(5)
const currentPage = ref(1)

// Reset page on filter / tab change
watch([activeTab, searchQuery, selectedClass], () => {
  currentPage.value = 1
})

// ─────────────────────── View icons ───────────────────────
const viewIcons: Record<string, string> = {
  list: 'ri-list-unordered',
  student: 'ri-team-line',
  class: 'ri-door-closed-line',
}
</script>

<template>
  <section>
    <!-- Page Header -->
    <div class="mb-5">
      <h4 class="text-h4 font-weight-medium text-high-emphasis">
        Reports
      </h4>
      <p class="text-body-1 text-medium-emphasis mb-0">
        Pending daily journals and student reports
      </p>
    </div>

    <!-- Navigation Tabs -->
    <VTabs
      v-model="activeTab"
      class="v-tabs-bordered mb-6"
    >
      <VTab value="daily-journal">
        <VIcon
          start
          icon="ri-file-list-3-line"
          class="me-2"
        />
        Pending Daily Journal
        <span class="count-badge ms-2 bg-error text-white">
          20
        </span>
      </VTab>
      <VTab value="pending-report">
        <VIcon
          start
          icon="ri-bar-chart-2-line"
          class="me-2"
        />
        Pending Report
        <span class="count-badge ms-2 bg-secondary text-white">
          15
        </span>
      </VTab>
    </VTabs>

    <!-- Main Card View -->
    <VCard>
      <!-- Filter Bar -->
      <VCardText class="d-flex align-center justify-space-between flex-wrap gap-4 py-4">
        <div class="d-flex align-center flex-wrap gap-4 flex-grow-1">
          <div style="width: 240px">
            <VTextField
              v-model="searchQuery"
              placeholder="Search student"
              prepend-inner-icon="ri-search-line"
              clearable
              hide-details
              density="compact"
              variant="outlined"
            />
          </div>

          <div style="width: 240px">
            <VSelect
              v-model="selectedClass"
              label="Class"
              placeholder="All Classes"
              :items="classOptions"
              clearable
              hide-details
              density="compact"
              variant="outlined"
            />
          </div>

          <VBtn
            variant="text"
            color="primary"
            :disabled="!hasActiveFilter"
            @click="resetFilter"
          >
            Reset Filter
          </VBtn>
        </div>

        <!-- View Toggle -->
        <VBtnToggle
          v-model="viewType"
          mandatory
          class="custom-toggle-group"
        >
          <VBtn
            value="list"
            :icon="viewIcons.list"
          />
          <VBtn
            value="student"
            :icon="viewIcons.student"
          />
          <VBtn
            value="class"
            :icon="viewIcons.class"
          />
        </VBtnToggle>
      </VCardText>

      <VDivider />

      <!-- Loading State -->
      <template v-if="initialLoading">
        <div class="pa-6">
          <VSkeletonLoader
            v-for="n in 3"
            :key="n"
            type="table-row-divider@4"
            class="mb-2"
          />
        </div>
      </template>

      <!-- Empty State -->
      <template v-else-if="filteredData.length === 0">
        <div class="py-12 text-center text-medium-emphasis d-flex flex-column align-center ga-2">
          <VIcon
            icon="ri-file-search-line"
            size="48"
            color="disabled"
          />
          <p class="text-body-1 mt-2 mb-0">
            No matching reports found.
          </p>
          <VBtn
            v-if="hasActiveFilter"
            variant="text"
            color="primary"
            @click="resetFilter"
          >
            Clear filters
          </VBtn>
        </div>
      </template>

      <!-- List View -->
      <template v-else-if="viewType === 'list'">
        <VDataTable
          v-model:page="currentPage"
          v-model:items-per-page="itemsPerPage"
          :headers="columns"
          :items="filteredData"
          :items-per-page-options="[5, 10, 20]"
          class="text-no-wrap report-table"
        >
          <!-- Student Name with Avatar -->
          <template #item.student="{ item }">
            <div class="d-flex align-center py-2">
              <VAvatar
                size="34"
                class="me-3"
                color="grey-50"
              >
                <span class="text-caption font-weight-medium">{{ avatarText(item.studentName) }}</span>
              </VAvatar>
              <div class="d-flex flex-column">
                <span class="text-body-1 font-weight-medium text-high-emphasis">{{ item.studentName }}</span>
                <span class="text-body-2 text-medium-emphasis">{{ item.studentId }}</span>
              </div>
            </div>
          </template>

          <!-- Book / Session -->
          <template #item.book="{ item }">
            <span class="text-body-1 text-high-emphasis">{{ item.bookSession }}</span>
          </template>

          <!-- Lesson & Class (two lines) -->
          <template #item.lesson="{ item }">
            <div class="d-flex flex-column py-2">
              <NuxtLink
                :to="'#'"
                class="text-primary text-decoration-underline font-weight-medium text-body-1"
              >
                {{ item.lessonName }}
              </NuxtLink>
              <span class="text-body-2 text-medium-emphasis">{{ item.className || '-' }}</span>
            </div>
          </template>

          <!-- Date -->
          <template #item.date="{ item }">
            <span class="text-body-1 text-high-emphasis">{{ formatDate(item.date) }}</span>
          </template>

          <!-- Status Badge -->
          <template #item.status="{ item }">
            <VChip
              :color="statusColor(item.status)"
              variant="tonal"
              size="small"
              class="font-weight-medium"
            >
              {{ statusLabel(item.status) }}
            </VChip>
          </template>

          <!-- Action Buttons -->
          <template #item.action="{ item }">
            <div class="d-flex justify-center gap-2">
              <!-- Edit button (always shown) -->
              <VTooltip
                text="Edit"
                location="top"
              >
                <template #activator="{ props }">
                  <VBtn
                    v-bind="props"
                    icon="ri-pencil-line"
                    variant="outlined"
                    size="small"
                    class="action-btn"
                    color="secondary"
                  />
                </template>
              </VTooltip>

              <!-- Play / Review button (only for pending) -->
              <VTooltip
                v-if="item.status === 'pending'"
                text="Start Review"
                location="top"
              >
                <template #activator="{ props }">
                  <VBtn
                    v-bind="props"
                    icon="ri-play-circle-line"
                    color="primary"
                    variant="outlined"
                    size="small"
                    class="action-btn"
                  />
                </template>
              </VTooltip>
            </div>
          </template>

          <template #no-data>
            <div class="py-6 text-center text-medium-emphasis">
              No records found.
            </div>
          </template>
        </VDataTable>
      </template>

    </VCard>
  </section>
</template>

<style lang="scss" scoped>
.count-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 500px;
  padding: 2px 8px;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
  min-width: 24px;
  height: 18px;
}

.action-btn {
  border-color: rgba(var(--v-theme-on-surface), 0.08) !important;
  border-radius: 4px;

  &:hover {
    background-color: rgba(var(--v-theme-on-surface), 0.04);
  }
}

// Custom toggle group matching assessments.vue style
:deep(.custom-toggle-group) {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.12) !important;
  border-radius: 8px !important;
  padding: 7px !important;
  background-color: rgb(var(--v-theme-surface)) !important;
  height: 50px !important;
  align-items: center;
  display: inline-flex;
  box-shadow: none !important;

  .v-btn {
    border-radius: 4px !important;
    height: 36px !important;
    min-width: 36px !important;
    width: 36px !important;
    margin: 0 !important;
    border: none !important;
    background-color: transparent !important;
    color: rgba(var(--v-theme-on-surface), 0.7) !important;
    box-shadow: none !important;

    &.v-btn--active {
      background-color: rgba(var(--v-theme-on-surface), 0.08) !important;
      color: rgba(var(--v-theme-on-surface), 0.9) !important;

      .v-btn__overlay {
        opacity: 0 !important;
      }
    }

    &:not(.v-btn--active):hover {
      background-color: rgba(var(--v-theme-on-surface), 0.04) !important;
    }
  }

  &.v-btn-group--divided .v-btn:not(:last-child) {
    border-inline-end-color: transparent !important;
  }
}

// Page size select styling
:deep(.page-size-select) {
  max-width: 70px;

  .v-field {
    box-shadow: none !important;
  }

  .v-field__overlay {
    display: none;
  }
}

// Responsive: allow horizontal scroll on table for tablet
:deep(.report-table) {
  @media (max-width: 959px) {
    overflow-x: auto;
    display: block;

    .v-data-table__wrapper {
      overflow-x: auto;
    }
  }
}
</style>
