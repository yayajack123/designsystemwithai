import type { ThemeDefinition } from 'vuetify'

// ==========================================
// Primitive Colors
// ==========================================
// Light Mode Primitive Colors (Column 1)
export const lightPrimary100 = '#DBFDDB'
export const lightPrimary200 = '#B8FAB8'
export const lightPrimary300 = '#81F483'
export const lightPrimary400 = '#43E545'
export const lightPrimary500 = '#10AF13'
export const lightPrimary600 = '#108513'
export const lightPrimary700 = '#126915'
export const lightPrimary800 = '#115614'
export const lightPrimary900 = '#033006'

// Dark Mode Primitive Colors (Column 2)
export const darkPrimary100 = '#DBFDDB'
export const darkPrimary200 = '#B8FAB8'
export const darkPrimary300 = '#81F483'
export const darkPrimary400 = '#43E545'
export const darkPrimary500 = '#10AF13'
export const darkPrimary600 = '#108513'
export const darkPrimary700 = '#126915'
export const darkPrimary800 = '#115614'
export const darkPrimary900 = '#10AF13'

// Brand mappings
export const lightPrimaryMain = lightPrimary500
export const lightPrimaryDark = lightPrimary600
export const lightPrimaryLight = lightPrimary400

export const darkPrimaryMain = darkPrimary500
export const darkPrimaryDark = darkPrimary600
export const darkPrimaryLight = darkPrimary400

// Fallbacks used by Vuetify configuration (Default/Light values mapped as static base)
export const staticPrimaryColor = lightPrimaryMain
export const staticPrimaryDarkenColor = lightPrimaryDark

