import { _ as _sfc_main$1 } from "./DialogCloseBtn-CVR_yFk0.js";
import { ref, computed, createVNode, mergeProps, Fragment, defineComponent, watch, withCtx, toDisplayString, createTextVNode, withDirectives, createBlock, createCommentVNode, openBlock, vShow, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { V as VDialog } from "./VDialog-B0Ad2yj9.js";
import { V as VCard, c as VCardItem, b as VCardActions } from "./VCard-B42eN0YV.js";
import { m as genericComponent, o as propsFactory, B as useProxiedModel, W as useLoader, ad as getUid, F as useRender, ai as filterInputAttrs, G as VDefaultsProvider, a as VIcon, $ as LoaderSlot, b as VProgressCircular, b6 as IN_BROWSER, V as VBtn, aW as _export_sfc } from "../server.mjs";
import { V as VAvatar } from "./VAvatar-B478BWXT.js";
import { V as VChip } from "./VChip-C0dLsv_T.js";
import { V as VCardText } from "./VCardText-CaXtzNxg.js";
import { V as VCheckbox } from "./VCheckbox-BUqu-k0J.js";
import { d as VScaleTransition } from "./index-CSomYp-Z.js";
import { i as useFocus, d as VInput, e as makeVInputProps, V as VTextField } from "./VTextField-jMGfwBDn.js";
import { V as VSelectionControl, m as makeVSelectionControlProps } from "./VSelectionControl-B1a3mcFW.js";
import { V as VRow, a as VCol } from "./VRow-BRD4hy0P.js";
const makeVSwitchProps = propsFactory({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: false
  },
  ...makeVInputProps(),
  ...makeVSelectionControlProps()
}, "VSwitch");
const VSwitch = genericComponent()({
  name: "VSwitch",
  inheritAttrs: false,
  props: makeVSwitchProps(),
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true,
    "update:indeterminate": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const indeterminate = useProxiedModel(props, "indeterminate");
    const model = useProxiedModel(props, "modelValue");
    const {
      loaderClasses
    } = useLoader(props);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const control = ref();
    const isForcedColorsModeActive = IN_BROWSER;
    const loaderColor = computed(() => {
      return typeof props.loading === "string" && props.loading !== "" ? props.loading : props.color;
    });
    const uid = getUid();
    const id = computed(() => props.id || `switch-${uid}`);
    function onChange() {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    function onTrackClick(e) {
      var _a, _b;
      e.stopPropagation();
      e.preventDefault();
      (_b = (_a = control.value) == null ? void 0 : _a.input) == null ? void 0 : _b.click();
    }
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const controlProps = VSelectionControl.filterProps(props);
      return createVNode(VInput, mergeProps({
        "class": ["v-switch", {
          "v-switch--flat": props.flat
        }, {
          "v-switch--inset": props.inset
        }, {
          "v-switch--indeterminate": indeterminate.value
        }, loaderClasses.value, props.class]
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": id.value,
        "focused": isFocused.value,
        "style": props.style
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id: id2,
            messagesId,
            isDisabled,
            isReadonly,
            isValid
          } = _ref2;
          const slotProps = {
            model,
            isValid
          };
          return createVNode(VSelectionControl, mergeProps({
            "ref": control
          }, controlProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": [($event) => model.value = $event, onChange],
            "id": id2.value,
            "aria-describedby": messagesId.value,
            "type": "checkbox",
            "aria-checked": indeterminate.value ? "mixed" : void 0,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "onFocus": focus,
            "onBlur": blur
          }, controlAttrs), {
            ...slots,
            default: (_ref3) => {
              let {
                backgroundColorClasses,
                backgroundColorStyles
              } = _ref3;
              return createVNode("div", {
                "class": ["v-switch__track", backgroundColorClasses.value],
                "style": backgroundColorStyles.value,
                "onClick": onTrackClick
              }, [slots["track-true"] && createVNode("div", {
                "key": "prepend",
                "class": "v-switch__track-true"
              }, [slots["track-true"](slotProps)]), slots["track-false"] && createVNode("div", {
                "key": "append",
                "class": "v-switch__track-false"
              }, [slots["track-false"](slotProps)])]);
            },
            input: (_ref4) => {
              let {
                inputNode,
                icon,
                backgroundColorClasses,
                backgroundColorStyles
              } = _ref4;
              return createVNode(Fragment, null, [inputNode, createVNode("div", {
                "class": ["v-switch__thumb", {
                  "v-switch__thumb--filled": icon || props.loading
                }, props.inset || isForcedColorsModeActive ? void 0 : backgroundColorClasses.value],
                "style": props.inset ? void 0 : backgroundColorStyles.value
              }, [slots.thumb ? createVNode(VDefaultsProvider, {
                "defaults": {
                  VIcon: {
                    icon,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [slots.thumb({
                  ...slotProps,
                  icon
                })]
              }) : createVNode(VScaleTransition, null, {
                default: () => [!props.loading ? icon && createVNode(VIcon, {
                  "key": String(icon),
                  "icon": icon,
                  "size": "x-small"
                }, null) : createVNode(LoaderSlot, {
                  "name": "v-switch",
                  "active": true,
                  "color": isValid.value === false ? void 0 : loaderColor.value
                }, {
                  default: (slotProps2) => slots.loader ? slots.loader(slotProps2) : createVNode(VProgressCircular, {
                    "active": slotProps2.isActive,
                    "color": slotProps2.color,
                    "indeterminate": true,
                    "size": "16",
                    "width": "2"
                  }, null)
                })]
              })])]);
            }
          });
        }
      });
    });
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PresenceDialog",
  __ssrInlineRender: true,
  props: {
    isDialogVisible: { type: Boolean },
    classSession: {}
  },
  emits: ["update:isDialogVisible", "submitAttendance"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const currentStep = ref(1);
    const localStudents = ref([]);
    watch(
      () => props.isDialogVisible,
      (newVal) => {
        if (newVal && props.classSession) {
          currentStep.value = 1;
          localStudents.value = props.classSession.students.map((student) => ({
            ...student,
            quota: student.badgeText.includes(":") ? student.badgeText.split(":")[1].trim() : "4",
            remarks: "",
            showEquipment: student.isPresent,
            equipment: {
              laptop: student.hasLaptop,
              mouse: student.isPresent && student.hasLaptop,
              headphone: false,
              speaker: false,
              charger: false
            }
          }));
        }
      }
    );
    const stats = computed(() => {
      const total = localStudents.value.length;
      const present = localStudents.value.filter((s) => s.isPresent).length;
      const absent = total - present;
      return { total, present, absent };
    });
    const isAllPresent = computed({
      get: () => localStudents.value.length > 0 && localStudents.value.every((s) => s.isPresent),
      set: (val) => {
        localStudents.value.forEach((s) => {
          s.isPresent = val;
        });
      }
    });
    const onPresenceChange = (student) => {
      if (!student.isPresent) {
        student.equipment = {
          laptop: false,
          mouse: false,
          headphone: false,
          speaker: false,
          charger: false
        };
      }
    };
    const onCancel = () => {
      emit("update:isDialogVisible", false);
    };
    const onNext = () => {
      currentStep.value = 2;
    };
    const onBack = () => {
      currentStep.value = 1;
    };
    const onSubmit = () => {
      const updatedStudents = localStudents.value.map((s) => ({
        id: s.id,
        name: s.name,
        course: s.course,
        badgeText: `Quota : ${s.quota}`,
        badgeColor: s.badgeColor,
        isPresent: s.isPresent,
        hasLaptop: s.equipment.laptop
      }));
      emit("submitAttendance", {
        students: updatedStudents,
        isStartClass: false
      });
      emit("update:isDialogVisible", false);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$1;
      _push(ssrRenderComponent(VDialog, mergeProps({
        "model-value": props.isDialogVisible,
        "max-width": "1150",
        scrollable: "",
        "onUpdate:modelValue": (val) => emit("update:isDialogVisible", val)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "overflow-hidden presence-dialog-card" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, { onClick: onCancel }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardItem, { class: "px-8 pt-8 pb-4 bg-surface border-b border-light" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex align-center gap-4" data-v-8b61e005${_scopeId3}>`);
                        _push4(ssrRenderComponent(VProgressCircular, {
                          "model-value": currentStep.value === 1 ? 50 : 100,
                          color: "primary",
                          size: "64",
                          width: "5",
                          class: "font-weight-bold"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-body-1 font-weight-medium text-high-emphasis" data-v-8b61e005${_scopeId4}>${ssrInterpolate(currentStep.value)}/2 </span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(currentStep.value) + "/2 ", 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="d-flex flex-column" data-v-8b61e005${_scopeId3}><h5 class="text-h5 font-weight-medium text-high-emphasis" data-v-8b61e005${_scopeId3}>${ssrInterpolate(currentStep.value === 1 ? "Student's Presence" : "Confirm attendance presence")}</h5><span class="text-body-2 text-medium-emphasis" data-v-8b61e005${_scopeId3}>${ssrInterpolate(currentStep.value === 1 ? "Change the present status of each student" : "The following is information about students who attended and those who did not.")}</span></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex align-center gap-4" }, [
                            createVNode(VProgressCircular, {
                              "model-value": currentStep.value === 1 ? 50 : 100,
                              color: "primary",
                              size: "64",
                              width: "5",
                              class: "font-weight-bold"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(currentStep.value) + "/2 ", 1)
                              ]),
                              _: 1
                            }, 8, ["model-value"]),
                            createVNode("div", { class: "d-flex flex-column" }, [
                              createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis" }, toDisplayString(currentStep.value === 1 ? "Student's Presence" : "Confirm attendance presence"), 1),
                              createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(currentStep.value === 1 ? "Change the present status of each student" : "The following is information about students who attended and those who did not."), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="px-8 py-3 bg-light-green border-b border-light d-flex align-center gap-4 flex-wrap" data-v-8b61e005${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "32",
                    color: "primary",
                    class: "rounded-circle"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-user-line",
                          size: "18",
                          color: "white"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: "ri-user-line",
                            size: "18",
                            color: "white"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<span class="text-subtitle-1 font-weight-medium text-high-emphasis" data-v-8b61e005${_scopeId2}>${ssrInterpolate(((_a = _ctx.classSession) == null ? void 0 : _a.name) || "Class Session")}</span>`);
                  if ((_b = _ctx.classSession) == null ? void 0 : _b.date) {
                    _push3(ssrRenderComponent(VChip, {
                      size: "small",
                      color: "primary",
                      variant: "tonal",
                      class: "font-weight-medium"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.classSession.date)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.classSession.date), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span class="text-body-2 text-medium-emphasis" data-v-8b61e005${_scopeId2}>${ssrInterpolate((_c = _ctx.classSession) == null ? void 0 : _c.timeStart)} - ${ssrInterpolate((_d = _ctx.classSession) == null ? void 0 : _d.timeEnd)}</span></div>`);
                  _push3(ssrRenderComponent(VCardText, {
                    class: "pa-8 bg-grey-light overflow-y-auto",
                    style: { "max-height": "calc(90vh - 280px)" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (currentStep.value === 1) {
                          _push4(`<div data-v-8b61e005${_scopeId3}><div class="d-flex align-center justify-space-between mb-4 bg-surface rounded-lg px-6 py-3 border border-light" data-v-8b61e005${_scopeId3}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-8b61e005${_scopeId3}>${ssrInterpolate(localStudents.value.length)} Students </span>`);
                          _push4(ssrRenderComponent(VCheckbox, {
                            modelValue: isAllPresent.value,
                            "onUpdate:modelValue": ($event) => isAllPresent.value = $event,
                            label: "Mark All Present",
                            color: "primary",
                            "hide-details": "",
                            density: "compact"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="d-flex flex-column gap-4" data-v-8b61e005${_scopeId3}><!--[-->`);
                          ssrRenderList(localStudents.value, (student) => {
                            _push4(ssrRenderComponent(VCard, {
                              key: student.id,
                              class: "student-presence-card border rounded-lg overflow-hidden",
                              elevation: "0"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="pa-4 d-flex align-center flex-wrap justify-space-between gap-4" data-v-8b61e005${_scopeId4}><div class="d-flex align-center gap-3 flex-grow-1" style="${ssrRenderStyle({ "min-width": "280px", "max-width": "380px" })}" data-v-8b61e005${_scopeId4}><div class="d-flex flex-column" data-v-8b61e005${_scopeId4}><div class="d-flex align-center gap-2" data-v-8b61e005${_scopeId4}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-8b61e005${_scopeId4}>${ssrInterpolate(student.name)}</span><span class="text-caption text-medium-emphasis" data-v-8b61e005${_scopeId4}>${ssrInterpolate(student.id)}</span></div><div class="d-flex align-center gap-2 mt-1 text-caption text-medium-emphasis" data-v-8b61e005${_scopeId4}>`);
                                  if (student.badgeText) {
                                    _push5(ssrRenderComponent(VChip, {
                                      size: "x-small",
                                      color: student.badgeColor === "error" ? "error" : student.badgeColor === "warning" ? "warning" : "success",
                                      variant: "tonal",
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
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`<span class="dot-separator bg-secondary" data-v-8b61e005${_scopeId4}></span>`);
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "ri-book-2-line",
                                    size: "14"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span data-v-8b61e005${_scopeId4}>${ssrInterpolate(student.course)}</span></div></div></div><div class="d-flex align-center gap-4 flex-wrap flex-grow-1 justify-end" data-v-8b61e005${_scopeId4}><div class="d-flex align-center border-r border-light pe-4" data-v-8b61e005${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VSwitch, {
                                    modelValue: student.isPresent,
                                    "onUpdate:modelValue": [($event) => student.isPresent = $event, ($event) => onPresenceChange(student)],
                                    color: "primary",
                                    "hide-details": "",
                                    density: "compact",
                                    class: "presence-switch"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span class="${ssrRenderClass([student.isPresent ? "text-primary" : "text-secondary", "text-body-2 font-weight-medium ms-2"])}" data-v-8b61e005${_scopeId4}>${ssrInterpolate(student.isPresent ? "Present" : "Absent")}</span></div><div class="d-flex align-center border-r border-light pe-4" data-v-8b61e005${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VCheckbox, {
                                    modelValue: student.equipment.laptop,
                                    "onUpdate:modelValue": ($event) => student.equipment.laptop = $event,
                                    label: "Laptop",
                                    color: "primary",
                                    "hide-details": "",
                                    density: "compact",
                                    disabled: !student.isPresent
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div><div style="${ssrRenderStyle({ "width": "75px" })}" data-v-8b61e005${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VTextField, {
                                    modelValue: student.quota,
                                    "onUpdate:modelValue": ($event) => student.quota = $event,
                                    label: "Quota",
                                    placeholder: "0",
                                    "hide-details": "",
                                    density: "compact",
                                    variant: "outlined",
                                    class: "text-center-input",
                                    disabled: !student.isPresent
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div><div style="${ssrRenderStyle({ "width": "220px", "min-width": "150px" })}" data-v-8b61e005${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VTextField, {
                                    modelValue: student.remarks,
                                    "onUpdate:modelValue": ($event) => student.remarks = $event,
                                    label: "Remarks / Notes",
                                    placeholder: "Add remarks...",
                                    "hide-details": "",
                                    density: "compact",
                                    variant: "outlined",
                                    disabled: !student.isPresent
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div></div></div><div style="${ssrRenderStyle(student.isPresent ? null : { display: "none" })}" class="bg-light-grey border-t border-light pa-4" data-v-8b61e005${_scopeId4}><div class="d-flex flex-wrap gap-4" data-v-8b61e005${_scopeId4}><div class="equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1" style="${ssrRenderStyle({ "min-width": "180px", "max-width": "220px" })}" data-v-8b61e005${_scopeId4}><div class="d-flex flex-column" data-v-8b61e005${_scopeId4}><span class="text-body-2 font-weight-medium text-high-emphasis" data-v-8b61e005${_scopeId4}>Laptop</span><span class="text-caption text-medium-emphasis" data-v-8b61e005${_scopeId4}>4 Quota left • Asus</span></div>`);
                                  _push5(ssrRenderComponent(VCheckbox, {
                                    modelValue: student.equipment.laptop,
                                    "onUpdate:modelValue": ($event) => student.equipment.laptop = $event,
                                    color: "primary",
                                    "hide-details": "",
                                    density: "compact"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div><div class="equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1" style="${ssrRenderStyle({ "min-width": "180px", "max-width": "220px" })}" data-v-8b61e005${_scopeId4}><div class="d-flex flex-column" data-v-8b61e005${_scopeId4}><span class="text-body-2 font-weight-medium text-high-emphasis" data-v-8b61e005${_scopeId4}>Mouse</span><span class="text-caption text-medium-emphasis" data-v-8b61e005${_scopeId4}>4 Quota left • Rexus</span></div>`);
                                  _push5(ssrRenderComponent(VCheckbox, {
                                    modelValue: student.equipment.mouse,
                                    "onUpdate:modelValue": ($event) => student.equipment.mouse = $event,
                                    color: "primary",
                                    "hide-details": "",
                                    density: "compact"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div><div class="equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1" style="${ssrRenderStyle({ "min-width": "180px", "max-width": "220px" })}" data-v-8b61e005${_scopeId4}><div class="d-flex flex-column" data-v-8b61e005${_scopeId4}><span class="text-body-2 font-weight-medium text-high-emphasis" data-v-8b61e005${_scopeId4}>Headphone</span><span class="text-caption text-medium-emphasis" data-v-8b61e005${_scopeId4}>4 Quota left • Earpod</span></div>`);
                                  _push5(ssrRenderComponent(VCheckbox, {
                                    modelValue: student.equipment.headphone,
                                    "onUpdate:modelValue": ($event) => student.equipment.headphone = $event,
                                    color: "primary",
                                    "hide-details": "",
                                    density: "compact"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div><div class="equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1" style="${ssrRenderStyle({ "min-width": "180px", "max-width": "220px" })}" data-v-8b61e005${_scopeId4}><div class="d-flex flex-column" data-v-8b61e005${_scopeId4}><span class="text-body-2 font-weight-medium text-high-emphasis" data-v-8b61e005${_scopeId4}>Speaker</span><span class="text-caption text-medium-emphasis" data-v-8b61e005${_scopeId4}>10 Quota left • Portable</span></div>`);
                                  _push5(ssrRenderComponent(VCheckbox, {
                                    modelValue: student.equipment.speaker,
                                    "onUpdate:modelValue": ($event) => student.equipment.speaker = $event,
                                    color: "primary",
                                    "hide-details": "",
                                    density: "compact"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div><div class="equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1" style="${ssrRenderStyle({ "min-width": "180px", "max-width": "220px" })}" data-v-8b61e005${_scopeId4}><div class="d-flex flex-column" data-v-8b61e005${_scopeId4}><span class="text-body-2 font-weight-medium text-high-emphasis" data-v-8b61e005${_scopeId4}>Charger</span><span class="text-caption text-medium-emphasis" data-v-8b61e005${_scopeId4}>15 Quota left • Pad</span></div>`);
                                  _push5(ssrRenderComponent(VCheckbox, {
                                    modelValue: student.equipment.charger,
                                    "onUpdate:modelValue": ($event) => student.equipment.charger = $event,
                                    color: "primary",
                                    "hide-details": "",
                                    density: "compact"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div></div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "pa-4 d-flex align-center flex-wrap justify-space-between gap-4" }, [
                                      createVNode("div", {
                                        class: "d-flex align-center gap-3 flex-grow-1",
                                        style: { "min-width": "280px", "max-width": "380px" }
                                      }, [
                                        createVNode("div", { class: "d-flex flex-column" }, [
                                          createVNode("div", { class: "d-flex align-center gap-2" }, [
                                            createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(student.name), 1),
                                            createVNode("span", { class: "text-caption text-medium-emphasis" }, toDisplayString(student.id), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex align-center gap-2 mt-1 text-caption text-medium-emphasis" }, [
                                            student.badgeText ? (openBlock(), createBlock(VChip, {
                                              key: 0,
                                              size: "x-small",
                                              color: student.badgeColor === "error" ? "error" : student.badgeColor === "warning" ? "warning" : "success",
                                              variant: "tonal",
                                              class: "font-weight-medium"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(student.badgeText), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])) : createCommentVNode("", true),
                                            createVNode("span", { class: "dot-separator bg-secondary" }),
                                            createVNode(VIcon, {
                                              icon: "ri-book-2-line",
                                              size: "14"
                                            }),
                                            createVNode("span", null, toDisplayString(student.course), 1)
                                          ])
                                        ])
                                      ]),
                                      createVNode("div", { class: "d-flex align-center gap-4 flex-wrap flex-grow-1 justify-end" }, [
                                        createVNode("div", { class: "d-flex align-center border-r border-light pe-4" }, [
                                          createVNode(VSwitch, {
                                            modelValue: student.isPresent,
                                            "onUpdate:modelValue": [($event) => student.isPresent = $event, ($event) => onPresenceChange(student)],
                                            color: "primary",
                                            "hide-details": "",
                                            density: "compact",
                                            class: "presence-switch"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("span", {
                                            class: ["text-body-2 font-weight-medium ms-2", student.isPresent ? "text-primary" : "text-secondary"]
                                          }, toDisplayString(student.isPresent ? "Present" : "Absent"), 3)
                                        ]),
                                        createVNode("div", { class: "d-flex align-center border-r border-light pe-4" }, [
                                          createVNode(VCheckbox, {
                                            modelValue: student.equipment.laptop,
                                            "onUpdate:modelValue": ($event) => student.equipment.laptop = $event,
                                            label: "Laptop",
                                            color: "primary",
                                            "hide-details": "",
                                            density: "compact",
                                            disabled: !student.isPresent
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                        ]),
                                        createVNode("div", { style: { "width": "75px" } }, [
                                          createVNode(VTextField, {
                                            modelValue: student.quota,
                                            "onUpdate:modelValue": ($event) => student.quota = $event,
                                            label: "Quota",
                                            placeholder: "0",
                                            "hide-details": "",
                                            density: "compact",
                                            variant: "outlined",
                                            class: "text-center-input",
                                            disabled: !student.isPresent
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                        ]),
                                        createVNode("div", { style: { "width": "220px", "min-width": "150px" } }, [
                                          createVNode(VTextField, {
                                            modelValue: student.remarks,
                                            "onUpdate:modelValue": ($event) => student.remarks = $event,
                                            label: "Remarks / Notes",
                                            placeholder: "Add remarks...",
                                            "hide-details": "",
                                            density: "compact",
                                            variant: "outlined",
                                            disabled: !student.isPresent
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                        ])
                                      ])
                                    ]),
                                    withDirectives(createVNode("div", { class: "bg-light-grey border-t border-light pa-4" }, [
                                      createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                        createVNode("div", {
                                          class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                          style: { "min-width": "180px", "max-width": "220px" }
                                        }, [
                                          createVNode("div", { class: "d-flex flex-column" }, [
                                            createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Laptop"),
                                            createVNode("span", { class: "text-caption text-medium-emphasis" }, "4 Quota left • Asus")
                                          ]),
                                          createVNode(VCheckbox, {
                                            modelValue: student.equipment.laptop,
                                            "onUpdate:modelValue": ($event) => student.equipment.laptop = $event,
                                            color: "primary",
                                            "hide-details": "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", {
                                          class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                          style: { "min-width": "180px", "max-width": "220px" }
                                        }, [
                                          createVNode("div", { class: "d-flex flex-column" }, [
                                            createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Mouse"),
                                            createVNode("span", { class: "text-caption text-medium-emphasis" }, "4 Quota left • Rexus")
                                          ]),
                                          createVNode(VCheckbox, {
                                            modelValue: student.equipment.mouse,
                                            "onUpdate:modelValue": ($event) => student.equipment.mouse = $event,
                                            color: "primary",
                                            "hide-details": "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", {
                                          class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                          style: { "min-width": "180px", "max-width": "220px" }
                                        }, [
                                          createVNode("div", { class: "d-flex flex-column" }, [
                                            createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Headphone"),
                                            createVNode("span", { class: "text-caption text-medium-emphasis" }, "4 Quota left • Earpod")
                                          ]),
                                          createVNode(VCheckbox, {
                                            modelValue: student.equipment.headphone,
                                            "onUpdate:modelValue": ($event) => student.equipment.headphone = $event,
                                            color: "primary",
                                            "hide-details": "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", {
                                          class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                          style: { "min-width": "180px", "max-width": "220px" }
                                        }, [
                                          createVNode("div", { class: "d-flex flex-column" }, [
                                            createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Speaker"),
                                            createVNode("span", { class: "text-caption text-medium-emphasis" }, "10 Quota left • Portable")
                                          ]),
                                          createVNode(VCheckbox, {
                                            modelValue: student.equipment.speaker,
                                            "onUpdate:modelValue": ($event) => student.equipment.speaker = $event,
                                            color: "primary",
                                            "hide-details": "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", {
                                          class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                          style: { "min-width": "180px", "max-width": "220px" }
                                        }, [
                                          createVNode("div", { class: "d-flex flex-column" }, [
                                            createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Charger"),
                                            createVNode("span", { class: "text-caption text-medium-emphasis" }, "15 Quota left • Pad")
                                          ]),
                                          createVNode(VCheckbox, {
                                            modelValue: student.equipment.charger,
                                            "onUpdate:modelValue": ($event) => student.equipment.charger = $event,
                                            color: "primary",
                                            "hide-details": "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ])
                                    ], 512), [
                                      [vShow, student.isPresent]
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div></div>`);
                        } else if (currentStep.value === 2) {
                          _push4(`<div data-v-8b61e005${_scopeId3}>`);
                          _push4(ssrRenderComponent(VRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  md: "4",
                                  class: "d-flex flex-column gap-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCard, {
                                        class: "border rounded-lg",
                                        elevation: "0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCardText, { class: "pa-5" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="d-flex align-center justify-space-between mb-3" data-v-8b61e005${_scopeId7}><span class="text-h6 font-weight-medium text-high-emphasis" data-v-8b61e005${_scopeId7}>Present</span><div class="rounded-lg bg-light-green d-flex align-center justify-center" style="${ssrRenderStyle({ "width": "36px", "height": "36px" })}" data-v-8b61e005${_scopeId7}>`);
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    icon: "ri-check-line",
                                                    color: "primary",
                                                    size: "20"
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(`</div></div><span class="text-h3 font-weight-bold text-primary" data-v-8b61e005${_scopeId7}>${ssrInterpolate(stats.value.present)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                                                      createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Present"),
                                                      createVNode("div", {
                                                        class: "rounded-lg bg-light-green d-flex align-center justify-center",
                                                        style: { "width": "36px", "height": "36px" }
                                                      }, [
                                                        createVNode(VIcon, {
                                                          icon: "ri-check-line",
                                                          color: "primary",
                                                          size: "20"
                                                        })
                                                      ])
                                                    ]),
                                                    createVNode("span", { class: "text-h3 font-weight-bold text-primary" }, toDisplayString(stats.value.present), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCardText, { class: "pa-5" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                                                    createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Present"),
                                                    createVNode("div", {
                                                      class: "rounded-lg bg-light-green d-flex align-center justify-center",
                                                      style: { "width": "36px", "height": "36px" }
                                                    }, [
                                                      createVNode(VIcon, {
                                                        icon: "ri-check-line",
                                                        color: "primary",
                                                        size: "20"
                                                      })
                                                    ])
                                                  ]),
                                                  createVNode("span", { class: "text-h3 font-weight-bold text-primary" }, toDisplayString(stats.value.present), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCard, {
                                        class: "border rounded-lg",
                                        elevation: "0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCardText, { class: "pa-5" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="d-flex align-center justify-space-between mb-3" data-v-8b61e005${_scopeId7}><span class="text-h6 font-weight-medium text-high-emphasis" data-v-8b61e005${_scopeId7}>Absent</span><div class="rounded-lg bg-light-red d-flex align-center justify-center" style="${ssrRenderStyle({ "width": "36px", "height": "36px" })}" data-v-8b61e005${_scopeId7}>`);
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    icon: "ri-close-line",
                                                    color: "error",
                                                    size: "20"
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(`</div></div><span class="text-h3 font-weight-bold text-error" data-v-8b61e005${_scopeId7}>${ssrInterpolate(stats.value.absent)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                                                      createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Absent"),
                                                      createVNode("div", {
                                                        class: "rounded-lg bg-light-red d-flex align-center justify-center",
                                                        style: { "width": "36px", "height": "36px" }
                                                      }, [
                                                        createVNode(VIcon, {
                                                          icon: "ri-close-line",
                                                          color: "error",
                                                          size: "20"
                                                        })
                                                      ])
                                                    ]),
                                                    createVNode("span", { class: "text-h3 font-weight-bold text-error" }, toDisplayString(stats.value.absent), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCardText, { class: "pa-5" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                                                    createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Absent"),
                                                    createVNode("div", {
                                                      class: "rounded-lg bg-light-red d-flex align-center justify-center",
                                                      style: { "width": "36px", "height": "36px" }
                                                    }, [
                                                      createVNode(VIcon, {
                                                        icon: "ri-close-line",
                                                        color: "error",
                                                        size: "20"
                                                      })
                                                    ])
                                                  ]),
                                                  createVNode("span", { class: "text-h3 font-weight-bold text-error" }, toDisplayString(stats.value.absent), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCard, {
                                          class: "border rounded-lg",
                                          elevation: "0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, { class: "pa-5" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                                                  createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Present"),
                                                  createVNode("div", {
                                                    class: "rounded-lg bg-light-green d-flex align-center justify-center",
                                                    style: { "width": "36px", "height": "36px" }
                                                  }, [
                                                    createVNode(VIcon, {
                                                      icon: "ri-check-line",
                                                      color: "primary",
                                                      size: "20"
                                                    })
                                                  ])
                                                ]),
                                                createVNode("span", { class: "text-h3 font-weight-bold text-primary" }, toDisplayString(stats.value.present), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCard, {
                                          class: "border rounded-lg",
                                          elevation: "0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, { class: "pa-5" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                                                  createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Absent"),
                                                  createVNode("div", {
                                                    class: "rounded-lg bg-light-red d-flex align-center justify-center",
                                                    style: { "width": "36px", "height": "36px" }
                                                  }, [
                                                    createVNode(VIcon, {
                                                      icon: "ri-close-line",
                                                      color: "error",
                                                      size: "20"
                                                    })
                                                  ])
                                                ]),
                                                createVNode("span", { class: "text-h3 font-weight-bold text-error" }, toDisplayString(stats.value.absent), 1)
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
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  md: "8"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VRow, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VCard, {
                                                    class: "border rounded-lg h-full overflow-hidden",
                                                    elevation: "0"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<div class="pa-4 bg-light-green border-b border-light d-flex align-center justify-space-between" data-v-8b61e005${_scopeId8}><span class="text-body-1 font-weight-medium text-primary" data-v-8b61e005${_scopeId8}>List Presence</span>`);
                                                        _push9(ssrRenderComponent(VChip, {
                                                          size: "small",
                                                          color: "info",
                                                          variant: "tonal",
                                                          class: "font-weight-medium"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(` Key will be sent `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" Key will be sent ")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(`</div>`);
                                                        _push9(ssrRenderComponent(VCardText, {
                                                          class: "pa-0 overflow-y-auto",
                                                          style: { "height": "300px" }
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              if (stats.value.present === 0) {
                                                                _push10(`<div class="pa-8 text-center text-medium-emphasis text-body-2" data-v-8b61e005${_scopeId9}> No students present. </div>`);
                                                              } else {
                                                                _push10(`<div class="d-flex flex-column" data-v-8b61e005${_scopeId9}><!--[-->`);
                                                                ssrRenderList(localStudents.value.filter((s) => s.isPresent), (student, idx) => {
                                                                  _push10(`<div class="px-4 py-3 d-flex align-center gap-3 border-b border-light" data-v-8b61e005${_scopeId9}><span class="text-caption text-medium-emphasis" style="${ssrRenderStyle({ "width": "20px" })}" data-v-8b61e005${_scopeId9}>${ssrInterpolate(idx + 1)}</span><div class="d-flex flex-column overflow-hidden" data-v-8b61e005${_scopeId9}><span class="text-body-2 font-weight-medium text-high-emphasis text-truncate" data-v-8b61e005${_scopeId9}>${ssrInterpolate(student.name)}</span><div class="d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" data-v-8b61e005${_scopeId9}><span data-v-8b61e005${_scopeId9}>${ssrInterpolate(student.id)}</span><span class="dot-separator mx-1" data-v-8b61e005${_scopeId9}></span>`);
                                                                  _push10(ssrRenderComponent(VIcon, {
                                                                    icon: "ri-book-2-line",
                                                                    size: "12"
                                                                  }, null, _parent10, _scopeId9));
                                                                  _push10(`<span class="text-truncate" data-v-8b61e005${_scopeId9}>${ssrInterpolate(student.course)}</span></div></div></div>`);
                                                                });
                                                                _push10(`<!--]--></div>`);
                                                              }
                                                            } else {
                                                              return [
                                                                stats.value.present === 0 ? (openBlock(), createBlock("div", {
                                                                  key: 0,
                                                                  class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                                }, " No students present. ")) : (openBlock(), createBlock("div", {
                                                                  key: 1,
                                                                  class: "d-flex flex-column"
                                                                }, [
                                                                  (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => s.isPresent), (student, idx) => {
                                                                    return openBlock(), createBlock("div", {
                                                                      key: student.id,
                                                                      class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                                    }, [
                                                                      createVNode("span", {
                                                                        class: "text-caption text-medium-emphasis",
                                                                        style: { "width": "20px" }
                                                                      }, toDisplayString(idx + 1), 1),
                                                                      createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                                        createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                                        createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                                          createVNode("span", null, toDisplayString(student.id), 1),
                                                                          createVNode("span", { class: "dot-separator mx-1" }),
                                                                          createVNode(VIcon, {
                                                                            icon: "ri-book-2-line",
                                                                            size: "12"
                                                                          }),
                                                                          createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                                        ])
                                                                      ])
                                                                    ]);
                                                                  }), 128))
                                                                ]))
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode("div", { class: "pa-4 bg-light-green border-b border-light d-flex align-center justify-space-between" }, [
                                                            createVNode("span", { class: "text-body-1 font-weight-medium text-primary" }, "List Presence"),
                                                            createVNode(VChip, {
                                                              size: "small",
                                                              color: "info",
                                                              variant: "tonal",
                                                              class: "font-weight-medium"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Key will be sent ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          createVNode(VCardText, {
                                                            class: "pa-0 overflow-y-auto",
                                                            style: { "height": "300px" }
                                                          }, {
                                                            default: withCtx(() => [
                                                              stats.value.present === 0 ? (openBlock(), createBlock("div", {
                                                                key: 0,
                                                                class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                              }, " No students present. ")) : (openBlock(), createBlock("div", {
                                                                key: 1,
                                                                class: "d-flex flex-column"
                                                              }, [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => s.isPresent), (student, idx) => {
                                                                  return openBlock(), createBlock("div", {
                                                                    key: student.id,
                                                                    class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                                  }, [
                                                                    createVNode("span", {
                                                                      class: "text-caption text-medium-emphasis",
                                                                      style: { "width": "20px" }
                                                                    }, toDisplayString(idx + 1), 1),
                                                                    createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                                      createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                                      createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                                        createVNode("span", null, toDisplayString(student.id), 1),
                                                                        createVNode("span", { class: "dot-separator mx-1" }),
                                                                        createVNode(VIcon, {
                                                                          icon: "ri-book-2-line",
                                                                          size: "12"
                                                                        }),
                                                                        createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                                      ])
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
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VCard, {
                                                      class: "border rounded-lg h-full overflow-hidden",
                                                      elevation: "0"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "pa-4 bg-light-green border-b border-light d-flex align-center justify-space-between" }, [
                                                          createVNode("span", { class: "text-body-1 font-weight-medium text-primary" }, "List Presence"),
                                                          createVNode(VChip, {
                                                            size: "small",
                                                            color: "info",
                                                            variant: "tonal",
                                                            class: "font-weight-medium"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Key will be sent ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        createVNode(VCardText, {
                                                          class: "pa-0 overflow-y-auto",
                                                          style: { "height": "300px" }
                                                        }, {
                                                          default: withCtx(() => [
                                                            stats.value.present === 0 ? (openBlock(), createBlock("div", {
                                                              key: 0,
                                                              class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                            }, " No students present. ")) : (openBlock(), createBlock("div", {
                                                              key: 1,
                                                              class: "d-flex flex-column"
                                                            }, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => s.isPresent), (student, idx) => {
                                                                return openBlock(), createBlock("div", {
                                                                  key: student.id,
                                                                  class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                                }, [
                                                                  createVNode("span", {
                                                                    class: "text-caption text-medium-emphasis",
                                                                    style: { "width": "20px" }
                                                                  }, toDisplayString(idx + 1), 1),
                                                                  createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                                    createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                                    createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                                      createVNode("span", null, toDisplayString(student.id), 1),
                                                                      createVNode("span", { class: "dot-separator mx-1" }),
                                                                      createVNode(VIcon, {
                                                                        icon: "ri-book-2-line",
                                                                        size: "12"
                                                                      }),
                                                                      createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                                    ])
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
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VCard, {
                                                    class: "border rounded-lg h-full overflow-hidden",
                                                    elevation: "0"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<div class="pa-4 bg-light-red border-b border-light d-flex align-center justify-space-between" data-v-8b61e005${_scopeId8}><span class="text-body-1 font-weight-medium text-error" data-v-8b61e005${_scopeId8}>List Absent</span>`);
                                                        _push9(ssrRenderComponent(VChip, {
                                                          size: "small",
                                                          color: "secondary",
                                                          variant: "tonal",
                                                          class: "font-weight-medium"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(` Key will be not sent `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" Key will be not sent ")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(`</div>`);
                                                        _push9(ssrRenderComponent(VCardText, {
                                                          class: "pa-0 overflow-y-auto",
                                                          style: { "height": "300px" }
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              if (stats.value.absent === 0) {
                                                                _push10(`<div class="pa-8 text-center text-medium-emphasis text-body-2" data-v-8b61e005${_scopeId9}> No students absent. </div>`);
                                                              } else {
                                                                _push10(`<div class="d-flex flex-column" data-v-8b61e005${_scopeId9}><!--[-->`);
                                                                ssrRenderList(localStudents.value.filter((s) => !s.isPresent), (student, idx) => {
                                                                  _push10(`<div class="px-4 py-3 d-flex align-center gap-3 border-b border-light" data-v-8b61e005${_scopeId9}><span class="text-caption text-medium-emphasis" style="${ssrRenderStyle({ "width": "20px" })}" data-v-8b61e005${_scopeId9}>${ssrInterpolate(idx + 1)}</span><div class="d-flex flex-column overflow-hidden" data-v-8b61e005${_scopeId9}><span class="text-body-2 font-weight-medium text-high-emphasis text-truncate" data-v-8b61e005${_scopeId9}>${ssrInterpolate(student.name)}</span><div class="d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" data-v-8b61e005${_scopeId9}><span data-v-8b61e005${_scopeId9}>${ssrInterpolate(student.id)}</span><span class="dot-separator mx-1" data-v-8b61e005${_scopeId9}></span>`);
                                                                  _push10(ssrRenderComponent(VIcon, {
                                                                    icon: "ri-book-2-line",
                                                                    size: "12"
                                                                  }, null, _parent10, _scopeId9));
                                                                  _push10(`<span class="text-truncate" data-v-8b61e005${_scopeId9}>${ssrInterpolate(student.course)}</span></div></div></div>`);
                                                                });
                                                                _push10(`<!--]--></div>`);
                                                              }
                                                            } else {
                                                              return [
                                                                stats.value.absent === 0 ? (openBlock(), createBlock("div", {
                                                                  key: 0,
                                                                  class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                                }, " No students absent. ")) : (openBlock(), createBlock("div", {
                                                                  key: 1,
                                                                  class: "d-flex flex-column"
                                                                }, [
                                                                  (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => !s.isPresent), (student, idx) => {
                                                                    return openBlock(), createBlock("div", {
                                                                      key: student.id,
                                                                      class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                                    }, [
                                                                      createVNode("span", {
                                                                        class: "text-caption text-medium-emphasis",
                                                                        style: { "width": "20px" }
                                                                      }, toDisplayString(idx + 1), 1),
                                                                      createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                                        createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                                        createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                                          createVNode("span", null, toDisplayString(student.id), 1),
                                                                          createVNode("span", { class: "dot-separator mx-1" }),
                                                                          createVNode(VIcon, {
                                                                            icon: "ri-book-2-line",
                                                                            size: "12"
                                                                          }),
                                                                          createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                                        ])
                                                                      ])
                                                                    ]);
                                                                  }), 128))
                                                                ]))
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode("div", { class: "pa-4 bg-light-red border-b border-light d-flex align-center justify-space-between" }, [
                                                            createVNode("span", { class: "text-body-1 font-weight-medium text-error" }, "List Absent"),
                                                            createVNode(VChip, {
                                                              size: "small",
                                                              color: "secondary",
                                                              variant: "tonal",
                                                              class: "font-weight-medium"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Key will be not sent ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          createVNode(VCardText, {
                                                            class: "pa-0 overflow-y-auto",
                                                            style: { "height": "300px" }
                                                          }, {
                                                            default: withCtx(() => [
                                                              stats.value.absent === 0 ? (openBlock(), createBlock("div", {
                                                                key: 0,
                                                                class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                              }, " No students absent. ")) : (openBlock(), createBlock("div", {
                                                                key: 1,
                                                                class: "d-flex flex-column"
                                                              }, [
                                                                (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => !s.isPresent), (student, idx) => {
                                                                  return openBlock(), createBlock("div", {
                                                                    key: student.id,
                                                                    class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                                  }, [
                                                                    createVNode("span", {
                                                                      class: "text-caption text-medium-emphasis",
                                                                      style: { "width": "20px" }
                                                                    }, toDisplayString(idx + 1), 1),
                                                                    createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                                      createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                                      createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                                        createVNode("span", null, toDisplayString(student.id), 1),
                                                                        createVNode("span", { class: "dot-separator mx-1" }),
                                                                        createVNode(VIcon, {
                                                                          icon: "ri-book-2-line",
                                                                          size: "12"
                                                                        }),
                                                                        createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                                      ])
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
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VCard, {
                                                      class: "border rounded-lg h-full overflow-hidden",
                                                      elevation: "0"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "pa-4 bg-light-red border-b border-light d-flex align-center justify-space-between" }, [
                                                          createVNode("span", { class: "text-body-1 font-weight-medium text-error" }, "List Absent"),
                                                          createVNode(VChip, {
                                                            size: "small",
                                                            color: "secondary",
                                                            variant: "tonal",
                                                            class: "font-weight-medium"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Key will be not sent ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        createVNode(VCardText, {
                                                          class: "pa-0 overflow-y-auto",
                                                          style: { "height": "300px" }
                                                        }, {
                                                          default: withCtx(() => [
                                                            stats.value.absent === 0 ? (openBlock(), createBlock("div", {
                                                              key: 0,
                                                              class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                            }, " No students absent. ")) : (openBlock(), createBlock("div", {
                                                              key: 1,
                                                              class: "d-flex flex-column"
                                                            }, [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => !s.isPresent), (student, idx) => {
                                                                return openBlock(), createBlock("div", {
                                                                  key: student.id,
                                                                  class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                                }, [
                                                                  createVNode("span", {
                                                                    class: "text-caption text-medium-emphasis",
                                                                    style: { "width": "20px" }
                                                                  }, toDisplayString(idx + 1), 1),
                                                                  createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                                    createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                                    createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                                      createVNode("span", null, toDisplayString(student.id), 1),
                                                                      createVNode("span", { class: "dot-separator mx-1" }),
                                                                      createVNode(VIcon, {
                                                                        icon: "ri-book-2-line",
                                                                        size: "12"
                                                                      }),
                                                                      createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                                    ])
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
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCard, {
                                                    class: "border rounded-lg h-full overflow-hidden",
                                                    elevation: "0"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "pa-4 bg-light-green border-b border-light d-flex align-center justify-space-between" }, [
                                                        createVNode("span", { class: "text-body-1 font-weight-medium text-primary" }, "List Presence"),
                                                        createVNode(VChip, {
                                                          size: "small",
                                                          color: "info",
                                                          variant: "tonal",
                                                          class: "font-weight-medium"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Key will be sent ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      createVNode(VCardText, {
                                                        class: "pa-0 overflow-y-auto",
                                                        style: { "height": "300px" }
                                                      }, {
                                                        default: withCtx(() => [
                                                          stats.value.present === 0 ? (openBlock(), createBlock("div", {
                                                            key: 0,
                                                            class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                          }, " No students present. ")) : (openBlock(), createBlock("div", {
                                                            key: 1,
                                                            class: "d-flex flex-column"
                                                          }, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => s.isPresent), (student, idx) => {
                                                              return openBlock(), createBlock("div", {
                                                                key: student.id,
                                                                class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                              }, [
                                                                createVNode("span", {
                                                                  class: "text-caption text-medium-emphasis",
                                                                  style: { "width": "20px" }
                                                                }, toDisplayString(idx + 1), 1),
                                                                createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                                  createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                                  createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                                    createVNode("span", null, toDisplayString(student.id), 1),
                                                                    createVNode("span", { class: "dot-separator mx-1" }),
                                                                    createVNode(VIcon, {
                                                                      icon: "ri-book-2-line",
                                                                      size: "12"
                                                                    }),
                                                                    createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                                  ])
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
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCard, {
                                                    class: "border rounded-lg h-full overflow-hidden",
                                                    elevation: "0"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "pa-4 bg-light-red border-b border-light d-flex align-center justify-space-between" }, [
                                                        createVNode("span", { class: "text-body-1 font-weight-medium text-error" }, "List Absent"),
                                                        createVNode(VChip, {
                                                          size: "small",
                                                          color: "secondary",
                                                          variant: "tonal",
                                                          class: "font-weight-medium"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Key will be not sent ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      createVNode(VCardText, {
                                                        class: "pa-0 overflow-y-auto",
                                                        style: { "height": "300px" }
                                                      }, {
                                                        default: withCtx(() => [
                                                          stats.value.absent === 0 ? (openBlock(), createBlock("div", {
                                                            key: 0,
                                                            class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                          }, " No students absent. ")) : (openBlock(), createBlock("div", {
                                                            key: 1,
                                                            class: "d-flex flex-column"
                                                          }, [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => !s.isPresent), (student, idx) => {
                                                              return openBlock(), createBlock("div", {
                                                                key: student.id,
                                                                class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                              }, [
                                                                createVNode("span", {
                                                                  class: "text-caption text-medium-emphasis",
                                                                  style: { "width": "20px" }
                                                                }, toDisplayString(idx + 1), 1),
                                                                createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                                  createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                                  createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                                    createVNode("span", null, toDisplayString(student.id), 1),
                                                                    createVNode("span", { class: "dot-separator mx-1" }),
                                                                    createVNode(VIcon, {
                                                                      icon: "ri-book-2-line",
                                                                      size: "12"
                                                                    }),
                                                                    createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                                  ])
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
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCard, {
                                                  class: "border rounded-lg h-full overflow-hidden",
                                                  elevation: "0"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "pa-4 bg-light-green border-b border-light d-flex align-center justify-space-between" }, [
                                                      createVNode("span", { class: "text-body-1 font-weight-medium text-primary" }, "List Presence"),
                                                      createVNode(VChip, {
                                                        size: "small",
                                                        color: "info",
                                                        variant: "tonal",
                                                        class: "font-weight-medium"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Key will be sent ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    createVNode(VCardText, {
                                                      class: "pa-0 overflow-y-auto",
                                                      style: { "height": "300px" }
                                                    }, {
                                                      default: withCtx(() => [
                                                        stats.value.present === 0 ? (openBlock(), createBlock("div", {
                                                          key: 0,
                                                          class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                        }, " No students present. ")) : (openBlock(), createBlock("div", {
                                                          key: 1,
                                                          class: "d-flex flex-column"
                                                        }, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => s.isPresent), (student, idx) => {
                                                            return openBlock(), createBlock("div", {
                                                              key: student.id,
                                                              class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                            }, [
                                                              createVNode("span", {
                                                                class: "text-caption text-medium-emphasis",
                                                                style: { "width": "20px" }
                                                              }, toDisplayString(idx + 1), 1),
                                                              createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                                createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                                createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                                  createVNode("span", null, toDisplayString(student.id), 1),
                                                                  createVNode("span", { class: "dot-separator mx-1" }),
                                                                  createVNode(VIcon, {
                                                                    icon: "ri-book-2-line",
                                                                    size: "12"
                                                                  }),
                                                                  createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                                ])
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
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCard, {
                                                  class: "border rounded-lg h-full overflow-hidden",
                                                  elevation: "0"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "pa-4 bg-light-red border-b border-light d-flex align-center justify-space-between" }, [
                                                      createVNode("span", { class: "text-body-1 font-weight-medium text-error" }, "List Absent"),
                                                      createVNode(VChip, {
                                                        size: "small",
                                                        color: "secondary",
                                                        variant: "tonal",
                                                        class: "font-weight-medium"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Key will be not sent ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    createVNode(VCardText, {
                                                      class: "pa-0 overflow-y-auto",
                                                      style: { "height": "300px" }
                                                    }, {
                                                      default: withCtx(() => [
                                                        stats.value.absent === 0 ? (openBlock(), createBlock("div", {
                                                          key: 0,
                                                          class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                        }, " No students absent. ")) : (openBlock(), createBlock("div", {
                                                          key: 1,
                                                          class: "d-flex flex-column"
                                                        }, [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => !s.isPresent), (student, idx) => {
                                                            return openBlock(), createBlock("div", {
                                                              key: student.id,
                                                              class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                            }, [
                                                              createVNode("span", {
                                                                class: "text-caption text-medium-emphasis",
                                                                style: { "width": "20px" }
                                                              }, toDisplayString(idx + 1), 1),
                                                              createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                                createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                                createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                                  createVNode("span", null, toDisplayString(student.id), 1),
                                                                  createVNode("span", { class: "dot-separator mx-1" }),
                                                                  createVNode(VIcon, {
                                                                    icon: "ri-book-2-line",
                                                                    size: "12"
                                                                  }),
                                                                  createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                                ])
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
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "4",
                                    class: "d-flex flex-column gap-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        class: "border rounded-lg",
                                        elevation: "0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCardText, { class: "pa-5" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                                                createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Present"),
                                                createVNode("div", {
                                                  class: "rounded-lg bg-light-green d-flex align-center justify-center",
                                                  style: { "width": "36px", "height": "36px" }
                                                }, [
                                                  createVNode(VIcon, {
                                                    icon: "ri-check-line",
                                                    color: "primary",
                                                    size: "20"
                                                  })
                                                ])
                                              ]),
                                              createVNode("span", { class: "text-h3 font-weight-bold text-primary" }, toDisplayString(stats.value.present), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCard, {
                                        class: "border rounded-lg",
                                        elevation: "0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCardText, { class: "pa-5" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                                                createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Absent"),
                                                createVNode("div", {
                                                  class: "rounded-lg bg-light-red d-flex align-center justify-center",
                                                  style: { "width": "36px", "height": "36px" }
                                                }, [
                                                  createVNode(VIcon, {
                                                    icon: "ri-close-line",
                                                    color: "error",
                                                    size: "20"
                                                  })
                                                ])
                                              ]),
                                              createVNode("span", { class: "text-h3 font-weight-bold text-error" }, toDisplayString(stats.value.absent), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "8"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCard, {
                                                class: "border rounded-lg h-full overflow-hidden",
                                                elevation: "0"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "pa-4 bg-light-green border-b border-light d-flex align-center justify-space-between" }, [
                                                    createVNode("span", { class: "text-body-1 font-weight-medium text-primary" }, "List Presence"),
                                                    createVNode(VChip, {
                                                      size: "small",
                                                      color: "info",
                                                      variant: "tonal",
                                                      class: "font-weight-medium"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Key will be sent ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  createVNode(VCardText, {
                                                    class: "pa-0 overflow-y-auto",
                                                    style: { "height": "300px" }
                                                  }, {
                                                    default: withCtx(() => [
                                                      stats.value.present === 0 ? (openBlock(), createBlock("div", {
                                                        key: 0,
                                                        class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                      }, " No students present. ")) : (openBlock(), createBlock("div", {
                                                        key: 1,
                                                        class: "d-flex flex-column"
                                                      }, [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => s.isPresent), (student, idx) => {
                                                          return openBlock(), createBlock("div", {
                                                            key: student.id,
                                                            class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                          }, [
                                                            createVNode("span", {
                                                              class: "text-caption text-medium-emphasis",
                                                              style: { "width": "20px" }
                                                            }, toDisplayString(idx + 1), 1),
                                                            createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                              createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                              createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                                createVNode("span", null, toDisplayString(student.id), 1),
                                                                createVNode("span", { class: "dot-separator mx-1" }),
                                                                createVNode(VIcon, {
                                                                  icon: "ri-book-2-line",
                                                                  size: "12"
                                                                }),
                                                                createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                              ])
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
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCard, {
                                                class: "border rounded-lg h-full overflow-hidden",
                                                elevation: "0"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "pa-4 bg-light-red border-b border-light d-flex align-center justify-space-between" }, [
                                                    createVNode("span", { class: "text-body-1 font-weight-medium text-error" }, "List Absent"),
                                                    createVNode(VChip, {
                                                      size: "small",
                                                      color: "secondary",
                                                      variant: "tonal",
                                                      class: "font-weight-medium"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Key will be not sent ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  createVNode(VCardText, {
                                                    class: "pa-0 overflow-y-auto",
                                                    style: { "height": "300px" }
                                                  }, {
                                                    default: withCtx(() => [
                                                      stats.value.absent === 0 ? (openBlock(), createBlock("div", {
                                                        key: 0,
                                                        class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                      }, " No students absent. ")) : (openBlock(), createBlock("div", {
                                                        key: 1,
                                                        class: "d-flex flex-column"
                                                      }, [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => !s.isPresent), (student, idx) => {
                                                          return openBlock(), createBlock("div", {
                                                            key: student.id,
                                                            class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                          }, [
                                                            createVNode("span", {
                                                              class: "text-caption text-medium-emphasis",
                                                              style: { "width": "20px" }
                                                            }, toDisplayString(idx + 1), 1),
                                                            createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                              createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                              createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                                createVNode("span", null, toDisplayString(student.id), 1),
                                                                createVNode("span", { class: "dot-separator mx-1" }),
                                                                createVNode(VIcon, {
                                                                  icon: "ri-book-2-line",
                                                                  size: "12"
                                                                }),
                                                                createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                              ])
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
                                            ]),
                                            _: 1
                                          })
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
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          currentStep.value === 1 ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("div", { class: "d-flex align-center justify-space-between mb-4 bg-surface rounded-lg px-6 py-3 border border-light" }, [
                              createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(localStudents.value.length) + " Students ", 1),
                              createVNode(VCheckbox, {
                                modelValue: isAllPresent.value,
                                "onUpdate:modelValue": ($event) => isAllPresent.value = $event,
                                label: "Mark All Present",
                                color: "primary",
                                "hide-details": "",
                                density: "compact"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "d-flex flex-column gap-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value, (student) => {
                                return openBlock(), createBlock(VCard, {
                                  key: student.id,
                                  class: "student-presence-card border rounded-lg overflow-hidden",
                                  elevation: "0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "pa-4 d-flex align-center flex-wrap justify-space-between gap-4" }, [
                                      createVNode("div", {
                                        class: "d-flex align-center gap-3 flex-grow-1",
                                        style: { "min-width": "280px", "max-width": "380px" }
                                      }, [
                                        createVNode("div", { class: "d-flex flex-column" }, [
                                          createVNode("div", { class: "d-flex align-center gap-2" }, [
                                            createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(student.name), 1),
                                            createVNode("span", { class: "text-caption text-medium-emphasis" }, toDisplayString(student.id), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex align-center gap-2 mt-1 text-caption text-medium-emphasis" }, [
                                            student.badgeText ? (openBlock(), createBlock(VChip, {
                                              key: 0,
                                              size: "x-small",
                                              color: student.badgeColor === "error" ? "error" : student.badgeColor === "warning" ? "warning" : "success",
                                              variant: "tonal",
                                              class: "font-weight-medium"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(student.badgeText), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])) : createCommentVNode("", true),
                                            createVNode("span", { class: "dot-separator bg-secondary" }),
                                            createVNode(VIcon, {
                                              icon: "ri-book-2-line",
                                              size: "14"
                                            }),
                                            createVNode("span", null, toDisplayString(student.course), 1)
                                          ])
                                        ])
                                      ]),
                                      createVNode("div", { class: "d-flex align-center gap-4 flex-wrap flex-grow-1 justify-end" }, [
                                        createVNode("div", { class: "d-flex align-center border-r border-light pe-4" }, [
                                          createVNode(VSwitch, {
                                            modelValue: student.isPresent,
                                            "onUpdate:modelValue": [($event) => student.isPresent = $event, ($event) => onPresenceChange(student)],
                                            color: "primary",
                                            "hide-details": "",
                                            density: "compact",
                                            class: "presence-switch"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("span", {
                                            class: ["text-body-2 font-weight-medium ms-2", student.isPresent ? "text-primary" : "text-secondary"]
                                          }, toDisplayString(student.isPresent ? "Present" : "Absent"), 3)
                                        ]),
                                        createVNode("div", { class: "d-flex align-center border-r border-light pe-4" }, [
                                          createVNode(VCheckbox, {
                                            modelValue: student.equipment.laptop,
                                            "onUpdate:modelValue": ($event) => student.equipment.laptop = $event,
                                            label: "Laptop",
                                            color: "primary",
                                            "hide-details": "",
                                            density: "compact",
                                            disabled: !student.isPresent
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                        ]),
                                        createVNode("div", { style: { "width": "75px" } }, [
                                          createVNode(VTextField, {
                                            modelValue: student.quota,
                                            "onUpdate:modelValue": ($event) => student.quota = $event,
                                            label: "Quota",
                                            placeholder: "0",
                                            "hide-details": "",
                                            density: "compact",
                                            variant: "outlined",
                                            class: "text-center-input",
                                            disabled: !student.isPresent
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                        ]),
                                        createVNode("div", { style: { "width": "220px", "min-width": "150px" } }, [
                                          createVNode(VTextField, {
                                            modelValue: student.remarks,
                                            "onUpdate:modelValue": ($event) => student.remarks = $event,
                                            label: "Remarks / Notes",
                                            placeholder: "Add remarks...",
                                            "hide-details": "",
                                            density: "compact",
                                            variant: "outlined",
                                            disabled: !student.isPresent
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                        ])
                                      ])
                                    ]),
                                    withDirectives(createVNode("div", { class: "bg-light-grey border-t border-light pa-4" }, [
                                      createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                        createVNode("div", {
                                          class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                          style: { "min-width": "180px", "max-width": "220px" }
                                        }, [
                                          createVNode("div", { class: "d-flex flex-column" }, [
                                            createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Laptop"),
                                            createVNode("span", { class: "text-caption text-medium-emphasis" }, "4 Quota left • Asus")
                                          ]),
                                          createVNode(VCheckbox, {
                                            modelValue: student.equipment.laptop,
                                            "onUpdate:modelValue": ($event) => student.equipment.laptop = $event,
                                            color: "primary",
                                            "hide-details": "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", {
                                          class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                          style: { "min-width": "180px", "max-width": "220px" }
                                        }, [
                                          createVNode("div", { class: "d-flex flex-column" }, [
                                            createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Mouse"),
                                            createVNode("span", { class: "text-caption text-medium-emphasis" }, "4 Quota left • Rexus")
                                          ]),
                                          createVNode(VCheckbox, {
                                            modelValue: student.equipment.mouse,
                                            "onUpdate:modelValue": ($event) => student.equipment.mouse = $event,
                                            color: "primary",
                                            "hide-details": "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", {
                                          class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                          style: { "min-width": "180px", "max-width": "220px" }
                                        }, [
                                          createVNode("div", { class: "d-flex flex-column" }, [
                                            createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Headphone"),
                                            createVNode("span", { class: "text-caption text-medium-emphasis" }, "4 Quota left • Earpod")
                                          ]),
                                          createVNode(VCheckbox, {
                                            modelValue: student.equipment.headphone,
                                            "onUpdate:modelValue": ($event) => student.equipment.headphone = $event,
                                            color: "primary",
                                            "hide-details": "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", {
                                          class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                          style: { "min-width": "180px", "max-width": "220px" }
                                        }, [
                                          createVNode("div", { class: "d-flex flex-column" }, [
                                            createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Speaker"),
                                            createVNode("span", { class: "text-caption text-medium-emphasis" }, "10 Quota left • Portable")
                                          ]),
                                          createVNode(VCheckbox, {
                                            modelValue: student.equipment.speaker,
                                            "onUpdate:modelValue": ($event) => student.equipment.speaker = $event,
                                            color: "primary",
                                            "hide-details": "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", {
                                          class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                          style: { "min-width": "180px", "max-width": "220px" }
                                        }, [
                                          createVNode("div", { class: "d-flex flex-column" }, [
                                            createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Charger"),
                                            createVNode("span", { class: "text-caption text-medium-emphasis" }, "15 Quota left • Pad")
                                          ]),
                                          createVNode(VCheckbox, {
                                            modelValue: student.equipment.charger,
                                            "onUpdate:modelValue": ($event) => student.equipment.charger = $event,
                                            color: "primary",
                                            "hide-details": "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ])
                                    ], 512), [
                                      [vShow, student.isPresent]
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])
                          ])) : currentStep.value === 2 ? (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "4",
                                  class: "d-flex flex-column gap-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      class: "border rounded-lg",
                                      elevation: "0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCardText, { class: "pa-5" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                                              createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Present"),
                                              createVNode("div", {
                                                class: "rounded-lg bg-light-green d-flex align-center justify-center",
                                                style: { "width": "36px", "height": "36px" }
                                              }, [
                                                createVNode(VIcon, {
                                                  icon: "ri-check-line",
                                                  color: "primary",
                                                  size: "20"
                                                })
                                              ])
                                            ]),
                                            createVNode("span", { class: "text-h3 font-weight-bold text-primary" }, toDisplayString(stats.value.present), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCard, {
                                      class: "border rounded-lg",
                                      elevation: "0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCardText, { class: "pa-5" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                                              createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Absent"),
                                              createVNode("div", {
                                                class: "rounded-lg bg-light-red d-flex align-center justify-center",
                                                style: { "width": "36px", "height": "36px" }
                                              }, [
                                                createVNode(VIcon, {
                                                  icon: "ri-close-line",
                                                  color: "error",
                                                  size: "20"
                                                })
                                              ])
                                            ]),
                                            createVNode("span", { class: "text-h3 font-weight-bold text-error" }, toDisplayString(stats.value.absent), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "8"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              class: "border rounded-lg h-full overflow-hidden",
                                              elevation: "0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "pa-4 bg-light-green border-b border-light d-flex align-center justify-space-between" }, [
                                                  createVNode("span", { class: "text-body-1 font-weight-medium text-primary" }, "List Presence"),
                                                  createVNode(VChip, {
                                                    size: "small",
                                                    color: "info",
                                                    variant: "tonal",
                                                    class: "font-weight-medium"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Key will be sent ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                createVNode(VCardText, {
                                                  class: "pa-0 overflow-y-auto",
                                                  style: { "height": "300px" }
                                                }, {
                                                  default: withCtx(() => [
                                                    stats.value.present === 0 ? (openBlock(), createBlock("div", {
                                                      key: 0,
                                                      class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                    }, " No students present. ")) : (openBlock(), createBlock("div", {
                                                      key: 1,
                                                      class: "d-flex flex-column"
                                                    }, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => s.isPresent), (student, idx) => {
                                                        return openBlock(), createBlock("div", {
                                                          key: student.id,
                                                          class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                        }, [
                                                          createVNode("span", {
                                                            class: "text-caption text-medium-emphasis",
                                                            style: { "width": "20px" }
                                                          }, toDisplayString(idx + 1), 1),
                                                          createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                            createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                            createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                              createVNode("span", null, toDisplayString(student.id), 1),
                                                              createVNode("span", { class: "dot-separator mx-1" }),
                                                              createVNode(VIcon, {
                                                                icon: "ri-book-2-line",
                                                                size: "12"
                                                              }),
                                                              createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                            ])
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
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              class: "border rounded-lg h-full overflow-hidden",
                                              elevation: "0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "pa-4 bg-light-red border-b border-light d-flex align-center justify-space-between" }, [
                                                  createVNode("span", { class: "text-body-1 font-weight-medium text-error" }, "List Absent"),
                                                  createVNode(VChip, {
                                                    size: "small",
                                                    color: "secondary",
                                                    variant: "tonal",
                                                    class: "font-weight-medium"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Key will be not sent ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                createVNode(VCardText, {
                                                  class: "pa-0 overflow-y-auto",
                                                  style: { "height": "300px" }
                                                }, {
                                                  default: withCtx(() => [
                                                    stats.value.absent === 0 ? (openBlock(), createBlock("div", {
                                                      key: 0,
                                                      class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                    }, " No students absent. ")) : (openBlock(), createBlock("div", {
                                                      key: 1,
                                                      class: "d-flex flex-column"
                                                    }, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => !s.isPresent), (student, idx) => {
                                                        return openBlock(), createBlock("div", {
                                                          key: student.id,
                                                          class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                        }, [
                                                          createVNode("span", {
                                                            class: "text-caption text-medium-emphasis",
                                                            style: { "width": "20px" }
                                                          }, toDisplayString(idx + 1), 1),
                                                          createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                            createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                            createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                              createVNode("span", null, toDisplayString(student.id), 1),
                                                              createVNode("span", { class: "dot-separator mx-1" }),
                                                              createVNode(VIcon, {
                                                                icon: "ri-book-2-line",
                                                                size: "12"
                                                              }),
                                                              createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                            ])
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
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, {
                    class: ["px-8 py-4 bg-grey-light border-t border-light d-flex align-center", currentStep.value === 1 ? "justify-space-between" : "justify-end"]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (currentStep.value === 1) {
                          _push4(`<!--[--><div class="d-flex gap-2 flex-wrap" data-v-8b61e005${_scopeId3}>`);
                          _push4(ssrRenderComponent(VChip, {
                            size: "small",
                            color: "primary",
                            variant: "flat"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Present: ${ssrInterpolate(stats.value.present)}`);
                              } else {
                                return [
                                  createTextVNode(" Present: " + toDisplayString(stats.value.present), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VChip, {
                            size: "small",
                            color: "error",
                            variant: "flat"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Absent: ${ssrInterpolate(stats.value.absent)}`);
                              } else {
                                return [
                                  createTextVNode(" Absent: " + toDisplayString(stats.value.absent), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="d-flex gap-3 align-center" data-v-8b61e005${_scopeId3}>`);
                          _push4(ssrRenderComponent(VBtn, {
                            color: "secondary",
                            variant: "outlined",
                            rounded: "xl",
                            class: "px-6 text-capitalize",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" },
                            onClick: onCancel
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Cancel `);
                              } else {
                                return [
                                  createTextVNode(" Cancel ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            color: "primary",
                            variant: "flat",
                            rounded: "xl",
                            class: "px-6 text-capitalize",
                            onClick: onNext
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Next `);
                              } else {
                                return [
                                  createTextVNode(" Next ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><!--]-->`);
                        } else if (currentStep.value === 2) {
                          _push4(`<div class="d-flex gap-3 align-center" data-v-8b61e005${_scopeId3}>`);
                          _push4(ssrRenderComponent(VBtn, {
                            color: "secondary",
                            variant: "outlined",
                            rounded: "xl",
                            class: "px-6 text-capitalize",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" },
                            onClick: onBack
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
                            color: "primary",
                            variant: "flat",
                            rounded: "xl",
                            class: "px-6 text-capitalize font-weight-medium",
                            onClick: onSubmit
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Save &amp; Send Key `);
                              } else {
                                return [
                                  createTextVNode(" Save & Send Key ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          currentStep.value === 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("div", { class: "d-flex gap-2 flex-wrap" }, [
                              createVNode(VChip, {
                                size: "small",
                                color: "primary",
                                variant: "flat"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Present: " + toDisplayString(stats.value.present), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VChip, {
                                size: "small",
                                color: "error",
                                variant: "flat"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Absent: " + toDisplayString(stats.value.absent), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "d-flex gap-3 align-center" }, [
                              createVNode(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                rounded: "xl",
                                class: "px-6 text-capitalize",
                                style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" },
                                onClick: onCancel
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cancel ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "primary",
                                variant: "flat",
                                rounded: "xl",
                                class: "px-6 text-capitalize",
                                onClick: onNext
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Next ")
                                ]),
                                _: 1
                              })
                            ])
                          ], 64)) : currentStep.value === 2 ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "d-flex gap-3 align-center"
                          }, [
                            createVNode(VBtn, {
                              color: "secondary",
                              variant: "outlined",
                              rounded: "xl",
                              class: "px-6 text-capitalize",
                              style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" },
                              onClick: onBack
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Back ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "primary",
                              variant: "flat",
                              rounded: "xl",
                              class: "px-6 text-capitalize font-weight-medium",
                              onClick: onSubmit
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Save & Send Key ")
                              ]),
                              _: 1
                            })
                          ])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, { onClick: onCancel }),
                    createVNode(VCardItem, { class: "px-8 pt-8 pb-4 bg-surface border-b border-light" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center gap-4" }, [
                          createVNode(VProgressCircular, {
                            "model-value": currentStep.value === 1 ? 50 : 100,
                            color: "primary",
                            size: "64",
                            width: "5",
                            class: "font-weight-bold"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(currentStep.value) + "/2 ", 1)
                            ]),
                            _: 1
                          }, 8, ["model-value"]),
                          createVNode("div", { class: "d-flex flex-column" }, [
                            createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis" }, toDisplayString(currentStep.value === 1 ? "Student's Presence" : "Confirm attendance presence"), 1),
                            createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(currentStep.value === 1 ? "Change the present status of each student" : "The following is information about students who attended and those who did not."), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "px-8 py-3 bg-light-green border-b border-light d-flex align-center gap-4 flex-wrap" }, [
                      createVNode(VAvatar, {
                        size: "32",
                        color: "primary",
                        class: "rounded-circle"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "ri-user-line",
                            size: "18",
                            color: "white"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "text-subtitle-1 font-weight-medium text-high-emphasis" }, toDisplayString(((_e = _ctx.classSession) == null ? void 0 : _e.name) || "Class Session"), 1),
                      ((_f = _ctx.classSession) == null ? void 0 : _f.date) ? (openBlock(), createBlock(VChip, {
                        key: 0,
                        size: "small",
                        color: "primary",
                        variant: "tonal",
                        class: "font-weight-medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.classSession.date), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString((_g = _ctx.classSession) == null ? void 0 : _g.timeStart) + " - " + toDisplayString((_h = _ctx.classSession) == null ? void 0 : _h.timeEnd), 1)
                    ]),
                    createVNode(VCardText, {
                      class: "pa-8 bg-grey-light overflow-y-auto",
                      style: { "max-height": "calc(90vh - 280px)" }
                    }, {
                      default: withCtx(() => [
                        currentStep.value === 1 ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("div", { class: "d-flex align-center justify-space-between mb-4 bg-surface rounded-lg px-6 py-3 border border-light" }, [
                            createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(localStudents.value.length) + " Students ", 1),
                            createVNode(VCheckbox, {
                              modelValue: isAllPresent.value,
                              "onUpdate:modelValue": ($event) => isAllPresent.value = $event,
                              label: "Mark All Present",
                              color: "primary",
                              "hide-details": "",
                              density: "compact"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "d-flex flex-column gap-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value, (student) => {
                              return openBlock(), createBlock(VCard, {
                                key: student.id,
                                class: "student-presence-card border rounded-lg overflow-hidden",
                                elevation: "0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "pa-4 d-flex align-center flex-wrap justify-space-between gap-4" }, [
                                    createVNode("div", {
                                      class: "d-flex align-center gap-3 flex-grow-1",
                                      style: { "min-width": "280px", "max-width": "380px" }
                                    }, [
                                      createVNode("div", { class: "d-flex flex-column" }, [
                                        createVNode("div", { class: "d-flex align-center gap-2" }, [
                                          createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(student.name), 1),
                                          createVNode("span", { class: "text-caption text-medium-emphasis" }, toDisplayString(student.id), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex align-center gap-2 mt-1 text-caption text-medium-emphasis" }, [
                                          student.badgeText ? (openBlock(), createBlock(VChip, {
                                            key: 0,
                                            size: "x-small",
                                            color: student.badgeColor === "error" ? "error" : student.badgeColor === "warning" ? "warning" : "success",
                                            variant: "tonal",
                                            class: "font-weight-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(student.badgeText), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])) : createCommentVNode("", true),
                                          createVNode("span", { class: "dot-separator bg-secondary" }),
                                          createVNode(VIcon, {
                                            icon: "ri-book-2-line",
                                            size: "14"
                                          }),
                                          createVNode("span", null, toDisplayString(student.course), 1)
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", { class: "d-flex align-center gap-4 flex-wrap flex-grow-1 justify-end" }, [
                                      createVNode("div", { class: "d-flex align-center border-r border-light pe-4" }, [
                                        createVNode(VSwitch, {
                                          modelValue: student.isPresent,
                                          "onUpdate:modelValue": [($event) => student.isPresent = $event, ($event) => onPresenceChange(student)],
                                          color: "primary",
                                          "hide-details": "",
                                          density: "compact",
                                          class: "presence-switch"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("span", {
                                          class: ["text-body-2 font-weight-medium ms-2", student.isPresent ? "text-primary" : "text-secondary"]
                                        }, toDisplayString(student.isPresent ? "Present" : "Absent"), 3)
                                      ]),
                                      createVNode("div", { class: "d-flex align-center border-r border-light pe-4" }, [
                                        createVNode(VCheckbox, {
                                          modelValue: student.equipment.laptop,
                                          "onUpdate:modelValue": ($event) => student.equipment.laptop = $event,
                                          label: "Laptop",
                                          color: "primary",
                                          "hide-details": "",
                                          density: "compact",
                                          disabled: !student.isPresent
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                      ]),
                                      createVNode("div", { style: { "width": "75px" } }, [
                                        createVNode(VTextField, {
                                          modelValue: student.quota,
                                          "onUpdate:modelValue": ($event) => student.quota = $event,
                                          label: "Quota",
                                          placeholder: "0",
                                          "hide-details": "",
                                          density: "compact",
                                          variant: "outlined",
                                          class: "text-center-input",
                                          disabled: !student.isPresent
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                      ]),
                                      createVNode("div", { style: { "width": "220px", "min-width": "150px" } }, [
                                        createVNode(VTextField, {
                                          modelValue: student.remarks,
                                          "onUpdate:modelValue": ($event) => student.remarks = $event,
                                          label: "Remarks / Notes",
                                          placeholder: "Add remarks...",
                                          "hide-details": "",
                                          density: "compact",
                                          variant: "outlined",
                                          disabled: !student.isPresent
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                      ])
                                    ])
                                  ]),
                                  withDirectives(createVNode("div", { class: "bg-light-grey border-t border-light pa-4" }, [
                                    createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                      createVNode("div", {
                                        class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                        style: { "min-width": "180px", "max-width": "220px" }
                                      }, [
                                        createVNode("div", { class: "d-flex flex-column" }, [
                                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Laptop"),
                                          createVNode("span", { class: "text-caption text-medium-emphasis" }, "4 Quota left • Asus")
                                        ]),
                                        createVNode(VCheckbox, {
                                          modelValue: student.equipment.laptop,
                                          "onUpdate:modelValue": ($event) => student.equipment.laptop = $event,
                                          color: "primary",
                                          "hide-details": "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", {
                                        class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                        style: { "min-width": "180px", "max-width": "220px" }
                                      }, [
                                        createVNode("div", { class: "d-flex flex-column" }, [
                                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Mouse"),
                                          createVNode("span", { class: "text-caption text-medium-emphasis" }, "4 Quota left • Rexus")
                                        ]),
                                        createVNode(VCheckbox, {
                                          modelValue: student.equipment.mouse,
                                          "onUpdate:modelValue": ($event) => student.equipment.mouse = $event,
                                          color: "primary",
                                          "hide-details": "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", {
                                        class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                        style: { "min-width": "180px", "max-width": "220px" }
                                      }, [
                                        createVNode("div", { class: "d-flex flex-column" }, [
                                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Headphone"),
                                          createVNode("span", { class: "text-caption text-medium-emphasis" }, "4 Quota left • Earpod")
                                        ]),
                                        createVNode(VCheckbox, {
                                          modelValue: student.equipment.headphone,
                                          "onUpdate:modelValue": ($event) => student.equipment.headphone = $event,
                                          color: "primary",
                                          "hide-details": "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", {
                                        class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                        style: { "min-width": "180px", "max-width": "220px" }
                                      }, [
                                        createVNode("div", { class: "d-flex flex-column" }, [
                                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Speaker"),
                                          createVNode("span", { class: "text-caption text-medium-emphasis" }, "10 Quota left • Portable")
                                        ]),
                                        createVNode(VCheckbox, {
                                          modelValue: student.equipment.speaker,
                                          "onUpdate:modelValue": ($event) => student.equipment.speaker = $event,
                                          color: "primary",
                                          "hide-details": "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", {
                                        class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                        style: { "min-width": "180px", "max-width": "220px" }
                                      }, [
                                        createVNode("div", { class: "d-flex flex-column" }, [
                                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Charger"),
                                          createVNode("span", { class: "text-caption text-medium-emphasis" }, "15 Quota left • Pad")
                                        ]),
                                        createVNode(VCheckbox, {
                                          modelValue: student.equipment.charger,
                                          "onUpdate:modelValue": ($event) => student.equipment.charger = $event,
                                          color: "primary",
                                          "hide-details": "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ])
                                  ], 512), [
                                    [vShow, student.isPresent]
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])
                        ])) : currentStep.value === 2 ? (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "4",
                                class: "d-flex flex-column gap-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    class: "border rounded-lg",
                                    elevation: "0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, { class: "pa-5" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                                            createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Present"),
                                            createVNode("div", {
                                              class: "rounded-lg bg-light-green d-flex align-center justify-center",
                                              style: { "width": "36px", "height": "36px" }
                                            }, [
                                              createVNode(VIcon, {
                                                icon: "ri-check-line",
                                                color: "primary",
                                                size: "20"
                                              })
                                            ])
                                          ]),
                                          createVNode("span", { class: "text-h3 font-weight-bold text-primary" }, toDisplayString(stats.value.present), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCard, {
                                    class: "border rounded-lg",
                                    elevation: "0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, { class: "pa-5" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                                            createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Absent"),
                                            createVNode("div", {
                                              class: "rounded-lg bg-light-red d-flex align-center justify-center",
                                              style: { "width": "36px", "height": "36px" }
                                            }, [
                                              createVNode(VIcon, {
                                                icon: "ri-close-line",
                                                color: "error",
                                                size: "20"
                                              })
                                            ])
                                          ]),
                                          createVNode("span", { class: "text-h3 font-weight-bold text-error" }, toDisplayString(stats.value.absent), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "8"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            class: "border rounded-lg h-full overflow-hidden",
                                            elevation: "0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "pa-4 bg-light-green border-b border-light d-flex align-center justify-space-between" }, [
                                                createVNode("span", { class: "text-body-1 font-weight-medium text-primary" }, "List Presence"),
                                                createVNode(VChip, {
                                                  size: "small",
                                                  color: "info",
                                                  variant: "tonal",
                                                  class: "font-weight-medium"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Key will be sent ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              createVNode(VCardText, {
                                                class: "pa-0 overflow-y-auto",
                                                style: { "height": "300px" }
                                              }, {
                                                default: withCtx(() => [
                                                  stats.value.present === 0 ? (openBlock(), createBlock("div", {
                                                    key: 0,
                                                    class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                  }, " No students present. ")) : (openBlock(), createBlock("div", {
                                                    key: 1,
                                                    class: "d-flex flex-column"
                                                  }, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => s.isPresent), (student, idx) => {
                                                      return openBlock(), createBlock("div", {
                                                        key: student.id,
                                                        class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                      }, [
                                                        createVNode("span", {
                                                          class: "text-caption text-medium-emphasis",
                                                          style: { "width": "20px" }
                                                        }, toDisplayString(idx + 1), 1),
                                                        createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                          createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                            createVNode("span", null, toDisplayString(student.id), 1),
                                                            createVNode("span", { class: "dot-separator mx-1" }),
                                                            createVNode(VIcon, {
                                                              icon: "ri-book-2-line",
                                                              size: "12"
                                                            }),
                                                            createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                          ])
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
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            class: "border rounded-lg h-full overflow-hidden",
                                            elevation: "0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "pa-4 bg-light-red border-b border-light d-flex align-center justify-space-between" }, [
                                                createVNode("span", { class: "text-body-1 font-weight-medium text-error" }, "List Absent"),
                                                createVNode(VChip, {
                                                  size: "small",
                                                  color: "secondary",
                                                  variant: "tonal",
                                                  class: "font-weight-medium"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Key will be not sent ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              createVNode(VCardText, {
                                                class: "pa-0 overflow-y-auto",
                                                style: { "height": "300px" }
                                              }, {
                                                default: withCtx(() => [
                                                  stats.value.absent === 0 ? (openBlock(), createBlock("div", {
                                                    key: 0,
                                                    class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                  }, " No students absent. ")) : (openBlock(), createBlock("div", {
                                                    key: 1,
                                                    class: "d-flex flex-column"
                                                  }, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => !s.isPresent), (student, idx) => {
                                                      return openBlock(), createBlock("div", {
                                                        key: student.id,
                                                        class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                      }, [
                                                        createVNode("span", {
                                                          class: "text-caption text-medium-emphasis",
                                                          style: { "width": "20px" }
                                                        }, toDisplayString(idx + 1), 1),
                                                        createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                          createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                            createVNode("span", null, toDisplayString(student.id), 1),
                                                            createVNode("span", { class: "dot-separator mx-1" }),
                                                            createVNode(VIcon, {
                                                              icon: "ri-book-2-line",
                                                              size: "12"
                                                            }),
                                                            createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                          ])
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
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, {
                      class: ["px-8 py-4 bg-grey-light border-t border-light d-flex align-center", currentStep.value === 1 ? "justify-space-between" : "justify-end"]
                    }, {
                      default: withCtx(() => [
                        currentStep.value === 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode("div", { class: "d-flex gap-2 flex-wrap" }, [
                            createVNode(VChip, {
                              size: "small",
                              color: "primary",
                              variant: "flat"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Present: " + toDisplayString(stats.value.present), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, {
                              size: "small",
                              color: "error",
                              variant: "flat"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Absent: " + toDisplayString(stats.value.absent), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "d-flex gap-3 align-center" }, [
                            createVNode(VBtn, {
                              color: "secondary",
                              variant: "outlined",
                              rounded: "xl",
                              class: "px-6 text-capitalize",
                              style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" },
                              onClick: onCancel
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cancel ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "primary",
                              variant: "flat",
                              rounded: "xl",
                              class: "px-6 text-capitalize",
                              onClick: onNext
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Next ")
                              ]),
                              _: 1
                            })
                          ])
                        ], 64)) : currentStep.value === 2 ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "d-flex gap-3 align-center"
                        }, [
                          createVNode(VBtn, {
                            color: "secondary",
                            variant: "outlined",
                            rounded: "xl",
                            class: "px-6 text-capitalize",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" },
                            onClick: onBack
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Back ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "flat",
                            rounded: "xl",
                            class: "px-6 text-capitalize font-weight-medium",
                            onClick: onSubmit
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save & Send Key ")
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "overflow-hidden presence-dialog-card" }, {
                default: withCtx(() => {
                  var _a, _b, _c, _d;
                  return [
                    createVNode(_component_DialogCloseBtn, { onClick: onCancel }),
                    createVNode(VCardItem, { class: "px-8 pt-8 pb-4 bg-surface border-b border-light" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center gap-4" }, [
                          createVNode(VProgressCircular, {
                            "model-value": currentStep.value === 1 ? 50 : 100,
                            color: "primary",
                            size: "64",
                            width: "5",
                            class: "font-weight-bold"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(currentStep.value) + "/2 ", 1)
                            ]),
                            _: 1
                          }, 8, ["model-value"]),
                          createVNode("div", { class: "d-flex flex-column" }, [
                            createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis" }, toDisplayString(currentStep.value === 1 ? "Student's Presence" : "Confirm attendance presence"), 1),
                            createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(currentStep.value === 1 ? "Change the present status of each student" : "The following is information about students who attended and those who did not."), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "px-8 py-3 bg-light-green border-b border-light d-flex align-center gap-4 flex-wrap" }, [
                      createVNode(VAvatar, {
                        size: "32",
                        color: "primary",
                        class: "rounded-circle"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "ri-user-line",
                            size: "18",
                            color: "white"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "text-subtitle-1 font-weight-medium text-high-emphasis" }, toDisplayString(((_a = _ctx.classSession) == null ? void 0 : _a.name) || "Class Session"), 1),
                      ((_b = _ctx.classSession) == null ? void 0 : _b.date) ? (openBlock(), createBlock(VChip, {
                        key: 0,
                        size: "small",
                        color: "primary",
                        variant: "tonal",
                        class: "font-weight-medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.classSession.date), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString((_c = _ctx.classSession) == null ? void 0 : _c.timeStart) + " - " + toDisplayString((_d = _ctx.classSession) == null ? void 0 : _d.timeEnd), 1)
                    ]),
                    createVNode(VCardText, {
                      class: "pa-8 bg-grey-light overflow-y-auto",
                      style: { "max-height": "calc(90vh - 280px)" }
                    }, {
                      default: withCtx(() => [
                        currentStep.value === 1 ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("div", { class: "d-flex align-center justify-space-between mb-4 bg-surface rounded-lg px-6 py-3 border border-light" }, [
                            createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(localStudents.value.length) + " Students ", 1),
                            createVNode(VCheckbox, {
                              modelValue: isAllPresent.value,
                              "onUpdate:modelValue": ($event) => isAllPresent.value = $event,
                              label: "Mark All Present",
                              color: "primary",
                              "hide-details": "",
                              density: "compact"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "d-flex flex-column gap-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value, (student) => {
                              return openBlock(), createBlock(VCard, {
                                key: student.id,
                                class: "student-presence-card border rounded-lg overflow-hidden",
                                elevation: "0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "pa-4 d-flex align-center flex-wrap justify-space-between gap-4" }, [
                                    createVNode("div", {
                                      class: "d-flex align-center gap-3 flex-grow-1",
                                      style: { "min-width": "280px", "max-width": "380px" }
                                    }, [
                                      createVNode("div", { class: "d-flex flex-column" }, [
                                        createVNode("div", { class: "d-flex align-center gap-2" }, [
                                          createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(student.name), 1),
                                          createVNode("span", { class: "text-caption text-medium-emphasis" }, toDisplayString(student.id), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex align-center gap-2 mt-1 text-caption text-medium-emphasis" }, [
                                          student.badgeText ? (openBlock(), createBlock(VChip, {
                                            key: 0,
                                            size: "x-small",
                                            color: student.badgeColor === "error" ? "error" : student.badgeColor === "warning" ? "warning" : "success",
                                            variant: "tonal",
                                            class: "font-weight-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(student.badgeText), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])) : createCommentVNode("", true),
                                          createVNode("span", { class: "dot-separator bg-secondary" }),
                                          createVNode(VIcon, {
                                            icon: "ri-book-2-line",
                                            size: "14"
                                          }),
                                          createVNode("span", null, toDisplayString(student.course), 1)
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", { class: "d-flex align-center gap-4 flex-wrap flex-grow-1 justify-end" }, [
                                      createVNode("div", { class: "d-flex align-center border-r border-light pe-4" }, [
                                        createVNode(VSwitch, {
                                          modelValue: student.isPresent,
                                          "onUpdate:modelValue": [($event) => student.isPresent = $event, ($event) => onPresenceChange(student)],
                                          color: "primary",
                                          "hide-details": "",
                                          density: "compact",
                                          class: "presence-switch"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("span", {
                                          class: ["text-body-2 font-weight-medium ms-2", student.isPresent ? "text-primary" : "text-secondary"]
                                        }, toDisplayString(student.isPresent ? "Present" : "Absent"), 3)
                                      ]),
                                      createVNode("div", { class: "d-flex align-center border-r border-light pe-4" }, [
                                        createVNode(VCheckbox, {
                                          modelValue: student.equipment.laptop,
                                          "onUpdate:modelValue": ($event) => student.equipment.laptop = $event,
                                          label: "Laptop",
                                          color: "primary",
                                          "hide-details": "",
                                          density: "compact",
                                          disabled: !student.isPresent
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                      ]),
                                      createVNode("div", { style: { "width": "75px" } }, [
                                        createVNode(VTextField, {
                                          modelValue: student.quota,
                                          "onUpdate:modelValue": ($event) => student.quota = $event,
                                          label: "Quota",
                                          placeholder: "0",
                                          "hide-details": "",
                                          density: "compact",
                                          variant: "outlined",
                                          class: "text-center-input",
                                          disabled: !student.isPresent
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                      ]),
                                      createVNode("div", { style: { "width": "220px", "min-width": "150px" } }, [
                                        createVNode(VTextField, {
                                          modelValue: student.remarks,
                                          "onUpdate:modelValue": ($event) => student.remarks = $event,
                                          label: "Remarks / Notes",
                                          placeholder: "Add remarks...",
                                          "hide-details": "",
                                          density: "compact",
                                          variant: "outlined",
                                          disabled: !student.isPresent
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                                      ])
                                    ])
                                  ]),
                                  withDirectives(createVNode("div", { class: "bg-light-grey border-t border-light pa-4" }, [
                                    createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                      createVNode("div", {
                                        class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                        style: { "min-width": "180px", "max-width": "220px" }
                                      }, [
                                        createVNode("div", { class: "d-flex flex-column" }, [
                                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Laptop"),
                                          createVNode("span", { class: "text-caption text-medium-emphasis" }, "4 Quota left • Asus")
                                        ]),
                                        createVNode(VCheckbox, {
                                          modelValue: student.equipment.laptop,
                                          "onUpdate:modelValue": ($event) => student.equipment.laptop = $event,
                                          color: "primary",
                                          "hide-details": "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", {
                                        class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                        style: { "min-width": "180px", "max-width": "220px" }
                                      }, [
                                        createVNode("div", { class: "d-flex flex-column" }, [
                                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Mouse"),
                                          createVNode("span", { class: "text-caption text-medium-emphasis" }, "4 Quota left • Rexus")
                                        ]),
                                        createVNode(VCheckbox, {
                                          modelValue: student.equipment.mouse,
                                          "onUpdate:modelValue": ($event) => student.equipment.mouse = $event,
                                          color: "primary",
                                          "hide-details": "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", {
                                        class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                        style: { "min-width": "180px", "max-width": "220px" }
                                      }, [
                                        createVNode("div", { class: "d-flex flex-column" }, [
                                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Headphone"),
                                          createVNode("span", { class: "text-caption text-medium-emphasis" }, "4 Quota left • Earpod")
                                        ]),
                                        createVNode(VCheckbox, {
                                          modelValue: student.equipment.headphone,
                                          "onUpdate:modelValue": ($event) => student.equipment.headphone = $event,
                                          color: "primary",
                                          "hide-details": "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", {
                                        class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                        style: { "min-width": "180px", "max-width": "220px" }
                                      }, [
                                        createVNode("div", { class: "d-flex flex-column" }, [
                                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Speaker"),
                                          createVNode("span", { class: "text-caption text-medium-emphasis" }, "10 Quota left • Portable")
                                        ]),
                                        createVNode(VCheckbox, {
                                          modelValue: student.equipment.speaker,
                                          "onUpdate:modelValue": ($event) => student.equipment.speaker = $event,
                                          color: "primary",
                                          "hide-details": "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", {
                                        class: "equipment-option border rounded pa-3 bg-surface d-flex align-center justify-space-between flex-grow-1",
                                        style: { "min-width": "180px", "max-width": "220px" }
                                      }, [
                                        createVNode("div", { class: "d-flex flex-column" }, [
                                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Charger"),
                                          createVNode("span", { class: "text-caption text-medium-emphasis" }, "15 Quota left • Pad")
                                        ]),
                                        createVNode(VCheckbox, {
                                          modelValue: student.equipment.charger,
                                          "onUpdate:modelValue": ($event) => student.equipment.charger = $event,
                                          color: "primary",
                                          "hide-details": "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ])
                                  ], 512), [
                                    [vShow, student.isPresent]
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])
                        ])) : currentStep.value === 2 ? (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "4",
                                class: "d-flex flex-column gap-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    class: "border rounded-lg",
                                    elevation: "0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, { class: "pa-5" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                                            createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Present"),
                                            createVNode("div", {
                                              class: "rounded-lg bg-light-green d-flex align-center justify-center",
                                              style: { "width": "36px", "height": "36px" }
                                            }, [
                                              createVNode(VIcon, {
                                                icon: "ri-check-line",
                                                color: "primary",
                                                size: "20"
                                              })
                                            ])
                                          ]),
                                          createVNode("span", { class: "text-h3 font-weight-bold text-primary" }, toDisplayString(stats.value.present), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCard, {
                                    class: "border rounded-lg",
                                    elevation: "0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, { class: "pa-5" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                                            createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Absent"),
                                            createVNode("div", {
                                              class: "rounded-lg bg-light-red d-flex align-center justify-center",
                                              style: { "width": "36px", "height": "36px" }
                                            }, [
                                              createVNode(VIcon, {
                                                icon: "ri-close-line",
                                                color: "error",
                                                size: "20"
                                              })
                                            ])
                                          ]),
                                          createVNode("span", { class: "text-h3 font-weight-bold text-error" }, toDisplayString(stats.value.absent), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "8"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            class: "border rounded-lg h-full overflow-hidden",
                                            elevation: "0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "pa-4 bg-light-green border-b border-light d-flex align-center justify-space-between" }, [
                                                createVNode("span", { class: "text-body-1 font-weight-medium text-primary" }, "List Presence"),
                                                createVNode(VChip, {
                                                  size: "small",
                                                  color: "info",
                                                  variant: "tonal",
                                                  class: "font-weight-medium"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Key will be sent ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              createVNode(VCardText, {
                                                class: "pa-0 overflow-y-auto",
                                                style: { "height": "300px" }
                                              }, {
                                                default: withCtx(() => [
                                                  stats.value.present === 0 ? (openBlock(), createBlock("div", {
                                                    key: 0,
                                                    class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                  }, " No students present. ")) : (openBlock(), createBlock("div", {
                                                    key: 1,
                                                    class: "d-flex flex-column"
                                                  }, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => s.isPresent), (student, idx) => {
                                                      return openBlock(), createBlock("div", {
                                                        key: student.id,
                                                        class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                      }, [
                                                        createVNode("span", {
                                                          class: "text-caption text-medium-emphasis",
                                                          style: { "width": "20px" }
                                                        }, toDisplayString(idx + 1), 1),
                                                        createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                          createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                            createVNode("span", null, toDisplayString(student.id), 1),
                                                            createVNode("span", { class: "dot-separator mx-1" }),
                                                            createVNode(VIcon, {
                                                              icon: "ri-book-2-line",
                                                              size: "12"
                                                            }),
                                                            createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                          ])
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
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            class: "border rounded-lg h-full overflow-hidden",
                                            elevation: "0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "pa-4 bg-light-red border-b border-light d-flex align-center justify-space-between" }, [
                                                createVNode("span", { class: "text-body-1 font-weight-medium text-error" }, "List Absent"),
                                                createVNode(VChip, {
                                                  size: "small",
                                                  color: "secondary",
                                                  variant: "tonal",
                                                  class: "font-weight-medium"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Key will be not sent ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              createVNode(VCardText, {
                                                class: "pa-0 overflow-y-auto",
                                                style: { "height": "300px" }
                                              }, {
                                                default: withCtx(() => [
                                                  stats.value.absent === 0 ? (openBlock(), createBlock("div", {
                                                    key: 0,
                                                    class: "pa-8 text-center text-medium-emphasis text-body-2"
                                                  }, " No students absent. ")) : (openBlock(), createBlock("div", {
                                                    key: 1,
                                                    class: "d-flex flex-column"
                                                  }, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(localStudents.value.filter((s) => !s.isPresent), (student, idx) => {
                                                      return openBlock(), createBlock("div", {
                                                        key: student.id,
                                                        class: "px-4 py-3 d-flex align-center gap-3 border-b border-light"
                                                      }, [
                                                        createVNode("span", {
                                                          class: "text-caption text-medium-emphasis",
                                                          style: { "width": "20px" }
                                                        }, toDisplayString(idx + 1), 1),
                                                        createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                                          createVNode("div", { class: "d-flex align-center gap-1 text-caption text-medium-emphasis flex-wrap" }, [
                                                            createVNode("span", null, toDisplayString(student.id), 1),
                                                            createVNode("span", { class: "dot-separator mx-1" }),
                                                            createVNode(VIcon, {
                                                              icon: "ri-book-2-line",
                                                              size: "12"
                                                            }),
                                                            createVNode("span", { class: "text-truncate" }, toDisplayString(student.course), 1)
                                                          ])
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
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, {
                      class: ["px-8 py-4 bg-grey-light border-t border-light d-flex align-center", currentStep.value === 1 ? "justify-space-between" : "justify-end"]
                    }, {
                      default: withCtx(() => [
                        currentStep.value === 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode("div", { class: "d-flex gap-2 flex-wrap" }, [
                            createVNode(VChip, {
                              size: "small",
                              color: "primary",
                              variant: "flat"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Present: " + toDisplayString(stats.value.present), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VChip, {
                              size: "small",
                              color: "error",
                              variant: "flat"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Absent: " + toDisplayString(stats.value.absent), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "d-flex gap-3 align-center" }, [
                            createVNode(VBtn, {
                              color: "secondary",
                              variant: "outlined",
                              rounded: "xl",
                              class: "px-6 text-capitalize",
                              style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" },
                              onClick: onCancel
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cancel ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "primary",
                              variant: "flat",
                              rounded: "xl",
                              class: "px-6 text-capitalize",
                              onClick: onNext
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Next ")
                              ]),
                              _: 1
                            })
                          ])
                        ], 64)) : currentStep.value === 2 ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "d-flex gap-3 align-center"
                        }, [
                          createVNode(VBtn, {
                            color: "secondary",
                            variant: "outlined",
                            rounded: "xl",
                            class: "px-6 text-capitalize",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" },
                            onClick: onBack
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Back ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "flat",
                            rounded: "xl",
                            class: "px-6 text-capitalize font-weight-medium",
                            onClick: onSubmit
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save & Send Key ")
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ];
                }),
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialogs/PresenceDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PresenceDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b61e005"]]);
export {
  PresenceDialog as P
};
