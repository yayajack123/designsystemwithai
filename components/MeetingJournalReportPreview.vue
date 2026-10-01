<script setup lang="ts">
import type { StudentRecord } from '@/data/students'
import type { StudentSession } from '@/data/studentSessions'
import type { StudentBook } from '@/data/studentBooks'
import { formatMeetingDate, formatMeetingTime, type StudentMeeting, type MeetingJournal } from '@/data/studentMeetings'

defineProps<{
  student: StudentRecord
  session: StudentSession
  book: StudentBook
  meeting: StudentMeeting
  journal: MeetingJournal
}>()
</script>

<template>
  <VCard variant="outlined" class="report-preview rounded-lg pa-5">
    <div class="d-flex justify-space-between flex-wrap gap-3 mb-5">
      <div>
        <div class="text-caption text-primary font-weight-medium">Timedoor Academy</div>
        <h3 class="text-h5 font-weight-medium text-high-emphasis mb-0">Daily journal report</h3>
      </div>
      <VChip :color="journal.status === 'Sent' ? 'success' : 'secondary'" variant="tonal" size="small">{{ journal.status }}</VChip>
    </div>
    <p class="text-body-2 text-medium-emphasis mb-5">{{ journal.reportCode || 'Draft report' }} · {{ student.name }} · {{ session.code }}</p>

    <VRow class="report-facts mb-2">
      <VCol cols="12" sm="6"><div class="text-body-2 text-medium-emphasis">Date and time</div><div class="text-body-2">{{ formatMeetingDate(meeting.startsAt) }} · {{ formatMeetingTime(meeting.startsAt) }}–{{ formatMeetingTime(meeting.endsAt) }} WIB</div></VCol>
      <VCol cols="12" sm="6"><div class="text-body-2 text-medium-emphasis">Teacher</div><div class="text-body-2">{{ meeting.teacherName }}</div></VCol>
      <VCol cols="12" sm="6"><div class="text-body-2 text-medium-emphasis">Book</div><div class="text-body-2">{{ book.title }}</div></VCol>
      <VCol cols="12" sm="6"><div class="text-body-2 text-medium-emphasis">Class</div><div class="text-body-2">{{ meeting.className }}</div></VCol>
    </VRow>

    <VDivider class="mb-4" />
    <h4 class="text-body-1 font-weight-medium text-high-emphasis mb-3">Covered lessons</h4>
    <div v-if="meeting.lessons.length">
      <div v-for="lesson in meeting.lessons" :key="lesson.id" class="mb-4">
        <div class="text-body-2 font-weight-medium text-high-emphasis">{{ lesson.title }} · {{ lesson.score }}/{{ lesson.maxScore }}</div>
        <ul class="text-body-2 text-medium-emphasis ps-5 mt-1 mb-0">
          <li v-for="objective in lesson.objectives" :key="objective">{{ objective }}</li>
        </ul>
      </div>
    </div>
    <p v-else class="text-body-2 text-medium-emphasis">No lessons recorded.</p>

    <h4 class="text-body-1 font-weight-medium text-high-emphasis mt-5 mb-2">Teacher notes</h4>
    <p class="text-body-2 mb-0">{{ journal.teacherNotes || 'No teacher notes.' }}</p>
    <h4 class="text-body-1 font-weight-medium text-high-emphasis mt-5 mb-2">AI summary</h4>
    <p class="text-body-2 mb-0">{{ journal.aiSummary || 'No summary.' }}</p>
  </VCard>
</template>

<style scoped lang="scss">
.report-preview {
  border-color: rgba(var(--v-border-color), 0.12);
  background-color: rgb(var(--v-theme-surface));
  box-shadow: none;
}
</style>
