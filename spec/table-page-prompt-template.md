# Prompt Template: Build Table Page with `UiTableView`

> **How to use:** Copy this template, fill in placeholders marked `[PLACEHOLDER]`, delete sections not needed. Feed result as prompt to AI agent.

Canonical template for `table-page-builder`; maintain requirements here rather than copying this document into the skill. Read [project instructions](../agents.md), [design tokens](design.md), and [component source](../components/ui/UiTableView.vue). Component source defines API support; this template collects requirements.

## Output, scope, and responsive decision

- Output: `[Implementation / Prompt only]`. Prompt-only requests must not create Vue pages or navigation changes.
- Purpose, audience, primary task: `[description]`
- Reuse: `[related pages, components, composables, data contracts]`
- Navigation scope: `[existing highlight / requested new entry / none]`
- Assumptions and exclusions: `[scope]`
- Visual reference: `[screenshot / exact Figma frame link / user confirmed none]`. Before implementation, ask whether a reference exists unless already answered; wait for the answer. Request image attachments in conversation. Inspect screenshots with image tools; inspect Figma through applicable Figma skills/tools, loading their prerequisites first. Record extracted layout decisions and access limitations; do not claim inaccessible references were read. Resolve ambiguous frames or requirements before dependent work.
- Mobile presentation, explicitly chosen by user: `[Scrollable table / Mobile cards]`.
  - Scrollable table preserves columns for comparison through horizontal scrolling.
  - Mobile cards regroup content/actions with `mobileCards` and an explicit `#mobile-cards` slot. Specify grouping, action priority, empty state, sorting, and pagination.

Extract existing answers before interviewing. Ask only missing product decisions; derive implementation details. Skip inapplicable sections. Record unresolved required decisions as questions and label the prompt provisional. A complete brief does not need another approval round.

### Interactive intake

Prefer the native agent question panel, one decision or at most two related questions per round. In Default mode use `request_user_input_async` when available; `request_user_input` only where the current mode permits. Fall back to chat if neither exists; do not change modes just for a tool. Use short questions in the user's language, suggested choices for enumerable decisions, and free text for exact statuses, field lists, and URLs. Do not dump the entire checklist into chat.

Examples: column contents (single/multiple fields), avatar (photo/initials/none), detail (modal/separate page), mobile (scrollable/cards). Follow up conditionally after each answer. For references, offer screenshot/Figma/none; collect screenshots in chat and links through text input. Async tool completion, preselected choices, and elapsed time are not user answers: wait for required responses before dependent implementation or another question round, while continuing independent inspection.

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

Match Classes/Course/Students listing titles: semantic `h1` with `text-h4 font-weight-medium text-high-emphasis` (existing h4 token: 24px/38px, medium), description `text-body-1`. UiSectionHeader currently renders text-h5, so use the existing outer-header layout and `UiTableView title=""` for this listing pattern; keep header actions in that outer header. Do not duplicate headings or override global typography. Verify against current source and `design.md` before generation.

---

## 3. Tabs (Optional)

> Delete this section if page has no tabs. Pass empty `tabs` array.

| Tab Label | Value Key | Icon | Badge Count Source |
|---|---|---|---|
| [TAB_1_LABEL] | `[tab_1_value]` | `ri-[icon]-line` | `[count expression or number]` |
| [TAB_2_LABEL] | `[tab_2_value]` | `ri-[icon]-line` | `[count expression or number]` |

- Default active tab: `[tab_1_value]`
- Tab switching swaps dataset AND column set? `[YES / NO]`
- Tab switching only filters same dataset? `[YES / NO]`
- Count semantics and filter/page behavior on tab switch: `[rules]`

---

## 4. Filter Section

> Up to 2 rows of filters. Delete rows not needed.

Ask which filters and search fields the user needs, unless already explicitly specified. Validate each against record fields/relations or supported server parameters; confirm option sources and matching rules. A visible column alone does not prove the underlying filter data exists. If support/data is absent, explain the gap and agree an alternative or mark the filter blocked before implementation. Do not invent API parameters/options. For agreed fixtures, include the required fields and representative values.

| Filter | Record field/relation or server parameter | Options source | Matching rule | Availability evidence |
|---|---|---|---|---|
| [filter] | [path/parameter] | [source] | [rule] | [type/composable/API/fixture reference] |

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

