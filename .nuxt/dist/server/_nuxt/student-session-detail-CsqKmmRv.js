import { defineComponent, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import { a as avatarText } from "./formatters-aT3ik1oa.js";
import { _ as _sfc_main$1 } from "./UiSectionHeader-DuDEa5TY.js";
import { U as UiTableView } from "./UiTableView-BhoxpkGV.js";
import { s as studentRecords } from "./students-rxm8c39F.js";
import { d as studentSessions, a as sessionBook, f as formatSessionDate } from "./studentSessions-DLVEJCdB.js";
import { h as historiesForSession, a as historyBook, m as meetingsForHistory } from "./studentHistory-D6Asm5wf.js";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/hookable/dist/index.mjs";
import { V as VAlert } from "./VAlert-CLjViLm6.js";
import { V as VBtn, a as VIcon, aY as _export_sfc } from "../server.mjs";
import { V as VTabs, a as VTab } from "./VTabs-Bx65mjDv.js";
import { V as VCard } from "./VCard-u8p0g_5j.js";
import { V as VChip } from "./VChip-DklVb85L.js";
import { V as VRow, a as VCol } from "./VRow-BKXTxdYZ.js";
import { V as VAvatar } from "./VAvatar-Bov4ZLUZ.js";
import "./VTooltip-iMMZgjjz.js";
import "./VOverlay-2hsH7Y4R.js";
import "./forwardRefs-CtuH3aYe.js";
import "./VDivider-CWdThEEs.js";
import "./VCardText-Dvf5gJn3.js";
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
  __name: "student-session-detail",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const studentId = computed(() => String(route.params.studentId || ""));
    const sessionId = computed(() => String(route.params.sessionId || ""));
    const student = computed(() => studentRecords.find((item) => item.id === studentId.value));
    const studentInitials = computed(() => avatarText(student.value?.name || "Student"));
    const session = computed(() => studentSessions.find(
      (item) => item.id === sessionId.value && item.studentId === studentId.value
    ));
    const book = computed(() => session.value ? sessionBook(session.value) : void 0);
    const activeTab = computed(() => route.query.tab === "history" ? "history" : "information");
    const selectTab = (tab) => router.replace({ query: { ...route.query, tab } });
    const histories = computed(() => historiesForSession(studentId.value, sessionId.value));
    const historyHeaders = [
      { title: "Book", key: "book" },
      { title: "Total", key: "total" },
      { title: "Type", key: "type" },
      { title: "Finished date", key: "finishedAt" },
      { title: "Status", key: "status" },
      { title: "Action", key: "action", sortable: false }
    ];
    const historyRoute = (historyId, tab = "learning-progress") => ({
      path: `/students/${studentId.value}/sessions/${sessionId.value}/history/${historyId}`,
      query: { tab }
    });
    const displayDate = (value) => value ? new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "Asia/Jakarta"
    }).format(new Date(value)) : "—";
    const sessionListRoute = computed(
      () => student.value ? { path: "/student-detail", query: { id: student.value.id, tab: "session" } } : { path: "/students" }
    );
    const booksRoute = computed(() => ({ path: "/student-detail", query: { id: studentId.value, tab: "books" } }));
    const formattedPrice = computed(
      () => session.value?.pricePerMeeting === void 0 ? null : new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(session.value.pricePerMeeting)
    );
    const formattedUpdate = computed(
      () => session.value ? new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Jakarta"
      }).format(new Date(session.value.lastUpdated)) + " WIB" : ""
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "session-detail-page" }, _attrs))} data-v-ee766616>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Session detail",
        back: sessionListRoute.value,
        class: "mb-6"
      }, null, _parent));
      if (!student.value || !session.value || !book.value) {
        _push(ssrRenderComponent(VAlert, {
          type: "warning",
          variant: "tonal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Session not found for this student. <div class="mt-3" data-v-ee766616${_scopeId}>`);
              _push2(ssrRenderComponent(VBtn, {
                color: "primary",
                variant: "outlined",
                rounded: "pill",
                to: sessionListRoute.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Back to sessions`);
                  } else {
                    return [
                      createTextVNode("Back to sessions")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createTextVNode(" Session not found for this student. "),
                createVNode("div", { class: "mt-3" }, [
                  createVNode(VBtn, {
                    color: "primary",
                    variant: "outlined",
                    rounded: "pill",
                    to: sessionListRoute.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Back to sessions")
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
              _push2(ssrRenderComponent(VTab, { value: "information" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Information`);
                  } else {
                    return [
                      createTextVNode("Information")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VTab, { value: "history" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Session history`);
                  } else {
                    return [
                      createTextVNode("Session history")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VTab, { value: "information" }, {
                  default: withCtx(() => [
                    createTextVNode("Information")
                  ]),
                  _: 1
                }),
                createVNode(VTab, { value: "history" }, {
                  default: withCtx(() => [
                    createTextVNode("Session history")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        if (activeTab.value === "history") {
          _push(ssrRenderComponent(UiTableView, {
            title: "",
            headers: historyHeaders,
            items: histories.value,
            "mobile-cards": true,
            "hide-filters": true
          }, {
            "item.book": withCtx(({ item }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<strong data-v-ee766616${_scopeId}>${ssrInterpolate(unref(historyBook)(item)?.title || "Book unavailable")}</strong><div class="text-body-2 text-medium-emphasis" data-v-ee766616${_scopeId}>${ssrInterpolate(item.course)}</div>`);
              } else {
                return [
                  createVNode("strong", null, toDisplayString(unref(historyBook)(item)?.title || "Book unavailable"), 1),
                  createVNode("div", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.course), 1)
                ];
              }
            }),
            "item.total": withCtx(({ item }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(meetingsForHistory)(item).length)} meetings`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(meetingsForHistory)(item).length) + " meetings", 1)
                ];
              }
            }),
            "item.finishedAt": withCtx(({ item }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(displayDate(item.finishedAt))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(displayDate(item.finishedAt)), 1)
                ];
              }
            }),
            "item.status": withCtx(({ item }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VChip, {
                  color: item.status === "Completed" ? "success" : item.status === "Ongoing" ? "primary" : "secondary",
                  variant: "tonal",
                  size: "small"
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.status)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.status), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VChip, {
                    color: item.status === "Completed" ? "success" : item.status === "Ongoing" ? "primary" : "secondary",
                    variant: "tonal",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.status), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ];
              }
            }),
            "item.action": withCtx(({ item }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VBtn, {
                  color: "primary",
                  variant: "text",
                  rounded: "pill",
                  to: historyRoute(item.id)
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`See details`);
                    } else {
                      return [
                        createTextVNode("See details")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VBtn, {
                    color: "primary",
                    variant: "text",
                    rounded: "pill",
                    to: historyRoute(item.id)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("See details")
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ];
              }
            }),
            "no-data": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<p class="pa-6 text-body-2 text-medium-emphasis" data-v-ee766616${_scopeId}>No book history for this session.</p>`);
              } else {
                return [
                  createVNode("p", { class: "pa-6 text-body-2 text-medium-emphasis" }, "No book history for this session.")
                ];
              }
            }),
            "mobile-cards": withCtx(({ items }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (items.length) {
                  _push2(`<div class="pa-4 d-flex flex-column gap-3" data-v-ee766616${_scopeId}><!--[-->`);
                  ssrRenderList(items, (item) => {
                    _push2(ssrRenderComponent(VCard, {
                      key: item.id,
                      variant: "outlined",
                      class: "pa-4"
                    }, {
                      default: withCtx((_, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div class="d-flex justify-space-between align-start gap-3" data-v-ee766616${_scopeId2}><h2 class="text-h6 mb-0" data-v-ee766616${_scopeId2}>${ssrInterpolate(unref(historyBook)(item)?.title || "Book unavailable")}</h2>`);
                          _push3(ssrRenderComponent(VChip, {
                            color: item.status === "Completed" ? "success" : "primary",
                            variant: "tonal",
                            size: "small"
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
                          _push3(`</div><p class="text-body-2 text-medium-emphasis mt-2 mb-2" data-v-ee766616${_scopeId2}>${ssrInterpolate(item.course)} · ${ssrInterpolate(item.type)} · ${ssrInterpolate(unref(meetingsForHistory)(item).length)} meetings</p><p class="text-caption text-medium-emphasis mb-2" data-v-ee766616${_scopeId2}>Finished ${ssrInterpolate(displayDate(item.finishedAt))}</p>`);
                          _push3(ssrRenderComponent(VBtn, {
                            color: "primary",
                            variant: "text",
                            rounded: "pill",
                            to: historyRoute(item.id)
                          }, {
                            default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`See details`);
                              } else {
                                return [
                                  createTextVNode("See details")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode("div", { class: "d-flex justify-space-between align-start gap-3" }, [
                              createVNode("h2", { class: "text-h6 mb-0" }, toDisplayString(unref(historyBook)(item)?.title || "Book unavailable"), 1),
                              createVNode(VChip, {
                                color: item.status === "Completed" ? "success" : "primary",
                                variant: "tonal",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.status), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            createVNode("p", { class: "text-body-2 text-medium-emphasis mt-2 mb-2" }, toDisplayString(item.course) + " · " + toDisplayString(item.type) + " · " + toDisplayString(unref(meetingsForHistory)(item).length) + " meetings", 1),
                            createVNode("p", { class: "text-caption text-medium-emphasis mb-2" }, "Finished " + toDisplayString(displayDate(item.finishedAt)), 1),
                            createVNode(VBtn, {
                              color: "primary",
                              variant: "text",
                              rounded: "pill",
                              to: historyRoute(item.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("See details")
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<p class="pa-6 text-body-2 text-medium-emphasis" data-v-ee766616${_scopeId}>No book history for this session.</p>`);
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
                          createVNode("div", { class: "d-flex justify-space-between align-start gap-3" }, [
                            createVNode("h2", { class: "text-h6 mb-0" }, toDisplayString(unref(historyBook)(item)?.title || "Book unavailable"), 1),
                            createVNode(VChip, {
                              color: item.status === "Completed" ? "success" : "primary",
                              variant: "tonal",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode("p", { class: "text-body-2 text-medium-emphasis mt-2 mb-2" }, toDisplayString(item.course) + " · " + toDisplayString(item.type) + " · " + toDisplayString(unref(meetingsForHistory)(item).length) + " meetings", 1),
                          createVNode("p", { class: "text-caption text-medium-emphasis mb-2" }, "Finished " + toDisplayString(displayDate(item.finishedAt)), 1),
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "text",
                            rounded: "pill",
                            to: historyRoute(item.id)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("See details")
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
                  }, "No book history for this session."))
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(VRow, { class: "session-detail-layout" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VCol, {
                  cols: "12",
                  md: "8",
                  class: "d-flex flex-column gap-6"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VCard, {
                        variant: "outlined",
                        class: "detail-card pa-6"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="d-flex align-center gap-3 mb-6" data-v-ee766616${_scopeId3}><div class="icon-wrapper" data-v-ee766616${_scopeId3}>`);
                            _push4(ssrRenderComponent(VIcon, {
                              icon: "ri-book-2-line",
                              color: "primary",
                              size: "20"
                            }, null, _parent4, _scopeId3));
                            _push4(`</div><h2 class="text-h6 font-weight-medium text-high-emphasis mb-0" data-v-ee766616${_scopeId3}>Product information</h2></div><div class="product-panel pa-5 mb-4" data-v-ee766616${_scopeId3}><div class="d-flex align-center flex-wrap gap-2 mb-5" data-v-ee766616${_scopeId3}>`);
                            _push4(ssrRenderComponent(VChip, {
                              color: "primary",
                              size: "small"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`Package`);
                                } else {
                                  return [
                                    createTextVNode("Package")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`<span class="text-body-2 font-weight-medium text-primary" data-v-ee766616${_scopeId3}>${ssrInterpolate(session.value.packageName)}</span></div><div class="d-flex align-center gap-3 mb-4" data-v-ee766616${_scopeId3}>`);
                            _push4(ssrRenderComponent(VAvatar, {
                              color: "primary",
                              variant: "tonal",
                              rounded: "lg",
                              size: "44"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "ri-bookmark-line",
                                    size: "24"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VIcon, {
                                      icon: "ri-bookmark-line",
                                      size: "24"
                                    })
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`<div data-v-ee766616${_scopeId3}><h3 class="text-h6 font-weight-medium text-high-emphasis mb-0" data-v-ee766616${_scopeId3}>${ssrInterpolate(session.value.productName)}</h3><p class="text-body-2 text-medium-emphasis mb-0" data-v-ee766616${_scopeId3}>${ssrInterpolate(book.value.title)}</p></div></div>`);
                            if (formattedPrice.value) {
                              _push4(`<div data-v-ee766616${_scopeId3}>`);
                              _push4(ssrRenderComponent(VChip, {
                                color: "primary",
                                variant: "tonal",
                                size: "small",
                                class: "mb-2"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`Variant IDR`);
                                  } else {
                                    return [
                                      createTextVNode("Variant IDR")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent4, _scopeId3));
                              _push4(`<div class="text-h4 font-weight-medium text-high-emphasis" data-v-ee766616${_scopeId3}>${ssrInterpolate(formattedPrice.value)}</div><div class="text-body-2 text-medium-emphasis" data-v-ee766616${_scopeId3}>Price per meeting</div></div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div><dl class="info-list mb-0" data-v-ee766616${_scopeId3}><div class="info-row" data-v-ee766616${_scopeId3}><dt data-v-ee766616${_scopeId3}>Book</dt><dd data-v-ee766616${_scopeId3}>${ssrInterpolate(book.value.title)}</dd></div><div class="info-row" data-v-ee766616${_scopeId3}><dt data-v-ee766616${_scopeId3}>Class type</dt><dd data-v-ee766616${_scopeId3}>${ssrInterpolate(session.value.classType)}</dd></div><div class="info-row" data-v-ee766616${_scopeId3}><dt data-v-ee766616${_scopeId3}>Meeting left</dt><dd data-v-ee766616${_scopeId3}>${ssrInterpolate(session.value.meetingsLeft)} of ${ssrInterpolate(session.value.quota)} meetings</dd></div><div class="info-row" data-v-ee766616${_scopeId3}><dt data-v-ee766616${_scopeId3}>Expired date</dt><dd data-v-ee766616${_scopeId3}>${ssrInterpolate(unref(formatSessionDate)(session.value.expiresAt))}</dd></div></dl>`);
                          } else {
                            return [
                              createVNode("div", { class: "d-flex align-center gap-3 mb-6" }, [
                                createVNode("div", { class: "icon-wrapper" }, [
                                  createVNode(VIcon, {
                                    icon: "ri-book-2-line",
                                    color: "primary",
                                    size: "20"
                                  })
                                ]),
                                createVNode("h2", { class: "text-h6 font-weight-medium text-high-emphasis mb-0" }, "Product information")
                              ]),
                              createVNode("div", { class: "product-panel pa-5 mb-4" }, [
                                createVNode("div", { class: "d-flex align-center flex-wrap gap-2 mb-5" }, [
                                  createVNode(VChip, {
                                    color: "primary",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Package")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", { class: "text-body-2 font-weight-medium text-primary" }, toDisplayString(session.value.packageName), 1)
                                ]),
                                createVNode("div", { class: "d-flex align-center gap-3 mb-4" }, [
                                  createVNode(VAvatar, {
                                    color: "primary",
                                    variant: "tonal",
                                    rounded: "lg",
                                    size: "44"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-bookmark-line",
                                        size: "24"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", null, [
                                    createVNode("h3", { class: "text-h6 font-weight-medium text-high-emphasis mb-0" }, toDisplayString(session.value.productName), 1),
                                    createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(book.value.title), 1)
                                  ])
                                ]),
                                formattedPrice.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode(VChip, {
                                    color: "primary",
                                    variant: "tonal",
                                    size: "small",
                                    class: "mb-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Variant IDR")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "text-h4 font-weight-medium text-high-emphasis" }, toDisplayString(formattedPrice.value), 1),
                                  createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Price per meeting")
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("dl", { class: "info-list mb-0" }, [
                                createVNode("div", { class: "info-row" }, [
                                  createVNode("dt", null, "Book"),
                                  createVNode("dd", null, toDisplayString(book.value.title), 1)
                                ]),
                                createVNode("div", { class: "info-row" }, [
                                  createVNode("dt", null, "Class type"),
                                  createVNode("dd", null, toDisplayString(session.value.classType), 1)
                                ]),
                                createVNode("div", { class: "info-row" }, [
                                  createVNode("dt", null, "Meeting left"),
                                  createVNode("dd", null, toDisplayString(session.value.meetingsLeft) + " of " + toDisplayString(session.value.quota) + " meetings", 1)
                                ]),
                                createVNode("div", { class: "info-row" }, [
                                  createVNode("dt", null, "Expired date"),
                                  createVNode("dd", null, toDisplayString(unref(formatSessionDate)(session.value.expiresAt)), 1)
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(VCard, {
                        variant: "outlined",
                        class: "detail-card pa-6"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="d-flex align-center gap-3 mb-6" data-v-ee766616${_scopeId3}><div class="icon-wrapper" data-v-ee766616${_scopeId3}>`);
                            _push4(ssrRenderComponent(VIcon, {
                              icon: "ri-calendar-2-line",
                              color: "primary",
                              size: "20"
                            }, null, _parent4, _scopeId3));
                            _push4(`</div><h2 class="text-h6 font-weight-medium text-high-emphasis mb-0" data-v-ee766616${_scopeId3}>Schedule &amp; class</h2></div>`);
                            if (session.value.className || session.value.schedule) {
                              _push4(`<div class="d-flex flex-column gap-3" data-v-ee766616${_scopeId3}><div class="schedule-row pa-4" data-v-ee766616${_scopeId3}><div class="text-body-1 font-weight-medium text-high-emphasis" data-v-ee766616${_scopeId3}>Student available schedule</div><div class="text-body-1 text-medium-emphasis" data-v-ee766616${_scopeId3}>${ssrInterpolate(session.value.schedule || "Not set")}</div></div>`);
                              if (session.value.className) {
                                _push4(`<div class="schedule-row pa-4" data-v-ee766616${_scopeId3}><div class="d-flex justify-space-between align-center flex-wrap gap-2 mb-2" data-v-ee766616${_scopeId3}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-ee766616${_scopeId3}>${ssrInterpolate(session.value.className)}</span>`);
                                if (session.value.branch) {
                                  _push4(ssrRenderComponent(VChip, {
                                    color: "primary",
                                    variant: "tonal",
                                    size: "small"
                                  }, {
                                    default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                      if (_push5) {
                                        _push5(`${ssrInterpolate(session.value.branch)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(session.value.branch), 1)
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent4, _scopeId3));
                                } else {
                                  _push4(`<!---->`);
                                }
                                _push4(`</div><div class="text-body-1 text-medium-emphasis" data-v-ee766616${_scopeId3}>${ssrInterpolate([session.value.schedule, session.value.room].filter(Boolean).join(" · ") || "Schedule not set")}</div></div>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                            } else {
                              _push4(`<p class="text-body-1 text-medium-emphasis mb-0" data-v-ee766616${_scopeId3}>No class schedule assigned to this session.</p>`);
                            }
                          } else {
                            return [
                              createVNode("div", { class: "d-flex align-center gap-3 mb-6" }, [
                                createVNode("div", { class: "icon-wrapper" }, [
                                  createVNode(VIcon, {
                                    icon: "ri-calendar-2-line",
                                    color: "primary",
                                    size: "20"
                                  })
                                ]),
                                createVNode("h2", { class: "text-h6 font-weight-medium text-high-emphasis mb-0" }, "Schedule & class")
                              ]),
                              session.value.className || session.value.schedule ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "d-flex flex-column gap-3"
                              }, [
                                createVNode("div", { class: "schedule-row pa-4" }, [
                                  createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Student available schedule"),
                                  createVNode("div", { class: "text-body-1 text-medium-emphasis" }, toDisplayString(session.value.schedule || "Not set"), 1)
                                ]),
                                session.value.className ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "schedule-row pa-4"
                                }, [
                                  createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap gap-2 mb-2" }, [
                                    createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(session.value.className), 1),
                                    session.value.branch ? (openBlock(), createBlock(VChip, {
                                      key: 0,
                                      color: "primary",
                                      variant: "tonal",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(session.value.branch), 1)
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "text-body-1 text-medium-emphasis" }, toDisplayString([session.value.schedule, session.value.room].filter(Boolean).join(" · ") || "Schedule not set"), 1)
                                ])) : createCommentVNode("", true)
                              ])) : (openBlock(), createBlock("p", {
                                key: 1,
                                class: "text-body-1 text-medium-emphasis mb-0"
                              }, "No class schedule assigned to this session."))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VCard, {
                          variant: "outlined",
                          class: "detail-card pa-6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center gap-3 mb-6" }, [
                              createVNode("div", { class: "icon-wrapper" }, [
                                createVNode(VIcon, {
                                  icon: "ri-book-2-line",
                                  color: "primary",
                                  size: "20"
                                })
                              ]),
                              createVNode("h2", { class: "text-h6 font-weight-medium text-high-emphasis mb-0" }, "Product information")
                            ]),
                            createVNode("div", { class: "product-panel pa-5 mb-4" }, [
                              createVNode("div", { class: "d-flex align-center flex-wrap gap-2 mb-5" }, [
                                createVNode(VChip, {
                                  color: "primary",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Package")
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", { class: "text-body-2 font-weight-medium text-primary" }, toDisplayString(session.value.packageName), 1)
                              ]),
                              createVNode("div", { class: "d-flex align-center gap-3 mb-4" }, [
                                createVNode(VAvatar, {
                                  color: "primary",
                                  variant: "tonal",
                                  rounded: "lg",
                                  size: "44"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-bookmark-line",
                                      size: "24"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("h3", { class: "text-h6 font-weight-medium text-high-emphasis mb-0" }, toDisplayString(session.value.productName), 1),
                                  createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(book.value.title), 1)
                                ])
                              ]),
                              formattedPrice.value ? (openBlock(), createBlock("div", { key: 0 }, [
                                createVNode(VChip, {
                                  color: "primary",
                                  variant: "tonal",
                                  size: "small",
                                  class: "mb-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Variant IDR")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "text-h4 font-weight-medium text-high-emphasis" }, toDisplayString(formattedPrice.value), 1),
                                createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Price per meeting")
                              ])) : createCommentVNode("", true)
                            ]),
                            createVNode("dl", { class: "info-list mb-0" }, [
                              createVNode("div", { class: "info-row" }, [
                                createVNode("dt", null, "Book"),
                                createVNode("dd", null, toDisplayString(book.value.title), 1)
                              ]),
                              createVNode("div", { class: "info-row" }, [
                                createVNode("dt", null, "Class type"),
                                createVNode("dd", null, toDisplayString(session.value.classType), 1)
                              ]),
                              createVNode("div", { class: "info-row" }, [
                                createVNode("dt", null, "Meeting left"),
                                createVNode("dd", null, toDisplayString(session.value.meetingsLeft) + " of " + toDisplayString(session.value.quota) + " meetings", 1)
                              ]),
                              createVNode("div", { class: "info-row" }, [
                                createVNode("dt", null, "Expired date"),
                                createVNode("dd", null, toDisplayString(unref(formatSessionDate)(session.value.expiresAt)), 1)
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCard, {
                          variant: "outlined",
                          class: "detail-card pa-6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center gap-3 mb-6" }, [
                              createVNode("div", { class: "icon-wrapper" }, [
                                createVNode(VIcon, {
                                  icon: "ri-calendar-2-line",
                                  color: "primary",
                                  size: "20"
                                })
                              ]),
                              createVNode("h2", { class: "text-h6 font-weight-medium text-high-emphasis mb-0" }, "Schedule & class")
                            ]),
                            session.value.className || session.value.schedule ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "d-flex flex-column gap-3"
                            }, [
                              createVNode("div", { class: "schedule-row pa-4" }, [
                                createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Student available schedule"),
                                createVNode("div", { class: "text-body-1 text-medium-emphasis" }, toDisplayString(session.value.schedule || "Not set"), 1)
                              ]),
                              session.value.className ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "schedule-row pa-4"
                              }, [
                                createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap gap-2 mb-2" }, [
                                  createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(session.value.className), 1),
                                  session.value.branch ? (openBlock(), createBlock(VChip, {
                                    key: 0,
                                    color: "primary",
                                    variant: "tonal",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(session.value.branch), 1)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "text-body-1 text-medium-emphasis" }, toDisplayString([session.value.schedule, session.value.room].filter(Boolean).join(" · ") || "Schedule not set"), 1)
                              ])) : createCommentVNode("", true)
                            ])) : (openBlock(), createBlock("p", {
                              key: 1,
                              class: "text-body-1 text-medium-emphasis mb-0"
                            }, "No class schedule assigned to this session."))
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
                  md: "4"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VCard, {
                        variant: "outlined",
                        class: "detail-card pa-6"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="student-banner d-flex align-center gap-3 pa-4 mb-5" data-v-ee766616${_scopeId3}>`);
                            _push4(ssrRenderComponent(VAvatar, {
                              size: "40",
                              class: "student-banner-avatar"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span class="text-body-1 font-weight-medium" data-v-ee766616${_scopeId4}>${ssrInterpolate(studentInitials.value)}</span>`);
                                } else {
                                  return [
                                    createVNode("span", { class: "text-body-1 font-weight-medium" }, toDisplayString(studentInitials.value), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`<div data-v-ee766616${_scopeId3}><div class="text-body-1 font-weight-medium" data-v-ee766616${_scopeId3}>${ssrInterpolate(student.value.name)}</div><div class="text-body-2" data-v-ee766616${_scopeId3}>Student</div></div></div><dl class="session-facts mb-0" data-v-ee766616${_scopeId3}><div data-v-ee766616${_scopeId3}><dt data-v-ee766616${_scopeId3}>Homeroom teacher</dt><dd data-v-ee766616${_scopeId3}>${ssrInterpolate(session.value.teacherName || "Not assigned")}</dd></div><div data-v-ee766616${_scopeId3}><dt data-v-ee766616${_scopeId3}>Session status</dt><dd data-v-ee766616${_scopeId3}>`);
                            _push4(ssrRenderComponent(VChip, {
                              color: session.value.status === "Active" ? "success" : "secondary",
                              variant: "tonal",
                              size: "small"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(session.value.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(session.value.status), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`</dd></div><div data-v-ee766616${_scopeId3}><dt data-v-ee766616${_scopeId3}>Session ID</dt><dd data-v-ee766616${_scopeId3}>${ssrInterpolate(session.value.code)}</dd></div><div data-v-ee766616${_scopeId3}><dt data-v-ee766616${_scopeId3}>Last updated</dt><dd data-v-ee766616${_scopeId3}>${ssrInterpolate(formattedUpdate.value)}</dd></div></dl>`);
                            _push4(ssrRenderComponent(VBtn, {
                              color: "primary",
                              variant: "text",
                              rounded: "pill",
                              class: "mt-4 px-0",
                              to: booksRoute.value
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` View all books `);
                                } else {
                                  return [
                                    createTextVNode(" View all books ")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode("div", { class: "student-banner d-flex align-center gap-3 pa-4 mb-5" }, [
                                createVNode(VAvatar, {
                                  size: "40",
                                  class: "student-banner-avatar"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-body-1 font-weight-medium" }, toDisplayString(studentInitials.value), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(student.value.name), 1),
                                  createVNode("div", { class: "text-body-2" }, "Student")
                                ])
                              ]),
                              createVNode("dl", { class: "session-facts mb-0" }, [
                                createVNode("div", null, [
                                  createVNode("dt", null, "Homeroom teacher"),
                                  createVNode("dd", null, toDisplayString(session.value.teacherName || "Not assigned"), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("dt", null, "Session status"),
                                  createVNode("dd", null, [
                                    createVNode(VChip, {
                                      color: session.value.status === "Active" ? "success" : "secondary",
                                      variant: "tonal",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(session.value.status), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["color"])
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode("dt", null, "Session ID"),
                                  createVNode("dd", null, toDisplayString(session.value.code), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("dt", null, "Last updated"),
                                  createVNode("dd", null, toDisplayString(formattedUpdate.value), 1)
                                ])
                              ]),
                              createVNode(VBtn, {
                                color: "primary",
                                variant: "text",
                                rounded: "pill",
                                class: "mt-4 px-0",
                                to: booksRoute.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" View all books ")
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VCard, {
                          variant: "outlined",
                          class: "detail-card pa-6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "student-banner d-flex align-center gap-3 pa-4 mb-5" }, [
                              createVNode(VAvatar, {
                                size: "40",
                                class: "student-banner-avatar"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-body-1 font-weight-medium" }, toDisplayString(studentInitials.value), 1)
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(student.value.name), 1),
                                createVNode("div", { class: "text-body-2" }, "Student")
                              ])
                            ]),
                            createVNode("dl", { class: "session-facts mb-0" }, [
                              createVNode("div", null, [
                                createVNode("dt", null, "Homeroom teacher"),
                                createVNode("dd", null, toDisplayString(session.value.teacherName || "Not assigned"), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("dt", null, "Session status"),
                                createVNode("dd", null, [
                                  createVNode(VChip, {
                                    color: session.value.status === "Active" ? "success" : "secondary",
                                    variant: "tonal",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(session.value.status), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["color"])
                                ])
                              ]),
                              createVNode("div", null, [
                                createVNode("dt", null, "Session ID"),
                                createVNode("dd", null, toDisplayString(session.value.code), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("dt", null, "Last updated"),
                                createVNode("dd", null, toDisplayString(formattedUpdate.value), 1)
                              ])
                            ]),
                            createVNode(VBtn, {
                              color: "primary",
                              variant: "text",
                              rounded: "pill",
                              class: "mt-4 px-0",
                              to: booksRoute.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" View all books ")
                              ]),
                              _: 1
                            }, 8, ["to"])
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
                    md: "8",
                    class: "d-flex flex-column gap-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        variant: "outlined",
                        class: "detail-card pa-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center gap-3 mb-6" }, [
                            createVNode("div", { class: "icon-wrapper" }, [
                              createVNode(VIcon, {
                                icon: "ri-book-2-line",
                                color: "primary",
                                size: "20"
                              })
                            ]),
                            createVNode("h2", { class: "text-h6 font-weight-medium text-high-emphasis mb-0" }, "Product information")
                          ]),
                          createVNode("div", { class: "product-panel pa-5 mb-4" }, [
                            createVNode("div", { class: "d-flex align-center flex-wrap gap-2 mb-5" }, [
                              createVNode(VChip, {
                                color: "primary",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Package")
                                ]),
                                _: 1
                              }),
                              createVNode("span", { class: "text-body-2 font-weight-medium text-primary" }, toDisplayString(session.value.packageName), 1)
                            ]),
                            createVNode("div", { class: "d-flex align-center gap-3 mb-4" }, [
                              createVNode(VAvatar, {
                                color: "primary",
                                variant: "tonal",
                                rounded: "lg",
                                size: "44"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "ri-bookmark-line",
                                    size: "24"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("h3", { class: "text-h6 font-weight-medium text-high-emphasis mb-0" }, toDisplayString(session.value.productName), 1),
                                createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(book.value.title), 1)
                              ])
                            ]),
                            formattedPrice.value ? (openBlock(), createBlock("div", { key: 0 }, [
                              createVNode(VChip, {
                                color: "primary",
                                variant: "tonal",
                                size: "small",
                                class: "mb-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Variant IDR")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "text-h4 font-weight-medium text-high-emphasis" }, toDisplayString(formattedPrice.value), 1),
                              createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Price per meeting")
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("dl", { class: "info-list mb-0" }, [
                            createVNode("div", { class: "info-row" }, [
                              createVNode("dt", null, "Book"),
                              createVNode("dd", null, toDisplayString(book.value.title), 1)
                            ]),
                            createVNode("div", { class: "info-row" }, [
                              createVNode("dt", null, "Class type"),
                              createVNode("dd", null, toDisplayString(session.value.classType), 1)
                            ]),
                            createVNode("div", { class: "info-row" }, [
                              createVNode("dt", null, "Meeting left"),
                              createVNode("dd", null, toDisplayString(session.value.meetingsLeft) + " of " + toDisplayString(session.value.quota) + " meetings", 1)
                            ]),
                            createVNode("div", { class: "info-row" }, [
                              createVNode("dt", null, "Expired date"),
                              createVNode("dd", null, toDisplayString(unref(formatSessionDate)(session.value.expiresAt)), 1)
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCard, {
                        variant: "outlined",
                        class: "detail-card pa-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center gap-3 mb-6" }, [
                            createVNode("div", { class: "icon-wrapper" }, [
                              createVNode(VIcon, {
                                icon: "ri-calendar-2-line",
                                color: "primary",
                                size: "20"
                              })
                            ]),
                            createVNode("h2", { class: "text-h6 font-weight-medium text-high-emphasis mb-0" }, "Schedule & class")
                          ]),
                          session.value.className || session.value.schedule ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "d-flex flex-column gap-3"
                          }, [
                            createVNode("div", { class: "schedule-row pa-4" }, [
                              createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Student available schedule"),
                              createVNode("div", { class: "text-body-1 text-medium-emphasis" }, toDisplayString(session.value.schedule || "Not set"), 1)
                            ]),
                            session.value.className ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "schedule-row pa-4"
                            }, [
                              createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap gap-2 mb-2" }, [
                                createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(session.value.className), 1),
                                session.value.branch ? (openBlock(), createBlock(VChip, {
                                  key: 0,
                                  color: "primary",
                                  variant: "tonal",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(session.value.branch), 1)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "text-body-1 text-medium-emphasis" }, toDisplayString([session.value.schedule, session.value.room].filter(Boolean).join(" · ") || "Schedule not set"), 1)
                            ])) : createCommentVNode("", true)
                          ])) : (openBlock(), createBlock("p", {
                            key: 1,
                            class: "text-body-1 text-medium-emphasis mb-0"
                          }, "No class schedule assigned to this session."))
                        ]),
                        _: 1
                      })
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
                        class: "detail-card pa-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "student-banner d-flex align-center gap-3 pa-4 mb-5" }, [
                            createVNode(VAvatar, {
                              size: "40",
                              class: "student-banner-avatar"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-body-1 font-weight-medium" }, toDisplayString(studentInitials.value), 1)
                              ]),
                              _: 1
                            }),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(student.value.name), 1),
                              createVNode("div", { class: "text-body-2" }, "Student")
                            ])
                          ]),
                          createVNode("dl", { class: "session-facts mb-0" }, [
                            createVNode("div", null, [
                              createVNode("dt", null, "Homeroom teacher"),
                              createVNode("dd", null, toDisplayString(session.value.teacherName || "Not assigned"), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("dt", null, "Session status"),
                              createVNode("dd", null, [
                                createVNode(VChip, {
                                  color: session.value.status === "Active" ? "success" : "secondary",
                                  variant: "tonal",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(session.value.status), 1)
                                  ]),
                                  _: 1
                                }, 8, ["color"])
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("dt", null, "Session ID"),
                              createVNode("dd", null, toDisplayString(session.value.code), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("dt", null, "Last updated"),
                              createVNode("dd", null, toDisplayString(formattedUpdate.value), 1)
                            ])
                          ]),
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "text",
                            rounded: "pill",
                            class: "mt-4 px-0",
                            to: booksRoute.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" View all books ")
                            ]),
                            _: 1
                          }, 8, ["to"])
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
        }
        _push(`<!--]-->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student-session-detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const studentSessionDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ee766616"]]);
export {
  studentSessionDetail as default
};
