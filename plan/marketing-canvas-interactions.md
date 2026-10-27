# Marketing canvas interactions

Goal: direct editing of existing marketing blocks without changing the builder layout or adding dependencies.

- Reuse MarketingBuilder, MarketingCanvas, MarketingJournalPage, Vuetify controls, and existing block history/draft/snapshot flow.
- Add scoped Delete/Backspace, undo/redo, Escape cancellation, modifier-wheel zoom (35–200%), and eight pointer resize handles. Ignore shortcuts in editable fields. Record one history entry per completed gesture; cancellation restores the starting state.
- Add optional imageSrc to MarketingBlock. Decode JPG/PNG/WebP locally, resize to 1200px, encode WebP, and limit encoded data before committing. Keep alt text in existing content. Show progress/errors and preserve the prior image on failure or selection changes.
- Semantic primary handles, surface fill, body-2/caption copy, visible focus. No new tokens or animation. Existing numeric properties provide a keyboard alternative to pointer resize.
- Files: builder/canvas/journal renderers, marketing model, utils/marketingCanvas.ts, tests/marketingCanvas.test.ts, spec/design.md.
- Risk: localStorage remains browser-local and finite. Limit image bytes per template; backend media storage is outside this task. No new component required.
- Validation: geometry/image validation tests, existing marketing tests, SFC compilation, browser checks for deletion/input protection, resize at zoom, undo, image upload/preview, cancellation, and zoom.
