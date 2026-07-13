# Typography Specification

This document details the typography tokens configured for this project, based on the variables declared in `@core/scss/template/libs/vuetify/_variables.scss`.

## Base Font Family
- **Font Family:** `"Poppins", sans-serif` (with system-specific fallbacks)

---

## Typography Tokens Table

| Token Name | Size | Weight | Line Height | Letter Spacing | Text Transform | Vuetify Utility Class |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **h1** | `2.875rem` (46px) | `500` (Medium) | `4.25rem` (68px) | `normal` | — | `.text-h1` |
| **h2** | `2.375rem` (38px) | `500` (Medium) | `3.5rem` (56px) | `normal` | — | `.text-h2` |
| **h3** | `1.75rem` (28px) | `500` (Medium) | `2.625rem` (42px) | `normal` | — | `.text-h3` |
| **h4** | `1.5rem` (24px) | `500` (Medium) | `2.375rem` (38px) | `normal` | — | `.text-h4` |
| **h5** | `1.125rem` (18px) | `500` (Medium) | `1.75rem` (28px) | `normal` | — | `.text-h5` |
| **h6** | `0.9375rem` (15px) | — (Default) | `1.375rem` (22px) | `normal` | — | `.text-h6` |
| **subtitle-1** | `0.9375rem` (15px) | — (Default) | `1.375rem` (22px) | `normal` | — | `.text-subtitle-1` |
| **subtitle-2** | `0.8125rem` (13px) | — (Default) | `1.25rem` (20px) | `normal` | — | `.text-subtitle-2` |
| **body-1** | `0.9375rem` (15px) | — (Default) | `1.375rem` (22px) | `normal` | — | `.text-body-1` |
| **body-2** | `0.8125rem` (13px) | — (Default) | `1.25rem` (20px) | `normal` | — | `.text-body-2` |
| **caption** | `0.8125rem` (13px) | — (Default) | `1.125rem` (18px) | `0.025rem` | — | `.text-caption` |
| **overline** | — (Default) | `400` (Regular) | `0.875rem` (14px) | `0.05rem` | — | `.text-overline` |
| **button** | `0.9375rem` (15px) | `500` (Medium) | `1.375rem` (22px)* | `normal` | `capitalize` | `.text-button` |

*\*Line-height for button token is configured separately via `$button-line-height`.*

---

## Usage in Vuetify Components
Vuetify applies these typography settings automatically across components:
1. **Tags / Classes:** You can apply these styles to any element using the Vuetify CSS class equivalent (e.g., `<span class="text-h3">Title</span>`).
2. **Vuetify Buttons:** The `button` typography token properties (font-size, font-weight, capitalized transform) are automatically bound to the `<VBtn>` component via Vuetify's default compiler.
