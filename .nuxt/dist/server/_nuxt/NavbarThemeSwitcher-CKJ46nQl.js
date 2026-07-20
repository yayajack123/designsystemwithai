import { defineComponent, ref, watch, resolveComponent, withCtx, unref, createVNode, toDisplayString, isRef, createTextVNode, createBlock, openBlock, Fragment, renderList, useSSRContext, mergeProps } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { b3 as useConfigStore, a as VIcon } from "../server.mjs";
import { V as VTooltip } from "./VTooltip-vXFYhuMk.js";
import { V as VMenu } from "./VMenu-C4ct7Xz7.js";
import { V as VList, a as VListItem, b as VListItemTitle } from "./VList-BNtS0p6J.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/hookable/dist/index.mjs";
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
import "./VOverlay-gAZb14KV.js";
import "./forwardRefs-Oip3fNRq.js";
import "./VAvatar-B478BWXT.js";
import "./dialog-transition-CDwwEBKm.js";
import "./index-CSomYp-Z.js";
import "./VDivider-Cdypedjq.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ThemeSwitcher",
  __ssrInlineRender: true,
  props: {
    themes: {}
  },
  setup(__props) {
    const props = __props;
    const configStore = useConfigStore();
    const selectedItem = ref([configStore.theme]);
    watch(
      () => configStore.theme,
      () => {
        selectedItem.value = [configStore.theme];
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(_component_IconBtn, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              icon: (_a = props.themes.find((t) => t.name === unref(configStore).theme)) == null ? void 0 : _a.icon
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTooltip, {
              activator: "parent",
              "open-delay": "1000",
              "scroll-strategy": "close"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-capitalize"${_scopeId2}>${ssrInterpolate(unref(configStore).theme)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-capitalize" }, toDisplayString(unref(configStore).theme), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMenu, {
              activator: "parent",
              offset: "15px",
              width: "160"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, {
                    selected: unref(selectedItem),
                    "onUpdate:selected": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    mandatory: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(props.themes, ({ name, icon }) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: name,
                            value: name,
                            "prepend-icon": icon,
                            color: "primary",
                            onClick: () => {
                              unref(configStore).theme = name;
                            }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, { class: "text-capitalize" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, { class: "text-capitalize" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(name), 1)
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
                          (openBlock(true), createBlock(Fragment, null, renderList(props.themes, ({ name, icon }) => {
                            return openBlock(), createBlock(VListItem, {
                              key: name,
                              value: name,
                              "prepend-icon": icon,
                              color: "primary",
                              onClick: () => {
                                unref(configStore).theme = name;
                              }
                            }, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "text-capitalize" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(name), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["value", "prepend-icon", "onClick"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, {
                      selected: unref(selectedItem),
                      "onUpdate:selected": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                      mandatory: ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.themes, ({ name, icon }) => {
                          return openBlock(), createBlock(VListItem, {
                            key: name,
                            value: name,
                            "prepend-icon": icon,
                            color: "primary",
                            onClick: () => {
                              unref(configStore).theme = name;
                            }
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "text-capitalize" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(name), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["value", "prepend-icon", "onClick"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["selected", "onUpdate:selected"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                icon: (_b = props.themes.find((t) => t.name === unref(configStore).theme)) == null ? void 0 : _b.icon
              }, null, 8, ["icon"]),
              createVNode(VTooltip, {
                activator: "parent",
                "open-delay": "1000",
                "scroll-strategy": "close"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "text-capitalize" }, toDisplayString(unref(configStore).theme), 1)
                ]),
                _: 1
              }),
              createVNode(VMenu, {
                activator: "parent",
                offset: "15px",
                width: "160"
              }, {
                default: withCtx(() => [
                  createVNode(VList, {
                    selected: unref(selectedItem),
                    "onUpdate:selected": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    mandatory: ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.themes, ({ name, icon }) => {
                        return openBlock(), createBlock(VListItem, {
                          key: name,
                          value: name,
                          "prepend-icon": icon,
                          color: "primary",
                          onClick: () => {
                            unref(configStore).theme = name;
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "text-capitalize" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(name), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["value", "prepend-icon", "onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["selected", "onUpdate:selected"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@core/components/ThemeSwitcher.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NavbarThemeSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const themes = [
      {
        name: "system",
        icon: "ri-macbook-line"
      },
      {
        name: "light",
        icon: "ri-sun-line"
      },
      {
        name: "dark",
        icon: "ri-moon-clear-line"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ThemeSwitcher = _sfc_main$1;
      _push(ssrRenderComponent(_component_ThemeSwitcher, mergeProps({ themes }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/NavbarThemeSwitcher.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
