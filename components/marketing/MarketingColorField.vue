<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useTheme } from 'vuetify'
import { isMarketingColor, marketingColor } from '@/utils/marketingBlock'

const props = defineProps<{ modelValue: string; label: string; items: string[] }>()
const emit = defineEmits<{ 'update:modelValue': [string] }>()
const theme = useTheme()
const open = ref(false)
const mode = ref('library')
const draft = ref('')
const validHex = computed(() => /^#(?:[\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})$/i.test(draft.value))
const hexRules = [(value: string) => /^#(?:[\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})$/i.test(value) || 'Enter a valid HEX color, such as #336699.']

watch(open, value => {
  if (!value) return
  mode.value = props.modelValue.startsWith('#') ? 'custom' : 'library'
  draft.value = props.modelValue.startsWith('#') ? props.modelValue : props.modelValue === 'transparent' ? '#00000000' : props.modelValue === 'primary-opacity-lighter' ? `${theme.current.value.colors.primary}14` : theme.current.value.colors[props.modelValue] || theme.current.value.colors.primary
})

const select = (value: string) => {
  if (!isMarketingColor(value)) return
  emit('update:modelValue', value)
  open.value = false
}
</script>

<template>
  <VMenu v-model="open" :close-on-content-click="false" location="bottom end">
    <template #activator="{ props: menuProps }">
      <VBtn v-bind="menuProps" class="color-trigger" variant="outlined" color="secondary" :aria-label="`${label}: ${modelValue}. Choose color`">
        <span class="color-swatch" :style="{ backgroundColor: marketingColor(modelValue) }" aria-hidden="true" />
        <span class="color-value">{{ modelValue }}</span>
        <VIcon icon="ri-arrow-down-s-line" size="16" aria-hidden="true" />
      </VBtn>
    </template>
    <VCard class="color-menu" width="300">
      <VCardText class="pa-3 pb-1 text-body-2 font-weight-medium">{{ label }}</VCardText>
      <VTabs v-model="mode" grow density="compact" aria-label="Color source">
        <VTab value="library">Library</VTab>
        <VTab value="custom">Custom</VTab>
      </VTabs>
      <VDivider />
      <VList v-if="mode === 'library'" class="color-library" density="compact" aria-label="Library colors">
        <VListItem v-for="token in items" :key="token" :active="modelValue === token" color="primary" :aria-label="`Use ${token}`" @click="select(token)">
          <template #prepend><span class="color-swatch me-3" :style="{ backgroundColor: marketingColor(token) }" aria-hidden="true" /></template>
          <VListItemTitle class="text-body-2">{{ token }}</VListItemTitle>
          <template #append><VIcon v-if="modelValue === token" icon="ri-check-line" size="16" /></template>
        </VListItem>
      </VList>
      <div v-else class="pa-3">
        <VColorPicker v-model="draft" mode="hexa" hide-inputs width="276" elevation="0" aria-label="Custom color picker" />
        <VTextField v-model="draft" class="mt-3" label="HEX color" placeholder="#336699" :rules="hexRules" density="compact" variant="outlined" hide-details="auto" @keydown.enter.prevent="validHex && select(draft)" />
        <div class="d-flex justify-end gap-2 mt-3">
          <VBtn variant="text" color="secondary" size="small" @click="open = false">Cancel</VBtn>
          <VBtn variant="flat" color="primary" size="small" :disabled="!validHex" @click="select(draft)">Apply color</VBtn>
        </div>
      </div>
    </VCard>
  </VMenu>
</template>

<style scoped>
.color-trigger { display: flex !important; width: 100%; min-width: 0; height: 40px; justify-content: stretch; padding-inline: 8px; border-color: rgba(var(--v-theme-on-surface), var(--v-border-opacity)) !important; border-radius: 6px !important; color: rgb(var(--v-theme-on-surface)) !important; font-weight: 400; letter-spacing: normal; text-transform: none; }
.color-trigger :deep(.v-btn__content) { display: grid; width: 100%; min-width: 0; flex: 1 1 auto; grid-template-columns: 16px minmax(0, 1fr) 16px; align-items: center; gap: 8px; }
.color-value { overflow: hidden; text-align: start; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; line-height: 18px; }
.color-swatch { display: block; width: 16px; height: 16px; flex: 0 0 16px; border: 1px solid rgba(var(--v-theme-on-surface), var(--v-border-opacity)); border-radius: 3px; }
.color-menu { max-width: calc(100vw - 24px); }
.color-library { max-height: 300px; overflow-y: auto; }
.color-trigger:focus-visible { outline: 2px solid rgb(var(--v-theme-primary)); outline-offset: 2px; }
@media (min-width: 960px) { .color-trigger { height: 30px; } }
</style>
