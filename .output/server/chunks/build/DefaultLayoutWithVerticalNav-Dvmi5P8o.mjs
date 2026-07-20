import { defineComponent, resolveComponent, unref, mergeProps, withCtx, renderSlot, createVNode, createBlock, createCommentVNode, openBlock, ref, watch, computed, toRef, resolveDynamicComponent, provide, Fragment, renderList, withDirectives, vShow, createTextVNode, toDisplayString, inject, TransitionGroup, h, Transition, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderVNode, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { a as VIcon, aV as themeConfig, bp as useWindowSize, bb as useLayoutConfigStore, bq as useToggle, br as syncRef, aW as _export_sfc, u as useNuxtApp, b8 as storeToRefs, aU as useAuthStore, bm as useElementHover, bn as injectionKeyIsVerticalNavHovered, ba as useRoute$1, bd as layoutConfig, be as getDynamicI18nProps, c as useRouter$1, bc as isNavGroupActive, bo as openGroups, bf as getComputedNavLinkToProp, bg as isNavLinkActive } from './server.mjs';
import _sfc_main$9 from './NavBarNotifications-BXspaVPS.mjs';
import _sfc_main$8 from './NavbarThemeSwitcher-CKJ46nQl.mjs';
import _sfc_main$a from './UserProfile-tYd746UM.mjs';
import { _ as _sfc_main$7, a as can, c as canViewNavMenuGroup } from './I18n-B_oBh542.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CH0086wS.mjs';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import { V as VNodeRenderer } from './VNodeRenderer-DhWZ1EpV.mjs';
import { V as VSpacer } from './VSpacer-CtyhO1n2.mjs';
import 'node:http';
import 'node:https';
import '../nitro/nitro.mjs';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import 'vue-devtools-stub';
import '@antfu/utils';
import './formatters-BiUWZhXP.mjs';
import './VBadge-BFSq1eZl.mjs';
import './VAvatar-B478BWXT.mjs';
import './VMenu-C4ct7Xz7.mjs';
import './VOverlay-gAZb14KV.mjs';
import './forwardRefs-Oip3fNRq.mjs';
import './dialog-transition-CDwwEBKm.mjs';
import './VCard-B42eN0YV.mjs';
import './VCardText-CaXtzNxg.mjs';
import './VChip-C0dLsv_T.mjs';
import './index-CSomYp-Z.mjs';
import './VTooltip-vXFYhuMk.mjs';
import './VDivider-Cdypedjq.mjs';
import './VList-BNtS0p6J.mjs';

const _sfc_main$6 = defineComponent({
  name: "TransitionExpand",
  setup(_, { slots }) {
    const onEnter = (element) => {
      const width = getComputedStyle(element).width;
      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";
      const height = getComputedStyle(element).height;
      element.style.width = "";
      element.style.position = "";
      element.style.visibility = "";
      element.style.height = "0px";
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    };
    const onAfterEnter = (element) => {
      element.style.height = "auto";
    };
    const onLeave = (element) => {
      const height = getComputedStyle(element).height;
      element.style.height = height;
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = "0px";
      });
    };
    return () => h(
      h(Transition),
      {
        name: "expand",
        onEnter,
        onAfterEnter,
        onLeave
      },
      () => {
        var _a;
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
    );
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/TransitionExpand.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const TransitionExpand = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-51ebc8c6"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "VerticalNav",
  __ssrInlineRender: true,
  props: {
    tag: { default: "aside" },
    navItems: {},
    bottomNavItems: {},
    isOverlayNavActive: { type: Boolean },
    toggleIsOverlayNavActive: {}
  },
  setup(__props) {
    const props = __props;
    const { $api } = useNuxtApp();
    ref({});
    const { userPermission } = storeToRefs(useAuthStore());
    const refNav = ref();
    const isHovered = useElementHover(refNav);
    provide(injectionKeyIsVerticalNavHovered, isHovered);
    const configStore = useLayoutConfigStore();
    const resolveNavItemComponent = (item) => {
      if ("heading" in item)
        return _sfc_main$1;
      if ("children" in item)
        return _sfc_main$4;
      return _sfc_main$2;
    };
    const route = useRoute$1();
    watch(() => route.name, () => {
      props.toggleIsOverlayNavActive(false);
    });
    const isVerticalNavScrolled = ref(false);
    const updateIsVerticalNavScrolled = (val) => isVerticalNavScrolled.value = val;
    const handleNavScroll = (evt) => {
      isVerticalNavScrolled.value = evt.target.scrollTop > 0;
    };
    configStore.isVerticalNavMini(isHovered);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.tag), mergeProps({
        ref_key: "refNav",
        ref: refNav,
        class: ["layout-vertical-nav", [
          {
            "overlay-nav": unref(configStore).isLessThanOverlayNavBreakpoint,
            "hovered": unref(isHovered),
            "visible": _ctx.isOverlayNavActive,
            "scrolled": unref(isVerticalNavScrolled)
          }
        ]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nav-header" data-v-7c643745${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "nav-header", {}, () => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/",
                class: "app-logo app-title-wrapper"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(VNodeRenderer), {
                      nodes: unref(layoutConfig).app.logo
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(VNodeRenderer), {
                        nodes: unref(layoutConfig).app.logo
                      }, null, 8, ["nodes"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="header-action" data-v-7c643745${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig).app.iconRenderer || "div"), mergeProps({
                style: unref(configStore).isVerticalNavCollapsed ? null : { display: "none" },
                class: ["d-none nav-unpin", unref(configStore).isVerticalNavCollapsed && "d-lg-block"]
              }, unref(layoutConfig).icons.verticalNavUnPinned, {
                onClick: ($event) => unref(configStore).isVerticalNavCollapsed = !unref(configStore).isVerticalNavCollapsed
              }), null), _parent2, _scopeId);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig).app.iconRenderer || "div"), mergeProps({
                style: !unref(configStore).isVerticalNavCollapsed ? null : { display: "none" },
                class: ["d-none nav-pin", !unref(configStore).isVerticalNavCollapsed && "d-lg-block"]
              }, unref(layoutConfig).icons.verticalNavPinned, {
                onClick: ($event) => unref(configStore).isVerticalNavCollapsed = !unref(configStore).isVerticalNavCollapsed
              }), null), _parent2, _scopeId);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig).app.iconRenderer || "div"), mergeProps({ class: "d-lg-none" }, unref(layoutConfig).icons.close, {
                onClick: ($event) => _ctx.toggleIsOverlayNavActive(false)
              }), null), _parent2, _scopeId);
              _push2(`</div>`);
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "before-nav-items", {}, () => {
              _push2(`<div class="vertical-nav-items-shadow" data-v-7c643745${_scopeId}></div>`);
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "nav-items", { updateIsVerticalNavScrolled }, () => {
              _push2(ssrRenderComponent(unref(PerfectScrollbar), {
                key: unref(configStore).isAppRTL,
                tag: "ul",
                class: "nav-items",
                options: { wheelPropagation: false },
                onPsScrollY: handleNavScroll
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(_ctx.navItems, (item, index) => {
                      _push3(`<!--[-->`);
                      if (unref(userPermission).includes(item.permission) || !item.permission) {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(resolveNavItemComponent(item)), { item }, null), _parent3, _scopeId2);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<!--]-->`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.navItems, (item, index) => {
                        return openBlock(), createBlock(Fragment, { key: index }, [
                          unref(userPermission).includes(item.permission) || !item.permission ? (openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                            key: 0,
                            item
                          }, null, 8, ["item"])) : createCommentVNode("", true)
                        ], 64);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "after-nav-items", {}, () => {
              var _a;
              if ((_a = props.bottomNavItems) == null ? void 0 : _a.length) {
                _push2(`<div class="nav-bottom-items pt-2 pb-2" data-v-7c643745${_scopeId}><ul class="nav-items-bottom p-0 m-0" data-v-7c643745${_scopeId}><!--[-->`);
                ssrRenderList(props.bottomNavItems, (item, index) => {
                  _push2(`<!--[-->`);
                  if (unref(userPermission).includes(item.permission) || !item.permission) {
                    ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(resolveNavItemComponent(item)), { item }, null), _parent2, _scopeId);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<!--]-->`);
                });
                _push2(`<!--]--></ul></div>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", { class: "nav-header" }, [
                renderSlot(_ctx.$slots, "nav-header", {}, () => [
                  createVNode(_component_NuxtLink, {
                    to: "/",
                    class: "app-logo app-title-wrapper"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(VNodeRenderer), {
                        nodes: unref(layoutConfig).app.logo
                      }, null, 8, ["nodes"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "header-action" }, [
                    withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig).app.iconRenderer || "div"), mergeProps({
                      class: ["d-none nav-unpin", unref(configStore).isVerticalNavCollapsed && "d-lg-block"]
                    }, unref(layoutConfig).icons.verticalNavUnPinned, {
                      onClick: ($event) => unref(configStore).isVerticalNavCollapsed = !unref(configStore).isVerticalNavCollapsed
                    }), null, 16, ["class", "onClick"])), [
                      [vShow, unref(configStore).isVerticalNavCollapsed]
                    ]),
                    withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig).app.iconRenderer || "div"), mergeProps({
                      class: ["d-none nav-pin", !unref(configStore).isVerticalNavCollapsed && "d-lg-block"]
                    }, unref(layoutConfig).icons.verticalNavPinned, {
                      onClick: ($event) => unref(configStore).isVerticalNavCollapsed = !unref(configStore).isVerticalNavCollapsed
                    }), null, 16, ["class", "onClick"])), [
                      [vShow, !unref(configStore).isVerticalNavCollapsed]
                    ]),
                    (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig).app.iconRenderer || "div"), mergeProps({ class: "d-lg-none" }, unref(layoutConfig).icons.close, {
                      onClick: ($event) => _ctx.toggleIsOverlayNavActive(false)
                    }), null, 16, ["onClick"]))
                  ])
                ], true)
              ]),
              renderSlot(_ctx.$slots, "before-nav-items", {}, () => [
                createVNode("div", { class: "vertical-nav-items-shadow" })
              ], true),
              renderSlot(_ctx.$slots, "nav-items", { updateIsVerticalNavScrolled }, () => [
                (openBlock(), createBlock(unref(PerfectScrollbar), {
                  key: unref(configStore).isAppRTL,
                  tag: "ul",
                  class: "nav-items",
                  options: { wheelPropagation: false },
                  onPsScrollY: handleNavScroll
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.navItems, (item, index) => {
                      return openBlock(), createBlock(Fragment, { key: index }, [
                        unref(userPermission).includes(item.permission) || !item.permission ? (openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                          key: 0,
                          item
                        }, null, 8, ["item"])) : createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ]),
                  _: 1
                }))
              ], true),
              renderSlot(_ctx.$slots, "after-nav-items", {}, () => {
                var _a;
                return [
                  ((_a = props.bottomNavItems) == null ? void 0 : _a.length) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "nav-bottom-items pt-2 pb-2"
                  }, [
                    createVNode("ul", { class: "nav-items-bottom p-0 m-0" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.bottomNavItems, (item, index) => {
                        return openBlock(), createBlock(Fragment, { key: index }, [
                          unref(userPermission).includes(item.permission) || !item.permission ? (openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                            key: 0,
                            item
                          }, null, 8, ["item"])) : createCommentVNode("", true)
                        ], 64);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true)
                ];
              }, true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNav.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const VerticalNav = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-7c643745"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    name: "VerticalNavGroup"
  },
  __name: "VerticalNavGroup",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const route = useRoute$1();
    useRouter$1();
    const configStore = useLayoutConfigStore();
    const hideTitleAndBadge = configStore.isVerticalNavMini();
    const isVerticalNavHovered = inject(injectionKeyIsVerticalNavHovered, ref(false));
    const isGroupActive = ref(false);
    const isGroupOpen = ref(false);
    const isAnyChildOpen = (children) => {
      return children.some((child) => {
        let result = openGroups.value.includes(child.title);
        if ("children" in child)
          result = isAnyChildOpen(child.children) || result;
        return result;
      });
    };
    const collapseChildren = (children) => {
      children.forEach((child) => {
        if ("children" in child)
          collapseChildren(child.children);
        openGroups.value = openGroups.value.filter((group) => group !== child.title);
      });
    };
    watch(
      () => route.path,
      () => {
        const isActive = isNavGroupActive(props.item.children);
        isGroupOpen.value = isActive && !configStore.isVerticalNavMini(isVerticalNavHovered).value;
        isGroupActive.value = isActive;
      },
      { immediate: true }
    );
    watch(isGroupOpen, (val) => {
      const grpIndex = openGroups.value.indexOf(props.item.title);
      if (val && grpIndex === -1) {
        openGroups.value.push(props.item.title);
      } else if (!val && grpIndex !== -1) {
        openGroups.value.splice(grpIndex, 1);
        collapseChildren(props.item.children);
      }
    }, { immediate: true });
    watch(openGroups, (val) => {
      const lastOpenedGroup = val.at(-1);
      if (lastOpenedGroup === props.item.title)
        return;
      const isActive = isNavGroupActive(props.item.children);
      if (isActive)
        return;
      if (isAnyChildOpen(props.item.children))
        return;
      isGroupOpen.value = isActive;
      isGroupActive.value = isActive;
    }, { deep: true });
    watch(
      configStore.isVerticalNavMini(isVerticalNavHovered),
      (val) => {
        isGroupOpen.value = val ? false : isGroupActive.value;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(canViewNavMenuGroup)(_ctx.item)) {
        _push(`<li${ssrRenderAttrs(mergeProps({
          class: ["nav-group", [
            {
              active: unref(isGroupActive),
              open: unref(isGroupOpen),
              disabled: _ctx.item.disable
            }
          ]]
        }, _attrs))}><div class="nav-group-label">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(layoutConfig).app.iconRenderer || "div"), mergeProps(_ctx.item.icon || unref(layoutConfig).verticalNav.defaultNavItemIconProps, { class: "nav-item-icon" }), null), _parent);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(TransitionGroup), { name: "transition-slide-x" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig).app.i18n.enable ? "i18n-t" : "span"), mergeProps(unref(getDynamicI18nProps)(_ctx.item.title, "span"), {
                style: !unref(hideTitleAndBadge) ? null : { display: "none" },
                key: "title",
                class: "nav-item-title"
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.item.title), 1)
                    ];
                  }
                }),
                _: 1
              }), _parent2, _scopeId);
              if (_ctx.item.badgeContent) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig).app.i18n.enable ? "i18n-t" : "span"), mergeProps(unref(getDynamicI18nProps)(_ctx.item.badgeContent, "span"), {
                  style: !unref(hideTitleAndBadge) ? null : { display: "none" },
                  key: "badge",
                  class: ["nav-item-badge", _ctx.item.badgeClass]
                }), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.item.badgeContent)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.item.badgeContent), 1)
                      ];
                    }
                  }),
                  _: 1
                }), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig).app.iconRenderer || "div"), mergeProps({
                style: !unref(hideTitleAndBadge) ? null : { display: "none" }
              }, unref(layoutConfig).icons.chevronRight, {
                key: "arrow",
                class: "nav-group-arrow"
              }), null), _parent2, _scopeId);
            } else {
              return [
                withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig).app.i18n.enable ? "i18n-t" : "span"), mergeProps(unref(getDynamicI18nProps)(_ctx.item.title, "span"), {
                  key: "title",
                  class: "nav-item-title"
                }), {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.item.title), 1)
                  ]),
                  _: 1
                }, 16)), [
                  [vShow, !unref(hideTitleAndBadge)]
                ]),
                _ctx.item.badgeContent ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig).app.i18n.enable ? "i18n-t" : "span"), mergeProps({ key: 0 }, unref(getDynamicI18nProps)(_ctx.item.badgeContent, "span"), {
                  key: "badge",
                  class: ["nav-item-badge", _ctx.item.badgeClass]
                }), {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.item.badgeContent), 1)
                  ]),
                  _: 1
                }, 16, ["class"])), [
                  [vShow, !unref(hideTitleAndBadge)]
                ]) : createCommentVNode("", true),
                withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig).app.iconRenderer || "div"), mergeProps(unref(layoutConfig).icons.chevronRight, {
                  key: "arrow",
                  class: "nav-group-arrow"
                }), null, 16)), [
                  [vShow, !unref(hideTitleAndBadge)]
                ])
              ];
            }
          }),
          _: 1
        }), _parent);
        _push(`</div>`);
        _push(ssrRenderComponent(unref(TransitionExpand), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${ssrRenderStyle(unref(isGroupOpen) ? null : { display: "none" })}" class="nav-group-children"${_scopeId}><!--[-->`);
              ssrRenderList(_ctx.item.children, (child) => {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent("children" in child ? "VerticalNavGroup" : unref(_sfc_main$2)), {
                  key: child.title,
                  item: child
                }, null), _parent2, _scopeId);
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                withDirectives(createVNode("ul", { class: "nav-group-children" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.item.children, (child) => {
                    return openBlock(), createBlock(resolveDynamicComponent("children" in child ? "VerticalNavGroup" : unref(_sfc_main$2)), {
                      key: child.title,
                      item: child
                    }, null, 8, ["item"]);
                  }), 128))
                ], 512), [
                  [vShow, unref(isGroupOpen)]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNavGroup.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VerticalNavLayout",
  __ssrInlineRender: true,
  props: {
    navItems: {},
    bottomNavItems: {},
    verticalNavAttrs: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const { width: windowWidth } = useWindowSize();
    const configStore = useLayoutConfigStore();
    const isOverlayNavActive = ref(false);
    const isLayoutOverlayVisible = ref(false);
    const toggleIsOverlayNavActive = useToggle(isOverlayNavActive);
    syncRef(isOverlayNavActive, isLayoutOverlayVisible);
    watch(windowWidth, () => {
      if (!configStore.isLessThanOverlayNavBreakpoint && isLayoutOverlayVisible.value)
        isLayoutOverlayVisible.value = false;
    });
    const verticalNavAttrs = computed(() => {
      const vNavAttrs = toRef(props, "verticalNavAttrs");
      const { wrapper: verticalNavWrapper, wrapperProps: verticalNavWrapperProps, ...additionalVerticalNavAttrs } = vNavAttrs.value;
      return {
        verticalNavWrapper,
        verticalNavWrapperProps,
        additionalVerticalNavAttrs
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["layout-wrapper", unref(configStore)._layoutClasses]
      }, _attrs))}>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(verticalNavAttrs).verticalNavWrapper ? unref(verticalNavAttrs).verticalNavWrapper : "div"), mergeProps(unref(verticalNavAttrs).verticalNavWrapperProps, { class: "vertical-nav-wrapper" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VerticalNav), mergeProps({
              "is-overlay-nav-active": unref(isOverlayNavActive),
              "toggle-is-overlay-nav-active": unref(toggleIsOverlayNavActive),
              "nav-items": props.navItems,
              "bottom-nav-items": props.bottomNavItems
            }, { ...unref(verticalNavAttrs).additionalVerticalNavAttrs }), {
              "nav-header": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "vertical-nav-header", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "vertical-nav-header")
                  ];
                }
              }),
              "before-nav-items": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "before-vertical-nav-items", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "before-vertical-nav-items")
                  ];
                }
              }),
              "after-nav-items": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "after-vertical-nav-items", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "after-vertical-nav-items")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VerticalNav), mergeProps({
                "is-overlay-nav-active": unref(isOverlayNavActive),
                "toggle-is-overlay-nav-active": unref(toggleIsOverlayNavActive),
                "nav-items": props.navItems,
                "bottom-nav-items": props.bottomNavItems
              }, { ...unref(verticalNavAttrs).additionalVerticalNavAttrs }), {
                "nav-header": withCtx(() => [
                  renderSlot(_ctx.$slots, "vertical-nav-header")
                ]),
                "before-nav-items": withCtx(() => [
                  renderSlot(_ctx.$slots, "before-vertical-nav-items")
                ]),
                "after-nav-items": withCtx(() => [
                  renderSlot(_ctx.$slots, "after-vertical-nav-items")
                ]),
                _: 3
              }, 16, ["is-overlay-nav-active", "toggle-is-overlay-nav-active", "nav-items", "bottom-nav-items"])
            ];
          }
        }),
        _: 3
      }), _parent);
      _push(`<div class="layout-content-wrapper"><header class="${ssrRenderClass([[{ "navbar-blur": unref(configStore).isNavbarBlurEnabled }], "layout-navbar"])}"><div class="navbar-content-container">`);
      ssrRenderSlot(_ctx.$slots, "navbar", { toggleVerticalOverlayNavActive: unref(toggleIsOverlayNavActive) }, null, _push, _parent);
      _push(`</div></header><main class="layout-page-content"><div class="page-content-container">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main><footer class="layout-footer"><div class="footer-content-container">`);
      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      _push(`</div></footer></div><div class="${ssrRenderClass([[{ visible: unref(isLayoutOverlayVisible) }], "layout-overlay"])}"></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNavLayout.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VerticalNavLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const configStore = useLayoutConfigStore();
    const hideTitleAndBadge = configStore.isVerticalNavMini();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(can)(_ctx.item.action, _ctx.item.subject)) {
        _push(`<li${ssrRenderAttrs(mergeProps({
          class: ["nav-link", { disabled: _ctx.item.disable }]
        }, _attrs))}>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.item.to ? unref(__nuxt_component_0) : "a"), mergeProps(unref(getComputedNavLinkToProp)(_ctx.item), {
          class: { "router-link-active router-link-exact-active": unref(isNavLinkActive)(_ctx.item, _ctx.$router) }
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig).app.iconRenderer || "div"), mergeProps(_ctx.item.icon || unref(layoutConfig).verticalNav.defaultNavItemIconProps, { class: "nav-item-icon" }), null), _parent2, _scopeId);
              _push2(`<!--[-->`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig).app.i18n.enable ? "i18n-t" : "span"), mergeProps({
                style: !unref(hideTitleAndBadge) ? null : { display: "none" },
                key: "title",
                class: "nav-item-title"
              }, unref(getDynamicI18nProps)(_ctx.item.title, "span")), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.item.title), 1)
                    ];
                  }
                }),
                _: 1
              }), _parent2, _scopeId);
              if (_ctx.item.badgeContent) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(layoutConfig).app.i18n.enable ? "i18n-t" : "span"), mergeProps({
                  style: !unref(hideTitleAndBadge) ? null : { display: "none" },
                  key: "badge",
                  class: ["nav-item-badge", _ctx.item.badgeClass]
                }, unref(getDynamicI18nProps)(_ctx.item.badgeContent, "span")), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.item.badgeContent)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.item.badgeContent), 1)
                      ];
                    }
                  }),
                  _: 1
                }), _parent2, _scopeId);
              }
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig).app.iconRenderer || "div"), mergeProps(_ctx.item.icon || unref(layoutConfig).verticalNav.defaultNavItemIconProps, { class: "nav-item-icon" }), null, 16)),
                createVNode(TransitionGroup, { name: "transition-slide-x" }, {
                  default: withCtx(() => [
                    withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig).app.i18n.enable ? "i18n-t" : "span"), mergeProps({
                      key: "title",
                      class: "nav-item-title"
                    }, unref(getDynamicI18nProps)(_ctx.item.title, "span")), {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.item.title), 1)
                      ]),
                      _: 1
                    }, 16)), [
                      [vShow, !unref(hideTitleAndBadge)]
                    ]),
                    _ctx.item.badgeContent ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(layoutConfig).app.i18n.enable ? "i18n-t" : "span"), mergeProps({
                      key: "badge",
                      class: ["nav-item-badge", _ctx.item.badgeClass]
                    }, unref(getDynamicI18nProps)(_ctx.item.badgeContent, "span")), {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.item.badgeContent), 1)
                      ]),
                      _: 1
                    }, 16, ["class"])), [
                      [vShow, !unref(hideTitleAndBadge)]
                    ]) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }), _parent);
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNavLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VerticalNavSectionTitle",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const configStore = useLayoutConfigStore();
    const shallRenderIcon = configStore.isVerticalNavMini();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(can)(_ctx.item.action, _ctx.item.subject)) {
        _push(`<li${ssrRenderAttrs(mergeProps({ class: "nav-section-title" }, _attrs))}><div class="title-wrapper">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(shallRenderIcon) ? unref(layoutConfig).app.iconRenderer : unref(layoutConfig).app.i18n.enable ? "i18n-t" : "span"), mergeProps({
          key: unref(shallRenderIcon),
          class: unref(shallRenderIcon) ? "placeholder-icon" : "title-text"
        }, { ...unref(layoutConfig).icons.sectionTitlePlaceholder, ...unref(getDynamicI18nProps)(_ctx.item.heading, "span") }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(!unref(shallRenderIcon) ? _ctx.item.heading : null)}`);
            } else {
              return [
                createTextVNode(toDisplayString(!unref(shallRenderIcon) ? _ctx.item.heading : null), 1)
              ];
            }
          }),
          _: 1
        }), _parent);
        _push(`</div></li>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNavSectionTitle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const mainNavItems = [
  {
    title: "Dashboards",
    to: { name: "dashboard-teacher" },
    icon: { icon: "ri-home-smile-line" }
  },
  {
    heading: "DAILY"
  },
  {
    title: "Attendance",
    to: { name: "attendance" },
    icon: { icon: "ri-calendar-check-line" }
  },
  {
    title: "Schedule",
    to: { name: "schedule" },
    icon: { icon: "ri-calendar-2-line" }
  },
  {
    title: "Assessments",
    to: { name: "assessments" },
    icon: { icon: "ri-todo-line" }
  },
  {
    title: "Reports",
    to: { name: "reports" },
    icon: { icon: "ri-file-text-line" }
  },
  {
    heading: "RECORDS"
  },
  {
    title: "Classes",
    to: { name: "classes" },
    icon: { icon: "ri-door-closed-line" }
  },
  {
    title: "Students",
    to: { name: "students" },
    icon: { icon: "ri-group-line" }
  },
  {
    title: "Course",
    to: { name: "course" },
    icon: { icon: "ri-calendar-event-line" }
  },
  {
    title: "Event",
    to: { name: "event" },
    icon: { icon: "ri-lightbulb-flash-line" }
  },
  {
    heading: "DESIGN"
  },
  {
    title: "Design System",
    to: { name: "design-system" },
    icon: { icon: "ri-palette-line" }
  }
];
const bottomNavItems = [
  {
    title: "My Attendance",
    to: { name: "my-attendance" },
    icon: { icon: "ri-task-line" }
  },
  {
    title: "Account",
    to: { name: "account" },
    icon: { icon: "ri-user-line" }
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DefaultLayoutWithVerticalNav",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(unref(_sfc_main$3), mergeProps({
        "nav-items": unref(mainNavItems),
        "bottom-nav-items": unref(bottomNavItems)
      }, _attrs), {
        navbar: withCtx(({ toggleVerticalOverlayNavActive }, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="d-flex h-100 align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconBtn, {
              id: "vertical-nav-toggle-btn",
              class: "ms-n2 d-lg-none",
              onClick: ($event) => toggleVerticalOverlayNavActive(true)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "ri-menu-line" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: "ri-menu-line" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            if (unref(themeConfig).app.i18n.enable && ((_a = unref(themeConfig).app.i18n.langConfig) == null ? void 0 : _a.length)) {
              _push2(ssrRenderComponent(_sfc_main$7, {
                languages: unref(themeConfig).app.i18n.langConfig
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$8, { class: "me-2" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$9, { class: "me-2" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex h-100 align-center" }, [
                createVNode(_component_IconBtn, {
                  id: "vertical-nav-toggle-btn",
                  class: "ms-n2 d-lg-none",
                  onClick: ($event) => toggleVerticalOverlayNavActive(true)
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { icon: "ri-menu-line" })
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                createVNode(VSpacer),
                unref(themeConfig).app.i18n.enable && ((_b = unref(themeConfig).app.i18n.langConfig) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_sfc_main$7, {
                  key: 0,
                  languages: unref(themeConfig).app.i18n.langConfig
                }, null, 8, ["languages"])) : createCommentVNode("", true),
                createVNode(_sfc_main$8, { class: "me-2" }),
                createVNode(_sfc_main$9, { class: "me-2" }),
                createVNode(_sfc_main$a)
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) ;
          else {
            return [];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/DefaultLayoutWithVerticalNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
