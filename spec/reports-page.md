# Build Prompt: Reports Page (Pending Daily Journal / Pending Report)

## Context
Build the **Reports** page for [Project Name]. This page lives inside the existing app shell (sidebar + topbar already implemented — do not rebuild them, only route/highlight the "Reports" nav item as active).

**IMPORTANT: Use only existing design system tokens and components** (colors, typography scale, spacing, button/badge/input components). Do not introduce new hex values, font sizes, or one-off component styles. If a required component (e.g. status badge, tab, pagination) doesn't exist yet in the design system, flag it before building instead of silently creating a new pattern.

---

## 1. Page Header
- Section label: "Reports"
- Title: `Reports` — use heading style (H4/H5 per existing scale)
- Subtitle: "Pending daily journals and student reports" — body/secondary text style, muted color token

## 2. Tabs
Two tabs directly under the header:
1. **Pending Daily Journal** — count badge `20` (red/danger badge), active state (green underline + green text/icon)
2. **Pending Report** — count badge `15` (dark/neutral badge)

- Active tab indicated by an underline in primary green + colored icon/text
- Inactive tab: neutral gray text/icon
- Icons precede each label (document-check icon for Daily Journal, chart/report icon for Pending Report) — use existing icon set (Tabler Icons, per current usage)

## 3. Filter Bar
Row layout, single line, space-between:
- Left group:
  - Search input with icon, placeholder "Search student"
  - Dropdown select, placeholder "Class"
  - Text link/button "Reset Filter" (green text, no border)
- Right group:
  - Icon-button toggle group (3 icons): list view (active/selected state), map/pin icon, grid icon
  - These act as a segmented control — only one active at a time, active state gets a filled/light background

## 4. Data Table

**Columns:**
| Column | Notes |
|---|---|
| Student Name | Avatar (initials, colored circle) + name (bold) + student ID below in muted small text |
| Book / Session | Plain text |
| Lesson & Class | Two lines: lesson name as a **link** (green, underline) + class name below in muted text (may be "-" if empty) |
| Date | Plain text, format `February 29, 2012` style |
| Status | Badge component — see states below |
| Action | Icon button(s) — see states below |

**Row height:** comfortable/spacious row padding matching existing table component.

**Status badge states:**
- `Not Created` → gray/neutral badge
- `Pending` → yellow/warning badge

**Action column states (conditional on status):**
- `Not Created` → single edit/pencil icon button (outline style)
- `Pending` → two icon buttons: edit icon (outline square) + play/arrow icon (triangle, indicates "start" or "review") — grouped side by side

**Avatar:**
- Circular, initials derived from student name, background color pulled from existing avatar color palette (rotate through design system's avatar/tag colors)

## 5. Pagination Footer
- Left: "Rows per page" label + dropdown (default `10`)
- Right: "1–5 of 13" range text + prev/next chevron icon buttons (disabled state when at start/end)

---

## 6. Data Structure
Model the table as data-driven, not hardcoded rows. Suggested shape:

```ts
interface ReportRow {
  id: string;
  studentName: string;
  studentId: string;
  avatarColor?: string; // optional override, else auto-assign
  bookSession: string;
  lessonName: string;
  className?: string; // nullable, render "-" if empty
  date: string; // ISO, format at render time
  status: "not_created" | "pending";
}
```

Render 5 rows per page per the pagination control, using the 8 example rows shown as sample/mock data (Cristofer Mango, Jennifer Summers, Justin Richardson, Nicholas Tanner, Crystal Mays, Mary Garcia, Megan Roberts, Joseph Oliver — all "Python Game Dev" / "Lesson 4 - Canvas Setup").

## 7. States to Handle
- Empty search result (no matching student)
- Loading state for table (skeleton rows using existing skeleton/loading component)
- Empty class dropdown vs. selected class (filter applied → "Reset Filter" becomes visually enabled)

## 8. Responsive Behavior
- Desktop: full table as shown
- Tablet: consider collapsing "Book / Session" into a secondary line under student name, or enabling horizontal scroll on the table container
- Mobile: convert rows to stacked cards (student name + avatar as card header, remaining fields as label/value pairs, action buttons pinned to card footer)

Flag which responsive strategy (scroll vs. stacked cards) if it's ambiguous — don't assume silently, ask before implementing.

---

## Before You Start
Confirmed:
- `Not Created` and `Pending` are the only two status states — build the badge and action-column logic as a strict two-state switch (no need for extensibility beyond these two).
- The segmented view toggle (list/map/grid icons) only changes the table's **layout**, not the underlying data — same dataset, different visual arrangement per view.
- Tab switching (Daily Journal ↔ Pending Report) swaps the table's dataset **and** column set — these two tabs represent different data entirely, not a filter on the same dataset. Build each tab with its own column config and data source.
