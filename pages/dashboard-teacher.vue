<script setup lang="ts">
import teacherWelcomeIllustration from '@images/pages/teacher-welcome-illustration.png'
import UiTableView from '@/components/ui/UiTableView.vue'

definePageMeta({
  sidebarRoute: 'dashboard-teacher',
})

type WatchlistType = 'Attendance' | 'Productivity' | 'Quiz'
type RiskLevel = 'Green' | 'Yellow' | 'Red'
type WatchlistStatus = 'Open' | 'In Progress' | 'Resolved' | 'Failed' | 'No Action' | 'Closed'
type PendingTab = 'Journal' | 'Reports' | 'Projects'
type ScheduleStatus = 'ready' | 'soon' | 'live'

interface AppreciationItem {
  title: string
  quote: string
  detail: string
  icon: string
}

interface SummaryItem {
  label: string
  value: number
  period: string
  helper: string
  icon: string
  tone: 'primary' | 'info' | 'warning' | 'success'
}

interface WatchlistItem {
  id: string
  name: string
  initials: string
  course: string
  issue: string
  metric: string
  type: WatchlistType
  risk: RiskLevel
  status: WatchlistStatus
  window: string
}

interface PendingTask {
  id: string
  student: string
  course: string
  lesson: string
  due: string
  action: string
  category: PendingTab
}

interface ScheduleItem {
  id: string
  startsAt: string
  endsAt: string
  dateLabel: string
  timeLabel: string
  name: string
  type: string
  students: number
  status: ScheduleStatus
}

const appreciationItems: AppreciationItem[] = [
  {
    title: 'Your consistency gives students room to grow.',
    quote: 'Small moments of clarity become big leaps over time.',
    detail: 'You have sent 12 parent updates this month.',
    icon: 'ri-sparkling-2-line',
  },
  {
    title: 'Eight students moved up a level this month.',
    quote: 'Progress looks different for every student. You keep making space for it.',
    detail: 'Student impact is up from your previous review window.',
    icon: 'ri-flag-2-line',
  },
  {
    title: 'You are in the top 10% for student satisfaction.',
    quote: 'The way you listen is part of what students remember.',
    detail: 'Based on the latest student survey cycle.',
    icon: 'ri-heart-3-line',
  },
  {
    title: 'Three new skills are now part of your toolkit.',
    quote: 'A prepared teacher makes curiosity feel safe.',
    detail: 'Your learning record is up to date.',
    icon: 'ri-lightbulb-flash-line',
  },
]

const summaryItems: SummaryItem[] = [
  { label: 'Parents updated', value: 12, period: 'This month', helper: 'Journal updates sent', icon: 'ri-chat-3-line', tone: 'primary' },
  { label: 'Students impacted', value: 8, period: 'This month', helper: 'Reached a new level', icon: 'ri-arrow-up-circle-line', tone: 'info' },
  { label: 'Skill growth', value: 3, period: 'This month', helper: 'New skills mastered', icon: 'ri-lightbulb-line', tone: 'warning' },
  { label: 'Projects submitted', value: 6, period: 'Ready to review', helper: 'Waiting for your review', icon: 'ri-folder-check-line', tone: 'success' },
]

const watchlistTabs: WatchlistType[] = ['Attendance', 'Productivity', 'Quiz']
const watchlistTab = ref<WatchlistType>('Attendance')
const watchlistItems = ref<WatchlistItem[]>([
  { id: 'wl-1', name: 'Alice Johnson', initials: 'AJ', course: 'Coding Xplorer', issue: 'Missed 2 assigned meetings', metric: '2 absences', type: 'Attendance', risk: 'Red', status: 'Open', window: 'Meetings 9–12' },
  { id: 'wl-2', name: 'Fajar Ramadhan', initials: 'FR', course: 'Python Foundations', issue: 'Learning velocity dropped', metric: '0.25 lessons / meeting', type: 'Productivity', risk: 'Red', status: 'In Progress', window: 'Meetings 9–12' },
  { id: 'wl-3', name: 'Gita Permata', initials: 'GP', course: 'Web Design Basics', issue: 'Quiz score needs attention', metric: '62 average score', type: 'Quiz', risk: 'Red', status: 'No Action', window: 'Meetings 5–8' },
  { id: 'wl-4', name: 'Diana Prince', initials: 'DP', course: 'Coding Xplorer', issue: 'One absence in the window', metric: '1 absence', type: 'Attendance', risk: 'Yellow', status: 'Resolved', window: 'Meetings 9–12' },
  { id: 'wl-5', name: 'Bima Putra', initials: 'BP', course: 'Python Foundations', issue: 'Progress is slower than target', metric: '0.50 lessons / meeting', type: 'Productivity', risk: 'Yellow', status: 'Open', window: 'Meetings 5–8' },
  { id: 'wl-6', name: 'Nadia Sari', initials: 'NS', course: 'Game Design', issue: 'Quiz score is below target', metric: '74 average score', type: 'Quiz', risk: 'Yellow', status: 'Open', window: 'Meetings 9–12' },
])

