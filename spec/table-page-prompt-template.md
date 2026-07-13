# Prompt Template: Build Table Page with `UiTableView`

> **How to use:** Copy this template, fill in placeholders marked `[PLACEHOLDER]`, delete sections not needed. Feed result as prompt to AI agent.

---

## Context

Build **[PAGE_NAME]** page for microdemy-DS. Page lives inside existing app shell (sidebar + topbar already built). Route/highlight `[SIDEBAR_ROUTE]` nav item as active.

**Stack:** Nuxt 3 + Vuetify + TypeScript.
**MUST** use `UiTableView` component from `@/components/ui/UiTableView.vue`.
**MUST** use existing design system tokens and components only. No new hex values, font sizes, or one-off styles.

---

## 1. Page Setup

```vue
definePageMeta({
  sidebarRoute: '[SIDEBAR_ROUTE]',
})
```

- File location: `pages/[PAGE_FILE_NAME].vue`

---

## 2. Page Header (Required)

| Field | Value |
|---|---|
| Title | `[PAGE_TITLE]` |
| Description | `[PAGE_DESCRIPTION]` or remove if not needed |

---

## 3. Tabs (Required)

> Delete this section if page has no tabs. Pass empty `tabs` array.

| Tab Label | Value Key | Icon | Badge Count Source |
|---|---|---|---|
| [TAB_1_LABEL] | `[tab_1_value]` | `ri-[icon]-line` | `[count expression or number]` |
| [TAB_2_LABEL] | `[tab_2_value]` | `ri-[icon]-line` | `[count expression or number]` |

- Default active tab: `[tab_1_value]`
- Tab switching swaps dataset AND column set? `[YES / NO]`
- Tab switching only filters same dataset? `[YES / NO]`

---

## 4. Filter Section

> Up to 2 rows of filters. Delete rows not needed.

### Row 1

| Filter | Type | Placeholder / Label | Width | Options Source |
|---|---|---|---|---|
| Search | `VTextField` | `[placeholder text]` | 240px | — |
| [FILTER_2_NAME] | `VSelect` | `[label]` | 240px | `[options array or computed]` |

### Row 2 (optional, conditional)

| Filter | Type | Condition | Placeholder / Label | Width | Options Source |
|---|---|---|---|---|---|
| [FILTER_3_NAME] | `VSelect` | `v-if="activeTab === '[tab_value]'"` | `[label]` | 240px | `[options array]` |

### Reset Filter
- Emit `@reset-filters` to clear all filter state back to defaults.

---

## 5. View Toggle (Optional)

> Delete this section if not needed. Set `:show-view-toggle="false"` (default).

- Enable: `:show-view-toggle="true"`
- Views available:

| View | Icon | Description |
|---|---|---|
| list | `ri-list-unordered` | Standard `VDataTable` |
| [VIEW_2] | `ri-[icon]-line` | [describe layout] |
| [VIEW_3] | `ri-[icon]-line` | [describe layout] |

---

## 6. Data Table (Required)

### Headers per Tab

**Tab: `[tab_1_value]`**

| Column Title | Key | Sortable | Align | Width | Custom Slot? |
|---|---|---|---|---|---|
| [COL_1] | `[key]` | yes | start | auto | yes/no |
| [COL_2] | `[key]` | yes | start | auto | yes/no |
| Action | `action` | no | center | 120px | yes |

**Tab: `[tab_2_value]`** (if different columns)

| Column Title | Key | Sortable | Align | Width | Custom Slot? |
|---|---|---|---|---|---|
| [COL_1] | `[key]` | yes | start | auto | yes/no |
| Action | `action` | no | center | 120px | yes |

### Custom Column Slots

> Define rendering for columns marked "Custom Slot? yes" above.

#### `#item.[KEY]`

```
[Describe what renders here]
Example: Avatar (initials) + name (bold) + ID (muted text below)
```

#### `#item.status`

| Status Value | Badge Color | Variant |
|---|---|---|
| `[STATUS_1]` | `[warning/success/error]` | tonal |
| `[STATUS_2]` | `[warning/success/error]` | tonal |

#### `#item.action`

Always wrap action buttons in `<VTooltip>` with `location="top"`. Use the custom `.action-btn` class with `variant="outlined"`, `size="small"`, and `color="secondary"` (or appropriate status color).

##### Structure:
```vue
<template #item.action="{ item }">
  <div class="d-flex justify-center gap-2">
    <VTooltip text="[TOOLTIP_TEXT]" location="top">
      <template #activator="{ props }">
        <VBtn
          v-bind="props"
          icon="ri-[icon]-line"
          variant="outlined"
          size="small"
          color="[secondary/primary/success/error]"
          class="action-btn"
          @click="[handler](item)"
        />
      </template>
    </VTooltip>
  </div>
</template>
```

