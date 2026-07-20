import { computed, toRef, createVNode, mergeProps, defineComponent, ref, unref, isRef, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { U as UiTableView } from "./UiTableView-CBjzM5XB.js";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/hookable/dist/index.mjs";
import { V as VTabs, a as VTab } from "./VTabs-iT2EYINr.js";
import { m as genericComponent, o as propsFactory, B as useProxiedModel, s as provideTheme, S as useVariant, T as useDensity, U as useDimension, x as useElevation, X as useLocation, Y as usePosition, z as useRounded, aa as useTextColor, a8 as useLocale, _ as genOverlays, a as VIcon, G as VDefaultsProvider, V as VBtn, a0 as makeVariantProps, H as makeThemeProps, I as makeTagProps, J as makeRoundedProps, a2 as makePositionProps, a3 as makeLocationProps, L as makeElevationProps, a5 as makeDimensionProps, P as makeDensityProps, N as makeComponentProps, Q as IconValue, aX as VBtnToggle, aW as _export_sfc } from "../server.mjs";
import { V as VCard, c as VCardItem, a as VCardTitle } from "./VCard-B42eN0YV.js";
import { V as VCardText } from "./VCardText-CaXtzNxg.js";
import { V as VDivider } from "./VDivider-Cdypedjq.js";
import { V as VRow, a as VCol } from "./VRow-BRD4hy0P.js";
import { j as VTable, k as VDataTable } from "./VDataTable-TnWqeKKY.js";
import { V as VChip } from "./VChip-C0dLsv_T.js";
import { c as createSimpleFunctional, V as VAvatar } from "./VAvatar-B478BWXT.js";
import { V as VTextField } from "./VTextField-jMGfwBDn.js";
import { V as VSelect } from "./filter-BIe-IBmp.js";
import { V as VTooltip } from "./VTooltip-vXFYhuMk.js";
import { V as VList, a as VListItem } from "./VList-BNtS0p6J.js";
import { V as VCheckbox } from "./VCheckbox-BUqu-k0J.js";
import { V as VSnackbar } from "./VSnackbar-DgaXWzkK.js";
import "./UiSectionHeader-BGB1bAkA.js";
import "./forwardRefs-Oip3fNRq.js";
import "./VOverlay-gAZb14KV.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/unctx/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/radix3/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/defu/dist/defu.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/klona/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/destr/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/ohash/dist/index.mjs";
import "@vue/devtools-api";
import "@antfu/utils";
/* empty css               */
import "./VDataTableFooter-BmXk9xgv.js";
import "./VCheckboxBtn-BB8tUmIP.js";
import "./VSelectionControl-B1a3mcFW.js";
import "./index-CSomYp-Z.js";
import "./VMenu-C4ct7Xz7.js";
import "./dialog-transition-CDwwEBKm.js";
const VAlertTitle = createSimpleFunctional("v-alert-title");
const allowedTypes = ["success", "info", "warning", "error"];
const makeVAlertProps = propsFactory({
  border: {
    type: [Boolean, String],
    validator: (val) => {
      return typeof val === "boolean" || ["top", "end", "bottom", "start"].includes(val);
    }
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: true
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (val) => allowedTypes.includes(val)
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAlert");
const VAlert = genericComponent()({
  name: "VAlert",
  props: makeVAlertProps(),
  emits: {
    "click:close": (e) => true,
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const icon = computed(() => {
      if (props.icon === false) return void 0;
      if (!props.type) return props.icon;
      return props.icon ?? `$${props.type}`;
    });
    const variantProps = computed(() => ({
      color: props.color ?? props.type,
      variant: props.variant
    }));
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(variantProps);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "borderColor"));
    const {
      t
    } = useLocale();
    const closeProps = computed(() => ({
      "aria-label": t(props.closeLabel),
      onClick(e) {
        isActive.value = false;
        emit("click:close", e);
      }
    }));
    return () => {
      const hasPrepend = !!(slots.prepend || icon.value);
      const hasTitle = !!(slots.title || props.title);
      const hasClose = !!(slots.close || props.closable);
      return isActive.value && createVNode(props.tag, {
        "class": ["v-alert", props.border && {
          "v-alert--border": !!props.border,
          [`v-alert--border-${props.border === true ? "start" : props.border}`]: true
        }, {
          "v-alert--prominent": props.prominent
        }, themeClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "role": "alert"
      }, {
        default: () => {
          var _a, _b;
          return [genOverlays(false, "v-alert"), props.border && createVNode("div", {
            "key": "border",
            "class": ["v-alert__border", textColorClasses.value],
            "style": textColorStyles.value
          }, null), hasPrepend && createVNode("div", {
            "key": "prepend",
            "class": "v-alert__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "density": props.density,
            "icon": icon.value,
            "size": props.prominent ? 44 : 28
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !icon.value,
            "defaults": {
              VIcon: {
                density: props.density,
                icon: icon.value,
                size: props.prominent ? 44 : 28
              }
            }
          }, slots.prepend)]), createVNode("div", {
            "class": "v-alert__content"
          }, [hasTitle && createVNode(VAlertTitle, {
            "key": "title"
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.title) == null ? void 0 : _a2.call(slots)) ?? props.title];
            }
          }), ((_a = slots.text) == null ? void 0 : _a.call(slots)) ?? props.text, (_b = slots.default) == null ? void 0 : _b.call(slots)]), slots.append && createVNode("div", {
            "key": "append",
            "class": "v-alert__append"
          }, [slots.append()]), hasClose && createVNode("div", {
            "key": "close",
            "class": "v-alert__close"
          }, [!slots.close ? createVNode(VBtn, mergeProps({
            "key": "close-btn",
            "icon": props.closeIcon,
            "size": "x-small",
            "variant": "text"
          }, closeProps.value), null) : createVNode(VDefaultsProvider, {
            "key": "close-defaults",
            "defaults": {
              VBtn: {
                icon: props.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var _a2;
              return [(_a2 = slots.close) == null ? void 0 : _a2.call(slots, {
                props: closeProps.value
              })];
            }
          })])];
        }
      });
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "design-system",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("typography");
    const typographyTokens = [
      { token: "h1", size: "2.875rem (46px)", weight: 500, lineHeight: "4.25rem (68px)", letterSpacing: "normal", class: "text-h1" },
      { token: "h2", size: "2.375rem (38px)", weight: 500, lineHeight: "3.5rem (56px)", letterSpacing: "normal", class: "text-h2" },
      { token: "h3", size: "1.75rem (28px)", weight: 500, lineHeight: "2.625rem (42px)", letterSpacing: "normal", class: "text-h3" },
      { token: "h4", size: "1.5rem (24px)", weight: 500, lineHeight: "2.375rem (38px)", letterSpacing: "normal", class: "text-h4" },
      { token: "h5", size: "1.125rem (18px)", weight: 500, lineHeight: "1.75rem (28px)", letterSpacing: "normal", class: "text-h5" },
      { token: "h6", size: "0.9375rem (15px)", weight: 400, lineHeight: "1.375rem (22px)", letterSpacing: "normal", class: "text-h6" },
      { token: "subtitle-1", size: "0.9375rem (15px)", weight: 400, lineHeight: "1.375rem (22px)", letterSpacing: "normal", class: "text-subtitle-1" },
      { token: "subtitle-2", size: "0.8125rem (13px)", weight: 400, lineHeight: "1.25rem (20px)", letterSpacing: "normal", class: "text-subtitle-2" },
      { token: "body-1", size: "0.9375rem (15px)", weight: 400, lineHeight: "1.375rem (22px)", letterSpacing: "normal", class: "text-body-1" },
      { token: "body-2", size: "0.8125rem (13px)", weight: 400, lineHeight: "1.25rem (20px)", letterSpacing: "normal", class: "text-body-2" },
      { token: "caption", size: "0.8125rem (13px)", weight: 400, lineHeight: "1.125rem (18px)", letterSpacing: "0.025rem", class: "text-caption" },
      { token: "overline", size: "—", weight: 400, lineHeight: "0.875rem (14px)", letterSpacing: "0.05rem", class: "text-overline" },
      { token: "button", size: "0.9375rem (15px)", weight: 500, lineHeight: "1.375rem (22px)", letterSpacing: "normal", class: "text-button" }
    ];
    const primaryPalette = [
      { token: "primary-100", light: "#DBFDDB", dark: "#DBFDDB", desc: "Softest green tint" },
      { token: "primary-200", light: "#B8FAB8", dark: "#B8FAB8", desc: "Very light accent" },
      { token: "primary-300", light: "#81F483", dark: "#81F483", desc: "Light green tint" },
      { token: "primary-400", light: "#43E545", dark: "#43E545", desc: "Light brand green" },
      { token: "primary-500", light: "#10AF13", dark: "#10AF13", desc: "Brand primary" },
      { token: "primary-600", light: "#108513", dark: "#108513", desc: "Hover / active" },
      { token: "primary-700", light: "#126915", dark: "#126915", desc: "Dark green" },
      { token: "primary-800", light: "#115614", dark: "#115614", desc: "Deeper green" },
      { token: "primary-900", light: "#033006", dark: "#10AF13", desc: "Deepest green" }
    ];
    const opacityTokens = [
      { token: "primary-opacity-lighter", value: "#10AF1314", opacity: "8%", desc: "Subtle hover overlays" },
      { token: "primary-opacity-light", value: "#10AF1329", opacity: "16%", desc: "Focus states" },
      { token: "primary-opacity-main", value: "#10AF133D", opacity: "24%", desc: "Active selection bg" },
      { token: "primary-opacity-dark", value: "#10AF1352", opacity: "32%", desc: "High contrast selection" },
      { token: "primary-opacity-darker", value: "#10AF1361", opacity: "38%", desc: "Strongest overlay" }
    ];
    const semanticColors = [
      { token: "success", light: "#56CA00", dark: "#56CA00", desc: "Success indicators" },
      { token: "info", light: "#16B1FF", dark: "#16B1FF", desc: "Informational highlights" },
      { token: "warning", light: "#FFB400", dark: "#FFB400", desc: "Warning alerts" },
      { token: "error", light: "#FF4C51", dark: "#FF4C51", desc: "Error states" }
    ];
    const greyPalette = [
      { token: "grey-50", light: "#FAFAFA", dark: "#2A2E42" },
      { token: "grey-100", light: "#F5F5F5", dark: "#2F3349" },
      { token: "grey-200", light: "#EEEEEE", dark: "#4A5072" },
      { token: "grey-300", light: "#E0E0E0", dark: "#5E6692" },
      { token: "grey-400", light: "#BDBDBD", dark: "#7983BB" },
      { token: "grey-500", light: "#9E9E9E", dark: "#8692D0" },
      { token: "grey-600", light: "#757575", dark: "#AAB3DE" },
      { token: "grey-700", light: "#616161", dark: "#B6BEE3" },
      { token: "grey-800", light: "#424242", dark: "#CFD3EC" },
      { token: "grey-900", light: "#212121", dark: "#E7E9F6" }
    ];
    const surfaceColors = [
      { token: "background", light: "#FAFAFA", dark: "#28243D", desc: "Page background" },
      { token: "surface", light: "#FFFFFF", dark: "#312D4B", desc: "Card / container bg" },
      { token: "on-background", light: "#2E263D", dark: "#E7E3FC", desc: "Body text color" },
      { token: "on-surface", light: "#2E263D", dark: "#E7E3FC", desc: "Text on surface" }
    ];
    const showSnackbar = ref(false);
    const snackbarColor = ref("success");
    const snackbarText = ref("");
    const demoItems = [
      { initials: "JS", name: "Jennifer Summers", studentId: "STD-293012302-12320", book: "Python Game Dev", lessonName: "Lesson 4 - Canvas Setup", date: "Feb 30, 2026", status: "Pending", score: 92 },
      { initials: "CM", name: "Cristofer Mango", studentId: "STD-293012302-12321", book: "Web Dev Basics", lessonName: "Lesson 2 - HTML Structure", date: "Mar 2, 2026", status: "Approved", score: 78 },
      { initials: "JR", name: "Justin Richardson", studentId: "STD-293012302-12322", book: "Data Science 101", lessonName: "Lesson 6 - Pandas", date: "Mar 5, 2026", status: "Rejected", score: 55 }
    ];
    const selectedStatusFilter = ref("All");
    const statusFilterOptions = ["All", "Pending", "Approved", "Rejected"];
    const demoViewType = ref("list");
    const getStatusColor = (status) => {
      if (status === "Pending") return "warning";
      if (status === "Approved") return "success";
      if (status === "Rejected") return "error";
      return "secondary";
    };
    const getScoreColor = (score) => {
      if (score >= 80) return "success";
      if (score >= 60) return "warning";
      return "error";
    };
    const toast = (color, text) => {
      snackbarColor.value = color;
      snackbarText.value = text;
      showSnackbar.value = true;
    };
    const reviewActiveTab = ref("project");
    const reviewViewType = ref("list");
    const reviewLoading = ref(false);
    const reviewSearch = ref("");
    const reviewSelectedStatus = ref("All");
    const reviewStatusOptions = ["All", "Pending", "Approved", "Rejected"];
    const reviewSelectedQuiz = ref("All");
    const reviewTabs = computed(() => [
      { label: "Project Approvals", value: "project", count: demoItems.filter((i) => i.status === "Pending").length, icon: "ri-file-text-line" },
      { label: "Quiz & Exams", value: "quiz", count: 12, icon: "ri-todo-line" }
    ]);
    const reviewHeaders = computed(() => {
      if (reviewActiveTab.value === "project") {
        return [
          { title: "Student Name", key: "student" },
          { title: "Book / Session", key: "book" },
          { title: "LESSON & CLASS", key: "lessonName" },
          { title: "Date", key: "date" },
          { title: "Status", key: "status" },
          { title: "Action", key: "action", sortable: false, align: "center", width: "120px" }
        ];
      } else {
        return [
          { title: "Student Name", key: "student" },
          { title: "Book / Session", key: "book" },
          { title: "LESSON & CLASS", key: "lessonName" },
          { title: "Date", key: "date" },
          { title: "Score", key: "score" },
          { title: "Action", key: "action", sortable: false, align: "center", width: "120px" }
        ];
      }
    });
    const filteredReviewItems = computed(() => {
      return demoItems.filter((item) => {
        const matchesSearch = !reviewSearch.value || item.name.toLowerCase().includes(reviewSearch.value.toLowerCase()) || item.studentId.toLowerCase().includes(reviewSearch.value.toLowerCase());
        const matchesStatus = reviewSelectedStatus.value === "All" || item.status === reviewSelectedStatus.value;
        return matchesSearch && matchesStatus;
      });
    });
    const resetReviewFilters = () => {
      reviewSearch.value = "";
      reviewSelectedStatus.value = "All";
      reviewSelectedQuiz.value = "All";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-cbe5d0f9><div class="mb-5" data-v-cbe5d0f9><h4 class="text-h4 font-weight-medium text-high-emphasis" data-v-cbe5d0f9> Design System </h4><p class="text-body-1 text-medium-emphasis mb-0" data-v-cbe5d0f9> Typography tokens, color palette, and component showcase </p></div>`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(activeTab),
        "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
        class: "v-tabs-bordered mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTab, { value: "typography" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    start: "",
                    icon: "ri-font-size",
                    class: "me-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` Typography `);
                } else {
                  return [
                    createVNode(VIcon, {
                      start: "",
                      icon: "ri-font-size",
                      class: "me-2"
                    }),
                    createTextVNode(" Typography ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, { value: "colors" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    start: "",
                    icon: "ri-palette-line",
                    class: "me-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` Color System `);
                } else {
                  return [
                    createVNode(VIcon, {
                      start: "",
                      icon: "ri-palette-line",
                      class: "me-2"
                    }),
                    createTextVNode(" Color System ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, { value: "components" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    start: "",
                    icon: "ri-component-line",
                    class: "me-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` Components `);
                } else {
                  return [
                    createVNode(VIcon, {
                      start: "",
                      icon: "ri-component-line",
                      class: "me-2"
                    }),
                    createTextVNode(" Components ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, { value: "component-review" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    start: "",
                    icon: "ri-article-line",
                    class: "me-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` Component Review `);
                } else {
                  return [
                    createVNode(VIcon, {
                      start: "",
                      icon: "ri-article-line",
                      class: "me-2"
                    }),
                    createTextVNode(" Component Review ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTab, { value: "typography" }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    start: "",
                    icon: "ri-font-size",
                    class: "me-2"
                  }),
                  createTextVNode(" Typography ")
                ]),
                _: 1
              }),
              createVNode(VTab, { value: "colors" }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    start: "",
                    icon: "ri-palette-line",
                    class: "me-2"
                  }),
                  createTextVNode(" Color System ")
                ]),
                _: 1
              }),
              createVNode(VTab, { value: "components" }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    start: "",
                    icon: "ri-component-line",
                    class: "me-2"
                  }),
                  createTextVNode(" Components ")
                ]),
                _: 1
              }),
              createVNode(VTab, { value: "component-review" }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    start: "",
                    icon: "ri-article-line",
                    class: "me-2"
                  }),
                  createTextVNode(" Component Review ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(activeTab) === "typography") {
        _push(ssrRenderComponent(VCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardText, { class: "pa-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-2" data-v-cbe5d0f9${_scopeId2}> Font Family </h5><p class="text-body-1 text-medium-emphasis mb-6" data-v-cbe5d0f9${_scopeId2}><code class="code-inline" data-v-cbe5d0f9${_scopeId2}>&quot;Poppins&quot;, sans-serif</code> — applied globally with system-specific fallbacks. </p>`);
                    _push3(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Typography Tokens </h5>`);
                    _push3(ssrRenderComponent(VRow, { class: "mb-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(typographyTokens, (t) => {
                            _push4(ssrRenderComponent(VCol, {
                              key: t.token,
                              cols: "12",
                              sm: "6",
                              lg: "4"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VCard, {
                                    variant: "outlined",
                                    class: "typo-card"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VCardText, { class: "pa-4" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="${ssrRenderClass([t.class, "font-weight-medium text-high-emphasis mb-1"])}" data-v-cbe5d0f9${_scopeId6}>${ssrInterpolate(t.token === "button" ? "Button Text" : t.token === "overline" ? "OVERLINE TEXT" : "AaBbCc 123")}</div><div class="text-caption text-medium-emphasis" data-v-cbe5d0f9${_scopeId6}><span class="font-weight-medium" data-v-cbe5d0f9${_scopeId6}>${ssrInterpolate(t.class)}</span><span class="mx-1" data-v-cbe5d0f9${_scopeId6}>•</span> ${ssrInterpolate(t.size)} <span class="mx-1" data-v-cbe5d0f9${_scopeId6}>•</span> Weight: ${ssrInterpolate(t.weight)}</div>`);
                                            } else {
                                              return [
                                                createVNode("div", {
                                                  class: [t.class, "font-weight-medium text-high-emphasis mb-1"]
                                                }, toDisplayString(t.token === "button" ? "Button Text" : t.token === "overline" ? "OVERLINE TEXT" : "AaBbCc 123"), 3),
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, [
                                                  createVNode("span", { class: "font-weight-medium" }, toDisplayString(t.class), 1),
                                                  createVNode("span", { class: "mx-1" }, "•"),
                                                  createTextVNode(" " + toDisplayString(t.size) + " ", 1),
                                                  createVNode("span", { class: "mx-1" }, "•"),
                                                  createTextVNode(" Weight: " + toDisplayString(t.weight), 1)
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VCardText, { class: "pa-4" }, {
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                class: [t.class, "font-weight-medium text-high-emphasis mb-1"]
                                              }, toDisplayString(t.token === "button" ? "Button Text" : t.token === "overline" ? "OVERLINE TEXT" : "AaBbCc 123"), 3),
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, [
                                                createVNode("span", { class: "font-weight-medium" }, toDisplayString(t.class), 1),
                                                createVNode("span", { class: "mx-1" }, "•"),
                                                createTextVNode(" " + toDisplayString(t.size) + " ", 1),
                                                createVNode("span", { class: "mx-1" }, "•"),
                                                createTextVNode(" Weight: " + toDisplayString(t.weight), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VCard, {
                                      variant: "outlined",
                                      class: "typo-card"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCardText, { class: "pa-4" }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              class: [t.class, "font-weight-medium text-high-emphasis mb-1"]
                                            }, toDisplayString(t.token === "button" ? "Button Text" : t.token === "overline" ? "OVERLINE TEXT" : "AaBbCc 123"), 3),
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, [
                                              createVNode("span", { class: "font-weight-medium" }, toDisplayString(t.class), 1),
                                              createVNode("span", { class: "mx-1" }, "•"),
                                              createTextVNode(" " + toDisplayString(t.size) + " ", 1),
                                              createVNode("span", { class: "mx-1" }, "•"),
                                              createTextVNode(" Weight: " + toDisplayString(t.weight), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(typographyTokens, (t) => {
                              return createVNode(VCol, {
                                key: t.token,
                                cols: "12",
                                sm: "6",
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    variant: "outlined",
                                    class: "typo-card"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, { class: "pa-4" }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: [t.class, "font-weight-medium text-high-emphasis mb-1"]
                                          }, toDisplayString(t.token === "button" ? "Button Text" : t.token === "overline" ? "OVERLINE TEXT" : "AaBbCc 123"), 3),
                                          createVNode("div", { class: "text-caption text-medium-emphasis" }, [
                                            createVNode("span", { class: "font-weight-medium" }, toDisplayString(t.class), 1),
                                            createVNode("span", { class: "mx-1" }, "•"),
                                            createTextVNode(" " + toDisplayString(t.size) + " ", 1),
                                            createVNode("span", { class: "mx-1" }, "•"),
                                            createTextVNode(" Weight: " + toDisplayString(t.weight), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Token Reference Table </h5><div class="table-responsive" data-v-cbe5d0f9${_scopeId2}>`);
                    _push3(ssrRenderComponent(VTable, { class: "typo-table" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<thead data-v-cbe5d0f9${_scopeId3}><tr data-v-cbe5d0f9${_scopeId3}><th class="text-left font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId3}>Token</th><th class="text-left font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId3}>Size</th><th class="text-left font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId3}>Weight</th><th class="text-left font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId3}>Line Height</th><th class="text-left font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId3}>Letter Spacing</th><th class="text-left font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId3}>Class</th></tr></thead><tbody data-v-cbe5d0f9${_scopeId3}><!--[-->`);
                          ssrRenderList(typographyTokens, (t) => {
                            _push4(`<tr data-v-cbe5d0f9${_scopeId3}><td class="font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId3}>${ssrInterpolate(t.token)}</td><td class="text-medium-emphasis" data-v-cbe5d0f9${_scopeId3}>${ssrInterpolate(t.size)}</td><td class="text-medium-emphasis" data-v-cbe5d0f9${_scopeId3}>${ssrInterpolate(t.weight)}</td><td class="text-medium-emphasis" data-v-cbe5d0f9${_scopeId3}>${ssrInterpolate(t.lineHeight)}</td><td class="text-medium-emphasis" data-v-cbe5d0f9${_scopeId3}>${ssrInterpolate(t.letterSpacing)}</td><td data-v-cbe5d0f9${_scopeId3}><code class="code-inline" data-v-cbe5d0f9${_scopeId3}>${ssrInterpolate(t.class)}</code></td></tr>`);
                          });
                          _push4(`<!--]--></tbody>`);
                        } else {
                          return [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Token"),
                                createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Size"),
                                createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Weight"),
                                createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Line Height"),
                                createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Letter Spacing"),
                                createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Class")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(), createBlock(Fragment, null, renderList(typographyTokens, (t) => {
                                return createVNode("tr", {
                                  key: t.token
                                }, [
                                  createVNode("td", { class: "font-weight-medium text-high-emphasis" }, toDisplayString(t.token), 1),
                                  createVNode("td", { class: "text-medium-emphasis" }, toDisplayString(t.size), 1),
                                  createVNode("td", { class: "text-medium-emphasis" }, toDisplayString(t.weight), 1),
                                  createVNode("td", { class: "text-medium-emphasis" }, toDisplayString(t.lineHeight), 1),
                                  createVNode("td", { class: "text-medium-emphasis" }, toDisplayString(t.letterSpacing), 1),
                                  createVNode("td", null, [
                                    createVNode("code", { class: "code-inline" }, toDisplayString(t.class), 1)
                                  ])
                                ]);
                              }), 64))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Live Preview </h5><div class="d-flex flex-column gap-4" data-v-cbe5d0f9${_scopeId2}><!--[-->`);
                    ssrRenderList(typographyTokens.slice(0, 9), (t) => {
                      _push3(`<div class="d-flex align-baseline gap-4" data-v-cbe5d0f9${_scopeId2}><span class="text-caption text-medium-emphasis" style="${ssrRenderStyle({ "min-width": "90px" })}" data-v-cbe5d0f9${_scopeId2}>${ssrInterpolate(t.class)}</span><span class="${ssrRenderClass(t.class)}" data-v-cbe5d0f9${_scopeId2}> The quick brown fox jumps over the lazy dog </span></div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Font Family "),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mb-6" }, [
                        createVNode("code", { class: "code-inline" }, '"Poppins", sans-serif'),
                        createTextVNode(" — applied globally with system-specific fallbacks. ")
                      ]),
                      createVNode(VDivider, { class: "mb-6" }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " Typography Tokens "),
                      createVNode(VRow, { class: "mb-6" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(typographyTokens, (t) => {
                            return createVNode(VCol, {
                              key: t.token,
                              cols: "12",
                              sm: "6",
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  variant: "outlined",
                                  class: "typo-card"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, { class: "pa-4" }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: [t.class, "font-weight-medium text-high-emphasis mb-1"]
                                        }, toDisplayString(t.token === "button" ? "Button Text" : t.token === "overline" ? "OVERLINE TEXT" : "AaBbCc 123"), 3),
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, [
                                          createVNode("span", { class: "font-weight-medium" }, toDisplayString(t.class), 1),
                                          createVNode("span", { class: "mx-1" }, "•"),
                                          createTextVNode(" " + toDisplayString(t.size) + " ", 1),
                                          createVNode("span", { class: "mx-1" }, "•"),
                                          createTextVNode(" Weight: " + toDisplayString(t.weight), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider, { class: "mb-6" }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " Token Reference Table "),
                      createVNode("div", { class: "table-responsive" }, [
                        createVNode(VTable, { class: "typo-table" }, {
                          default: withCtx(() => [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Token"),
                                createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Size"),
                                createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Weight"),
                                createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Line Height"),
                                createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Letter Spacing"),
                                createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Class")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(), createBlock(Fragment, null, renderList(typographyTokens, (t) => {
                                return createVNode("tr", {
                                  key: t.token
                                }, [
                                  createVNode("td", { class: "font-weight-medium text-high-emphasis" }, toDisplayString(t.token), 1),
                                  createVNode("td", { class: "text-medium-emphasis" }, toDisplayString(t.size), 1),
                                  createVNode("td", { class: "text-medium-emphasis" }, toDisplayString(t.weight), 1),
                                  createVNode("td", { class: "text-medium-emphasis" }, toDisplayString(t.lineHeight), 1),
                                  createVNode("td", { class: "text-medium-emphasis" }, toDisplayString(t.letterSpacing), 1),
                                  createVNode("td", null, [
                                    createVNode("code", { class: "code-inline" }, toDisplayString(t.class), 1)
                                  ])
                                ]);
                              }), 64))
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(VDivider, { class: "my-6" }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " Live Preview "),
                      createVNode("div", { class: "d-flex flex-column gap-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(typographyTokens.slice(0, 9), (t) => {
                          return openBlock(), createBlock("div", {
                            key: t.token,
                            class: "d-flex align-baseline gap-4"
                          }, [
                            createVNode("span", {
                              class: "text-caption text-medium-emphasis",
                              style: { "min-width": "90px" }
                            }, toDisplayString(t.class), 1),
                            createVNode("span", {
                              class: t.class
                            }, " The quick brown fox jumps over the lazy dog ", 2)
                          ]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCardText, { class: "pa-6" }, {
                  default: withCtx(() => [
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Font Family "),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis mb-6" }, [
                      createVNode("code", { class: "code-inline" }, '"Poppins", sans-serif'),
                      createTextVNode(" — applied globally with system-specific fallbacks. ")
                    ]),
                    createVNode(VDivider, { class: "mb-6" }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " Typography Tokens "),
                    createVNode(VRow, { class: "mb-6" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(typographyTokens, (t) => {
                          return createVNode(VCol, {
                            key: t.token,
                            cols: "12",
                            sm: "6",
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                variant: "outlined",
                                class: "typo-card"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, { class: "pa-4" }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: [t.class, "font-weight-medium text-high-emphasis mb-1"]
                                      }, toDisplayString(t.token === "button" ? "Button Text" : t.token === "overline" ? "OVERLINE TEXT" : "AaBbCc 123"), 3),
                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, [
                                        createVNode("span", { class: "font-weight-medium" }, toDisplayString(t.class), 1),
                                        createVNode("span", { class: "mx-1" }, "•"),
                                        createTextVNode(" " + toDisplayString(t.size) + " ", 1),
                                        createVNode("span", { class: "mx-1" }, "•"),
                                        createTextVNode(" Weight: " + toDisplayString(t.weight), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider, { class: "mb-6" }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " Token Reference Table "),
                    createVNode("div", { class: "table-responsive" }, [
                      createVNode(VTable, { class: "typo-table" }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Token"),
                              createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Size"),
                              createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Weight"),
                              createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Line Height"),
                              createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Letter Spacing"),
                              createVNode("th", { class: "text-left font-weight-medium text-high-emphasis" }, "Class")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(), createBlock(Fragment, null, renderList(typographyTokens, (t) => {
                              return createVNode("tr", {
                                key: t.token
                              }, [
                                createVNode("td", { class: "font-weight-medium text-high-emphasis" }, toDisplayString(t.token), 1),
                                createVNode("td", { class: "text-medium-emphasis" }, toDisplayString(t.size), 1),
                                createVNode("td", { class: "text-medium-emphasis" }, toDisplayString(t.weight), 1),
                                createVNode("td", { class: "text-medium-emphasis" }, toDisplayString(t.lineHeight), 1),
                                createVNode("td", { class: "text-medium-emphasis" }, toDisplayString(t.letterSpacing), 1),
                                createVNode("td", null, [
                                  createVNode("code", { class: "code-inline" }, toDisplayString(t.class), 1)
                                ])
                              ]);
                            }), 64))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(VDivider, { class: "my-6" }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " Live Preview "),
                    createVNode("div", { class: "d-flex flex-column gap-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(typographyTokens.slice(0, 9), (t) => {
                        return openBlock(), createBlock("div", {
                          key: t.token,
                          class: "d-flex align-baseline gap-4"
                        }, [
                          createVNode("span", {
                            class: "text-caption text-medium-emphasis",
                            style: { "min-width": "90px" }
                          }, toDisplayString(t.class), 1),
                          createVNode("span", {
                            class: t.class
                          }, " The quick brown fox jumps over the lazy dog ", 2)
                        ]);
                      }), 128))
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "colors") {
        _push(ssrRenderComponent(VCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardText, { class: "pa-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-2" data-v-cbe5d0f9${_scopeId2}> Brand Primary Palette </h5><p class="text-body-1 text-medium-emphasis mb-5" data-v-cbe5d0f9${_scopeId2}> Green-based palette centered on <code class="code-inline" data-v-cbe5d0f9${_scopeId2}>#10AF13</code>. </p>`);
                    _push3(ssrRenderComponent(VRow, { class: "mb-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(primaryPalette, (c) => {
                            _push4(ssrRenderComponent(VCol, {
                              key: c.token,
                              cols: "6",
                              sm: "4",
                              md: "3",
                              lg: "2"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VCard, {
                                    variant: "outlined",
                                    class: "swatch-card"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="swatch-rect" style="${ssrRenderStyle({ backgroundColor: c.light })}" data-v-cbe5d0f9${_scopeId5}></div>`);
                                        _push6(ssrRenderComponent(VCardText, { class: "pa-2 text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="text-caption font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId6}>${ssrInterpolate(c.token)}</div><div class="text-caption text-medium-emphasis" data-v-cbe5d0f9${_scopeId6}>${ssrInterpolate(c.light)}</div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(c.token), 1),
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.light), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode("div", {
                                            class: "swatch-rect",
                                            style: { backgroundColor: c.light }
                                          }, null, 4),
                                          createVNode(VCardText, { class: "pa-2 text-center" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(c.token), 1),
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.light), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VCard, {
                                      variant: "outlined",
                                      class: "swatch-card"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: "swatch-rect",
                                          style: { backgroundColor: c.light }
                                        }, null, 4),
                                        createVNode(VCardText, { class: "pa-2 text-center" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(c.token), 1),
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.light), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(primaryPalette, (c) => {
                              return createVNode(VCol, {
                                key: c.token,
                                cols: "6",
                                sm: "4",
                                md: "3",
                                lg: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    variant: "outlined",
                                    class: "swatch-card"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: "swatch-rect",
                                        style: { backgroundColor: c.light }
                                      }, null, 4),
                                      createVNode(VCardText, { class: "pa-2 text-center" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(c.token), 1),
                                          createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.light), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Opacity / Reference Tokens </h5>`);
                    _push3(ssrRenderComponent(VRow, { class: "mb-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(opacityTokens, (o) => {
                            _push4(ssrRenderComponent(VCol, {
                              key: o.token,
                              cols: "12",
                              sm: "6",
                              md: "4",
                              lg: "3"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VCard, {
                                    variant: "outlined",
                                    class: "swatch-card"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="swatch-rect d-flex align-center justify-center" style="${ssrRenderStyle({ backgroundColor: o.value })}" data-v-cbe5d0f9${_scopeId5}><span class="text-caption font-weight-medium" style="${ssrRenderStyle({ "color": "#fff", "text-shadow": "0 1px 2px rgba(0,0,0,.5)" })}" data-v-cbe5d0f9${_scopeId5}>${ssrInterpolate(o.opacity)}</span></div>`);
                                        _push6(ssrRenderComponent(VCardText, { class: "pa-2 text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="text-caption font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId6}>${ssrInterpolate(o.token)}</div><div class="text-caption text-medium-emphasis" data-v-cbe5d0f9${_scopeId6}>${ssrInterpolate(o.value)}</div><div class="text-caption text-medium-emphasis" data-v-cbe5d0f9${_scopeId6}>${ssrInterpolate(o.desc)}</div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(o.token), 1),
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(o.value), 1),
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(o.desc), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode("div", {
                                            class: "swatch-rect d-flex align-center justify-center",
                                            style: { backgroundColor: o.value }
                                          }, [
                                            createVNode("span", {
                                              class: "text-caption font-weight-medium",
                                              style: { "color": "#fff", "text-shadow": "0 1px 2px rgba(0,0,0,.5)" }
                                            }, toDisplayString(o.opacity), 1)
                                          ], 4),
                                          createVNode(VCardText, { class: "pa-2 text-center" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(o.token), 1),
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(o.value), 1),
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(o.desc), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VCard, {
                                      variant: "outlined",
                                      class: "swatch-card"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: "swatch-rect d-flex align-center justify-center",
                                          style: { backgroundColor: o.value }
                                        }, [
                                          createVNode("span", {
                                            class: "text-caption font-weight-medium",
                                            style: { "color": "#fff", "text-shadow": "0 1px 2px rgba(0,0,0,.5)" }
                                          }, toDisplayString(o.opacity), 1)
                                        ], 4),
                                        createVNode(VCardText, { class: "pa-2 text-center" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(o.token), 1),
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(o.value), 1),
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(o.desc), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(opacityTokens, (o) => {
                              return createVNode(VCol, {
                                key: o.token,
                                cols: "12",
                                sm: "6",
                                md: "4",
                                lg: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    variant: "outlined",
                                    class: "swatch-card"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: "swatch-rect d-flex align-center justify-center",
                                        style: { backgroundColor: o.value }
                                      }, [
                                        createVNode("span", {
                                          class: "text-caption font-weight-medium",
                                          style: { "color": "#fff", "text-shadow": "0 1px 2px rgba(0,0,0,.5)" }
                                        }, toDisplayString(o.opacity), 1)
                                      ], 4),
                                      createVNode(VCardText, { class: "pa-2 text-center" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(o.token), 1),
                                          createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(o.value), 1),
                                          createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(o.desc), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Semantic Colors </h5>`);
                    _push3(ssrRenderComponent(VRow, { class: "mb-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(semanticColors, (c) => {
                            _push4(ssrRenderComponent(VCol, {
                              key: c.token,
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VCard, {
                                    variant: "outlined",
                                    class: "swatch-card"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="swatch-rect" style="${ssrRenderStyle({ backgroundColor: c.light })}" data-v-cbe5d0f9${_scopeId5}></div>`);
                                        _push6(ssrRenderComponent(VCardText, { class: "pa-2 text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="text-caption font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId6}>${ssrInterpolate(c.token)}</div><div class="text-caption text-medium-emphasis" data-v-cbe5d0f9${_scopeId6}>${ssrInterpolate(c.light)}</div><div class="text-caption text-medium-emphasis" data-v-cbe5d0f9${_scopeId6}>${ssrInterpolate(c.desc)}</div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(c.token), 1),
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.light), 1),
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.desc), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode("div", {
                                            class: "swatch-rect",
                                            style: { backgroundColor: c.light }
                                          }, null, 4),
                                          createVNode(VCardText, { class: "pa-2 text-center" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(c.token), 1),
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.light), 1),
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.desc), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VCard, {
                                      variant: "outlined",
                                      class: "swatch-card"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: "swatch-rect",
                                          style: { backgroundColor: c.light }
                                        }, null, 4),
                                        createVNode(VCardText, { class: "pa-2 text-center" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(c.token), 1),
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.light), 1),
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.desc), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(semanticColors, (c) => {
                              return createVNode(VCol, {
                                key: c.token,
                                cols: "12",
                                sm: "6",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    variant: "outlined",
                                    class: "swatch-card"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: "swatch-rect",
                                        style: { backgroundColor: c.light }
                                      }, null, 4),
                                      createVNode(VCardText, { class: "pa-2 text-center" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(c.token), 1),
                                          createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.light), 1),
                                          createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.desc), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Grey Palette </h5>`);
                    _push3(ssrRenderComponent(VTable, { class: "color-table mb-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<thead data-v-cbe5d0f9${_scopeId3}><tr data-v-cbe5d0f9${_scopeId3}><th class="font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId3}>Token</th><th class="font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId3}>Light</th><th class="font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId3}>Dark</th><th class="font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId3}>Preview</th></tr></thead><tbody data-v-cbe5d0f9${_scopeId3}><!--[-->`);
                          ssrRenderList(greyPalette, (g) => {
                            _push4(`<tr data-v-cbe5d0f9${_scopeId3}><td class="font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId3}>${ssrInterpolate(g.token)}</td><td data-v-cbe5d0f9${_scopeId3}><code class="code-inline" data-v-cbe5d0f9${_scopeId3}>${ssrInterpolate(g.light)}</code></td><td data-v-cbe5d0f9${_scopeId3}><code class="code-inline" data-v-cbe5d0f9${_scopeId3}>${ssrInterpolate(g.dark)}</code></td><td data-v-cbe5d0f9${_scopeId3}><div class="d-flex gap-2" data-v-cbe5d0f9${_scopeId3}><div class="swatch-mini" style="${ssrRenderStyle({ backgroundColor: g.light, border: "1px solid rgba(var(--v-theme-on-surface), 0.12)" })}" data-v-cbe5d0f9${_scopeId3}></div><div class="swatch-mini" style="${ssrRenderStyle({ backgroundColor: g.dark })}" data-v-cbe5d0f9${_scopeId3}></div></div></td></tr>`);
                          });
                          _push4(`<!--]--></tbody>`);
                        } else {
                          return [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "font-weight-medium text-high-emphasis" }, "Token"),
                                createVNode("th", { class: "font-weight-medium text-high-emphasis" }, "Light"),
                                createVNode("th", { class: "font-weight-medium text-high-emphasis" }, "Dark"),
                                createVNode("th", { class: "font-weight-medium text-high-emphasis" }, "Preview")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(), createBlock(Fragment, null, renderList(greyPalette, (g) => {
                                return createVNode("tr", {
                                  key: g.token
                                }, [
                                  createVNode("td", { class: "font-weight-medium text-high-emphasis" }, toDisplayString(g.token), 1),
                                  createVNode("td", null, [
                                    createVNode("code", { class: "code-inline" }, toDisplayString(g.light), 1)
                                  ]),
                                  createVNode("td", null, [
                                    createVNode("code", { class: "code-inline" }, toDisplayString(g.dark), 1)
                                  ]),
                                  createVNode("td", null, [
                                    createVNode("div", { class: "d-flex gap-2" }, [
                                      createVNode("div", {
                                        class: "swatch-mini",
                                        style: { backgroundColor: g.light, border: "1px solid rgba(var(--v-theme-on-surface), 0.12)" }
                                      }, null, 4),
                                      createVNode("div", {
                                        class: "swatch-mini",
                                        style: { backgroundColor: g.dark }
                                      }, null, 4)
                                    ])
                                  ])
                                ]);
                              }), 64))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Surface &amp; Background </h5>`);
                    _push3(ssrRenderComponent(VRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(surfaceColors, (s) => {
                            _push4(ssrRenderComponent(VCol, {
                              key: s.token,
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VCard, {
                                    variant: "outlined",
                                    class: "swatch-card"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="swatch-rect" style="${ssrRenderStyle({ backgroundColor: s.light })}" data-v-cbe5d0f9${_scopeId5}></div>`);
                                        _push6(ssrRenderComponent(VCardText, { class: "pa-2 text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="text-caption font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId6}>${ssrInterpolate(s.token)}</div><div class="text-caption text-medium-emphasis" data-v-cbe5d0f9${_scopeId6}>${ssrInterpolate(s.light)}</div><div class="text-caption text-medium-emphasis" data-v-cbe5d0f9${_scopeId6}>${ssrInterpolate(s.desc)}</div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(s.token), 1),
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(s.light), 1),
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(s.desc), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode("div", {
                                            class: "swatch-rect",
                                            style: { backgroundColor: s.light }
                                          }, null, 4),
                                          createVNode(VCardText, { class: "pa-2 text-center" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(s.token), 1),
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(s.light), 1),
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(s.desc), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VCard, {
                                      variant: "outlined",
                                      class: "swatch-card"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: "swatch-rect",
                                          style: { backgroundColor: s.light }
                                        }, null, 4),
                                        createVNode(VCardText, { class: "pa-2 text-center" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(s.token), 1),
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(s.light), 1),
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(s.desc), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(surfaceColors, (s) => {
                              return createVNode(VCol, {
                                key: s.token,
                                cols: "12",
                                sm: "6",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    variant: "outlined",
                                    class: "swatch-card"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: "swatch-rect",
                                        style: { backgroundColor: s.light }
                                      }, null, 4),
                                      createVNode(VCardText, { class: "pa-2 text-center" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(s.token), 1),
                                          createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(s.light), 1),
                                          createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(s.desc), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Brand Primary Palette "),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mb-5" }, [
                        createTextVNode(" Green-based palette centered on "),
                        createVNode("code", { class: "code-inline" }, "#10AF13"),
                        createTextVNode(". ")
                      ]),
                      createVNode(VRow, { class: "mb-6" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(primaryPalette, (c) => {
                            return createVNode(VCol, {
                              key: c.token,
                              cols: "6",
                              sm: "4",
                              md: "3",
                              lg: "2"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  variant: "outlined",
                                  class: "swatch-card"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: "swatch-rect",
                                      style: { backgroundColor: c.light }
                                    }, null, 4),
                                    createVNode(VCardText, { class: "pa-2 text-center" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(c.token), 1),
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.light), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider, { class: "mb-6" }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " Opacity / Reference Tokens "),
                      createVNode(VRow, { class: "mb-6" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(opacityTokens, (o) => {
                            return createVNode(VCol, {
                              key: o.token,
                              cols: "12",
                              sm: "6",
                              md: "4",
                              lg: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  variant: "outlined",
                                  class: "swatch-card"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: "swatch-rect d-flex align-center justify-center",
                                      style: { backgroundColor: o.value }
                                    }, [
                                      createVNode("span", {
                                        class: "text-caption font-weight-medium",
                                        style: { "color": "#fff", "text-shadow": "0 1px 2px rgba(0,0,0,.5)" }
                                      }, toDisplayString(o.opacity), 1)
                                    ], 4),
                                    createVNode(VCardText, { class: "pa-2 text-center" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(o.token), 1),
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(o.value), 1),
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(o.desc), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider, { class: "mb-6" }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " Semantic Colors "),
                      createVNode(VRow, { class: "mb-6" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(semanticColors, (c) => {
                            return createVNode(VCol, {
                              key: c.token,
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  variant: "outlined",
                                  class: "swatch-card"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: "swatch-rect",
                                      style: { backgroundColor: c.light }
                                    }, null, 4),
                                    createVNode(VCardText, { class: "pa-2 text-center" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(c.token), 1),
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.light), 1),
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.desc), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider, { class: "mb-6" }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " Grey Palette "),
                      createVNode(VTable, { class: "color-table mb-6" }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "font-weight-medium text-high-emphasis" }, "Token"),
                              createVNode("th", { class: "font-weight-medium text-high-emphasis" }, "Light"),
                              createVNode("th", { class: "font-weight-medium text-high-emphasis" }, "Dark"),
                              createVNode("th", { class: "font-weight-medium text-high-emphasis" }, "Preview")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(), createBlock(Fragment, null, renderList(greyPalette, (g) => {
                              return createVNode("tr", {
                                key: g.token
                              }, [
                                createVNode("td", { class: "font-weight-medium text-high-emphasis" }, toDisplayString(g.token), 1),
                                createVNode("td", null, [
                                  createVNode("code", { class: "code-inline" }, toDisplayString(g.light), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode("code", { class: "code-inline" }, toDisplayString(g.dark), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "d-flex gap-2" }, [
                                    createVNode("div", {
                                      class: "swatch-mini",
                                      style: { backgroundColor: g.light, border: "1px solid rgba(var(--v-theme-on-surface), 0.12)" }
                                    }, null, 4),
                                    createVNode("div", {
                                      class: "swatch-mini",
                                      style: { backgroundColor: g.dark }
                                    }, null, 4)
                                  ])
                                ])
                              ]);
                            }), 64))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider, { class: "mb-6" }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " Surface & Background "),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(surfaceColors, (s) => {
                            return createVNode(VCol, {
                              key: s.token,
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  variant: "outlined",
                                  class: "swatch-card"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: "swatch-rect",
                                      style: { backgroundColor: s.light }
                                    }, null, 4),
                                    createVNode(VCardText, { class: "pa-2 text-center" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(s.token), 1),
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(s.light), 1),
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(s.desc), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCardText, { class: "pa-6" }, {
                  default: withCtx(() => [
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Brand Primary Palette "),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis mb-5" }, [
                      createTextVNode(" Green-based palette centered on "),
                      createVNode("code", { class: "code-inline" }, "#10AF13"),
                      createTextVNode(". ")
                    ]),
                    createVNode(VRow, { class: "mb-6" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(primaryPalette, (c) => {
                          return createVNode(VCol, {
                            key: c.token,
                            cols: "6",
                            sm: "4",
                            md: "3",
                            lg: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                variant: "outlined",
                                class: "swatch-card"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: "swatch-rect",
                                    style: { backgroundColor: c.light }
                                  }, null, 4),
                                  createVNode(VCardText, { class: "pa-2 text-center" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(c.token), 1),
                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.light), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider, { class: "mb-6" }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " Opacity / Reference Tokens "),
                    createVNode(VRow, { class: "mb-6" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(opacityTokens, (o) => {
                          return createVNode(VCol, {
                            key: o.token,
                            cols: "12",
                            sm: "6",
                            md: "4",
                            lg: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                variant: "outlined",
                                class: "swatch-card"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: "swatch-rect d-flex align-center justify-center",
                                    style: { backgroundColor: o.value }
                                  }, [
                                    createVNode("span", {
                                      class: "text-caption font-weight-medium",
                                      style: { "color": "#fff", "text-shadow": "0 1px 2px rgba(0,0,0,.5)" }
                                    }, toDisplayString(o.opacity), 1)
                                  ], 4),
                                  createVNode(VCardText, { class: "pa-2 text-center" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(o.token), 1),
                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(o.value), 1),
                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(o.desc), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider, { class: "mb-6" }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " Semantic Colors "),
                    createVNode(VRow, { class: "mb-6" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(semanticColors, (c) => {
                          return createVNode(VCol, {
                            key: c.token,
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                variant: "outlined",
                                class: "swatch-card"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: "swatch-rect",
                                    style: { backgroundColor: c.light }
                                  }, null, 4),
                                  createVNode(VCardText, { class: "pa-2 text-center" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(c.token), 1),
                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.light), 1),
                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(c.desc), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider, { class: "mb-6" }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " Grey Palette "),
                    createVNode(VTable, { class: "color-table mb-6" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "font-weight-medium text-high-emphasis" }, "Token"),
                            createVNode("th", { class: "font-weight-medium text-high-emphasis" }, "Light"),
                            createVNode("th", { class: "font-weight-medium text-high-emphasis" }, "Dark"),
                            createVNode("th", { class: "font-weight-medium text-high-emphasis" }, "Preview")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(), createBlock(Fragment, null, renderList(greyPalette, (g) => {
                            return createVNode("tr", {
                              key: g.token
                            }, [
                              createVNode("td", { class: "font-weight-medium text-high-emphasis" }, toDisplayString(g.token), 1),
                              createVNode("td", null, [
                                createVNode("code", { class: "code-inline" }, toDisplayString(g.light), 1)
                              ]),
                              createVNode("td", null, [
                                createVNode("code", { class: "code-inline" }, toDisplayString(g.dark), 1)
                              ]),
                              createVNode("td", null, [
                                createVNode("div", { class: "d-flex gap-2" }, [
                                  createVNode("div", {
                                    class: "swatch-mini",
                                    style: { backgroundColor: g.light, border: "1px solid rgba(var(--v-theme-on-surface), 0.12)" }
                                  }, null, 4),
                                  createVNode("div", {
                                    class: "swatch-mini",
                                    style: { backgroundColor: g.dark }
                                  }, null, 4)
                                ])
                              ])
                            ]);
                          }), 64))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider, { class: "mb-6" }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " Surface & Background "),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(surfaceColors, (s) => {
                          return createVNode(VCol, {
                            key: s.token,
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                variant: "outlined",
                                class: "swatch-card"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: "swatch-rect",
                                    style: { backgroundColor: s.light }
                                  }, null, 4),
                                  createVNode(VCardText, { class: "pa-2 text-center" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(s.token), 1),
                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(s.light), 1),
                                      createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(s.desc), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "components") {
        _push(ssrRenderComponent(VCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardText, { class: "pa-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-2" data-v-cbe5d0f9${_scopeId2}> Button </h5><p class="text-body-1 text-medium-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Vuetify <code class="code-inline" data-v-cbe5d0f9${_scopeId2}>VBtn</code> component in various styles used across the interface. </p>`);
                    _push3(ssrRenderComponent(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtn, { color: "primary" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        start: "",
                                        icon: "ri-check-line"
                                      }, null, _parent6, _scopeId5));
                                      _push6(` Primary `);
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "ri-check-line"
                                        }),
                                        createTextVNode(" Primary ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "primary",
                                  variant: "outlined"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        start: "",
                                        icon: "ri-check-line"
                                      }, null, _parent6, _scopeId5));
                                      _push6(` Outlined `);
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "ri-check-line"
                                        }),
                                        createTextVNode(" Outlined ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "primary",
                                  variant: "tonal"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        start: "",
                                        icon: "ri-check-line"
                                      }, null, _parent6, _scopeId5));
                                      _push6(` Tonal `);
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "ri-check-line"
                                        }),
                                        createTextVNode(" Tonal ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "primary",
                                  variant: "text"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        start: "",
                                        icon: "ri-check-line"
                                      }, null, _parent6, _scopeId5));
                                      _push6(` Text `);
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "ri-check-line"
                                        }),
                                        createTextVNode(" Text ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  icon: "ri-check-line",
                                  color: "success",
                                  variant: "outlined",
                                  size: "small",
                                  class: "action-btn-demo"
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  icon: "ri-close-circle-line",
                                  color: "error",
                                  variant: "outlined",
                                  size: "small",
                                  class: "action-btn-demo"
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "primary",
                                  rounded: "xl",
                                  size: "small",
                                  class: "px-5"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Rounded Pill `);
                                    } else {
                                      return [
                                        createTextVNode(" Rounded Pill ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, { color: "primary" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "ri-check-line"
                                      }),
                                      createTextVNode(" Primary ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    variant: "outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "ri-check-line"
                                      }),
                                      createTextVNode(" Outlined ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    variant: "tonal"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "ri-check-line"
                                      }),
                                      createTextVNode(" Tonal ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    variant: "text"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "ri-check-line"
                                      }),
                                      createTextVNode(" Text ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    icon: "ri-check-line",
                                    color: "success",
                                    variant: "outlined",
                                    size: "small",
                                    class: "action-btn-demo"
                                  }),
                                  createVNode(VBtn, {
                                    icon: "ri-close-circle-line",
                                    color: "error",
                                    variant: "outlined",
                                    size: "small",
                                    class: "action-btn-demo"
                                  }),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    rounded: "xl",
                                    size: "small",
                                    class: "px-5"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Rounded Pill ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, { color: "primary" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "ri-check-line"
                                    }),
                                    createTextVNode(" Primary ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "primary",
                                  variant: "outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "ri-check-line"
                                    }),
                                    createTextVNode(" Outlined ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "primary",
                                  variant: "tonal"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "ri-check-line"
                                    }),
                                    createTextVNode(" Tonal ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "primary",
                                  variant: "text"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "ri-check-line"
                                    }),
                                    createTextVNode(" Text ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  icon: "ri-check-line",
                                  color: "success",
                                  variant: "outlined",
                                  size: "small",
                                  class: "action-btn-demo"
                                }),
                                createVNode(VBtn, {
                                  icon: "ri-close-circle-line",
                                  color: "error",
                                  variant: "outlined",
                                  size: "small",
                                  class: "action-btn-demo"
                                }),
                                createVNode(VBtn, {
                                  color: "primary",
                                  rounded: "xl",
                                  size: "small",
                                  class: "px-5"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Rounded Pill ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-2" data-v-cbe5d0f9${_scopeId2}> Button Toggle (View Switcher) </h5><p class="text-body-1 text-medium-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Used on the assessments page to switch between List / Team / Room views. </p>`);
                    _push3(ssrRenderComponent(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, { class: "pa-4 d-flex align-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtnToggle, {
                                  modelValue: unref(demoViewType),
                                  "onUpdate:modelValue": ($event) => isRef(demoViewType) ? demoViewType.value = $event : null,
                                  mandatory: "",
                                  class: "custom-toggle-group-demo"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, {
                                        value: "list",
                                        icon: "ri-list-unordered"
                                      }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VBtn, {
                                        value: "team",
                                        icon: "ri-team-line"
                                      }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VBtn, {
                                        value: "room",
                                        icon: "ri-door-closed-line"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, {
                                          value: "list",
                                          icon: "ri-list-unordered"
                                        }),
                                        createVNode(VBtn, {
                                          value: "team",
                                          icon: "ri-team-line"
                                        }),
                                        createVNode(VBtn, {
                                          value: "room",
                                          icon: "ri-door-closed-line"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtnToggle, {
                                    modelValue: unref(demoViewType),
                                    "onUpdate:modelValue": ($event) => isRef(demoViewType) ? demoViewType.value = $event : null,
                                    mandatory: "",
                                    class: "custom-toggle-group-demo"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        value: "list",
                                        icon: "ri-list-unordered"
                                      }),
                                      createVNode(VBtn, {
                                        value: "team",
                                        icon: "ri-team-line"
                                      }),
                                      createVNode(VBtn, {
                                        value: "room",
                                        icon: "ri-door-closed-line"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, { class: "pa-4 d-flex align-center" }, {
                              default: withCtx(() => [
                                createVNode(VBtnToggle, {
                                  modelValue: unref(demoViewType),
                                  "onUpdate:modelValue": ($event) => isRef(demoViewType) ? demoViewType.value = $event : null,
                                  mandatory: "",
                                  class: "custom-toggle-group-demo"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      value: "list",
                                      icon: "ri-list-unordered"
                                    }),
                                    createVNode(VBtn, {
                                      value: "team",
                                      icon: "ri-team-line"
                                    }),
                                    createVNode(VBtn, {
                                      value: "room",
                                      icon: "ri-door-closed-line"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-2" data-v-cbe5d0f9${_scopeId2}> Chip (Status &amp; Score Badges) </h5><p class="text-body-1 text-medium-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Vuetify <code class="code-inline" data-v-cbe5d0f9${_scopeId2}>VChip</code> used for status indicators and score display. </p>`);
                    _push3(ssrRenderComponent(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VChip, {
                                  color: "warning",
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Pending `);
                                    } else {
                                      return [
                                        createTextVNode(" Pending ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VChip, {
                                  color: "success",
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Approved `);
                                    } else {
                                      return [
                                        createTextVNode(" Approved ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VChip, {
                                  color: "error",
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Rejected `);
                                    } else {
                                      return [
                                        createTextVNode(" Rejected ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VChip, {
                                  color: "success",
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` 92 `);
                                    } else {
                                      return [
                                        createTextVNode(" 92 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VChip, {
                                  color: "warning",
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` 65 `);
                                    } else {
                                      return [
                                        createTextVNode(" 65 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VChip, {
                                  color: "error",
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` 48 `);
                                    } else {
                                      return [
                                        createTextVNode(" 48 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VChip, {
                                  color: "info",
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` 3 Projects `);
                                    } else {
                                      return [
                                        createTextVNode(" 3 Projects ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VChip, {
                                    color: "warning",
                                    variant: "tonal",
                                    size: "small",
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Pending ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VChip, {
                                    color: "success",
                                    variant: "tonal",
                                    size: "small",
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Approved ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VChip, {
                                    color: "error",
                                    variant: "tonal",
                                    size: "small",
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Rejected ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VChip, {
                                    color: "success",
                                    variant: "tonal",
                                    size: "small",
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 92 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VChip, {
                                    color: "warning",
                                    variant: "tonal",
                                    size: "small",
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 65 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VChip, {
                                    color: "error",
                                    variant: "tonal",
                                    size: "small",
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 48 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VChip, {
                                    color: "info",
                                    variant: "tonal",
                                    size: "small",
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 3 Projects ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                              default: withCtx(() => [
                                createVNode(VChip, {
                                  color: "warning",
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Pending ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VChip, {
                                  color: "success",
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Approved ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VChip, {
                                  color: "error",
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Rejected ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VChip, {
                                  color: "success",
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 92 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VChip, {
                                  color: "warning",
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 65 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VChip, {
                                  color: "error",
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 48 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VChip, {
                                  color: "info",
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 3 Projects ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-2" data-v-cbe5d0f9${_scopeId2}> Avatar (Initials) </h5><p class="text-body-1 text-medium-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Vuetify <code class="code-inline" data-v-cbe5d0f9${_scopeId2}>VAvatar</code> used with initials to represent students. </p>`);
                    _push3(ssrRenderComponent(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  size: "34",
                                  color: "grey-50",
                                  class: "border",
                                  style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="text-caption font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId5}>JS</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, "JS")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VAvatar, {
                                  size: "34",
                                  color: "grey-50",
                                  class: "border",
                                  style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="text-caption font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId5}>CM</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, "CM")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VAvatar, {
                                  size: "34",
                                  color: "grey-50",
                                  class: "border",
                                  style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="text-caption font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId5}>JR</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, "JR")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VAvatar, {
                                  size: "40",
                                  class: "bg-primary-opacity-lighter border",
                                  style: { "border-color": "rgba(var(--v-theme-primary), 0.15) !important" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: "ri-door-closed-line",
                                        color: "primary",
                                        size: "20"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: "ri-door-closed-line",
                                          color: "primary",
                                          size: "20"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VAvatar, {
                                  size: "40",
                                  color: "grey-50",
                                  class: "border",
                                  style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="text-body-2 font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId5}>NT</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "NT")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    size: "34",
                                    color: "grey-50",
                                    class: "border",
                                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, "JS")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VAvatar, {
                                    size: "34",
                                    color: "grey-50",
                                    class: "border",
                                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, "CM")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VAvatar, {
                                    size: "34",
                                    color: "grey-50",
                                    class: "border",
                                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, "JR")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VAvatar, {
                                    size: "40",
                                    class: "bg-primary-opacity-lighter border",
                                    style: { "border-color": "rgba(var(--v-theme-primary), 0.15) !important" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-door-closed-line",
                                        color: "primary",
                                        size: "20"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VAvatar, {
                                    size: "40",
                                    color: "grey-50",
                                    class: "border",
                                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "NT")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                              default: withCtx(() => [
                                createVNode(VAvatar, {
                                  size: "34",
                                  color: "grey-50",
                                  class: "border",
                                  style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, "JS")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VAvatar, {
                                  size: "34",
                                  color: "grey-50",
                                  class: "border",
                                  style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, "CM")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VAvatar, {
                                  size: "34",
                                  color: "grey-50",
                                  class: "border",
                                  style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, "JR")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VAvatar, {
                                  size: "40",
                                  class: "bg-primary-opacity-lighter border",
                                  style: { "border-color": "rgba(var(--v-theme-primary), 0.15) !important" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-door-closed-line",
                                      color: "primary",
                                      size: "20"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VAvatar, {
                                  size: "40",
                                  color: "grey-50",
                                  class: "border",
                                  style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "NT")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-2" data-v-cbe5d0f9${_scopeId2}> Text Field &amp; Select </h5><p class="text-body-1 text-medium-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Vuetify <code class="code-inline" data-v-cbe5d0f9${_scopeId2}>VTextField</code> and <code class="code-inline" data-v-cbe5d0f9${_scopeId2}>VSelect</code> used for filtering in the assessments page header. </p>`);
                    _push3(ssrRenderComponent(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, { class: "pa-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex flex-wrap gap-4" data-v-cbe5d0f9${_scopeId4}><div style="${ssrRenderStyle({ "width": "240px" })}" data-v-cbe5d0f9${_scopeId4}>`);
                                _push5(ssrRenderComponent(VTextField, {
                                  placeholder: "Search student",
                                  "prepend-inner-icon": "ri-search-line",
                                  clearable: ""
                                }, null, _parent5, _scopeId4));
                                _push5(`</div><div style="${ssrRenderStyle({ "width": "240px" })}" data-v-cbe5d0f9${_scopeId4}>`);
                                _push5(ssrRenderComponent(VSelect, {
                                  modelValue: unref(selectedStatusFilter),
                                  "onUpdate:modelValue": ($event) => isRef(selectedStatusFilter) ? selectedStatusFilter.value = $event : null,
                                  label: "Status",
                                  items: statusFilterOptions,
                                  clearable: ""
                                }, null, _parent5, _scopeId4));
                                _push5(`</div><div style="${ssrRenderStyle({ "width": "240px" })}" data-v-cbe5d0f9${_scopeId4}>`);
                                _push5(ssrRenderComponent(VSelect, {
                                  label: "Class",
                                  placeholder: "All Classes",
                                  items: ["All Classes", "DPS-Adaptive-A", "DPS-Adaptive-B", "DPS-Adaptive-C"],
                                  clearable: ""
                                }, null, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                    createVNode("div", { style: { "width": "240px" } }, [
                                      createVNode(VTextField, {
                                        placeholder: "Search student",
                                        "prepend-inner-icon": "ri-search-line",
                                        clearable: ""
                                      })
                                    ]),
                                    createVNode("div", { style: { "width": "240px" } }, [
                                      createVNode(VSelect, {
                                        modelValue: unref(selectedStatusFilter),
                                        "onUpdate:modelValue": ($event) => isRef(selectedStatusFilter) ? selectedStatusFilter.value = $event : null,
                                        label: "Status",
                                        items: statusFilterOptions,
                                        clearable: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { style: { "width": "240px" } }, [
                                      createVNode(VSelect, {
                                        label: "Class",
                                        placeholder: "All Classes",
                                        items: ["All Classes", "DPS-Adaptive-A", "DPS-Adaptive-B", "DPS-Adaptive-C"],
                                        clearable: ""
                                      })
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, { class: "pa-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                  createVNode("div", { style: { "width": "240px" } }, [
                                    createVNode(VTextField, {
                                      placeholder: "Search student",
                                      "prepend-inner-icon": "ri-search-line",
                                      clearable: ""
                                    })
                                  ]),
                                  createVNode("div", { style: { "width": "240px" } }, [
                                    createVNode(VSelect, {
                                      modelValue: unref(selectedStatusFilter),
                                      "onUpdate:modelValue": ($event) => isRef(selectedStatusFilter) ? selectedStatusFilter.value = $event : null,
                                      label: "Status",
                                      items: statusFilterOptions,
                                      clearable: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { style: { "width": "240px" } }, [
                                    createVNode(VSelect, {
                                      label: "Class",
                                      placeholder: "All Classes",
                                      items: ["All Classes", "DPS-Adaptive-A", "DPS-Adaptive-B", "DPS-Adaptive-C"],
                                      clearable: ""
                                    })
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-2" data-v-cbe5d0f9${_scopeId2}> Tooltip </h5><p class="text-body-1 text-medium-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Vuetify <code class="code-inline" data-v-cbe5d0f9${_scopeId2}>VTooltip</code> used for icon button hints. </p>`);
                    _push3(ssrRenderComponent(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VTooltip, {
                                  text: "Approve",
                                  location: "top"
                                }, {
                                  activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, mergeProps(props, {
                                        icon: "ri-check-line",
                                        color: "success",
                                        variant: "outlined",
                                        size: "small",
                                        class: "action-btn-demo"
                                      }), null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, mergeProps(props, {
                                          icon: "ri-check-line",
                                          color: "success",
                                          variant: "outlined",
                                          size: "small",
                                          class: "action-btn-demo"
                                        }), null, 16)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VTooltip, {
                                  text: "Reject",
                                  location: "top"
                                }, {
                                  activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, mergeProps(props, {
                                        icon: "ri-close-circle-line",
                                        color: "error",
                                        variant: "outlined",
                                        size: "small",
                                        class: "action-btn-demo"
                                      }), null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, mergeProps(props, {
                                          icon: "ri-close-circle-line",
                                          color: "error",
                                          variant: "outlined",
                                          size: "small",
                                          class: "action-btn-demo"
                                        }), null, 16)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VTooltip, {
                                  text: "History",
                                  location: "top"
                                }, {
                                  activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, mergeProps(props, {
                                        icon: "ri-history-line",
                                        variant: "outlined",
                                        size: "small",
                                        class: "action-btn-demo"
                                      }), null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, mergeProps(props, {
                                          icon: "ri-history-line",
                                          variant: "outlined",
                                          size: "small",
                                          class: "action-btn-demo"
                                        }), null, 16)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VTooltip, {
                                    text: "Approve",
                                    location: "top"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(VBtn, mergeProps(props, {
                                        icon: "ri-check-line",
                                        color: "success",
                                        variant: "outlined",
                                        size: "small",
                                        class: "action-btn-demo"
                                      }), null, 16)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTooltip, {
                                    text: "Reject",
                                    location: "top"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(VBtn, mergeProps(props, {
                                        icon: "ri-close-circle-line",
                                        color: "error",
                                        variant: "outlined",
                                        size: "small",
                                        class: "action-btn-demo"
                                      }), null, 16)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTooltip, {
                                    text: "History",
                                    location: "top"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(VBtn, mergeProps(props, {
                                        icon: "ri-history-line",
                                        variant: "outlined",
                                        size: "small",
                                        class: "action-btn-demo"
                                      }), null, 16)
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                              default: withCtx(() => [
                                createVNode(VTooltip, {
                                  text: "Approve",
                                  location: "top"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VBtn, mergeProps(props, {
                                      icon: "ri-check-line",
                                      color: "success",
                                      variant: "outlined",
                                      size: "small",
                                      class: "action-btn-demo"
                                    }), null, 16)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTooltip, {
                                  text: "Reject",
                                  location: "top"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VBtn, mergeProps(props, {
                                      icon: "ri-close-circle-line",
                                      color: "error",
                                      variant: "outlined",
                                      size: "small",
                                      class: "action-btn-demo"
                                    }), null, 16)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTooltip, {
                                  text: "History",
                                  location: "top"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VBtn, mergeProps(props, {
                                      icon: "ri-history-line",
                                      variant: "outlined",
                                      size: "small",
                                      class: "action-btn-demo"
                                    }), null, 16)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-2" data-v-cbe5d0f9${_scopeId2}> Snackbar (Toast Notification) </h5><p class="text-body-1 text-medium-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Vuetify <code class="code-inline" data-v-cbe5d0f9${_scopeId2}>VSnackbar</code> for success and error feedback messages. </p>`);
                    _push3(ssrRenderComponent(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, { class: "pa-4 d-flex flex-wrap gap-3" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "success",
                                  onClick: ($event) => toast("success", "Approved project successfully.")
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Show Success Toast `);
                                    } else {
                                      return [
                                        createTextVNode(" Show Success Toast ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "error",
                                  onClick: ($event) => toast("error", "Rejected project.")
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Show Error Toast `);
                                    } else {
                                      return [
                                        createTextVNode(" Show Error Toast ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "warning",
                                  onClick: ($event) => toast("warning", "This is a warning message.")
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Show Warning Toast `);
                                    } else {
                                      return [
                                        createTextVNode(" Show Warning Toast ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    color: "success",
                                    onClick: ($event) => toast("success", "Approved project successfully.")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Show Success Toast ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(VBtn, {
                                    color: "error",
                                    onClick: ($event) => toast("error", "Rejected project.")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Show Error Toast ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(VBtn, {
                                    color: "warning",
                                    onClick: ($event) => toast("warning", "This is a warning message.")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Show Warning Toast ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, { class: "pa-4 d-flex flex-wrap gap-3" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  color: "success",
                                  onClick: ($event) => toast("success", "Approved project successfully.")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Show Success Toast ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  color: "error",
                                  onClick: ($event) => toast("error", "Rejected project.")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Show Error Toast ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  color: "warning",
                                  onClick: ($event) => toast("warning", "This is a warning message.")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Show Warning Toast ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-2" data-v-cbe5d0f9${_scopeId2}> Tabs </h5><p class="text-body-1 text-medium-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Vuetify <code class="code-inline" data-v-cbe5d0f9${_scopeId2}>VTabs</code> with bordered style and count badges — as used for Project Approvals / Quiz &amp; Exams switching. </p>`);
                    _push3(ssrRenderComponent(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, { class: "pa-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VTabs, { class: "v-tabs-bordered" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VTab, { value: "projects-demo" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              start: "",
                                              icon: "ri-file-text-line",
                                              class: "me-2"
                                            }, null, _parent7, _scopeId6));
                                            _push7(` Project Approvals <span class="count-badge-demo ms-2 bg-error text-white" data-v-cbe5d0f9${_scopeId6}>20</span>`);
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                start: "",
                                                icon: "ri-file-text-line",
                                                class: "me-2"
                                              }),
                                              createTextVNode(" Project Approvals "),
                                              createVNode("span", { class: "count-badge-demo ms-2 bg-error text-white" }, "20")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VTab, { value: "quizzes-demo" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              start: "",
                                              icon: "ri-todo-line",
                                              class: "me-2"
                                            }, null, _parent7, _scopeId6));
                                            _push7(` Quiz &amp; Exams <span class="count-badge-demo ms-2 bg-primary text-white" data-v-cbe5d0f9${_scopeId6}>15</span>`);
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                start: "",
                                                icon: "ri-todo-line",
                                                class: "me-2"
                                              }),
                                              createTextVNode(" Quiz & Exams "),
                                              createVNode("span", { class: "count-badge-demo ms-2 bg-primary text-white" }, "15")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VTab, { value: "projects-demo" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              start: "",
                                              icon: "ri-file-text-line",
                                              class: "me-2"
                                            }),
                                            createTextVNode(" Project Approvals "),
                                            createVNode("span", { class: "count-badge-demo ms-2 bg-error text-white" }, "20")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VTab, { value: "quizzes-demo" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              start: "",
                                              icon: "ri-todo-line",
                                              class: "me-2"
                                            }),
                                            createTextVNode(" Quiz & Exams "),
                                            createVNode("span", { class: "count-badge-demo ms-2 bg-primary text-white" }, "15")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VTabs, { class: "v-tabs-bordered" }, {
                                    default: withCtx(() => [
                                      createVNode(VTab, { value: "projects-demo" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "ri-file-text-line",
                                            class: "me-2"
                                          }),
                                          createTextVNode(" Project Approvals "),
                                          createVNode("span", { class: "count-badge-demo ms-2 bg-error text-white" }, "20")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTab, { value: "quizzes-demo" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "ri-todo-line",
                                            class: "me-2"
                                          }),
                                          createTextVNode(" Quiz & Exams "),
                                          createVNode("span", { class: "count-badge-demo ms-2 bg-primary text-white" }, "15")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, { class: "pa-4" }, {
                              default: withCtx(() => [
                                createVNode(VTabs, { class: "v-tabs-bordered" }, {
                                  default: withCtx(() => [
                                    createVNode(VTab, { value: "projects-demo" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "ri-file-text-line",
                                          class: "me-2"
                                        }),
                                        createTextVNode(" Project Approvals "),
                                        createVNode("span", { class: "count-badge-demo ms-2 bg-error text-white" }, "20")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTab, { value: "quizzes-demo" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "ri-todo-line",
                                          class: "me-2"
                                        }),
                                        createTextVNode(" Quiz & Exams "),
                                        createVNode("span", { class: "count-badge-demo ms-2 bg-primary text-white" }, "15")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-2" data-v-cbe5d0f9${_scopeId2}> Data Table </h5><p class="text-body-1 text-medium-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Vuetify <code class="code-inline" data-v-cbe5d0f9${_scopeId2}>VDataTable</code> — the primary table component used on the assessments page for displaying student results. </p>`);
                    _push3(ssrRenderComponent(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VDataTable, {
                            headers: [
                              { title: "Student Name", key: "student" },
                              { title: "Book / Session", key: "book" },
                              { title: "Score", key: "score" },
                              { title: "Status", key: "status" },
                              { title: "Action", key: "action", sortable: false, align: "center", width: "120px" }
                            ],
                            items: demoItems,
                            "items-per-page": 5,
                            class: "text-no-wrap",
                            "hide-default-footer": ""
                          }, {
                            "item.student": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center py-2" data-v-cbe5d0f9${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  size: "34",
                                  class: "me-3",
                                  color: "grey-50"
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="text-caption font-weight-medium" data-v-cbe5d0f9${_scopeId5}>${ssrInterpolate(item.initials)}</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(item.initials), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div class="d-flex flex-column" data-v-cbe5d0f9${_scopeId4}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId4}>${ssrInterpolate(item.name)}</span><span class="text-body-2 text-medium-emphasis" data-v-cbe5d0f9${_scopeId4}>${ssrInterpolate(item.studentId)}</span></div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex align-center py-2" }, [
                                    createVNode(VAvatar, {
                                      size: "34",
                                      class: "me-3",
                                      color: "grey-50"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(item.initials), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "d-flex flex-column" }, [
                                      createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.name), 1),
                                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.studentId), 1)
                                    ])
                                  ])
                                ];
                              }
                            }),
                            "item.score": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VChip, {
                                  color: getScoreColor(item.score),
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.score)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.score), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VChip, {
                                    color: getScoreColor(item.score),
                                    variant: "tonal",
                                    size: "small",
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.score), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ];
                              }
                            }),
                            "item.status": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VChip, {
                                  color: getStatusColor(item.status),
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium text-capitalize"
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.status)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.status), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VChip, {
                                    color: getStatusColor(item.status),
                                    variant: "tonal",
                                    size: "small",
                                    class: "font-weight-medium text-capitalize"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.status), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ];
                              }
                            }),
                            "item.action": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex justify-center gap-2" data-v-cbe5d0f9${_scopeId4}>`);
                                _push5(ssrRenderComponent(VTooltip, {
                                  text: "Approve",
                                  location: "top"
                                }, {
                                  activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, mergeProps(props, {
                                        icon: "ri-check-line",
                                        color: "success",
                                        variant: "outlined",
                                        size: "small",
                                        class: "action-btn-demo",
                                        disabled: item.status === "Approved"
                                      }), null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, mergeProps(props, {
                                          icon: "ri-check-line",
                                          color: "success",
                                          variant: "outlined",
                                          size: "small",
                                          class: "action-btn-demo",
                                          disabled: item.status === "Approved"
                                        }), null, 16, ["disabled"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VTooltip, {
                                  text: "Reject",
                                  location: "top"
                                }, {
                                  activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, mergeProps(props, {
                                        icon: "ri-close-circle-line",
                                        color: "error",
                                        variant: "outlined",
                                        size: "small",
                                        class: "action-btn-demo",
                                        disabled: item.status === "Rejected"
                                      }), null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, mergeProps(props, {
                                          icon: "ri-close-circle-line",
                                          color: "error",
                                          variant: "outlined",
                                          size: "small",
                                          class: "action-btn-demo",
                                          disabled: item.status === "Rejected"
                                        }), null, 16, ["disabled"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex justify-center gap-2" }, [
                                    createVNode(VTooltip, {
                                      text: "Approve",
                                      location: "top"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(VBtn, mergeProps(props, {
                                          icon: "ri-check-line",
                                          color: "success",
                                          variant: "outlined",
                                          size: "small",
                                          class: "action-btn-demo",
                                          disabled: item.status === "Approved"
                                        }), null, 16, ["disabled"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VTooltip, {
                                      text: "Reject",
                                      location: "top"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(VBtn, mergeProps(props, {
                                          icon: "ri-close-circle-line",
                                          color: "error",
                                          variant: "outlined",
                                          size: "small",
                                          class: "action-btn-demo",
                                          disabled: item.status === "Rejected"
                                        }), null, 16, ["disabled"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ];
                              }
                            }),
                            "no-data": withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="py-6 text-center text-medium-emphasis" data-v-cbe5d0f9${_scopeId4}> No records found. </div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "py-6 text-center text-medium-emphasis" }, " No records found. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VDataTable, {
                              headers: [
                                { title: "Student Name", key: "student" },
                                { title: "Book / Session", key: "book" },
                                { title: "Score", key: "score" },
                                { title: "Status", key: "status" },
                                { title: "Action", key: "action", sortable: false, align: "center", width: "120px" }
                              ],
                              items: demoItems,
                              "items-per-page": 5,
                              class: "text-no-wrap",
                              "hide-default-footer": ""
                            }, {
                              "item.student": withCtx(({ item }) => [
                                createVNode("div", { class: "d-flex align-center py-2" }, [
                                  createVNode(VAvatar, {
                                    size: "34",
                                    class: "me-3",
                                    color: "grey-50"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(item.initials), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.name), 1),
                                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.studentId), 1)
                                  ])
                                ])
                              ]),
                              "item.score": withCtx(({ item }) => [
                                createVNode(VChip, {
                                  color: getScoreColor(item.score),
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.score), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              "item.status": withCtx(({ item }) => [
                                createVNode(VChip, {
                                  color: getStatusColor(item.status),
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium text-capitalize"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.status), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              "item.action": withCtx(({ item }) => [
                                createVNode("div", { class: "d-flex justify-center gap-2" }, [
                                  createVNode(VTooltip, {
                                    text: "Approve",
                                    location: "top"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(VBtn, mergeProps(props, {
                                        icon: "ri-check-line",
                                        color: "success",
                                        variant: "outlined",
                                        size: "small",
                                        class: "action-btn-demo",
                                        disabled: item.status === "Approved"
                                      }), null, 16, ["disabled"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VTooltip, {
                                    text: "Reject",
                                    location: "top"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(VBtn, mergeProps(props, {
                                        icon: "ri-close-circle-line",
                                        color: "error",
                                        variant: "outlined",
                                        size: "small",
                                        class: "action-btn-demo",
                                        disabled: item.status === "Rejected"
                                      }), null, 16, ["disabled"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              "no-data": withCtx(() => [
                                createVNode("div", { class: "py-6 text-center text-medium-emphasis" }, " No records found. ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-2" data-v-cbe5d0f9${_scopeId2}> Card &amp; Divider </h5><p class="text-body-1 text-medium-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> Vuetify <code class="code-inline" data-v-cbe5d0f9${_scopeId2}>VCard</code> and <code class="code-inline" data-v-cbe5d0f9${_scopeId2}>VDivider</code> — the foundational layout containers used throughout the assessments page. </p>`);
                    _push3(ssrRenderComponent(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardItem, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCardTitle, { class: "font-weight-medium text-high-emphasis" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Card with Title &amp; Text `);
                                    } else {
                                      return [
                                        createTextVNode(" Card with Title & Text ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCardTitle, { class: "font-weight-medium text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Card with Title & Text ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, { class: "text-medium-emphasis" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` This is a standard VCard with a title and body text — the primary container for tab content on the assessments page. `);
                              } else {
                                return [
                                  createTextVNode(" This is a standard VCard with a title and body text — the primary container for tab content on the assessments page. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, { class: "text-medium-emphasis" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Content below a divider — used for filter sections above the data table. `);
                              } else {
                                return [
                                  createTextVNode(" Content below a divider — used for filter sections above the data table. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardItem, null, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "font-weight-medium text-high-emphasis" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Card with Title & Text ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "text-medium-emphasis" }, {
                              default: withCtx(() => [
                                createTextVNode(" This is a standard VCard with a title and body text — the primary container for tab content on the assessments page. ")
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider),
                            createVNode(VCardText, { class: "text-medium-emphasis" }, {
                              default: withCtx(() => [
                                createTextVNode(" Content below a divider — used for filter sections above the data table. ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> How It&#39;s Used in assessments.vue </h5>`);
                    _push3(ssrRenderComponent(VCard, { variant: "outlined" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, { class: "pa-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="text-body-1 mb-4 text-medium-emphasis" data-v-cbe5d0f9${_scopeId4}> The assessments page combines all of the above components to create a full-featured assessment management interface with three view modes: </p>`);
                                _push5(ssrRenderComponent(VRow, { class: "mb-2" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCard, {
                                              class: "bg-primary-opacity-lighter pa-4 text-center",
                                              variant: "flat"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    icon: "ri-list-unordered",
                                                    color: "primary",
                                                    size: "28",
                                                    class: "mb-2"
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(`<div class="text-body-1 font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId7}>List View</div><div class="text-caption text-medium-emphasis" data-v-cbe5d0f9${_scopeId7}>VDataTable with inline editing</div>`);
                                                } else {
                                                  return [
                                                    createVNode(VIcon, {
                                                      icon: "ri-list-unordered",
                                                      color: "primary",
                                                      size: "28",
                                                      class: "mb-2"
                                                    }),
                                                    createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "List View"),
                                                    createVNode("div", { class: "text-caption text-medium-emphasis" }, "VDataTable with inline editing")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCard, {
                                                class: "bg-primary-opacity-lighter pa-4 text-center",
                                                variant: "flat"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-list-unordered",
                                                    color: "primary",
                                                    size: "28",
                                                    class: "mb-2"
                                                  }),
                                                  createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "List View"),
                                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "VDataTable with inline editing")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCard, {
                                              class: "bg-primary-opacity-lighter pa-4 text-center",
                                              variant: "flat"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    icon: "ri-team-line",
                                                    color: "primary",
                                                    size: "28",
                                                    class: "mb-2"
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(`<div class="text-body-1 font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId7}>Team View</div><div class="text-caption text-medium-emphasis" data-v-cbe5d0f9${_scopeId7}>Grouped accordion by student</div>`);
                                                } else {
                                                  return [
                                                    createVNode(VIcon, {
                                                      icon: "ri-team-line",
                                                      color: "primary",
                                                      size: "28",
                                                      class: "mb-2"
                                                    }),
                                                    createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Team View"),
                                                    createVNode("div", { class: "text-caption text-medium-emphasis" }, "Grouped accordion by student")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCard, {
                                                class: "bg-primary-opacity-lighter pa-4 text-center",
                                                variant: "flat"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-team-line",
                                                    color: "primary",
                                                    size: "28",
                                                    class: "mb-2"
                                                  }),
                                                  createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Team View"),
                                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "Grouped accordion by student")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCard, {
                                              class: "bg-primary-opacity-lighter pa-4 text-center",
                                              variant: "flat"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    icon: "ri-door-closed-line",
                                                    color: "primary",
                                                    size: "28",
                                                    class: "mb-2"
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(`<div class="text-body-1 font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId7}>Room View</div><div class="text-caption text-medium-emphasis" data-v-cbe5d0f9${_scopeId7}>Grouped accordion by class</div>`);
                                                } else {
                                                  return [
                                                    createVNode(VIcon, {
                                                      icon: "ri-door-closed-line",
                                                      color: "primary",
                                                      size: "28",
                                                      class: "mb-2"
                                                    }),
                                                    createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Room View"),
                                                    createVNode("div", { class: "text-caption text-medium-emphasis" }, "Grouped accordion by class")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCard, {
                                                class: "bg-primary-opacity-lighter pa-4 text-center",
                                                variant: "flat"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-door-closed-line",
                                                    color: "primary",
                                                    size: "28",
                                                    class: "mb-2"
                                                  }),
                                                  createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Room View"),
                                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "Grouped accordion by class")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              class: "bg-primary-opacity-lighter pa-4 text-center",
                                              variant: "flat"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "ri-list-unordered",
                                                  color: "primary",
                                                  size: "28",
                                                  class: "mb-2"
                                                }),
                                                createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "List View"),
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "VDataTable with inline editing")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              class: "bg-primary-opacity-lighter pa-4 text-center",
                                              variant: "flat"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "ri-team-line",
                                                  color: "primary",
                                                  size: "28",
                                                  class: "mb-2"
                                                }),
                                                createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Team View"),
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Grouped accordion by student")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              class: "bg-primary-opacity-lighter pa-4 text-center",
                                              variant: "flat"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "ri-door-closed-line",
                                                  color: "primary",
                                                  size: "28",
                                                  class: "mb-2"
                                                }),
                                                createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Room View"),
                                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Grouped accordion by class")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("p", { class: "text-body-1 mb-4 text-medium-emphasis" }, " The assessments page combines all of the above components to create a full-featured assessment management interface with three view modes: "),
                                  createVNode(VRow, { class: "mb-2" }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            class: "bg-primary-opacity-lighter pa-4 text-center",
                                            variant: "flat"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "ri-list-unordered",
                                                color: "primary",
                                                size: "28",
                                                class: "mb-2"
                                              }),
                                              createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "List View"),
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "VDataTable with inline editing")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            class: "bg-primary-opacity-lighter pa-4 text-center",
                                            variant: "flat"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "ri-team-line",
                                                color: "primary",
                                                size: "28",
                                                class: "mb-2"
                                              }),
                                              createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Team View"),
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Grouped accordion by student")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            class: "bg-primary-opacity-lighter pa-4 text-center",
                                            variant: "flat"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "ri-door-closed-line",
                                                color: "primary",
                                                size: "28",
                                                class: "mb-2"
                                              }),
                                              createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Room View"),
                                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Grouped accordion by class")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, { class: "pa-4" }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-body-1 mb-4 text-medium-emphasis" }, " The assessments page combines all of the above components to create a full-featured assessment management interface with three view modes: "),
                                createVNode(VRow, { class: "mb-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          class: "bg-primary-opacity-lighter pa-4 text-center",
                                          variant: "flat"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "ri-list-unordered",
                                              color: "primary",
                                              size: "28",
                                              class: "mb-2"
                                            }),
                                            createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "List View"),
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "VDataTable with inline editing")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          class: "bg-primary-opacity-lighter pa-4 text-center",
                                          variant: "flat"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "ri-team-line",
                                              color: "primary",
                                              size: "28",
                                              class: "mb-2"
                                            }),
                                            createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Team View"),
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Grouped accordion by student")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          class: "bg-primary-opacity-lighter pa-4 text-center",
                                          variant: "flat"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "ri-door-closed-line",
                                              color: "primary",
                                              size: "28",
                                              class: "mb-2"
                                            }),
                                            createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Room View"),
                                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Grouped accordion by class")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Button "),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                        createTextVNode(" Vuetify "),
                        createVNode("code", { class: "code-inline" }, "VBtn"),
                        createTextVNode(" component in various styles used across the interface. ")
                      ]),
                      createVNode(VCard, {
                        variant: "outlined",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, { color: "primary" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "ri-check-line"
                                  }),
                                  createTextVNode(" Primary ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "primary",
                                variant: "outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "ri-check-line"
                                  }),
                                  createTextVNode(" Outlined ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "primary",
                                variant: "tonal"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "ri-check-line"
                                  }),
                                  createTextVNode(" Tonal ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "primary",
                                variant: "text"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "ri-check-line"
                                  }),
                                  createTextVNode(" Text ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                icon: "ri-check-line",
                                color: "success",
                                variant: "outlined",
                                size: "small",
                                class: "action-btn-demo"
                              }),
                              createVNode(VBtn, {
                                icon: "ri-close-circle-line",
                                color: "error",
                                variant: "outlined",
                                size: "small",
                                class: "action-btn-demo"
                              }),
                              createVNode(VBtn, {
                                color: "primary",
                                rounded: "xl",
                                size: "small",
                                class: "px-5"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Rounded Pill ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Button Toggle (View Switcher) "),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, " Used on the assessments page to switch between List / Team / Room views. "),
                      createVNode(VCard, {
                        variant: "outlined",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "pa-4 d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode(VBtnToggle, {
                                modelValue: unref(demoViewType),
                                "onUpdate:modelValue": ($event) => isRef(demoViewType) ? demoViewType.value = $event : null,
                                mandatory: "",
                                class: "custom-toggle-group-demo"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    value: "list",
                                    icon: "ri-list-unordered"
                                  }),
                                  createVNode(VBtn, {
                                    value: "team",
                                    icon: "ri-team-line"
                                  }),
                                  createVNode(VBtn, {
                                    value: "room",
                                    icon: "ri-door-closed-line"
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Chip (Status & Score Badges) "),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                        createTextVNode(" Vuetify "),
                        createVNode("code", { class: "code-inline" }, "VChip"),
                        createTextVNode(" used for status indicators and score display. ")
                      ]),
                      createVNode(VCard, {
                        variant: "outlined",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                            default: withCtx(() => [
                              createVNode(VChip, {
                                color: "warning",
                                variant: "tonal",
                                size: "small",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Pending ")
                                ]),
                                _: 1
                              }),
                              createVNode(VChip, {
                                color: "success",
                                variant: "tonal",
                                size: "small",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Approved ")
                                ]),
                                _: 1
                              }),
                              createVNode(VChip, {
                                color: "error",
                                variant: "tonal",
                                size: "small",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Rejected ")
                                ]),
                                _: 1
                              }),
                              createVNode(VChip, {
                                color: "success",
                                variant: "tonal",
                                size: "small",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 92 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VChip, {
                                color: "warning",
                                variant: "tonal",
                                size: "small",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 65 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VChip, {
                                color: "error",
                                variant: "tonal",
                                size: "small",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 48 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VChip, {
                                color: "info",
                                variant: "tonal",
                                size: "small",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 3 Projects ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Avatar (Initials) "),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                        createTextVNode(" Vuetify "),
                        createVNode("code", { class: "code-inline" }, "VAvatar"),
                        createTextVNode(" used with initials to represent students. ")
                      ]),
                      createVNode(VCard, {
                        variant: "outlined",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                            default: withCtx(() => [
                              createVNode(VAvatar, {
                                size: "34",
                                color: "grey-50",
                                class: "border",
                                style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, "JS")
                                ]),
                                _: 1
                              }),
                              createVNode(VAvatar, {
                                size: "34",
                                color: "grey-50",
                                class: "border",
                                style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, "CM")
                                ]),
                                _: 1
                              }),
                              createVNode(VAvatar, {
                                size: "34",
                                color: "grey-50",
                                class: "border",
                                style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, "JR")
                                ]),
                                _: 1
                              }),
                              createVNode(VAvatar, {
                                size: "40",
                                class: "bg-primary-opacity-lighter border",
                                style: { "border-color": "rgba(var(--v-theme-primary), 0.15) !important" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "ri-door-closed-line",
                                    color: "primary",
                                    size: "20"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VAvatar, {
                                size: "40",
                                color: "grey-50",
                                class: "border",
                                style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "NT")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Text Field & Select "),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                        createTextVNode(" Vuetify "),
                        createVNode("code", { class: "code-inline" }, "VTextField"),
                        createTextVNode(" and "),
                        createVNode("code", { class: "code-inline" }, "VSelect"),
                        createTextVNode(" used for filtering in the assessments page header. ")
                      ]),
                      createVNode(VCard, {
                        variant: "outlined",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "pa-4" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                createVNode("div", { style: { "width": "240px" } }, [
                                  createVNode(VTextField, {
                                    placeholder: "Search student",
                                    "prepend-inner-icon": "ri-search-line",
                                    clearable: ""
                                  })
                                ]),
                                createVNode("div", { style: { "width": "240px" } }, [
                                  createVNode(VSelect, {
                                    modelValue: unref(selectedStatusFilter),
                                    "onUpdate:modelValue": ($event) => isRef(selectedStatusFilter) ? selectedStatusFilter.value = $event : null,
                                    label: "Status",
                                    items: statusFilterOptions,
                                    clearable: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { style: { "width": "240px" } }, [
                                  createVNode(VSelect, {
                                    label: "Class",
                                    placeholder: "All Classes",
                                    items: ["All Classes", "DPS-Adaptive-A", "DPS-Adaptive-B", "DPS-Adaptive-C"],
                                    clearable: ""
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Tooltip "),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                        createTextVNode(" Vuetify "),
                        createVNode("code", { class: "code-inline" }, "VTooltip"),
                        createTextVNode(" used for icon button hints. ")
                      ]),
                      createVNode(VCard, {
                        variant: "outlined",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                            default: withCtx(() => [
                              createVNode(VTooltip, {
                                text: "Approve",
                                location: "top"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VBtn, mergeProps(props, {
                                    icon: "ri-check-line",
                                    color: "success",
                                    variant: "outlined",
                                    size: "small",
                                    class: "action-btn-demo"
                                  }), null, 16)
                                ]),
                                _: 1
                              }),
                              createVNode(VTooltip, {
                                text: "Reject",
                                location: "top"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VBtn, mergeProps(props, {
                                    icon: "ri-close-circle-line",
                                    color: "error",
                                    variant: "outlined",
                                    size: "small",
                                    class: "action-btn-demo"
                                  }), null, 16)
                                ]),
                                _: 1
                              }),
                              createVNode(VTooltip, {
                                text: "History",
                                location: "top"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VBtn, mergeProps(props, {
                                    icon: "ri-history-line",
                                    variant: "outlined",
                                    size: "small",
                                    class: "action-btn-demo"
                                  }), null, 16)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Snackbar (Toast Notification) "),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                        createTextVNode(" Vuetify "),
                        createVNode("code", { class: "code-inline" }, "VSnackbar"),
                        createTextVNode(" for success and error feedback messages. ")
                      ]),
                      createVNode(VCard, {
                        variant: "outlined",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "pa-4 d-flex flex-wrap gap-3" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "success",
                                onClick: ($event) => toast("success", "Approved project successfully.")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Show Success Toast ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VBtn, {
                                color: "error",
                                onClick: ($event) => toast("error", "Rejected project.")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Show Error Toast ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VBtn, {
                                color: "warning",
                                onClick: ($event) => toast("warning", "This is a warning message.")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Show Warning Toast ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Tabs "),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                        createTextVNode(" Vuetify "),
                        createVNode("code", { class: "code-inline" }, "VTabs"),
                        createTextVNode(" with bordered style and count badges — as used for Project Approvals / Quiz & Exams switching. ")
                      ]),
                      createVNode(VCard, {
                        variant: "outlined",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "pa-4" }, {
                            default: withCtx(() => [
                              createVNode(VTabs, { class: "v-tabs-bordered" }, {
                                default: withCtx(() => [
                                  createVNode(VTab, { value: "projects-demo" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "ri-file-text-line",
                                        class: "me-2"
                                      }),
                                      createTextVNode(" Project Approvals "),
                                      createVNode("span", { class: "count-badge-demo ms-2 bg-error text-white" }, "20")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTab, { value: "quizzes-demo" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "ri-todo-line",
                                        class: "me-2"
                                      }),
                                      createTextVNode(" Quiz & Exams "),
                                      createVNode("span", { class: "count-badge-demo ms-2 bg-primary text-white" }, "15")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Data Table "),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                        createTextVNode(" Vuetify "),
                        createVNode("code", { class: "code-inline" }, "VDataTable"),
                        createTextVNode(" — the primary table component used on the assessments page for displaying student results. ")
                      ]),
                      createVNode(VCard, {
                        variant: "outlined",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VDataTable, {
                            headers: [
                              { title: "Student Name", key: "student" },
                              { title: "Book / Session", key: "book" },
                              { title: "Score", key: "score" },
                              { title: "Status", key: "status" },
                              { title: "Action", key: "action", sortable: false, align: "center", width: "120px" }
                            ],
                            items: demoItems,
                            "items-per-page": 5,
                            class: "text-no-wrap",
                            "hide-default-footer": ""
                          }, {
                            "item.student": withCtx(({ item }) => [
                              createVNode("div", { class: "d-flex align-center py-2" }, [
                                createVNode(VAvatar, {
                                  size: "34",
                                  class: "me-3",
                                  color: "grey-50"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(item.initials), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "d-flex flex-column" }, [
                                  createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.name), 1),
                                  createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.studentId), 1)
                                ])
                              ])
                            ]),
                            "item.score": withCtx(({ item }) => [
                              createVNode(VChip, {
                                color: getScoreColor(item.score),
                                variant: "tonal",
                                size: "small",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.score), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            "item.status": withCtx(({ item }) => [
                              createVNode(VChip, {
                                color: getStatusColor(item.status),
                                variant: "tonal",
                                size: "small",
                                class: "font-weight-medium text-capitalize"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.status), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            "item.action": withCtx(({ item }) => [
                              createVNode("div", { class: "d-flex justify-center gap-2" }, [
                                createVNode(VTooltip, {
                                  text: "Approve",
                                  location: "top"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VBtn, mergeProps(props, {
                                      icon: "ri-check-line",
                                      color: "success",
                                      variant: "outlined",
                                      size: "small",
                                      class: "action-btn-demo",
                                      disabled: item.status === "Approved"
                                    }), null, 16, ["disabled"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VTooltip, {
                                  text: "Reject",
                                  location: "top"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VBtn, mergeProps(props, {
                                      icon: "ri-close-circle-line",
                                      color: "error",
                                      variant: "outlined",
                                      size: "small",
                                      class: "action-btn-demo",
                                      disabled: item.status === "Rejected"
                                    }), null, 16, ["disabled"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            "no-data": withCtx(() => [
                              createVNode("div", { class: "py-6 text-center text-medium-emphasis" }, " No records found. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Card & Divider "),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                        createTextVNode(" Vuetify "),
                        createVNode("code", { class: "code-inline" }, "VCard"),
                        createTextVNode(" and "),
                        createVNode("code", { class: "code-inline" }, "VDivider"),
                        createTextVNode(" — the foundational layout containers used throughout the assessments page. ")
                      ]),
                      createVNode(VCard, {
                        variant: "outlined",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardItem, null, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "font-weight-medium text-high-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Card with Title & Text ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, { class: "text-medium-emphasis" }, {
                            default: withCtx(() => [
                              createTextVNode(" This is a standard VCard with a title and body text — the primary container for tab content on the assessments page. ")
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCardText, { class: "text-medium-emphasis" }, {
                            default: withCtx(() => [
                              createTextVNode(" Content below a divider — used for filter sections above the data table. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider, { class: "my-6" }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " How It's Used in assessments.vue "),
                      createVNode(VCard, { variant: "outlined" }, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "pa-4" }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-body-1 mb-4 text-medium-emphasis" }, " The assessments page combines all of the above components to create a full-featured assessment management interface with three view modes: "),
                              createVNode(VRow, { class: "mb-2" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        class: "bg-primary-opacity-lighter pa-4 text-center",
                                        variant: "flat"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "ri-list-unordered",
                                            color: "primary",
                                            size: "28",
                                            class: "mb-2"
                                          }),
                                          createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "List View"),
                                          createVNode("div", { class: "text-caption text-medium-emphasis" }, "VDataTable with inline editing")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        class: "bg-primary-opacity-lighter pa-4 text-center",
                                        variant: "flat"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "ri-team-line",
                                            color: "primary",
                                            size: "28",
                                            class: "mb-2"
                                          }),
                                          createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Team View"),
                                          createVNode("div", { class: "text-caption text-medium-emphasis" }, "Grouped accordion by student")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        class: "bg-primary-opacity-lighter pa-4 text-center",
                                        variant: "flat"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "ri-door-closed-line",
                                            color: "primary",
                                            size: "28",
                                            class: "mb-2"
                                          }),
                                          createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Room View"),
                                          createVNode("div", { class: "text-caption text-medium-emphasis" }, "Grouped accordion by class")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCardText, { class: "pa-6" }, {
                  default: withCtx(() => [
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Button "),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                      createTextVNode(" Vuetify "),
                      createVNode("code", { class: "code-inline" }, "VBtn"),
                      createTextVNode(" component in various styles used across the interface. ")
                    ]),
                    createVNode(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, { color: "primary" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "ri-check-line"
                                }),
                                createTextVNode(" Primary ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "primary",
                              variant: "outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "ri-check-line"
                                }),
                                createTextVNode(" Outlined ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "primary",
                              variant: "tonal"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "ri-check-line"
                                }),
                                createTextVNode(" Tonal ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "primary",
                              variant: "text"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "ri-check-line"
                                }),
                                createTextVNode(" Text ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              icon: "ri-check-line",
                              color: "success",
                              variant: "outlined",
                              size: "small",
                              class: "action-btn-demo"
                            }),
                            createVNode(VBtn, {
                              icon: "ri-close-circle-line",
                              color: "error",
                              variant: "outlined",
                              size: "small",
                              class: "action-btn-demo"
                            }),
                            createVNode(VBtn, {
                              color: "primary",
                              rounded: "xl",
                              size: "small",
                              class: "px-5"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Rounded Pill ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Button Toggle (View Switcher) "),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, " Used on the assessments page to switch between List / Team / Room views. "),
                    createVNode(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "pa-4 d-flex align-center" }, {
                          default: withCtx(() => [
                            createVNode(VBtnToggle, {
                              modelValue: unref(demoViewType),
                              "onUpdate:modelValue": ($event) => isRef(demoViewType) ? demoViewType.value = $event : null,
                              mandatory: "",
                              class: "custom-toggle-group-demo"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  value: "list",
                                  icon: "ri-list-unordered"
                                }),
                                createVNode(VBtn, {
                                  value: "team",
                                  icon: "ri-team-line"
                                }),
                                createVNode(VBtn, {
                                  value: "room",
                                  icon: "ri-door-closed-line"
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Chip (Status & Score Badges) "),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                      createTextVNode(" Vuetify "),
                      createVNode("code", { class: "code-inline" }, "VChip"),
                      createTextVNode(" used for status indicators and score display. ")
                    ]),
                    createVNode(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                          default: withCtx(() => [
                            createVNode(VChip, {
                              color: "warning",
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Pending ")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, {
                              color: "success",
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Approved ")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, {
                              color: "error",
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Rejected ")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, {
                              color: "success",
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 92 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, {
                              color: "warning",
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 65 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, {
                              color: "error",
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 48 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, {
                              color: "info",
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 3 Projects ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Avatar (Initials) "),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                      createTextVNode(" Vuetify "),
                      createVNode("code", { class: "code-inline" }, "VAvatar"),
                      createTextVNode(" used with initials to represent students. ")
                    ]),
                    createVNode(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                          default: withCtx(() => [
                            createVNode(VAvatar, {
                              size: "34",
                              color: "grey-50",
                              class: "border",
                              style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, "JS")
                              ]),
                              _: 1
                            }),
                            createVNode(VAvatar, {
                              size: "34",
                              color: "grey-50",
                              class: "border",
                              style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, "CM")
                              ]),
                              _: 1
                            }),
                            createVNode(VAvatar, {
                              size: "34",
                              color: "grey-50",
                              class: "border",
                              style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, "JR")
                              ]),
                              _: 1
                            }),
                            createVNode(VAvatar, {
                              size: "40",
                              class: "bg-primary-opacity-lighter border",
                              style: { "border-color": "rgba(var(--v-theme-primary), 0.15) !important" }
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-door-closed-line",
                                  color: "primary",
                                  size: "20"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VAvatar, {
                              size: "40",
                              color: "grey-50",
                              class: "border",
                              style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "NT")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Text Field & Select "),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                      createTextVNode(" Vuetify "),
                      createVNode("code", { class: "code-inline" }, "VTextField"),
                      createTextVNode(" and "),
                      createVNode("code", { class: "code-inline" }, "VSelect"),
                      createTextVNode(" used for filtering in the assessments page header. ")
                    ]),
                    createVNode(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "pa-4" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                              createVNode("div", { style: { "width": "240px" } }, [
                                createVNode(VTextField, {
                                  placeholder: "Search student",
                                  "prepend-inner-icon": "ri-search-line",
                                  clearable: ""
                                })
                              ]),
                              createVNode("div", { style: { "width": "240px" } }, [
                                createVNode(VSelect, {
                                  modelValue: unref(selectedStatusFilter),
                                  "onUpdate:modelValue": ($event) => isRef(selectedStatusFilter) ? selectedStatusFilter.value = $event : null,
                                  label: "Status",
                                  items: statusFilterOptions,
                                  clearable: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { style: { "width": "240px" } }, [
                                createVNode(VSelect, {
                                  label: "Class",
                                  placeholder: "All Classes",
                                  items: ["All Classes", "DPS-Adaptive-A", "DPS-Adaptive-B", "DPS-Adaptive-C"],
                                  clearable: ""
                                })
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Tooltip "),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                      createTextVNode(" Vuetify "),
                      createVNode("code", { class: "code-inline" }, "VTooltip"),
                      createTextVNode(" used for icon button hints. ")
                    ]),
                    createVNode(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "pa-4 d-flex flex-wrap gap-3 align-center" }, {
                          default: withCtx(() => [
                            createVNode(VTooltip, {
                              text: "Approve",
                              location: "top"
                            }, {
                              activator: withCtx(({ props }) => [
                                createVNode(VBtn, mergeProps(props, {
                                  icon: "ri-check-line",
                                  color: "success",
                                  variant: "outlined",
                                  size: "small",
                                  class: "action-btn-demo"
                                }), null, 16)
                              ]),
                              _: 1
                            }),
                            createVNode(VTooltip, {
                              text: "Reject",
                              location: "top"
                            }, {
                              activator: withCtx(({ props }) => [
                                createVNode(VBtn, mergeProps(props, {
                                  icon: "ri-close-circle-line",
                                  color: "error",
                                  variant: "outlined",
                                  size: "small",
                                  class: "action-btn-demo"
                                }), null, 16)
                              ]),
                              _: 1
                            }),
                            createVNode(VTooltip, {
                              text: "History",
                              location: "top"
                            }, {
                              activator: withCtx(({ props }) => [
                                createVNode(VBtn, mergeProps(props, {
                                  icon: "ri-history-line",
                                  variant: "outlined",
                                  size: "small",
                                  class: "action-btn-demo"
                                }), null, 16)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Snackbar (Toast Notification) "),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                      createTextVNode(" Vuetify "),
                      createVNode("code", { class: "code-inline" }, "VSnackbar"),
                      createTextVNode(" for success and error feedback messages. ")
                    ]),
                    createVNode(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "pa-4 d-flex flex-wrap gap-3" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              color: "success",
                              onClick: ($event) => toast("success", "Approved project successfully.")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Show Success Toast ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              color: "error",
                              onClick: ($event) => toast("error", "Rejected project.")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Show Error Toast ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              color: "warning",
                              onClick: ($event) => toast("warning", "This is a warning message.")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Show Warning Toast ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Tabs "),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                      createTextVNode(" Vuetify "),
                      createVNode("code", { class: "code-inline" }, "VTabs"),
                      createTextVNode(" with bordered style and count badges — as used for Project Approvals / Quiz & Exams switching. ")
                    ]),
                    createVNode(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "pa-4" }, {
                          default: withCtx(() => [
                            createVNode(VTabs, { class: "v-tabs-bordered" }, {
                              default: withCtx(() => [
                                createVNode(VTab, { value: "projects-demo" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "ri-file-text-line",
                                      class: "me-2"
                                    }),
                                    createTextVNode(" Project Approvals "),
                                    createVNode("span", { class: "count-badge-demo ms-2 bg-error text-white" }, "20")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTab, { value: "quizzes-demo" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "ri-todo-line",
                                      class: "me-2"
                                    }),
                                    createTextVNode(" Quiz & Exams "),
                                    createVNode("span", { class: "count-badge-demo ms-2 bg-primary text-white" }, "15")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Data Table "),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                      createTextVNode(" Vuetify "),
                      createVNode("code", { class: "code-inline" }, "VDataTable"),
                      createTextVNode(" — the primary table component used on the assessments page for displaying student results. ")
                    ]),
                    createVNode(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VDataTable, {
                          headers: [
                            { title: "Student Name", key: "student" },
                            { title: "Book / Session", key: "book" },
                            { title: "Score", key: "score" },
                            { title: "Status", key: "status" },
                            { title: "Action", key: "action", sortable: false, align: "center", width: "120px" }
                          ],
                          items: demoItems,
                          "items-per-page": 5,
                          class: "text-no-wrap",
                          "hide-default-footer": ""
                        }, {
                          "item.student": withCtx(({ item }) => [
                            createVNode("div", { class: "d-flex align-center py-2" }, [
                              createVNode(VAvatar, {
                                size: "34",
                                class: "me-3",
                                color: "grey-50"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(item.initials), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "d-flex flex-column" }, [
                                createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.name), 1),
                                createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.studentId), 1)
                              ])
                            ])
                          ]),
                          "item.score": withCtx(({ item }) => [
                            createVNode(VChip, {
                              color: getScoreColor(item.score),
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.score), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          "item.status": withCtx(({ item }) => [
                            createVNode(VChip, {
                              color: getStatusColor(item.status),
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium text-capitalize"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          "item.action": withCtx(({ item }) => [
                            createVNode("div", { class: "d-flex justify-center gap-2" }, [
                              createVNode(VTooltip, {
                                text: "Approve",
                                location: "top"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VBtn, mergeProps(props, {
                                    icon: "ri-check-line",
                                    color: "success",
                                    variant: "outlined",
                                    size: "small",
                                    class: "action-btn-demo",
                                    disabled: item.status === "Approved"
                                  }), null, 16, ["disabled"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VTooltip, {
                                text: "Reject",
                                location: "top"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VBtn, mergeProps(props, {
                                    icon: "ri-close-circle-line",
                                    color: "error",
                                    variant: "outlined",
                                    size: "small",
                                    class: "action-btn-demo",
                                    disabled: item.status === "Rejected"
                                  }), null, 16, ["disabled"])
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ]),
                          "no-data": withCtx(() => [
                            createVNode("div", { class: "py-6 text-center text-medium-emphasis" }, " No records found. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-2" }, " Card & Divider "),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis mb-4" }, [
                      createTextVNode(" Vuetify "),
                      createVNode("code", { class: "code-inline" }, "VCard"),
                      createTextVNode(" and "),
                      createVNode("code", { class: "code-inline" }, "VDivider"),
                      createTextVNode(" — the foundational layout containers used throughout the assessments page. ")
                    ]),
                    createVNode(VCard, {
                      variant: "outlined",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "font-weight-medium text-high-emphasis" }, {
                              default: withCtx(() => [
                                createTextVNode(" Card with Title & Text ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "text-medium-emphasis" }, {
                          default: withCtx(() => [
                            createTextVNode(" This is a standard VCard with a title and body text — the primary container for tab content on the assessments page. ")
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCardText, { class: "text-medium-emphasis" }, {
                          default: withCtx(() => [
                            createTextVNode(" Content below a divider — used for filter sections above the data table. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider, { class: "my-6" }),
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " How It's Used in assessments.vue "),
                    createVNode(VCard, { variant: "outlined" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "pa-4" }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-body-1 mb-4 text-medium-emphasis" }, " The assessments page combines all of the above components to create a full-featured assessment management interface with three view modes: "),
                            createVNode(VRow, { class: "mb-2" }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      class: "bg-primary-opacity-lighter pa-4 text-center",
                                      variant: "flat"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-list-unordered",
                                          color: "primary",
                                          size: "28",
                                          class: "mb-2"
                                        }),
                                        createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "List View"),
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, "VDataTable with inline editing")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      class: "bg-primary-opacity-lighter pa-4 text-center",
                                      variant: "flat"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-team-line",
                                          color: "primary",
                                          size: "28",
                                          class: "mb-2"
                                        }),
                                        createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Team View"),
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, "Grouped accordion by student")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      class: "bg-primary-opacity-lighter pa-4 text-center",
                                      variant: "flat"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-door-closed-line",
                                          color: "primary",
                                          size: "28",
                                          class: "mb-2"
                                        }),
                                        createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Room View"),
                                        createVNode("div", { class: "text-caption text-medium-emphasis" }, "Grouped accordion by class")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (unref(activeTab) === "component-review") {
        _push(ssrRenderComponent(VCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardText, { class: "pa-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis mb-4" data-v-cbe5d0f9${_scopeId2}> UiTableView Component Showcase </h5><div class="mb-6" data-v-cbe5d0f9${_scopeId2}><p class="text-body-1 text-medium-emphasis" data-v-cbe5d0f9${_scopeId2}> Interactive preview of the new reusable table layout component: </p></div>`);
                    _push3(ssrRenderComponent(UiTableView, {
                      title: "Demo Page Header",
                      description: "Demo description of page data table",
                      tabs: unref(reviewTabs),
                      activeTab: unref(reviewActiveTab),
                      "onUpdate:activeTab": ($event) => isRef(reviewActiveTab) ? reviewActiveTab.value = $event : null,
                      viewType: unref(reviewViewType),
                      "onUpdate:viewType": ($event) => isRef(reviewViewType) ? reviewViewType.value = $event : null,
                      headers: unref(reviewHeaders),
                      items: unref(filteredReviewItems),
                      "show-view-toggle": true,
                      loading: unref(reviewLoading),
                      onResetFilters: resetReviewFilters
                    }, {
                      filters: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div style="${ssrRenderStyle({ "width": "240px" })}" data-v-cbe5d0f9${_scopeId3}>`);
                          _push4(ssrRenderComponent(VTextField, {
                            modelValue: unref(reviewSearch),
                            "onUpdate:modelValue": ($event) => isRef(reviewSearch) ? reviewSearch.value = $event : null,
                            placeholder: "Search student",
                            "prepend-inner-icon": "ri-search-line",
                            clearable: ""
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div style="${ssrRenderStyle({ "width": "240px" })}" data-v-cbe5d0f9${_scopeId3}>`);
                          _push4(ssrRenderComponent(VSelect, {
                            modelValue: unref(reviewSelectedStatus),
                            "onUpdate:modelValue": ($event) => isRef(reviewSelectedStatus) ? reviewSelectedStatus.value = $event : null,
                            label: "Status",
                            items: reviewStatusOptions,
                            clearable: ""
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                          if (unref(reviewActiveTab) === "quiz") {
                            _push4(`<div style="${ssrRenderStyle({ "width": "240px" })}" data-v-cbe5d0f9${_scopeId3}>`);
                            _push4(ssrRenderComponent(VSelect, {
                              modelValue: unref(reviewSelectedQuiz),
                              "onUpdate:modelValue": ($event) => isRef(reviewSelectedQuiz) ? reviewSelectedQuiz.value = $event : null,
                              label: "Quiz Type",
                              items: ["All", "Quiz", "Exam"],
                              clearable: ""
                            }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode("div", { style: { "width": "240px" } }, [
                              createVNode(VTextField, {
                                modelValue: unref(reviewSearch),
                                "onUpdate:modelValue": ($event) => isRef(reviewSearch) ? reviewSearch.value = $event : null,
                                placeholder: "Search student",
                                "prepend-inner-icon": "ri-search-line",
                                clearable: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { style: { "width": "240px" } }, [
                              createVNode(VSelect, {
                                modelValue: unref(reviewSelectedStatus),
                                "onUpdate:modelValue": ($event) => isRef(reviewSelectedStatus) ? reviewSelectedStatus.value = $event : null,
                                label: "Status",
                                items: reviewStatusOptions,
                                clearable: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            unref(reviewActiveTab) === "quiz" ? (openBlock(), createBlock("div", {
                              key: 0,
                              style: { "width": "240px" }
                            }, [
                              createVNode(VSelect, {
                                modelValue: unref(reviewSelectedQuiz),
                                "onUpdate:modelValue": ($event) => isRef(reviewSelectedQuiz) ? reviewSelectedQuiz.value = $event : null,
                                label: "Quiz Type",
                                items: ["All", "Quiz", "Exam"],
                                clearable: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      "header-actions": withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="d-flex align-center gap-2" data-v-cbe5d0f9${_scopeId3}>`);
                          _push4(ssrRenderComponent(VCheckbox, {
                            modelValue: unref(reviewLoading),
                            "onUpdate:modelValue": ($event) => isRef(reviewLoading) ? reviewLoading.value = $event : null,
                            label: "Simulate Loading State",
                            "hide-details": "",
                            density: "compact"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex align-center gap-2" }, [
                              createVNode(VCheckbox, {
                                modelValue: unref(reviewLoading),
                                "onUpdate:modelValue": ($event) => isRef(reviewLoading) ? reviewLoading.value = $event : null,
                                label: "Simulate Loading State",
                                "hide-details": "",
                                density: "compact"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ];
                        }
                      }),
                      "item.student": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="d-flex align-center py-2" data-v-cbe5d0f9${_scopeId3}>`);
                          _push4(ssrRenderComponent(VAvatar, {
                            size: "34",
                            class: "me-3",
                            color: "grey-50"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="text-caption font-weight-medium" data-v-cbe5d0f9${_scopeId4}>${ssrInterpolate(item.initials)}</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(item.initials), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div class="d-flex flex-column" data-v-cbe5d0f9${_scopeId3}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-cbe5d0f9${_scopeId3}>${ssrInterpolate(item.name)}</span><span class="text-body-2 text-medium-emphasis" data-v-cbe5d0f9${_scopeId3}>${ssrInterpolate(item.studentId)}</span></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex align-center py-2" }, [
                              createVNode(VAvatar, {
                                size: "34",
                                class: "me-3",
                                color: "grey-50"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(item.initials), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "d-flex flex-column" }, [
                                createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.name), 1),
                                createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.studentId), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      "item.status": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VChip, {
                            color: getStatusColor(item.status),
                            variant: "tonal",
                            size: "small",
                            class: "font-weight-medium text-capitalize"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.status)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.status), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VChip, {
                              color: getStatusColor(item.status),
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium text-capitalize"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ];
                        }
                      }),
                      "item.score": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VChip, {
                            color: getScoreColor(item.score),
                            variant: "tonal",
                            size: "small",
                            class: "font-weight-medium"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.score)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.score), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VChip, {
                              color: getScoreColor(item.score),
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.score), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ];
                        }
                      }),
                      "item.action": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VBtn, {
                            size: "small",
                            color: "primary",
                            variant: "outlined",
                            onClick: ($event) => toast("success", `Clicked action for ${item.name}`)
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Action `);
                              } else {
                                return [
                                  createTextVNode(" Action ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VBtn, {
                              size: "small",
                              color: "primary",
                              variant: "outlined",
                              onClick: ($event) => toast("success", `Clicked action for ${item.name}`)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Action ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ];
                        }
                      }),
                      "view-team": withCtx(({ items }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="pa-5" data-v-cbe5d0f9${_scopeId3}><h6 class="text-h6 mb-4" data-v-cbe5d0f9${_scopeId3}>Team View Accordion / Custom Layout</h6>`);
                          _push4(ssrRenderComponent(VRow, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(items, (item) => {
                                  _push5(ssrRenderComponent(VCol, {
                                    key: item.studentId,
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VCard, { variant: "outlined" }, {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VCardText, { class: "d-flex align-center gap-3" }, {
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(VAvatar, {
                                                      color: "primary-opacity-lighter",
                                                      class: "text-primary"
                                                    }, {
                                                      default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(item.initials)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(item.initials), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(`<div data-v-cbe5d0f9${_scopeId7}><div class="font-weight-medium" data-v-cbe5d0f9${_scopeId7}>${ssrInterpolate(item.name)}</div><div class="text-caption" data-v-cbe5d0f9${_scopeId7}>${ssrInterpolate(item.book)}</div></div>`);
                                                  } else {
                                                    return [
                                                      createVNode(VAvatar, {
                                                        color: "primary-opacity-lighter",
                                                        class: "text-primary"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.initials), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode("div", null, [
                                                        createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.name), 1),
                                                        createVNode("div", { class: "text-caption" }, toDisplayString(item.book), 1)
                                                      ])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VCardText, { class: "d-flex align-center gap-3" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VAvatar, {
                                                      color: "primary-opacity-lighter",
                                                      class: "text-primary"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.initials), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode("div", null, [
                                                      createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.name), 1),
                                                      createVNode("div", { class: "text-caption" }, toDisplayString(item.book), 1)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VCard, { variant: "outlined" }, {
                                            default: withCtx(() => [
                                              createVNode(VCardText, { class: "d-flex align-center gap-3" }, {
                                                default: withCtx(() => [
                                                  createVNode(VAvatar, {
                                                    color: "primary-opacity-lighter",
                                                    class: "text-primary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.initials), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode("div", null, [
                                                    createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.name), 1),
                                                    createVNode("div", { class: "text-caption" }, toDisplayString(item.book), 1)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                                    return openBlock(), createBlock(VCol, {
                                      key: item.studentId,
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, { variant: "outlined" }, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, { class: "d-flex align-center gap-3" }, {
                                              default: withCtx(() => [
                                                createVNode(VAvatar, {
                                                  color: "primary-opacity-lighter",
                                                  class: "text-primary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.initials), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode("div", null, [
                                                  createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.name), 1),
                                                  createVNode("div", { class: "text-caption" }, toDisplayString(item.book), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "pa-5" }, [
                              createVNode("h6", { class: "text-h6 mb-4" }, "Team View Accordion / Custom Layout"),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                                    return openBlock(), createBlock(VCol, {
                                      key: item.studentId,
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, { variant: "outlined" }, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, { class: "d-flex align-center gap-3" }, {
                                              default: withCtx(() => [
                                                createVNode(VAvatar, {
                                                  color: "primary-opacity-lighter",
                                                  class: "text-primary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.initials), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode("div", null, [
                                                  createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.name), 1),
                                                  createVNode("div", { class: "text-caption" }, toDisplayString(item.book), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ];
                        }
                      }),
                      "view-room": withCtx(({ items }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="pa-5" data-v-cbe5d0f9${_scopeId3}><h6 class="text-h6 mb-4" data-v-cbe5d0f9${_scopeId3}>Room View Custom Layout</h6>`);
                          _push4(ssrRenderComponent(VAlert, {
                            type: "info",
                            variant: "tonal",
                            class: "mb-4"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Mocking room grouping inside parent slot using ${ssrInterpolate(items.length)} items. `);
                              } else {
                                return [
                                  createTextVNode(" Mocking room grouping inside parent slot using " + toDisplayString(items.length) + " items. ", 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VList, {
                            border: "",
                            rounded: ""
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(items, (item) => {
                                  _push5(ssrRenderComponent(VListItem, {
                                    key: item.studentId,
                                    title: item.name,
                                    subtitle: `Classroom: Room A • ${item.lessonName}`
                                  }, null, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: item.studentId,
                                      title: item.name,
                                      subtitle: `Classroom: Room A • ${item.lessonName}`
                                    }, null, 8, ["title", "subtitle"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "pa-5" }, [
                              createVNode("h6", { class: "text-h6 mb-4" }, "Room View Custom Layout"),
                              createVNode(VAlert, {
                                type: "info",
                                variant: "tonal",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Mocking room grouping inside parent slot using " + toDisplayString(items.length) + " items. ", 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VList, {
                                border: "",
                                rounded: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: item.studentId,
                                      title: item.name,
                                      subtitle: `Classroom: Room A • ${item.lessonName}`
                                    }, null, 8, ["title", "subtitle"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " UiTableView Component Showcase "),
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " Interactive preview of the new reusable table layout component: ")
                      ]),
                      createVNode(UiTableView, {
                        title: "Demo Page Header",
                        description: "Demo description of page data table",
                        tabs: unref(reviewTabs),
                        activeTab: unref(reviewActiveTab),
                        "onUpdate:activeTab": ($event) => isRef(reviewActiveTab) ? reviewActiveTab.value = $event : null,
                        viewType: unref(reviewViewType),
                        "onUpdate:viewType": ($event) => isRef(reviewViewType) ? reviewViewType.value = $event : null,
                        headers: unref(reviewHeaders),
                        items: unref(filteredReviewItems),
                        "show-view-toggle": true,
                        loading: unref(reviewLoading),
                        onResetFilters: resetReviewFilters
                      }, {
                        filters: withCtx(() => [
                          createVNode("div", { style: { "width": "240px" } }, [
                            createVNode(VTextField, {
                              modelValue: unref(reviewSearch),
                              "onUpdate:modelValue": ($event) => isRef(reviewSearch) ? reviewSearch.value = $event : null,
                              placeholder: "Search student",
                              "prepend-inner-icon": "ri-search-line",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { style: { "width": "240px" } }, [
                            createVNode(VSelect, {
                              modelValue: unref(reviewSelectedStatus),
                              "onUpdate:modelValue": ($event) => isRef(reviewSelectedStatus) ? reviewSelectedStatus.value = $event : null,
                              label: "Status",
                              items: reviewStatusOptions,
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          unref(reviewActiveTab) === "quiz" ? (openBlock(), createBlock("div", {
                            key: 0,
                            style: { "width": "240px" }
                          }, [
                            createVNode(VSelect, {
                              modelValue: unref(reviewSelectedQuiz),
                              "onUpdate:modelValue": ($event) => isRef(reviewSelectedQuiz) ? reviewSelectedQuiz.value = $event : null,
                              label: "Quiz Type",
                              items: ["All", "Quiz", "Exam"],
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])) : createCommentVNode("", true)
                        ]),
                        "header-actions": withCtx(() => [
                          createVNode("div", { class: "d-flex align-center gap-2" }, [
                            createVNode(VCheckbox, {
                              modelValue: unref(reviewLoading),
                              "onUpdate:modelValue": ($event) => isRef(reviewLoading) ? reviewLoading.value = $event : null,
                              label: "Simulate Loading State",
                              "hide-details": "",
                              density: "compact"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        "item.student": withCtx(({ item }) => [
                          createVNode("div", { class: "d-flex align-center py-2" }, [
                            createVNode(VAvatar, {
                              size: "34",
                              class: "me-3",
                              color: "grey-50"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(item.initials), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", { class: "d-flex flex-column" }, [
                              createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.name), 1),
                              createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.studentId), 1)
                            ])
                          ])
                        ]),
                        "item.status": withCtx(({ item }) => [
                          createVNode(VChip, {
                            color: getStatusColor(item.status),
                            variant: "tonal",
                            size: "small",
                            class: "font-weight-medium text-capitalize"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        "item.score": withCtx(({ item }) => [
                          createVNode(VChip, {
                            color: getScoreColor(item.score),
                            variant: "tonal",
                            size: "small",
                            class: "font-weight-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.score), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        "item.action": withCtx(({ item }) => [
                          createVNode(VBtn, {
                            size: "small",
                            color: "primary",
                            variant: "outlined",
                            onClick: ($event) => toast("success", `Clicked action for ${item.name}`)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Action ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        "view-team": withCtx(({ items }) => [
                          createVNode("div", { class: "pa-5" }, [
                            createVNode("h6", { class: "text-h6 mb-4" }, "Team View Accordion / Custom Layout"),
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                                  return openBlock(), createBlock(VCol, {
                                    key: item.studentId,
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, { variant: "outlined" }, {
                                        default: withCtx(() => [
                                          createVNode(VCardText, { class: "d-flex align-center gap-3" }, {
                                            default: withCtx(() => [
                                              createVNode(VAvatar, {
                                                color: "primary-opacity-lighter",
                                                class: "text-primary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.initials), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode("div", null, [
                                                createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.name), 1),
                                                createVNode("div", { class: "text-caption" }, toDisplayString(item.book), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        "view-room": withCtx(({ items }) => [
                          createVNode("div", { class: "pa-5" }, [
                            createVNode("h6", { class: "text-h6 mb-4" }, "Room View Custom Layout"),
                            createVNode(VAlert, {
                              type: "info",
                              variant: "tonal",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Mocking room grouping inside parent slot using " + toDisplayString(items.length) + " items. ", 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VList, {
                              border: "",
                              rounded: ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: item.studentId,
                                    title: item.name,
                                    subtitle: `Classroom: Room A • ${item.lessonName}`
                                  }, null, 8, ["title", "subtitle"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        _: 1
                      }, 8, ["tabs", "activeTab", "onUpdate:activeTab", "viewType", "onUpdate:viewType", "headers", "items", "loading"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCardText, { class: "pa-6" }, {
                  default: withCtx(() => [
                    createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-4" }, " UiTableView Component Showcase "),
                    createVNode("div", { class: "mb-6" }, [
                      createVNode("p", { class: "text-body-1 text-medium-emphasis" }, " Interactive preview of the new reusable table layout component: ")
                    ]),
                    createVNode(UiTableView, {
                      title: "Demo Page Header",
                      description: "Demo description of page data table",
                      tabs: unref(reviewTabs),
                      activeTab: unref(reviewActiveTab),
                      "onUpdate:activeTab": ($event) => isRef(reviewActiveTab) ? reviewActiveTab.value = $event : null,
                      viewType: unref(reviewViewType),
                      "onUpdate:viewType": ($event) => isRef(reviewViewType) ? reviewViewType.value = $event : null,
                      headers: unref(reviewHeaders),
                      items: unref(filteredReviewItems),
                      "show-view-toggle": true,
                      loading: unref(reviewLoading),
                      onResetFilters: resetReviewFilters
                    }, {
                      filters: withCtx(() => [
                        createVNode("div", { style: { "width": "240px" } }, [
                          createVNode(VTextField, {
                            modelValue: unref(reviewSearch),
                            "onUpdate:modelValue": ($event) => isRef(reviewSearch) ? reviewSearch.value = $event : null,
                            placeholder: "Search student",
                            "prepend-inner-icon": "ri-search-line",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { style: { "width": "240px" } }, [
                          createVNode(VSelect, {
                            modelValue: unref(reviewSelectedStatus),
                            "onUpdate:modelValue": ($event) => isRef(reviewSelectedStatus) ? reviewSelectedStatus.value = $event : null,
                            label: "Status",
                            items: reviewStatusOptions,
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        unref(reviewActiveTab) === "quiz" ? (openBlock(), createBlock("div", {
                          key: 0,
                          style: { "width": "240px" }
                        }, [
                          createVNode(VSelect, {
                            modelValue: unref(reviewSelectedQuiz),
                            "onUpdate:modelValue": ($event) => isRef(reviewSelectedQuiz) ? reviewSelectedQuiz.value = $event : null,
                            label: "Quiz Type",
                            items: ["All", "Quiz", "Exam"],
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])) : createCommentVNode("", true)
                      ]),
                      "header-actions": withCtx(() => [
                        createVNode("div", { class: "d-flex align-center gap-2" }, [
                          createVNode(VCheckbox, {
                            modelValue: unref(reviewLoading),
                            "onUpdate:modelValue": ($event) => isRef(reviewLoading) ? reviewLoading.value = $event : null,
                            label: "Simulate Loading State",
                            "hide-details": "",
                            density: "compact"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      "item.student": withCtx(({ item }) => [
                        createVNode("div", { class: "d-flex align-center py-2" }, [
                          createVNode(VAvatar, {
                            size: "34",
                            class: "me-3",
                            color: "grey-50"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(item.initials), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", { class: "d-flex flex-column" }, [
                            createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.name), 1),
                            createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.studentId), 1)
                          ])
                        ])
                      ]),
                      "item.status": withCtx(({ item }) => [
                        createVNode(VChip, {
                          color: getStatusColor(item.status),
                          variant: "tonal",
                          size: "small",
                          class: "font-weight-medium text-capitalize"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.status), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      "item.score": withCtx(({ item }) => [
                        createVNode(VChip, {
                          color: getScoreColor(item.score),
                          variant: "tonal",
                          size: "small",
                          class: "font-weight-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.score), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      "item.action": withCtx(({ item }) => [
                        createVNode(VBtn, {
                          size: "small",
                          color: "primary",
                          variant: "outlined",
                          onClick: ($event) => toast("success", `Clicked action for ${item.name}`)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Action ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      "view-team": withCtx(({ items }) => [
                        createVNode("div", { class: "pa-5" }, [
                          createVNode("h6", { class: "text-h6 mb-4" }, "Team View Accordion / Custom Layout"),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                                return openBlock(), createBlock(VCol, {
                                  key: item.studentId,
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, { variant: "outlined" }, {
                                      default: withCtx(() => [
                                        createVNode(VCardText, { class: "d-flex align-center gap-3" }, {
                                          default: withCtx(() => [
                                            createVNode(VAvatar, {
                                              color: "primary-opacity-lighter",
                                              class: "text-primary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.initials), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode("div", null, [
                                              createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.name), 1),
                                              createVNode("div", { class: "text-caption" }, toDisplayString(item.book), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      "view-room": withCtx(({ items }) => [
                        createVNode("div", { class: "pa-5" }, [
                          createVNode("h6", { class: "text-h6 mb-4" }, "Room View Custom Layout"),
                          createVNode(VAlert, {
                            type: "info",
                            variant: "tonal",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Mocking room grouping inside parent slot using " + toDisplayString(items.length) + " items. ", 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VList, {
                            border: "",
                            rounded: ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: item.studentId,
                                  title: item.name,
                                  subtitle: `Classroom: Room A • ${item.lessonName}`
                                }, null, 8, ["title", "subtitle"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 1
                    }, 8, ["tabs", "activeTab", "onUpdate:activeTab", "viewType", "onUpdate:viewType", "headers", "items", "loading"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(showSnackbar),
        "onUpdate:modelValue": ($event) => isRef(showSnackbar) ? showSnackbar.value = $event : null,
        color: unref(snackbarColor),
        timeout: "3000"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(snackbarText))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(snackbarText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/design-system.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const designSystem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cbe5d0f9"]]);
export {
  designSystem as default
};
