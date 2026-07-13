# Component Mapping

Maps every Vuetify component used in the project (`.vue` files, excluding `node_modules`) to the **typography** and **color tokens** applied to it via props/classes.

- **Usages** = number of tag occurrences across the codebase.
- **Typography** = `text-*` roles applied on the tag. See [typography_spec.md](typography_spec.md).
- **Color tokens** = static Vuetify/theme color tokens passed via `color` / `bg-color` / `base-color` / `border-color` or `text-*`/`bg-*` classes. See [color_spec.md](color_spec.md).
- **Dynamic color** = colors bound via JS expressions (runtime-resolved, value varies).

> `VNodeRenderer` is a template utility (not a Vuetify component); listed for completeness.

---

## Layout & Structure

| Component | Usages | Typography | Color Tokens | Dynamic Color | Example |
| :-- | :-: | :-- | :-- | :-- | :-- |
| VApp | 1 | — | — | — | [app.vue:23](app.vue#L23) |
| VLocaleProvider | 1 | — | — | — | [app.vue:21](app.vue#L21) |
| VNavigationDrawer | 3 | — | — | — | [TheCustomizer.vue:274](@core/components/TheCustomizer.vue#L274) |
| VRow | 40 | — | — | — | [DropZone.vue:85](@core/components/DropZone.vue#L85) |
| VCol | 99 | — | — | — | [DropZone.vue:90](@core/components/DropZone.vue#L90) |
| VSpacer | 10 | — | — | — | [AppDrawerHeaderSection.vue:16](@core/components/AppDrawerHeaderSection.vue#L16) |
| VDivider | 53 | — | — | — | [AppBarSearch.vue:133](@core/components/AppBarSearch.vue#L133) |

## Cards

| Component | Usages | Typography | Color Tokens | Dynamic Color | Example |
| :-- | :-: | :-- | :-- | :-- | :-- |
| VCard | 78 | — | primary | primary-opacity-lighter | [AppBarSearch.vue:81](@core/components/AppBarSearch.vue#L81) |
| VCardItem | 9 | — | surface | — | [Notifications.vue:63](@core/components/Notifications.vue#L63) |
| VCardTitle | 6 | — | high-emphasis | — | [AppCardActions.vue:81](@core/components/cards/AppCardActions.vue#L81) |
| VCardText | 80 | — | grey-light, medium-emphasis | — | [AppBarSearch.vue:86](@core/components/AppBarSearch.vue#L86) |
| VCardActions | 3 | — | grey-light | — | [DropZone.vue:114](@core/components/DropZone.vue#L114) |

## Buttons & Actions

| Component | Usages | Typography | Color Tokens | Dynamic Color | Example |
| :-- | :-: | :-- | :-- | :-- | :-- |
| VBtn | 155 | button* | default, primary, secondary, success, warning, error, high-emphasis, medium-emphasis, `#007BB6`, `#3B5998`, `#55ACEE` | expression | [DropZone.vue:73](@core/components/DropZone.vue#L73) |
| VBtnToggle | 5 | — | — | — | [AppCardCode.vue:68](@core/components/cards/AppCardCode.vue#L68) |
| VIcon | 131 | — | primary, secondary, error, white, disabled, high-emphasis, medium-emphasis | expression | [AppBarSearch.vue:102](@core/components/AppBarSearch.vue#L102) |
| VMenu | 10 | — | — | — | [I18n.vue:21](@core/components/I18n.vue#L21) |
| VTooltip | 20 | — | — | — | [Notifications.vue:88](@core/components/Notifications.vue#L88) |

\* VBtn applies the `button` typography token automatically via Vuetify defaults (not a `text-*` class).

## Forms & Inputs

| Component | Usages | Typography | Color Tokens | Dynamic Color | Example |
| :-- | :-: | :-- | :-- | :-- | :-- |
| VForm | 12 | — | — | — | [AddAuthenticatorAppDialog.vue:75](components/dialogs/AddAuthenticatorAppDialog.vue#L75) |
| VTextField | 54 | — | — | — | [AppBarSearch.vue:88](@core/components/AppBarSearch.vue#L88) |
| VSelect | 17 | — | — | — | [AddEditAddressDialog.vue:152](components/dialogs/AddEditAddressDialog.vue#L152) |
| VAutocomplete | 2 | — | — | — | [ShareProjectDialog.vue:115](components/dialogs/ShareProjectDialog.vue#L115) |
| VCheckbox | 15 | — | primary | — | [CustomCheckboxes.vue:35](@core/components/app-form-elements/CustomCheckboxes.vue#L35) |
| VSwitch | 7 | — | primary | — | [TheCustomizer.vue:478](@core/components/TheCustomizer.vue#L478) |
| VRadioGroup | 7 | — | — | — | [CustomRadios.vue:24](@core/components/app-form-elements/CustomRadios.vue#L24) |
| VRadio | 8 | — | primary, secondary | — | [CustomRadios.vue:40](@core/components/app-form-elements/CustomRadios.vue#L40) |
| VColorPicker | 1 | — | — | — | [TheCustomizer.vue:402](@core/components/TheCustomizer.vue#L402) |
| VLabel | 10 | h6 | high-emphasis | — | [CustomCheckboxes.vue:30](@core/components/app-form-elements/CustomCheckboxes.vue#L30) |
| VInput | 1 | — | — | — | [AppDateTimePicker.vue:123](@core/components/app-form-elements/AppDateTimePicker.vue#L123) |
| VField | 1 | — | — | — | [AppDateTimePicker.vue:137](@core/components/app-form-elements/AppDateTimePicker.vue#L137) |

## Data Display

| Component | Usages | Typography | Color Tokens | Dynamic Color | Example |
| :-- | :-: | :-- | :-- | :-- | :-- |
| VDataTable | 3 | — | — | — | [assessments.vue:740](pages/assessments.vue#L740) |
| VDataTableServer | 2 | — | — | — | [user.vue:162](pages/user.vue#L162) |
| VDataTableFooter | 3 | — | surface | — | [assessments.vue:1033](pages/assessments.vue#L1033) |
| VTable | 3 | — | — | — | [AddEditRoleDialog.vue:212](components/dialogs/AddEditRoleDialog.vue#L212) |
| VPagination | 1 | — | primary | — | [TablePagination.vue:30](@core/components/TablePagination.vue#L30) |
| VList | 18 | — | primary | — | [AppBarSearch.vue:28](@core/components/AppBarSearch.vue#L28) |
| VListItem | 24 | — | primary, medium-emphasis | — | [AppBarSearch.vue:156](@core/components/AppBarSearch.vue#L156) |
| VListItemTitle | 18 | body-1 | high-emphasis, medium-emphasis | — | [I18n.vue:41](@core/components/I18n.vue#L41) |
| VListItemSubtitle | 5 | body-2 | disabled | — | [CreateAppDialog.vue:237](components/dialogs/CreateAppDialog.vue#L237) |
| VListItemAction | 1 | — | — | — | [UserProfile.vue:58](layouts/components/UserProfile.vue#L58) |
| VListItemContent | 1 | — | — | — | [UiAutoComplete.vue:118](components/ui/UiAutoComplete.vue#L118) |
| VListSubheader | 1 | — | disabled | — | [NavSearchBar.vue:198](layouts/components/NavSearchBar.vue#L198) |
| VSlideGroup | 1 | — | — | — | [AppStepper.vue:70](@core/components/AppStepper.vue#L70) |
| VSlideGroupItem | 1 | — | — | — | [AppStepper.vue:77](@core/components/AppStepper.vue#L77) |

## Feedback & Overlay

| Component | Usages | Typography | Color Tokens | Dynamic Color | Example |
| :-- | :-: | :-- | :-- | :-- | :-- |
| VAlert | 2 | — | warning | — | [AddAuthenticatorAppDialog.vue:64](components/dialogs/AddAuthenticatorAppDialog.vue#L64) |
| VSnackbar | 4 | — | — | snackbarColor, toastColor | [assessments.vue:1230](pages/assessments.vue#L1230) |
| VDialog | 25 | — | — | — | [AppBarSearch.vue:72](@core/components/AppBarSearch.vue#L72) |
| VOverlay | 1 | — | — | — | [AppCardActions.vue:145](@core/components/cards/AppCardActions.vue#L145) |
| VProgressCircular | 3 | — | primary | — | [AppCardActions.vue:152](@core/components/cards/AppCardActions.vue#L152) |
| VProgressLinear | 1 | — | primary, background | — | [AppLoadingIndicator.vue:55](components/AppLoadingIndicator.vue#L55) |
| VSkeletonLoader | 2 | — | — | — | [assessments.vue:730](pages/assessments.vue#L730) |

## Media & Misc

| Component | Usages | Typography | Color Tokens | Dynamic Color | Example |
| :-- | :-: | :-- | :-- | :-- | :-- |
| VAvatar | 32 | caption | primary, error, grey-50 | primary-opacity-lighter, iconColor, expression | [Notifications.vue:122](@core/components/Notifications.vue#L122) |
| VBadge | 5 | — | success, error | — | [Notifications.vue:42](@core/components/Notifications.vue#L42) |
| VChip | 38 | caption | primary, secondary, success, info, warning, error | expression | [Notifications.vue:69](@core/components/Notifications.vue#L69) |
| VImg | 12 | — | — | — | [DropZone.vue:99](@core/components/DropZone.vue#L99) |

## Tabs & Windows

| Component | Usages | Typography | Color Tokens | Dynamic Color | Example |
| :-- | :-: | :-- | :-- | :-- | :-- |
| VTabs | 4 | — | — | — | [assessments.vue:626](pages/assessments.vue#L626) |
| VTab | 9 | — | — | — | [assessments.vue:630](pages/assessments.vue#L630) |
| VWindow | 1 | — | — | — | [CreateAppDialog.vue:203](components/dialogs/CreateAppDialog.vue#L203) |
| VWindowItem | 5 | — | — | — | [CreateAppDialog.vue:208](components/dialogs/CreateAppDialog.vue#L208) |

## Transitions

| Component | Usages | Typography | Color Tokens | Dynamic Color | Example |
| :-- | :-: | :-- | :-- | :-- | :-- |
| VExpandTransition | 6 | — | — | — | [AppCardActions.vue:76](@core/components/cards/AppCardActions.vue#L76) |
| VScaleTransition | 1 | — | — | — | [ScrollToTop.vue:13](@core/components/ScrollToTop.vue#L13) |

## Utility (non-Vuetify)

| Component | Usages | Notes | Example |
| :-- | :-: | :-- | :-- |
| VNodeRenderer | 3 | Template render util (logo/nav), not a Vuetify component | [VerticalNav.vue:94](@layouts/components/VerticalNav.vue#L94) |

---

## Notes / Limitations

- Only **static** tokens on the tag itself are captured. Colors set inside child slots, computed styles, or SCSS overrides are not reflected.
- Hardcoded hex values (`#007BB6`, `#3B5998`, `#55ACEE` on VBtn — social login buttons) bypass theme tokens and are candidates for tokenization.
- Emphasis keywords (`high-emphasis` / `medium-emphasis` / `disabled`) are Vuetify text-opacity tokens layered on `on-surface`, not palette colors.
