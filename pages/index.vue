<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  sidebarRoute: 'index',

})
</script>

<template>
  <div>
    <VCard
      class="mb-6"
      title="Timedoor Admin Starter 🚀"
    >
      <VCardText>All the best for your new project.</VCardText>
    </VCard>
  </div>
</template>
