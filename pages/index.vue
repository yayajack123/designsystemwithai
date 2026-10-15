<script setup lang="ts">
const { public: { appName } } = useRuntimeConfig()

definePageMeta({
  middleware: ['auth'],
  sidebarRoute: 'index',

})
</script>

<template>
  <div>
    <VCard
      class="mb-6"
      :title="appName"
    >
      <VCardText>Your workspace is ready.</VCardText>
    </VCard>
  </div>
</template>
