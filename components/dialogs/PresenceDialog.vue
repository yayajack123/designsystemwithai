<script setup lang="ts">
import { ref, computed, watch } from 'vue'

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

interface StudentEquipment {
  laptop: boolean
  mouse: boolean
  headphone: boolean
  speaker: boolean
  charger: boolean
}

interface LocalStudent extends Student {
  quota: string
  remarks: string
  showEquipment: boolean
  equipment: StudentEquipment
}

interface Props {
  isDialogVisible: boolean
  classSession: ClassSession | null
}

interface Emit {
  (e: 'update:isDialogVisible', val: boolean): void
  (e: 'submitAttendance', payload: {
    students: Student[]
    isStartClass: boolean
  }): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const currentStep = ref(1)
const localStudents = ref<LocalStudent[]>([])

// Watch visibility to initialize local state
watch(
  () => props.isDialogVisible,
  (newVal) => {
    if (newVal && props.classSession) {
      currentStep.value = 1
      localStudents.value = props.classSession.students.map((student) => ({
        ...student,
        quota: student.badgeText.includes(':') ? student.badgeText.split(':')[1].trim() : '4',
        remarks: '',
        showEquipment: student.isPresent,
        equipment: {
          laptop: student.hasLaptop,
          mouse: student.isPresent && student.hasLaptop,
          headphone: false,
          speaker: false,
          charger: false,
        },
      }))
    }
  }
)

// Statistics computed states
const stats = computed(() => {
  const total = localStudents.value.length
  const present = localStudents.value.filter((s) => s.isPresent).length
  const absent = total - present
  return { total, present, absent }
})

// Toggle all presence checkboxes
const isAllPresent = computed({
  get: () => localStudents.value.length > 0 && localStudents.value.every((s) => s.isPresent),
  set: (val: boolean) => {
    localStudents.value.forEach((s) => {
      s.isPresent = val
    })
  },
})

// Reset equipment when student is marked absent
const onPresenceChange = (student: LocalStudent) => {
  if (!student.isPresent) {
    student.equipment = {
      laptop: false,
      mouse: false,
      headphone: false,
      speaker: false,
      charger: false,
    }
  }
}

const onCancel = () => {
  emit('update:isDialogVisible', false)
}

const onNext = () => {
  currentStep.value = 2
}

const onBack = () => {
  currentStep.value = 1
}

const onSubmit = () => {
  // Map back to standard Student array structure
  const updatedStudents: Student[] = localStudents.value.map((s) => ({
    id: s.id,
    name: s.name,
    course: s.course,
    badgeText: `Quota : ${s.quota}`,
    badgeColor: s.badgeColor,
    isPresent: s.isPresent,
    hasLaptop: s.equipment.laptop,
  }))

  emit('submitAttendance', {
    students: updatedStudents,
    isStartClass: false,
  })
  emit('update:isDialogVisible', false)
}
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    max-width="1150"
    scrollable
    @update:model-value="(val) => emit('update:isDialogVisible', val)"
  >
    <VCard class="overflow-hidden presence-dialog-card">
      <DialogCloseBtn @click="onCancel" />

      <!-- HEADER CONTAINER -->
      <VCardItem class="px-8 pt-8 pb-4 bg-surface border-b border-light">
        <div class="d-flex align-center gap-4">
          <!-- Stepper Circular Progress -->
          <VProgressCircular
            :model-value="currentStep === 1 ? 50 : 100"
            color="primary"
            size="64"
            width="5"
            class="font-weight-bold"
          >
            <span class="text-body-1 font-weight-medium text-high-emphasis">
              {{ currentStep }}/2
            </span>
          </VProgressCircular>

          <!-- Stepper Titles -->
          <div class="d-flex flex-column">
            <h5 class="text-h5 font-weight-medium text-high-emphasis">
              {{ currentStep === 1 ? "Student's Presence" : 'Confirm attendance presence' }}
            </h5>
            <span class="text-body-2 text-medium-emphasis">
              {{ currentStep === 1 ? 'Change the present status of each student' : 'The following is information about students who attended and those who did not.' }}
            </span>
          </div>
        </div>
      </VCardItem>

      <!-- SESSION INFO CONTAINER -->
      <div class="px-8 py-3 bg-light-green border-b border-light d-flex align-center gap-4 flex-wrap">
        <VAvatar
          size="32"
          color="primary"
          class="rounded-circle"
        >
          <VIcon icon="ri-user-line" size="18" color="white" />
        </VAvatar>
        <span class="text-subtitle-1 font-weight-medium text-high-emphasis">
          {{ classSession?.name || 'Class Session' }}
        </span>
        <VChip
          v-if="classSession?.date"
          size="small"
          color="primary"
          variant="tonal"
          class="font-weight-medium"
        >
          {{ classSession.date }}
        </VChip>
        <span class="text-body-2 text-medium-emphasis">
          {{ classSession?.timeStart }} - {{ classSession?.timeEnd }}
        </span>
      </div>