##### Style (add to `<style lang="scss" scoped>`):
```scss
.action-btn {
  border-color: rgba(var(--v-theme-on-surface), 0.08) !important;
  border-radius: 4px;

  &:hover {
    background-color: rgba(var(--v-theme-on-surface), 0.04);
  }
}
```

---

## 7. Pagination (Required)

- Items per page default: `[10]`
- Items per page options: `[5, 10, 20]`
- Handled automatically by `VDataTable` inside `UiTableView`.

---

## 8. Data Structure

```ts
interface [DataTypeName] {
  [field]: [type]  // [description]
  [field]: [type]  // [description]
}
```

### Mock Data

Render `[N]` rows mock data. Sample names:
- [Name 1], [Name 2], [Name 3]...

---

## 9. Custom View Slots (if view toggle enabled)

> Only fill if `showViewToggle` is true and custom views exist.

### `#view-[VIEW_NAME]`

```
[Describe layout]
Example: Card grid, 3 columns, each card shows avatar + name + book title.
Accordion grouped by student with expand/collapse.
```

---

## 10. Dialogs (Optional)

> List any confirmation/action dialogs triggered from table actions.

| Dialog | Trigger | Component |
|---|---|---|
| [DIALOG_NAME] | [button click] | `[ComponentName]Dialog` or inline `VDialog` |

---

## 11. States to Handle

- [ ] Loading state (skeleton via `:loading="true"`)
- [ ] Empty search result (no matching data)
- [ ] Empty tab (no data at all)
- [ ] Filter applied state (reset button enabled)
- [ ] [OTHER_STATE]

---

## 12. UiTableView Quick Reference

```vue
<UiTableView
  title="[TITLE]"
  description="[DESC]"
  :tabs="[TABS_ARRAY]"
  v-model:activeTab="[ACTIVE_TAB_REF]"
  v-model:viewType="[VIEW_TYPE_REF]"
  :headers="[HEADERS_COMPUTED]"
  :items="[FILTERED_ITEMS_COMPUTED]"
  :show-view-toggle="[true/false]"
  :loading="[LOADING_REF]"
  :items-per-page="[10]"
  @reset-filters="[RESET_HANDLER]"
>
  <template #filters> ... </template>
  <template #filter-actions> ... </template>
  <template #header-actions> ... </template>
  <template #item.[KEY]="{ item }"> ... </template>
  <template #view-[NAME]="{ items }"> ... </template>
  <template #no-data> ... </template>
</UiTableView>
```

### Props

| Prop | Type | Required | Default | Note |
|---|---|---|---|---|
| `title` | String | yes | — | Page heading |
| `description` | String | no | — | Subtitle text |
| `tabs` | `TabItem[]` | no | `[]` | `{ label, value, count?, icon?, badgeColor? }` |
| `headers` | Array | no | `[]` | Vuetify `VDataTable` headers |
| `items` | Array | no | `[]` | Filtered data array |
| `loading` | Boolean | no | `false` | Show skeleton loader |
| `itemsPerPage` | Number | no | `10` | Default rows per page |
| `showViewToggle` | Boolean | no | `false` | Show list/team/room toggle |
| `back` | RouteLocation | no | — | Back button route |

### Events

| Event | Payload | Note |
|---|---|---|
| `reset-filters` | — | Parent resets all filter refs |

### Slots

| Slot | Scope | Purpose |
|---|---|---|
| `#filters` | — | Filter inputs (VTextField, VSelect, etc.) |
| `#filter-actions` | — | Override reset button |
| `#header-actions` | — | Right side of page header |
| `#view-toggle` | — | Override default toggle buttons |
| `#table-content` | — | Override entire list view table |
| `#item.[key]` | `{ item }` | Custom column rendering |
| `#no-data` | — | Empty state message |
| `#view-[name]` | `{ items }` | Custom view layout (team, room, etc.) |

---

## Before You Start Checklist

- [ ] Page file created at correct path
- [ ] `definePageMeta` set with correct `sidebarRoute`
- [ ] Navigation entry added (if new page)
- [ ] All filter refs declared with correct defaults
- [ ] Computed `headers` switches per active tab (if multi-tab)
- [ ] Computed `filteredItems` applies all active filters
- [ ] `resetFilters` handler resets ALL filter refs
- [ ] Mock data matches interface shape
- [ ] Custom column slots match header keys exactly
