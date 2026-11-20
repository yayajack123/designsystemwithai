---
name: table-page-builder
description: Build Nuxt 3 + Vuetify + TypeScript listing pages in compatible repositories using UiTableView, or turn table-page requirements into an implementation prompt. Resolve missing product decisions through a focused interview.
---

# Table Page Builder

## Output and sources

Infer the requested mode: **Implementation** creates/revises the repository page; **Prompt** produces a filled specification without application changes. Ask only if ambiguous. Auditing this skill does not start a page interview.

Use the repository containing the requested page as the target, regardless of its directory or remote name. Resolve project paths below from that repository's root, not from the original microdemy-DS checkout. This skill is intended for repositories with compatible Nuxt, Vuetify, TypeScript, and UiTableView patterns; verify those assumptions before use.

Before interviewing, locate the target repository and read:
1. `agents.md` or `AGENTS.md` and `spec/design.md`; follow required UI skills when implementing.
2. [Intake template](reference/table-page-template.md).
3. `components/ui/UiTableView.vue`, related pages, navigation, reusable components/composables, and existing data contracts.

Component source defines API support; design.md defines tokens; the template collects requirements. If a required component, template, or design source is missing or incompatible, identify the gap and its scope impact. Mark prompt output provisional, and resolve the gap with the user before implementation rather than assuming the original repository's API or adding a replacement silently.

## Visual reference before implementation

Before coding a table page, ask whether the user has a screenshot or Figma link unless already supplied or explicitly declined. Wait for that answer; do not treat silence as declining. Ask for screenshots directly in conversation, not through a text-only input tool. If no reference exists, proceed from agreed requirements and repository patterns.

Inspect supplied screenshots with available image tools. For Figma links, load the applicable Figma skills before their tools (including design-to-code before get_design_context), then inspect the referenced frame and its screenshot/context. If access fails or the target frame is ambiguous, explain the gap and request accessible content or the exact frame; do not claim the reference was read. Extract column grouping, avatar treatment, statuses, filters, actions, and hierarchy, then resolve ambiguities with the user. References guide layout; existing tokens and component contracts still apply. Prompt-only output records reference findings or explicit access limitations without creating UI.

## Focused interview and plan

Extract answers from the brief, conversation, and repository first. Ask only missing product questions in small related rounds; skip inapplicable sections. Derive interfaces, refs, header keys, and slots rather than asking users to design implementation details.

Collect purpose/audience, route/title, columns, filters, actions, optional tabs/views/dialogs, data source, and responsive presentation. Define tab count semantics, whether tabs filter or swap datasets/columns, and filter persistence on tab changes.

For each applicable item below, ask unless the user has already answered explicitly; a screenshot alone does not establish business rules:
- **Column contents:** can one column contain multiple data fields? Confirm the fields, primary/secondary order, and formatting (for example name plus ID/email). Record sorting/search fields separately from visual grouping.
- **People:** for columns representing students, teachers, staff, or other people, ask whether to show photo avatars, initials, or no avatar. For photos, verify the image source and agree a missing/broken-photo fallback; do not invent profile photos.
- **Status:** ask which exact statuses exist and their labels before defining types, badge mappings, fixtures, or filter options. Check any existing API enum and resolve discrepancies rather than inventing statuses.
- **Filters:** ask which filters and search fields are needed. Verify each against available record fields, a documented relation, or supported server parameters and option sources. Surface missing data/support before implementing; agree an alternative or leave it blocked instead of adding a nonfunctional filter. Agreed mock fixtures must include those fields and representative values.
- **Detail action:** ask whether details open in a modal or a separate page. For a modal, create a working VDialog template using existing patterns, selected-record content, open/close behavior, and applicable states. For a separate page, record the intended route and required data but do not create that page in this workflow. Link only to an existing verified destination; otherwise keep the action visibly disabled with explanatory text until the destination exists. Do not create a broken link or empty handler.

Explicitly ask the mobile preference unless already supplied:
- **Scrollable table:** preserves column comparison through horizontal scrolling.
- **Mobile cards:** regroups content/actions using `mobileCards` and an explicit `mobile-cards` slot; define mobile empty, sorting, and pagination behavior.

