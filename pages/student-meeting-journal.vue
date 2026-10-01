<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import UiSectionHeader from '@/components/ui/UiSectionHeader.vue'
import MeetingJournalReportPreview from '@/components/MeetingJournalReportPreview.vue'
import { studentRecords } from '@/data/students'
import { studentSessions } from '@/data/studentSessions'
import { studentHistories, historyBook } from '@/data/studentHistory'
import { studentMeetings, formatMeetingDate, formatMeetingTime } from '@/data/studentMeetings'

definePageMeta({ path: '/students/:studentId/sessions/:sessionId/history/:historyId/meetings/:meetingId', sidebarRoute: 'students' })

const route = useRoute()
const studentId = computed(() => String(route.params.studentId || ''))
const sessionId = computed(() => String(route.params.sessionId || ''))
const historyId = computed(() => String(route.params.historyId || ''))
const meetingId = computed(() => String(route.params.meetingId || ''))
const student = computed(() => studentRecords.find(item => item.id === studentId.value))
const session = computed(() => studentSessions.find(item => item.id === sessionId.value && item.studentId === studentId.value))
const history = computed(() => studentHistories.find(item => item.id === historyId.value && item.studentId === studentId.value && item.sessionId === sessionId.value))
const book = computed(() => history.value ? historyBook(history.value) : undefined)
const meeting = computed(() => studentMeetings.find(item => item.id === meetingId.value && item.studentId === studentId.value && item.sessionId === sessionId.value && item.historyId === historyId.value))
const journal = computed(() => meeting.value?.journal)
const historyRoute = computed(() => ({ path: `/students/${studentId.value}/sessions/${sessionId.value}/history/${historyId.value}`, query: { tab: 'meeting-history' } }))
const displayDateTime = (value: string) => `${formatMeetingDate(value)}, ${formatMeetingTime(value)} WIB`
</script>

