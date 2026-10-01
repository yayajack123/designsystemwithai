import { c as studentBooks, d as studentSessions } from "./studentSessions-DLVEJCdB.js";
const lesson$1 = (id, title, progress, objectives) => ({
  id,
  title,
  progress,
  score: progress,
  maxScore: 100,
  objectives
});
const studentMeetings = [
  {
    id: "meeting-1",
    studentId: "1",
    sessionId: "session-1",
    historyId: "history-book-1",
    number: 6,
    className: "DPS-Adaptive-8C",
    startsAt: "2026-09-23T16:00:00+07:00",
    endsAt: "2026-09-23T17:30:00+07:00",
    teacherName: "Kaylynn Herwitz",
    room: "Rio Room",
    lessons: [
      lesson$1("lesson-1", "Lesson 9 - Introduction to AI", 100, ["Recognize everyday uses of artificial intelligence.", "Explain how simple AI tools process input."]),
      lesson$1("lesson-2", "Lesson 10 - Design in the world", 40, ["Explore design patterns in everyday products."])
    ],
    journal: {
      status: "Sent",
      updatedAt: "2026-09-23T18:20:00+07:00",
      sentAt: "2026-09-23T18:20:00+07:00",
      projectName: "AI poster",
      activeProject: true,
      teacherNotes: "Cristofer explained his design choices clearly and completed the first lesson.",
      evidencePhotos: [],
      aiSummary: "Cristofer completed the introduction to AI and began a design project. Continue the second lesson next meeting.",
      reportCode: "DJ-2026-0923-0001"
    }
  },
  {
    id: "meeting-2",
    studentId: "1",
    sessionId: "session-1",
    historyId: "history-book-1",
    number: 5,
    className: "DPS-Adaptive-8C",
    startsAt: "2026-09-16T16:00:00+07:00",
    endsAt: "2026-09-16T17:30:00+07:00",
    teacherName: "Kaylynn Herwitz",
    room: "Rio Room",
    lessons: [lesson$1("lesson-3", "Lesson 8 - Building a web page", 100, ["Create a page layout with HTML and CSS."])],
    journal: {
      status: "Draft",
      updatedAt: "2026-09-16T18:00:00+07:00",
      activeProject: false,
      teacherNotes: "Page layout completed with guidance.",
      evidencePhotos: [],
      aiSummary: "Cristofer practiced page structure and styling."
    }
  },
  {
    id: "meeting-3",
    studentId: "1",
    sessionId: "session-1",
    historyId: "history-book-1",
    number: 4,
    className: "DPS-Adaptive-8C",
    startsAt: "2026-09-09T16:00:00+07:00",
    endsAt: "2026-09-09T17:30:00+07:00",
    teacherName: "Kaylynn Herwitz",
    room: "Rio Room",
    lessons: []
  },
  {
    id: "meeting-4",
    studentId: "1",
    sessionId: "session-2",
    historyId: "history-book-2",
    number: 2,
    className: "DPS-Adaptive-8C",
    startsAt: "2026-08-12T16:00:00+07:00",
    endsAt: "2026-08-12T17:30:00+07:00",
    teacherName: "Kaylynn Herwitz",
    room: "Rio Room",
    lessons: [lesson$1("lesson-4", "Lesson 2 - Python variables", 100, ["Define and use variables in Python."])],
    journal: {
      status: "Sent",
      updatedAt: "2026-08-12T18:00:00+07:00",
      sentAt: "2026-08-12T18:00:00+07:00",
      activeProject: false,
      teacherNotes: "Cristofer used variables in a short game exercise.",
      evidencePhotos: [],
      aiSummary: "Cristofer completed the variables lesson and applied it in a game exercise.",
      reportCode: "DJ-2026-0812-0002"
    }
  }
];
const formatMeetingDate = (value) => new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "Asia/Jakarta"
}).format(new Date(value));
const formatMeetingTime = (value) => new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Jakarta"
}).format(new Date(value));
const chapter = (id, title, lessons) => ({ id, title, lessons });
const lesson = (id, title, progress, score, objectives) => ({
  id,
  title,
  progress,
  score,
  maxScore: 100,
  objectives
});
const studentHistories = studentBooks.map((book) => {
  const session = studentSessions.find((item) => item.id === book.sessionId);
  return {
    id: `history-${book.id}`,
    studentId: book.studentId,
    sessionId: book.sessionId,
    bookId: book.id,
    course: session?.packageName || "Course unavailable",
    type: session?.classType || "—",
    status: book.status === "Completed" ? "Completed" : book.status === "Idle" ? "Not started" : "Ongoing",
    finishedAt: book.status === "Completed" ? `${book.updatedAt}T00:00:00+07:00` : void 0,
    chapters: book.id === "book-1" ? [
      chapter("chapter-1", "Web foundations", [
        lesson("lesson-1", "Introduction to AI", 100, 85, ["Recognize everyday uses of artificial intelligence."]),
        lesson("lesson-2", "Design in the world", 40, 40, ["Explore design patterns in everyday products."])
      ]),
      chapter("chapter-2", "Build a web page", [
        lesson("lesson-3", "Building a web page", 100, 90, ["Create a page layout with HTML and CSS."])
      ]),
      chapter("chapter-3", "Publish your work", [
        lesson("lesson-4", "Review and publish", 0, 0, ["Review and publish a web page."])
      ])
    ] : []
  };
});
const historiesForSession = (studentId, sessionId) => studentHistories.filter(
  (item) => item.studentId === studentId && item.sessionId === sessionId
);
const historyBook = (history) => studentBooks.find(
  (book) => book.id === history.bookId && book.studentId === history.studentId && book.sessionId === history.sessionId
);
const meetingsForHistory = (history) => studentMeetings.filter((item) => item.studentId === history.studentId && item.sessionId === history.sessionId && item.historyId === history.id).sort((a, b) => b.number - a.number);
export {
  historyBook as a,
  formatMeetingTime as b,
  studentMeetings as c,
  formatMeetingDate as f,
  historiesForSession as h,
  meetingsForHistory as m,
  studentHistories as s
};
