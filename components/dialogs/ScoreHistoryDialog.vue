<script setup lang="ts">
interface QuestionResult {
  number: number
  type: 'Short Answer' | 'Multiple Choice' | 'Free Text'
  correct: number
  total: number
  timeSpent: string
}

interface ScoreAttempt {
  label: 'First Score' | 'Last Score' | 'Best Score'
  icon: string
  date: string
  timeSpent: string
  score: number
  maxScore: number
  points: number
  questions: QuestionResult[]
}

interface StudentInfo {
  name: string
  initials: string
  studentId: string
  className?: string
  book: string
  lessonName: string
}

interface Props {
  isDialogVisible: boolean
  student?: StudentInfo | null
  attempts?: ScoreAttempt[]
}

interface Emit {
  (e: 'update:isDialogVisible', val: boolean): void
}

const props = withDefaults(defineProps<Props>(), {
  student: null,
  attempts: () => [],
})

const emit = defineEmits<Emit>()

// ─────────────────────── Internal navigation ───────────────────────
const view = ref<'history' | 'detail'>('history')
const selectedAttempt = ref<ScoreAttempt | null>(null)

watch(() => props.isDialogVisible, val => {
  if (val) {
    view.value = 'history'
    selectedAttempt.value = null
  }
})

const openDetail = (attempt: ScoreAttempt) => {
  selectedAttempt.value = attempt
  view.value = 'detail'
}

const backToHistory = () => {
  view.value = 'history'
  selectedAttempt.value = null
}

const onClose = () => {
  emit('update:isDialogVisible', false)
}

const scoreColor = (score: number, maxScore: number) => {
  const pct = (score / maxScore) * 100
  if (pct >= 80) return 'success'
  if (pct >= 60) return 'warning'
  return 'error'
}

