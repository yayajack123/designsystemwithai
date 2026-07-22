import type { ComputedRef, MaybeRef } from 'vue'

type ComponentProps<T> = T extends new(...args: any) => { $props: infer P } ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any ? P
  : {}

declare module 'nuxt/app' {
  interface NuxtLayouts {
    blank: ComponentProps<typeof import("/Users/user/Documents/Code Project/microdemy-DS/layouts/blank.vue").default>,
    "components-default-layout-with-horizontal-nav": ComponentProps<typeof import("/Users/user/Documents/Code Project/microdemy-DS/layouts/components/DefaultLayoutWithHorizontalNav.vue").default>,
    "components-default-layout-with-vertical-nav": ComponentProps<typeof import("/Users/user/Documents/Code Project/microdemy-DS/layouts/components/DefaultLayoutWithVerticalNav.vue").default>,
    "components-footer": ComponentProps<typeof import("/Users/user/Documents/Code Project/microdemy-DS/layouts/components/Footer.vue").default>,
    "components-nav-bar-notifications": ComponentProps<typeof import("/Users/user/Documents/Code Project/microdemy-DS/layouts/components/NavBarNotifications.vue").default>,
    "components-nav-search-bar": ComponentProps<typeof import("/Users/user/Documents/Code Project/microdemy-DS/layouts/components/NavSearchBar.vue").default>,
    "components-navbar-shortcuts": ComponentProps<typeof import("/Users/user/Documents/Code Project/microdemy-DS/layouts/components/NavbarShortcuts.vue").default>,
    "components-navbar-theme-switcher": ComponentProps<typeof import("/Users/user/Documents/Code Project/microdemy-DS/layouts/components/NavbarThemeSwitcher.vue").default>,
    "components-user-profile": ComponentProps<typeof import("/Users/user/Documents/Code Project/microdemy-DS/layouts/components/UserProfile.vue").default>,
    default: ComponentProps<typeof import("/Users/user/Documents/Code Project/microdemy-DS/layouts/default.vue").default>,
}
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}