const filteredWatchlist = computed(() => watchlistItems.value.filter(item => item.type === watchlistTab.value))
const watchlistRedCount = computed(() => watchlistItems.value.filter(item => item.risk === 'Red').length)
const watchlistTableTabs = watchlistTabs.map(tab => ({ label: tab, value: tab }))
const watchlistHeaders = [
  { title: 'STUDENT', key: 'student', sortable: false },
  { title: 'ISSUE', key: 'issue', sortable: false },
  { title: 'RISK', key: 'risk', sortable: false },
  { title: 'STATUS', key: 'status', sortable: false },
  { title: 'ACTION', key: 'action', sortable: false, align: 'center', width: 120 },
]

const getInitials = (name: string) => {
  const cleanName = name.replace(/^(Mr\.|Ms\.|Mrs\.|Dr\.)\s+/i, '')

  return cleanName
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

const pendingTab = ref<PendingTab>('Journal')
const pendingItems: Record<PendingTab, PendingTask[]> = {
  Journal: [
    { id: 'task-1', student: 'Alice Johnson', course: 'Coding Xplorer', lesson: 'Mtg 12', due: 'Today · 16:00', action: 'Create', category: 'Journal' },
    { id: 'task-2', student: 'Diana Prince', course: 'Coding Xplorer', lesson: 'Mtg 12', due: 'Today · 18:00', action: 'Create', category: 'Journal' },
    { id: 'task-3', student: 'Fajar Ramadhan', course: 'Python Foundations', lesson: 'Mtg 11', due: 'Tomorrow', action: 'Create', category: 'Journal' },
  ],
  Reports: [
    { id: 'task-4', student: 'Gita Permata', course: 'Web Design Basics', lesson: 'Mtg 8', due: 'Today · 17:00', action: 'Write report', category: 'Reports' },
    { id: 'task-5', student: 'Bima Putra', course: 'Python Foundations', lesson: 'Mtg 8', due: 'Tomorrow', action: 'Write report', category: 'Reports' },
  ],
  Projects: [
    { id: 'task-6', student: 'Nadia Sari', course: 'Game Design', lesson: 'Project 2', due: 'Today · 19:00', action: 'Review', category: 'Projects' },
    { id: 'task-7', student: 'Raka Aditya', course: 'Scratch Studio', lesson: 'Project 1', due: '12 Sep', action: 'Review', category: 'Projects' },
  ],
}

const activePendingItems = computed(() => pendingItems[pendingTab.value])
const pendingTotal = computed(() => Object.values(pendingItems).flat().length)
const pendingTableTabs = computed(() => (Object.keys(pendingItems) as PendingTab[]).map(tab => ({
  label: tab,
  value: tab,
  count: pendingItems[tab].length,
})))
const pendingHeaders = [
  { title: 'STUDENT', key: 'student', sortable: false },
  { title: 'COURSE', key: 'course', sortable: false },
  { title: 'MTG / LESSON', key: 'lesson', sortable: false },
  { title: 'DUE', key: 'due', sortable: false },
  { title: 'ACTION', key: 'action', sortable: false, align: 'center', width: 140 },
]

const scheduleItems: ScheduleItem[] = [
  { id: 'schedule-1', startsAt: '2026-09-11T09:00:00+08:00', endsAt: '2026-09-11T10:30:00+08:00', dateLabel: 'Tomorrow', timeLabel: '09:00–10:30', name: 'Regular Kids', type: 'Adaptive', students: 5, status: 'soon' },
  { id: 'schedule-2', startsAt: '2026-09-11T14:00:00+08:00', endsAt: '2026-09-11T15:30:00+08:00', dateLabel: 'Tomorrow', timeLabel: '14:00–15:30', name: 'Advanced Teens', type: 'Dynamic', students: 7, status: 'ready' },
  { id: 'schedule-3', startsAt: '2026-09-12T08:00:00+08:00', endsAt: '2026-09-12T09:30:00+08:00', dateLabel: '12 Sep', timeLabel: '08:00–09:30', name: 'Future Coders', type: 'Adaptive', students: 6, status: 'ready' },
]

const currentTime = ref<number | null>(null)
let countdownTimer: ReturnType<typeof setInterval> | undefined

const getCountdown = (item: ScheduleItem) => {
  if (!currentTime.value) return item.status === 'soon' ? 'In 45 min' : item.dateLabel

  const start = new Date(item.startsAt).getTime()
  const end = new Date(item.endsAt).getTime()
  const diff = start - currentTime.value

  if (currentTime.value >= start && currentTime.value < end) return 'Live now'
  if (diff <= 0) return item.dateLabel
  if (diff < 60 * 60 * 1000) return `In ${Math.max(1, Math.round(diff / 60000))} min`
  if (diff < 24 * 60 * 60 * 1000) return `In ${Math.floor(diff / 3600000)} hrs`
  return item.dateLabel
}

onMounted(() => {
  const updateClock = () => { currentTime.value = Date.now() }
  updateClock()
  countdownTimer = setInterval(updateClock, 60000)
})

onBeforeUnmount(() => {
  if (countdownTimer) clearInterval(countdownTimer)
})

const currentAppreciation = ref(0)
let appreciationTimer: ReturnType<typeof setInterval> | undefined

const activeAppreciation = computed(() => appreciationItems[currentAppreciation.value])

const changeAppreciation = (direction: 1 | -1) => {
  currentAppreciation.value = (currentAppreciation.value + direction + appreciationItems.length) % appreciationItems.length
}

const startAppreciationRotation = () => {
  if (appreciationTimer) clearInterval(appreciationTimer)
  appreciationTimer = setInterval(() => changeAppreciation(1), 5000)
}

const pauseAppreciationRotation = () => {
  if (!appreciationTimer) return

  clearInterval(appreciationTimer)
  appreciationTimer = undefined
}

onMounted(() => {
  startAppreciationRotation()
})

onBeforeUnmount(() => {
  pauseAppreciationRotation()
})

const riskColor = (risk: RiskLevel) => ({ Green: 'success', Yellow: 'warning', Red: 'error' })[risk]
const statusColor = (status: WatchlistStatus) => ({
  Open: 'secondary',
  'In Progress': 'info',
  Resolved: 'success',
  Failed: 'error',
  'No Action': 'warning',
  Closed: 'secondary',
}[status])

const getTaskRoute = (task: PendingTask) => task.category === 'Projects' ? { name: 'assessments' } : { name: 'reports' }

const isActionDialogOpen = ref(false)
const activeWatchlistItem = ref<WatchlistItem | null>(null)
const actionNote = ref('')
const toastShow = ref(false)
const toastText = ref('')

const openActionDialog = (item: WatchlistItem) => {
  activeWatchlistItem.value = item
  actionNote.value = ''
  isActionDialogOpen.value = true
}

const submitAction = () => {
  if (!activeWatchlistItem.value) return

  activeWatchlistItem.value.status = 'In Progress'
  isActionDialogOpen.value = false
  toastText.value = `Action saved for ${activeWatchlistItem.value.name}`
  toastShow.value = true
}
</script>

<template>
  <section class="teacher-dashboard">
    <header class="dashboard-header dashboard-reveal dashboard-reveal--1">
      <div class="dashboard-header__content">
        <h1 class="text-h4 text-high-emphasis mb-2">
          Good morning, Julie.
        </h1>
        <p class="text-body-1 text-medium-emphasis mb-0">
          Here’s your teaching brief. Start with what needs your attention today.
        </p>
      </div>
      <div class="dashboard-header__art" aria-hidden="true">
        <img
          :src="teacherWelcomeIllustration"
          alt=""
          class="dashboard-header__illustration"
        >
      </div>
    </header>

    <div class="dashboard-layout">
      <main class="dashboard-main">
        <section
          class="recognition-card dashboard-reveal dashboard-reveal--2"
          aria-label="Personal achievement"
          @mouseenter="pauseAppreciationRotation"
          @mouseleave="startAppreciationRotation"
        >
          <div class="recognition-banner">
            <div class="recognition-rail" aria-hidden="true">
              <VIcon :icon="activeAppreciation.icon" size="20" />
            </div>
            <div class="recognition-content">
              <div class="appreciation-copy" aria-live="polite">
                <h2 class="text-h6 font-weight-medium text-high-emphasis mb-1">
                  {{ activeAppreciation.title }}
                </h2>
                <p class="text-body-2 text-medium-emphasis mb-1 appreciation-quote">
                  “{{ activeAppreciation.quote }}”
                </p>
                <div class="d-flex align-center gap-2 text-caption text-medium-emphasis">
                  <VIcon icon="ri-checkbox-circle-line" size="15" />
                  <span>{{ activeAppreciation.detail }}</span>
                </div>
              </div>
            </div>
            <div class="recognition-banner-nav d-flex align-center gap-2">
              <IconBtn
                class="recognition-nav"
                aria-label="Previous appreciation"
                @click="changeAppreciation(-1)"
              >
                <VIcon icon="ri-arrow-left-line" size="18" />
              </IconBtn>
              <IconBtn
                class="recognition-nav"
                aria-label="Next appreciation"
                @click="changeAppreciation(1)"
              >
                <VIcon icon="ri-arrow-right-line" size="18" />
              </IconBtn>
            </div>
          </div>
          <div class="recognition-progress" aria-label="Appreciation carousel position">
            <span
              v-for="(_, index) in appreciationItems"
              :key="index"
              class="recognition-progress__item"
              :class="{ 'recognition-progress__item--active': index === currentAppreciation }"
            />
          </div>
        </section>

        <section class="dashboard-section dashboard-reveal dashboard-reveal--3" aria-labelledby="summary-heading">
          <div class="section-heading">
            <div>
              <h2 id="summary-heading" class="text-h5 text-high-emphasis mb-0">
                Your Statistic
              </h2>
            </div>
            <span class="section-meta text-caption">Updated today</span>
          </div>
          <div class="summary-grid">
            <VCard
              v-for="item in summaryItems"
              :key="item.label"
              class="summary-card"
              :class="`summary-card--${item.tone}`"
              elevation="0"
            >
              <div class="summary-card__top">
                <VIcon :icon="item.icon" size="19" />
                <span class="summary-card__period text-caption">{{ item.period }}</span>
              </div>
              <span class="summary-card__value text-h3 font-weight-medium">{{ item.value }}</span>
              <span class="summary-card__label text-body-2 font-weight-medium">{{ item.label }}</span>
              <span class="summary-card__helper text-caption">{{ item.helper }}</span>
            </VCard>
          </div>
        </section>

        <section class="dashboard-section dashboard-reveal dashboard-reveal--4" aria-labelledby="watchlist-heading">
          <UiTableView
            v-model:activeTab="watchlistTab"
            title=""
            :tabs="watchlistTableTabs"
            :headers="watchlistHeaders"
            :items="filteredWatchlist"
            :items-per-page="-1"
            hide-filters
            hide-pagination
            tabs-inside-card
            card-class="dashboard-card"
            table-class="dashboard-table watchlist-table"
            flat
            class="dashboard-table-view"
          >
            <template #card-header>
              <div class="card-heading">
                <div>
                  <div class="watchlist-title-row">
                    <h2 id="watchlist-heading" class="text-h5 text-high-emphasis mb-0">
                      Priority Watchlist
                    </h2>
                    <VChip color="error" variant="tonal" size="x-small">{{ watchlistRedCount }} red risks</VChip>
                  </div>
                  <p class="text-body-2 text-medium-emphasis mb-0">
                    Latest fixed-block evaluation · refreshed every Monday
                  </p>
                </div>
                <VBtn
                  variant="text"
                  color="primary"
                  size="small"
                  class="section-link"
                  :to="{ name: 'students' }"
                >
                  View all
                  <VIcon end icon="ri-arrow-right-line" size="16" />
                </VBtn>
              </div>
            </template>

            <template #item.student="{ item }">
              <div class="student-cell">
                <VAvatar size="34" color="grey-100" class="border">
                  <span class="text-caption font-weight-medium text-high-emphasis">
                    {{ getInitials(item.name) }}
                  </span>
                </VAvatar>
                <div class="min-w-0">
                  <span class="student-name font-weight-medium">{{ item.name }}</span>
                  <span class="student-course text-caption">{{ item.course }} · {{ item.window }}</span>
                </div>
              </div>
            </template>

            <template #item.issue="{ item }">
              <div class="issue-cell">
                <span class="issue-title font-weight-medium">{{ item.issue }}</span>
                <span class="issue-metric text-caption">{{ item.metric }}</span>
              </div>
            </template>

            <template #item.risk="{ item }">
              <VChip :color="riskColor(item.risk)" variant="tonal" size="small" class="status-chip text-caption font-weight-medium">
                <span class="status-dot" />
                {{ item.risk }}
              </VChip>
            </template>

            <template #item.status="{ item }">
              <VChip :color="statusColor(item.status)" variant="outlined" size="small" class="status-chip text-caption font-weight-medium">
                {{ item.status }}
              </VChip>
            </template>

            <template #item.action="{ item }">
              <VBtn
                variant="outlined"
                color="primary"
                size="small"
                class="action-button"
                @click="openActionDialog(item)"
              >
                Action
              </VBtn>
            </template>

            <template #no-data>
              <div class="empty-cell">
                No students in this evaluation view.
              </div>
            </template>
          </UiTableView>
        </section>

        <section class="dashboard-section dashboard-reveal dashboard-reveal--5" aria-labelledby="pending-heading">
          <UiTableView
            v-model:activeTab="pendingTab"
            title=""
            :tabs="pendingTableTabs"
            :headers="pendingHeaders"
            :items="activePendingItems"
            :items-per-page="-1"
            hide-filters
            hide-pagination
            tabs-inside-card
            card-class="dashboard-card"
            table-class="dashboard-table pending-table"
            flat
            class="dashboard-table-view"
          >
            <template #card-header>
              <div class="card-heading">
                <div>
                  <h2 id="pending-heading" class="text-h5 text-high-emphasis mb-1">
                    Pending Task
                  </h2>
                  <p class="text-body-2 text-medium-emphasis mb-0">
                    {{ pendingTotal }} items are waiting across your workflows
                  </p>
                </div>
                <VBtn
                  variant="text"
                  color="primary"
                  size="small"
                  class="section-link"
                  :to="{ name: 'reports' }"
                >
                  View all
                  <VIcon end icon="ri-arrow-right-line" size="16" />
                </VBtn>
              </div>
            </template>

            <template #item.student="{ item }">
              <span class="student-name font-weight-medium">{{ item.student }}</span>
            </template>

            <template #item.course="{ item }">
              <span class="table-muted text-caption">{{ item.course }}</span>
            </template>

            <template #item.lesson="{ item }">
              <span class="table-muted text-caption">{{ item.lesson }}</span>
            </template>

            <template #item.due="{ item }">
              <span class="due-label text-body-2 font-weight-medium">{{ item.due }}</span>
            </template>

            <template #item.action="{ item }">
              <VBtn :to="getTaskRoute(item)" variant="text" color="primary" size="small" class="action-link">
                {{ item.action }}
                <VIcon end icon="ri-arrow-right-up-line" size="15" />
              </VBtn>
            </template>

            <template #no-data>
              <div class="empty-cell">
                Nothing is waiting here. Keep the good rhythm going.
              </div>
            </template>
          </UiTableView>
        </section>
      </main>

      <aside class="dashboard-aside dashboard-reveal dashboard-reveal--2">
        <VCard class="schedule-card dashboard-card" elevation="0">
          <div class="schedule-card__header">
            <div>
              <h2 class="text-h5 text-high-emphasis mb-1">Upcoming schedule</h2>
              <p class="text-body-2 text-medium-emphasis mb-0">Three moments to prepare for</p>
            </div>
            <VIcon icon="ri-calendar-schedule-line" color="primary" size="22" />
          </div>
          <div class="schedule-list">
            <div v-for="item in scheduleItems" :key="item.id" class="schedule-item">
              <div class="schedule-item__time">
                <span class="schedule-item__date text-caption">{{ item.dateLabel }}</span>
                <span class="schedule-item__clock text-body-2 font-weight-medium">{{ item.timeLabel }}</span>
              </div>
              <div class="schedule-item__rule" />
              <div class="schedule-item__content">
                <div class="d-flex align-start justify-space-between gap-2">
                  <div class="min-w-0">
                    <span class="schedule-item__name text-body-2 font-weight-medium">{{ item.name }}</span>
                    <span class="schedule-item__meta text-caption">{{ item.type }} · {{ item.students }} students</span>
                  </div>
                  <span
                    class="schedule-status"
                    :class="`schedule-status--${item.status}`"
                    :aria-label="`Schedule status: ${item.status}`"
                  >
                    <span class="status-dot" />
                  </span>
                </div>
                <span class="schedule-item__countdown text-caption font-weight-medium">{{ getCountdown(item) }}</span>
              </div>
            </div>
          </div>
          <VDivider />
          <VBtn :to="{ name: 'schedule' }" variant="outlined" rounded="pill" color="primary" size="small" class="schedule-view-all">
            View full schedule
            <VIcon end icon="ri-arrow-right-line" size="16" />
          </VBtn>
        </VCard>

        <VCard class="freshness-card dashboard-reveal dashboard-reveal--3" elevation="0">
          <div class="freshness-icon">
            <VIcon icon="ri-refresh-line" color="primary" size="19" />
          </div>
          <div>
            <p class="text-body-2 text-high-emphasis mb-1">Risk signals refresh every Monday.</p>
            <p class="text-caption text-medium-emphasis mb-0">Your next watchlist review is ready.</p>
          </div>
        </VCard>
      </aside>
    </div>

    <VDialog v-model="isActionDialogOpen" max-width="520">
      <VCard class="action-dialog" elevation="0">
        <VCardTitle class="d-flex align-start justify-space-between gap-4 pa-6 pb-2">
          <div>
            <span class="text-h5 text-high-emphasis">Follow up with {{ activeWatchlistItem?.name }}</span>
          </div>
          <DialogCloseBtn aria-label="Close action dialog" @click="isActionDialogOpen = false" />
        </VCardTitle>
        <VCardText class="px-6 pt-3">
          <div class="action-context mb-5">
            <VChip v-if="activeWatchlistItem" :color="riskColor(activeWatchlistItem.risk)" variant="tonal" size="small">
              {{ activeWatchlistItem.risk }} risk
            </VChip>
            <span class="text-body-2 text-medium-emphasis">{{ activeWatchlistItem?.issue }}</span>
          </div>
          <VTextarea
            v-model="actionNote"
            label="Action note"
            placeholder="Write the next step you will take…"
            rows="4"
            variant="outlined"
            autofocus
          />
        </VCardText>
        <VCardActions class="px-6 pb-6 pt-0 justify-end gap-2">
          <VBtn variant="text" color="secondary" @click="isActionDialogOpen = false">Cancel</VBtn>
          <VBtn color="primary" @click="submitAction">Save action</VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <VSnackbar v-model="toastShow" color="success" timeout="3000">
      {{ toastText }}
    </VSnackbar>
  </section>
</template>

<style lang="scss" scoped>
.teacher-dashboard {
  --dashboard-line: rgba(var(--v-theme-on-surface), 0.1);
  --dashboard-muted-line: rgba(var(--v-theme-on-surface), 0.07);
  --dashboard-ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  padding-block: 64px 20px;
}

.card-heading,
.section-heading,
.schedule-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}

