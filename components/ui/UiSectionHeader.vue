<script setup lang="ts">
import type { RouteLocation } from '#vue-router'

interface Props {
  title: string
  description?: string
  back?: RouteLocation
  customBack?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['click:back'])

const handleBackClick = (e: MouseEvent) => {
  if (props.customBack) {
    e.preventDefault()
    e.stopPropagation()
    emit('click:back')
  }
}
</script>

<template>
  <div class="d-flex align-center gap-3 mb-4">
    <IconBtn
      v-if="props.back"
      color="secondary"
      class="me-4"
      :to="props.customBack ? undefined : props.back"
      @click="handleBackClick"
    >
      <VIcon icon="ri-arrow-left-line" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Back
      </VTooltip>
    </IconBtn>
    <VRow>
      <VCol
        cols="12"
        md="8"
      >
        <h1 class="text-h5">
          {{ props.title }}
        </h1>
        <p
          v-if="props.description"
          class="mb-0 text-body-1"
        >
          {{ props.description }}
        </p>
      </VCol>

      <VCol
        cols="12"
        md="4"
        class="d-flex gap-3 align-center flex-wrap justify-end"
      >
        <slot name="actions" />
      </VCol>
    </VRow>
  </div>
</template>
