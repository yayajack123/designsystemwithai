# Timedoor Admin Starter Kit (Nuxt 3)

Official admin starter kit for Timedoor Project. This template use [Materio Admin Template](https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/documentation/)


## Project Setup

Copy this to .env
```sh
AUTH_ENABLED=false
API_BASE_URL=https://be-example.timedoor-web.my.id/api/admin/v1
SANCTUM_BASE_URL=https://be-example.timedoor-web.my.id/sanctum
```

Set `AUTH_ENABLED=true` when API authentication is ready.
```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Demo Account
```sh
email: demo@timedoor.net
password: demo123
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```
