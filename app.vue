<script setup lang="ts">
import { h } from 'vue'
import { useTheme } from 'vuetify'
import { layoutConfig } from '@layouts'
import initCore from '@core/initCore'
import { initConfigStore, useConfigStore } from '@core/stores/config'
import { hexToRgb } from '@core/utils/colorConverter'
import { themeConfig } from '@themeConfig'

const runtimeConfig = useRuntimeConfig()
const appName = runtimeConfig.public.appName
const appLogo = runtimeConfig.public.appLogo
const brandLogo = appLogo
  ? h('img', { src: appLogo, alt: `${appName} logo`, class: 'app-brand-logo' })
  : themeConfig.app.logo

themeConfig.app.title = appName
themeConfig.app.logo = brandLogo
layoutConfig.app.title = appName
layoutConfig.app.logo = brandLogo

useHead({
  title: appName,
  titleTemplate: title => title && title !== appName ? `${title} · ${appName}` : appName,
  link: [{ rel: 'icon', href: runtimeConfig.public.appFavicon }],
})

const { global } = useTheme()

// ℹ️ Sync current theme with initial loader theme
initCore()
initConfigStore()

const configStore = useConfigStore()
const { isMobile } = useDevice()
if (isMobile)
  configStore.appContentLayoutNav = 'vertical'
</script>

<template>
  <VLocaleProvider :rtl="configStore.isAppRTL">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </VApp>
  </VLocaleProvider>
</template>
