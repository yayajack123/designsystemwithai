import type { DailyJournalDemo } from '@/composables/useDailyJournalDemo'

export interface AttendanceJournalBook {
  title: string
  status: 'Completed' | 'Idle' | 'Incomplete'
}

export interface AttendanceJournalStudent {
  id: string
  studentId: string
  name: string
  sessionText: string
  bookTitle: string
  bookStatus: 'Completed' | 'Idle' | 'Incomplete'
  books?: AttendanceJournalBook[]
  hasLaptop: boolean
  rentals?: ('Laptop' | 'Mouse' | 'Rent IoT' | 'Keyboard')[]
  presence: 'On time' | 'Late 5 minutes' | 'Absent'
  notes: string
  studentType: 'My Student' | 'Replacement'
  status: 'Draft' | 'Sending' | 'Sent' | 'Failed' | 'Sent (Manual)' | 'Not send yet' | 'Revision' | '-'
  actionText: string
  actionIcon: string
}

export const attendanceJournalId = (classId: string, studentId: string) => `attendance-demo-class-${classId}-student-${studentId}`

export const attendanceJournalStudents: AttendanceJournalStudent[] = [
  {
    id: 's1', studentId: 's1', name: 'I Wayan Sahadewa Putra', sessionText: 'Session 1',
    bookTitle: 'Python Game Dev', bookStatus: 'Completed', hasLaptop: true, presence: 'On time',
    rentals: ['Laptop', 'Mouse', 'Rent IoT', 'Keyboard'],
    books: [{ title: 'Python Game Dev', status: 'Completed' }, { title: 'Scratch Basic', status: 'Completed' }],
    notes: 'Memahami dasar sprite dan mulai membuat animasi sederhana. Masih perlu latihan mengatur perpindahan karakter agar gerakannya lebih halus. Pertemuan berikutnya akan melanjutkan latihan collision dan penambahan skor.', studentType: 'My Student',
    status: 'Sent', actionText: 'View', actionIcon: 'ri-eye-line',
  },
  {
    id: 's2', studentId: 's2', name: 'Putu Pradhira Armandana', sessionText: 'Session 1',
    bookTitle: 'Roblox Studio', bookStatus: 'Completed', hasLaptop: true, presence: 'On time',
    books: [{ title: 'Roblox Studio', status: 'Completed' }, { title: 'Python Game Dev', status: 'Completed' }],
    notes: 'Menyelesaikan latihan membuat objek dan mengatur properti.', studentType: 'My Student',
    status: 'Draft', actionText: 'Edit', actionIcon: 'ri-edit-line',
  },
  {
    id: 's3', studentId: 's3', name: 'Winston Arya Liaudo', sessionText: 'Session 1',
    bookTitle: 'Web Developer', bookStatus: 'Completed', hasLaptop: true, presence: 'On time',
    notes: '', studentType: 'My Student',
    status: '-', actionText: 'Create Journal', actionIcon: 'ri-add-line',
  },
  {
    id: 's4', studentId: 's4', name: 'Sean Nebemiah Pranoto', sessionText: 'Session 1',
    bookTitle: 'Scratch Basic', bookStatus: 'Completed', hasLaptop: true, presence: 'On time',
    notes: 'Mulai mengikuti kelas sebagai siswa pengganti.', studentType: 'Replacement',
    status: '-', actionText: 'Create Journal', actionIcon: 'ri-add-line',
  },
  {
    id: 's9', studentId: 's9', name: 'Techia Esploriani', sessionText: 'Session 1',
    bookTitle: 'Python Game Dev', bookStatus: 'Completed', hasLaptop: true, presence: 'On time',
    books: [{ title: 'Python Game Dev', status: 'Completed' }, { title: 'Web Developer', status: 'Completed' }],
    notes: 'Menyelesaikan tantangan logika secara mandiri dan berhasil menemukan kesalahan pada perulangan. Perlu latihan tambahan untuk memecah persoalan menjadi fungsi kecil sebelum mulai menulis kode.', studentType: 'My Student',
    status: 'Draft', actionText: 'Edit', actionIcon: 'ri-edit-line',
  },
  {
    id: 's10', studentId: 's10', name: 'Made Arya', sessionText: 'Session 1',
    bookTitle: 'Web Developer', bookStatus: 'Completed', hasLaptop: true, presence: 'On time',
    notes: '', studentType: 'My Student',
    status: 'Sent', actionText: 'View', actionIcon: 'ri-eye-line',
  },
  {
    id: 's13', studentId: 's13', name: 'Putu Diah', sessionText: 'Session 1',
    bookTitle: 'Scratch Basic', bookStatus: 'Completed', hasLaptop: true, presence: 'On time',
    notes: 'Menyelesaikan latihan animasi.', studentType: 'My Student',
    status: 'Sent', actionText: 'View', actionIcon: 'ri-eye-line',
  },
  {
    id: 's14', studentId: 's14', name: 'Kadek Surya', sessionText: 'Session 1',
    bookTitle: 'Python Game Dev', bookStatus: 'Completed', hasLaptop: true, presence: 'On time',
    notes: 'Memperbarui catatan latihan.', studentType: 'My Student',
    status: 'Revision', actionText: 'Edit', actionIcon: 'ri-edit-line',
  },
  ...[
    { id: 's15', name: 'Komang Aditya', status: 'Sending' as const, notes: 'Sudah memahami penggunaan CSS Grid.' },
    { id: 's16', name: 'Ni Luh Sari', status: 'Failed' as const, notes: 'Berhasil membuat form kontak dengan validasi sederhana. Masih membutuhkan pendampingan saat menghubungkan label dengan input dan menampilkan pesan kesalahan yang sesuai.' },
    { id: 's17', name: 'Gede Pratama', status: 'Sent' as const, notes: '' },
    { id: 's18', name: 'Ayu Puspita', status: 'Sent (Manual)' as const, notes: 'Aktif berdiskusi dan membantu teman mengatur layout.' },
    { id: 's19', name: 'Made Wijaya', status: 'Failed' as const, notes: 'Merapikan navigasi halaman dan memperbaiki tautan yang belum sesuai.\nLatihan berikutnya: menyesuaikan layout untuk layar ponsel dan menguji navigasi dengan keyboard.' },
  ].map(student => ({
    ...student, studentId: student.id, sessionText: 'Session 1', bookTitle: 'Web Developer',
    bookStatus: 'Completed' as const, hasLaptop: true, presence: 'On time' as const,
    studentType: 'My Student' as const,
    actionText: 'View', actionIcon: 'ri-eye-line',
  })),
]

