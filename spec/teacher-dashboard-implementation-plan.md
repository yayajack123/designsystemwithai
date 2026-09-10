# Implementation Plan — Teacher Dashboard

## 1. Objective

Replace the existing teacher dashboard screen with a PRD-aligned teacher command center. The page should help a teacher answer these questions in order:

1. What do I need to do now?
2. Which students need my attention?
3. How is my work progressing?
4. What impact has my work created?

The current attendance-management and real-time-progress presentation will be removed from the dashboard surface. Attendance editing remains a separate product workflow and is not part of this page replacement.

## 2. Scope

### First implementation scope

- Welcome and appreciation carousel.
- Four Summary Cards:
  - Parents Updated
  - Student Impacted
  - Skill Growth
  - Project Submitted
- Priority Watchlist with Attendance, Productivity, and Quiz tabs.
- Watchlist reason, risk level, lifecycle status, and Action modal.
- Pending Tasks with Journal, Reports, and Projects tabs.
- Upcoming Schedule with status dot and countdown.
- Loading/empty/error-ready component boundaries.
- Responsive behavior for desktop, tablet, and mobile.

### Explicitly excluded

- Self Learning Reminder; PRD marks it as pending/not in scope.
- TMS Revamp implementation itself.
- Real API integration and Monday batch calculation; this pass uses typed mock data behind replaceable view-models.
- Attendance editing, class completion, student presence toggles, and real-time progress cards from the previous dashboard.

## 3. Design Direction

### Subject and single job

- **Subject:** a teacher's working desk before the next class.
- **Audience:** teachers who need a quick, calm read of today's teaching obligations and student risk.
- **Single job:** move from “what should I do?” to the next useful action in under one minute.

### Visual concept

Use a calm, high-contrast “teaching desk” layout. The page is organized like a briefing sheet: one recognition note, one operational watchlist, one short task queue, and a narrow agenda rail. The distinctive choice is the appreciation card: it looks like a clipped note from the school rather than a marketing hero, using a vertical recognition rail and a restrained green field.

### Wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ Good morning, Julie.                              All ready  │
│ Thursday · 10 September 2026 · Your teaching brief           │
├───────────────────────────────────────────────────────┬──────┤
│ A note for you                                        │      │
│ “Your consistency gives students room to grow.”       │ Next │
│ [milestone]                         [‹] 1/4 [›]       │ class│
├───────────────────────────────────────────────────────┤ agenda│
│ 04   Parents updated   12   Student impacted   ...    │      │
├───────────────────────────────────────────────────────┤      │
│ Priority watchlist                         View all   │      │
│ [Attendance] [Productivity] [Quiz]                    │      │
│ student · issue · risk · status · Action              │      │
├───────────────────────────────────────────────────────┤      │
│ Pending tasks                              View all   │      │
│ [Journal] [Reports] [Projects]                        │      │
└───────────────────────────────────────────────────────┴──────┘
```

### Token decisions

Use the existing project tokens rather than introducing a second theme:

- **Primary:** `#10AF13` for action, active selection, and recognition rail.
- **Primary dark:** `#108513` for pressed/hover states.
- **Background:** `#FAFAFA`.
- **Surface:** `#FFFFFF`.
- **Ink:** project `on-surface` / `on-background` values.
- **Risk:** `warning` `#FFB400`, `error` `#FF4C51`, and `success` `#56CA00`.
- **Supporting accent:** `info` `#16B1FF` for neutral metadata, not as a decorative gradient.

Use Poppins and the existing Vuetify typography utilities. Headings use `text-h4`/`text-h5`, section labels use `text-overline` or `text-caption`, and data uses `text-body-2`.

## 4. Component Plan

### Page shell

- `pages/dashboard-teacher.vue`
- `VRow`/`VCol` for the 3:1 layout.
- `VCard`/`VCardText` for surfaces.
- A scoped style layer for dashboard-specific spacing, borders, status dots, and responsive behavior.

### Welcome and Appreciation

