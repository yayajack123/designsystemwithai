import { b5 as useConfigStore, bc as AppContentLayoutNav, q as genericComponent, t as provideTheme, I as propsFactory, K as makeTagProps, J as makeThemeProps, P as makeComponentProps } from './server.mjs';
import { computed, h, createVNode } from 'vue';

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
      var _a;
      if (!props.withBackground) return (_a = slots.default) == null ? void 0 : _a.call(slots);
      return createVNode(props.tag, {
        "class": ["v-theme-provider", themeClasses.value, props.class],
        "style": props.style
      }, {
        default: () => {
          var _a2;
          return [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)];
        }
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

export { useSkins as u };
