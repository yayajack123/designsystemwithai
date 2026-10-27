# New Project Setup Guide

Use this guide after cloning this repository to start a new admin or system application. This starter follows a **one brand per deployment** model: each application deployment has its own environment configuration, backend connection, and release process.

## Start with Codex or another AI agent

After cloning, ask the agent:

> Follow `NEW_PROJECT_SETUP.md` and help me configure this clone for a new application. Read the applicable `AGENTS.md` instructions and `spec/design.md` before changing code or UI. Ask for missing product decisions, then make the agreed setup changes and report required environment variables and validation results.

The agent should read root `AGENTS.md` when present, `.agents/AGENTS.md`, and `spec/design.md` before changing code or UI. It should inspect existing components, pages, navigation, API modules, and project scripts before adding replacements.

## Information to provide

Give the agent what you know. It should ask concise questions for decisions that materially affect the setup.

- Application name and purpose.
- Users and roles, such as administrator, staff, teacher, or customer.
- Modules and pages to keep, remove, or add.
- Brand color and whether to provide a logo or favicon.
- Backend API URL and authentication method.
- Deployment platform and environment names, if known.

The agent can proceed with known details while leaving unknown credentials as environment variables. It must not invent production secrets or put secrets in source files or documentation.

## Setup steps

1. **Review the clone.** Read applicable agent instructions (`AGENTS.md` when present and `.agents/AGENTS.md`), `spec/design.md`, `README.md`, `package.json`, and `.env.example`. Check repository status before editing and preserve existing user changes.
2. **Set application identity.** Configure `NUXT_PUBLIC_APP_NAME`, `NUXT_PUBLIC_BRAND_PRIMARY`, and, when provided, `NUXT_PUBLIC_APP_LOGO` and `NUXT_PUBLIC_APP_FAVICON`.
3. **Preserve the existing logo by default.** If `NUXT_PUBLIC_APP_LOGO` is empty, the current logo at `assets/images/logo.svg` remains in use. Only replace it when the user supplies or requests another logo. Custom public assets can live in `public/branding/`.
4. **Connect the backend.** Set `API_BASE_URL`, `SANCTUM_BASE_URL`, and `AUTH_ENABLED` for the new application. Keep credentials and private keys in local `.env` or the deployment provider's secret store. Do not commit `.env`.
5. **Shape the application.** Update pages and navigation to match the requested modules. Reuse project components and semantic theme colors. Keep brand choices in runtime configuration instead of hardcoding them in components.
6. **Keep deployments separate.** Configure each application deployment with one brand and one backend configuration. Do not add host-based tenant detection or shared-tenant behavior unless the user explicitly changes the architecture.
7. **Document project-specific choices.** Update `README.md` and `spec/design.md` when setup changes environment variables, tokens, component mappings, or reusable patterns.
8. **Validate and summarize.** Run relevant build, lint, and type checks that are available in the repository. Run tests when requested. Report changed files, required environment values, commands run, and any remaining blockers.

## Environment variables

Start from `.env.example` and create a local `.env`:

```sh
cp .env.example .env
```

Set these values for each deployment:

| Variable | Purpose |
| --- | --- |
| `NUXT_PUBLIC_APP_NAME` | Application name shown in the page title and interface |
| `NUXT_PUBLIC_APP_LOGO` | Optional public logo path, such as `/branding/logo.svg`; empty keeps the current logo |
| `NUXT_PUBLIC_APP_FAVICON` | Public favicon path, such as `/branding/favicon.ico` |
| `NUXT_PUBLIC_BRAND_PRIMARY` | Brand primary color in hex format, such as `#2457C5` |
| `API_BASE_URL` | Backend API base URL |
| `SANCTUM_BASE_URL` | Laravel Sanctum URL, when used by the backend |
| `AUTH_ENABLED` | Set to `true` when API authentication is ready |
| `APP_ENV` | Application environment; Basic Auth is enabled only in development |

Set deployment environment values before building the application. Do not put passwords, API keys, or other secrets in `NUXT_PUBLIC_*` variables because Nuxt exposes those values to the browser.

## Local development

Install dependencies and run the project:

```sh
pnpm install
pnpm dev
```

Build for production:

```sh
pnpm build
```

The development Basic Auth defaults are `admin` / `change-me`. Set `BASIC_AUTH_USERNAME` and `BASIC_AUTH_PASSWORD` in `.env` to change them. Replace these values for local teams as needed; Basic Auth is not enabled when `APP_ENV` is not `development`.
