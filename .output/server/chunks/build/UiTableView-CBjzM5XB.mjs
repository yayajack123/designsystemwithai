import { defineComponent, mergeModels, useModel, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, createTextVNode, openBlock, toDisplayString, Fragment, renderList, createVNode, createSlots, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './UiSectionHeader-BGB1bAkA.mjs';
import { V as VTabs, a as VTab, b as VSkeletonLoader } from './VTabs-iT2EYINr.mjs';
import { aW as _export_sfc, a as VIcon, V as VBtn, aX as VBtnToggle } from './server.mjs';
import { V as VCard } from './VCard-B42eN0YV.mjs';
import { V as VCardText } from './VCardText-CaXtzNxg.mjs';
import { V as VDivider } from './VDivider-Cdypedjq.mjs';
import { V as VDataTable } from './VDataTable-TnWqeKKY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiTableView",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    title: {},
    description: {},
    tabs: { default: () => [] },
    headers: { default: () => [] },
    items: { default: () => [] },
    loading: { type: Boolean, default: false },
    itemsPerPage: { default: 10 },
    showViewToggle: { type: Boolean, default: false },
    back: {}
  }, {
    "activeTab": {},
    "activeTabModifiers": {},
    "viewType": { default: "list" },
    "viewTypeModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["reset-filters"], ["update:activeTab", "update:viewType"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const activeTab = useModel(__props, "activeTab");
    const viewType = useModel(__props, "viewType");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "ui-table-view" }, _attrs))} data-v-ece515c2>`);
      if (props.title) {
        _push(ssrRenderComponent(_sfc_main$1, {
          title: props.title,
          description: props.description,
          back: props.back,
          class: "mb-5"
        }, {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "header-actions", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "header-actions", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (props.tabs && props.tabs.length) {
        _push(ssrRenderComponent(VTabs, {
          modelValue: activeTab.value,
          "onUpdate:modelValue": ($event) => activeTab.value = $event,
          class: "v-tabs-bordered mb-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(props.tabs, (tab) => {
                _push2(ssrRenderComponent(VTab, {
                  key: tab.value,
                  value: tab.value
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (tab.icon) {
                        _push3(ssrRenderComponent(VIcon, {
                          start: "",
                          icon: tab.icon,
                          class: "me-2"
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(` ${ssrInterpolate(tab.label)} `);
                      if (tab.count !== void 0) {
                        _push3(`<span class="${ssrRenderClass([tab.badgeColor ? `bg-${tab.badgeColor} text-white` : activeTab.value === tab.value ? "bg-primary text-white" : "bg-secondary text-white", "count-badge ms-2"])}" data-v-ece515c2${_scopeId2}>${ssrInterpolate(tab.count)}</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        tab.icon ? (openBlock(), createBlock(VIcon, {
                          key: 0,
                          start: "",
                          icon: tab.icon,
                          class: "me-2"
                        }, null, 8, ["icon"])) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(tab.label) + " ", 1),
                        tab.count !== void 0 ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: ["count-badge ms-2", tab.badgeColor ? `bg-${tab.badgeColor} text-white` : activeTab.value === tab.value ? "bg-primary text-white" : "bg-secondary text-white"]
                        }, toDisplayString(tab.count), 3)) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(props.tabs, (tab) => {
                  return openBlock(), createBlock(VTab, {
                    key: tab.value,
                    value: tab.value
                  }, {
                    default: withCtx(() => [
                      tab.icon ? (openBlock(), createBlock(VIcon, {
                        key: 0,
                        start: "",
                        icon: tab.icon,
                        class: "me-2"
                      }, null, 8, ["icon"])) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(tab.label) + " ", 1),
                      tab.count !== void 0 ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: ["count-badge ms-2", tab.badgeColor ? `bg-${tab.badgeColor} text-white` : activeTab.value === tab.value ? "bg-primary text-white" : "bg-secondary text-white"]
                      }, toDisplayString(tab.count), 3)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex align-center justify-space-between flex-wrap gap-4 py-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center flex-wrap gap-4 flex-grow-1" data-v-ece515c2${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "filters", {}, null, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "filter-actions", {}, () => {
                    _push3(ssrRenderComponent(VBtn, {
                      variant: "text",
                      color: "primary",
                      onClick: ($event) => emit("reset-filters")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Reset Filter `);
                        } else {
                          return [
                            createTextVNode(" Reset Filter ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                  if (props.showViewToggle) {
                    _push3(`<div class="d-flex align-center gap-2" data-v-ece515c2${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "view-toggle", {}, () => {
                      _push3(ssrRenderComponent(VBtnToggle, {
                        modelValue: viewType.value,
                        "onUpdate:modelValue": ($event) => viewType.value = $event,
                        mandatory: "",
                        class: "custom-toggle-group"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VBtn, {
                              value: "list",
                              icon: "ri-list-unordered"
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VBtn, {
                              value: "team",
                              icon: "ri-team-line"
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VBtn, {
                              value: "room",
                              icon: "ri-door-closed-line"
                            }, null, _parent4, _scopeId3));
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
                      }, _parent3, _scopeId2));
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center flex-wrap gap-4 flex-grow-1" }, [
                      renderSlot(_ctx.$slots, "filters", {}, void 0, true),
                      renderSlot(_ctx.$slots, "filter-actions", {}, () => [
                        createVNode(VBtn, {
                          variant: "text",
                          color: "primary",
                          onClick: ($event) => emit("reset-filters")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset Filter ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ], true)
                    ]),
                    props.showViewToggle ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "d-flex align-center gap-2"
                    }, [
                      renderSlot(_ctx.$slots, "view-toggle", {}, () => [
                        createVNode(VBtnToggle, {
                          modelValue: viewType.value,
                          "onUpdate:modelValue": ($event) => viewType.value = $event,
                          mandatory: "",
                          class: "custom-toggle-group"
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
                      ], true)
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            if (props.loading) {
              _push2(`<div class="pa-6" data-v-ece515c2${_scopeId}><!--[-->`);
              ssrRenderList(3, (n) => {
                _push2(ssrRenderComponent(VSkeletonLoader, {
                  key: n,
                  type: "table-row-divider@4",
                  class: "mb-2"
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!--[-->`);
              if (viewType.value === "list") {
                _push2(`<div data-v-ece515c2${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "table-content", {}, () => {
                  _push2(ssrRenderComponent(VDataTable, {
                    headers: props.headers,
                    items: props.items,
                    "items-per-page": props.itemsPerPage,
                    class: "text-no-wrap"
                  }, createSlots({ _: 2 }, [
                    renderList(_ctx.$slots, (_2, slotName) => {
                      return {
                        name: slotName,
                        fn: withCtx((slotData, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            if (slotName.startsWith("item.") || slotName === "no-data") {
                              ssrRenderSlot(_ctx.$slots, slotName, slotData, null, _push3, _parent3, _scopeId2);
                            } else {
                              _push3(`<!---->`);
                            }
                          } else {
                            return [
                              slotName.startsWith("item.") || slotName === "no-data" ? renderSlot(_ctx.$slots, slotName, mergeProps({ key: 0 }, slotData), void 0, true) : createCommentVNode("", true)
                            ];
                          }
                        })
                      };
                    })
                  ]), _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<div data-v-ece515c2${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, `view-${viewType.value}`, {
                  items: props.items
                }, null, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              }
              _push2(`<!--]-->`);
            }
          } else {
            return [
              createVNode(VCardText, { class: "d-flex align-center justify-space-between flex-wrap gap-4 py-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center flex-wrap gap-4 flex-grow-1" }, [
                    renderSlot(_ctx.$slots, "filters", {}, void 0, true),
                    renderSlot(_ctx.$slots, "filter-actions", {}, () => [
                      createVNode(VBtn, {
                        variant: "text",
                        color: "primary",
                        onClick: ($event) => emit("reset-filters")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset Filter ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ], true)
                  ]),
                  props.showViewToggle ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "d-flex align-center gap-2"
                  }, [
                    renderSlot(_ctx.$slots, "view-toggle", {}, () => [
                      createVNode(VBtnToggle, {
                        modelValue: viewType.value,
                        "onUpdate:modelValue": ($event) => viewType.value = $event,
                        mandatory: "",
                        class: "custom-toggle-group"
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
                    ], true)
                  ])) : createCommentVNode("", true)
                ]),
                _: 3
              }),
              createVNode(VDivider),
              props.loading ? (openBlock(), createBlock("div", {
                key: 0,
                class: "pa-6"
              }, [
                (openBlock(), createBlock(Fragment, null, renderList(3, (n) => {
                  return createVNode(VSkeletonLoader, {
                    key: n,
                    type: "table-row-divider@4",
                    class: "mb-2"
                  });
                }), 64))
              ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                viewType.value === "list" ? (openBlock(), createBlock("div", { key: 0 }, [
                  renderSlot(_ctx.$slots, "table-content", {}, () => [
                    createVNode(VDataTable, {
                      headers: props.headers,
                      items: props.items,
                      "items-per-page": props.itemsPerPage,
                      class: "text-no-wrap"
                    }, createSlots({ _: 2 }, [
                      renderList(_ctx.$slots, (_2, slotName) => {
                        return {
                          name: slotName,
                          fn: withCtx((slotData) => [
                            slotName.startsWith("item.") || slotName === "no-data" ? renderSlot(_ctx.$slots, slotName, mergeProps({ key: 0 }, slotData), void 0, true) : createCommentVNode("", true)
                          ])
                        };
                      })
                    ]), 1032, ["headers", "items", "items-per-page"])
                  ], true)
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  renderSlot(_ctx.$slots, `view-${viewType.value}`, {
                    items: props.items
                  }, void 0, true)
                ]))
              ], 64))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/UiTableView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UiTableView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ece515c2"]]);

export { UiTableView as U };
