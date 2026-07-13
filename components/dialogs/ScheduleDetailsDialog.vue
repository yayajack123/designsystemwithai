<script setup lang="ts">
import { computed } from 'vue'

interface StudentMember {
  name: string
  initials: string
  studentId: string
  book: string
  ageGroup: string
  meetingsLeft: number
  latestLesson: {
    number: string
    title: string
  }
}

interface CalendarEvent {
  id: string
  title: string
  subtitle?: string
  date: string // YYYY-MM-DD
  startTime: string // HH:mm
  endTime: string // HH:mm
  type: 'class' | 'time_off'
  room?: string
  classType?: string
  status?: string
  students?: StudentMember[]
}

interface Props {
  isDialogVisible: boolean
  event: CalendarEvent | null
}

interface Emit {
  (e: 'update:isDialogVisible', val: boolean): void
  (e: 'startClass', eventId: string): void
  (e: 'deleteEvent', eventId: string): void
  (e: 'seeHistory', student: any): void
}

const props = withDefaults(defineProps<Props>(), {
  event: null,
})

const emit = defineEmits<Emit>()

// Default mock students from Figma design
const defaultStudents: StudentMember[] = [
  {
    name: 'Adison Curtis',
    initials: 'AC',
    studentId: 'STD-910920323',
    book: 'Python Coder',
    ageGroup: 'Teens',
    meetingsLeft: 5,
    latestLesson: { number: 'Lesson 7', title: 'CSS Flexbox' },
  },
  {
    name: 'Carlos Mendoza',
    initials: 'CM',
    studentId: 'STD-745982316',
    book: 'Data Scientist',
    ageGroup: 'Young Adults',
    meetingsLeft: 4,
    latestLesson: { number: 'Lesson 9', title: 'Machine Learning Basics' },
  },
  {
    name: 'Diana Lee',
    initials: 'DL',
    studentId: 'STD-639174025',
    book: 'UI/UX Designer',
    ageGroup: 'Teens',
    meetingsLeft: 2,
    latestLesson: { number: 'Lesson 5', title: 'Design Principles' },
  },
  {
    name: 'James Smith',
    initials: 'JS',
    studentId: 'STD-639174026',
    book: 'Frontend Developer',
    ageGroup: 'Adults',
    meetingsLeft: 3,
    latestLesson: { number: 'Lesson 7', title: 'Responsive Design' },
  },
  {
    name: 'Maya Khan',
    initials: 'MK',
    studentId: 'STD-639174027',
    book: 'Product Manager',
    ageGroup: 'Professionals',
    meetingsLeft: 1,
    latestLesson: { number: 'Lesson 3', title: 'Agile Methodologies' },
  },
  {
    name: 'Brianna Diaz',
    initials: 'BD',
    studentId: 'STD-823654789',
    book: 'JavaScript Ninja',
    ageGroup: 'Adults',
    meetingsLeft: 3,
    latestLesson: { number: 'Lesson 12', title: 'React Hooks' },
  },
]

const studentsList = computed(() => {
  if (props.event?.students && props.event.students.length > 0) {
    return props.event.students
  }
  return defaultStudents
})

const classTypeLabel = computed(() => {
  return props.event?.classType || 'Adaptive Class'
})

const statusLabel = computed(() => {
  return props.event?.status || 'Active'
})

const roomLabel = computed(() => {
  return props.event?.room || 'Paris Room'
})

const onCancel = () => {
  emit('update:isDialogVisible', false)
}

const onStartClass = () => {
  if (props.event) {
    emit('startClass', props.event.id)
  }
}

const onDelete = () => {
  if (props.event) {
    emit('deleteEvent', props.event.id)
  }
}

