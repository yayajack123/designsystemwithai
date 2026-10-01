import { defineComponent, useAttrs, ref, watch, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, nextTick, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import FlatPickr from "vue-flatpickr-component";
import { d as VInput, f as filterFieldProps, e as VField, g as makeVFieldProps, h as makeVInputProps } from "./VTextField-Cx_BotQJ.js";
import { b6 as useConfigStore, ak as filterInputAttrs, b7 as useFocus, b8 as useTheme } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "AppDateTimePicker",
  __ssrInlineRender: true,
  props: {
    autofocus: Boolean,
    counter: [Boolean, Number, String],
    counterValue: Function,
    prefix: String,
    placeholder: String,
    persistentPlaceholder: Boolean,
    persistentCounter: Boolean,
    suffix: String,
    type: {
      type: String,
      default: "text"
    },
    modelModifiers: Object,
    ...makeVInputProps({
      density: "comfortable",
      hideDetails: "auto"
    }),
    ...makeVFieldProps({
      variant: "outlined",
      color: "primary"
    })
  },
  emits: ["click:control", "mousedown:control", "update:focused", "update:modelValue", "click:clear"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const configStore = useConfigStore();
    const attrs = useAttrs();
    const [rootAttrs, compAttrs] = filterInputAttrs(attrs);
    const inputProps = ref(VInput.filterProps(props));
    const fieldProps = ref(filterFieldProps(props));
    const refFlatPicker = ref();
    const { focused } = useFocus(refFlatPicker);
    const isCalendarOpen = ref(false);
    const isInlinePicker = ref(false);
    if (compAttrs.config && compAttrs.config.inline) {
      isInlinePicker.value = compAttrs.config.inline;
      Object.assign(compAttrs, { altInputClass: "inlinePicker" });
    }
    const onClear = (el) => {
      el.stopPropagation();
      nextTick(() => {
        emit("update:modelValue", "");
        emit("click:clear", el);
      });
    };
    const vuetifyTheme = useTheme();
    const vuetifyThemesName = Object.keys(vuetifyTheme.themes.value);
    const updateThemeClassInCalendar = () => {
      if (!refFlatPicker.value.fp.calendarContainer)
        return;
      vuetifyThemesName.forEach((t) => {
        refFlatPicker.value.fp.calendarContainer.classList.remove(`v-theme--${t}`);
      });
      refFlatPicker.value.fp.calendarContainer.classList.add(`v-theme--${vuetifyTheme.global.name.value}`);
    };
    watch(() => configStore.theme, updateThemeClassInCalendar);
    const emitModelValue = (val) => {
      emit("update:modelValue", val);
    };
    watch(
      () => props,
      () => {
        fieldProps.value = filterFieldProps(props);
        inputProps.value = VInput.filterProps(props);
      },
      {
        deep: true,
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-picker-field" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VInput), mergeProps({ ...unref(inputProps), ...unref(rootAttrs) }, {
        "model-value": _ctx.modelValue,
        "hide-details": props.hideDetails,
        class: [[{
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-text-field--flush-details": ["plain", "underlined"].includes(props.variant)
        }, props.class], "position-relative v-text-field"],
        style: props.style
      }), {
        default: withCtx(({ id, isDirty, isValid, isDisabled, isReadonly, validate }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VField), mergeProps({ ...unref(fieldProps) }, {
              id: id.value,
              role: "textbox",
              active: unref(focused) || isDirty.value || unref(isCalendarOpen),
              focused: unref(focused) || unref(isCalendarOpen),
              dirty: isDirty.value || props.dirty,
              error: isValid.value === false,
              disabled: isDisabled.value,
              "onClick:clear": onClear
            }), {
              default: withCtx(({ props: vFieldProps }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${ssrRenderAttrs(vFieldProps)}${_scopeId2}>`);
                  if (!unref(isInlinePicker)) {
                    _push3(ssrRenderComponent(unref(FlatPickr), mergeProps(unref(compAttrs), {
                      ref_key: "refFlatPicker",
                      ref: refFlatPicker,
                      "model-value": _ctx.modelValue,
                      placeholder: props.placeholder,
                      readonly: isReadonly.value,
                      class: "flat-picker-custom-style h-100 w-100",
                      disabled: isReadonly.value,
                      onOnOpen: ($event) => isCalendarOpen.value = true,
                      onOnClose: ($event) => {
                        isCalendarOpen.value = false;
                        validate();
                      },
                      "onUpdate:modelValue": emitModelValue
                    }), null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(isInlinePicker)) {
                    _push3(`<input${ssrRenderAttr("value", _ctx.modelValue)}${ssrRenderAttr("placeholder", props.placeholder)}${ssrIncludeBooleanAttr(isReadonly.value) ? " readonly" : ""} class="flat-picker-custom-style h-100 w-100" type="text"${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", vFieldProps, [
                      !unref(isInlinePicker) ? (openBlock(), createBlock(unref(FlatPickr), mergeProps({ key: 0 }, unref(compAttrs), {
                        ref_key: "refFlatPicker",
                        ref: refFlatPicker,
                        "model-value": _ctx.modelValue,
                        placeholder: props.placeholder,
                        readonly: isReadonly.value,
                        class: "flat-picker-custom-style h-100 w-100",
                        disabled: isReadonly.value,
                        onOnOpen: ($event) => isCalendarOpen.value = true,
                        onOnClose: ($event) => {
                          isCalendarOpen.value = false;
                          validate();
                        },
                        "onUpdate:modelValue": emitModelValue
                      }), null, 16, ["model-value", "placeholder", "readonly", "disabled", "onOnOpen", "onOnClose"])) : createCommentVNode("", true),
                      unref(isInlinePicker) ? (openBlock(), createBlock("input", {
                        key: 1,
                        value: _ctx.modelValue,
                        placeholder: props.placeholder,
                        readonly: isReadonly.value,
                        class: "flat-picker-custom-style h-100 w-100",
                        type: "text"
                      }, null, 8, ["value", "placeholder", "readonly"])) : createCommentVNode("", true)
                    ], 16)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VField), mergeProps({ ...unref(fieldProps) }, {
                id: id.value,
                role: "textbox",
                active: unref(focused) || isDirty.value || unref(isCalendarOpen),
                focused: unref(focused) || unref(isCalendarOpen),
                dirty: isDirty.value || props.dirty,
                error: isValid.value === false,
                disabled: isDisabled.value,
                "onClick:clear": onClear
              }), {
                default: withCtx(({ props: vFieldProps }) => [
                  createVNode("div", vFieldProps, [
                    !unref(isInlinePicker) ? (openBlock(), createBlock(unref(FlatPickr), mergeProps({ key: 0 }, unref(compAttrs), {
                      ref_key: "refFlatPicker",
                      ref: refFlatPicker,
                      "model-value": _ctx.modelValue,
                      placeholder: props.placeholder,
                      readonly: isReadonly.value,
                      class: "flat-picker-custom-style h-100 w-100",
                      disabled: isReadonly.value,
                      onOnOpen: ($event) => isCalendarOpen.value = true,
                      onOnClose: ($event) => {
                        isCalendarOpen.value = false;
                        validate();
                      },
                      "onUpdate:modelValue": emitModelValue
                    }), null, 16, ["model-value", "placeholder", "readonly", "disabled", "onOnOpen", "onOnClose"])) : createCommentVNode("", true),
                    unref(isInlinePicker) ? (openBlock(), createBlock("input", {
                      key: 1,
                      value: _ctx.modelValue,
                      placeholder: props.placeholder,
                      readonly: isReadonly.value,
                      class: "flat-picker-custom-style h-100 w-100",
                      type: "text"
                    }, null, 8, ["value", "placeholder", "readonly"])) : createCommentVNode("", true)
                  ], 16)
                ]),
                _: 2
              }, 1040, ["id", "active", "focused", "dirty", "error", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isInlinePicker)) {
        _push(ssrRenderComponent(unref(FlatPickr), mergeProps(unref(compAttrs), {
          ref_key: "refFlatPicker",
          ref: refFlatPicker,
          "model-value": _ctx.modelValue,
          "onUpdate:modelValue": emitModelValue,
          onOnOpen: ($event) => isCalendarOpen.value = true,
          onOnClose: ($event) => isCalendarOpen.value = false
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@core/components/app-form-elements/AppDateTimePicker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
