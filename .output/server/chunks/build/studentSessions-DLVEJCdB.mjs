const studentBooks = [
  { id: "book-1", studentId: "1", sessionId: "session-1", title: "Web Developer for Beginner", session: "Session 6", status: "Completed", updatedAt: "2026-02-26" },
  { id: "book-2", studentId: "1", sessionId: "session-2", title: "Python Game Dev", session: "Session 5", status: "Incomplete", updatedAt: "2026-02-12" },
  { id: "book-3", studentId: "1", sessionId: "session-3", title: "Scratch Basic", session: "Session 2", status: "Completed", updatedAt: "2025-11-18" },
  { id: "book-4", studentId: "2", sessionId: "session-4", title: "Web Developer for Beginner", session: "Session 6", status: "Completed", updatedAt: "2026-02-26" },
  { id: "book-5", studentId: "3", sessionId: "session-5", title: "Web Developer for Beginner", session: "Session 6", status: "Incomplete", updatedAt: "2026-02-26" },
  { id: "book-6", studentId: "6", sessionId: "session-6", title: "Python Game Dev", session: "Session 3", status: "Idle", updatedAt: "2026-01-20" },
  { id: "book-7", studentId: "16", sessionId: "session-7", title: "Web Developer for Beginner", session: "Session 6", status: "Idle", updatedAt: "2026-02-26" },
  { id: "book-8", studentId: "17", sessionId: "session-8", title: "AI Enthusiast", session: "Session 6", status: "Completed", updatedAt: "2026-02-26" },
  { id: "book-9", studentId: "18", sessionId: "session-9", title: "Robotics Explorer", session: "Session 6", status: "Idle", updatedAt: "2026-02-26" }
];
const booksForStudent = (studentId) => studentBooks.filter((book) => book.studentId === studentId).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
const studentSessions = [
  {
    id: "session-1",
    studentId: "1",
    number: 6,
    code: "LS-260226-0001",
    status: "Active",
    productName: "Web Developer Program",
    packageName: "Coding Teen",
    classType: "Adaptive",
    bookId: "book-1",
    className: "DPS-Adaptive-8C",
    teacherName: "Kaylynn Herwitz",
    schedule: "Thursday, 16:00\u201317:30",
    branch: "Head Quarter",
    room: "Rio Room",
    quota: 10,
    meetingsLeft: 4,
    expiresAt: "2027-02-26",
    pricePerMeeting: 12300,
    lastUpdated: "2026-02-26T14:03:36"
  },
  {
    id: "session-2",
    studentId: "1",
    number: 5,
    code: "LS-260212-0002",
    status: "Active",
    productName: "Python Game Dev",
    packageName: "Coding Teen",
    classType: "Adaptive",
    bookId: "book-2",
    className: "DPS-Adaptive-8C",
    teacherName: "Kaylynn Herwitz",
    schedule: "Thursday, 16:00\u201317:30",
    branch: "Head Quarter",
    room: "Rio Room",
    quota: 10,
    meetingsLeft: 6,
    expiresAt: "2027-02-12",
    lastUpdated: "2026-02-12T10:00:00"
  },
  {
    id: "session-3",
    studentId: "1",
    number: 2,
    code: "LS-251118-0003",
    status: "Completed",
    productName: "Scratch Basic",
    packageName: "Coding Kids",
    classType: "Adaptive",
    bookId: "book-3",
    quota: 8,
    meetingsLeft: 0,
    expiresAt: "2026-11-18",
    lastUpdated: "2025-11-18T09:00:00"
  },
  {
    id: "session-4",
    studentId: "2",
    number: 6,
    code: "LS-260226-0004",
    status: "Active",
    productName: "Web Developer Program",
    packageName: "Coding Teen",
    classType: "Adaptive",
    bookId: "book-4",
    quota: 10,
    meetingsLeft: 5,
    expiresAt: "2027-02-26",
    lastUpdated: "2026-02-26T12:00:00"
  },
  {
    id: "session-5",
    studentId: "3",
    number: 6,
    code: "LS-260226-0005",
    status: "Active",
    productName: "Web Developer Program",
    packageName: "Coding Teen",
    classType: "Adaptive",
    bookId: "book-5",
    quota: 10,
    meetingsLeft: 5,
    expiresAt: "2027-02-26",
    lastUpdated: "2026-02-26T12:00:00"
  },
  {
    id: "session-6",
    studentId: "6",
    number: 3,
    code: "LS-260120-0006",
    status: "Active",
    productName: "Python Game Dev",
    packageName: "Coding Teen",
    classType: "Adaptive",
    bookId: "book-6",
    quota: 10,
    meetingsLeft: 7,
    expiresAt: "2027-01-20",
    lastUpdated: "2026-01-20T12:00:00"
  },
  {
    id: "session-7",
    studentId: "16",
    number: 6,
    code: "LS-260226-0007",
    status: "Active",
    productName: "Web Developer Program",
    packageName: "Coding Teen",
    classType: "Adaptive",
    bookId: "book-7",
    quota: 10,
    meetingsLeft: 7,
    expiresAt: "2027-02-26",
    lastUpdated: "2026-02-26T12:00:00"
  },
  {
    id: "session-8",
    studentId: "17",
    number: 6,
    code: "LS-260226-0008",
    status: "Active",
    productName: "AI Enthusiast",
    packageName: "Coding Teen",
    classType: "Adaptive",
    bookId: "book-8",
    quota: 10,
    meetingsLeft: 3,
    expiresAt: "2027-02-26",
    lastUpdated: "2026-02-26T12:00:00"
  },
  {
    id: "session-9",
    studentId: "18",
    number: 6,
    code: "LS-260226-0009",
    status: "Active",
    productName: "Robotics Explorer",
    packageName: "Coding Kids",
    classType: "Adaptive",
    bookId: "book-9",
    quota: 10,
    meetingsLeft: 8,
    expiresAt: "2027-02-26",
    lastUpdated: "2026-02-26T12:00:00"
  }
];
const sessionsForStudent = (studentId) => studentSessions.filter((session) => session.studentId === studentId).sort((a, b) => b.number - a.number);
const sessionBook = (session) => studentBooks.find(
  (book) => book.id === session.bookId && book.sessionId === session.id && book.studentId === session.studentId
);
const formatSessionDate = (value) => new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC"
}).format(new Date(value));

export { sessionBook as a, booksForStudent as b, studentBooks as c, studentSessions as d, formatSessionDate as f, sessionsForStudent as s };
