
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AppBarSearch': typeof import("../@core/components/AppBarSearch.vue")['default']
    'AppDrawerHeaderSection': typeof import("../@core/components/AppDrawerHeaderSection.vue")['default']
    'AppStepper': typeof import("../@core/components/AppStepper.vue")['default']
    'BuyNow': typeof import("../@core/components/BuyNow.vue")['default']
    'CustomizerSection': typeof import("../@core/components/CustomizerSection.vue")['default']
    'DialogCloseBtn': typeof import("../@core/components/DialogCloseBtn.vue")['default']
    'DropZone': typeof import("../@core/components/DropZone.vue")['default']
    'I18n': typeof import("../@core/components/I18n.vue")['default']
    'MoreBtn': typeof import("../@core/components/MoreBtn.vue")['default']
    'Notifications': typeof import("../@core/components/Notifications.vue")['default']
    'ProductDescriptionEditor': typeof import("../@core/components/ProductDescriptionEditor.vue")['default']
    'ScrollToTop': typeof import("../@core/components/ScrollToTop.vue")['default']
    'Shortcuts': typeof import("../@core/components/Shortcuts.vue")['default']
    'TablePagination': typeof import("../@core/components/TablePagination.vue")['default']
    'TheCustomizer': typeof import("../@core/components/TheCustomizer.vue")['default']
    'ThemeSwitcher': typeof import("../@core/components/ThemeSwitcher.vue")['default']
    'TiptapEditor': typeof import("../@core/components/TiptapEditor.vue")['default']
    'AppDateTimePicker': typeof import("../@core/components/app-form-elements/AppDateTimePicker.vue")['default']
    'CustomCheckboxes': typeof import("../@core/components/app-form-elements/CustomCheckboxes.vue")['default']
    'CustomCheckboxesWithIcon': typeof import("../@core/components/app-form-elements/CustomCheckboxesWithIcon.vue")['default']
    'CustomCheckboxesWithImage': typeof import("../@core/components/app-form-elements/CustomCheckboxesWithImage.vue")['default']
    'CustomRadios': typeof import("../@core/components/app-form-elements/CustomRadios.vue")['default']
    'CustomRadiosWithIcon': typeof import("../@core/components/app-form-elements/CustomRadiosWithIcon.vue")['default']
    'CustomRadiosWithImage': typeof import("../@core/components/app-form-elements/CustomRadiosWithImage.vue")['default']
    'AppCardActions': typeof import("../@core/components/cards/AppCardActions.vue")['default']
    'AppCardCode': typeof import("../@core/components/cards/AppCardCode.vue")['default']
    'CardStatisticsHorizontal': typeof import("../@core/components/cards/CardStatisticsHorizontal.vue")['default']
    'CardStatisticsVertical': typeof import("../@core/components/cards/CardStatisticsVertical.vue")['default']
    'CardStatisticsWithIcon': typeof import("../@core/components/cards/CardStatisticsWithIcon.vue")['default']
    'CardStatisticsWithImages': typeof import("../@core/components/cards/CardStatisticsWithImages.vue")['default']
    'AppLoadingIndicator': typeof import("../components/AppLoadingIndicator.vue")['default']
    'AppPricing': typeof import("../components/AppPricing.vue")['default']
    'AppSearchHeader': typeof import("../components/AppSearchHeader.vue")['default']
    'ErrorHeader': typeof import("../components/ErrorHeader.vue")['default']
    'VueApexCharts': typeof import("../components/VueApexCharts.client.vue")['default']
    'AddAuthenticatorAppDialog': typeof import("../components/dialogs/AddAuthenticatorAppDialog.vue")['default']
    'AddEditAddressDialog': typeof import("../components/dialogs/AddEditAddressDialog.vue")['default']
    'AddEditPermissionDialog': typeof import("../components/dialogs/AddEditPermissionDialog.vue")['default']
    'AddEditRoleDialog': typeof import("../components/dialogs/AddEditRoleDialog.vue")['default']
    'AddPaymentMethodDialog': typeof import("../components/dialogs/AddPaymentMethodDialog.vue")['default']
    'AllStudentDialog': typeof import("../components/dialogs/AllStudentDialog.vue")['default']
    'ApproveProjectDialog': typeof import("../components/dialogs/ApproveProjectDialog.vue")['default']
    'CardAddEditDialog': typeof import("../components/dialogs/CardAddEditDialog.vue")['default']
    'ConfirmDialog': typeof import("../components/dialogs/ConfirmDialog.vue")['default']
    'CreateAppDialog': typeof import("../components/dialogs/CreateAppDialog.vue")['default']
    'EnableOneTimePasswordDialog': typeof import("../components/dialogs/EnableOneTimePasswordDialog.vue")['default']
    'PaymentProvidersDialog': typeof import("../components/dialogs/PaymentProvidersDialog.vue")['default']
    'PresenceDialog': typeof import("../components/dialogs/PresenceDialog.vue")['default']
    'PricingPlanDialog': typeof import("../components/dialogs/PricingPlanDialog.vue")['default']
    'ReferAndEarnDialog': typeof import("../components/dialogs/ReferAndEarnDialog.vue")['default']
    'RejectProjectDialog': typeof import("../components/dialogs/RejectProjectDialog.vue")['default']
    'ScheduleDetailsDialog': typeof import("../components/dialogs/ScheduleDetailsDialog.vue")['default']
    'ScoreHistoryDialog': typeof import("../components/dialogs/ScoreHistoryDialog.vue")['default']
    'ShareProjectDialog': typeof import("../components/dialogs/ShareProjectDialog.vue")['default']
    'TwoFactorAuthDialog': typeof import("../components/dialogs/TwoFactorAuthDialog.vue")['default']
    'UserInfoEditDialog': typeof import("../components/dialogs/UserInfoEditDialog.vue")['default']
    'UserUpgradePlanDialog': typeof import("../components/dialogs/UserUpgradePlanDialog.vue")['default']
    'AccountAvatar': typeof import("../components/sections/account-settings/AccountAvatar.vue")['default']
    'AccountSettings': typeof import("../components/sections/account-settings/AccountSettings.vue")['default']
    'AccountSettingsDelete': typeof import("../components/sections/account-settings/AccountSettingsDelete.vue")['default']
    'AccountSettingsSecurity': typeof import("../components/sections/account-settings/AccountSettingsSecurity.vue")['default']
    'UiAutoComplete': typeof import("../components/ui/UiAutoComplete.vue")['default']
    'UiSectionHeader': typeof import("../components/ui/UiSectionHeader.vue")['default']
    'UiTableView': typeof import("../components/ui/UiTableView.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtLinkLocale': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'SwitchLocalePathLink': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'VueApexCharts': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAppBarSearch': LazyComponent<typeof import("../@core/components/AppBarSearch.vue")['default']>
    'LazyAppDrawerHeaderSection': LazyComponent<typeof import("../@core/components/AppDrawerHeaderSection.vue")['default']>
    'LazyAppStepper': LazyComponent<typeof import("../@core/components/AppStepper.vue")['default']>
    'LazyBuyNow': LazyComponent<typeof import("../@core/components/BuyNow.vue")['default']>
    'LazyCustomizerSection': LazyComponent<typeof import("../@core/components/CustomizerSection.vue")['default']>
    'LazyDialogCloseBtn': LazyComponent<typeof import("../@core/components/DialogCloseBtn.vue")['default']>
    'LazyDropZone': LazyComponent<typeof import("../@core/components/DropZone.vue")['default']>
    'LazyI18n': LazyComponent<typeof import("../@core/components/I18n.vue")['default']>
    'LazyMoreBtn': LazyComponent<typeof import("../@core/components/MoreBtn.vue")['default']>
    'LazyNotifications': LazyComponent<typeof import("../@core/components/Notifications.vue")['default']>
    'LazyProductDescriptionEditor': LazyComponent<typeof import("../@core/components/ProductDescriptionEditor.vue")['default']>
    'LazyScrollToTop': LazyComponent<typeof import("../@core/components/ScrollToTop.vue")['default']>
    'LazyShortcuts': LazyComponent<typeof import("../@core/components/Shortcuts.vue")['default']>
    'LazyTablePagination': LazyComponent<typeof import("../@core/components/TablePagination.vue")['default']>
    'LazyTheCustomizer': LazyComponent<typeof import("../@core/components/TheCustomizer.vue")['default']>
    'LazyThemeSwitcher': LazyComponent<typeof import("../@core/components/ThemeSwitcher.vue")['default']>
    'LazyTiptapEditor': LazyComponent<typeof import("../@core/components/TiptapEditor.vue")['default']>
    'LazyAppDateTimePicker': LazyComponent<typeof import("../@core/components/app-form-elements/AppDateTimePicker.vue")['default']>
    'LazyCustomCheckboxes': LazyComponent<typeof import("../@core/components/app-form-elements/CustomCheckboxes.vue")['default']>
    'LazyCustomCheckboxesWithIcon': LazyComponent<typeof import("../@core/components/app-form-elements/CustomCheckboxesWithIcon.vue")['default']>
    'LazyCustomCheckboxesWithImage': LazyComponent<typeof import("../@core/components/app-form-elements/CustomCheckboxesWithImage.vue")['default']>
    'LazyCustomRadios': LazyComponent<typeof import("../@core/components/app-form-elements/CustomRadios.vue")['default']>
    'LazyCustomRadiosWithIcon': LazyComponent<typeof import("../@core/components/app-form-elements/CustomRadiosWithIcon.vue")['default']>
    'LazyCustomRadiosWithImage': LazyComponent<typeof import("../@core/components/app-form-elements/CustomRadiosWithImage.vue")['default']>
    'LazyAppCardActions': LazyComponent<typeof import("../@core/components/cards/AppCardActions.vue")['default']>
    'LazyAppCardCode': LazyComponent<typeof import("../@core/components/cards/AppCardCode.vue")['default']>
    'LazyCardStatisticsHorizontal': LazyComponent<typeof import("../@core/components/cards/CardStatisticsHorizontal.vue")['default']>
    'LazyCardStatisticsVertical': LazyComponent<typeof import("../@core/components/cards/CardStatisticsVertical.vue")['default']>
    'LazyCardStatisticsWithIcon': LazyComponent<typeof import("../@core/components/cards/CardStatisticsWithIcon.vue")['default']>
    'LazyCardStatisticsWithImages': LazyComponent<typeof import("../@core/components/cards/CardStatisticsWithImages.vue")['default']>
    'LazyAppLoadingIndicator': LazyComponent<typeof import("../components/AppLoadingIndicator.vue")['default']>
    'LazyAppPricing': LazyComponent<typeof import("../components/AppPricing.vue")['default']>
    'LazyAppSearchHeader': LazyComponent<typeof import("../components/AppSearchHeader.vue")['default']>
    'LazyErrorHeader': LazyComponent<typeof import("../components/ErrorHeader.vue")['default']>
    'LazyVueApexCharts': LazyComponent<typeof import("../components/VueApexCharts.client.vue")['default']>
    'LazyAddAuthenticatorAppDialog': LazyComponent<typeof import("../components/dialogs/AddAuthenticatorAppDialog.vue")['default']>
    'LazyAddEditAddressDialog': LazyComponent<typeof import("../components/dialogs/AddEditAddressDialog.vue")['default']>
    'LazyAddEditPermissionDialog': LazyComponent<typeof import("../components/dialogs/AddEditPermissionDialog.vue")['default']>
    'LazyAddEditRoleDialog': LazyComponent<typeof import("../components/dialogs/AddEditRoleDialog.vue")['default']>
    'LazyAddPaymentMethodDialog': LazyComponent<typeof import("../components/dialogs/AddPaymentMethodDialog.vue")['default']>
    'LazyAllStudentDialog': LazyComponent<typeof import("../components/dialogs/AllStudentDialog.vue")['default']>
    'LazyApproveProjectDialog': LazyComponent<typeof import("../components/dialogs/ApproveProjectDialog.vue")['default']>
    'LazyCardAddEditDialog': LazyComponent<typeof import("../components/dialogs/CardAddEditDialog.vue")['default']>
    'LazyConfirmDialog': LazyComponent<typeof import("../components/dialogs/ConfirmDialog.vue")['default']>
    'LazyCreateAppDialog': LazyComponent<typeof import("../components/dialogs/CreateAppDialog.vue")['default']>
    'LazyEnableOneTimePasswordDialog': LazyComponent<typeof import("../components/dialogs/EnableOneTimePasswordDialog.vue")['default']>
    'LazyPaymentProvidersDialog': LazyComponent<typeof import("../components/dialogs/PaymentProvidersDialog.vue")['default']>
    'LazyPresenceDialog': LazyComponent<typeof import("../components/dialogs/PresenceDialog.vue")['default']>
    'LazyPricingPlanDialog': LazyComponent<typeof import("../components/dialogs/PricingPlanDialog.vue")['default']>
    'LazyReferAndEarnDialog': LazyComponent<typeof import("../components/dialogs/ReferAndEarnDialog.vue")['default']>
    'LazyRejectProjectDialog': LazyComponent<typeof import("../components/dialogs/RejectProjectDialog.vue")['default']>
    'LazyScheduleDetailsDialog': LazyComponent<typeof import("../components/dialogs/ScheduleDetailsDialog.vue")['default']>
    'LazyScoreHistoryDialog': LazyComponent<typeof import("../components/dialogs/ScoreHistoryDialog.vue")['default']>
    'LazyShareProjectDialog': LazyComponent<typeof import("../components/dialogs/ShareProjectDialog.vue")['default']>
    'LazyTwoFactorAuthDialog': LazyComponent<typeof import("../components/dialogs/TwoFactorAuthDialog.vue")['default']>
    'LazyUserInfoEditDialog': LazyComponent<typeof import("../components/dialogs/UserInfoEditDialog.vue")['default']>
    'LazyUserUpgradePlanDialog': LazyComponent<typeof import("../components/dialogs/UserUpgradePlanDialog.vue")['default']>
    'LazyAccountAvatar': LazyComponent<typeof import("../components/sections/account-settings/AccountAvatar.vue")['default']>
    'LazyAccountSettings': LazyComponent<typeof import("../components/sections/account-settings/AccountSettings.vue")['default']>
    'LazyAccountSettingsDelete': LazyComponent<typeof import("../components/sections/account-settings/AccountSettingsDelete.vue")['default']>
    'LazyAccountSettingsSecurity': LazyComponent<typeof import("../components/sections/account-settings/AccountSettingsSecurity.vue")['default']>
    'LazyUiAutoComplete': LazyComponent<typeof import("../components/ui/UiAutoComplete.vue")['default']>
    'LazyUiSectionHeader': LazyComponent<typeof import("../components/ui/UiSectionHeader.vue")['default']>
    'LazyUiTableView': LazyComponent<typeof import("../components/ui/UiTableView.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtLinkLocale': LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
    'LazySwitchLocalePathLink': LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyVueApexCharts': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AppBarSearch: typeof import("../@core/components/AppBarSearch.vue")['default']
export const AppDrawerHeaderSection: typeof import("../@core/components/AppDrawerHeaderSection.vue")['default']
export const AppStepper: typeof import("../@core/components/AppStepper.vue")['default']
export const BuyNow: typeof import("../@core/components/BuyNow.vue")['default']
export const CustomizerSection: typeof import("../@core/components/CustomizerSection.vue")['default']
export const DialogCloseBtn: typeof import("../@core/components/DialogCloseBtn.vue")['default']
export const DropZone: typeof import("../@core/components/DropZone.vue")['default']
export const I18n: typeof import("../@core/components/I18n.vue")['default']
export const MoreBtn: typeof import("../@core/components/MoreBtn.vue")['default']
export const Notifications: typeof import("../@core/components/Notifications.vue")['default']
export const ProductDescriptionEditor: typeof import("../@core/components/ProductDescriptionEditor.vue")['default']
export const ScrollToTop: typeof import("../@core/components/ScrollToTop.vue")['default']
export const Shortcuts: typeof import("../@core/components/Shortcuts.vue")['default']
export const TablePagination: typeof import("../@core/components/TablePagination.vue")['default']
export const TheCustomizer: typeof import("../@core/components/TheCustomizer.vue")['default']
export const ThemeSwitcher: typeof import("../@core/components/ThemeSwitcher.vue")['default']
export const TiptapEditor: typeof import("../@core/components/TiptapEditor.vue")['default']
export const AppDateTimePicker: typeof import("../@core/components/app-form-elements/AppDateTimePicker.vue")['default']
export const CustomCheckboxes: typeof import("../@core/components/app-form-elements/CustomCheckboxes.vue")['default']
export const CustomCheckboxesWithIcon: typeof import("../@core/components/app-form-elements/CustomCheckboxesWithIcon.vue")['default']
export const CustomCheckboxesWithImage: typeof import("../@core/components/app-form-elements/CustomCheckboxesWithImage.vue")['default']
export const CustomRadios: typeof import("../@core/components/app-form-elements/CustomRadios.vue")['default']
export const CustomRadiosWithIcon: typeof import("../@core/components/app-form-elements/CustomRadiosWithIcon.vue")['default']
export const CustomRadiosWithImage: typeof import("../@core/components/app-form-elements/CustomRadiosWithImage.vue")['default']
export const AppCardActions: typeof import("../@core/components/cards/AppCardActions.vue")['default']
export const AppCardCode: typeof import("../@core/components/cards/AppCardCode.vue")['default']
export const CardStatisticsHorizontal: typeof import("../@core/components/cards/CardStatisticsHorizontal.vue")['default']
export const CardStatisticsVertical: typeof import("../@core/components/cards/CardStatisticsVertical.vue")['default']
export const CardStatisticsWithIcon: typeof import("../@core/components/cards/CardStatisticsWithIcon.vue")['default']
export const CardStatisticsWithImages: typeof import("../@core/components/cards/CardStatisticsWithImages.vue")['default']
export const AppLoadingIndicator: typeof import("../components/AppLoadingIndicator.vue")['default']
export const AppPricing: typeof import("../components/AppPricing.vue")['default']
export const AppSearchHeader: typeof import("../components/AppSearchHeader.vue")['default']
export const ErrorHeader: typeof import("../components/ErrorHeader.vue")['default']
export const VueApexCharts: typeof import("../components/VueApexCharts.client.vue")['default']
export const AddAuthenticatorAppDialog: typeof import("../components/dialogs/AddAuthenticatorAppDialog.vue")['default']
export const AddEditAddressDialog: typeof import("../components/dialogs/AddEditAddressDialog.vue")['default']
export const AddEditPermissionDialog: typeof import("../components/dialogs/AddEditPermissionDialog.vue")['default']
export const AddEditRoleDialog: typeof import("../components/dialogs/AddEditRoleDialog.vue")['default']
export const AddPaymentMethodDialog: typeof import("../components/dialogs/AddPaymentMethodDialog.vue")['default']
export const AllStudentDialog: typeof import("../components/dialogs/AllStudentDialog.vue")['default']
export const ApproveProjectDialog: typeof import("../components/dialogs/ApproveProjectDialog.vue")['default']
export const CardAddEditDialog: typeof import("../components/dialogs/CardAddEditDialog.vue")['default']
export const ConfirmDialog: typeof import("../components/dialogs/ConfirmDialog.vue")['default']
export const CreateAppDialog: typeof import("../components/dialogs/CreateAppDialog.vue")['default']
export const EnableOneTimePasswordDialog: typeof import("../components/dialogs/EnableOneTimePasswordDialog.vue")['default']
export const PaymentProvidersDialog: typeof import("../components/dialogs/PaymentProvidersDialog.vue")['default']
export const PresenceDialog: typeof import("../components/dialogs/PresenceDialog.vue")['default']
export const PricingPlanDialog: typeof import("../components/dialogs/PricingPlanDialog.vue")['default']
export const ReferAndEarnDialog: typeof import("../components/dialogs/ReferAndEarnDialog.vue")['default']
export const RejectProjectDialog: typeof import("../components/dialogs/RejectProjectDialog.vue")['default']
export const ScheduleDetailsDialog: typeof import("../components/dialogs/ScheduleDetailsDialog.vue")['default']
export const ScoreHistoryDialog: typeof import("../components/dialogs/ScoreHistoryDialog.vue")['default']
export const ShareProjectDialog: typeof import("../components/dialogs/ShareProjectDialog.vue")['default']
export const TwoFactorAuthDialog: typeof import("../components/dialogs/TwoFactorAuthDialog.vue")['default']
export const UserInfoEditDialog: typeof import("../components/dialogs/UserInfoEditDialog.vue")['default']
export const UserUpgradePlanDialog: typeof import("../components/dialogs/UserUpgradePlanDialog.vue")['default']
export const AccountAvatar: typeof import("../components/sections/account-settings/AccountAvatar.vue")['default']
export const AccountSettings: typeof import("../components/sections/account-settings/AccountSettings.vue")['default']
export const AccountSettingsDelete: typeof import("../components/sections/account-settings/AccountSettingsDelete.vue")['default']
export const AccountSettingsSecurity: typeof import("../components/sections/account-settings/AccountSettingsSecurity.vue")['default']
export const UiAutoComplete: typeof import("../components/ui/UiAutoComplete.vue")['default']
export const UiSectionHeader: typeof import("../components/ui/UiSectionHeader.vue")['default']
export const UiTableView: typeof import("../components/ui/UiTableView.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const VueApexCharts: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAppBarSearch: LazyComponent<typeof import("../@core/components/AppBarSearch.vue")['default']>
export const LazyAppDrawerHeaderSection: LazyComponent<typeof import("../@core/components/AppDrawerHeaderSection.vue")['default']>
export const LazyAppStepper: LazyComponent<typeof import("../@core/components/AppStepper.vue")['default']>
export const LazyBuyNow: LazyComponent<typeof import("../@core/components/BuyNow.vue")['default']>
export const LazyCustomizerSection: LazyComponent<typeof import("../@core/components/CustomizerSection.vue")['default']>
export const LazyDialogCloseBtn: LazyComponent<typeof import("../@core/components/DialogCloseBtn.vue")['default']>
export const LazyDropZone: LazyComponent<typeof import("../@core/components/DropZone.vue")['default']>
export const LazyI18n: LazyComponent<typeof import("../@core/components/I18n.vue")['default']>
export const LazyMoreBtn: LazyComponent<typeof import("../@core/components/MoreBtn.vue")['default']>
export const LazyNotifications: LazyComponent<typeof import("../@core/components/Notifications.vue")['default']>
export const LazyProductDescriptionEditor: LazyComponent<typeof import("../@core/components/ProductDescriptionEditor.vue")['default']>
export const LazyScrollToTop: LazyComponent<typeof import("../@core/components/ScrollToTop.vue")['default']>
export const LazyShortcuts: LazyComponent<typeof import("../@core/components/Shortcuts.vue")['default']>
export const LazyTablePagination: LazyComponent<typeof import("../@core/components/TablePagination.vue")['default']>
export const LazyTheCustomizer: LazyComponent<typeof import("../@core/components/TheCustomizer.vue")['default']>
export const LazyThemeSwitcher: LazyComponent<typeof import("../@core/components/ThemeSwitcher.vue")['default']>
export const LazyTiptapEditor: LazyComponent<typeof import("../@core/components/TiptapEditor.vue")['default']>
export const LazyAppDateTimePicker: LazyComponent<typeof import("../@core/components/app-form-elements/AppDateTimePicker.vue")['default']>
export const LazyCustomCheckboxes: LazyComponent<typeof import("../@core/components/app-form-elements/CustomCheckboxes.vue")['default']>
export const LazyCustomCheckboxesWithIcon: LazyComponent<typeof import("../@core/components/app-form-elements/CustomCheckboxesWithIcon.vue")['default']>
export const LazyCustomCheckboxesWithImage: LazyComponent<typeof import("../@core/components/app-form-elements/CustomCheckboxesWithImage.vue")['default']>
export const LazyCustomRadios: LazyComponent<typeof import("../@core/components/app-form-elements/CustomRadios.vue")['default']>
export const LazyCustomRadiosWithIcon: LazyComponent<typeof import("../@core/components/app-form-elements/CustomRadiosWithIcon.vue")['default']>
export const LazyCustomRadiosWithImage: LazyComponent<typeof import("../@core/components/app-form-elements/CustomRadiosWithImage.vue")['default']>
export const LazyAppCardActions: LazyComponent<typeof import("../@core/components/cards/AppCardActions.vue")['default']>
export const LazyAppCardCode: LazyComponent<typeof import("../@core/components/cards/AppCardCode.vue")['default']>
export const LazyCardStatisticsHorizontal: LazyComponent<typeof import("../@core/components/cards/CardStatisticsHorizontal.vue")['default']>
export const LazyCardStatisticsVertical: LazyComponent<typeof import("../@core/components/cards/CardStatisticsVertical.vue")['default']>
export const LazyCardStatisticsWithIcon: LazyComponent<typeof import("../@core/components/cards/CardStatisticsWithIcon.vue")['default']>
export const LazyCardStatisticsWithImages: LazyComponent<typeof import("../@core/components/cards/CardStatisticsWithImages.vue")['default']>
export const LazyAppLoadingIndicator: LazyComponent<typeof import("../components/AppLoadingIndicator.vue")['default']>
export const LazyAppPricing: LazyComponent<typeof import("../components/AppPricing.vue")['default']>
export const LazyAppSearchHeader: LazyComponent<typeof import("../components/AppSearchHeader.vue")['default']>
export const LazyErrorHeader: LazyComponent<typeof import("../components/ErrorHeader.vue")['default']>
export const LazyVueApexCharts: LazyComponent<typeof import("../components/VueApexCharts.client.vue")['default']>
export const LazyAddAuthenticatorAppDialog: LazyComponent<typeof import("../components/dialogs/AddAuthenticatorAppDialog.vue")['default']>
export const LazyAddEditAddressDialog: LazyComponent<typeof import("../components/dialogs/AddEditAddressDialog.vue")['default']>
export const LazyAddEditPermissionDialog: LazyComponent<typeof import("../components/dialogs/AddEditPermissionDialog.vue")['default']>
export const LazyAddEditRoleDialog: LazyComponent<typeof import("../components/dialogs/AddEditRoleDialog.vue")['default']>
export const LazyAddPaymentMethodDialog: LazyComponent<typeof import("../components/dialogs/AddPaymentMethodDialog.vue")['default']>
export const LazyAllStudentDialog: LazyComponent<typeof import("../components/dialogs/AllStudentDialog.vue")['default']>
export const LazyApproveProjectDialog: LazyComponent<typeof import("../components/dialogs/ApproveProjectDialog.vue")['default']>
export const LazyCardAddEditDialog: LazyComponent<typeof import("../components/dialogs/CardAddEditDialog.vue")['default']>
export const LazyConfirmDialog: LazyComponent<typeof import("../components/dialogs/ConfirmDialog.vue")['default']>
export const LazyCreateAppDialog: LazyComponent<typeof import("../components/dialogs/CreateAppDialog.vue")['default']>
export const LazyEnableOneTimePasswordDialog: LazyComponent<typeof import("../components/dialogs/EnableOneTimePasswordDialog.vue")['default']>
export const LazyPaymentProvidersDialog: LazyComponent<typeof import("../components/dialogs/PaymentProvidersDialog.vue")['default']>
export const LazyPresenceDialog: LazyComponent<typeof import("../components/dialogs/PresenceDialog.vue")['default']>
export const LazyPricingPlanDialog: LazyComponent<typeof import("../components/dialogs/PricingPlanDialog.vue")['default']>
export const LazyReferAndEarnDialog: LazyComponent<typeof import("../components/dialogs/ReferAndEarnDialog.vue")['default']>
export const LazyRejectProjectDialog: LazyComponent<typeof import("../components/dialogs/RejectProjectDialog.vue")['default']>
export const LazyScheduleDetailsDialog: LazyComponent<typeof import("../components/dialogs/ScheduleDetailsDialog.vue")['default']>
export const LazyScoreHistoryDialog: LazyComponent<typeof import("../components/dialogs/ScoreHistoryDialog.vue")['default']>
export const LazyShareProjectDialog: LazyComponent<typeof import("../components/dialogs/ShareProjectDialog.vue")['default']>
export const LazyTwoFactorAuthDialog: LazyComponent<typeof import("../components/dialogs/TwoFactorAuthDialog.vue")['default']>
export const LazyUserInfoEditDialog: LazyComponent<typeof import("../components/dialogs/UserInfoEditDialog.vue")['default']>
export const LazyUserUpgradePlanDialog: LazyComponent<typeof import("../components/dialogs/UserUpgradePlanDialog.vue")['default']>
export const LazyAccountAvatar: LazyComponent<typeof import("../components/sections/account-settings/AccountAvatar.vue")['default']>
export const LazyAccountSettings: LazyComponent<typeof import("../components/sections/account-settings/AccountSettings.vue")['default']>
export const LazyAccountSettingsDelete: LazyComponent<typeof import("../components/sections/account-settings/AccountSettingsDelete.vue")['default']>
export const LazyAccountSettingsSecurity: LazyComponent<typeof import("../components/sections/account-settings/AccountSettingsSecurity.vue")['default']>
export const LazyUiAutoComplete: LazyComponent<typeof import("../components/ui/UiAutoComplete.vue")['default']>
export const LazyUiSectionHeader: LazyComponent<typeof import("../components/ui/UiSectionHeader.vue")['default']>
export const LazyUiTableView: LazyComponent<typeof import("../components/ui/UiTableView.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyVueApexCharts: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
