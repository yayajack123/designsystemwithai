import type { MeetingJournal, MeetingLesson } from '@/data/studentMeetings'
import type { MarketingPageSnapshot } from '@/composables/useMarketingTemplates'
import { attendanceJournalSeedRecords } from '@/data/attendanceJournalDemo'

export type JournalStage = 'Created' | 'Sent' | 'Revision' | 'Revised & Sent'
export type DeliveryStatus = 'Sending' | 'Sent' | 'Delivered' | 'Read' | 'Failed' | 'Marked as Sent'

export interface DailyJournalDemo {
  id: string
  studentName: string
  studentCode: string
  sessionCode: string
  bookTitle: string
  className: string
  teacherName: string
  startsAt: string
  endsAt: string
  lessons: MeetingLesson[]
  journal: MeetingJournal
  parentPhone: string
  sendCount: number
  journalStage?: JournalStage
  deliveryStatus?: DeliveryStatus | null
  deliveryStatusUpdatedAt?: string
  marketingPageSnapshot?: MarketingPageSnapshot
}

export const getJournalStage = (record: DailyJournalDemo): JournalStage => {
  if (record.journalStage) return record.journalStage
  const sent = ['Sent', 'Sent (Manual)'].includes(record.journal.status)
  return sent ? (record.sendCount > 1 ? 'Revised & Sent' : 'Sent') : (record.sendCount > 0 ? 'Revision' : 'Created')
}

export const getDeliveryStatus = (record: DailyJournalDemo): DeliveryStatus | null => {
  if (record.deliveryStatus !== undefined) return record.deliveryStatus
  const status = record.journal.status
  if (status === 'Sent (Manual)') return 'Marked as Sent'
  return status === 'Sending' || status === 'Sent' || status === 'Failed' ? status : null
}

export const journalStatusColor = (status: string) => {
  if (status === 'Failed') return 'error'
  if (status === 'Sending') return 'info'
  if (status === 'Sent' || status === 'Sent (Manual)') return 'success'
  return 'secondary'
}

export const journalPublicPath = (id: string) => `/daily-journal/${encodeURIComponent(id)}`
export const DEMO_SEND_LIMIT = 2

export const useDailyJournalDemo = () => {
  const records = useState<Record<string, DailyJournalDemo>>('daily-journal-demo-v2', () => ({}))
  const restore = () => {
    if (!import.meta.client) return
    try {
      const saved = localStorage.getItem('daily-journal-demo-v2')
      if (saved) records.value = { ...JSON.parse(saved), ...records.value }
    }
    catch { /* Unavailable storage leaves the current in-memory demo intact. */ }

    let changed = false
    attendanceJournalSeedRecords.forEach(record => {
      const existing = records.value[record.id]
      if (!existing) {
        records.value[record.id] = JSON.parse(JSON.stringify(record))
        changed = true
        return
      }

      const hasDefaultLesson = Array.isArray(existing.lessons) && existing.lessons.length === 1 && existing.lessons[0].title === 'Project Practice'
      const matchesUneditedDraftSeed = record.journal.status === 'Draft'
        && existing.journal.status === 'Draft'
        && existing.sendCount === 0
        && existing.studentName === record.studentName
        && existing.bookTitle === record.bookTitle
        && existing.journal.projectName === record.journal.projectName
        && existing.journal.teacherNotes === record.journal.teacherNotes
        && existing.journal.aiSummary === record.journal.aiSummary
      const hasLegacyS1Lesson = record.studentCode === 's1'
        && Array.isArray(existing.lessons)
        && existing.lessons.length === 1
        && ['Lesson 8 – Sprite Animation', 'Project Practice'].includes(existing.lessons[0].title)
        && existing.lessons[0].progress === 100
        && existing.lessons[0].score === 85
        && existing.lessons[0].maxScore === 100
      const legacyS1Summary = `${record.studentName} mengikuti ${record.bookTitle} dan menyelesaikan latihan dengan baik. Lanjutkan ke materi berikutnya pada pertemuan mendatang.`
      const matchesUneditedSentSeed = record.journal.status === 'Sent'
        && existing.journal.status === 'Sent'
        && existing.sendCount === 1
        && existing.studentName === record.studentName
        && existing.bookTitle === record.bookTitle
        && existing.journal.projectName === record.journal.projectName
        && existing.journal.teacherNotes === record.journal.teacherNotes
        && existing.journal.aiSummary === legacyS1Summary

      if ((hasDefaultLesson && matchesUneditedDraftSeed) || (hasLegacyS1Lesson && matchesUneditedSentSeed)) {
        existing.lessons = JSON.parse(JSON.stringify(record.lessons))
        if (matchesUneditedSentSeed) existing.journal.aiSummary = record.journal.aiSummary
        changed = true
      }
    })
    if (changed) {
      try { localStorage.setItem('daily-journal-demo-v2', JSON.stringify(records.value)) }
      catch { /* Seed data stays available in memory when storage is full. */ }
    }
  }
  const save = (record: DailyJournalDemo) => {
    records.value[record.id] = JSON.parse(JSON.stringify(record))
    if (import.meta.client) {
      try { localStorage.setItem('daily-journal-demo-v2', JSON.stringify(records.value)) }
      catch { return false }
    }
    return true
  }
  const beginSend = (id: string, manual: boolean) => {
    const record = records.value[id]
    if (!record || record.sendCount >= DEMO_SEND_LIMIT || record.journal.status === 'Sending') return false
    record.journal.status = manual ? 'Sent (Manual)' : 'Sending'
    const revision = getJournalStage(record) === 'Revision' || getJournalStage(record) === 'Sent'
    record.journalStage = manual ? (revision ? 'Revised & Sent' : 'Sent') : (revision ? 'Revision' : 'Created')
    record.deliveryStatus = manual ? 'Marked as Sent' : 'Sending'
    record.deliveryStatusUpdatedAt = new Date().toISOString()
    if (manual) {
      record.sendCount++
      record.journal.sentAt = new Date().toISOString()
    }
    save(record)
    return true
  }
  const settleSend = (id: string, success: boolean) => {
    const record = records.value[id]
    if (!record || record.journal.status !== 'Sending') return
    record.journal.status = success ? 'Sent' : 'Failed'
    record.deliveryStatus = success ? 'Sent' : 'Failed'
    record.deliveryStatusUpdatedAt = new Date().toISOString()
    if (success) record.journalStage = record.journalStage === 'Revision' ? 'Revised & Sent' : 'Sent'
    if (success) {
      record.sendCount++
      record.journal.sentAt = new Date().toISOString()
    }
    save(record)
  }
  return { records, restore, save, beginSend, settleSend }
}
