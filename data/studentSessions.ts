import { studentBooks } from './studentBooks'

export type SessionStatus = 'Active' | 'Completed'

export interface StudentSession {
  id: string
  studentId: string
  number: number
  code: string
  status: SessionStatus
  productName: string
  packageName: string
  classType: string
  bookId: string
  className?: string
  teacherName?: string
  schedule?: string
  branch?: string
  room?: string
  quota: number
  meetingsLeft: number
  expiresAt: string
  pricePerMeeting?: number
  lastUpdated: string
}

// Session and book IDs model one consistent local demo flow; the CMS API is not connected.
export const studentSessions: StudentSession[] = [
  {
    id: 'session-1', studentId: '1', number: 6, code: 'LS-260226-0001', status: 'Active',
    productName: 'Web Developer Program', packageName: 'Coding Teen', classType: 'Adaptive', bookId: 'book-1',
    className: 'DPS-Adaptive-8C', teacherName: 'Kaylynn Herwitz', schedule: 'Thursday, 16:00–17:30',
    branch: 'Head Quarter', room: 'Rio Room', quota: 10, meetingsLeft: 4, expiresAt: '2027-02-26',
    pricePerMeeting: 12300, lastUpdated: '2026-02-26T14:03:36',
  },
  {
    id: 'session-2', studentId: '1', number: 5, code: 'LS-260212-0002', status: 'Active',
    productName: 'Python Game Dev', packageName: 'Coding Teen', classType: 'Adaptive', bookId: 'book-2',
    className: 'DPS-Adaptive-8C', teacherName: 'Kaylynn Herwitz', schedule: 'Thursday, 16:00–17:30',
    branch: 'Head Quarter', room: 'Rio Room', quota: 10, meetingsLeft: 6, expiresAt: '2027-02-12',
    lastUpdated: '2026-02-12T10:00:00',
  },
  {
    id: 'session-3', studentId: '1', number: 2, code: 'LS-251118-0003', status: 'Completed',
    productName: 'Scratch Basic', packageName: 'Coding Kids', classType: 'Adaptive', bookId: 'book-3',
    quota: 8, meetingsLeft: 0, expiresAt: '2026-11-18', lastUpdated: '2025-11-18T09:00:00',
  },
  {
    id: 'session-4', studentId: '2', number: 6, code: 'LS-260226-0004', status: 'Active',
    productName: 'Web Developer Program', packageName: 'Coding Teen', classType: 'Adaptive', bookId: 'book-4',
    quota: 10, meetingsLeft: 5, expiresAt: '2027-02-26', lastUpdated: '2026-02-26T12:00:00',
  },
  {
    id: 'session-5', studentId: '3', number: 6, code: 'LS-260226-0005', status: 'Active',
    productName: 'Web Developer Program', packageName: 'Coding Teen', classType: 'Adaptive', bookId: 'book-5',
    quota: 10, meetingsLeft: 5, expiresAt: '2027-02-26', lastUpdated: '2026-02-26T12:00:00',
  },
  {
    id: 'session-6', studentId: '6', number: 3, code: 'LS-260120-0006', status: 'Active',
    productName: 'Python Game Dev', packageName: 'Coding Teen', classType: 'Adaptive', bookId: 'book-6',
    quota: 10, meetingsLeft: 7, expiresAt: '2027-01-20', lastUpdated: '2026-01-20T12:00:00',
  },
  {
    id: 'session-7', studentId: '16', number: 6, code: 'LS-260226-0007', status: 'Active',
    productName: 'Web Developer Program', packageName: 'Coding Teen', classType: 'Adaptive', bookId: 'book-7',
    quota: 10, meetingsLeft: 7, expiresAt: '2027-02-26', lastUpdated: '2026-02-26T12:00:00',
  },
  {
    id: 'session-8', studentId: '17', number: 6, code: 'LS-260226-0008', status: 'Active',
    productName: 'AI Enthusiast', packageName: 'Coding Teen', classType: 'Adaptive', bookId: 'book-8',
    quota: 10, meetingsLeft: 3, expiresAt: '2027-02-26', lastUpdated: '2026-02-26T12:00:00',
  },
  {
    id: 'session-9', studentId: '18', number: 6, code: 'LS-260226-0009', status: 'Active',
    productName: 'Robotics Explorer', packageName: 'Coding Kids', classType: 'Adaptive', bookId: 'book-9',
    quota: 10, meetingsLeft: 8, expiresAt: '2027-02-26', lastUpdated: '2026-02-26T12:00:00',
  },
]

export const sessionsForStudent = (studentId: string) => studentSessions
  .filter(session => session.studentId === studentId)
  .sort((a, b) => b.number - a.number)

export const sessionBook = (session: StudentSession) => studentBooks.find(book =>
  book.id === session.bookId && book.sessionId === session.id && book.studentId === session.studentId,
)

export const formatSessionDate = (value: string) => new Intl.DateTimeFormat('en-US', {
  day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
}).format(new Date(value))
