<script setup lang="ts">
import { computed, ref } from 'vue'
import { useElementSize } from '@vueuse/core'
import MeetingJournalReportPreview from '@/components/MeetingJournalReportPreview.vue'
import MarketingCanvas from '@/components/marketing/MarketingCanvas.vue'
import { marketingContentHeight } from '@/utils/marketingCanvas'
import type { MarketingBlock } from '@/composables/useMarketingTemplates'
import { studentRecords } from '@/data/students'
import { studentMeetings } from '@/data/studentMeetings'
import { studentSessions } from '@/data/studentSessions'
import { studentBooks } from '@/data/studentBooks'

const props = defineProps<{
  blocks: MarketingBlock[]
  baseMargin?: number
  values: Record<string, string>
  mode: 'a4' | 'mobile'
  content: 'page2' | 'full'
  testSample?: boolean
}>()

const sampleStudent = studentRecords[0]
const sampleMeeting = studentMeetings.find(meeting => meeting.studentId === sampleStudent.id && meeting.journal)!
const sampleSession = studentSessions.find(session => session.id === sampleMeeting.sessionId)!
const sampleBook = studentBooks.find(book => book.sessionId === sampleSession.id)!
const reportStudent = computed(() => props.testSample ? { ...sampleStudent, name: 'Siswa Contoh' } : sampleStudent)
const reportMeeting = computed(() => props.testSample ? { ...sampleMeeting, teacherName: 'Teacher Contoh' } : sampleMeeting)
const reportJournal = computed(() => props.testSample ? {
  ...sampleMeeting.journal!,
  reportCode: 'DJ-SAMPLE',
  aiSummary: sampleMeeting.journal!.aiSummary?.replaceAll(sampleStudent.name.split(' ')[0], 'Siswa Contoh'),
  evidencePhotos: ['/good-photo.png'],
} : sampleMeeting.journal!)
const viewport = ref<HTMLElement>()
const document = ref<HTMLElement>()
const report = ref<HTMLElement>()
const { width: availableWidth } = useElementSize(viewport)
const { height: documentHeight } = useElementSize(document)
const { height: reportHeight } = useElementSize(report)
const scale = computed(() => Math.min(1, availableWidth.value > 0 ? availableWidth.value / 390 : 1))
const reportScale = computed(() => props.mode === 'a4' ? Math.min(.5, 551 / Math.max(reportHeight.value, 1)) : 1)
const reportPageHeight = computed(() => props.mode === 'a4' ? 551 : reportHeight.value)
const campaignHeight = computed(() => marketingContentHeight(props.blocks, props.baseMargin))
const campaignScale = computed(() => props.mode === 'a4' ? Math.min(1, 551 / campaignHeight.value) : 1)
const campaignPageHeight = computed(() => props.mode === 'a4' ? 551 : campaignHeight.value)
</script>

<template>
  <div ref="viewport" class="document-viewport" :aria-label="`${mode === 'a4' ? 'A4' : 'Mobile'} ${content === 'full' ? 'full journal sample' : 'page 2'} preview`">
    <div class="document-space" :style="{ width: `${390 * scale}px`, height: `${documentHeight * scale}px` }">
      <div ref="document" class="preview-document" :style="{ transform: `scale(${scale})` }">
        <section v-if="content === 'full'" class="document-section" aria-label="Sample journal page 1">
          <p class="document-label text-caption text-medium-emphasis">Page 1 · Daily journal · Sample</p>
          <div class="report-page" :style="{ height: `${reportPageHeight}px` }">
            <div ref="report" class="report-content" :style="{ width: mode === 'a4' ? '780px' : '390px', transform: `translateX(-50%) scale(${reportScale})` }">
              <MeetingJournalReportPreview :student="reportStudent" :session="sampleSession" :book="sampleBook" :meeting="reportMeeting" :journal="reportJournal" />
            </div>
          </div>
        </section>
        <section class="document-section" aria-label="Campaign page 2">
          <p class="document-label text-caption text-medium-emphasis">Page 2 · Campaign{{ content === 'full' ? ' · Sample' : '' }}</p>
          <div class="campaign-page" :style="{ height: `${campaignPageHeight}px` }">
            <MarketingCanvas class="campaign-content" :style="{ transform: `translateX(-50%) scale(${campaignScale})` }" :blocks="blocks" :values="values" :height="mode === 'a4' ? Math.max(551, campaignHeight) : campaignHeight" :page-mode="mode" :show-page-limit="false" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.document-viewport { width: 100%; min-width: 0; }
.document-space { position: relative; margin-inline: auto; }
.preview-document { width: 390px; transform-origin: top left; display: flex; flex-direction: column; gap: 24px; }
.document-label { margin: 0 0 8px; }
.report-page, .campaign-page { position: relative; overflow: hidden; background: rgb(var(--v-theme-surface)); border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px; }
.campaign-content { position: absolute; top: 0; left: 50%; transform-origin: top center; border: 0; border-radius: 0; }
.report-content { position: absolute; top: 0; left: 50%; transform-origin: top center; }
</style>
