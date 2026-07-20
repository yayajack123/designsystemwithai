import { ref, computed, defineComponent, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext, shallowRef, watchEffect, onScopeDispose, toRef, watch, Fragment, Transition, nextTick, unref, createTextVNode, withModifiers, toRefs, provide } from "vue";
import { i as watchDebounced, a as VIcon, k as convertToUnit, l as useToggleScope, m as genericComponent, o as propsFactory, q as useRtl, s as provideTheme, t as useBorder, v as useBackgroundColor, x as useElevation, y as useDisplay, z as useRounded, A as useRouter, B as useProxiedModel, C as toPhysical, D as useLayoutItem, E as provideDefaults, F as useRender, G as VDefaultsProvider, H as makeThemeProps, I as makeTagProps, J as makeRoundedProps, K as makeLayoutItemProps, L as makeElevationProps, M as makeDisplayProps, N as makeComponentProps, O as makeBorderProps, u as useNuxtApp, V as VBtn } from "../server.mjs";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { V as VSpacer } from "./VSpacer-CtyhO1n2.js";
import { u as useValidation, _ as _sfc_main$2, c as createAccountValidations } from "./account-settings-CFMqtpMU.js";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { u as useScopeId, a as useDelay, m as makeDelayProps } from "./VOverlay-gAZb14KV.js";
import { u as useSsrBoot } from "./VList-BNtS0p6J.js";
import { a as VImg } from "./VAvatar-B478BWXT.js";
import { V as VDivider } from "./VDivider-Cdypedjq.js";
import { V as VCard } from "./VCard-B42eN0YV.js";
import { V as VCardText } from "./VCardText-CaXtzNxg.js";
import { V as VRow, a as VCol } from "./VRow-BRD4hy0P.js";
import { V as VTextField } from "./VTextField-jMGfwBDn.js";
import { c as createGroupBy, a as createSort, b as createHeaders, u as useDataTableItems, p as provideSort, d as provideGroupBy, e as useGroupedItems, f as provideSelection, g as provideExpanded, h as useOptions, V as VDataTableHeaders, i as VDataTableRows, j as VTable, m as makeDataTableProps } from "./VDataTable-TnWqeKKY.js";
import { c as createPagination, p as providePagination, V as VDataTableFooter, m as makeVDataTableFooterProps, a as makeDataTablePaginateProps } from "./VDataTableFooter-BmXk9xgv.js";
const PAGE_OPTIONS = [
  {
    title: "10",
    value: 10
  },
  {
    title: "25",
    value: 25
  },
  {
    title: "50",
    value: 50
  },
  {
    title: "100",
    value: 100
  }
];
const useDatatable = (callback) => {
  const data = ref([]);
  const isLoading = ref(false);
  const itemsPerPage = ref(10);
  const totalItems = ref(0);
  const query = ref({});
  const fetchItems = async (params = { page: 1, itemsPerPage: 10 }) => {
    try {
      isLoading.value = true;
      const result = await callback(params, { ...query.value });
      data.value = result.data;
      totalItems.value = result.meta.total || 0;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };
  watchDebounced(() => query.value, async () => {
    await fetchItems();
  }, { deep: true, debounce: 500 });
  const queryCounter = computed(() => {
    return Object.keys(query.value).length;
  });
  return {
    // Variables
    data,
    query,
    itemsPerPage,
    isLoading,
    totalItems,
    itemPerPageOptions: PAGE_OPTIONS,
    // Computed
    queryCounter,
    // Function
    fetchItems
  };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppDrawerHeaderSection",
  __ssrInlineRender: true,
  props: {
    title: {}
  },
  emits: ["cancel"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pa-5 d-flex align-center" }, _attrs))}><h5 class="text-h5">${ssrInterpolate(props.title)}</h5>`);
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "beforeClose", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_IconBtn, {
        class: "text-medium-emphasis",
        size: "x-small",
        onClick: ($event) => _ctx.$emit("cancel", $event)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              icon: "ri-close-line",
              size: "24"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                icon: "ri-close-line",
                size: "24"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@core/components/AppDrawerHeaderSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function useSticky(_ref) {
  let {
    isSticky,
    layoutItemStyles
  } = _ref;
  const isStuck = shallowRef(false);
  const stuckPosition = shallowRef(0);
  const stickyStyles = computed(() => {
    const side = typeof isStuck.value === "boolean" ? "top" : isStuck.value;
    return [isSticky.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, isStuck.value ? {
      [side]: convertToUnit(stuckPosition.value)
    } : {
      top: layoutItemStyles.value.top
    }];
  });
  return {
    isStuck,
    stickyStyles
  };
}
function useTouch(_ref) {
  let {
    el,
    width,
    position
  } = _ref;
  computed(() => ["left", "right"].includes(position.value));
  const isDragging = shallowRef(false);
  const dragProgress = shallowRef(0);
  shallowRef(0);
  const dragStyles = computed(() => {
    return isDragging.value ? {
      transform: position.value === "left" ? `translateX(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "right" ? `translateX(calc(100% - ${dragProgress.value * width.value}px))` : position.value === "top" ? `translateY(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "bottom" ? `translateY(calc(100% - ${dragProgress.value * width.value}px))` : oops(),
      transition: "none"
    } : void 0;
  });
  useToggleScope(isDragging, () => {
    var _a, _b;
    const transform = ((_a = el.value) == null ? void 0 : _a.style.transform) ?? null;
    const transition = ((_b = el.value) == null ? void 0 : _b.style.transition) ?? null;
    watchEffect(() => {
      var _a2, _b2, _c, _d;
      (_b2 = el.value) == null ? void 0 : _b2.style.setProperty("transform", ((_a2 = dragStyles.value) == null ? void 0 : _a2.transform) || "none");
      (_d = el.value) == null ? void 0 : _d.style.setProperty("transition", ((_c = dragStyles.value) == null ? void 0 : _c.transition) || null);
    });
    onScopeDispose(() => {
      var _a2, _b2;
      (_a2 = el.value) == null ? void 0 : _a2.style.setProperty("transform", transform);
      (_b2 = el.value) == null ? void 0 : _b2.style.setProperty("transition", transition);
    });
  });
  return {
    isDragging,
    dragProgress,
    dragStyles
  };
}
function oops() {
  throw new Error();
}
const locations = ["start", "end", "left", "right", "top", "bottom"];
const makeVNavigationDrawerProps = propsFactory({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: true
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (value) => locations.includes(value)
  },
  sticky: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDelayProps(),
  ...makeDisplayProps({
    mobile: null
  }),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "nav"
  }),
  ...makeThemeProps()
}, "VNavigationDrawer");
const VNavigationDrawer = genericComponent()({
  name: "VNavigationDrawer",
  props: makeVNavigationDrawerProps(),
  emits: {
    "update:modelValue": (val) => true,
    "update:rail": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      elevationClasses
    } = useElevation(props);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const {
      roundedClasses
    } = useRounded(props);
    const router = useRouter();
    const isActive = useProxiedModel(props, "modelValue", null, (v) => !!v);
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      scopeId
    } = useScopeId();
    const rootEl = ref();
    const isHovering = shallowRef(false);
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, (value) => {
      isHovering.value = value;
    });
    const width = computed(() => {
      return props.rail && props.expandOnHover && isHovering.value ? Number(props.width) : Number(props.rail ? props.railWidth : props.width);
    });
    const location = computed(() => {
      return toPhysical(props.location, isRtl.value);
    });
    const isPersistent = computed(() => props.persistent);
    const isTemporary = computed(() => !props.permanent && (mobile.value || props.temporary));
    const isSticky = computed(() => props.sticky && !isTemporary.value && location.value !== "bottom");
    useToggleScope(() => props.expandOnHover && props.rail != null, () => {
      watch(isHovering, (val) => emit("update:rail", !val));
    });
    useToggleScope(() => !props.disableResizeWatcher, () => {
      watch(isTemporary, (val) => !props.permanent && nextTick(() => isActive.value = !val));
    });
    useToggleScope(() => !props.disableRouteWatcher && !!router, () => {
      watch(router.currentRoute, () => isTemporary.value && (isActive.value = false));
    });
    watch(() => props.permanent, (val) => {
      if (val) isActive.value = true;
    });
    if (props.modelValue == null && !isTemporary.value) {
      isActive.value = props.permanent || !mobile.value;
    }
    const {
      isDragging,
      dragProgress
    } = useTouch({
      el: rootEl,
      width,
      touchless: toRef(props, "touchless"),
      position: location
    });
    const layoutSize = computed(() => {
      const size = isTemporary.value ? 0 : props.rail && props.expandOnHover ? Number(props.railWidth) : width.value;
      return isDragging.value ? size * dragProgress.value : size;
    });
    const elementSize = computed(() => ["top", "bottom"].includes(props.location) ? 0 : width.value);
    const {
      layoutItemStyles,
      layoutItemScrimStyles,
      layoutIsReady
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: location,
      layoutSize,
      elementSize,
      active: computed(() => isActive.value || isDragging.value),
      disableTransitions: computed(() => isDragging.value),
      absolute: computed(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        props.absolute || isSticky.value && typeof isStuck.value !== "string"
      ))
    });
    const {
      isStuck,
      stickyStyles
    } = useSticky({
      isSticky,
      layoutItemStyles
    });
    const scrimColor = useBackgroundColor(computed(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    }));
    const scrimStyles = computed(() => ({
      ...isDragging.value ? {
        opacity: dragProgress.value * 0.2,
        transition: "none"
      } : void 0,
      ...layoutItemScrimStyles.value
    }));
    provideDefaults({
      VList: {
        bgColor: "transparent"
      }
    });
    useRender(() => {
      const hasImage = slots.image || props.image;
      return createVNode(Fragment, null, [createVNode(props.tag, mergeProps({
        "ref": rootEl,
        "onMouseenter": runOpenDelay,
        "onMouseleave": runCloseDelay,
        "class": ["v-navigation-drawer", `v-navigation-drawer--${location.value}`, {
          "v-navigation-drawer--expand-on-hover": props.expandOnHover,
          "v-navigation-drawer--floating": props.floating,
          "v-navigation-drawer--is-hovering": isHovering.value,
          "v-navigation-drawer--rail": props.rail,
          "v-navigation-drawer--temporary": isTemporary.value,
          "v-navigation-drawer--persistent": isPersistent.value,
          "v-navigation-drawer--active": isActive.value,
          "v-navigation-drawer--sticky": isSticky.value
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, displayClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, layoutItemStyles.value, ssrBootStyles.value, stickyStyles.value, props.style, ["top", "bottom"].includes(location.value) ? {
          height: "auto"
        } : {}]
      }, scopeId, attrs), {
        default: () => {
          var _a, _b, _c;
          return [hasImage && createVNode("div", {
            "key": "image",
            "class": "v-navigation-drawer__img"
          }, [!slots.image ? createVNode(VImg, {
            "key": "image-img",
            "alt": "",
            "cover": true,
            "height": "inherit",
            "src": props.image
          }, null) : createVNode(VDefaultsProvider, {
            "key": "image-defaults",
            "disabled": !props.image,
            "defaults": {
              VImg: {
                alt: "",
                cover: true,
                height: "inherit",
                src: props.image
              }
            }
          }, slots.image)]), slots.prepend && createVNode("div", {
            "class": "v-navigation-drawer__prepend"
          }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots)]), createVNode("div", {
            "class": "v-navigation-drawer__content"
          }, [(_b = slots.default) == null ? void 0 : _b.call(slots)]), slots.append && createVNode("div", {
            "class": "v-navigation-drawer__append"
          }, [(_c = slots.append) == null ? void 0 : _c.call(slots)])];
        }
      }), createVNode(Transition, {
        "name": "fade-transition"
      }, {
        default: () => [isTemporary.value && (isDragging.value || isActive.value) && !!props.scrim && createVNode("div", mergeProps({
          "class": ["v-navigation-drawer__scrim", scrimColor.backgroundColorClasses.value],
          "style": [scrimStyles.value, scrimColor.backgroundColorStyles.value],
          "onClick": () => {
            if (isPersistent.value) return;
            isActive.value = false;
          }
        }, scopeId), null)]
      })]);
    });
    return layoutIsReady.then(() => ({
      isStuck
    }));
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddNewUserDrawer",
  __ssrInlineRender: true,
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: false
    },
    roleList: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:isDrawerOpen", "userData"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { $api } = useNuxtApp();
    const inputs = ref({
      name: "",
      email: "",
      role: null,
      password: "",
      passwordConfirmation: ""
    });
    const {
      errors,
      isError,
      resetForm,
      validate
    } = useValidation(inputs, {
      schema: createAccountValidations
    });
    const isPasswordVisible = ref(false);
    const isPasswordConfirmationVisible = ref(false);
    const closeNavigationDrawer = () => {
      emit("update:isDrawerOpen", false);
      nextTick(() => {
        resetForm();
      });
    };
    const fetchRoleData = async () => {
      const response = await $api.auth.getRole();
      return {
        data: response.data.map((role) => ({
          id: role.id,
          name: role.name
        })),
        meta: response.meta
      };
    };
    const onSubmit = async () => {
      await validate();
      if (isError.value)
        return;
      emit("userData", {
        id: 0,
        name: inputs.value.name,
        email: inputs.value.email,
        role: inputs.value.role,
        password: inputs.value.password,
        passwordConfirmation: inputs.value.passwordConfirmation
      });
      emit("update:isDrawerOpen", false);
      await nextTick();
      resetForm();
    };
    const handleDrawerModelValueUpdate = (val) => {
      emit("update:isDrawerOpen", val);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDrawerHeaderSection = _sfc_main$1;
      const _component_UiAutoComplete = _sfc_main$2;
      _push(ssrRenderComponent(VNavigationDrawer, mergeProps({
        temporary: "",
        width: 400,
        location: "end",
        class: "scrollable-content",
        "model-value": props.isDrawerOpen,
        "onUpdate:modelValue": handleDrawerModelValueUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppDrawerHeaderSection, {
              title: "Add User",
              onCancel: closeNavigationDrawer
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { flat: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<form${_scopeId4}>`);
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(inputs).name,
                                            "onUpdate:modelValue": ($event) => unref(inputs).name = $event,
                                            "error-messages": unref(errors).name,
                                            label: "Full Name",
                                            placeholder: "John Doe"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(inputs).name,
                                              "onUpdate:modelValue": ($event) => unref(inputs).name = $event,
                                              "error-messages": unref(errors).name,
                                              label: "Full Name",
                                              placeholder: "John Doe"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(inputs).email,
                                            "onUpdate:modelValue": ($event) => unref(inputs).email = $event,
                                            "error-messages": unref(errors).email,
                                            label: "Email",
                                            placeholder: "johndoe@email.com"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(inputs).email,
                                              "onUpdate:modelValue": ($event) => unref(inputs).email = $event,
                                              "error-messages": unref(errors).email,
                                              label: "Email",
                                              placeholder: "johndoe@email.com"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_UiAutoComplete, {
                                            modelValue: unref(inputs).role,
                                            "onUpdate:modelValue": ($event) => unref(inputs).role = $event,
                                            label: "Role",
                                            callback: fetchRoleData,
                                            "error-messages": unref(errors).role,
                                            "item-title": "name",
                                            "item-value": "id",
                                            placeholder: "Select Role"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_UiAutoComplete, {
                                              modelValue: unref(inputs).role,
                                              "onUpdate:modelValue": ($event) => unref(inputs).role = $event,
                                              label: "Role",
                                              callback: fetchRoleData,
                                              "error-messages": unref(errors).role,
                                              "item-title": "name",
                                              "item-value": "id",
                                              placeholder: "Select Role"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(inputs).password,
                                            "onUpdate:modelValue": ($event) => unref(inputs).password = $event,
                                            "error-messages": unref(errors).password,
                                            type: unref(isPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            label: "Password",
                                            autocomplete: "on",
                                            placeholder: "············",
                                            "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(inputs).password,
                                              "onUpdate:modelValue": ($event) => unref(inputs).password = $event,
                                              "error-messages": unref(errors).password,
                                              type: unref(isPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                              label: "Password",
                                              autocomplete: "on",
                                              placeholder: "············",
                                              "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "type", "append-inner-icon", "onClick:appendInner"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(inputs).passwordConfirmation,
                                            "onUpdate:modelValue": ($event) => unref(inputs).passwordConfirmation = $event,
                                            "error-messages": unref(errors).passwordConfirmation,
                                            type: unref(isPasswordConfirmationVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isPasswordConfirmationVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            autocomplete: "on",
                                            label: "Confirm Password",
                                            placeholder: "············",
                                            "onClick:appendInner": ($event) => isPasswordConfirmationVisible.value = !unref(isPasswordConfirmationVisible)
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(inputs).passwordConfirmation,
                                              "onUpdate:modelValue": ($event) => unref(inputs).passwordConfirmation = $event,
                                              "error-messages": unref(errors).passwordConfirmation,
                                              type: unref(isPasswordConfirmationVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isPasswordConfirmationVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                              autocomplete: "on",
                                              label: "Confirm Password",
                                              placeholder: "············",
                                              "onClick:appendInner": ($event) => isPasswordConfirmationVisible.value = !unref(isPasswordConfirmationVisible)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "type", "append-inner-icon", "onClick:appendInner"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            type: "submit",
                                            class: "me-4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Submit `);
                                              } else {
                                                return [
                                                  createTextVNode(" Submit ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            type: "reset",
                                            variant: "outlined",
                                            color: "error",
                                            onClick: closeNavigationDrawer
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Cancel `);
                                              } else {
                                                return [
                                                  createTextVNode(" Cancel ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              type: "submit",
                                              class: "me-4"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Submit ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              type: "reset",
                                              variant: "outlined",
                                              color: "error",
                                              onClick: closeNavigationDrawer
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Cancel ")
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
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(inputs).name,
                                            "onUpdate:modelValue": ($event) => unref(inputs).name = $event,
                                            "error-messages": unref(errors).name,
                                            label: "Full Name",
                                            placeholder: "John Doe"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(inputs).email,
                                            "onUpdate:modelValue": ($event) => unref(inputs).email = $event,
                                            "error-messages": unref(errors).email,
                                            label: "Email",
                                            placeholder: "johndoe@email.com"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiAutoComplete, {
                                            modelValue: unref(inputs).role,
                                            "onUpdate:modelValue": ($event) => unref(inputs).role = $event,
                                            label: "Role",
                                            callback: fetchRoleData,
                                            "error-messages": unref(errors).role,
                                            "item-title": "name",
                                            "item-value": "id",
                                            placeholder: "Select Role"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(inputs).password,
                                            "onUpdate:modelValue": ($event) => unref(inputs).password = $event,
                                            "error-messages": unref(errors).password,
                                            type: unref(isPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            label: "Password",
                                            autocomplete: "on",
                                            placeholder: "············",
                                            "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(inputs).passwordConfirmation,
                                            "onUpdate:modelValue": ($event) => unref(inputs).passwordConfirmation = $event,
                                            "error-messages": unref(errors).passwordConfirmation,
                                            type: unref(isPasswordConfirmationVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isPasswordConfirmationVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            autocomplete: "on",
                                            label: "Confirm Password",
                                            placeholder: "············",
                                            "onClick:appendInner": ($event) => isPasswordConfirmationVisible.value = !unref(isPasswordConfirmationVisible)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            type: "submit",
                                            class: "me-4"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Submit ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            type: "reset",
                                            variant: "outlined",
                                            color: "error",
                                            onClick: closeNavigationDrawer
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancel ")
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
                              _push5(`</form>`);
                            } else {
                              return [
                                createVNode("form", {
                                  onSubmit: withModifiers(onSubmit, ["prevent"])
                                }, [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(inputs).name,
                                            "onUpdate:modelValue": ($event) => unref(inputs).name = $event,
                                            "error-messages": unref(errors).name,
                                            label: "Full Name",
                                            placeholder: "John Doe"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(inputs).email,
                                            "onUpdate:modelValue": ($event) => unref(inputs).email = $event,
                                            "error-messages": unref(errors).email,
                                            label: "Email",
                                            placeholder: "johndoe@email.com"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiAutoComplete, {
                                            modelValue: unref(inputs).role,
                                            "onUpdate:modelValue": ($event) => unref(inputs).role = $event,
                                            label: "Role",
                                            callback: fetchRoleData,
                                            "error-messages": unref(errors).role,
                                            "item-title": "name",
                                            "item-value": "id",
                                            placeholder: "Select Role"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(inputs).password,
                                            "onUpdate:modelValue": ($event) => unref(inputs).password = $event,
                                            "error-messages": unref(errors).password,
                                            type: unref(isPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            label: "Password",
                                            autocomplete: "on",
                                            placeholder: "············",
                                            "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(inputs).passwordConfirmation,
                                            "onUpdate:modelValue": ($event) => unref(inputs).passwordConfirmation = $event,
                                            "error-messages": unref(errors).passwordConfirmation,
                                            type: unref(isPasswordConfirmationVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isPasswordConfirmationVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            autocomplete: "on",
                                            label: "Confirm Password",
                                            placeholder: "············",
                                            "onClick:appendInner": ($event) => isPasswordConfirmationVisible.value = !unref(isPasswordConfirmationVisible)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            type: "submit",
                                            class: "me-4"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Submit ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            type: "reset",
                                            variant: "outlined",
                                            color: "error",
                                            onClick: closeNavigationDrawer
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancel ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ], 32)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("form", {
                                onSubmit: withModifiers(onSubmit, ["prevent"])
                              }, [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(inputs).name,
                                          "onUpdate:modelValue": ($event) => unref(inputs).name = $event,
                                          "error-messages": unref(errors).name,
                                          label: "Full Name",
                                          placeholder: "John Doe"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(inputs).email,
                                          "onUpdate:modelValue": ($event) => unref(inputs).email = $event,
                                          "error-messages": unref(errors).email,
                                          label: "Email",
                                          placeholder: "johndoe@email.com"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiAutoComplete, {
                                          modelValue: unref(inputs).role,
                                          "onUpdate:modelValue": ($event) => unref(inputs).role = $event,
                                          label: "Role",
                                          callback: fetchRoleData,
                                          "error-messages": unref(errors).role,
                                          "item-title": "name",
                                          "item-value": "id",
                                          placeholder: "Select Role"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(inputs).password,
                                          "onUpdate:modelValue": ($event) => unref(inputs).password = $event,
                                          "error-messages": unref(errors).password,
                                          type: unref(isPasswordVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                          label: "Password",
                                          autocomplete: "on",
                                          placeholder: "············",
                                          "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "type", "append-inner-icon", "onClick:appendInner"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(inputs).passwordConfirmation,
                                          "onUpdate:modelValue": ($event) => unref(inputs).passwordConfirmation = $event,
                                          "error-messages": unref(errors).passwordConfirmation,
                                          type: unref(isPasswordConfirmationVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isPasswordConfirmationVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                          autocomplete: "on",
                                          label: "Confirm Password",
                                          placeholder: "············",
                                          "onClick:appendInner": ($event) => isPasswordConfirmationVisible.value = !unref(isPasswordConfirmationVisible)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "type", "append-inner-icon", "onClick:appendInner"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          type: "submit",
                                          class: "me-4"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Submit ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          type: "reset",
                                          variant: "outlined",
                                          color: "error",
                                          onClick: closeNavigationDrawer
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cancel ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ], 32)
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
                    createVNode(VCard, { flat: "" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("form", {
                              onSubmit: withModifiers(onSubmit, ["prevent"])
                            }, [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(inputs).name,
                                        "onUpdate:modelValue": ($event) => unref(inputs).name = $event,
                                        "error-messages": unref(errors).name,
                                        label: "Full Name",
                                        placeholder: "John Doe"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(inputs).email,
                                        "onUpdate:modelValue": ($event) => unref(inputs).email = $event,
                                        "error-messages": unref(errors).email,
                                        label: "Email",
                                        placeholder: "johndoe@email.com"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiAutoComplete, {
                                        modelValue: unref(inputs).role,
                                        "onUpdate:modelValue": ($event) => unref(inputs).role = $event,
                                        label: "Role",
                                        callback: fetchRoleData,
                                        "error-messages": unref(errors).role,
                                        "item-title": "name",
                                        "item-value": "id",
                                        placeholder: "Select Role"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(inputs).password,
                                        "onUpdate:modelValue": ($event) => unref(inputs).password = $event,
                                        "error-messages": unref(errors).password,
                                        type: unref(isPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        label: "Password",
                                        autocomplete: "on",
                                        placeholder: "············",
                                        "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "type", "append-inner-icon", "onClick:appendInner"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(inputs).passwordConfirmation,
                                        "onUpdate:modelValue": ($event) => unref(inputs).passwordConfirmation = $event,
                                        "error-messages": unref(errors).passwordConfirmation,
                                        type: unref(isPasswordConfirmationVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isPasswordConfirmationVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        autocomplete: "on",
                                        label: "Confirm Password",
                                        placeholder: "············",
                                        "onClick:appendInner": ($event) => isPasswordConfirmationVisible.value = !unref(isPasswordConfirmationVisible)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "type", "append-inner-icon", "onClick:appendInner"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        type: "submit",
                                        class: "me-4"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Submit ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        type: "reset",
                                        variant: "outlined",
                                        color: "error",
                                        onClick: closeNavigationDrawer
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cancel ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ], 32)
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
              createVNode(_component_AppDrawerHeaderSection, {
                title: "Add User",
                onCancel: closeNavigationDrawer
              }),
              createVNode(VDivider),
              createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                default: withCtx(() => [
                  createVNode(VCard, { flat: "" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("form", {
                            onSubmit: withModifiers(onSubmit, ["prevent"])
                          }, [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(inputs).name,
                                      "onUpdate:modelValue": ($event) => unref(inputs).name = $event,
                                      "error-messages": unref(errors).name,
                                      label: "Full Name",
                                      placeholder: "John Doe"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(inputs).email,
                                      "onUpdate:modelValue": ($event) => unref(inputs).email = $event,
                                      "error-messages": unref(errors).email,
                                      label: "Email",
                                      placeholder: "johndoe@email.com"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiAutoComplete, {
                                      modelValue: unref(inputs).role,
                                      "onUpdate:modelValue": ($event) => unref(inputs).role = $event,
                                      label: "Role",
                                      callback: fetchRoleData,
                                      "error-messages": unref(errors).role,
                                      "item-title": "name",
                                      "item-value": "id",
                                      placeholder: "Select Role"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(inputs).password,
                                      "onUpdate:modelValue": ($event) => unref(inputs).password = $event,
                                      "error-messages": unref(errors).password,
                                      type: unref(isPasswordVisible) ? "text" : "password",
                                      "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                      label: "Password",
                                      autocomplete: "on",
                                      placeholder: "············",
                                      "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "type", "append-inner-icon", "onClick:appendInner"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(inputs).passwordConfirmation,
                                      "onUpdate:modelValue": ($event) => unref(inputs).passwordConfirmation = $event,
                                      "error-messages": unref(errors).passwordConfirmation,
                                      type: unref(isPasswordConfirmationVisible) ? "text" : "password",
                                      "append-inner-icon": unref(isPasswordConfirmationVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                      autocomplete: "on",
                                      label: "Confirm Password",
                                      placeholder: "············",
                                      "onClick:appendInner": ($event) => isPasswordConfirmationVisible.value = !unref(isPasswordConfirmationVisible)
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "type", "append-inner-icon", "onClick:appendInner"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      type: "submit",
                                      class: "me-4"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Submit ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      type: "reset",
                                      variant: "outlined",
                                      color: "error",
                                      onClick: closeNavigationDrawer
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Cancel ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ], 32)
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/user/AddNewUserDrawer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const makeVDataTableServerProps = propsFactory({
  itemsLength: {
    type: [Number, String],
    required: true
  },
  ...makeDataTablePaginateProps(),
  ...makeDataTableProps(),
  ...makeVDataTableFooterProps()
}, "VDataTableServer");
const VDataTableServer = genericComponent()({
  name: "VDataTableServer",
  props: makeVDataTableServerProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:page": (page) => true,
    "update:itemsPerPage": (page) => true,
    "update:sortBy": (sortBy) => true,
    "update:options": (options) => true,
    "update:expanded": (options) => true,
    "update:groupBy": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      groupBy
    } = createGroupBy(props);
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      page,
      itemsPerPage
    } = createPagination(props);
    const {
      disableSort
    } = toRefs(props);
    const itemsLength = computed(() => parseInt(props.itemsLength, 10));
    const {
      columns,
      headers
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(props, "showSelect"),
      showExpand: toRef(props, "showExpand")
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort,
      page
    });
    const {
      opened,
      isGroupOpen,
      toggleGroup,
      extractRows
    } = provideGroupBy({
      groupBy,
      sortBy,
      disableSort
    });
    const {
      pageCount,
      setItemsPerPage
    } = providePagination({
      page,
      itemsPerPage,
      itemsLength
    });
    const {
      flatItems
    } = useGroupedItems(items, groupBy, opened);
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, {
      allItems: items,
      currentPage: items
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    const itemsWithoutGroups = computed(() => extractRows(items.value));
    useOptions({
      page,
      itemsPerPage,
      sortBy,
      groupBy,
      search: toRef(props, "search")
    });
    provide("v-data-table", {
      toggleSort,
      sortBy
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(props, "hideNoData"),
        noDataText: toRef(props, "noDataText"),
        loading: toRef(props, "loading"),
        loadingText: toRef(props, "loadingText")
      }
    });
    const slotProps = computed(() => ({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value,
      pageCount: pageCount.value,
      toggleSort,
      setItemsPerPage,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: itemsWithoutGroups.value.map((item) => item.raw),
      internalItems: itemsWithoutGroups.value,
      groupedItems: flatItems.value,
      columns: columns.value,
      headers: headers.value
    }));
    useRender(() => {
      const dataTableFooterProps = VDataTableFooter.filterProps(props);
      const dataTableHeadersProps = VDataTableHeaders.filterProps(props);
      const dataTableRowsProps = VDataTableRows.filterProps(props);
      const tableProps = VTable.filterProps(props);
      return createVNode(VTable, mergeProps({
        "class": ["v-data-table", {
          "v-data-table--loading": props.loading
        }, props.class],
        "style": props.style
      }, tableProps), {
        top: () => {
          var _a;
          return (_a = slots.top) == null ? void 0 : _a.call(slots, slotProps.value);
        },
        default: () => {
          var _a, _b, _c, _d, _e, _f;
          return slots.default ? slots.default(slotProps.value) : createVNode(Fragment, null, [(_a = slots.colgroup) == null ? void 0 : _a.call(slots, slotProps.value), !props.hideDefaultHeader && createVNode("thead", {
            "key": "thead",
            "class": "v-data-table__thead",
            "role": "rowgroup"
          }, [createVNode(VDataTableHeaders, mergeProps(dataTableHeadersProps, {
            "sticky": props.fixedHeader
          }), slots)]), (_b = slots.thead) == null ? void 0 : _b.call(slots, slotProps.value), !props.hideDefaultBody && createVNode("tbody", {
            "class": "v-data-table__tbody",
            "role": "rowgroup"
          }, [(_c = slots["body.prepend"]) == null ? void 0 : _c.call(slots, slotProps.value), slots.body ? slots.body(slotProps.value) : createVNode(VDataTableRows, mergeProps(attrs, dataTableRowsProps, {
            "items": flatItems.value
          }), slots), (_d = slots["body.append"]) == null ? void 0 : _d.call(slots, slotProps.value)]), (_e = slots.tbody) == null ? void 0 : _e.call(slots, slotProps.value), (_f = slots.tfoot) == null ? void 0 : _f.call(slots, slotProps.value)]);
        },
        bottom: () => slots.bottom ? slots.bottom(slotProps.value) : !props.hideDefaultFooter && createVNode(Fragment, null, [createVNode(VDivider, null, null), createVNode(VDataTableFooter, dataTableFooterProps, {
          prepend: slots["footer.prepend"]
        })])
      });
    });
  }
});
export {
  VDataTableServer as V,
  _sfc_main as _,
  VNavigationDrawer as a,
  _sfc_main$1 as b,
  useDatatable as u
};
