import { computed, ref, inject, shallowRef, provide, watch, mergeProps, createVNode, nextTick } from "vue";
import { u as useScopeId, c as VMenuSymbol, V as VOverlay, b as makeVOverlayProps } from "./VOverlay-2hsH7Y4R.js";
import { f as forwardRefs } from "./forwardRefs-CtuH3aYe.js";
import { q as genericComponent, C as useProxiedModel, af as getUid, at as isClickInsideElement, G as useRender, H as VDefaultsProvider, au as focusableChildren, av as focusChild, aw as getNextElement, I as propsFactory, ar as omit } from "../server.mjs";
import { V as VDialogTransition } from "./dialog-transition-BWrfOTuu.js";
const makeVMenuProps = propsFactory({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...omit(makeVOverlayProps({
    closeDelay: 250,
    closeOnContentClick: true,
    locationStrategy: "connected",
    openDelay: 300,
    scrim: false,
    scrollStrategy: "reposition",
    transition: {
      component: VDialogTransition
    }
  }), ["absolute"])
}, "VMenu");
const VMenu = genericComponent()({
  name: "VMenu",
  props: makeVMenuProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const uid = getUid();
    const id = computed(() => props.id || `v-menu-${uid}`);
    const overlay = ref();
    const parent = inject(VMenuSymbol, null);
    const openChildren = shallowRef(0);
    provide(VMenuSymbol, {
      register() {
        ++openChildren.value;
      },
      unregister() {
        --openChildren.value;
      },
      closeParents(e) {
        setTimeout(() => {
          if (!openChildren.value && !props.persistent && (e == null || e && !isClickInsideElement(e, overlay.value.contentEl))) {
            isActive.value = false;
            parent?.closeParents();
          }
        }, 40);
      }
    });
    async function onFocusIn(e) {
      const before = e.relatedTarget;
      const after = e.target;
      await nextTick();
      if (isActive.value && before !== after && overlay.value?.contentEl && // We're the topmost menu
      overlay.value?.globalTop && // It isn't the document or the menu body
      ![void 0, overlay.value.contentEl].includes(after) && // It isn't inside the menu body
      !overlay.value.contentEl.contains(after)) {
        const focusable = focusableChildren(overlay.value.contentEl);
        focusable[0]?.focus();
      }
    }
    watch(isActive, (val) => {
      if (val) {
        parent?.register();
        (void 0).addEventListener("focusin", onFocusIn, {
          once: true
        });
      } else {
        parent?.unregister();
        (void 0).removeEventListener("focusin", onFocusIn);
      }
    });
    function onClickOutside(e) {
      parent?.closeParents(e);
    }
    function onKeydown(e) {
      if (props.disabled) return;
      if (e.key === "Tab" || e.key === "Enter" && !props.closeOnContentClick) {
        if (e.key === "Enter" && (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement && !!e.target.closest("form"))) return;
        if (e.key === "Enter") e.preventDefault();
        const nextElement = getNextElement(focusableChildren(overlay.value?.contentEl, false), e.shiftKey ? "prev" : "next", (el) => el.tabIndex >= 0);
        if (!nextElement) {
          isActive.value = false;
          overlay.value?.activatorEl?.focus();
        }
      } else if (["Enter", " "].includes(e.key) && props.closeOnContentClick) {
        isActive.value = false;
        parent?.closeParents();
      }
    }
    function onActivatorKeydown(e) {
      if (props.disabled) return;
      const el = overlay.value?.contentEl;
      if (el && isActive.value) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          focusChild(el, "next");
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          focusChild(el, "prev");
        }
      } else if (["ArrowDown", "ArrowUp"].includes(e.key)) {
        isActive.value = true;
        e.preventDefault();
        setTimeout(() => setTimeout(() => onActivatorKeydown(e)));
      }
    }
    const activatorProps = computed(() => mergeProps({
      "aria-haspopup": "menu",
      "aria-expanded": String(isActive.value),
      "aria-owns": id.value,
      onKeydown: onActivatorKeydown
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "id": id.value,
        "class": ["v-menu", props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "absolute": true,
        "activatorProps": activatorProps.value,
        "onClick:outside": onClickOutside,
        "onKeydown": onKeydown
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VMenu"
          }, {
            default: () => [slots.default?.(...args)]
          });
        }
      });
    });
    return forwardRefs({
      id,
      ΨopenChildren: openChildren
    }, overlay);
  }
});
export {
  VMenu as V
};
