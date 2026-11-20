<script setup lang="ts">
defineProps<{ status: string, delivery?: string | null }>()
const details = {
  Sending: { icon: 'ri-time-line', color: 'info', text: 'Sending: waiting for a delivery update from WhatsApp. If no update arrives within 15 minutes, delivery is marked as failed.' },
  Failed: { icon: 'ri-error-warning-line', color: 'error', text: 'Failed: the message could not be sent. Retry or mark it as sent after sending it outside the system.' },
}
</script>

<template>
  <div class="d-flex align-center gap-2">
    <VChip :color="status === 'Revision' ? 'warning' : status === 'Created' ? 'info' : 'secondary'" variant="tonal" size="small">{{ status }}</VChip>
    <VTooltip v-if="delivery === 'Sending' || delivery === 'Failed'" :text="details[delivery].text" location="top">
      <template #activator="{ props }">
        <span v-bind="props" tabindex="0" role="img" :aria-label="details[delivery].text">
          <VAvatar :color="details[delivery].color" size="24" class="text-white"><VIcon :icon="details[delivery].icon" size="15" /></VAvatar>
        </span>
      </template>
    </VTooltip>
  </div>
</template>
