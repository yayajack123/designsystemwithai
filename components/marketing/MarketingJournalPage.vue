<script setup lang="ts">
import { computed, ref } from 'vue'
import { useElementSize } from '@vueuse/core'
import type { MarketingPageSnapshot } from '@/composables/useMarketingTemplates'
import MarketingCanvas from './MarketingCanvas.vue'
import { marketingContentHeight } from '@/utils/marketingCanvas'

const props = defineProps<{ snapshot: MarketingPageSnapshot }>()
const container = ref<HTMLElement>()
const { width } = useElementSize(container)
const height = computed(() => marketingContentHeight(props.snapshot.blocks, props.snapshot.baseMargin))
const scale = computed(() => width.value > 0 ? Math.min(1, width.value / 390) : 1)
</script>

<template>
  <article class="marketing-journal-page" aria-label="Marketing message page">
    <p class="text-caption text-medium-emphasis mb-4">Page 2 · {{ snapshot.templateName }}</p>
    <div ref="container" class="journal-viewport">
      <div class="journal-space" :style="{ width: `${390 * scale}px`, height: `${height * scale}px` }">
        <MarketingCanvas class="journal-canvas" :style="{ transform: `scale(${scale})` }" :blocks="snapshot.blocks" :values="snapshot.values" :height="height" :show-page-limit="false" interactive />
      </div>
    </div>
    <p class="text-caption text-medium-emphasis mt-5 mb-0">Template snapshot saved {{ new Date(snapshot.createdAt).toLocaleDateString() }}.</p>
  </article>
</template>

<style scoped>
.marketing-journal-page { min-width: 0; padding: 24px; border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px; background: rgb(var(--v-theme-surface)); }
.journal-viewport { width: 100%; min-width: 0; }
.journal-space { margin-inline: auto; }
.journal-canvas { transform-origin: top left; border: 0; border-radius: 0; }
@media print { .journal-canvas { max-height: 551px; overflow: hidden; } }
</style>
