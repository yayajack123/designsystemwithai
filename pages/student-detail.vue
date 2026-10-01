<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import UiTableView from '@/components/ui/UiTableView.vue'
import { studentRecords } from '@/data/students'
import { booksForStudent, type BookStatus } from '@/data/studentBooks'
import { sessionsForStudent, sessionBook, formatSessionDate } from '@/data/studentSessions'
import { historiesForSession } from '@/data/studentHistory'
import { avatarText } from '@core/utils/formatters'

definePageMeta({
  sidebarRoute: 'students',
})

const route = useRoute()
const router = useRouter()
type StudentTab = 'details' | 'session' | 'books'
const validTab = (value: unknown): StudentTab => value === 'books' || value === 'session' ? value : 'details'
const activeTab = ref<StudentTab>(validTab(route.query.tab))
watch(() => route.query.tab, value => { activeTab.value = validTab(value) })
const selectTab = (tab: StudentTab) => router.replace({ query: { ...route.query, tab } })
const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref<'success' | 'error'>('success')
const sessionPage = ref(1)
const sessionsPerPage = 10
const allSessions = computed(() => sessionsForStudent(selectedStudent.value?.id || ''))
const visibleSessions = computed(() => allSessions.value.slice(
  (sessionPage.value - 1) * sessionsPerPage,
  sessionPage.value * sessionsPerPage,
))
const sessionPageCount = computed(() => Math.ceil(allSessions.value.length / sessionsPerPage))
watch(() => route.query.id, () => { sessionPage.value = 1 })
const bookSearch = ref('')
const bookStatus = ref<'all' | BookStatus>('all')
const bookHeaders = [
  { title: 'Book', key: 'title' },
  { title: 'Session', key: 'session' },
  { title: 'Status', key: 'status' },
  { title: 'Last updated', key: 'updatedAt' },
]
const selectedStudent = computed(() => studentRecords.find(item => item.id === route.query.id))
const allBooks = computed(() => booksForStudent(selectedStudent.value?.id || ''))
const filteredBooks = computed(() => allBooks.value.filter(book =>
  (bookStatus.value === 'all' || book.status === bookStatus.value)
  && book.title.toLowerCase().includes(bookSearch.value.trim().toLowerCase()),
))
const resetBookFilters = () => { bookSearch.value = ''; bookStatus.value = 'all' }
const bookStatusColor = (status: BookStatus) => status === 'Completed' ? 'success' : status === 'Incomplete' ? 'warning' : 'secondary'

// Student details data model
const student = computed(() => ({
  id: selectedStudent.value?.id || '',
  name: selectedStudent.value?.name || 'Student unavailable',
  initials: avatarText(selectedStudent.value?.name || 'Student'),
  countryFlag: selectedStudent.value?.id === '1' ? '🇮🇩' : '',
  countryName: selectedStudent.value?.id === '1' ? 'Indonesia' : '',
  username: selectedStudent.value?.studentId || '-',
  branch: selectedStudent.value?.id === '1' ? 'Philipine ASIA' : '-',
  fullname: selectedStudent.value?.name || 'Student unavailable',
  nickname: selectedStudent.value?.name.split(' ')[0] || '-',
  birthday: selectedStudent.value?.id === '1' ? 'January 28, 2022' : '-',
  age: selectedStudent.value?.id === '1' ? '11' : '-',
  gender: selectedStudent.value?.id === '1' ? 'Male' : '-',
  phoneNumber: selectedStudent.value?.id === '1' ? '08918298392' : '-',
  school: '-',
  status: selectedStudent.value?.id === '1' ? 'Active' : '-',
  startDate: selectedStudent.value?.id === '1' ? 'Oct 11, 2023' : '-',
  course: selectedStudent.value?.course || '-',
}))

const copyUsername = async () => {
  try {
    await navigator.clipboard.writeText(student.value.username)
    snackbarText.value = 'Username copied to clipboard!'
    snackbarColor.value = 'success'
    snackbar.value = true
  } catch (err) {
    // Fallback if clipboard API fails
    snackbarText.value = `Username: ${student.value.username}`
    snackbar.value = true
  }
}

const copySessionCode = async (code: string) => {
  try {
    await navigator.clipboard.writeText(code)
    snackbarText.value = 'Session ID copied.'
    snackbarColor.value = 'success'
  } catch {
    snackbarText.value = 'Could not copy session ID.'
    snackbarColor.value = 'error'
  }
  snackbar.value = true
}
</script>