.dashboard-header {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(220px, 0.7fr);
  align-items: stretch;
  min-height: 140px;
  margin-block-end: 28px;
  overflow: visible;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
  border-radius: 6px;
  background: rgb(var(--v-theme-surface));
}

.dashboard-header__content {
  position: relative;
  z-index: 1;
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 12px 20px;
}

.dashboard-header__content > p {
  max-width: 560px;
}

.dashboard-header__art {
  position: relative;
  min-width: 0;
  min-height: 140px;
}

.dashboard-header__illustration {
  position: absolute;
  bottom: 0;
  right: 20px;
  width: auto;
  height: 220px;
  max-width: none;
  object-fit: contain;
}

.status-dot {
  display: inline-block;
  flex: 0 0 auto;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
}

.dashboard-layout {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(280px, 1fr);
  align-items: start;
  gap: 24px;
}

.dashboard-main,
.dashboard-aside {
  min-width: 0;
}

.dashboard-main {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.dashboard-aside {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.recognition-card {
  padding: 0;
}

.recognition-banner {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 82px;
  border: 1px solid rgba(var(--v-theme-warning), 0.52);
  border-radius: 6px;
  background: rgba(var(--v-theme-warning), 0.08);
  padding: 14px 16px;
}

.recognition-rail {
  display: grid;
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  place-items: center;
  border-radius: 6px;
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-warning-darken-1));
}

