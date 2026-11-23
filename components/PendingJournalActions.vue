<script setup lang="ts">
const props = defineProps<{ status: string, delivery?: string | null, studentName: string }>()
defineEmits<{ action: [action: string] }>()
const actions = computed(() => {
  if (props.status === 'Not Created') return [{ name: 'Create', icon: 'ri-add-line', color: 'secondary' }]
  if (props.status === 'Draft') return [{ name: 'Continue editing', icon: 'ri-edit-line', color: 'secondary' }]
  return [
    { name: props.delivery === 'Sending' ? 'Sending' : props.delivery === 'Failed' ? 'Retry' : props.status === 'Revision' ? 'Send revision' : 'Send to parent', icon: props.delivery === 'Failed' ? 'ri-refresh-line' : 'ri-send-plane-line', color: props.delivery === 'Failed' ? 'warning' : 'success' },
    { name: 'Mark as sent', icon: 'ri-check-line', color: 'warning' },
  ]
})
</script>

<template>
  <div class="d-flex gap-1">
    <VTooltip v-for="action in actions" :key="action.name" :text="action.name" location="top">
      <template #activator="{ props: tooltipProps }">
        <span v-bind="tooltipProps">
          <VBtn :icon="action.icon" variant="outlined" :color="action.color" size="small" class="table-action-button" :disabled="delivery === 'Sending'" :aria-label="`${action.name} for ${studentName}`" @click="$emit('action', action.name)" />
        </span>
      </template>
    </VTooltip>
  </div>
</template>