<template>
  <div class="student-detail-page">
    <VAlert v-if="!selectedStudent" type="warning" variant="tonal" class="mb-6">
      Student not found. Return to Students and select a valid profile.
    </VAlert>
    <template v-else>
    <!-- Header Section -->
    <div class="d-flex align-center gap-4 mb-4">
      <VBtn
        icon="ri-arrow-left-line"
        variant="outlined"
        color="secondary"
        size="small"
        class="back-btn"
        :to="{ name: 'students' }"
      />

      <div class="d-flex align-center gap-3">
        <VAvatar
          size="34"
          color="#F0EFF0"
          class="student-avatar"
        >
          <span class="text-body-1 font-weight-regular text-high-emphasis">
            {{ student.initials.slice(0, 2) }}
          </span>
        </VAvatar>

        <div class="d-flex flex-column">
          <h1 class="student-name text-h6 font-weight-medium mb-0">
            {{ student.fullname }}
          </h1>
          <span class="student-country text-caption text-medium-emphasis">
            {{ student.countryFlag }} {{ student.countryName }}
          </span>
        </div>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="custom-tabs-container mb-6">
      <div class="d-flex gap-2 border-b">
        <button
          class="custom-tab-btn"
          :class="{ active: activeTab === 'details' }"
          @click="selectTab('details')"
        >
          Student Details
        </button>
        <button
          class="custom-tab-btn"
          :class="{ active: activeTab === 'session' }"
          @click="selectTab('session')"
        >
          Session
        </button>
        <button
          class="custom-tab-btn"
          :class="{ active: activeTab === 'books' }"
          @click="selectTab('books')"
        >
          Books
        </button>
      </div>
    </div>

    <!-- Main Content Area -->
    <div v-if="activeTab === 'details'">
      <VRow>
        <!-- Left Column: Basic Info -->
        <VCol
          cols="12"
          md="8"
          lg="8"
        >
          <VCard
            variant="outlined"
            class="detail-card pa-6 pb-3"
          >
            <!-- Card Title -->
            <div class="d-flex align-center gap-3 mb-3">
              <div class="icon-wrapper">
                <VIcon
                  icon="ri-contacts-line"
                  color="primary"
                  size="20"
                />
              </div>
              <h2 class="card-title text-h6 font-weight-medium mb-0">
                Basic Info
              </h2>
            </div>

            <!-- Data List -->
            <div class="basic-info-list pl-md-11">
              <!-- Item: Username -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Username
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.username }}
                </div>
                <VBtn
                  icon="ri-checkbox-multiple-blank-line"
                  variant="text"
                  density="compact"
                  color="secondary"
                  size="small"
                  class="copy-btn"
                  @click="copyUsername"
                >
                  <VIcon icon="ri-checkbox-multiple-blank-line" size="18" />
                  <VTooltip activator="parent" location="top">
                    Copy Username
                  </VTooltip>
                </VBtn>
              </div>
              <VDivider class="my-0" />

              <!-- Item: Branch -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Branch
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.branch }}
                </div>
              </div>
              <VDivider class="my-0" />

              <!-- Item: Fullname -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Fullname
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.fullname }}
                </div>
              </div>
              <VDivider class="my-0" />

              <!-- Item: Nickname -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Nickname
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.nickname }}
                </div>
              </div>
              <VDivider class="my-0" />

              <!-- Item: Birthday -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Birthday
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.birthday }}
                </div>
              </div>
              <VDivider class="my-0" />

              <!-- Item: Age -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Age
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.age }}
                </div>
              </div>
              <VDivider class="my-0" />

              <!-- Item: Gender -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Gender
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.gender }}
                </div>
              </div>
              <VDivider class="my-0" />

              <!-- Item: Phone number -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Phone number
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.phoneNumber }}
                </div>
              </div>
              <VDivider class="my-0" />

              <!-- Item: School -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  School
                </div>
                <div class="info-value flex-grow-1 font-weight-regular text-secondary-emphasis">
                  {{ student.school }}
                </div>
              </div>
            </div>
          </VCard>
        </VCol>

        <!-- Right Column: Settings -->
        <VCol
          cols="12"
          md="4"
          lg="4"
        >
          <VCard
            variant="outlined"
            class="detail-card pa-6"
          >
            <!-- Card Title -->
            <div class="d-flex align-center gap-3 mb-6">
              <div class="icon-wrapper">
                <VIcon
                  icon="ri-settings-2-line"
                  color="primary"
                  size="20"
                />
              </div>
              <h2 class="card-title text-h6 font-weight-medium mb-0">
                Settings
              </h2>
            </div>

            <!-- Settings Fields -->
            <div class="settings-list d-flex flex-column gap-5">
              <!-- Field: Student status -->
              <div class="settings-item">
                <div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1">
                  Student status
                </div>
                <div class="d-flex align-center gap-2">
                  <span class="status-dot green-dot" />
                  <span class="settings-value text-body-1 text-high-emphasis">
                    {{ student.status }}
                  </span>
                </div>
              </div>

              <!-- Field: Country -->
              <div class="settings-item">
                <div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1">
                  Country
                </div>
                <div class="settings-value text-body-1 text-high-emphasis">
                  {{ student.countryName }}
                </div>
              </div>

              <!-- Field: Start Date -->
              <div class="settings-item">
                <div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1">
                  Start Date
                </div>
                <div class="settings-value text-body-1 text-high-emphasis">
                  {{ student.startDate }}
                </div>
              </div>

              <!-- Field: Course -->
              <div class="settings-item">
                <div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1">
                  Course
                </div>
                <div class="settings-value text-body-1 text-high-emphasis">
                  {{ student.course }}
                </div>
              </div>
            </div>
          </VCard>
        </VCol>
      </VRow>
    </div>

    <div v-else-if="activeTab === 'books'">
      <div class="mb-4">
        <h2 class="text-h5 font-weight-medium text-high-emphasis mb-1">Books</h2>
        <p class="text-body-2 text-medium-emphasis mb-0">Book history across all sessions for {{ student.fullname }}.</p>
      </div>
      <UiTableView
        title=""
        :headers="bookHeaders"
        :items="filteredBooks"
        :mobile-cards="true"
        :items-per-page="-1"
        :hide-pagination="true"
        @reset-filters="resetBookFilters"
      >
        <template #filters>
          <VTextField
            v-model="bookSearch"
            label="Search books"
            prepend-inner-icon="ri-search-line"
            density="compact"
            variant="outlined"
            hide-details
            clearable
            class="book-filter"
          />
          <VSelect
            v-model="bookStatus"
            label="Status"
            :items="[
              { title: 'All statuses', value: 'all' },
              { title: 'Completed', value: 'Completed' },
              { title: 'Incomplete', value: 'Incomplete' },
              { title: 'Idle', value: 'Idle' },
            ]"
            density="compact"
            variant="outlined"
            hide-details
            class="book-filter"
          />
        </template>
        <template #item.title="{ item }">
          <span class="font-weight-medium text-high-emphasis">{{ item.title }}</span>
        </template>
        <template #item.status="{ item }">
          <VChip :color="bookStatusColor(item.status)" variant="tonal" size="small">{{ item.status }}</VChip>
        </template>
        <template #item.updatedAt="{ item }">
          {{ item.updatedAt }}
        </template>
        <template #no-data>
          <div class="pa-8 text-center text-body-2 text-medium-emphasis">
            {{ allBooks.length ? 'No books match these filters.' : 'No book history for this student yet.' }}
          </div>
        </template>
        <template #mobile-cards="{ items }">
          <div v-if="items.length" class="pa-4 d-flex flex-column gap-3">
            <VCard v-for="book in items" :key="book.id" variant="outlined" class="pa-4">
              <div class="d-flex align-start justify-space-between gap-3 mb-2">
                <h3 class="text-body-1 font-weight-medium text-high-emphasis mb-0">{{ book.title }}</h3>
                <VChip :color="bookStatusColor(book.status)" variant="tonal" size="small">{{ book.status }}</VChip>
              </div>
              <p class="text-body-2 text-medium-emphasis mb-0">{{ book.session }} · Updated {{ book.updatedAt }}</p>
            </VCard>
          </div>
          <p v-else class="pa-8 text-center text-body-2 text-medium-emphasis mb-0">
            {{ allBooks.length ? 'No books match these filters.' : 'No book history for this student yet.' }}
          </p>
        </template>
      </UiTableView>
    </div>

    <!-- Session cards -->
    <div v-else-if="activeTab === 'session'">
      <div class="mb-4">
        <h2 class="text-h5 font-weight-medium text-high-emphasis mb-1">{{ student.fullname }}'s learning sessions</h2>
        <p class="text-body-2 text-medium-emphasis mb-0">Review each session's book, schedule, and remaining meetings.</p>
      </div>

      <VCard v-if="!allSessions.length" variant="outlined" class="pa-8 text-center">
        <VIcon icon="ri-calendar-event-line" size="40" color="secondary" class="mb-3" />
        <h3 class="text-h6 text-high-emphasis mb-1">No sessions yet</h3>
        <p class="text-body-2 text-medium-emphasis mb-0">Sessions for this student will appear here.</p>
      </VCard>

      <div v-else class="d-flex flex-column gap-4">
        <VCard
          v-for="session in visibleSessions"
          :key="session.id"
          variant="outlined"
          class="session-card pa-5"
        >
          <div class="d-flex align-center flex-wrap gap-3">
            <VAvatar color="primary" variant="tonal" rounded="lg" size="40">
              <VIcon icon="ri-user-line" size="20" />
            </VAvatar>
            <div class="session-heading d-flex align-center flex-wrap gap-x-4 gap-y-1">
              <div class="d-flex align-center flex-wrap gap-2">
                <h3 class="text-h6 font-weight-medium text-high-emphasis mb-0">Session {{ session.number }}</h3>
                <VChip :color="session.status === 'Active' ? 'success' : 'secondary'" variant="tonal" size="small">
                  {{ session.status }}
                </VChip>
              </div>
              <div class="d-flex align-center gap-1">
                <span class="text-body-2 text-medium-emphasis">{{ session.code }}</span>
                <VBtn
                  icon="ri-file-copy-line"
                  variant="text"
                  color="primary"
                  rounded="pill"
                  size="x-small"
                  :aria-label="`Copy session ID ${session.code}`"
                  @click="copySessionCode(session.code)"
                />
              </div>
            </div>
          </div>

          <VDivider class="my-4" />

          <div class="session-main d-grid gap-4">
            <div class="d-flex align-start gap-3">
              <VAvatar color="primary" variant="tonal" rounded="lg" size="40">
                <VIcon icon="ri-bookmark-line" size="20" />
              </VAvatar>
              <span class="text-body-1 font-weight-medium text-high-emphasis pt-2">{{ session.productName }}</span>
            </div>
            <div class="session-main-details d-flex flex-column gap-3">
              <div>
                <div class="text-body-2 font-weight-medium text-high-emphasis">Class type</div>
                <div class="text-body-2 text-medium-emphasis">{{ session.classType }}</div>
              </div>
              <div>
                <div class="text-body-2 font-weight-medium text-high-emphasis">Book</div>
                <div class="text-body-2 text-medium-emphasis">{{ sessionBook(session)?.title || '—' }}</div>
              </div>
            </div>
          </div>

          <div v-if="session.className || session.teacherName || session.schedule" class="session-context mt-5 pa-3">
            <div v-if="session.className" class="session-context-item">
              <span class="session-context-icon"><VIcon icon="ri-building-line" color="primary" size="20" /></span>
              <div><div class="text-caption text-medium-emphasis">Class</div><div class="text-body-2 font-weight-medium text-high-emphasis">{{ session.className }}</div></div>
            </div>
            <div v-if="session.teacherName" class="session-context-item">
              <span class="session-context-icon"><VIcon icon="ri-user-follow-line" color="primary" size="20" /></span>
              <div><div class="text-caption text-medium-emphasis">Teacher</div><div class="text-body-2 font-weight-medium text-high-emphasis">{{ session.teacherName }}</div></div>
            </div>
            <div v-if="session.schedule" class="session-context-item">
              <span class="session-context-icon"><VIcon icon="ri-calendar-2-line" color="primary" size="20" /></span>
              <div><div class="text-caption text-medium-emphasis">Schedule</div><div class="text-body-2 font-weight-medium text-high-emphasis">{{ session.schedule }}</div></div>
            </div>
          </div>

          <VDivider class="my-4" />
          <div class="d-flex align-center justify-space-between flex-wrap gap-3">
            <div class="d-flex align-center flex-wrap gap-2 text-body-2">
              <span class="text-medium-emphasis">Quota: <strong class="text-high-emphasis">{{ session.quota }} meetings</strong></span>
              <VChip color="warning" variant="outlined" size="small">Expires {{ formatSessionDate(session.expiresAt) }}</VChip>
            </div>
            <div class="d-flex align-center justify-end flex-wrap gap-2 ms-auto">
              <VBtn
                v-if="historiesForSession(student.id, session.id).length"
                color="primary"
                variant="text"
                rounded="pill"
                :to="{ path: `/students/${student.id}/sessions/${session.id}/history/${historiesForSession(student.id, session.id)[0].id}`, query: { tab: 'meeting-history' } }"
              >
                Meeting History
              </VBtn>
              <VBtn
                color="primary"
                variant="outlined"
                rounded="pill"
                :to="`/students/${student.id}/sessions/${session.id}`"
              >
                See Details
              </VBtn>
            </div>
          </div>
        </VCard>

        <div v-if="sessionPageCount > 1" class="d-flex justify-end">
          <VPagination v-model="sessionPage" :length="sessionPageCount" density="compact" aria-label="Session pages" />
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <VSnackbar
      v-model="snackbar"
      timeout="2000"
      :color="snackbarColor"
      location="bottom right"
    >
      {{ snackbarText }}
    </VSnackbar>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.student-detail-page {
  font-family: 'Poppins', sans-serif;
}

