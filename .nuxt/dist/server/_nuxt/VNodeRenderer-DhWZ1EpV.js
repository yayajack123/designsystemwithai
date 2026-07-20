import { useSSRContext, defineComponent } from "vue";
const ssrRegisterHelper = function ssrRegisterHelper2(comp, filename) {
  const setup = comp.setup;
  comp.setup = (props, ctx) => {
    const ssrContext = useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(filename);
    if (setup) {
      return setup(props, ctx);
    }
  };
};
const VNodeRenderer = defineComponent({
  name: "VNodeRenderer",
  props: {
    nodes: {
      type: [Array, Object],
      required: true
    }
  },
  setup(props) {
    return () => props.nodes;
  }
});
const __moduleId = "@layouts/components/VNodeRenderer.tsx";
ssrRegisterHelper(VNodeRenderer, __moduleId);
export {
  VNodeRenderer as V
};
