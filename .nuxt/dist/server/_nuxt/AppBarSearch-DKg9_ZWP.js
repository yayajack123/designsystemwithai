import { defineComponent, ref, watch, resolveComponent, mergeProps, withCtx, unref, isRef, createVNode, withKeys, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, renderSlot, withDirectives, vShow, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { bu as useMagicKeys, a as VIcon, aW as _export_sfc } from "../server.mjs";
import { V as VDialog } from "./VDialog-B0Ad2yj9.js";
import { V as VCard } from "./VCard-B42eN0YV.js";
import { V as VCardText } from "./VCardText-CaXtzNxg.js";
import { V as VTextField } from "./VTextField-jMGfwBDn.js";
import { V as VDivider } from "./VDivider-Cdypedjq.js";
import { V as VList, a as VListItem } from "./VList-BNtS0p6J.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppBarSearch",
  __ssrInlineRender: true,
  props: {
    isDialogVisible: { type: Boolean },
    searchResults: {}
  },
  emits: ["update:isDialogVisible", "search"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { ctrl_k, meta_k } = useMagicKeys({
      passive: false,
      onEventFired(e) {
        if (e.ctrlKey && e.key === "k" && e.type === "keydown")
          e.preventDefault();
      }
    });
    const refSearchList = ref();
    const refSearchInput = ref();
    const searchQueryLocal = ref("");
    watch([
      ctrl_k,
      meta_k
    ], () => {
      emit("update:isDialogVisible", true);
    });
    const clearSearchAndCloseDialog = () => {
      searchQueryLocal.value = "";
      emit("update:isDialogVisible", false);
    };
    const getFocusOnSearchList = (e) => {
      var _a, _b;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        (_a = refSearchList.value) == null ? void 0 : _a.focus("next");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        (_b = refSearchList.value) == null ? void 0 : _b.focus("prev");
      }
    };
    const dialogModelValueUpdate = (val) => {
      searchQueryLocal.value = "";
      emit("update:isDialogVisible", val);
    };
    watch(
      () => props.isDialogVisible,
      () => {
        searchQueryLocal.value = "";
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(VDialog, mergeProps({
        "max-width": "600",
        "model-value": props.isDialogVisible,
        height: _ctx.$vuetify.display.smAndUp ? "537" : "100%",
        fullscreen: _ctx.$vuetify.display.width < 600,
        class: "app-bar-search-dialog",
        "onUpdate:modelValue": dialogModelValueUpdate,
        onKeyup: clearSearchAndCloseDialog
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              height: "100%",
              width: "100%",
              class: "position-relative"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "py-3 px-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          ref_key: "refSearchInput",
                          ref: refSearchInput,
                          modelValue: unref(searchQueryLocal),
                          "onUpdate:modelValue": [($event) => isRef(searchQueryLocal) ? searchQueryLocal.value = $event : null, ($event) => _ctx.$emit("search", unref(searchQueryLocal))],
                          autofocus: "",
                          density: "compact",
                          variant: "plain",
                          class: "app-bar-search-input",
                          onKeyup: clearSearchAndCloseDialog,
                          onKeydown: getFocusOnSearchList
                        }, {
                          "prepend-inner": withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center text-high-emphasis me-1" data-v-40d605c1${_scopeId4}>`);
                              _push5(ssrRenderComponent(VIcon, {
                                size: "24",
                                icon: "ri-search-line",
                                style: { "margin-block-start": "1px", "opacity": "1" }
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center text-high-emphasis me-1" }, [
                                  createVNode(VIcon, {
                                    size: "24",
                                    icon: "ri-search-line",
                                    style: { "margin-block-start": "1px", "opacity": "1" }
                                  })
                                ])
                              ];
                            }
                          }),
                          "append-inner": withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-start" data-v-40d605c1${_scopeId4}><div class="text-base text-disabled cursor-pointer me-1" data-v-40d605c1${_scopeId4}> [esc] </div>`);
                              _push5(ssrRenderComponent(_component_IconBtn, {
                                class: "mt-n2",
                                color: "medium-emphasis",
                                onClick: clearSearchAndCloseDialog
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { icon: "ri-close-line" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, { icon: "ri-close-line" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-start" }, [
                                  createVNode("div", {
                                    class: "text-base text-disabled cursor-pointer me-1",
                                    onClick: clearSearchAndCloseDialog
                                  }, " [esc] "),
                                  createVNode(_component_IconBtn, {
                                    class: "mt-n2",
                                    color: "medium-emphasis",
                                    onClick: clearSearchAndCloseDialog
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-close-line" })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            ref_key: "refSearchInput",
                            ref: refSearchInput,
                            modelValue: unref(searchQueryLocal),
                            "onUpdate:modelValue": [($event) => isRef(searchQueryLocal) ? searchQueryLocal.value = $event : null, ($event) => _ctx.$emit("search", unref(searchQueryLocal))],
                            autofocus: "",
                            density: "compact",
                            variant: "plain",
                            class: "app-bar-search-input",
                            onKeyup: withKeys(clearSearchAndCloseDialog, ["esc"]),
                            onKeydown: getFocusOnSearchList
                          }, {
                            "prepend-inner": withCtx(() => [
                              createVNode("div", { class: "d-flex align-center text-high-emphasis me-1" }, [
                                createVNode(VIcon, {
                                  size: "24",
                                  icon: "ri-search-line",
                                  style: { "margin-block-start": "1px", "opacity": "1" }
                                })
                              ])
                            ]),
                            "append-inner": withCtx(() => [
                              createVNode("div", { class: "d-flex align-start" }, [
                                createVNode("div", {
                                  class: "text-base text-disabled cursor-pointer me-1",
                                  onClick: clearSearchAndCloseDialog
                                }, " [esc] "),
                                createVNode(_component_IconBtn, {
                                  class: "mt-n2",
                                  color: "medium-emphasis",
                                  onClick: clearSearchAndCloseDialog
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-close-line" })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(PerfectScrollbar), {
                    options: { wheelPropagation: false, suppressScrollX: true },
                    class: "h-100"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VList), {
                          style: unref(searchQueryLocal).length && !!props.searchResults.length ? null : { display: "none" },
                          ref_key: "refSearchList",
                          ref: refSearchList,
                          density: "compact",
                          class: "app-bar-search-list py-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(props.searchResults, (item) => {
                                ssrRenderSlot(_ctx.$slots, "searchResult", { item }, () => {
                                  _push5(ssrRenderComponent(unref(VListItem), null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(item)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(item), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                }, _push5, _parent5, _scopeId4);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(props.searchResults, (item) => {
                                  return renderSlot(_ctx.$slots, "searchResult", {
                                    key: item,
                                    item
                                  }, () => [
                                    createVNode(unref(VListItem), null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ], true);
                                }), 128))
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                        _push4(`<div style="${ssrRenderStyle(!!props.searchResults && !unref(searchQueryLocal) && _ctx.$slots.suggestions ? null : { display: "none" })}" class="h-100" data-v-40d605c1${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "suggestions", {}, null, _push4, _parent4, _scopeId3);
                        _push4(`</div><div style="${ssrRenderStyle(!props.searchResults.length && unref(searchQueryLocal).length ? null : { display: "none" })}" class="h-100" data-v-40d605c1${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "noData", {}, () => {
                          _push4(ssrRenderComponent(VCardText, { class: "h-100" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis pa-12" data-v-40d605c1${_scopeId4}>`);
                                _push5(ssrRenderComponent(VIcon, {
                                  size: "64",
                                  icon: "ri-file-forbid-line"
                                }, null, _parent5, _scopeId4));
                                _push5(`<div class="d-flex align-center flex-wrap justify-center gap-2 text-h5 my-3" data-v-40d605c1${_scopeId4}><span data-v-40d605c1${_scopeId4}>No Result For </span><span data-v-40d605c1${_scopeId4}>&quot;${ssrInterpolate(unref(searchQueryLocal))}&quot;</span></div>`);
                                ssrRenderSlot(_ctx.$slots, "noDataSuggestion", {}, null, _push5, _parent5, _scopeId4);
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis pa-12" }, [
                                    createVNode(VIcon, {
                                      size: "64",
                                      icon: "ri-file-forbid-line"
                                    }),
                                    createVNode("div", { class: "d-flex align-center flex-wrap justify-center gap-2 text-h5 my-3" }, [
                                      createVNode("span", null, "No Result For "),
                                      createVNode("span", null, '"' + toDisplayString(unref(searchQueryLocal)) + '"', 1)
                                    ]),
                                    renderSlot(_ctx.$slots, "noDataSuggestion", {}, void 0, true)
                                  ])
                                ];
                              }
                            }),
                            _: 3
                          }, _parent4, _scopeId3));
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                      } else {
                        return [
                          withDirectives(createVNode(unref(VList), {
                            ref_key: "refSearchList",
                            ref: refSearchList,
                            density: "compact",
                            class: "app-bar-search-list py-0"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(props.searchResults, (item) => {
                                return renderSlot(_ctx.$slots, "searchResult", {
                                  key: item,
                                  item
                                }, () => [
                                  createVNode(unref(VListItem), null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ], true);
                              }), 128))
                            ]),
                            _: 3
                          }, 512), [
                            [vShow, unref(searchQueryLocal).length && !!props.searchResults.length]
                          ]),
                          withDirectives(createVNode("div", { class: "h-100" }, [
                            renderSlot(_ctx.$slots, "suggestions", {}, void 0, true)
                          ], 512), [
                            [vShow, !!props.searchResults && !unref(searchQueryLocal) && _ctx.$slots.suggestions]
                          ]),
                          withDirectives(createVNode("div", { class: "h-100" }, [
                            renderSlot(_ctx.$slots, "noData", {}, () => [
                              createVNode(VCardText, { class: "h-100" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis pa-12" }, [
                                    createVNode(VIcon, {
                                      size: "64",
                                      icon: "ri-file-forbid-line"
                                    }),
                                    createVNode("div", { class: "d-flex align-center flex-wrap justify-center gap-2 text-h5 my-3" }, [
                                      createVNode("span", null, "No Result For "),
                                      createVNode("span", null, '"' + toDisplayString(unref(searchQueryLocal)) + '"', 1)
                                    ]),
                                    renderSlot(_ctx.$slots, "noDataSuggestion", {}, void 0, true)
                                  ])
                                ]),
                                _: 3
                              })
                            ], true)
                          ], 512), [
                            [vShow, !props.searchResults.length && unref(searchQueryLocal).length]
                          ])
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, { class: "py-3 px-4" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          ref_key: "refSearchInput",
                          ref: refSearchInput,
                          modelValue: unref(searchQueryLocal),
                          "onUpdate:modelValue": [($event) => isRef(searchQueryLocal) ? searchQueryLocal.value = $event : null, ($event) => _ctx.$emit("search", unref(searchQueryLocal))],
                          autofocus: "",
                          density: "compact",
                          variant: "plain",
                          class: "app-bar-search-input",
                          onKeyup: withKeys(clearSearchAndCloseDialog, ["esc"]),
                          onKeydown: getFocusOnSearchList
                        }, {
                          "prepend-inner": withCtx(() => [
                            createVNode("div", { class: "d-flex align-center text-high-emphasis me-1" }, [
                              createVNode(VIcon, {
                                size: "24",
                                icon: "ri-search-line",
                                style: { "margin-block-start": "1px", "opacity": "1" }
                              })
                            ])
                          ]),
                          "append-inner": withCtx(() => [
                            createVNode("div", { class: "d-flex align-start" }, [
                              createVNode("div", {
                                class: "text-base text-disabled cursor-pointer me-1",
                                onClick: clearSearchAndCloseDialog
                              }, " [esc] "),
                              createVNode(_component_IconBtn, {
                                class: "mt-n2",
                                color: "medium-emphasis",
                                onClick: clearSearchAndCloseDialog
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-close-line" })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(unref(PerfectScrollbar), {
                      options: { wheelPropagation: false, suppressScrollX: true },
                      class: "h-100"
                    }, {
                      default: withCtx(() => [
                        withDirectives(createVNode(unref(VList), {
                          ref_key: "refSearchList",
                          ref: refSearchList,
                          density: "compact",
                          class: "app-bar-search-list py-0"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(props.searchResults, (item) => {
                              return renderSlot(_ctx.$slots, "searchResult", {
                                key: item,
                                item
                              }, () => [
                                createVNode(unref(VListItem), null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ], true);
                            }), 128))
                          ]),
                          _: 3
                        }, 512), [
                          [vShow, unref(searchQueryLocal).length && !!props.searchResults.length]
                        ]),
                        withDirectives(createVNode("div", { class: "h-100" }, [
                          renderSlot(_ctx.$slots, "suggestions", {}, void 0, true)
                        ], 512), [
                          [vShow, !!props.searchResults && !unref(searchQueryLocal) && _ctx.$slots.suggestions]
                        ]),
                        withDirectives(createVNode("div", { class: "h-100" }, [
                          renderSlot(_ctx.$slots, "noData", {}, () => [
                            createVNode(VCardText, { class: "h-100" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis pa-12" }, [
                                  createVNode(VIcon, {
                                    size: "64",
                                    icon: "ri-file-forbid-line"
                                  }),
                                  createVNode("div", { class: "d-flex align-center flex-wrap justify-center gap-2 text-h5 my-3" }, [
                                    createVNode("span", null, "No Result For "),
                                    createVNode("span", null, '"' + toDisplayString(unref(searchQueryLocal)) + '"', 1)
                                  ]),
                                  renderSlot(_ctx.$slots, "noDataSuggestion", {}, void 0, true)
                                ])
                              ]),
                              _: 3
                            })
                          ], true)
                        ], 512), [
                          [vShow, !props.searchResults.length && unref(searchQueryLocal).length]
                        ])
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, {
                height: "100%",
                width: "100%",
                class: "position-relative"
              }, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "py-3 px-4" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        ref_key: "refSearchInput",
                        ref: refSearchInput,
                        modelValue: unref(searchQueryLocal),
                        "onUpdate:modelValue": [($event) => isRef(searchQueryLocal) ? searchQueryLocal.value = $event : null, ($event) => _ctx.$emit("search", unref(searchQueryLocal))],
                        autofocus: "",
                        density: "compact",
                        variant: "plain",
                        class: "app-bar-search-input",
                        onKeyup: withKeys(clearSearchAndCloseDialog, ["esc"]),
                        onKeydown: getFocusOnSearchList
                      }, {
                        "prepend-inner": withCtx(() => [
                          createVNode("div", { class: "d-flex align-center text-high-emphasis me-1" }, [
                            createVNode(VIcon, {
                              size: "24",
                              icon: "ri-search-line",
                              style: { "margin-block-start": "1px", "opacity": "1" }
                            })
                          ])
                        ]),
                        "append-inner": withCtx(() => [
                          createVNode("div", { class: "d-flex align-start" }, [
                            createVNode("div", {
                              class: "text-base text-disabled cursor-pointer me-1",
                              onClick: clearSearchAndCloseDialog
                            }, " [esc] "),
                            createVNode(_component_IconBtn, {
                              class: "mt-n2",
                              color: "medium-emphasis",
                              onClick: clearSearchAndCloseDialog
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-close-line" })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(unref(PerfectScrollbar), {
                    options: { wheelPropagation: false, suppressScrollX: true },
                    class: "h-100"
                  }, {
                    default: withCtx(() => [
                      withDirectives(createVNode(unref(VList), {
                        ref_key: "refSearchList",
                        ref: refSearchList,
                        density: "compact",
                        class: "app-bar-search-list py-0"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(props.searchResults, (item) => {
                            return renderSlot(_ctx.$slots, "searchResult", {
                              key: item,
                              item
                            }, () => [
                              createVNode(unref(VListItem), null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], true);
                          }), 128))
                        ]),
                        _: 3
                      }, 512), [
                        [vShow, unref(searchQueryLocal).length && !!props.searchResults.length]
                      ]),
                      withDirectives(createVNode("div", { class: "h-100" }, [
                        renderSlot(_ctx.$slots, "suggestions", {}, void 0, true)
                      ], 512), [
                        [vShow, !!props.searchResults && !unref(searchQueryLocal) && _ctx.$slots.suggestions]
                      ]),
                      withDirectives(createVNode("div", { class: "h-100" }, [
                        renderSlot(_ctx.$slots, "noData", {}, () => [
                          createVNode(VCardText, { class: "h-100" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis pa-12" }, [
                                createVNode(VIcon, {
                                  size: "64",
                                  icon: "ri-file-forbid-line"
                                }),
                                createVNode("div", { class: "d-flex align-center flex-wrap justify-center gap-2 text-h5 my-3" }, [
                                  createVNode("span", null, "No Result For "),
                                  createVNode("span", null, '"' + toDisplayString(unref(searchQueryLocal)) + '"', 1)
                                ]),
                                renderSlot(_ctx.$slots, "noDataSuggestion", {}, void 0, true)
                              ])
                            ]),
                            _: 3
                          })
                        ], true)
                      ], 512), [
                        [vShow, !props.searchResults.length && unref(searchQueryLocal).length]
                      ])
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@core/components/AppBarSearch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppBarSearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-40d605c1"]]);
export {
  AppBarSearch as default
};
