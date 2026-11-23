<script setup lang="ts">
withDefaults(defineProps<{ modelValue: boolean, title: string, maxWidth?: number }>(), { maxWidth: 500 })
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
</script>

<template>
  <VDialog :model-value="modelValue" :max-width="maxWidth" @update:model-value="emit('update:modelValue', $event)">
    <VCard class="overflow-hidden">
      <DialogCloseBtn :aria-label="`Close ${title}`" @click="emit('update:modelValue', false)" />
      <div class="pa-6">
        <h2 class="text-h5 mb-2 font-weight-medium text-high-emphasis">{{ title }}</h2>
        <div class="text-body-1 text-medium-emphasis"><slot /></div>
      </div>
      <div class="confirm-dialog-footer px-6 py-4 d-flex justify-end flex-wrap gap-3 align-center">
        <slot name="actions" />
      </div>
    </VCard>
  </VDialog>
</template>

<style scoped>
.confirm-dialog-footer { background-color: rgb(var(--v-theme-grey-50)); }
</style>