      <!-- BODY CONTENT -->
      <VCardText class="pa-8 bg-grey-light overflow-y-auto" style="max-height: calc(90vh - 280px);">
        <!-- ==================== STEP 1 CONTENT ==================== -->
        <div v-if="currentStep === 1">
          <!-- Total and Mark All -->
          <div class="d-flex align-center justify-space-between mb-4 bg-surface rounded-lg px-6 py-3 border border-light">
            <span class="text-body-1 font-weight-medium text-high-emphasis">
              {{ localStudents.length }} Students
            </span>
            <VCheckbox
              v-model="isAllPresent"
              label="Mark All Present"
              color="primary"
              hide-details
              density="compact"
            />
          </div>

          <!-- Student List -->
          <div class="d-flex flex-column gap-4">
            <VCard
              v-for="student in localStudents"
              :key="student.id"
              class="student-presence-card border rounded-lg overflow-hidden"
              elevation="0"
            >
              <!-- Main student row -->
              <div class="pa-4 d-flex align-center flex-wrap justify-space-between gap-4">
                <!-- Left: Student Info -->
                <div class="d-flex align-center gap-3 flex-grow-1" style="min-width: 280px; max-width: 380px;">
                  <div class="d-flex flex-column">
                    <div class="d-flex align-center gap-2">
                      <span class="text-body-1 font-weight-medium text-high-emphasis">{{ student.name }}</span>
                      <span class="text-caption text-medium-emphasis">{{ student.id }}</span>
                    </div>
                    <div class="d-flex align-center gap-2 mt-1 text-caption text-medium-emphasis">
                      <VChip
                        v-if="student.badgeText"
                        size="x-small"
                        :color="student.badgeColor === 'error' ? 'error' : student.badgeColor === 'warning' ? 'warning' : 'success'"
                        variant="tonal"
                        class="font-weight-medium"
                      >
                        {{ student.badgeText }}
                      </VChip>
                      <span class="dot-separator bg-secondary"></span>
                      <VIcon icon="ri-book-2-line" size="14" />
                      <span>{{ student.course }}</span>
                    </div>
                  </div>
                </div>

                <!-- Right Controls: Switch, Checkbox, Inputs -->
                <div class="d-flex align-center gap-4 flex-wrap flex-grow-1 justify-end">
                  <!-- Attendance Switch -->
                  <div class="d-flex align-center border-r border-light pe-4">
                    <VSwitch
                      v-model="student.isPresent"
                      color="primary"
                      hide-details
                      density="compact"
                      class="presence-switch"
                      @update:model-value="onPresenceChange(student)"
                    />
                    <span
                      class="text-body-2 font-weight-medium ms-2"
                      :class="student.isPresent ? 'text-primary' : 'text-secondary'"
                    >
                      {{ student.isPresent ? 'Present' : 'Absent' }}
                    </span>
                  </div>

                  <!-- Laptop Checkbox -->
                  <div class="d-flex align-center border-r border-light pe-4">
                    <VCheckbox
                      v-model="student.equipment.laptop"
                      label="Laptop"
                      color="primary"
                      hide-details
                      density="compact"
                      :disabled="!student.isPresent"
                    />
                  </div>

                  <!-- Quota field -->
                  <div style="width: 75px;">
                    <VTextField
                      v-model="student.quota"
                      label="Quota"
                      placeholder="0"
                      hide-details
                      density="compact"
                      variant="outlined"
                      class="text-center-input"
                      :disabled="!student.isPresent"
                    />
                  </div>

                  <!-- Remarks / Notes -->
                  <div style="width: 220px; min-width: 150px;">
                    <VTextField
                      v-model="student.remarks"
                      label="Remarks / Notes"
                      placeholder="Add remarks..."
                      hide-details
                      density="compact"
                      variant="outlined"
                      :disabled="!student.isPresent"
                    />
                  </div>

                </div>
              </div>