.book-filter {
  flex: 1 1 220px;
  max-width: 280px;
}

.session-card {
  border-radius: 12px;
  background-color: rgb(var(--v-theme-surface));
}

.session-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(220px, 1fr);
}

.session-main-details {
  border-inline-start: 1px solid rgba(var(--v-theme-on-surface), 0.12);
  padding-inline-start: 16px;
}

.session-context {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
  border-radius: 8px;
  background-color: rgba(var(--v-theme-on-surface), 0.03);
}

.session-context-item {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;

  + .session-context-item {
    border-inline-start: 1px solid rgba(var(--v-theme-on-surface), 0.12);
    padding-inline-start: 16px;
  }
}

.session-context-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 40px;
  block-size: 40px;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
  border-radius: 6px;
  background-color: rgb(var(--v-theme-surface));
}

@media (max-width: 760px) {
  .session-main,
  .session-context {
    grid-template-columns: 1fr;
  }

  .session-main-details {
    border-inline-start: 0;
    border-top: 1px solid rgba(var(--v-theme-on-surface), 0.12);
    padding-inline-start: 0;
    padding-top: 16px;
  }

  .session-context-item + .session-context-item {
    border-inline-start: 0;
    padding-inline-start: 0;
  }
}

@media (max-width: 600px) {
  .book-filter {
    max-width: none;
    width: 100%;
  }
}

