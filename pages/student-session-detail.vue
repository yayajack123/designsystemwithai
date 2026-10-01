<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { avatarText } from '@core/utils/formatters'
import UiSectionHeader from '@/components/ui/UiSectionHeader.vue'
import UiTableView from '@/components/ui/UiTableView.vue'
import { studentRecords } from '@/data/students'
import { studentSessions, sessionBook, formatSessionDate } from '@/data/studentSessions'
import { historiesForSession, historyBook, meetingsForHistory } from '@/data/studentHistory'

definePageMeta({
  path: '/students/:studentId/sessions/:sessionId',
  sidebarRoute: 'students',
})

const route = useRoute()
const router = useRouter()
const studentId = computed(() => String(route.params.studentId || ''))
const sessionId = computed(() => String(route.params.sessionId || ''))
const student = computed(() => studentRecords.find(item => item.id === studentId.value))
const studentInitials = computed(() => avatarText(student.value?.name || 'Student'))
const session = computed(() => studentSessions.find(item =>
  item.id === sessionId.value && item.studentId === studentId.value,
))
const book = computed(() => session.value ? sessionBook(session.value) : undefined)
const activeTab = computed(() => route.query.tab === 'history' ? 'history' : 'information')
const selectTab = (tab: string) => router.replace({ query: { ...route.query, tab } })
const histories = computed(() => historiesForSession(studentId.value, sessionId.value))
const historyHeaders = [
  { title: 'Book', key: 'book' },
  { title: 'Total', key: 'total' },
  { title: 'Type', key: 'type' },
  { title: 'Finished date', key: 'finishedAt' },
  { title: 'Status', key: 'status' },
  { title: 'Action', key: 'action', sortable: false },
]
const historyRoute = (historyId: string, tab = 'learning-progress') => ({
  path: `/students/${studentId.value}/sessions/${sessionId.value}/history/${historyId}`,
  query: { tab },
})
const displayDate = (value?: string) => value ? new Intl.DateTimeFormat('en-US', {
  day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Jakarta',
}).format(new Date(value)) : '—'
const sessionListRoute = computed(() => student.value
  ? { path: '/student-detail', query: { id: student.value.id, tab: 'session' } }
  : { path: '/students' },
)
const booksRoute = computed(() => ({ path: '/student-detail', query: { id: studentId.value, tab: 'books' } }))
const formattedPrice = computed(() => session.value?.pricePerMeeting === undefined ? null
  : new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(session.value.pricePerMeeting),
)
const formattedUpdate = computed(() => session.value
  ? new Intl.DateTimeFormat('en-US', {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta',
  }).format(new Date(session.value.lastUpdated)) + ' WIB'
  : '',
)
</script>

