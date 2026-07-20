import { _ as _sfc_main$2 } from './DialogCloseBtn-CVR_yFk0.mjs';
import { defineComponent, ref, computed, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, withModifiers, mergeProps, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { V as VDialog } from './VDialog-B0Ad2yj9.mjs';
import { V as VCard, a as VCardTitle, b as VCardActions } from './VCard-B42eN0YV.mjs';
import { aW as _export_sfc, V as VBtn, aX as VBtnToggle, m as genericComponent, o as propsFactory, ad as getUid, B as useProxiedModel, F as useRender, ai as filterInputAttrs, a as VIcon, Q as IconValue, ao as omit } from './server.mjs';
import { V as VDivider } from './VDivider-Cdypedjq.mjs';
import { V as VCardText } from './VCardText-CaXtzNxg.mjs';
import { _ as __nuxt_component_1 } from './ScoreHistoryDialog-CBdhWWae.mjs';
import { V as VSnackbar } from './VSnackbar-DgaXWzkK.mjs';
import { V as VRow, a as VCol } from './VRow-BRD4hy0P.mjs';
import { V as VTextField, a as VInput, b as VLabel, d as makeVInputProps } from './VTextField-jMGfwBDn.mjs';
import { V as VSelectionControl, a as VSelectionControlGroup, m as makeSelectionControlGroupProps, b as makeVSelectionControlProps } from './VSelectionControl-B1a3mcFW.mjs';
import './VOverlay-gAZb14KV.mjs';
import './forwardRefs-Oip3fNRq.mjs';
import './VAvatar-B478BWXT.mjs';
import './dialog-transition-CDwwEBKm.mjs';
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
import './VSpacer-CtyhO1n2.mjs';
import './index-CSomYp-Z.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ScheduleDetailsDialog",
  __ssrInlineRender: true,
  props: {
    isDialogVisible: { type: Boolean },
    event: { default: null }
  },
  emits: ["update:isDialogVisible", "startClass", "deleteEvent", "seeHistory"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const defaultStudents = [
      {
        name: "Adison Curtis",
        initials: "AC",
        studentId: "STD-910920323",
        book: "Python Coder",
        ageGroup: "Teens",
        meetingsLeft: 5,
        latestLesson: { number: "Lesson 7", title: "CSS Flexbox" }
      },
      {
        name: "Carlos Mendoza",
        initials: "CM",
        studentId: "STD-745982316",
        book: "Data Scientist",
        ageGroup: "Young Adults",
        meetingsLeft: 4,
        latestLesson: { number: "Lesson 9", title: "Machine Learning Basics" }
      },
      {
        name: "Diana Lee",
        initials: "DL",
        studentId: "STD-639174025",
        book: "UI/UX Designer",
        ageGroup: "Teens",
        meetingsLeft: 2,
        latestLesson: { number: "Lesson 5", title: "Design Principles" }
      },
      {
        name: "James Smith",
        initials: "JS",
        studentId: "STD-639174026",
        book: "Frontend Developer",
        ageGroup: "Adults",
        meetingsLeft: 3,
        latestLesson: { number: "Lesson 7", title: "Responsive Design" }
      },
      {
        name: "Maya Khan",
        initials: "MK",
        studentId: "STD-639174027",
        book: "Product Manager",
        ageGroup: "Professionals",
        meetingsLeft: 1,
        latestLesson: { number: "Lesson 3", title: "Agile Methodologies" }
      },
      {
        name: "Brianna Diaz",
        initials: "BD",
        studentId: "STD-823654789",
        book: "JavaScript Ninja",
        ageGroup: "Adults",
        meetingsLeft: 3,
        latestLesson: { number: "Lesson 12", title: "React Hooks" }
      }
    ];
    const studentsList = computed(() => {
      var _a;
      if (((_a = props.event) == null ? void 0 : _a.students) && props.event.students.length > 0) {
        return props.event.students;
      }
      return defaultStudents;
    });
    const classTypeLabel = computed(() => {
      var _a;
      return ((_a = props.event) == null ? void 0 : _a.classType) || "Adaptive Class";
    });
    const statusLabel = computed(() => {
      var _a;
      return ((_a = props.event) == null ? void 0 : _a.status) || "Active";
    });
    const roomLabel = computed(() => {
      var _a;
      return ((_a = props.event) == null ? void 0 : _a.room) || "Paris Room";
    });
    const onCancel = () => {
      emit("update:isDialogVisible", false);
    };
    const onStartClass = () => {
      if (props.event) {
        emit("startClass", props.event.id);
      }
    };
    const onDelete = () => {
      if (props.event) {
        emit("deleteEvent", props.event.id);
      }
    };
    const onSeeHistory = (student) => {
      var _a;
      const mappedStudent = {
        name: student.name,
        initials: student.initials,
        studentId: student.studentId,
        className: ((_a = props.event) == null ? void 0 : _a.title) || "DPS-Adaptive-8C",
        book: student.book,
        lessonName: `${student.latestLesson.number} - ${student.latestLesson.title}`,
        score: 85
        // Mock score for generating history
      };
      emit("seeHistory", mappedStudent);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$2;
      _push(ssrRenderComponent(VDialog, mergeProps({
        "model-value": props.isDialogVisible,
        "max-width": "920",
        "onUpdate:modelValue": (val) => emit("update:isDialogVisible", val)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "overflow-hidden schedule-detail-card" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, { onClick: onCancel }, null, _parent3, _scopeId2));
                  if (props.event && props.event.type === "class") {
                    _push3(`<!--[--><div class="px-10 pt-9 pb-6 d-flex flex-column gap-6" data-v-4bd7c380${_scopeId2}><div class="d-flex align-center justify-space-between w-full" data-v-4bd7c380${_scopeId2}><h4 class="text-h4 font-weight-medium text-high-emphasis" data-v-4bd7c380${_scopeId2}>${ssrInterpolate(props.event.title)}</h4></div></div><div class="info-bar px-10 py-3 d-flex align-center gap-2" data-v-4bd7c380${_scopeId2}><div class="d-flex align-center gap-2" data-v-4bd7c380${_scopeId2}>`);
                    _push3(ssrRenderComponent(VIcon, {
                      icon: "ri-time-line",
                      size: "24",
                      class: "text-secondary"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-body-1 text-high-emphasis" data-v-4bd7c380${_scopeId2}>${ssrInterpolate(props.event.startTime)} - ${ssrInterpolate(props.event.endTime)}</span></div><div class="dot-separator mx-2" data-v-4bd7c380${_scopeId2}></div><div class="d-flex align-center gap-2" data-v-4bd7c380${_scopeId2}>`);
                    _push3(ssrRenderComponent(VIcon, {
                      icon: "ri-door-closed-line",
                      size: "24",
                      class: "text-secondary"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-body-1 text-high-emphasis" data-v-4bd7c380${_scopeId2}>${ssrInterpolate(roomLabel.value)}</span></div><div class="dot-separator mx-2" data-v-4bd7c380${_scopeId2}></div><span class="px-2 py-1 rounded-pill text-caption font-weight-medium text-info bg-info-light" data-v-4bd7c380${_scopeId2}>${ssrInterpolate(classTypeLabel.value)}</span><span class="px-2 py-1 rounded-pill text-caption font-weight-medium text-primary bg-primary-light" data-v-4bd7c380${_scopeId2}>${ssrInterpolate(statusLabel.value)}</span></div><div class="px-10 py-4 max-height-body overflow-y-auto" data-v-4bd7c380${_scopeId2}><div class="members-container border border-solid rounded-lg bg-white" data-v-4bd7c380${_scopeId2}><!--[-->`);
                    ssrRenderList(studentsList.value, (student, index) => {
                      _push3(`<div class="${ssrRenderClass([{ "border-b": index < studentsList.value.length - 1 }, "student-item d-flex align-center justify-space-between py-5 px-4"])}" data-v-4bd7c380${_scopeId2}><div class="d-flex align-center gap-4 flex-shrink-0" style="${ssrRenderStyle({ "width": "310px" })}" data-v-4bd7c380${_scopeId2}><div class="student-avatar d-flex align-center justify-center text-body-1 flex-shrink-0" data-v-4bd7c380${_scopeId2}>${ssrInterpolate(student.initials)}</div><div class="d-flex flex-column overflow-hidden" data-v-4bd7c380${_scopeId2}><div class="d-flex align-baseline gap-2 overflow-hidden" data-v-4bd7c380${_scopeId2}><span class="text-body-1 font-weight-medium text-high-emphasis text-truncate d-inline-block" style="${ssrRenderStyle({ "max-width": "140px" })}" data-v-4bd7c380${_scopeId2}>${ssrInterpolate(student.name)}</span><span class="text-body-2 text-medium-emphasis flex-shrink-0" data-v-4bd7c380${_scopeId2}>${ssrInterpolate(student.studentId)}</span></div><div class="d-flex align-center gap-1 mt-0.5 overflow-hidden" data-v-4bd7c380${_scopeId2}>`);
                      _push3(ssrRenderComponent(VIcon, {
                        icon: "ri-book-2-line",
                        size: "14",
                        color: "primary",
                        class: "flex-shrink-0"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="text-body-2 font-weight-medium text-primary text-truncate d-inline-block" style="${ssrRenderStyle({ "max-width": "140px" })}" data-v-4bd7c380${_scopeId2}>${ssrInterpolate(student.book)}</span><span class="text-body-2 text-medium-emphasis flex-shrink-0" data-v-4bd7c380${_scopeId2}>${ssrInterpolate(student.ageGroup)}</span></div></div></div><div class="d-flex align-center gap-3" data-v-4bd7c380${_scopeId2}><span class="px-2 py-1 rounded-pill text-caption font-weight-medium text-info bg-info-light text-no-wrap" data-v-4bd7c380${_scopeId2}> Meeting Left : ${ssrInterpolate(student.meetingsLeft)}</span>`);
                      _push3(ssrRenderComponent(VDivider, {
                        vertical: "",
                        class: "mx-2",
                        style: { "height": "28px" }
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="d-flex flex-column flex-shrink-0 overflow-hidden" style="${ssrRenderStyle({ "width": "180px" })}" data-v-4bd7c380${_scopeId2}><span class="text-body-2 text-medium-emphasis" data-v-4bd7c380${_scopeId2}>Latest Lesson</span><span class="text-body-2 text-high-emphasis font-weight-regular mt-0.5 text-truncate d-block" data-v-4bd7c380${_scopeId2}>${ssrInterpolate(student.latestLesson.number)} <span class="text-medium-emphasis mx-1" data-v-4bd7c380${_scopeId2}>\u2022</span> ${ssrInterpolate(student.latestLesson.title)}</span></div>`);
                      _push3(ssrRenderComponent(VDivider, {
                        vertical: "",
                        class: "mx-2",
                        style: { "height": "28px" }
                      }, null, _parent3, _scopeId2));
                      _push3(`</div><div data-v-4bd7c380${_scopeId2}>`);
                      _push3(ssrRenderComponent(VBtn, {
                        color: "primary",
                        variant: "outlined",
                        rounded: "xl",
                        size: "small",
                        class: "text-capitalize px-4",
                        onClick: ($event) => onSeeHistory(student)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VIcon, {
                              start: "",
                              icon: "ri-history-line",
                              size: "16"
                            }, null, _parent4, _scopeId3));
                            _push4(` See History `);
                          } else {
                            return [
                              createVNode(VIcon, {
                                start: "",
                                icon: "ri-history-line",
                                size: "16"
                              }),
                              createTextVNode(" See History ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    });
                    _push3(`<!--]--></div></div><div class="actions-footer px-10 py-5 d-flex align-center justify-space-between" data-v-4bd7c380${_scopeId2}><span class="px-3 py-1 rounded-pill text-caption font-weight-medium text-white bg-primary" data-v-4bd7c380${_scopeId2}>${ssrInterpolate(studentsList.value.length)} Students </span><div class="d-flex align-center gap-4" data-v-4bd7c380${_scopeId2}>`);
                    _push3(ssrRenderComponent(VBtn, {
                      color: "secondary",
                      variant: "outlined",
                      rounded: "xl",
                      class: "px-6 text-capitalize",
                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important", "color": "rgb(var(--v-theme-secondary))" },
                      onClick: onCancel
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Close `);
                        } else {
                          return [
                            createTextVNode(" Close ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      color: "primary",
                      rounded: "xl",
                      class: "px-6 text-capitalize",
                      style: { "box-shadow": "0px 2px 4px 0px rgba(46, 38, 61, 0.16)" },
                      onClick: onStartClass
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
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div><!--]-->`);
                  } else if (props.event) {
                    _push3(`<!--[--><div class="px-6 pt-6 pb-4" data-v-4bd7c380${_scopeId2}><h5 class="text-h5 font-weight-medium text-high-emphasis" data-v-4bd7c380${_scopeId2}>${ssrInterpolate(props.event.title)}</h5><p class="text-caption text-medium-emphasis capitalize mt-1" data-v-4bd7c380${_scopeId2}>${ssrInterpolate(props.event.type.replace("_", " "))}</p></div>`);
                    _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardText, { class: "py-6 px-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="d-flex flex-column gap-4" data-v-4bd7c380${_scopeId3}><div class="d-flex align-center gap-3" data-v-4bd7c380${_scopeId3}>`);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-calendar-line",
                            class: "text-secondary",
                            size: "24"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div data-v-4bd7c380${_scopeId3}><div class="text-body-2 text-medium-emphasis" data-v-4bd7c380${_scopeId3}>Date</div><div class="text-body-1 text-high-emphasis font-weight-medium" data-v-4bd7c380${_scopeId3}>${ssrInterpolate(props.event.date)}</div></div></div><div class="d-flex align-center gap-3" data-v-4bd7c380${_scopeId3}>`);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-time-line",
                            class: "text-secondary",
                            size: "24"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div data-v-4bd7c380${_scopeId3}><div class="text-body-2 text-medium-emphasis" data-v-4bd7c380${_scopeId3}>Time Slot</div><div class="text-body-1 text-high-emphasis font-weight-medium" data-v-4bd7c380${_scopeId3}>${ssrInterpolate(props.event.startTime)} - ${ssrInterpolate(props.event.endTime)}</div></div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex flex-column gap-4" }, [
                              createVNode("div", { class: "d-flex align-center gap-3" }, [
                                createVNode(VIcon, {
                                  icon: "ri-calendar-line",
                                  class: "text-secondary",
                                  size: "24"
                                }),
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Date"),
                                  createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(props.event.date), 1)
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center gap-3" }, [
                                createVNode(VIcon, {
                                  icon: "ri-time-line",
                                  class: "text-secondary",
                                  size: "24"
                                }),
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Time Slot"),
                                  createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(props.event.startTime) + " - " + toDisplayString(props.event.endTime), 1)
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                    _push3(`<div class="dialog-footer px-6 py-4 d-flex justify-end gap-3 align-center bg-grey-50" data-v-4bd7c380${_scopeId2}>`);
                    _push3(ssrRenderComponent(VBtn, {
                      color: "error",
                      variant: "outlined",
                      rounded: "xl",
                      class: "px-6 text-capitalize",
                      onClick: onDelete
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Remove Event `);
                        } else {
                          return [
                            createTextVNode(" Remove Event ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      color: "secondary",
                      variant: "flat",
                      rounded: "xl",
                      class: "px-6 text-capitalize",
                      onClick: onCancel
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Close `);
                        } else {
                          return [
                            createTextVNode(" Close ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, { onClick: onCancel }),
                    props.event && props.event.type === "class" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode("div", { class: "px-10 pt-9 pb-6 d-flex flex-column gap-6" }, [
                        createVNode("div", { class: "d-flex align-center justify-space-between w-full" }, [
                          createVNode("h4", { class: "text-h4 font-weight-medium text-high-emphasis" }, toDisplayString(props.event.title), 1)
                        ])
                      ]),
                      createVNode("div", { class: "info-bar px-10 py-3 d-flex align-center gap-2" }, [
                        createVNode("div", { class: "d-flex align-center gap-2" }, [
                          createVNode(VIcon, {
                            icon: "ri-time-line",
                            size: "24",
                            class: "text-secondary"
                          }),
                          createVNode("span", { class: "text-body-1 text-high-emphasis" }, toDisplayString(props.event.startTime) + " - " + toDisplayString(props.event.endTime), 1)
                        ]),
                        createVNode("div", { class: "dot-separator mx-2" }),
                        createVNode("div", { class: "d-flex align-center gap-2" }, [
                          createVNode(VIcon, {
                            icon: "ri-door-closed-line",
                            size: "24",
                            class: "text-secondary"
                          }),
                          createVNode("span", { class: "text-body-1 text-high-emphasis" }, toDisplayString(roomLabel.value), 1)
                        ]),
                        createVNode("div", { class: "dot-separator mx-2" }),
                        createVNode("span", { class: "px-2 py-1 rounded-pill text-caption font-weight-medium text-info bg-info-light" }, toDisplayString(classTypeLabel.value), 1),
                        createVNode("span", { class: "px-2 py-1 rounded-pill text-caption font-weight-medium text-primary bg-primary-light" }, toDisplayString(statusLabel.value), 1)
                      ]),
                      createVNode("div", { class: "px-10 py-4 max-height-body overflow-y-auto" }, [
                        createVNode("div", { class: "members-container border border-solid rounded-lg bg-white" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(studentsList.value, (student, index) => {
                            return openBlock(), createBlock("div", {
                              key: student.studentId,
                              class: ["student-item d-flex align-center justify-space-between py-5 px-4", { "border-b": index < studentsList.value.length - 1 }]
                            }, [
                              createVNode("div", {
                                class: "d-flex align-center gap-4 flex-shrink-0",
                                style: { "width": "310px" }
                              }, [
                                createVNode("div", { class: "student-avatar d-flex align-center justify-center text-body-1 flex-shrink-0" }, toDisplayString(student.initials), 1),
                                createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                  createVNode("div", { class: "d-flex align-baseline gap-2 overflow-hidden" }, [
                                    createVNode("span", {
                                      class: "text-body-1 font-weight-medium text-high-emphasis text-truncate d-inline-block",
                                      style: { "max-width": "140px" }
                                    }, toDisplayString(student.name), 1),
                                    createVNode("span", { class: "text-body-2 text-medium-emphasis flex-shrink-0" }, toDisplayString(student.studentId), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex align-center gap-1 mt-0.5 overflow-hidden" }, [
                                    createVNode(VIcon, {
                                      icon: "ri-book-2-line",
                                      size: "14",
                                      color: "primary",
                                      class: "flex-shrink-0"
                                    }),
                                    createVNode("span", {
                                      class: "text-body-2 font-weight-medium text-primary text-truncate d-inline-block",
                                      style: { "max-width": "140px" }
                                    }, toDisplayString(student.book), 1),
                                    createVNode("span", { class: "text-body-2 text-medium-emphasis flex-shrink-0" }, toDisplayString(student.ageGroup), 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center gap-3" }, [
                                createVNode("span", { class: "px-2 py-1 rounded-pill text-caption font-weight-medium text-info bg-info-light text-no-wrap" }, " Meeting Left : " + toDisplayString(student.meetingsLeft), 1),
                                createVNode(VDivider, {
                                  vertical: "",
                                  class: "mx-2",
                                  style: { "height": "28px" }
                                }),
                                createVNode("div", {
                                  class: "d-flex flex-column flex-shrink-0 overflow-hidden",
                                  style: { "width": "180px" }
                                }, [
                                  createVNode("span", { class: "text-body-2 text-medium-emphasis" }, "Latest Lesson"),
                                  createVNode("span", { class: "text-body-2 text-high-emphasis font-weight-regular mt-0.5 text-truncate d-block" }, [
                                    createTextVNode(toDisplayString(student.latestLesson.number) + " ", 1),
                                    createVNode("span", { class: "text-medium-emphasis mx-1" }, "\u2022"),
                                    createTextVNode(" " + toDisplayString(student.latestLesson.title), 1)
                                  ])
                                ]),
                                createVNode(VDivider, {
                                  vertical: "",
                                  class: "mx-2",
                                  style: { "height": "28px" }
                                })
                              ]),
                              createVNode("div", null, [
                                createVNode(VBtn, {
                                  color: "primary",
                                  variant: "outlined",
                                  rounded: "xl",
                                  size: "small",
                                  class: "text-capitalize px-4",
                                  onClick: ($event) => onSeeHistory(student)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "ri-history-line",
                                      size: "16"
                                    }),
                                    createTextVNode(" See History ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ], 2);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "actions-footer px-10 py-5 d-flex align-center justify-space-between" }, [
                        createVNode("span", { class: "px-3 py-1 rounded-pill text-caption font-weight-medium text-white bg-primary" }, toDisplayString(studentsList.value.length) + " Students ", 1),
                        createVNode("div", { class: "d-flex align-center gap-4" }, [
                          createVNode(VBtn, {
                            color: "secondary",
                            variant: "outlined",
                            rounded: "xl",
                            class: "px-6 text-capitalize",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important", "color": "rgb(var(--v-theme-secondary))" },
                            onClick: onCancel
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Close ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            rounded: "xl",
                            class: "px-6 text-capitalize",
                            style: { "box-shadow": "0px 2px 4px 0px rgba(46, 38, 61, 0.16)" },
                            onClick: onStartClass
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Start Class ")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ], 64)) : props.event ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode("div", { class: "px-6 pt-6 pb-4" }, [
                        createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis" }, toDisplayString(props.event.title), 1),
                        createVNode("p", { class: "text-caption text-medium-emphasis capitalize mt-1" }, toDisplayString(props.event.type.replace("_", " ")), 1)
                      ]),
                      createVNode(VDivider),
                      createVNode(VCardText, { class: "py-6 px-6" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex flex-column gap-4" }, [
                            createVNode("div", { class: "d-flex align-center gap-3" }, [
                              createVNode(VIcon, {
                                icon: "ri-calendar-line",
                                class: "text-secondary",
                                size: "24"
                              }),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Date"),
                                createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(props.event.date), 1)
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center gap-3" }, [
                              createVNode(VIcon, {
                                icon: "ri-time-line",
                                class: "text-secondary",
                                size: "24"
                              }),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Time Slot"),
                                createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(props.event.startTime) + " - " + toDisplayString(props.event.endTime), 1)
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode("div", { class: "dialog-footer px-6 py-4 d-flex justify-end gap-3 align-center bg-grey-50" }, [
                        createVNode(VBtn, {
                          color: "error",
                          variant: "outlined",
                          rounded: "xl",
                          class: "px-6 text-capitalize",
                          onClick: onDelete
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Remove Event ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "secondary",
                          variant: "flat",
                          rounded: "xl",
                          class: "px-6 text-capitalize",
                          onClick: onCancel
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close ")
                          ]),
                          _: 1
                        })
                      ])
                    ], 64)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "overflow-hidden schedule-detail-card" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, { onClick: onCancel }),
                  props.event && props.event.type === "class" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("div", { class: "px-10 pt-9 pb-6 d-flex flex-column gap-6" }, [
                      createVNode("div", { class: "d-flex align-center justify-space-between w-full" }, [
                        createVNode("h4", { class: "text-h4 font-weight-medium text-high-emphasis" }, toDisplayString(props.event.title), 1)
                      ])
                    ]),
                    createVNode("div", { class: "info-bar px-10 py-3 d-flex align-center gap-2" }, [
                      createVNode("div", { class: "d-flex align-center gap-2" }, [
                        createVNode(VIcon, {
                          icon: "ri-time-line",
                          size: "24",
                          class: "text-secondary"
                        }),
                        createVNode("span", { class: "text-body-1 text-high-emphasis" }, toDisplayString(props.event.startTime) + " - " + toDisplayString(props.event.endTime), 1)
                      ]),
                      createVNode("div", { class: "dot-separator mx-2" }),
                      createVNode("div", { class: "d-flex align-center gap-2" }, [
                        createVNode(VIcon, {
                          icon: "ri-door-closed-line",
                          size: "24",
                          class: "text-secondary"
                        }),
                        createVNode("span", { class: "text-body-1 text-high-emphasis" }, toDisplayString(roomLabel.value), 1)
                      ]),
                      createVNode("div", { class: "dot-separator mx-2" }),
                      createVNode("span", { class: "px-2 py-1 rounded-pill text-caption font-weight-medium text-info bg-info-light" }, toDisplayString(classTypeLabel.value), 1),
                      createVNode("span", { class: "px-2 py-1 rounded-pill text-caption font-weight-medium text-primary bg-primary-light" }, toDisplayString(statusLabel.value), 1)
                    ]),
                    createVNode("div", { class: "px-10 py-4 max-height-body overflow-y-auto" }, [
                      createVNode("div", { class: "members-container border border-solid rounded-lg bg-white" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(studentsList.value, (student, index) => {
                          return openBlock(), createBlock("div", {
                            key: student.studentId,
                            class: ["student-item d-flex align-center justify-space-between py-5 px-4", { "border-b": index < studentsList.value.length - 1 }]
                          }, [
                            createVNode("div", {
                              class: "d-flex align-center gap-4 flex-shrink-0",
                              style: { "width": "310px" }
                            }, [
                              createVNode("div", { class: "student-avatar d-flex align-center justify-center text-body-1 flex-shrink-0" }, toDisplayString(student.initials), 1),
                              createVNode("div", { class: "d-flex flex-column overflow-hidden" }, [
                                createVNode("div", { class: "d-flex align-baseline gap-2 overflow-hidden" }, [
                                  createVNode("span", {
                                    class: "text-body-1 font-weight-medium text-high-emphasis text-truncate d-inline-block",
                                    style: { "max-width": "140px" }
                                  }, toDisplayString(student.name), 1),
                                  createVNode("span", { class: "text-body-2 text-medium-emphasis flex-shrink-0" }, toDisplayString(student.studentId), 1)
                                ]),
                                createVNode("div", { class: "d-flex align-center gap-1 mt-0.5 overflow-hidden" }, [
                                  createVNode(VIcon, {
                                    icon: "ri-book-2-line",
                                    size: "14",
                                    color: "primary",
                                    class: "flex-shrink-0"
                                  }),
                                  createVNode("span", {
                                    class: "text-body-2 font-weight-medium text-primary text-truncate d-inline-block",
                                    style: { "max-width": "140px" }
                                  }, toDisplayString(student.book), 1),
                                  createVNode("span", { class: "text-body-2 text-medium-emphasis flex-shrink-0" }, toDisplayString(student.ageGroup), 1)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center gap-3" }, [
                              createVNode("span", { class: "px-2 py-1 rounded-pill text-caption font-weight-medium text-info bg-info-light text-no-wrap" }, " Meeting Left : " + toDisplayString(student.meetingsLeft), 1),
                              createVNode(VDivider, {
                                vertical: "",
                                class: "mx-2",
                                style: { "height": "28px" }
                              }),
                              createVNode("div", {
                                class: "d-flex flex-column flex-shrink-0 overflow-hidden",
                                style: { "width": "180px" }
                              }, [
                                createVNode("span", { class: "text-body-2 text-medium-emphasis" }, "Latest Lesson"),
                                createVNode("span", { class: "text-body-2 text-high-emphasis font-weight-regular mt-0.5 text-truncate d-block" }, [
                                  createTextVNode(toDisplayString(student.latestLesson.number) + " ", 1),
                                  createVNode("span", { class: "text-medium-emphasis mx-1" }, "\u2022"),
                                  createTextVNode(" " + toDisplayString(student.latestLesson.title), 1)
                                ])
                              ]),
                              createVNode(VDivider, {
                                vertical: "",
                                class: "mx-2",
                                style: { "height": "28px" }
                              })
                            ]),
                            createVNode("div", null, [
                              createVNode(VBtn, {
                                color: "primary",
                                variant: "outlined",
                                rounded: "xl",
                                size: "small",
                                class: "text-capitalize px-4",
                                onClick: ($event) => onSeeHistory(student)
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "ri-history-line",
                                    size: "16"
                                  }),
                                  createTextVNode(" See History ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])
                          ], 2);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "actions-footer px-10 py-5 d-flex align-center justify-space-between" }, [
                      createVNode("span", { class: "px-3 py-1 rounded-pill text-caption font-weight-medium text-white bg-primary" }, toDisplayString(studentsList.value.length) + " Students ", 1),
                      createVNode("div", { class: "d-flex align-center gap-4" }, [
                        createVNode(VBtn, {
                          color: "secondary",
                          variant: "outlined",
                          rounded: "xl",
                          class: "px-6 text-capitalize",
                          style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important", "color": "rgb(var(--v-theme-secondary))" },
                          onClick: onCancel
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          rounded: "xl",
                          class: "px-6 text-capitalize",
                          style: { "box-shadow": "0px 2px 4px 0px rgba(46, 38, 61, 0.16)" },
                          onClick: onStartClass
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Start Class ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ], 64)) : props.event ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode("div", { class: "px-6 pt-6 pb-4" }, [
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis" }, toDisplayString(props.event.title), 1),
                      createVNode("p", { class: "text-caption text-medium-emphasis capitalize mt-1" }, toDisplayString(props.event.type.replace("_", " ")), 1)
                    ]),
                    createVNode(VDivider),
                    createVNode(VCardText, { class: "py-6 px-6" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex flex-column gap-4" }, [
                          createVNode("div", { class: "d-flex align-center gap-3" }, [
                            createVNode(VIcon, {
                              icon: "ri-calendar-line",
                              class: "text-secondary",
                              size: "24"
                            }),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Date"),
                              createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(props.event.date), 1)
                            ])
                          ]),
                          createVNode("div", { class: "d-flex align-center gap-3" }, [
                            createVNode(VIcon, {
                              icon: "ri-time-line",
                              class: "text-secondary",
                              size: "24"
                            }),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Time Slot"),
                              createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(props.event.startTime) + " - " + toDisplayString(props.event.endTime), 1)
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode("div", { class: "dialog-footer px-6 py-4 d-flex justify-end gap-3 align-center bg-grey-50" }, [
                      createVNode(VBtn, {
                        color: "error",
                        variant: "outlined",
                        rounded: "xl",
                        class: "px-6 text-capitalize",
                        onClick: onDelete
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Remove Event ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "secondary",
                        variant: "flat",
                        rounded: "xl",
                        class: "px-6 text-capitalize",
                        onClick: onCancel
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Close ")
                        ]),
                        _: 1
                      })
                    ])
                  ], 64)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialogs/ScheduleDetailsDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4bd7c380"]]);
const makeVRadioProps = propsFactory({
  ...makeVSelectionControlProps({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio");
const VRadio = genericComponent()({
  name: "VRadio",
  props: makeVRadioProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const controlProps = VSelectionControl.filterProps(props);
      return createVNode(VSelectionControl, mergeProps(controlProps, {
        "class": ["v-radio", props.class],
        "style": props.style,
        "type": "radio"
      }), slots);
    });
    return {};
  }
});
const makeVRadioGroupProps = propsFactory({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...makeVInputProps(),
  ...omit(makeSelectionControlGroupProps(), ["multiple"]),
  trueIcon: {
    type: IconValue,
    default: "$radioOn"
  },
  falseIcon: {
    type: IconValue,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup");
const VRadioGroup = genericComponent()({
  name: "VRadioGroup",
  inheritAttrs: false,
  props: makeVRadioGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const uid = getUid();
    const id = computed(() => props.id || `radio-group-${uid}`);
    const model = useProxiedModel(props, "modelValue");
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const controlProps = VSelectionControl.filterProps(props);
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return createVNode(VInput, mergeProps({
        "class": ["v-radio-group", props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": id.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id: id2,
            messagesId,
            isDisabled,
            isReadonly
          } = _ref2;
          return createVNode(Fragment, null, [label && createVNode(VLabel, {
            "id": id2.value
          }, {
            default: () => [label]
          }), createVNode(VSelectionControlGroup, mergeProps(controlProps, {
            "id": id2.value,
            "aria-describedby": messagesId.value,
            "defaultsTarget": "VRadio",
            "trueIcon": props.trueIcon,
            "falseIcon": props.falseIcon,
            "type": props.type,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "aria-labelledby": label ? id2.value : void 0,
            "multiple": false
          }, controlAttrs, {
            "modelValue": model.value,
            "onUpdate:modelValue": ($event) => model.value = $event
          }), slots)]);
        }
      });
    });
    return {};
  }
});
const startHour = 8;
const endHour = 22;
const slotHeight = 120;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "schedule",
  __ssrInlineRender: true,
  setup(__props) {
    const currentWeekStart = ref(new Date(2026, 0, 19));
    const viewType = ref("week");
    const selectedDayOffset = ref(1);
    const mockEvents = ref([
      {
        id: "1",
        title: "DPS-Adaptive-8C",
        date: "2026-01-20",
        // Monday
        startTime: "09:00",
        endTime: "10:00",
        type: "class"
      },
      {
        id: "2",
        title: "Room 2 - Website Design",
        date: "2026-01-21",
        // Tuesday
        startTime: "10:00",
        endTime: "12:00",
        type: "class"
      },
      {
        id: "3",
        title: "Time Off",
        date: "2026-01-22",
        // Wednesday
        startTime: "09:00",
        endTime: "11:00",
        type: "time_off"
      },
      {
        id: "4",
        title: "Time Off",
        date: "2026-01-23",
        // Thursday
        startTime: "12:00",
        endTime: "13:00",
        type: "time_off"
      },
      {
        id: "5",
        title: "Rio - Website Design",
        date: "2026-01-20",
        // Monday
        startTime: "10:00",
        endTime: "12:00",
        type: "class"
      },
      {
        id: "6",
        title: "DPS-Adaptive-8A",
        date: "2026-01-22",
        // Wednesday
        startTime: "14:00",
        endTime: "15:30",
        type: "class"
      },
      {
        id: "7",
        title: "Room 1 - Python Coding",
        date: "2026-01-24",
        // Friday
        startTime: "16:00",
        endTime: "18:00",
        type: "class"
      }
    ]);
    const formatDate = (date) => {
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, "0");
      const dd = String(date.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    };
    const getWeekDays = computed(() => {
      const days = [];
      const start = new Date(currentWeekStart.value);
      for (let i = 0; i < 7; i++) {
        const day = new Date(start);
        day.setDate(start.getDate() + i);
        days.push({
          date: new Date(day),
          dateStr: formatDate(day),
          dayName: day.toLocaleDateString("en-US", { weekday: "short" }),
          dayNumber: day.getDate(),
          isToday: formatDate(day) === formatDate(/* @__PURE__ */ new Date("2026-01-20"))
          // Highlight Jan 20, 2026 (Monday) to match Figma spec
        });
      }
      return days;
    });
    const dateRangeText = computed(() => {
      const start = currentWeekStart.value;
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      const startMonth = start.toLocaleDateString("en-US", { month: "short" });
      const endMonth = end.toLocaleDateString("en-US", { month: "short" });
      const startDay = start.getDate();
      const endDay = end.getDate();
      const startYear = start.getFullYear();
      if (startMonth === endMonth) {
        return `${startMonth} ${startDay} - ${endDay}, ${startYear}`;
      }
      return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`;
    });
    const navigateWeek = (direction) => {
      const newDate = new Date(currentWeekStart.value);
      newDate.setDate(newDate.getDate() + direction * 7);
      currentWeekStart.value = newDate;
    };
    const navigateToday = () => {
      currentWeekStart.value = new Date(2026, 0, 19);
    };
    const timeSlots = computed(() => {
      const slots = [];
      for (let h = startHour; h <= endHour; h++) {
        const period = h >= 12 ? "pm" : "am";
        const displayHour = h > 12 ? h - 12 : h;
        slots.push({
          hour: h,
          label: `${displayHour}${period}`
        });
      }
      return slots;
    });
    const filteredEvents = computed(() => mockEvents.value);
    const getEventPosition = (evt) => {
      const [startH, startM] = evt.startTime.split(":").map(Number);
      const [endH, endM] = evt.endTime.split(":").map(Number);
      const startMinutesOffset = startH * 60 + startM - startHour * 60;
      const durationMinutes = endH * 60 + endM - startH * 60;
      const top = startMinutesOffset / 60 * slotHeight;
      const height = durationMinutes / 60 * slotHeight;
      return {
        top: `${top}px`,
        height: `${height}px`
      };
    };
    const eventsByDate = computed(() => {
      const groups = {};
      filteredEvents.value.forEach((evt) => {
        if (!groups[evt.date]) {
          groups[evt.date] = [];
        }
        groups[evt.date].push(evt);
      });
      return groups;
    });
    const detailsDialog = ref(false);
    const selectedEvent = ref(null);
    const createDialog = ref(false);
    const newEventDate = ref("");
    const newEventTitle = ref("");
    const newEventStartTime = ref("09:00");
    const newEventEndTime = ref("10:00");
    const newEventType = ref("class");
    const showScoreHistory = ref(false);
    const selectedHistoryStudent = ref(null);
    const showSnackbar = ref(false);
    const snackbarText = ref("");
    const snackbarColor = ref("success");
    const openEventDetails = (evt) => {
      selectedEvent.value = evt;
      detailsDialog.value = true;
    };
    const openCreateDialog = (dateStr, hour) => {
      newEventDate.value = dateStr;
      newEventStartTime.value = `${String(hour).padStart(2, "0")}:00`;
      newEventEndTime.value = `${String(hour + 1).padStart(2, "0")}:00`;
      newEventTitle.value = "";
      newEventType.value = "class";
      createDialog.value = true;
    };
    const saveNewEvent = () => {
      if (!newEventTitle.value) return;
      mockEvents.value.push({
        id: String(Date.now()),
        title: newEventTitle.value,
        date: newEventDate.value,
        startTime: newEventStartTime.value,
        endTime: newEventEndTime.value,
        type: newEventType.value
      });
      createDialog.value = false;
    };
    const deleteEvent = (id) => {
      mockEvents.value = mockEvents.value.filter((e) => e.id !== id);
      detailsDialog.value = false;
    };
    const startClass = (eventId) => {
      const evt = mockEvents.value.find((e) => e.id === eventId);
      if (evt) {
        snackbarText.value = `Class "${evt.title}" started successfully!`;
        snackbarColor.value = "success";
        showSnackbar.value = true;
      }
      detailsDialog.value = false;
    };
    const seeStudentHistory = (student) => {
      selectedHistoryStudent.value = student;
      showScoreHistory.value = true;
    };
    const buildStudentScoreHistory = (student) => {
      const questionTypes = ["Short Answer", "Multiple Choice", "Free Text"];
      const buildQuestions = (correctCount) => Array.from({ length: 5 }, (_, i) => ({
        number: i + 1,
        type: questionTypes[i % questionTypes.length],
        correct: i < correctCount ? 1 : 0,
        total: 1,
        timeSpent: `${1 + i % 3}m ${10 + i * 5}s`
      }));
      return [
        {
          label: "First Score",
          icon: "ri-time-line",
          date: "2026-01-15",
          timeSpent: "8m 20s",
          score: 60,
          maxScore: 100,
          points: 60,
          questions: buildQuestions(3)
        },
        {
          label: "Last Score",
          icon: "ri-time-line",
          date: "2026-01-18",
          timeSpent: "6m 45s",
          score: 80,
          maxScore: 100,
          points: 80,
          questions: buildQuestions(4)
        },
        {
          label: "Best Score",
          icon: "ri-trophy-line",
          date: "2026-01-18",
          timeSpent: "5m 30s",
          score: 90,
          maxScore: 100,
          points: 90,
          questions: buildQuestions(5)
        }
      ];
    };
    const scoreHistoryAttempts = computed(() => {
      return selectedHistoryStudent.value ? buildStudentScoreHistory(selectedHistoryStudent.value) : [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ScheduleDetailsDialog = __nuxt_component_0;
      const _component_ScoreHistoryDialog = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-a99ab43c><div class="d-flex align-center justify-space-between flex-wrap gap-4 mb-6" data-v-a99ab43c><div data-v-a99ab43c><h4 class="text-h4 font-weight-medium text-high-emphasis mb-1" data-v-a99ab43c>Availability / Calendar</h4><p class="text-body-1 text-medium-emphasis mb-0" data-v-a99ab43c>Manage schedule class sessions and time-off slots.</p></div></div>`);
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex align-center justify-space-between flex-wrap gap-4 py-4 px-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center flex-wrap gap-4" data-v-a99ab43c${_scopeId2}><div class="d-flex align-center gap-2" data-v-a99ab43c${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "ri-arrow-left-s-line",
                    variant: "outlined",
                    density: "comfortable",
                    onClick: ($event) => navigateWeek(-1)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "ri-arrow-right-s-line",
                    variant: "outlined",
                    density: "comfortable",
                    onClick: ($event) => navigateWeek(1)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "outlined",
                    density: "comfortable",
                    class: "text-capitalize",
                    onClick: navigateToday
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Today `);
                      } else {
                        return [
                          createTextVNode(" Today ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<h2 class="text-h5 font-weight-medium ms-2 mb-0" data-v-a99ab43c${_scopeId2}>${ssrInterpolate(dateRangeText.value)}</h2></div>`);
                  _push3(ssrRenderComponent(VBtnToggle, {
                    modelValue: viewType.value,
                    "onUpdate:modelValue": ($event) => viewType.value = $event,
                    mandatory: "",
                    class: "custom-toggle-group"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          value: "week",
                          class: "px-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Week`);
                            } else {
                              return [
                                createTextVNode("Week")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "day",
                          class: "px-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Day`);
                            } else {
                              return [
                                createTextVNode("Day")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            value: "week",
                            class: "px-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Week")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "day",
                            class: "px-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Day")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                      createVNode("div", { class: "d-flex align-center gap-2" }, [
                        createVNode(VBtn, {
                          icon: "ri-arrow-left-s-line",
                          variant: "outlined",
                          density: "comfortable",
                          onClick: ($event) => navigateWeek(-1)
                        }, null, 8, ["onClick"]),
                        createVNode(VBtn, {
                          icon: "ri-arrow-right-s-line",
                          variant: "outlined",
                          density: "comfortable",
                          onClick: ($event) => navigateWeek(1)
                        }, null, 8, ["onClick"])
                      ]),
                      createVNode(VBtn, {
                        variant: "outlined",
                        density: "comfortable",
                        class: "text-capitalize",
                        onClick: navigateToday
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Today ")
                        ]),
                        _: 1
                      }),
                      createVNode("h2", { class: "text-h5 font-weight-medium ms-2 mb-0" }, toDisplayString(dateRangeText.value), 1)
                    ]),
                    createVNode(VBtnToggle, {
                      modelValue: viewType.value,
                      "onUpdate:modelValue": ($event) => viewType.value = $event,
                      mandatory: "",
                      class: "custom-toggle-group"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          value: "week",
                          class: "px-4"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Week")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          value: "day",
                          class: "px-4"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Day")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(`<div class="calendar-wrapper overflow-auto" data-v-a99ab43c${_scopeId}>`);
            if (viewType.value === "week") {
              _push2(`<div class="calendar-grid d-flex flex-column" style="${ssrRenderStyle({ "min-width": "900px" })}" data-v-a99ab43c${_scopeId}><div class="d-flex border-b header-row bg-surface" data-v-a99ab43c${_scopeId}><div class="time-header-spacer border-e" style="${ssrRenderStyle({ "width": "80px", "shrink": "0" })}" data-v-a99ab43c${_scopeId}></div><!--[-->`);
              ssrRenderList(getWeekDays.value, (day) => {
                _push2(`<div class="flex-grow-1 flex-shrink-0 text-center py-3 border-e d-flex flex-column align-center justify-center" style="${ssrRenderStyle({ "width": "0" })}" data-v-a99ab43c${_scopeId}><span class="text-caption text-medium-emphasis font-weight-regular mb-1" data-v-a99ab43c${_scopeId}>${ssrInterpolate(day.dayName)}</span><div class="${ssrRenderClass([
                  "day-number-wrapper d-flex align-center justify-center rounded-circle",
                  day.isToday ? "bg-primary text-white font-weight-medium" : "text-high-emphasis font-weight-medium"
                ])}" style="${ssrRenderStyle({ "width": "28px", "height": "28px", "font-size": "15px" })}" data-v-a99ab43c${_scopeId}>${ssrInterpolate(day.dayNumber)}</div></div>`);
              });
              _push2(`<!--]--></div><div class="d-flex position-relative bg-surface" data-v-a99ab43c${_scopeId}><div class="time-labels-col d-flex flex-column border-e" style="${ssrRenderStyle({ "width": "80px", "shrink": "0" })}" data-v-a99ab43c${_scopeId}><!--[-->`);
              ssrRenderList(timeSlots.value, (slot) => {
                _push2(`<div class="time-slot-label text-end pe-3 text-caption text-medium-emphasis border-b d-flex align-center justify-end" style="${ssrRenderStyle({ height: `${slotHeight}px` })}" data-v-a99ab43c${_scopeId}>${ssrInterpolate(slot.label)}</div>`);
              });
              _push2(`<!--]--></div><div class="flex-grow-1 d-flex position-relative" data-v-a99ab43c${_scopeId}><!--[-->`);
              ssrRenderList(getWeekDays.value, (day) => {
                _push2(`<div class="day-grid-column flex-grow-1 flex-shrink-0 border-e position-relative" style="${ssrRenderStyle({ "width": "0" })}" data-v-a99ab43c${_scopeId}><!--[-->`);
                ssrRenderList(timeSlots.value, (slot) => {
                  _push2(`<div class="grid-hour-cell border-b cursor-pointer hover-cell transition-all" style="${ssrRenderStyle({ height: `${slotHeight}px` })}" data-v-a99ab43c${_scopeId}></div>`);
                });
                _push2(`<!--]--><div class="events-container absolute inset-0 pointer-events-none" data-v-a99ab43c${_scopeId}><!--[-->`);
                ssrRenderList(eventsByDate.value[day.dateStr] || [], (evt) => {
                  _push2(`<div style="${ssrRenderStyle([
                    getEventPosition(evt),
                    { left: "4px", right: "4px" }
                  ])}" class="${ssrRenderClass([[
                    evt.type === "class" ? "schedule-class border-s border-s-lg border-primary" : "schedule-time-off border-s border-s-lg border-secondary"
                  ], "event-card pointer-events-auto position-absolute px-3 py-2 rounded shadow-sm cursor-pointer transition-all d-flex flex-column justify-center"])}" data-v-a99ab43c${_scopeId}><span class="text-caption font-weight-regular line-clamp-1 mb-0.5" data-v-a99ab43c${_scopeId}>${ssrInterpolate(evt.startTime)} - ${ssrInterpolate(evt.endTime)}</span><span class="text-body-2 font-weight-medium line-clamp-2" data-v-a99ab43c${_scopeId}>${ssrInterpolate(evt.title)}</span></div>`);
                });
                _push2(`<!--]--></div></div>`);
              });
              _push2(`<!--]--></div></div></div>`);
            } else {
              _push2(`<div class="calendar-grid d-flex flex-column" data-v-a99ab43c${_scopeId}><div class="d-flex border-b bg-surface py-3 px-6 align-center justify-space-between" data-v-a99ab43c${_scopeId}><div class="d-flex align-center gap-2" data-v-a99ab43c${_scopeId}><!--[-->`);
              ssrRenderList(getWeekDays.value, (day, idx) => {
                _push2(ssrRenderComponent(VBtn, {
                  key: day.dateStr,
                  variant: selectedDayOffset.value === idx ? "flat" : "outlined",
                  color: selectedDayOffset.value === idx ? "primary" : "default",
                  class: "rounded-pill text-capitalize",
                  density: "comfortable",
                  onClick: ($event) => selectedDayOffset.value = idx
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(day.dayName)} ${ssrInterpolate(day.dayNumber)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(day.dayName) + " " + toDisplayString(day.dayNumber), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div><div class="d-flex position-relative bg-surface" data-v-a99ab43c${_scopeId}><div class="time-labels-col d-flex flex-column border-e" style="${ssrRenderStyle({ "width": "80px", "shrink": "0" })}" data-v-a99ab43c${_scopeId}><!--[-->`);
              ssrRenderList(timeSlots.value, (slot) => {
                _push2(`<div class="time-slot-label text-end pe-3 text-caption text-medium-emphasis border-b d-flex align-center justify-end" style="${ssrRenderStyle({ height: `${slotHeight}px` })}" data-v-a99ab43c${_scopeId}>${ssrInterpolate(slot.label)}</div>`);
              });
              _push2(`<!--]--></div><div class="flex-grow-1 position-relative" data-v-a99ab43c${_scopeId}><!--[-->`);
              ssrRenderList(timeSlots.value, (slot) => {
                _push2(`<div class="grid-hour-cell border-b cursor-pointer hover-cell transition-all" style="${ssrRenderStyle({ height: `${slotHeight}px` })}" data-v-a99ab43c${_scopeId}></div>`);
              });
              _push2(`<!--]--><div class="events-container absolute inset-0 pointer-events-none" data-v-a99ab43c${_scopeId}><!--[-->`);
              ssrRenderList(eventsByDate.value[getWeekDays.value[selectedDayOffset.value].dateStr] || [], (evt) => {
                _push2(`<div style="${ssrRenderStyle([
                  getEventPosition(evt),
                  { left: "16px", right: "16px" }
                ])}" class="${ssrRenderClass([[
                  evt.type === "class" ? "schedule-class border-s border-s-lg border-primary" : "schedule-time-off border-s border-s-lg border-secondary"
                ], "event-card pointer-events-auto position-absolute px-4 py-3 rounded shadow-sm cursor-pointer transition-all d-flex flex-column justify-center"])}" data-v-a99ab43c${_scopeId}><span class="text-caption font-weight-regular mb-1" data-v-a99ab43c${_scopeId}>${ssrInterpolate(evt.startTime)} - ${ssrInterpolate(evt.endTime)}</span><span class="text-subtitle-2 font-weight-medium" data-v-a99ab43c${_scopeId}>${ssrInterpolate(evt.title)}</span></div>`);
              });
              _push2(`<!--]--></div></div></div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(VCardText, { class: "d-flex align-center justify-space-between flex-wrap gap-4 py-4 px-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                    createVNode("div", { class: "d-flex align-center gap-2" }, [
                      createVNode(VBtn, {
                        icon: "ri-arrow-left-s-line",
                        variant: "outlined",
                        density: "comfortable",
                        onClick: ($event) => navigateWeek(-1)
                      }, null, 8, ["onClick"]),
                      createVNode(VBtn, {
                        icon: "ri-arrow-right-s-line",
                        variant: "outlined",
                        density: "comfortable",
                        onClick: ($event) => navigateWeek(1)
                      }, null, 8, ["onClick"])
                    ]),
                    createVNode(VBtn, {
                      variant: "outlined",
                      density: "comfortable",
                      class: "text-capitalize",
                      onClick: navigateToday
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Today ")
                      ]),
                      _: 1
                    }),
                    createVNode("h2", { class: "text-h5 font-weight-medium ms-2 mb-0" }, toDisplayString(dateRangeText.value), 1)
                  ]),
                  createVNode(VBtnToggle, {
                    modelValue: viewType.value,
                    "onUpdate:modelValue": ($event) => viewType.value = $event,
                    mandatory: "",
                    class: "custom-toggle-group"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        value: "week",
                        class: "px-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Week")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        value: "day",
                        class: "px-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Day")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode("div", { class: "calendar-wrapper overflow-auto" }, [
                viewType.value === "week" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "calendar-grid d-flex flex-column",
                  style: { "min-width": "900px" }
                }, [
                  createVNode("div", { class: "d-flex border-b header-row bg-surface" }, [
                    createVNode("div", {
                      class: "time-header-spacer border-e",
                      style: { "width": "80px", "shrink": "0" }
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(getWeekDays.value, (day) => {
                      return openBlock(), createBlock("div", {
                        key: day.dateStr,
                        class: "flex-grow-1 flex-shrink-0 text-center py-3 border-e d-flex flex-column align-center justify-center",
                        style: { "width": "0" }
                      }, [
                        createVNode("span", { class: "text-caption text-medium-emphasis font-weight-regular mb-1" }, toDisplayString(day.dayName), 1),
                        createVNode("div", {
                          class: [
                            "day-number-wrapper d-flex align-center justify-center rounded-circle",
                            day.isToday ? "bg-primary text-white font-weight-medium" : "text-high-emphasis font-weight-medium"
                          ],
                          style: { "width": "28px", "height": "28px", "font-size": "15px" }
                        }, toDisplayString(day.dayNumber), 3)
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "d-flex position-relative bg-surface" }, [
                    createVNode("div", {
                      class: "time-labels-col d-flex flex-column border-e",
                      style: { "width": "80px", "shrink": "0" }
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(timeSlots.value, (slot) => {
                        return openBlock(), createBlock("div", {
                          key: slot.hour,
                          class: "time-slot-label text-end pe-3 text-caption text-medium-emphasis border-b d-flex align-center justify-end",
                          style: { height: `${slotHeight}px` }
                        }, toDisplayString(slot.label), 5);
                      }), 128))
                    ]),
                    createVNode("div", { class: "flex-grow-1 d-flex position-relative" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(getWeekDays.value, (day) => {
                        return openBlock(), createBlock("div", {
                          key: day.dateStr,
                          class: "day-grid-column flex-grow-1 flex-shrink-0 border-e position-relative",
                          style: { "width": "0" }
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(timeSlots.value, (slot) => {
                            return openBlock(), createBlock("div", {
                              key: slot.hour,
                              class: "grid-hour-cell border-b cursor-pointer hover-cell transition-all",
                              style: { height: `${slotHeight}px` },
                              onClick: ($event) => openCreateDialog(day.dateStr, slot.hour)
                            }, null, 12, ["onClick"]);
                          }), 128)),
                          createVNode("div", { class: "events-container absolute inset-0 pointer-events-none" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(eventsByDate.value[day.dateStr] || [], (evt) => {
                              return openBlock(), createBlock("div", {
                                key: evt.id,
                                class: ["event-card pointer-events-auto position-absolute px-3 py-2 rounded shadow-sm cursor-pointer transition-all d-flex flex-column justify-center", [
                                  evt.type === "class" ? "schedule-class border-s border-s-lg border-primary" : "schedule-time-off border-s border-s-lg border-secondary"
                                ]],
                                style: [
                                  getEventPosition(evt),
                                  { left: "4px", right: "4px" }
                                ],
                                onClick: withModifiers(($event) => openEventDetails(evt), ["stop"])
                              }, [
                                createVNode("span", { class: "text-caption font-weight-regular line-clamp-1 mb-0.5" }, toDisplayString(evt.startTime) + " - " + toDisplayString(evt.endTime), 1),
                                createVNode("span", { class: "text-body-2 font-weight-medium line-clamp-2" }, toDisplayString(evt.title), 1)
                              ], 14, ["onClick"]);
                            }), 128))
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "calendar-grid d-flex flex-column"
                }, [
                  createVNode("div", { class: "d-flex border-b bg-surface py-3 px-6 align-center justify-space-between" }, [
                    createVNode("div", { class: "d-flex align-center gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(getWeekDays.value, (day, idx) => {
                        return openBlock(), createBlock(VBtn, {
                          key: day.dateStr,
                          variant: selectedDayOffset.value === idx ? "flat" : "outlined",
                          color: selectedDayOffset.value === idx ? "primary" : "default",
                          class: "rounded-pill text-capitalize",
                          density: "comfortable",
                          onClick: ($event) => selectedDayOffset.value = idx
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(day.dayName) + " " + toDisplayString(day.dayNumber), 1)
                          ]),
                          _: 2
                        }, 1032, ["variant", "color", "onClick"]);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "d-flex position-relative bg-surface" }, [
                    createVNode("div", {
                      class: "time-labels-col d-flex flex-column border-e",
                      style: { "width": "80px", "shrink": "0" }
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(timeSlots.value, (slot) => {
                        return openBlock(), createBlock("div", {
                          key: slot.hour,
                          class: "time-slot-label text-end pe-3 text-caption text-medium-emphasis border-b d-flex align-center justify-end",
                          style: { height: `${slotHeight}px` }
                        }, toDisplayString(slot.label), 5);
                      }), 128))
                    ]),
                    createVNode("div", { class: "flex-grow-1 position-relative" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(timeSlots.value, (slot) => {
                        return openBlock(), createBlock("div", {
                          key: slot.hour,
                          class: "grid-hour-cell border-b cursor-pointer hover-cell transition-all",
                          style: { height: `${slotHeight}px` },
                          onClick: ($event) => openCreateDialog(getWeekDays.value[selectedDayOffset.value].dateStr, slot.hour)
                        }, null, 12, ["onClick"]);
                      }), 128)),
                      createVNode("div", { class: "events-container absolute inset-0 pointer-events-none" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(eventsByDate.value[getWeekDays.value[selectedDayOffset.value].dateStr] || [], (evt) => {
                          return openBlock(), createBlock("div", {
                            key: evt.id,
                            class: ["event-card pointer-events-auto position-absolute px-4 py-3 rounded shadow-sm cursor-pointer transition-all d-flex flex-column justify-center", [
                              evt.type === "class" ? "schedule-class border-s border-s-lg border-primary" : "schedule-time-off border-s border-s-lg border-secondary"
                            ]],
                            style: [
                              getEventPosition(evt),
                              { left: "16px", right: "16px" }
                            ],
                            onClick: withModifiers(($event) => openEventDetails(evt), ["stop"])
                          }, [
                            createVNode("span", { class: "text-caption font-weight-regular mb-1" }, toDisplayString(evt.startTime) + " - " + toDisplayString(evt.endTime), 1),
                            createVNode("span", { class: "text-subtitle-2 font-weight-medium" }, toDisplayString(evt.title), 1)
                          ], 14, ["onClick"]);
                        }), 128))
                      ])
                    ])
                  ])
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ScheduleDetailsDialog, {
        "is-dialog-visible": detailsDialog.value,
        "onUpdate:isDialogVisible": ($event) => detailsDialog.value = $event,
        event: selectedEvent.value,
        onDeleteEvent: deleteEvent,
        onStartClass: startClass,
        onSeeHistory: seeStudentHistory
      }, null, _parent));
      _push(ssrRenderComponent(_component_ScoreHistoryDialog, {
        "is-dialog-visible": showScoreHistory.value,
        "onUpdate:isDialogVisible": ($event) => showScoreHistory.value = $event,
        student: selectedHistoryStudent.value,
        attempts: scoreHistoryAttempts.value
      }, null, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: showSnackbar.value,
        "onUpdate:modelValue": ($event) => showSnackbar.value = $event,
        color: snackbarColor.value,
        location: "top end"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(snackbarText.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(snackbarText.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: createDialog.value,
        "onUpdate:modelValue": ($event) => createDialog.value = $event,
        "max-width": "450"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "d-flex align-center justify-space-between py-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-h6 font-weight-medium" data-v-a99ab43c${_scopeId3}>New Availability / Event</span>`);
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          density: "comfortable",
                          onClick: ($event) => createDialog.value = false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "text-h6 font-weight-medium" }, "New Availability / Event"),
                          createVNode(VBtn, {
                            icon: "ri-close-line",
                            variant: "text",
                            density: "comfortable",
                            onClick: ($event) => createDialog.value = false
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "py-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { class: "gap-y-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "py-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: newEventTitle.value,
                                      "onUpdate:modelValue": ($event) => newEventTitle.value = $event,
                                      label: "Event Title",
                                      placeholder: "e.g. DPS-Adaptive-8C or Time Off",
                                      density: "comfortable",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: newEventTitle.value,
                                        "onUpdate:modelValue": ($event) => newEventTitle.value = $event,
                                        label: "Event Title",
                                        placeholder: "e.g. DPS-Adaptive-8C or Time Off",
                                        density: "comfortable",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "py-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: newEventDate.value,
                                      "onUpdate:modelValue": ($event) => newEventDate.value = $event,
                                      label: "Date",
                                      type: "date",
                                      density: "comfortable",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: newEventDate.value,
                                        "onUpdate:modelValue": ($event) => newEventDate.value = $event,
                                        label: "Date",
                                        type: "date",
                                        density: "comfortable",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "6",
                                class: "py-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: newEventStartTime.value,
                                      "onUpdate:modelValue": ($event) => newEventStartTime.value = $event,
                                      label: "Start Time",
                                      type: "time",
                                      density: "comfortable",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: newEventStartTime.value,
                                        "onUpdate:modelValue": ($event) => newEventStartTime.value = $event,
                                        label: "Start Time",
                                        type: "time",
                                        density: "comfortable",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "6",
                                class: "py-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: newEventEndTime.value,
                                      "onUpdate:modelValue": ($event) => newEventEndTime.value = $event,
                                      label: "End Time",
                                      type: "time",
                                      density: "comfortable",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: newEventEndTime.value,
                                        "onUpdate:modelValue": ($event) => newEventEndTime.value = $event,
                                        label: "End Time",
                                        type: "time",
                                        density: "comfortable",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "py-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRadioGroup, {
                                      modelValue: newEventType.value,
                                      "onUpdate:modelValue": ($event) => newEventType.value = $event,
                                      inline: "",
                                      label: "Event Type"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VRadio, {
                                            label: "Class Session",
                                            value: "class",
                                            color: "primary"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VRadio, {
                                            label: "Time Off",
                                            value: "time_off",
                                            color: "secondary"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VRadio, {
                                              label: "Class Session",
                                              value: "class",
                                              color: "primary"
                                            }),
                                            createVNode(VRadio, {
                                              label: "Time Off",
                                              value: "time_off",
                                              color: "secondary"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRadioGroup, {
                                        modelValue: newEventType.value,
                                        "onUpdate:modelValue": ($event) => newEventType.value = $event,
                                        inline: "",
                                        label: "Event Type"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRadio, {
                                            label: "Class Session",
                                            value: "class",
                                            color: "primary"
                                          }),
                                          createVNode(VRadio, {
                                            label: "Time Off",
                                            value: "time_off",
                                            color: "secondary"
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "py-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: newEventTitle.value,
                                      "onUpdate:modelValue": ($event) => newEventTitle.value = $event,
                                      label: "Event Title",
                                      placeholder: "e.g. DPS-Adaptive-8C or Time Off",
                                      density: "comfortable",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "py-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: newEventDate.value,
                                      "onUpdate:modelValue": ($event) => newEventDate.value = $event,
                                      label: "Date",
                                      type: "date",
                                      density: "comfortable",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "6",
                                  class: "py-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: newEventStartTime.value,
                                      "onUpdate:modelValue": ($event) => newEventStartTime.value = $event,
                                      label: "Start Time",
                                      type: "time",
                                      density: "comfortable",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "6",
                                  class: "py-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: newEventEndTime.value,
                                      "onUpdate:modelValue": ($event) => newEventEndTime.value = $event,
                                      label: "End Time",
                                      type: "time",
                                      density: "comfortable",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "py-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRadioGroup, {
                                      modelValue: newEventType.value,
                                      "onUpdate:modelValue": ($event) => newEventType.value = $event,
                                      inline: "",
                                      label: "Event Type"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VRadio, {
                                          label: "Class Session",
                                          value: "class",
                                          color: "primary"
                                        }),
                                        createVNode(VRadio, {
                                          label: "Time Off",
                                          value: "time_off",
                                          color: "secondary"
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, { class: "gap-y-4" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                class: "py-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: newEventTitle.value,
                                    "onUpdate:modelValue": ($event) => newEventTitle.value = $event,
                                    label: "Event Title",
                                    placeholder: "e.g. DPS-Adaptive-8C or Time Off",
                                    density: "comfortable",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                class: "py-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: newEventDate.value,
                                    "onUpdate:modelValue": ($event) => newEventDate.value = $event,
                                    label: "Date",
                                    type: "date",
                                    density: "comfortable",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "6",
                                class: "py-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: newEventStartTime.value,
                                    "onUpdate:modelValue": ($event) => newEventStartTime.value = $event,
                                    label: "Start Time",
                                    type: "time",
                                    density: "comfortable",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "6",
                                class: "py-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: newEventEndTime.value,
                                    "onUpdate:modelValue": ($event) => newEventEndTime.value = $event,
                                    label: "End Time",
                                    type: "time",
                                    density: "comfortable",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                class: "py-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRadioGroup, {
                                    modelValue: newEventType.value,
                                    "onUpdate:modelValue": ($event) => newEventType.value = $event,
                                    inline: "",
                                    label: "Event Type"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRadio, {
                                        label: "Class Session",
                                        value: "class",
                                        color: "primary"
                                      }),
                                      createVNode(VRadio, {
                                        label: "Time Off",
                                        value: "time_off",
                                        color: "secondary"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "pa-4 d-flex justify-end gap-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          color: "secondary",
                          class: "text-capitalize",
                          onClick: ($event) => createDialog.value = false
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
                          variant: "flat",
                          color: "primary",
                          class: "text-capitalize",
                          disabled: !newEventTitle.value,
                          onClick: saveNewEvent
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Add Schedule `);
                            } else {
                              return [
                                createTextVNode(" Add Schedule ")
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
                            class: "text-capitalize",
                            onClick: ($event) => createDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            variant: "flat",
                            color: "primary",
                            class: "text-capitalize",
                            disabled: !newEventTitle.value,
                            onClick: saveNewEvent
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Add Schedule ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "d-flex align-center justify-space-between py-4" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-h6 font-weight-medium" }, "New Availability / Event"),
                        createVNode(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          density: "comfortable",
                          onClick: ($event) => createDialog.value = false
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardText, { class: "py-6" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { class: "gap-y-4" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              class: "py-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: newEventTitle.value,
                                  "onUpdate:modelValue": ($event) => newEventTitle.value = $event,
                                  label: "Event Title",
                                  placeholder: "e.g. DPS-Adaptive-8C or Time Off",
                                  density: "comfortable",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              class: "py-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: newEventDate.value,
                                  "onUpdate:modelValue": ($event) => newEventDate.value = $event,
                                  label: "Date",
                                  type: "date",
                                  density: "comfortable",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "6",
                              class: "py-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: newEventStartTime.value,
                                  "onUpdate:modelValue": ($event) => newEventStartTime.value = $event,
                                  label: "Start Time",
                                  type: "time",
                                  density: "comfortable",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "6",
                              class: "py-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: newEventEndTime.value,
                                  "onUpdate:modelValue": ($event) => newEventEndTime.value = $event,
                                  label: "End Time",
                                  type: "time",
                                  density: "comfortable",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              class: "py-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(VRadioGroup, {
                                  modelValue: newEventType.value,
                                  "onUpdate:modelValue": ($event) => newEventType.value = $event,
                                  inline: "",
                                  label: "Event Type"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRadio, {
                                      label: "Class Session",
                                      value: "class",
                                      color: "primary"
                                    }),
                                    createVNode(VRadio, {
                                      label: "Time Off",
                                      value: "time_off",
                                      color: "secondary"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardActions, { class: "pa-4 d-flex justify-end gap-2" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "outlined",
                          color: "secondary",
                          class: "text-capitalize",
                          onClick: ($event) => createDialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          variant: "flat",
                          color: "primary",
                          class: "text-capitalize",
                          disabled: !newEventTitle.value,
                          onClick: saveNewEvent
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Add Schedule ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "d-flex align-center justify-space-between py-4" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-h6 font-weight-medium" }, "New Availability / Event"),
                      createVNode(VBtn, {
                        icon: "ri-close-line",
                        variant: "text",
                        density: "comfortable",
                        onClick: ($event) => createDialog.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardText, { class: "py-6" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { class: "gap-y-4" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            class: "py-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: newEventTitle.value,
                                "onUpdate:modelValue": ($event) => newEventTitle.value = $event,
                                label: "Event Title",
                                placeholder: "e.g. DPS-Adaptive-8C or Time Off",
                                density: "comfortable",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "py-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: newEventDate.value,
                                "onUpdate:modelValue": ($event) => newEventDate.value = $event,
                                label: "Date",
                                type: "date",
                                density: "comfortable",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "6",
                            class: "py-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: newEventStartTime.value,
                                "onUpdate:modelValue": ($event) => newEventStartTime.value = $event,
                                label: "Start Time",
                                type: "time",
                                density: "comfortable",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "6",
                            class: "py-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: newEventEndTime.value,
                                "onUpdate:modelValue": ($event) => newEventEndTime.value = $event,
                                label: "End Time",
                                type: "time",
                                density: "comfortable",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "py-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VRadioGroup, {
                                modelValue: newEventType.value,
                                "onUpdate:modelValue": ($event) => newEventType.value = $event,
                                inline: "",
                                label: "Event Type"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRadio, {
                                    label: "Class Session",
                                    value: "class",
                                    color: "primary"
                                  }),
                                  createVNode(VRadio, {
                                    label: "Time Off",
                                    value: "time_off",
                                    color: "secondary"
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardActions, { class: "pa-4 d-flex justify-end gap-2" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "outlined",
                        color: "secondary",
                        class: "text-capitalize",
                        onClick: ($event) => createDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        variant: "flat",
                        color: "primary",
                        class: "text-capitalize",
                        disabled: !newEventTitle.value,
                        onClick: saveNewEvent
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Add Schedule ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/schedule.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const schedule = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a99ab43c"]]);

export { schedule as default };