export const themes: Record<string, ThemeDefinition> = {
  light: {
    dark: false,
    colors: {
      'primary': lightPrimaryMain,
      'on-primary': '#fff',
      'primary-darken-1': lightPrimaryDark,

      // Primitive Colors
      'primary-100': lightPrimary100,
      'primary-200': lightPrimary200,
      'primary-300': lightPrimary300,
      'primary-400': lightPrimary400,
      'primary-500': lightPrimary500,
      'primary-600': lightPrimary600,
      'primary-700': lightPrimary700,
      'primary-800': lightPrimary800,
      'primary-900': lightPrimary900,

      // Reference Tokens
      'primary-light': lightPrimaryLight,
      'primary-main': lightPrimaryMain,
      'primary-dark': lightPrimaryDark,
      'secondary': '#8A8D93',
      'secondary-darken-1': '#7C7F84',
      'on-secondary': '#fff',
      'success': '#56CA00',
      'success-darken-1': '#4DB600',
      'on-success': '#fff',
      'info': '#16B1FF',
      'info-darken-1': '#149FE6',
      'on-info': '#fff',
      'warning': '#FFB400',
      'warning-darken-1': '#E6A200',
      'on-warning': '#fff',
      'error': '#FF4C51',
      'error-darken-1': '#E64449',
      'on-error': '#fff',
      'background': '#fafafa',
      'on-background': '#2E263D',
      'surface': '#fff',
      'on-surface': '#2E263D',
      'grey-light': '#fafafa',
      'grey-50': '#FAFAFA',
      'grey-100': '#F5F5F5',
      'grey-200': '#EEEEEE',
      'grey-300': '#E0E0E0',
      'grey-400': '#BDBDBD',
      'grey-500': '#9E9E9E',
      'grey-600': '#757575',
      'grey-700': '#616161',
      'grey-800': '#424242',
      'grey-900': '#212121',
      'perfect-scrollbar-thumb': '#dbdade',
      'skin-bordered-background': '#fafafa',
      'skin-bordered-surface': '#fff',
      'expansion-panel-text-custom-bg': '#fafafa',
      'track-bg': '#F0F2F8',
      'chat-bg': '#F7F6FA',
    },

    variables: {
      'code-color': '#d400ff',
      'overlay-scrim-background': '#2E263D',
      'tooltip-background': '#1A0E33',
      'overlay-scrim-opacity': 0.5,
      'hover-opacity': 0.04,
      'focus-opacity': 0.1,
      'selected-opacity': 0.08,
      'activated-opacity': 0.16,
      'pressed-opacity': 0.14,
      'dragged-opacity': 0.1,
      'disabled-opacity': 0.4,
      'border-color': '#2E263D',
      'border-opacity': 0.12,
      'table-header-color': '#F6F7FB',
      'high-emphasis-opacity': 0.9,
      'medium-emphasis-opacity': 0.7,

      // 👉 shadows
      'shadow-key-umbra-color': '#2E263D',
      'shadow-xs-opacity': '0.16',
      'shadow-sm-opacity': '0.18',
      'shadow-md-opacity': '0.20',
      'shadow-lg-opacity': '0.22',
      'shadow-xl-opacity': '0.24',
    },
  },

  dark: {
    dark: true,
    colors: {
      'primary': staticPrimaryColor,
      'on-primary': '#fff',
      'primary-darken-1': staticPrimaryDarkenColor,

      // Primitive Colors
      'primary-100': darkPrimary100,
      'primary-200': darkPrimary200,
      'primary-300': darkPrimary300,
      'primary-400': darkPrimary400,
      'primary-500': darkPrimary500,
      'primary-600': darkPrimary600,
      'primary-700': darkPrimary700,
      'primary-800': darkPrimary800,
      'primary-900': darkPrimary900,

      // Reference Tokens
      'primary-light': darkPrimaryLight,
      'primary-main': darkPrimaryMain,
      'primary-dark': darkPrimaryDark,
      'secondary': '#8A8D93',
      'secondary-darken-1': '#7C7F84',
      'on-secondary': '#fff',
      'success': '#56CA00',
      'success-darken-1': '#4DB600',
      'on-success': '#fff',
      'info': '#16B1FF',
      'info-darken-1': '#149FE6',
      'on-info': '#fff',
      'warning': '#FFB400',
      'warning-darken-1': '#E6A200',
      'on-warning': '#fff',
      'error': '#FF4C51',
      'error-darken-1': '#E64449',
      'on-error': '#fff',
      'background': '#28243D',
      'on-background': '#E7E3FC',
      'surface': '#312d4b',
      'on-surface': '#E7E3FC',
      'grey-50': '#2A2E42',
      'grey-100': '#2F3349',
      'grey-200': '#4A5072',
      'grey-300': '#5E6692',
      'grey-400': '#7983BB',
      'grey-500': '#8692D0',
      'grey-600': '#AAB3DE',
      'grey-700': '#B6BEE3',
      'grey-800': '#CFD3EC',
      'grey-900': '#E7E9F6',
      'perfect-scrollbar-thumb': '#4a5072',
      'skin-bordered-background': '#312d4b',
      'skin-bordered-surface': '#312d4b',
      'expansion-panel-text-custom-bg': '#373350',
      'track-bg': '#474360',
      'chat-bg': '#373452',
    },

    variables: {
      'code-color': '#d400ff',
      'overlay-scrim-background': '#312D4B',
      'tooltip-background': '#F7F4FF',
      'overlay-scrim-opacity': 0.5,
      'hover-opacity': 0.04,
      'focus-opacity': 0.1,
      'selected-opacity': 0.08,
      'activated-opacity': 0.16,
      'pressed-opacity': 0.14,
      'disabled-opacity': 0.4,
      'dragged-opacity': 0.1,
      'border-color': '#E7E3FC',
      'border-opacity': 0.12,
      'table-header-color': '#3D3759',
      'high-emphasis-opacity': 0.9,
      'medium-emphasis-opacity': 0.7,

      // 👉 Shadows
      'shadow-key-umbra-color': '#131120',
      'shadow-xs-opacity': '0.20',
      'shadow-sm-opacity': '0.22',
      'shadow-md-opacity': '0.24',
      'shadow-lg-opacity': '0.26',
      'shadow-xl-opacity': '0.28',
    },
  },
}

export default themes
