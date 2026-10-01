<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import UiSectionHeader from '@/components/ui/UiSectionHeader.vue'
import UiTableView from '@/components/ui/UiTableView.vue'
import { studentRecords } from '@/data/students'
import { studentSessions } from '@/data/studentSessions'
import { studentHistories, historyBook, meetingsForHistory } from '@/data/studentHistory'
import { formatMeetingDate, formatMeetingTime, type StudentMeeting } from '@/data/studentMeetings'

definePageMeta({ path: '/students/:studentId/sessions/:sessionId/history/:historyId', sidebarRoute: 'students' })

const route = useRoute()
const router = useRouter()
const studentId = computed(() => String(route.params.studentId || ''))
const sessionId = computed(() => String(route.params.sessionId || ''))
const historyId = computed(() => String(route.params.historyId || ''))
const student = computed(() => studentRecords.find(item => item.id === studentId.value))
const session = computed(() => studentSessions.find(item => item.id === sessionId.value && item.studentId === studentId.value))
const history = computed(() => studentHistories.find(item => item.id === historyId.value && item.studentId === studentId.value && item.sessionId === sessionId.value))
const book = computed(() => history.value ? historyBook(history.value) : undefined)
const meetings = computed(() => history.value ? meetingsForHistory(history.value) : [])
const meetingPage = ref(1)
const meetingPageCount = computed(() => Math.ceil(meetings.value.length / 10))
const visibleMeetings = computed(() => meetings.value.slice((meetingPage.value - 1) * 10, meetingPage.value * 10))
const activeTab = computed(() => ['meeting-history', 'report'].includes(String(route.query.tab)) ? String(route.query.tab) : 'learning-progress')
const selectTab = (tab: string) => router.replace({ query: { ...route.query, tab } })
const sessionRoute = computed(() => ({ path: `/students/${studentId.value}/sessions/${sessionId.value}`, query: { tab: 'history' } }))
const meetingRoute = (id: string) => `/students/${studentId.value}/sessions/${sessionId.value}/history/${historyId.value}/meetings/${id}`
const selectedMeeting = ref<StudentMeeting | null>(null)
const lessonDialog = ref(false)
const openLessons = (meeting: StudentMeeting) => { selectedMeeting.value = meeting; lessonDialog.value = true }
const meetingHeaders = [
  { title: 'Class', key: 'className' },
  { title: 'Date', key: 'date' },
  { title: 'Lesson opened', key: 'lessons' },
  { title: 'Time', key: 'time' },
  { title: 'Action', key: 'action', sortable: false },
]
const reports = computed(() => meetings.value.filter(item => item.journal?.status === 'Sent' && item.journal.reportCode))
const reportHeaders = [
  { title: 'Report', key: 'code' },
  { title: 'Meeting', key: 'meeting' },
  { title: 'Status', key: 'status' },
  { title: 'Sent', key: 'sentAt' },
  { title: 'Action', key: 'action', sortable: false },
]
const lessonCount = (chapter: NonNullable<typeof history.value>['chapters'][number]) => chapter.lessons.length
const chapterProgress = (chapter: NonNullable<typeof history.value>['chapters'][number]) => chapter.lessons.length
  ? Math.round(chapter.lessons.reduce((sum, item) => sum + item.progress, 0) / chapter.lessons.length) : 0
const progressLabel = (value: number) => value >= 100 ? 'Done' : value > 0 ? 'In progress' : 'Not started'
const formatDateTime = (value: string) => `${formatMeetingDate(value)}, ${formatMeetingTime(value)} WIB`
</script>

