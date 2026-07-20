import { _ as __nuxt_component_0 } from "./nuxt-link-CH0086wS.js";
import { _ as __nuxt_component_1 } from "./ScoreHistoryDialog-CBdhWWae.js";
import { _ as _sfc_main$3 } from "./DialogCloseBtn-CVR_yFk0.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext, ref, computed, provide, watch, unref, isRef, createBlock, createCommentVNode, openBlock, Fragment, withDirectives, renderList, vShow } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { V as VDialog } from "./VDialog-B0Ad2yj9.js";
import { V as VCard } from "./VCard-B42eN0YV.js";
import { V as VBtn, aW as _export_sfc, a as VIcon, aX as VBtnToggle } from "../server.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/hookable/dist/index.mjs";
import { b as VExpandTransition } from "./index-CSomYp-Z.js";
import { V as VTabs, a as VTab, b as VSkeletonLoader } from "./VTabs-iT2EYINr.js";
import { V as VCardText } from "./VCardText-CaXtzNxg.js";
import { V as VTextField } from "./VTextField-jMGfwBDn.js";
import { V as VSelect } from "./filter-BIe-IBmp.js";
import { V as VDivider } from "./VDivider-Cdypedjq.js";
import { k as VDataTable } from "./VDataTable-TnWqeKKY.js";
import { V as VTooltip } from "./VTooltip-vXFYhuMk.js";
import { V as VChip } from "./VChip-C0dLsv_T.js";
import { V as VAvatar } from "./VAvatar-B478BWXT.js";
import { V as VDataTableFooter } from "./VDataTableFooter-BmXk9xgv.js";
import { V as VSnackbar } from "./VSnackbar-DgaXWzkK.js";
import "./VSpacer-CtyhO1n2.js";
/* empty css               */
import "./VRow-BRD4hy0P.js";
import "./VOverlay-gAZb14KV.js";
import "./forwardRefs-Oip3fNRq.js";
import "./dialog-transition-CDwwEBKm.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/unctx/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/radix3/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/defu/dist/defu.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/klona/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/destr/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/ohash/dist/index.mjs";
import "@vue/devtools-api";
import "@antfu/utils";
import "./VList-BNtS0p6J.js";
import "./VMenu-C4ct7Xz7.js";
import "./VCheckboxBtn-BB8tUmIP.js";
import "./VSelectionControl-B1a3mcFW.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ApproveProjectDialog",
  __ssrInlineRender: true,
  props: {
    isDialogVisible: { type: Boolean },
    itemType: { default: "project" }
  },
  emits: ["update:isDialogVisible", "confirm"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const onCancel = () => {
      emit("update:isDialogVisible", false);
    };
    const onConfirm = () => {
      emit("confirm");
      emit("update:isDialogVisible", false);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$3;
      _push(ssrRenderComponent(VDialog, mergeProps({
        "model-value": props.isDialogVisible,
        "max-width": "500",
        "onUpdate:modelValue": (val) => emit("update:isDialogVisible", val)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "overflow-hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, { onClick: onCancel }, null, _parent3, _scopeId2));
                  _push3(`<div class="pa-6" data-v-f3e43c80${_scopeId2}><h5 class="text-h5 mb-2 font-weight-medium text-high-emphasis" data-v-f3e43c80${_scopeId2}> Approve ${ssrInterpolate(props.itemType)}? </h5><p class="text-body-1 text-medium-emphasis mb-0" data-v-f3e43c80${_scopeId2}> Are you sure want to approve this student ${ssrInterpolate(props.itemType)} ? </p></div><div class="dialog-footer px-6 py-4 d-flex justify-end gap-3 align-center" data-v-f3e43c80${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    color: "secondary",
                    variant: "outlined",
                    rounded: "xl",
                    class: "px-6",
                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" },
                    onClick: onCancel
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Back `);
                      } else {
                        return [
                          createTextVNode(" Back ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    color: "primary",
                    rounded: "xl",
                    class: "px-6",
                    onClick: onConfirm
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Approve `);
                      } else {
                        return [
                          createTextVNode(" Approve ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, { onClick: onCancel }),
                    createVNode("div", { class: "pa-6" }, [
                      createVNode("h5", { class: "text-h5 mb-2 font-weight-medium text-high-emphasis" }, " Approve " + toDisplayString(props.itemType) + "? ", 1),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mb-0" }, " Are you sure want to approve this student " + toDisplayString(props.itemType) + " ? ", 1)
                    ]),
                    createVNode("div", { class: "dialog-footer px-6 py-4 d-flex justify-end gap-3 align-center" }, [
                      createVNode(VBtn, {
                        color: "secondary",
                        variant: "outlined",
                        rounded: "xl",
                        class: "px-6",
                        style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" },
                        onClick: onCancel
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Back ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        rounded: "xl",
                        class: "px-6",
                        onClick: onConfirm
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Approve ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "overflow-hidden" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, { onClick: onCancel }),
                  createVNode("div", { class: "pa-6" }, [
                    createVNode("h5", { class: "text-h5 mb-2 font-weight-medium text-high-emphasis" }, " Approve " + toDisplayString(props.itemType) + "? ", 1),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis mb-0" }, " Are you sure want to approve this student " + toDisplayString(props.itemType) + " ? ", 1)
                  ]),
                  createVNode("div", { class: "dialog-footer px-6 py-4 d-flex justify-end gap-3 align-center" }, [
                    createVNode(VBtn, {
                      color: "secondary",
                      variant: "outlined",
                      rounded: "xl",
                      class: "px-6",
                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" },
                      onClick: onCancel
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Back ")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      rounded: "xl",
                      class: "px-6",
                      onClick: onConfirm
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Approve ")
                      ]),
                      _: 1
                    })
                  ])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialogs/ApproveProjectDialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f3e43c80"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RejectProjectDialog",
  __ssrInlineRender: true,
  props: {
    isDialogVisible: { type: Boolean },
    itemType: { default: "project" }
  },
  emits: ["update:isDialogVisible", "confirm"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const onCancel = () => {
      emit("update:isDialogVisible", false);
    };
    const onConfirm = () => {
      emit("confirm");
      emit("update:isDialogVisible", false);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$3;
      _push(ssrRenderComponent(VDialog, mergeProps({
        "model-value": props.isDialogVisible,
        "max-width": "500",
        "onUpdate:modelValue": (val) => emit("update:isDialogVisible", val)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "overflow-hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, { onClick: onCancel }, null, _parent3, _scopeId2));
                  _push3(`<div class="pa-6" data-v-7015f3ad${_scopeId2}><h5 class="text-h5 mb-2 font-weight-medium text-high-emphasis" data-v-7015f3ad${_scopeId2}> Reject ${ssrInterpolate(props.itemType === "project" ? "Project?" : "Quiz?")}</h5><p class="text-body-1 text-medium-emphasis mb-0" data-v-7015f3ad${_scopeId2}> Are you sure want to reject this student ${ssrInterpolate(props.itemType)} ? </p></div><div class="dialog-footer px-6 py-4 d-flex justify-end gap-3 align-center" data-v-7015f3ad${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    color: "secondary",
                    variant: "outlined",
                    rounded: "xl",
                    class: "px-6",
                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" },
                    onClick: onCancel
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Back `);
                      } else {
                        return [
                          createTextVNode(" Back ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    color: "error",
                    rounded: "xl",
                    class: "px-6",
                    onClick: onConfirm
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Reject `);
                      } else {
                        return [
                          createTextVNode(" Reject ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, { onClick: onCancel }),
                    createVNode("div", { class: "pa-6" }, [
                      createVNode("h5", { class: "text-h5 mb-2 font-weight-medium text-high-emphasis" }, " Reject " + toDisplayString(props.itemType === "project" ? "Project?" : "Quiz?"), 1),
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mb-0" }, " Are you sure want to reject this student " + toDisplayString(props.itemType) + " ? ", 1)
                    ]),
                    createVNode("div", { class: "dialog-footer px-6 py-4 d-flex justify-end gap-3 align-center" }, [
                      createVNode(VBtn, {
                        color: "secondary",
                        variant: "outlined",
                        rounded: "xl",
                        class: "px-6",
                        style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" },
                        onClick: onCancel
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Back ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "error",
                        rounded: "xl",
                        class: "px-6",
                        onClick: onConfirm
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reject ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "overflow-hidden" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, { onClick: onCancel }),
                  createVNode("div", { class: "pa-6" }, [
                    createVNode("h5", { class: "text-h5 mb-2 font-weight-medium text-high-emphasis" }, " Reject " + toDisplayString(props.itemType === "project" ? "Project?" : "Quiz?"), 1),
                    createVNode("p", { class: "text-body-1 text-medium-emphasis mb-0" }, " Are you sure want to reject this student " + toDisplayString(props.itemType) + " ? ", 1)
                  ]),
                  createVNode("div", { class: "dialog-footer px-6 py-4 d-flex justify-end gap-3 align-center" }, [
                    createVNode(VBtn, {
                      color: "secondary",
                      variant: "outlined",
                      rounded: "xl",
                      class: "px-6",
                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" },
                      onClick: onCancel
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Back ")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "error",
                      rounded: "xl",
                      class: "px-6",
                      onClick: onConfirm
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Reject ")
                      ]),
                      _: 1
                    })
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialogs/RejectProjectDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7015f3ad"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "assessments",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("project");
    const searchQuery = ref("");
    const selectedClass = ref("All Classes");
    const selectedQuizType = ref("All Types");
    const quizTypeOptions = ["All Types", "Quiz", "Exam"];
    const viewType = ref("list");
    const showSnackbar = ref(false);
    const snackbarColor = ref("success");
    const snackbarText = ref("");
    const mockProjects = ref([
      {
        initials: "CM",
        name: "Cristofer Mango",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "DPS-Adaptive-C",
        date: "Feb 30, 2026",
        status: "Pending",
        lessonLink: "#"
      },
      {
        initials: "CM",
        name: "Cristofer Mango",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "DPS-Adaptive-C",
        date: "Feb 31, 2026",
        status: "Pending",
        lessonLink: "#"
      },
      {
        initials: "JS",
        name: "Jennifer Summers",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "DPS-Adaptive-C",
        date: "Feb 30, 2026",
        status: "Pending",
        lessonLink: "#"
      },
      {
        initials: "JR",
        name: "Justin Richardson",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "DPS-Adaptive-C",
        date: "Feb 30, 2026",
        status: "Pending",
        lessonLink: "#"
      },
      {
        initials: "JR",
        name: "Justin Richardson",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "DPS-Adaptive-C",
        date: "Feb 31, 2026",
        status: "Pending",
        lessonLink: "#"
      },
      {
        initials: "NT",
        name: "Nicholas Tanner",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "DPS-Adaptive-C",
        date: "Feb 30, 2026",
        status: "Pending",
        lessonLink: "#"
      },
      {
        initials: "CM",
        name: "Crystal Mays",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "DPS-Adaptive-C",
        date: "Feb 30, 2026",
        status: "Pending",
        lessonLink: "#"
      },
      {
        initials: "MG",
        name: "Mary Garcia",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "DPS-Adaptive-C",
        date: "Feb 30, 2026",
        status: "Pending",
        lessonLink: "#"
      },
      {
        initials: "MR",
        name: "Megan Roberts",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "DPS-Adaptive-C",
        date: "Feb 30, 2026",
        status: "Pending",
        lessonLink: "#"
      },
      {
        initials: "JO",
        name: "Joseph Oliver",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "DPS-Adaptive-C",
        date: "Feb 30, 2026",
        status: "Pending",
        lessonLink: "#"
      }
    ]);
    const mockQuizzes = ref([
      {
        initials: "CM",
        name: "Cristofer Mango",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "-",
        date: "February 29, 2012",
        score: 100,
        quizType: "Quiz",
        lessonLink: "#"
      },
      {
        initials: "JS",
        name: "Jennifer Summers",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "-",
        date: "February 29, 2012",
        score: 100,
        quizType: "Quiz",
        lessonLink: "#"
      },
      {
        initials: "JR",
        name: "Justin Richardson",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "-",
        date: "February 29, 2012",
        score: 100,
        quizType: "Exam",
        lessonLink: "#"
      },
      {
        initials: "NT",
        name: "Nicholas Tanner",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "-",
        date: "February 29, 2012",
        score: 100,
        quizType: "Quiz",
        lessonLink: "#"
      },
      {
        initials: "CM",
        name: "Crystal Mays",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "DPS-Adaptive-C",
        date: "February 29, 2012",
        score: 65,
        quizType: "Exam",
        lessonLink: "#"
      },
      {
        initials: "MG",
        name: "Mary Garcia",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "-",
        date: "February 29, 2012",
        score: 60,
        quizType: "Quiz",
        lessonLink: "#"
      },
      {
        initials: "MR",
        name: "Megan Roberts",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "-",
        date: "February 29, 2012",
        score: 48,
        quizType: "Exam",
        lessonLink: "#"
      },
      {
        initials: "JO",
        name: "Joseph Oliver",
        studentId: "STD-293012302-12320",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "-",
        date: "February 29, 2012",
        score: 60,
        quizType: "Quiz",
        lessonLink: "#"
      },
      {
        initials: "KB",
        name: "Kobe Bryant",
        studentId: "STD-293012302-12321",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "DPS-Adaptive-C",
        date: "February 29, 2012",
        score: 95,
        quizType: "Quiz",
        lessonLink: "#"
      },
      {
        initials: "LB",
        name: "LeBron James",
        studentId: "STD-293012302-12322",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "-",
        date: "February 29, 2012",
        score: 88,
        quizType: "Exam",
        lessonLink: "#"
      },
      {
        initials: "SC",
        name: "Stephen Curry",
        studentId: "STD-293012302-12323",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "-",
        date: "February 29, 2012",
        score: 74,
        quizType: "Quiz",
        lessonLink: "#"
      },
      {
        initials: "KD",
        name: "Kevin Durant",
        studentId: "STD-293012302-12324",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "DPS-Adaptive-C",
        date: "February 29, 2012",
        score: 82,
        quizType: "Exam",
        lessonLink: "#"
      },
      {
        initials: "AD",
        name: "Anthony Davis",
        studentId: "STD-293012302-12325",
        book: "Python Game Dev",
        lessonName: "Lesson 4 - Canvas Setup",
        className: "-",
        date: "February 29, 2012",
        score: 55,
        quizType: "Quiz",
        lessonLink: "#"
      }
    ]);
    const classOptions = computed(() => {
      const allItems = activeTab.value === "project" ? mockProjects.value : mockQuizzes.value;
      const classes = allItems.map((i) => i.className).filter((c) => c && c !== "-");
      return ["All Classes", ...new Set(classes)];
    });
    computed(() => mockProjects.value.filter((p) => p.status === "Pending").length);
    computed(() => mockQuizzes.value.filter((q) => q.status === "Pending").length);
    const resetFilter = () => {
      searchQuery.value = "";
      selectedClass.value = "All Classes";
      selectedQuizType.value = "All Types";
    };
    const headers = computed(() => {
      if (activeTab.value === "project") {
        return [
          { title: "Student Name", key: "student" },
          { title: "Book / Session", key: "book" },
          { title: "LESSON & CLASS", key: "lesson" },
          { title: "Date", key: "date" },
          { title: "Status", key: "status" },
          { title: "Action", key: "action", sortable: false, align: "center", width: "120px" }
        ];
      } else {
        return [
          { title: "Student Name", key: "student" },
          { title: "Book / Session", key: "book" },
          { title: "LESSON & CLASS", key: "lesson" },
          { title: "Date", key: "date" },
          { title: "Score", key: "score" },
          { title: "Action", key: "action", sortable: false, align: "center", width: "120px" }
        ];
      }
    });
    const filteredItems = computed(() => {
      const baseList = activeTab.value === "project" ? mockProjects.value : mockQuizzes.value;
      return baseList.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || item.studentId.toLowerCase().includes(searchQuery.value.toLowerCase()) || item.book.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesClass = selectedClass.value === "All Classes" || item.className === selectedClass.value;
        const matchesQuizType = activeTab.value === "project" || selectedQuizType.value === "All Types" || item.quizType === selectedQuizType.value;
        return matchesSearch && matchesClass && matchesQuizType;
      });
    });
    const groupedByStudent = computed(() => {
      const items = filteredItems.value;
      const groups = {};
      items.forEach((item) => {
        const key = `${item.studentId}-${item.name}`;
        if (!groups[key]) {
          groups[key] = {
            name: item.name,
            initials: item.initials || item.name.split(" ").map((n) => n[0]).join("").toUpperCase(),
            studentId: item.studentId,
            className: item.className && item.className !== "-" ? item.className : "DPS-Adaptive-C",
            projects: []
          };
        }
        groups[key].projects.push(item);
      });
      return Object.values(groups);
    });
    const groupedByClass = computed(() => {
      const items = filteredItems.value;
      const groups = {};
      items.forEach((item) => {
        const key = item.className && item.className !== "-" ? item.className : "DPS-Adaptive-C";
        if (!groups[key]) {
          groups[key] = {
            className: key,
            projects: []
          };
        }
        groups[key].projects.push(item);
      });
      return Object.values(groups);
    });
    const expandedStudents = ref({});
    const expandedRooms = ref({});
    const isStudentExpanded = (key) => {
      return expandedStudents.value[key] !== false;
    };
    const toggleStudentExpand = (key) => {
      expandedStudents.value[key] = !isStudentExpanded(key);
    };
    const isRoomExpanded = (key) => {
      return expandedRooms.value[key] !== false;
    };
    const toggleRoomExpand = (key) => {
      expandedRooms.value[key] = !isRoomExpanded(key);
    };
    const currentPage = ref(1);
    const itemsPerPageCustom = ref(10);
    const paginationItemsLength = computed(() => {
      if (viewType.value === "team") {
        return groupedByStudent.value.length;
      } else if (viewType.value === "room") {
        return groupedByClass.value.length;
      }
      return 0;
    });
    const startIndex = computed(() => (currentPage.value - 1) * itemsPerPageCustom.value);
    const stopIndex = computed(() => Math.min(paginationItemsLength.value, startIndex.value + itemsPerPageCustom.value));
    const pageCount = computed(() => Math.ceil(paginationItemsLength.value / itemsPerPageCustom.value));
    provide(Symbol.for("vuetify:data-table-pagination"), {
      page: currentPage,
      itemsPerPage: itemsPerPageCustom,
      startIndex,
      stopIndex,
      pageCount,
      itemsLength: paginationItemsLength,
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
    const paginatedGroupedByStudent = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPageCustom.value;
      const end = start + itemsPerPageCustom.value;
      return groupedByStudent.value.slice(start, end);
    });
    const paginatedGroupedByClass = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPageCustom.value;
      const end = start + itemsPerPageCustom.value;
      return groupedByClass.value.slice(start, end);
    });
    watch([activeTab, searchQuery, selectedClass, selectedQuizType, viewType], () => {
      currentPage.value = 1;
    });
    const isApproveDialogOpen = ref(false);
    const isRejectDialogOpen = ref(false);
    const selectedItem = ref(null);
    const showScoreHistory = ref(false);
    const selectedHistoryItem = ref(null);
    const buildScoreHistory = (item) => {
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
          date: item.date,
          timeSpent: "8m 20s",
          score: Math.max(item.score - 20, 0),
          maxScore: 100,
          points: Math.max(item.score - 20, 0),
          questions: buildQuestions(3)
        },
        {
          label: "Last Score",
          icon: "ri-time-line",
          date: item.date,
          timeSpent: "6m 45s",
          score: item.score,
          maxScore: 100,
          points: item.score,
          questions: buildQuestions(4)
        },
        {
          label: "Best Score",
          icon: "ri-trophy-line",
          date: item.date,
          timeSpent: "5m 30s",
          score: Math.min(item.score + 10, 100),
          maxScore: 100,
          points: Math.min(item.score + 10, 100),
          questions: buildQuestions(5)
        }
      ];
    };
    const scoreHistoryAttempts = computed(
      () => selectedHistoryItem.value ? buildScoreHistory(selectedHistoryItem.value) : []
    );
    const openScoreHistory = (item) => {
      selectedHistoryItem.value = item;
      showScoreHistory.value = true;
    };
    const handleApproveClick = (item) => {
      selectedItem.value = item;
      isApproveDialogOpen.value = true;
    };
    const handleRejectClick = (item) => {
      selectedItem.value = item;
      isRejectDialogOpen.value = true;
    };
    const confirmApprove = () => {
      if (selectedItem.value) {
        approveItem(selectedItem.value);
        selectedItem.value = null;
      }
    };
    const confirmReject = () => {
      if (selectedItem.value) {
        rejectItem(selectedItem.value);
        selectedItem.value = null;
      }
    };
    const approveItem = (item) => {
      item.status = "Approved";
      snackbarColor.value = "success";
      snackbarText.value = `Approved project for ${item.name} successfully.`;
      showSnackbar.value = true;
    };
    const rejectItem = (item) => {
      item.status = "Rejected";
      snackbarColor.value = "error";
      snackbarText.value = `Rejected project for ${item.name}.`;
      showSnackbar.value = true;
    };
    const getStatusColor = (status) => {
      if (status === "Pending") return "warning";
      if (status === "Approved") return "success";
      if (status === "Rejected") return "error";
      return "secondary";
    };
    const getScoreColor = (score) => {
      if (score >= 80) return "success";
      if (score >= 60) return "warning";
      return "error";
    };
    const initialLoading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ScoreHistoryDialog = __nuxt_component_1;
      const _component_ApproveProjectDialog = __nuxt_component_2;
      const _component_RejectProjectDialog = __nuxt_component_3;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-56597151><div class="mb-5" data-v-56597151><h4 class="text-h4 font-weight-medium text-high-emphasis" data-v-56597151> Assessment </h4><p class="text-body-1 text-medium-emphasis mb-0" data-v-56597151> Quiz results and project approvals across your sessions </p></div>`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(activeTab),
        "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
        class: "v-tabs-bordered mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTab, { value: "project" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    start: "",
                    icon: "ri-file-text-line",
                    class: "me-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` Project Approvals <span class="${ssrRenderClass([unref(activeTab) === "project" ? "bg-error text-white" : "bg-secondary text-white", "count-badge ms-2"])}" data-v-56597151${_scopeId2}>${ssrInterpolate(unref(mockProjects).filter((p) => p.status === "Pending").length + 12)}</span>`);
                } else {
                  return [
                    createVNode(VIcon, {
                      start: "",
                      icon: "ri-file-text-line",
                      class: "me-2"
                    }),
                    createTextVNode(" Project Approvals "),
                    createVNode("span", {
                      class: ["count-badge ms-2", unref(activeTab) === "project" ? "bg-error text-white" : "bg-secondary text-white"]
                    }, toDisplayString(unref(mockProjects).filter((p) => p.status === "Pending").length + 12), 3)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, { value: "quiz" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    start: "",
                    icon: "ri-todo-line",
                    class: "me-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` Quiz &amp; Exams <span class="${ssrRenderClass([unref(activeTab) === "quiz" ? "bg-primary text-white" : "bg-secondary text-white", "count-badge ms-2"])}" data-v-56597151${_scopeId2}> 15 </span>`);
                } else {
                  return [
                    createVNode(VIcon, {
                      start: "",
                      icon: "ri-todo-line",
                      class: "me-2"
                    }),
                    createTextVNode(" Quiz & Exams "),
                    createVNode("span", {
                      class: ["count-badge ms-2", unref(activeTab) === "quiz" ? "bg-primary text-white" : "bg-secondary text-white"]
                    }, " 15 ", 2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTab, { value: "project" }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    start: "",
                    icon: "ri-file-text-line",
                    class: "me-2"
                  }),
                  createTextVNode(" Project Approvals "),
                  createVNode("span", {
                    class: ["count-badge ms-2", unref(activeTab) === "project" ? "bg-error text-white" : "bg-secondary text-white"]
                  }, toDisplayString(unref(mockProjects).filter((p) => p.status === "Pending").length + 12), 3)
                ]),
                _: 1
              }),
              createVNode(VTab, { value: "quiz" }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    start: "",
                    icon: "ri-todo-line",
                    class: "me-2"
                  }),
                  createTextVNode(" Quiz & Exams "),
                  createVNode("span", {
                    class: ["count-badge ms-2", unref(activeTab) === "quiz" ? "bg-primary text-white" : "bg-secondary text-white"]
                  }, " 15 ", 2)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex align-center justify-space-between flex-wrap gap-4 py-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center flex-wrap gap-4 flex-grow-1" data-v-56597151${_scopeId2}><div style="${ssrRenderStyle({ "width": "240px" })}" data-v-56597151${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(searchQuery),
                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                    placeholder: "Search student",
                    "prepend-inner-icon": "ri-search-line",
                    clearable: "",
                    "hide-details": "",
                    density: "compact",
                    variant: "outlined"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle({ "width": "240px" })}" data-v-56597151${_scopeId2}>`);
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: unref(selectedClass),
                    "onUpdate:modelValue": ($event) => isRef(selectedClass) ? selectedClass.value = $event : null,
                    label: "Class",
                    placeholder: "All Classes",
                    items: unref(classOptions),
                    clearable: "",
                    "hide-details": "",
                    density: "compact",
                    variant: "outlined"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(activeTab) === "quiz") {
                    _push3(`<div style="${ssrRenderStyle({ "width": "240px" })}" data-v-56597151${_scopeId2}>`);
                    _push3(ssrRenderComponent(VSelect, {
                      modelValue: unref(selectedQuizType),
                      "onUpdate:modelValue": ($event) => isRef(selectedQuizType) ? selectedQuizType.value = $event : null,
                      label: "Quiz Type",
                      placeholder: "All Types",
                      items: quizTypeOptions,
                      clearable: "",
                      "hide-details": "",
                      density: "compact",
                      variant: "outlined"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "text",
                    color: "primary",
                    disabled: unref(searchQuery) === "" && unref(selectedClass) === "All Classes" && unref(selectedQuizType) === "All Types",
                    onClick: resetFilter
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
                  _push3(ssrRenderComponent(VBtnToggle, {
                    modelValue: unref(viewType),
                    "onUpdate:modelValue": ($event) => isRef(viewType) ? viewType.value = $event : null,
                    mandatory: "",
                    class: "custom-toggle-group"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          value: "list",
                          icon: "ri-list-unordered"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "team",
                          icon: "ri-team-line"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "room",
                          icon: "ri-door-closed-line"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            value: "list",
                            icon: "ri-list-unordered"
                          }),
                          createVNode(VBtn, {
                            value: "team",
                            icon: "ri-team-line"
                          }),
                          createVNode(VBtn, {
                            value: "room",
                            icon: "ri-door-closed-line"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center flex-wrap gap-4 flex-grow-1" }, [
                      createVNode("div", { style: { "width": "240px" } }, [
                        createVNode(VTextField, {
                          modelValue: unref(searchQuery),
                          "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                          placeholder: "Search student",
                          "prepend-inner-icon": "ri-search-line",
                          clearable: "",
                          "hide-details": "",
                          density: "compact",
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { style: { "width": "240px" } }, [
                        createVNode(VSelect, {
                          modelValue: unref(selectedClass),
                          "onUpdate:modelValue": ($event) => isRef(selectedClass) ? selectedClass.value = $event : null,
                          label: "Class",
                          placeholder: "All Classes",
                          items: unref(classOptions),
                          clearable: "",
                          "hide-details": "",
                          density: "compact",
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      unref(activeTab) === "quiz" ? (openBlock(), createBlock("div", {
                        key: 0,
                        style: { "width": "240px" }
                      }, [
                        createVNode(VSelect, {
                          modelValue: unref(selectedQuizType),
                          "onUpdate:modelValue": ($event) => isRef(selectedQuizType) ? selectedQuizType.value = $event : null,
                          label: "Quiz Type",
                          placeholder: "All Types",
                          items: quizTypeOptions,
                          clearable: "",
                          "hide-details": "",
                          density: "compact",
                          variant: "outlined"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])) : createCommentVNode("", true),
                      createVNode(VBtn, {
                        variant: "text",
                        color: "primary",
                        disabled: unref(searchQuery) === "" && unref(selectedClass) === "All Classes" && unref(selectedQuizType) === "All Types",
                        onClick: resetFilter
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset Filter ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    createVNode(VBtnToggle, {
                      modelValue: unref(viewType),
                      "onUpdate:modelValue": ($event) => isRef(viewType) ? viewType.value = $event : null,
                      mandatory: "",
                      class: "custom-toggle-group"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          value: "list",
                          icon: "ri-list-unordered"
                        }),
                        createVNode(VBtn, {
                          value: "team",
                          icon: "ri-team-line"
                        }),
                        createVNode(VBtn, {
                          value: "room",
                          icon: "ri-door-closed-line"
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
            if (unref(initialLoading)) {
              _push2(`<div class="pa-6" data-v-56597151${_scopeId}><!--[-->`);
              ssrRenderList(3, (n) => {
                _push2(ssrRenderComponent(VSkeletonLoader, {
                  key: n,
                  type: "table-row-divider@4",
                  class: "mb-2"
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else if (unref(viewType) === "list") {
              _push2(ssrRenderComponent(VDataTable, {
                headers: unref(headers),
                items: unref(filteredItems),
                "items-per-page": 10,
                class: "text-no-wrap"
              }, {
                "item.student": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex align-center py-2" data-v-56597151${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      size: "34",
                      class: "me-3",
                      color: "grey-50"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="text-caption font-weight-medium" data-v-56597151${_scopeId3}>${ssrInterpolate(item.initials)}</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(item.initials), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="d-flex flex-column" data-v-56597151${_scopeId2}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-56597151${_scopeId2}>${ssrInterpolate(item.name)}</span><span class="text-body-2 text-medium-emphasis" data-v-56597151${_scopeId2}>${ssrInterpolate(item.studentId)}</span></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex align-center py-2" }, [
                        createVNode(VAvatar, {
                          size: "34",
                          class: "me-3",
                          color: "grey-50"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(item.initials), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "d-flex flex-column" }, [
                          createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.name), 1),
                          createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.studentId), 1)
                        ])
                      ])
                    ];
                  }
                }),
                "item.lesson": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex flex-column py-2" data-v-56597151${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: item.lessonLink,
                      class: "text-primary text-decoration-underline font-weight-medium text-body-1"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.lessonName)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.lessonName), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<span class="text-body-2 text-medium-emphasis" data-v-56597151${_scopeId2}>${ssrInterpolate(item.className || "-")}</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex flex-column py-2" }, [
                        createVNode(_component_NuxtLink, {
                          to: item.lessonLink,
                          class: "text-primary text-decoration-underline font-weight-medium text-body-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.lessonName), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.className || "-"), 1)
                      ])
                    ];
                  }
                }),
                "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VChip, {
                      color: getStatusColor(item.status),
                      variant: "tonal",
                      size: "small",
                      class: "font-weight-medium text-capitalize"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.status)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.status), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VChip, {
                        color: getStatusColor(item.status),
                        variant: "tonal",
                        size: "small",
                        class: "font-weight-medium text-capitalize"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.status), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ];
                  }
                }),
                "item.score": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VChip, {
                      color: getScoreColor(item.score),
                      variant: "tonal",
                      size: "small",
                      class: "font-weight-medium"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.score)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.score), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VChip, {
                        color: getScoreColor(item.score),
                        variant: "tonal",
                        size: "small",
                        class: "font-weight-medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.score), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ];
                  }
                }),
                "item.action": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex justify-center gap-2" data-v-56597151${_scopeId2}>`);
                    if (unref(activeTab) === "project") {
                      _push3(`<!--[-->`);
                      _push3(ssrRenderComponent(VTooltip, {
                        text: "Approve",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VBtn, mergeProps(props, {
                              icon: "ri-check-line",
                              color: "success",
                              variant: "outlined",
                              size: "small",
                              class: "action-btn",
                              disabled: item.status === "Approved",
                              onClick: ($event) => handleApproveClick(item)
                            }), null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VBtn, mergeProps(props, {
                                icon: "ri-check-line",
                                color: "success",
                                variant: "outlined",
                                size: "small",
                                class: "action-btn",
                                disabled: item.status === "Approved",
                                onClick: ($event) => handleApproveClick(item)
                              }), null, 16, ["disabled", "onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(VTooltip, {
                        text: "Reject",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VBtn, mergeProps(props, {
                              icon: "ri-close-circle-line",
                              color: "error",
                              variant: "outlined",
                              size: "small",
                              class: "action-btn",
                              disabled: item.status === "Rejected",
                              onClick: ($event) => handleRejectClick(item)
                            }), null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VBtn, mergeProps(props, {
                                icon: "ri-close-circle-line",
                                color: "error",
                                variant: "outlined",
                                size: "small",
                                class: "action-btn",
                                disabled: item.status === "Rejected",
                                onClick: ($event) => handleRejectClick(item)
                              }), null, 16, ["disabled", "onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<!--]-->`);
                    } else {
                      _push3(ssrRenderComponent(VTooltip, {
                        text: "History",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VBtn, mergeProps(props, {
                              icon: "ri-history-line",
                              variant: "outlined",
                              size: "small",
                              class: "action-btn",
                              onClick: ($event) => openScoreHistory(item)
                            }), null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VBtn, mergeProps(props, {
                                icon: "ri-history-line",
                                variant: "outlined",
                                size: "small",
                                class: "action-btn",
                                onClick: ($event) => openScoreHistory(item)
                              }), null, 16, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex justify-center gap-2" }, [
                        unref(activeTab) === "project" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode(VTooltip, {
                            text: "Approve",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, mergeProps(props, {
                                icon: "ri-check-line",
                                color: "success",
                                variant: "outlined",
                                size: "small",
                                class: "action-btn",
                                disabled: item.status === "Approved",
                                onClick: ($event) => handleApproveClick(item)
                              }), null, 16, ["disabled", "onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VTooltip, {
                            text: "Reject",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, mergeProps(props, {
                                icon: "ri-close-circle-line",
                                color: "error",
                                variant: "outlined",
                                size: "small",
                                class: "action-btn",
                                disabled: item.status === "Rejected",
                                onClick: ($event) => handleRejectClick(item)
                              }), null, 16, ["disabled", "onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ], 64)) : (openBlock(), createBlock(VTooltip, {
                          key: 1,
                          text: "History",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, mergeProps(props, {
                              icon: "ri-history-line",
                              variant: "outlined",
                              size: "small",
                              class: "action-btn",
                              onClick: ($event) => openScoreHistory(item)
                            }), null, 16, ["onClick"])
                          ]),
                          _: 2
                        }, 1024))
                      ])
                    ];
                  }
                }),
                "no-data": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="py-6 text-center text-medium-emphasis" data-v-56597151${_scopeId2}> No student assessment records found. </div>`);
                  } else {
                    return [
                      createVNode("div", { class: "py-6 text-center text-medium-emphasis" }, " No student assessment records found. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (unref(viewType) === "team") {
              _push2(`<div class="pa-5 bg-surface" data-v-56597151${_scopeId}><div class="d-flex align-center justify-space-between mb-4 flex-wrap gap-2" data-v-56597151${_scopeId}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-56597151${_scopeId}>Student List</span><span class="text-body-2 text-medium-emphasis" data-v-56597151${_scopeId}>${ssrInterpolate(unref(filteredItems).length > 0 ? unref(groupedByStudent).length : 0)} students displayed</span></div>`);
              if (unref(groupedByStudent).length === 0) {
                _push2(`<div class="py-12 text-center text-medium-emphasis border rounded-lg bg-surface" data-v-56597151${_scopeId}> No student assessment records found. </div>`);
              } else {
                _push2(`<div class="d-flex flex-column gap-4" data-v-56597151${_scopeId}><!--[-->`);
                ssrRenderList(unref(paginatedGroupedByStudent), (student) => {
                  _push2(`<div class="student-card border rounded-lg overflow-hidden bg-surface" style="${ssrRenderStyle({ "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" })}" data-v-56597151${_scopeId}><div class="d-flex align-center justify-space-between pa-4 cursor-pointer hover-header" data-v-56597151${_scopeId}><div class="d-flex align-center flex-wrap ga-2 flex-grow-1" data-v-56597151${_scopeId}>`);
                  _push2(ssrRenderComponent(VAvatar, {
                    size: "34",
                    color: "grey-50",
                    class: "border",
                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<span class="text-caption font-weight-medium text-high-emphasis" data-v-56597151${_scopeId2}>${ssrInterpolate(student.initials)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(student.initials), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`<span class="text-body-1 font-weight-medium text-high-emphasis" data-v-56597151${_scopeId}>${ssrInterpolate(student.name)}</span><span class="text-body-2 text-medium-emphasis" data-v-56597151${_scopeId}>${ssrInterpolate(student.studentId)}</span><span class="text-medium-emphasis d-none d-sm-inline" data-v-56597151${_scopeId}>•</span><span class="text-body-2 text-medium-emphasis" data-v-56597151${_scopeId}>${ssrInterpolate(student.className)}</span>`);
                  _push2(ssrRenderComponent(VChip, {
                    color: "info",
                    variant: "tonal",
                    size: "small",
                    class: "font-weight-medium ms-sm-2"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(student.projects.length)} ${ssrInterpolate(unref(activeTab) === "project" ? "Projects" : "Quizzes")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(student.projects.length) + " " + toDisplayString(unref(activeTab) === "project" ? "Projects" : "Quizzes"), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                  _push2(ssrRenderComponent(VBtn, {
                    icon: "",
                    variant: "text",
                    size: "small",
                    color: "secondary",
                    class: "ms-2"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(VIcon, {
                          icon: isStudentExpanded(`${student.studentId}-${student.name}`) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: isStudentExpanded(`${student.studentId}-${student.name}`) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                          }, null, 8, ["icon"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                  _push2(ssrRenderComponent(VExpandTransition, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div style="${ssrRenderStyle([
                          isStudentExpanded(`${student.studentId}-${student.name}`) ? null : { display: "none" },
                          { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                        ])}" class="pa-4 bg-grey-light border-t" data-v-56597151${_scopeId2}><div class="d-flex flex-column gap-4" data-v-56597151${_scopeId2}><!--[-->`);
                        ssrRenderList(student.projects, (item, idx) => {
                          _push3(`<div class="submission-item bg-surface border rounded-lg pa-4 d-flex align-center justify-space-between flex-wrap gap-4" style="${ssrRenderStyle({ "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" })}" data-v-56597151${_scopeId2}><div class="d-flex align-center gap-3 flex-grow-1" style="${ssrRenderStyle({ "min-width": "200px" })}" data-v-56597151${_scopeId2}>`);
                          _push3(ssrRenderComponent(VIcon, {
                            icon: "ri-book-2-line",
                            color: "primary",
                            size: "24"
                          }, null, _parent3, _scopeId2));
                          _push3(`<div class="d-flex flex-column" data-v-56597151${_scopeId2}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-56597151${_scopeId2}>${ssrInterpolate(item.book)}</span><span class="text-body-2 text-medium-emphasis" data-v-56597151${_scopeId2}>${ssrInterpolate(item.lessonName)}</span></div></div><div style="${ssrRenderStyle({ "min-width": "90px" })}" data-v-56597151${_scopeId2}>`);
                          if (unref(activeTab) === "project") {
                            _push3(ssrRenderComponent(VChip, {
                              color: getStatusColor(item.status),
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium text-capitalize"
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`${ssrInterpolate(item.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                          } else {
                            _push3(`<div class="d-flex align-center gap-2" data-v-56597151${_scopeId2}><span class="text-body-2 text-medium-emphasis" data-v-56597151${_scopeId2}>Score</span>`);
                            _push3(ssrRenderComponent(VChip, {
                              color: getScoreColor(item.score),
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium"
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`${ssrInterpolate(item.score)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.score), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                            _push3(`</div>`);
                          }
                          _push3(`</div>`);
                          _push3(ssrRenderComponent(VDivider, {
                            vertical: "",
                            class: "d-none d-md-block align-self-stretch my-1",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                          }, null, _parent3, _scopeId2));
                          _push3(`<div class="d-flex flex-column" style="${ssrRenderStyle({ "min-width": "120px" })}" data-v-56597151${_scopeId2}><span class="text-body-2 text-medium-emphasis" data-v-56597151${_scopeId2}>Date</span><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-56597151${_scopeId2}>${ssrInterpolate(item.date)}</span></div>`);
                          _push3(ssrRenderComponent(VDivider, {
                            vertical: "",
                            class: "d-none d-md-block align-self-stretch my-1",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                          }, null, _parent3, _scopeId2));
                          _push3(`<div class="d-flex gap-2 align-center flex-wrap" data-v-56597151${_scopeId2}>`);
                          if (unref(activeTab) === "project") {
                            _push3(`<!--[-->`);
                            _push3(ssrRenderComponent(VBtn, {
                              color: "primary",
                              rounded: "xl",
                              class: "px-5 font-weight-medium text-capitalize",
                              disabled: item.status === "Approved",
                              size: "small",
                              onClick: ($event) => handleApproveClick(item)
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(ssrRenderComponent(VIcon, {
                                    start: "",
                                    icon: "ri-check-line"
                                  }, null, _parent4, _scopeId3));
                                  _push4(` Approve `);
                                } else {
                                  return [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "ri-check-line"
                                    }),
                                    createTextVNode(" Approve ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                            _push3(ssrRenderComponent(VBtn, {
                              color: "error",
                              variant: "outlined",
                              rounded: "xl",
                              class: "px-5 font-weight-medium text-capitalize",
                              disabled: item.status === "Rejected",
                              size: "small",
                              style: { "border-color": "rgba(var(--v-theme-error), 0.5) !important" },
                              onClick: ($event) => handleRejectClick(item)
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(ssrRenderComponent(VIcon, {
                                    start: "",
                                    icon: "ri-close-line"
                                  }, null, _parent4, _scopeId3));
                                  _push4(` Reject `);
                                } else {
                                  return [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "ri-close-line"
                                    }),
                                    createTextVNode(" Reject ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                            _push3(`<!--]-->`);
                          } else {
                            _push3(ssrRenderComponent(VBtn, {
                              variant: "outlined",
                              color: "primary",
                              size: "small",
                              rounded: "xl",
                              class: "px-3 font-weight-medium text-capitalize"
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(ssrRenderComponent(VIcon, {
                                    start: "",
                                    icon: "ri-history-line"
                                  }, null, _parent4, _scopeId3));
                                  _push4(` History `);
                                } else {
                                  return [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "ri-history-line"
                                    }),
                                    createTextVNode(" History ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                          }
                          _push3(`</div></div>`);
                        });
                        _push3(`<!--]--></div></div>`);
                      } else {
                        return [
                          withDirectives(createVNode("div", {
                            class: "pa-4 bg-grey-light border-t",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                          }, [
                            createVNode("div", { class: "d-flex flex-column gap-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(student.projects, (item, idx) => {
                                return openBlock(), createBlock("div", {
                                  key: idx,
                                  class: "submission-item bg-surface border rounded-lg pa-4 d-flex align-center justify-space-between flex-wrap gap-4",
                                  style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                }, [
                                  createVNode("div", {
                                    class: "d-flex align-center gap-3 flex-grow-1",
                                    style: { "min-width": "200px" }
                                  }, [
                                    createVNode(VIcon, {
                                      icon: "ri-book-2-line",
                                      color: "primary",
                                      size: "24"
                                    }),
                                    createVNode("div", { class: "d-flex flex-column" }, [
                                      createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.book), 1),
                                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.lessonName), 1)
                                    ])
                                  ]),
                                  createVNode("div", { style: { "min-width": "90px" } }, [
                                    unref(activeTab) === "project" ? (openBlock(), createBlock(VChip, {
                                      key: 0,
                                      color: getStatusColor(item.status),
                                      variant: "tonal",
                                      size: "small",
                                      class: "font-weight-medium text-capitalize"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.status), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "d-flex align-center gap-2"
                                    }, [
                                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, "Score"),
                                      createVNode(VChip, {
                                        color: getScoreColor(item.score),
                                        variant: "tonal",
                                        size: "small",
                                        class: "font-weight-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.score), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]))
                                  ]),
                                  createVNode(VDivider, {
                                    vertical: "",
                                    class: "d-none d-md-block align-self-stretch my-1",
                                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                  }),
                                  createVNode("div", {
                                    class: "d-flex flex-column",
                                    style: { "min-width": "120px" }
                                  }, [
                                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, "Date"),
                                    createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.date), 1)
                                  ]),
                                  createVNode(VDivider, {
                                    vertical: "",
                                    class: "d-none d-md-block align-self-stretch my-1",
                                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                  }),
                                  createVNode("div", { class: "d-flex gap-2 align-center flex-wrap" }, [
                                    unref(activeTab) === "project" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        rounded: "xl",
                                        class: "px-5 font-weight-medium text-capitalize",
                                        disabled: item.status === "Approved",
                                        size: "small",
                                        onClick: ($event) => handleApproveClick(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "ri-check-line"
                                          }),
                                          createTextVNode(" Approve ")
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "onClick"]),
                                      createVNode(VBtn, {
                                        color: "error",
                                        variant: "outlined",
                                        rounded: "xl",
                                        class: "px-5 font-weight-medium text-capitalize",
                                        disabled: item.status === "Rejected",
                                        size: "small",
                                        style: { "border-color": "rgba(var(--v-theme-error), 0.5) !important" },
                                        onClick: ($event) => handleRejectClick(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "ri-close-line"
                                          }),
                                          createTextVNode(" Reject ")
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "onClick"])
                                    ], 64)) : (openBlock(), createBlock(VBtn, {
                                      key: 1,
                                      variant: "outlined",
                                      color: "primary",
                                      size: "small",
                                      rounded: "xl",
                                      class: "px-3 font-weight-medium text-capitalize"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "ri-history-line"
                                        }),
                                        createTextVNode(" History ")
                                      ]),
                                      _: 1
                                    }))
                                  ])
                                ]);
                              }), 128))
                            ])
                          ], 512), [
                            [vShow, isStudentExpanded(`${student.studentId}-${student.name}`)]
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                });
                _push2(`<!--]-->`);
                _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(VDataTableFooter, { "items-per-page-options": [5, 10, 20] }, null, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`</div>`);
            } else if (unref(viewType) === "room") {
              _push2(`<div class="pa-5 bg-surface" data-v-56597151${_scopeId}><div class="d-flex align-center justify-space-between mb-4 flex-wrap gap-2" data-v-56597151${_scopeId}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-56597151${_scopeId}>Class List</span><span class="text-body-2 text-medium-emphasis" data-v-56597151${_scopeId}>${ssrInterpolate(unref(filteredItems).length > 0 ? unref(groupedByClass).length : 0)} classes displayed</span></div>`);
              if (unref(groupedByClass).length === 0) {
                _push2(`<div class="py-12 text-center text-medium-emphasis border rounded-lg bg-surface" data-v-56597151${_scopeId}> No student assessment records found. </div>`);
              } else {
                _push2(`<div class="d-flex flex-column gap-4" data-v-56597151${_scopeId}><!--[-->`);
                ssrRenderList(unref(paginatedGroupedByClass), (room) => {
                  _push2(`<div class="room-card border rounded-lg overflow-hidden bg-surface" style="${ssrRenderStyle({ "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" })}" data-v-56597151${_scopeId}><div class="d-flex align-center justify-space-between pa-4 cursor-pointer hover-header" data-v-56597151${_scopeId}><div class="d-flex align-center flex-wrap ga-2 flex-grow-1" data-v-56597151${_scopeId}>`);
                  _push2(ssrRenderComponent(VAvatar, {
                    size: "34",
                    class: "bg-primary-opacity-lighter border",
                    style: { "border-color": "rgba(var(--v-theme-primary), 0.15) !important" }
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(VIcon, {
                          icon: "ri-door-closed-line",
                          color: "primary"
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: "ri-door-closed-line",
                            color: "primary"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`<span class="text-body-1 font-weight-medium text-high-emphasis" data-v-56597151${_scopeId}>${ssrInterpolate(room.className)}</span>`);
                  _push2(ssrRenderComponent(VChip, {
                    color: "info",
                    variant: "tonal",
                    size: "small",
                    class: "font-weight-medium ms-sm-2"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(room.projects.length)} Submissions `);
                      } else {
                        return [
                          createTextVNode(toDisplayString(room.projects.length) + " Submissions ", 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                  _push2(ssrRenderComponent(VBtn, {
                    icon: "",
                    variant: "text",
                    size: "small",
                    color: "secondary",
                    class: "ms-2"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(VIcon, {
                          icon: isRoomExpanded(room.className) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: isRoomExpanded(room.className) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                          }, null, 8, ["icon"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                  _push2(ssrRenderComponent(VExpandTransition, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div style="${ssrRenderStyle([
                          isRoomExpanded(room.className) ? null : { display: "none" },
                          { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                        ])}" class="pa-4 bg-grey-light border-t" data-v-56597151${_scopeId2}><div class="d-flex flex-column gap-4" data-v-56597151${_scopeId2}><!--[-->`);
                        ssrRenderList(room.projects, (item, idx) => {
                          _push3(`<div class="submission-item bg-surface border rounded-lg pa-4 d-flex align-center justify-space-between flex-wrap gap-4" style="${ssrRenderStyle({ "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" })}" data-v-56597151${_scopeId2}><div class="d-flex align-center gap-3 flex-grow-1" style="${ssrRenderStyle({ "min-width": "200px" })}" data-v-56597151${_scopeId2}>`);
                          _push3(ssrRenderComponent(VAvatar, {
                            color: "grey-50",
                            class: "border",
                            size: "40",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`<span class="text-caption font-weight-medium text-high-emphasis" data-v-56597151${_scopeId3}>${ssrInterpolate(item.initials)}</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(item.initials), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                          _push3(`<div class="d-flex flex-column" data-v-56597151${_scopeId2}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-56597151${_scopeId2}>${ssrInterpolate(item.name)}</span><span class="text-body-2 text-medium-emphasis" data-v-56597151${_scopeId2}>${ssrInterpolate(item.studentId)} • ${ssrInterpolate(item.book)}</span></div></div><div class="d-flex flex-column" style="${ssrRenderStyle({ "min-width": "150px" })}" data-v-56597151${_scopeId2}><span class="text-body-2 text-medium-emphasis" data-v-56597151${_scopeId2}>Lesson</span><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-56597151${_scopeId2}>${ssrInterpolate(item.lessonName)}</span></div><div style="${ssrRenderStyle({ "min-width": "90px" })}" data-v-56597151${_scopeId2}>`);
                          if (unref(activeTab) === "project") {
                            _push3(ssrRenderComponent(VChip, {
                              color: getStatusColor(item.status),
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium text-capitalize"
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`${ssrInterpolate(item.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                          } else {
                            _push3(ssrRenderComponent(VChip, {
                              color: getScoreColor(item.score),
                              variant: "tonal",
                              size: "small",
                              class: "font-weight-medium"
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`${ssrInterpolate(item.score)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.score), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                          }
                          _push3(`</div>`);
                          _push3(ssrRenderComponent(VDivider, {
                            vertical: "",
                            class: "d-none d-md-block align-self-stretch my-1",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                          }, null, _parent3, _scopeId2));
                          _push3(`<div class="d-flex flex-column" style="${ssrRenderStyle({ "min-width": "120px" })}" data-v-56597151${_scopeId2}><span class="text-body-2 text-medium-emphasis" data-v-56597151${_scopeId2}>Date</span><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-56597151${_scopeId2}>${ssrInterpolate(item.date)}</span></div>`);
                          _push3(ssrRenderComponent(VDivider, {
                            vertical: "",
                            class: "d-none d-md-block align-self-stretch my-1",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                          }, null, _parent3, _scopeId2));
                          _push3(`<div class="d-flex gap-2 align-center flex-wrap" data-v-56597151${_scopeId2}>`);
                          if (unref(activeTab) === "project") {
                            _push3(`<!--[-->`);
                            _push3(ssrRenderComponent(VBtn, {
                              color: "primary",
                              rounded: "xl",
                              class: "px-5 font-weight-medium text-capitalize",
                              disabled: item.status === "Approved",
                              size: "small",
                              onClick: ($event) => handleApproveClick(item)
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(ssrRenderComponent(VIcon, {
                                    start: "",
                                    icon: "ri-check-line"
                                  }, null, _parent4, _scopeId3));
                                  _push4(` Approve `);
                                } else {
                                  return [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "ri-check-line"
                                    }),
                                    createTextVNode(" Approve ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                            _push3(ssrRenderComponent(VBtn, {
                              color: "error",
                              variant: "outlined",
                              rounded: "xl",
                              class: "px-5 font-weight-medium text-capitalize",
                              disabled: item.status === "Rejected",
                              size: "small",
                              style: { "border-color": "rgba(var(--v-theme-error), 0.5) !important" },
                              onClick: ($event) => handleRejectClick(item)
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(ssrRenderComponent(VIcon, {
                                    start: "",
                                    icon: "ri-close-line"
                                  }, null, _parent4, _scopeId3));
                                  _push4(` Reject `);
                                } else {
                                  return [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "ri-close-line"
                                    }),
                                    createTextVNode(" Reject ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                            _push3(`<!--]-->`);
                          } else {
                            _push3(ssrRenderComponent(VBtn, {
                              icon: "ri-history-line",
                              variant: "outlined",
                              size: "small",
                              class: "action-btn"
                            }, null, _parent3, _scopeId2));
                          }
                          _push3(`</div></div>`);
                        });
                        _push3(`<!--]--></div></div>`);
                      } else {
                        return [
                          withDirectives(createVNode("div", {
                            class: "pa-4 bg-grey-light border-t",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                          }, [
                            createVNode("div", { class: "d-flex flex-column gap-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(room.projects, (item, idx) => {
                                return openBlock(), createBlock("div", {
                                  key: idx,
                                  class: "submission-item bg-surface border rounded-lg pa-4 d-flex align-center justify-space-between flex-wrap gap-4",
                                  style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                }, [
                                  createVNode("div", {
                                    class: "d-flex align-center gap-3 flex-grow-1",
                                    style: { "min-width": "200px" }
                                  }, [
                                    createVNode(VAvatar, {
                                      color: "grey-50",
                                      class: "border",
                                      size: "40",
                                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(item.initials), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "d-flex flex-column" }, [
                                      createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.name), 1),
                                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.studentId) + " • " + toDisplayString(item.book), 1)
                                    ])
                                  ]),
                                  createVNode("div", {
                                    class: "d-flex flex-column",
                                    style: { "min-width": "150px" }
                                  }, [
                                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, "Lesson"),
                                    createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.lessonName), 1)
                                  ]),
                                  createVNode("div", { style: { "min-width": "90px" } }, [
                                    unref(activeTab) === "project" ? (openBlock(), createBlock(VChip, {
                                      key: 0,
                                      color: getStatusColor(item.status),
                                      variant: "tonal",
                                      size: "small",
                                      class: "font-weight-medium text-capitalize"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.status), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])) : (openBlock(), createBlock(VChip, {
                                      key: 1,
                                      color: getScoreColor(item.score),
                                      variant: "tonal",
                                      size: "small",
                                      class: "font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.score), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"]))
                                  ]),
                                  createVNode(VDivider, {
                                    vertical: "",
                                    class: "d-none d-md-block align-self-stretch my-1",
                                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                  }),
                                  createVNode("div", {
                                    class: "d-flex flex-column",
                                    style: { "min-width": "120px" }
                                  }, [
                                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, "Date"),
                                    createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.date), 1)
                                  ]),
                                  createVNode(VDivider, {
                                    vertical: "",
                                    class: "d-none d-md-block align-self-stretch my-1",
                                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                  }),
                                  createVNode("div", { class: "d-flex gap-2 align-center flex-wrap" }, [
                                    unref(activeTab) === "project" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        rounded: "xl",
                                        class: "px-5 font-weight-medium text-capitalize",
                                        disabled: item.status === "Approved",
                                        size: "small",
                                        onClick: ($event) => handleApproveClick(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "ri-check-line"
                                          }),
                                          createTextVNode(" Approve ")
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "onClick"]),
                                      createVNode(VBtn, {
                                        color: "error",
                                        variant: "outlined",
                                        rounded: "xl",
                                        class: "px-5 font-weight-medium text-capitalize",
                                        disabled: item.status === "Rejected",
                                        size: "small",
                                        style: { "border-color": "rgba(var(--v-theme-error), 0.5) !important" },
                                        onClick: ($event) => handleRejectClick(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "ri-close-line"
                                          }),
                                          createTextVNode(" Reject ")
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "onClick"])
                                    ], 64)) : (openBlock(), createBlock(VBtn, {
                                      key: 1,
                                      icon: "ri-history-line",
                                      variant: "outlined",
                                      size: "small",
                                      class: "action-btn"
                                    }))
                                  ])
                                ]);
                              }), 128))
                            ])
                          ], 512), [
                            [vShow, isRoomExpanded(room.className)]
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                });
                _push2(`<!--]-->`);
                _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(VDataTableFooter, { "items-per-page-options": [5, 10, 20] }, null, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(VCardText, { class: "d-flex align-center justify-space-between flex-wrap gap-4 py-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center flex-wrap gap-4 flex-grow-1" }, [
                    createVNode("div", { style: { "width": "240px" } }, [
                      createVNode(VTextField, {
                        modelValue: unref(searchQuery),
                        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                        placeholder: "Search student",
                        "prepend-inner-icon": "ri-search-line",
                        clearable: "",
                        "hide-details": "",
                        density: "compact",
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { style: { "width": "240px" } }, [
                      createVNode(VSelect, {
                        modelValue: unref(selectedClass),
                        "onUpdate:modelValue": ($event) => isRef(selectedClass) ? selectedClass.value = $event : null,
                        label: "Class",
                        placeholder: "All Classes",
                        items: unref(classOptions),
                        clearable: "",
                        "hide-details": "",
                        density: "compact",
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    unref(activeTab) === "quiz" ? (openBlock(), createBlock("div", {
                      key: 0,
                      style: { "width": "240px" }
                    }, [
                      createVNode(VSelect, {
                        modelValue: unref(selectedQuizType),
                        "onUpdate:modelValue": ($event) => isRef(selectedQuizType) ? selectedQuizType.value = $event : null,
                        label: "Quiz Type",
                        placeholder: "All Types",
                        items: quizTypeOptions,
                        clearable: "",
                        "hide-details": "",
                        density: "compact",
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])) : createCommentVNode("", true),
                    createVNode(VBtn, {
                      variant: "text",
                      color: "primary",
                      disabled: unref(searchQuery) === "" && unref(selectedClass) === "All Classes" && unref(selectedQuizType) === "All Types",
                      onClick: resetFilter
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Reset Filter ")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  createVNode(VBtnToggle, {
                    modelValue: unref(viewType),
                    "onUpdate:modelValue": ($event) => isRef(viewType) ? viewType.value = $event : null,
                    mandatory: "",
                    class: "custom-toggle-group"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        value: "list",
                        icon: "ri-list-unordered"
                      }),
                      createVNode(VBtn, {
                        value: "team",
                        icon: "ri-team-line"
                      }),
                      createVNode(VBtn, {
                        value: "room",
                        icon: "ri-door-closed-line"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              unref(initialLoading) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "pa-6"
              }, [
                (openBlock(), createBlock(Fragment, null, renderList(3, (n) => {
                  return createVNode(VSkeletonLoader, {
                    key: n,
                    type: "table-row-divider@4",
                    class: "mb-2"
                  });
                }), 64))
              ])) : unref(viewType) === "list" ? (openBlock(), createBlock(VDataTable, {
                key: 1,
                headers: unref(headers),
                items: unref(filteredItems),
                "items-per-page": 10,
                class: "text-no-wrap"
              }, {
                "item.student": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center py-2" }, [
                    createVNode(VAvatar, {
                      size: "34",
                      class: "me-3",
                      color: "grey-50"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(item.initials), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", { class: "d-flex flex-column" }, [
                      createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.name), 1),
                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.studentId), 1)
                    ])
                  ])
                ]),
                "item.lesson": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex flex-column py-2" }, [
                    createVNode(_component_NuxtLink, {
                      to: item.lessonLink,
                      class: "text-primary text-decoration-underline font-weight-medium text-body-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.lessonName), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.className || "-"), 1)
                  ])
                ]),
                "item.status": withCtx(({ item }) => [
                  createVNode(VChip, {
                    color: getStatusColor(item.status),
                    variant: "tonal",
                    size: "small",
                    class: "font-weight-medium text-capitalize"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.status), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.score": withCtx(({ item }) => [
                  createVNode(VChip, {
                    color: getScoreColor(item.score),
                    variant: "tonal",
                    size: "small",
                    class: "font-weight-medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.score), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.action": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex justify-center gap-2" }, [
                    unref(activeTab) === "project" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(VTooltip, {
                        text: "Approve",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps(props, {
                            icon: "ri-check-line",
                            color: "success",
                            variant: "outlined",
                            size: "small",
                            class: "action-btn",
                            disabled: item.status === "Approved",
                            onClick: ($event) => handleApproveClick(item)
                          }), null, 16, ["disabled", "onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VTooltip, {
                        text: "Reject",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps(props, {
                            icon: "ri-close-circle-line",
                            color: "error",
                            variant: "outlined",
                            size: "small",
                            class: "action-btn",
                            disabled: item.status === "Rejected",
                            onClick: ($event) => handleRejectClick(item)
                          }), null, 16, ["disabled", "onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ], 64)) : (openBlock(), createBlock(VTooltip, {
                      key: 1,
                      text: "History",
                      location: "top"
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(VBtn, mergeProps(props, {
                          icon: "ri-history-line",
                          variant: "outlined",
                          size: "small",
                          class: "action-btn",
                          onClick: ($event) => openScoreHistory(item)
                        }), null, 16, ["onClick"])
                      ]),
                      _: 2
                    }, 1024))
                  ])
                ]),
                "no-data": withCtx(() => [
                  createVNode("div", { class: "py-6 text-center text-medium-emphasis" }, " No student assessment records found. ")
                ]),
                _: 1
              }, 8, ["headers", "items"])) : unref(viewType) === "team" ? (openBlock(), createBlock("div", {
                key: 2,
                class: "pa-5 bg-surface"
              }, [
                createVNode("div", { class: "d-flex align-center justify-space-between mb-4 flex-wrap gap-2" }, [
                  createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Student List"),
                  createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(unref(filteredItems).length > 0 ? unref(groupedByStudent).length : 0) + " students displayed", 1)
                ]),
                unref(groupedByStudent).length === 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "py-12 text-center text-medium-emphasis border rounded-lg bg-surface"
                }, " No student assessment records found. ")) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "d-flex flex-column gap-4"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(paginatedGroupedByStudent), (student) => {
                    return openBlock(), createBlock("div", {
                      key: `${student.studentId}-${student.name}`,
                      class: "student-card border rounded-lg overflow-hidden bg-surface",
                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" }
                    }, [
                      createVNode("div", {
                        class: "d-flex align-center justify-space-between pa-4 cursor-pointer hover-header",
                        onClick: ($event) => toggleStudentExpand(`${student.studentId}-${student.name}`)
                      }, [
                        createVNode("div", { class: "d-flex align-center flex-wrap ga-2 flex-grow-1" }, [
                          createVNode(VAvatar, {
                            size: "34",
                            color: "grey-50",
                            class: "border",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(student.initials), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(student.name), 1),
                          createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(student.studentId), 1),
                          createVNode("span", { class: "text-medium-emphasis d-none d-sm-inline" }, "•"),
                          createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(student.className), 1),
                          createVNode(VChip, {
                            color: "info",
                            variant: "tonal",
                            size: "small",
                            class: "font-weight-medium ms-sm-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(student.projects.length) + " " + toDisplayString(unref(activeTab) === "project" ? "Projects" : "Quizzes"), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode(VBtn, {
                          icon: "",
                          variant: "text",
                          size: "small",
                          color: "secondary",
                          class: "ms-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: isStudentExpanded(`${student.studentId}-${student.name}`) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                            }, null, 8, ["icon"])
                          ]),
                          _: 2
                        }, 1024)
                      ], 8, ["onClick"]),
                      createVNode(VExpandTransition, null, {
                        default: withCtx(() => [
                          withDirectives(createVNode("div", {
                            class: "pa-4 bg-grey-light border-t",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                          }, [
                            createVNode("div", { class: "d-flex flex-column gap-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(student.projects, (item, idx) => {
                                return openBlock(), createBlock("div", {
                                  key: idx,
                                  class: "submission-item bg-surface border rounded-lg pa-4 d-flex align-center justify-space-between flex-wrap gap-4",
                                  style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                }, [
                                  createVNode("div", {
                                    class: "d-flex align-center gap-3 flex-grow-1",
                                    style: { "min-width": "200px" }
                                  }, [
                                    createVNode(VIcon, {
                                      icon: "ri-book-2-line",
                                      color: "primary",
                                      size: "24"
                                    }),
                                    createVNode("div", { class: "d-flex flex-column" }, [
                                      createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.book), 1),
                                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.lessonName), 1)
                                    ])
                                  ]),
                                  createVNode("div", { style: { "min-width": "90px" } }, [
                                    unref(activeTab) === "project" ? (openBlock(), createBlock(VChip, {
                                      key: 0,
                                      color: getStatusColor(item.status),
                                      variant: "tonal",
                                      size: "small",
                                      class: "font-weight-medium text-capitalize"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.status), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "d-flex align-center gap-2"
                                    }, [
                                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, "Score"),
                                      createVNode(VChip, {
                                        color: getScoreColor(item.score),
                                        variant: "tonal",
                                        size: "small",
                                        class: "font-weight-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.score), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]))
                                  ]),
                                  createVNode(VDivider, {
                                    vertical: "",
                                    class: "d-none d-md-block align-self-stretch my-1",
                                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                  }),
                                  createVNode("div", {
                                    class: "d-flex flex-column",
                                    style: { "min-width": "120px" }
                                  }, [
                                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, "Date"),
                                    createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.date), 1)
                                  ]),
                                  createVNode(VDivider, {
                                    vertical: "",
                                    class: "d-none d-md-block align-self-stretch my-1",
                                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                  }),
                                  createVNode("div", { class: "d-flex gap-2 align-center flex-wrap" }, [
                                    unref(activeTab) === "project" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        rounded: "xl",
                                        class: "px-5 font-weight-medium text-capitalize",
                                        disabled: item.status === "Approved",
                                        size: "small",
                                        onClick: ($event) => handleApproveClick(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "ri-check-line"
                                          }),
                                          createTextVNode(" Approve ")
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "onClick"]),
                                      createVNode(VBtn, {
                                        color: "error",
                                        variant: "outlined",
                                        rounded: "xl",
                                        class: "px-5 font-weight-medium text-capitalize",
                                        disabled: item.status === "Rejected",
                                        size: "small",
                                        style: { "border-color": "rgba(var(--v-theme-error), 0.5) !important" },
                                        onClick: ($event) => handleRejectClick(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "ri-close-line"
                                          }),
                                          createTextVNode(" Reject ")
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "onClick"])
                                    ], 64)) : (openBlock(), createBlock(VBtn, {
                                      key: 1,
                                      variant: "outlined",
                                      color: "primary",
                                      size: "small",
                                      rounded: "xl",
                                      class: "px-3 font-weight-medium text-capitalize"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "ri-history-line"
                                        }),
                                        createTextVNode(" History ")
                                      ]),
                                      _: 1
                                    }))
                                  ])
                                ]);
                              }), 128))
                            ])
                          ], 512), [
                            [vShow, isStudentExpanded(`${student.studentId}-${student.name}`)]
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]);
                  }), 128)),
                  createVNode(VDivider),
                  createVNode(VDataTableFooter, { "items-per-page-options": [5, 10, 20] })
                ]))
              ])) : unref(viewType) === "room" ? (openBlock(), createBlock("div", {
                key: 3,
                class: "pa-5 bg-surface"
              }, [
                createVNode("div", { class: "d-flex align-center justify-space-between mb-4 flex-wrap gap-2" }, [
                  createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Class List"),
                  createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(unref(filteredItems).length > 0 ? unref(groupedByClass).length : 0) + " classes displayed", 1)
                ]),
                unref(groupedByClass).length === 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "py-12 text-center text-medium-emphasis border rounded-lg bg-surface"
                }, " No student assessment records found. ")) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "d-flex flex-column gap-4"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(paginatedGroupedByClass), (room) => {
                    return openBlock(), createBlock("div", {
                      key: room.className,
                      class: "room-card border rounded-lg overflow-hidden bg-surface",
                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" }
                    }, [
                      createVNode("div", {
                        class: "d-flex align-center justify-space-between pa-4 cursor-pointer hover-header",
                        onClick: ($event) => toggleRoomExpand(room.className)
                      }, [
                        createVNode("div", { class: "d-flex align-center flex-wrap ga-2 flex-grow-1" }, [
                          createVNode(VAvatar, {
                            size: "34",
                            class: "bg-primary-opacity-lighter border",
                            style: { "border-color": "rgba(var(--v-theme-primary), 0.15) !important" }
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-door-closed-line",
                                color: "primary"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(room.className), 1),
                          createVNode(VChip, {
                            color: "info",
                            variant: "tonal",
                            size: "small",
                            class: "font-weight-medium ms-sm-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(room.projects.length) + " Submissions ", 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode(VBtn, {
                          icon: "",
                          variant: "text",
                          size: "small",
                          color: "secondary",
                          class: "ms-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: isRoomExpanded(room.className) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                            }, null, 8, ["icon"])
                          ]),
                          _: 2
                        }, 1024)
                      ], 8, ["onClick"]),
                      createVNode(VExpandTransition, null, {
                        default: withCtx(() => [
                          withDirectives(createVNode("div", {
                            class: "pa-4 bg-grey-light border-t",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                          }, [
                            createVNode("div", { class: "d-flex flex-column gap-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(room.projects, (item, idx) => {
                                return openBlock(), createBlock("div", {
                                  key: idx,
                                  class: "submission-item bg-surface border rounded-lg pa-4 d-flex align-center justify-space-between flex-wrap gap-4",
                                  style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                }, [
                                  createVNode("div", {
                                    class: "d-flex align-center gap-3 flex-grow-1",
                                    style: { "min-width": "200px" }
                                  }, [
                                    createVNode(VAvatar, {
                                      color: "grey-50",
                                      class: "border",
                                      size: "40",
                                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(item.initials), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "d-flex flex-column" }, [
                                      createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.name), 1),
                                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.studentId) + " • " + toDisplayString(item.book), 1)
                                    ])
                                  ]),
                                  createVNode("div", {
                                    class: "d-flex flex-column",
                                    style: { "min-width": "150px" }
                                  }, [
                                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, "Lesson"),
                                    createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.lessonName), 1)
                                  ]),
                                  createVNode("div", { style: { "min-width": "90px" } }, [
                                    unref(activeTab) === "project" ? (openBlock(), createBlock(VChip, {
                                      key: 0,
                                      color: getStatusColor(item.status),
                                      variant: "tonal",
                                      size: "small",
                                      class: "font-weight-medium text-capitalize"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.status), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])) : (openBlock(), createBlock(VChip, {
                                      key: 1,
                                      color: getScoreColor(item.score),
                                      variant: "tonal",
                                      size: "small",
                                      class: "font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.score), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"]))
                                  ]),
                                  createVNode(VDivider, {
                                    vertical: "",
                                    class: "d-none d-md-block align-self-stretch my-1",
                                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                  }),
                                  createVNode("div", {
                                    class: "d-flex flex-column",
                                    style: { "min-width": "120px" }
                                  }, [
                                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, "Date"),
                                    createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.date), 1)
                                  ]),
                                  createVNode(VDivider, {
                                    vertical: "",
                                    class: "d-none d-md-block align-self-stretch my-1",
                                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                  }),
                                  createVNode("div", { class: "d-flex gap-2 align-center flex-wrap" }, [
                                    unref(activeTab) === "project" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        rounded: "xl",
                                        class: "px-5 font-weight-medium text-capitalize",
                                        disabled: item.status === "Approved",
                                        size: "small",
                                        onClick: ($event) => handleApproveClick(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "ri-check-line"
                                          }),
                                          createTextVNode(" Approve ")
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "onClick"]),
                                      createVNode(VBtn, {
                                        color: "error",
                                        variant: "outlined",
                                        rounded: "xl",
                                        class: "px-5 font-weight-medium text-capitalize",
                                        disabled: item.status === "Rejected",
                                        size: "small",
                                        style: { "border-color": "rgba(var(--v-theme-error), 0.5) !important" },
                                        onClick: ($event) => handleRejectClick(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "ri-close-line"
                                          }),
                                          createTextVNode(" Reject ")
                                        ]),
                                        _: 2
                                      }, 1032, ["disabled", "onClick"])
                                    ], 64)) : (openBlock(), createBlock(VBtn, {
                                      key: 1,
                                      icon: "ri-history-line",
                                      variant: "outlined",
                                      size: "small",
                                      class: "action-btn"
                                    }))
                                  ])
                                ]);
                              }), 128))
                            ])
                          ], 512), [
                            [vShow, isRoomExpanded(room.className)]
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]);
                  }), 128)),
                  createVNode(VDivider),
                  createVNode(VDataTableFooter, { "items-per-page-options": [5, 10, 20] })
                ]))
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ScoreHistoryDialog, {
        "is-dialog-visible": unref(showScoreHistory),
        "onUpdate:isDialogVisible": ($event) => isRef(showScoreHistory) ? showScoreHistory.value = $event : null,
        student: unref(selectedHistoryItem),
        attempts: unref(scoreHistoryAttempts)
      }, null, _parent));
      _push(ssrRenderComponent(_component_ApproveProjectDialog, {
        isDialogVisible: unref(isApproveDialogOpen),
        "onUpdate:isDialogVisible": ($event) => isRef(isApproveDialogOpen) ? isApproveDialogOpen.value = $event : null,
        "item-type": unref(activeTab),
        onConfirm: confirmApprove
      }, null, _parent));
      _push(ssrRenderComponent(_component_RejectProjectDialog, {
        isDialogVisible: unref(isRejectDialogOpen),
        "onUpdate:isDialogVisible": ($event) => isRef(isRejectDialogOpen) ? isRejectDialogOpen.value = $event : null,
        "item-type": unref(activeTab),
        onConfirm: confirmReject
      }, null, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(showSnackbar),
        "onUpdate:modelValue": ($event) => isRef(showSnackbar) ? showSnackbar.value = $event : null,
        color: unref(snackbarColor),
        timeout: "3000"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(snackbarText))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(snackbarText)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/assessments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const assessments = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-56597151"]]);
export {
  assessments as default
};