<template>
  <section class="session-detail-page">
    <UiSectionHeader title="Session detail" :back="sessionListRoute" class="mb-6" />

    <VAlert v-if="!student || !session || !book" type="warning" variant="tonal">
      Session not found for this student.
      <div class="mt-3">
        <VBtn color="primary" variant="outlined" rounded="pill" :to="sessionListRoute">Back to sessions</VBtn>
      </div>
    </VAlert>

    <template v-else>
    <VTabs :model-value="activeTab" class="v-tabs-bordered mb-6" @update:model-value="selectTab">
      <VTab value="information">Information</VTab>
      <VTab value="history">Session history</VTab>
    </VTabs>
    <UiTableView
      v-if="activeTab === 'history'"
      title=""
      :headers="historyHeaders"
      :items="histories"
      :mobile-cards="true"
      :hide-filters="true"
    >
      <template #item.book="{ item }"><div class="text-body-1 font-weight-medium">{{ historyBook(item)?.title || 'Book unavailable' }}</div><div class="text-body-2 text-medium-emphasis">{{ item.course }}</div></template>
      <template #item.total="{ item }">{{ meetingsForHistory(item).length }} meetings</template>
      <template #item.finishedAt="{ item }">{{ displayDate(item.finishedAt) }}</template>
      <template #item.status="{ item }"><VChip :color="item.status === 'Completed' ? 'success' : item.status === 'Ongoing' ? 'primary' : 'secondary'" variant="tonal" size="small">{{ item.status }}</VChip></template>
      <template #item.action="{ item }"><VBtn color="primary" variant="text" rounded="pill" :to="historyRoute(item.id)">See details</VBtn></template>
      <template #no-data><p class="pa-6 text-body-2 text-medium-emphasis">No book history for this session.</p></template>
      <template #mobile-cards="{ items }">
        <div v-if="items.length" class="pa-4 d-flex flex-column gap-3">
          <VCard v-for="item in items" :key="item.id" variant="outlined" class="pa-4">
            <div class="d-flex justify-space-between align-start gap-3"><h2 class="text-h6 mb-0">{{ historyBook(item)?.title || 'Book unavailable' }}</h2><VChip :color="item.status === 'Completed' ? 'success' : 'primary'" variant="tonal" size="small">{{ item.status }}</VChip></div>
            <p class="text-body-2 text-medium-emphasis mt-2 mb-2">{{ item.course }} · {{ item.type }} · {{ meetingsForHistory(item).length }} meetings</p>
            <p class="text-caption text-medium-emphasis mb-2">Finished {{ displayDate(item.finishedAt) }}</p>
            <VBtn color="primary" variant="text" rounded="pill" :to="historyRoute(item.id)">See details</VBtn>
          </VCard>
        </div>
        <p v-else class="pa-6 text-body-2 text-medium-emphasis">No book history for this session.</p>
      </template>
    </UiTableView>
    <VRow v-else class="session-detail-layout">
      <VCol cols="12" md="8" class="d-flex flex-column gap-6">
        <VCard variant="outlined" class="detail-card pa-6">
          <div class="d-flex align-center gap-3 mb-6">
            <div class="icon-wrapper"><VIcon icon="ri-book-2-line" color="primary" size="20" /></div>
            <h2 class="text-h6 font-weight-medium text-high-emphasis mb-0">Product information</h2>
          </div>

          <div class="product-panel pa-5 mb-4">
            <div class="d-flex align-center flex-wrap gap-2 mb-5">
              <VChip color="primary" variant="tonal" size="small">Package</VChip>
              <span class="text-body-2 font-weight-medium text-primary">{{ session.packageName }}</span>
            </div>
            <div class="d-flex align-center gap-3 mb-4">
              <VAvatar color="primary" variant="tonal" rounded="lg" size="44"><VIcon icon="ri-bookmark-line" size="24" /></VAvatar>
              <div>
                <h3 class="text-h6 font-weight-medium text-high-emphasis mb-0">{{ session.productName }}</h3>
                <p class="text-body-2 text-medium-emphasis mb-0">{{ book.title }}</p>
              </div>
            </div>
            <div v-if="formattedPrice">
              <VChip color="primary" variant="tonal" size="small" class="mb-2">Variant IDR</VChip>
              <div class="text-h4 font-weight-medium text-high-emphasis">{{ formattedPrice }}</div>
              <div class="text-body-2 text-medium-emphasis">Price per meeting</div>
            </div>
          </div>

          <dl class="info-list mb-0">
            <div class="info-row"><dt class="text-body-2 font-weight-medium">Book</dt><dd class="text-body-1">{{ book.title }}</dd></div>
            <div class="info-row"><dt class="text-body-2 font-weight-medium">Class type</dt><dd class="text-body-1">{{ session.classType }}</dd></div>
            <div class="info-row"><dt class="text-body-2 font-weight-medium">Meeting left</dt><dd class="text-body-1">{{ session.meetingsLeft }} of {{ session.quota }} meetings</dd></div>
            <div class="info-row"><dt class="text-body-2 font-weight-medium">Expired date</dt><dd class="text-body-1">{{ formatSessionDate(session.expiresAt) }}</dd></div>
          </dl>
        </VCard>

        <VCard variant="outlined" class="detail-card pa-6">
          <div class="d-flex align-center gap-3 mb-6">
            <div class="icon-wrapper"><VIcon icon="ri-calendar-2-line" color="primary" size="20" /></div>
            <h2 class="text-h6 font-weight-medium text-high-emphasis mb-0">Schedule & class</h2>
          </div>
          <div v-if="session.className || session.schedule" class="d-flex flex-column gap-3">
            <div class="schedule-row pa-4">
              <div class="text-body-1 font-weight-medium text-high-emphasis">Student available schedule</div>
              <div class="text-body-1 text-medium-emphasis">{{ session.schedule || 'Not set' }}</div>
            </div>
            <div v-if="session.className" class="schedule-row pa-4">
              <div class="d-flex justify-space-between align-center flex-wrap gap-2 mb-2">
                <span class="text-body-1 font-weight-medium text-high-emphasis">{{ session.className }}</span>
                <VChip v-if="session.branch" color="primary" variant="tonal" size="small">{{ session.branch }}</VChip>
              </div>
              <div class="text-body-1 text-medium-emphasis">{{ [session.schedule, session.room].filter(Boolean).join(' · ') || 'Schedule not set' }}</div>
            </div>
          </div>
          <p v-else class="text-body-1 text-medium-emphasis mb-0">No class schedule assigned to this session.</p>
        </VCard>
      </VCol>

      <VCol cols="12" md="4">
        <VCard variant="outlined" class="detail-card pa-6">
          <div class="student-banner d-flex align-center gap-3 pa-4 mb-5">
            <VAvatar size="40" class="student-banner-avatar"><span class="text-body-1 font-weight-medium">{{ studentInitials }}</span></VAvatar>
            <div>
              <div class="text-body-1 font-weight-medium">{{ student.name }}</div>
              <div class="text-body-2">Student</div>
            </div>
          </div>
          <dl class="session-facts mb-0">
            <div><dt class="text-body-2 font-weight-medium">Homeroom teacher</dt><dd class="text-body-1">{{ session.teacherName || 'Not assigned' }}</dd></div>
            <div><dt class="text-body-2 font-weight-medium">Session status</dt><dd><VChip :color="session.status === 'Active' ? 'success' : 'secondary'" variant="tonal" size="small">{{ session.status }}</VChip></dd></div>
            <div><dt class="text-body-2 font-weight-medium">Session ID</dt><dd class="text-body-1">{{ session.code }}</dd></div>
            <div><dt class="text-body-2 font-weight-medium">Last updated</dt><dd class="text-body-1">{{ formattedUpdate }}</dd></div>
          </dl>
          <VBtn color="primary" variant="text" rounded="pill" class="mt-4 px-0" :to="booksRoute">
            View all books
          </VBtn>
        </VCard>
      </VCol>
    </VRow>
    </template>
  </section>