### Interactive interview panel

Prefer the agent's native question panel over a numbered wall of questions in chat. Discover the available input tools: in Default mode use `request_user_input_async` when available; use `request_user_input` only when permitted by the current mode. If neither is available, fall back to concise conversational questions. Do not switch modes merely to access a tool.

Ask one decision at a time, or at most two closely related questions. Use short Indonesian titles and plain-language options matching the user's language. Offer suggested choices for enumerable decisions, with free text for custom answers. Examples:
- Column contents: "Satu data per kolom" / "Gabungan beberapa data"; if combined, ask which fields and their order next.
- Person avatar: "Foto" / "Inisial" / "Tanpa avatar"; ask photo source/fallback only after choosing photos.
- Detail: "Modal" / "Halaman terpisah".
- Mobile: "Tabel geser" / "Kartu mobile".
- Status labels or filter fields: use a short free-text panel question; do not fabricate options without a confirmed data contract.

For visual references, ask in the panel whether there is a screenshot, Figma link, or no reference. Collect a Figma URL through text input. If screenshot is chosen, request the attachment in chat, since the panel cannot receive files. Do not repeat the reference question if already answered.

An async question returns immediately, not an answer. Keep the required decision pending until the user replies; do independent repository inspection while waiting, but do not implement dependent work or treat the preselected option/time elapsed as consent. Do not send additional rounds before the previous answers arrive. Summarize confirmed choices briefly between rounds only when useful; ask only the remaining applicable questions.

State safe defaults such as 10 desktop rows per page; do not silently decide material layout, integration, or destructive-action behavior.

Summarize scope, files, reuse, data flow, token mapping, assumptions/risks, and validation before implementation, scaled to the change. Warn when a reusable component is missing and explain scope impact. Resolve material decisions before dependent work. A complete brief with mobile already decided does not require another approval round.

## Generate

### Prompt mode

Fill the canonical template, remove inapplicable sections, and record assumptions, repository references, and acceptance criteria. Keep unresolved required decisions as explicit questions and label the prompt provisional. Return Markdown in chat or the requested file path. Do not modify Vue pages or navigation.

### Implementation mode

Write directly to the agreed repository path using project-required editing tools. Preserve unrelated edits. Add navigation only within requested scope and existing route/permission patterns.

- Reuse UiTableView and existing controls/dialogs/utilities and semantic tokens. Inspect the target repository's icon conventions.
- Match listing page titles and actions to the target repository's existing page patterns. Verify heading levels and UiTableView's current API before avoiding duplicate headings; do not change a global header component as part of generating a page.
- Apply client-side filters before table pagination; normalize nullable clearable inputs. Reset relevant filters to declared defaults.
- Compute headers when columns vary. Match item slots exactly to header keys.
- Reuse API/composable contracts for requested integration. Generate fixtures only for an agreed mock/prototype workflow; label them and do not imply persistence or invent endpoints.
- Define ownership of search, filtering, sorting, page, page size, and total for server data. Do not filter one fetched page as if it were the complete dataset.
- Follow the template's **Integration constraints** for overrides. Do not expand the shared component API without scope agreement.
- Implement real action behavior and appropriate pending/disabled/success/error feedback. Icon actions need accessible names; tooltips supplement labels.
- A deferred detail page is an explicit scope exception: document it and use a clearly disabled action when no destination exists; do not silently scaffold the page.
- Loading/empty/error/feedback follow actual data and action flows, rather than optional quality checkboxes.

## Validate and deliver

Apply the template's **Acceptance checklist**. Inspect package.json before choosing checks; avoid repository-wide auto-fix lint for scoped changes. Review mobile/desktop, light/dark, keyboard, and reduced motion when applicable and available. Report checks actually run and blockers; a declared ref alone does not prove a state works.

Prompt-only output needs completeness, path, API, and unresolved-decision review, not an application build. Deliver supported file links, changed files, validation, and limitations; do not assume artifact directories or presentation tools.
