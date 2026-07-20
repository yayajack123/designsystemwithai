import { createVNode, defineComponent, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createSlots, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { m as genericComponent, o as propsFactory, F as useRender, I as makeTagProps, N as makeComponentProps, aU as useAuthStore, u as useNuxtApp, c as useRouter, bj as useCookie, a as VIcon, V as VBtn, n as navigateTo } from "../server.mjs";
import { V as VBadge } from "./VBadge-BFSq1eZl.js";
import { V as VAvatar, a as VImg } from "./VAvatar-B478BWXT.js";
import { V as VMenu } from "./VMenu-C4ct7Xz7.js";
import { V as VList, a as VListItem, d as VListItemSubtitle, b as VListItemTitle } from "./VList-BNtS0p6J.js";
import { V as VDivider } from "./VDivider-Cdypedjq.js";
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
import "./index-CSomYp-Z.js";
const makeVListItemActionProps = propsFactory({
  start: Boolean,
  end: Boolean,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VListItemAction");
const VListItemAction = genericComponent()({
  name: "VListItemAction",
  props: makeVListItemActionProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(props.tag, {
      "class": ["v-list-item-action", {
        "v-list-item-action--start": props.start,
        "v-list-item-action--end": props.end
      }, props.class],
      "style": props.style
    }, slots));
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserProfile",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const { $api } = useNuxtApp();
    const userProfileList = [
      { type: "divider" },
      {
        type: "navItem",
        icon: "ri-user-line",
        title: "Profile",
        value: "/account-settings"
      },
      { type: "divider" }
    ];
    useRouter();
    const XSRF_TOKEN = useCookie("XSRF-TOKEN");
    const logout = async () => {
      await $api.auth.logout();
      authStore.user = null;
      XSRF_TOKEN.value = null;
      navigateTo({ name: "login" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(authStore).user) {
        _push(ssrRenderComponent(VBadge, mergeProps({
          dot: "",
          bordered: "",
          location: "bottom right",
          "offset-x": "3",
          "offset-y": "3",
          color: "success"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VAvatar, {
                class: "cursor-pointer",
                size: "38"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VImg, {
                      src: unref(authStore).user.photo
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VMenu, {
                      activator: "parent",
                      width: "230",
                      location: "bottom end",
                      offset: "15px"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VList, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItem, null, {
                                  prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemAction, { start: "" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VBadge, {
                                              dot: "",
                                              location: "bottom right",
                                              "offset-x": "3",
                                              "offset-y": "3",
                                              color: "success"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VAvatar, {
                                                    color: "primary",
                                                    variant: "tonal"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VImg, {
                                                          src: unref(authStore).user.photo
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VImg, {
                                                            src: unref(authStore).user.photo
                                                          }, null, 8, ["src"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VAvatar, {
                                                      color: "primary",
                                                      variant: "tonal"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VImg, {
                                                          src: unref(authStore).user.photo
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VBadge, {
                                                dot: "",
                                                location: "bottom right",
                                                "offset-x": "3",
                                                "offset-y": "3",
                                                color: "success"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VAvatar, {
                                                    color: "primary",
                                                    variant: "tonal"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VImg, {
                                                        src: unref(authStore).user.photo
                                                      }, null, 8, ["src"])
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
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemAction, { start: "" }, {
                                          default: withCtx(() => [
                                            createVNode(VBadge, {
                                              dot: "",
                                              location: "bottom right",
                                              "offset-x": "3",
                                              "offset-y": "3",
                                              color: "success"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VAvatar, {
                                                  color: "primary",
                                                  variant: "tonal"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VImg, {
                                                      src: unref(authStore).user.photo
                                                    }, null, 8, ["src"])
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
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<h6 class="text-sm font-weight-medium"${_scopeId5}>${ssrInterpolate(unref(authStore).user.name)}</h6>`);
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-capitalize text-disabled" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(authStore).user.role)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(authStore).user.role), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode("h6", { class: "text-sm font-weight-medium" }, toDisplayString(unref(authStore).user.name), 1),
                                        createVNode(VListItemSubtitle, { class: "text-capitalize text-disabled" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(authStore).user.role), 1)
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(userProfileList, (item) => {
                                        _push6(`<!--[-->`);
                                        if (item.type === "navItem") {
                                          _push6(ssrRenderComponent(VListItem, {
                                            value: item.value,
                                            to: item.value
                                          }, createSlots({
                                            prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(VIcon, {
                                                  icon: item.icon,
                                                  size: "22"
                                                }, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(VIcon, {
                                                    icon: item.icon,
                                                    size: "22"
                                                  }, null, 8, ["icon"])
                                                ];
                                              }
                                            }),
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(VListItemTitle, null, {
                                                  default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(`${ssrInterpolate(item.title)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(item.title), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, [
                                            item.badgeProps ? {
                                              name: "append",
                                              fn: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(VBadge, mergeProps({
                                                    inline: "",
                                                    ref_for: true
                                                  }, item.badgeProps), null, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(VBadge, mergeProps({
                                                      inline: "",
                                                      ref_for: true
                                                    }, item.badgeProps), null, 16)
                                                  ];
                                                }
                                              }),
                                              key: "0"
                                            } : void 0
                                          ]), _parent6, _scopeId5));
                                        } else {
                                          _push6(ssrRenderComponent(VDivider, { class: "my-1" }, null, _parent6, _scopeId5));
                                        }
                                        _push6(`<!--]-->`);
                                      });
                                      _push6(`<!--]-->`);
                                      _push6(ssrRenderComponent(VListItem, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VBtn, {
                                              block: "",
                                              color: "error",
                                              "append-icon": "ri-logout-box-r-line",
                                              onClick: logout
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Logout `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Logout ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VBtn, {
                                                block: "",
                                                color: "error",
                                                "append-icon": "ri-logout-box-r-line",
                                                onClick: logout
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Logout ")
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
                                        (openBlock(), createBlock(Fragment, null, renderList(userProfileList, (item) => {
                                          return openBlock(), createBlock(Fragment, {
                                            key: item.title
                                          }, [
                                            item.type === "navItem" ? (openBlock(), createBlock(VListItem, {
                                              key: 0,
                                              value: item.value,
                                              to: item.value
                                            }, createSlots({
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: item.icon,
                                                  size: "22"
                                                }, null, 8, ["icon"])
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, [
                                              item.badgeProps ? {
                                                name: "append",
                                                fn: withCtx(() => [
                                                  createVNode(VBadge, mergeProps({
                                                    inline: "",
                                                    ref_for: true
                                                  }, item.badgeProps), null, 16)
                                                ]),
                                                key: "0"
                                              } : void 0
                                            ]), 1032, ["value", "to"])) : (openBlock(), createBlock(VDivider, {
                                              key: 1,
                                              class: "my-1"
                                            }))
                                          ], 64);
                                        }), 64)),
                                        createVNode(VListItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              block: "",
                                              color: "error",
                                              "append-icon": "ri-logout-box-r-line",
                                              onClick: logout
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Logout ")
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
                                  createVNode(VListItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VListItemAction, { start: "" }, {
                                        default: withCtx(() => [
                                          createVNode(VBadge, {
                                            dot: "",
                                            location: "bottom right",
                                            "offset-x": "3",
                                            "offset-y": "3",
                                            color: "success"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VAvatar, {
                                                color: "primary",
                                                variant: "tonal"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: unref(authStore).user.photo
                                                  }, null, 8, ["src"])
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
                                    default: withCtx(() => [
                                      createVNode("h6", { class: "text-sm font-weight-medium" }, toDisplayString(unref(authStore).user.name), 1),
                                      createVNode(VListItemSubtitle, { class: "text-capitalize text-disabled" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(authStore).user.role), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(userProfileList, (item) => {
                                        return openBlock(), createBlock(Fragment, {
                                          key: item.title
                                        }, [
                                          item.type === "navItem" ? (openBlock(), createBlock(VListItem, {
                                            key: 0,
                                            value: item.value,
                                            to: item.value
                                          }, createSlots({
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: item.icon,
                                                size: "22"
                                              }, null, 8, ["icon"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, [
                                            item.badgeProps ? {
                                              name: "append",
                                              fn: withCtx(() => [
                                                createVNode(VBadge, mergeProps({
                                                  inline: "",
                                                  ref_for: true
                                                }, item.badgeProps), null, 16)
                                              ]),
                                              key: "0"
                                            } : void 0
                                          ]), 1032, ["value", "to"])) : (openBlock(), createBlock(VDivider, {
                                            key: 1,
                                            class: "my-1"
                                          }))
                                        ], 64);
                                      }), 64)),
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            block: "",
                                            color: "error",
                                            "append-icon": "ri-logout-box-r-line",
                                            onClick: logout
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Logout ")
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
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                createVNode(VListItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VListItemAction, { start: "" }, {
                                      default: withCtx(() => [
                                        createVNode(VBadge, {
                                          dot: "",
                                          location: "bottom right",
                                          "offset-x": "3",
                                          "offset-y": "3",
                                          color: "success"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VAvatar, {
                                              color: "primary",
                                              variant: "tonal"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: unref(authStore).user.photo
                                                }, null, 8, ["src"])
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
                                  default: withCtx(() => [
                                    createVNode("h6", { class: "text-sm font-weight-medium" }, toDisplayString(unref(authStore).user.name), 1),
                                    createVNode(VListItemSubtitle, { class: "text-capitalize text-disabled" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(authStore).user.role), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(userProfileList, (item) => {
                                      return openBlock(), createBlock(Fragment, {
                                        key: item.title
                                      }, [
                                        item.type === "navItem" ? (openBlock(), createBlock(VListItem, {
                                          key: 0,
                                          value: item.value,
                                          to: item.value
                                        }, createSlots({
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: item.icon,
                                              size: "22"
                                            }, null, 8, ["icon"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, [
                                          item.badgeProps ? {
                                            name: "append",
                                            fn: withCtx(() => [
                                              createVNode(VBadge, mergeProps({
                                                inline: "",
                                                ref_for: true
                                              }, item.badgeProps), null, 16)
                                            ]),
                                            key: "0"
                                          } : void 0
                                        ]), 1032, ["value", "to"])) : (openBlock(), createBlock(VDivider, {
                                          key: 1,
                                          class: "my-1"
                                        }))
                                      ], 64);
                                    }), 64)),
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          block: "",
                                          color: "error",
                                          "append-icon": "ri-logout-box-r-line",
                                          onClick: logout
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Logout ")
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
                      createVNode(VImg, {
                        src: unref(authStore).user.photo
                      }, null, 8, ["src"]),
                      createVNode(VMenu, {
                        activator: "parent",
                        width: "230",
                        location: "bottom end",
                        offset: "15px"
                      }, {
                        default: withCtx(() => [
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              createVNode(VListItem, null, {
                                prepend: withCtx(() => [
                                  createVNode(VListItemAction, { start: "" }, {
                                    default: withCtx(() => [
                                      createVNode(VBadge, {
                                        dot: "",
                                        location: "bottom right",
                                        "offset-x": "3",
                                        "offset-y": "3",
                                        color: "success"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VAvatar, {
                                            color: "primary",
                                            variant: "tonal"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: unref(authStore).user.photo
                                              }, null, 8, ["src"])
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
                                default: withCtx(() => [
                                  createVNode("h6", { class: "text-sm font-weight-medium" }, toDisplayString(unref(authStore).user.name), 1),
                                  createVNode(VListItemSubtitle, { class: "text-capitalize text-disabled" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(authStore).user.role), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(userProfileList, (item) => {
                                    return openBlock(), createBlock(Fragment, {
                                      key: item.title
                                    }, [
                                      item.type === "navItem" ? (openBlock(), createBlock(VListItem, {
                                        key: 0,
                                        value: item.value,
                                        to: item.value
                                      }, createSlots({
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: item.icon,
                                            size: "22"
                                          }, null, 8, ["icon"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, [
                                        item.badgeProps ? {
                                          name: "append",
                                          fn: withCtx(() => [
                                            createVNode(VBadge, mergeProps({
                                              inline: "",
                                              ref_for: true
                                            }, item.badgeProps), null, 16)
                                          ]),
                                          key: "0"
                                        } : void 0
                                      ]), 1032, ["value", "to"])) : (openBlock(), createBlock(VDivider, {
                                        key: 1,
                                        class: "my-1"
                                      }))
                                    ], 64);
                                  }), 64)),
                                  createVNode(VListItem, null, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        block: "",
                                        color: "error",
                                        "append-icon": "ri-logout-box-r-line",
                                        onClick: logout
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Logout ")
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
                createVNode(VAvatar, {
                  class: "cursor-pointer",
                  size: "38"
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      src: unref(authStore).user.photo
                    }, null, 8, ["src"]),
                    createVNode(VMenu, {
                      activator: "parent",
                      width: "230",
                      location: "bottom end",
                      offset: "15px"
                    }, {
                      default: withCtx(() => [
                        createVNode(VList, null, {
                          default: withCtx(() => [
                            createVNode(VListItem, null, {
                              prepend: withCtx(() => [
                                createVNode(VListItemAction, { start: "" }, {
                                  default: withCtx(() => [
                                    createVNode(VBadge, {
                                      dot: "",
                                      location: "bottom right",
                                      "offset-x": "3",
                                      "offset-y": "3",
                                      color: "success"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VAvatar, {
                                          color: "primary",
                                          variant: "tonal"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              src: unref(authStore).user.photo
                                            }, null, 8, ["src"])
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
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-sm font-weight-medium" }, toDisplayString(unref(authStore).user.name), 1),
                                createVNode(VListItemSubtitle, { class: "text-capitalize text-disabled" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(authStore).user.role), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(userProfileList, (item) => {
                                  return openBlock(), createBlock(Fragment, {
                                    key: item.title
                                  }, [
                                    item.type === "navItem" ? (openBlock(), createBlock(VListItem, {
                                      key: 0,
                                      value: item.value,
                                      to: item.value
                                    }, createSlots({
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: item.icon,
                                          size: "22"
                                        }, null, 8, ["icon"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, [
                                      item.badgeProps ? {
                                        name: "append",
                                        fn: withCtx(() => [
                                          createVNode(VBadge, mergeProps({
                                            inline: "",
                                            ref_for: true
                                          }, item.badgeProps), null, 16)
                                        ]),
                                        key: "0"
                                      } : void 0
                                    ]), 1032, ["value", "to"])) : (openBlock(), createBlock(VDivider, {
                                      key: 1,
                                      class: "my-1"
                                    }))
                                  ], 64);
                                }), 64)),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      block: "",
                                      color: "error",
                                      "append-icon": "ri-logout-box-r-line",
                                      onClick: logout
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Logout ")
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
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/UserProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