Ask whether each column holds one field or multiple data fields. Record grouped content and priority separately from its header key and sort/search fields. For person entities, explicitly ask photo avatar, initials, or none; if photo, confirm source and missing/broken-image fallback.

| Column | Fields displayed in order | Primary/secondary hierarchy | Sort/search fields | Person avatar choice/source/fallback |
|---|---|---|---|---|
| [column] | [name, ID, email, etc.] | [hierarchy] | [fields] | [photo / initials / none / not applicable] |

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

Before defining status types, badges, fixtures, or status filter options, ask which exact status values and labels exist unless already supplied. Reconcile them with existing API enums. Do not invent common defaults such as active/inactive without agreement. Then map agreed statuses to existing semantic colors.

| Status Value | Badge Color | Variant |
|---|---|---|
| `[STATUS_1]` | `[warning/success/error]` | tonal |
| `[STATUS_2]` | `[warning/success/error]` | tonal |

#### `#item.action`

Reuse documented action patterns from `design.md`. For icon actions, use accessible names and supplementary tooltips. Define actual routes/handlers, visibility/permission conditions, pending/disabled states, and resulting feedback. Do not add an action column unless needed.

##### Structure:
```vue
<template #item.action="{ item }">
  <div class="d-flex justify-center gap-2">
    <VTooltip text="[TOOLTIP_TEXT]" location="top">
      <template #activator="{ props }">
        <VBtn
          v-bind="props"
          aria-label="[ACTION_LABEL]"
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

## 7. Pagination

- Items per page default: `[10]`
- Items per page options: keep the default table options unless custom options are required. Custom options such as `[5, 10, 20]` require an explicitly configured table in `#table-content`; UiTableView does not forward `items-per-page-options`.
- Ownership of search/filter/sort/page/page size/total: `[client / server and contract]`
- Default desktop pagination is handled by VDataTable. Mobile cards and custom views require their own agreed behavior.

---

## 8. Data Structure

- Source: `[agreed mock/prototype / existing API or composable path]`
- Integration contract: `[parameters, response items/total, errors]`
- Record identity: `[key]`
- For server data, use server-compatible search/filter/sort/page handling. Never treat one fetched page as the entire dataset. Do not invent endpoints or imply mock persistence.

```ts
interface [DataTypeName] {
  [field]: [type]  // [description]
  [field]: [type]  // [description]
}
```

### Mock Data (only when agreed)

Render `[N]` rows mock data. Sample names:
- [Name 1], [Name 2], [Name 3]...

Label demo fixtures clearly. Derive the interface from agreed data requirements or reuse existing types.

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

For each detail action, ask **modal or separate page**, unless already answered.

- Modal: create a VDialog template, reusing an existing suitable dialog when available. Include selected-record binding, agreed detail fields, open/close controls, accessible title, and applicable loading/empty/error states. Do not add unrequested editing or mutation features.
- Separate page: record the intended route and required record data, but do not create the detail page yet. Navigate only if that destination already exists and is verified. Otherwise display a disabled detail action with an explanation that its page is pending; never use a broken route or empty handler.

| Detail action | Modal or separate page | Fields/data | Existing destination or deferred route | Implementation in this task |
|---|---|---|---|---|
| [action] | [choice] | [fields] | [route/not applicable] | [modal template / existing link / disabled pending page] |

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
- [ ] Error/retry lifecycle where async data is used
- [ ] Action pending, disabled, success, and failure feedback where applicable
- [ ] Explicit empty state for mobile cards and each custom view
- [ ] [OTHER_STATE]

Define actual lifecycle triggers and copy. A loading ref that never changes does not verify loading behavior. Custom reset disabled state belongs in `#filter-actions`.

---

## 12. UiTableView Quick Reference

This shows the general component API. For the listing-title pattern in **Page Header**, render the outer h1/description/actions and pass `title=""`; omit the internal description/header-actions in that case.

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
| `hideFilters` | Boolean | no | `false` | Also hides view toggle |
| `hidePagination` | Boolean | no | `false` | Hides default footer; pagination still applies |
| `tabsInsideCard` | Boolean | no | `false` | Moves tabs into card |
| `cardClass` | String | no | — | Card classes |
| `tableClass` | String | no | — | Default table classes |
| `flat` | Boolean | no | `false` | Card elevation zero |
| `mobileCards` | Boolean | no | `false` | Requires explicit mobile-cards slot |
| `back` | any | no | — | Passed to UiSectionHeader |

