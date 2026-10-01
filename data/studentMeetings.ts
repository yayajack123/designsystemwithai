export interface MeetingLesson {
  id: string
  title: string
  progress: number
  score: number
  maxScore: number
  objectives: string[]
}

export interface MeetingJournal {
  status: 'Draft' | 'Sent'
  updatedAt: string
  sentAt?: string
  projectName?: string
  activeProject: boolean
  teacherNotes?: string
  evidencePhotos: string[]
  aiSummary?: string
  reportCode?: string
}

export interface StudentMeeting {
  id: string
  studentId: string
  sessionId: string
  historyId: string
  number: number
  className: string
  startsAt: string
  endsAt: string
  teacherName: string
  room?: string
  lessons: MeetingLesson[]
  journal?: MeetingJournal
}

const lesson = (id: string, title: string, progress: number, objectives: string[], score = 0): MeetingLesson => ({
  id, title, progress, score, maxScore: 100, objectives,
})

// Local demo records. IDs stay scoped to one student and session.
export const studentMeetings: StudentMeeting[] = [
  {
    id: 'meeting-1', studentId: '1', sessionId: 'session-1', historyId: 'history-book-1', number: 6,
    className: 'DPS-Adaptive-8C', startsAt: '2026-09-23T16:00:00+07:00', endsAt: '2026-09-23T17:30:00+07:00',
    teacherName: 'Kaylynn Herwitz', room: 'Rio Room',
    lessons: [
      lesson('lesson-1', 'Lesson 9 - Introduction to AI', 100, ['Recognize everyday uses of artificial intelligence.', 'Explain how simple AI tools process input.'], 85),
      lesson('lesson-2', 'Lesson 10 - Design in the world', 40, ['Explore design patterns in everyday products.'], 25),
    ],
    journal: { status: 'Sent', updatedAt: '2026-09-23T18:20:00+07:00', sentAt: '2026-09-23T18:20:00+07:00', projectName: 'AI poster', activeProject: true,
      teacherNotes: 'Cristofer explained his design choices clearly and completed the first lesson.',
      evidencePhotos: [], aiSummary: 'Cristofer completed the introduction to AI and began a design project. Continue the second lesson next meeting.',
      reportCode: 'DJ-2026-0923-0001' },
  },
  {
    id: 'meeting-2', studentId: '1', sessionId: 'session-1', historyId: 'history-book-1', number: 5,
    className: 'DPS-Adaptive-8C', startsAt: '2026-09-16T16:00:00+07:00', endsAt: '2026-09-16T17:30:00+07:00',
    teacherName: 'Kaylynn Herwitz', room: 'Rio Room',
    lessons: [lesson('lesson-3', 'Lesson 8 - Building a web page', 100, ['Create a page layout with HTML and CSS.'])],
    journal: { status: 'Draft', updatedAt: '2026-09-16T18:00:00+07:00', activeProject: false,
      teacherNotes: 'Page layout completed with guidance.', evidencePhotos: [], aiSummary: 'Cristofer practiced page structure and styling.' },
  },
  {
    id: 'meeting-3', studentId: '1', sessionId: 'session-1', historyId: 'history-book-1', number: 4,
    className: 'DPS-Adaptive-8C', startsAt: '2026-09-09T16:00:00+07:00', endsAt: '2026-09-09T17:30:00+07:00',
    teacherName: 'Kaylynn Herwitz', room: 'Rio Room', lessons: [],
  },
  {
    id: 'meeting-4', studentId: '1', sessionId: 'session-2', historyId: 'history-book-2', number: 2,
    className: 'DPS-Adaptive-8C', startsAt: '2026-08-12T16:00:00+07:00', endsAt: '2026-08-12T17:30:00+07:00',
    teacherName: 'Kaylynn Herwitz', room: 'Rio Room',
    lessons: [lesson('lesson-4', 'Lesson 2 - Python variables', 100, ['Define and use variables in Python.'])],
    journal: { status: 'Sent', updatedAt: '2026-08-12T18:00:00+07:00', sentAt: '2026-08-12T18:00:00+07:00', activeProject: false,
      teacherNotes: 'Cristofer used variables in a short game exercise.', evidencePhotos: [],
      aiSummary: 'Cristofer completed the variables lesson and applied it in a game exercise.', reportCode: 'DJ-2026-0812-0002' },
  },
  {
    id: 'meeting-5', studentId: '1', sessionId: 'session-1', historyId: 'history-book-10', number: 7,
    className: 'DPS-Adaptive-8C', startsAt: '2026-09-30T16:00:00+07:00', endsAt: '2026-09-30T17:30:00+07:00',
    teacherName: 'Kaylynn Herwitz', room: 'Rio Room', lessons: [],
  },
]

export const meetingsForSession = (studentId: string, sessionId: string) => studentMeetings
  .filter(meeting => meeting.studentId === studentId && meeting.sessionId === sessionId)
  .sort((a, b) => b.number - a.number)

export const formatMeetingDate = (value: string) => new Intl.DateTimeFormat('en-US', {
  weekday: 'long', month: 'short', day: 'numeric', year: 'numeric', timeZone: 'Asia/Jakarta',
}).format(new Date(value))

export const formatMeetingTime = (value: string) => new Intl.DateTimeFormat('en-US', {
  hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Jakarta',
}).format(new Date(value))
