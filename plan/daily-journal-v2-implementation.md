# Daily Journal v2 implementation

Scope: Part A only, local mock data. Preserve banner and card placement. Reuse Vuetify controls, UiTableView and MeetingJournalReportPreview. No new dependency or parallel form pattern.

Areas: create form, shared preview, attendance/report lists, journal mock types, demo state composable, prompt utility and public demo route.

State: draft snapshot persists in browser localStorage. Shared snapshots drive lists and public preview. Sending changes only via explicit demo result; failure consumes no quota. Manual delivery consumes quota and never auto-sends revisions. Demo limit: 2 successful/manual sends, then Locked. The production limit is unspecified.

Responsive: scrollable tables per approved plan; retain existing form columns and circular banner. Typography stays Poppins text-body/text-h5; surfaces use semantic theme tokens. Status uses info/success/error. Existing progress banner provides identity; no extra decoration or motion.

User approved relevant dummy system/user prompts in chat. Label copied prompts and AI generation as demo. Exact helper/manual copy from a separate brief was unavailable, so use concise copy describing the specified behavior.

Public route is a browser-local demonstration. Media uses data URLs so saved previews can survive route changes. LocalStorage quota may limit large uploads; save warns when data only remains in memory. Production storage, cross-device links, compression/conversion and PDF generation remain outside scope.

Validation: Vue SFC compilation, build, state-transition checks and desktop/mobile browser review, including themes, AI failure recovery, manual/no-phone delivery, retry, quota and preview privacy. Preserve existing unrelated working-tree edits.

Additional user request: filled primary button text must be white. Fix the shared `on-primary` token in `getBrandThemeColors`, document it in design.md and test light/dark behavior. Related form objective surfaces use semantic theme colors so dark-mode notes remain readable.

Media UI adjustment: remove photo/video mode radios. Show both upload actions. Derive delivery mode from the presence of uploaded video. Require at least one photo without video; with video, photos are optional. Removing video restores the photo requirement. Incomplete drafts remain allowed.

Browser checks for this adjustment: empty media blocks Continue with a clear message; uploading MP4 changes the photo requirement to optional automatically; removing the video restores the photo requirement. Desktop remains the review priority.

## Validation results

- `pnpm build`: PASS. Existing Vuetify SSR style-extraction warnings remain.
- `pnpm exec tsx --test tests/dailyJournalDemo.test.ts`: 5 tests passed (conditional media requirements, delivery/quota/retry, prompt content, video format/size boundaries, white brand foreground).
- Vue SFC compile: PASS for create, public demo, reports, attendance detail, student journal detail and shared preview. `git diff --check`: PASS for task files.
- Desktop browser at 1280px: light/dark form review, white filled primary text (`rgb(255, 255, 255)`), no page overflow, AI success/failure/Copy Prompt, manual delivery without phone, Locked at 2 sends, Failed/Retry listing and Sending to Sent verified. No console errors on final desktop flow.
- MP4 sample: upload and simulated processing verified. HTML preview has zero video elements and does not show raw teacher observations. WhatsApp preview has one persistent data-URL video and no media error. Public demo and static content verified.
- ESLint blocked: repository has no ESLint configuration (`ESLint couldn't find a configuration file.`). No unrelated configuration added.
- Mobile received an initial review and a footer wrapping fix; final mobile review deferred when the user requested desktop focus.

Changed areas: `pages/meeting-journal/create.vue`, `pages/reports.vue`, `pages/attendance-detail.vue`, `pages/student-meeting-journal.vue`, `pages/daily-journal/[id].vue`, `components/MeetingJournalReportPreview.vue`, `data/studentMeetings.ts`, `composables/useDailyJournalDemo.ts`, `utils/dailyJournalPrompt.ts`, `utils/dailyJournalMedia.ts`, `middleware/auth.ts`, `plugins/vuetify/theme.ts`, `spec/design.md` and `tests/dailyJournalDemo.test.ts`.