### Models

- `v-model:activeTab`: string, no component default.
- `v-model:viewType`: string, default `list`.

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
| `#card-header` | — | Requires tabsInsideCard and nonempty tabs |
| `#view-toggle` | — | Override default toggle buttons |
| `#table-content` | — | Override entire list view table |
| `#item.[key]` | `{ item }` | Custom column rendering |
| `#no-data` | — | Empty state message |
| `#mobile-cards` | `{ items }` | Explicit mobile content and empty state |
| `#view-[name]` | `{ items }` | Custom view layout (team, room, etc.) |

---

## Integration constraints

- Recheck this API snapshot against component source before generation.
- `title=""` suppresses the section header and header-actions. `hideFilters` hides filters and the view toggle.
- Default view toggle values are list/team/room. Other values require a custom `#view-toggle` and matching `#view-[name]` slots.
- Selection, controlled page/sort models, page-size options, server totals, and arbitrary VDataTable props/events are not forwarded to the inner table. Use `#table-content` with VDataTable or VDataTableServer when needed. Do not expand the wrapper API without scope agreement.
- A replacement table owns its configuration and item/no-data slots; parent slots do not automatically transfer to it.
- At widths up to 760px, mobileCards hides the desktop region even if the mobile slot is absent. Always provide that slot. It receives supplied items without desktop sorting/pagination; the desktop footer is hidden too. Implement the agreed mobile behavior explicitly.
- Custom views also receive supplied items and need their own empty state and sorting/pagination when applicable. `#no-data` handles only the default table's empty state, not mobile/custom views or error/retry.
- `hidePagination` only hides the footer. Use `itemsPerPage: -1` when the default table should show all supplied records.

## Acceptance checklist

- [ ] Page file created at correct path
- [ ] `definePageMeta` set with correct `sidebarRoute`
- [ ] Navigation changed only within agreed scope and existing permission patterns
- [ ] All filter refs declared with correct defaults
- [ ] Computed `headers` switches only where tab columns differ
- [ ] Computed `filteredItems` applies all active filters
- [ ] `resetFilters` handler resets ALL filter refs
- [ ] Agreed mock data or existing integration matches record types and identity
- [ ] Custom column slots match header keys exactly
- [ ] Visual reference question answered; supplied screenshot/Figma inspected or access limitation explicitly resolved before dependent implementation
- [ ] Page title matches listing text-h4 pattern; no duplicate/internal text-h5 title remains
- [ ] Single/multiple fields per column and primary/secondary order confirmed
- [ ] Person avatar choice confirmed; photo source and fallback available where applicable
- [ ] Exact status values/labels confirmed and reconciled with existing data contracts
- [ ] Requested filters/search fields have verified data/parameter and option support
- [ ] Detail modal/page choice confirmed; modal template works, or separate page remains uncreated with verified navigation or clearly disabled action
- [ ] Output mode respected; prompt-only work does not modify application source
- [ ] Material decisions resolved; no unfinished placeholders in an implementation-ready prompt
- [ ] Native question panel used when available; questions delivered in small conditional rounds and required answers actually received
- [ ] Mobile mode explicitly resolved; grouping, empty state, sorting, and pagination match the agreement
- [ ] API/slots verified against source; table overrides own their configuration
- [ ] Filters normalize nullable inputs; reset/tab/count/view behavior verified
- [ ] Client/server ownership and total/page handling coherent
- [ ] Actual loading/empty/error/retry and mutation feedback checked where applicable
- [ ] Actions work or are explicitly disabled for a documented deferred detail page; accessible names, keyboard/focus, touch targets, and responsive layouts checked
- [ ] Existing tokens/components reused; light/dark reviewed; reduced motion checked when motion changes
- [ ] Relevant checks selected from package.json and results recorded; avoid repository-wide auto-fix lint for scoped changes
- [ ] Visual review performed when available; limitations and blockers reported
- [ ] Diff contains only scoped changes; changed files and validation reported

For prompt-only output, validate completeness, paths, API compatibility, and decisions; no application build is required. Mark inapplicable checks explicitly. For implementation, summarize scope, files, reuse, state/data flow, token mapping, risks, and validation before coding; warn about missing reusable components. Deliver links supported by the current environment.
