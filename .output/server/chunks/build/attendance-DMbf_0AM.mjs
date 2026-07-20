import { defineComponent, nextTick, h, ref, computed, provide, watch, mergeProps, withCtx, unref, isRef, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, withModifiers, useAttrs, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import flatpickr from 'flatpickr';
import { V as VTextField, e as makeVFieldProps, d as makeVInputProps, a as VInput, f as filterFieldProps, g as VField } from './VTextField-jMGfwBDn.mjs';
import { aW as _export_sfc, c as useRouter$1, V as VBtn, a as VIcon, b3 as useConfigStore, ai as filterInputAttrs, b4 as useFocus, b5 as useTheme } from './server.mjs';
import { P as PresenceDialog } from './PresenceDialog-BqoYp1Xb.mjs';
import { _ as _sfc_main$3 } from './DialogCloseBtn-CVR_yFk0.mjs';
import { V as VDialog } from './VDialog-B0Ad2yj9.mjs';
import { V as VCard, a as VCardTitle, b as VCardActions, c as VCardItem } from './VCard-B42eN0YV.mjs';
import { V as VDivider } from './VDivider-Cdypedjq.mjs';
import { V as VCardText } from './VCardText-CaXtzNxg.mjs';
import { V as VChip } from './VChip-C0dLsv_T.mjs';
import { V as VAutocomplete } from './VAutocomplete-sPCSJtya.mjs';
import { V as VSelect } from './filter-BIe-IBmp.mjs';
import { V as VAvatar } from './VAvatar-B478BWXT.mjs';
import { V as VRow, a as VCol } from './VRow-BRD4hy0P.mjs';
import { V as VDataTableFooter } from './VDataTableFooter-BmXk9xgv.mjs';
import { V as VSnackbar } from './VSnackbar-DgaXWzkK.mjs';
import './index-CSomYp-Z.mjs';
import './forwardRefs-Oip3fNRq.mjs';
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
import './VCheckbox-BUqu-k0J.mjs';
import './VCheckboxBtn-BB8tUmIP.mjs';
import './VSelectionControl-B1a3mcFW.mjs';
import './VOverlay-gAZb14KV.mjs';
import './dialog-transition-CDwwEBKm.mjs';
import './VList-BNtS0p6J.mjs';
import './VMenu-C4ct7Xz7.mjs';

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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@core/components/app-form-elements/AppDateTimePicker.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AllStudentDialog",
  __ssrInlineRender: true,
  props: {
    isDialogVisible: { type: Boolean },
    students: {}
  },
  emits: ["update:isDialogVisible", "approve-student", "reject-student"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const onClose = () => {
      emit("update:isDialogVisible", false);
    };
    const isQuotaStatus = (badgeText) => {
      return badgeText.toLowerCase().startsWith("quota");
    };
    const getStatusChipColor = (badgeColor, badgeText) => {
      if (isQuotaStatus(badgeText)) return "warning";
      return "error";
    };
    const onApprove = (studentId) => {
      emit("approve-student", studentId);
    };
    const onReject = (studentId) => {
      emit("reject-student", studentId);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$3;
      _push(ssrRenderComponent(VDialog, mergeProps({
        "model-value": props.isDialogVisible,
        "max-width": "620",
        scrollable: "",
        "onUpdate:modelValue": (val) => emit("update:isDialogVisible", val)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "overflow-hidden all-student-dialog" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, { onClick: onClose }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardItem, { class: "px-6 pt-7 pb-5 d-flex flex-column align-center text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h4 class="text-h4 font-weight-medium text-high-emphasis mb-1" data-v-3708fbdf${_scopeId3}> All Student </h4><span class="text-body-2 text-medium-emphasis" data-v-3708fbdf${_scopeId3}>${ssrInterpolate(props.students.length)} Student Total </span>`);
                      } else {
                        return [
                          createVNode("h4", { class: "text-h4 font-weight-medium text-high-emphasis mb-1" }, " All Student "),
                          createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(props.students.length) + " Student Total ", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, {
                    class: "pa-0 overflow-y-auto",
                    style: { "max-height": "calc(90vh - 220px)" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (props.students.length === 0) {
                          _push4(`<div class="pa-8 text-center text-medium-emphasis text-body-2" data-v-3708fbdf${_scopeId3}> No students available. </div>`);
                        } else {
                          _push4(`<div class="d-flex flex-column" data-v-3708fbdf${_scopeId3}><!--[-->`);
                          ssrRenderList(props.students, (student, idx) => {
                            _push4(`<div class="student-row px-6 py-4 d-flex align-center gap-3 border-b border-light" data-v-3708fbdf${_scopeId3}><div class="student-idx bg-grey-50 text-caption font-weight-medium rounded-circle d-flex align-center justify-center flex-shrink-0" data-v-3708fbdf${_scopeId3}>${ssrInterpolate(idx + 1)}</div><div class="d-flex flex-column flex-grow-1 min-w-0" data-v-3708fbdf${_scopeId3}><span class="text-body-1 font-weight-medium text-high-emphasis text-truncate" data-v-3708fbdf${_scopeId3}>${ssrInterpolate(student.name)}</span><div class="d-flex align-center gap-1 mt-0.5 text-caption text-medium-emphasis" data-v-3708fbdf${_scopeId3}>`);
                            _push4(ssrRenderComponent(VIcon, {
                              icon: "ri-book-2-line",
                              size: "14",
                              class: "flex-shrink-0"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span class="text-truncate" data-v-3708fbdf${_scopeId3}>${ssrInterpolate(student.course)}</span></div></div>`);
                            _push4(ssrRenderComponent(VChip, {
                              color: getStatusChipColor(student.badgeColor, student.badgeText),
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium flex-shrink-0"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(student.badgeText)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(student.badgeText), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<div class="d-flex gap-1 flex-shrink-0" data-v-3708fbdf${_scopeId3}>`);
                            if (isQuotaStatus(student.badgeText)) {
                              _push4(`<!--[-->`);
                              _push4(ssrRenderComponent(VBtn, {
                                icon: "",
                                color: "success",
                                variant: "flat",
                                size: "x-small",
                                class: "action-icon-btn",
                                onClick: ($event) => onApprove(student.id)
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VIcon, {
                                      icon: "ri-check-line",
                                      size: "14"
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        icon: "ri-check-line",
                                        size: "14"
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(VBtn, {
                                icon: "",
                                color: "success",
                                variant: "flat",
                                size: "x-small",
                                class: "action-icon-btn",
                                onClick: ($event) => onApprove(student.id)
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VIcon, {
                                      icon: "ri-macbook-line",
                                      size: "14"
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        icon: "ri-macbook-line",
                                        size: "14"
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`<!--]-->`);
                            } else {
                              _push4(`<!--[-->`);
                              _push4(ssrRenderComponent(VBtn, {
                                icon: "",
                                color: "error",
                                variant: "flat",
                                size: "x-small",
                                class: "action-icon-btn",
                                onClick: ($event) => onReject(student.id)
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VIcon, {
                                      icon: "ri-close-line",
                                      size: "14"
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        icon: "ri-close-line",
                                        size: "14"
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(VBtn, {
                                icon: "",
                                color: "error",
                                variant: "flat",
                                size: "x-small",
                                class: "action-icon-btn",
                                onClick: ($event) => onReject(student.id)
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VIcon, {
                                      icon: "ri-subtract-line",
                                      size: "14"
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        icon: "ri-subtract-line",
                                        size: "14"
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`<!--]-->`);
                            }
                            _push4(`</div></div>`);
                          });
                          _push4(`<!--]--></div>`);
                        }
                      } else {
                        return [
                          props.students.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "pa-8 text-center text-medium-emphasis text-body-2"
                          }, " No students available. ")) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "d-flex flex-column"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(props.students, (student, idx) => {
                              return openBlock(), createBlock("div", {
                                key: student.id,
                                class: "student-row px-6 py-4 d-flex align-center gap-3 border-b border-light"
                              }, [
                                createVNode("div", { class: "student-idx bg-grey-50 text-caption font-weight-medium rounded-circle d-flex align-center justify-center flex-shrink-0" }, toDisplayString(idx + 1), 1),
                                createVNode("div", { class: "d-flex flex-column flex-grow-1 min-w-0" }, [
                                  createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                  createVNode("div", { class: "d-flex align-center gap-1 mt-0.5 text-caption text-medium-emphasis" }, [
                                    createVNode(VIcon, {
                                      icon: "ri-book-2-line",
                                      size: "14",
                                      class: "flex-shrink-0"
                                    }),
                                    createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                  ])
                                ]),
                                createVNode(VChip, {
                                  color: getStatusChipColor(student.badgeColor, student.badgeText),
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium flex-shrink-0"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(student.badgeText), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"]),
                                createVNode("div", { class: "d-flex gap-1 flex-shrink-0" }, [
                                  isQuotaStatus(student.badgeText) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createVNode(VBtn, {
                                      icon: "",
                                      color: "success",
                                      variant: "flat",
                                      size: "x-small",
                                      class: "action-icon-btn",
                                      onClick: ($event) => onApprove(student.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-check-line",
                                          size: "14"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(VBtn, {
                                      icon: "",
                                      color: "success",
                                      variant: "flat",
                                      size: "x-small",
                                      class: "action-icon-btn",
                                      onClick: ($event) => onApprove(student.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-macbook-line",
                                          size: "14"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createVNode(VBtn, {
                                      icon: "",
                                      color: "error",
                                      variant: "flat",
                                      size: "x-small",
                                      class: "action-icon-btn",
                                      onClick: ($event) => onReject(student.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-close-line",
                                          size: "14"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(VBtn, {
                                      icon: "",
                                      color: "error",
                                      variant: "flat",
                                      size: "x-small",
                                      class: "action-icon-btn",
                                      onClick: ($event) => onReject(student.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-subtract-line",
                                          size: "14"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ], 64))
                                ])
                              ]);
                            }), 128))
                          ]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, { onClick: onClose }),
                    createVNode(VCardItem, { class: "px-6 pt-7 pb-5 d-flex flex-column align-center text-center" }, {
                      default: withCtx(() => [
                        createVNode("h4", { class: "text-h4 font-weight-medium text-high-emphasis mb-1" }, " All Student "),
                        createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(props.students.length) + " Student Total ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardText, {
                      class: "pa-0 overflow-y-auto",
                      style: { "max-height": "calc(90vh - 220px)" }
                    }, {
                      default: withCtx(() => [
                        props.students.length === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "pa-8 text-center text-medium-emphasis text-body-2"
                        }, " No students available. ")) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "d-flex flex-column"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(props.students, (student, idx) => {
                            return openBlock(), createBlock("div", {
                              key: student.id,
                              class: "student-row px-6 py-4 d-flex align-center gap-3 border-b border-light"
                            }, [
                              createVNode("div", { class: "student-idx bg-grey-50 text-caption font-weight-medium rounded-circle d-flex align-center justify-center flex-shrink-0" }, toDisplayString(idx + 1), 1),
                              createVNode("div", { class: "d-flex flex-column flex-grow-1 min-w-0" }, [
                                createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                createVNode("div", { class: "d-flex align-center gap-1 mt-0.5 text-caption text-medium-emphasis" }, [
                                  createVNode(VIcon, {
                                    icon: "ri-book-2-line",
                                    size: "14",
                                    class: "flex-shrink-0"
                                  }),
                                  createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                ])
                              ]),
                              createVNode(VChip, {
                                color: getStatusChipColor(student.badgeColor, student.badgeText),
                                variant: "tonal",
                                size: "small",
                                class: "font-weight-medium flex-shrink-0"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(student.badgeText), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"]),
                              createVNode("div", { class: "d-flex gap-1 flex-shrink-0" }, [
                                isQuotaStatus(student.badgeText) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createVNode(VBtn, {
                                    icon: "",
                                    color: "success",
                                    variant: "flat",
                                    size: "x-small",
                                    class: "action-icon-btn",
                                    onClick: ($event) => onApprove(student.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-check-line",
                                        size: "14"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(VBtn, {
                                    icon: "",
                                    color: "success",
                                    variant: "flat",
                                    size: "x-small",
                                    class: "action-icon-btn",
                                    onClick: ($event) => onApprove(student.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-macbook-line",
                                        size: "14"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  createVNode(VBtn, {
                                    icon: "",
                                    color: "error",
                                    variant: "flat",
                                    size: "x-small",
                                    class: "action-icon-btn",
                                    onClick: ($event) => onReject(student.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-close-line",
                                        size: "14"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(VBtn, {
                                    icon: "",
                                    color: "error",
                                    variant: "flat",
                                    size: "x-small",
                                    class: "action-icon-btn",
                                    onClick: ($event) => onReject(student.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-subtract-line",
                                        size: "14"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ], 64))
                              ])
                            ]);
                          }), 128))
                        ]))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "overflow-hidden all-student-dialog" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, { onClick: onClose }),
                  createVNode(VCardItem, { class: "px-6 pt-7 pb-5 d-flex flex-column align-center text-center" }, {
                    default: withCtx(() => [
                      createVNode("h4", { class: "text-h4 font-weight-medium text-high-emphasis mb-1" }, " All Student "),
                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(props.students.length) + " Student Total ", 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardText, {
                    class: "pa-0 overflow-y-auto",
                    style: { "max-height": "calc(90vh - 220px)" }
                  }, {
                    default: withCtx(() => [
                      props.students.length === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "pa-8 text-center text-medium-emphasis text-body-2"
                      }, " No students available. ")) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "d-flex flex-column"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.students, (student, idx) => {
                          return openBlock(), createBlock("div", {
                            key: student.id,
                            class: "student-row px-6 py-4 d-flex align-center gap-3 border-b border-light"
                          }, [
                            createVNode("div", { class: "student-idx bg-grey-50 text-caption font-weight-medium rounded-circle d-flex align-center justify-center flex-shrink-0" }, toDisplayString(idx + 1), 1),
                            createVNode("div", { class: "d-flex flex-column flex-grow-1 min-w-0" }, [
                              createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                              createVNode("div", { class: "d-flex align-center gap-1 mt-0.5 text-caption text-medium-emphasis" }, [
                                createVNode(VIcon, {
                                  icon: "ri-book-2-line",
                                  size: "14",
                                  class: "flex-shrink-0"
                                }),
                                createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                              ])
                            ]),
                            createVNode(VChip, {
                              color: getStatusChipColor(student.badgeColor, student.badgeText),
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium flex-shrink-0"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(student.badgeText), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"]),
                            createVNode("div", { class: "d-flex gap-1 flex-shrink-0" }, [
                              isQuotaStatus(student.badgeText) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createVNode(VBtn, {
                                  icon: "",
                                  color: "success",
                                  variant: "flat",
                                  size: "x-small",
                                  class: "action-icon-btn",
                                  onClick: ($event) => onApprove(student.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-check-line",
                                      size: "14"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(VBtn, {
                                  icon: "",
                                  color: "success",
                                  variant: "flat",
                                  size: "x-small",
                                  class: "action-icon-btn",
                                  onClick: ($event) => onApprove(student.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-macbook-line",
                                      size: "14"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createVNode(VBtn, {
                                  icon: "",
                                  color: "error",
                                  variant: "flat",
                                  size: "x-small",
                                  class: "action-icon-btn",
                                  onClick: ($event) => onReject(student.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-close-line",
                                      size: "14"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(VBtn, {
                                  icon: "",
                                  color: "error",
                                  variant: "flat",
                                  size: "x-small",
                                  class: "action-icon-btn",
                                  onClick: ($event) => onReject(student.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-subtract-line",
                                      size: "14"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ], 64))
                            ])
                          ]);
                        }), 128))
                      ]))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialogs/AllStudentDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3708fbdf"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "attendance",
  __ssrInlineRender: true,
  setup(__props) {
    const mockClasses = ref([
      {
        id: "1",
        name: "Regular Kids",
        room: "Zoom Room 10",
        date: "Thu, 26 Feb 2026",
        teachersCount: 2,
        teachers: [
          { id: "t1", name: "Liam O'Connor" },
          { id: "t2", name: "Sophia Tran" }
        ],
        timeStart: "00:00",
        timeEnd: "01:30",
        duration: "2 hrs",
        className: "Private Teen Class Coding Camp",
        meetingType: "Group Class",
        meetingNumber: "Meeting 20",
        status: "Active",
        students: [
          { id: "s1", name: "Craig Septimus", course: "Python Coder", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s2", name: "Craig Septimus", course: "Advanced Algorithms", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false },
          { id: "s3", name: "Craig Septimus", course: "Mobile App Development", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false },
          { id: "s4", name: "Craig Septimus", course: "Data Science Essentials", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false },
          { id: "s5", name: "Craig Septimus", course: "Full-Stack Web Dev", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false },
          { id: "s6", name: "James Carter", course: "Python Coder", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: false },
          { id: "s7", name: "Emma Watson", course: "Python Coder", badgeText: "Expired", badgeColor: "error", isPresent: true, hasLaptop: true },
          { id: "s8", name: "Oliver Twist", course: "Python Coder", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false },
          { id: "s9", name: "Lucy Heart", course: "Python Coder", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s10", name: "Natsu Dragneel", course: "Python Coder", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false }
        ]
      },
      {
        id: "2",
        name: "Advanced Teens",
        room: "Zoom Room 12",
        date: "Thu, 26 Feb 2026",
        teachersCount: 3,
        teachers: [
          { id: "t1", name: "Liam O'Connor" },
          { id: "t2", name: "Sophia Tran" },
          { id: "t3", name: "Marcus Aurelius" }
        ],
        timeStart: "00:00",
        timeEnd: "01:30",
        duration: "2 hrs",
        className: "Private Teen Class Coding Camp",
        meetingType: "Group Class",
        meetingNumber: "Meeting 20",
        status: "Ongoing",
        students: [
          { id: "s11", name: "Alex Rivera", course: "AI Enthusiast", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s12", name: "Jamie Lee", course: "Robotics Explorer", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false },
          { id: "s13", name: "Jordan Kim", course: "Machine Learning Basics", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false },
          { id: "s14", name: "Peyton Smith", course: "Intro to AI", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false },
          { id: "s15", name: "Taylor Green", course: "Robotics 101", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false },
          { id: "s16", name: "Morgan Stark", course: "AI Enthusiast", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s17", name: "Peter Parker", course: "AI Enthusiast", badgeText: "Expired", badgeColor: "error", isPresent: true, hasLaptop: false }
        ]
      },
      {
        id: "3",
        name: "Future Coders",
        room: "Zoom Room 8",
        date: "Thu, 26 Feb 2026",
        teachersCount: 2,
        teachers: [
          { id: "t1", name: "Liam O'Connor" },
          { id: "t2", name: "Sophia Tran" }
        ],
        timeStart: "00:00",
        timeEnd: "01:30",
        duration: "2 hrs",
        className: "Private Teen Class Coding Camp",
        meetingType: "Group Class",
        meetingNumber: "Meeting 20",
        status: "Waiting Approval",
        students: [
          { id: "s18", name: "Lucas Scott", course: "Game Designer", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s19", name: "Sophie Green", course: "Interactive Game Developer", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false },
          { id: "s20", name: "Ethan Hall", course: "Unity Developer", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false }
        ]
      },
      {
        id: "4",
        name: "Young Inventors",
        room: "Zoom Room 5",
        date: "Thu, 26 Feb 2026",
        teachersCount: 1,
        teachers: [{ id: "t4", name: "Dr. Emmett Brown" }],
        timeStart: "08:00",
        timeEnd: "09:30",
        duration: "1.5 hrs",
        className: "Electronics for Beginners",
        meetingType: "Group Class",
        meetingNumber: "Meeting 5",
        status: "Active",
        students: [
          { id: "s21", name: "Marty McFly", course: "Electronics 101", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s22", name: "Jennifer Parker", course: "Electronics 101", badgeText: "Expired", badgeColor: "error", isPresent: true, hasLaptop: true }
        ]
      },
      {
        id: "5",
        name: "Python Wizards",
        room: "Zoom Room 15",
        date: "Thu, 26 Feb 2026",
        teachersCount: 2,
        teachers: [
          { id: "t5", name: "Severus Snape" },
          { id: "t6", name: "Minerva McGonagall" }
        ],
        timeStart: "10:00",
        timeEnd: "12:00",
        duration: "2 hrs",
        className: "Advanced Python Magic",
        meetingType: "Group Class",
        meetingNumber: "Meeting 12",
        status: "Active",
        students: [
          { id: "s23", name: "Harry Potter", course: "Python Magic", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s24", name: "Hermione Granger", course: "Python Magic", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s25", name: "Ron Weasley", course: "Python Magic", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false }
        ]
      },
      {
        id: "6",
        name: "Web Dev Novices",
        room: "Zoom Room 2",
        date: "Fri, 27 Feb 2026",
        teachersCount: 1,
        teachers: [{ id: "t7", name: "Tim Berners-Lee" }],
        timeStart: "13:00",
        timeEnd: "14:30",
        duration: "1.5 hrs",
        className: "Intro to HTML & CSS",
        meetingType: "Group Class",
        meetingNumber: "Meeting 1",
        status: "Waiting Approval",
        students: [
          { id: "s26", name: "Ada Lovelace", course: "HTML Basics", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s27", name: "Charles Babbage", course: "HTML Basics", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false }
        ]
      },
      {
        id: "7",
        name: "JS Hackers",
        room: "Zoom Room 14",
        date: "Fri, 27 Feb 2026",
        teachersCount: 2,
        teachers: [
          { id: "t8", name: "Brendan Eich" },
          { id: "t9", name: "Douglas Crockford" }
        ],
        timeStart: "15:00",
        timeEnd: "17:00",
        duration: "2 hrs",
        className: "JavaScript Essentials",
        meetingType: "Group Class",
        meetingNumber: "Meeting 8",
        status: "Active",
        students: [
          { id: "s28", name: "Linus Torvalds", course: "JS Scripting", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s29", name: "Richard Stallman", course: "JS Scripting", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false },
          { id: "s30", name: "Steve Jobs", course: "JS Scripting", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true }
        ]
      },
      {
        id: "8",
        name: "Robo Makers",
        room: "Zoom Room 7",
        date: "Fri, 27 Feb 2026",
        teachersCount: 1,
        teachers: [{ id: "t10", name: "Nikola Tesla" }],
        timeStart: "19:00",
        timeEnd: "21:00",
        duration: "2 hrs",
        className: "Robotics Assembly & Logic",
        meetingType: "Group Class",
        meetingNumber: "Meeting 15",
        status: "Active",
        students: [
          { id: "s31", name: "Alan Turing", course: "Robotics Assemblies", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s32", name: "Grace Hopper", course: "Robotics Assemblies", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true }
        ]
      },
      {
        id: "9",
        name: "Game Designers Club",
        room: "Zoom Room 9",
        date: "Sat, 28 Feb 2026",
        teachersCount: 2,
        teachers: [
          { id: "t11", name: "Shigeru Miyamoto" },
          { id: "t12", name: "Hideo Kojima" }
        ],
        timeStart: "10:00",
        timeEnd: "12:00",
        duration: "2 hrs",
        className: "Game Design Principles",
        meetingType: "Group Class",
        meetingNumber: "Meeting 6",
        status: "Active",
        students: [
          { id: "s33", name: "Sid Meier", course: "Design Rules", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s34", name: "Gabe Newell", course: "Design Rules", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false },
          { id: "s35", name: "John Carmack", course: "Design Rules", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true }
        ]
      },
      {
        id: "10",
        name: "Database Architects",
        room: "Zoom Room 11",
        date: "Sat, 28 Feb 2026",
        teachersCount: 1,
        teachers: [{ id: "t13", name: "Edgar F. Codd" }],
        timeStart: "14:00",
        timeEnd: "16:00",
        duration: "2 hrs",
        className: "SQL Schema Design & Normalization",
        meetingType: "Group Class",
        meetingNumber: "Meeting 9",
        status: "Active",
        students: [
          { id: "s36", name: "Donald Chamberlin", course: "SQL Fundamentals", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s37", name: "Raymond Boyce", course: "SQL Fundamentals", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false }
        ]
      },
      {
        id: "11",
        name: "Cyber Security Squad",
        room: "Zoom Room 1",
        date: "Sat, 28 Feb 2026",
        teachersCount: 2,
        teachers: [
          { id: "t14", name: "Kevin Mitnick" },
          { id: "t15", name: "Edward Snowden" }
        ],
        timeStart: "16:30",
        timeEnd: "18:30",
        duration: "2 hrs",
        className: "Security Standards & Hacking Defenses",
        meetingType: "Group Class",
        meetingNumber: "Meeting 21",
        status: "Waiting Approval",
        students: [
          { id: "s38", name: "Bruce Schneier", course: "Cryptography Basics", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s39", name: "Dorothy Denning", course: "Cryptography Basics", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false }
        ]
      },
      {
        id: "12",
        name: "AI Researchers Lab",
        room: "Zoom Room 3",
        date: "Sat, 28 Feb 2026",
        teachersCount: 2,
        teachers: [
          { id: "t16", name: "Geoffrey Hinton" },
          { id: "t17", name: "Yann LeCun" }
        ],
        timeStart: "19:00",
        timeEnd: "21:30",
        duration: "2.5 hrs",
        className: "Neural Networks & Deep Learning",
        meetingType: "Group Class",
        meetingNumber: "Meeting 30",
        status: "Active",
        students: [
          { id: "s40", name: "Yoshua Bengio", course: "Deep Learning", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s41", name: "Andrew Ng", course: "Deep Learning", badgeText: "Quota : 0", badgeColor: "warning", isPresent: true, hasLaptop: true },
          { id: "s42", name: "Fei-Fei Li", course: "Deep Learning", badgeText: "Expired", badgeColor: "error", isPresent: false, hasLaptop: false }
        ]
      }
    ]);
    const classesList = ref(JSON.parse(JSON.stringify(mockClasses.value)));
    const searchQuery = ref("");
    const selectedBranch = ref("All Branch");
    const selectedClassType = ref("Class type");
    const selectedCourse = ref("Course");
    const selectedDate = ref("June 10, 2024");
    const selectedTimeSegment = ref("00:00 - 06:00");
    const branchOptions = ["All Branch", "Main Branch", "Virtual Branch"];
    const classTypeOptions = ["Class type", "Group Class", "Private Class"];
    const courseOptions = ["Course", "Python Coder", "AI Enthusiast", "Game Designer", "Electronics 101", "Python Magic", "HTML Basics", "JS Scripting", "Robotics Assemblies", "Design Rules", "SQL Fundamentals", "Cryptography Basics", "Deep Learning"];
    const timeSegments = [
      { label: "06:00 - 12:00", icon: "ri-haze-line" },
      { label: "12:00 - 18:00", icon: "ri-sun-line" },
      { label: "18:00 - 00:00", icon: "ri-moon-line" },
      { label: "00:00 - 06:00", icon: "ri-moon-clear-line" }
    ];
    const resetFilters = () => {
      searchQuery.value = "";
      selectedBranch.value = "All Branch";
      selectedClassType.value = "Class type";
      selectedCourse.value = "Course";
      selectedDate.value = "June 10, 2024";
      selectedTimeSegment.value = "00:00 - 06:00";
    };
    const hasActiveFilter = computed(() => {
      return searchQuery.value !== "" || selectedBranch.value !== "All Branch" || selectedClassType.value !== "Class type" || selectedCourse.value !== "Course" || selectedDate.value !== "June 10, 2024" || selectedTimeSegment.value !== "00:00 - 06:00";
    });
    const activeFiltersCount = computed(() => {
      let count = 0;
      if (selectedBranch.value !== "All Branch") count++;
      if (selectedClassType.value !== "Class type") count++;
      if (selectedCourse.value !== "Course") count++;
      return count;
    });
    const formatFilterDate = (dateStr) => {
      if (!dateStr) return "";
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;
      const day = date.getDate();
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    };
    const hasActiveDateTime = computed(() => {
      return !!selectedDate.value || !!selectedTimeSegment.value;
    });
    const activeDateTimeText = computed(() => {
      const parts = [];
      if (selectedDate.value) {
        parts.push(formatFilterDate(selectedDate.value));
      }
      if (selectedTimeSegment.value) {
        parts.push(selectedTimeSegment.value);
      }
      return parts.length > 0 ? parts.join(", ") : "Date & Time";
    });
    const isTimeInSegment = (timeStr, segmentLabel) => {
      const [hours, minutes] = timeStr.split(":").map(Number);
      const totalMinutes = hours * 60 + minutes;
      if (segmentLabel === "06:00 - 12:00") {
        return totalMinutes >= 6 * 60 && totalMinutes < 12 * 60;
      } else if (segmentLabel === "12:00 - 18:00") {
        return totalMinutes >= 12 * 60 && totalMinutes < 18 * 60;
      } else if (segmentLabel === "18:00 - 00:00") {
        return totalMinutes >= 18 * 60 && totalMinutes < 24 * 60;
      } else if (segmentLabel === "00:00 - 06:00") {
        return totalMinutes >= 0 && totalMinutes < 6 * 60;
      }
      return true;
    };
    const filteredClasses = computed(() => {
      return classesList.value.filter((cls) => {
        const matchesSearch = searchQuery.value === "" || cls.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || cls.room.toLowerCase().includes(searchQuery.value.toLowerCase()) || cls.className.toLowerCase().includes(searchQuery.value.toLowerCase()) || cls.teachers.some((t) => t.name.toLowerCase().includes(searchQuery.value.toLowerCase())) || cls.students.some((s) => s.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
        const matchesClassType = selectedClassType.value === "Class type" || cls.meetingType === selectedClassType.value;
        const matchesCourse = selectedCourse.value === "Course" || cls.students.some((s) => s.course === selectedCourse.value);
        const matchesTimeSegment = selectedTimeSegment.value === "" || isTimeInSegment(cls.timeStart, selectedTimeSegment.value);
        return matchesSearch && matchesClassType && matchesCourse && matchesTimeSegment;
      });
    });
    const currentPage = ref(1);
    const itemsPerPageCustom = ref(5);
    const startIndex = computed(() => (currentPage.value - 1) * itemsPerPageCustom.value);
    const stopIndex = computed(() => Math.min(filteredClasses.value.length, startIndex.value + itemsPerPageCustom.value));
    const pageCount = computed(() => Math.ceil(filteredClasses.value.length / itemsPerPageCustom.value));
    provide(Symbol.for("vuetify:data-table-pagination"), {
      page: currentPage,
      itemsPerPage: itemsPerPageCustom,
      startIndex,
      stopIndex,
      pageCount,
      itemsLength: computed(() => filteredClasses.value.length),
      nextPage: () => {
        if (currentPage.value < pageCount.value) currentPage.value++;
      },
      prevPage: () => {
        if (currentPage.value > 1) currentPage.value--;
      },
      setPage: (value) => {
        currentPage.value = value;
      },
      setItemsPerPage: (value) => {
        itemsPerPageCustom.value = value;
        currentPage.value = 1;
      }
    });
    const paginatedClasses = computed(() => {
      return filteredClasses.value.slice(startIndex.value, stopIndex.value);
    });
    watch([searchQuery, selectedBranch, selectedClassType, selectedCourse, selectedDate, selectedTimeSegment], () => {
      currentPage.value = 1;
    });
    const isFilterModalActive = ref(false);
    const isDateModalActive = ref(false);
    const expandedCards = ref({});
    const toggleTeachers = (classId) => {
      if (!expandedCards.value[classId]) {
        expandedCards.value[classId] = { teachers: false, students: false };
      }
      expandedCards.value[classId].teachers = !expandedCards.value[classId].teachers;
    };
    const toggleStudents = (classId) => {
      if (!expandedCards.value[classId]) {
        expandedCards.value[classId] = { teachers: false, students: false };
      }
      expandedCards.value[classId].students = !expandedCards.value[classId].students;
    };
    const isTeachersExpanded = (classId) => {
      var _a2;
      var _a;
      return (_a2 = (_a = expandedCards.value[classId]) == null ? void 0 : _a.teachers) != null ? _a2 : false;
    };
    const isStudentsExpanded = (classId) => {
      var _a2;
      var _a;
      return (_a2 = (_a = expandedCards.value[classId]) == null ? void 0 : _a.students) != null ? _a2 : false;
    };
    const isPresenceDialogActive = ref(false);
    const activeClassSession = ref(null);
    const isStartClassTrigger = ref(false);
    const openPresenceDialog = (cls, isStart) => {
      activeClassSession.value = cls;
      isStartClassTrigger.value = isStart;
      isPresenceDialogActive.value = true;
    };
    const handlePresenceSubmit = (payload) => {
      if (activeClassSession.value) {
        const targetClass = classesList.value.find((c) => c.id === activeClassSession.value.id);
        if (targetClass) {
          targetClass.students = payload.students;
          if (isStartClassTrigger.value) {
            targetClass.status = "Ongoing";
            showToast(`Class "${targetClass.name}" started successfully.`);
          } else {
            showToast(`Attendance updated successfully for ${targetClass.name}.`);
          }
        }
      }
    };
    const isAllStudentDialogActive = ref(false);
    const activeStudentList = ref([]);
    const openAllStudentDialog = (cls) => {
      activeStudentList.value = cls.students;
      isAllStudentDialogActive.value = true;
    };
    const handleApproveStudent = (studentId) => {
      showToast(`Student ${studentId} approved.`, "success");
    };
    const handleRejectStudent = (studentId) => {
      showToast(`Student ${studentId} rejected.`, "error");
    };
    const toastShow = ref(false);
    const toastText = ref("");
    const toastColor = ref("success");
    const showToast = (message, color = "success") => {
      toastText.value = message;
      toastColor.value = color;
      toastShow.value = true;
    };
    const toggleAttendance = (classId, studentId) => {
      const cls = classesList.value.find((c) => c.id === classId);
      if (cls) {
        const student = cls.students.find((s) => s.id === studentId);
        if (student) {
          student.isPresent = !student.isPresent;
          showToast(`${student.name} attendance changed to ${student.isPresent ? "Present" : "Absent"}.`);
        }
      }
    };
    const toggleLaptop = (classId, studentId) => {
      const cls = classesList.value.find((c) => c.id === classId);
      if (cls) {
        const student = cls.students.find((s) => s.id === studentId);
        if (student) {
          student.hasLaptop = !student.hasLaptop;
          showToast(`${student.name} device status set to ${student.hasLaptop ? "Using Laptop" : "No Laptop"}.`);
        }
      }
    };
    const startClass = (cls) => {
      openPresenceDialog(cls, true);
    };
    const finishClass = (cls) => {
      cls.status = "Completed";
      showToast(`Class "${cls.name}" finished successfully.`);
    };
    const router = useRouter$1();
    const seeDetails = (cls) => {
      router.push({ name: "attendance-detail", query: { id: cls.id } });
    };
    const changeAllPresence = (cls) => {
      openPresenceDialog(cls, false);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$2;
      const _component_PresenceDialog = PresenceDialog;
      const _component_AllStudentDialog = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "attendance-page" }, _attrs))} data-v-fff386ee><div class="mb-5" data-v-fff386ee><h4 class="text-h4 font-weight-medium text-high-emphasis" data-v-fff386ee> Attendance </h4><p class="text-body-1 text-medium-emphasis mb-0" data-v-fff386ee> See and manage all attendance student </p></div>`);
      _push(ssrRenderComponent(VCard, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "py-5 px-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-none d-md-block" data-v-fff386ee${_scopeId2}><div class="d-flex align-center flex-wrap gap-4 w-100" data-v-fff386ee${_scopeId2}><div class="filter-input-search" data-v-fff386ee${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(searchQuery),
                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                    placeholder: "Search class or student...",
                    "prepend-inner-icon": "ri-search-line",
                    clearable: "",
                    density: "compact",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="filter-input" data-v-fff386ee${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAutocomplete, {
                    modelValue: unref(selectedBranch),
                    "onUpdate:modelValue": ($event) => isRef(selectedBranch) ? selectedBranch.value = $event : null,
                    items: branchOptions,
                    density: "compact",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="filter-input" data-v-fff386ee${_scopeId2}>`);
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: unref(selectedClassType),
                    "onUpdate:modelValue": ($event) => isRef(selectedClassType) ? selectedClassType.value = $event : null,
                    items: classTypeOptions,
                    density: "compact",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="filter-input" data-v-fff386ee${_scopeId2}>`);
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: unref(selectedCourse),
                    "onUpdate:modelValue": ($event) => isRef(selectedCourse) ? selectedCourse.value = $event : null,
                    items: courseOptions,
                    density: "compact",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "text",
                    color: "primary",
                    class: "text-capitalize",
                    disabled: !unref(hasActiveFilter),
                    onClick: resetFilters
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
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VDivider, { class: "my-5 mx-n5" }, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center flex-wrap gap-5 w-100" data-v-fff386ee${_scopeId2}><div class="filter-input" data-v-fff386ee${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AppDateTimePicker, {
                    modelValue: unref(selectedDate),
                    "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                    label: "Select date",
                    placeholder: "Select date",
                    "append-inner-icon": "ri-calendar-line",
                    density: "compact",
                    "hide-details": "",
                    config: { dateFormat: "F j, Y" }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="vertical-divider d-none d-md-block" data-v-fff386ee${_scopeId2}></div><div class="d-flex align-center flex-wrap gap-4" data-v-fff386ee${_scopeId2}><!--[-->`);
                  ssrRenderList(timeSegments, (seg) => {
                    _push3(ssrRenderComponent(VBtn, {
                      key: seg.label,
                      variant: unref(selectedTimeSegment) === seg.label ? "flat" : "outlined",
                      color: unref(selectedTimeSegment) === seg.label ? "primary" : "secondary",
                      class: "time-pill text-capitalize",
                      rounded: "xl",
                      size: "small",
                      onClick: ($event) => selectedTimeSegment.value = unref(selectedTimeSegment) === seg.label ? "" : seg.label
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            start: "",
                            icon: seg.icon,
                            size: "18",
                            class: "me-1"
                          }, null, _parent4, _scopeId3));
                          _push4(` ${ssrInterpolate(seg.label)}`);
                        } else {
                          return [
                            createVNode(VIcon, {
                              start: "",
                              icon: seg.icon,
                              size: "18",
                              class: "me-1"
                            }, null, 8, ["icon"]),
                            createTextVNode(" " + toDisplayString(seg.label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div></div></div><div class="d-flex d-md-none align-center flex-wrap gap-4 w-100" data-v-fff386ee${_scopeId2}><div class="filter-input-search flex-grow-1 flex-sm-grow-0" style="${ssrRenderStyle({ "width": "232px" })}" data-v-fff386ee${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(searchQuery),
                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                    placeholder: "Search class or student...",
                    "prepend-inner-icon": "ri-search-line",
                    clearable: "",
                    density: "compact",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="d-flex align-center flex-wrap gap-3 flex-grow-1 flex-sm-grow-0" data-v-fff386ee${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    variant: unref(activeFiltersCount) > 0 ? "flat" : "outlined",
                    color: unref(activeFiltersCount) > 0 ? "primary" : "secondary",
                    class: "time-pill text-capitalize flex-grow-1 flex-sm-grow-0",
                    onClick: ($event) => isFilterModalActive.value = true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          start: "",
                          icon: "ri-filter-line",
                          class: "me-1"
                        }, null, _parent4, _scopeId3));
                        _push4(` ${ssrInterpolate(unref(activeFiltersCount) > 0 ? `${unref(activeFiltersCount)} Active` : "Filter")}`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            start: "",
                            icon: "ri-filter-line",
                            class: "me-1"
                          }),
                          createTextVNode(" " + toDisplayString(unref(activeFiltersCount) > 0 ? `${unref(activeFiltersCount)} Active` : "Filter"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: unref(hasActiveDateTime) ? "flat" : "outlined",
                    color: unref(hasActiveDateTime) ? "primary" : "secondary",
                    class: "time-pill text-capitalize flex-grow-1 flex-sm-grow-0",
                    onClick: ($event) => isDateModalActive.value = true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          start: "",
                          icon: "ri-calendar-line",
                          class: "me-1"
                        }, null, _parent4, _scopeId3));
                        _push4(` ${ssrInterpolate(unref(activeDateTimeText))}`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            start: "",
                            icon: "ri-calendar-line",
                            class: "me-1"
                          }),
                          createTextVNode(" " + toDisplayString(unref(activeDateTimeText)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "text",
                    color: "primary",
                    class: "text-capitalize",
                    disabled: !unref(hasActiveFilter),
                    onClick: resetFilters
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
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-none d-md-block" }, [
                      createVNode("div", { class: "d-flex align-center flex-wrap gap-4 w-100" }, [
                        createVNode("div", { class: "filter-input-search" }, [
                          createVNode(VTextField, {
                            modelValue: unref(searchQuery),
                            "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                            placeholder: "Search class or student...",
                            "prepend-inner-icon": "ri-search-line",
                            clearable: "",
                            density: "compact",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "filter-input" }, [
                          createVNode(VAutocomplete, {
                            modelValue: unref(selectedBranch),
                            "onUpdate:modelValue": ($event) => isRef(selectedBranch) ? selectedBranch.value = $event : null,
                            items: branchOptions,
                            density: "compact",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "filter-input" }, [
                          createVNode(VSelect, {
                            modelValue: unref(selectedClassType),
                            "onUpdate:modelValue": ($event) => isRef(selectedClassType) ? selectedClassType.value = $event : null,
                            items: classTypeOptions,
                            density: "compact",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "filter-input" }, [
                          createVNode(VSelect, {
                            modelValue: unref(selectedCourse),
                            "onUpdate:modelValue": ($event) => isRef(selectedCourse) ? selectedCourse.value = $event : null,
                            items: courseOptions,
                            density: "compact",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode(VBtn, {
                          variant: "text",
                          color: "primary",
                          class: "text-capitalize",
                          disabled: !unref(hasActiveFilter),
                          onClick: resetFilters
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset Filter ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      createVNode(VDivider, { class: "my-5 mx-n5" }),
                      createVNode("div", { class: "d-flex align-center flex-wrap gap-5 w-100" }, [
                        createVNode("div", { class: "filter-input" }, [
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: unref(selectedDate),
                            "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                            label: "Select date",
                            placeholder: "Select date",
                            "append-inner-icon": "ri-calendar-line",
                            density: "compact",
                            "hide-details": "",
                            config: { dateFormat: "F j, Y" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "vertical-divider d-none d-md-block" }),
                        createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(timeSegments, (seg) => {
                            return createVNode(VBtn, {
                              key: seg.label,
                              variant: unref(selectedTimeSegment) === seg.label ? "flat" : "outlined",
                              color: unref(selectedTimeSegment) === seg.label ? "primary" : "secondary",
                              class: "time-pill text-capitalize",
                              rounded: "xl",
                              size: "small",
                              onClick: ($event) => selectedTimeSegment.value = unref(selectedTimeSegment) === seg.label ? "" : seg.label
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: seg.icon,
                                  size: "18",
                                  class: "me-1"
                                }, null, 8, ["icon"]),
                                createTextVNode(" " + toDisplayString(seg.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["variant", "color", "onClick"]);
                          }), 64))
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "d-flex d-md-none align-center flex-wrap gap-4 w-100" }, [
                      createVNode("div", {
                        class: "filter-input-search flex-grow-1 flex-sm-grow-0",
                        style: { "width": "232px" }
                      }, [
                        createVNode(VTextField, {
                          modelValue: unref(searchQuery),
                          "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                          placeholder: "Search class or student...",
                          "prepend-inner-icon": "ri-search-line",
                          clearable: "",
                          density: "compact",
                          "hide-details": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "d-flex align-center flex-wrap gap-3 flex-grow-1 flex-sm-grow-0" }, [
                        createVNode(VBtn, {
                          variant: unref(activeFiltersCount) > 0 ? "flat" : "outlined",
                          color: unref(activeFiltersCount) > 0 ? "primary" : "secondary",
                          class: "time-pill text-capitalize flex-grow-1 flex-sm-grow-0",
                          onClick: ($event) => isFilterModalActive.value = true
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              start: "",
                              icon: "ri-filter-line",
                              class: "me-1"
                            }),
                            createTextVNode(" " + toDisplayString(unref(activeFiltersCount) > 0 ? `${unref(activeFiltersCount)} Active` : "Filter"), 1)
                          ]),
                          _: 1
                        }, 8, ["variant", "color", "onClick"]),
                        createVNode(VBtn, {
                          variant: unref(hasActiveDateTime) ? "flat" : "outlined",
                          color: unref(hasActiveDateTime) ? "primary" : "secondary",
                          class: "time-pill text-capitalize flex-grow-1 flex-sm-grow-0",
                          onClick: ($event) => isDateModalActive.value = true
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              start: "",
                              icon: "ri-calendar-line",
                              class: "me-1"
                            }),
                            createTextVNode(" " + toDisplayString(unref(activeDateTimeText)), 1)
                          ]),
                          _: 1
                        }, 8, ["variant", "color", "onClick"]),
                        createVNode(VBtn, {
                          variant: "text",
                          color: "primary",
                          class: "text-capitalize",
                          disabled: !unref(hasActiveFilter),
                          onClick: resetFilters
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset Filter ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, { class: "py-5 px-5" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-none d-md-block" }, [
                    createVNode("div", { class: "d-flex align-center flex-wrap gap-4 w-100" }, [
                      createVNode("div", { class: "filter-input-search" }, [
                        createVNode(VTextField, {
                          modelValue: unref(searchQuery),
                          "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                          placeholder: "Search class or student...",
                          "prepend-inner-icon": "ri-search-line",
                          clearable: "",
                          density: "compact",
                          "hide-details": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "filter-input" }, [
                        createVNode(VAutocomplete, {
                          modelValue: unref(selectedBranch),
                          "onUpdate:modelValue": ($event) => isRef(selectedBranch) ? selectedBranch.value = $event : null,
                          items: branchOptions,
                          density: "compact",
                          "hide-details": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "filter-input" }, [
                        createVNode(VSelect, {
                          modelValue: unref(selectedClassType),
                          "onUpdate:modelValue": ($event) => isRef(selectedClassType) ? selectedClassType.value = $event : null,
                          items: classTypeOptions,
                          density: "compact",
                          "hide-details": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "filter-input" }, [
                        createVNode(VSelect, {
                          modelValue: unref(selectedCourse),
                          "onUpdate:modelValue": ($event) => isRef(selectedCourse) ? selectedCourse.value = $event : null,
                          items: courseOptions,
                          density: "compact",
                          "hide-details": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode(VBtn, {
                        variant: "text",
                        color: "primary",
                        class: "text-capitalize",
                        disabled: !unref(hasActiveFilter),
                        onClick: resetFilters
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset Filter ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    createVNode(VDivider, { class: "my-5 mx-n5" }),
                    createVNode("div", { class: "d-flex align-center flex-wrap gap-5 w-100" }, [
                      createVNode("div", { class: "filter-input" }, [
                        createVNode(_component_AppDateTimePicker, {
                          modelValue: unref(selectedDate),
                          "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                          label: "Select date",
                          placeholder: "Select date",
                          "append-inner-icon": "ri-calendar-line",
                          density: "compact",
                          "hide-details": "",
                          config: { dateFormat: "F j, Y" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "vertical-divider d-none d-md-block" }),
                      createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(timeSegments, (seg) => {
                          return createVNode(VBtn, {
                            key: seg.label,
                            variant: unref(selectedTimeSegment) === seg.label ? "flat" : "outlined",
                            color: unref(selectedTimeSegment) === seg.label ? "primary" : "secondary",
                            class: "time-pill text-capitalize",
                            rounded: "xl",
                            size: "small",
                            onClick: ($event) => selectedTimeSegment.value = unref(selectedTimeSegment) === seg.label ? "" : seg.label
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: seg.icon,
                                size: "18",
                                class: "me-1"
                              }, null, 8, ["icon"]),
                              createTextVNode(" " + toDisplayString(seg.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["variant", "color", "onClick"]);
                        }), 64))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "d-flex d-md-none align-center flex-wrap gap-4 w-100" }, [
                    createVNode("div", {
                      class: "filter-input-search flex-grow-1 flex-sm-grow-0",
                      style: { "width": "232px" }
                    }, [
                      createVNode(VTextField, {
                        modelValue: unref(searchQuery),
                        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                        placeholder: "Search class or student...",
                        "prepend-inner-icon": "ri-search-line",
                        clearable: "",
                        density: "compact",
                        "hide-details": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "d-flex align-center flex-wrap gap-3 flex-grow-1 flex-sm-grow-0" }, [
                      createVNode(VBtn, {
                        variant: unref(activeFiltersCount) > 0 ? "flat" : "outlined",
                        color: unref(activeFiltersCount) > 0 ? "primary" : "secondary",
                        class: "time-pill text-capitalize flex-grow-1 flex-sm-grow-0",
                        onClick: ($event) => isFilterModalActive.value = true
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "ri-filter-line",
                            class: "me-1"
                          }),
                          createTextVNode(" " + toDisplayString(unref(activeFiltersCount) > 0 ? `${unref(activeFiltersCount)} Active` : "Filter"), 1)
                        ]),
                        _: 1
                      }, 8, ["variant", "color", "onClick"]),
                      createVNode(VBtn, {
                        variant: unref(hasActiveDateTime) ? "flat" : "outlined",
                        color: unref(hasActiveDateTime) ? "primary" : "secondary",
                        class: "time-pill text-capitalize flex-grow-1 flex-sm-grow-0",
                        onClick: ($event) => isDateModalActive.value = true
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            icon: "ri-calendar-line",
                            class: "me-1"
                          }),
                          createTextVNode(" " + toDisplayString(unref(activeDateTimeText)), 1)
                        ]),
                        _: 1
                      }, 8, ["variant", "color", "onClick"]),
                      createVNode(VBtn, {
                        variant: "text",
                        color: "primary",
                        class: "text-capitalize",
                        disabled: !unref(hasActiveFilter),
                        onClick: resetFilters
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset Filter ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="d-flex align-center justify-space-between mb-4 px-1" data-v-fff386ee><span class="text-h6 font-weight-medium text-high-emphasis" data-v-fff386ee>Class list</span><span class="text-body-2 text-medium-emphasis" data-v-fff386ee>${ssrInterpolate(unref(filteredClasses).length)} classes displayed</span></div>`);
      if (unref(filteredClasses).length === 0) {
        _push(`<div class="text-center py-12 bg-surface border rounded-lg" data-v-fff386ee>`);
        _push(ssrRenderComponent(VIcon, {
          icon: "ri-calendar-check-line",
          size: "48",
          color: "disabled",
          class: "mb-2"
        }, null, _parent));
        _push(`<p class="text-body-1 text-medium-emphasis" data-v-fff386ee> No classes match the selected filters. </p>`);
        if (unref(hasActiveFilter)) {
          _push(ssrRenderComponent(VBtn, {
            color: "primary",
            size: "small",
            onClick: resetFilters
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Clear Filters `);
              } else {
                return [
                  createTextVNode(" Clear Filters ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="d-flex flex-column gap-5 mb-6" data-v-fff386ee><!--[-->`);
        ssrRenderList(unref(paginatedClasses), (cls) => {
          _push(ssrRenderComponent(VCard, {
            key: cls.id,
            class: "class-session-card",
            outlined: ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VCardText, { class: "pa-6" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="d-flex align-center justify-space-between flex-wrap gap-4 mb-4" data-v-fff386ee${_scopeId2}><div class="d-flex align-center flex-wrap gap-3" data-v-fff386ee${_scopeId2}>`);
                      _push3(ssrRenderComponent(VAvatar, {
                        size: "38",
                        rounded: "",
                        class: "border",
                        style: { "background-color": "rgba(var(--v-theme-primary), 0.08) !important", "border-color": "rgba(var(--v-theme-primary), 0.15) !important" }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VIcon, {
                              icon: "ri-user-line",
                              color: "primary",
                              size: "20"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VIcon, {
                                icon: "ri-user-line",
                                color: "primary",
                                size: "20"
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<div class="d-flex align-center flex-wrap gap-2" data-v-fff386ee${_scopeId2}><span class="text-h6 font-weight-medium text-high-emphasis" data-v-fff386ee${_scopeId2}>${ssrInterpolate(cls.name)}</span><span class="text-body-2 text-medium-emphasis" data-v-fff386ee${_scopeId2}>${ssrInterpolate(cls.room)}</span><span class="dot-separator bg-secondary" data-v-fff386ee${_scopeId2}></span><span class="text-body-2 text-medium-emphasis" data-v-fff386ee${_scopeId2}>${ssrInterpolate(cls.teachersCount)} Teachers</span>`);
                      _push3(ssrRenderComponent(VChip, {
                        color: "primary",
                        variant: "tonal",
                        size: "small",
                        class: "font-weight-medium"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(cls.date)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(cls.date), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div><div class="d-none d-md-flex align-center gap-2" data-v-fff386ee${_scopeId2}>`);
                      _push3(ssrRenderComponent(VBtn, {
                        variant: "tonal",
                        color: "primary",
                        class: "text-capitalize",
                        rounded: "xl",
                        onClick: ($event) => seeDetails(cls)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` See Details `);
                          } else {
                            return [
                              createTextVNode(" See Details ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      if (cls.status === "Active" || cls.status === "Waiting Approval") {
                        _push3(ssrRenderComponent(VBtn, {
                          color: "primary",
                          class: "text-capitalize",
                          rounded: "xl",
                          onClick: ($event) => startClass(cls)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` Start Class `);
                            } else {
                              return [
                                createTextVNode(" Start Class ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else if (cls.status === "Ongoing") {
                        _push3(ssrRenderComponent(VBtn, {
                          color: "primary",
                          class: "text-capitalize",
                          rounded: "xl",
                          onClick: ($event) => finishClass(cls)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` Finish Class `);
                            } else {
                              return [
                                createTextVNode(" Finish Class ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else if (cls.status === "Completed") {
                        _push3(ssrRenderComponent(VChip, {
                          color: "success",
                          variant: "tonal",
                          size: "small",
                          class: "font-weight-medium"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` Completed `);
                            } else {
                              return [
                                createTextVNode(" Completed ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><div class="d-flex d-md-none align-center gap-3 w-100 mt-2" data-v-fff386ee${_scopeId2}>`);
                      _push3(ssrRenderComponent(VBtn, {
                        variant: "tonal",
                        color: "primary",
                        class: "text-capitalize flex-grow-1",
                        rounded: "xl",
                        onClick: ($event) => seeDetails(cls)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` See Details `);
                          } else {
                            return [
                              createTextVNode(" See Details ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      if (cls.status === "Active" || cls.status === "Waiting Approval") {
                        _push3(ssrRenderComponent(VBtn, {
                          color: "primary",
                          class: "text-capitalize flex-grow-1",
                          rounded: "xl",
                          onClick: ($event) => startClass(cls)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` Start Class `);
                            } else {
                              return [
                                createTextVNode(" Start Class ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else if (cls.status === "Ongoing") {
                        _push3(ssrRenderComponent(VBtn, {
                          color: "primary",
                          class: "text-capitalize flex-grow-1",
                          rounded: "xl",
                          onClick: ($event) => finishClass(cls)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` Finish Class `);
                            } else {
                              return [
                                createTextVNode(" Finish Class ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<div class="d-flex justify-center flex-grow-1" data-v-fff386ee${_scopeId2}>`);
                        _push3(ssrRenderComponent(VChip, {
                          color: "success",
                          variant: "tonal",
                          size: "small",
                          class: "font-weight-medium w-100 justify-center py-4"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` Completed `);
                            } else {
                              return [
                                createTextVNode(" Completed ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                      }
                      _push3(`</div></div>`);
                      _push3(ssrRenderComponent(VDivider, { class: "mb-5" }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(VRow, { class: "d-none d-sm-flex" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "5",
                              class: "pe-sm-6 border-r-sm"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="d-flex flex-column gap-5" data-v-fff386ee${_scopeId4}><div class="d-flex flex-column gap-1" data-v-fff386ee${_scopeId4}><div class="d-flex align-center gap-2 mb-1" data-v-fff386ee${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "ri-time-line",
                                    color: "primary",
                                    size: "20"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span class="text-h6 font-weight-semibold text-primary mb-0" data-v-fff386ee${_scopeId4}>${ssrInterpolate(cls.timeStart)} - ${ssrInterpolate(cls.timeEnd)}</span>`);
                                  _push5(ssrRenderComponent(VChip, {
                                    color: "primary",
                                    variant: "tonal",
                                    size: "small",
                                    density: "comfortable"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(cls.duration)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(cls.duration), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div><span class="text-body-1 font-weight-medium text-high-emphasis leading-tight" data-v-fff386ee${_scopeId4}>${ssrInterpolate(cls.className)}</span><div class="d-flex align-center gap-2 mt-1" data-v-fff386ee${_scopeId4}><span class="text-body-2 text-medium-emphasis" data-v-fff386ee${_scopeId4}>${ssrInterpolate(cls.meetingType)}</span><span class="dot-separator bg-secondary" data-v-fff386ee${_scopeId4}></span><span class="text-body-2 text-medium-emphasis" data-v-fff386ee${_scopeId4}>${ssrInterpolate(cls.meetingType.split(" ")[0])} - <span class="text-primary font-weight-medium" data-v-fff386ee${_scopeId4}>${ssrInterpolate(cls.meetingNumber)}</span></span></div><div class="d-flex align-center gap-2 mt-1" data-v-fff386ee${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VChip, {
                                    color: "success",
                                    size: "small",
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` Active `);
                                      } else {
                                        return [
                                          createTextVNode(" Active ")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  if (cls.status === "Waiting Approval") {
                                    _push5(ssrRenderComponent(VChip, {
                                      color: "warning",
                                      size: "small",
                                      class: "font-weight-medium"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(` Waiting Approval `);
                                        } else {
                                          return [
                                            createTextVNode(" Waiting Approval ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div></div>`);
                                  _push5(ssrRenderComponent(VDivider, null, null, _parent5, _scopeId4));
                                  _push5(`<div class="d-flex flex-column gap-4" data-v-fff386ee${_scopeId4}><!--[-->`);
                                  ssrRenderList(cls.teachers, (teacher, index) => {
                                    _push5(`<div class="d-flex flex-column" data-v-fff386ee${_scopeId4}><span class="text-body-2 text-medium-emphasis font-weight-medium mb-1" data-v-fff386ee${_scopeId4}> Teacher ${ssrInterpolate(index + 1)}</span><span class="text-body-1 text-high-emphasis font-weight-medium" data-v-fff386ee${_scopeId4}>${ssrInterpolate(teacher.name)}</span>`);
                                    if (index < cls.teachers.length - 1) {
                                      _push5(ssrRenderComponent(VDivider, { class: "mt-3" }, null, _parent5, _scopeId4));
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    _push5(`</div>`);
                                  });
                                  _push5(`<!--]--></div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "d-flex flex-column gap-5" }, [
                                      createVNode("div", { class: "d-flex flex-column gap-1" }, [
                                        createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                                          createVNode(VIcon, {
                                            icon: "ri-time-line",
                                            color: "primary",
                                            size: "20"
                                          }),
                                          createVNode("span", { class: "text-h6 font-weight-semibold text-primary mb-0" }, toDisplayString(cls.timeStart) + " - " + toDisplayString(cls.timeEnd), 1),
                                          createVNode(VChip, {
                                            color: "primary",
                                            variant: "tonal",
                                            size: "small",
                                            density: "comfortable"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(cls.duration), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis leading-tight" }, toDisplayString(cls.className), 1),
                                        createVNode("div", { class: "d-flex align-center gap-2 mt-1" }, [
                                          createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(cls.meetingType), 1),
                                          createVNode("span", { class: "dot-separator bg-secondary" }),
                                          createVNode("span", { class: "text-body-2 text-medium-emphasis" }, [
                                            createTextVNode(toDisplayString(cls.meetingType.split(" ")[0]) + " - ", 1),
                                            createVNode("span", { class: "text-primary font-weight-medium" }, toDisplayString(cls.meetingNumber), 1)
                                          ])
                                        ]),
                                        createVNode("div", { class: "d-flex align-center gap-2 mt-1" }, [
                                          createVNode(VChip, {
                                            color: "success",
                                            size: "small",
                                            class: "font-weight-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Active ")
                                            ]),
                                            _: 1
                                          }),
                                          cls.status === "Waiting Approval" ? (openBlock(), createBlock(VChip, {
                                            key: 0,
                                            color: "warning",
                                            size: "small",
                                            class: "font-weight-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Waiting Approval ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      createVNode(VDivider),
                                      createVNode("div", { class: "d-flex flex-column gap-4" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(cls.teachers, (teacher, index) => {
                                          return openBlock(), createBlock("div", {
                                            key: teacher.id,
                                            class: "d-flex flex-column"
                                          }, [
                                            createVNode("span", { class: "text-body-2 text-medium-emphasis font-weight-medium mb-1" }, " Teacher " + toDisplayString(index + 1), 1),
                                            createVNode("span", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(teacher.name), 1),
                                            index < cls.teachers.length - 1 ? (openBlock(), createBlock(VDivider, {
                                              key: 0,
                                              class: "mt-3"
                                            })) : createCommentVNode("", true)
                                          ]);
                                        }), 128))
                                      ])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "7",
                              class: "ps-sm-6"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span class="text-body-2 text-medium-emphasis font-weight-medium mb-3 d-block" data-v-fff386ee${_scopeId4}> Student </span><div class="d-flex flex-column gap-3 student-list-container" data-v-fff386ee${_scopeId4}><!--[-->`);
                                  ssrRenderList(cls.students.slice(0, 5), (student, idx) => {
                                    _push5(`<div class="student-row d-flex align-center justify-space-between gap-3 py-1" data-v-fff386ee${_scopeId4}><div class="d-flex align-center gap-3 flex-grow-1 min-w-0" data-v-fff386ee${_scopeId4}><div class="student-idx bg-grey-50 text-caption font-weight-medium rounded-circle d-flex align-center justify-center" data-v-fff386ee${_scopeId4}>${ssrInterpolate(idx + 1)}</div><div class="d-flex flex-column min-w-0" data-v-fff386ee${_scopeId4}><span class="text-body-2 text-high-emphasis font-weight-medium text-truncate" data-v-fff386ee${_scopeId4}>${ssrInterpolate(student.name)}</span><div class="d-flex align-center gap-1 mt-0.5" data-v-fff386ee${_scopeId4}>`);
                                    _push5(ssrRenderComponent(VIcon, {
                                      icon: "ri-book-2-line",
                                      size: "14",
                                      color: "secondary"
                                    }, null, _parent5, _scopeId4));
                                    _push5(`<span class="text-caption text-medium-emphasis text-truncate leading-none" data-v-fff386ee${_scopeId4}>${ssrInterpolate(student.course)}</span></div></div></div><div class="d-flex align-center gap-2" data-v-fff386ee${_scopeId4}>`);
                                    _push5(ssrRenderComponent(VChip, {
                                      color: student.badgeColor,
                                      variant: "tonal",
                                      size: "small",
                                      class: "font-weight-medium"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(student.badgeText)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(student.badgeText), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(ssrRenderComponent(VBtn, {
                                      color: student.isPresent ? "success" : "error",
                                      icon: "",
                                      variant: "flat",
                                      size: "x-small",
                                      class: "toggle-btn",
                                      onClick: ($event) => toggleAttendance(cls.id, student.id)
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(VIcon, {
                                            icon: student.isPresent ? "ri-check-line" : "ri-close-line",
                                            size: "14"
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              icon: student.isPresent ? "ri-check-line" : "ri-close-line",
                                              size: "14"
                                            }, null, 8, ["icon"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(ssrRenderComponent(VBtn, {
                                      color: student.hasLaptop ? "success" : "error",
                                      icon: "",
                                      variant: "flat",
                                      size: "x-small",
                                      class: "toggle-btn",
                                      onClick: ($event) => toggleLaptop(cls.id, student.id)
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(VIcon, {
                                            icon: student.hasLaptop ? "ri-macbook-line" : "ri-subtract-line",
                                            size: "14"
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              icon: student.hasLaptop ? "ri-macbook-line" : "ri-subtract-line",
                                              size: "14"
                                            }, null, 8, ["icon"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(`</div></div>`);
                                  });
                                  _push5(`<!--]-->`);
                                  if (cls.students.length > 5) {
                                    _push5(`<div class="mt-1" data-v-fff386ee${_scopeId4}>`);
                                    _push5(ssrRenderComponent(VBtn, {
                                      variant: "text",
                                      color: "primary",
                                      size: "small",
                                      class: "px-0 font-weight-medium text-capitalize text-left justify-start",
                                      onClick: ($event) => openAllStudentDialog(cls)
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(` + ${ssrInterpolate(cls.students.length - 5)} more student${ssrInterpolate(cls.students.length - 5 > 1 ? "s" : "")}`);
                                        } else {
                                          return [
                                            createTextVNode(" + " + toDisplayString(cls.students.length - 5) + " more student" + toDisplayString(cls.students.length - 5 > 1 ? "s" : ""), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(`</div>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(ssrRenderComponent(VDivider, { class: "my-2" }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VBtn, {
                                    variant: "outlined",
                                    color: "primary",
                                    size: "small",
                                    class: "text-capitalize w-100 change-presence-btn",
                                    rounded: "xl",
                                    onClick: ($event) => changeAllPresence(cls)
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` Change Presence `);
                                      } else {
                                        return [
                                          createTextVNode(" Change Presence ")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("span", { class: "text-body-2 text-medium-emphasis font-weight-medium mb-3 d-block" }, " Student "),
                                    createVNode("div", { class: "d-flex flex-column gap-3 student-list-container" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(cls.students.slice(0, 5), (student, idx) => {
                                        return openBlock(), createBlock("div", {
                                          key: student.id,
                                          class: "student-row d-flex align-center justify-space-between gap-3 py-1"
                                        }, [
                                          createVNode("div", { class: "d-flex align-center gap-3 flex-grow-1 min-w-0" }, [
                                            createVNode("div", { class: "student-idx bg-grey-50 text-caption font-weight-medium rounded-circle d-flex align-center justify-center" }, toDisplayString(idx + 1), 1),
                                            createVNode("div", { class: "d-flex flex-column min-w-0" }, [
                                              createVNode("span", { class: "text-body-2 text-high-emphasis font-weight-medium text-truncate" }, toDisplayString(student.name), 1),
                                              createVNode("div", { class: "d-flex align-center gap-1 mt-0.5" }, [
                                                createVNode(VIcon, {
                                                  icon: "ri-book-2-line",
                                                  size: "14",
                                                  color: "secondary"
                                                }),
                                                createVNode("span", { class: "text-caption text-medium-emphasis text-truncate leading-none" }, toDisplayString(student.course), 1)
                                              ])
                                            ])
                                          ]),
                                          createVNode("div", { class: "d-flex align-center gap-2" }, [
                                            createVNode(VChip, {
                                              color: student.badgeColor,
                                              variant: "tonal",
                                              size: "small",
                                              class: "font-weight-medium"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(student.badgeText), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"]),
                                            createVNode(VBtn, {
                                              color: student.isPresent ? "success" : "error",
                                              icon: "",
                                              variant: "flat",
                                              size: "x-small",
                                              class: "toggle-btn",
                                              onClick: ($event) => toggleAttendance(cls.id, student.id)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: student.isPresent ? "ri-check-line" : "ri-close-line",
                                                  size: "14"
                                                }, null, 8, ["icon"])
                                              ]),
                                              _: 2
                                            }, 1032, ["color", "onClick"]),
                                            createVNode(VBtn, {
                                              color: student.hasLaptop ? "success" : "error",
                                              icon: "",
                                              variant: "flat",
                                              size: "x-small",
                                              class: "toggle-btn",
                                              onClick: ($event) => toggleLaptop(cls.id, student.id)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: student.hasLaptop ? "ri-macbook-line" : "ri-subtract-line",
                                                  size: "14"
                                                }, null, 8, ["icon"])
                                              ]),
                                              _: 2
                                            }, 1032, ["color", "onClick"])
                                          ])
                                        ]);
                                      }), 128)),
                                      cls.students.length > 5 ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "mt-1"
                                      }, [
                                        createVNode(VBtn, {
                                          variant: "text",
                                          color: "primary",
                                          size: "small",
                                          class: "px-0 font-weight-medium text-capitalize text-left justify-start",
                                          onClick: ($event) => openAllStudentDialog(cls)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" + " + toDisplayString(cls.students.length - 5) + " more student" + toDisplayString(cls.students.length - 5 > 1 ? "s" : ""), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])) : createCommentVNode("", true),
                                      createVNode(VDivider, { class: "my-2" }),
                                      createVNode(VBtn, {
                                        variant: "outlined",
                                        color: "primary",
                                        size: "small",
                                        class: "text-capitalize w-100 change-presence-btn",
                                        rounded: "xl",
                                        onClick: ($event) => changeAllPresence(cls)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Change Presence ")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "5",
                                class: "pe-sm-6 border-r-sm"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex flex-column gap-5" }, [
                                    createVNode("div", { class: "d-flex flex-column gap-1" }, [
                                      createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                                        createVNode(VIcon, {
                                          icon: "ri-time-line",
                                          color: "primary",
                                          size: "20"
                                        }),
                                        createVNode("span", { class: "text-h6 font-weight-semibold text-primary mb-0" }, toDisplayString(cls.timeStart) + " - " + toDisplayString(cls.timeEnd), 1),
                                        createVNode(VChip, {
                                          color: "primary",
                                          variant: "tonal",
                                          size: "small",
                                          density: "comfortable"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(cls.duration), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis leading-tight" }, toDisplayString(cls.className), 1),
                                      createVNode("div", { class: "d-flex align-center gap-2 mt-1" }, [
                                        createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(cls.meetingType), 1),
                                        createVNode("span", { class: "dot-separator bg-secondary" }),
                                        createVNode("span", { class: "text-body-2 text-medium-emphasis" }, [
                                          createTextVNode(toDisplayString(cls.meetingType.split(" ")[0]) + " - ", 1),
                                          createVNode("span", { class: "text-primary font-weight-medium" }, toDisplayString(cls.meetingNumber), 1)
                                        ])
                                      ]),
                                      createVNode("div", { class: "d-flex align-center gap-2 mt-1" }, [
                                        createVNode(VChip, {
                                          color: "success",
                                          size: "small",
                                          class: "font-weight-medium"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Active ")
                                          ]),
                                          _: 1
                                        }),
                                        cls.status === "Waiting Approval" ? (openBlock(), createBlock(VChip, {
                                          key: 0,
                                          color: "warning",
                                          size: "small",
                                          class: "font-weight-medium"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Waiting Approval ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    createVNode(VDivider),
                                    createVNode("div", { class: "d-flex flex-column gap-4" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(cls.teachers, (teacher, index) => {
                                        return openBlock(), createBlock("div", {
                                          key: teacher.id,
                                          class: "d-flex flex-column"
                                        }, [
                                          createVNode("span", { class: "text-body-2 text-medium-emphasis font-weight-medium mb-1" }, " Teacher " + toDisplayString(index + 1), 1),
                                          createVNode("span", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(teacher.name), 1),
                                          index < cls.teachers.length - 1 ? (openBlock(), createBlock(VDivider, {
                                            key: 0,
                                            class: "mt-3"
                                          })) : createCommentVNode("", true)
                                        ]);
                                      }), 128))
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "7",
                                class: "ps-sm-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-body-2 text-medium-emphasis font-weight-medium mb-3 d-block" }, " Student "),
                                  createVNode("div", { class: "d-flex flex-column gap-3 student-list-container" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(cls.students.slice(0, 5), (student, idx) => {
                                      return openBlock(), createBlock("div", {
                                        key: student.id,
                                        class: "student-row d-flex align-center justify-space-between gap-3 py-1"
                                      }, [
                                        createVNode("div", { class: "d-flex align-center gap-3 flex-grow-1 min-w-0" }, [
                                          createVNode("div", { class: "student-idx bg-grey-50 text-caption font-weight-medium rounded-circle d-flex align-center justify-center" }, toDisplayString(idx + 1), 1),
                                          createVNode("div", { class: "d-flex flex-column min-w-0" }, [
                                            createVNode("span", { class: "text-body-2 text-high-emphasis font-weight-medium text-truncate" }, toDisplayString(student.name), 1),
                                            createVNode("div", { class: "d-flex align-center gap-1 mt-0.5" }, [
                                              createVNode(VIcon, {
                                                icon: "ri-book-2-line",
                                                size: "14",
                                                color: "secondary"
                                              }),
                                              createVNode("span", { class: "text-caption text-medium-emphasis text-truncate leading-none" }, toDisplayString(student.course), 1)
                                            ])
                                          ])
                                        ]),
                                        createVNode("div", { class: "d-flex align-center gap-2" }, [
                                          createVNode(VChip, {
                                            color: student.badgeColor,
                                            variant: "tonal",
                                            size: "small",
                                            class: "font-weight-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(student.badgeText), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]),
                                          createVNode(VBtn, {
                                            color: student.isPresent ? "success" : "error",
                                            icon: "",
                                            variant: "flat",
                                            size: "x-small",
                                            class: "toggle-btn",
                                            onClick: ($event) => toggleAttendance(cls.id, student.id)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: student.isPresent ? "ri-check-line" : "ri-close-line",
                                                size: "14"
                                              }, null, 8, ["icon"])
                                            ]),
                                            _: 2
                                          }, 1032, ["color", "onClick"]),
                                          createVNode(VBtn, {
                                            color: student.hasLaptop ? "success" : "error",
                                            icon: "",
                                            variant: "flat",
                                            size: "x-small",
                                            class: "toggle-btn",
                                            onClick: ($event) => toggleLaptop(cls.id, student.id)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: student.hasLaptop ? "ri-macbook-line" : "ri-subtract-line",
                                                size: "14"
                                              }, null, 8, ["icon"])
                                            ]),
                                            _: 2
                                          }, 1032, ["color", "onClick"])
                                        ])
                                      ]);
                                    }), 128)),
                                    cls.students.length > 5 ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "mt-1"
                                    }, [
                                      createVNode(VBtn, {
                                        variant: "text",
                                        color: "primary",
                                        size: "small",
                                        class: "px-0 font-weight-medium text-capitalize text-left justify-start",
                                        onClick: ($event) => openAllStudentDialog(cls)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" + " + toDisplayString(cls.students.length - 5) + " more student" + toDisplayString(cls.students.length - 5 > 1 ? "s" : ""), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])) : createCommentVNode("", true),
                                    createVNode(VDivider, { class: "my-2" }),
                                    createVNode(VBtn, {
                                      variant: "outlined",
                                      color: "primary",
                                      size: "small",
                                      class: "text-capitalize w-100 change-presence-btn",
                                      rounded: "xl",
                                      onClick: ($event) => changeAllPresence(cls)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Change Presence ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<div class="d-block d-sm-none" data-v-fff386ee${_scopeId2}><div class="d-flex flex-column gap-1 mb-4" data-v-fff386ee${_scopeId2}><div class="d-flex align-center gap-2 mb-1" data-v-fff386ee${_scopeId2}>`);
                      _push3(ssrRenderComponent(VIcon, {
                        icon: "ri-time-line",
                        color: "primary",
                        size: "20"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="text-h6 font-weight-semibold text-primary mb-0" data-v-fff386ee${_scopeId2}>${ssrInterpolate(cls.timeStart)} - ${ssrInterpolate(cls.timeEnd)}</span>`);
                      _push3(ssrRenderComponent(VChip, {
                        color: "primary",
                        variant: "tonal",
                        size: "small",
                        density: "comfortable"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(cls.duration)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(cls.duration), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div><span class="text-body-1 font-weight-medium text-high-emphasis leading-tight" data-v-fff386ee${_scopeId2}>${ssrInterpolate(cls.className)}</span><div class="d-flex align-center gap-2 mt-1" data-v-fff386ee${_scopeId2}><span class="text-body-2 text-medium-emphasis" data-v-fff386ee${_scopeId2}>${ssrInterpolate(cls.meetingType)}</span><span class="dot-separator bg-secondary" data-v-fff386ee${_scopeId2}></span><span class="text-body-2 text-medium-emphasis" data-v-fff386ee${_scopeId2}>${ssrInterpolate(cls.meetingType.split(" ")[0])} - <span class="text-primary font-weight-medium" data-v-fff386ee${_scopeId2}>${ssrInterpolate(cls.meetingNumber)}</span></span></div><div class="d-flex align-center gap-2 mt-1" data-v-fff386ee${_scopeId2}>`);
                      _push3(ssrRenderComponent(VChip, {
                        color: "success",
                        size: "small",
                        class: "font-weight-medium"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Active `);
                          } else {
                            return [
                              createTextVNode(" Active ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      if (cls.status === "Waiting Approval") {
                        _push3(ssrRenderComponent(VChip, {
                          color: "warning",
                          size: "small",
                          class: "font-weight-medium"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` Waiting Approval `);
                            } else {
                              return [
                                createTextVNode(" Waiting Approval ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div>`);
                      _push3(ssrRenderComponent(VDivider, { class: "my-3" }, null, _parent3, _scopeId2));
                      _push3(`<div class="d-flex align-center justify-space-between py-2 px-1" data-v-fff386ee${_scopeId2}><a href="#" class="text-body-2 text-primary font-weight-medium text-decoration-none" data-v-fff386ee${_scopeId2}>${ssrInterpolate(isTeachersExpanded(cls.id) ? "Hide Teachers" : `Show Teachers (${cls.teachers.length})`)}</a><a href="#" class="text-body-2 text-primary font-weight-medium text-decoration-none" data-v-fff386ee${_scopeId2}>${ssrInterpolate(isStudentsExpanded(cls.id) ? "Hide Students" : `Show Students (${cls.students.length})`)}</a></div>`);
                      if (isTeachersExpanded(cls.id)) {
                        _push3(`<div class="py-3 px-1 d-flex flex-column gap-3 bg-light rounded mb-3" data-v-fff386ee${_scopeId2}><span class="text-body-2 font-weight-bold text-medium-emphasis" data-v-fff386ee${_scopeId2}>Teachers</span><!--[-->`);
                        ssrRenderList(cls.teachers, (teacher, index) => {
                          _push3(`<div class="d-flex flex-column" data-v-fff386ee${_scopeId2}><span class="text-body-2 text-medium-emphasis font-weight-medium mb-1" data-v-fff386ee${_scopeId2}> Teacher ${ssrInterpolate(index + 1)}</span><span class="text-body-1 text-high-emphasis font-weight-medium" data-v-fff386ee${_scopeId2}>${ssrInterpolate(teacher.name)}</span>`);
                          if (index < cls.teachers.length - 1) {
                            _push3(ssrRenderComponent(VDivider, { class: "mt-2" }, null, _parent3, _scopeId2));
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(`</div>`);
                        });
                        _push3(`<!--]--></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (isStudentsExpanded(cls.id)) {
                        _push3(`<div class="py-3 px-1 d-flex flex-column gap-3 mb-3" data-v-fff386ee${_scopeId2}><span class="text-body-2 font-weight-bold text-medium-emphasis" data-v-fff386ee${_scopeId2}>Students</span><div class="d-flex flex-column gap-3 student-list-container" data-v-fff386ee${_scopeId2}><!--[-->`);
                        ssrRenderList(cls.students.slice(0, 5), (student, idx) => {
                          _push3(`<div class="student-row d-flex align-center justify-space-between gap-3 py-1" data-v-fff386ee${_scopeId2}><div class="d-flex align-center gap-3 flex-grow-1 min-w-0" data-v-fff386ee${_scopeId2}><div class="student-idx bg-grey-50 text-caption font-weight-medium rounded-circle d-flex align-center justify-center" data-v-fff386ee${_scopeId2}>${ssrInterpolate(idx + 1)}</div><div class="d-flex flex-column min-w-0" data-v-fff386ee${_scopeId2}><span class="text-body-2 text-high-emphasis font-weight-medium text-truncate" data-v-fff386ee${_scopeId2}>${ssrInterpolate(student.name)}</span><div class="d-flex align-center gap-1 mt-0.5" data-v-fff386ee${_scopeId2}>`);
                          _push3(ssrRenderComponent(VIcon, {
                            icon: "ri-book-2-line",
                            size: "14",
                            color: "secondary"
                          }, null, _parent3, _scopeId2));
                          _push3(`<span class="text-caption text-medium-emphasis text-truncate leading-none" data-v-fff386ee${_scopeId2}>${ssrInterpolate(student.course)}</span></div></div></div><div class="d-flex align-center gap-2" data-v-fff386ee${_scopeId2}>`);
                          _push3(ssrRenderComponent(VChip, {
                            color: student.badgeColor,
                            variant: "tonal",
                            size: "small",
                            class: "font-weight-medium"
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`${ssrInterpolate(student.badgeText)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(student.badgeText), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                          _push3(ssrRenderComponent(VBtn, {
                            color: student.isPresent ? "success" : "error",
                            icon: "",
                            variant: "flat",
                            size: "x-small",
                            class: "toggle-btn",
                            onClick: ($event) => toggleAttendance(cls.id, student.id)
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(ssrRenderComponent(VIcon, {
                                  icon: student.isPresent ? "ri-check-line" : "ri-close-line",
                                  size: "14"
                                }, null, _parent4, _scopeId3));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: student.isPresent ? "ri-check-line" : "ri-close-line",
                                    size: "14"
                                  }, null, 8, ["icon"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                          _push3(ssrRenderComponent(VBtn, {
                            color: student.hasLaptop ? "success" : "error",
                            icon: "",
                            variant: "flat",
                            size: "x-small",
                            class: "toggle-btn",
                            onClick: ($event) => toggleLaptop(cls.id, student.id)
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(ssrRenderComponent(VIcon, {
                                  icon: student.hasLaptop ? "ri-macbook-line" : "ri-subtract-line",
                                  size: "14"
                                }, null, _parent4, _scopeId3));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: student.hasLaptop ? "ri-macbook-line" : "ri-subtract-line",
                                    size: "14"
                                  }, null, 8, ["icon"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                          _push3(`</div></div>`);
                        });
                        _push3(`<!--]-->`);
                        if (cls.students.length > 5) {
                          _push3(`<div class="mt-1" data-v-fff386ee${_scopeId2}>`);
                          _push3(ssrRenderComponent(VBtn, {
                            variant: "text",
                            color: "primary",
                            size: "small",
                            class: "px-0 font-weight-medium text-capitalize text-left justify-start",
                            onClick: ($event) => openAllStudentDialog(cls)
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(` + ${ssrInterpolate(cls.students.length - 5)} more student${ssrInterpolate(cls.students.length - 5 > 1 ? "s" : "")}`);
                              } else {
                                return [
                                  createTextVNode(" + " + toDisplayString(cls.students.length - 5) + " more student" + toDisplayString(cls.students.length - 5 > 1 ? "s" : ""), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(ssrRenderComponent(VDivider, { class: "my-3" }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(VBtn, {
                        variant: "outlined",
                        color: "primary",
                        size: "small",
                        class: "text-capitalize w-100 change-presence-btn",
                        rounded: "xl",
                        onClick: ($event) => changeAllPresence(cls)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Change Presence `);
                          } else {
                            return [
                              createTextVNode(" Change Presence ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-4 mb-4" }, [
                          createVNode("div", { class: "d-flex align-center flex-wrap gap-3" }, [
                            createVNode(VAvatar, {
                              size: "38",
                              rounded: "",
                              class: "border",
                              style: { "background-color": "rgba(var(--v-theme-primary), 0.08) !important", "border-color": "rgba(var(--v-theme-primary), 0.15) !important" }
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-user-line",
                                  color: "primary",
                                  size: "20"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "d-flex align-center flex-wrap gap-2" }, [
                              createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, toDisplayString(cls.name), 1),
                              createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(cls.room), 1),
                              createVNode("span", { class: "dot-separator bg-secondary" }),
                              createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(cls.teachersCount) + " Teachers", 1),
                              createVNode(VChip, {
                                color: "primary",
                                variant: "tonal",
                                size: "small",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(cls.date), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ]),
                          createVNode("div", { class: "d-none d-md-flex align-center gap-2" }, [
                            createVNode(VBtn, {
                              variant: "tonal",
                              color: "primary",
                              class: "text-capitalize",
                              rounded: "xl",
                              onClick: ($event) => seeDetails(cls)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" See Details ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            cls.status === "Active" || cls.status === "Waiting Approval" ? (openBlock(), createBlock(VBtn, {
                              key: 0,
                              color: "primary",
                              class: "text-capitalize",
                              rounded: "xl",
                              onClick: ($event) => startClass(cls)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Start Class ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : cls.status === "Ongoing" ? (openBlock(), createBlock(VBtn, {
                              key: 1,
                              color: "primary",
                              class: "text-capitalize",
                              rounded: "xl",
                              onClick: ($event) => finishClass(cls)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Finish Class ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : cls.status === "Completed" ? (openBlock(), createBlock(VChip, {
                              key: 2,
                              color: "success",
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Completed ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "d-flex d-md-none align-center gap-3 w-100 mt-2" }, [
                            createVNode(VBtn, {
                              variant: "tonal",
                              color: "primary",
                              class: "text-capitalize flex-grow-1",
                              rounded: "xl",
                              onClick: ($event) => seeDetails(cls)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" See Details ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            cls.status === "Active" || cls.status === "Waiting Approval" ? (openBlock(), createBlock(VBtn, {
                              key: 0,
                              color: "primary",
                              class: "text-capitalize flex-grow-1",
                              rounded: "xl",
                              onClick: ($event) => startClass(cls)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Start Class ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : cls.status === "Ongoing" ? (openBlock(), createBlock(VBtn, {
                              key: 1,
                              color: "primary",
                              class: "text-capitalize flex-grow-1",
                              rounded: "xl",
                              onClick: ($event) => finishClass(cls)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Finish Class ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : (openBlock(), createBlock("div", {
                              key: 2,
                              class: "d-flex justify-center flex-grow-1"
                            }, [
                              createVNode(VChip, {
                                color: "success",
                                variant: "tonal",
                                size: "small",
                                class: "font-weight-medium w-100 justify-center py-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Completed ")
                                ]),
                                _: 1
                              })
                            ]))
                          ])
                        ]),
                        createVNode(VDivider, { class: "mb-5" }),
                        createVNode(VRow, { class: "d-none d-sm-flex" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "5",
                              class: "pe-sm-6 border-r-sm"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex flex-column gap-5" }, [
                                  createVNode("div", { class: "d-flex flex-column gap-1" }, [
                                    createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                                      createVNode(VIcon, {
                                        icon: "ri-time-line",
                                        color: "primary",
                                        size: "20"
                                      }),
                                      createVNode("span", { class: "text-h6 font-weight-semibold text-primary mb-0" }, toDisplayString(cls.timeStart) + " - " + toDisplayString(cls.timeEnd), 1),
                                      createVNode(VChip, {
                                        color: "primary",
                                        variant: "tonal",
                                        size: "small",
                                        density: "comfortable"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(cls.duration), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis leading-tight" }, toDisplayString(cls.className), 1),
                                    createVNode("div", { class: "d-flex align-center gap-2 mt-1" }, [
                                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(cls.meetingType), 1),
                                      createVNode("span", { class: "dot-separator bg-secondary" }),
                                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, [
                                        createTextVNode(toDisplayString(cls.meetingType.split(" ")[0]) + " - ", 1),
                                        createVNode("span", { class: "text-primary font-weight-medium" }, toDisplayString(cls.meetingNumber), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "d-flex align-center gap-2 mt-1" }, [
                                      createVNode(VChip, {
                                        color: "success",
                                        size: "small",
                                        class: "font-weight-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Active ")
                                        ]),
                                        _: 1
                                      }),
                                      cls.status === "Waiting Approval" ? (openBlock(), createBlock(VChip, {
                                        key: 0,
                                        color: "warning",
                                        size: "small",
                                        class: "font-weight-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Waiting Approval ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode(VDivider),
                                  createVNode("div", { class: "d-flex flex-column gap-4" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(cls.teachers, (teacher, index) => {
                                      return openBlock(), createBlock("div", {
                                        key: teacher.id,
                                        class: "d-flex flex-column"
                                      }, [
                                        createVNode("span", { class: "text-body-2 text-medium-emphasis font-weight-medium mb-1" }, " Teacher " + toDisplayString(index + 1), 1),
                                        createVNode("span", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(teacher.name), 1),
                                        index < cls.teachers.length - 1 ? (openBlock(), createBlock(VDivider, {
                                          key: 0,
                                          class: "mt-3"
                                        })) : createCommentVNode("", true)
                                      ]);
                                    }), 128))
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "7",
                              class: "ps-sm-6"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-body-2 text-medium-emphasis font-weight-medium mb-3 d-block" }, " Student "),
                                createVNode("div", { class: "d-flex flex-column gap-3 student-list-container" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(cls.students.slice(0, 5), (student, idx) => {
                                    return openBlock(), createBlock("div", {
                                      key: student.id,
                                      class: "student-row d-flex align-center justify-space-between gap-3 py-1"
                                    }, [
                                      createVNode("div", { class: "d-flex align-center gap-3 flex-grow-1 min-w-0" }, [
                                        createVNode("div", { class: "student-idx bg-grey-50 text-caption font-weight-medium rounded-circle d-flex align-center justify-center" }, toDisplayString(idx + 1), 1),
                                        createVNode("div", { class: "d-flex flex-column min-w-0" }, [
                                          createVNode("span", { class: "text-body-2 text-high-emphasis font-weight-medium text-truncate" }, toDisplayString(student.name), 1),
                                          createVNode("div", { class: "d-flex align-center gap-1 mt-0.5" }, [
                                            createVNode(VIcon, {
                                              icon: "ri-book-2-line",
                                              size: "14",
                                              color: "secondary"
                                            }),
                                            createVNode("span", { class: "text-caption text-medium-emphasis text-truncate leading-none" }, toDisplayString(student.course), 1)
                                          ])
                                        ])
                                      ]),
                                      createVNode("div", { class: "d-flex align-center gap-2" }, [
                                        createVNode(VChip, {
                                          color: student.badgeColor,
                                          variant: "tonal",
                                          size: "small",
                                          class: "font-weight-medium"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(student.badgeText), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode(VBtn, {
                                          color: student.isPresent ? "success" : "error",
                                          icon: "",
                                          variant: "flat",
                                          size: "x-small",
                                          class: "toggle-btn",
                                          onClick: ($event) => toggleAttendance(cls.id, student.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: student.isPresent ? "ri-check-line" : "ri-close-line",
                                              size: "14"
                                            }, null, 8, ["icon"])
                                          ]),
                                          _: 2
                                        }, 1032, ["color", "onClick"]),
                                        createVNode(VBtn, {
                                          color: student.hasLaptop ? "success" : "error",
                                          icon: "",
                                          variant: "flat",
                                          size: "x-small",
                                          class: "toggle-btn",
                                          onClick: ($event) => toggleLaptop(cls.id, student.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: student.hasLaptop ? "ri-macbook-line" : "ri-subtract-line",
                                              size: "14"
                                            }, null, 8, ["icon"])
                                          ]),
                                          _: 2
                                        }, 1032, ["color", "onClick"])
                                      ])
                                    ]);
                                  }), 128)),
                                  cls.students.length > 5 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "mt-1"
                                  }, [
                                    createVNode(VBtn, {
                                      variant: "text",
                                      color: "primary",
                                      size: "small",
                                      class: "px-0 font-weight-medium text-capitalize text-left justify-start",
                                      onClick: ($event) => openAllStudentDialog(cls)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" + " + toDisplayString(cls.students.length - 5) + " more student" + toDisplayString(cls.students.length - 5 > 1 ? "s" : ""), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ])) : createCommentVNode("", true),
                                  createVNode(VDivider, { class: "my-2" }),
                                  createVNode(VBtn, {
                                    variant: "outlined",
                                    color: "primary",
                                    size: "small",
                                    class: "text-capitalize w-100 change-presence-btn",
                                    rounded: "xl",
                                    onClick: ($event) => changeAllPresence(cls)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Change Presence ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "d-block d-sm-none" }, [
                          createVNode("div", { class: "d-flex flex-column gap-1 mb-4" }, [
                            createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                              createVNode(VIcon, {
                                icon: "ri-time-line",
                                color: "primary",
                                size: "20"
                              }),
                              createVNode("span", { class: "text-h6 font-weight-semibold text-primary mb-0" }, toDisplayString(cls.timeStart) + " - " + toDisplayString(cls.timeEnd), 1),
                              createVNode(VChip, {
                                color: "primary",
                                variant: "tonal",
                                size: "small",
                                density: "comfortable"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(cls.duration), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis leading-tight" }, toDisplayString(cls.className), 1),
                            createVNode("div", { class: "d-flex align-center gap-2 mt-1" }, [
                              createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(cls.meetingType), 1),
                              createVNode("span", { class: "dot-separator bg-secondary" }),
                              createVNode("span", { class: "text-body-2 text-medium-emphasis" }, [
                                createTextVNode(toDisplayString(cls.meetingType.split(" ")[0]) + " - ", 1),
                                createVNode("span", { class: "text-primary font-weight-medium" }, toDisplayString(cls.meetingNumber), 1)
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center gap-2 mt-1" }, [
                              createVNode(VChip, {
                                color: "success",
                                size: "small",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Active ")
                                ]),
                                _: 1
                              }),
                              cls.status === "Waiting Approval" ? (openBlock(), createBlock(VChip, {
                                key: 0,
                                color: "warning",
                                size: "small",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Waiting Approval ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode(VDivider, { class: "my-3" }),
                          createVNode("div", { class: "d-flex align-center justify-space-between py-2 px-1" }, [
                            createVNode("a", {
                              href: "#",
                              class: "text-body-2 text-primary font-weight-medium text-decoration-none",
                              onClick: withModifiers(($event) => toggleTeachers(cls.id), ["prevent"])
                            }, toDisplayString(isTeachersExpanded(cls.id) ? "Hide Teachers" : `Show Teachers (${cls.teachers.length})`), 9, ["onClick"]),
                            createVNode("a", {
                              href: "#",
                              class: "text-body-2 text-primary font-weight-medium text-decoration-none",
                              onClick: withModifiers(($event) => toggleStudents(cls.id), ["prevent"])
                            }, toDisplayString(isStudentsExpanded(cls.id) ? "Hide Students" : `Show Students (${cls.students.length})`), 9, ["onClick"])
                          ]),
                          isTeachersExpanded(cls.id) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "py-3 px-1 d-flex flex-column gap-3 bg-light rounded mb-3"
                          }, [
                            createVNode("span", { class: "text-body-2 font-weight-bold text-medium-emphasis" }, "Teachers"),
                            (openBlock(true), createBlock(Fragment, null, renderList(cls.teachers, (teacher, index) => {
                              return openBlock(), createBlock("div", {
                                key: teacher.id,
                                class: "d-flex flex-column"
                              }, [
                                createVNode("span", { class: "text-body-2 text-medium-emphasis font-weight-medium mb-1" }, " Teacher " + toDisplayString(index + 1), 1),
                                createVNode("span", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(teacher.name), 1),
                                index < cls.teachers.length - 1 ? (openBlock(), createBlock(VDivider, {
                                  key: 0,
                                  class: "mt-2"
                                })) : createCommentVNode("", true)
                              ]);
                            }), 128))
                          ])) : createCommentVNode("", true),
                          isStudentsExpanded(cls.id) ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "py-3 px-1 d-flex flex-column gap-3 mb-3"
                          }, [
                            createVNode("span", { class: "text-body-2 font-weight-bold text-medium-emphasis" }, "Students"),
                            createVNode("div", { class: "d-flex flex-column gap-3 student-list-container" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(cls.students.slice(0, 5), (student, idx) => {
                                return openBlock(), createBlock("div", {
                                  key: student.id,
                                  class: "student-row d-flex align-center justify-space-between gap-3 py-1"
                                }, [
                                  createVNode("div", { class: "d-flex align-center gap-3 flex-grow-1 min-w-0" }, [
                                    createVNode("div", { class: "student-idx bg-grey-50 text-caption font-weight-medium rounded-circle d-flex align-center justify-center" }, toDisplayString(idx + 1), 1),
                                    createVNode("div", { class: "d-flex flex-column min-w-0" }, [
                                      createVNode("span", { class: "text-body-2 text-high-emphasis font-weight-medium text-truncate" }, toDisplayString(student.name), 1),
                                      createVNode("div", { class: "d-flex align-center gap-1 mt-0.5" }, [
                                        createVNode(VIcon, {
                                          icon: "ri-book-2-line",
                                          size: "14",
                                          color: "secondary"
                                        }),
                                        createVNode("span", { class: "text-caption text-medium-emphasis text-truncate leading-none" }, toDisplayString(student.course), 1)
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex align-center gap-2" }, [
                                    createVNode(VChip, {
                                      color: student.badgeColor,
                                      variant: "tonal",
                                      size: "small",
                                      class: "font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(student.badgeText), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"]),
                                    createVNode(VBtn, {
                                      color: student.isPresent ? "success" : "error",
                                      icon: "",
                                      variant: "flat",
                                      size: "x-small",
                                      class: "toggle-btn",
                                      onClick: ($event) => toggleAttendance(cls.id, student.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: student.isPresent ? "ri-check-line" : "ri-close-line",
                                          size: "14"
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "onClick"]),
                                    createVNode(VBtn, {
                                      color: student.hasLaptop ? "success" : "error",
                                      icon: "",
                                      variant: "flat",
                                      size: "x-small",
                                      class: "toggle-btn",
                                      onClick: ($event) => toggleLaptop(cls.id, student.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: student.hasLaptop ? "ri-macbook-line" : "ri-subtract-line",
                                          size: "14"
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "onClick"])
                                  ])
                                ]);
                              }), 128)),
                              cls.students.length > 5 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mt-1"
                              }, [
                                createVNode(VBtn, {
                                  variant: "text",
                                  color: "primary",
                                  size: "small",
                                  class: "px-0 font-weight-medium text-capitalize text-left justify-start",
                                  onClick: ($event) => openAllStudentDialog(cls)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" + " + toDisplayString(cls.students.length - 5) + " more student" + toDisplayString(cls.students.length - 5 > 1 ? "s" : ""), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])) : createCommentVNode("", true)
                            ])
                          ])) : createCommentVNode("", true),
                          createVNode(VDivider, { class: "my-3" }),
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "primary",
                            size: "small",
                            class: "text-capitalize w-100 change-presence-btn",
                            rounded: "xl",
                            onClick: ($event) => changeAllPresence(cls)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Change Presence ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VCardText, { class: "pa-6" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-4 mb-4" }, [
                        createVNode("div", { class: "d-flex align-center flex-wrap gap-3" }, [
                          createVNode(VAvatar, {
                            size: "38",
                            rounded: "",
                            class: "border",
                            style: { "background-color": "rgba(var(--v-theme-primary), 0.08) !important", "border-color": "rgba(var(--v-theme-primary), 0.15) !important" }
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-user-line",
                                color: "primary",
                                size: "20"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "d-flex align-center flex-wrap gap-2" }, [
                            createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, toDisplayString(cls.name), 1),
                            createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(cls.room), 1),
                            createVNode("span", { class: "dot-separator bg-secondary" }),
                            createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(cls.teachersCount) + " Teachers", 1),
                            createVNode(VChip, {
                              color: "primary",
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(cls.date), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        createVNode("div", { class: "d-none d-md-flex align-center gap-2" }, [
                          createVNode(VBtn, {
                            variant: "tonal",
                            color: "primary",
                            class: "text-capitalize",
                            rounded: "xl",
                            onClick: ($event) => seeDetails(cls)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" See Details ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          cls.status === "Active" || cls.status === "Waiting Approval" ? (openBlock(), createBlock(VBtn, {
                            key: 0,
                            color: "primary",
                            class: "text-capitalize",
                            rounded: "xl",
                            onClick: ($event) => startClass(cls)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Start Class ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : cls.status === "Ongoing" ? (openBlock(), createBlock(VBtn, {
                            key: 1,
                            color: "primary",
                            class: "text-capitalize",
                            rounded: "xl",
                            onClick: ($event) => finishClass(cls)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Finish Class ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : cls.status === "Completed" ? (openBlock(), createBlock(VChip, {
                            key: 2,
                            color: "success",
                            variant: "tonal",
                            size: "small",
                            class: "font-weight-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Completed ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "d-flex d-md-none align-center gap-3 w-100 mt-2" }, [
                          createVNode(VBtn, {
                            variant: "tonal",
                            color: "primary",
                            class: "text-capitalize flex-grow-1",
                            rounded: "xl",
                            onClick: ($event) => seeDetails(cls)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" See Details ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          cls.status === "Active" || cls.status === "Waiting Approval" ? (openBlock(), createBlock(VBtn, {
                            key: 0,
                            color: "primary",
                            class: "text-capitalize flex-grow-1",
                            rounded: "xl",
                            onClick: ($event) => startClass(cls)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Start Class ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : cls.status === "Ongoing" ? (openBlock(), createBlock(VBtn, {
                            key: 1,
                            color: "primary",
                            class: "text-capitalize flex-grow-1",
                            rounded: "xl",
                            onClick: ($event) => finishClass(cls)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Finish Class ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : (openBlock(), createBlock("div", {
                            key: 2,
                            class: "d-flex justify-center flex-grow-1"
                          }, [
                            createVNode(VChip, {
                              color: "success",
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium w-100 justify-center py-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Completed ")
                              ]),
                              _: 1
                            })
                          ]))
                        ])
                      ]),
                      createVNode(VDivider, { class: "mb-5" }),
                      createVNode(VRow, { class: "d-none d-sm-flex" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "5",
                            class: "pe-sm-6 border-r-sm"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex flex-column gap-5" }, [
                                createVNode("div", { class: "d-flex flex-column gap-1" }, [
                                  createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                                    createVNode(VIcon, {
                                      icon: "ri-time-line",
                                      color: "primary",
                                      size: "20"
                                    }),
                                    createVNode("span", { class: "text-h6 font-weight-semibold text-primary mb-0" }, toDisplayString(cls.timeStart) + " - " + toDisplayString(cls.timeEnd), 1),
                                    createVNode(VChip, {
                                      color: "primary",
                                      variant: "tonal",
                                      size: "small",
                                      density: "comfortable"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(cls.duration), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis leading-tight" }, toDisplayString(cls.className), 1),
                                  createVNode("div", { class: "d-flex align-center gap-2 mt-1" }, [
                                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(cls.meetingType), 1),
                                    createVNode("span", { class: "dot-separator bg-secondary" }),
                                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, [
                                      createTextVNode(toDisplayString(cls.meetingType.split(" ")[0]) + " - ", 1),
                                      createVNode("span", { class: "text-primary font-weight-medium" }, toDisplayString(cls.meetingNumber), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex align-center gap-2 mt-1" }, [
                                    createVNode(VChip, {
                                      color: "success",
                                      size: "small",
                                      class: "font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Active ")
                                      ]),
                                      _: 1
                                    }),
                                    cls.status === "Waiting Approval" ? (openBlock(), createBlock(VChip, {
                                      key: 0,
                                      color: "warning",
                                      size: "small",
                                      class: "font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Waiting Approval ")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ])
                                ]),
                                createVNode(VDivider),
                                createVNode("div", { class: "d-flex flex-column gap-4" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(cls.teachers, (teacher, index) => {
                                    return openBlock(), createBlock("div", {
                                      key: teacher.id,
                                      class: "d-flex flex-column"
                                    }, [
                                      createVNode("span", { class: "text-body-2 text-medium-emphasis font-weight-medium mb-1" }, " Teacher " + toDisplayString(index + 1), 1),
                                      createVNode("span", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(teacher.name), 1),
                                      index < cls.teachers.length - 1 ? (openBlock(), createBlock(VDivider, {
                                        key: 0,
                                        class: "mt-3"
                                      })) : createCommentVNode("", true)
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "7",
                            class: "ps-sm-6"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-body-2 text-medium-emphasis font-weight-medium mb-3 d-block" }, " Student "),
                              createVNode("div", { class: "d-flex flex-column gap-3 student-list-container" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(cls.students.slice(0, 5), (student, idx) => {
                                  return openBlock(), createBlock("div", {
                                    key: student.id,
                                    class: "student-row d-flex align-center justify-space-between gap-3 py-1"
                                  }, [
                                    createVNode("div", { class: "d-flex align-center gap-3 flex-grow-1 min-w-0" }, [
                                      createVNode("div", { class: "student-idx bg-grey-50 text-caption font-weight-medium rounded-circle d-flex align-center justify-center" }, toDisplayString(idx + 1), 1),
                                      createVNode("div", { class: "d-flex flex-column min-w-0" }, [
                                        createVNode("span", { class: "text-body-2 text-high-emphasis font-weight-medium text-truncate" }, toDisplayString(student.name), 1),
                                        createVNode("div", { class: "d-flex align-center gap-1 mt-0.5" }, [
                                          createVNode(VIcon, {
                                            icon: "ri-book-2-line",
                                            size: "14",
                                            color: "secondary"
                                          }),
                                          createVNode("span", { class: "text-caption text-medium-emphasis text-truncate leading-none" }, toDisplayString(student.course), 1)
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", { class: "d-flex align-center gap-2" }, [
                                      createVNode(VChip, {
                                        color: student.badgeColor,
                                        variant: "tonal",
                                        size: "small",
                                        class: "font-weight-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(student.badgeText), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"]),
                                      createVNode(VBtn, {
                                        color: student.isPresent ? "success" : "error",
                                        icon: "",
                                        variant: "flat",
                                        size: "x-small",
                                        class: "toggle-btn",
                                        onClick: ($event) => toggleAttendance(cls.id, student.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: student.isPresent ? "ri-check-line" : "ri-close-line",
                                            size: "14"
                                          }, null, 8, ["icon"])
                                        ]),
                                        _: 2
                                      }, 1032, ["color", "onClick"]),
                                      createVNode(VBtn, {
                                        color: student.hasLaptop ? "success" : "error",
                                        icon: "",
                                        variant: "flat",
                                        size: "x-small",
                                        class: "toggle-btn",
                                        onClick: ($event) => toggleLaptop(cls.id, student.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: student.hasLaptop ? "ri-macbook-line" : "ri-subtract-line",
                                            size: "14"
                                          }, null, 8, ["icon"])
                                        ]),
                                        _: 2
                                      }, 1032, ["color", "onClick"])
                                    ])
                                  ]);
                                }), 128)),
                                cls.students.length > 5 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "mt-1"
                                }, [
                                  createVNode(VBtn, {
                                    variant: "text",
                                    color: "primary",
                                    size: "small",
                                    class: "px-0 font-weight-medium text-capitalize text-left justify-start",
                                    onClick: ($event) => openAllStudentDialog(cls)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" + " + toDisplayString(cls.students.length - 5) + " more student" + toDisplayString(cls.students.length - 5 > 1 ? "s" : ""), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])) : createCommentVNode("", true),
                                createVNode(VDivider, { class: "my-2" }),
                                createVNode(VBtn, {
                                  variant: "outlined",
                                  color: "primary",
                                  size: "small",
                                  class: "text-capitalize w-100 change-presence-btn",
                                  rounded: "xl",
                                  onClick: ($event) => changeAllPresence(cls)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Change Presence ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", { class: "d-block d-sm-none" }, [
                        createVNode("div", { class: "d-flex flex-column gap-1 mb-4" }, [
                          createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                            createVNode(VIcon, {
                              icon: "ri-time-line",
                              color: "primary",
                              size: "20"
                            }),
                            createVNode("span", { class: "text-h6 font-weight-semibold text-primary mb-0" }, toDisplayString(cls.timeStart) + " - " + toDisplayString(cls.timeEnd), 1),
                            createVNode(VChip, {
                              color: "primary",
                              variant: "tonal",
                              size: "small",
                              density: "comfortable"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(cls.duration), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis leading-tight" }, toDisplayString(cls.className), 1),
                          createVNode("div", { class: "d-flex align-center gap-2 mt-1" }, [
                            createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(cls.meetingType), 1),
                            createVNode("span", { class: "dot-separator bg-secondary" }),
                            createVNode("span", { class: "text-body-2 text-medium-emphasis" }, [
                              createTextVNode(toDisplayString(cls.meetingType.split(" ")[0]) + " - ", 1),
                              createVNode("span", { class: "text-primary font-weight-medium" }, toDisplayString(cls.meetingNumber), 1)
                            ])
                          ]),
                          createVNode("div", { class: "d-flex align-center gap-2 mt-1" }, [
                            createVNode(VChip, {
                              color: "success",
                              size: "small",
                              class: "font-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Active ")
                              ]),
                              _: 1
                            }),
                            cls.status === "Waiting Approval" ? (openBlock(), createBlock(VChip, {
                              key: 0,
                              color: "warning",
                              size: "small",
                              class: "font-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Waiting Approval ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode(VDivider, { class: "my-3" }),
                        createVNode("div", { class: "d-flex align-center justify-space-between py-2 px-1" }, [
                          createVNode("a", {
                            href: "#",
                            class: "text-body-2 text-primary font-weight-medium text-decoration-none",
                            onClick: withModifiers(($event) => toggleTeachers(cls.id), ["prevent"])
                          }, toDisplayString(isTeachersExpanded(cls.id) ? "Hide Teachers" : `Show Teachers (${cls.teachers.length})`), 9, ["onClick"]),
                          createVNode("a", {
                            href: "#",
                            class: "text-body-2 text-primary font-weight-medium text-decoration-none",
                            onClick: withModifiers(($event) => toggleStudents(cls.id), ["prevent"])
                          }, toDisplayString(isStudentsExpanded(cls.id) ? "Hide Students" : `Show Students (${cls.students.length})`), 9, ["onClick"])
                        ]),
                        isTeachersExpanded(cls.id) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "py-3 px-1 d-flex flex-column gap-3 bg-light rounded mb-3"
                        }, [
                          createVNode("span", { class: "text-body-2 font-weight-bold text-medium-emphasis" }, "Teachers"),
                          (openBlock(true), createBlock(Fragment, null, renderList(cls.teachers, (teacher, index) => {
                            return openBlock(), createBlock("div", {
                              key: teacher.id,
                              class: "d-flex flex-column"
                            }, [
                              createVNode("span", { class: "text-body-2 text-medium-emphasis font-weight-medium mb-1" }, " Teacher " + toDisplayString(index + 1), 1),
                              createVNode("span", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(teacher.name), 1),
                              index < cls.teachers.length - 1 ? (openBlock(), createBlock(VDivider, {
                                key: 0,
                                class: "mt-2"
                              })) : createCommentVNode("", true)
                            ]);
                          }), 128))
                        ])) : createCommentVNode("", true),
                        isStudentsExpanded(cls.id) ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "py-3 px-1 d-flex flex-column gap-3 mb-3"
                        }, [
                          createVNode("span", { class: "text-body-2 font-weight-bold text-medium-emphasis" }, "Students"),
                          createVNode("div", { class: "d-flex flex-column gap-3 student-list-container" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(cls.students.slice(0, 5), (student, idx) => {
                              return openBlock(), createBlock("div", {
                                key: student.id,
                                class: "student-row d-flex align-center justify-space-between gap-3 py-1"
                              }, [
                                createVNode("div", { class: "d-flex align-center gap-3 flex-grow-1 min-w-0" }, [
                                  createVNode("div", { class: "student-idx bg-grey-50 text-caption font-weight-medium rounded-circle d-flex align-center justify-center" }, toDisplayString(idx + 1), 1),
                                  createVNode("div", { class: "d-flex flex-column min-w-0" }, [
                                    createVNode("span", { class: "text-body-2 text-high-emphasis font-weight-medium text-truncate" }, toDisplayString(student.name), 1),
                                    createVNode("div", { class: "d-flex align-center gap-1 mt-0.5" }, [
                                      createVNode(VIcon, {
                                        icon: "ri-book-2-line",
                                        size: "14",
                                        color: "secondary"
                                      }),
                                      createVNode("span", { class: "text-caption text-medium-emphasis text-truncate leading-none" }, toDisplayString(student.course), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex align-center gap-2" }, [
                                  createVNode(VChip, {
                                    color: student.badgeColor,
                                    variant: "tonal",
                                    size: "small",
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(student.badgeText), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"]),
                                  createVNode(VBtn, {
                                    color: student.isPresent ? "success" : "error",
                                    icon: "",
                                    variant: "flat",
                                    size: "x-small",
                                    class: "toggle-btn",
                                    onClick: ($event) => toggleAttendance(cls.id, student.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: student.isPresent ? "ri-check-line" : "ri-close-line",
                                        size: "14"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color", "onClick"]),
                                  createVNode(VBtn, {
                                    color: student.hasLaptop ? "success" : "error",
                                    icon: "",
                                    variant: "flat",
                                    size: "x-small",
                                    class: "toggle-btn",
                                    onClick: ($event) => toggleLaptop(cls.id, student.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: student.hasLaptop ? "ri-macbook-line" : "ri-subtract-line",
                                        size: "14"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color", "onClick"])
                                ])
                              ]);
                            }), 128)),
                            cls.students.length > 5 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-1"
                            }, [
                              createVNode(VBtn, {
                                variant: "text",
                                color: "primary",
                                size: "small",
                                class: "px-0 font-weight-medium text-capitalize text-left justify-start",
                                onClick: ($event) => openAllStudentDialog(cls)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" + " + toDisplayString(cls.students.length - 5) + " more student" + toDisplayString(cls.students.length - 5 > 1 ? "s" : ""), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])) : createCommentVNode("", true)
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode(VDivider, { class: "my-3" }),
                        createVNode(VBtn, {
                          variant: "outlined",
                          color: "primary",
                          size: "small",
                          class: "text-capitalize w-100 change-presence-btn",
                          rounded: "xl",
                          onClick: ($event) => changeAllPresence(cls)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Change Presence ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(VDivider, null, null, _parent));
        _push(ssrRenderComponent(VDataTableFooter, {
          "items-per-page-options": [5, 10, 20],
          class: "bg-surface border rounded-lg px-4"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(ssrRenderComponent(_component_PresenceDialog, {
        "is-dialog-visible": unref(isPresenceDialogActive),
        "onUpdate:isDialogVisible": ($event) => isRef(isPresenceDialogActive) ? isPresenceDialogActive.value = $event : null,
        "class-session": unref(activeClassSession),
        onSubmitAttendance: handlePresenceSubmit
      }, null, _parent));
      _push(ssrRenderComponent(_component_AllStudentDialog, {
        "is-dialog-visible": unref(isAllStudentDialogActive),
        "onUpdate:isDialogVisible": ($event) => isRef(isAllStudentDialogActive) ? isAllStudentDialogActive.value = $event : null,
        students: unref(activeStudentList),
        onApproveStudent: handleApproveStudent,
        onRejectStudent: handleRejectStudent
      }, null, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(toastShow),
        "onUpdate:modelValue": ($event) => isRef(toastShow) ? toastShow.value = $event : null,
        color: unref(toastColor),
        timeout: "3000"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(toastText))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(toastText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(isFilterModalActive),
        "onUpdate:modelValue": ($event) => isRef(isFilterModalActive) ? isFilterModalActive.value = $event : null,
        "max-width": "400",
        transition: "dialog-bottom-transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { style: { "border-radius": "8px !important" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "d-flex align-center justify-space-between pa-4 border-b" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-h6 font-weight-semibold" data-v-fff386ee${_scopeId3}>Filter</span>`);
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          color: "secondary",
                          density: "comfortable",
                          onClick: ($event) => isFilterModalActive.value = false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "text-h6 font-weight-semibold" }, "Filter"),
                          createVNode(VBtn, {
                            icon: "ri-close-line",
                            variant: "text",
                            color: "secondary",
                            density: "comfortable",
                            onClick: ($event) => isFilterModalActive.value = false
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pa-5 d-flex flex-column gap-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div data-v-fff386ee${_scopeId3}><label class="text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" data-v-fff386ee${_scopeId3}>Branch</label>`);
                        _push4(ssrRenderComponent(VAutocomplete, {
                          modelValue: unref(selectedBranch),
                          "onUpdate:modelValue": ($event) => isRef(selectedBranch) ? selectedBranch.value = $event : null,
                          items: branchOptions,
                          density: "compact",
                          "hide-details": ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div data-v-fff386ee${_scopeId3}><label class="text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" data-v-fff386ee${_scopeId3}>Class Type</label>`);
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(selectedClassType),
                          "onUpdate:modelValue": ($event) => isRef(selectedClassType) ? selectedClassType.value = $event : null,
                          items: classTypeOptions,
                          density: "compact",
                          "hide-details": ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div data-v-fff386ee${_scopeId3}><label class="text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" data-v-fff386ee${_scopeId3}>Course</label>`);
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(selectedCourse),
                          "onUpdate:modelValue": ($event) => isRef(selectedCourse) ? selectedCourse.value = $event : null,
                          items: courseOptions,
                          density: "compact",
                          "hide-details": ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" }, "Branch"),
                            createVNode(VAutocomplete, {
                              modelValue: unref(selectedBranch),
                              "onUpdate:modelValue": ($event) => isRef(selectedBranch) ? selectedBranch.value = $event : null,
                              items: branchOptions,
                              density: "compact",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" }, "Class Type"),
                            createVNode(VSelect, {
                              modelValue: unref(selectedClassType),
                              "onUpdate:modelValue": ($event) => isRef(selectedClassType) ? selectedClassType.value = $event : null,
                              items: classTypeOptions,
                              density: "compact",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" }, "Course"),
                            createVNode(VSelect, {
                              modelValue: unref(selectedCourse),
                              "onUpdate:modelValue": ($event) => isRef(selectedCourse) ? selectedCourse.value = $event : null,
                              items: courseOptions,
                              density: "compact",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "pa-4 d-flex justify-end gap-3 border-t" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          color: "secondary",
                          class: "text-capitalize px-6",
                          rounded: "xl",
                          onClick: ($event) => isFilterModalActive.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Back `);
                            } else {
                              return [
                                createTextVNode(" Back ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "success",
                          class: "text-capitalize px-6",
                          style: { "background-color": "#10af13 !important", "color": "#ffffff !important" },
                          rounded: "xl",
                          onClick: ($event) => isFilterModalActive.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Apply Filter `);
                            } else {
                              return [
                                createTextVNode(" Apply Filter ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "secondary",
                            class: "text-capitalize px-6",
                            rounded: "xl",
                            onClick: ($event) => isFilterModalActive.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Back ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "success",
                            class: "text-capitalize px-6",
                            style: { "background-color": "#10af13 !important", "color": "#ffffff !important" },
                            rounded: "xl",
                            onClick: ($event) => isFilterModalActive.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Apply Filter ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "d-flex align-center justify-space-between pa-4 border-b" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-h6 font-weight-semibold" }, "Filter"),
                        createVNode(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          color: "secondary",
                          density: "comfortable",
                          onClick: ($event) => isFilterModalActive.value = false
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "pa-5 d-flex flex-column gap-5" }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" }, "Branch"),
                          createVNode(VAutocomplete, {
                            modelValue: unref(selectedBranch),
                            "onUpdate:modelValue": ($event) => isRef(selectedBranch) ? selectedBranch.value = $event : null,
                            items: branchOptions,
                            density: "compact",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" }, "Class Type"),
                          createVNode(VSelect, {
                            modelValue: unref(selectedClassType),
                            "onUpdate:modelValue": ($event) => isRef(selectedClassType) ? selectedClassType.value = $event : null,
                            items: classTypeOptions,
                            density: "compact",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" }, "Course"),
                          createVNode(VSelect, {
                            modelValue: unref(selectedCourse),
                            "onUpdate:modelValue": ($event) => isRef(selectedCourse) ? selectedCourse.value = $event : null,
                            items: courseOptions,
                            density: "compact",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, { class: "pa-4 d-flex justify-end gap-3 border-t" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "outlined",
                          color: "secondary",
                          class: "text-capitalize px-6",
                          rounded: "xl",
                          onClick: ($event) => isFilterModalActive.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Back ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "success",
                          class: "text-capitalize px-6",
                          style: { "background-color": "#10af13 !important", "color": "#ffffff !important" },
                          rounded: "xl",
                          onClick: ($event) => isFilterModalActive.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Apply Filter ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { style: { "border-radius": "8px !important" } }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "d-flex align-center justify-space-between pa-4 border-b" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-h6 font-weight-semibold" }, "Filter"),
                      createVNode(VBtn, {
                        icon: "ri-close-line",
                        variant: "text",
                        color: "secondary",
                        density: "comfortable",
                        onClick: ($event) => isFilterModalActive.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-5 d-flex flex-column gap-5" }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" }, "Branch"),
                        createVNode(VAutocomplete, {
                          modelValue: unref(selectedBranch),
                          "onUpdate:modelValue": ($event) => isRef(selectedBranch) ? selectedBranch.value = $event : null,
                          items: branchOptions,
                          density: "compact",
                          "hide-details": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" }, "Class Type"),
                        createVNode(VSelect, {
                          modelValue: unref(selectedClassType),
                          "onUpdate:modelValue": ($event) => isRef(selectedClassType) ? selectedClassType.value = $event : null,
                          items: classTypeOptions,
                          density: "compact",
                          "hide-details": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" }, "Course"),
                        createVNode(VSelect, {
                          modelValue: unref(selectedCourse),
                          "onUpdate:modelValue": ($event) => isRef(selectedCourse) ? selectedCourse.value = $event : null,
                          items: courseOptions,
                          density: "compact",
                          "hide-details": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "pa-4 d-flex justify-end gap-3 border-t" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "outlined",
                        color: "secondary",
                        class: "text-capitalize px-6",
                        rounded: "xl",
                        onClick: ($event) => isFilterModalActive.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Back ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "success",
                        class: "text-capitalize px-6",
                        style: { "background-color": "#10af13 !important", "color": "#ffffff !important" },
                        rounded: "xl",
                        onClick: ($event) => isFilterModalActive.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Apply Filter ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(isDateModalActive),
        "onUpdate:modelValue": ($event) => isRef(isDateModalActive) ? isDateModalActive.value = $event : null,
        "max-width": "400",
        transition: "dialog-bottom-transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { style: { "border-radius": "8px !important" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "d-flex align-center justify-space-between pa-4 border-b" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-h6 font-weight-semibold" data-v-fff386ee${_scopeId3}>Date &amp; Time</span>`);
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          color: "secondary",
                          density: "comfortable",
                          onClick: ($event) => isDateModalActive.value = false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "text-h6 font-weight-semibold" }, "Date & Time"),
                          createVNode(VBtn, {
                            icon: "ri-close-line",
                            variant: "text",
                            color: "secondary",
                            density: "comfortable",
                            onClick: ($event) => isDateModalActive.value = false
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pa-5 d-flex flex-column gap-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div data-v-fff386ee${_scopeId3}><label class="text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" data-v-fff386ee${_scopeId3}>Date</label>`);
                        _push4(ssrRenderComponent(_component_AppDateTimePicker, {
                          modelValue: unref(selectedDate),
                          "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                          placeholder: "Select date",
                          "append-inner-icon": "ri-calendar-line",
                          density: "compact",
                          "hide-details": "",
                          config: { dateFormat: "F j, Y" }
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div data-v-fff386ee${_scopeId3}><label class="text-body-2 text-medium-emphasis font-weight-medium d-block mb-2" data-v-fff386ee${_scopeId3}>Time Segment</label><div class="time-segments-grid" data-v-fff386ee${_scopeId3}><!--[-->`);
                        ssrRenderList(timeSegments, (seg) => {
                          _push4(ssrRenderComponent(VBtn, {
                            key: seg.label,
                            variant: unref(selectedTimeSegment) === seg.label ? "flat" : "outlined",
                            color: unref(selectedTimeSegment) === seg.label ? "primary" : "secondary",
                            class: "time-pill-modal text-capitalize",
                            rounded: "xl",
                            size: "small",
                            onClick: ($event) => selectedTimeSegment.value = unref(selectedTimeSegment) === seg.label ? "" : seg.label
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  start: "",
                                  icon: seg.icon,
                                  size: "16",
                                  class: "me-3"
                                }, null, _parent5, _scopeId4));
                                _push5(` ${ssrInterpolate(seg.label)}`);
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: seg.icon,
                                    size: "16",
                                    class: "me-3"
                                  }, null, 8, ["icon"]),
                                  createTextVNode(" " + toDisplayString(seg.label), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]--></div></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" }, "Date"),
                            createVNode(_component_AppDateTimePicker, {
                              modelValue: unref(selectedDate),
                              "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                              placeholder: "Select date",
                              "append-inner-icon": "ri-calendar-line",
                              density: "compact",
                              "hide-details": "",
                              config: { dateFormat: "F j, Y" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-2" }, "Time Segment"),
                            createVNode("div", { class: "time-segments-grid" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(timeSegments, (seg) => {
                                return createVNode(VBtn, {
                                  key: seg.label,
                                  variant: unref(selectedTimeSegment) === seg.label ? "flat" : "outlined",
                                  color: unref(selectedTimeSegment) === seg.label ? "primary" : "secondary",
                                  class: "time-pill-modal text-capitalize",
                                  rounded: "xl",
                                  size: "small",
                                  onClick: ($event) => selectedTimeSegment.value = unref(selectedTimeSegment) === seg.label ? "" : seg.label
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: seg.icon,
                                      size: "16",
                                      class: "me-3"
                                    }, null, 8, ["icon"]),
                                    createTextVNode(" " + toDisplayString(seg.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["variant", "color", "onClick"]);
                              }), 64))
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "pa-4 d-flex justify-end gap-3 border-t" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          color: "secondary",
                          class: "text-capitalize px-6",
                          rounded: "xl",
                          onClick: ($event) => isDateModalActive.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Back `);
                            } else {
                              return [
                                createTextVNode(" Back ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "success",
                          class: "text-capitalize px-6",
                          style: { "background-color": "#10af13 !important", "color": "#ffffff !important" },
                          rounded: "xl",
                          onClick: ($event) => isDateModalActive.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Apply Filter `);
                            } else {
                              return [
                                createTextVNode(" Apply Filter ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "secondary",
                            class: "text-capitalize px-6",
                            rounded: "xl",
                            onClick: ($event) => isDateModalActive.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Back ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "success",
                            class: "text-capitalize px-6",
                            style: { "background-color": "#10af13 !important", "color": "#ffffff !important" },
                            rounded: "xl",
                            onClick: ($event) => isDateModalActive.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Apply Filter ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "d-flex align-center justify-space-between pa-4 border-b" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-h6 font-weight-semibold" }, "Date & Time"),
                        createVNode(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          color: "secondary",
                          density: "comfortable",
                          onClick: ($event) => isDateModalActive.value = false
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "pa-5 d-flex flex-column gap-5" }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" }, "Date"),
                          createVNode(_component_AppDateTimePicker, {
                            modelValue: unref(selectedDate),
                            "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                            placeholder: "Select date",
                            "append-inner-icon": "ri-calendar-line",
                            density: "compact",
                            "hide-details": "",
                            config: { dateFormat: "F j, Y" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-2" }, "Time Segment"),
                          createVNode("div", { class: "time-segments-grid" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(timeSegments, (seg) => {
                              return createVNode(VBtn, {
                                key: seg.label,
                                variant: unref(selectedTimeSegment) === seg.label ? "flat" : "outlined",
                                color: unref(selectedTimeSegment) === seg.label ? "primary" : "secondary",
                                class: "time-pill-modal text-capitalize",
                                rounded: "xl",
                                size: "small",
                                onClick: ($event) => selectedTimeSegment.value = unref(selectedTimeSegment) === seg.label ? "" : seg.label
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: seg.icon,
                                    size: "16",
                                    class: "me-3"
                                  }, null, 8, ["icon"]),
                                  createTextVNode(" " + toDisplayString(seg.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["variant", "color", "onClick"]);
                            }), 64))
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, { class: "pa-4 d-flex justify-end gap-3 border-t" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "outlined",
                          color: "secondary",
                          class: "text-capitalize px-6",
                          rounded: "xl",
                          onClick: ($event) => isDateModalActive.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Back ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "success",
                          class: "text-capitalize px-6",
                          style: { "background-color": "#10af13 !important", "color": "#ffffff !important" },
                          rounded: "xl",
                          onClick: ($event) => isDateModalActive.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Apply Filter ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { style: { "border-radius": "8px !important" } }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "d-flex align-center justify-space-between pa-4 border-b" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-h6 font-weight-semibold" }, "Date & Time"),
                      createVNode(VBtn, {
                        icon: "ri-close-line",
                        variant: "text",
                        color: "secondary",
                        density: "comfortable",
                        onClick: ($event) => isDateModalActive.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-5 d-flex flex-column gap-5" }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" }, "Date"),
                        createVNode(_component_AppDateTimePicker, {
                          modelValue: unref(selectedDate),
                          "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                          placeholder: "Select date",
                          "append-inner-icon": "ri-calendar-line",
                          density: "compact",
                          "hide-details": "",
                          config: { dateFormat: "F j, Y" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-2" }, "Time Segment"),
                        createVNode("div", { class: "time-segments-grid" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(timeSegments, (seg) => {
                            return createVNode(VBtn, {
                              key: seg.label,
                              variant: unref(selectedTimeSegment) === seg.label ? "flat" : "outlined",
                              color: unref(selectedTimeSegment) === seg.label ? "primary" : "secondary",
                              class: "time-pill-modal text-capitalize",
                              rounded: "xl",
                              size: "small",
                              onClick: ($event) => selectedTimeSegment.value = unref(selectedTimeSegment) === seg.label ? "" : seg.label
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: seg.icon,
                                  size: "16",
                                  class: "me-3"
                                }, null, 8, ["icon"]),
                                createTextVNode(" " + toDisplayString(seg.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["variant", "color", "onClick"]);
                          }), 64))
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "pa-4 d-flex justify-end gap-3 border-t" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "outlined",
                        color: "secondary",
                        class: "text-capitalize px-6",
                        rounded: "xl",
                        onClick: ($event) => isDateModalActive.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Back ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "success",
                        class: "text-capitalize px-6",
                        style: { "background-color": "#10af13 !important", "color": "#ffffff !important" },
                        rounded: "xl",
                        onClick: ($event) => isDateModalActive.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Apply Filter ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/attendance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const attendance = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fff386ee"]]);

export { attendance as default };
