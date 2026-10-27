<script setup lang="ts">
import type { StudentRecord } from '@/data/students'
import type { StudentSession } from '@/data/studentSessions'
import type { StudentBook } from '@/data/studentBooks'
import { formatMeetingDate, formatMeetingTime, type StudentMeeting, type MeetingJournal } from '@/data/studentMeetings'
import { journalStatusColor } from '@/composables/useDailyJournalDemo'
import timedoorLogo from '@/assets/images/logo.svg?url'

defineProps<{
  student: Pick<StudentRecord, 'name'>
  session: Pick<StudentSession, 'code'>
  book: Pick<StudentBook, 'title'>
  meeting: Pick<StudentMeeting, 'startsAt' | 'endsAt' | 'teacherName' | 'className' | 'lessons'>
  journal: MeetingJournal
}>()

</script>

<template>
  <VCard variant="outlined" class="report-preview rounded-lg">
    <header class="report-header pa-5 pa-sm-6">
    <div class="d-flex justify-space-between align-center flex-wrap gap-3 mb-5">
      <img :src="timedoorLogo" alt="Timedoor Academy" width="156" height="40" class="report-brand-logo" />
      <span class="text-caption report-code report-header-text">{{ journal.reportCode || 'Draft report' }}</span>
    </div>
    <div class="d-flex justify-space-between align-start flex-wrap gap-3 mb-5">
      <div>
        <p class="text-body-2 mb-1 report-header-text">Daily journal report · {{ session.code }}</p>
        <h3 class="text-h4 font-weight-medium mb-0 report-student">{{ student.name }}</h3>
      </div>
    </div>

    <VRow class="report-facts">
      <VCol cols="12" sm="6"><div class="text-body-2 text-medium-emphasis">Date and time</div><div class="text-body-2">{{ formatMeetingDate(meeting.startsAt) }} · {{ formatMeetingTime(meeting.startsAt) }}–{{ formatMeetingTime(meeting.endsAt) }} WIB</div></VCol>
      <VCol cols="12" sm="6"><div class="text-body-2 text-medium-emphasis">Teacher</div><div class="text-body-2">{{ meeting.teacherName }}</div></VCol>
      <VCol cols="12" sm="6"><div class="text-body-2 text-medium-emphasis">Book</div><div class="text-body-2">{{ book.title }}</div></VCol>
      <VCol cols="12" sm="6"><div class="text-body-2 text-medium-emphasis">Class</div><div class="text-body-2">{{ meeting.className }}</div></VCol>
    </VRow>
    </header>

    <div class="pa-5 pa-sm-6">
    <div class="d-flex align-center justify-space-between flex-wrap gap-2 mb-2">
      <h4 class="text-h5 font-weight-medium text-high-emphasis mb-0">Covered lessons</h4>
      <VChip :color="journalStatusColor(journal.status)" variant="tonal" size="small">{{ journal.status }}</VChip>
    </div>
    <div v-if="meeting.lessons.length">
      <section v-for="(lesson, index) in meeting.lessons" :key="lesson.id" class="report-lesson py-4">
        <div class="d-flex justify-space-between align-start flex-wrap gap-3 mb-3">
          <div class="d-flex align-start gap-3 report-lesson-title">
            <VAvatar color="primary" variant="tonal" size="28" class="text-body-2 font-weight-medium">{{ index + 1 }}</VAvatar>
            <h5 class="text-body-1 font-weight-medium text-high-emphasis mb-0">{{ lesson.title }}</h5>
          </div>
          <div class="d-flex align-center justify-end flex-wrap gap-x-4 gap-y-2 ms-auto text-body-2">
            <span class="d-inline-flex align-center gap-1 font-weight-medium" :class="lesson.progress >= 100 ? 'text-primary' : 'text-medium-emphasis'">
              <VIcon :icon="lesson.progress >= 100 ? 'ri-check-line' : 'ri-time-line'" size="16" />
              {{ lesson.progress }}% {{ lesson.progress >= 100 ? 'Complete' : 'Progress' }}
            </span>
            <span class="text-no-wrap"><span class="text-medium-emphasis">Score:</span> <span class="font-weight-medium text-high-emphasis">{{ lesson.score }}/{{ lesson.maxScore }}</span></span>
          </div>
        </div>
        <ul v-if="lesson.objectives.length" class="text-body-2 text-medium-emphasis ps-5 mb-0 report-objectives">
          <li v-for="objective in lesson.objectives" :key="objective">{{ objective }}</li>
        </ul>
      </section>
    </div>
    <p v-else class="text-body-2 text-medium-emphasis">No lessons recorded.</p>

    <section class="report-notes rounded-lg pa-5 mt-5" aria-labelledby="report-notes-title">
      <div class="d-flex align-center gap-3 mb-3">
        <VAvatar color="primary" variant="tonal" size="36"><VIcon icon="ri-sticky-note-line" size="22" /></VAvatar>
        <h4 id="report-notes-title" class="text-h5 font-weight-medium text-high-emphasis mb-0">Teacher Notes</h4>
      </div>
      <p class="text-body-1 text-high-emphasis mb-0 report-notes-copy">{{ journal.aiSummary || 'Teacher Notes belum dibuat.' }}</p>
    </section>
    <section v-if="journal.evidencePhotos.length" class="mt-5">
      <h4 class="text-h5 font-weight-medium mb-3">Learning documentation</h4>
      <VRow><VCol v-for="(photo, index) in journal.evidencePhotos" :key="photo" cols="4" class="report-photo-column"><VImg :src="photo" :alt="`Dokumentasi kegiatan belajar ${index + 1}`" :aspect-ratio="1" cover class="rounded-lg" /></VCol></VRow>
    </section>
    <VDivider class="mt-5 mb-4" />
    <footer class="d-flex justify-space-between flex-wrap gap-2 text-caption text-medium-emphasis">
      <span>Timedoor Academy · {{ session.code }}</span><span>Teacher · {{ meeting.teacherName }}</span>
    </footer>
    </div>
  </VCard>
</template>

<style scoped lang="scss">
.report-preview {
  border-color: rgba(var(--v-border-color), 0.12);
  background-color: rgb(var(--v-theme-surface));
  box-shadow: none;
}

.report-header { background: rgb(var(--v-theme-primary)); color: rgb(var(--v-theme-on-primary)); }
.report-header .report-header-text { color: rgb(var(--v-theme-on-primary)); }
.report-brand-logo { display: block; max-inline-size: 100%; object-fit: contain; filter: brightness(0) invert(1); }
.report-header .report-student { color: inherit; overflow-wrap: anywhere; }
.report-facts { padding: 12px; border-radius: 8px; background: rgb(var(--v-theme-surface)); color: rgb(var(--v-theme-on-surface)); }
.report-facts > .v-col-12 { padding: 8px 12px; }
.report-lesson-title { min-width: 0; overflow-wrap: anywhere; }
.report-facts :deep(.v-col > div:last-child) { font-weight: 500; }
.report-code, .report-facts { overflow-wrap: anywhere; }
.report-lesson + .report-lesson { border-block-start: 1px solid rgba(var(--v-border-color), 0.12); }
.report-objectives li + li { margin-block-start: 4px; }
.report-notes { background: rgba(var(--v-theme-primary), 0.08); border: 1px solid rgba(var(--v-theme-primary), 0.16); }
.report-notes-copy { white-space: pre-line; overflow-wrap: anywhere; }
.report-photo-column { max-inline-size: 224px; }
</style>
