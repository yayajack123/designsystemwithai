import { deepMerge } from '@antfu/utils'
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import defaults from './defaults'
import { icons } from './icons'
import { staticPrimaryColor, staticPrimaryDarkenColor, themes } from './theme'
import { themeConfig } from '@themeConfig'

// Styles
import { cookieRef } from '@/@layouts/stores/config'
import '@core/scss/template/libs/vuetify/index.scss'
import 'vuetify/styles'

export default defineNuxtPlugin(nuxtApp => {
  const cookieThemeValues = {
    defaultTheme: resolveVuetifyTheme(themeConfig.app.theme),
    themes: {
      light: {
        colors: {
          'primary': cookieRef<string | null>('lightThemePrimaryColor_v2', null).value || staticPrimaryColor,
          'primary-darken-1': cookieRef<string | null>('lightThemePrimaryDarkenColor_v2', null).value || staticPrimaryDarkenColor,
        },
      },
      dark: {
        colors: {
          'primary': cookieRef<string | null>('darkThemePrimaryColor_v2', null).value || staticPrimaryColor,
          'primary-darken-1': cookieRef<string | null>('darkThemePrimaryDarkenColor_v2', null).value || staticPrimaryDarkenColor,
        },
      },
    },
  }

  const optionTheme = deepMerge({ themes }, cookieThemeValues)

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
