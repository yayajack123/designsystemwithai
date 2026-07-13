---
name: table-page-builder
description: Generate a Nuxt 3 + Vuetify + TypeScript page built on the UiTableView component (microdemy-DS / project table pages) by interviewing the user section-by-section using the bundled prompt template. Use this skill whenever the user asks to build, scaffold, or generate a new table/list/data-table page, an admin listing page, a report page, or any page described as "using UiTableView", "table view page", or similar — even if they only give a vague page name and no other details. Also use this skill if the user asks to turn a page idea into a structured build prompt for an AI coding agent (e.g. Claude Code) for a table-based page. Trigger on phrases like "new table page", "add a page with UiTableView", "generate a listing page", "build a report/dashboard table page", or when the user references microdemy-DS/Nuxt/Vuetify table pages.
---

# Table Page Builder (UiTableView)

Generates a table-based page for the user's Nuxt 3 + Vuetify + TypeScript project, built on the project's shared `UiTableView` component. The bundled reference file (`references/table-page-template.md`) is the source of truth for every field the page needs — it's the user's own prompt-template documentation for this component, extracted from their codebase conventions.

**Do not skip straight to writing code.** The whole point of this skill is to interview the user first, section by section, mirroring the structure of the template, so the generated page actually matches what they want instead of guessing.

## Workflow

### Step 1 — Load the template
Read `references/table-page-template.md` in full before asking anything. It defines every placeholder (`[PAGE_NAME]`, `[SIDEBAR_ROUTE]`, tabs, filters, headers, slots, etc.) and the final `UiTableView` usage contract (props/events/slots). Treat its "Props / Events / Slots" reference tables as ground truth for what's valid to generate — don't invent props that aren't listed there.

### Step 2 — Interview the user, section by section

Go through the template's numbered sections in order and collect answers for every placeholder. Don't dump all 12 sections as one giant wall of questions — group them into a handful of conversational rounds so it doesn't feel like a form:

1. **Page basics** (Section 1–2): page name, sidebar route, file path, title, description.
2. **Tabs** (Section 3): does the page need tabs at all? If yes, tab labels/values/icons, whether switching tabs swaps the dataset+columns or just filters the same dataset.
3. **Filters & view toggle** (Section 4–5): what filters are needed (search + selects), and whether a view toggle (list/grid/other) is needed beyond the default list view.
4. **Table columns & data** (Section 6, 8): column list per tab (title, key, sortable, align, width, whether it needs a custom slot), the status badge mapping if there's a status column, and the action-button behavior per row condition. Also get the data shape (TS interface fields) and how many mock rows to generate.
5. **Extras** (Section 9–11): custom view slots (if a toggle was requested), any dialogs triggered from row actions, and which states to handle (loading/empty/filtered).

Use `ask_user_input_v0` for genuinely short, enumerable choices (yes/no on tabs, yes/no on view toggle, items-per-page default, which states to handle). For open-ended things like column lists, filter names, or data shape, just ask directly in prose — those aren't good fits for tappable buttons.

**Don't ask about things you can reasonably default.** If the user doesn't care about a field (e.g. items-per-page default, pagination options), use the template's own defaults (`10` / `[5, 10, 20]`) rather than interrupting the flow — state the assumption instead of asking.

**Skip sections that don't apply.** If the user says "no tabs," skip straight past tab-specific follow-ups (like per-tab header sets) and just build one column set.

### Step 3 — Confirm before generating

Once every required section (2, 3, 4, 6, 7, 8 are required per the template; 5, 9, 10 are conditional) has an answer, give the user a short recap of what you're about to build (page title, tabs, columns, filters) and confirm before writing code — especially if any assumption was made silently in Step 2.

### Step 4 — Generate the page

Write the actual `.vue` file (not just the filled-in markdown template) at `pages/[PAGE_FILE_NAME].vue`, following the template's Section 12 `UiTableView` usage contract exactly:

- Import and use `UiTableView` from `@/components/ui/UiTableView.vue`.
- Use only existing design system tokens/components — no new hex values, font sizes, or one-off styles. If the user hasn't shared their design tokens/spacing scale in this conversation, ask for (or look for) the relevant SCSS/theme file rather than inventing values.
- Build `headers` as a computed that switches per active tab if multi-tab.
- Build `filteredItems` as a computed applying all active filters.
- Wire `reset-filters` to a handler that resets every filter ref.
- Generate mock data matching the declared TS interface, with the requested row count.
- Implement every column marked "Custom Slot: yes" as a named `#item.[key]` template, matching header keys exactly.
- Handle the states the user selected in Step 2 (loading skeleton via `:loading`, empty search result, empty tab, filter-applied reset state) via the `#no-data` slot and a `loading` ref.
- Icons: Remix Icon (`ri-*-line`) unless the user's project uses Tabler Icons — check prior context/memory for which icon set this project uses before picking one.

Run through the template's "Before You Start Checklist" (Section 11 of the template) against the generated file before presenting it — treat any unchecked item as a bug to fix, not a note to leave for later.

### Step 5 — Deliver

Save the file under `/mnt/user-data/outputs/` (mirroring the intended `pages/...` path in the filename or a comment at the top noting the real destination), and present it with `present_files`. If the user's actual codebase is available (e.g. via an uploaded project or repo access), write directly into the correct `pages/` path instead.

## Notes on style

This user typically wants build prompts/code that:
- Mirrors component/layer naming exactly (no renaming keys or props to "cleaner" names).
- Cites the root cause when something in the request conflicts with the template's contract, rather than silently deviating.
- Stays tightly scoped to what was asked — don't add extra columns, filters, or views the user didn't request "for completeness."
- Reuses existing design-system tokens/components only.