const makeLesson = (id: string, title: string, progress: number, score: number, objectives: string[]) => ({
  id,
  title,
  progress,
  score,
  maxScore: 100,
  objectives,
})

const makeJournalRecord = (student: AttendanceJournalStudent, status: 'Draft' | 'Sent'): DailyJournalDemo => {
  const id = attendanceJournalId('1', student.id)
  const sentAt = status === 'Sent' ? '2026-10-26T09:30:00+08:00' : undefined
  const teacherNotes = `${student.name} mengikuti kelas ${student.bookTitle} dengan baik dan menyelesaikan latihan hari ini.`
  const lessonTitleByBook: Record<string, string> = {
    'Python Game Dev': 'Lesson 8 – Sprite Animation',
    'Roblox Studio': 'Build a Roblox obstacle course',
    'Web Developer': 'Lesson 7 – JS Basics',
    'Scratch Basic': 'Create a Scratch animation',
  }
  const lessons = student.id === 's1'
    ? [
        makeLesson('1', 'Lesson 7 – Add Another Sprite', 100, 85, ['Add a new sprite to the game scene.', 'Set the sprite position and appearance.']),
        makeLesson('2', 'Lesson 8 – Sprite Animation', 75, 72, ['Create animation frames.', 'Use a game loop to update the sprite.']),
        makeLesson('3', 'Game Loop and Sound Effects', 50, 68, ['Add a game loop.', 'Play a sound effect after an event.']),
        makeLesson('4', 'Collision Detection', 25, 60, ['Detect when two sprites touch.', 'Update the score after a collision.']),
      ]
    : [makeLesson('1', lessonTitleByBook[student.bookTitle] || 'Project Practice', 100, 85, [student.notes])]
  const aiSummary = student.id === 's1'
    ? `${student.name} mengikuti Python Game Dev. Lesson 7 selesai dengan nilai 85/100, Lesson 8 mencapai progres 75%, Game Loop and Sound Effects mencapai progres 50%, dan Collision Detection mencapai progres 25%. Lanjutkan latihan animasi dan deteksi tabrakan pada pertemuan berikutnya.`
    : `${student.name} mengikuti ${student.bookTitle} dan menyelesaikan latihan dengan baik. Lanjutkan ke materi berikutnya pada pertemuan mendatang.`

  return {
    id,
    studentName: student.name,
    studentCode: student.studentId,
    sessionCode: student.sessionText,
    bookTitle: student.bookTitle,
    className: 'RDA-9012',
    teacherName: 'Kaylynn Herwitz',
    startsAt: '2026-10-26T09:00:00+08:00',
    endsAt: '2026-10-26T10:30:00+08:00',
    lessons,
    journal: {
      status,
      mediaMode: 'photo',
      updatedAt: sentAt || '2026-10-26T10:30:00+08:00',
      sentAt,
      activeProject: true,
      projectName: status === 'Sent' ? 'Sprite Animation' : 'Class Practice',
      teacherNotes,
      evidencePhotos: ['/good-photo.png'],
      aiSummary,
      reportCode: id,
    },
    parentPhone: '6280000000000',
    sendCount: status === 'Sent' ? 1 : 0,
    deliveryStatusUpdatedAt: sentAt,
  }
}