.recognition-content {
  flex: 1 1 auto;
  min-width: 0;
}

.recognition-banner-nav {
  flex: 0 0 auto;
}

.recognition-nav {
  min-width: 44px !important;
  width: 44px;
  height: 44px !important;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.14) !important;
  border-radius: 6px;
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface)) !important;
  transition: transform 140ms var(--dashboard-ease-out), border-color 160ms ease, background-color 160ms ease;
}

.recognition-progress {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-block-start: 14px;
}

.appreciation-quote {
  max-width: 620px;
}

.recognition-progress__item {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(var(--v-theme-on-surface), 0.16);
  transition: background-color 180ms ease;
}

.recognition-progress__item--active {
  width: 18px;
  background: rgb(var(--v-theme-primary));
}

.recognition-nav:active,
.action-button:active,
.section-link:active,
.action-link:active {
  transform: scale(0.97);
}

.dashboard-section {
  min-width: 0;
}

.section-heading {
  align-items: end;
  margin-block-end: 14px;
}

.section-meta {
  color: rgb(var(--v-theme-secondary));
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.summary-card {
  position: relative;
  min-height: 148px;
  overflow: hidden;
  border: 1px solid var(--dashboard-line);
  border-radius: 6px;
  padding: 18px;
  transition: transform 180ms var(--dashboard-ease-out), border-color 180ms ease, background-color 180ms ease;
}

.summary-card::before {
  position: absolute;
  inset-block: 0;
  inset-inline-start: 0;
  width: 3px;
  background: rgb(var(--summary-tone));
  content: '';
}

.summary-card--primary { --summary-tone: var(--v-theme-primary); }
.summary-card--info { --summary-tone: var(--v-theme-info); }
.summary-card--warning { --summary-tone: var(--v-theme-warning); }
.summary-card--success { --summary-tone: var(--v-theme-success); }

.summary-card__top,
.summary-card__helper,
.summary-card__label,
.summary-card__period {
  display: block;
}

.summary-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(var(--summary-tone));
}

