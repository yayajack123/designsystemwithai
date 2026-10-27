# Design System Specification

This document is the central reference for the project's typography tokens, color and theme tokens, and mapping between Figma design components and the Vuetify/custom components implemented in the project.

## 1. Overview

Use this specification as the single source of truth when translating Figma designs into Nuxt/Vuetify code. It covers:

- Typography tokens and their Vuetify utility classes.
- Primitive color palettes, opacity tokens, and active light/dark theme colors.
- Figma-to-project component mappings and component-level token usage.

The source values are based on the project's Vuetify configuration, including `@core/scss/template/libs/vuetify/_variables.scss` and [theme.ts](../plugins/vuetify/theme.ts).

## 2. Typography Specification

This section details the typography tokens configured for this project, based on the variables declared in `@core/scss/template/libs/vuetify/_variables.scss`.

### Base Font Family

- **Font Family:** `"Poppins", sans-serif` (with system-specific fallbacks)

### Typography Tokens Table

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

\*Line-height for button token is configured separately via `$button-line-height`.

### Usage in Vuetify Components

- Marketing builder side panels use a desktop-only compact scale at widths of 960px and above: section headings and element samples 13px/18px, body/input/button text 12px/18px, helper captions 11px/16px, and floating field labels approximately 10px after Vuetify scaling. Retain Poppins and semantic theme colors. Element insertion tiles are 64px high with 4px internal gaps; Elements/Layers/Styles/Variables sections keep 16px spacing, while property sections use 16px block spacing and 8px field gaps. The desktop properties inspector uses 30px fields with persistent labels beside controls; mobile retains Vuetify's normal compact field height. Scope this exception to the builder panels; canvas artwork and mobile typography retain their existing sizes.

Vuetify applies these typography settings automatically across components:

1. **Tags / Classes:** You can apply these styles to any element using the Vuetify CSS class equivalent (e.g., `<span class="text-h3">Title</span>`).
2. **Vuetify Buttons:** The `button` typography token properties (font-size, font-weight, capitalized transform) are automatically bound to the `<VBtn>` component via Vuetify's default compiler.

### Eyebrow / Overline Usage

- Use eyebrow or overline text above a main title only when it communicates real context, such as category, scope, status, or hierarchy.
- Do not add eyebrow text as decorative filler. Avoid redundant stacks where the eyebrow, title, and subtitle repeat the same message.
- Keep eyebrow copy short, specific, sentence case, and visually subordinate to the main title.
- Do not use arbitrary numbering, generic labels, or interchangeable phrases unless they communicate meaningful product context.

### Avoiding AI-Generated Visual Patterns

- Design must feel intentional and grounded in the product context, not assembled from generic AI patterns.
- Avoid decorative gradients, excessive badges, repeated rounded cards, arbitrary icons, unnecessary overlines, and vague or inflated copy.
- Every decorative element must support hierarchy, meaning, interaction, or accessibility. Remove decoration that adds no information.
- Choose one distinctive visual signature per page and keep the surrounding layout disciplined.

## 3. Color Specification

This section details the color tokens, primitive palettes, opacity levels, and active light/dark Vuetify theme colors configured in [theme.ts](../plugins/vuetify/theme.ts).

### Brand Primary Colors

The starter uses green as its default brand. Each deployment can set `NUXT_PUBLIC_BRAND_PRIMARY`; the application derives light and dark variants. `on-primary` stays white in both themes, including filled primary buttons, as required by the product. Use semantic `primary` tokens in components so each deployment receives its brand automatically.

| Brand Color Token | Default Hex Value | Description / Typical Use Case |
| :--- | :--- | :--- |
| `primary-light` | `#43E545` | Lighter brand tint, derived from deployment primary |
| `primary` / `primary-main` | `#10AF13` | Main brand color, active selections, primary indicators |
| `primary-dark` / `primary-darken-1` | `#108513` | Hover and active button states, derived from deployment primary |
| `on-primary` | `#FFFFFF` | White foreground on primary surfaces and filled primary buttons |

Legacy numbered shades remain in the default green palette for the design-system showcase. Product components should use semantic brand tokens instead. See the root [README](../README.md) and [.env.example](../.env.example) for per-deployment branding setup.

