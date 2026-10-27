import { useStorage } from '@vueuse/core'
import { studentRecords } from '../data/students'
import { normalizeMarketingBlock } from '../utils/marketingBlock'
import { createMarketingDemoTemplates } from '../data/marketingDemoTemplates'

export type MarketingStatus = 'Draft' | 'Published' | 'Inactive'
export type MarketingDisplayStatus = 'Draft' | 'Scheduled' | 'Active' | 'Expired' | 'Inactive'
export type MarketingVariableType = 'text' | 'number' | 'money' | 'date'

export interface MarketingBlockStyle {
  fontFamily?: 'Poppins' | 'Arial' | 'Georgia' | 'monospace'
  fontWeight?: 400 | 500 | 600 | 700
  textColor?: string
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  textStrokeWidth?: number
  textStrokeColor?: string
  padding?: { top: number; right: number; bottom: number; left: number }
  fill?: string
  borderWidth?: number
  borderColor?: string
  radius?: { topLeft: number; topRight: number; bottomRight: number; bottomLeft: number }
  opacity?: number
  imageFit?: 'contain' | 'cover'
}

export interface MarketingBlock {
  id: string
  type: 'heading' | 'text' | 'image' | 'button' | 'divider' | 'rectangle' | 'circle' | 'line' | 'frame' | 'icon'
  content: string
  url?: string
  imageSrc?: string
  x: number
  y: number
  width: number
  height: number
  color?: string
  fontSize?: number
  name?: string
  dataAttributes?: Record<string, string>
  style?: MarketingBlockStyle
  buttonIcon?: string
  linkTarget?: '_blank' | '_self'
}

export interface MarketingVariable {
  source?: 'builtin' | 'custom'
  name: string
  label: string
  type: MarketingVariableType
  defaultValue: string
  branchValues: Record<string, string>
}

export interface MarketingTemplate {
  id: string
  name: string
  status: MarketingStatus
  periodStart: string
  periodEnd: string
  country: string
  branches: string[]
  courses?: string[]
  ageMin?: number
  ageMax?: number
  priority: number
  isDefault: boolean
  defaultScope?: 'global' | 'country'
  createdAt: string
  updatedAt: string
  variables: MarketingVariable[]
  blocks: MarketingBlock[]
  baseMargin?: number
}

export interface MarketingStudent {
  id: string
  code: string
  initials: string
  country: string
  branch: string
  course?: string
  name?: string
  branchWhatsapp?: string
  birthDate?: string
}

export interface MarketingPageSnapshot {
  baseMargin?: number
  templateId: string
  templateName: string
  createdAt: string
  blocks: MarketingBlock[]
  values: Record<string, string>
}

const branchesByCountry: Record<string, string[]> = {
  Indonesia: ['Bali - Renon', 'Bali - Canggu', 'Jakarta - Selatan', 'Surabaya - Barat'],
  Singapore: ['Singapore - Central', 'Singapore - East'],
  Malaysia: ['Kuala Lumpur - North', 'Kuala Lumpur - South'],
}

// Non-routable dummy values for local demo previews. Replace with branch contact data before live use.
export const marketingBranchWhatsapps: Record<string, string> = {
  'Bali - Renon': '620000000001',
  'Bali - Canggu': '620000000002',
  'Jakarta - Selatan': '620000000003',
  'Surabaya - Barat': '620000000004',
  'Singapore - Central': '650000000001',
  'Singapore - East': '650000000002',
  'Kuala Lumpur - North': '600000000001',
  'Kuala Lumpur - South': '600000000002',
}

export const marketingBranchWhatsapp = (branch: string) => marketingBranchWhatsapps[branch] || ''