- Typed `appreciationItems` array.
- Auto-rotate every 5 seconds.
- Manual previous/next controls.
- Pause rotation while the browser tab is hidden.
- `aria-live="polite"` for the changing message.
- Reduced motion: no translate animation, only a light opacity transition.

### Summary Card

- `summaryItems` view-model with label, value, period, helper copy, and icon.
- Four quiet inline metrics instead of four heavy color blocks.
- Period labels are explicit (`This month`) so the unresolved PRD period is visible in the prototype.

### Priority Watchlist

- `watchlistItems` view-model mirrors the PRD's metric/type split.
- `VTabs`/`VTab` for the three PRD filters.
- `VChip` for risk and lifecycle labels; never rely on color alone.
- `VDialog` + `VTextarea` for Action notes.
- Local interaction updates status to `In Progress` and shows a snackbar; API mutation will replace this handler later.
- Keep status history and evaluation identity in the data contract even though the first pass only renders the latest view.

### Pending Tasks

- Tabbed data view with a capped list of five items.
- Counter per category and total count.
- `NuxtLink`/`VBtn` destinations are kept separate from the data mapping to make TMS Revamp route changes local.
- Empty state copy should point to the relevant workflow, not merely say “No data”.

### Upcoming Schedule

- Narrow sidebar card with the next three classes.
- Countdown calculated on the client and refreshed once per minute.
- Status dot includes text label and tooltip-friendly `aria-label`.
- View all links to the existing `schedule` route.

## 5. Motion and Interaction Rules

- Page entrance: subtle stagger on major sections only, 40ms apart, under 220ms.
- Hover: only on pointer-capable devices; lift surfaces by 2px using `transform`.
- Pressable controls: `scale(0.97)` for 120–160ms.
- Tabs: animate indicator/opacity only; do not animate keyboard-triggered navigation.
- Dialog: centered modal, `scale(0.96)` + opacity on entry, 220ms custom ease-out.
- Appreciation message: crossfade/blur lightly so the old and new message do not visibly collide.
- Do not use `transition: all`, `scale(0)`, or `ease-in` for UI interactions.
- Respect `prefers-reduced-motion` by removing movement and keeping only a short opacity/color transition.

## 6. Data Contracts to Prepare for API Integration

```ts
type WatchlistType = 'Attendance' | 'Productivity' | 'Quiz'
type RiskLevel = 'Green' | 'Yellow' | 'Red'
type WatchlistStatus = 'Open' | 'In Progress' | 'Resolved' | 'Failed' | 'No Action' | 'Closed'
```

Future endpoints should provide:

- Evaluation window and student-book identity.
- Metric result, threshold, risk, and human-readable reason.
- Latest action status, notes, actor, and timestamp.
- Summary values with explicit period metadata.
- Pending task category, due date, target route, and action label.
- Schedule start/end timestamps with timezone.

## 7. Implementation Sequence

1. Preserve unrelated worktree changes and replace only the teacher dashboard page.
2. Add the implementation plan and document the visual decisions.
3. Replace the old dashboard state, template, and scoped CSS completely.
4. Add typed mock view-models and local interactions.
5. Run focused lint/type/build checks.
6. Inspect the rendered page at desktop and narrow widths.
7. Fix layout, overflow, focus, and reduced-motion issues found during visual QA.

## 8. Definition of Done

- No old attendance editor or real-time progress section remains on the teacher dashboard.
- Page order follows PRD priority: welcome → summary → watchlist → pending tasks, with schedule in the sidebar.
- Four summary metrics and their periods are visible.
- Watchlist tabs and Action modal work with keyboard and mouse.
- Schedule countdown and status text are visible without color dependence.
- Layout is usable at mobile width without horizontal scrolling.
- Existing project colors, Poppins typography, and mapped Vuetify components are used.
- Motion is restrained, interruptible, and disabled appropriately for reduced-motion users.
- Focus indicators, dialog labels, tab semantics, and live-region updates are present.
