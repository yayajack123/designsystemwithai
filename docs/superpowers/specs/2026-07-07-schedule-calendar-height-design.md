# Schedule Calendar Height Design

## Summary
Increase the visible height of the schedule calendar grid while keeping the page laptop-safe so the user can still view the page on one screen without page-level scrolling.

## Current State
In [pages/schedule.vue](pages/schedule.vue), `.calendar-wrapper` uses:

```css
max-height: calc(100vh - 350px);
```

This keeps scrolling inside the calendar container, but reserves too much vertical space above/below the grid, making the visible calendar area smaller than desired.

## Goal
- Make the calendar grid visibly taller.
- Keep scrolling contained inside the calendar area.
- Preserve a one-screen experience on common laptop displays.
- Avoid a brittle single magic number as the only control.

## Non-Goals
- No layout refactor of the schedule page.
- No JS-based viewport measurement.
- No changes to event positioning, slot sizing, or calendar data.

## Options Considered

### Option 1: Reduce the existing offset
Use a smaller subtraction value, for example:

```css
max-height: calc(100vh - 280px);
```

**Pros**
- One-line change.
- Immediately increases visible grid height.

**Cons**
- Still a single magic number.
- No guardrails for unusually short or tall screens.

### Option 2: Clamp the height with a reduced offset (recommended)
Use:

```css
max-height: clamp(560px, calc(100vh - 280px), 780px);
```

**Pros**
- Small diff.
- Taller grid on normal screens.
- Lower bound prevents the grid from getting too compressed.
- Upper bound avoids overly tall calendar panels on large monitors.
- Keeps scroll behavior local to the calendar wrapper.

**Cons**
- Still includes a tuned offset value.
- Requires selecting sensible min/max bounds.

### Option 3: Refactor the page to a measured flex layout
Restructure the page/card/body layout so the calendar fills remaining viewport space naturally.

**Pros**
- Most structurally correct.
- Less dependent on manual height tuning.

**Cons**
- More code and more moving parts.
- Unnecessary for the current request.

## Recommended Design
Update `.calendar-wrapper` to use a clamped max height:

```css
.calendar-wrapper {
  max-height: clamp(560px, calc(100vh - 280px), 780px);
}
```

## Expected Behavior
- On common laptop screens, the calendar becomes taller than today.
- The page should remain usable within one screen in normal app chrome.
- If the viewport is short, the calendar stays usable instead of collapsing too much.
- If the viewport is very tall, the calendar does not keep expanding indefinitely.
- Vertical scrolling remains inside the calendar wrapper.

## Error Handling / Edge Cases
- If the app header or surrounding page chrome grows significantly later, the `280px` offset may need retuning.
- If QA finds smaller laptops still tight, the clamp bounds or offset can be adjusted without changing the broader layout.

## Testing
Manual verification is sufficient for this change:
1. Open the schedule page on a laptop-sized viewport.
2. Confirm the calendar grid is visibly taller than before.
3. Confirm page-level scrolling is not introduced in the common case.
4. Confirm long calendar content still scrolls inside the calendar area.
5. Check both week and day views.

## Implementation Scope
Single-file CSS change in [pages/schedule.vue](pages/schedule.vue).