.summary-card__period {
  color: rgb(var(--v-theme-secondary));
}

.summary-card__value {
  display: block;
  color: rgb(var(--v-theme-on-surface));
  margin-block: 18px 4px;
}

.summary-card__label {
  color: rgb(var(--v-theme-on-surface));
}

.summary-card__helper {
  color: rgb(var(--v-theme-secondary));
  margin-block-start: 3px;
}

.dashboard-card {
  border: 1px solid var(--dashboard-line);
  border-radius: 6px;
  background: rgb(var(--v-theme-surface));
}

.card-heading {
  padding: 22px 20px 16px;
}

.watchlist-title-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-block-end: 4px;
}

.section-link {
  flex: 0 0 auto;
  margin-block-start: 2px;
}

.dashboard-table-view :deep(.v-tabs) {
  padding-inline: 20px;
}

.dashboard-table-view :deep(.v-tab) {
  min-width: auto;
  padding-inline: 14px;
  color: rgb(var(--v-theme-secondary));
  text-transform: none;
}

.dashboard-table-view :deep(.v-tab--selected) {
  color: rgb(var(--v-theme-primary));
}

.tab-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  border-radius: 999px;
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
  margin-inline-start: 6px;
  padding-inline: 5px;
}

.dashboard-table {
  width: 100%;
}

