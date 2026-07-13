<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
  sidebarRoute: 'account-settings',
})
</script>

<template>
  <div>
    <UiSectionHeader
      title="Profile"
      description="Settings for your personal profile"
    >
    </UiSectionHeader>

    <VRow>
      <VCol cols="12" md="3">
         <AccountAvatar />
        
      </VCol>
      <VCol cols="12" md="9">
         <AccountSettings />

        <AccountSettingsSecurity />

        <AccountSettingsDelete />
      </VCol>
    </VRow>

   
  </div>
</template>