<template>
  <section>
    <UiSectionHeader title="Student learning progress" :back="sessionRoute" :description="book?.title" class="mb-6" />
    <VAlert v-if="!student || !session || !history || !book" type="warning" variant="tonal">
      Book history not found for this student and session.
      <div class="mt-3"><VBtn color="primary" variant="outlined" rounded="pill" :to="sessionRoute">Back to session history</VBtn></div>
    </VAlert>
    <template v-else>
      <VTabs :model-value="activeTab" class="v-tabs-bordered mb-6" @update:model-value="selectTab">
        <VTab value="learning-progress">Learning progress</VTab>
        <VTab value="meeting-history">Meeting history</VTab>
        <VTab value="report">Report</VTab>
      </VTabs>
      <VRow>
        <VCol cols="12" md="8">
          <div v-if="activeTab === 'learning-progress'">
            <h2 class="text-h6 mb-4">{{ book.title }}</h2>
            <VExpansionPanels v-if="history.chapters.length" variant="accordion">
              <VExpansionPanel v-for="chapter in history.chapters" :key="chapter.id">
                <VExpansionPanelTitle>
                  <div class="d-flex align-center flex-wrap gap-3"><span class="text-body-1 font-weight-medium">{{ chapter.title }}</span><span class="text-body-2 text-medium-emphasis">{{ lessonCount(chapter) }} lessons · {{ chapterProgress(chapter) }}%</span><VChip :color="chapterProgress(chapter) === 100 ? 'success' : chapterProgress(chapter) ? 'info' : 'secondary'" size="small" variant="tonal">{{ progressLabel(chapterProgress(chapter)) }}</VChip></div>
                </VExpansionPanelTitle>
                <VExpansionPanelText>
                  <VCard v-for="lesson in chapter.lessons" :key="lesson.id" variant="outlined" class="pa-4 mb-3">
                    <div class="d-flex justify-space-between align-start flex-wrap gap-2"><div><h3 class="text-body-1 font-weight-medium mb-1">{{ lesson.title }}</h3><span class="text-body-2 text-medium-emphasis">{{ lesson.progress }}% progress · Score {{ lesson.score }}/{{ lesson.maxScore }}</span></div><VChip :color="lesson.progress === 100 ? 'success' : lesson.progress ? 'info' : 'secondary'" size="small" variant="tonal">{{ progressLabel(lesson.progress) }}</VChip></div>
                    <VProgressLinear :model-value="lesson.progress" color="primary" class="my-3" :aria-label="`${lesson.title} progress ${lesson.progress}%`" />
                    <ul class="text-body-2 ps-5 mb-0"><li v-for="objective in lesson.objectives" :key="objective">{{ objective }}</li></ul>
                  </VCard>
                </VExpansionPanelText>
              </VExpansionPanel>
            </VExpansionPanels>
            <VCard v-else variant="outlined" class="pa-6 text-body-2 text-medium-emphasis">No learning progress for this book yet.</VCard>
          </div>

          <div v-else-if="activeTab === 'meeting-history'">
            <h2 class="text-h6 mb-4">Meeting history</h2>
            <UiTableView title="" :headers="meetingHeaders" :items="visibleMeetings" :mobile-cards="true" :hide-filters="true" :hide-pagination="true">
              <template #item.date="{ item }"><div class="text-body-1 font-weight-medium">{{ formatMeetingDate(item.startsAt) }}</div><div class="text-body-2 text-medium-emphasis">Meeting {{ item.number }}</div></template>
              <template #item.lessons="{ item }"><span>{{ item.lessons.length }} lessons</span><VBtn v-if="item.lessons.length" color="primary" variant="text" rounded="pill" size="small" @click="openLessons(item)">See details</VBtn></template>
              <template #item.time="{ item }">{{ formatMeetingTime(item.startsAt) }}–{{ formatMeetingTime(item.endsAt) }} WIB</template>
              <template #item.action="{ item }"><VBtn v-if="item.journal" color="primary" variant="text" rounded="pill" :to="meetingRoute(item.id)">Meeting journal</VBtn><span v-else class="text-body-2 text-medium-emphasis">No journal</span></template>
              <template #no-data><p class="pa-6 text-body-2 text-medium-emphasis">No meetings recorded for this book.</p></template>
              <template #mobile-cards="{ items }"><div v-if="items.length" class="pa-4 d-flex flex-column gap-3"><VCard v-for="item in items" :key="item.id" variant="outlined" class="pa-4"><h3 class="text-body-1 font-weight-medium mb-1">Meeting {{ item.number }} · {{ item.className }}</h3><p class="text-body-2 text-medium-emphasis mb-2">{{ formatMeetingDate(item.startsAt) }} · {{ formatMeetingTime(item.startsAt) }}–{{ formatMeetingTime(item.endsAt) }} WIB</p><p class="text-body-2 mb-2">{{ item.lessons.length }} lessons</p><div class="d-flex flex-wrap gap-2"><VBtn v-if="item.lessons.length" color="primary" variant="text" rounded="pill" @click="openLessons(item)">See details</VBtn><VBtn v-if="item.journal" color="primary" variant="text" rounded="pill" :to="meetingRoute(item.id)">Meeting journal</VBtn><span v-else class="text-body-2 text-medium-emphasis">No journal</span></div></VCard></div><p v-else class="pa-6 text-body-2 text-medium-emphasis">No meetings recorded for this book.</p></template>
            </UiTableView>
            <div v-if="meetingPageCount > 1" class="d-flex justify-end mt-4"><VPagination v-model="meetingPage" :length="meetingPageCount" aria-label="Meeting pages" /></div>
          </div>

          <div v-else>
            <h2 class="text-h6 mb-4">Report list</h2>
            <UiTableView title="" :headers="reportHeaders" :items="reports" :mobile-cards="true" :hide-filters="true">
              <template #item.code="{ item }">{{ item.journal?.reportCode }}</template>
              <template #item.meeting="{ item }">Meeting {{ item.number }}</template>
              <template #item.status="{ item }"><VChip color="success" variant="tonal" size="small">{{ item.journal?.status }}</VChip></template>
              <template #item.sentAt="{ item }">{{ item.journal?.sentAt ? formatDateTime(item.journal.sentAt) : '—' }}</template>
              <template #item.action="{ item }"><VBtn color="primary" variant="text" rounded="pill" :to="meetingRoute(item.id)">View report</VBtn></template>
              <template #no-data><p class="pa-6 text-body-2 text-medium-emphasis">No sent reports for this book.</p></template>
              <template #mobile-cards="{ items }"><div v-if="items.length" class="pa-4 d-flex flex-column gap-3"><VCard v-for="item in items" :key="item.id" variant="outlined" class="pa-4"><div class="d-flex justify-space-between gap-2"><h3 class="text-body-1 font-weight-medium mb-1">{{ item.journal?.reportCode }}</h3><VChip color="success" variant="tonal" size="small">{{ item.journal?.status }}</VChip></div><p class="text-body-2 text-medium-emphasis mb-2">Meeting {{ item.number }} · {{ item.journal?.sentAt ? formatDateTime(item.journal.sentAt) : '—' }}</p><VBtn color="primary" variant="text" rounded="pill" :to="meetingRoute(item.id)">View report</VBtn></VCard></div><p v-else class="pa-6 text-body-2 text-medium-emphasis">No sent reports for this book.</p></template>
            </UiTableView>
          </div>
        </VCol>
        <VCol cols="12" md="4">
          <VCard variant="outlined" class="pa-6"><h2 class="text-h6 mb-4">Student information</h2><div class="text-body-1 font-weight-medium">{{ student.name }}</div><div class="text-body-2 text-medium-emphasis mb-5">{{ student.studentId }}</div><VDivider class="mb-4" /><dl class="facts"><div><dt class="text-body-2 text-medium-emphasis">Course</dt><dd class="text-body-1">{{ history.course }}</dd></div><div><dt class="text-body-2 text-medium-emphasis">Course status</dt><dd><VChip :color="history.status === 'Completed' ? 'success' : 'primary'" variant="tonal" size="small">{{ history.status }}</VChip></dd></div><div><dt class="text-body-2 text-medium-emphasis">Branch</dt><dd class="text-body-1">{{ session.branch || 'Not assigned' }}</dd></div></dl></VCard>
        </VCol>
      </VRow>
    </template>
    <VDialog v-model="lessonDialog" max-width="560"><VCard><VCardTitle class="text-h6">Lesson opened</VCardTitle><VCardText><div v-if="selectedMeeting?.lessons.length"><div v-for="lesson in selectedMeeting.lessons" :key="lesson.id" class="py-2"><strong>{{ lesson.title }}</strong><p class="text-body-2 text-medium-emphasis mb-0">{{ lesson.progress }}% progress · Score {{ lesson.score }}/{{ lesson.maxScore }}</p></div></div><p v-else>No lessons opened.</p></VCardText><VCardActions><VSpacer /><VBtn color="primary" variant="text" rounded="pill" @click="lessonDialog = false">Close</VBtn></VCardActions></VCard></VDialog>
  </section>
</template>

<style scoped lang="scss">
.facts { display: flex; flex-direction: column; gap: 20px; }
.facts dd { margin: 4px 0 0; }
</style>