.dashboard-table-view :deep(.dashboard-table table) {
  border-collapse: collapse;
}

.dashboard-table-view :deep(.dashboard-table th) {
  border-block-end: 1px solid var(--dashboard-muted-line);
  color: rgb(var(--v-theme-secondary));
  padding: 13px 20px;
  text-align: start;
  text-transform: uppercase;
  white-space: nowrap;
}

.dashboard-table-view :deep(.dashboard-table td) {
  border-block-end: 1px solid var(--dashboard-muted-line);
  color: rgb(var(--v-theme-on-surface));
  padding: 14px 20px;
  vertical-align: middle;
}

.dashboard-table-view :deep(.dashboard-table tbody tr:last-child td) {
  border-block-end: 0;
}

.dashboard-table-view :deep(.dashboard-table tbody tr) {
  transition: background-color 160ms ease;
}

.dashboard-table-view :deep(.dashboard-table tbody tr:hover) {
  background: rgba(var(--v-theme-primary), 0.025);
}

.student-cell {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 165px;
}

.student-name,
.student-course,
.issue-title,
.issue-metric {
  display: block;
}

.student-name,
.issue-title {
  color: rgb(var(--v-theme-on-surface));
}

.student-course,
.issue-metric,
.table-muted {
  color: rgb(var(--v-theme-secondary));
  margin-block-start: 3px;
}

