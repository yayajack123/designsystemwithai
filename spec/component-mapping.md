# Figma to Project Component Mapping

This specification establishes the mapping between Figma design components and the Vuetify/custom components implemented in the project.

## Agent Workflow: Figma-to-Code Execution
When using Figma MCP to read design properties:
1. **Extract design tokens:** Check node's colors, typography style, border-radius, and layer name.
2. **Compare with Project Tokens:**
   - Colors: See [color_spec.md](color_spec.md) (e.g. mapping Figma `#10AF13` to `primary`).
   - Typography: See [typography_spec.md](typography_spec.md) (e.g. mapping body sizes to `text-body-*`).
3. **Select Component:** Look up matching component in mapping table below.
4. **Implement:** Write clean Nuxt code utilizing mapped components and design tokens.

---

## Component Mapping Table

| Figma Component | Vuetify / Project Component | Used on (count of page) | Pages Used In |
| :--- | :--- | :---: | :--- |
| **Card** (Container, Paper) | `VCard` / `VCardText` | 13 | `index.vue`, `user-variant-2.vue`, `reports.vue`, `assessments.vue`, `attendance-detail.vue`, `login.vue`, `dashboard-teacher.vue`, `attendance.vue`, `user.vue`, `classes.vue`, `schedule.vue`, `design-system.vue`, `meeting-journal/create.vue` |
| **Button** (Primary, Secondary, Icon) | `VBtn` | 12 | `user-variant-2.vue`, `reports.vue`, `assessments.vue`, `attendance-detail.vue`, `login.vue`, `dashboard-teacher.vue`, `attendance.vue`, `user.vue`, `classes.vue`, `schedule.vue`, `design-system.vue`, `meeting-journal/create.vue` |
| **Text Field** (Input, Search) | `VTextField` | 12 | `user-variant-2.vue`, `reports.vue`, `assessments.vue`, `attendance-detail.vue`, `login.vue`, `dashboard-teacher.vue`, `attendance.vue`, `user.vue`, `classes.vue`, `schedule.vue`, `design-system.vue`, `meeting-journal/create.vue` |
| **Row Grid** (Horizontal Layout) | `VRow` | 11 | `user-variant-2.vue`, `attendance-detail.vue`, `login.vue`, `dashboard-teacher.vue`, `attendance.vue`, `user.vue`, `classes.vue`, `schedule.vue`, `design-system.vue`, `account-settings.vue`, `meeting-journal/create.vue` |
| **Column Grid** (Vertical Grid) | `VCol` | 11 | `user-variant-2.vue`, `attendance-detail.vue`, `login.vue`, `dashboard-teacher.vue`, `attendance.vue`, `user.vue`, `classes.vue`, `schedule.vue`, `design-system.vue`, `account-settings.vue`, `meeting-journal/create.vue` |
| **Avatar** (User Photo, Initials) | `VAvatar` | 10 | `user-variant-2.vue`, `reports.vue`, `assessments.vue`, `attendance-detail.vue`, `dashboard-teacher.vue`, `attendance.vue`, `user.vue`, `classes.vue`, `design-system.vue`, `meeting-journal/create.vue` |
| **Icon** | `VIcon` | 9 | `user-variant-2.vue`, `reports.vue`, `assessments.vue`, `attendance-detail.vue`, `dashboard-teacher.vue`, `attendance.vue`, `user.vue`, `design-system.vue`, `meeting-journal/create.vue` |
| **Dropdown** (Select) | `VSelect` | 8 | `user-variant-2.vue`, `reports.vue`, `assessments.vue`, `attendance.vue`, `user.vue`, `classes.vue`, `design-system.vue`, `meeting-journal/create.vue` |
| **Chip** (Tag, Status Badge) | `VChip` | 8 | `user-variant-2.vue`, `reports.vue`, `assessments.vue`, `attendance-detail.vue`, `dashboard-teacher.vue`, `attendance.vue`, `classes.vue`, `design-system.vue` |
| **Snackbar** (Toast message) | `VSnackbar` | 8 | `assessments.vue`, `attendance-detail.vue`, `dashboard-teacher.vue`, `attendance.vue`, `classes.vue`, `schedule.vue`, `design-system.vue`, `meeting-journal/create.vue` |
| **Divider** (Separator Line) | `VDivider` | 7 | `user-variant-2.vue`, `reports.vue`, `assessments.vue`, `dashboard-teacher.vue`, `attendance.vue`, `schedule.vue`, `design-system.vue` |
| **Tooltip** | `VTooltip` | 6 | `user-variant-2.vue`, `reports.vue`, `assessments.vue`, `user.vue`, `classes.vue`, `design-system.vue` |
| **Section Title** | `UiSectionHeader` | 5 | `user-variant-2.vue`, `attendance-detail.vue`, `user.vue`, `account-settings.vue`, `meeting-journal/create.vue` |
| **Table** (Custom Query View) | `UiTableView` | 3 | `attendance-detail.vue`, `classes.vue`, `design-system.vue` |
| **Data Table** | `VDataTable` / `VDataTableServer` | 4 | `reports.vue`, `assessments.vue`, `attendance-detail.vue`, `design-system.vue` (VDataTableServer in `user-variant-2.vue`, `user.vue`) |
| **List Group** / **Navigation List** | `VList` / `VListItem` | 4 | `user-variant-2.vue`, `user.vue`, `classes.vue`, `design-system.vue` |
| **Toggle Button Group** | `VBtnToggle` | 4 | `reports.vue`, `assessments.vue`, `schedule.vue`, `design-system.vue` |
| **Tabs** | `VTabs` / `VTab` | 3 | `reports.vue`, `assessments.vue`, `design-system.vue` |
| **Checkbox** | `VCheckbox` | 3 | `dashboard-teacher.vue`, `design-system.vue`, `meeting-journal/create.vue` |
| **Dialog / Modal** | `VDialog` | 3 | `classes.vue`, `schedule.vue`, `meeting-journal/create.vue` |
| **Autocomplete / Search Combobox** | `UiAutoComplete` / `VAutocomplete` | 2 / 1 | `user-variant-2.vue`, `user.vue` (VAutocomplete in `attendance.vue`) |
| **Menu / Popover** | `VMenu` | 2 | `user-variant-2.vue`, `user.vue` |
| **Skeleton Loader** | `VSkeletonLoader` | 2 | `reports.vue`, `assessments.vue` |
| **Expansion Panel / Accordion** | `VExpansionPanels` | 1 | `meeting-journal/create.vue` |
| **Radio Group / Radio Button** | `VRadioGroup` / `VRadio` | 1 | `schedule.vue` |
| **Alert Banner** | `VAlert` | 1 | `design-system.vue` |
| **Text Area** (Multi-line Input) | `VTextarea` | 1 | `meeting-journal/create.vue` |

