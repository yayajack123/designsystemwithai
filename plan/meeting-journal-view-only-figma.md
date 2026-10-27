# Meeting journal view-only — Figma implementation

Source: [Meeting Journal / View Only / Not Revised, 1113:4382](https://www.figma.com/design/fsa6OM5EMVEDzAvsxVHt11/Teacher-Microdemy?node-id=1113-4382). Read via Figma MCP, including screenshot and high-fidelity node 1113:4912. Scope: `pages/student-meeting-journal.vue`, reused by `/meeting-journal/:journalId`. Existing records, snapshot restoration, routes, field values, and shared report data remain intact.

## Implementation plan

- Reuse `UiSectionHeader`, `VCard`, `VExpansionPanels`, `VRow`/`VCol`, `VAvatar`, `VChip`, `VAlert`, and `MeetingJournalReportPreview`.
- Place teacher and existing `journal.updatedAt` in a metadata strip; keep existing status and lock logic.
- Build lesson cards with title/progress left, numeric score right, and a separately expandable objective section below. Preserve every lesson/objective/score.
- Group active project, project name and raw teacher observations in the left detail column, followed by current photos and optional video. Put the existing parent-facing AI summary in the right column.
- Keep the live shared report instead of the Figma gray preview placeholder. Reuse current student/class/book/date in its context strip.
- No new data, Figma placeholder text/photos, AI generation count, or Send/Revise/Download actions. Existing read-only contract takes priority over those Figma actions.
- Stack columns on mobile; long content wraps without truncation. No new dependency or data migration.
- Validate Vue/SCSS compilation, existing demo tests, desktop/mobile, dark theme, and accordion keyboard behavior.

## Token mapping

| Figma | Project implementation | Fidelity / decision |
| --- | --- | --- |
| Poppins Medium 18/28 | `text-h5 font-weight-medium` | Section titles |
| Poppins Regular/Medium 15/22 | `text-body-1`, optional `font-weight-medium` | Lesson titles, metadata, section descriptions |
| Poppins Regular 13/20 | `text-body-2` | Read-only field values and progress |
| Poppins Medium 24/38 | `text-h4 font-weight-medium` | Numeric score |
| Page title 15/22, subtitle 13/20 | Scoped size mapping on reused `UiSectionHeader` | Global component unchanged |
| Tracking -2% | Existing project typography tracking | No parallel global typography token; intentional small difference |
| Primary #10AF13 | `primary` / `--v-theme-primary` | Deployment brand stays authoritative |
| Primary dark #108513 | `primary-darken-1` | Teacher name |
| White/paper #FFFFFF | `surface` | Theme-aware cards |
| Grey light #FAFAFA | Existing background + 2% on-surface field tint | Theme-aware field treatment |
| Objective background #F4F5FA | 3% on-surface tint | Closest existing objective surface pattern; no hardcoded light-only fill |
| Primary text rgba(46,38,61,.9) | Inherited `on-surface` high emphasis | Theme aware |
| Secondary text rgba(46,38,61,.7) | `text-medium-emphasis` | Theme aware |
| Divider rgba(46,38,61,.12) | `rgba(var(--v-border-color), .12)` | Cards and section dividers |
| Warning 8% / 16% | Semantic warning fill/border | Existing lock state only |
| Section gap/gutter 24px | `VRow`/`VCol`, section padding 24px | Existing app shell owns outer gutters |
| Lesson/card gap 20px | Local flex gap 20px | Figma list rhythm |
| Card padding 16px / 20px | `pa-4` / `pa-5` | Figma values |
| Read-only field padding 12px | `pa-3` | Figma value |
| Radius 12px | Scoped card/field radius 12px | Figma value; no new global token |
| Remix icons 16/20/24px | Existing `VIcon` with exact Remix names | Existing icon library matches Figma |
| Evidence image slots | Existing `journal.evidencePhotos` | Dynamic user media; no Figma example photos imported |

## Content and scope guard

Preserved: student name/code/session/book, status, teacher, all lessons/progress/scores/objectives, active-project flag, project name, raw notes, AI notes, all photo URLs, video name/URL, report content, sent timestamp, return route, loading and missing-snapshot states. Updated/sent timestamps use the existing date formatter. No snapshot writes occur in this page.

Pixel-identical full-frame output is not claimed: current content differs from Figma, app navigation is outside scope, theme tokens remain project-native, and view-only excludes mutable Figma actions.

## Validation results

- Header/lesson follow-up: use create.vue's full-width surface header (negative 24px shell gutters, 20px vertical padding), grouped status/title/progress, 14px/12px status icons, and a 30px bordered accordion arrow. Score remains plain read-only text as in Figma; no input/delete controls are introduced.

- Vue script/template and scoped SCSS compile: PASS. Existing five daily-journal tests: PASS. Task diff whitespace check: PASS.
- Browser review on the existing authenticated Chrome detail tab: desktop 1440px and mobile 390px had document width equal to scroll width; zero editable inputs/textareas in the detail page.
- Objective accordion opens/closes by pointer and Enter. Three saved lessons and one saved photo render; the existing empty AI summary remains empty, with no invented replacement.
- Light and dark detail surfaces reviewed. Temporary theme and viewport changes restored to light/default viewport after review.
- Static icons use the existing matching Remix library; dynamic photos remain current snapshot URLs. Shared logo/report remain unchanged.
- Screenshot: `/tmp/meeting-journal-view-only.png`. Production build was not repeated for this page-only layout change; source compilation and live Nuxt render both succeeded.
