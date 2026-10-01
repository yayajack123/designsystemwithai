export interface StudentRecord {
  id: string
  name: string
  studentId: string
  course: string
  session: string
  tab: 'my-student' | 'homeroom-student' | 'replacement-student' | 'events-student'
}

export const studentRecords: StudentRecord[] = [
  { id: '1', name: 'Cristofer Mango', studentId: 'STD-20091032-001', course: 'Python Game Dev', session: '1 Active', tab: 'my-student' },
  { id: '2', name: 'Jennifer Summers', studentId: 'STD-20091032-002', course: 'Web Developer', session: '1 Active', tab: 'my-student' },
  { id: '3', name: 'Mr. Justin Richardson', studentId: 'STD-20091032-003', course: 'IoT Kids', session: '1 Active', tab: 'my-student' },
  { id: '4', name: 'Nicholas Tanner', studentId: 'STD-20091032-004', course: 'Web Developer', session: '1 Active', tab: 'my-student' },
  { id: '5', name: 'Crystal Mays', studentId: 'STD-20091032-005', course: 'Web Developer', session: '1 Active', tab: 'my-student' },
  { id: '6', name: 'Alexander Hamilton', studentId: 'STD-20091032-006', course: 'Python Game Dev', session: '2 Active', tab: 'my-student' },
  { id: '7', name: 'Eliza Schuyler', studentId: 'STD-20091032-007', course: 'IoT Kids', session: '1 Active', tab: 'my-student' },
  { id: '8', name: 'Angelica Schuyler', studentId: 'STD-20091032-008', course: 'Web Developer', session: '1 Active', tab: 'my-student' },
  { id: '9', name: 'Peggy Schuyler', studentId: 'STD-20091032-009', course: 'Python Game Dev', session: '1 Active', tab: 'my-student' },
  { id: '10', name: 'Aaron Burr', studentId: 'STD-20091032-010', course: 'Web Developer', session: '2 Active', tab: 'my-student' },
  { id: '11', name: 'Thomas Jefferson', studentId: 'STD-20091032-011', course: 'Python Game Dev', session: '1 Active', tab: 'homeroom-student' },
  { id: '12', name: 'James Madison', studentId: 'STD-20091032-012', course: 'IoT Kids', session: '1 Active', tab: 'homeroom-student' },
  { id: '13', name: 'George Washington', studentId: 'STD-20091032-013', course: 'Web Developer', session: '2 Active', tab: 'homeroom-student' },
  { id: '14', name: 'Marquis de Lafayette', studentId: 'STD-20091032-014', course: 'Python Game Dev', session: '1 Active', tab: 'replacement-student' },
  { id: '15', name: 'Hercules Mulligan', studentId: 'STD-20091032-015', course: 'IoT Kids', session: '3 Active', tab: 'events-student' },
  { id: '16', name: 'Richard Payne', studentId: 'STD-20091032-016', course: 'Web Developer', session: '1 Active', tab: 'my-student' },
  { id: '17', name: 'Alex Rivera', studentId: 'STD-20091032-017', course: 'AI Enthusiast', session: '1 Active', tab: 'my-student' },
  { id: '18', name: 'Jamie Lee', studentId: 'STD-20091032-018', course: 'Robotics Explorer', session: '1 Active', tab: 'my-student' },
]

export const findStudentByName = (name: string) => studentRecords.find(student => student.name === name)
