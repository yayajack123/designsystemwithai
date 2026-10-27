<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import UiSectionHeader from '@/components/ui/UiSectionHeader.vue'
import MeetingJournalReportPreview from '@/components/MeetingJournalReportPreview.vue'
import MarketingJournalPage from '@/components/marketing/MarketingJournalPage.vue'
import { journalMarketingPreview, useMarketingTemplates } from '@/composables/useMarketingTemplates'
import { studentRecords } from '@/data/students'
import { studentSessions } from '@/data/studentSessions'
import { studentHistories, historyBook } from '@/data/studentHistory'
import { studentMeetings, formatMeetingDate, formatMeetingTime } from '@/data/studentMeetings'
import { DEMO_SEND_LIMIT, journalStatusColor, useDailyJournalDemo } from '@/composables/useDailyJournalDemo'

definePageMeta({ path: '/students/:studentId/sessions/:sessionId/history/:historyId/meetings/:meetingId', sidebarRoute: 'students' })

const route = useRoute()
const demo = useDailyJournalDemo()
const marketing = useMarketingTemplates()
const ready = ref(false)
const expandedLessons = ref<Record<string, boolean>>({})
const snapshotMode = computed(() => Boolean(route.params.journalId))
const snapshot = computed(() => demo.records.value[String(route.params.journalId || '')])
onMounted(() => { demo.restore(); ready.value = true })
const studentId = computed(() => String(route.params.studentId || ''))
const sessionId = computed(() => String(route.params.sessionId || ''))
const historyId = computed(() => String(route.params.historyId || ''))
const meetingId = computed(() => String(route.params.meetingId || ''))
const student = computed(() => snapshotMode.value
  ? snapshot.value && { name: snapshot.value.studentName, studentId: snapshot.value.studentCode }
  : studentRecords.find(item => item.id === studentId.value))
const session = computed(() => snapshotMode.value
  ? snapshot.value && { code: snapshot.value.sessionCode }
  : studentSessions.find(item => item.id === sessionId.value && item.studentId === studentId.value))
const history = computed(() => studentHistories.find(item => item.id === historyId.value && item.studentId === studentId.value && item.sessionId === sessionId.value))
const book = computed(() => snapshotMode.value ? snapshot.value && { title: snapshot.value.bookTitle } : history.value ? historyBook(history.value) : undefined)
const meeting = computed(() => snapshotMode.value ? snapshot.value : studentMeetings.find(item => item.id === meetingId.value && item.studentId === studentId.value && item.sessionId === sessionId.value && item.historyId === historyId.value))
const journal = computed(() => meeting.value?.journal)
const campaignPreview = computed(() => journalMarketingPreview(marketing.templates.value, snapshot.value?.marketingPageSnapshot, student.value?.name || 'Siswa'))
const fromAttendance = computed(() => snapshotMode.value && route.query.returnTo === 'attendance-detail')
const historyRoute = computed(() => snapshotMode.value
  ? fromAttendance.value ? { path: '/attendance-detail', query: { id: String(route.query.classId || '1') } } : { path: '/reports' }
  : { path: `/students/${studentId.value}/sessions/${sessionId.value}/history/${historyId.value}`, query: { tab: 'meeting-history' } })
const description = computed(() => student.value && session.value && book.value ? `${student.value.studentId} · ${session.value.code} · ${book.value.title}` : undefined)
const isLocked = computed(() => snapshotMode.value
  ? (snapshot.value?.sendCount || 0) >= DEMO_SEND_LIMIT || snapshot.value?.journal.status === 'Sending'
  : journal.value?.status === 'Sent' || journal.value?.status === 'Sending')
const displayDateTime = (value: string) => `${formatMeetingDate(value)}, ${formatMeetingTime(value)} WIB`
const editRoute = computed(() => ({
  path: '/meeting-journal/create',
  query: {
    classId: String(route.query.classId || '1'),
    studentId: snapshot.value?.studentCode || '',
    journalId: snapshot.value?.id || String(route.params.journalId || ''),
    returnTo: 'attendance-detail',
  },
}))
</script>