export const attendanceJournalSeedRecords: DailyJournalDemo[] = [
  makeJournalRecord(attendanceJournalStudents[0], 'Sent'),
  makeJournalRecord(attendanceJournalStudents[1], 'Draft'),
  makeJournalRecord(attendanceJournalStudents[4], 'Draft'),
  { ...makeJournalRecord(attendanceJournalStudents[5], 'Sent'), journalStage: 'Sent', deliveryStatus: 'Delivered', deliveryStatusUpdatedAt: '2026-10-26T09:31:00+08:00' },
  { ...makeJournalRecord(attendanceJournalStudents[6], 'Sent'), journalStage: 'Revised & Sent', deliveryStatus: 'Read', deliveryStatusUpdatedAt: '2026-10-26T09:35:00+08:00', sendCount: 2 },
  { ...makeJournalRecord(attendanceJournalStudents[7], 'Draft'), journalStage: 'Revision', deliveryStatus: null, sendCount: 1 },
  ...attendanceJournalStudents.slice(8).map((student, index): DailyJournalDemo => {
    const isSent = index === 2 || index === 3
    const record = makeJournalRecord(student, isSent ? 'Sent' : 'Draft')
    record.deliveryStatusUpdatedAt = '2026-10-26T09:30:00+08:00'
    if (index === 0) return { ...record, journal: { ...record.journal, status: 'Sending' }, journalStage: 'Created', deliveryStatus: 'Sending' }
    if (index === 1) return { ...record, journal: { ...record.journal, status: 'Failed' }, journalStage: 'Created', deliveryStatus: 'Failed' }
    if (index === 2) return { ...record, journalStage: 'Sent', deliveryStatus: 'Sent' }
    if (index === 3) return { ...record, journal: { ...record.journal, status: 'Sent (Manual)' }, journalStage: 'Sent', deliveryStatus: 'Marked as Sent' }
    return { ...record, journal: { ...record.journal, status: 'Failed' }, journalStage: 'Revision', deliveryStatus: 'Failed', sendCount: 1 }
  }),
]
