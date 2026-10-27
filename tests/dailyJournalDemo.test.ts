import assert from 'node:assert/strict'
import { test } from 'node:test'
import { ref } from 'vue'
import { buildDailyJournalPrompt } from '../utils/dailyJournalPrompt'
import { validateJournalVideo, validateJournalMedia } from '../utils/dailyJournalMedia'
import { getBrandThemeColors } from '../plugins/vuetify/theme'
import { useDailyJournalDemo, journalPublicPath, journalStatusColor } from '../composables/useDailyJournalDemo'

const state = ref({})
Object.assign(globalThis, { useState: () => state })

test('video makes photos optional; removing video requires a photo again', () => {
  assert.ok(validateJournalMedia(0, false, false))
  assert.equal(validateJournalMedia(1, false, false), '')
  assert.equal(validateJournalMedia(0, true, false), '')
  assert.equal(validateJournalMedia(1, true, false), '')
  assert.ok(validateJournalMedia(1, true, true))
})

test('MP4 and MOV respect the 30 MB boundary and reject unsupported formats', () => {
  assert.equal(validateJournalVideo({ name: 'demo.mp4', type: 'video/mp4', size: 30 * 1024 * 1024 }), '')
  assert.equal(validateJournalVideo({ name: 'demo.MOV', type: 'video/quicktime', size: 100 }), '')
  assert.equal(validateJournalVideo({ name: 'demo.mov', type: '', size: 100 }), '')
  assert.ok(validateJournalVideo({ name: 'demo.mp4', type: 'video/mp4', size: 30 * 1024 * 1024 + 1 }).includes('30 MB'))
  assert.ok(validateJournalVideo({ name: 'demo.webm', type: 'video/webm', size: 100 }))
  assert.ok(validateJournalVideo({ name: 'demo.mp4', type: 'text/plain', size: 100 }))
})

test('brand primary foreground stays white for filled buttons', () => {
  for (const color of ['#10AF13', '#FFFF00', '#123456'])
    assert.equal(getBrandThemeColors(color)['on-primary'], '#FFFFFF')
})

test('delivery waits for explicit outcome, retries do not consume quota, and manual sends lock at the limit', () => {
  const demo = useDailyJournalDemo()
  demo.save({
    id: 'test', studentName: 'Demo student', studentCode: 'DEMO', sessionCode: 'S1',
    bookTitle: 'Python', className: 'Demo class', teacherName: 'Demo teacher',
    startsAt: '2026-10-23T08:00:00Z', endsAt: '2026-10-23T09:00:00Z', lessons: [],
    journal: { status: 'Draft', updatedAt: '', activeProject: false, evidencePhotos: [] },
    parentPhone: '', sendCount: 0,
  })
  assert.equal(demo.beginSend('test', false), true)
  assert.equal(demo.records.value.test.journal.status, 'Sending')
  assert.equal(demo.beginSend('test', false), false)
  assert.equal(demo.records.value.test.sendCount, 0)
  demo.settleSend('test', false)
  assert.equal(demo.records.value.test.journal.status, 'Failed')
  assert.equal(demo.records.value.test.sendCount, 0)
  demo.settleSend('test', true)
  assert.equal(demo.records.value.test.journal.status, 'Failed')
  demo.beginSend('test', false)
  demo.settleSend('test', true)
  assert.equal(demo.records.value.test.sendCount, 1)
  demo.beginSend('test', true)
  assert.equal(demo.records.value.test.journal.status, 'Sent (Manual)')
  assert.equal(demo.records.value.test.sendCount, 2)
  assert.equal(demo.beginSend('test', true), false)
  assert.equal(journalStatusColor('Failed'), 'error')
})

test('dummy fallback prompt includes actual student, scores and observations', () => {
  const prompt = buildDailyJournalPrompt({ studentName: 'Demo student', bookTitle: 'Python', projectName: 'Game', teacherNotes: 'Practice loops', lessons: [{ title: 'Loops', progress: '40%', score: 0, maxScore: 100, objectives: ['Use for loops'] }] })
  for (const expected of ['DEMO ONLY', 'SYSTEM PROMPT', 'USER PROMPT', 'Demo student', '40%', '0/100', 'Practice loops']) assert.ok(prompt.includes(expected))
  assert.equal(journalPublicPath('demo/id'), '/daily-journal/demo%2Fid')
})