### Reference & Opacity Tokens

These tokens use transparency (alpha channels) on the configured primary brand color. They are used for state overlays, backdrop effects, and subtle highlights.

| Token Name | Hex Code (with Alpha) | Equivalent Opacity | Description / Typical Use Case |
| :--- | :--- | :--- | :--- |
| `primary-opacity-lighter` | `#10AF1314` | `8%` | Very subtle hover overlays |
| `primary-opacity-light` | `#10AF1329` | `16%` | Focus states, selection indicators |
| `primary-opacity-main` | `#10AF133D` | `24%` | Active selection backgrounds |
| `primary-opacity-dark` | `#10AF1352` | `32%` | High contrast selection states |
| `primary-opacity-darker` | `#10AF1361` | `38%` | Strongest transparent brand overlay |

### Vuetify Light Theme Colors

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

### Vuetify Dark Theme Colors

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
| `on-surface` | `#E7E3FC` | Text/icon color placed on top of `surface` elements |
| `track-bg` | `#474360` | Dark mode progress track |
| `chat-bg` | `#373452` | Dark mode chat bubble container |

### Grey Palette Specification

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

## 4. Figma-to-Project Component Mapping

### Student session and meeting history

- Marketing page visual work prioritizes desktop. Keep existing responsive fallbacks, but mobile and dark-mode visual review are not required for the current marketing form work, per the user's scope.
- Marketing builder follows the prototype’s three-panel workspace with Vuetify columns 3/6/3: elements/layers/variables left, canvas center, and persistent canvas/element properties right. Panels use 16px horizontal padding, element tiles use the existing 8px radius, and toolbar actions include sidebar, preview, flexible height, fullscreen, JSON/CKEditor HTML import/export, undo/redo, and zoom. Keep Mobile/A4 preview toggles visible. While dragging an editable block, show primary-color vertical and horizontal center guides when its center aligns within 4px of the corresponding canvas center; guides do not snap or change block geometry. Mobile canvas defaults to 390 × 400px with a selectable fixed-height or fit-content mode; A4 remains fixed at 390 × 551px. Variable controls place insertion first, built-in variables in a tonal `VAlert`, and the custom-variable action after the alert. It retains vertically stacked layer actions with 12px gaps, and custom-variable fields separated by 20px. Preview format toggles reuse Assessment's `VBtnToggle` icon pattern: 36px icon buttons, 4px button radius, 7px group padding, 8px group radius, and 50px group height. Selected state uses an 8% on-surface tint instead of a filled primary button. Smartphone/paper icons have accessible labels and tooltips. Shared scoped styles live in `assets/styles/marketing-preview-toggle.css`. This grouped-control treatment follows the Assessment reference; standalone buttons retain pill corners. Read-only preview centers its 390px canvas with 24px surrounding padding and local scrolling when space is insufficient.

- Marketing template steps follow PRD B2–B4/B7: searchable multi-course `VAutocomplete`; built-in variables read from profiles and all custom definitions managed in the builder appear in the branch-by-variable `UiTableView`/`VDataTable` matrix, whether or not their placeholders are already used in canvas content. The matrix scrolls horizontally and includes a default-values row. Empty branch fields display fallback hints, including zero as a valid value. Preview uses the shared `MarketingCanvas` renderer in read-only Mobile/A4 modes and resolves values with the snapshot resolver. `VDialog` handles TEST simulation and activation warnings. Default templates hide campaign filters, dates, and priority. Use existing surface/semantic colors, Poppins utility typography, 24px form gutters, and outlined secondary versus flat primary actions. Branch WhatsApp requires profile data and is explicitly unavailable in the local demo; no production sending is implied.

- Marketing template read-only details open in a temporary right-side `VNavigationDrawer` with a fixed desktop width and full-viewport width on mobile. `VTabs` group Overview, Audience, Design, and Variables; keep one divider above the tab row and do not add a second divider directly below it. Design reuses `MarketingPreviewDocument`, and the other tabs show saved campaign filters, block properties, variable defaults, and branch overrides. The format selector shares the pill-shaped `VBtnToggle` styling with Step 4 through `assets/styles/marketing-preview-segment.css`. Keep the drawer read-only, responsive, and on the existing semantic theme and typography tokens.

