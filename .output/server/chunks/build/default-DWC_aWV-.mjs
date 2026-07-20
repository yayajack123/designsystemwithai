import { defineComponent, defineAsyncComponent, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';
import { b3 as useConfigStore, bt as switchToVerticalNavOnLtOverlayNavBreakpoint, b9 as AppContentLayoutNav } from './server.mjs';
import { u as useSkins } from './useSkins-DArX6y14.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const DefaultLayoutWithHorizontalNav = defineAsyncComponent(() => import('./DefaultLayoutWithHorizontalNav-D0TWYI-W.mjs'));
    const DefaultLayoutWithVerticalNav = defineAsyncComponent(() => import('./DefaultLayoutWithVerticalNav-Dvmi5P8o.mjs'));
    const configStore = useConfigStore();
    switchToVerticalNavOnLtOverlayNavBreakpoint();
    const { layoutAttrs } = useSkins();
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(configStore).appContentLayoutNav === unref(AppContentLayoutNav).Vertical ? unref(DefaultLayoutWithVerticalNav) : unref(DefaultLayoutWithHorizontalNav)), mergeProps(unref(layoutAttrs), _attrs), {
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
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