.back-btn {
  border-color: rgba(var(--v-theme-on-surface), 0.12) !important;
  border-radius: 6px;
}

.student-avatar {
  border-radius: 500px;
}

.student-name {
  color: rgb(var(--v-theme-on-surface));
  letter-spacing: -0.36px;
  line-height: 28px;
}

.student-country {
  color: rgba(var(--v-theme-on-surface), 0.6);
  letter-spacing: -0.26px;
  line-height: 20px;
}

.custom-tabs-container {
  .border-b {
    border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.12);
  }

  .custom-tab-btn {
    padding: 8px 22px;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.3px;
    color: rgba(var(--v-theme-on-surface), 0.9);
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;

    &.active {
      color: rgb(var(--v-theme-primary));
      border-bottom-color: rgb(var(--v-theme-primary));
    }

    &:focus-visible {
      outline: 2px solid rgb(var(--v-theme-primary));
      outline-offset: -2px;
    }
  }
}

.detail-card {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.12) !important;
  border-radius: 12px !important;
  background-color: rgb(var(--v-theme-surface));
  box-shadow: none !important;
}

.icon-wrapper {
  background-color: rgba(16, 175, 19, 0.08);
  border-radius: 4px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-title {
  color: rgba(46, 38, 61, 0.9);
  letter-spacing: -0.36px;
}

.info-row {
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.3px;
  padding-top: 16px !important;
  padding-bottom: 16px !important;

  .info-label {
    width: 240px;
    min-width: 140px;
    color: rgba(46, 38, 61, 0.9);
  }

  .info-value {
    color: rgba(46, 38, 61, 0.9);
  }
}

.text-secondary-emphasis {
  color: rgba(46, 38, 61, 0.7) !important;
}

.copy-btn {
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
}

.settings-list {
  .settings-label {
    color: rgba(46, 38, 61, 0.9);
    letter-spacing: -0.26px;
  }

  .settings-value {
    color: rgba(46, 38, 61, 0.9);
    letter-spacing: -0.3px;
  }
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;

  &.green-dot {
    background-color: #10AF13;
  }
}

.gap-5 {
  gap: 20px;
}
</style>
