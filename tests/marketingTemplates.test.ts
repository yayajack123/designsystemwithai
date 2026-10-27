import assert from 'node:assert/strict'
import { test } from 'node:test'
import { journalMarketingPreview, setIndonesiaTrialDefault } from '../composables/useMarketingTemplates'
import { marketingCourses, makeMarketingStudents, normalizeMarketingTemplate, matchesMarketingTemplate, selectMarketingTemplate, targetMarketingBranches, marketingTemplatesOverlap, resolveMarketingValues, usedMarketingVariables, createMarketingPageSnapshot, validMarketingUrl, type MarketingTemplate } from '../composables/useMarketingTemplates'

const student = { id: 'student-1', code: 'STD-0001', initials: 'AL', country: 'Indonesia', branch: 'Bali - Renon', course: marketingCourses[0], birthDate: '2016-01-01' }
const campaign = (changes: Partial<MarketingTemplate> = {}): MarketingTemplate => ({
  id: 'campaign', name: 'Campaign', status: 'Published', periodStart: '2026-01-01', periodEnd: '2026-12-31', country: 'Indonesia', branches: [], priority: 100, isDefault: false, createdAt: '2026-01-01', updatedAt: '2026-01-01', variables: [], blocks: [], ...changes,
})

test('Surabaya becomes the sole Indonesia default while other defaults and saved artwork survive', () => {
  const trial = campaign({ id: 'demo-surabaya-trial-gratis', status: 'Draft', name: 'Saved trial', branches: ['Surabaya - Barat'], courses: ['Custom'], ageMin: 8 })
  const previous = campaign({ id: 'default-indonesia', isDefault: true, defaultScope: 'country' })
  const singapore = campaign({ id: 'default-singapore', country: 'Singapore', isDefault: true, defaultScope: 'country' })
  const result = setIndonesiaTrialDefault([previous, trial, singapore])
  assert.equal(result[0].status, 'Inactive')
  assert.equal(result[0].isDefault, false)
  assert.equal(result[1].status, 'Published')
  assert.equal(result[1].defaultScope, 'country')
  assert.equal(result[1].isDefault, true)
  assert.equal(result[1].name, 'Saved trial')
  assert.deepEqual(result[1].blocks, trial.blocks)
  assert.deepEqual(result[1].branches, [])
  assert.deepEqual(result[1].courses, [])
  assert.equal(result[1].ageMin, undefined)
  assert.equal(result[2], singapore)
  assert.equal(selectMarketingTemplate(result, student, '2027-10-26')?.template.id, trial.id)
})

test('journal preview uses Surabaya for new and legacy Indonesia demos and preserves other snapshots', () => {
  const trial = campaign({ id: 'demo-surabaya-trial-gratis', baseMargin: 32 })
  const legacy = { templateId: 'default-indonesia', templateName: 'Old', createdAt: '2026-01-01', blocks: [], values: { branch_name: 'Bali - Renon', branch_whatsapp: '620000000001' } }
  const preview = journalMarketingPreview([trial], legacy, 'Alya')!
  assert.equal(preview.templateId, trial.id)
  assert.equal(preview.baseMargin, 32)
  assert.equal(preview.values.student_name, 'Alya')
  assert.equal(preview.values.branch_name, 'Bali - Renon')
  assert.equal(legacy.templateId, 'default-indonesia')
  assert.equal(journalMarketingPreview([trial], undefined, 'Alya')?.templateId, trial.id)
  const other = { ...legacy, templateId: 'another-campaign' }
  assert.equal(journalMarketingPreview([trial], other, 'Alya'), other)
})

test('course filters, period and age use the same selector; legacy courses mean all', () => {
  assert.equal(matchesMarketingTemplate(campaign(), student, '2026-10-26'), true)
  assert.equal(matchesMarketingTemplate(campaign({ courses: [marketingCourses[1]] }), student, '2026-10-26'), false)
  assert.equal(matchesMarketingTemplate(campaign({ courses: [student.course] }), student, '2026-10-26'), true)
  assert.equal(matchesMarketingTemplate(campaign(), student, '2027-01-01'), false)
  assert.equal(matchesMarketingTemplate(campaign({ ageMin: 11 }), student, '2026-10-26'), false)
  assert.equal(matchesMarketingTemplate(campaign({ ageMin: 8 }), { ...student, birthDate: undefined }, '2026-10-26'), false)
})

