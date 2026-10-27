<script setup lang="ts">
import MeetingJournalReportPreview from '@/components/MeetingJournalReportPreview.vue'
import MarketingJournalPage from '@/components/marketing/MarketingJournalPage.vue'
import { useDailyJournalDemo } from '@/composables/useDailyJournalDemo'
import { useMarketingTemplates } from '@/composables/useMarketingTemplates'

definePageMeta({ layout: 'blank', public: true })
const route = useRoute()
const demo = useDailyJournalDemo()
const marketing = useMarketingTemplates()
const ready = ref(false)
const record = computed(() => demo.records.value[String(route.params.id)])
onMounted(() => {
  demo.restore()
  const current = record.value
  const template = marketing.templates.value.find(item => item.id === 'demo-surabaya-trial-gratis')
  if (current?.id === 'class-1-student-s1' && current.marketingPageSnapshot?.templateId === 'default-indonesia' && template?.isDefault && template.defaultScope === 'country' && template.status === 'Published') {
    demo.save({
      ...current,
      marketingPageSnapshot: {
        ...current.marketingPageSnapshot,
        templateId: template.id,
        templateName: template.name,
        blocks: JSON.parse(JSON.stringify(template.blocks)),
        baseMargin: template.baseMargin ?? 24,
        createdAt: new Date().toISOString(),
      },
    })
  }
  ready.value = true
})
useHead({ title: 'Daily Journal demo', meta: [{ name: 'robots', content: 'noindex' }] })
</script>

<template>
  <main class="public-journal pa-4 pa-sm-6">
    <p class="text-body-2 text-medium-emphasis mb-4">Public demo · Data tersimpan di browser ini. Link lintas perangkat memerlukan backend produksi.</p>
    <VProgressLinear v-if="!ready" indeterminate color="primary" aria-label="Memuat jurnal" />
    <VAlert v-else-if="!record" type="warning" variant="tonal">Jurnal demo tidak ditemukan di browser ini. Simpan jurnal terlebih dahulu.</VAlert>
    <template v-else>
      <MeetingJournalReportPreview :student="{ name: record.studentName }" :session="{ code: record.sessionCode }" :book="{ title: record.bookTitle }" :meeting="record" :journal="record.journal" />
      <MarketingJournalPage v-if="record.marketingPageSnapshot" :snapshot="record.marketingPageSnapshot" class="mt-6" />
      <VCard variant="outlined" class="mt-6 pa-5">
        <h2 class="text-h5 mb-2">Lanjutkan latihan di rumah</h2>
        <p class="text-body-2 mb-0">Ajak anak menjelaskan project hari ini dan mencoba kembali objective yang belum selesai. Diskusikan kebutuhan belajar berikutnya bersama Teacher.</p>
        <p class="text-caption text-medium-emphasis mt-3 mb-0">Konten halaman ini memakai snapshot template saat jurnal pertama kali disimpan.</p>
      </VCard>
    </template>
  </main>
</template>

<style scoped>
.public-journal { width: 100%; max-width: 900px; margin-inline: auto; }
</style>
