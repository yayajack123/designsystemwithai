# Admin Starter Kit (Nuxt 3)

Nuxt 3 + Vue 3 + Vuetify starter for admin and system applications. Configure one brand per deployment with Nuxt runtime environment variables.

## Setup

For a step-by-step guide to adapting this starter after cloning, see [NEW_PROJECT_SETUP.md](NEW_PROJECT_SETUP.md).

Copy `.env.example` to `.env`, then set the app name, brand color, logo, favicon, API URL, and authentication settings for this deployment.

The current Timedoor Academy logo in `assets/images/logo.svg` remains the default. Place custom logo and favicon files in `public/branding/` only when a deployment needs its own identity. Set `NUXT_PUBLIC_APP_LOGO=/branding/logo.svg` and `NUXT_PUBLIC_APP_FAVICON=/branding/favicon.ico`; leave `NUXT_PUBLIC_APP_LOGO` empty to keep the current logo.

Install dependencies and start development server:

```sh
yarn install
yarn dev
```

Nuxt public runtime values can be changed per deployment without editing application components. Keep secrets and private API credentials out of `NUXT_PUBLIC_*` variables.

## Authentication and API

Set `AUTH_ENABLED=true` when the connected API supports authentication. Configure `API_BASE_URL` and `SANCTUM_BASE_URL` for the target backend. Demo credentials should be provided by each application environment; do not commit real credentials.

## Production build

```sh
yarn build
```