              <!-- Equipment checklist section (shown when present) -->
              <div v-show="student.isPresent" class="bg-light-grey border-t border-light pa-4">
                <div class="d-flex flex-wrap gap-4">
                    <div class="equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1" style="min-width: 180px; max-width: 220px;">
                      <div class="d-flex flex-column">
                        <span class="text-body-2 font-weight-medium text-high-emphasis">Laptop</span>
                        <span class="text-caption text-medium-emphasis">4 Quota left • Asus</span>
                      </div>
                      <VCheckbox v-model="student.equipment.laptop" color="primary" hide-details density="compact" />
                    </div>
                    <div class="equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1" style="min-width: 180px; max-width: 220px;">
                      <div class="d-flex flex-column">
                        <span class="text-body-2 font-weight-medium text-high-emphasis">Mouse</span>
                        <span class="text-caption text-medium-emphasis">4 Quota left • Rexus</span>
                      </div>
                      <VCheckbox v-model="student.equipment.mouse" color="primary" hide-details density="compact" />
                    </div>
                    <div class="equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1" style="min-width: 180px; max-width: 220px;">
                      <div class="d-flex flex-column">
                        <span class="text-body-2 font-weight-medium text-high-emphasis">Headphone</span>
                        <span class="text-caption text-medium-emphasis">4 Quota left • Earpod</span>
                      </div>
                      <VCheckbox v-model="student.equipment.headphone" color="primary" hide-details density="compact" />
                    </div>
                    <div class="equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1" style="min-width: 180px; max-width: 220px;">
                      <div class="d-flex flex-column">
                        <span class="text-body-2 font-weight-medium text-high-emphasis">Speaker</span>
                        <span class="text-caption text-medium-emphasis">10 Quota left • Portable</span>
                      </div>
                      <VCheckbox v-model="student.equipment.speaker" color="primary" hide-details density="compact" />
                    </div>
                    <div class="equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1" style="min-width: 180px; max-width: 220px;">
                      <div class="d-flex flex-column">
                        <span class="text-body-2 font-weight-medium text-high-emphasis">Charger</span>
                        <span class="text-caption text-medium-emphasis">15 Quota left • Pad</span>
                      </div>
                      <VCheckbox v-model="student.equipment.charger" color="primary" hide-details density="compact" />
                    </div>
              </div>
            </div>
            </VCard>
          </div>
        </div>

        <!-- ==================== STEP 2 CONTENT ==================== -->
        <div v-else-if="currentStep === 2">
          <VRow>
            <!-- Left: Present + Absent Summary Cards (side by side) -->
            <VCol cols="12" md="4" class="d-flex flex-column gap-4">
              <!-- Present Card -->
              <VCard class="border rounded-lg" elevation="0">
                <VCardText class="pa-5">
                  <div class="d-flex align-center justify-space-between mb-3">
                    <span class="text-h6 font-weight-medium text-high-emphasis">Present</span>
                    <div class="rounded-lg bg-light-green d-flex align-center justify-center" style="width: 36px; height: 36px;">
                      <VIcon icon="ri-check-line" color="primary" size="20" />
                    </div>
                  </div>
                  <span class="text-h3 font-weight-bold text-primary">{{ stats.present }}</span>
                </VCardText>
              </VCard>

              <!-- Absent Card -->
              <VCard class="border rounded-lg" elevation="0">
                <VCardText class="pa-5">
                  <div class="d-flex align-center justify-space-between mb-3">
                    <span class="text-h6 font-weight-medium text-high-emphasis">Absent</span>
                    <div class="rounded-lg bg-light-red d-flex align-center justify-center" style="width: 36px; height: 36px;">
                      <VIcon icon="ri-close-line" color="error" size="20" />
                    </div>
                  </div>
                  <span class="text-h3 font-weight-bold text-error">{{ stats.absent }}</span>
                </VCardText>
              </VCard>
            </VCol>