.issue-cell {
  min-width: 185px;
}

.status-chip .status-dot {
  margin-inline-end: 5px;
}

.action-button {
  min-width: 72px;
  text-transform: none;
}

.empty-cell {
  color: rgb(var(--v-theme-secondary)) !important;
  padding: 28px 20px !important;
  text-align: center;
}

.due-label {
  color: rgb(var(--v-theme-warning));
  white-space: nowrap;
}

.action-link {
  text-transform: none;
}

.schedule-card {
  overflow: hidden;
}

.schedule-card__header {
  padding: 22px 20px 20px;
}

.schedule-list {
  padding: 0 20px 10px;
}

.schedule-item {
  display: grid;
  grid-template-columns: 74px 1px minmax(0, 1fr);
  gap: 12px;
  min-height: 104px;
}

.schedule-item__time {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-block-start: 2px;
}

.schedule-item__date {
  color: rgb(var(--v-theme-secondary));
}

.schedule-item__clock {
  color: rgb(var(--v-theme-on-surface));
}

.schedule-item__rule {
  width: 1px;
  background: var(--dashboard-line);
}

.schedule-item__content {
  min-width: 0;
  padding-block-end: 18px;
}

.schedule-item__name,
.schedule-item__meta,
.schedule-item__countdown {
  display: block;
}

.schedule-item__name {
  overflow: hidden;
  color: rgb(var(--v-theme-on-surface));
  text-overflow: ellipsis;
  white-space: nowrap;
}

.schedule-item__meta {
  color: rgb(var(--v-theme-secondary));
  margin-block-start: 3px;
}

.schedule-item__countdown {
  color: rgb(var(--v-theme-primary));
  margin-block-start: 13px;
}

.schedule-status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.schedule-status--ready { color: rgb(var(--v-theme-success)); background: rgba(var(--v-theme-success), 0.12); }
.schedule-status--soon { color: rgb(var(--v-theme-warning)); background: rgba(var(--v-theme-warning), 0.14); }
.schedule-status--live { color: rgb(var(--v-theme-error)); background: rgba(var(--v-theme-error), 0.12); }

.schedule-view-all {
  box-sizing: border-box;
  justify-content: center;
  width: calc(100% - 32px);
  min-height: 40px;
  margin: 12px 16px 16px;
  padding-inline: 16px;
  text-transform: none;
}

.freshness-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border: 1px dashed rgba(var(--v-theme-primary), 0.28);
  border-radius: 6px;
  background: rgba(var(--v-theme-primary), 0.035);
  padding: 16px;
}

.freshness-icon {
  display: grid;
  flex: 0 0 auto;
  width: 32px;
  height: 32px;
  place-items: center;
  border-radius: 6px;
  background: rgba(var(--v-theme-primary), 0.1);
}

.action-dialog {
  border: 1px solid var(--dashboard-line);
  border-radius: 6px;
}

.action-context {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: rgba(var(--v-theme-on-surface), 0.035);
  padding: 10px 12px;
}

.dashboard-reveal {
  animation: dashboard-enter 220ms var(--dashboard-ease-out) both;
}

.dashboard-reveal--1 { animation-delay: 0ms; }
.dashboard-reveal--2 { animation-delay: 40ms; }
.dashboard-reveal--3 { animation-delay: 80ms; }
.dashboard-reveal--4 { animation-delay: 120ms; }
.dashboard-reveal--5 { animation-delay: 160ms; }

