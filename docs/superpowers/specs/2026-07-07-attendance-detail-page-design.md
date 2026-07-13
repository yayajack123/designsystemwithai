# Attendance Detail Page Design

## Summary
Add a dedicated attendance detail page for a single class session, based on the approved Figma design, while keeping the current attendance list page as the entry point. The new page should match the existing app's Vuetify patterns, reuse current attendance dialogs where useful, and use local mock data for the first pass.

## Current State
The current attendance experience lives in [pages/attendance.vue](pages/attendance.vue) and renders a paginated list of class cards with filters, teacher summaries, student previews, and local mock state.

Relevant existing behavior:
- [pages/attendance.vue:2-4](pages/attendance.vue#L2-L4) uses `definePageMeta({ sidebarRoute: 'attendance' })`.
- [pages/attendance.vue:22-37](pages/attendance.vue#L22-L37) defines a `ClassSession` shape for the list page.
- [pages/attendance.vue:521-523](pages/attendance.vue#L521-L523) `seeDetails()` currently shows only a toast.
- [components/dialogs/PresenceDialog.vue](components/dialogs/PresenceDialog.vue) already supports batch presence editing for a class session.
- [components/dialogs/AllStudentDialog.vue](components/dialogs/AllStudentDialog.vue) already supports viewing the full student list in a dialog.

There is no existing dynamic route under `pages/attendance/`, and the `pages/` directory currently uses flat file routes only.

## Goal
- Create a dedicated detail page for one attendance session.
- Keep [pages/attendance.vue](pages/attendance.vue) as the parent list page.
- Make the detail page visually match the Figma structure and token system.
- Reuse the existing Vuetify and dialog patterns already present in the codebase.
- Use local mock data for this first pass.
- Keep interactivity local-state only for now.

## Non-Goals
- No real API integration yet.
- No persistence across refresh.
- No new Pinia store.
- No journal creation/view backend flow.
- No broad refactor of the current attendance list page.
- No extraction into multiple new components unless the new page becomes clearly too large.

## Project Context
### Routing and navigation
- The project uses Nuxt file-based routing via `pages/`.
- There is no existing nested or dynamic attendance route.
- The vertical nav points Attendance to route name `attendance` in [navigation/vertical/index.ts:15-19](navigation/vertical/index.ts#L15-L19).
- `sidebarRoute` is consistently used across pages to keep the nav item active.

### UI stack
- The app uses Vuetify, registered in [nuxt.config.ts:52](nuxt.config.ts#L52) and [nuxt.config.ts:124-136](nuxt.config.ts#L124-L136).
- Global component auto-import includes `@core/components`, `components/global`, and `components` via [nuxt.config.ts:39-50](nuxt.config.ts#L39-L50).
- Current attendance page already uses `VCard`, `VChip`, `VBtn`, `VAvatar`, `VSnackbar`, `VDataTableFooter`, `VTextField`, `VSelect`, `VRow`, and `VCol`.

### Existing attendance UI patterns to follow
From [pages/attendance.vue](pages/attendance.vue):
- Compact class meta rows with chips and dot separators.
- Student rows with name, course, status chip, and small action buttons.
- Primary/tonal/outlined button usage.
- Local reactive mock state with snackbar feedback.

From [components/dialogs/PresenceDialog.vue](components/dialogs/PresenceDialog.vue):
- Presence editing is already modeled as a reusable dialog.
- It includes present/absent toggles, laptop checkbox, quota field, notes, and confirmation flow.

## Figma Structure to Match
The Figma screen `Detail Class / Attendance` is best interpreted as three major content areas inside the existing app shell:

1. **Page header bar**
   - Back icon button
   - Date title (`Monday, 22 June 2026` style)

2. **Summary cards row**
   - Card 1: `Class name` → value like `RDA-9012`
   - Card 2: `Room Name` → value like `Rio Room`
   - Both include a green tonal icon box on the right

3. **Students section**
   - Section title `Students`
   - Green count badge (example: `5 Students`)
   - Primary rounded `Change Presence` button
   - White bordered table card with header row

### Table columns from Figma
The student table header contains:
1. Student name
2. Book
3. Addons
4. Presence
5. Notes
6. Status
7. Meeting journal

### Student row structure from Figma
Each row includes:
- Avatar initials circle
- Student name
- Secondary meta row: student code + dot + session label
- Book title
- Book status chip (`Completed`, `Idle`, `Incomplete` seen in Figma)
- Addons indicator (laptop icon pill)
- Presence indicator icon + text (`On time`, `Late 5 minutes`, and an absent/negative variant implied)
- Notes text paragraph
- Status column (`-` or sent state with plane icon + text `Sent`)
- Meeting journal action button (`Create Journal` or `View`)

## Options Considered

### Option 1: Put detail mode inside [pages/attendance.vue](pages/attendance.vue) with query params
Use `?classId=` and branch the page between list mode and detail mode.

**Pros**
- One route only.
- No new page file.

**Cons**
- Makes an already large file even larger.
- Blurs responsibilities between list and detail screens.
- Harder to maintain and reason about.
- Less idiomatic than Nuxt dynamic routing.

### Option 2: Add [pages/attendance/[id].vue](pages/attendance/[id].vue) with local mock data (recommended)
Create a dedicated detail route, navigate to it from the list page, and model detail-page data locally.

**Pros**
- Clear separation of concerns.
- Matches Nuxt routing conventions.
- Smallest clean change that scales later.
- Easy to swap mock data for API/composable later.
- Keeps `sidebarRoute: 'attendance'` active naturally.

**Cons**
- Requires a new page file.
- Mock data temporarily duplicates some information conceptually.

### Option 3: Create a composable-first data layer now
Add something like `useClassAttendanceDetail()` and build the detail page around it immediately.

**Pros**
- Cleaner future API swap.
- Better separation of view and data.

**Cons**
- Extra abstraction before it is needed.
- More moving parts for a mock-only first pass.
- YAGNI for the approved scope.

## Recommended Design
Use **Option 2**.

Create a new page at [pages/attendance/[id].vue](pages/attendance/[id].vue), keep it under the Attendance navigation context, and drive it from a page-local mock dataset shaped specifically for the detail table.

### Route behavior
- Add [pages/attendance/[id].vue](pages/attendance/[id].vue).
- Add `definePageMeta({ sidebarRoute: 'attendance' })` to the new page.
- Update [pages/attendance.vue:521-523](pages/attendance.vue#L521-L523) so `seeDetails(cls)` navigates to the new route.
- Invalid IDs should render a friendly not-found card with a back button to Attendance.

### Data model for the new page
Use a dedicated local mock type for the detail page rather than importing from the list page.

Recommended shape:

```ts
interface AttendanceDetailStudent {
  id: string
  name: string
  studentCode: string
  sessionLabel: string
  bookName: string
  bookStatus: 'Completed' | 'Idle' | 'Incomplete'
  bookStatusColor: 'success' | 'warning' | 'info'
  hasLaptop: boolean
  presenceLabel: 'On time' | 'Late 5 minutes' | 'Absent'
  presenceColor: 'success' | 'warning' | 'error'
  notes: string
  deliveryStatus: 'none' | 'sent'
  journalAction: 'create' | 'view'
}

interface AttendanceDetailSession {
  id: string
  dateTitle: string
  classCode: string
  roomName: string
  students: AttendanceDetailStudent[]
}
```

This keeps the detail page faithful to the Figma table without overloading the simpler `Student` type used on the list page.

### Layout composition
Build the detail page in one file initially.

#### A. Top header
- Back icon button (left arrow)
- Date title text
- No custom shell recreation; rely on existing app layout

#### B. Summary cards row
Two cards side by side on desktop, stacked on mobile:
- `Class name`
- `Room Name`

Card style:
- white background
- 1px subtle divider border
- 20px padding
- 6px radius
- green tonal icon container on the right
- label uses body-1 regular
- value uses h4 medium

#### C. Students section header
- Left: `Students`
- Green count badge, using primary background and white text
- Right: rounded primary `Change Presence` button

#### D. Main table
Use a white bordered card with a custom table-like layout rather than forcing a full Vuetify data table component, because the Figma row structure is richer than the current list/table usage.

The table should render:
- explicit header row with the 7 columns
- body rows with fixed semantic cells matching the Figma order
- responsive overflow handling on smaller screens
- footer area aligned with the visual style of the Figma pagination

### Row behavior and visuals
#### Student identity cell
- avatar initials on gray circle background
- student name in medium body-1
- sub-meta in body-2 secondary: code • session label

#### Book cell
- book title line
- tonal status chip below or beside it
- chip variants:
  - `Completed` → primary tonal
  - `Idle` → warning tonal
  - `Incomplete` → info tonal

#### Addons cell
- compact green icon pill when laptop available
- absent or unavailable state can use muted/negative icon treatment

#### Presence cell
- icon pill plus text label
- variants:
  - `On time` → success/primary green treatment
  - `Late 5 minutes` → warning treatment
  - `Absent` → error treatment

#### Notes cell
- plain text body-2/body-1 sized descriptive note
- truncate visually if needed but keep mock data readable

#### Status cell
- `-` when nothing sent
- plane icon + `Sent` when delivered

#### Meeting journal cell
Outlined pill button:
- `Create Journal` with pencil icon
- `View` with eye icon

## Interaction Design
Approved scope: **visual + local state only**.

### Detail page interactions
- `Change Presence` opens the existing [components/dialogs/PresenceDialog.vue](components/dialogs/PresenceDialog.vue).
- Saving from the dialog updates local detail-page student state and shows a snackbar.
- `Create Journal` button shows an info snackbar, for example: `Create journal for Cristofer Mango`.
- `View` button shows an info snackbar, for example: `View journal for Richard Payne`.
- Back button returns to Attendance list.

### Attendance list page interaction change
- `See Details` on [pages/attendance.vue:711-719](pages/attendance.vue#L711-L719) becomes a real route transition instead of a toast.

## Token Mapping
Use existing Vuetify/theme-friendly styling, but match these Figma tokens closely:

### Colors
- Primary main: `#10AF13`
- Text primary: `#2E263D` with high emphasis treatment
- Text secondary: `rgba(46, 38, 61, 0.7)`
- Divider: `rgba(46, 38, 61, 0.12)`
- Table header background: `#F6F7FB`
- Body background: `#F4F5FA`
- Avatar gray background: `#F0EFF0`
- Info main: `#16B1FF`
- Warning main: `#FFB400`
- Error main: `#FF4C51`
- Success main: `#56CA00` (or app primary-success mapping where appropriate)

### Typography
- h4: summary card values
- h5: section titles when needed
- body-1: main labels and content
- body-1-500: emphasized values
- body-2: metadata and secondary text
- body-2-500: teacher labels / compact captions
- badge-label: pills and small status labels
- btn-medium / btn-small: button text
- table-header: uppercase header row labels

### Spacing and radius
- 4, 8, 16, 20, 24 spacing scale
- card padding: 20px
- radius md: 6px
- pill round: 500

## Reuse Plan
### Reuse directly
- [components/dialogs/PresenceDialog.vue](components/dialogs/PresenceDialog.vue)
- [pages/attendance.vue](pages/attendance.vue) styling patterns for chips/buttons/avatars/student rows
- Vuetify primitives already used by the app

### Do not reuse directly
- The list page's card-based row rendering is not a good direct fit for the Figma table.
- The list page's `Student` interface is too small for the detail page.

## Critical Files
### To modify
- [pages/attendance.vue](pages/attendance.vue)
  - replace toast-based detail action with route navigation

### To add
- [pages/attendance/[id].vue](pages/attendance/[id].vue)
  - new detail attendance page

### To reuse without modification if possible
- [components/dialogs/PresenceDialog.vue](components/dialogs/PresenceDialog.vue)
- [components/dialogs/AllStudentDialog.vue](components/dialogs/AllStudentDialog.vue) (optional if needed later, not required for first pass)

## Error Handling and Edge Cases
- Invalid route id → show not found state with back action
- Zero students → empty-state card inside table container
- Missing optional journal/status values → render `-`
- Long notes → truncate visually while keeping layout stable
- Narrow screens → allow horizontal scroll for the full table rather than collapsing semantic columns badly

## Verification
Manual end-to-end verification:
1. Open [pages/attendance.vue](pages/attendance.vue).
2. Click `See Details` on a class card.
3. Confirm navigation to `/attendance/:id`.
4. Confirm Attendance nav item stays active.
5. Confirm detail page shows:
   - back button
   - date title
   - class name summary card
   - room name summary card
   - students count pill
   - `Change Presence` button
   - 7-column student table
6. Confirm at least these visual states render:
   - Completed chip
   - Idle chip
   - Incomplete chip
   - On time presence
   - Late presence
   - Sent status
   - Create Journal button
   - View button
7. Click `Change Presence` and confirm the existing dialog opens.
8. Save changes and confirm the visible student row state updates locally.
9. Open an invalid route like `/attendance/999` and confirm graceful fallback.
10. Check mobile/tablet widths for horizontal table overflow and readable header/content.

## Implementation Scope
This is intentionally a small, focused change:
- one existing page update
- one new route page
- reuse of one existing dialog
- no backend, store, or composable work yet

If this spec is approved, the next step is to write the implementation plan and then build the page.