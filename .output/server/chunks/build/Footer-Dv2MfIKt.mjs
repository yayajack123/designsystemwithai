import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { aW as _export_sfc, a as VIcon } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-100 d-flex align-center justify-space-between text-medium-emphasis" }, _attrs))}><span class="d-flex align-center"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Made With `);
  _push(ssrRenderComponent(VIcon, {
    icon: "ri-heart-line",
    color: "error",
    size: "1.25rem",
    class: "mx-1"
  }, null, _parent));
  _push(` By <a href="https://themeselection.com" target="_blank" rel="noopener noreferrer" class="text-primary ms-1">ThemeSelection</a></span><span class="d-md-flex gap-x-4 text-primary d-none"><a href="https://themeselection.com/license/" target="noopener noreferrer">License</a><a href="https://themeselection.com/" target="noopener noreferrer">More Themes</a><a href="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/documentation/" target="noopener noreferrer">Documentation</a></span></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Footer as default };