const initialTemplates: MarketingTemplate[] = [
  {
    id: 'default-global', name: 'Default Global', status: 'Published', periodStart: '2026-01-01', periodEnd: '2027-12-31', country: 'All countries', branches: [], priority: 999, isDefault: true, defaultScope: 'global', createdAt: '2026-01-02T08:00:00.000Z', updatedAt: '2026-10-20T08:00:00.000Z',
    variables: [{ name: 'student_name', label: 'Student name', type: 'text', defaultValue: 'Alya', branchValues: {} }],
    blocks: [
      { id: 'global-title', type: 'heading', content: 'A new milestone, {{student_name}}', x: 24, y: 30, width: 300, height: 64, color: 'primary', fontSize: 25 },
      { id: 'global-copy', type: 'text', content: 'See what is next in your learning journey.', x: 24, y: 108, width: 300, height: 54, fontSize: 15 },
      { id: 'global-button', type: 'button', content: 'View your progress', x: 24, y: 186, width: 190, height: 44, color: 'primary' },
    ],
  },
  {
    id: 'default-indonesia', name: 'Default Indonesia', status: 'Published', periodStart: '2026-01-01', periodEnd: '2027-12-31', country: 'Indonesia', branches: [], priority: 800, isDefault: true, defaultScope: 'country', createdAt: '2026-01-03T08:00:00.000Z', updatedAt: '2026-10-21T08:00:00.000Z',
    variables: [{ name: 'student_name', label: 'Student name', type: 'text', defaultValue: 'Alya', branchValues: {} }, { name: 'promo_value', label: 'Promo value', type: 'money', defaultValue: '150000', branchValues: { 'Bali - Renon': '175000' } }],
    blocks: [
      { id: 'indo-title', type: 'heading', content: 'Belajar makin seru, {{student_name}}!', x: 24, y: 28, width: 320, height: 64, color: 'primary', fontSize: 25 },
      { id: 'indo-copy', type: 'text', content: 'Nikmati potongan {{promo_value}} untuk sesi belajar berikutnya.', x: 24, y: 104, width: 320, height: 58, fontSize: 15 },
      { id: 'indo-button', type: 'button', content: 'Lihat penawaran', x: 24, y: 182, width: 180, height: 44, color: 'primary' },
    ],
  },
  {
    id: 'campaign-october', name: 'October learning week', status: 'Published', periodStart: '2026-10-01', periodEnd: '2026-10-31', country: 'Indonesia', branches: ['Bali - Renon', 'Bali - Canggu'], ageMin: 8, ageMax: 14, priority: 10, isDefault: false, createdAt: '2026-09-18T08:00:00.000Z', updatedAt: '2026-10-22T08:00:00.000Z',
    variables: [{ name: 'student_name', label: 'Student name', type: 'text', defaultValue: 'Alya', branchValues: {} }, { name: 'promo_value', label: 'Promo value', type: 'money', defaultValue: '200000', branchValues: { 'Bali - Canggu': '250000' } }, { name: 'valid_until', label: 'Valid until', type: 'date', defaultValue: '2026-10-31', branchValues: {} }],
    blocks: [
      { id: 'oct-title', type: 'heading', content: 'A week for new ideas', x: 24, y: 28, width: 320, height: 64, color: 'primary', fontSize: 25 },
      { id: 'oct-copy', type: 'text', content: 'Hi {{student_name}}, claim {{promo_value}} before {{valid_until}}.', x: 24, y: 108, width: 320, height: 58, fontSize: 15 },
      { id: 'oct-button', type: 'button', content: 'Explore classes', x: 24, y: 188, width: 180, height: 44, color: 'primary' },
    ],
  },
]

const indonesiaDefault = initialTemplates.find(template => template.id === 'default-indonesia')!
for (const country of ['Singapore', 'Malaysia']) {
  initialTemplates.push({
    ...JSON.parse(JSON.stringify(indonesiaDefault)) as MarketingTemplate,
    id: `default-${country.toLowerCase()}`,
    name: `Default ${country}`,
    country,
    createdAt: country === 'Singapore' ? '2026-01-04T08:00:00.000Z' : '2026-01-05T08:00:00.000Z',
    updatedAt: '2026-10-21T08:00:00.000Z',
    blocks: indonesiaDefault.blocks.map(block => ({ ...block, id: `${country.toLowerCase()}-${block.id}` })),
  })
}

