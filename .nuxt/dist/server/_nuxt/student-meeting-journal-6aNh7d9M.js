import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, computed } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { _ as _sfc_main$2 } from "./UiSectionHeader-DuDEa5TY.js";
import { f as formatMeetingDate, b as formatMeetingTime, s as studentHistories, a as historyBook, c as studentMeetings } from "./studentHistory-D6Asm5wf.js";
import { V as VCard } from "./VCard-u8p0g_5j.js";
import { V as VChip } from "./VChip-DklVb85L.js";
import { V as VRow, a as VCol } from "./VRow-BKXTxdYZ.js";
import { V as VDivider } from "./VDivider-CWdThEEs.js";
import { aY as _export_sfc, V as VBtn } from "../server.mjs";
import { s as studentRecords } from "./students-rxm8c39F.js";
import { d as studentSessions } from "./studentSessions-DLVEJCdB.js";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/hookable/dist/index.mjs";
import { V as VAlert } from "./VAlert-CLjViLm6.js";
import { V as VExpansionPanels, a as VExpansionPanel, b as VExpansionPanelTitle, c as VExpansionPanelText } from "./VExpansionPanels-B-Brlnoj.js";
import { a as VImg } from "./VAvatar-Bov4ZLUZ.js";
import "./VTooltip-iMMZgjjz.js";
import "./VOverlay-2hsH7Y4R.js";
import "./forwardRefs-CtuH3aYe.js";
import "./VCardText-Dvf5gJn3.js";
import "./index-CGI_inNZ.js";
/* empty css               */
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MeetingJournalReportPreview",
  __ssrInlineRender: true,
  props: {
    student: {},
    session: {},
    book: {},
    meeting: {},
    journal: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({
        variant: "outlined",
        class: "report-preview pa-6"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-space-between flex-wrap gap-3 mb-6" data-v-dcb0b78d${_scopeId}><div data-v-dcb0b78d${_scopeId}><div class="text-caption text-primary font-weight-medium" data-v-dcb0b78d${_scopeId}>Timedoor Academy</div><h3 class="text-h5 mb-0" data-v-dcb0b78d${_scopeId}>Daily journal report</h3></div>`);
            _push2(ssrRenderComponent(VChip, {
              color: _ctx.journal.status === "Sent" ? "success" : "secondary",
              variant: "tonal",
              size: "small"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.journal.status)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.journal.status), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><p class="text-body-2 text-medium-emphasis mb-5" data-v-dcb0b78d${_scopeId}>${ssrInterpolate(_ctx.journal.reportCode || "Draft report")} · ${ssrInterpolate(_ctx.student.name)} · ${ssrInterpolate(_ctx.session.code)}</p>`);
            _push2(ssrRenderComponent(VRow, { class: "mb-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-caption text-medium-emphasis" data-v-dcb0b78d${_scopeId3}>Date and time</div><div class="text-body-2" data-v-dcb0b78d${_scopeId3}>${ssrInterpolate(unref(formatMeetingDate)(_ctx.meeting.startsAt))} · ${ssrInterpolate(unref(formatMeetingTime)(_ctx.meeting.startsAt))}–${ssrInterpolate(unref(formatMeetingTime)(_ctx.meeting.endsAt))} WIB</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-caption text-medium-emphasis" }, "Date and time"),
                          createVNode("div", { class: "text-body-2" }, toDisplayString(unref(formatMeetingDate)(_ctx.meeting.startsAt)) + " · " + toDisplayString(unref(formatMeetingTime)(_ctx.meeting.startsAt)) + "–" + toDisplayString(unref(formatMeetingTime)(_ctx.meeting.endsAt)) + " WIB", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-caption text-medium-emphasis" data-v-dcb0b78d${_scopeId3}>Teacher</div><div class="text-body-2" data-v-dcb0b78d${_scopeId3}>${ssrInterpolate(_ctx.meeting.teacherName)}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-caption text-medium-emphasis" }, "Teacher"),
                          createVNode("div", { class: "text-body-2" }, toDisplayString(_ctx.meeting.teacherName), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-caption text-medium-emphasis" data-v-dcb0b78d${_scopeId3}>Book</div><div class="text-body-2" data-v-dcb0b78d${_scopeId3}>${ssrInterpolate(_ctx.book.title)}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-caption text-medium-emphasis" }, "Book"),
                          createVNode("div", { class: "text-body-2" }, toDisplayString(_ctx.book.title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-caption text-medium-emphasis" data-v-dcb0b78d${_scopeId3}>Class</div><div class="text-body-2" data-v-dcb0b78d${_scopeId3}>${ssrInterpolate(_ctx.meeting.className)}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-caption text-medium-emphasis" }, "Class"),
                          createVNode("div", { class: "text-body-2" }, toDisplayString(_ctx.meeting.className), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-caption text-medium-emphasis" }, "Date and time"),
                        createVNode("div", { class: "text-body-2" }, toDisplayString(unref(formatMeetingDate)(_ctx.meeting.startsAt)) + " · " + toDisplayString(unref(formatMeetingTime)(_ctx.meeting.startsAt)) + "–" + toDisplayString(unref(formatMeetingTime)(_ctx.meeting.endsAt)) + " WIB", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-caption text-medium-emphasis" }, "Teacher"),
                        createVNode("div", { class: "text-body-2" }, toDisplayString(_ctx.meeting.teacherName), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-caption text-medium-emphasis" }, "Book"),
                        createVNode("div", { class: "text-body-2" }, toDisplayString(_ctx.book.title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-caption text-medium-emphasis" }, "Class"),
                        createVNode("div", { class: "text-body-2" }, toDisplayString(_ctx.meeting.className), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, { class: "mb-4" }, null, _parent2, _scopeId));
            _push2(`<h4 class="text-h6 mb-3" data-v-dcb0b78d${_scopeId}>Covered lessons</h4>`);
            if (_ctx.meeting.lessons.length) {
              _push2(`<div data-v-dcb0b78d${_scopeId}><!--[-->`);
              ssrRenderList(_ctx.meeting.lessons, (lesson) => {
                _push2(`<div class="mb-4" data-v-dcb0b78d${_scopeId}><strong class="text-body-2" data-v-dcb0b78d${_scopeId}>${ssrInterpolate(lesson.title)} · ${ssrInterpolate(lesson.score)}/${ssrInterpolate(lesson.maxScore)}</strong><ul class="text-body-2 ps-5 mt-1" data-v-dcb0b78d${_scopeId}><!--[-->`);
                ssrRenderList(lesson.objectives, (objective) => {
                  _push2(`<li data-v-dcb0b78d${_scopeId}>${ssrInterpolate(objective)}</li>`);
                });
                _push2(`<!--]--></ul></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<p class="text-body-2 text-medium-emphasis" data-v-dcb0b78d${_scopeId}>No lessons recorded.</p>`);
            }
            _push2(`<h4 class="text-h6 mt-5 mb-2" data-v-dcb0b78d${_scopeId}>Teacher notes</h4><p class="text-body-2" data-v-dcb0b78d${_scopeId}>${ssrInterpolate(_ctx.journal.teacherNotes || "No teacher notes.")}</p><h4 class="text-h6 mt-5 mb-2" data-v-dcb0b78d${_scopeId}>AI summary</h4><p class="text-body-2 mb-0" data-v-dcb0b78d${_scopeId}>${ssrInterpolate(_ctx.journal.aiSummary || "No summary.")}</p>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-space-between flex-wrap gap-3 mb-6" }, [
                createVNode("div", null, [
                  createVNode("div", { class: "text-caption text-primary font-weight-medium" }, "Timedoor Academy"),
                  createVNode("h3", { class: "text-h5 mb-0" }, "Daily journal report")
                ]),
                createVNode(VChip, {
                  color: _ctx.journal.status === "Sent" ? "success" : "secondary",
                  variant: "tonal",
                  size: "small"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.journal.status), 1)
                  ]),
                  _: 1
                }, 8, ["color"])
              ]),
              createVNode("p", { class: "text-body-2 text-medium-emphasis mb-5" }, toDisplayString(_ctx.journal.reportCode || "Draft report") + " · " + toDisplayString(_ctx.student.name) + " · " + toDisplayString(_ctx.session.code), 1),
              createVNode(VRow, { class: "mb-3" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-caption text-medium-emphasis" }, "Date and time"),
                      createVNode("div", { class: "text-body-2" }, toDisplayString(unref(formatMeetingDate)(_ctx.meeting.startsAt)) + " · " + toDisplayString(unref(formatMeetingTime)(_ctx.meeting.startsAt)) + "–" + toDisplayString(unref(formatMeetingTime)(_ctx.meeting.endsAt)) + " WIB", 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-caption text-medium-emphasis" }, "Teacher"),
                      createVNode("div", { class: "text-body-2" }, toDisplayString(_ctx.meeting.teacherName), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-caption text-medium-emphasis" }, "Book"),
                      createVNode("div", { class: "text-body-2" }, toDisplayString(_ctx.book.title), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-caption text-medium-emphasis" }, "Class"),
                      createVNode("div", { class: "text-body-2" }, toDisplayString(_ctx.meeting.className), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider, { class: "mb-4" }),
              createVNode("h4", { class: "text-h6 mb-3" }, "Covered lessons"),
              _ctx.meeting.lessons.length ? (openBlock(), createBlock("div", { key: 0 }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.meeting.lessons, (lesson) => {
                  return openBlock(), createBlock("div", {
                    key: lesson.id,
                    class: "mb-4"
                  }, [
                    createVNode("strong", { class: "text-body-2" }, toDisplayString(lesson.title) + " · " + toDisplayString(lesson.score) + "/" + toDisplayString(lesson.maxScore), 1),
                    createVNode("ul", { class: "text-body-2 ps-5 mt-1" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(lesson.objectives, (objective) => {
                        return openBlock(), createBlock("li", { key: objective }, toDisplayString(objective), 1);
                      }), 128))
                    ])
                  ]);
                }), 128))
              ])) : (openBlock(), createBlock("p", {
                key: 1,
                class: "text-body-2 text-medium-emphasis"
              }, "No lessons recorded.")),
              createVNode("h4", { class: "text-h6 mt-5 mb-2" }, "Teacher notes"),
              createVNode("p", { class: "text-body-2" }, toDisplayString(_ctx.journal.teacherNotes || "No teacher notes."), 1),
              createVNode("h4", { class: "text-h6 mt-5 mb-2" }, "AI summary"),
              createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(_ctx.journal.aiSummary || "No summary."), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MeetingJournalReportPreview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MeetingJournalReportPreview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dcb0b78d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "student-meeting-journal",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const studentId = computed(() => String(route.params.studentId || ""));
    const sessionId = computed(() => String(route.params.sessionId || ""));
    const historyId = computed(() => String(route.params.historyId || ""));
    const meetingId = computed(() => String(route.params.meetingId || ""));
    const student = computed(() => studentRecords.find((item) => item.id === studentId.value));
    const session = computed(() => studentSessions.find((item) => item.id === sessionId.value && item.studentId === studentId.value));
    const history = computed(() => studentHistories.find((item) => item.id === historyId.value && item.studentId === studentId.value && item.sessionId === sessionId.value));
    const book = computed(() => history.value ? historyBook(history.value) : void 0);
    const meeting = computed(() => studentMeetings.find((item) => item.id === meetingId.value && item.studentId === studentId.value && item.sessionId === sessionId.value && item.historyId === historyId.value));
    const journal = computed(() => meeting.value?.journal);
    const historyRoute = computed(() => ({ path: `/students/${studentId.value}/sessions/${sessionId.value}/history/${historyId.value}`, query: { tab: "meeting-history" } }));
    const displayDateTime = (value) => `${formatMeetingDate(value)}, ${formatMeetingTime(value)} WIB`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-57679dc0>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: "Meeting journal",
        back: historyRoute.value,
        class: "mb-6"
      }, null, _parent));
      if (!student.value || !session.value || !history.value || !book.value || !meeting.value || !journal.value) {
        _push(ssrRenderComponent(VAlert, {
          type: "warning",
          variant: "tonal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Meeting journal not found for this student, session, and book.<div class="mt-3" data-v-57679dc0${_scopeId}>`);
              _push2(ssrRenderComponent(VBtn, {
                color: "primary",
                variant: "outlined",
                rounded: "pill",
                to: historyRoute.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Back to meeting history`);
                  } else {
                    return [
                      createTextVNode("Back to meeting history")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createTextVNode("Meeting journal not found for this student, session, and book."),
                createVNode("div", { class: "mt-3" }, [
                  createVNode(VBtn, {
                    color: "primary",
                    variant: "outlined",
                    rounded: "pill",
                    to: historyRoute.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Back to meeting history")
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
        _push(ssrRenderComponent(VCard, {
          variant: "outlined",
          class: "pa-6 mb-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="d-flex justify-space-between align-start flex-wrap gap-3" data-v-57679dc0${_scopeId}><div data-v-57679dc0${_scopeId}><h2 class="text-h5 mb-1" data-v-57679dc0${_scopeId}>${ssrInterpolate(student.value.name)}</h2><p class="text-body-2 text-medium-emphasis mb-0" data-v-57679dc0${_scopeId}>${ssrInterpolate(student.value.studentId)} · Session ${ssrInterpolate(session.value.number)} · ${ssrInterpolate(book.value.title)}</p></div>`);
              _push2(ssrRenderComponent(VChip, {
                color: journal.value.status === "Sent" ? "success" : "secondary",
                variant: "tonal"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(journal.value.status)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(journal.value.status), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent2, _scopeId));
              _push2(`<div class="d-flex flex-wrap gap-5 text-body-2" data-v-57679dc0${_scopeId}><span data-v-57679dc0${_scopeId}>Teacher: <strong data-v-57679dc0${_scopeId}>${ssrInterpolate(meeting.value.teacherName)}</strong></span><span data-v-57679dc0${_scopeId}>Updated: ${ssrInterpolate(displayDateTime(journal.value.updatedAt))}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "d-flex justify-space-between align-start flex-wrap gap-3" }, [
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-h5 mb-1" }, toDisplayString(student.value.name), 1),
                    createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(student.value.studentId) + " · Session " + toDisplayString(session.value.number) + " · " + toDisplayString(book.value.title), 1)
                  ]),
                  createVNode(VChip, {
                    color: journal.value.status === "Sent" ? "success" : "secondary",
                    variant: "tonal"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(journal.value.status), 1)
                    ]),
                    _: 1
                  }, 8, ["color"])
                ]),
                createVNode(VDivider, { class: "my-4" }),
                createVNode("div", { class: "d-flex flex-wrap gap-5 text-body-2" }, [
                  createVNode("span", null, [
                    createTextVNode("Teacher: "),
                    createVNode("strong", null, toDisplayString(meeting.value.teacherName), 1)
                  ]),
                  createVNode("span", null, "Updated: " + toDisplayString(displayDateTime(journal.value.updatedAt)), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (journal.value.status === "Sent") {
          _push(ssrRenderComponent(VAlert, {
            type: "info",
            variant: "tonal",
            class: "mb-6"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`This journal has been sent and locked.`);
              } else {
                return [
                  createTextVNode("This journal has been sent and locked.")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<h2 class="text-h6 mb-1" data-v-57679dc0>Covered lessons</h2><p class="text-body-2 text-medium-emphasis mb-4" data-v-57679dc0>Lessons covered in this meeting</p>`);
        if (meeting.value.lessons.length) {
          _push(ssrRenderComponent(VExpansionPanels, {
            variant: "accordion",
            class: "mb-6"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(meeting.value.lessons, (lesson) => {
                  _push2(ssrRenderComponent(VExpansionPanel, {
                    key: lesson.id
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(VExpansionPanelTitle, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="d-flex align-center justify-space-between flex-wrap gap-3 w-100 me-3" data-v-57679dc0${_scopeId3}><div data-v-57679dc0${_scopeId3}><strong data-v-57679dc0${_scopeId3}>${ssrInterpolate(lesson.title)}</strong><div class="text-body-2 text-medium-emphasis" data-v-57679dc0${_scopeId3}>${ssrInterpolate(lesson.progress)}% progress</div></div><span class="text-body-2" data-v-57679dc0${_scopeId3}>Score ${ssrInterpolate(lesson.score)}/${ssrInterpolate(lesson.maxScore)}</span></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-3 w-100 me-3" }, [
                                  createVNode("div", null, [
                                    createVNode("strong", null, toDisplayString(lesson.title), 1),
                                    createVNode("div", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(lesson.progress) + "% progress", 1)
                                  ]),
                                  createVNode("span", { class: "text-body-2" }, "Score " + toDisplayString(lesson.score) + "/" + toDisplayString(lesson.maxScore), 1)
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(VExpansionPanelText, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<h3 class="text-body-2 font-weight-medium mb-2" data-v-57679dc0${_scopeId3}>Lesson objectives</h3><ul class="ps-5 text-body-2" data-v-57679dc0${_scopeId3}><!--[-->`);
                              ssrRenderList(lesson.objectives, (objective) => {
                                _push4(`<li data-v-57679dc0${_scopeId3}>${ssrInterpolate(objective)}</li>`);
                              });
                              _push4(`<!--]--></ul>`);
                            } else {
                              return [
                                createVNode("h3", { class: "text-body-2 font-weight-medium mb-2" }, "Lesson objectives"),
                                createVNode("ul", { class: "ps-5 text-body-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(lesson.objectives, (objective) => {
                                    return openBlock(), createBlock("li", { key: objective }, toDisplayString(objective), 1);
                                  }), 128))
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(VExpansionPanelTitle, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-3 w-100 me-3" }, [
                                createVNode("div", null, [
                                  createVNode("strong", null, toDisplayString(lesson.title), 1),
                                  createVNode("div", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(lesson.progress) + "% progress", 1)
                                ]),
                                createVNode("span", { class: "text-body-2" }, "Score " + toDisplayString(lesson.score) + "/" + toDisplayString(lesson.maxScore), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VExpansionPanelText, null, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "text-body-2 font-weight-medium mb-2" }, "Lesson objectives"),
                              createVNode("ul", { class: "ps-5 text-body-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(lesson.objectives, (objective) => {
                                  return openBlock(), createBlock("li", { key: objective }, toDisplayString(objective), 1);
                                }), 128))
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(meeting.value.lessons, (lesson) => {
                    return openBlock(), createBlock(VExpansionPanel, {
                      key: lesson.id
                    }, {
                      default: withCtx(() => [
                        createVNode(VExpansionPanelTitle, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-3 w-100 me-3" }, [
                              createVNode("div", null, [
                                createVNode("strong", null, toDisplayString(lesson.title), 1),
                                createVNode("div", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(lesson.progress) + "% progress", 1)
                              ]),
                              createVNode("span", { class: "text-body-2" }, "Score " + toDisplayString(lesson.score) + "/" + toDisplayString(lesson.maxScore), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VExpansionPanelText, null, {
                          default: withCtx(() => [
                            createVNode("h3", { class: "text-body-2 font-weight-medium mb-2" }, "Lesson objectives"),
                            createVNode("ul", { class: "ps-5 text-body-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(lesson.objectives, (objective) => {
                                return openBlock(), createBlock("li", { key: objective }, toDisplayString(objective), 1);
                              }), 128))
                            ])
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
          }, _parent));
        } else {
          _push(ssrRenderComponent(VCard, {
            variant: "outlined",
            class: "pa-5 mb-6 text-body-2 text-medium-emphasis"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`No lessons recorded for this meeting.`);
              } else {
                return [
                  createTextVNode("No lessons recorded for this meeting.")
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`<h2 class="text-h6 mb-1" data-v-57679dc0>Detail information</h2><p class="text-body-2 text-medium-emphasis mb-4" data-v-57679dc0>Project, notes, evidence, and summary</p>`);
        _push(ssrRenderComponent(VRow, { class: "mb-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, {
                      variant: "outlined",
                      class: "pa-5 h-100"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h3 class="text-h6 mb-4" data-v-57679dc0${_scopeId3}>Project details</h3><dl class="facts" data-v-57679dc0${_scopeId3}><div data-v-57679dc0${_scopeId3}><dt data-v-57679dc0${_scopeId3}>Active project</dt><dd data-v-57679dc0${_scopeId3}>${ssrInterpolate(journal.value.activeProject ? "Yes" : "No")}</dd></div><div data-v-57679dc0${_scopeId3}><dt data-v-57679dc0${_scopeId3}>Project</dt><dd data-v-57679dc0${_scopeId3}>${ssrInterpolate(journal.value.projectName || "None")}</dd></div></dl><h3 class="text-h6 mt-6 mb-2" data-v-57679dc0${_scopeId3}>Teacher notes</h3><p class="text-body-2 mb-0" data-v-57679dc0${_scopeId3}>${ssrInterpolate(journal.value.teacherNotes || "No teacher notes.")}</p>`);
                        } else {
                          return [
                            createVNode("h3", { class: "text-h6 mb-4" }, "Project details"),
                            createVNode("dl", { class: "facts" }, [
                              createVNode("div", null, [
                                createVNode("dt", null, "Active project"),
                                createVNode("dd", null, toDisplayString(journal.value.activeProject ? "Yes" : "No"), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("dt", null, "Project"),
                                createVNode("dd", null, toDisplayString(journal.value.projectName || "None"), 1)
                              ])
                            ]),
                            createVNode("h3", { class: "text-h6 mt-6 mb-2" }, "Teacher notes"),
                            createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(journal.value.teacherNotes || "No teacher notes."), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCard, {
                        variant: "outlined",
                        class: "pa-5 h-100"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "text-h6 mb-4" }, "Project details"),
                          createVNode("dl", { class: "facts" }, [
                            createVNode("div", null, [
                              createVNode("dt", null, "Active project"),
                              createVNode("dd", null, toDisplayString(journal.value.activeProject ? "Yes" : "No"), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("dt", null, "Project"),
                              createVNode("dd", null, toDisplayString(journal.value.projectName || "None"), 1)
                            ])
                          ]),
                          createVNode("h3", { class: "text-h6 mt-6 mb-2" }, "Teacher notes"),
                          createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(journal.value.teacherNotes || "No teacher notes."), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, {
                      variant: "outlined",
                      class: "pa-5 h-100"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h3 class="text-h6 mb-4" data-v-57679dc0${_scopeId3}>AI summary</h3><p class="text-body-2" data-v-57679dc0${_scopeId3}>${ssrInterpolate(journal.value.aiSummary || "No summary.")}</p><h3 class="text-h6 mt-6 mb-3" data-v-57679dc0${_scopeId3}>Evidence photo</h3>`);
                          if (journal.value.evidencePhotos.length) {
                            _push4(`<div class="d-flex flex-wrap gap-3" data-v-57679dc0${_scopeId3}><!--[-->`);
                            ssrRenderList(journal.value.evidencePhotos, (photo) => {
                              _push4(ssrRenderComponent(VImg, {
                                key: photo,
                                src: photo,
                                alt: `Evidence for meeting ${meeting.value.number}`,
                                width: "120",
                                "max-width": "120",
                                height: "120",
                                cover: "",
                                class: "rounded"
                              }, null, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div>`);
                          } else {
                            _push4(`<p class="text-body-2 text-medium-emphasis mb-0" data-v-57679dc0${_scopeId3}>No evidence photos.</p>`);
                          }
                        } else {
                          return [
                            createVNode("h3", { class: "text-h6 mb-4" }, "AI summary"),
                            createVNode("p", { class: "text-body-2" }, toDisplayString(journal.value.aiSummary || "No summary."), 1),
                            createVNode("h3", { class: "text-h6 mt-6 mb-3" }, "Evidence photo"),
                            journal.value.evidencePhotos.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "d-flex flex-wrap gap-3"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(journal.value.evidencePhotos, (photo) => {
                                return openBlock(), createBlock(VImg, {
                                  key: photo,
                                  src: photo,
                                  alt: `Evidence for meeting ${meeting.value.number}`,
                                  width: "120",
                                  "max-width": "120",
                                  height: "120",
                                  cover: "",
                                  class: "rounded"
                                }, null, 8, ["src", "alt"]);
                              }), 128))
                            ])) : (openBlock(), createBlock("p", {
                              key: 1,
                              class: "text-body-2 text-medium-emphasis mb-0"
                            }, "No evidence photos."))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCard, {
                        variant: "outlined",
                        class: "pa-5 h-100"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "text-h6 mb-4" }, "AI summary"),
                          createVNode("p", { class: "text-body-2" }, toDisplayString(journal.value.aiSummary || "No summary."), 1),
                          createVNode("h3", { class: "text-h6 mt-6 mb-3" }, "Evidence photo"),
                          journal.value.evidencePhotos.length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "d-flex flex-wrap gap-3"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(journal.value.evidencePhotos, (photo) => {
                              return openBlock(), createBlock(VImg, {
                                key: photo,
                                src: photo,
                                alt: `Evidence for meeting ${meeting.value.number}`,
                                width: "120",
                                "max-width": "120",
                                height: "120",
                                cover: "",
                                class: "rounded"
                              }, null, 8, ["src", "alt"]);
                            }), 128))
                          ])) : (openBlock(), createBlock("p", {
                            key: 1,
                            class: "text-body-2 text-medium-emphasis mb-0"
                          }, "No evidence photos."))
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
                  md: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      variant: "outlined",
                      class: "pa-5 h-100"
                    }, {
                      default: withCtx(() => [
                        createVNode("h3", { class: "text-h6 mb-4" }, "Project details"),
                        createVNode("dl", { class: "facts" }, [
                          createVNode("div", null, [
                            createVNode("dt", null, "Active project"),
                            createVNode("dd", null, toDisplayString(journal.value.activeProject ? "Yes" : "No"), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("dt", null, "Project"),
                            createVNode("dd", null, toDisplayString(journal.value.projectName || "None"), 1)
                          ])
                        ]),
                        createVNode("h3", { class: "text-h6 mt-6 mb-2" }, "Teacher notes"),
                        createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(journal.value.teacherNotes || "No teacher notes."), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  md: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      variant: "outlined",
                      class: "pa-5 h-100"
                    }, {
                      default: withCtx(() => [
                        createVNode("h3", { class: "text-h6 mb-4" }, "AI summary"),
                        createVNode("p", { class: "text-body-2" }, toDisplayString(journal.value.aiSummary || "No summary."), 1),
                        createVNode("h3", { class: "text-h6 mt-6 mb-3" }, "Evidence photo"),
                        journal.value.evidencePhotos.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "d-flex flex-wrap gap-3"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(journal.value.evidencePhotos, (photo) => {
                            return openBlock(), createBlock(VImg, {
                              key: photo,
                              src: photo,
                              alt: `Evidence for meeting ${meeting.value.number}`,
                              width: "120",
                              "max-width": "120",
                              height: "120",
                              cover: "",
                              class: "rounded"
                            }, null, 8, ["src", "alt"]);
                          }), 128))
                        ])) : (openBlock(), createBlock("p", {
                          key: 1,
                          class: "text-body-2 text-medium-emphasis mb-0"
                        }, "No evidence photos."))
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
        _push(`<h2 class="text-h6 mb-1" data-v-57679dc0>Review report</h2><p class="text-body-2 text-medium-emphasis mb-4" data-v-57679dc0>${ssrInterpolate(journal.value.status === "Sent" ? `Sent ${journal.value.sentAt ? displayDateTime(journal.value.sentAt) : "date unavailable"}` : "Draft preview")}</p>`);
        _push(ssrRenderComponent(MeetingJournalReportPreview, {
          student: student.value,
          session: session.value,
          book: book.value,
          meeting: meeting.value,
          journal: journal.value
        }, null, _parent));
        _push(`<!--]-->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student-meeting-journal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const studentMeetingJournal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-57679dc0"]]);
export {
  studentMeetingJournal as default
};