- Marketing template forms group information, audience, and selection priority with `VRow`/`VCol` (3-column explanation, 9-column fields on desktop; stacked on mobile) and 24px section dividers. `AppStepper` supports an optional `layout="centered"`, matching Figma `2143:7737`: 20px indicators above centered `text-body-1` medium labels, a 16px gap, and 3px connectors. Completed steps reuse the existing 20px check asset; active rings use `primary` on `surface`, pending indicators and connectors use the existing 16% primary opacity. The default layout stays unchanged; marketing uses the centered layout on desktop and retains the mobile progress bar. Footer actions use an explicit flat `primary` Continue/Activate button and outlined `secondary` Back/Save draft buttons. Supporting form actions also use outlined `secondary`. No new typography, color tokens, or animation are introduced.

- Marketing Template CMS uses `UiSectionHeader`, `UiTableView`, Vuetify form controls, `VCard`, `VChip`, and `AppStepper`. The template list keeps its desktop table and uses horizontal scrolling on narrow screens. Its columns are Name, Status, Period, Filters, Priority, Last modified, and Actions; name metadata shows element and custom-variable counts, while audience criteria use wrapping filter chips. Rows grow with wrapped content and retain a 68px minimum height. Default templates use a compact success-tonal badge, and action icons reuse Assessments' `.action-btn` outline (8% on-surface border, 4px radius, 4% on-surface hover) inside the existing `VBtn` and `VMenu` components. `MarketingBuilder` is a dedicated reusable editor because the existing `TiptapEditor` supports rich text only; it owns the 390px page canvas, layer/property panels, variable controls, undo/redo, and A4/mobile preview. Use existing Poppins typography and semantic `primary`, `surface`, `background`, `success`, `warning`, `error`, `info`, and `secondary` colors. The builder is the visual signature: live page preview stays beside the editing tools.
- Template status counts follow Figma node `5:103267` in one `VCard`: four evenly divided metrics with a muted label, prominent number, concise context, and a neutral square icon tile. Keep 20px outer card padding and 24px horizontal inset on both sides of each desktop divider so icons and labels do not touch separators. At tablet widths use 12px horizontal and 16px vertical cell padding in a 2×2 grid; below 600px, stack metrics with 12px vertical spacing and horizontal dividers to preserve readable text. Use the existing `grey-100` tile, `elevation="4"`, semantic text/surface colors, and token-based dividers. Keep one shared card rather than separate metric cards or colored rails.