export const marketingCountries = Object.keys(branchesByCountry)
export const marketingBranches = branchesByCountry
export const marketingCourses = [...new Set(studentRecords.map(student => student.course))]
export const builtinMarketingVariables: MarketingVariable[] = [
  { name: 'student_name', label: 'Student name', type: 'text', source: 'builtin', defaultValue: '', branchValues: {} },
  { name: 'branch_name', label: 'Branch name', type: 'text', source: 'builtin', defaultValue: '', branchValues: {} },
  { name: 'branch_whatsapp', label: 'Branch WhatsApp', type: 'text', source: 'builtin', defaultValue: '', branchValues: {} },
  { name: 'course_name', label: 'Course name', type: 'text', source: 'builtin', defaultValue: '', branchValues: {} },
]
export const normalizeMarketingTemplate = (template: MarketingTemplate): MarketingTemplate => ({
  ...template, courses: template.courses || [], branches: template.branches || [],
  baseMargin: Number.isFinite(template.baseMargin) ? Math.min(96, Math.max(0, Math.round(template.baseMargin!))) : 24,
  ageMin: hasMarketingValue(template.ageMin) ? Number(template.ageMin) : undefined,
  ageMax: hasMarketingValue(template.ageMax) ? Number(template.ageMax) : undefined,
  variables: (template.variables || []).map(variable => ({ ...variable, source: variable.source || (variable.name === 'student_name' ? 'builtin' : 'custom'), branchValues: variable.branchValues || {} })),
  blocks: (template.blocks || []).map(normalizeMarketingBlock),
})
export const usedMarketingVariables = (blocks: MarketingBlock[]) => [...new Set(blocks.flatMap(block => [...`${block.content} ${block.url || ''}`.matchAll(/\{\{([^{}]+)\}\}/g)].map(match => match[1])))]
export const targetMarketingBranches = (template: MarketingTemplate) => template.isDefault && template.defaultScope === 'global' || template.country === 'All countries'
  ? Object.values(marketingBranches).flat()
  : !template.isDefault && template.branches.length ? template.branches : marketingBranches[template.country] || []
