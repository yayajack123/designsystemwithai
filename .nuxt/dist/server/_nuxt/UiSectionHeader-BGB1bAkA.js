import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { a as VIcon } from "../server.mjs";
import { V as VTooltip } from "./VTooltip-vXFYhuMk.js";
import { V as VRow, a as VCol } from "./VRow-BRD4hy0P.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiSectionHeader",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    back: {},
    customBack: { type: Boolean }
  },
  emits: ["click:back"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleBackClick = (e) => {
      if (props.customBack) {
        e.preventDefault();
        e.stopPropagation();
        emit("click:back");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex align-center gap-3 mb-4" }, _attrs))}>`);
      if (props.back) {
        _push(ssrRenderComponent(_component_IconBtn, {
          color: "secondary",
          class: "me-4",
          to: props.customBack ? void 0 : props.back,
          onClick: handleBackClick
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, { icon: "ri-arrow-left-line" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(VTooltip, {
                activator: "parent",
                location: "top"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Back `);
                  } else {
                    return [
                      createTextVNode(" Back ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VIcon, { icon: "ri-arrow-left-line" }),
                createVNode(VTooltip, {
                  activator: "parent",
                  location: "top"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Back ")
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
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-h5"${_scopeId2}>${ssrInterpolate(props.title)}</h1>`);
                  if (props.description) {
                    _push3(`<p class="mb-0 text-body-1"${_scopeId2}>${ssrInterpolate(props.description)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("h1", { class: "text-h5" }, toDisplayString(props.title), 1),
                    props.description ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "mb-0 text-body-1"
                    }, toDisplayString(props.description), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4",
              class: "d-flex gap-3 align-center flex-wrap justify-end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "actions")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-h5" }, toDisplayString(props.title), 1),
                  props.description ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "mb-0 text-body-1"
                  }, toDisplayString(props.description), 1)) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                class: "d-flex gap-3 align-center flex-wrap justify-end"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "actions")
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/UiSectionHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
