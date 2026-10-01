import { defineComponent, nextTick, h, useAttrs, ref, watch, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import flatpickr from 'flatpickr';
import { a as VInput, f as filterFieldProps, e as VField, g as makeVFieldProps, d as makeVInputProps } from './VTextField-Cx_BotQJ.mjs';
import { b6 as useConfigStore, ak as filterInputAttrs, b7 as useFocus, b8 as useTheme } from './server.mjs';

const includedEvents = [
    'onChange',
    'onClose',
    'onDestroy',
    'onMonthChange',
    'onOpen',
    'onYearChange',
];
// Let's not emit these events by default
const excludedEvents = [
    'onValueUpdate',
    'onDayCreate',
    'onParseConfig',
    'onReady',
    'onPreCalendarPosition',
    'onKeyDown',
];

function camelToKebab(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function arrayify(obj) {
    return obj instanceof Array
        ? obj
        : [obj];
}
function nullify(value) {
    return (value && value.length)
        ? value
        : null;
}

// Keep a copy of all events for later use
const allEvents = [...includedEvents, ...excludedEvents];
// Passing these properties in `fp.set()` method will cause flatpickr to trigger some callbacks
const configCallbacks = ['locale', 'showMonths'];
const Component = defineComponent({
    name: 'FlatPickr',
    compatConfig: {
        MODE: 3,
    },
    render() {
        return h('input', {
            type: 'text',
            'data-input': true,
            disabled: this.disabled,
            onInput: this.onInput,
        });
    },
    emits: [
        'blur',
        'update:modelValue',
        ...allEvents.map(camelToKebab)
    ],
    props: {
        modelValue: {
            type: [String, Number, Date, Array, null],
            required: true,
        },
        // https://flatpickr.js.org/options/
        config: {
            type: Object,
            default: () => ({
                defaultDate: null,
                wrap: false,
            })
        },
        events: {
            type: Array,
            default: () => includedEvents
        },
        disabled: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            fp: null, //todo make it non-reactive
        };
    },
    mounted() {
        // Return early if flatpickr is already loaded
        /* istanbul ignore if */
        if (this.fp)
            return;
        // Init flatpickr
        this.fp = flatpickr(this.getElem(), this.prepareConfig());
        // Attach blur event
        this.fpInput().addEventListener('blur', this.onBlur);
        // Immediate watch will fail before fp is set,
        // so we need to start watching after mount
        this.$watch('disabled', this.watchDisabled, {
            immediate: true
        });
    },
    methods: {
        prepareConfig() {
            // Don't mutate original object on parent component
            let safeConfig = Object.assign({}, this.config);
            this.events.forEach((hook) => {
                // Respect global callbacks registered via setDefault() method
                let globalCallbacks = flatpickr.defaultConfig[hook] || [];
                // Inject our own method along with user's callbacks
                let localCallback = (...args) => {
                    this.$emit(camelToKebab(hook), ...args);
                };
                // Overwrite with merged array
                safeConfig[hook] = arrayify(safeConfig[hook] || []).concat(globalCallbacks, localCallback);
            });
            const onCloseCb = this.onClose.bind(this);
            safeConfig['onClose'] = arrayify(safeConfig['onClose'] || []).concat(onCloseCb);
            // Set initial date without emitting any event
            safeConfig.defaultDate = this.modelValue || safeConfig.defaultDate;
            return safeConfig;
        },
        /**
         * Get the HTML node where flatpickr to be attached
         * Bind on parent element if wrap is true
         */
        getElem() {
            return this.config.wrap ? this.$el.parentNode : this.$el;
        },
        /**
         * Watch for value changed by date-picker itself and notify parent component
         */
        onInput(event) {
            const input = event.target;
            // Let's wait for DOM to be updated
            nextTick().then(() => {
                this.$emit('update:modelValue', nullify(input.value));
            });
        },
        fpInput() {
            return this.fp.altInput || this.fp.input;
        },
        /**
         * Blur event is required by many validation libraries
         */
        onBlur(event) {
            this.$emit('blur', nullify(event.target.value));
        },
        /**
         * Flatpickr does not emit input event in some cases
         */
        onClose(selectedDates, dateStr) {
            this.$emit('update:modelValue', dateStr);
        },
        /**
         * Watch for the disabled property and sets the value to the real input.
         */
        watchDisabled(newState) {
            if (newState) {
                this.fpInput().setAttribute('disabled', '');
            }
            else {
                this.fpInput().removeAttribute('disabled');
            }
        }
    },
    watch: {
        /**
         * Watch for any config changes and redraw date-picker
         */
        config: {
            deep: true,
            handler(newConfig) {
                if (!this.fp)
                    return;
                let safeConfig = Object.assign({}, newConfig);
                // Workaround: Don't pass hooks to configs again otherwise
                // previously registered hooks will stop working
                // Notice: we are looping through all events
                // This also means that new callbacks can not be passed once component has been initialized
                allEvents.forEach((hook) => {
                    delete safeConfig[hook];
                });
                this.fp.set(safeConfig);
                // Workaround: Allow to change locale dynamically
                configCallbacks.forEach((name) => {
                    if (typeof safeConfig[name] !== 'undefined') {
                        this.fp.set(name, safeConfig[name]);
                    }
                });
            }
        },
        /**
         * Watch for changes from parent component and update DOM
         */
        modelValue(newValue) {
            var _a;
            // Prevent updates if v-model value is same as input's current value
            if (!this.$el || newValue === nullify(this.$el.value))
                return;
            // Notify flatpickr instance that there is a change in value
            (_a = this.fp) === null || _a === void 0 ? void 0 : _a.setDate(newValue, true);
        }
    },
    beforeUnmount() {
        /* istanbul ignore else */
        if (!this.fp)
            return;
        this.fpInput().removeEventListener('blur', this.onBlur);
        this.fp.destroy();
        this.fp = null;
    }
});

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
                    _push3(ssrRenderComponent(unref(Component), mergeProps(unref(compAttrs), {
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
                      !unref(isInlinePicker) ? (openBlock(), createBlock(unref(Component), mergeProps({ key: 0 }, unref(compAttrs), {
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
                    !unref(isInlinePicker) ? (openBlock(), createBlock(unref(Component), mergeProps({ key: 0 }, unref(compAttrs), {
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
        _push(ssrRenderComponent(unref(Component), mergeProps(unref(compAttrs), {
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

export { _sfc_main as _ };
