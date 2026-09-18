# AI Agent Project Guidelines

This document is the mandatory reference for AI agents whenever they execute prompts in this repository.

## 1. Instruction Priority

Priority order:

1. System and developer instructions.
2. The user's latest instructions.
3. This document.
4. Relevant skills.

When instructions conflict, follow the highest priority. Do not expand the work scope without user approval.

## 2. Required Reading Before Execution

Before working on design or UI changes:

1. Read this document.
2. Read [design.md](spec/design.md) as the primary source for typography, color, theme, and component-mapping tokens.
3. Inspect related repository implementations before making new decisions.
4. Search for existing reusable components, composables, utilities, and patterns.

Do not copy design decisions from memory when the tokens or patterns already exist in `spec/design.md` or the codebase.

## 3. Required Skills

### Communication

Always use the [caveman](/Users/user/Documents/Code%20Project/microdemy-DS/.agents/skills/caveman/SKILL.md) skill. Keep communication concise, technical, clear, and aligned with the user's language. Code, API names, commands, and error messages must remain unchanged and use normal technical writing.

### Design and UI

Use both skills below when creating or revising design/UI:

- [frontend-design](/Users/user/.agents/skills/frontend-design/SKILL.md) for intentional, distinctive visual direction that avoids generic output.
- [emil-design-eng](/Users/user/.codex/skills/emil-design-eng/SKILL.md) for UI polish, interaction details, component quality, and motion decisions.

Always align typography, color, and component decisions with [design.md](spec/design.md).

### Animation

Use the [animate](/Users/user/.codex/skills/animate/SKILL.md) skill when the user requests animation, transition, motion, or a more lively interface.

Before writing animation code:

- Decide whether animation is necessary.
- Define its purpose: feedback, spatial consistency, state indication, preventing a jarring change, explanation, or delight.
- Choose the simplest sufficient tool, usually a CSS transition.
- Prefer `transform` and `opacity`.
- Do not use `transition: all`, `scale(0)`, or `ease-in` for UI.
- Use custom easing consistent with the skill and codebase.
- Include `prefers-reduced-motion`.
- Limit hover motion to pointers that support hover.
- Avoid animation on actions performed very frequently or initiated by keyboard shortcuts.

## 4. Plan Before Large Changes

Always create an implementation plan before executing a PRD or feature that requires major code changes.

The plan must cover at minimum:

- Goal and scope.
- Files or code areas to change.
- Reusable components and patterns to use.
- Data flow, state, and important interactions.
- Token mapping from [design.md](spec/design.md).
- Risks, dependencies, and decisions that require user input.
- Validation plan.

When implementation includes a table, the implementation plan must explicitly ask which responsive presentation is wanted:

- **Mobile card:** use `UiTableView`'s optional `mobileCards` mode and an explicit `mobile-cards` slot when mobile needs different content grouping or action hierarchy.
- **Scrollable table:** keep the default table presentation and use the existing horizontal-scroll behavior on narrow viewports.

Do not choose between these modes silently. Explain the tradeoff in the plan and confirm the user's preference before implementation when the choice materially changes the layout.

If the required reusable component does not exist, add a clear warning to the plan. Explain the required new component, why existing components cannot be used, and the scope impact.

For small, isolated changes, a short plan is still recommended, but a separate planning document is not required unless requested by the user.

## 5. Reusable Components First

When building a page or feature:

1. Search for existing components before creating a new one.
2. Reuse components in `@core/components`, `components`, and Vuetify components already used by the project.
3. Follow existing APIs, naming, styling, and behavior.
4. Avoid duplicate markup, duplicate tokens, and one-off patterns.
5. If a pattern is used in more than one place, consider extracting it into a reusable component.
6. Do not create a custom component that only wraps Vuetify without clear behavior or abstraction.

Use the component mapping in [design.md](spec/design.md) to choose between `VCard`, `VBtn`, `VTextField`, `VRow`, `VCol`, `VDataTable`, `UiTableView`, `UiSectionHeader`, and other relevant project components.

## 6. Design System Rules

- Use the font, typography tokens, line heights, and utility classes from [design.md](spec/design.md).
- Use semantic theme colors such as `primary`, `surface`, `background`, `on-surface`, `success`, `warning`, `error`, and `info` before using direct hex values.
- Use the documented primitive palette or opacity tokens when semantic colors are insufficient.
- Ensure both light and dark themes remain readable.
- Maintain consistency in radius, spacing, borders, elevation, and density with existing project patterns.
- Do not add parallel tokens without a clear reason and an update to [design.md](spec/design.md).
- New design must make visual decisions specific to the subject, audience, and page goal; avoid generic template layouts.
- Use structure, labels, dividers, and numbering only when they clarify hierarchy or communicate a real relationship between content.
- UI copy must be clear, active, sentence case, and oriented around user actions.

## 7. Implementation Workflow

Follow this order for UI changes:

1. Understand the user, subject, audience, and the page's single job.
2. Read `agents.md` and [design.md](spec/design.md).
3. Inspect relevant pages, components, routes, composables, stores, and assets.
4. Create a plan for large changes.
5. Define tokens, component mapping, layout, and interactions before coding.
6. Implement using existing reusable components.
7. Add a new component only after an actual gap has been identified.
8. Ensure responsive behavior, loading state, empty state, error state, and success feedback.
9. Review visual hierarchy, spacing, typography, contrast, focus state, and interaction polish.
10. Run relevant validation and report the results.

## 8. Accessibility and UX Quality

Every new page or component must consider:

- Semantic HTML and clear labels.
- Keyboard navigation and visible focus states.
- Contrast in light and dark themes.
- Adequate touch targets.
- Responsive layouts for mobile and desktop.
- Loading, empty, error, disabled, and success states.
- `aria-*` only when semantic HTML is insufficient.
- `prefers-reduced-motion` for all motion.
- Do not communicate important information through color or animation alone.

## 9. Code Quality and Scope Control

- Follow the existing Nuxt, Vue 3, TypeScript, Vuetify, ESLint, and folder-structure conventions.
- Avoid unrelated changes.
- Do not delete or overwrite user files without a clear reason and approved scope.
- Preserve existing changes that are unrelated to the task.
- Use `apply_patch` for file edits.
- Do not add a new dependency when existing capabilities are sufficient.
- When finding a bug outside the scope, report it; do not fix it silently.
- When assumptions are necessary, document them in the plan or final report.

## 10. Visual Review

If the environment supports screenshots or browser previews, perform a visual review after implementation.

Check that:

- The page feels intentional, not like a collection of default components.
- The hero or primary content immediately explains the page's purpose.
- Typography hierarchy follows the documented tokens.
- Semantic colors are consistent.
- Spacing and alignment remain stable at key breakpoints.
- Interactions provide appropriate feedback without excess.
- One visual signature is enough; remove decoration that does not help.

When reviewing UI code using a Before/After format, use a Markdown table with `Before`, `After`, and `Why` columns.

## 11. Validation and Handoff

Before declaring the work complete:

- Check that the diff contains only requested changes.
- Run lint, typecheck, build, or tests relevant to the scope.
- Verify documentation links and component imports.
- Verify light and dark themes when changes touch colors or surfaces.
- Verify reduced motion when changes touch animation.
- Report changed files, validations run, results, and remaining blockers.

Do not declare completion if important validation fails or if a required decision is still waiting for user input.

## 12. Documentation

When adding tokens, component mappings, layout patterns, or reusable motion rules, update [design.md](spec/design.md) in the same change.

When making an architectural or workflow decision that applies across features, update this document so future agents follow the same decision.

