# Reports Page Specification

## Purpose

Give teachers one place to complete lesson journals, prepare student reports, and confirm parent-teacher meetings (PTM). The Vercel TMS Revamp prototype and teacher feedback define the page structure; project tokens and components remain authoritative for implementation styling.

## Page Header and Tabs

- Page title: Reports.
- Pending Daily Journal tab: one row for each student, book/session, and lesson.
- Reports tab: report progress aggregated by student and book.
- PTM tab: students with completed books who need parent-teacher meetings scheduled.
- Each tab count comes from its current dataset; do not hardcode the badge.
- PTM remains spelled PTM.

## Pending Daily Journal

One journal belongs to one lesson. If a student has several lessons awaiting journals, render one row per lesson; do not combine lessons into a single row or require a detail modal to distinguish them.

| Column | Content |
|---|---|
| Student | Avatar initials, student name, student ID |
| Book / Session | Book or session name |
| Lesson | One lesson title |
| Class | Class name or em dash |
| Date | Localized date |
| Status | Not Created or Pending |
| Action | Create for Not Created; Edit and Send for Pending |

## Reports

Rows represent a student and book/report cycle, not an individual lesson journal.

| Column | Content |
|---|---|
| Student | Avatar initials, student name, student ID |
| Book / Session | Book or session name |
| Lessons | Covered lesson range |
| Class | Class name or em dash |
| Progress | Completed daily journals / expected daily journals, labeled DJ |
| Status | Not Created, Waiting for Daily Journal, or Created |
| Action | Create Report, Create Daily Journal, or View, according to status |

Status/action mapping:

- Waiting for Daily Journal → Create Daily Journal.
- Not Created → Create Report.
- Created → View.

Filters: student search, class, and status. Grouping modes: flat list, group by student, and group by class.

## PTM

| Column | Content |
|---|---|
| Student | Avatar initials, student name, student ID |
| Book | Completed book |
| Reports | Completed report count / expected report count |
| Status | Pending; Confirmed after the demo confirmation action |
| Action | Overflow menu with Confirm PTM |

Filters: student search and class. Keep PTM as the exact tab label.

## Behavior and States

- Tab changes update table columns, dataset, subtitle where relevant, and filters.
- Search matches student name, ID, book, lesson, and class fields present in the active dataset.
- Changing a filter, tab, or grouping mode returns pagination to page one.
- Empty results show a clear message and a filter-reset action when applicable.
- Loading uses the existing Vuetify skeleton loader.
- This page uses local mock data: action feedback must identify demo behavior and must not imply backend persistence.
- Reports View opens a details dialog. PTM Confirm PTM changes only the local mock status.

## Responsive and Design-System Rules

- Keep the table structure at all breakpoints; use horizontal scrolling on narrow viewports.
- Do not convert rows into cards.
- Use existing VDataTable, VCard, VTabs, VSelect, VTextField, VChip, VProgressLinear, VMenu, VDialog, and VSnackbar components.
- Use Poppins, existing typography utilities, semantic theme colors, surface colors, and existing spacing/radius conventions from spec/design.md.
- Preserve visible keyboard focus, accessible names for icon-only actions, and readable light/dark theme contrast.