- Marketing artwork demos use static assets in `public/marketing/demo/` and stable template IDs. Add missing demo templates as Draft without replacing saved templates. Preserve artwork aspect ratios at the 390px canvas width; initialize fit-content height when an existing design exceeds 400px. Image-based CTAs use a named, transparent button layer above the artwork, retaining an accessible link name and focus outline without duplicating the artwork's printed label.
- `MarketingElementProperties` keeps all applicable controls visible in compact, divider-separated sections matching the live Content Marketing inspector: Name, Data attributes, Position & size, Appearance, then element-specific content/typography and remaining layout controls. Use full-width section dividers, side labels, two-column X/Y and W/H controls, inline radius/border controls, color swatches resolved through `marketingColor`, and an opacity slider with a percentage readout. Pair related fields with grids or `VRow`/`VCol`; retain `VTextField`, `VSelect`, `VCombobox`, `VSlider`, `VDivider`, and bundled Remix Icon controls. Poppins UI typography and semantic surface/border tokens remain unchanged. Desktop properties scroll independently; its image thumbnail is capped at 112px high while the main canvas retains the full preview. Artwork colors (theme tokens or hex), system font choices, corner radii, and padding are editable document data, not new theme tokens. The documented `primary-opacity-lighter` token represents the default shape tint.
- Optional `MarketingBlock` style/name/attribute/icon/link-target fields are normalized through `utils/marketingBlock.ts`. Legacy blocks retain their existing defaults. All property edits use builder history and saved snapshots. Only validated `data-*` attributes are emitted; `data-cms*` names are reserved. Bundled Iconify names accept colon or hyphen notation, with an error for unavailable icons.
- `MarketingColorField` is the shared inspector color control for Fill, Border, Text color, and Text stroke. A single aligned row contains the swatch, value, and Remix chevron. Its `VMenu` offers Library and Custom tabs: Library stores the semantic token name; Custom uses `VColorPicker` with alpha and a validated HEX field, applied explicitly as one property change. Keep the menu on semantic surface/text/border tokens and the inspector's 30px desktop field height; mobile controls retain 40px height.
- Inspector content textareas use 8px vertical and 10px horizontal padding with auto-grow; dropdown affixes align centrally within the field. Horizontal and vertical element alignment use divided `VBtnGroup` controls with 36px icon buttons, token-based borders, and a 6px group radius. Keep alignment labels on one line.
- Inspector `VSelect` dropdowns match `MarketingColorField`: 8px horizontal inset, 8px content-to-chevron gap, and a centered 16px `ri-arrow-down-s-line` icon.
- The Step 2 A4 overflow warning uses content-height `VAlert` sizing (`flex: 0 0 auto`) with top-aligned content. The editor footprint reserves the scaled overflow content height before the warning, preserving the 551px A4 canvas boundary and saved element coordinates.
- Override Vuetify's actual `.v-field--appended` right padding in inspector dropdowns to 8px; changing only input padding variables does not move the chevron. Inspector textareas disable Vuetify's top gradient mask so the first text line stays fully visible with the custom padding.
- `MarketingCanvas` is the shared positioned renderer for the builder, Step 4, and public journal snapshots. Public rendering uniformly scales the 390px canvas and preserves layer order; it never converts absolute blocks into a vertical flow. Only the public interactive mode navigates button links. Selection outlines/resize handles live above the artwork independently of its layer order and opacity. A4 printing clips at 551px; mobile/public content remains full height. HTML export uses the same normalized style utilities, current project theme values, loaded Poppins stylesheet, and bundled icon masks; JSON preserves every block property.

- Meeting journal view-only follows Figma node `1113:4382`: teacher/update strip; lesson cards with 16px header padding, 24/38 score, and separate objective accordion; 24px detail grid with project/media left and AI notes right; live report below. Cards/fields use 12px radius, divider opacity 12%, local list gaps 20px, and existing semantic surfaces. Preserve all snapshot fields and view-only behavior. Full token mapping and deliberate differences are documented in [the implementation plan](../plan/meeting-journal-view-only-figma.md).

- Reports' View action opens `/meeting-journal/:journalId`, reusing the meeting journal detail view with the saved browser-local demo snapshot. It restores storage before showing missing-data feedback, returns to Reports, and exposes no edit/send controls. Failed rows retain Retry into the create/review flow. Existing student-history detail routes retain their mock meeting data. Internal detail may show saved video evidence; the parent-facing report still excludes video.

- Teacher Notes uses an 8% primary tint, a subtle 1px border at 16% primary opacity, and a tonal note icon to distinguish the teacher's narrative from lesson data. Documentation columns are capped at 224px including gutters, yielding thumbnails up to 200px wide while retaining three columns on narrow layouts. Square previews use the numeric `:aspect-ratio="1"` prop.

- Report lesson headers use compact `text-body-2` progress text with a check icon and semantic primary for `100% Complete`, or a clock icon and medium emphasis for incomplete progress. Score is inline as `Score: 85/100`. This replaces circular and horizontal progress indicators in the report. The metadata wraps on narrow screens; objectives have no extra progress row.

- Report presentation takes its hierarchy from the Daily Journal prototype: semantic `primary`/`on-primary` header, student name in `text-h4`, report code, two-column session facts on `surface`, and sequential lesson markers using tonal `VAvatar`. Each lesson keeps its original score and places objectives before its labeled progress bar. Teacher Notes, a three-column documentation row, and a teacher footer complete the shared preview. Use `VRow`/`VCol` for responsive facts and photos; no promotional sections or new tokens are introduced.

