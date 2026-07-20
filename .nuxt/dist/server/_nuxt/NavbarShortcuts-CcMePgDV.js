import { defineComponent, resolveComponent, withCtx, createVNode, createTextVNode, unref, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext, mergeProps } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { c as useRouter, a as VIcon } from "../server.mjs";
import { V as VMenu } from "./VMenu-C4ct7Xz7.js";
import { V as VCard, c as VCardItem } from "./VCard-B42eN0YV.js";
import { V as VTooltip } from "./VTooltip-vXFYhuMk.js";
import { V as VDivider } from "./VDivider-Cdypedjq.js";
import { V as VRow, a as VCol } from "./VRow-BRD4hy0P.js";
import { V as VAvatar } from "./VAvatar-B478BWXT.js";
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
import "./dialog-transition-CDwwEBKm.js";
import "./VCardText-CaXtzNxg.js";
/* empty css               */
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Shortcuts",
  __ssrInlineRender: true,
  props: {
    togglerIcon: { default: "ri-star-smile-line" },
    shortcuts: {}
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(_component_IconBtn, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              icon: props.togglerIcon
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMenu, {
              activator: "parent",
              offset: "15px",
              location: "bottom end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    "max-width": "380",
                    "max-height": "560",
                    class: "d-flex flex-column"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "px-4 py-2" }, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_IconBtn, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "ri-add-line",
                                      color: "high-emphasis"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTooltip, {
                                      activator: "parent",
                                      location: "start"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Add Shortcut `);
                                        } else {
                                          return [
                                            createTextVNode(" Add Shortcut ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        icon: "ri-add-line",
                                        color: "high-emphasis"
                                      }),
                                      createVNode(VTooltip, {
                                        activator: "parent",
                                        location: "start"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Add Shortcut ")
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
                                createVNode(_component_IconBtn, null, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-add-line",
                                      color: "high-emphasis"
                                    }),
                                    createVNode(VTooltip, {
                                      activator: "parent",
                                      location: "start"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Add Shortcut ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h5 class="text-h5"${_scopeId4}> Shortcuts </h5>`);
                            } else {
                              return [
                                createVNode("h5", { class: "text-h5" }, " Shortcuts ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, { class: "ma-0 mt-n1" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(props.shortcuts, (shortcut, index) => {
                                      _push6(ssrRenderComponent(VCol, {
                                        key: shortcut.title,
                                        cols: "6",
                                        class: ["text-center border-t cursor-pointer pa-6 shortcut-icon", (index + 1) % 2 ? "border-e" : ""],
                                        onClick: ($event) => unref(router).push(shortcut.to)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VAvatar, {
                                              variant: "tonal",
                                              size: "50"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    color: "high-emphasis",
                                                    size: "26",
                                                    icon: shortcut.icon
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VIcon, {
                                                      color: "high-emphasis",
                                                      size: "26",
                                                      icon: shortcut.icon
                                                    }, null, 8, ["icon"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<h6 class="text-h6 mt-3"${_scopeId6}>${ssrInterpolate(shortcut.title)}</h6><p class="text-sm text-medium-emphasis mb-0"${_scopeId6}>${ssrInterpolate(shortcut.subtitle)}</p>`);
                                          } else {
                                            return [
                                              createVNode(VAvatar, {
                                                variant: "tonal",
                                                size: "50"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    color: "high-emphasis",
                                                    size: "26",
                                                    icon: shortcut.icon
                                                  }, null, 8, ["icon"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode("h6", { class: "text-h6 mt-3" }, toDisplayString(shortcut.title), 1),
                                              createVNode("p", { class: "text-sm text-medium-emphasis mb-0" }, toDisplayString(shortcut.subtitle), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(props.shortcuts, (shortcut, index) => {
                                        return openBlock(), createBlock(VCol, {
                                          key: shortcut.title,
                                          cols: "6",
                                          class: ["text-center border-t cursor-pointer pa-6 shortcut-icon", (index + 1) % 2 ? "border-e" : ""],
                                          onClick: ($event) => unref(router).push(shortcut.to)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VAvatar, {
                                              variant: "tonal",
                                              size: "50"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  color: "high-emphasis",
                                                  size: "26",
                                                  icon: shortcut.icon
                                                }, null, 8, ["icon"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode("h6", { class: "text-h6 mt-3" }, toDisplayString(shortcut.title), 1),
                                            createVNode("p", { class: "text-sm text-medium-emphasis mb-0" }, toDisplayString(shortcut.subtitle), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class", "onClick"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, { class: "ma-0 mt-n1" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(props.shortcuts, (shortcut, index) => {
                                      return openBlock(), createBlock(VCol, {
                                        key: shortcut.title,
                                        cols: "6",
                                        class: ["text-center border-t cursor-pointer pa-6 shortcut-icon", (index + 1) % 2 ? "border-e" : ""],
                                        onClick: ($event) => unref(router).push(shortcut.to)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VAvatar, {
                                            variant: "tonal",
                                            size: "50"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                color: "high-emphasis",
                                                size: "26",
                                                icon: shortcut.icon
                                              }, null, 8, ["icon"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode("h6", { class: "text-h6 mt-3" }, toDisplayString(shortcut.title), 1),
                                          createVNode("p", { class: "text-sm text-medium-emphasis mb-0" }, toDisplayString(shortcut.subtitle), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["class", "onClick"]);
                                    }), 128))
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
                          createVNode(VCardItem, { class: "px-4 py-2" }, {
                            append: withCtx(() => [
                              createVNode(_component_IconBtn, null, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "ri-add-line",
                                    color: "high-emphasis"
                                  }),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "start"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Add Shortcut ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode("h5", { class: "text-h5" }, " Shortcuts ")
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                            default: withCtx(() => [
                              createVNode(VRow, { class: "ma-0 mt-n1" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(props.shortcuts, (shortcut, index) => {
                                    return openBlock(), createBlock(VCol, {
                                      key: shortcut.title,
                                      cols: "6",
                                      class: ["text-center border-t cursor-pointer pa-6 shortcut-icon", (index + 1) % 2 ? "border-e" : ""],
                                      onClick: ($event) => unref(router).push(shortcut.to)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VAvatar, {
                                          variant: "tonal",
                                          size: "50"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              color: "high-emphasis",
                                              size: "26",
                                              icon: shortcut.icon
                                            }, null, 8, ["icon"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("h6", { class: "text-h6 mt-3" }, toDisplayString(shortcut.title), 1),
                                        createVNode("p", { class: "text-sm text-medium-emphasis mb-0" }, toDisplayString(shortcut.subtitle), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class", "onClick"]);
                                  }), 128))
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
                    createVNode(VCard, {
                      "max-width": "380",
                      "max-height": "560",
                      class: "d-flex flex-column"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "px-4 py-2" }, {
                          append: withCtx(() => [
                            createVNode(_component_IconBtn, null, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-add-line",
                                  color: "high-emphasis"
                                }),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "start"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Add Shortcut ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode("h5", { class: "text-h5" }, " Shortcuts ")
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                          default: withCtx(() => [
                            createVNode(VRow, { class: "ma-0 mt-n1" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(props.shortcuts, (shortcut, index) => {
                                  return openBlock(), createBlock(VCol, {
                                    key: shortcut.title,
                                    cols: "6",
                                    class: ["text-center border-t cursor-pointer pa-6 shortcut-icon", (index + 1) % 2 ? "border-e" : ""],
                                    onClick: ($event) => unref(router).push(shortcut.to)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VAvatar, {
                                        variant: "tonal",
                                        size: "50"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            color: "high-emphasis",
                                            size: "26",
                                            icon: shortcut.icon
                                          }, null, 8, ["icon"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("h6", { class: "text-h6 mt-3" }, toDisplayString(shortcut.title), 1),
                                      createVNode("p", { class: "text-sm text-medium-emphasis mb-0" }, toDisplayString(shortcut.subtitle), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "onClick"]);
                                }), 128))
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
              createVNode(VIcon, {
                icon: props.togglerIcon
              }, null, 8, ["icon"]),
              createVNode(VMenu, {
                activator: "parent",
                offset: "15px",
                location: "bottom end"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    "max-width": "380",
                    "max-height": "560",
                    class: "d-flex flex-column"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "px-4 py-2" }, {
                        append: withCtx(() => [
                          createVNode(_component_IconBtn, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-add-line",
                                color: "high-emphasis"
                              }),
                              createVNode(VTooltip, {
                                activator: "parent",
                                location: "start"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Add Shortcut ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode("h5", { class: "text-h5" }, " Shortcuts ")
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                        default: withCtx(() => [
                          createVNode(VRow, { class: "ma-0 mt-n1" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(props.shortcuts, (shortcut, index) => {
                                return openBlock(), createBlock(VCol, {
                                  key: shortcut.title,
                                  cols: "6",
                                  class: ["text-center border-t cursor-pointer pa-6 shortcut-icon", (index + 1) % 2 ? "border-e" : ""],
                                  onClick: ($event) => unref(router).push(shortcut.to)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VAvatar, {
                                      variant: "tonal",
                                      size: "50"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          color: "high-emphasis",
                                          size: "26",
                                          icon: shortcut.icon
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("h6", { class: "text-h6 mt-3" }, toDisplayString(shortcut.title), 1),
                                    createVNode("p", { class: "text-sm text-medium-emphasis mb-0" }, toDisplayString(shortcut.subtitle), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class", "onClick"]);
                              }), 128))
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@core/components/Shortcuts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NavbarShortcuts",
  __ssrInlineRender: true,
  setup(__props) {
    const shortcuts = [
      {
        icon: "ri-calendar-line",
        title: "Calendar",
        subtitle: "Appointments",
        to: { name: "apps-calendar" }
      },
      {
        icon: "ri-file-list-3-line",
        title: "Invoice App",
        subtitle: "Manage Accounts",
        to: { name: "apps-invoice-list" }
      },
      {
        icon: "ri-user-line",
        title: "Users",
        subtitle: "Manage Users",
        to: { name: "apps-user-list" }
      },
      {
        icon: "ri-computer-line",
        title: "Role Management",
        subtitle: "Permission",
        to: { name: "apps-roles" }
      },
      {
        icon: "ri-pie-chart-2-line",
        title: "Dashboard",
        subtitle: "Dashboard Analytics",
        to: { name: "dashboards-analytics" }
      },
      {
        icon: "ri-settings-4-line",
        title: "Settings",
        subtitle: "Account Settings",
        to: { name: "pages-account-settings-tab", params: { tab: "account" } }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Shortcuts = _sfc_main$1;
      _push(ssrRenderComponent(_component_Shortcuts, mergeProps({ shortcuts }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/NavbarShortcuts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
