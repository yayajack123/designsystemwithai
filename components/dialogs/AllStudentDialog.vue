<script setup lang="ts">
interface Student {
  id: string
  name: string
  course: string
  badgeText: string
  badgeColor: 'warning' | 'error' | 'success'
  isPresent: boolean
  hasLaptop: boolean
}

interface Props {
  isDialogVisible: boolean
  students: Student[]
}

interface Emit {
  (e: 'update:isDialogVisible', val: boolean): void
  (e: 'approve-student', studentId: string): void
  (e: 'reject-student', studentId: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const onClose = () => {
  emit('update:isDialogVisible', false)
}

const isQuotaStatus = (badgeText: string): boolean => {
  return badgeText.toLowerCase().startsWith('quota')
}

const getStatusChipColor = (badgeColor: 'warning' | 'error' | 'success', badgeText: string): 'warning' | 'error' | 'success' => {
  if (isQuotaStatus(badgeText)) return 'warning'
  return 'error'
}

const onApprove = (studentId: string) => {
  emit('approve-student', studentId)
}

const onReject = (studentId: string) => {
  emit('reject-student', studentId)
}
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    max-width="620"
    scrollable
    @update:model-value="(val) => emit('update:isDialogVisible', val)"
  >
    <VCard class="overflow-hidden all-student-dialog">
      <DialogCloseBtn @click="onClose" />

      <!-- Header -->
      <VCardItem class="px-6 pt-7 pb-5 d-flex flex-column align-center text-center">
        <h4 class="text-h4 font-weight-medium text-high-emphasis mb-1">
          All Student
        </h4>
        <span class="text-body-2 text-medium-emphasis">
          {{ props.students.length }} Student Total
        </span>
      </VCardItem>

      <VDivider />

      <!-- Scrollable Body -->
      <VCardText class="pa-0 overflow-y-auto" style="max-height: calc(90vh - 220px);">
        <div v-if="props.students.length === 0" class="pa-8 text-center text-medium-emphasis text-body-2">
          No students available.
        </div>
        <div v-else class="d-flex flex-column">
          <div
            v-for="(student, idx) in props.students"
            :key="student.id"
            class="student-row px-6 py-4 d-flex align-center gap-3 border-b border-light"
          >
            <!-- Index Badge -->
            <div class="student-idx bg-grey-50 text-caption font-weight-medium rounded-circle d-flex align-center justify-center flex-shrink-0">
              {{ idx + 1 }}
            </div>

            <!-- Info Block -->
            <div class="d-flex flex-column flex-grow-1 min-w-0">
              <span class="text-body-1 font-weight-medium text-high-emphasis text-truncate">
                {{ student.name }}
              </span>
              <div class="d-flex align-center gap-1 mt-0.5 text-caption text-medium-emphasis">
                <VIcon icon="ri-book-2-line" size="14" class="flex-shrink-0" />
                <span class="text-truncate">{{ student.course }}</span>
              </div>
            </div>

            <!-- Status Badge -->
            <VChip
              :color="getStatusChipColor(student.badgeColor, student.badgeText)"
              variant="tonal"
              size="small"
              class="font-weight-medium flex-shrink-0"
            >
              {{ student.badgeText }}
            </VChip>

            <!-- Action Icons -->
            <div class="d-flex gap-1 flex-shrink-0">
              <template v-if="isQuotaStatus(student.badgeText)">
                <VBtn
                  icon
                  color="success"
                  variant="flat"
                  size="x-small"
                  class="action-icon-btn"
                  @click="onApprove(student.id)"
                >
                  <VIcon icon="ri-check-line" size="14" />
                </VBtn>
                <VBtn
                  icon
                  color="success"
                  variant="flat"
                  size="x-small"
                  class="action-icon-btn"
                  @click="onApprove(student.id)"
                >
                  <VIcon icon="ri-macbook-line" size="14" />
                </VBtn>
              </template>
              <template v-else>
                <VBtn
                  icon
                  color="error"
                  variant="flat"
                  size="x-small"
                  class="action-icon-btn"
                  @click="onReject(student.id)"
                >
                  <VIcon icon="ri-close-line" size="14" />
                </VBtn>
                <VBtn
                  icon
                  color="error"
                  variant="flat"
                  size="x-small"
                  class="action-icon-btn"
                  @click="onReject(student.id)"
                >
                  <VIcon icon="ri-subtract-line" size="14" />
                </VBtn>
              </template>
            </div>
          </div>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss" scoped>
.all-student-dialog {
  border-radius: 12px;
  box-shadow: 0px 8px 28px 0px rgba(46, 38, 61, 0.24) !important;
}

.student-idx {
  width: 26px;
  height: 26px;
  min-width: 26px;
  line-height: 26px;
  text-align: center;
}

.student-row {
  transition: background-color 0.15s ease;

  &:hover {
    background-color: rgba(var(--v-theme-on-surface), 0.02);
  }
}

.action-icon-btn {
  border-radius: 50%;
  width: 28px !important;
  height: 28px !important;
  min-width: 28px !important;
}

.border-b {
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.08) !important;
}

.border-light {
  border-color: rgba(var(--v-theme-on-surface), 0.08) !important;
}
</style>