- Journal media uses matched outlined preview boxes. Photo thumbnails stay inside the upload box in three equal columns, with independently labeled remove buttons; only the empty state and upload action open the picker. Video keeps format/size in its caption and channel guidance in the empty preview. Compact `VAlert` errors retain the shared alert icon and use `text-body-2` title/body. Inside a flex column, errors use `flex: 0 0 auto` and top-aligned content so they stay at their content height. The shared report emphasizes the student with `text-h4`, lesson headings with `text-body-1`, separate score/progress labels and `VProgressLinear`, and Teacher Notes on a 6% semantic primary surface. No new tokens or animation are added.

- Daily Journal v2 preserves the create page's circular stepper banner, form card placement, Poppins tokens and grid spacing. ENERGY 1 / RHYTHM 1 / MOTION 1: the existing step progress remains the visual signature, with no decorative motion.
- Media uses two `VBtn` controls in an accessible group for Photo and Video mode, with token-based selected styling and the existing Remix icons. The selected mode controls the upload fields, validation, and WhatsApp preview; photos and video remain in local form state while switching modes. Photo mode requires one photo; Video mode requires one video and allows optional photos. Drafts may remain incomplete. Native labeled file inputs and `VProgressLinear` handle simulated processing. Video appears only in the WhatsApp demo; `MeetingJournalReportPreview` renders photos and AI-produced Teacher Notes for Parents, with percentage progress and unchanged score format.
- Delivery status uses `VChip`: `info` for Sending, `success` for Sent and Sent (Manual), `error` for Failed. Retry is explicit. Reports and attendance keep horizontally scrollable tables on mobile.
- `/daily-journal/:id` uses the blank layout and the shared report preview. Demo records persist in local browser storage; shared URLs require the same browser. No production sharing, PDF generation, media compression, or message delivery is implied.

- Session detail uses `VTabs` for Information and Session history. Its information layout uses `VRow`/`VCol` and `VCard`; session history uses `UiTableView` with `mobileCards` and an explicit mobile slot.
- Book history uses `VTabs` for Learning progress, Meeting history, and Report. Learning chapters and lesson objectives use `VExpansionPanels`. Meeting and report lists use `UiTableView` with explicit mobile cards.
- Meeting journal uses `VCard`, `VExpansionPanels`, and an HTML `MeetingJournalReportPreview`. The preview uses the same journal data as the detail view and semantic theme colors, including `surface`, `on-surface`, `primary`, `success`, and `secondary`.
- These pages use Poppins via existing typography tokens (`text-h5`, `text-h6`, `text-body-1`, `text-body-2`), 24px Vuetify grid gutters, and pill shaped `VBtn` actions. No new color or typography tokens are introduced.

This section establishes the mapping between Figma design components and the Vuetify/custom components implemented in the project.

### Agent Workflow: Figma-to-Code Execution

When using Figma MCP to read design properties:

