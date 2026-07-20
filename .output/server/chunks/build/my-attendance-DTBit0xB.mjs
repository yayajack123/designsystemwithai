import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { V as VTextField } from './VTextField-jMGfwBDn.mjs';
import { aW as _export_sfc, V as VBtn, a as VIcon } from './server.mjs';
import { V as VRow, a as VCol } from './VRow-BRD4hy0P.mjs';
import { V as VCard } from './VCard-B42eN0YV.mjs';
import { V as VDivider } from './VDivider-Cdypedjq.mjs';
import './index-CSomYp-Z.mjs';
import './VAvatar-B478BWXT.mjs';
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
import './VCardText-CaXtzNxg.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-attendance",
  __ssrInlineRender: true,
  setup(__props) {
    const dateRange = ref("June 17, 2026 - June 24, 2026");
    const resetFilter = () => {
      dateRange.value = "June 17, 2026 - June 24, 2026";
    };
    const attendanceGroups = ref([
      {
        id: "g1",
        dateLabel: "Monday, April 1",
        totalHours: "2 hours",
        sessions: [
          {
            id: "s1",
            time: "20:00 - 22:00",
            className: "Coding Class",
            branch: "Branch Renon",
            status: "Attend",
            approvalStatus: "On Review"
          }
        ]
      },
      {
        id: "g2",
        dateLabel: "Tuesday, April 2",
        totalHours: "0 hours",
        sessions: [
          {
            id: "s2",
            time: "20:00 - 22:00",
            className: "Coding Class",
            branch: "Branch Renon",
            status: "Attend",
            approvalStatus: "Approved"
          }
        ]
      },
      {
        id: "g3",
        dateLabel: "Wednesday, April 3",
        totalHours: "0 hours",
        sessions: [
          {
            id: "s3",
            time: "10:00 - 12:00",
            className: "Design Class",
            branch: "Branch Canggu",
            status: "Attend",
            approvalStatus: "Approved"
          },
          {
            id: "s4",
            time: "20:00 - 22:00",
            className: "Coding Class",
            branch: "Branch Renon",
            status: "Attend",
            approvalStatus: "Approved"
          }
        ]
      },
      {
        id: "g4",
        dateLabel: "Thursday, April 4",
        totalHours: "0 hours",
        sessions: [
          {
            id: "s5",
            time: "20:00 - 22:00",
            className: "Coding Class",
            branch: "Branch Renon",
            status: "Attend",
            approvalStatus: "Approved"
          }
        ]
      },
      {
        id: "g5",
        dateLabel: "Friday, April 5",
        totalHours: "0 hours",
        sessions: [
          {
            id: "s6",
            time: "20:00 - 22:00",
            className: "Coding Class",
            branch: "Branch Renon",
            status: "Attend",
            approvalStatus: "Approved"
          }
        ]
      }
    ]);
    const aboutStats = [
      {
        icon: "ri-checkbox-circle-line",
        title: "12 Presence",
        desc: "Total present on the class"
      },
      {
        icon: "ri-archive-line",
        title: "20 Meeting left",
        desc: "Total meeting on the class"
      },
      {
        icon: "ri-error-warning-line",
        title: "24 Hours",
        desc: "Total working hours"
      }
    ];
    const branchStats = [
      {
        icon: "ri-checkbox-circle-line",
        title: "2 Meetings",
        desc: "Branch Renon"
      },
      {
        icon: "ri-checkbox-circle-line",
        title: "10 Meetings",
        desc: "Branch Canggu"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-attendance-page" }, _attrs))} data-v-a2c43c5e><div class="mb-6" data-v-a2c43c5e><h1 class="page-title text-h5 font-weight-medium mb-1" data-v-a2c43c5e> Attendance </h1><p class="page-subtitle text-body-1 text-medium-emphasis mb-0" data-v-a2c43c5e> See and manage all attendance </p></div><div class="d-flex align-center gap-4 mb-6" data-v-a2c43c5e><div class="date-input-wrapper" data-v-a2c43c5e>`);
      _push(ssrRenderComponent(VTextField, {
        modelValue: dateRange.value,
        "onUpdate:modelValue": ($event) => dateRange.value = $event,
        variant: "outlined",
        density: "compact",
        "hide-details": "",
        class: "date-field",
        "append-inner-icon": "ri-calendar-2-line"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VBtn, {
        variant: "text",
        color: "primary",
        class: "text-capitalize px-0 font-weight-medium reset-btn",
        onClick: resetFilter
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Reset Filter `);
          } else {
            return [
              createTextVNode(" Reset Filter ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VRow, { class: "match-height" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8",
              lg: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex flex-column gap-5" data-v-a2c43c5e${_scopeId2}><!--[-->`);
                  ssrRenderList(attendanceGroups.value, (group) => {
                    _push3(`<div class="attendance-day-card" data-v-a2c43c5e${_scopeId2}><div class="card-day-header d-flex align-center justify-space-between px-5 py-4" data-v-a2c43c5e${_scopeId2}><span class="day-date-title font-weight-medium text-high-emphasis" data-v-a2c43c5e${_scopeId2}>${ssrInterpolate(group.dateLabel)}</span><span class="day-hours-text text-body-1 text-medium-emphasis" data-v-a2c43c5e${_scopeId2}>${ssrInterpolate(group.totalHours)}</span></div><div class="card-sessions-wrapper pa-5 d-flex flex-column gap-3" data-v-a2c43c5e${_scopeId2}><!--[-->`);
                    ssrRenderList(group.sessions, (session) => {
                      _push3(`<div class="session-item-card d-flex align-center gap-3 pa-4" data-v-a2c43c5e${_scopeId2}>`);
                      _push3(ssrRenderComponent(VIcon, {
                        icon: "ri-check-line",
                        size: "24",
                        color: "secondary",
                        class: "session-check-icon"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="session-detail flex-grow-1" data-v-a2c43c5e${_scopeId2}><div class="d-flex align-center gap-2 flex-wrap" data-v-a2c43c5e${_scopeId2}><span class="session-time font-weight-medium text-high-emphasis" data-v-a2c43c5e${_scopeId2}>${ssrInterpolate(session.time)}</span><span class="session-meta text-medium-emphasis" data-v-a2c43c5e${_scopeId2}>${ssrInterpolate(session.className)}</span><span class="meta-dot" data-v-a2c43c5e${_scopeId2}></span><span class="session-meta text-medium-emphasis" data-v-a2c43c5e${_scopeId2}>${ssrInterpolate(session.branch)}</span></div></div><div class="d-flex align-center gap-2" data-v-a2c43c5e${_scopeId2}><span class="custom-badge badge-success" data-v-a2c43c5e${_scopeId2}>${ssrInterpolate(session.status)}</span><span class="${ssrRenderClass([{
                        "badge-warning": session.approvalStatus === "On Review",
                        "badge-success": session.approvalStatus === "Approved"
                      }, "custom-badge"])}" data-v-a2c43c5e${_scopeId2}>${ssrInterpolate(session.approvalStatus)}</span></div></div>`);
                    });
                    _push3(`<!--]--></div></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex flex-column gap-5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(attendanceGroups.value, (group) => {
                        return openBlock(), createBlock("div", {
                          key: group.id,
                          class: "attendance-day-card"
                        }, [
                          createVNode("div", { class: "card-day-header d-flex align-center justify-space-between px-5 py-4" }, [
                            createVNode("span", { class: "day-date-title font-weight-medium text-high-emphasis" }, toDisplayString(group.dateLabel), 1),
                            createVNode("span", { class: "day-hours-text text-body-1 text-medium-emphasis" }, toDisplayString(group.totalHours), 1)
                          ]),
                          createVNode("div", { class: "card-sessions-wrapper pa-5 d-flex flex-column gap-3" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(group.sessions, (session) => {
                              return openBlock(), createBlock("div", {
                                key: session.id,
                                class: "session-item-card d-flex align-center gap-3 pa-4"
                              }, [
                                createVNode(VIcon, {
                                  icon: "ri-check-line",
                                  size: "24",
                                  color: "secondary",
                                  class: "session-check-icon"
                                }),
                                createVNode("div", { class: "session-detail flex-grow-1" }, [
                                  createVNode("div", { class: "d-flex align-center gap-2 flex-wrap" }, [
                                    createVNode("span", { class: "session-time font-weight-medium text-high-emphasis" }, toDisplayString(session.time), 1),
                                    createVNode("span", { class: "session-meta text-medium-emphasis" }, toDisplayString(session.className), 1),
                                    createVNode("span", { class: "meta-dot" }),
                                    createVNode("span", { class: "session-meta text-medium-emphasis" }, toDisplayString(session.branch), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex align-center gap-2" }, [
                                  createVNode("span", { class: "custom-badge badge-success" }, toDisplayString(session.status), 1),
                                  createVNode("span", {
                                    class: ["custom-badge", {
                                      "badge-warning": session.approvalStatus === "On Review",
                                      "badge-success": session.approvalStatus === "Approved"
                                    }]
                                  }, toDisplayString(session.approvalStatus), 3)
                                ])
                              ]);
                            }), 128))
                          ])
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    variant: "outlined",
                    class: "progress-sidebar-card pa-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="work-hours-box d-flex flex-column align-center justify-center pa-4 mb-4" data-v-a2c43c5e${_scopeId3}><div class="d-flex align-center gap-1 mb-1" data-v-a2c43c5e${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-time-line",
                          size: "20",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="work-hours-value font-weight-medium" data-v-a2c43c5e${_scopeId3}> 9 hours </span></div><span class="work-hours-label text-caption text-medium-emphasis" data-v-a2c43c5e${_scopeId3}> worked this week </span></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent4, _scopeId3));
                        _push4(`<div class="sidebar-section mb-4" data-v-a2c43c5e${_scopeId3}><h2 class="section-title text-body-1 font-weight-medium text-high-emphasis mb-4" data-v-a2c43c5e${_scopeId3}> About Your Attendance </h2><div class="d-flex flex-column gap-3" data-v-a2c43c5e${_scopeId3}><!--[-->`);
                        ssrRenderList(aboutStats, (stat, idx) => {
                          _push4(`<div class="stat-item-card d-flex align-center gap-3 pa-4" data-v-a2c43c5e${_scopeId3}><div class="stat-icon-wrapper" data-v-a2c43c5e${_scopeId3}>`);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: stat.icon,
                            size: "24",
                            color: "primary"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="d-flex flex-column" data-v-a2c43c5e${_scopeId3}><span class="stat-title text-body-1 font-weight-medium text-high-emphasis" data-v-a2c43c5e${_scopeId3}>${ssrInterpolate(stat.title)}</span><span class="stat-desc text-caption text-medium-emphasis" data-v-a2c43c5e${_scopeId3}>${ssrInterpolate(stat.desc)}</span></div></div>`);
                        });
                        _push4(`<!--]--></div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent4, _scopeId3));
                        _push4(`<div class="sidebar-section" data-v-a2c43c5e${_scopeId3}><h2 class="section-title text-body-1 font-weight-medium text-high-emphasis mb-4" data-v-a2c43c5e${_scopeId3}> Attendance each branch </h2><div class="d-flex flex-column gap-3" data-v-a2c43c5e${_scopeId3}><!--[-->`);
                        ssrRenderList(branchStats, (bStat, bIdx) => {
                          _push4(`<div class="stat-item-card d-flex align-center gap-3 pa-4" data-v-a2c43c5e${_scopeId3}><div class="stat-icon-wrapper" data-v-a2c43c5e${_scopeId3}>`);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: bStat.icon,
                            size: "24",
                            color: "primary"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="d-flex flex-column" data-v-a2c43c5e${_scopeId3}><span class="stat-title text-body-1 font-weight-medium text-high-emphasis" data-v-a2c43c5e${_scopeId3}>${ssrInterpolate(bStat.title)}</span><span class="stat-desc text-caption text-medium-emphasis" data-v-a2c43c5e${_scopeId3}>${ssrInterpolate(bStat.desc)}</span></div></div>`);
                        });
                        _push4(`<!--]--></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "work-hours-box d-flex flex-column align-center justify-center pa-4 mb-4" }, [
                            createVNode("div", { class: "d-flex align-center gap-1 mb-1" }, [
                              createVNode(VIcon, {
                                icon: "ri-time-line",
                                size: "20",
                                color: "primary"
                              }),
                              createVNode("span", { class: "work-hours-value font-weight-medium" }, " 9 hours ")
                            ]),
                            createVNode("span", { class: "work-hours-label text-caption text-medium-emphasis" }, " worked this week ")
                          ]),
                          createVNode(VDivider, { class: "my-4" }),
                          createVNode("div", { class: "sidebar-section mb-4" }, [
                            createVNode("h2", { class: "section-title text-body-1 font-weight-medium text-high-emphasis mb-4" }, " About Your Attendance "),
                            createVNode("div", { class: "d-flex flex-column gap-3" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(aboutStats, (stat, idx) => {
                                return createVNode("div", {
                                  key: idx,
                                  class: "stat-item-card d-flex align-center gap-3 pa-4"
                                }, [
                                  createVNode("div", { class: "stat-icon-wrapper" }, [
                                    createVNode(VIcon, {
                                      icon: stat.icon,
                                      size: "24",
                                      color: "primary"
                                    }, null, 8, ["icon"])
                                  ]),
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("span", { class: "stat-title text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(stat.title), 1),
                                    createVNode("span", { class: "stat-desc text-caption text-medium-emphasis" }, toDisplayString(stat.desc), 1)
                                  ])
                                ]);
                              }), 64))
                            ])
                          ]),
                          createVNode(VDivider, { class: "my-4" }),
                          createVNode("div", { class: "sidebar-section" }, [
                            createVNode("h2", { class: "section-title text-body-1 font-weight-medium text-high-emphasis mb-4" }, " Attendance each branch "),
                            createVNode("div", { class: "d-flex flex-column gap-3" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(branchStats, (bStat, bIdx) => {
                                return createVNode("div", {
                                  key: bIdx,
                                  class: "stat-item-card d-flex align-center gap-3 pa-4"
                                }, [
                                  createVNode("div", { class: "stat-icon-wrapper" }, [
                                    createVNode(VIcon, {
                                      icon: bStat.icon,
                                      size: "24",
                                      color: "primary"
                                    }, null, 8, ["icon"])
                                  ]),
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("span", { class: "stat-title text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(bStat.title), 1),
                                    createVNode("span", { class: "stat-desc text-caption text-medium-emphasis" }, toDisplayString(bStat.desc), 1)
                                  ])
                                ]);
                              }), 64))
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
                      class: "progress-sidebar-card pa-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "work-hours-box d-flex flex-column align-center justify-center pa-4 mb-4" }, [
                          createVNode("div", { class: "d-flex align-center gap-1 mb-1" }, [
                            createVNode(VIcon, {
                              icon: "ri-time-line",
                              size: "20",
                              color: "primary"
                            }),
                            createVNode("span", { class: "work-hours-value font-weight-medium" }, " 9 hours ")
                          ]),
                          createVNode("span", { class: "work-hours-label text-caption text-medium-emphasis" }, " worked this week ")
                        ]),
                        createVNode(VDivider, { class: "my-4" }),
                        createVNode("div", { class: "sidebar-section mb-4" }, [
                          createVNode("h2", { class: "section-title text-body-1 font-weight-medium text-high-emphasis mb-4" }, " About Your Attendance "),
                          createVNode("div", { class: "d-flex flex-column gap-3" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(aboutStats, (stat, idx) => {
                              return createVNode("div", {
                                key: idx,
                                class: "stat-item-card d-flex align-center gap-3 pa-4"
                              }, [
                                createVNode("div", { class: "stat-icon-wrapper" }, [
                                  createVNode(VIcon, {
                                    icon: stat.icon,
                                    size: "24",
                                    color: "primary"
                                  }, null, 8, ["icon"])
                                ]),
                                createVNode("div", { class: "d-flex flex-column" }, [
                                  createVNode("span", { class: "stat-title text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(stat.title), 1),
                                  createVNode("span", { class: "stat-desc text-caption text-medium-emphasis" }, toDisplayString(stat.desc), 1)
                                ])
                              ]);
                            }), 64))
                          ])
                        ]),
                        createVNode(VDivider, { class: "my-4" }),
                        createVNode("div", { class: "sidebar-section" }, [
                          createVNode("h2", { class: "section-title text-body-1 font-weight-medium text-high-emphasis mb-4" }, " Attendance each branch "),
                          createVNode("div", { class: "d-flex flex-column gap-3" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(branchStats, (bStat, bIdx) => {
                              return createVNode("div", {
                                key: bIdx,
                                class: "stat-item-card d-flex align-center gap-3 pa-4"
                              }, [
                                createVNode("div", { class: "stat-icon-wrapper" }, [
                                  createVNode(VIcon, {
                                    icon: bStat.icon,
                                    size: "24",
                                    color: "primary"
                                  }, null, 8, ["icon"])
                                ]),
                                createVNode("div", { class: "d-flex flex-column" }, [
                                  createVNode("span", { class: "stat-title text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(bStat.title), 1),
                                  createVNode("span", { class: "stat-desc text-caption text-medium-emphasis" }, toDisplayString(bStat.desc), 1)
                                ])
                              ]);
                            }), 64))
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
                md: "8",
                lg: "8"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex flex-column gap-5" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(attendanceGroups.value, (group) => {
                      return openBlock(), createBlock("div", {
                        key: group.id,
                        class: "attendance-day-card"
                      }, [
                        createVNode("div", { class: "card-day-header d-flex align-center justify-space-between px-5 py-4" }, [
                          createVNode("span", { class: "day-date-title font-weight-medium text-high-emphasis" }, toDisplayString(group.dateLabel), 1),
                          createVNode("span", { class: "day-hours-text text-body-1 text-medium-emphasis" }, toDisplayString(group.totalHours), 1)
                        ]),
                        createVNode("div", { class: "card-sessions-wrapper pa-5 d-flex flex-column gap-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(group.sessions, (session) => {
                            return openBlock(), createBlock("div", {
                              key: session.id,
                              class: "session-item-card d-flex align-center gap-3 pa-4"
                            }, [
                              createVNode(VIcon, {
                                icon: "ri-check-line",
                                size: "24",
                                color: "secondary",
                                class: "session-check-icon"
                              }),
                              createVNode("div", { class: "session-detail flex-grow-1" }, [
                                createVNode("div", { class: "d-flex align-center gap-2 flex-wrap" }, [
                                  createVNode("span", { class: "session-time font-weight-medium text-high-emphasis" }, toDisplayString(session.time), 1),
                                  createVNode("span", { class: "session-meta text-medium-emphasis" }, toDisplayString(session.className), 1),
                                  createVNode("span", { class: "meta-dot" }),
                                  createVNode("span", { class: "session-meta text-medium-emphasis" }, toDisplayString(session.branch), 1)
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center gap-2" }, [
                                createVNode("span", { class: "custom-badge badge-success" }, toDisplayString(session.status), 1),
                                createVNode("span", {
                                  class: ["custom-badge", {
                                    "badge-warning": session.approvalStatus === "On Review",
                                    "badge-success": session.approvalStatus === "Approved"
                                  }]
                                }, toDisplayString(session.approvalStatus), 3)
                              ])
                            ]);
                          }), 128))
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    variant: "outlined",
                    class: "progress-sidebar-card pa-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "work-hours-box d-flex flex-column align-center justify-center pa-4 mb-4" }, [
                        createVNode("div", { class: "d-flex align-center gap-1 mb-1" }, [
                          createVNode(VIcon, {
                            icon: "ri-time-line",
                            size: "20",
                            color: "primary"
                          }),
                          createVNode("span", { class: "work-hours-value font-weight-medium" }, " 9 hours ")
                        ]),
                        createVNode("span", { class: "work-hours-label text-caption text-medium-emphasis" }, " worked this week ")
                      ]),
                      createVNode(VDivider, { class: "my-4" }),
                      createVNode("div", { class: "sidebar-section mb-4" }, [
                        createVNode("h2", { class: "section-title text-body-1 font-weight-medium text-high-emphasis mb-4" }, " About Your Attendance "),
                        createVNode("div", { class: "d-flex flex-column gap-3" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(aboutStats, (stat, idx) => {
                            return createVNode("div", {
                              key: idx,
                              class: "stat-item-card d-flex align-center gap-3 pa-4"
                            }, [
                              createVNode("div", { class: "stat-icon-wrapper" }, [
                                createVNode(VIcon, {
                                  icon: stat.icon,
                                  size: "24",
                                  color: "primary"
                                }, null, 8, ["icon"])
                              ]),
                              createVNode("div", { class: "d-flex flex-column" }, [
                                createVNode("span", { class: "stat-title text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(stat.title), 1),
                                createVNode("span", { class: "stat-desc text-caption text-medium-emphasis" }, toDisplayString(stat.desc), 1)
                              ])
                            ]);
                          }), 64))
                        ])
                      ]),
                      createVNode(VDivider, { class: "my-4" }),
                      createVNode("div", { class: "sidebar-section" }, [
                        createVNode("h2", { class: "section-title text-body-1 font-weight-medium text-high-emphasis mb-4" }, " Attendance each branch "),
                        createVNode("div", { class: "d-flex flex-column gap-3" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(branchStats, (bStat, bIdx) => {
                            return createVNode("div", {
                              key: bIdx,
                              class: "stat-item-card d-flex align-center gap-3 pa-4"
                            }, [
                              createVNode("div", { class: "stat-icon-wrapper" }, [
                                createVNode(VIcon, {
                                  icon: bStat.icon,
                                  size: "24",
                                  color: "primary"
                                }, null, 8, ["icon"])
                              ]),
                              createVNode("div", { class: "d-flex flex-column" }, [
                                createVNode("span", { class: "stat-title text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(bStat.title), 1),
                                createVNode("span", { class: "stat-desc text-caption text-medium-emphasis" }, toDisplayString(bStat.desc), 1)
                              ])
                            ]);
                          }), 64))
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my-attendance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const myAttendance = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a2c43c5e"]]);

export { myAttendance as default };