            <!-- Right: Side by side presence list -->
            <VCol cols="12" md="8">
              <VRow>
                <!-- Presence Column -->
                <VCol cols="12" sm="6">
                  <VCard class="border rounded-lg h-full overflow-hidden" elevation="0">
                    <div class="pa-4 bg-light-green border-b border-light d-flex align-center justify-space-between">
                      <span class="text-body-1 font-weight-medium text-primary">List Presence</span>
                      <VChip size="small" color="info" variant="tonal" class="font-weight-medium">
                        Key will be sent
                      </VChip>
                    </div>
                    <VCardText class="pa-0 overflow-y-auto" style="height: 300px;">
                      <div v-if="stats.present === 0" class="pa-8 text-center text-medium-emphasis text-body-2">
                        No students present.
                      </div>
                      <div v-else class="d-flex flex-column">
                        <div
                          v-for="(student, idx) in localStudents.filter(s => s.isPresent)"
                          :key="student.id"
                          class="px-4 py-3 d-flex align-center gap-3 border-b border-light"
                        >
                          <span class="text-caption text-medium-emphasis" style="width: 20px;">{{ idx + 1 }}</span>
                          <div class="d-flex flex-column overflow-hidden">
                            <span class="text-body-2 font-weight-medium text-high-emphasis text-truncate">{{ student.name }}</span>
                            <div class="d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap">
                              <span>{{ student.id }}</span>
                              <span class="dot-separator mx-1"></span>
                              <VIcon icon="ri-book-2-line" size="12" />
                              <span class="text-truncate">{{ student.course }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </VCardText>
                  </VCard>
                </VCol>

                <!-- Absent Column -->
                <VCol cols="12" sm="6">
                  <VCard class="border rounded-lg h-full overflow-hidden" elevation="0">
                    <div class="pa-4 bg-light-red border-b border-light d-flex align-center justify-space-between">
                      <span class="text-body-1 font-weight-medium text-error">List Absent</span>
                      <VChip size="small" color="secondary" variant="tonal" class="font-weight-medium">
                        Key will be not sent
                      </VChip>
                    </div>
                    <VCardText class="pa-0 overflow-y-auto" style="height: 300px;">
                      <div v-if="stats.absent === 0" class="pa-8 text-center text-medium-emphasis text-body-2">
                        No students absent.
                      </div>
                      <div v-else class="d-flex flex-column">
                        <div
                          v-for="(student, idx) in localStudents.filter(s => !s.isPresent)"
                          :key="student.id"
                          class="px-4 py-3 d-flex align-center gap-3 border-b border-light"
                        >
                          <span class="text-caption text-medium-emphasis" style="width: 20px;">{{ idx + 1 }}</span>
                          <div class="d-flex flex-column overflow-hidden">
                            <span class="text-body-2 font-weight-medium text-high-emphasis text-truncate">{{ student.name }}</span>
                            <div class="d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap">
                              <span>{{ student.id }}</span>
                              <span class="dot-separator mx-1"></span>
                              <VIcon icon="ri-book-2-line" size="12" />
                              <span class="text-truncate">{{ student.course }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </VCardText>
                  </VCard>
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </div>
      </VCardText>

      <!-- FOOTER CONTAINER -->
      <VCardActions class="px-8 py-4 bg-grey-light border-t border-light d-flex align-center" :class="currentStep === 1 ? 'justify-space-between' : 'justify-end'">
        <template v-if="currentStep === 1">
          <div class="d-flex gap-2 flex-wrap">
            <VChip size="small" color="primary" variant="flat">
              Present: {{ stats.present }}
            </VChip>
            <VChip size="small" color="error" variant="flat">
              Absent: {{ stats.absent }}
            </VChip>
          </div>
          <div class="d-flex gap-3 align-center">
            <VBtn
              color="secondary"
              variant="outlined"
              rounded="xl"
              class="px-6 text-capitalize"
              style="border-color: rgba(var(--v-theme-on-surface), 0.12) !important;"
              @click="onCancel"
            >
              Cancel
            </VBtn>
            <VBtn
              color="primary"
              variant="flat"
              rounded="xl"
              class="px-6 text-capitalize"
              @click="onNext"
            >
              Next
            </VBtn>
          </div>
        </template>
        <template v-else-if="currentStep === 2">
          <div class="d-flex gap-3 align-center">
            <VBtn
              color="secondary"
              variant="outlined"
              rounded="xl"
              class="px-6 text-capitalize"
              style="border-color: rgba(var(--v-theme-on-surface), 0.12) !important;"
              @click="onBack"
            >
              Back
            </VBtn>
            <VBtn
              color="primary"
              variant="flat"
              rounded="xl"
              class="px-6 text-capitalize font-weight-medium"
              @click="onSubmit"
            >
              Save & Send Key
            </VBtn>
          </div>
        </template>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<style lang="scss" scoped>
.presence-dialog-card {
  border-radius: 12px;
}

.bg-grey-light {
  background-color: #fafafa !important;
}

.bg-light-green {
  background-color: #effeef !important;
}

.bg-light-red {
  background-color: #ffeef0 !important;
}

.border-b {
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.08) !important;
}

.border-t {
  border-top: 1px solid rgba(var(--v-theme-on-surface), 0.08) !important;
}

.border-r {
  border-right: 1px solid rgba(var(--v-theme-on-surface), 0.08) !important;
}

.border {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.08) !important;
}

.bg-light-grey {
  background-color: #f8f8fa !important;
}

.student-presence-card {
  transition: all 0.2s ease;
  background-color: #ffffff;
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04) !important;
  }
}

.text-center-input :deep(input) {
  text-align: center;
}

.equipment-option {
  transition: all 0.2s ease;
  border-color: rgba(var(--v-theme-on-surface), 0.08) !important;
  &:hover {
    border-color: rgb(var(--v-theme-primary)) !important;
    background-color: rgba(var(--v-theme-primary), 0.02) !important;
  }
}

.dot-separator {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: rgb(var(--v-theme-grey-300));
  flex-shrink: 0;
}
</style>
