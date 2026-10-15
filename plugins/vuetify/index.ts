import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import defaults from './defaults'
import { icons } from './icons'
import { getBrandThemeColors, themes } from './theme'
import { themeConfig } from '@themeConfig'

// Styles
import '@core/scss/template/libs/vuetify/index.scss'
import 'vuetify/styles'

export default defineNuxtPlugin(nuxtApp => {
  const runtimeConfig = useRuntimeConfig()
  const brandColors = getBrandThemeColors(runtimeConfig.public.brandPrimary)
  const brandThemes = Object.fromEntries(Object.entries(themes).map(([name, theme]) => [name, {
    ...theme,
    colors: {
      ...theme.colors,
      ...brandColors,
    },
  }]))
  const optionTheme = {
    themes: brandThemes,
    defaultTheme: resolveVuetifyTheme(themeConfig.app.theme),
  }

  const vuetify = createVuetify({
    ssr: true,
    aliases: {
      IconBtn: VBtn,
    },
    defaults,
    icons,
    theme: optionTheme,

  })

  nuxtApp.vueApp.use(vuetify)
})