</template>

<style lang="scss" scoped>
.detail-card {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.12) !important;
  border-radius: 12px !important;
  background-color: rgb(var(--v-theme-surface));
  box-shadow: none !important;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 4px;
  background-color: rgba(var(--v-theme-primary), 0.08);
}

.product-panel {
  border: 1px solid rgba(var(--v-theme-primary), 0.16);
  border-radius: 8px;
  background-color: rgba(var(--v-theme-primary), 0.08);
}

.info-list .info-row {
  display: grid;
  grid-template-columns: minmax(130px, 1fr) 2fr;
  gap: 16px;
  padding: 16px 0;
  border-top: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}

.info-row dt {
  color: rgb(var(--v-theme-on-surface));
}

.info-row dd,
.session-facts dd {
  margin: 0;
  color: rgba(var(--v-theme-on-surface), 0.7);
}

.schedule-row {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
  border-radius: 8px;
}

.student-banner {
  border-radius: 8px;
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));

  > div:not(.v-avatar) > div {
    color: rgb(var(--v-theme-on-primary));
  }
}

.student-banner-avatar {
  flex-shrink: 0;
  background-color: rgba(var(--v-theme-on-primary), 0.16);

  span {
    color: rgb(var(--v-theme-on-primary));
  }
}

.session-facts {
  display: flex;
  flex-direction: column;
  gap: 20px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

}

@media (max-width: 600px) {
  .info-list .info-row {
    grid-template-columns: minmax(96px, 0.8fr) 1.2fr;
  }
}
</style>
