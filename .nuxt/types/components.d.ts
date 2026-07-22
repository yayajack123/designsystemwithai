
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AppBarSearch: typeof import("../../@core/components/AppBarSearch.vue")['default']
  AppDrawerHeaderSection: typeof import("../../@core/components/AppDrawerHeaderSection.vue")['default']
  AppStepper: typeof import("../../@core/components/AppStepper.vue")['default']
  BuyNow: typeof import("../../@core/components/BuyNow.vue")['default']
  CustomizerSection: typeof import("../../@core/components/CustomizerSection.vue")['default']
  DialogCloseBtn: typeof import("../../@core/components/DialogCloseBtn.vue")['default']
  DropZone: typeof import("../../@core/components/DropZone.vue")['default']
  I18n: typeof import("../../@core/components/I18n.vue")['default']
  MoreBtn: typeof import("../../@core/components/MoreBtn.vue")['default']
  Notifications: typeof import("../../@core/components/Notifications.vue")['default']
  ProductDescriptionEditor: typeof import("../../@core/components/ProductDescriptionEditor.vue")['default']
  ScrollToTop: typeof import("../../@core/components/ScrollToTop.vue")['default']
  Shortcuts: typeof import("../../@core/components/Shortcuts.vue")['default']
  TablePagination: typeof import("../../@core/components/TablePagination.vue")['default']
  TheCustomizer: typeof import("../../@core/components/TheCustomizer.vue")['default']
  ThemeSwitcher: typeof import("../../@core/components/ThemeSwitcher.vue")['default']
  TiptapEditor: typeof import("../../@core/components/TiptapEditor.vue")['default']
  AppDateTimePicker: typeof import("../../@core/components/app-form-elements/AppDateTimePicker.vue")['default']
  CustomCheckboxes: typeof import("../../@core/components/app-form-elements/CustomCheckboxes.vue")['default']
  CustomCheckboxesWithIcon: typeof import("../../@core/components/app-form-elements/CustomCheckboxesWithIcon.vue")['default']
  CustomCheckboxesWithImage: typeof import("../../@core/components/app-form-elements/CustomCheckboxesWithImage.vue")['default']
  CustomRadios: typeof import("../../@core/components/app-form-elements/CustomRadios.vue")['default']
  CustomRadiosWithIcon: typeof import("../../@core/components/app-form-elements/CustomRadiosWithIcon.vue")['default']
  CustomRadiosWithImage: typeof import("../../@core/components/app-form-elements/CustomRadiosWithImage.vue")['default']
  AppCardActions: typeof import("../../@core/components/cards/AppCardActions.vue")['default']
  AppCardCode: typeof import("../../@core/components/cards/AppCardCode.vue")['default']
  CardStatisticsHorizontal: typeof import("../../@core/components/cards/CardStatisticsHorizontal.vue")['default']
  CardStatisticsVertical: typeof import("../../@core/components/cards/CardStatisticsVertical.vue")['default']
  CardStatisticsWithIcon: typeof import("../../@core/components/cards/CardStatisticsWithIcon.vue")['default']
  CardStatisticsWithImages: typeof import("../../@core/components/cards/CardStatisticsWithImages.vue")['default']
  AppLoadingIndicator: typeof import("../../components/AppLoadingIndicator.vue")['default']
  AppPricing: typeof import("../../components/AppPricing.vue")['default']
  AppSearchHeader: typeof import("../../components/AppSearchHeader.vue")['default']
  ErrorHeader: typeof import("../../components/ErrorHeader.vue")['default']
  VueApexCharts: typeof import("../../components/VueApexCharts.client.vue")['default']
  AddAuthenticatorAppDialog: typeof import("../../components/dialogs/AddAuthenticatorAppDialog.vue")['default']
  AddEditAddressDialog: typeof import("../../components/dialogs/AddEditAddressDialog.vue")['default']
  AddEditPermissionDialog: typeof import("../../components/dialogs/AddEditPermissionDialog.vue")['default']
  AddEditRoleDialog: typeof import("../../components/dialogs/AddEditRoleDialog.vue")['default']
  AddPaymentMethodDialog: typeof import("../../components/dialogs/AddPaymentMethodDialog.vue")['default']
  AllStudentDialog: typeof import("../../components/dialogs/AllStudentDialog.vue")['default']
  ApproveProjectDialog: typeof import("../../components/dialogs/ApproveProjectDialog.vue")['default']
  CardAddEditDialog: typeof import("../../components/dialogs/CardAddEditDialog.vue")['default']
  ConfirmDialog: typeof import("../../components/dialogs/ConfirmDialog.vue")['default']
  CreateAppDialog: typeof import("../../components/dialogs/CreateAppDialog.vue")['default']
  EnableOneTimePasswordDialog: typeof import("../../components/dialogs/EnableOneTimePasswordDialog.vue")['default']
  PaymentProvidersDialog: typeof import("../../components/dialogs/PaymentProvidersDialog.vue")['default']
  PresenceDialog: typeof import("../../components/dialogs/PresenceDialog.vue")['default']
  PricingPlanDialog: typeof import("../../components/dialogs/PricingPlanDialog.vue")['default']
  ReferAndEarnDialog: typeof import("../../components/dialogs/ReferAndEarnDialog.vue")['default']
  RejectProjectDialog: typeof import("../../components/dialogs/RejectProjectDialog.vue")['default']
  ScheduleDetailsDialog: typeof import("../../components/dialogs/ScheduleDetailsDialog.vue")['default']
  ScoreHistoryDialog: typeof import("../../components/dialogs/ScoreHistoryDialog.vue")['default']
  ShareProjectDialog: typeof import("../../components/dialogs/ShareProjectDialog.vue")['default']
  TwoFactorAuthDialog: typeof import("../../components/dialogs/TwoFactorAuthDialog.vue")['default']
  UserInfoEditDialog: typeof import("../../components/dialogs/UserInfoEditDialog.vue")['default']
  UserUpgradePlanDialog: typeof import("../../components/dialogs/UserUpgradePlanDialog.vue")['default']
  AccountAvatar: typeof import("../../components/sections/account-settings/AccountAvatar.vue")['default']
  AccountSettings: typeof import("../../components/sections/account-settings/AccountSettings.vue")['default']
  AccountSettingsDelete: typeof import("../../components/sections/account-settings/AccountSettingsDelete.vue")['default']
  AccountSettingsSecurity: typeof import("../../components/sections/account-settings/AccountSettingsSecurity.vue")['default']
  UiAutoComplete: typeof import("../../components/ui/UiAutoComplete.vue")['default']
  UiSectionHeader: typeof import("../../components/ui/UiSectionHeader.vue")['default']
  UiTableView: typeof import("../../components/ui/UiTableView.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtLinkLocale: typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
  SwitchLocalePathLink: typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAppBarSearch: LazyComponent<typeof import("../../@core/components/AppBarSearch.vue")['default']>
  LazyAppDrawerHeaderSection: LazyComponent<typeof import("../../@core/components/AppDrawerHeaderSection.vue")['default']>
  LazyAppStepper: LazyComponent<typeof import("../../@core/components/AppStepper.vue")['default']>
  LazyBuyNow: LazyComponent<typeof import("../../@core/components/BuyNow.vue")['default']>
  LazyCustomizerSection: LazyComponent<typeof import("../../@core/components/CustomizerSection.vue")['default']>
  LazyDialogCloseBtn: LazyComponent<typeof import("../../@core/components/DialogCloseBtn.vue")['default']>
  LazyDropZone: LazyComponent<typeof import("../../@core/components/DropZone.vue")['default']>
  LazyI18n: LazyComponent<typeof import("../../@core/components/I18n.vue")['default']>
  LazyMoreBtn: LazyComponent<typeof import("../../@core/components/MoreBtn.vue")['default']>
  LazyNotifications: LazyComponent<typeof import("../../@core/components/Notifications.vue")['default']>
  LazyProductDescriptionEditor: LazyComponent<typeof import("../../@core/components/ProductDescriptionEditor.vue")['default']>
  LazyScrollToTop: LazyComponent<typeof import("../../@core/components/ScrollToTop.vue")['default']>
  LazyShortcuts: LazyComponent<typeof import("../../@core/components/Shortcuts.vue")['default']>
  LazyTablePagination: LazyComponent<typeof import("../../@core/components/TablePagination.vue")['default']>
  LazyTheCustomizer: LazyComponent<typeof import("../../@core/components/TheCustomizer.vue")['default']>
  LazyThemeSwitcher: LazyComponent<typeof import("../../@core/components/ThemeSwitcher.vue")['default']>
  LazyTiptapEditor: LazyComponent<typeof import("../../@core/components/TiptapEditor.vue")['default']>
  LazyAppDateTimePicker: LazyComponent<typeof import("../../@core/components/app-form-elements/AppDateTimePicker.vue")['default']>
  LazyCustomCheckboxes: LazyComponent<typeof import("../../@core/components/app-form-elements/CustomCheckboxes.vue")['default']>
  LazyCustomCheckboxesWithIcon: LazyComponent<typeof import("../../@core/components/app-form-elements/CustomCheckboxesWithIcon.vue")['default']>
  LazyCustomCheckboxesWithImage: LazyComponent<typeof import("../../@core/components/app-form-elements/CustomCheckboxesWithImage.vue")['default']>
  LazyCustomRadios: LazyComponent<typeof import("../../@core/components/app-form-elements/CustomRadios.vue")['default']>
  LazyCustomRadiosWithIcon: LazyComponent<typeof import("../../@core/components/app-form-elements/CustomRadiosWithIcon.vue")['default']>
  LazyCustomRadiosWithImage: LazyComponent<typeof import("../../@core/components/app-form-elements/CustomRadiosWithImage.vue")['default']>
  LazyAppCardActions: LazyComponent<typeof import("../../@core/components/cards/AppCardActions.vue")['default']>
  LazyAppCardCode: LazyComponent<typeof import("../../@core/components/cards/AppCardCode.vue")['default']>
  LazyCardStatisticsHorizontal: LazyComponent<typeof import("../../@core/components/cards/CardStatisticsHorizontal.vue")['default']>
  LazyCardStatisticsVertical: LazyComponent<typeof import("../../@core/components/cards/CardStatisticsVertical.vue")['default']>
  LazyCardStatisticsWithIcon: LazyComponent<typeof import("../../@core/components/cards/CardStatisticsWithIcon.vue")['default']>
  LazyCardStatisticsWithImages: LazyComponent<typeof import("../../@core/components/cards/CardStatisticsWithImages.vue")['default']>
  LazyAppLoadingIndicator: LazyComponent<typeof import("../../components/AppLoadingIndicator.vue")['default']>
  LazyAppPricing: LazyComponent<typeof import("../../components/AppPricing.vue")['default']>
  LazyAppSearchHeader: LazyComponent<typeof import("../../components/AppSearchHeader.vue")['default']>
  LazyErrorHeader: LazyComponent<typeof import("../../components/ErrorHeader.vue")['default']>
  LazyVueApexCharts: LazyComponent<typeof import("../../components/VueApexCharts.client.vue")['default']>
  LazyAddAuthenticatorAppDialog: LazyComponent<typeof import("../../components/dialogs/AddAuthenticatorAppDialog.vue")['default']>
  LazyAddEditAddressDialog: LazyComponent<typeof import("../../components/dialogs/AddEditAddressDialog.vue")['default']>
  LazyAddEditPermissionDialog: LazyComponent<typeof import("../../components/dialogs/AddEditPermissionDialog.vue")['default']>
  LazyAddEditRoleDialog: LazyComponent<typeof import("../../components/dialogs/AddEditRoleDialog.vue")['default']>
  LazyAddPaymentMethodDialog: LazyComponent<typeof import("../../components/dialogs/AddPaymentMethodDialog.vue")['default']>
  LazyAllStudentDialog: LazyComponent<typeof import("../../components/dialogs/AllStudentDialog.vue")['default']>
  LazyApproveProjectDialog: LazyComponent<typeof import("../../components/dialogs/ApproveProjectDialog.vue")['default']>
  LazyCardAddEditDialog: LazyComponent<typeof import("../../components/dialogs/CardAddEditDialog.vue")['default']>
  LazyConfirmDialog: LazyComponent<typeof import("../../components/dialogs/ConfirmDialog.vue")['default']>
  LazyCreateAppDialog: LazyComponent<typeof import("../../components/dialogs/CreateAppDialog.vue")['default']>
  LazyEnableOneTimePasswordDialog: LazyComponent<typeof import("../../components/dialogs/EnableOneTimePasswordDialog.vue")['default']>
  LazyPaymentProvidersDialog: LazyComponent<typeof import("../../components/dialogs/PaymentProvidersDialog.vue")['default']>
  LazyPresenceDialog: LazyComponent<typeof import("../../components/dialogs/PresenceDialog.vue")['default']>
  LazyPricingPlanDialog: LazyComponent<typeof import("../../components/dialogs/PricingPlanDialog.vue")['default']>
  LazyReferAndEarnDialog: LazyComponent<typeof import("../../components/dialogs/ReferAndEarnDialog.vue")['default']>
  LazyRejectProjectDialog: LazyComponent<typeof import("../../components/dialogs/RejectProjectDialog.vue")['default']>
  LazyScheduleDetailsDialog: LazyComponent<typeof import("../../components/dialogs/ScheduleDetailsDialog.vue")['default']>
  LazyScoreHistoryDialog: LazyComponent<typeof import("../../components/dialogs/ScoreHistoryDialog.vue")['default']>
  LazyShareProjectDialog: LazyComponent<typeof import("../../components/dialogs/ShareProjectDialog.vue")['default']>
  LazyTwoFactorAuthDialog: LazyComponent<typeof import("../../components/dialogs/TwoFactorAuthDialog.vue")['default']>
  LazyUserInfoEditDialog: LazyComponent<typeof import("../../components/dialogs/UserInfoEditDialog.vue")['default']>
  LazyUserUpgradePlanDialog: LazyComponent<typeof import("../../components/dialogs/UserUpgradePlanDialog.vue")['default']>
  LazyAccountAvatar: LazyComponent<typeof import("../../components/sections/account-settings/AccountAvatar.vue")['default']>
  LazyAccountSettings: LazyComponent<typeof import("../../components/sections/account-settings/AccountSettings.vue")['default']>
  LazyAccountSettingsDelete: LazyComponent<typeof import("../../components/sections/account-settings/AccountSettingsDelete.vue")['default']>
  LazyAccountSettingsSecurity: LazyComponent<typeof import("../../components/sections/account-settings/AccountSettingsSecurity.vue")['default']>
  LazyUiAutoComplete: LazyComponent<typeof import("../../components/ui/UiAutoComplete.vue")['default']>
  LazyUiSectionHeader: LazyComponent<typeof import("../../components/ui/UiSectionHeader.vue")['default']>
  LazyUiTableView: LazyComponent<typeof import("../../components/ui/UiTableView.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtLinkLocale: LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
  LazySwitchLocalePathLink: LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