const questionColor = (correct: number, total: number) => scoreColor(correct, total)
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    max-width="640"
    @update:model-value="val => emit('update:isDialogVisible', val)"
  >
    <VCard class="overflow-hidden">
      <!-- 👉 History Screen -->
      <template v-if="view === 'history'">
        <div class="d-flex align-center justify-space-between px-6 py-4 border-b" style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;">
          <h5 class="text-h5 font-weight-medium text-high-emphasis">
            Score History
          </h5>
          <VSpacer />
          <VBtn
            icon="ri-close-line"
            variant="text"
            density="comfortable"
            color="secondary"
            class="ma-0"
            @click="onClose"
          />
        </div>

        <div v-if="props.student" class="px-6 pt-4 pb-2">
          <p class="text-body-2 text-medium-emphasis mb-0">
            {{ props.student.name }} • {{ props.student.book }} • {{ props.student.lessonName }}
          </p>
        </div>

        <div class="px-6 pb-6 d-flex flex-column gap-3">
          <button
            v-for="attempt in props.attempts"
            :key="attempt.label"
            type="button"
            class="history-row d-flex align-center gap-4 px-4 py-3 w-100 border"
            style="border-radius: 12px !important;"
            :class="attempt.label === 'Best Score' ? 'history-row--best' : 'history-row--default'"
            @click="openDetail(attempt)"
          >
            <VAvatar
              size="40"
              class="border"
              style="background-color: rgba(var(--v-theme-primary), 0.08) !important; border-color: rgba(var(--v-theme-primary), 0.15) !important;"
            >
              <VIcon
                :icon="attempt.icon"
                color="primary"
                size="20"
              />
            </VAvatar>

            <div class="d-flex flex-column flex-grow-1 text-left" style="min-width: 0;">
              <span class="text-body-1 font-weight-medium text-high-emphasis">{{ attempt.label }}</span>
              <span class="text-body-2 text-medium-emphasis">{{ attempt.date }}</span>
            </div>

            <VDivider vertical class="history-row__divider" />

            <div class="d-flex flex-column flex-grow-1 text-left" style="min-width: 0;">
              <span class="text-body-2 text-medium-emphasis">Time spent</span>
              <span class="text-body-2 font-weight-medium text-high-emphasis">{{ attempt.timeSpent }}</span>
            </div>

            <VDivider vertical class="history-row__divider" />

            <div class="d-flex flex-column flex-grow-1">
              <div class="d-flex align-baseline gap-1">
                <span class="text-h5 font-weight-medium" style="color: rgb(var(--v-theme-primary));">{{ attempt.score }}</span>
                <span class="text-body-2 text-high-emphasis">/</span>
                <span class="text-body-2 text-high-emphasis">{{ attempt.maxScore }}</span>
              </div>
              <span class="text-body-2 text-medium-emphasis">{{ attempt.points }} Points</span>
            </div>

            <VAvatar
              color="primary"
              size="24"
            >
              <VIcon
                icon="ri-arrow-right-s-line"
                color="white"
                size="20"
              />
            </VAvatar>
          </button>
        </div>
      </template>

      <!-- 👉 Detail Score Screen -->
      <template v-else-if="view === 'detail' && selectedAttempt">
        <div class="d-flex align-center gap-4 px-6 py-4 border-b" style="border-color: rgba(var(--v-theme-on-surface), 0.08) !important;">
          <VBtn
            icon="ri-arrow-left-line"
            variant="text"
            density="comfortable"
            color="high-emphasis"
            class="ma-0"
            @click="backToHistory"
          />
          <h5 class="text-h5 font-weight-medium text-high-emphasis">
            Detail Score
          </h5>
          <VSpacer />
          <VBtn
            icon="ri-close-line"
            variant="text"
            density="comfortable"
            color="secondary"
            class="ma-0"
            @click="onClose"
          />
        </div>

        <div class="px-6 pt-4 pb-2">
          <p class="text-body-2 text-medium-emphasis mb-0">
            {{ selectedAttempt.label }} • {{ selectedAttempt.date }} • {{ selectedAttempt.timeSpent }} • {{ selectedAttempt.score }}/{{ selectedAttempt.maxScore }}
          </p>
        </div>

        <VRow class="px-6 pb-6 pt-2 ma-0">
          <VCol
            v-for="q in selectedAttempt.questions"
            :key="q.number"
            cols="12"
            sm="6"
            class="pa-2"
          >
            <div
              class="question-card border rounded-lg pa-4 d-flex gap-3 align-start h-100"
              style="border-color: rgba(var(--v-theme-on-surface), 0.12) !important;"
            >
              <!-- Circular Wrapper -->
              <div
                class="d-flex align-center justify-center rounded-circle shrink-0"
                :class="`bg-${questionColor(q.correct, q.total)}`"
                style="width: 24px; height: 24px;"
              >
                <span class="text-caption font-weight-medium text-white">{{ q.number }}</span>
              </div>

              <!-- Question details -->
              <div class="d-flex flex-column gap-1 flex-grow-1" style="min-width: 0;">
                <p class="text-body-1 font-weight-medium text-high-emphasis mb-0 text-left leading-normal">
                  {{ q.type }}
                </p>
                <div class="d-flex align-center gap-1 text-body-2 text-medium-emphasis">
                  <span>Correct Answer</span>
                  <span>:</span>
                  <span>{{ q.correct }}/{{ q.total }}</span>
                </div>
                <div class="d-flex align-center gap-1 text-body-2 text-medium-emphasis">
                  <span>Time spent</span>
                  <span>:</span>
                  <span>{{ q.timeSpent }}</span>
                </div>
              </div>
            </div>
          </VCol>
        </VRow>
      </template>
    </VCard>
  </VDialog>
</template>

<style lang="scss" scoped>
.history-row {
  background-color: #fafafa;
  transition: background-color 0.2s ease;
  text-align: left;

  &--default {
    border-color: rgba(var(--v-theme-on-surface), 0.12) !important;
  }

  &--best {
    background-color: rgb(var(--v-theme-surface));
    border-color: rgb(var(--v-theme-primary)) !important;
  }

  &:hover {
    background-color: rgba(var(--v-theme-on-surface), 0.02);
  }
}

.history-row__divider {
  align-self: stretch;
  height: auto;
}
</style>
