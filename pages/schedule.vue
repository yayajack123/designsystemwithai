<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({
  sidebarRoute: 'schedule',
})

// ─────────────────────── Interfaces ───────────────────────
interface CalendarEvent {
  id: string
  title: string
  subtitle?: string
  date: string // YYYY-MM-DD
  startTime: string // HH:mm
  endTime: string // HH:mm
  type: 'class' | 'time_off'
  room?: string
}

// ─────────────────────── Reference date for mock week ───────────────────────
// We align the default view to Jan 19, 2026 (matches Sunday 19 - Saturday 25 in calendar days)
const currentWeekStart = ref<Date>(new Date(2026, 0, 19))

// ─────────────────────── View state ───────────────────────
const viewType = ref<'week' | 'day'>('week')
const selectedDayOffset = ref<number>(1) // Monday is default active day in Day view

// ─────────────────────── Mock Data ───────────────────────
const mockEvents = ref<CalendarEvent[]>([
  {
    id: '1',
    title: 'DPS-Adaptive-8C',
    date: '2026-01-20', // Monday
    startTime: '09:00',
    endTime: '10:00',
    type: 'class',
  },
  {
    id: '2',
    title: 'Room 2 - Website Design',
    date: '2026-01-21', // Tuesday
    startTime: '10:00',
    endTime: '12:00',
    type: 'class',
  },
  {
    id: '3',
    title: 'Time Off',
    date: '2026-01-22', // Wednesday
    startTime: '09:00',
    endTime: '11:00',
    type: 'time_off',
  },
  {
    id: '4',
    title: 'Time Off',
    date: '2026-01-23', // Thursday
    startTime: '12:00',
    endTime: '13:00',
    type: 'time_off',
  },
  {
    id: '5',
    title: 'Rio - Website Design',
    date: '2026-01-20', // Monday
    startTime: '10:00',
    endTime: '12:00',
    type: 'class',
  },
  {
    id: '6',
    title: 'DPS-Adaptive-8A',
    date: '2026-01-22', // Wednesday
    startTime: '14:00',
    endTime: '15:30',
    type: 'class',
  },
  {
    id: '7',
    title: 'Room 1 - Python Coding',
    date: '2026-01-24', // Friday
    startTime: '16:00',
    endTime: '18:00',
    type: 'class',
  },
])