@keyframes dashboard-enter {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (hover: hover) and (pointer: fine) {
  .summary-card:hover {
    border-color: rgba(var(--v-theme-primary), 0.28);
    transform: translateY(-2px);
  }

  .recognition-nav:hover {
    background: rgba(var(--v-theme-primary), 0.08);
  }
}

@media (max-width: 1100px) {
  .dashboard-header__illustration {
    right: 0;
  }

  .dashboard-layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .dashboard-aside {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(240px, 1fr);
    align-items: start;
  }
}

@media (max-width: 760px) {
  .teacher-dashboard {
    padding-block: 72px 20px;
  }

  .card-heading,
  .section-heading,
  .schedule-card__header {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .dashboard-header {
    grid-template-columns: 1fr;
    min-height: 0;
  }

  .dashboard-header__content {
    padding: 12px 20px 8px;
  }

  .dashboard-header__art {
    min-height: 180px;
  }

  .dashboard-header__illustration {
    top: -20px;
    bottom: auto;
    right: 50%;
    height: 220px;
    transform: translateX(50%);
  }

  .recognition-card {
    padding: 14px;
  }

  .recognition-banner {
    align-items: flex-start;
    padding: 12px;
  }

  .recognition-banner-nav {
    gap: 4px !important;
  }

  .summary-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .dashboard-aside {
    display: flex;
  }

  .dashboard-table-view :deep(.v-table__wrapper) {
    padding: 0 14px 10px;
  }

  .dashboard-table-view :deep(.dashboard-table .v-data-table__thead) {
    display: none;
  }

  .dashboard-table-view :deep(.dashboard-table table),
  .dashboard-table-view :deep(.dashboard-table .v-data-table__tbody),
  .dashboard-table-view :deep(.dashboard-table .v-data-table__tr),
  .dashboard-table-view :deep(.dashboard-table .v-data-table__td) {
    display: block;
    width: 100%;
  }

  .dashboard-table-view :deep(.dashboard-table .v-data-table__tr) {
    border-block-end: 1px solid var(--dashboard-muted-line);
    padding-block: 12px;
  }

  .dashboard-table-view :deep(.dashboard-table .v-data-table__tbody .v-data-table__tr:last-child) {
    border-block-end: 0;
  }

  .dashboard-table-view :deep(.dashboard-table .v-data-table__td) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border: 0;
    padding: 7px 6px;
    text-align: end;
  }

  .dashboard-table-view :deep(.dashboard-table .v-data-table__td::before) {
    color: rgb(var(--v-theme-secondary));
    content: '';
    flex: 0 0 auto;
    font: inherit;
    font-weight: 500;
    text-align: start;
    text-transform: uppercase;
  }

  .dashboard-table-view :deep(.watchlist-table .v-data-table__td:nth-child(1)::before) { content: 'Student'; }
  .dashboard-table-view :deep(.watchlist-table .v-data-table__td:nth-child(2)::before) { content: 'Issue'; }
  .dashboard-table-view :deep(.watchlist-table .v-data-table__td:nth-child(3)::before) { content: 'Risk'; }
  .dashboard-table-view :deep(.watchlist-table .v-data-table__td:nth-child(4)::before) { content: 'Status'; }
  .dashboard-table-view :deep(.watchlist-table .v-data-table__td:nth-child(5)::before) { content: 'Action'; }
  .dashboard-table-view :deep(.pending-table .v-data-table__td:nth-child(1)::before) { content: 'Student'; }
  .dashboard-table-view :deep(.pending-table .v-data-table__td:nth-child(2)::before) { content: 'Course'; }
  .dashboard-table-view :deep(.pending-table .v-data-table__td:nth-child(3)::before) { content: 'Mtg / Lesson'; }
  .dashboard-table-view :deep(.pending-table .v-data-table__td:nth-child(4)::before) { content: 'Due'; }
  .dashboard-table-view :deep(.pending-table .v-data-table__td:nth-child(5)::before) { content: 'Action'; }

  .dashboard-table-view :deep(.dashboard-table .v-data-table__td:first-child) {
    align-items: flex-start;
  }

  .dashboard-table-view :deep(.dashboard-table .v-data-table__td:first-child::before) {
    margin-block-start: 8px;
  }

  .dashboard-table-view :deep(.dashboard-table .v-data-table__td:nth-child(5)) {
    justify-content: space-between;
  }

  .dashboard-table-view :deep(.dashboard-table .empty-cell) {
    display: block;
    text-align: center;
  }

  .dashboard-table-view :deep(.dashboard-table .empty-cell::before) {
    display: none;
  }

  .student-cell,
  .issue-cell {
    min-width: 0;
    text-align: end;
  }

  .student-cell {
    flex-direction: row-reverse;
    text-align: end;
  }

  .issue-cell {
    max-width: 70%;
  }

  .action-button {
    min-width: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dashboard-reveal {
    animation: none;
  }

  .recognition-progress__item,
  .recognition-nav,
  .summary-card,
  .dashboard-table-view :deep(.dashboard-table tbody tr) {
    transition: none;
  }
}
</style>