<template>
  <section class="meeting-journal-detail">
    <div class="journal-full-width-header bg-surface border-b px-6">
    <UiSectionHeader :title="student?.name || 'Meeting journal'" :description="description" :back="historyRoute" class="journal-page-heading mb-0">
      <template #actions>
        <VBtn v-if="snapshotMode && snapshot && !isLocked" variant="outlined" color="primary" size="small" prepend-icon="ri-edit-line" :to="editRoute">Edit</VBtn>
        <VChip v-if="journal" :color="journalStatusColor(journal.status)" variant="tonal" size="small">{{ journal.status }}</VChip>
      </template>
    </UiSectionHeader>
    </div>

    <VProgressLinear v-if="snapshotMode && !ready" indeterminate color="primary" aria-label="Memuat snapshot jurnal" />
    <VAlert v-else-if="!student || !session || (!snapshotMode && !history) || !book || !meeting || !journal" type="warning" variant="tonal">
      {{ snapshotMode ? 'Snapshot jurnal tidak ditemukan di browser ini. Simpan jurnal terlebih dahulu.' : 'Meeting journal not found for this student, session, and book.' }}
      <div class="mt-3">
        <VBtn color="primary" variant="outlined" :to="historyRoute">{{ snapshotMode ? fromAttendance ? 'Back to Attendance' : 'Back to Reports' : 'Back to meeting history' }}</VBtn>
      </div>
    </VAlert>

    <template v-else>
      <div class="journal-metadata d-flex align-center flex-wrap gap-x-5 gap-y-2 text-body-1 px-6">
        <div class="d-flex align-center flex-wrap gap-2">
          <VIcon icon="ri-user-line" size="20" class="text-medium-emphasis" />
          <span class="text-medium-emphasis">Teacher:</span>
          <span class="font-weight-medium journal-teacher">{{ meeting.teacherName }}</span>
        </div>
        <div class="d-flex align-center flex-wrap gap-2">
          <VIcon icon="ri-history-line" size="19" class="text-medium-emphasis" />
          <span class="text-medium-emphasis">Last updated at</span>
          <span>{{ displayDateTime(journal.updatedAt) }}</span>
        </div>
      </div>

      <section class="journal-section" aria-labelledby="covered-lessons-heading">
        <VAlert v-if="isLocked" icon="ri-lock-line" variant="tonal" color="warning" class="journal-lock mb-6">
          <span class="text-body-1 text-high-emphasis">This journal has been sent and locked.</span>
        </VAlert>
        <h2 id="covered-lessons-heading" class="text-h5 font-weight-medium mb-1">Covered lessons</h2>
        <p class="text-body-2 text-medium-emphasis mb-4">Lessons covered in this meeting</p>

        <div v-if="meeting.lessons.length" class="journal-lesson-list">
          <VCard v-for="lesson in meeting.lessons" :key="lesson.id" variant="outlined" class="journal-card journal-lesson">
            <div class="journal-lesson-header d-flex align-center justify-space-between flex-wrap gap-4 pa-4 bg-surface">
              <div class="journal-lesson-description d-flex align-center">
              <VAvatar :color="lesson.progress >= 100 ? 'primary' : 'info'" size="20" class="me-3 flex-shrink-0">
                <VIcon :icon="lesson.progress >= 100 ? 'ri-check-line' : 'ri-loader-line'" size="14" />
              </VAvatar>
              <div class="journal-lesson-copy">
                <h3 class="text-body-1 font-weight-medium mb-1">{{ lesson.title }}</h3>
                <div class="d-flex align-center gap-1 text-caption font-weight-medium" :class="lesson.progress >= 100 ? 'text-primary' : 'text-info'">
                  <VIcon :icon="lesson.progress >= 100 ? 'ri-check-line' : 'ri-loader-2-line'" size="12" />
                  <span>{{ lesson.progress }}% {{ lesson.progress >= 100 ? 'Complete' : 'Progress' }}</span>
                </div>
              </div>
              </div>
              <div class="d-flex align-center gap-3 ms-auto text-body-2 text-no-wrap">
                <span class="text-medium-emphasis">Score :</span>
                <div class="d-flex align-center gap-2">
                  <strong class="text-h4 font-weight-medium text-primary">{{ lesson.score }}</strong>
                  <span>/</span><span>{{ lesson.maxScore }}</span>
                </div>
              </div>
            </div>
            <div class="journal-objectives">
              <button type="button" class="journal-objectives-toggle d-flex align-center justify-space-between px-4 py-3 w-100" :aria-expanded="Boolean(expandedLessons[lesson.id])" @click="expandedLessons[lesson.id] = !expandedLessons[lesson.id]">
                <span class="d-flex align-center gap-2">
                  <span class="journal-objective-circle d-flex align-center justify-center"><VIcon icon="ri-focus-2-line" size="12" color="white" /></span>
                  <span class="text-body-2 font-weight-medium text-high-emphasis">Lesson Objective</span>
                </span>
                <span class="journal-accordion-arrow bg-surface border rounded d-flex align-center justify-center">
                  <VIcon :icon="expandedLessons[lesson.id] ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'" size="18" class="text-medium-emphasis" />
                </span>
              </button>
              <div v-show="expandedLessons[lesson.id]" class="px-4 pb-4">
                <ul v-if="lesson.objectives.length" class="text-body-2 text-medium-emphasis pl-6 mb-0">
                  <li v-for="objective in lesson.objectives" :key="objective" class="mb-1">{{ objective }}</li>
                </ul>
                <p v-else class="text-body-2 text-medium-emphasis mb-0">No lesson objectives.</p>
              </div>
            </div>
          </VCard>
        </div>
        <VCard v-else variant="outlined" class="journal-card pa-5 text-body-2 text-medium-emphasis">No lessons recorded for this meeting.</VCard>
      </section>

      <section class="journal-section" aria-labelledby="details-heading">
        <VRow>
          <VCol cols="12" md="6">
            <h2 id="details-heading" class="text-h5 font-weight-medium mb-1">Detail information</h2>
            <p class="text-body-1 text-medium-emphasis mb-6">Project details, teacher notes, and evidence</p>
            <div class="journal-detail-stack">
              <VCard variant="outlined" class="journal-card pa-5">
                <div class="d-flex align-center justify-space-between flex-wrap gap-2 mb-6">
                  <h3 class="text-body-1 font-weight-medium mb-0">Project details</h3>
                  <span class="text-body-2 text-medium-emphasis d-flex align-center gap-2">
                    <VIcon :icon="journal.activeProject ? 'ri-checkbox-line' : 'ri-checkbox-blank-line'" :color="journal.activeProject ? 'primary' : undefined" size="18" />
                    Active project: {{ journal.activeProject ? 'Yes' : 'No' }}
                  </span>
                </div>
                <div class="journal-readonly-field pa-3 mb-6">
                  <h4 class="text-body-2 font-weight-medium mb-2">Project</h4>
                  <p class="text-body-2 mb-0">{{ journal.projectName || 'None' }}</p>
                </div>
                <div class="journal-readonly-field pa-3">
                  <h4 class="text-body-2 font-weight-medium mb-2">Teacher Notes (bahan AI)</h4>
                  <p class="text-caption text-medium-emphasis mb-2">Bahan untuk AI. Catatan ini tidak ditampilkan langsung ke Parents.</p>
                  <p class="text-body-2 journal-copy mb-0">{{ journal.teacherNotes || 'No teacher notes.' }}</p>
                </div>
              </VCard>

              <VCard variant="outlined" class="journal-card pa-5">
                <h3 class="text-body-1 font-weight-medium mb-5">Evidence photo</h3>
                <VRow v-if="journal.evidencePhotos.length" class="journal-photo-row">
                  <VCol v-for="(photo, index) in journal.evidencePhotos" :key="photo" :cols="journal.evidencePhotos.length === 1 ? 12 : 6" :sm="journal.evidencePhotos.length > 2 ? 4 : undefined">
                    <VImg :src="photo" :alt="`Dokumentasi kegiatan belajar ${index + 1}`" :aspect-ratio="1" cover class="journal-photo" />
                  </VCol>
                </VRow>
                <p v-else class="text-body-2 text-medium-emphasis mb-0">No evidence photos.</p>
              </VCard>

              <VCard v-if="journal.mediaMode === 'video' && journal.video" variant="outlined" class="journal-card pa-5">
                <h3 class="text-body-1 font-weight-medium mb-3">Evidence video</h3>
                <p class="text-body-2 text-medium-emphasis journal-copy">{{ journal.video.name }}</p>
                <video :src="journal.video.url" controls preload="metadata" class="journal-evidence-video" />
              </VCard>
            </div>
          </VCol>

          <VCol cols="12" md="6">
            <VCard variant="outlined" class="journal-card journal-summary pa-4">
              <div class="d-flex align-center gap-2 mb-5">
                <VAvatar color="primary" size="24"><VIcon icon="ri-magic-line" size="16" /></VAvatar>
                <h3 class="text-body-1 font-weight-medium mb-0">Teacher Notes di Daily Journal</h3>
              </div>
              <div class="journal-readonly-field journal-summary-copy pa-4">
                <p class="text-caption text-medium-emphasis mb-3">Hasil olahan AI</p>
                <p class="text-body-2 journal-copy mb-0">{{ journal.aiSummary || 'No summary.' }}</p>
              </div>
            </VCard>
          </VCol>
        </VRow>
      </section>

      <section class="journal-section journal-review" aria-labelledby="review-report-heading">
        <div class="d-flex align-center justify-space-between flex-wrap gap-3 mb-6">
          <div>
            <h2 id="review-report-heading" class="text-h5 font-weight-medium mb-1">Review report</h2>
            <p class="text-body-1 text-medium-emphasis mb-0">Daily journal report for Parents</p>
          </div>
          <div class="journal-sent-badge d-flex align-center flex-wrap gap-2 text-body-2">
            <VAvatar color="primary" size="24"><VIcon icon="ri-send-plane-2-line" size="16" /></VAvatar>
            <span class="text-medium-emphasis">Last sent time:</span>
            <span>{{ journal.sentAt ? displayDateTime(journal.sentAt) : journal.status }}</span>
          </div>
        </div>
        <VCard variant="outlined" class="journal-card pa-4">
          <MeetingJournalReportPreview :student="student" :session="session" :book="book" :meeting="meeting" :journal="journal" />
          <template v-if="campaignPreview">
            <VDivider class="my-6" />
            <p v-if="!snapshot?.marketingPageSnapshot" class="text-body-2 text-medium-emphasis mb-4">Contoh campaign trial gratis · Mockup dengan nomor WhatsApp demo.</p>
            <MarketingJournalPage :snapshot="campaignPreview" />
          </template>
          <div class="journal-review-meta d-flex align-center justify-space-between flex-wrap gap-3 text-body-2 mt-3 px-5 py-3">
            <div class="d-flex align-center flex-wrap gap-3">
              <VIcon icon="ri-user-line" size="16" class="text-primary" />
              <span class="font-weight-medium">{{ student.name }}</span>
              <span class="text-medium-emphasis">{{ meeting.className }}</span>
              <span class="text-medium-emphasis">{{ book.title }}</span>
            </div>
            <span class="text-medium-emphasis">{{ displayDateTime(meeting.startsAt) }}</span>
          </div>
        </VCard>
      </section>
    </template>
  </section>
