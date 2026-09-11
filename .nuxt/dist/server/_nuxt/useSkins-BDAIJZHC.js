import { q as genericComponent, t as provideTheme, I as propsFactory, K as makeTagProps, J as makeThemeProps, P as makeComponentProps, b5 as useConfigStore, bc as AppContentLayoutNav } from "../server.mjs";
import { createVNode, computed, h } from "vue";
const makeVThemeProviderProps = propsFactory({
  withBackground: Boolean,
  ...makeComponentProps(),
  ...makeThemeProps(),
  ...makeTagProps()
}, "VThemeProvider");
const VThemeProvider = genericComponent()({
  name: "VThemeProvider",
  props: makeVThemeProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    return () => {
      if (!props.withBackground) return slots.default?.();
      return createVNode(props.tag, {
        "class": ["v-theme-provider", themeClasses.value, props.class],
        "style": props.style
      }, {
        default: () => [slots.default?.()]
      });
    };
  }
});
const useSkins = () => {
  const configStore = useConfigStore();
  const layoutAttrs = computed(() => ({
    verticalNavAttrs: {
      wrapper: h(VThemeProvider, { tag: "div" }),
      wrapperProps: {
        withBackground: true,
        theme: configStore.isVerticalNavSemiDark && configStore.appContentLayoutNav === AppContentLayoutNav.Vertical ? "dark" : void 0
      }
    }
  }));
  const injectSkinClasses = () => {
  };
  return {
    injectSkinClasses,
    layoutAttrs
  };
};
export {
  useSkins as u
};
