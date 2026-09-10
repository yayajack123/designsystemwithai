<script setup lang="ts">
interface ThemeCardProps {
  name: string
  updatedAt: string
  image: string
  category: string
  visibility: string
}

const props = defineProps<ThemeCardProps>()

const emit = defineEmits<{
  (event: 'select'): void
}>()
</script>

<template>
  <VCard
    class="theme-card"
    variant="outlined"
    :aria-label="`Open ${props.name}`"
    role="button"
    tabindex="0"
    @click="emit('select')"
    @keydown.enter="emit('select')"
    @keydown.space.prevent="emit('select')"
  >
    <VImg
      :src="props.image"
      :alt="`${props.name} preview`"
      cover
      class="theme-card__preview"
    />

    <VCardText class="theme-card__content">
      <div>
        <h2 class="theme-card__title">
          {{ props.name }}
        </h2>
        <p class="theme-card__updated">
          <span>Last update</span>
          <span aria-hidden="true">:</span>
          <span>{{ props.updatedAt }}</span>
        </p>
      </div>

      <VDivider />

      <div class="theme-card__badges" aria-label="Theme metadata">
        <VChip
          size="small"
          variant="tonal"
          color="primary"
          class="theme-card__badge"
        >
          {{ props.category }}
        </VChip>
        <VChip
          size="small"
          variant="tonal"
          color="secondary"
          class="theme-card__badge"
        >
          {{ props.visibility }}
        </VChip>
      </div>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.theme-card {
  overflow: hidden;
  border-color: rgba(var(--v-theme-on-surface), 0.12);
  border-radius: 12px;
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;

  &:hover,
  &:focus-visible {
    border-color: rgba(var(--v-theme-primary), 0.5);
    box-shadow: 0 6px 18px rgba(var(--v-theme-on-surface), 0.1);
    outline: none;
    transform: translateY(-2px);
  }
}

.theme-card__preview {
  aspect-ratio: 1;
  background: rgb(var(--v-theme-grey-light));
}

.theme-card__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 16px 16px;
}

.theme-card__title {
  color: rgba(var(--v-theme-on-surface), 0.9);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  line-height: 28px;
}

.theme-card__updated {
  display: flex;
  gap: 4px;
  margin: 4px 0 0;
  color: rgba(var(--v-theme-on-surface), 0.7);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.26px;
  line-height: 20px;
}

.theme-card__badges {
  display: flex;
  gap: 8px;
}

.theme-card__badge {
  font-size: 13px;
  font-weight: 500;
  line-height: 14px;
}
</style>