</template>

<style scoped lang="scss">
.meeting-journal-detail { min-inline-size: 0; }
.journal-full-width-header { margin-inline: -24px; margin-block-start: -24px; padding-block: 20px; }
.journal-page-heading { margin-block-end: 0 !important; }
.journal-page-heading :deep(h1) { font-size: 0.9375rem; line-height: 1.375rem; }
.journal-page-heading :deep(p) { font-size: 0.8125rem !important; line-height: 1.25rem !important; }
.journal-metadata {
  margin-inline: -24px;
  padding: 12px 0;
  border-block-end: 1px solid rgba(var(--v-border-color), 0.12);
  background: rgb(var(--v-theme-surface));
}
.journal-teacher { color: rgb(var(--v-theme-primary-darken-1)); }
.journal-section { padding-block: 24px; border-block-end: 1px solid rgba(var(--v-border-color), 0.12); }
.journal-lesson-list { display: flex; flex-direction: column; gap: 20px; }
.journal-card { border: 1px solid rgba(var(--v-border-color), 0.12); border-radius: 12px; background: rgb(var(--v-theme-surface)); box-shadow: none; }
.journal-lesson-header { border-block-end: 1px solid rgb(var(--v-theme-primary)); }
.journal-lesson-description { flex: 1 1 180px; min-inline-size: 0; }
.journal-lesson-copy { min-inline-size: 0; overflow-wrap: anywhere; }
.journal-accordion-arrow { inline-size: 30px; block-size: 30px; border-color: rgba(var(--v-border-color), 0.08) !important; }
.journal-objectives { background: rgba(var(--v-theme-on-surface), 0.03); }
.journal-objective-circle { inline-size: 20px; block-size: 20px; border-radius: 50%; background: rgb(var(--v-theme-primary)); }
.journal-objectives-toggle { text-align: start; }
.journal-objectives-toggle:focus-visible { outline: 2px solid rgb(var(--v-theme-primary)); outline-offset: -2px; }
.journal-detail-stack { display: flex; flex-direction: column; gap: 20px; }
.journal-readonly-field, .journal-review-meta { border-radius: 12px; background: rgba(var(--v-theme-on-surface), 0.02); }
.journal-readonly-field { border: 1px solid rgba(var(--v-border-color), 0.12); }
.journal-summary-copy { min-block-size: 334px; }
.journal-copy { white-space: pre-wrap; overflow-wrap: anywhere; }
.journal-photo-row { margin: -8px; }
.journal-photo-row > .v-col { padding: 8px; }
.journal-photo { border-radius: 12px; max-inline-size: 240px; }
.journal-evidence-video { display: block; inline-size: 100%; max-block-size: 320px; }
.journal-sent-badge { padding: 6px 12px 6px 6px; border: 1px solid rgba(var(--v-border-color), 0.12); border-radius: 24px; background: rgb(var(--v-theme-surface)); }
.journal-lock { flex: 0 0 auto; border: 1px solid rgba(var(--v-theme-warning), 0.16); border-radius: 12px; background: rgba(var(--v-theme-warning), 0.08); }
.journal-review { border-block-end: 0; }
@media (max-width: 599px) {
  .journal-summary-copy { min-block-size: 0; }
}
</style>