<template>
  <section class="meeting-journal-detail">
    <UiSectionHeader
      :title="student?.name || 'Meeting journal'"
      :description="student && session && book ? `${student.studentId} · Session ${session.number} · ${book.title}` : undefined"
      :back="historyRoute"
      class="mb-6"
    >
      <template #actions>
        <div v-if="meeting && journal" class="d-flex align-center flex-wrap justify-end gap-3">
          <div class="teacher-info-badge px-4 py-2 rounded-pill d-flex align-center gap-2 border">
            <VIcon icon="ri-user-line" size="20" class="text-medium-emphasis" />
            <span class="text-body-2 text-medium-emphasis">Teacher:</span>
            <span class="text-body-2 font-weight-medium text-primary">{{ meeting.teacherName }}</span>
          </div>
          <VChip :color="journal.status === 'Sent' ? 'success' : 'secondary'" variant="tonal" size="small">
            {{ journal.status }}
          </VChip>
        </div>
      </template>
    </UiSectionHeader>

    <VAlert v-if="!student || !session || !history || !book || !meeting || !journal" type="warning" variant="tonal">
      Meeting journal not found for this student, session, and book.
      <div class="mt-3">
        <VBtn color="primary" variant="outlined" rounded="pill" :to="historyRoute">Back to meeting history</VBtn>
      </div>
    </VAlert>

    <template v-else>
      <VAlert v-if="journal.status === 'Sent'" type="info" variant="tonal" class="mb-6">
        This journal has been sent and locked.
      </VAlert>

      <section class="mb-6" aria-labelledby="covered-lessons-heading">
        <div class="mb-4">
          <h2 id="covered-lessons-heading" class="text-h5 font-weight-medium text-high-emphasis mb-1">Covered lessons</h2>
          <p class="text-body-2 text-medium-emphasis mb-0">Lessons covered in this meeting</p>
        </div>

        <VExpansionPanels v-if="meeting.lessons.length" variant="accordion" class="lesson-panels">
          <VExpansionPanel v-for="lesson in meeting.lessons" :key="lesson.id">
            <VExpansionPanelTitle>
              <div class="d-flex align-center justify-space-between flex-wrap gap-3 w-100 me-3">
                <div>
                  <div class="text-body-1 font-weight-medium text-high-emphasis">{{ lesson.title }}</div>
                  <div class="text-body-2 text-medium-emphasis">{{ lesson.progress }}% progress</div>
                </div>
                <span class="text-body-2 text-medium-emphasis">Score: <strong class="font-weight-medium text-high-emphasis">{{ lesson.score }}/{{ lesson.maxScore }}</strong></span>
              </div>
            </VExpansionPanelTitle>
            <VExpansionPanelText>
              <h3 class="text-body-1 font-weight-medium mb-2">Lesson objectives</h3>
              <ul class="text-body-2 text-medium-emphasis ps-5 mb-0">
                <li v-for="objective in lesson.objectives" :key="objective">{{ objective }}</li>
              </ul>
            </VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
        <VCard v-else variant="outlined" class="journal-card pa-5 text-body-2 text-medium-emphasis">
          No lessons recorded for this meeting.
        </VCard>
      </section>

      <section class="mb-6" aria-labelledby="details-heading">
        <div class="mb-4">
          <h2 id="details-heading" class="text-h5 font-weight-medium text-high-emphasis mb-1">Add details</h2>
          <p class="text-body-2 text-medium-emphasis mb-0">Project, notes, evidence, and summary</p>
        </div>

        <VRow class="details-grid">
          <VCol cols="12" md="6" class="d-flex flex-column gap-6">
            <VCard variant="outlined" class="journal-card pa-5">
              <h3 class="text-body-1 font-weight-medium text-high-emphasis mb-4">Project details</h3>
              <dl class="journal-facts mb-0">
                <div>
                  <dt class="text-body-2 text-medium-emphasis">Active project</dt>
                  <dd class="text-body-1">{{ journal.activeProject ? 'Yes' : 'No' }}</dd>
                </div>
                <div>
                  <dt class="text-body-2 text-medium-emphasis">Project</dt>
                  <dd class="text-body-1">{{ journal.projectName || 'None' }}</dd>
                </div>
              </dl>
            </VCard>

            <VCard variant="outlined" class="journal-card pa-5">
              <h3 class="text-body-1 font-weight-medium text-high-emphasis mb-3">Teacher notes</h3>
              <p class="text-body-2 mb-0">{{ journal.teacherNotes || 'No teacher notes.' }}</p>
            </VCard>
          </VCol>

          <VCol cols="12" md="6" class="d-flex flex-column gap-6">
            <VCard variant="outlined" class="journal-card pa-5">
              <h3 class="text-body-1 font-weight-medium text-high-emphasis mb-3">AI summary</h3>
              <p class="text-body-2 mb-0">{{ journal.aiSummary || 'No summary.' }}</p>
            </VCard>

            <VCard variant="outlined" class="journal-card pa-5">
              <h3 class="text-body-1 font-weight-medium text-high-emphasis mb-4">Evidence photo</h3>
              <div v-if="journal.evidencePhotos.length" class="d-flex flex-wrap gap-3">
                <VImg
                  v-for="photo in journal.evidencePhotos"
                  :key="photo"
                  :src="photo"
                  :alt="`Evidence for meeting ${meeting.number}`"
                  width="120"
                  max-width="120"
                  height="120"
                  cover
                  class="rounded-lg"
                />
              </div>
              <p v-else class="text-body-2 text-medium-emphasis mb-0">No evidence photos.</p>
            </VCard>
          </VCol>
        </VRow>
      </section>

      <section aria-labelledby="review-report-heading">
        <div class="mb-4">
          <h2 id="review-report-heading" class="text-h5 font-weight-medium text-high-emphasis mb-1">Review report</h2>
          <p class="text-body-2 text-medium-emphasis mb-0">
            {{ journal.status === 'Sent' ? `Sent ${journal.sentAt ? displayDateTime(journal.sentAt) : 'date unavailable'}` : 'Draft preview' }}
          </p>
        </div>
        <MeetingJournalReportPreview :student="student" :session="session" :book="book" :meeting="meeting" :journal="journal" />
      </section>
    </template>
  </section>
</template>

<style scoped lang="scss">
.teacher-info-badge {
  border-color: rgba(var(--v-border-color), 0.12) !important;
  background-color: rgb(var(--v-theme-surface));
}

.lesson-panels,
.journal-card {
  border: 1px solid rgba(var(--v-border-color), 0.12);
  border-radius: 8px;
  background-color: rgb(var(--v-theme-surface));
  box-shadow: none;
}

.journal-facts {
  display: flex;
  flex-direction: column;
  gap: 16px;

  dd {
    margin: 3px 0 0;
  }
}
</style>