// ─────────────────────── Date Navigation Helper ───────────────────────
const formatDate = (date: Date): string => {
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

const getWeekDays = computed(() => {
  const days = []
  const start = new Date(currentWeekStart.value)
  for (let i = 0; i < 7; i++) {
    const day = new Date(start)
    day.setDate(start.getDate() + i)
    days.push({
      date: new Date(day),
      dateStr: formatDate(day),
      dayName: day.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNumber: day.getDate(),
      isToday: formatDate(day) === formatDate(new Date('2026-01-20')), // Highlight Jan 20, 2026 (Monday) to match Figma spec
    })
  }
  return days
})

const dateRangeText = computed(() => {
  const start = currentWeekStart.value
  const end = new Date(start)
  end.setDate(start.getDate() + 6)
  
  const startMonth = start.toLocaleDateString('en-US', { month: 'short' })
  const endMonth = end.toLocaleDateString('en-US', { month: 'short' })
  const startDay = start.getDate()
  const endDay = end.getDate()
  const startYear = start.getFullYear()
  
  if (startMonth === endMonth) {
    return `${startMonth} ${startDay} - ${endDay}, ${startYear}`
  }
  return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`
})

const navigateWeek = (direction: number) => {
  const newDate = new Date(currentWeekStart.value)
  newDate.setDate(newDate.getDate() + direction * 7)
  currentWeekStart.value = newDate
}

const navigateToday = () => {
  currentWeekStart.value = new Date(2026, 0, 19)
}

// ─────────────────────── Time Slots Layout ───────────────────────
const startHour = 8 // 8:00 AM
const endHour = 22  // 10:00 PM
const totalHours = endHour - startHour
const slotHeight = 120 // px per hour

const timeSlots = computed(() => {
  const slots = []
  for (let h = startHour; h <= endHour; h++) {
    const period = h >= 12 ? 'pm' : 'am'
    const displayHour = h > 12 ? h - 12 : h
    slots.push({
      hour: h,
      label: `${displayHour}${period}`,
    })
  }
  return slots
})

// Filtered Events
const filteredEvents = computed(() => mockEvents.value)

// Week Events placement helper
const getEventPosition = (evt: CalendarEvent) => {
  const [startH, startM] = evt.startTime.split(':').map(Number)
  const [endH, endM] = evt.endTime.split(':').map(Number)
  
  const startMinutesOffset = (startH * 60 + startM) - (startHour * 60)
  const durationMinutes = (endH * 60 + endM) - (startH * 60)
  
  const top = (startMinutesOffset / 60) * slotHeight
  const height = (durationMinutes / 60) * slotHeight
  
  return {
    top: `${top}px`,
    height: `${height}px`,
  }
}

// Group events by date string
const eventsByDate = computed(() => {
  const groups: Record<string, CalendarEvent[]> = {}
  filteredEvents.value.forEach(evt => {
    if (!groups[evt.date]) {
      groups[evt.date] = []
    }
    groups[evt.date].push(evt)
  })
  return groups
})

// ─────────────────────── Dialog States ───────────────────────
const detailsDialog = ref(false)
const selectedEvent = ref<CalendarEvent | null>(null)

const createDialog = ref(false)
const newEventDate = ref('')
const newEventTitle = ref('')
const newEventStartTime = ref('09:00')
const newEventEndTime = ref('10:00')
const newEventType = ref<'class' | 'time_off'>('class')

// Score History States
const showScoreHistory = ref(false)
const selectedHistoryStudent = ref<any>(null)

// Toast Snackbar States
const showSnackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('success')

const openEventDetails = (evt: CalendarEvent) => {
  selectedEvent.value = evt
  detailsDialog.value = true
}

const openCreateDialog = (dateStr: string, hour: number) => {
  newEventDate.value = dateStr
  newEventStartTime.value = `${String(hour).padStart(2, '0')}:00`
  newEventEndTime.value = `${String(hour + 1).padStart(2, '0')}:00`
  newEventTitle.value = ''
  newEventType.value = 'class'
  createDialog.value = true
}

const saveNewEvent = () => {
  if (!newEventTitle.value) return
  
  mockEvents.value.push({
    id: String(Date.now()),
    title: newEventTitle.value,
    date: newEventDate.value,
    startTime: newEventStartTime.value,
    endTime: newEventEndTime.value,
    type: newEventType.value,
  })
  
  createDialog.value = false
}

const deleteEvent = (id: string) => {
  mockEvents.value = mockEvents.value.filter(e => e.id !== id)
  detailsDialog.value = false
}

const startClass = (eventId: string) => {
  const evt = mockEvents.value.find(e => e.id === eventId)
  if (evt) {
    snackbarText.value = `Class "${evt.title}" started successfully!`
    snackbarColor.value = 'success'
    showSnackbar.value = true
  }
  detailsDialog.value = false
}

const seeStudentHistory = (student: any) => {
  selectedHistoryStudent.value = student
  showScoreHistory.value = true
}

const buildStudentScoreHistory = (student: any) => {
  const questionTypes = ['Short Answer', 'Multiple Choice', 'Free Text'] as const
  const buildQuestions = (correctCount: number) =>
    Array.from({ length: 5 }, (_, i) => ({
      number: i + 1,
      type: questionTypes[i % questionTypes.length],
      correct: i < correctCount ? 1 : 0,
      total: 1,
      timeSpent: `${1 + (i % 3)}m ${10 + i * 5}s`,
    }))

  return [
    {
      label: 'First Score' as const,
      icon: 'ri-time-line',
      date: '2026-01-15',
      timeSpent: '8m 20s',
      score: 60,
      maxScore: 100,
      points: 60,
      questions: buildQuestions(3),
    },
    {
      label: 'Last Score' as const,
      icon: 'ri-time-line',
      date: '2026-01-18',
      timeSpent: '6m 45s',
      score: 80,
      maxScore: 100,
      points: 80,
      questions: buildQuestions(4),
    },
    {
      label: 'Best Score' as const,
      icon: 'ri-trophy-line',
      date: '2026-01-18',
      timeSpent: '5m 30s',
      score: 90,
      maxScore: 100,
      points: 90,
      questions: buildQuestions(5),
    },
  ]
}

const scoreHistoryAttempts = computed(() => {
  return selectedHistoryStudent.value ? buildStudentScoreHistory(selectedHistoryStudent.value) : []
})
</script>

<template>
  <section>
        <div class="d-flex align-center justify-space-between flex-wrap gap-4 mb-6">
          <div>
            <h4 class="text-h4 font-weight-medium text-high-emphasis mb-1">Availability / Calendar</h4>
            <p class="text-body-1 text-medium-emphasis mb-0">Manage schedule class sessions and time-off slots.</p>
          </div>
        </div>

        <VCard>
          <!-- Calendar Header Navigation -->
          <VCardText class="d-flex align-center justify-space-between flex-wrap gap-4 py-4 px-6">
            <div class="d-flex align-center flex-wrap gap-4">
              <div class="d-flex align-center gap-2">
                <VBtn
                  icon="ri-arrow-left-s-line"
                  variant="outlined"
                  density="comfortable"
                  @click="navigateWeek(-1)"
                />
                <VBtn
                  icon="ri-arrow-right-s-line"
                  variant="outlined"
                  density="comfortable"
                  @click="navigateWeek(1)"
                />
              </div>
              
              <VBtn
                variant="outlined"
                density="comfortable"
                class="text-capitalize"
                @click="navigateToday"
              >
                Today
              </VBtn>

              <h2 class="text-h5 font-weight-medium ms-2 mb-0">
                {{ dateRangeText }}
              </h2>
            </div>

            <!-- View Toggle Group -->
            <VBtnToggle
              v-model="viewType"
              mandatory
              class="custom-toggle-group"
            >
              <VBtn value="week" class="px-4">Week</VBtn>
              <VBtn value="day" class="px-4">Day</VBtn>
            </VBtnToggle>
          </VCardText>

          <VDivider />

          <!-- Calendar View Section -->
          <div class="calendar-wrapper overflow-auto">
            <!-- 7-Day Week View -->
            <div v-if="viewType === 'week'" class="calendar-grid d-flex flex-column" style="min-width: 900px;">
              <!-- Days Header Row -->
              <div class="d-flex border-b header-row bg-surface">
                <!-- Spacer for Time Labels Column -->
                <div class="time-header-spacer border-e" style="width: 80px; shrink: 0;"></div>
                
                <!-- Day Names Columns -->
                <div 
                  v-for="day in getWeekDays" 
                  :key="day.dateStr"
                  class="flex-grow-1 flex-shrink-0 text-center py-3 border-e d-flex flex-column align-center justify-center"
                  style="width: 0;"
                >
                  <span class="text-caption text-medium-emphasis font-weight-regular mb-1">
                    {{ day.dayName }}
                  </span>
                  
                  <!-- Today Circle Highlight -->
                  <div 
                    :class="[
                      'day-number-wrapper d-flex align-center justify-center rounded-circle',
                      day.isToday ? 'bg-primary text-white font-weight-medium' : 'text-high-emphasis font-weight-medium'
                    ]"
                    style="width: 28px; height: 28px; font-size: 15px;"
                  >
                    {{ day.dayNumber }}
                  </div>
                </div>
              </div>

              <!-- Hourly Rows Area -->
              <div class="d-flex position-relative bg-surface">
                <!-- Time Labels Column -->
                <div class="time-labels-col d-flex flex-column border-e" style="width: 80px; shrink: 0;">
                  <div 
                    v-for="slot in timeSlots" 
                    :key="slot.hour" 
                    class="time-slot-label text-end pe-3 text-caption text-medium-emphasis border-b d-flex align-center justify-end"
                    :style="{ height: `${slotHeight}px` }"
                  >
                    {{ slot.label }}
                  </div>
                </div>

                <!-- Grid Columns for days -->
                <div class="flex-grow-1 d-flex position-relative">
                  <!-- Day Grid Columns -->
                  <div 
                    v-for="day in getWeekDays" 
                    :key="day.dateStr"
                    class="day-grid-column flex-grow-1 flex-shrink-0 border-e position-relative"
                    style="width: 0;"
                  >
                    <!-- Background slots lines -->
                    <div 
                      v-for="slot in timeSlots" 
                      :key="slot.hour" 
                      class="grid-hour-cell border-b cursor-pointer hover-cell transition-all"
                      :style="{ height: `${slotHeight}px` }"
                      @click="openCreateDialog(day.dateStr, slot.hour)"
                    ></div>

                    <!-- Events Container -->
                    <div class="events-container absolute inset-0 pointer-events-none">
                      <div
                        v-for="evt in eventsByDate[day.dateStr] || []"
                        :key="evt.id"
                        class="event-card pointer-events-auto position-absolute px-3 py-2 rounded shadow-sm cursor-pointer transition-all d-flex flex-column justify-center"
                        :style="[
                          getEventPosition(evt), 
                          { left: '4px', right: '4px' }
                        ]"
                        :class="[
                          evt.type === 'class' 
                            ? 'schedule-class border-s border-s-lg border-primary' 
                            : 'schedule-time-off border-s border-s-lg border-secondary'
                        ]"
                        @click.stop="openEventDetails(evt)"
                      >
                        <span class="text-caption font-weight-regular line-clamp-1 mb-0.5">
                          {{ evt.startTime }} - {{ evt.endTime }}
                        </span>
                        <span class="text-body-2 font-weight-medium line-clamp-2">
                          {{ evt.title }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Single Day View -->
            <div v-else class="calendar-grid d-flex flex-column">
              <!-- Day Header Selector -->
              <div class="d-flex border-b bg-surface py-3 px-6 align-center justify-space-between">
                <div class="d-flex align-center gap-2">
                  <VBtn
                    v-for="(day, idx) in getWeekDays"
                    :key="day.dateStr"
                    :variant="selectedDayOffset === idx ? 'flat' : 'outlined'"
                    :color="selectedDayOffset === idx ? 'primary' : 'default'"
                    class="rounded-pill text-capitalize"
                    density="comfortable"
                    @click="selectedDayOffset = idx"
                  >
                    {{ day.dayName }} {{ day.dayNumber }}
                  </VBtn>
                </div>
              </div>

              <!-- Day Hour Rows -->
              <div class="d-flex position-relative bg-surface">
                <!-- Time Labels -->
                <div class="time-labels-col d-flex flex-column border-e" style="width: 80px; shrink: 0;">
                  <div 
                    v-for="slot in timeSlots" 
                    :key="slot.hour" 
                    class="time-slot-label text-end pe-3 text-caption text-medium-emphasis border-b d-flex align-center justify-end"
                    :style="{ height: `${slotHeight}px` }"
                  >
                    {{ slot.label }}
                  </div>
                </div>

                <!-- Active Day Column -->
                <div class="flex-grow-1 position-relative">
                  <div 
                    v-for="slot in timeSlots" 
                    :key="slot.hour" 
                    class="grid-hour-cell border-b cursor-pointer hover-cell transition-all"
                    :style="{ height: `${slotHeight}px` }"
                    @click="openCreateDialog(getWeekDays[selectedDayOffset].dateStr, slot.hour)"
                  ></div>

                  <!-- Events container -->
                  <div class="events-container absolute inset-0 pointer-events-none">
                    <div
                      v-for="evt in eventsByDate[getWeekDays[selectedDayOffset].dateStr] || []"
                      :key="evt.id"
                      class="event-card pointer-events-auto position-absolute px-4 py-3 rounded shadow-sm cursor-pointer transition-all d-flex flex-column justify-center"
                      :style="[
                        getEventPosition(evt), 
                        { left: '16px', right: '16px' }
                      ]"
                      :class="[
                        evt.type === 'class' 
                          ? 'schedule-class border-s border-s-lg border-primary' 
                          : 'schedule-time-off border-s border-s-lg border-secondary'
                      ]"
                      @click.stop="openEventDetails(evt)"
                    >
                      <span class="text-caption font-weight-regular mb-1">
                        {{ evt.startTime }} - {{ evt.endTime }}
                      </span>
                      <span class="text-subtitle-2 font-weight-medium">
                        {{ evt.title }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </VCard>


    <!-- ─────────────────────── Detail Dialog ─────────────────────── -->
    <ScheduleDetailsDialog
      v-model:is-dialog-visible="detailsDialog"
      :event="selectedEvent"
      @delete-event="deleteEvent"
      @start-class="startClass"
      @see-history="seeStudentHistory"
    />

    <!-- Score History Dialog -->
    <ScoreHistoryDialog
      v-model:is-dialog-visible="showScoreHistory"
      :student="selectedHistoryStudent"
      :attempts="scoreHistoryAttempts"
    />

    <!-- Toast Snackbar -->
    <VSnackbar
      v-model="showSnackbar"
      :color="snackbarColor"
      location="top end"
    >
      {{ snackbarText }}
    </VSnackbar>


    <!-- ─────────────────────── Create Dialog ─────────────────────── -->
    <VDialog v-model="createDialog" max-width="450">
      <VCard>
        <VCardTitle class="d-flex align-center justify-space-between py-4">
          <span class="text-h6 font-weight-medium">New Availability / Event</span>
          <VBtn
            icon="ri-close-line"
            variant="text"
            density="comfortable"
            @click="createDialog = false"
          />
        </VCardTitle>
        <VDivider />
        <VCardText class="py-6">
          <VRow class="gap-y-4">
            <VCol cols="12" class="py-0">
              <VTextField
                v-model="newEventTitle"
                label="Event Title"
                placeholder="e.g. DPS-Adaptive-8C or Time Off"
                density="comfortable"
                hide-details
              />
            </VCol>
            
            <VCol cols="12" class="py-0">
              <VTextField
                v-model="newEventDate"
                label="Date"
                type="date"
                density="comfortable"
                hide-details
              />
            </VCol>

            <VCol cols="6" class="py-0">
              <VTextField
                v-model="newEventStartTime"
                label="Start Time"
                type="time"
                density="comfortable"
                hide-details
              />
            </VCol>

            <VCol cols="6" class="py-0">
              <VTextField
                v-model="newEventEndTime"
                label="End Time"
                type="time"
                density="comfortable"
                hide-details
              />
            </VCol>

            <VCol cols="12" class="py-0">
              <VRadioGroup v-model="newEventType" inline label="Event Type">
                <VRadio label="Class Session" value="class" color="primary" />
                <VRadio label="Time Off" value="time_off" color="secondary" />
              </VRadioGroup>
            </VCol>
          </VRow>
        </VCardText>
        <VDivider />
        <VCardActions class="pa-4 d-flex justify-end gap-2">
          <VBtn
            variant="outlined"
            color="secondary"
            class="text-capitalize"
            @click="createDialog = false"
          >
            Cancel
          </VBtn>
          <VBtn
            variant="flat"
            color="primary"
            class="text-capitalize"
            :disabled="!newEventTitle"
            @click="saveNewEvent"
          >
            Add Schedule
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    </section>
  </template>

<style scoped>
.calendar-wrapper {
  max-height: calc(100vh - 350px);
}

.hover-cell {
  background-color: transparent;
}

.hover-cell:hover {
  background-color: rgba(var(--v-theme-primary), 0.03);
}

.event-card {
  transition: all 0.2s ease;
  z-index: 10;
}

.event-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08) !important;
  filter: brightness(0.96);
  z-index: 20;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Scrollbar adjustment */
.calendar-wrapper::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.calendar-wrapper::-webkit-scrollbar-track {
  background: transparent;
}

.calendar-wrapper::-webkit-scrollbar-thumb {
  background: var(--v-theme-perfect-scrollbar-thumb, #dbdade);
  border-radius: 4px;
}

.schedule-class {
  background-color: rgba(var(--v-theme-primary), 0.08) !important;
}
.schedule-class,
.schedule-class span {
  color: rgb(var(--v-theme-primary-main)) !important;
}

.schedule-time-off {
  background-color: rgba(var(--v-theme-secondary), 0.08) !important;
}
.schedule-time-off,
.schedule-time-off span {
  color: rgb(var(--v-theme-secondary)) !important;
}

:deep(.custom-toggle-group) {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.12) !important;
  border-radius: 8px !important;
  padding: 4px !important;
  background-color: rgb(var(--v-theme-surface)) !important;
  height: 44px !important;
  align-items: center;
  display: inline-flex;
  box-shadow: none !important;

  .v-btn {
    border-radius: 6px !important;
    height: 36px !important;
    min-width: 70px !important;
    margin: 0 !important;
    border: none !important;
    background-color: transparent !important;
    color: rgba(var(--v-theme-on-surface), 0.7) !important;
    box-shadow: none !important;
    text-transform: capitalize !important;

    &.v-btn--active {
      background-color: rgba(var(--v-theme-primary), 0.08) !important;
      color: rgb(var(--v-theme-primary)) !important;
      font-weight: 500 !important;
      
      .v-btn__overlay {
        opacity: 0 !important;
      }
    }

    &:not(.v-btn--active):hover {
      background-color: rgba(var(--v-theme-on-surface), 0.04) !important;
    }
  }

  &.v-btn-group--divided .v-btn:not(:last-child) {
    border-inline-end-color: transparent !important;
  }
}
</style>