test('priority ties prefer earlier creation and fallback uses country then global', () => {
  const newer = campaign({ id: 'new', createdAt: '2026-02-01' })
  const country = campaign({ id: 'country', isDefault: true, defaultScope: 'country' })
  const global = campaign({ id: 'global', country: 'All countries', isDefault: true, defaultScope: 'global' })
  assert.equal(selectMarketingTemplate([newer, campaign(), country, global], student, '2026-10-26')?.template.id, 'campaign')
  assert.equal(selectMarketingTemplate([campaign({ priority: 1 }), newer], student, '2026-10-26')?.template.id, 'campaign')
  assert.equal(selectMarketingTemplate([country, global], student, '2026-10-26')?.template.id, 'country')
  assert.equal(selectMarketingTemplate([global], student, '2026-10-26')?.template.id, 'global')
})

test('migration preserves IDs and branch values and separates legacy built-ins', () => {
  const legacy = campaign({ variables: [
    { name: 'student_name', label: 'Student', type: 'text', defaultValue: 'old example', branchValues: {} },
    { name: 'discount', label: 'Discount', type: 'number', defaultValue: '10', branchValues: { 'Bali - Renon': '0' } },
  ] })
  const normalized = normalizeMarketingTemplate(legacy)
  assert.equal(normalized.id, legacy.id)
  assert.deepEqual(normalized.courses, [])
  assert.equal(normalized.variables[0].source, 'builtin')
  assert.equal(normalized.variables[1].source, 'custom')
  assert.equal(normalized.variables[1].branchValues['Bali - Renon'], '0')
  assert.equal(resolveMarketingValues(normalized, student).discount, '0')
  assert.equal(resolveMarketingValues(normalized, student).student_name, 'AL')
  assert.equal(resolveMarketingValues(normalized, { ...student, branch: 'Bali - Canggu' }).discount, '10')
})

test('target branches expand empty filters; global defaults span countries', () => {
  assert.equal(targetMarketingBranches(campaign()).length, 4)
  assert.deepEqual(targetMarketingBranches(campaign({ branches: ['Bali - Canggu'] })), ['Bali - Canggu'])
  assert.equal(targetMarketingBranches(campaign({ isDefault: true, defaultScope: 'global', country: 'All countries' })).length, 8)
})

test('URL validation rejects unresolved, unsafe and malformed links', () => {
  for (const url of ['https://example.com/path', 'http://example.com', '/classes']) assert.equal(validMarketingUrl(url), true)
  for (const url of ['', '//example.com', 'javascript:alert(1)', 'https://', '/{{missing}}', '/has space', '/\\example.com']) assert.equal(validMarketingUrl(url), false)
})

test('built-ins resolve from profiles and money follows branch country', () => {
  const value = campaign({ variables: [{ name: 'price', label: 'Price', type: 'money', defaultValue: '10', branchValues: {} }] })
  const values = resolveMarketingValues(value, { ...student, country: 'Singapore', branch: 'Singapore - Central', name: 'Example student', branchWhatsapp: 'demo-phone' })
  assert.equal(values.student_name, 'Example student')
  assert.equal(values.branch_name, 'Singapore - Central')
  assert.equal(values.branch_whatsapp, 'demo-phone')
  assert.equal(values.course_name, student.course)
  assert.ok(values.price.includes('10.00'))
  assert.ok(values.price.includes('SGD') || values.price.includes('$'))
})

test('conflicts account for course, country, period, branch and age', () => {
  const base = campaign({ courses: [marketingCourses[0]], ageMin: 8, ageMax: 12, branches: ['Bali - Renon'] })
  assert.equal(marketingTemplatesOverlap(base, campaign()), true)
  for (const changes of [{ courses: [marketingCourses[1]] }, { country: 'Singapore' }, { periodStart: '2027-01-01', periodEnd: '2027-12-31' }, { branches: ['Bali - Canggu'] }, { ageMin: 13 }])
    assert.equal(marketingTemplatesOverlap(base, campaign(changes)), false)
})

test('placeholder detection includes URLs and snapshot uses the preview resolver without mutating past data', () => {
  const value = campaign({ variables: [{ name: 'offer', label: 'Offer', type: 'text', defaultValue: 'Default', branchValues: { 'Bali - Renon': 'Branch offer' } }], blocks: [{ id: 'button', type: 'button', content: '{{offer}}', url: '/{{course_name}}/{{unknown}}', x: 20, y: 40, width: 120, height: 44 }] })
  assert.deepEqual(usedMarketingVariables(value.blocks), ['offer', 'course_name', 'unknown'])
  const snapshot = createMarketingPageSnapshot([value], [student], student.code, '2026-10-26')!
  assert.deepEqual(snapshot.values, resolveMarketingValues(value, student))
  value.blocks[0].content = 'Changed'
  value.variables[0].branchValues[student.branch] = 'Changed'
  assert.equal(snapshot.blocks[0].content, '{{offer}}')
  assert.equal(snapshot.values.offer, 'Branch offer')
  assert.ok(makeMarketingStudents().every(profile => marketingCourses.includes(profile.course!)))
})
