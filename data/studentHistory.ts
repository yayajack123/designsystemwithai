import { studentBooks } from './studentBooks'
import { studentSessions } from './studentSessions'
import { studentMeetings } from './studentMeetings'

export interface HistoryLesson {
  id: string
  title: string
  progress: number
  score: number
  maxScore: number
  objectives: string[]
}

export interface HistoryChapter {
  id: string
  title: string
  lessons: HistoryLesson[]
}

export interface StudentHistory {
  id: string
  studentId: string
  sessionId: string
  bookId: string
  course: string
  type: string
  status: 'Ongoing' | 'Completed' | 'Not started'
  finishedAt?: string
  chapters: HistoryChapter[]
}

const chapter = (id: string, title: string, lessons: HistoryLesson[]): HistoryChapter => ({ id, title, lessons })
const lesson = (id: string, title: string, progress: number, score: number, objectives: string[]): HistoryLesson => ({
  id, title, progress, score, maxScore: 100, objectives,
})

export const studentHistories: StudentHistory[] = studentBooks.map(book => {
  const session = studentSessions.find(item => item.id === book.sessionId)
  return {
    id: `history-${book.id}`,
    studentId: book.studentId,
    sessionId: book.sessionId,
    bookId: book.id,
    course: session?.packageName || 'Course unavailable',
    type: session?.classType || '—',
    status: book.status === 'Completed' ? 'Completed' : book.status === 'Idle' ? 'Not started' : 'Ongoing',
    finishedAt: book.status === 'Completed' ? `${book.updatedAt}T00:00:00+07:00` : undefined,
    chapters: book.id === 'book-1' ? [
      chapter('chapter-1', 'Web foundations', [
        lesson('lesson-1', 'Introduction to AI', 100, 85, ['Recognize everyday uses of artificial intelligence.']),
        lesson('lesson-2', 'Design in the world', 40, 40, ['Explore design patterns in everyday products.']),
      ]),
      chapter('chapter-2', 'Build a web page', [
        lesson('lesson-3', 'Building a web page', 100, 90, ['Create a page layout with HTML and CSS.']),
      ]),
      chapter('chapter-3', 'Publish your work', [
        lesson('lesson-4', 'Review and publish', 0, 0, ['Review and publish a web page.']),
      ]),
    ] : [],
  }
})

export const historiesForSession = (studentId: string, sessionId: string) => studentHistories.filter(item =>
  item.studentId === studentId && item.sessionId === sessionId,
)

export const historyBook = (history: StudentHistory) => studentBooks.find(book =>
  book.id === history.bookId && book.studentId === history.studentId && book.sessionId === history.sessionId,
)

export const meetingsForHistory = (history: StudentHistory) => studentMeetings
  .filter(item => item.studentId === history.studentId && item.sessionId === history.sessionId && item.historyId === history.id)
  .sort((a, b) => b.number - a.number)
