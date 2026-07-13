# Color Specification

This document details the color tokens, primitive palettes, opacity levels, and active light/dark Vuetify theme colors configured for this project, based on the variables declared in [theme.ts](file:///Users/user/Documents/Code%20Project/microdemy-DS/plugins/vuetify/theme.ts).

---

## 🟢 Primitive Primary Colors

The primary brand colors are configured as a green-based palette. These primitive colors serve as the foundation for the primary brand mappings across the application.

| Primitive Color Token | Light Theme Hex Value | Dark Theme Hex Value | Description / Typical Use Case |
| :--- | :--- | :--- | :--- |
| `primary-100` | `#DBFDDB` | `#DBFDDB` | Softest green, used for extremely light background tints |
| `primary-200` | `#B8FAB8` | `#B8FAB8` | Very light green accent tint |
| `primary-300` | `#81F483` | `#81F483` | Light green tint |
| `primary-400` | `#43E545` | `#43E545` | Light brand green |
| `primary-500` (Main) | `#10AF13` | `#10AF13` | **Primary Brand Color**, active selections, primary indicators |
| `primary-600` (Dark) | `#108513` | `#108513` | Primary hover states, active button states |
| `primary-700` | `#126915` | `#126915` | Dark green brand variant |
| `primary-800` | `#115614` | `#115614` | Deeper green brand variant |
| `primary-900` | `#033006` | `#10AF13` | Deepest background green tint (Light) / Active fallback (Dark) |

---

## 🌫️ Reference & Opacity Tokens

These tokens are generated using transparency (alpha channels) applied on the primary brand color (`#10AF13`). They are used for state overlays, backdrop effects, and subtle highlights.

| Token Name | Hex Code (with Alpha) | Equivalent Opacity | Description / Typical Use Case |
| :--- | :--- | :--- | :--- |
| `primary-opacity-lighter` | `#10AF1314` | `8%` | Very subtle hover overlays |
| `primary-opacity-light` | `#10AF1329` | `16%` | Focus states, selection indicators |
| `primary-opacity-main` | `#10AF133D` | `24%` | Active selection backgrounds |
| `primary-opacity-dark` | `#10AF1352` | `32%` | High contrast selection states |
| `primary-opacity-darker` | `#10AF1361` | `38%` | Strongest transparent brand overlay |

---

## ☀️ Vuetify Light Theme Colors

The light theme configures standard Vuetify colors along with system background, surface, and grey level styling.

| Vuetify Color Key | Hex Value | Description / Usage |
| :--- | :--- | :--- |
| `primary` | `#10AF13` | Brand primary color (mapped to `lightPrimary500`) |
| `primary-darken-1` | `#108513` | Brand primary darken variant (mapped to `lightPrimary600`) |
| `on-primary` | `#FFFFFF` | Text/icon color placed on top of `primary` elements |
| `secondary` | `#8A8D93` | Secondary text, inactive states, auxiliary buttons |
| `secondary-darken-1` | `#7C7F84` | Secondary darken state |
| `on-secondary` | `#FFFFFF` | Text/icon color placed on top of `secondary` elements |
| `success` | `#56CA00` | Success indicators, success border outlines, validation green |
| `success-darken-1` | `#4DB600` | Darken success variant |
| `info` | `#16B1FF` | Informational banners, badges, cyan highlights |
| `warning` | `#FFB400` | Warnings, intermediate alert states |
| `error` | `#FF4C51` | Error states, validation text red, error dialogs |
| `background` | `#FAFAFA` | Default page background (updated to `grey-light` color) |
| `on-background` | `#2E263D` | Base body text color |
| `grey-light` | `#FAFAFA` | Figma design token for light grey background |
| `surface` | `#FFFFFF` | Card containers, menus, dialog backgrounds |
| `on-surface` | `#2E263D` | Text/icon color placed on top of `surface` elements |
| `track-bg` | `#F0F2F8` | Progress bar background track |
| `chat-bg` | `#F7F6FA` | Chat bubble background container |

---

## 🌙 Vuetify Dark Theme Colors

The dark theme shifts backgrounds and surfaces to darker values while retaining the brand primary colors for consistent user experience.

| Vuetify Color Key | Hex Value | Description / Usage |
| :--- | :--- | :--- |
| `primary` | `#10AF13` | Brand primary color (uses `staticPrimaryColor`) |
| `primary-darken-1` | `#108513` | Brand primary darken variant (uses `staticPrimaryDarkenColor`) |
| `on-primary` | `#FFFFFF` | Text/icon color placed on top of `primary` elements |
| `secondary` | `#8A8D93` | Secondary text, inactive states |
| `success` | `#56CA00` | Success indicators |
| `info` | `#16B1FF` | Informational alerts and indicators |
| `warning` | `#FFB400` | Warning messages and indicators |
| `error` | `#FF4C51` | Failure notifications and fields |
| `background` | `#28243D` | Dark mode base layout background |
| `on-background` | `#E7E3FC` | High-readability white/grey text for dark backgrounds |
| `surface` | `#312D4B` | Dark mode card container and surface background |
| `on-surface` | `#E7E3FC` | Text/icon color placed on top of dark surface elements |
| `track-bg` | `#474360` | Dark mode progress track |
| `chat-bg` | `#373452` | Dark mode chat bubble container |

---

## ⚙️ Grey Palette Specification

Grey tokens are utilized for semantic text weights, borders, dividers, and various shades of grey elements.

| Grey Token | Light Mode Hex Value | Dark Mode Hex Value | Main Usage |
| :--- | :--- | :--- | :--- |
| `grey-light` | `#FAFAFA` | - | Figma design token for light grey background |
| `grey-50` | `#FAFAFA` | `#2A2E42` | Very light tint / container offsets |
| `grey-100` | `#F5F5F5` | `#2F3349` | Divider lines and border outlines |
| `grey-200` | `#EEEEEE` | `#4A5072` | Layout grid dividers |
| `grey-300` | `#E0E0E0` | `#5E6692` | Placeholders, disabled elements |
| `grey-400` | `#BDBDBD` | `#7983BB` | Secondary border colors |
| `grey-500` | `#9E9E9E` | `#8692D0` | Standard muted texts and secondary icons |
| `grey-600` | `#757575` | `#AAB3DE` | Active states on muted content |
| `grey-700` | `#616161` | `#B6BEE3` | Medium emphasis content |
| `grey-800` | `#424242` | `#CFD3EC` | High emphasis dark text (Light theme) |
| `grey-900` | `#212121` | `#E7E9F6` | Title texts / near-black headers |