---

## Detailed Token Application by Component

Below details what specific color and typography tokens are configured on these components within the codebase.

### Layout & Grid (`VRow`, `VCol`)
- **Typography:** None.
- **Colors:** Implicitly inherits `background` (`#FAFAFA` in light theme, `#28243D` in dark theme).

### Cards (`VCard`, `VCardText`, `VCardTitle`, `VCardActions`)
- **Typography:** Titles map to `h6` or `subtitle-1`. Text maps to `body-2` or `body-1`.
- **Colors:**
  - `VCard` default background uses `surface` (`#FFFFFF` light, `#312D4B` dark).
  - Borders/actions use `grey-100` (`#F5F5F5` light, `#2F3349` dark).

### Buttons & Actions (`VBtn`, `VIcon`)
- **Typography:** `VBtn` automatically maps properties of the `button` typography token (15px, medium weight).
- **Colors:**
  - Primary button: `primary` (`#10AF13`). Hover/Pressed states: `primary-darken-1` (`#108513`).
  - Secondary button: `secondary` (`#8A8D93`).
  - Error/Delete button: `error` (`#FF4C51`).
  - Icons: Inherit text colors (`text-primary`, `text-secondary`) or dynamic status colors.

### Forms & Inputs (`VTextField`, `VSelect`, `UiAutoComplete`, `VCheckbox`, `VSwitch`)
- **Typography:** Labels and input values use `body-2` (13px).
- **Colors:**
  - Borders/Bases: Standard Vuetify input border tokens.
  - Active selection color: `primary` (`#10AF13`).

### Lists & Navigation (`VList`, `VListItem`, `VListItemTitle`, `VListItemSubtitle`)
- **Typography:** `VListItemTitle` uses `body-1` (15px). `VListItemSubtitle` uses `body-2` (13px) or `caption` (13px with wider spacing).
- **Colors:** Active list item uses `primary` text/bg overlay. Muted list items use `text-secondary` or `disabled` color.

### Tables & Data Representation (`UiTableView`, `VDataTable`, `VDataTableServer`)
- **Typography:** Table headers use `subtitle-2` or `overline`. Cell text uses `body-2`.
- **Colors:** Row borders use `grey-100`. Alternate rows or hover states use `grey-50` (`#FAFAFA` light, `#2A2E42` dark).
