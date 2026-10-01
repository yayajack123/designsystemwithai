import { defineComponent, computed, ref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, unref, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import { _ as _sfc_main$1 } from "./UiSectionHeader-DuDEa5TY.js";
import { U as UiTableView } from "./UiTableView-BhoxpkGV.js";
import { s as studentRecords } from "./students-rxm8c39F.js";
import { d as studentSessions } from "./studentSessions-DLVEJCdB.js";
import { s as studentHistories, a as historyBook, m as meetingsForHistory, f as formatMeetingDate, b as formatMeetingTime } from "./studentHistory-D6Asm5wf.js";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/hookable/dist/index.mjs";
import { V as VAlert } from "./VAlert-CLjViLm6.js";
import { V as VBtn, b3 as VProgressLinear, aY as _export_sfc } from "../server.mjs";
import { V as VTabs, a as VTab } from "./VTabs-Bx65mjDv.js";
import { V as VRow, a as VCol } from "./VRow-BKXTxdYZ.js";
import { V as VExpansionPanels, a as VExpansionPanel, b as VExpansionPanelTitle, c as VExpansionPanelText } from "./VExpansionPanels-B-Brlnoj.js";
import { V as VChip } from "./VChip-DklVb85L.js";
import { V as VCard, a as VCardTitle, b as VCardActions } from "./VCard-u8p0g_5j.js";
import { V as VDivider } from "./VDivider-CWdThEEs.js";
import { V as VDialog } from "./VDialog-Bx9nn4_A.js";
import { V as VCardText } from "./VCardText-Dvf5gJn3.js";
import { V as VSpacer } from "./VSpacer-GyCHsyf9.js";
import "./VTooltip-iMMZgjjz.js";
import "./VOverlay-2hsH7Y4R.js";
import "./forwardRefs-CtuH3aYe.js";
import "./VAvatar-Bov4ZLUZ.js";
import "./VDataTable-BRP6mm-W.js";
import "./VDataTableFooter-OvjebZTV.js";
import "./filter-F6JSwjTx.js";
import "./VTextField-Cx_BotQJ.js";
import "./index-CGI_inNZ.js";
import "./VList-MvyrR4cM.js";
import "./VMenu-HR5UQDp_.js";
import "./dialog-transition-BWrfOTuu.js";
import "./VCheckboxBtn-CHmNVDFy.js";
import "./VSelectionControl-ggoddxMA.js";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/unctx/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/h3/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/defu/dist/defu.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/klona/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/destr/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/ohash/dist/index.mjs";
import "@antfu/utils";
/* empty css               */
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "student-session-history",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const studentId = computed(() => String(route.params.studentId || ""));
    const sessionId = computed(() => String(route.params.sessionId || ""));
    const historyId = computed(() => String(route.params.historyId || ""));
    const student = computed(() => studentRecords.find((item) => item.id === studentId.value));
    const session = computed(() => studentSessions.find((item) => item.id === sessionId.value && item.studentId === studentId.value));
    const history = computed(() => studentHistories.find((item) => item.id === historyId.value && item.studentId === studentId.value && item.sessionId === sessionId.value));
    const book = computed(() => history.value ? historyBook(history.value) : void 0);
    const meetings = computed(() => history.value ? meetingsForHistory(history.value) : []);
    const activeTab = computed(() => ["meeting-history", "report"].includes(String(route.query.tab)) ? String(route.query.tab) : "learning-progress");
    const selectTab = (tab) => router.replace({ query: { ...route.query, tab } });
    const sessionRoute = computed(() => ({ path: `/students/${studentId.value}/sessions/${sessionId.value}`, query: { tab: "history" } }));
    const meetingRoute = (id) => `/students/${studentId.value}/sessions/${sessionId.value}/history/${historyId.value}/meetings/${id}`;
    const selectedMeeting = ref(null);
    const lessonDialog = ref(false);
    const openLessons = (meeting) => {
      selectedMeeting.value = meeting;
      lessonDialog.value = true;
    };
    const meetingHeaders = [
      { title: "Class", key: "className" },
      { title: "Date", key: "date" },
      { title: "Lesson opened", key: "lessons" },
      { title: "Time", key: "time" },
      { title: "Action", key: "action", sortable: false }
    ];
    const reports = computed(() => meetings.value.filter((item) => item.journal?.status === "Sent" && item.journal.reportCode));
    const reportHeaders = [
      { title: "Report", key: "code" },
      { title: "Meeting", key: "meeting" },
      { title: "Sent", key: "sentAt" },
      { title: "Action", key: "action", sortable: false }
    ];
    const lessonCount = (chapter) => chapter.lessons.length;
    const chapterProgress = (chapter) => chapter.lessons.length ? Math.round(chapter.lessons.reduce((sum, item) => sum + item.progress, 0) / chapter.lessons.length) : 0;
    const progressLabel = (value) => value >= 100 ? "Done" : value > 0 ? "In progress" : "Not started";
    const formatDateTime = (value) => `${formatMeetingDate(value)}, ${formatMeetingTime(value)} WIB`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-7c05e6be>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Student learning progress",
        back: sessionRoute.value,
        description: book.value?.title,
        class: "mb-6"
      }, null, _parent));
      if (!student.value || !session.value || !history.value || !book.value) {
        _push(ssrRenderComponent(VAlert, {
          type: "warning",
          variant: "tonal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Book history not found for this student and session. <div class="mt-3" data-v-7c05e6be${_scopeId}>`);
              _push2(ssrRenderComponent(VBtn, {
                color: "primary",
                variant: "outlined",
                rounded: "pill",
                to: sessionRoute.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Back to session history`);
                  } else {
                    return [
                      createTextVNode("Back to session history")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createTextVNode(" Book history not found for this student and session. "),
                createVNode("div", { class: "mt-3" }, [
                  createVNode(VBtn, {
                    color: "primary",
                    variant: "outlined",
                    rounded: "pill",
                    to: sessionRoute.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Back to session history")
                    ]),
                    _: 1
                  }, 8, ["to"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(VTabs, {
          "model-value": activeTab.value,
          class: "v-tabs-bordered mb-6",
          "onUpdate:modelValue": selectTab
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VTab, { value: "learning-progress" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Learning progress`);
                  } else {
                    return [
                      createTextVNode("Learning progress")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VTab, { value: "meeting-history" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Meeting history`);
                  } else {
                    return [
                      createTextVNode("Meeting history")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VTab, { value: "report" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Report`);
                  } else {
                    return [
                      createTextVNode("Report")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VTab, { value: "learning-progress" }, {
                  default: withCtx(() => [
                    createTextVNode("Learning progress")
                  ]),
                  _: 1
                }),
                createVNode(VTab, { value: "meeting-history" }, {
                  default: withCtx(() => [
                    createTextVNode("Meeting history")
                  ]),
                  _: 1
                }),
                createVNode(VTab, { value: "report" }, {
                  default: withCtx(() => [
                    createTextVNode("Report")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VRow, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (activeTab.value === "learning-progress") {
                      _push3(`<div data-v-7c05e6be${_scopeId2}><h2 class="text-h6 mb-4" data-v-7c05e6be${_scopeId2}>${ssrInterpolate(book.value.title)}</h2>`);
                      if (history.value.chapters.length) {
                        _push3(ssrRenderComponent(VExpansionPanels, { variant: "accordion" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<!--[-->`);
                              ssrRenderList(history.value.chapters, (chapter) => {
                                _push4(ssrRenderComponent(VExpansionPanel, {
                                  key: chapter.id
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(ssrRenderComponent(VExpansionPanelTitle, null, {
                                        default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(`<div class="d-flex align-center flex-wrap gap-3" data-v-7c05e6be${_scopeId5}><strong data-v-7c05e6be${_scopeId5}>${ssrInterpolate(chapter.title)}</strong><span class="text-body-2 text-medium-emphasis" data-v-7c05e6be${_scopeId5}>${ssrInterpolate(lessonCount(chapter))} lessons · ${ssrInterpolate(chapterProgress(chapter))}%</span>`);
                                            _push6(ssrRenderComponent(VChip, {
                                              color: chapterProgress(chapter) === 100 ? "success" : chapterProgress(chapter) ? "info" : "secondary",
                                              size: "small",
                                              variant: "tonal"
                                            }, {
                                              default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(`${ssrInterpolate(progressLabel(chapterProgress(chapter)))}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(progressLabel(chapterProgress(chapter))), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                            _push6(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "d-flex align-center flex-wrap gap-3" }, [
                                                createVNode("strong", null, toDisplayString(chapter.title), 1),
                                                createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(lessonCount(chapter)) + " lessons · " + toDisplayString(chapterProgress(chapter)) + "%", 1),
                                                createVNode(VChip, {
                                                  color: chapterProgress(chapter) === 100 ? "success" : chapterProgress(chapter) ? "info" : "secondary",
                                                  size: "small",
                                                  variant: "tonal"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(progressLabel(chapterProgress(chapter))), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                      _push5(ssrRenderComponent(VExpansionPanelText, null, {
                                        default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(`<!--[-->`);
                                            ssrRenderList(chapter.lessons, (lesson) => {
                                              _push6(ssrRenderComponent(VCard, {
                                                key: lesson.id,
                                                variant: "outlined",
                                                class: "pa-4 mb-3"
                                              }, {
                                                default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                                  if (_push7) {
                                                    _push7(`<div class="d-flex justify-space-between align-start flex-wrap gap-2" data-v-7c05e6be${_scopeId6}><div data-v-7c05e6be${_scopeId6}><h3 class="text-body-1 font-weight-medium mb-1" data-v-7c05e6be${_scopeId6}>${ssrInterpolate(lesson.title)}</h3><span class="text-body-2 text-medium-emphasis" data-v-7c05e6be${_scopeId6}>${ssrInterpolate(lesson.progress)}% progress · Score ${ssrInterpolate(lesson.score)}/${ssrInterpolate(lesson.maxScore)}</span></div>`);
                                                    _push7(ssrRenderComponent(VChip, {
                                                      color: lesson.progress === 100 ? "success" : lesson.progress ? "info" : "secondary",
                                                      size: "small",
                                                      variant: "tonal"
                                                    }, {
                                                      default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                        if (_push8) {
                                                          _push8(`${ssrInterpolate(progressLabel(lesson.progress))}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(progressLabel(lesson.progress)), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent7, _scopeId6));
                                                    _push7(`</div>`);
                                                    _push7(ssrRenderComponent(VProgressLinear, {
                                                      "model-value": lesson.progress,
                                                      color: "primary",
                                                      class: "my-3",
                                                      "aria-label": `${lesson.title} progress ${lesson.progress}%`
                                                    }, null, _parent7, _scopeId6));
                                                    _push7(`<ul class="text-body-2 ps-5 mb-0" data-v-7c05e6be${_scopeId6}><!--[-->`);
                                                    ssrRenderList(lesson.objectives, (objective) => {
                                                      _push7(`<li data-v-7c05e6be${_scopeId6}>${ssrInterpolate(objective)}</li>`);
                                                    });
                                                    _push7(`<!--]--></ul>`);
                                                  } else {
                                                    return [
                                                      createVNode("div", { class: "d-flex justify-space-between align-start flex-wrap gap-2" }, [
                                                        createVNode("div", null, [
                                                          createVNode("h3", { class: "text-body-1 font-weight-medium mb-1" }, toDisplayString(lesson.title), 1),
                                                          createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(lesson.progress) + "% progress · Score " + toDisplayString(lesson.score) + "/" + toDisplayString(lesson.maxScore), 1)
                                                        ]),
                                                        createVNode(VChip, {
                                                          color: lesson.progress === 100 ? "success" : lesson.progress ? "info" : "secondary",
                                                          size: "small",
                                                          variant: "tonal"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(progressLabel(lesson.progress)), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["color"])
                                                      ]),
                                                      createVNode(VProgressLinear, {
                                                        "model-value": lesson.progress,
                                                        color: "primary",
                                                        class: "my-3",
                                                        "aria-label": `${lesson.title} progress ${lesson.progress}%`
                                                      }, null, 8, ["model-value", "aria-label"]),
                                                      createVNode("ul", { class: "text-body-2 ps-5 mb-0" }, [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(lesson.objectives, (objective) => {
                                                          return openBlock(), createBlock("li", { key: objective }, toDisplayString(objective), 1);
                                                        }), 128))
                                                      ])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent6, _scopeId5));
                                            });
                                            _push6(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList(chapter.lessons, (lesson) => {
                                                return openBlock(), createBlock(VCard, {
                                                  key: lesson.id,
                                                  variant: "outlined",
                                                  class: "pa-4 mb-3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "d-flex justify-space-between align-start flex-wrap gap-2" }, [
                                                      createVNode("div", null, [
                                                        createVNode("h3", { class: "text-body-1 font-weight-medium mb-1" }, toDisplayString(lesson.title), 1),
                                                        createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(lesson.progress) + "% progress · Score " + toDisplayString(lesson.score) + "/" + toDisplayString(lesson.maxScore), 1)
                                                      ]),
                                                      createVNode(VChip, {
                                                        color: lesson.progress === 100 ? "success" : lesson.progress ? "info" : "secondary",
                                                        size: "small",
                                                        variant: "tonal"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(progressLabel(lesson.progress)), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"])
                                                    ]),
                                                    createVNode(VProgressLinear, {
                                                      "model-value": lesson.progress,
                                                      color: "primary",
                                                      class: "my-3",
                                                      "aria-label": `${lesson.title} progress ${lesson.progress}%`
                                                    }, null, 8, ["model-value", "aria-label"]),
                                                    createVNode("ul", { class: "text-body-2 ps-5 mb-0" }, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(lesson.objectives, (objective) => {
                                                        return openBlock(), createBlock("li", { key: objective }, toDisplayString(objective), 1);
                                                      }), 128))
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                    } else {
                                      return [
                                        createVNode(VExpansionPanelTitle, null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center flex-wrap gap-3" }, [
                                              createVNode("strong", null, toDisplayString(chapter.title), 1),
                                              createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(lessonCount(chapter)) + " lessons · " + toDisplayString(chapterProgress(chapter)) + "%", 1),
                                              createVNode(VChip, {
                                                color: chapterProgress(chapter) === 100 ? "success" : chapterProgress(chapter) ? "info" : "secondary",
                                                size: "small",
                                                variant: "tonal"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(progressLabel(chapterProgress(chapter))), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VExpansionPanelText, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(chapter.lessons, (lesson) => {
                                              return openBlock(), createBlock(VCard, {
                                                key: lesson.id,
                                                variant: "outlined",
                                                class: "pa-4 mb-3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "d-flex justify-space-between align-start flex-wrap gap-2" }, [
                                                    createVNode("div", null, [
                                                      createVNode("h3", { class: "text-body-1 font-weight-medium mb-1" }, toDisplayString(lesson.title), 1),
                                                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(lesson.progress) + "% progress · Score " + toDisplayString(lesson.score) + "/" + toDisplayString(lesson.maxScore), 1)
                                                    ]),
                                                    createVNode(VChip, {
                                                      color: lesson.progress === 100 ? "success" : lesson.progress ? "info" : "secondary",
                                                      size: "small",
                                                      variant: "tonal"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(progressLabel(lesson.progress)), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"])
                                                  ]),
                                                  createVNode(VProgressLinear, {
                                                    "model-value": lesson.progress,
                                                    color: "primary",
                                                    class: "my-3",
                                                    "aria-label": `${lesson.title} progress ${lesson.progress}%`
                                                  }, null, 8, ["model-value", "aria-label"]),
                                                  createVNode("ul", { class: "text-body-2 ps-5 mb-0" }, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(lesson.objectives, (objective) => {
                                                      return openBlock(), createBlock("li", { key: objective }, toDisplayString(objective), 1);
                                                    }), 128))
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              });
                              _push4(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(history.value.chapters, (chapter) => {
                                  return openBlock(), createBlock(VExpansionPanel, {
                                    key: chapter.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VExpansionPanelTitle, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex align-center flex-wrap gap-3" }, [
                                            createVNode("strong", null, toDisplayString(chapter.title), 1),
                                            createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(lessonCount(chapter)) + " lessons · " + toDisplayString(chapterProgress(chapter)) + "%", 1),
                                            createVNode(VChip, {
                                              color: chapterProgress(chapter) === 100 ? "success" : chapterProgress(chapter) ? "info" : "secondary",
                                              size: "small",
                                              variant: "tonal"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(progressLabel(chapterProgress(chapter))), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VExpansionPanelText, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(chapter.lessons, (lesson) => {
                                            return openBlock(), createBlock(VCard, {
                                              key: lesson.id,
                                              variant: "outlined",
                                              class: "pa-4 mb-3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex justify-space-between align-start flex-wrap gap-2" }, [
                                                  createVNode("div", null, [
                                                    createVNode("h3", { class: "text-body-1 font-weight-medium mb-1" }, toDisplayString(lesson.title), 1),
                                                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(lesson.progress) + "% progress · Score " + toDisplayString(lesson.score) + "/" + toDisplayString(lesson.maxScore), 1)
                                                  ]),
                                                  createVNode(VChip, {
                                                    color: lesson.progress === 100 ? "success" : lesson.progress ? "info" : "secondary",
                                                    size: "small",
                                                    variant: "tonal"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(progressLabel(lesson.progress)), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"])
                                                ]),
                                                createVNode(VProgressLinear, {
                                                  "model-value": lesson.progress,
                                                  color: "primary",
                                                  class: "my-3",
                                                  "aria-label": `${lesson.title} progress ${lesson.progress}%`
                                                }, null, 8, ["model-value", "aria-label"]),
                                                createVNode("ul", { class: "text-body-2 ps-5 mb-0" }, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(lesson.objectives, (objective) => {
                                                    return openBlock(), createBlock("li", { key: objective }, toDisplayString(objective), 1);
                                                  }), 128))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(ssrRenderComponent(VCard, {
                          variant: "outlined",
                          class: "pa-6 text-body-2 text-medium-emphasis"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`No learning progress for this book yet.`);
                            } else {
                              return [
                                createTextVNode("No learning progress for this book yet.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent3, _scopeId2));
                      }
                      _push3(`</div>`);
                    } else if (activeTab.value === "meeting-history") {
                      _push3(`<div data-v-7c05e6be${_scopeId2}><h2 class="text-h6 mb-4" data-v-7c05e6be${_scopeId2}>Meeting history</h2>`);
                      _push3(ssrRenderComponent(UiTableView, {
                        title: "",
                        headers: meetingHeaders,
                        items: meetings.value,
                        "mobile-cards": true,
                        "hide-filters": true,
                        "items-per-page": 10
                      }, {
                        "item.date": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<strong data-v-7c05e6be${_scopeId3}>${ssrInterpolate(unref(formatMeetingDate)(item.startsAt))}</strong><div class="text-body-2 text-medium-emphasis" data-v-7c05e6be${_scopeId3}>Meeting ${ssrInterpolate(item.number)}</div>`);
                          } else {
                            return [
                              createVNode("strong", null, toDisplayString(unref(formatMeetingDate)(item.startsAt)), 1),
                              createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Meeting " + toDisplayString(item.number), 1)
                            ];
                          }
                        }),
                        "item.lessons": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span data-v-7c05e6be${_scopeId3}>${ssrInterpolate(item.lessons.length)} lessons</span>`);
                            if (item.lessons.length) {
                              _push4(ssrRenderComponent(VBtn, {
                                color: "primary",
                                variant: "text",
                                rounded: "pill",
                                size: "small",
                                onClick: ($event) => openLessons(item)
                              }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`See details`);
                                  } else {
                                    return [
                                      createTextVNode("See details")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          } else {
                            return [
                              createVNode("span", null, toDisplayString(item.lessons.length) + " lessons", 1),
                              item.lessons.length ? (openBlock(), createBlock(VBtn, {
                                key: 0,
                                color: "primary",
                                variant: "text",
                                rounded: "pill",
                                size: "small",
                                onClick: ($event) => openLessons(item)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("See details")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true)
                            ];
                          }
                        }),
                        "item.time": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(unref(formatMeetingTime)(item.startsAt))}–${ssrInterpolate(unref(formatMeetingTime)(item.endsAt))} WIB`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(unref(formatMeetingTime)(item.startsAt)) + "–" + toDisplayString(unref(formatMeetingTime)(item.endsAt)) + " WIB", 1)
                            ];
                          }
                        }),
                        "item.action": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            if (item.journal) {
                              _push4(ssrRenderComponent(VBtn, {
                                color: "primary",
                                variant: "text",
                                rounded: "pill",
                                to: meetingRoute(item.id)
                              }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`Meeting journal`);
                                  } else {
                                    return [
                                      createTextVNode("Meeting journal")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<span class="text-body-2 text-medium-emphasis" data-v-7c05e6be${_scopeId3}>No journal</span>`);
                            }
                          } else {
                            return [
                              item.journal ? (openBlock(), createBlock(VBtn, {
                                key: 0,
                                color: "primary",
                                variant: "text",
                                rounded: "pill",
                                to: meetingRoute(item.id)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Meeting journal")
                                ]),
                                _: 2
                              }, 1032, ["to"])) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-body-2 text-medium-emphasis"
                              }, "No journal"))
                            ];
                          }
                        }),
                        "no-data": withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<p class="pa-6 text-body-2 text-medium-emphasis" data-v-7c05e6be${_scopeId3}>No meetings recorded for this book.</p>`);
                          } else {
                            return [
                              createVNode("p", { class: "pa-6 text-body-2 text-medium-emphasis" }, "No meetings recorded for this book.")
                            ];
                          }
                        }),
                        "mobile-cards": withCtx(({ items }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            if (items.length) {
                              _push4(`<div class="pa-4 d-flex flex-column gap-3" data-v-7c05e6be${_scopeId3}><!--[-->`);
                              ssrRenderList(items, (item) => {
                                _push4(ssrRenderComponent(VCard, {
                                  key: item.id,
                                  variant: "outlined",
                                  class: "pa-4"
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`<h3 class="text-h6 mb-1" data-v-7c05e6be${_scopeId4}>Meeting ${ssrInterpolate(item.number)} · ${ssrInterpolate(item.className)}</h3><p class="text-body-2 text-medium-emphasis mb-2" data-v-7c05e6be${_scopeId4}>${ssrInterpolate(unref(formatMeetingDate)(item.startsAt))} · ${ssrInterpolate(unref(formatMeetingTime)(item.startsAt))}–${ssrInterpolate(unref(formatMeetingTime)(item.endsAt))} WIB</p><p class="text-body-2 mb-2" data-v-7c05e6be${_scopeId4}>${ssrInterpolate(item.lessons.length)} lessons</p><div class="d-flex flex-wrap gap-2" data-v-7c05e6be${_scopeId4}>`);
                                      if (item.lessons.length) {
                                        _push5(ssrRenderComponent(VBtn, {
                                          color: "primary",
                                          variant: "text",
                                          rounded: "pill",
                                          onClick: ($event) => openLessons(item)
                                        }, {
                                          default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                            if (_push6) {
                                              _push6(`See details`);
                                            } else {
                                              return [
                                                createTextVNode("See details")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent5, _scopeId4));
                                      } else {
                                        _push5(`<!---->`);
                                      }
                                      if (item.journal) {
                                        _push5(ssrRenderComponent(VBtn, {
                                          color: "primary",
                                          variant: "outlined",
                                          rounded: "pill",
                                          to: meetingRoute(item.id)
                                        }, {
                                          default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                            if (_push6) {
                                              _push6(`Meeting journal`);
                                            } else {
                                              return [
                                                createTextVNode("Meeting journal")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent5, _scopeId4));
                                      } else {
                                        _push5(`<span class="text-body-2 text-medium-emphasis" data-v-7c05e6be${_scopeId4}>No journal</span>`);
                                      }
                                      _push5(`</div>`);
                                    } else {
                                      return [
                                        createVNode("h3", { class: "text-h6 mb-1" }, "Meeting " + toDisplayString(item.number) + " · " + toDisplayString(item.className), 1),
                                        createVNode("p", { class: "text-body-2 text-medium-emphasis mb-2" }, toDisplayString(unref(formatMeetingDate)(item.startsAt)) + " · " + toDisplayString(unref(formatMeetingTime)(item.startsAt)) + "–" + toDisplayString(unref(formatMeetingTime)(item.endsAt)) + " WIB", 1),
                                        createVNode("p", { class: "text-body-2 mb-2" }, toDisplayString(item.lessons.length) + " lessons", 1),
                                        createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                          item.lessons.length ? (openBlock(), createBlock(VBtn, {
                                            key: 0,
                                            color: "primary",
                                            variant: "text",
                                            rounded: "pill",
                                            onClick: ($event) => openLessons(item)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("See details")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])) : createCommentVNode("", true),
                                          item.journal ? (openBlock(), createBlock(VBtn, {
                                            key: 1,
                                            color: "primary",
                                            variant: "outlined",
                                            rounded: "pill",
                                            to: meetingRoute(item.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Meeting journal")
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])) : (openBlock(), createBlock("span", {
                                            key: 2,
                                            class: "text-body-2 text-medium-emphasis"
                                          }, "No journal"))
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              });
                              _push4(`<!--]--></div>`);
                            } else {
                              _push4(`<p class="pa-6 text-body-2 text-medium-emphasis" data-v-7c05e6be${_scopeId3}>No meetings recorded for this book.</p>`);
                            }
                          } else {
                            return [
                              items.length ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "pa-4 d-flex flex-column gap-3"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                                  return openBlock(), createBlock(VCard, {
                                    key: item.id,
                                    variant: "outlined",
                                    class: "pa-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("h3", { class: "text-h6 mb-1" }, "Meeting " + toDisplayString(item.number) + " · " + toDisplayString(item.className), 1),
                                      createVNode("p", { class: "text-body-2 text-medium-emphasis mb-2" }, toDisplayString(unref(formatMeetingDate)(item.startsAt)) + " · " + toDisplayString(unref(formatMeetingTime)(item.startsAt)) + "–" + toDisplayString(unref(formatMeetingTime)(item.endsAt)) + " WIB", 1),
                                      createVNode("p", { class: "text-body-2 mb-2" }, toDisplayString(item.lessons.length) + " lessons", 1),
                                      createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                        item.lessons.length ? (openBlock(), createBlock(VBtn, {
                                          key: 0,
                                          color: "primary",
                                          variant: "text",
                                          rounded: "pill",
                                          onClick: ($event) => openLessons(item)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("See details")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])) : createCommentVNode("", true),
                                        item.journal ? (openBlock(), createBlock(VBtn, {
                                          key: 1,
                                          color: "primary",
                                          variant: "outlined",
                                          rounded: "pill",
                                          to: meetingRoute(item.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Meeting journal")
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])) : (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: "text-body-2 text-medium-emphasis"
                                        }, "No journal"))
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ])) : (openBlock(), createBlock("p", {
                                key: 1,
                                class: "pa-6 text-body-2 text-medium-emphasis"
                              }, "No meetings recorded for this book."))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<div data-v-7c05e6be${_scopeId2}><h2 class="text-h6 mb-4" data-v-7c05e6be${_scopeId2}>Report list</h2>`);
                      _push3(ssrRenderComponent(UiTableView, {
                        title: "",
                        headers: reportHeaders,
                        items: reports.value,
                        "mobile-cards": true,
                        "hide-filters": true
                      }, {
                        "item.code": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.journal?.reportCode)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.journal?.reportCode), 1)
                            ];
                          }
                        }),
                        "item.meeting": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`Meeting ${ssrInterpolate(item.number)}`);
                          } else {
                            return [
                              createTextVNode("Meeting " + toDisplayString(item.number), 1)
                            ];
                          }
                        }),
                        "item.sentAt": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.journal?.sentAt ? formatDateTime(item.journal.sentAt) : "—")}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.journal?.sentAt ? formatDateTime(item.journal.sentAt) : "—"), 1)
                            ];
                          }
                        }),
                        "item.action": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VBtn, {
                              color: "primary",
                              variant: "text",
                              rounded: "pill",
                              to: meetingRoute(item.id)
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`View report`);
                                } else {
                                  return [
                                    createTextVNode("View report")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VBtn, {
                                color: "primary",
                                variant: "text",
                                rounded: "pill",
                                to: meetingRoute(item.id)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("View report")
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ];
                          }
                        }),
                        "no-data": withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<p class="pa-6 text-body-2 text-medium-emphasis" data-v-7c05e6be${_scopeId3}>No sent reports for this book.</p>`);
                          } else {
                            return [
                              createVNode("p", { class: "pa-6 text-body-2 text-medium-emphasis" }, "No sent reports for this book.")
                            ];
                          }
                        }),
                        "mobile-cards": withCtx(({ items }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            if (items.length) {
                              _push4(`<div class="pa-4 d-flex flex-column gap-3" data-v-7c05e6be${_scopeId3}><!--[-->`);
                              ssrRenderList(items, (item) => {
                                _push4(ssrRenderComponent(VCard, {
                                  key: item.id,
                                  variant: "outlined",
                                  class: "pa-4"
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`<h3 class="text-h6 mb-1" data-v-7c05e6be${_scopeId4}>${ssrInterpolate(item.journal?.reportCode)}</h3><p class="text-body-2 text-medium-emphasis mb-2" data-v-7c05e6be${_scopeId4}>Meeting ${ssrInterpolate(item.number)} · ${ssrInterpolate(item.journal?.sentAt ? formatDateTime(item.journal.sentAt) : "—")}</p>`);
                                      _push5(ssrRenderComponent(VBtn, {
                                        color: "primary",
                                        variant: "text",
                                        rounded: "pill",
                                        to: meetingRoute(item.id)
                                      }, {
                                        default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(`View report`);
                                          } else {
                                            return [
                                              createTextVNode("View report")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                    } else {
                                      return [
                                        createVNode("h3", { class: "text-h6 mb-1" }, toDisplayString(item.journal?.reportCode), 1),
                                        createVNode("p", { class: "text-body-2 text-medium-emphasis mb-2" }, "Meeting " + toDisplayString(item.number) + " · " + toDisplayString(item.journal?.sentAt ? formatDateTime(item.journal.sentAt) : "—"), 1),
                                        createVNode(VBtn, {
                                          color: "primary",
                                          variant: "text",
                                          rounded: "pill",
                                          to: meetingRoute(item.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("View report")
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              });
                              _push4(`<!--]--></div>`);
                            } else {
                              _push4(`<p class="pa-6 text-body-2 text-medium-emphasis" data-v-7c05e6be${_scopeId3}>No sent reports for this book.</p>`);
                            }
                          } else {
                            return [
                              items.length ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "pa-4 d-flex flex-column gap-3"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                                  return openBlock(), createBlock(VCard, {
                                    key: item.id,
                                    variant: "outlined",
                                    class: "pa-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("h3", { class: "text-h6 mb-1" }, toDisplayString(item.journal?.reportCode), 1),
                                      createVNode("p", { class: "text-body-2 text-medium-emphasis mb-2" }, "Meeting " + toDisplayString(item.number) + " · " + toDisplayString(item.journal?.sentAt ? formatDateTime(item.journal.sentAt) : "—"), 1),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        variant: "text",
                                        rounded: "pill",
                                        to: meetingRoute(item.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("View report")
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ])) : (openBlock(), createBlock("p", {
                                key: 1,
                                class: "pa-6 text-body-2 text-medium-emphasis"
                              }, "No sent reports for this book."))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    }
                  } else {
                    return [
                      activeTab.value === "learning-progress" ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("h2", { class: "text-h6 mb-4" }, toDisplayString(book.value.title), 1),
                        history.value.chapters.length ? (openBlock(), createBlock(VExpansionPanels, {
                          key: 0,
                          variant: "accordion"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(history.value.chapters, (chapter) => {
                              return openBlock(), createBlock(VExpansionPanel, {
                                key: chapter.id
                              }, {
                                default: withCtx(() => [
                                  createVNode(VExpansionPanelTitle, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-center flex-wrap gap-3" }, [
                                        createVNode("strong", null, toDisplayString(chapter.title), 1),
                                        createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(lessonCount(chapter)) + " lessons · " + toDisplayString(chapterProgress(chapter)) + "%", 1),
                                        createVNode(VChip, {
                                          color: chapterProgress(chapter) === 100 ? "success" : chapterProgress(chapter) ? "info" : "secondary",
                                          size: "small",
                                          variant: "tonal"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(progressLabel(chapterProgress(chapter))), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VExpansionPanelText, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(chapter.lessons, (lesson) => {
                                        return openBlock(), createBlock(VCard, {
                                          key: lesson.id,
                                          variant: "outlined",
                                          class: "pa-4 mb-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex justify-space-between align-start flex-wrap gap-2" }, [
                                              createVNode("div", null, [
                                                createVNode("h3", { class: "text-body-1 font-weight-medium mb-1" }, toDisplayString(lesson.title), 1),
                                                createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(lesson.progress) + "% progress · Score " + toDisplayString(lesson.score) + "/" + toDisplayString(lesson.maxScore), 1)
                                              ]),
                                              createVNode(VChip, {
                                                color: lesson.progress === 100 ? "success" : lesson.progress ? "info" : "secondary",
                                                size: "small",
                                                variant: "tonal"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(progressLabel(lesson.progress)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ]),
                                            createVNode(VProgressLinear, {
                                              "model-value": lesson.progress,
                                              color: "primary",
                                              class: "my-3",
                                              "aria-label": `${lesson.title} progress ${lesson.progress}%`
                                            }, null, 8, ["model-value", "aria-label"]),
                                            createVNode("ul", { class: "text-body-2 ps-5 mb-0" }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(lesson.objectives, (objective) => {
                                                return openBlock(), createBlock("li", { key: objective }, toDisplayString(objective), 1);
                                              }), 128))
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VCard, {
                          key: 1,
                          variant: "outlined",
                          class: "pa-6 text-body-2 text-medium-emphasis"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("No learning progress for this book yet.")
                          ]),
                          _: 1
                        }))
                      ])) : activeTab.value === "meeting-history" ? (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode("h2", { class: "text-h6 mb-4" }, "Meeting history"),
                        createVNode(UiTableView, {
                          title: "",
                          headers: meetingHeaders,
                          items: meetings.value,
                          "mobile-cards": true,
                          "hide-filters": true,
                          "items-per-page": 10
                        }, {
                          "item.date": withCtx(({ item }) => [
                            createVNode("strong", null, toDisplayString(unref(formatMeetingDate)(item.startsAt)), 1),
                            createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Meeting " + toDisplayString(item.number), 1)
                          ]),
                          "item.lessons": withCtx(({ item }) => [
                            createVNode("span", null, toDisplayString(item.lessons.length) + " lessons", 1),
                            item.lessons.length ? (openBlock(), createBlock(VBtn, {
                              key: 0,
                              color: "primary",
                              variant: "text",
                              rounded: "pill",
                              size: "small",
                              onClick: ($event) => openLessons(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("See details")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true)
                          ]),
                          "item.time": withCtx(({ item }) => [
                            createTextVNode(toDisplayString(unref(formatMeetingTime)(item.startsAt)) + "–" + toDisplayString(unref(formatMeetingTime)(item.endsAt)) + " WIB", 1)
                          ]),
                          "item.action": withCtx(({ item }) => [
                            item.journal ? (openBlock(), createBlock(VBtn, {
                              key: 0,
                              color: "primary",
                              variant: "text",
                              rounded: "pill",
                              to: meetingRoute(item.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Meeting journal")
                              ]),
                              _: 2
                            }, 1032, ["to"])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-body-2 text-medium-emphasis"
                            }, "No journal"))
                          ]),
                          "no-data": withCtx(() => [
                            createVNode("p", { class: "pa-6 text-body-2 text-medium-emphasis" }, "No meetings recorded for this book.")
                          ]),
                          "mobile-cards": withCtx(({ items }) => [
                            items.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "pa-4 d-flex flex-column gap-3"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                                return openBlock(), createBlock(VCard, {
                                  key: item.id,
                                  variant: "outlined",
                                  class: "pa-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { class: "text-h6 mb-1" }, "Meeting " + toDisplayString(item.number) + " · " + toDisplayString(item.className), 1),
                                    createVNode("p", { class: "text-body-2 text-medium-emphasis mb-2" }, toDisplayString(unref(formatMeetingDate)(item.startsAt)) + " · " + toDisplayString(unref(formatMeetingTime)(item.startsAt)) + "–" + toDisplayString(unref(formatMeetingTime)(item.endsAt)) + " WIB", 1),
                                    createVNode("p", { class: "text-body-2 mb-2" }, toDisplayString(item.lessons.length) + " lessons", 1),
                                    createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                      item.lessons.length ? (openBlock(), createBlock(VBtn, {
                                        key: 0,
                                        color: "primary",
                                        variant: "text",
                                        rounded: "pill",
                                        onClick: ($event) => openLessons(item)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("See details")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])) : createCommentVNode("", true),
                                      item.journal ? (openBlock(), createBlock(VBtn, {
                                        key: 1,
                                        color: "primary",
                                        variant: "outlined",
                                        rounded: "pill",
                                        to: meetingRoute(item.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Meeting journal")
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])) : (openBlock(), createBlock("span", {
                                        key: 2,
                                        class: "text-body-2 text-medium-emphasis"
                                      }, "No journal"))
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])) : (openBlock(), createBlock("p", {
                              key: 1,
                              class: "pa-6 text-body-2 text-medium-emphasis"
                            }, "No meetings recorded for this book."))
                          ]),
                          _: 1
                        }, 8, ["items"])
                      ])) : (openBlock(), createBlock("div", { key: 2 }, [
                        createVNode("h2", { class: "text-h6 mb-4" }, "Report list"),
                        createVNode(UiTableView, {
                          title: "",
                          headers: reportHeaders,
                          items: reports.value,
                          "mobile-cards": true,
                          "hide-filters": true
                        }, {
                          "item.code": withCtx(({ item }) => [
                            createTextVNode(toDisplayString(item.journal?.reportCode), 1)
                          ]),
                          "item.meeting": withCtx(({ item }) => [
                            createTextVNode("Meeting " + toDisplayString(item.number), 1)
                          ]),
                          "item.sentAt": withCtx(({ item }) => [
                            createTextVNode(toDisplayString(item.journal?.sentAt ? formatDateTime(item.journal.sentAt) : "—"), 1)
                          ]),
                          "item.action": withCtx(({ item }) => [
                            createVNode(VBtn, {
                              color: "primary",
                              variant: "text",
                              rounded: "pill",
                              to: meetingRoute(item.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("View report")
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]),
                          "no-data": withCtx(() => [
                            createVNode("p", { class: "pa-6 text-body-2 text-medium-emphasis" }, "No sent reports for this book.")
                          ]),
                          "mobile-cards": withCtx(({ items }) => [
                            items.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "pa-4 d-flex flex-column gap-3"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                                return openBlock(), createBlock(VCard, {
                                  key: item.id,
                                  variant: "outlined",
                                  class: "pa-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { class: "text-h6 mb-1" }, toDisplayString(item.journal?.reportCode), 1),
                                    createVNode("p", { class: "text-body-2 text-medium-emphasis mb-2" }, "Meeting " + toDisplayString(item.number) + " · " + toDisplayString(item.journal?.sentAt ? formatDateTime(item.journal.sentAt) : "—"), 1),
                                    createVNode(VBtn, {
                                      color: "primary",
                                      variant: "text",
                                      rounded: "pill",
                                      to: meetingRoute(item.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("View report")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])) : (openBlock(), createBlock("p", {
                              key: 1,
                              class: "pa-6 text-body-2 text-medium-emphasis"
                            }, "No sent reports for this book."))
                          ]),
                          _: 1
                        }, 8, ["items"])
                      ]))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, {
                      variant: "outlined",
                      class: "pa-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h2 class="text-h6 mb-4" data-v-7c05e6be${_scopeId3}>Student information</h2><div class="text-body-1 font-weight-medium" data-v-7c05e6be${_scopeId3}>${ssrInterpolate(student.value.name)}</div><div class="text-body-2 text-medium-emphasis mb-5" data-v-7c05e6be${_scopeId3}>${ssrInterpolate(student.value.studentId)}</div>`);
                          _push4(ssrRenderComponent(VDivider, { class: "mb-4" }, null, _parent4, _scopeId3));
                          _push4(`<dl class="facts" data-v-7c05e6be${_scopeId3}><div data-v-7c05e6be${_scopeId3}><dt data-v-7c05e6be${_scopeId3}>Course</dt><dd data-v-7c05e6be${_scopeId3}>${ssrInterpolate(history.value.course)}</dd></div><div data-v-7c05e6be${_scopeId3}><dt data-v-7c05e6be${_scopeId3}>Course status</dt><dd data-v-7c05e6be${_scopeId3}>`);
                          _push4(ssrRenderComponent(VChip, {
                            color: history.value.status === "Completed" ? "success" : "primary",
                            variant: "tonal",
                            size: "small"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(history.value.status)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(history.value.status), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</dd></div><div data-v-7c05e6be${_scopeId3}><dt data-v-7c05e6be${_scopeId3}>Branch</dt><dd data-v-7c05e6be${_scopeId3}>${ssrInterpolate(session.value.branch || "Not assigned")}</dd></div></dl>`);
                        } else {
                          return [
                            createVNode("h2", { class: "text-h6 mb-4" }, "Student information"),
                            createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(student.value.name), 1),
                            createVNode("div", { class: "text-body-2 text-medium-emphasis mb-5" }, toDisplayString(student.value.studentId), 1),
                            createVNode(VDivider, { class: "mb-4" }),
                            createVNode("dl", { class: "facts" }, [
                              createVNode("div", null, [
                                createVNode("dt", null, "Course"),
                                createVNode("dd", null, toDisplayString(history.value.course), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("dt", null, "Course status"),
                                createVNode("dd", null, [
                                  createVNode(VChip, {
                                    color: history.value.status === "Completed" ? "success" : "primary",
                                    variant: "tonal",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(history.value.status), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["color"])
                                ])
                              ]),
                              createVNode("div", null, [
                                createVNode("dt", null, "Branch"),
                                createVNode("dd", null, toDisplayString(session.value.branch || "Not assigned"), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCard, {
                        variant: "outlined",
                        class: "pa-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-h6 mb-4" }, "Student information"),
                          createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(student.value.name), 1),
                          createVNode("div", { class: "text-body-2 text-medium-emphasis mb-5" }, toDisplayString(student.value.studentId), 1),
                          createVNode(VDivider, { class: "mb-4" }),
                          createVNode("dl", { class: "facts" }, [
                            createVNode("div", null, [
                              createVNode("dt", null, "Course"),
                              createVNode("dd", null, toDisplayString(history.value.course), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("dt", null, "Course status"),
                              createVNode("dd", null, [
                                createVNode(VChip, {
                                  color: history.value.status === "Completed" ? "success" : "primary",
                                  variant: "tonal",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(history.value.status), 1)
                                  ]),
                                  _: 1
                                }, 8, ["color"])
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("dt", null, "Branch"),
                              createVNode("dd", null, toDisplayString(session.value.branch || "Not assigned"), 1)
                            ])
                          ])
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
                createVNode(VCol, {
                  cols: "12",
                  md: "8"
                }, {
                  default: withCtx(() => [
                    activeTab.value === "learning-progress" ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("h2", { class: "text-h6 mb-4" }, toDisplayString(book.value.title), 1),
                      history.value.chapters.length ? (openBlock(), createBlock(VExpansionPanels, {
                        key: 0,
                        variant: "accordion"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(history.value.chapters, (chapter) => {
                            return openBlock(), createBlock(VExpansionPanel, {
                              key: chapter.id
                            }, {
                              default: withCtx(() => [
                                createVNode(VExpansionPanelTitle, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-center flex-wrap gap-3" }, [
                                      createVNode("strong", null, toDisplayString(chapter.title), 1),
                                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(lessonCount(chapter)) + " lessons · " + toDisplayString(chapterProgress(chapter)) + "%", 1),
                                      createVNode(VChip, {
                                        color: chapterProgress(chapter) === 100 ? "success" : chapterProgress(chapter) ? "info" : "secondary",
                                        size: "small",
                                        variant: "tonal"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(progressLabel(chapterProgress(chapter))), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VExpansionPanelText, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(chapter.lessons, (lesson) => {
                                      return openBlock(), createBlock(VCard, {
                                        key: lesson.id,
                                        variant: "outlined",
                                        class: "pa-4 mb-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-space-between align-start flex-wrap gap-2" }, [
                                            createVNode("div", null, [
                                              createVNode("h3", { class: "text-body-1 font-weight-medium mb-1" }, toDisplayString(lesson.title), 1),
                                              createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(lesson.progress) + "% progress · Score " + toDisplayString(lesson.score) + "/" + toDisplayString(lesson.maxScore), 1)
                                            ]),
                                            createVNode(VChip, {
                                              color: lesson.progress === 100 ? "success" : lesson.progress ? "info" : "secondary",
                                              size: "small",
                                              variant: "tonal"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(progressLabel(lesson.progress)), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          createVNode(VProgressLinear, {
                                            "model-value": lesson.progress,
                                            color: "primary",
                                            class: "my-3",
                                            "aria-label": `${lesson.title} progress ${lesson.progress}%`
                                          }, null, 8, ["model-value", "aria-label"]),
                                          createVNode("ul", { class: "text-body-2 ps-5 mb-0" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(lesson.objectives, (objective) => {
                                              return openBlock(), createBlock("li", { key: objective }, toDisplayString(objective), 1);
                                            }), 128))
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(VCard, {
                        key: 1,
                        variant: "outlined",
                        class: "pa-6 text-body-2 text-medium-emphasis"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("No learning progress for this book yet.")
                        ]),
                        _: 1
                      }))
                    ])) : activeTab.value === "meeting-history" ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("h2", { class: "text-h6 mb-4" }, "Meeting history"),
                      createVNode(UiTableView, {
                        title: "",
                        headers: meetingHeaders,
                        items: meetings.value,
                        "mobile-cards": true,
                        "hide-filters": true,
                        "items-per-page": 10
                      }, {
                        "item.date": withCtx(({ item }) => [
                          createVNode("strong", null, toDisplayString(unref(formatMeetingDate)(item.startsAt)), 1),
                          createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Meeting " + toDisplayString(item.number), 1)
                        ]),
                        "item.lessons": withCtx(({ item }) => [
                          createVNode("span", null, toDisplayString(item.lessons.length) + " lessons", 1),
                          item.lessons.length ? (openBlock(), createBlock(VBtn, {
                            key: 0,
                            color: "primary",
                            variant: "text",
                            rounded: "pill",
                            size: "small",
                            onClick: ($event) => openLessons(item)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("See details")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true)
                        ]),
                        "item.time": withCtx(({ item }) => [
                          createTextVNode(toDisplayString(unref(formatMeetingTime)(item.startsAt)) + "–" + toDisplayString(unref(formatMeetingTime)(item.endsAt)) + " WIB", 1)
                        ]),
                        "item.action": withCtx(({ item }) => [
                          item.journal ? (openBlock(), createBlock(VBtn, {
                            key: 0,
                            color: "primary",
                            variant: "text",
                            rounded: "pill",
                            to: meetingRoute(item.id)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Meeting journal")
                            ]),
                            _: 2
                          }, 1032, ["to"])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-body-2 text-medium-emphasis"
                          }, "No journal"))
                        ]),
                        "no-data": withCtx(() => [
                          createVNode("p", { class: "pa-6 text-body-2 text-medium-emphasis" }, "No meetings recorded for this book.")
                        ]),
                        "mobile-cards": withCtx(({ items }) => [
                          items.length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "pa-4 d-flex flex-column gap-3"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                              return openBlock(), createBlock(VCard, {
                                key: item.id,
                                variant: "outlined",
                                class: "pa-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "text-h6 mb-1" }, "Meeting " + toDisplayString(item.number) + " · " + toDisplayString(item.className), 1),
                                  createVNode("p", { class: "text-body-2 text-medium-emphasis mb-2" }, toDisplayString(unref(formatMeetingDate)(item.startsAt)) + " · " + toDisplayString(unref(formatMeetingTime)(item.startsAt)) + "–" + toDisplayString(unref(formatMeetingTime)(item.endsAt)) + " WIB", 1),
                                  createVNode("p", { class: "text-body-2 mb-2" }, toDisplayString(item.lessons.length) + " lessons", 1),
                                  createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                    item.lessons.length ? (openBlock(), createBlock(VBtn, {
                                      key: 0,
                                      color: "primary",
                                      variant: "text",
                                      rounded: "pill",
                                      onClick: ($event) => openLessons(item)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("See details")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])) : createCommentVNode("", true),
                                    item.journal ? (openBlock(), createBlock(VBtn, {
                                      key: 1,
                                      color: "primary",
                                      variant: "outlined",
                                      rounded: "pill",
                                      to: meetingRoute(item.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Meeting journal")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])) : (openBlock(), createBlock("span", {
                                      key: 2,
                                      class: "text-body-2 text-medium-emphasis"
                                    }, "No journal"))
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])) : (openBlock(), createBlock("p", {
                            key: 1,
                            class: "pa-6 text-body-2 text-medium-emphasis"
                          }, "No meetings recorded for this book."))
                        ]),
                        _: 1
                      }, 8, ["items"])
                    ])) : (openBlock(), createBlock("div", { key: 2 }, [
                      createVNode("h2", { class: "text-h6 mb-4" }, "Report list"),
                      createVNode(UiTableView, {
                        title: "",
                        headers: reportHeaders,
                        items: reports.value,
                        "mobile-cards": true,
                        "hide-filters": true
                      }, {
                        "item.code": withCtx(({ item }) => [
                          createTextVNode(toDisplayString(item.journal?.reportCode), 1)
                        ]),
                        "item.meeting": withCtx(({ item }) => [
                          createTextVNode("Meeting " + toDisplayString(item.number), 1)
                        ]),
                        "item.sentAt": withCtx(({ item }) => [
                          createTextVNode(toDisplayString(item.journal?.sentAt ? formatDateTime(item.journal.sentAt) : "—"), 1)
                        ]),
                        "item.action": withCtx(({ item }) => [
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "text",
                            rounded: "pill",
                            to: meetingRoute(item.id)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("View report")
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        "no-data": withCtx(() => [
                          createVNode("p", { class: "pa-6 text-body-2 text-medium-emphasis" }, "No sent reports for this book.")
                        ]),
                        "mobile-cards": withCtx(({ items }) => [
                          items.length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "pa-4 d-flex flex-column gap-3"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                              return openBlock(), createBlock(VCard, {
                                key: item.id,
                                variant: "outlined",
                                class: "pa-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "text-h6 mb-1" }, toDisplayString(item.journal?.reportCode), 1),
                                  createVNode("p", { class: "text-body-2 text-medium-emphasis mb-2" }, "Meeting " + toDisplayString(item.number) + " · " + toDisplayString(item.journal?.sentAt ? formatDateTime(item.journal.sentAt) : "—"), 1),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    variant: "text",
                                    rounded: "pill",
                                    to: meetingRoute(item.id)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("View report")
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])) : (openBlock(), createBlock("p", {
                            key: 1,
                            class: "pa-6 text-body-2 text-medium-emphasis"
                          }, "No sent reports for this book."))
                        ]),
                        _: 1
                      }, 8, ["items"])
                    ]))
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  md: "4"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      variant: "outlined",
                      class: "pa-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-h6 mb-4" }, "Student information"),
                        createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(student.value.name), 1),
                        createVNode("div", { class: "text-body-2 text-medium-emphasis mb-5" }, toDisplayString(student.value.studentId), 1),
                        createVNode(VDivider, { class: "mb-4" }),
                        createVNode("dl", { class: "facts" }, [
                          createVNode("div", null, [
                            createVNode("dt", null, "Course"),
                            createVNode("dd", null, toDisplayString(history.value.course), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("dt", null, "Course status"),
                            createVNode("dd", null, [
                              createVNode(VChip, {
                                color: history.value.status === "Completed" ? "success" : "primary",
                                variant: "tonal",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(history.value.status), 1)
                                ]),
                                _: 1
                              }, 8, ["color"])
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("dt", null, "Branch"),
                            createVNode("dd", null, toDisplayString(session.value.branch || "Not assigned"), 1)
                          ])
                        ])
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
        _push(`<!--]-->`);
      }
      _push(ssrRenderComponent(VDialog, {
        modelValue: lessonDialog.value,
        "onUpdate:modelValue": ($event) => lessonDialog.value = $event,
        "max-width": "560"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "text-h6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Lesson opened`);
                      } else {
                        return [
                          createTextVNode("Lesson opened")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (selectedMeeting.value?.lessons.length) {
                          _push4(`<div data-v-7c05e6be${_scopeId3}><!--[-->`);
                          ssrRenderList(selectedMeeting.value.lessons, (lesson) => {
                            _push4(`<div class="py-2" data-v-7c05e6be${_scopeId3}><strong data-v-7c05e6be${_scopeId3}>${ssrInterpolate(lesson.title)}</strong><p class="text-body-2 text-medium-emphasis mb-0" data-v-7c05e6be${_scopeId3}>${ssrInterpolate(lesson.progress)}% progress · Score ${ssrInterpolate(lesson.score)}/${ssrInterpolate(lesson.maxScore)}</p></div>`);
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          _push4(`<p data-v-7c05e6be${_scopeId3}>No lessons opened.</p>`);
                        }
                      } else {
                        return [
                          selectedMeeting.value?.lessons.length ? (openBlock(), createBlock("div", { key: 0 }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(selectedMeeting.value.lessons, (lesson) => {
                              return openBlock(), createBlock("div", {
                                key: lesson.id,
                                class: "py-2"
                              }, [
                                createVNode("strong", null, toDisplayString(lesson.title), 1),
                                createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(lesson.progress) + "% progress · Score " + toDisplayString(lesson.score) + "/" + toDisplayString(lesson.maxScore), 1)
                              ]);
                            }), 128))
                          ])) : (openBlock(), createBlock("p", { key: 1 }, "No lessons opened."))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          variant: "text",
                          rounded: "pill",
                          onClick: ($event) => lessonDialog.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Close`);
                            } else {
                              return [
                                createTextVNode("Close")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "text",
                            rounded: "pill",
                            onClick: ($event) => lessonDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Close")
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
                    createVNode(VCardTitle, { class: "text-h6" }, {
                      default: withCtx(() => [
                        createTextVNode("Lesson opened")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        selectedMeeting.value?.lessons.length ? (openBlock(), createBlock("div", { key: 0 }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(selectedMeeting.value.lessons, (lesson) => {
                            return openBlock(), createBlock("div", {
                              key: lesson.id,
                              class: "py-2"
                            }, [
                              createVNode("strong", null, toDisplayString(lesson.title), 1),
                              createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(lesson.progress) + "% progress · Score " + toDisplayString(lesson.score) + "/" + toDisplayString(lesson.maxScore), 1)
                            ]);
                          }), 128))
                        ])) : (openBlock(), createBlock("p", { key: 1 }, "No lessons opened."))
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "text",
                          rounded: "pill",
                          onClick: ($event) => lessonDialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Close")
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-h6" }, {
                    default: withCtx(() => [
                      createTextVNode("Lesson opened")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      selectedMeeting.value?.lessons.length ? (openBlock(), createBlock("div", { key: 0 }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(selectedMeeting.value.lessons, (lesson) => {
                          return openBlock(), createBlock("div", {
                            key: lesson.id,
                            class: "py-2"
                          }, [
                            createVNode("strong", null, toDisplayString(lesson.title), 1),
                            createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(lesson.progress) + "% progress · Score " + toDisplayString(lesson.score) + "/" + toDisplayString(lesson.maxScore), 1)
                          ]);
                        }), 128))
                      ])) : (openBlock(), createBlock("p", { key: 1 }, "No lessons opened."))
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "text",
                        rounded: "pill",
                        onClick: ($event) => lessonDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Close")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student-session-history.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const studentSessionHistory = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7c05e6be"]]);
export {
  studentSessionHistory as default
};
