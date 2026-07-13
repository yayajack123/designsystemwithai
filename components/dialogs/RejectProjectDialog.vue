<script setup lang="ts">
interface Props {
  isDialogVisible: boolean
  itemType?: string
}

interface Emit {
  (e: 'update:isDialogVisible', val: boolean): void
  (e: 'confirm'): void
}

const props = withDefaults(defineProps<Props>(), {
  itemType: 'project',
})

const emit = defineEmits<Emit>()

const onCancel = () => {
  emit('update:isDialogVisible', false)
}

const onConfirm = () => {
  emit('confirm')
  emit('update:isDialogVisible', false)
}
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    max-width="500"
    @update:model-value="val => emit('update:isDialogVisible', val)"
  >
    <VCard class="overflow-hidden">
      <!-- 👉 Close button -->
      <DialogCloseBtn @click="onCancel" />

      <!-- 👉 Body content -->
      <div class="pa-6">
        <h5 class="text-h5 mb-2 font-weight-medium text-high-emphasis">
          Reject {{ props.itemType === 'project' ? 'Project?' : 'Quiz?' }}
        </h5>
        <p class="text-body-1 text-medium-emphasis mb-0">
          Are you sure want to reject this student {{ props.itemType }} ?
        </p>
      </div>

      <!-- 👉 Footer actions -->
      <div class="dialog-footer px-6 py-4 d-flex justify-end gap-3 align-center">
        <VBtn
          color="secondary"
          variant="outlined"
          rounded="xl"
          class="px-6"
          style="border-color: rgba(var(--v-theme-on-surface), 0.12) !important;"
          @click="onCancel"
        >
          Back
        </VBtn>
        <VBtn
          color="error"
          rounded="xl"
          class="px-6"
          @click="onConfirm"
        >
          Reject
        </VBtn>
      </div>
    </VCard>
  </VDialog>
</template>

<style lang="scss" scoped>
.dialog-footer {
  background-color: rgb(var(--v-theme-grey-50));
}
</style>
