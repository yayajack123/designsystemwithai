<script setup lang="ts">
import MeetingJournalDetail from '@/pages/student-meeting-journal.vue'

definePageMeta({ sidebarRoute: 'reports' })
useSeoMeta({ title: 'Meeting journal', description: 'View the meeting journal.' })
</script>

<template>
  <MeetingJournalDetail />
</template>