1. **Extract design tokens:** Check node's colors, typography style, border-radius, and layer name.
2. **Compare with Project Tokens:**
   - Colors: See [Color Specification](#3-color-specification) (e.g. mapping Figma `#10AF13` to `primary`).
   - Typography: See [Typography Specification](#2-typography-specification) (e.g. mapping body sizes to `text-body-*`).
3. **Select Component:** Look up matching component in mapping table below.
4. **Implement:** Write clean Nuxt code utilizing mapped components and design tokens.

### Component Mapping Table

#### Marketing design builder

- Meeting journal Step 2 and view-only details render `MarketingJournalPage` after the report using `journalMarketingPreview`. New demo journals and legacy `default-indonesia` previews show the Surabaya campaign with the student's name and preserved branch values. New journals save the displayed campaign snapshot; existing snapshots are not rewritten by previewing. Snapshots of other campaigns remain unchanged.

- The explicitly refreshed public demo `class-1-student-s1` upgrades its legacy `default-indonesia` marketing snapshot once to the active Surabaya Indonesia default on opening. Preserve its resolved student/branch values and all journal fields. Other records and snapshots retain the normal immutable snapshot behavior; later campaign edits do not refresh this demo again.

- `MarketingPreviewDocument` fits the complete campaign, including its bottom base margin, uniformly within the 390×551px A4 preview and centers it horizontally. Mobile retains the full content height. Both campaign and report page wrappers clip visual overflow so page content cannot overlap labels, adjacent pages, or preview footer text. This preview fitting does not change saved block coordinates or the builder's A4 editing bounds.

- Canvas Layout exposes a uniform Base margin (0–96px, default 24px), saved as `MarketingTemplate.baseMargin`. A semantic-primary dashed inset guide appears only in the editor and ignores pointer events. New elements start at the left margin and fit within the horizontal inset; an empty Fit content canvas starts at the top margin. Fit content height includes this margin below the lowest element, with a 400px minimum, using `marketingContentHeight` across the editor, mobile previews, and journal rendering. New journal snapshots save the margin; older snapshots without it preserve their existing height. Existing absolute block positions, including full-bleed artwork, remain unchanged. Fixed-height and A4 dimensions remain unchanged.

- The Surabaya free-trial demo retains its artwork and transparent registration overlay, followed by editable campaign heading, description, and a visible WhatsApp CTA. Existing browser-local demo templates receive missing copy blocks once, preserving saved block edits and later removals. Meeting journal detail reuses `MarketingJournalPage` for its saved marketing snapshot, or shows this campaign as an explicitly labeled mockup with a dummy Surabaya contact when no snapshot exists. Mockup fallback does not publish the campaign or modify journal snapshots.

- Empty image placeholders in `MarketingCanvas` use the existing `grey-100` background token in light and dark themes.

- Mobile Fit content grows to the lowest element edge (minimum 400px). Dragging and resizing may extend below the current canvas; horizontal bounds and minimum element sizes still apply. New elements append 16px below the lowest element, or start at Y=24 on an empty canvas. Fixed-height and A4 pointer interactions keep their existing vertical bounds.

- Direct manipulation: selected elements show eight semantic-primary resize handles on surface fill and a width/height readout. Pointer deltas divide by canvas zoom; resize stays within canvas edges with 16px minimum dimensions (1px height for lines/dividers). Numeric Width/Height fields remain the keyboard alternative. Each completed move/resize is one undo entry; Escape/pointer cancellation restores the starting geometry; simple selection does not enter history.
- Delete/Backspace and Ctrl/Cmd+Z (Shift for redo) are scoped to the builder and ignored in editable fields or the preview dialog. Canvas zoom ranges from 35% to 200%, supports Ctrl/Cmd+wheel over the stage, and resets to 100% via the percentage button. No motion animation is added.
- Image properties use an upload/replace action, local thumbnail, alternative text, remove action, busy state, and inline error feedback. JPG/PNG/WebP inputs are limited to 5 MB, resized to at most 1200px, and encoded locally; encoded data is capped at 600,000 characters per image and 1,500,000 per template. Optional `MarketingBlock.imageSrc` persists through drafts/snapshots and renders with cover fitting in canvas and journal. This remains browser-local storage, not a server upload.

- Step 2 follows the CMS content-marketing builder: a compact toolbar above the existing 3/6/3 `VRow` workspace, grouped element presets on the left, a scaled canvas in the center, and a separated canvas/element inspector on the right.
- Element insertion tiles use native buttons with 8px corners, semantic border/surface tokens, keyboard focus, and hover feedback only for hover-capable pointers. Toolbar actions retain pill `VBtn` styling. Text, Media, Interactive, Shapes, and Layout groups contain only supported journal elements; Subheading and Caption reuse existing heading/text blocks.
- Use `VTabs` for Elements, Layers, Styles, and Variables. Start the canvas at 75% zoom, reserve its scaled footprint, and use `background` for the workspace and `surface` for the page and side panels. No new palette or typography tokens.

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

### Detailed Token Application by Component

Below details what specific color and typography tokens are configured on these components within the codebase.

#### Layout & Grid (`VRow`, `VCol`)

- **Typography:** None.
- **Colors:** Implicitly inherits `background` (`#FAFAFA` in light theme, `#28243D` in dark theme).
- **Layout rule:** Page-level and section-level layouts must use Vuetify `VRow` and `VCol`. Do not use raw `div`-based CSS Grid for outer page shells or primary columns.
- **Spacing rule:** Use `gap: 24px` (`gap-6` equivalent) between primary layout sections. Keep spacing consistent across desktop, tablet, and mobile breakpoints.
- **Sizing rule:** Use `cols="12"` as the mobile baseline, then add Vuetify breakpoint props such as `sm`, `md`, or `lg` for larger layouts.

#### Teacher Dashboard Shell

- Use Vuetify's standard 12-column grid: `VRow` with `VCol cols="12" lg="8"` for the main content and `VCol cols="12" lg="4"` for the sidebar.
- Keep the default `VRow`/`VCol` gutters, which provide 24px visual separation between columns and rows. Do not add a second 24px gap on top of those gutters.
- Keep the main content and sidebar stacks at `gap: 24px` internally.
- Use the direct welcome headline (`Good morning, Julie.`) with supporting copy below; do not add a decorative eyebrow above the main title.
- Keep `min-width: 0` on dashboard content containers so tables can shrink without horizontal overflow.
- Keep dashboard-specific internal grids only for local content patterns such as summary cards or schedule rows; outer page layout remains `VRow`/`VCol`.

#### Cards (`VCard`, `VCardText`, `VCardTitle`, `VCardActions`)

- Marketing preview uses `MarketingPreviewDocument` to fit the existing 390px canvas proportionally inside its container. Keep A4 pages at a 210:297 ratio and use independent format (A4/mobile) and content (page 2/full journal sample) controls. The full sample reuses `MeetingJournalReportPreview`; preview controls must not update campaign data. Recipient summaries use a filled `primary` card with `on-primary` text throughout.

- **Typography:** Titles map to `h6` or `subtitle-1`. Text maps to `body-2` or `body-1`.
- **Colors:**
  - `VCard` default background uses `surface` (`#FFFFFF` light, `#312D4B` dark).
  - Borders/actions use `grey-100` (`#F5F5F5` light, `#2F3349` dark).

#### Buttons & Actions (`VBtn`, `VIcon`)

- **Typography:** `VBtn` automatically maps properties of the `button` typography token (15px, medium weight).
- **Shape:** Every `VBtn` variant uses a full rounded corner radius (`rounded="pill"`, equivalent to `border-radius: 999px`). Keep this rule for flat, outlined, text, tonal, elevated, plain, and icon buttons. Use `VBtnToggle` only when grouped controls require a separate group container treatment.
- **Colors:**
  - Primary button: `primary` (`#10AF13`). Hover/Pressed states: `primary-darken-1` (`#108513`).
  - Secondary button: `secondary` (`#8A8D93`).
  - Error/Delete button: `error` (`#FF4C51`).
  - Icons: Inherit text colors (`text-primary`, `text-secondary`) or dynamic status colors.

#### Forms & Inputs (`VTextField`, `VSelect`, `UiAutoComplete`, `VCheckbox`, `VSwitch`)

- **Typography:** Labels and input values use `body-2` (13px).
- **Colors:**
  - Borders/Bases: Standard Vuetify input border tokens.
  - Active selection color: `primary` (`#10AF13`).

#### Lists & Navigation (`VList`, `VListItem`, `VListItemTitle`, `VListItemSubtitle`)

- **Typography:** `VListItemTitle` uses `body-1` (15px). `VListItemSubtitle` uses `body-2` (13px) or `caption` (13px with wider spacing).
- **Colors:** Active list item uses `primary` text/bg overlay. Muted list items use `text-secondary` or `disabled` color.

#### Sidebar Navigation Active State

- The active navigation link uses the configured brand gradient with white text and icons, consistent with the white `on-primary` foreground used by filled primary buttons.

#### Tables & Data Representation (`UiTableView`, `VDataTable`, `VDataTableServer`)

- **Typography:** Table headers use `subtitle-2` or `overline`. Cell text uses `body-2`.
- **Colors:** Row borders use `grey-100`. Alternate rows or hover states use `grey-50` (`#FAFAFA` light, `#2A2E42` dark).
- **Responsive pattern:** Keep `VDataTable` for desktop and use `UiTableView`'s optional `mobileCards` mode with an explicit `mobile-cards` slot when mobile needs different content grouping or action hierarchy. Avoid `nth-child` and pseudo-element labels for structural transformations.
