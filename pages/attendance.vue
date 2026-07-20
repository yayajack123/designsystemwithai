<script setup lang="ts">
definePageMeta({
  sidebarRoute: 'attendance',
})

// ─────────────────────── Types ───────────────────────
interface Student {
  id: string
  name: string
  course: string
  badgeText: string
  badgeColor: 'warning' | 'error' | 'success'
  isPresent: boolean
  hasLaptop: boolean
}

interface Teacher {
  id: string
  name: string
}

interface ClassSession {
  id: string
  name: string
  room: string
  date: string
  teachersCount: number
  teachers: Teacher[]
  timeStart: string
  timeEnd: string
  duration: string
  className: string
  meetingType: string
  meetingNumber: string
  status: 'Active' | 'Ongoing' | 'Waiting Approval' | 'Completed'
  students: Student[]
}

// ─────────────────────── Mock Data ───────────────────────
const mockClasses = ref<ClassSession[]>([
  {
    id: '1',
    name: 'Regular Kids',
    room: 'Zoom Room 10',
    date: 'Thu, 26 Feb 2026',
    teachersCount: 2,
    teachers: [
      { id: 't1', name: "Liam O'Connor" },
      { id: 't2', name: 'Sophia Tran' },
    ],
    timeStart: '00:00',
    timeEnd: '01:30',
    duration: '2 hrs',
    className: 'Private Teen Class Coding Camp',
    meetingType: 'Group Class',
    meetingNumber: 'Meeting 20',
    status: 'Active',
    students: [
      { id: 's1', name: 'Craig Septimus', course: 'Python Coder', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's2', name: 'Craig Septimus', course: 'Advanced Algorithms', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
      { id: 's3', name: 'Craig Septimus', course: 'Mobile App Development', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
      { id: 's4', name: 'Craig Septimus', course: 'Data Science Essentials', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
      { id: 's5', name: 'Craig Septimus', course: 'Full-Stack Web Dev', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
      { id: 's6', name: 'James Carter', course: 'Python Coder', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: false },
      { id: 's7', name: 'Emma Watson', course: 'Python Coder', badgeText: 'Expired', badgeColor: 'error', isPresent: true, hasLaptop: true },
      { id: 's8', name: 'Oliver Twist', course: 'Python Coder', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
      { id: 's9', name: 'Lucy Heart', course: 'Python Coder', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's10', name: 'Natsu Dragneel', course: 'Python Coder', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
    ],
  },
  {
    id: '2',
    name: 'Advanced Teens',
    room: 'Zoom Room 12',
    date: 'Thu, 26 Feb 2026',
    teachersCount: 3,
    teachers: [
      { id: 't1', name: "Liam O'Connor" },
      { id: 't2', name: 'Sophia Tran' },
      { id: 't3', name: 'Marcus Aurelius' },
    ],
    timeStart: '00:00',
    timeEnd: '01:30',
    duration: '2 hrs',
    className: 'Private Teen Class Coding Camp',
    meetingType: 'Group Class',
    meetingNumber: 'Meeting 20',
    status: 'Ongoing',
    students: [
      { id: 's11', name: 'Alex Rivera', course: 'AI Enthusiast', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's12', name: 'Jamie Lee', course: 'Robotics Explorer', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
      { id: 's13', name: 'Jordan Kim', course: 'Machine Learning Basics', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
      { id: 's14', name: 'Peyton Smith', course: 'Intro to AI', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
      { id: 's15', name: 'Taylor Green', course: 'Robotics 101', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
      { id: 's16', name: 'Morgan Stark', course: 'AI Enthusiast', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's17', name: 'Peter Parker', course: 'AI Enthusiast', badgeText: 'Expired', badgeColor: 'error', isPresent: true, hasLaptop: false },
    ],
  },
  {
    id: '3',
    name: 'Future Coders',
    room: 'Zoom Room 8',
    date: 'Thu, 26 Feb 2026',
    teachersCount: 2,
    teachers: [
      { id: 't1', name: "Liam O'Connor" },
      { id: 't2', name: 'Sophia Tran' },
    ],
    timeStart: '00:00',
    timeEnd: '01:30',
    duration: '2 hrs',
    className: 'Private Teen Class Coding Camp',
    meetingType: 'Group Class',
    meetingNumber: 'Meeting 20',
    status: 'Waiting Approval',
    students: [
      { id: 's18', name: 'Lucas Scott', course: 'Game Designer', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's19', name: 'Sophie Green', course: 'Interactive Game Developer', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
      { id: 's20', name: 'Ethan Hall', course: 'Unity Developer', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
    ],
  },
  {
    id: '4',
    name: 'Young Inventors',
    room: 'Zoom Room 5',
    date: 'Thu, 26 Feb 2026',
    teachersCount: 1,
    teachers: [{ id: 't4', name: 'Dr. Emmett Brown' }],
    timeStart: '08:00',
    timeEnd: '09:30',
    duration: '1.5 hrs',
    className: 'Electronics for Beginners',
    meetingType: 'Group Class',
    meetingNumber: 'Meeting 5',
    status: 'Active',
    students: [
      { id: 's21', name: 'Marty McFly', course: 'Electronics 101', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's22', name: 'Jennifer Parker', course: 'Electronics 101', badgeText: 'Expired', badgeColor: 'error', isPresent: true, hasLaptop: true },
    ],
  },
  {
    id: '5',
    name: 'Python Wizards',
    room: 'Zoom Room 15',
    date: 'Thu, 26 Feb 2026',
    teachersCount: 2,
    teachers: [
      { id: 't5', name: 'Severus Snape' },
      { id: 't6', name: 'Minerva McGonagall' },
    ],
    timeStart: '10:00',
    timeEnd: '12:00',
    duration: '2 hrs',
    className: 'Advanced Python Magic',
    meetingType: 'Group Class',
    meetingNumber: 'Meeting 12',
    status: 'Active',
    students: [
      { id: 's23', name: 'Harry Potter', course: 'Python Magic', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's24', name: 'Hermione Granger', course: 'Python Magic', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's25', name: 'Ron Weasley', course: 'Python Magic', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
    ],
  },
  {
    id: '6',
    name: 'Web Dev Novices',
    room: 'Zoom Room 2',
    date: 'Fri, 27 Feb 2026',
    teachersCount: 1,
    teachers: [{ id: 't7', name: 'Tim Berners-Lee' }],
    timeStart: '13:00',
    timeEnd: '14:30',
    duration: '1.5 hrs',
    className: 'Intro to HTML & CSS',
    meetingType: 'Group Class',
    meetingNumber: 'Meeting 1',
    status: 'Waiting Approval',
    students: [
      { id: 's26', name: 'Ada Lovelace', course: 'HTML Basics', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's27', name: 'Charles Babbage', course: 'HTML Basics', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
    ],
  },
  {
    id: '7',
    name: 'JS Hackers',
    room: 'Zoom Room 14',
    date: 'Fri, 27 Feb 2026',
    teachersCount: 2,
    teachers: [
      { id: 't8', name: 'Brendan Eich' },
      { id: 't9', name: 'Douglas Crockford' },
    ],
    timeStart: '15:00',
    timeEnd: '17:00',
    duration: '2 hrs',
    className: 'JavaScript Essentials',
    meetingType: 'Group Class',
    meetingNumber: 'Meeting 8',
    status: 'Active',
    students: [
      { id: 's28', name: 'Linus Torvalds', course: 'JS Scripting', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's29', name: 'Richard Stallman', course: 'JS Scripting', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
      { id: 's30', name: 'Steve Jobs', course: 'JS Scripting', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
    ],
  },
  {
    id: '8',
    name: 'Robo Makers',
    room: 'Zoom Room 7',
    date: 'Fri, 27 Feb 2026',
    teachersCount: 1,
    teachers: [{ id: 't10', name: 'Nikola Tesla' }],
    timeStart: '19:00',
    timeEnd: '21:00',
    duration: '2 hrs',
    className: 'Robotics Assembly & Logic',
    meetingType: 'Group Class',
    meetingNumber: 'Meeting 15',
    status: 'Active',
    students: [
      { id: 's31', name: 'Alan Turing', course: 'Robotics Assemblies', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's32', name: 'Grace Hopper', course: 'Robotics Assemblies', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
    ],
  },
  {
    id: '9',
    name: 'Game Designers Club',
    room: 'Zoom Room 9',
    date: 'Sat, 28 Feb 2026',
    teachersCount: 2,
    teachers: [
      { id: 't11', name: 'Shigeru Miyamoto' },
      { id: 't12', name: 'Hideo Kojima' },
    ],
    timeStart: '10:00',
    timeEnd: '12:00',
    duration: '2 hrs',
    className: 'Game Design Principles',
    meetingType: 'Group Class',
    meetingNumber: 'Meeting 6',
    status: 'Active',
    students: [
      { id: 's33', name: 'Sid Meier', course: 'Design Rules', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's34', name: 'Gabe Newell', course: 'Design Rules', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
      { id: 's35', name: 'John Carmack', course: 'Design Rules', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
    ],
  },
  {
    id: '10',
    name: 'Database Architects',
    room: 'Zoom Room 11',
    date: 'Sat, 28 Feb 2026',
    teachersCount: 1,
    teachers: [{ id: 't13', name: 'Edgar F. Codd' }],
    timeStart: '14:00',
    timeEnd: '16:00',
    duration: '2 hrs',
    className: 'SQL Schema Design & Normalization',
    meetingType: 'Group Class',
    meetingNumber: 'Meeting 9',
    status: 'Active',
    students: [
      { id: 's36', name: 'Donald Chamberlin', course: 'SQL Fundamentals', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's37', name: 'Raymond Boyce', course: 'SQL Fundamentals', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
    ],
  },
  {
    id: '11',
    name: 'Cyber Security Squad',
    room: 'Zoom Room 1',
    date: 'Sat, 28 Feb 2026',
    teachersCount: 2,
    teachers: [
      { id: 't14', name: 'Kevin Mitnick' },
      { id: 't15', name: 'Edward Snowden' },
    ],
    timeStart: '16:30',
    timeEnd: '18:30',
    duration: '2 hrs',
    className: 'Security Standards & Hacking Defenses',
    meetingType: 'Group Class',
    meetingNumber: 'Meeting 21',
    status: 'Waiting Approval',
    students: [
      { id: 's38', name: 'Bruce Schneier', course: 'Cryptography Basics', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's39', name: 'Dorothy Denning', course: 'Cryptography Basics', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
    ],
  },
  {
    id: '12',
    name: 'AI Researchers Lab',
    room: 'Zoom Room 3',
    date: 'Sat, 28 Feb 2026',
    teachersCount: 2,
    teachers: [
      { id: 't16', name: 'Geoffrey Hinton' },
      { id: 't17', name: 'Yann LeCun' },
    ],
    timeStart: '19:00',
    timeEnd: '21:30',
    duration: '2.5 hrs',
    className: 'Neural Networks & Deep Learning',
    meetingType: 'Group Class',
    meetingNumber: 'Meeting 30',
    status: 'Active',
    students: [
      { id: 's40', name: 'Yoshua Bengio', course: 'Deep Learning', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's41', name: 'Andrew Ng', course: 'Deep Learning', badgeText: 'Quota : 0', badgeColor: 'warning', isPresent: true, hasLaptop: true },
      { id: 's42', name: 'Fei-Fei Li', course: 'Deep Learning', badgeText: 'Expired', badgeColor: 'error', isPresent: false, hasLaptop: false },
    ],
  },
])

// Track dynamic state for card list
const classesList = ref<ClassSession[]>(JSON.parse(JSON.stringify(mockClasses.value)))

// ─────────────────────── Filter States ───────────────────────
const searchQuery = ref('')
const selectedBranch = ref('All Branch')
const selectedClassType = ref('Class type')
const selectedCourse = ref('Course')
const selectedDate = ref('June 10, 2024')
const selectedTimeSegment = ref('00:00 - 06:00') // Active by default to match Regular Kids showing up

// Options lists
const branchOptions = ['All Branch', 'Main Branch', 'Virtual Branch']
const classTypeOptions = ['Class type', 'Group Class', 'Private Class']
const courseOptions = ['Course', 'Python Coder', 'AI Enthusiast', 'Game Designer', 'Electronics 101', 'Python Magic', 'HTML Basics', 'JS Scripting', 'Robotics Assemblies', 'Design Rules', 'SQL Fundamentals', 'Cryptography Basics', 'Deep Learning']

const timeSegments = [
  { label: '06:00 - 12:00', icon: 'ri-haze-line' },
  { label: '12:00 - 18:00', icon: 'ri-sun-line' },
  { label: '18:00 - 00:00', icon: 'ri-moon-line' },
  { label: '00:00 - 06:00', icon: 'ri-moon-clear-line' },
]

// Reset filters
const resetFilters = () => {
  searchQuery.value = ''
  selectedBranch.value = 'All Branch'
  selectedClassType.value = 'Class type'
  selectedCourse.value = 'Course'
  selectedDate.value = 'June 10, 2024'
  selectedTimeSegment.value = '00:00 - 06:00'
}

const hasActiveFilter = computed(() => {
  return searchQuery.value !== '' ||
    selectedBranch.value !== 'All Branch' ||
    selectedClassType.value !== 'Class type' ||
    selectedCourse.value !== 'Course' ||
    selectedDate.value !== 'June 10, 2024' ||
    selectedTimeSegment.value !== '00:00 - 06:00'
})

const activeFiltersCount = computed(() => {
  let count = 0
  if (selectedBranch.value !== 'All Branch') count++
  if (selectedClassType.value !== 'Class type') count++
  if (selectedCourse.value !== 'Course') count++
  return count
})

const formatFilterDate = (dateStr: string) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return dateStr
  
  const day = date.getDate()
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  
  return `${day} ${month} ${year}`
}

const hasActiveDateTime = computed(() => {
  return !!selectedDate.value || !!selectedTimeSegment.value
})

const activeDateTimeText = computed(() => {
  const parts: string[] = []
  if (selectedDate.value) {
    parts.push(formatFilterDate(selectedDate.value))
  }
  if (selectedTimeSegment.value) {
    parts.push(selectedTimeSegment.value)
  }
  return parts.length > 0 ? parts.join(', ') : 'Date & Time'
})

// ─────────────────────── Helper functions for time segments ───────────────────────
const isTimeInSegment = (timeStr: string, segmentLabel: string) => {
  const [hours, minutes] = timeStr.split(':').map(Number)
  const totalMinutes = hours * 60 + minutes

  if (segmentLabel === '06:00 - 12:00') {
    return totalMinutes >= 6 * 60 && totalMinutes < 12 * 60
  } else if (segmentLabel === '12:00 - 18:00') {
    return totalMinutes >= 12 * 60 && totalMinutes < 18 * 60
  } else if (segmentLabel === '18:00 - 00:00') {
    return totalMinutes >= 18 * 60 && totalMinutes < 24 * 60
  } else if (segmentLabel === '00:00 - 06:00') {
    return totalMinutes >= 0 && totalMinutes < 6 * 60
  }
  return true
}

// Filtered items
const filteredClasses = computed(() => {
  return classesList.value.filter(cls => {
    // 1. Search Query (Matches Class Name, Room, Teachers, Students)
    const matchesSearch = searchQuery.value === '' || 
      cls.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      cls.room.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      cls.className.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      cls.teachers.some(t => t.name.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
      cls.students.some(s => s.name.toLowerCase().includes(searchQuery.value.toLowerCase()))

    // 2. Class Type Filter
    const matchesClassType = selectedClassType.value === 'Class type' || cls.meetingType === selectedClassType.value

    // 3. Course Filter
    const matchesCourse = selectedCourse.value === 'Course' || cls.students.some(s => s.course === selectedCourse.value)

    // 4. Time Segment Filter
    const matchesTimeSegment = selectedTimeSegment.value === '' || isTimeInSegment(cls.timeStart, selectedTimeSegment.value)

    return matchesSearch && matchesClassType && matchesCourse && matchesTimeSegment
  })
})

// ─────────────────────── Pagination Setup ───────────────────────
const currentPage = ref(1)
const itemsPerPageCustom = ref(5)

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPageCustom.value)
const stopIndex = computed(() => Math.min(filteredClasses.value.length, startIndex.value + itemsPerPageCustom.value))
const pageCount = computed(() => Math.ceil(filteredClasses.value.length / itemsPerPageCustom.value))

// Provide pagination injection symbol for VDataTableFooter
provide(Symbol.for('vuetify:data-table-pagination'), {
  page: currentPage,
  itemsPerPage: itemsPerPageCustom,
  startIndex,
  stopIndex,
  pageCount,
  itemsLength: computed(() => filteredClasses.value.length),
  nextPage: () => {
    if (currentPage.value < pageCount.value) currentPage.value++
  },
  prevPage: () => {
    if (currentPage.value > 1) currentPage.value--
  },
  setPage: (value: number) => {
    currentPage.value = value
  },
  setItemsPerPage: (value: number) => {
    itemsPerPageCustom.value = value
    currentPage.value = 1
  },
})

// Slice data for pagination
const paginatedClasses = computed(() => {
  return filteredClasses.value.slice(startIndex.value, stopIndex.value)
})

// Reset page on filter change
watch([searchQuery, selectedBranch, selectedClassType, selectedCourse, selectedDate, selectedTimeSegment], () => {
  currentPage.value = 1
})

// ─────────────────────── Responsive States ───────────────────────
const isFilterModalActive = ref(false)
const isDateModalActive = ref(false)
const expandedCards = ref<Record<string, { teachers: boolean; students: boolean }>>({})

const toggleTeachers = (classId: string) => {
  if (!expandedCards.value[classId]) {
    expandedCards.value[classId] = { teachers: false, students: false }
  }
  expandedCards.value[classId].teachers = !expandedCards.value[classId].teachers
}

const toggleStudents = (classId: string) => {
  if (!expandedCards.value[classId]) {
    expandedCards.value[classId] = { teachers: false, students: false }
  }
  expandedCards.value[classId].students = !expandedCards.value[classId].students
}

const isTeachersExpanded = (classId: string) => {
  return expandedCards.value[classId]?.teachers ?? false
}

const isStudentsExpanded = (classId: string) => {
  return expandedCards.value[classId]?.students ?? false
}

// ─────────────────────── Presence Dialog States ───────────────────────
const isPresenceDialogActive = ref(false)
const activeClassSession = ref<ClassSession | null>(null)
const isStartClassTrigger = ref(false)

const openPresenceDialog = (cls: ClassSession, isStart: boolean) => {
  activeClassSession.value = cls
  isStartClassTrigger.value = isStart
  isPresenceDialogActive.value = true
}

const handlePresenceSubmit = (payload: { students: Student[], isStartClass: boolean }) => {
  if (activeClassSession.value) {
    const targetClass = classesList.value.find(c => c.id === activeClassSession.value!.id)
    if (targetClass) {
      targetClass.students = payload.students
      if (isStartClassTrigger.value) {
        targetClass.status = 'Ongoing'
        showToast(`Class "${targetClass.name}" started successfully.`)
      } else {
        showToast(`Attendance updated successfully for ${targetClass.name}.`)
      }
    }
  }
}

// ─────────────────────── All Student Dialog States ───────────────────────
const isAllStudentDialogActive = ref(false)
const activeStudentList = ref<Student[]>([])
const openAllStudentDialog = (cls: ClassSession) => {
  activeStudentList.value = cls.students
  isAllStudentDialogActive.value = true
}

const handleApproveStudent = (studentId: string) => {
  showToast(`Student ${studentId} approved.`, 'success')
}

const handleRejectStudent = (studentId: string) => {
  showToast(`Student ${studentId} rejected.`, 'error')
}

// ─────────────────────── Interactive States ───────────────────────
const toastShow = ref(false)
const toastText = ref('')
const toastColor = ref('success')

const showToast = (message: string, color: string = 'success') => {
  toastText.value = message
  toastColor.value = color
  toastShow.value = true
}

const toggleAttendance = (classId: string, studentId: string) => {
  const cls = classesList.value.find(c => c.id === classId)
  if (cls) {
    const student = cls.students.find(s => s.id === studentId)
    if (student) {
      student.isPresent = !student.isPresent
      showToast(`${student.name} attendance changed to ${student.isPresent ? 'Present' : 'Absent'}.`)
    }
  }
}

const toggleLaptop = (classId: string, studentId: string) => {
  const cls = classesList.value.find(c => c.id === classId)
  if (cls) {
    const student = cls.students.find(s => s.id === studentId)
    if (student) {
      student.hasLaptop = !student.hasLaptop
      showToast(`${student.name} device status set to ${student.hasLaptop ? 'Using Laptop' : 'No Laptop'}.`)
    }
  }
}

const startClass = (cls: ClassSession) => {
  openPresenceDialog(cls, true)
}

const finishClass = (cls: ClassSession) => {
  cls.status = 'Completed'
  showToast(`Class "${cls.name}" finished successfully.`)
}

const router = useRouter()

const seeDetails = (cls: ClassSession) => {
  router.push({ name: 'attendance-detail', query: { id: cls.id } })
}

const changeAllPresence = (cls: ClassSession) => {
  openPresenceDialog(cls, false)
}
</script>

<template>
  <section class="attendance-page">
    <!-- Page Title -->
    <div class="mb-5">
      <h4 class="text-h4 font-weight-medium text-high-emphasis">
        Attendance
      </h4>
      <p class="text-body-1 text-medium-emphasis mb-0">
        See and manage all attendance student
      </p>
    </div>

    <VCard class="mb-6">
      <VCardText class="py-5 px-5">
        <!-- Desktop Filters (hidden on mobile/tablet) -->
        <div class="d-none d-md-block">
          <!-- Filter Row 1 -->
          <div class="d-flex align-center flex-wrap gap-4 w-100">
            <div class="filter-input-search">
              <VTextField
                v-model="searchQuery"
                placeholder="Search class or student..."
                prepend-inner-icon="ri-search-line"
                clearable
                density="compact"
                hide-details
              />
            </div>

            <div class="filter-input">
              <VAutocomplete
                v-model="selectedBranch"
                :items="branchOptions"
                density="compact"
                hide-details
              />
            </div>

            <div class="filter-input">
              <VSelect
                v-model="selectedClassType"
                :items="classTypeOptions"
                density="compact"
                hide-details
              />
            </div>

            <div class="filter-input">
              <VSelect
                v-model="selectedCourse"
                :items="courseOptions"
                density="compact"
                hide-details
              />
            </div>

            <VBtn
              variant="text"
              color="primary"
              class="text-capitalize"
              :disabled="!hasActiveFilter"
              @click="resetFilters"
            >
              Reset Filter
            </VBtn>
          </div>

          <!-- Horizontal Divider stretching to edges -->
          <VDivider class="my-5 mx-n5" />

          <!-- Filter Row 2 -->
          <div class="d-flex align-center flex-wrap gap-5 w-100">
            <div class="filter-input">
              <AppDateTimePicker
                v-model="selectedDate"
                label="Select date"
                placeholder="Select date"
                append-inner-icon="ri-calendar-line"
                density="compact"
                hide-details
                :config="{ dateFormat: 'F j, Y' }"
              />
            </div>

            <div class="vertical-divider d-none d-md-block"></div>

            <!-- Time segment capsules -->
            <div class="d-flex align-center flex-wrap gap-4">
              <VBtn
                v-for="seg in timeSegments"
                :key="seg.label"
                :variant="selectedTimeSegment === seg.label ? 'flat' : 'outlined'"
                :color="selectedTimeSegment === seg.label ? 'primary' : 'secondary'"
                class="time-pill text-capitalize"
                rounded="xl"
                size="small"
                @click="selectedTimeSegment = selectedTimeSegment === seg.label ? '' : seg.label"
              >
                <VIcon
                  start
                  :icon="seg.icon"
                  size="18"
                  class="me-1"
                />
                {{ seg.label }}
              </VBtn>
            </div>
          </div>
        </div>

        <!-- Tablet / Mobile Filters (hidden on desktop) -->
        <div class="d-flex d-md-none align-center flex-wrap gap-4 w-100">
          <div class="filter-input-search flex-grow-1 flex-sm-grow-0" style="width: 232px;">
            <VTextField
              v-model="searchQuery"
              placeholder="Search class or student..."
              prepend-inner-icon="ri-search-line"
              clearable
              density="compact"
              hide-details
            />
          </div>
          <div class="d-flex align-center flex-wrap gap-3 flex-grow-1 flex-sm-grow-0">
            <VBtn
              :variant="activeFiltersCount > 0 ? 'flat' : 'outlined'"
              :color="activeFiltersCount > 0 ? 'primary' : 'secondary'"
              class="time-pill text-capitalize flex-grow-1 flex-sm-grow-0"
              @click="isFilterModalActive = true"
            >
              <VIcon start icon="ri-filter-line" class="me-1" />
              {{ activeFiltersCount > 0 ? `${activeFiltersCount} Active` : 'Filter' }}
            </VBtn>
            <VBtn
              :variant="hasActiveDateTime ? 'flat' : 'outlined'"
              :color="hasActiveDateTime ? 'primary' : 'secondary'"
              class="time-pill text-capitalize flex-grow-1 flex-sm-grow-0"
              @click="isDateModalActive = true"
            >
              <VIcon start icon="ri-calendar-line" class="me-1" />
              {{ activeDateTimeText }}
            </VBtn>
            <VBtn
              variant="text"
              color="primary"
              class="text-capitalize"
              :disabled="!hasActiveFilter"
              @click="resetFilters"
            >
              Reset Filter
            </VBtn>
          </div>
        </div>
      </VCardText>
    </VCard>

    <!-- Class List Headers -->
    <div class="d-flex align-center justify-space-between mb-4 px-1">
      <span class="text-h6 font-weight-medium text-high-emphasis">Class list</span>
      <span class="text-body-2 text-medium-emphasis">{{ filteredClasses.length }} classes displayed</span>
    </div>

    <!-- Empty State -->
    <div v-if="filteredClasses.length === 0" class="text-center py-12 bg-surface border rounded-lg">
      <VIcon
        icon="ri-calendar-check-line"
        size="48"
        color="disabled"
        class="mb-2"
      />
      <p class="text-body-1 text-medium-emphasis">
        No classes match the selected filters.
      </p>
      <VBtn
        v-if="hasActiveFilter"
        color="primary"
        size="small"
        @click="resetFilters"
      >
        Clear Filters
      </VBtn>
    </div>

    <!-- Class Card List -->
    <div v-else class="d-flex flex-column gap-5 mb-6">
      <VCard
        v-for="cls in paginatedClasses"
        :key="cls.id"
        class="class-session-card"
        outlined
      >
        <VCardText class="pa-6">
          <!-- Card Header / Title Row -->
          <div class="d-flex align-center justify-space-between flex-wrap gap-4 mb-4">
            <div class="d-flex align-center flex-wrap gap-3">
              <VAvatar
                size="38"
                rounded
                class="border"
                style="
                  background-color: rgba(var(--v-theme-primary), 0.08) !important;
                  border-color: rgba(var(--v-theme-primary), 0.15) !important;
                "
              >
                <VIcon
                  icon="ri-user-line"
                  color="primary"
                  size="20"
                />
              </VAvatar>
              <div class="d-flex align-center flex-wrap gap-2">
                <span class="text-h6 font-weight-medium text-high-emphasis">{{ cls.name }}</span>
                <span class="text-body-2 text-medium-emphasis">{{ cls.room }}</span>
                <span class="dot-separator bg-secondary"></span>
                <span class="text-body-2 text-medium-emphasis">{{ cls.teachersCount }} Teachers</span>
                <VChip
                  color="primary"
                  variant="tonal"
                  size="small"
                  class="font-weight-medium"
                >
                  {{ cls.date }}
                </VChip>
              </div>
            </div>

            <!-- Desktop Action Buttons (inline) -->
            <div class="d-none d-md-flex align-center gap-2">
              <!-- See Details Tonal button -->
              <VBtn
                variant="tonal"
                color="primary"
                class="text-capitalize"
                rounded="xl"
                @click="seeDetails(cls)"
              >
                See Details
              </VBtn>

              <!-- Start Class Primary button -->
              <VBtn
                v-if="cls.status === 'Active' || cls.status === 'Waiting Approval'"
                color="primary"
                class="text-capitalize"
                rounded="xl"
                @click="startClass(cls)"
              >
                Start Class
              </VBtn>

              <!-- Finish Class Primary button -->
              <VBtn
                v-else-if="cls.status === 'Ongoing'"
                color="primary"
                class="text-capitalize"
                rounded="xl"
                @click="finishClass(cls)"
              >
                Finish Class
              </VBtn>

              <!-- Completed status chip -->
              <VChip
                v-else-if="cls.status === 'Completed'"
                color="success"
                variant="tonal"
                size="small"
                class="font-weight-medium"
              >
                Completed
              </VChip>
            </div>

            <!-- Tablet/Mobile Action Buttons (stacked side-by-side below title) -->
            <div class="d-flex d-md-none align-center gap-3 w-100 mt-2">
              <VBtn
                variant="tonal"
                color="primary"
                class="text-capitalize flex-grow-1"
                rounded="xl"
                @click="seeDetails(cls)"
              >
                See Details
              </VBtn>

              <VBtn
                v-if="cls.status === 'Active' || cls.status === 'Waiting Approval'"
                color="primary"
                class="text-capitalize flex-grow-1"
                rounded="xl"
                @click="startClass(cls)"
              >
                Start Class
              </VBtn>

              <VBtn
                v-else-if="cls.status === 'Ongoing'"
                color="primary"
                class="text-capitalize flex-grow-1"
                rounded="xl"
                @click="finishClass(cls)"
              >
                Finish Class
              </VBtn>

              <div v-else class="d-flex justify-center flex-grow-1">
                <VChip
                  color="success"
                  variant="tonal"
                  size="small"
                  class="font-weight-medium w-100 justify-center py-4"
                >
                  Completed
                </VChip>
              </div>
            </div>
          </div>

          <VDivider class="mb-5" />

          <!-- Card Grid Content (Two Columns on Tablet/Desktop, hidden on Mobile) -->
          <VRow class="d-none d-sm-flex">
            <!-- Left Column: Class Info & Teachers -->
            <VCol cols="12" sm="6" md="5" class="pe-sm-6 border-r-sm">
              <div class="d-flex flex-column gap-5">
                <!-- Class Time / Details -->
                <div class="d-flex flex-column gap-1">
                  <div class="d-flex align-center gap-2 mb-1">
                    <VIcon
                      icon="ri-time-line"
                      color="primary"
                      size="20"
                    />
                    <span class="text-h6 font-weight-semibold text-primary mb-0">
                      {{ cls.timeStart }} - {{ cls.timeEnd }}
                    </span>
                    <VChip
                      color="primary"
                      variant="tonal"
                      size="small"
                      density="comfortable"
                    >
                      {{ cls.duration }}
                    </VChip>
                  </div>
                  <span class="text-body-1 font-weight-medium text-high-emphasis leading-tight">
                    {{ cls.className }}
                  </span>
                  <div class="d-flex align-center gap-2 mt-1">
                    <span class="text-body-2 text-medium-emphasis">{{ cls.meetingType }}</span>
                    <span class="dot-separator bg-secondary"></span>
                    <span class="text-body-2 text-medium-emphasis">
                      {{ cls.meetingType.split(' ')[0] }} -
                      <span class="text-primary font-weight-medium">{{ cls.meetingNumber }}</span>
                    </span>
                  </div>
                  <div class="d-flex align-center gap-2 mt-1">
                    <VChip
                      color="success"
                      size="small"
                      class="font-weight-medium"
                    >
                      Active
                    </VChip>
                    <VChip
                      v-if="cls.status === 'Waiting Approval'"
                      color="warning"
                      size="small"
                      class="font-weight-medium"
                    >
                      Waiting Approval
                    </VChip>
                  </div>
                </div>

                <VDivider />

                <!-- Teachers list -->
                <div class="d-flex flex-column gap-4">
                  <div
                    v-for="(teacher, index) in cls.teachers"
                    :key="teacher.id"
                    class="d-flex flex-column"
                  >
                    <span class="text-body-2 text-medium-emphasis font-weight-medium mb-1">
                      Teacher {{ index + 1 }}
                    </span>
                    <span class="text-body-1 text-high-emphasis font-weight-medium">
                      {{ teacher.name }}
                    </span>
                    <VDivider v-if="index < cls.teachers.length - 1" class="mt-3" />
                  </div>
                </div>
              </div>
            </VCol>

            <!-- Right Column: Student List -->
            <VCol cols="12" sm="6" md="7" class="ps-sm-6">
              <span class="text-body-2 text-medium-emphasis font-weight-medium mb-3 d-block">
                Student
              </span>

              <div class="d-flex flex-column gap-3 student-list-container">
                <!-- Render shown students (first 5 or all if expanded) -->
                <div
                  v-for="(student, idx) in cls.students.slice(0, 5)"
                  :key="student.id"
                  class="student-row d-flex align-center justify-space-between gap-3 py-1"
                >
                  <div class="d-flex align-center gap-3 flex-grow-1 min-w-0">
                    <!-- Student Index Badge -->
                    <div class="student-idx bg-grey-50 text-caption font-weight-medium rounded-circle d-flex align-center justify-center">
                      {{ idx + 1 }}
                    </div>

                    <!-- Name and Course details -->
                    <div class="d-flex flex-column min-w-0">
                      <span class="text-body-2 text-high-emphasis font-weight-medium text-truncate">
                        {{ student.name }}
                      </span>
                      <div class="d-flex align-center gap-1 mt-0.5">
                        <VIcon
                          icon="ri-book-2-line"
                          size="14"
                          color="secondary"
                        />
                        <span class="text-caption text-medium-emphasis text-truncate leading-none">
                          {{ student.course }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Quota/Expired Chip and Attendance Toggles -->
                  <div class="d-flex align-center gap-2">
                    <VChip
                      :color="student.badgeColor"
                      variant="tonal"
                      size="small"
                      class="font-weight-medium"
                    >
                      {{ student.badgeText }}
                    </VChip>

                    <!-- Present/Absent Action Toggle -->
                    <VBtn
                      :color="student.isPresent ? 'success' : 'error'"
                      icon
                      variant="flat"
                      size="x-small"
                      class="toggle-btn"
                      @click="toggleAttendance(cls.id, student.id)"
                    >
                      <VIcon
                        :icon="student.isPresent ? 'ri-check-line' : 'ri-close-line'"
                        size="14"
                      />
                    </VBtn>

                    <!-- Laptop Action Toggle -->
                    <VBtn
                      :color="student.hasLaptop ? 'success' : 'error'"
                      icon
                      variant="flat"
                      size="x-small"
                      class="toggle-btn"
                      @click="toggleLaptop(cls.id, student.id)"
                    >
                      <VIcon
                        :icon="student.hasLaptop ? 'ri-macbook-line' : 'ri-subtract-line'"
                        size="14"
                      />
                    </VBtn>
                  </div>
                </div>

                <!-- Toggle Expand Button → Opens All Student Dialog -->
                <div v-if="cls.students.length > 5" class="mt-1">
                  <VBtn
                    variant="text"
                    color="primary"
                    size="small"
                    class="px-0 font-weight-medium text-capitalize text-left justify-start"
                    @click="openAllStudentDialog(cls)"
                  >
                    + {{ cls.students.length - 5 }} more student{{ cls.students.length - 5 > 1 ? 's' : '' }}
                  </VBtn>
                </div>

                <VDivider class="my-2" />

                <!-- Bottom Action -->
                <VBtn
                  variant="outlined"
                  color="primary"
                  size="small"
                  class="text-capitalize w-100 change-presence-btn"
                  rounded="xl"
                  @click="changeAllPresence(cls)"
                >
                  Change Presence
                </VBtn>
              </div>
            </VCol>
          </VRow>

          <!-- Card Content Mobile Layout (Collapsible lists) -->
          <div class="d-block d-sm-none">
            <!-- Class Info -->
            <div class="d-flex flex-column gap-1 mb-4">
              <div class="d-flex align-center gap-2 mb-1">
                <VIcon
                  icon="ri-time-line"
                  color="primary"
                  size="20"
                />
                <span class="text-h6 font-weight-semibold text-primary mb-0">
                  {{ cls.timeStart }} - {{ cls.timeEnd }}
                </span>
                <VChip
                  color="primary"
                  variant="tonal"
                  size="small"
                  density="comfortable"
                >
                  {{ cls.duration }}
                </VChip>
              </div>
              <span class="text-body-1 font-weight-medium text-high-emphasis leading-tight">
                {{ cls.className }}
              </span>
              <div class="d-flex align-center gap-2 mt-1">
                <span class="text-body-2 text-medium-emphasis">{{ cls.meetingType }}</span>
                <span class="dot-separator bg-secondary"></span>
                <span class="text-body-2 text-medium-emphasis">
                  {{ cls.meetingType.split(' ')[0] }} -
                  <span class="text-primary font-weight-medium">{{ cls.meetingNumber }}</span>
                </span>
              </div>
              <div class="d-flex align-center gap-2 mt-1">
                <VChip
                  color="success"
                  size="small"
                  class="font-weight-medium"
                >
                  Active
                </VChip>
                <VChip
                  v-if="cls.status === 'Waiting Approval'"
                  color="warning"
                  size="small"
                  class="font-weight-medium"
                >
                  Waiting Approval
                </VChip>
              </div>
            </div>

            <VDivider class="my-3" />

            <!-- Show Links -->
            <div class="d-flex align-center justify-space-between py-2 px-1">
              <a
                href="#"
                class="text-body-2 text-primary font-weight-medium text-decoration-none"
                @click.prevent="toggleTeachers(cls.id)"
              >
                {{ isTeachersExpanded(cls.id) ? 'Hide Teachers' : `Show Teachers (${cls.teachers.length})` }}
              </a>
              <a
                href="#"
                class="text-body-2 text-primary font-weight-medium text-decoration-none"
                @click.prevent="toggleStudents(cls.id)"
              >
                {{ isStudentsExpanded(cls.id) ? 'Hide Students' : `Show Students (${cls.students.length})` }}
              </a>
            </div>

            <!-- Collapsible Teachers List -->
            <div v-if="isTeachersExpanded(cls.id)" class="py-3 px-1 d-flex flex-column gap-3 bg-light rounded mb-3">
              <span class="text-body-2 font-weight-bold text-medium-emphasis">Teachers</span>
              <div
                v-for="(teacher, index) in cls.teachers"
                :key="teacher.id"
                class="d-flex flex-column"
              >
                <span class="text-body-2 text-medium-emphasis font-weight-medium mb-1">
                  Teacher {{ index + 1 }}
                </span>
                <span class="text-body-1 text-high-emphasis font-weight-medium">
                  {{ teacher.name }}
                </span>
                <VDivider v-if="index < cls.teachers.length - 1" class="mt-2" />
              </div>
            </div>

            <!-- Collapsible Students List -->
            <div v-if="isStudentsExpanded(cls.id)" class="py-3 px-1 d-flex flex-column gap-3 mb-3">
              <span class="text-body-2 font-weight-bold text-medium-emphasis">Students</span>
              <div class="d-flex flex-column gap-3 student-list-container">
                <div
                  v-for="(student, idx) in cls.students.slice(0, 5)"
                  :key="student.id"
                  class="student-row d-flex align-center justify-space-between gap-3 py-1"
                >
                  <div class="d-flex align-center gap-3 flex-grow-1 min-w-0">
                    <div class="student-idx bg-grey-50 text-caption font-weight-medium rounded-circle d-flex align-center justify-center">
                      {{ idx + 1 }}
                    </div>
                    <div class="d-flex flex-column min-w-0">
                      <span class="text-body-2 text-high-emphasis font-weight-medium text-truncate">
                        {{ student.name }}
                      </span>
                      <div class="d-flex align-center gap-1 mt-0.5">
                        <VIcon
                          icon="ri-book-2-line"
                          size="14"
                          color="secondary"
                        />
                        <span class="text-caption text-medium-emphasis text-truncate leading-none">
                          {{ student.course }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex align-center gap-2">
                    <VChip
                      :color="student.badgeColor"
                      variant="tonal"
                      size="small"
                      class="font-weight-medium"
                    >
                      {{ student.badgeText }}
                    </VChip>

                    <VBtn
                      :color="student.isPresent ? 'success' : 'error'"
                      icon
                      variant="flat"
                      size="x-small"
                      class="toggle-btn"
                      @click="toggleAttendance(cls.id, student.id)"
                    >
                      <VIcon
                        :icon="student.isPresent ? 'ri-check-line' : 'ri-close-line'"
                        size="14"
                      />
                    </VBtn>

                    <VBtn
                      :color="student.hasLaptop ? 'success' : 'error'"
                      icon
                      variant="flat"
                      size="x-small"
                      class="toggle-btn"
                      @click="toggleLaptop(cls.id, student.id)"
                    >
                      <VIcon
                        :icon="student.hasLaptop ? 'ri-macbook-line' : 'ri-subtract-line'"
                        size="14"
                      />
                    </VBtn>
                  </div>
                </div>

                <div v-if="cls.students.length > 5" class="mt-1">
                  <VBtn
                    variant="text"
                    color="primary"
                    size="small"
                    class="px-0 font-weight-medium text-capitalize text-left justify-start"
                    @click="openAllStudentDialog(cls)"
                  >
                    + {{ cls.students.length - 5 }} more student{{ cls.students.length - 5 > 1 ? 's' : '' }}
                  </VBtn>
                </div>
              </div>
            </div>

            <VDivider class="my-3" />

            <!-- Bottom Action -->
            <VBtn
              variant="outlined"
              color="primary"
              size="small"
              class="text-capitalize w-100 change-presence-btn"
              rounded="xl"
              @click="changeAllPresence(cls)"
            >
              Change Presence
            </VBtn>
          </div>
        </VCardText>
      </VCard>

      <!-- Pagination Footer -->
      <VDivider />
      <VDataTableFooter
        :items-per-page-options="[5, 10, 20]"
        class="bg-surface border rounded-lg px-4"
      />
    </div>

    <!-- Presence Dialog -->
    <PresenceDialog
      v-model:is-dialog-visible="isPresenceDialogActive"
      :class-session="activeClassSession"
      @submit-attendance="handlePresenceSubmit"
    />

    <!-- All Student Dialog -->
    <AllStudentDialog
      v-model:is-dialog-visible="isAllStudentDialogActive"
      :students="activeStudentList"
      @approve-student="handleApproveStudent"
      @reject-student="handleRejectStudent"
    />

    <!-- Toast Snackbar -->
    <VSnackbar
      v-model="toastShow"
      :color="toastColor"
      timeout="3000"
    >
      {{ toastText }}
    </VSnackbar>

    <!-- Mobile/Tablet Filter Modal -->
    <VDialog
      v-model="isFilterModalActive"
      max-width="400"
      transition="dialog-bottom-transition"
    >
      <VCard style="border-radius: 8px !important;">
        <VCardTitle class="d-flex align-center justify-space-between pa-4 border-b">
          <span class="text-h6 font-weight-semibold">Filter</span>
          <VBtn
            icon="ri-close-line"
            variant="text"
            color="secondary"
            density="comfortable"
            @click="isFilterModalActive = false"
          />
        </VCardTitle>
        <VCardText class="pa-5 d-flex flex-column gap-5">
          <div>
            <label class="text-body-2 text-medium-emphasis font-weight-medium d-block mb-1">Branch</label>
            <VAutocomplete
              v-model="selectedBranch"
              :items="branchOptions"
              density="compact"
              hide-details
            />
          </div>
          <div>
            <label class="text-body-2 text-medium-emphasis font-weight-medium d-block mb-1">Class Type</label>
            <VSelect
              v-model="selectedClassType"
              :items="classTypeOptions"
              density="compact"
              hide-details
            />
          </div>
          <div>
            <label class="text-body-2 text-medium-emphasis font-weight-medium d-block mb-1">Course</label>
            <VSelect
              v-model="selectedCourse"
              :items="courseOptions"
              density="compact"
              hide-details
            />
          </div>
        </VCardText>
        <VCardActions class="pa-4 d-flex justify-end gap-3 border-t">
          <VBtn
            variant="outlined"
            color="secondary"
            class="text-capitalize px-6"
            rounded="xl"
            @click="isFilterModalActive = false"
          >
            Back
          </VBtn>
          <VBtn
            color="success"
            class="text-capitalize px-6"
            style="background-color: #10af13 !important; color: #ffffff !important;"
            rounded="xl"
            @click="isFilterModalActive = false"
          >
            Apply Filter
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Mobile/Tablet Date & Time Modal -->
    <VDialog
      v-model="isDateModalActive"
      max-width="400"
      transition="dialog-bottom-transition"
    >
      <VCard style="border-radius: 8px !important;">
        <VCardTitle class="d-flex align-center justify-space-between pa-4 border-b">
          <span class="text-h6 font-weight-semibold">Date & Time</span>
          <VBtn
            icon="ri-close-line"
            variant="text"
            color="secondary"
            density="comfortable"
            @click="isDateModalActive = false"
          />
        </VCardTitle>
        <VCardText class="pa-5 d-flex flex-column gap-5">
          <div>
            <label class="text-body-2 text-medium-emphasis font-weight-medium d-block mb-1">Date</label>
            <AppDateTimePicker
              v-model="selectedDate"
              placeholder="Select date"
              append-inner-icon="ri-calendar-line"
              density="compact"
              hide-details
              :config="{ dateFormat: 'F j, Y' }"
            />
          </div>
          <div>
            <label class="text-body-2 text-medium-emphasis font-weight-medium d-block mb-2">Time Segment</label>
            <div class="time-segments-grid">
              <VBtn
                v-for="seg in timeSegments"
                :key="seg.label"
                :variant="selectedTimeSegment === seg.label ? 'flat' : 'outlined'"
                :color="selectedTimeSegment === seg.label ? 'primary' : 'secondary'"
                class="time-pill-modal text-capitalize"
                rounded="xl"
                size="small"
                @click="selectedTimeSegment = selectedTimeSegment === seg.label ? '' : seg.label"
              >
                <VIcon
                  start
                  :icon="seg.icon"
                  size="16"
                  class="me-3"
                />
                {{ seg.label }}
              </VBtn>
            </div>
          </div>
        </VCardText>
        <VCardActions class="pa-4 d-flex justify-end gap-3 border-t">
          <VBtn
            variant="outlined"
            color="secondary"
            class="text-capitalize px-6"
            rounded="xl"
            @click="isDateModalActive = false"
          >
            Back
          </VBtn>
          <VBtn
            color="success"
            class="text-capitalize px-6"
            style="background-color: #10af13 !important; color: #ffffff !important;"
            rounded="xl"
            @click="isDateModalActive = false"
          >
            Apply Filter
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </section>
</template>

<style lang="scss" scoped>
.attendance-page {
  .filter-input-search {
    width: 232px;
    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .filter-input {
    width: 234px;
    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .vertical-divider {
    width: 1px;
    height: 40px;
    background-color: rgba(46, 38, 61, 0.12);
  }

  .time-pill {
    height: 40px !important;
    border-radius: 240px !important;
    font-size: 15px !important;
    font-weight: 500 !important;
    letter-spacing: -0.3px !important;
    text-transform: none !important;
    box-shadow: none !important;

    &.v-btn--variant-outlined {
      border: 1px solid rgba(46, 38, 61, 0.24) !important;
      color: rgba(46, 38, 61, 0.7) !important;
      background-color: transparent !important;
      
      :deep(.v-icon) {
        color: rgba(46, 38, 61, 0.7) !important;
      }
    }

    &.v-btn--variant-flat {
      background-color: #10af13 !important;
      color: #ffffff !important;

      :deep(.v-icon) {
        color: #ffffff !important;
      }
    }
  }

  .class-session-card {
    border: 1px solid rgba(var(--v-theme-on-surface), 0.12) !important;
    border-radius: 12px !important;
  }

  .icon-avatar-wrapper {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dot-separator {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    opacity: 0.5;
  }

  .border-r-sm {
    @media (min-width: 600px) {
      border-right: 1px solid rgba(var(--v-theme-on-surface), 0.08);
    }
  }

  .student-idx {
    width: 22px;
    height: 22px;
    min-width: 22px;
    line-height: 22px;
    text-align: center;
  }

  .student-row {
  }

  .toggle-btn {
    border-radius: 50%;
    width: 24px !important;
    height: 24px !important;
    min-width: 24px !important;
  }

  .change-presence-btn {
    height: 36px !important;
  }

}
</style>

<style lang="scss">
.time-segments-grid {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 16px !important;
}

.time-pill-modal {
  height: 40px !important;
  padding: 0 16px !important;
  border-radius: 240px !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  letter-spacing: -0.3px !important;
  justify-content: center !important;
  box-shadow: none !important;

  &.v-btn--variant-outlined {
    border: 1px solid rgba(46, 38, 61, 0.24) !important;
    color: rgba(46, 38, 61, 0.7) !important;
    background-color: transparent !important;

    .v-icon {
      color: rgba(46, 38, 61, 0.7) !important;
    }
  }

  &.v-btn--variant-flat {
    background-color: #10af13 !important;
    color: #ffffff !important;

    .v-icon {
      color: #ffffff !important;
    }
  }
}
</style>