const onSeeHistory = (student: StudentMember) => {
  // Map StudentMember details to what ScoreHistoryDialog expects:
  // name, initials, studentId, className (from event title), book, lessonName (from latestLesson)
  const mappedStudent = {
    name: student.name,
    initials: student.initials,
    studentId: student.studentId,
    className: props.event?.title || 'DPS-Adaptive-8C',
    book: student.book,
    lessonName: `${student.latestLesson.number} - ${student.latestLesson.title}`,
    score: 85, // Mock score for generating history
  }
  emit('seeHistory', mappedStudent)
}
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    max-width="920"
    @update:model-value="val => emit('update:isDialogVisible', val)"
  >
    <VCard class="overflow-hidden schedule-detail-card">
      <DialogCloseBtn @click="onCancel" />

      <!-- 👉 Class Event View -->
      <template v-if="props.event && props.event.type === 'class'">
        <!-- Header -->
        <div class="px-10 pt-9 pb-6 d-flex flex-column gap-6">
          <div class="d-flex align-center justify-space-between w-full">
            <h4 class="text-h4 font-weight-medium text-high-emphasis">
              {{ props.event.title }}
            </h4>
          </div>
        </div>

        <!-- Info Bar -->
        <div class="info-bar px-10 py-3 d-flex align-center gap-2">
          <div class="d-flex align-center gap-2">
            <VIcon icon="ri-time-line" size="24" class="text-secondary" />
            <span class="text-body-1 text-high-emphasis">
              {{ props.event.startTime }} - {{ props.event.endTime }}
            </span>
          </div>

          <div class="dot-separator mx-2"></div>

          <div class="d-flex align-center gap-2">
            <VIcon icon="ri-door-closed-line" size="24" class="text-secondary" />
            <span class="text-body-1 text-high-emphasis">
              {{ roomLabel }}
            </span>
          </div>

          <div class="dot-separator mx-2"></div>

          <span class="px-2 py-1 rounded-pill text-caption font-weight-medium text-info bg-info-light">
            {{ classTypeLabel }}
          </span>

          <span class="px-2 py-1 rounded-pill text-caption font-weight-medium text-primary bg-primary-light">
            {{ statusLabel }}
          </span>
        </div>

        <!-- Members Section -->
        <div class="px-10 py-4 max-height-body overflow-y-auto">
          <div class="members-container border border-solid rounded-lg bg-white">
            <div
              v-for="(student, index) in studentsList"
              :key="student.studentId"
              class="student-item d-flex align-center justify-space-between py-5 px-4"
              :class="{ 'border-b': index < studentsList.length - 1 }"
            >
              <!-- Left: Avatar, Name & ID -->
              <div class="d-flex align-center gap-4 flex-shrink-0" style="width: 310px;">
                <div class="student-avatar d-flex align-center justify-center text-body-1 flex-shrink-0">
                  {{ student.initials }}
                </div>
                <div class="d-flex flex-column overflow-hidden">
                  <div class="d-flex align-baseline gap-2 overflow-hidden">
                    <span class="text-body-1 font-weight-medium text-high-emphasis text-truncate d-inline-block" style="max-width: 140px;">
                      {{ student.name }}
                    </span>
                    <span class="text-body-2 text-medium-emphasis flex-shrink-0">
                      {{ student.studentId }}
                    </span>
                  </div>
                  <div class="d-flex align-center gap-1 mt-0.5 overflow-hidden">
                    <VIcon icon="ri-book-2-line" size="14" color="primary" class="flex-shrink-0" />
                    <span class="text-body-2 font-weight-medium text-primary text-truncate d-inline-block" style="max-width: 140px;">
                      {{ student.book }}
                    </span>
                    <span class="text-body-2 text-medium-emphasis flex-shrink-0">
                      {{ student.ageGroup }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Middle Badges & Details -->
              <div class="d-flex align-center gap-3">
                <span class="px-2 py-1 rounded-pill text-caption font-weight-medium text-info bg-info-light text-no-wrap">
                  Meeting Left : {{ student.meetingsLeft }}
                </span>
                
                <VDivider vertical class="mx-2" style="height: 28px;" />

                <div class="d-flex flex-column flex-shrink-0 overflow-hidden" style="width: 180px;">
                  <span class="text-body-2 text-medium-emphasis">Latest Lesson</span>
                  <span class="text-body-2 text-high-emphasis font-weight-regular mt-0.5 text-truncate d-block">
                    {{ student.latestLesson.number }} <span class="text-medium-emphasis mx-1">•</span> {{ student.latestLesson.title }}
                  </span>
                </div>

                <VDivider vertical class="mx-2" style="height: 28px;" />
              </div>

              <!-- Right Actions -->
              <div>
                <VBtn
                  color="primary"
                  variant="outlined"
                  rounded="xl"
                  size="small"
                  class="text-capitalize px-4"
                  @click="onSeeHistory(student)"
                >
                  <VIcon start icon="ri-history-line" size="16" />
                  See History
                </VBtn>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="actions-footer px-10 py-5 d-flex align-center justify-space-between">
          <span class="px-3 py-1 rounded-pill text-caption font-weight-medium text-white bg-primary">
            {{ studentsList.length }} Students
          </span>
          <div class="d-flex align-center gap-4">
            <VBtn
              color="secondary"
              variant="outlined"
              rounded="xl"
              class="px-6 text-capitalize"
              style="border-color: rgba(var(--v-theme-on-surface), 0.12) !important; color: rgb(var(--v-theme-secondary));"
              @click="onCancel"
            >
              Close
            </VBtn>
            <VBtn
              color="primary"
              rounded="xl"
              class="px-6 text-capitalize"
              style="box-shadow: 0px 2px 4px 0px rgba(46, 38, 61, 0.16);"
              @click="onStartClass"
            >
              Start Class
            </VBtn>
          </div>
        </div>
      </template>

      <!-- 👉 Time Off Event View -->
      <template v-else-if="props.event">
        <div class="px-6 pt-6 pb-4">
          <h5 class="text-h5 font-weight-medium text-high-emphasis">
            {{ props.event.title }}
          </h5>
          <p class="text-caption text-medium-emphasis capitalize mt-1">
            {{ props.event.type.replace('_', ' ') }}
          </p>
        </div>
        <VDivider />
        <VCardText class="py-6 px-6">
          <div class="d-flex flex-column gap-4">
            <div class="d-flex align-center gap-3">
              <VIcon icon="ri-calendar-line" class="text-secondary" size="24" />
              <div>
                <div class="text-body-2 text-medium-emphasis">Date</div>
                <div class="text-body-1 text-high-emphasis font-weight-medium">{{ props.event.date }}</div>
              </div>
            </div>
            <div class="d-flex align-center gap-3">
              <VIcon icon="ri-time-line" class="text-secondary" size="24" />
              <div>
                <div class="text-body-2 text-medium-emphasis">Time Slot</div>
                <div class="text-body-1 text-high-emphasis font-weight-medium">
                  {{ props.event.startTime }} - {{ props.event.endTime }}
                </div>
              </div>
            </div>
          </div>
        </VCardText>
        <VDivider />
        <div class="dialog-footer px-6 py-4 d-flex justify-end gap-3 align-center bg-grey-50">
          <VBtn
            color="error"
            variant="outlined"
            rounded="xl"
            class="px-6 text-capitalize"
            @click="onDelete"
          >
            Remove Event
          </VBtn>
          <VBtn
            color="secondary"
            variant="flat"
            rounded="xl"
            class="px-6 text-capitalize"
            @click="onCancel"
          >
            Close
          </VBtn>
        </div>
      </template>
    </VCard>
  </VDialog>
</template>

<style lang="scss" scoped>
.schedule-detail-card {
  box-shadow: 0px 8px 28px 0px rgba(46, 38, 61, 0.24) !important;
  border-radius: 8px !important;
}

.info-bar {
  background-color: rgb(var(--v-theme-grey-50));
}

.dot-separator {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgb(var(--v-theme-grey-300));
}

.dot-separator-small {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: rgb(var(--v-theme-grey-300));
}

.bg-info-light {
  background-color: rgba(var(--v-theme-info), 0.16) !important;
}

.bg-primary-light {
  background-color: rgba(var(--v-theme-primary), 0.16) !important;
}

.members-container {
  border-color: rgba(var(--v-theme-on-surface), 0.12) !important;
}

.student-item {
  border-color: rgba(var(--v-theme-on-surface), 0.12) !important;
}

.student-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: var(--misc-avatar-bg, #f0eff0);
  color: rgba(var(--v-theme-on-surface), 0.9);
}

.max-height-body {
  max-height: 450px;
}

.actions-footer {
  background-color: rgb(var(--v-theme-grey-50));
}

.dialog-footer {
  background-color: rgb(var(--v-theme-grey-50));
}
</style>