export const branchCountry = (branch: string) => Object.keys(marketingBranches).find(country => marketingBranches[country].includes(branch)) || 'Indonesia'
export const marketingCurrency = (country: string) => ({ Indonesia: 'IDR', Singapore: 'SGD', Malaysia: 'MYR' }[country] || 'IDR')
export const hasMarketingValue = (value: unknown) => value !== undefined && value !== null && String(value).trim() !== ''
export const isBuiltinMarketingVariable = (variable: MarketingVariable) => variable.source === 'builtin' || (!variable.source && variable.name === 'student_name')
export const resolveMarketingValues = (template: MarketingTemplate, student: MarketingStudent): Record<string, string> => {
  const values: Record<string, string> = {}
  for (const variable of template.variables) {
    if (isBuiltinMarketingVariable(variable)) continue
    const raw = hasMarketingValue(variable.branchValues?.[student.branch]) ? variable.branchValues[student.branch] : variable.defaultValue
    values[variable.name] = variable.type === 'money' && hasMarketingValue(raw) && Number.isFinite(Number(raw))
      ? new Intl.NumberFormat('en', { style: 'currency', currency: marketingCurrency(student.country) }).format(Number(raw)) : String(raw ?? '')
  }
  return { ...values, student_name: student.name || student.initials, branch_name: student.branch, branch_whatsapp: student.branchWhatsapp || '', course_name: student.course || '' }
}
export const substituteMarketingValues = (text: string, values: Record<string, string>) => text.replace(/\{\{([^{}]+)\}\}/g, (placeholder, name: string) => values[name] ?? placeholder)
export const validMarketingUrl = (value: string) => {
  if (!value.trim() || /\s|\{\{|\\/.test(value)) return false
  if (value.startsWith('/') && !value.startsWith('//')) return true
  try { return ['https:', 'http:'].includes(new URL(value).protocol) } catch { return false }
}
export const marketingTemplatesOverlap = (a: MarketingTemplate, b: MarketingTemplate) => !a.isDefault && !b.isDefault
  && a.periodStart <= b.periodEnd && b.periodStart <= a.periodEnd
  && (a.country === 'All countries' || b.country === 'All countries' || a.country === b.country)
  && (!a.branches.length || !b.branches.length || a.branches.some(branch => b.branches.includes(branch)))
  && (!(a.courses || []).length || !(b.courses || []).length || a.courses!.some(course => b.courses!.includes(course)))
  && (!hasMarketingValue(a.ageMax) || !hasMarketingValue(b.ageMin) || Number(a.ageMax) >= Number(b.ageMin))
  && (!hasMarketingValue(b.ageMax) || !hasMarketingValue(a.ageMin) || Number(b.ageMax) >= Number(a.ageMin))
const countryTimeZones: Record<string, string> = { Indonesia: 'Asia/Makassar', Singapore: 'Asia/Singapore', Malaysia: 'Asia/Kuala_Lumpur', 'All countries': 'Asia/Makassar' }

export const makeMarketingStudents = (count = 480): MarketingStudent[] => Array.from({ length: count }, (_, index) => {
  const country = marketingCountries[index % marketingCountries.length]
  const branches = branchesByCountry[country]
  const day = (index % 27) + 1
  const month = (index % 12) + 1
  const year = 2008 + (index % 13)

  return {
    id: `student-${index + 1}`,
    code: `STD-2026-${String(index + 1).padStart(4, '0')}`,
    initials: ['AL', 'NW', 'RS', 'KM', 'JP', 'MA'][index % 6],
    country,
    course: marketingCourses[Math.floor(index / marketingCountries.length) % marketingCourses.length],
    branch: branches[index % branches.length],
    branchWhatsapp: marketingBranchWhatsapp(branches[index % branches.length]),
    birthDate: index % 19 === 0 ? undefined : `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
  }
})

export const templateDisplayStatus = (template: MarketingTemplate, now = new Date()): MarketingDisplayStatus => {
  if (template.status === 'Draft') return 'Draft'
  if (template.status === 'Inactive') return 'Inactive'
  if (template.isDefault) return 'Active'
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: countryTimeZones[template.country] || 'Asia/Makassar' }).format(now)
  if (today < template.periodStart) return 'Scheduled'
  if (today > template.periodEnd) return 'Expired'
  return 'Active'
}

const studentAgeAt = (birthDate: string | undefined, date: string) => {
  if (!birthDate) return undefined
  const birth = new Date(`${birthDate}T00:00:00`)
  const at = new Date(`${date}T00:00:00`)
  let age = at.getFullYear() - birth.getFullYear()
  if (at.getMonth() < birth.getMonth() || (at.getMonth() === birth.getMonth() && at.getDate() < birth.getDate())) age--
  return age
}

export const matchesMarketingTemplate = (template: MarketingTemplate, student: MarketingStudent, date: string) => {
    if (template.status !== 'Published') return false
    if (date < template.periodStart || date > template.periodEnd) return false
    if (template.isDefault) return false
    if (template.country !== 'All countries' && template.country !== student.country) return false
    if (template.branches.length && !template.branches.includes(student.branch)) return false
    if (template.courses?.length && (!student.course || !template.courses.includes(student.course))) return false
    const age = studentAgeAt(student.birthDate, date)
    if ((hasMarketingValue(template.ageMin) || hasMarketingValue(template.ageMax)) && age === undefined) return false
    if (age !== undefined && ((hasMarketingValue(template.ageMin) && age < Number(template.ageMin)) || (hasMarketingValue(template.ageMax) && age > Number(template.ageMax)))) return false
    return true
}

export const selectMarketingTemplate = (templates: MarketingTemplate[], student: MarketingStudent, date: string) => {
  const eligible = templates.filter(template => matchesMarketingTemplate(template, student, date)).sort((a, b) => a.priority - b.priority || a.createdAt.localeCompare(b.createdAt))

  if (eligible[0]) return { template: eligible[0], reason: `Priority ${eligible[0].priority} matched ${student.branch}` }
  const countryDefault = templates.find(template => template.isDefault && template.defaultScope === 'country' && template.status === 'Published' && template.country === student.country)
  if (countryDefault) return { template: countryDefault, reason: `${student.country} country default` }
  return undefined
}

export const journalMarketingPreview = (templates: MarketingTemplate[], saved: MarketingPageSnapshot | undefined, studentName: string): MarketingPageSnapshot | undefined => {
  if (saved && saved.templateId !== 'default-indonesia') return saved
  const template = templates.find(item => item.id === 'demo-surabaya-trial-gratis')
  if (!template) return saved
  return {
    templateId: template.id, templateName: template.name, createdAt: template.updatedAt,
    blocks: JSON.parse(JSON.stringify(template.blocks)), baseMargin: template.baseMargin ?? 24,
    values: { branch_name: 'Surabaya - Barat', branch_whatsapp: marketingBranchWhatsapp('Surabaya - Barat'), ...saved?.values, student_name: studentName },
  }
}

export const setIndonesiaTrialDefault = (templates: MarketingTemplate[]): MarketingTemplate[] => {
  if (!templates.some(template => template.id === 'demo-surabaya-trial-gratis')) return templates
  return templates.map((template): MarketingTemplate => {
    if (template.id === 'demo-surabaya-trial-gratis') return normalizeMarketingTemplate({ ...template, status: 'Published', country: 'Indonesia', isDefault: true, defaultScope: 'country', branches: [], courses: [], ageMin: undefined, ageMax: undefined })
    if (template.isDefault && template.defaultScope === 'country' && template.country === 'Indonesia') return { ...template, status: 'Inactive', isDefault: false, defaultScope: undefined }
    return template
  })
}

export const useMarketingTemplates = () => {
  const templates = useStorage<MarketingTemplate[]>('microdemy-marketing-templates-v1', initialTemplates, undefined, { mergeDefaults: true })
  const demoContentUpgrades = useStorage<string[]>('microdemy-marketing-demo-content-upgrades-v1', [])
  const indonesiaTrialDefaultApplied = useStorage('microdemy-indonesia-trial-default-v1', false)
  const students = useStorage<MarketingStudent[]>('microdemy-marketing-students-v1', makeMarketingStudents())
  templates.value = templates.value.map(normalizeMarketingTemplate)
  students.value = students.value.map((student, index) => ({
    ...student,
    course: student.course || marketingCourses[Math.floor(index / marketingCountries.length) % marketingCourses.length],
    branchWhatsapp: student.branchWhatsapp || marketingBranchWhatsapp(student.branch),
  }))

  initialTemplates.filter(template => template.isDefault).forEach(template => {
    if (!templates.value.some(saved => saved.id === template.id)) templates.value.push(JSON.parse(JSON.stringify(template)) as MarketingTemplate)
  })

  for (const demo of createMarketingDemoTemplates()) {
    const saved = templates.value.find(saved => saved.id === demo.id)
    if (!saved) templates.value.push(demo)
    else if (demo.id === 'demo-surabaya-trial-gratis' && !demoContentUpgrades.value.includes(demo.id)) {
      const additions = demo.blocks.slice(2).filter(block => !saved.blocks.some(existing => existing.id === block.id))
      if (additions.length) {
        const offset = Math.max(0, ...saved.blocks.filter(block => !demo.blocks.slice(2).some(addition => addition.id === block.id)).map(block => block.y + block.height - 487.5))
        saved.blocks.push(...additions.map(block => normalizeMarketingBlock({ ...block, y: block.y + offset })))
      }
    }
    if (demo.id === 'demo-surabaya-trial-gratis' && !demoContentUpgrades.value.includes(demo.id)) demoContentUpgrades.value.push(demo.id)
  }

  if (!indonesiaTrialDefaultApplied.value) {
    templates.value = setIndonesiaTrialDefault(templates.value)
    indonesiaTrialDefaultApplied.value = true
  }

  const saveTemplate = (template: MarketingTemplate) => {
    const existing = templates.value.findIndex(item => item.id === template.id)
    const next = normalizeMarketingTemplate({ ...JSON.parse(JSON.stringify(template)), updatedAt: new Date().toISOString() })
    if (existing < 0) templates.value.unshift(next)
    else templates.value[existing] = next
    return next
  }

  const duplicateTemplate = (template: MarketingTemplate) => saveTemplate({
    ...JSON.parse(JSON.stringify(template)) as MarketingTemplate,
    id: `template-${Date.now()}`,
    name: `${template.name} copy`,
    status: 'Draft',
    isDefault: false,
    defaultScope: undefined,
    createdAt: new Date().toISOString(),
  })

  return { templates, students, saveTemplate, duplicateTemplate }
}

export const createMarketingPageSnapshot = (templates: MarketingTemplate[], students: MarketingStudent[], studentCode: string, date: string): MarketingPageSnapshot | undefined => {
  const numericId = Number(studentCode.match(/(\d+)$/)?.[1] || 1)
  const student = students[(numericId - 1) % students.length]
  if (!student) return undefined
  const selected = selectMarketingTemplate(templates, student, date)
  if (!selected) return undefined
  const values = resolveMarketingValues(selected.template, student)
  return { templateId: selected.template.id, templateName: selected.template.name, createdAt: new Date().toISOString(), blocks: JSON.parse(JSON.stringify(selected.template.blocks)) as MarketingBlock[], baseMargin: selected.template.baseMargin ?? 24, values }
}
