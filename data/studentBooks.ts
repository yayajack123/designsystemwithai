export type BookStatus = 'Completed' | 'Idle' | 'Incomplete'

export interface StudentBook {
  id: string
  studentId: string
  sessionId: string
  title: string
  session: string
  status: BookStatus
  updatedAt: string
}

// Local demo data. Profile IDs are unique even where legacy mock student IDs are duplicated.
export const studentBooks: StudentBook[] = [
  { id: 'book-1', studentId: '1', sessionId: 'session-1', title: 'Web Developer for Beginner', session: 'Session 6', status: 'Completed', updatedAt: '2026-02-26' },
  { id: 'book-10', studentId: '1', sessionId: 'session-1', title: 'Web Design Projects', session: 'Session 6', status: 'Incomplete', updatedAt: '2026-09-23' },
  { id: 'book-2', studentId: '1', sessionId: 'session-2', title: 'Python Game Dev', session: 'Session 5', status: 'Incomplete', updatedAt: '2026-02-12' },
  { id: 'book-3', studentId: '1', sessionId: 'session-3', title: 'Scratch Basic', session: 'Session 2', status: 'Completed', updatedAt: '2025-11-18' },
  { id: 'book-4', studentId: '2', sessionId: 'session-4', title: 'Web Developer for Beginner', session: 'Session 6', status: 'Completed', updatedAt: '2026-02-26' },
  { id: 'book-5', studentId: '3', sessionId: 'session-5', title: 'Web Developer for Beginner', session: 'Session 6', status: 'Incomplete', updatedAt: '2026-02-26' },
  { id: 'book-6', studentId: '6', sessionId: 'session-6', title: 'Python Game Dev', session: 'Session 3', status: 'Idle', updatedAt: '2026-01-20' },
  { id: 'book-7', studentId: '16', sessionId: 'session-7', title: 'Web Developer for Beginner', session: 'Session 6', status: 'Idle', updatedAt: '2026-02-26' },
  { id: 'book-8', studentId: '17', sessionId: 'session-8', title: 'AI Enthusiast', session: 'Session 6', status: 'Completed', updatedAt: '2026-02-26' },
  { id: 'book-9', studentId: '18', sessionId: 'session-9', title: 'Robotics Explorer', session: 'Session 6', status: 'Idle', updatedAt: '2026-02-26' },
]

export const booksForStudent = (studentId: string) => studentBooks
  .filter(book => book.studentId === studentId)
  .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
