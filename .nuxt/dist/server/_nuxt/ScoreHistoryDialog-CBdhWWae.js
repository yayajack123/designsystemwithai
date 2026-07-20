import { defineComponent, ref, watch, mergeProps, withCtx, unref, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { V as VDialog } from "./VDialog-B0Ad2yj9.js";
import { V as VCard } from "./VCard-B42eN0YV.js";
import { V as VSpacer } from "./VSpacer-CtyhO1n2.js";
import { V as VBtn, a as VIcon, aW as _export_sfc } from "../server.mjs";
import { V as VAvatar } from "./VAvatar-B478BWXT.js";
import { V as VDivider } from "./VDivider-Cdypedjq.js";
import { V as VRow, a as VCol } from "./VRow-BRD4hy0P.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ScoreHistoryDialog",
  __ssrInlineRender: true,
  props: {
    isDialogVisible: { type: Boolean },
    student: { default: null },
    attempts: { default: () => [] }
  },
  emits: ["update:isDialogVisible"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const view = ref("history");
    const selectedAttempt = ref(null);
    watch(() => props.isDialogVisible, (val) => {
      if (val) {
        view.value = "history";
        selectedAttempt.value = null;
      }
    });
    const openDetail = (attempt) => {
      selectedAttempt.value = attempt;
      view.value = "detail";
    };
    const backToHistory = () => {
      view.value = "history";
      selectedAttempt.value = null;
    };
    const onClose = () => {
      emit("update:isDialogVisible", false);
    };
    const scoreColor = (score, maxScore) => {
      const pct = score / maxScore * 100;
      if (pct >= 80) return "success";
      if (pct >= 60) return "warning";
      return "error";
    };
    const questionColor = (correct, total) => scoreColor(correct, total);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        "model-value": props.isDialogVisible,
        "max-width": "640",
        "onUpdate:modelValue": (val) => emit("update:isDialogVisible", val)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "overflow-hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(view) === "history") {
                    _push3(`<!--[--><div class="d-flex align-center justify-space-between px-6 py-4 border-b" style="${ssrRenderStyle({ "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" })}" data-v-ad42eb92${_scopeId2}><h5 class="text-h5 font-weight-medium text-high-emphasis" data-v-ad42eb92${_scopeId2}> Score History </h5>`);
                    _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      icon: "ri-close-line",
                      variant: "text",
                      density: "comfortable",
                      color: "secondary",
                      class: "ma-0",
                      onClick: onClose
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                    if (props.student) {
                      _push3(`<div class="px-6 pt-4 pb-2" data-v-ad42eb92${_scopeId2}><p class="text-body-2 text-medium-emphasis mb-0" data-v-ad42eb92${_scopeId2}>${ssrInterpolate(props.student.name)} • ${ssrInterpolate(props.student.book)} • ${ssrInterpolate(props.student.lessonName)}</p></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="px-6 pb-6 d-flex flex-column gap-3" data-v-ad42eb92${_scopeId2}><!--[-->`);
                    ssrRenderList(props.attempts, (attempt) => {
                      _push3(`<button type="button" style="${ssrRenderStyle({ "border-radius": "12px !important" })}" class="${ssrRenderClass([attempt.label === "Best Score" ? "history-row--best" : "history-row--default", "history-row d-flex align-center gap-4 px-4 py-3 w-100 border"])}" data-v-ad42eb92${_scopeId2}>`);
                      _push3(ssrRenderComponent(VAvatar, {
                        size: "40",
                        class: "border",
                        style: { "background-color": "rgba(var(--v-theme-primary), 0.08) !important", "border-color": "rgba(var(--v-theme-primary), 0.15) !important" }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VIcon, {
                              icon: attempt.icon,
                              color: "primary",
                              size: "20"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VIcon, {
                                icon: attempt.icon,
                                color: "primary",
                                size: "20"
                              }, null, 8, ["icon"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<div class="d-flex flex-column flex-grow-1 text-left" style="${ssrRenderStyle({ "min-width": "0" })}" data-v-ad42eb92${_scopeId2}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-ad42eb92${_scopeId2}>${ssrInterpolate(attempt.label)}</span><span class="text-body-2 text-medium-emphasis" data-v-ad42eb92${_scopeId2}>${ssrInterpolate(attempt.date)}</span></div>`);
                      _push3(ssrRenderComponent(VDivider, {
                        vertical: "",
                        class: "history-row__divider"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="d-flex flex-column flex-grow-1 text-left" style="${ssrRenderStyle({ "min-width": "0" })}" data-v-ad42eb92${_scopeId2}><span class="text-body-2 text-medium-emphasis" data-v-ad42eb92${_scopeId2}>Time spent</span><span class="text-body-2 font-weight-medium text-high-emphasis" data-v-ad42eb92${_scopeId2}>${ssrInterpolate(attempt.timeSpent)}</span></div>`);
                      _push3(ssrRenderComponent(VDivider, {
                        vertical: "",
                        class: "history-row__divider"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="d-flex flex-column flex-grow-1" data-v-ad42eb92${_scopeId2}><div class="d-flex align-baseline gap-1" data-v-ad42eb92${_scopeId2}><span class="text-h5 font-weight-medium" style="${ssrRenderStyle({ "color": "rgb(var(--v-theme-primary))" })}" data-v-ad42eb92${_scopeId2}>${ssrInterpolate(attempt.score)}</span><span class="text-body-2 text-high-emphasis" data-v-ad42eb92${_scopeId2}>/</span><span class="text-body-2 text-high-emphasis" data-v-ad42eb92${_scopeId2}>${ssrInterpolate(attempt.maxScore)}</span></div><span class="text-body-2 text-medium-emphasis" data-v-ad42eb92${_scopeId2}>${ssrInterpolate(attempt.points)} Points</span></div>`);
                      _push3(ssrRenderComponent(VAvatar, {
                        color: "primary",
                        size: "24"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VIcon, {
                              icon: "ri-arrow-right-s-line",
                              color: "white",
                              size: "20"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VIcon, {
                                icon: "ri-arrow-right-s-line",
                                color: "white",
                                size: "20"
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</button>`);
                    });
                    _push3(`<!--]--></div><!--]-->`);
                  } else if (unref(view) === "detail" && unref(selectedAttempt)) {
                    _push3(`<!--[--><div class="d-flex align-center gap-4 px-6 py-4 border-b" style="${ssrRenderStyle({ "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" })}" data-v-ad42eb92${_scopeId2}>`);
                    _push3(ssrRenderComponent(VBtn, {
                      icon: "ri-arrow-left-line",
                      variant: "text",
                      density: "comfortable",
                      color: "high-emphasis",
                      class: "ma-0",
                      onClick: backToHistory
                    }, null, _parent3, _scopeId2));
                    _push3(`<h5 class="text-h5 font-weight-medium text-high-emphasis" data-v-ad42eb92${_scopeId2}> Detail Score </h5>`);
                    _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      icon: "ri-close-line",
                      variant: "text",
                      density: "comfortable",
                      color: "secondary",
                      class: "ma-0",
                      onClick: onClose
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="px-6 pt-4 pb-2" data-v-ad42eb92${_scopeId2}><p class="text-body-2 text-medium-emphasis mb-0" data-v-ad42eb92${_scopeId2}>${ssrInterpolate(unref(selectedAttempt).label)} • ${ssrInterpolate(unref(selectedAttempt).date)} • ${ssrInterpolate(unref(selectedAttempt).timeSpent)} • ${ssrInterpolate(unref(selectedAttempt).score)}/${ssrInterpolate(unref(selectedAttempt).maxScore)}</p></div>`);
                    _push3(ssrRenderComponent(VRow, { class: "px-6 pb-6 pt-2 ma-0" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(selectedAttempt).questions, (q) => {
                            _push4(ssrRenderComponent(VCol, {
                              key: q.number,
                              cols: "12",
                              sm: "6",
                              class: "pa-2"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="question-card border rounded-lg pa-4 d-flex gap-3 align-start h-100" style="${ssrRenderStyle({ "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" })}" data-v-ad42eb92${_scopeId4}><div class="${ssrRenderClass([`bg-${questionColor(q.correct, q.total)}`, "d-flex align-center justify-center rounded-circle shrink-0"])}" style="${ssrRenderStyle({ "width": "24px", "height": "24px" })}" data-v-ad42eb92${_scopeId4}><span class="text-caption font-weight-medium text-white" data-v-ad42eb92${_scopeId4}>${ssrInterpolate(q.number)}</span></div><div class="d-flex flex-column gap-1 flex-grow-1" style="${ssrRenderStyle({ "min-width": "0" })}" data-v-ad42eb92${_scopeId4}><p class="text-body-1 font-weight-medium text-high-emphasis mb-0 text-left leading-normal" data-v-ad42eb92${_scopeId4}>${ssrInterpolate(q.type)}</p><div class="d-flex align-center gap-1 text-body-2 text-medium-emphasis" data-v-ad42eb92${_scopeId4}><span data-v-ad42eb92${_scopeId4}>Correct Answer</span><span data-v-ad42eb92${_scopeId4}>:</span><span data-v-ad42eb92${_scopeId4}>${ssrInterpolate(q.correct)}/${ssrInterpolate(q.total)}</span></div><div class="d-flex align-center gap-1 text-body-2 text-medium-emphasis" data-v-ad42eb92${_scopeId4}><span data-v-ad42eb92${_scopeId4}>Time spent</span><span data-v-ad42eb92${_scopeId4}>:</span><span data-v-ad42eb92${_scopeId4}>${ssrInterpolate(q.timeSpent)}</span></div></div></div>`);
                                } else {
                                  return [
                                    createVNode("div", {
                                      class: "question-card border rounded-lg pa-4 d-flex gap-3 align-start h-100",
                                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" }
                                    }, [
                                      createVNode("div", {
                                        class: ["d-flex align-center justify-center rounded-circle shrink-0", `bg-${questionColor(q.correct, q.total)}`],
                                        style: { "width": "24px", "height": "24px" }
                                      }, [
                                        createVNode("span", { class: "text-caption font-weight-medium text-white" }, toDisplayString(q.number), 1)
                                      ], 2),
                                      createVNode("div", {
                                        class: "d-flex flex-column gap-1 flex-grow-1",
                                        style: { "min-width": "0" }
                                      }, [
                                        createVNode("p", { class: "text-body-1 font-weight-medium text-high-emphasis mb-0 text-left leading-normal" }, toDisplayString(q.type), 1),
                                        createVNode("div", { class: "d-flex align-center gap-1 text-body-2 text-medium-emphasis" }, [
                                          createVNode("span", null, "Correct Answer"),
                                          createVNode("span", null, ":"),
                                          createVNode("span", null, toDisplayString(q.correct) + "/" + toDisplayString(q.total), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex align-center gap-1 text-body-2 text-medium-emphasis" }, [
                                          createVNode("span", null, "Time spent"),
                                          createVNode("span", null, ":"),
                                          createVNode("span", null, toDisplayString(q.timeSpent), 1)
                                        ])
                                      ])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedAttempt).questions, (q) => {
                              return openBlock(), createBlock(VCol, {
                                key: q.number,
                                cols: "12",
                                sm: "6",
                                class: "pa-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: "question-card border rounded-lg pa-4 d-flex gap-3 align-start h-100",
                                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" }
                                  }, [
                                    createVNode("div", {
                                      class: ["d-flex align-center justify-center rounded-circle shrink-0", `bg-${questionColor(q.correct, q.total)}`],
                                      style: { "width": "24px", "height": "24px" }
                                    }, [
                                      createVNode("span", { class: "text-caption font-weight-medium text-white" }, toDisplayString(q.number), 1)
                                    ], 2),
                                    createVNode("div", {
                                      class: "d-flex flex-column gap-1 flex-grow-1",
                                      style: { "min-width": "0" }
                                    }, [
                                      createVNode("p", { class: "text-body-1 font-weight-medium text-high-emphasis mb-0 text-left leading-normal" }, toDisplayString(q.type), 1),
                                      createVNode("div", { class: "d-flex align-center gap-1 text-body-2 text-medium-emphasis" }, [
                                        createVNode("span", null, "Correct Answer"),
                                        createVNode("span", null, ":"),
                                        createVNode("span", null, toDisplayString(q.correct) + "/" + toDisplayString(q.total), 1)
                                      ]),
                                      createVNode("div", { class: "d-flex align-center gap-1 text-body-2 text-medium-emphasis" }, [
                                        createVNode("span", null, "Time spent"),
                                        createVNode("span", null, ":"),
                                        createVNode("span", null, toDisplayString(q.timeSpent), 1)
                                      ])
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(view) === "history" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode("div", {
                        class: "d-flex align-center justify-space-between px-6 py-4 border-b",
                        style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                      }, [
                        createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis" }, " Score History "),
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          density: "comfortable",
                          color: "secondary",
                          class: "ma-0",
                          onClick: onClose
                        })
                      ]),
                      props.student ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "px-6 pt-4 pb-2"
                      }, [
                        createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(props.student.name) + " • " + toDisplayString(props.student.book) + " • " + toDisplayString(props.student.lessonName), 1)
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "px-6 pb-6 d-flex flex-column gap-3" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.attempts, (attempt) => {
                          return openBlock(), createBlock("button", {
                            key: attempt.label,
                            type: "button",
                            class: ["history-row d-flex align-center gap-4 px-4 py-3 w-100 border", attempt.label === "Best Score" ? "history-row--best" : "history-row--default"],
                            style: { "border-radius": "12px !important" },
                            onClick: ($event) => openDetail(attempt)
                          }, [
                            createVNode(VAvatar, {
                              size: "40",
                              class: "border",
                              style: { "background-color": "rgba(var(--v-theme-primary), 0.08) !important", "border-color": "rgba(var(--v-theme-primary), 0.15) !important" }
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: attempt.icon,
                                  color: "primary",
                                  size: "20"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", {
                              class: "d-flex flex-column flex-grow-1 text-left",
                              style: { "min-width": "0" }
                            }, [
                              createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(attempt.label), 1),
                              createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(attempt.date), 1)
                            ]),
                            createVNode(VDivider, {
                              vertical: "",
                              class: "history-row__divider"
                            }),
                            createVNode("div", {
                              class: "d-flex flex-column flex-grow-1 text-left",
                              style: { "min-width": "0" }
                            }, [
                              createVNode("span", { class: "text-body-2 text-medium-emphasis" }, "Time spent"),
                              createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, toDisplayString(attempt.timeSpent), 1)
                            ]),
                            createVNode(VDivider, {
                              vertical: "",
                              class: "history-row__divider"
                            }),
                            createVNode("div", { class: "d-flex flex-column flex-grow-1" }, [
                              createVNode("div", { class: "d-flex align-baseline gap-1" }, [
                                createVNode("span", {
                                  class: "text-h5 font-weight-medium",
                                  style: { "color": "rgb(var(--v-theme-primary))" }
                                }, toDisplayString(attempt.score), 1),
                                createVNode("span", { class: "text-body-2 text-high-emphasis" }, "/"),
                                createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(attempt.maxScore), 1)
                              ]),
                              createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(attempt.points) + " Points", 1)
                            ]),
                            createVNode(VAvatar, {
                              color: "primary",
                              size: "24"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-arrow-right-s-line",
                                  color: "white",
                                  size: "20"
                                })
                              ]),
                              _: 1
                            })
                          ], 10, ["onClick"]);
                        }), 128))
                      ])
                    ], 64)) : unref(view) === "detail" && unref(selectedAttempt) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode("div", {
                        class: "d-flex align-center gap-4 px-6 py-4 border-b",
                        style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                      }, [
                        createVNode(VBtn, {
                          icon: "ri-arrow-left-line",
                          variant: "text",
                          density: "comfortable",
                          color: "high-emphasis",
                          class: "ma-0",
                          onClick: backToHistory
                        }),
                        createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis" }, " Detail Score "),
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          density: "comfortable",
                          color: "secondary",
                          class: "ma-0",
                          onClick: onClose
                        })
                      ]),
                      createVNode("div", { class: "px-6 pt-4 pb-2" }, [
                        createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(unref(selectedAttempt).label) + " • " + toDisplayString(unref(selectedAttempt).date) + " • " + toDisplayString(unref(selectedAttempt).timeSpent) + " • " + toDisplayString(unref(selectedAttempt).score) + "/" + toDisplayString(unref(selectedAttempt).maxScore), 1)
                      ]),
                      createVNode(VRow, { class: "px-6 pb-6 pt-2 ma-0" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedAttempt).questions, (q) => {
                            return openBlock(), createBlock(VCol, {
                              key: q.number,
                              cols: "12",
                              sm: "6",
                              class: "pa-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "question-card border rounded-lg pa-4 d-flex gap-3 align-start h-100",
                                  style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" }
                                }, [
                                  createVNode("div", {
                                    class: ["d-flex align-center justify-center rounded-circle shrink-0", `bg-${questionColor(q.correct, q.total)}`],
                                    style: { "width": "24px", "height": "24px" }
                                  }, [
                                    createVNode("span", { class: "text-caption font-weight-medium text-white" }, toDisplayString(q.number), 1)
                                  ], 2),
                                  createVNode("div", {
                                    class: "d-flex flex-column gap-1 flex-grow-1",
                                    style: { "min-width": "0" }
                                  }, [
                                    createVNode("p", { class: "text-body-1 font-weight-medium text-high-emphasis mb-0 text-left leading-normal" }, toDisplayString(q.type), 1),
                                    createVNode("div", { class: "d-flex align-center gap-1 text-body-2 text-medium-emphasis" }, [
                                      createVNode("span", null, "Correct Answer"),
                                      createVNode("span", null, ":"),
                                      createVNode("span", null, toDisplayString(q.correct) + "/" + toDisplayString(q.total), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex align-center gap-1 text-body-2 text-medium-emphasis" }, [
                                      createVNode("span", null, "Time spent"),
                                      createVNode("span", null, ":"),
                                      createVNode("span", null, toDisplayString(q.timeSpent), 1)
                                    ])
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "overflow-hidden" }, {
                default: withCtx(() => [
                  unref(view) === "history" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("div", {
                      class: "d-flex align-center justify-space-between px-6 py-4 border-b",
                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                    }, [
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis" }, " Score History "),
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        icon: "ri-close-line",
                        variant: "text",
                        density: "comfortable",
                        color: "secondary",
                        class: "ma-0",
                        onClick: onClose
                      })
                    ]),
                    props.student ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "px-6 pt-4 pb-2"
                    }, [
                      createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(props.student.name) + " • " + toDisplayString(props.student.book) + " • " + toDisplayString(props.student.lessonName), 1)
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "px-6 pb-6 d-flex flex-column gap-3" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.attempts, (attempt) => {
                        return openBlock(), createBlock("button", {
                          key: attempt.label,
                          type: "button",
                          class: ["history-row d-flex align-center gap-4 px-4 py-3 w-100 border", attempt.label === "Best Score" ? "history-row--best" : "history-row--default"],
                          style: { "border-radius": "12px !important" },
                          onClick: ($event) => openDetail(attempt)
                        }, [
                          createVNode(VAvatar, {
                            size: "40",
                            class: "border",
                            style: { "background-color": "rgba(var(--v-theme-primary), 0.08) !important", "border-color": "rgba(var(--v-theme-primary), 0.15) !important" }
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: attempt.icon,
                                color: "primary",
                                size: "20"
                              }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", {
                            class: "d-flex flex-column flex-grow-1 text-left",
                            style: { "min-width": "0" }
                          }, [
                            createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(attempt.label), 1),
                            createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(attempt.date), 1)
                          ]),
                          createVNode(VDivider, {
                            vertical: "",
                            class: "history-row__divider"
                          }),
                          createVNode("div", {
                            class: "d-flex flex-column flex-grow-1 text-left",
                            style: { "min-width": "0" }
                          }, [
                            createVNode("span", { class: "text-body-2 text-medium-emphasis" }, "Time spent"),
                            createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, toDisplayString(attempt.timeSpent), 1)
                          ]),
                          createVNode(VDivider, {
                            vertical: "",
                            class: "history-row__divider"
                          }),
                          createVNode("div", { class: "d-flex flex-column flex-grow-1" }, [
                            createVNode("div", { class: "d-flex align-baseline gap-1" }, [
                              createVNode("span", {
                                class: "text-h5 font-weight-medium",
                                style: { "color": "rgb(var(--v-theme-primary))" }
                              }, toDisplayString(attempt.score), 1),
                              createVNode("span", { class: "text-body-2 text-high-emphasis" }, "/"),
                              createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(attempt.maxScore), 1)
                            ]),
                            createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(attempt.points) + " Points", 1)
                          ]),
                          createVNode(VAvatar, {
                            color: "primary",
                            size: "24"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-arrow-right-s-line",
                                color: "white",
                                size: "20"
                              })
                            ]),
                            _: 1
                          })
                        ], 10, ["onClick"]);
                      }), 128))
                    ])
                  ], 64)) : unref(view) === "detail" && unref(selectedAttempt) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode("div", {
                      class: "d-flex align-center gap-4 px-6 py-4 border-b",
                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                    }, [
                      createVNode(VBtn, {
                        icon: "ri-arrow-left-line",
                        variant: "text",
                        density: "comfortable",
                        color: "high-emphasis",
                        class: "ma-0",
                        onClick: backToHistory
                      }),
                      createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis" }, " Detail Score "),
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        icon: "ri-close-line",
                        variant: "text",
                        density: "comfortable",
                        color: "secondary",
                        class: "ma-0",
                        onClick: onClose
                      })
                    ]),
                    createVNode("div", { class: "px-6 pt-4 pb-2" }, [
                      createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(unref(selectedAttempt).label) + " • " + toDisplayString(unref(selectedAttempt).date) + " • " + toDisplayString(unref(selectedAttempt).timeSpent) + " • " + toDisplayString(unref(selectedAttempt).score) + "/" + toDisplayString(unref(selectedAttempt).maxScore), 1)
                    ]),
                    createVNode(VRow, { class: "px-6 pb-6 pt-2 ma-0" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedAttempt).questions, (q) => {
                          return openBlock(), createBlock(VCol, {
                            key: q.number,
                            cols: "12",
                            sm: "6",
                            class: "pa-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "question-card border rounded-lg pa-4 d-flex gap-3 align-start h-100",
                                style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" }
                              }, [
                                createVNode("div", {
                                  class: ["d-flex align-center justify-center rounded-circle shrink-0", `bg-${questionColor(q.correct, q.total)}`],
                                  style: { "width": "24px", "height": "24px" }
                                }, [
                                  createVNode("span", { class: "text-caption font-weight-medium text-white" }, toDisplayString(q.number), 1)
                                ], 2),
                                createVNode("div", {
                                  class: "d-flex flex-column gap-1 flex-grow-1",
                                  style: { "min-width": "0" }
                                }, [
                                  createVNode("p", { class: "text-body-1 font-weight-medium text-high-emphasis mb-0 text-left leading-normal" }, toDisplayString(q.type), 1),
                                  createVNode("div", { class: "d-flex align-center gap-1 text-body-2 text-medium-emphasis" }, [
                                    createVNode("span", null, "Correct Answer"),
                                    createVNode("span", null, ":"),
                                    createVNode("span", null, toDisplayString(q.correct) + "/" + toDisplayString(q.total), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex align-center gap-1 text-body-2 text-medium-emphasis" }, [
                                    createVNode("span", null, "Time spent"),
                                    createVNode("span", null, ":"),
                                    createVNode("span", null, toDisplayString(q.timeSpent), 1)
                                  ])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialogs/ScoreHistoryDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ad42eb92"]]);
export {
  __nuxt_component_1 as _
};
