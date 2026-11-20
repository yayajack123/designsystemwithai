<script setup lang="ts">
const props = defineProps<{ status: string, delivery?: string | null, studentName: string }>()
defineEmits<{ action: [action: string] }>()
const actions = computed(() => {
  if (props.status === 'Not Created') return [{ name: 'Create', icon: 'ri-add-line' }]
  if (props.status === 'Draft') return [{ name: 'Continue editing', icon: 'ri-edit-line' }]
  return [
    { name: props.delivery === 'Sending' ? 'Sending' : props.delivery === 'Failed' ? 'Retry' : props.status === 'Revision' ? 'Send revision' : 'Send to parent', icon: props.delivery === 'Failed' ? 'ri-refresh-line' : 'ri-send-plane-line' },
    { name: 'Mark as sent', icon: 'ri-check-line' },
  ]
})
</script>

<template>
  <div class="d-flex gap-2">
    <VTooltip v-for="action in actions" :key="action.name" :text="action.name" location="top">
      <template #activator="{ props: tooltipProps }">
        <span v-bind="tooltipProps">
          <VBtn :icon="action.icon" variant="outlined" size="small" rounded="circle" class="pending-journal-action" :disabled="delivery === 'Sending'" :aria-label="`${action.name} for ${studentName}`" @click="$emit('action', action.name)" />
        </span>
      </template>
    </VTooltip>
  </div>
</template>

<style scoped>
.pending-journal-action {
  color: rgba(var(--v-theme-on-surface), 0.6);
  border-color: rgba(var(--v-theme-on-surface), 0.08);
}

@media (hover: hover) {
  .pending-journal-action:hover {
    background: rgba(var(--v-theme-on-surface), 0.04);
  }
}
</style>
