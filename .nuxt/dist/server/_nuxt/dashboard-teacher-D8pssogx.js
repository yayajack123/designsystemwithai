import { _ as __nuxt_component_0 } from "./nuxt-link-CH0086wS.js";
import { defineComponent, ref, computed, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, unref, createTextVNode, withDirectives, createCommentVNode, vShow, isRef, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/hookable/dist/index.mjs";
import { b as VExpandTransition } from "./index-CSomYp-Z.js";
import { V as VRow, a as VCol } from "./VRow-BRD4hy0P.js";
import { V as VCard } from "./VCard-B42eN0YV.js";
import { a as VIcon, V as VBtn, b1 as VProgressLinear, aW as _export_sfc } from "../server.mjs";
import { V as VAvatar } from "./VAvatar-B478BWXT.js";
import { V as VChip } from "./VChip-C0dLsv_T.js";
import { V as VCheckbox } from "./VCheckbox-BUqu-k0J.js";
import { V as VTextField } from "./VTextField-jMGfwBDn.js";
import { V as VDivider } from "./VDivider-Cdypedjq.js";
import { V as VSnackbar } from "./VSnackbar-DgaXWzkK.js";
/* empty css               */
import "./VCardText-CaXtzNxg.js";
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
import "./VCheckboxBtn-BB8tUmIP.js";
import "./VSelectionControl-B1a3mcFW.js";
import "./forwardRefs-Oip3fNRq.js";
import "./VOverlay-gAZb14KV.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard-teacher",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const skillCount = ref(3);
    const studentCount = ref(20);
    const classCount = ref(24);
    const pendingJournalCount = ref(20);
    const pendingReportCount = ref(12);
    const statItems = [
      {
        icon: "ri-pie-chart-2-line",
        iconColor: "primary",
        label: "Skill",
        value: skillCount
      },
      {
        icon: "ri-group-line",
        iconColor: "primary",
        label: "Student",
        value: studentCount
      },
      {
        icon: "ri-book-2-line",
        iconColor: "info",
        label: "Class",
        value: classCount
      }
    ];
    const upcomingClasses = ref([
      {
        id: "u1",
        name: "Regular Kids",
        date: "8 Sep",
        startTime: "10:30",
        endTime: "12:00",
        status: "Ongoing",
        sessionType: "Adaptive",
        students: [
          { id: "us1", name: "Alice Johnson", studentId: "STD-120392032-551", avatar: "AJ", course: "Coding Xplorer - Adaptive with Robot New", lesson: "Lesson 1", isPresent: true, quota: 2, isLate: false, lateMinutes: 0, notes: "", addOns: 2, rentLaptop: "2x Session" },
          { id: "us2", name: "Bob Smith", studentId: "STD-120392032-552", avatar: "BS", course: "Coding Xplorer - Adaptive with Robot New", lesson: "Lesson 1", isPresent: false, quota: 0, isLate: false, lateMinutes: 0, notes: "", addOns: 0, rentLaptop: "" },
          { id: "us3", name: "Charlie Brown", studentId: "STD-120392032-553", avatar: "CB", course: "Coding Xplorer - Adaptive with Robot New", lesson: "Lesson 1", isPresent: true, quota: 1, isLate: true, lateMinutes: 10, notes: "Forgot homework", addOns: 1, rentLaptop: "1x Session" },
          { id: "us4", name: "Diana Prince", studentId: "STD-120392032-554", avatar: "DP", course: "Coding Xplorer - Adaptive with Robot New", lesson: "Lesson 1", isPresent: true, quota: 3, isLate: false, lateMinutes: 0, notes: "", addOns: 0, rentLaptop: "" },
          { id: "us5", name: "Eve Adams", studentId: "STD-120392032-555", avatar: "EA", course: "Coding Xplorer - Adaptive with Robot New", lesson: "Lesson 1", isPresent: false, quota: 0, isLate: false, lateMinutes: 0, notes: "", addOns: 0, rentLaptop: "" }
        ]
      },
      {
        id: "u2",
        name: "Advanced Teens",
        date: "12 Sep",
        startTime: "14:00",
        endTime: "15:30",
        status: "Active",
        sessionType: "Dynamic",
        students: [
          { id: "us6", name: "Frank Castle", studentId: "STD-120392032-556", avatar: "FC", course: "Advanced Python", lesson: "Lesson 5", isPresent: true, quota: 2, isLate: false, lateMinutes: 0, notes: "", addOns: 0, rentLaptop: "" },
          { id: "us7", name: "Grace Hopper", studentId: "STD-120392032-557", avatar: "GH", course: "Advanced Python", lesson: "Lesson 5", isPresent: true, quota: 1, isLate: true, lateMinutes: 5, notes: "", addOns: 0, rentLaptop: "" }
        ]
      },
      {
        id: "u3",
        name: "Future Coders",
        date: "14 Sep",
        startTime: "08:00",
        endTime: "09:30",
        status: "Active",
        sessionType: "Adaptive",
        students: [
          { id: "us8", name: "Hank Pym", studentId: "STD-120392032-558", avatar: "HP", course: "Game Design Basics", lesson: "Lesson 3", isPresent: true, quota: 1, isLate: false, lateMinutes: 0, notes: "", addOns: 0, rentLaptop: "" },
          { id: "us9", name: "Ivy League", studentId: "STD-120392032-559", avatar: "IL", course: "Game Design Basics", lesson: "Lesson 3", isPresent: false, quota: 0, isLate: false, lateMinutes: 0, notes: "", addOns: 0, rentLaptop: "" },
          { id: "us10", name: "Jack Sparrow", studentId: "STD-120392032-560", avatar: "JS", course: "Game Design Basics", lesson: "Lesson 3", isPresent: true, quota: 2, isLate: false, lateMinutes: 0, notes: "", addOns: 0, rentLaptop: "" }
        ]
      },
      {
        id: "u4",
        name: "Web Dev Novices",
        date: "15 Sep",
        startTime: "13:00",
        endTime: "14:30",
        status: "Active",
        sessionType: "Dynamic",
        students: [
          { id: "us11", name: "Kate Bishop", studentId: "STD-120392032-561", avatar: "KB", course: "HTML & CSS", lesson: "Lesson 2", isPresent: true, quota: 0, isLate: false, lateMinutes: 0, notes: "", addOns: 0, rentLaptop: "" },
          { id: "us12", name: "Logan Howlett", studentId: "STD-120392032-562", avatar: "LH", course: "HTML & CSS", lesson: "Lesson 2", isPresent: false, quota: 0, isLate: false, lateMinutes: 0, notes: "", addOns: 0, rentLaptop: "" }
        ]
      },
      {
        id: "u5",
        name: "Robotics Club",
        date: "16 Sep",
        startTime: "16:00",
        endTime: "18:00",
        status: "Active",
        sessionType: "Adaptive",
        students: [
          { id: "us13", name: "Miles Morales", studentId: "STD-120392032-563", avatar: "MM", course: "Robotics Engineering", lesson: "Lesson 4", isPresent: true, quota: 2, isLate: true, lateMinutes: 15, notes: "", addOns: 0, rentLaptop: "" }
        ]
      },
      {
        id: "u6",
        name: "AI Researchers",
        date: "18 Sep",
        startTime: "10:00",
        endTime: "12:00",
        status: "Active",
        sessionType: "Dynamic",
        students: [
          { id: "us14", name: "Natasha Romanoff", studentId: "STD-120392032-564", avatar: "NR", course: "Neural Networks 101", lesson: "Lesson 6", isPresent: true, quota: 1, isLate: false, lateMinutes: 0, notes: "", addOns: 0, rentLaptop: "" },
          { id: "us15", name: "Otto Octavius", studentId: "STD-120392032-565", avatar: "OO", course: "Neural Networks 101", lesson: "Lesson 6", isPresent: true, quota: 1, isLate: false, lateMinutes: 0, notes: "", addOns: 0, rentLaptop: "" }
        ]
      }
    ]);
    const toastShow = ref(false);
    const toastText = ref("");
    const toastColor = ref("success");
    const isStudentListExpanded = ref(true);
    const toggleStudentList = () => {
      isStudentListExpanded.value = !isStudentListExpanded.value;
    };
    const selectedClassId = ref(((_a = upcomingClasses.value.find((c) => c.status === "Ongoing")) == null ? void 0 : _a.id) ?? ((_b = upcomingClasses.value[0]) == null ? void 0 : _b.id) ?? "");
    const selectClass = (id) => {
      selectedClassId.value = id;
    };
    const selectedClass = computed(() => upcomingClasses.value.find((c) => c.id === selectedClassId.value));
    const toggleLate = (studentId) => {
      const cls = selectedClass.value;
      if (!cls) return;
      const student = cls.students.find((s) => s.id === studentId);
      if (student) student.isLate = !student.isLate;
    };
    const supportStatusMap = {
      "need-support": { color: "error", label: "Need Support" },
      "on-track": { color: "success", label: "On Track" },
      "completed": { color: "primary", label: "Completed" }
    };
    const paceMap = {
      "too-fast": { color: "warning", label: "Too Fast" },
      "on-pace": { color: "success", label: "On Pace" },
      "too-slow": { color: "error", label: "Too Slow" }
    };
    const ratingMap = {
      "great": { color: "info", label: "Great" },
      "good": { color: "success", label: "Good" },
      "average": { color: "warning", label: "Average" },
      "needs-improvement": { color: "error", label: "Needs Improvement" }
    };
    const getSupportColor = (status) => {
      var _a2;
      return ((_a2 = supportStatusMap[status]) == null ? void 0 : _a2.color) ?? "grey";
    };
    const getSupportLabel = (status) => {
      var _a2;
      return ((_a2 = supportStatusMap[status]) == null ? void 0 : _a2.label) ?? status;
    };
    const getPaceLabel = (pace) => {
      var _a2;
      return ((_a2 = paceMap[pace]) == null ? void 0 : _a2.label) ?? pace;
    };
    const getRatingLabel = (rating) => {
      var _a2;
      return ((_a2 = ratingMap[rating]) == null ? void 0 : _a2.label) ?? rating;
    };
    const progressStudents = ref([
      {
        id: "rp1",
        name: "Alice Johnson",
        avatar: "AJ",
        course: "Coding Xplorer - Adaptive with Robot New",
        meetingLabel: "Meeting 5",
        progress: 72,
        lessonLabel: "Lesson 2",
        lessonTitle: "UX/UI Fundamentals",
        duration: "3h",
        pace: "too-fast",
        rating: "great",
        supportStatus: "need-support",
        isPresent: true,
        checkedByTeacher: true
      },
      {
        id: "rp2",
        name: "Bob Smith",
        avatar: "BS",
        course: "Coding Xplorer - Adaptive with Robot New",
        meetingLabel: "Meeting 5",
        progress: 45,
        lessonLabel: "Lesson 2",
        lessonTitle: "UX/UI Fundamentals",
        duration: "2h",
        pace: "on-pace",
        rating: "good",
        supportStatus: "on-track",
        isPresent: false,
        checkedByTeacher: false
      },
      {
        id: "rp3",
        name: "Charlie Brown",
        avatar: "CB",
        course: "Coding Xplorer - Adaptive with Robot New",
        meetingLabel: "Meeting 5",
        progress: 88,
        lessonLabel: "Lesson 2",
        lessonTitle: "UX/UI Fundamentals",
        duration: "4h",
        pace: "too-slow",
        rating: "average",
        supportStatus: "completed",
        isPresent: true,
        checkedByTeacher: true
      },
      {
        id: "rp4",
        name: "Diana Prince",
        avatar: "DP",
        course: "Coding Xplorer - Adaptive with Robot New",
        meetingLabel: "Meeting 5",
        progress: 60,
        lessonLabel: "Lesson 2",
        lessonTitle: "UX/UI Fundamentals",
        duration: "2.5h",
        pace: "on-pace",
        rating: "great",
        supportStatus: "need-support",
        isPresent: true,
        checkedByTeacher: false
      },
      {
        id: "rp5",
        name: "Eve Adams",
        avatar: "EA",
        course: "Advanced Python",
        meetingLabel: "Meeting 3",
        progress: 30,
        lessonLabel: "Lesson 5",
        lessonTitle: "Data Structures",
        duration: "1.5h",
        pace: "too-fast",
        rating: "needs-improvement",
        supportStatus: "on-track",
        isPresent: false,
        checkedByTeacher: false
      },
      {
        id: "rp6",
        name: "Frank Castle",
        avatar: "FC",
        course: "Game Design Basics",
        meetingLabel: "Meeting 2",
        progress: 95,
        lessonLabel: "Lesson 3",
        lessonTitle: "Level Design Principles",
        duration: "3.5h",
        pace: "on-pace",
        rating: "great",
        supportStatus: "completed",
        isPresent: true,
        checkedByTeacher: true
      }
    ]);
    const toggleCheckedByTeacher = (studentId) => {
      const student = progressStudents.value.find((s) => s.id === studentId);
      if (student && student.isPresent) {
        student.checkedByTeacher = !student.checkedByTeacher;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-b5b39bc1><div class="mb-5" data-v-b5b39bc1><h4 class="text-h4 font-weight-medium text-high-emphasis" data-v-b5b39bc1> Dashboard teacher </h4><p class="text-body-1 text-medium-emphasis mb-0" data-v-b5b39bc1> See the progress of each student on dashboard </p></div>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "overflow-hidden h-100" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="pa-5 pb-4" data-v-b5b39bc1${_scopeId3}><span class="text-body-1 font-weight-medium text-high-emphasis d-block mb-5" data-v-b5b39bc1${_scopeId3}> Your statistic </span><div class="d-flex align-start gap-8 flex-wrap" data-v-b5b39bc1${_scopeId3}><!--[-->`);
                        ssrRenderList(statItems, (item) => {
                          _push4(`<div class="d-flex align-center gap-3" data-v-b5b39bc1${_scopeId3}><div class="d-flex align-center justify-center rounded" style="${ssrRenderStyle([{ "width": "40px", "height": "40px" }, { backgroundColor: `rgba(var(--v-theme-${item.iconColor}), 0.12)` }])}" data-v-b5b39bc1${_scopeId3}>`);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: item.icon,
                            color: item.iconColor,
                            size: "22"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div data-v-b5b39bc1${_scopeId3}><span class="text-caption text-medium-emphasis d-block" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(item.label)}</span><span class="text-h4 font-weight-medium text-high-emphasis" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(item.value)}</span></div></div>`);
                        });
                        _push4(`<!--]--></div></div><div class="bg-primary" style="${ssrRenderStyle({ "height": "4px" })}" data-v-b5b39bc1${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "pa-5 pb-4" }, [
                            createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis d-block mb-5" }, " Your statistic "),
                            createVNode("div", { class: "d-flex align-start gap-8 flex-wrap" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(statItems, (item) => {
                                return createVNode("div", {
                                  key: item.label,
                                  class: "d-flex align-center gap-3"
                                }, [
                                  createVNode("div", {
                                    class: "d-flex align-center justify-center rounded",
                                    style: [{ "width": "40px", "height": "40px" }, { backgroundColor: `rgba(var(--v-theme-${item.iconColor}), 0.12)` }]
                                  }, [
                                    createVNode(VIcon, {
                                      icon: item.icon,
                                      color: item.iconColor,
                                      size: "22"
                                    }, null, 8, ["icon", "color"])
                                  ], 4),
                                  createVNode("div", null, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis d-block" }, toDisplayString(item.label), 1),
                                    createVNode("span", { class: "text-h4 font-weight-medium text-high-emphasis" }, toDisplayString(item.value), 1)
                                  ])
                                ]);
                              }), 64))
                            ])
                          ]),
                          createVNode("div", {
                            class: "bg-primary",
                            style: { "height": "4px" }
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "overflow-hidden h-100" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "pa-5 pb-4" }, [
                          createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis d-block mb-5" }, " Your statistic "),
                          createVNode("div", { class: "d-flex align-start gap-8 flex-wrap" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(statItems, (item) => {
                              return createVNode("div", {
                                key: item.label,
                                class: "d-flex align-center gap-3"
                              }, [
                                createVNode("div", {
                                  class: "d-flex align-center justify-center rounded",
                                  style: [{ "width": "40px", "height": "40px" }, { backgroundColor: `rgba(var(--v-theme-${item.iconColor}), 0.12)` }]
                                }, [
                                  createVNode(VIcon, {
                                    icon: item.icon,
                                    color: item.iconColor,
                                    size: "22"
                                  }, null, 8, ["icon", "color"])
                                ], 4),
                                createVNode("div", null, [
                                  createVNode("span", { class: "text-caption text-medium-emphasis d-block" }, toDisplayString(item.label), 1),
                                  createVNode("span", { class: "text-h4 font-weight-medium text-high-emphasis" }, toDisplayString(item.value), 1)
                                ])
                              ]);
                            }), 64))
                          ])
                        ]),
                        createVNode("div", {
                          class: "bg-primary",
                          style: { "height": "4px" }
                        })
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
              sm: "6",
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "overflow-hidden h-100" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="pa-5 pb-4 d-flex flex-column gap-1" data-v-b5b39bc1${_scopeId3}><span class="text-caption text-medium-emphasis" data-v-b5b39bc1${_scopeId3}> Pending Journal </span><span class="text-h3 font-weight-medium text-high-emphasis" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(unref(pendingJournalCount))}</span>`);
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: { name: "reports" },
                          class: "text-primary text-decoration-none font-weight-medium text-body-2 mt-1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` See Details `);
                            } else {
                              return [
                                createTextVNode(" See Details ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="bg-warning" style="${ssrRenderStyle({ "height": "4px" })}" data-v-b5b39bc1${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "pa-5 pb-4 d-flex flex-column gap-1" }, [
                            createVNode("span", { class: "text-caption text-medium-emphasis" }, " Pending Journal "),
                            createVNode("span", { class: "text-h3 font-weight-medium text-high-emphasis" }, toDisplayString(unref(pendingJournalCount)), 1),
                            createVNode(_component_NuxtLink, {
                              to: { name: "reports" },
                              class: "text-primary text-decoration-none font-weight-medium text-body-2 mt-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" See Details ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", {
                            class: "bg-warning",
                            style: { "height": "4px" }
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "overflow-hidden h-100" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "pa-5 pb-4 d-flex flex-column gap-1" }, [
                          createVNode("span", { class: "text-caption text-medium-emphasis" }, " Pending Journal "),
                          createVNode("span", { class: "text-h3 font-weight-medium text-high-emphasis" }, toDisplayString(unref(pendingJournalCount)), 1),
                          createVNode(_component_NuxtLink, {
                            to: { name: "reports" },
                            class: "text-primary text-decoration-none font-weight-medium text-body-2 mt-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" See Details ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", {
                          class: "bg-warning",
                          style: { "height": "4px" }
                        })
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
              sm: "6",
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "overflow-hidden h-100" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="pa-5 pb-4 d-flex flex-column gap-1" data-v-b5b39bc1${_scopeId3}><span class="text-caption text-medium-emphasis" data-v-b5b39bc1${_scopeId3}> Pending Report </span><span class="text-h3 font-weight-medium text-high-emphasis" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(unref(pendingReportCount))}</span>`);
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: { name: "reports" },
                          class: "text-error text-decoration-none font-weight-medium text-body-2 mt-1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` See Details `);
                            } else {
                              return [
                                createTextVNode(" See Details ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="bg-error" style="${ssrRenderStyle({ "height": "4px" })}" data-v-b5b39bc1${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "pa-5 pb-4 d-flex flex-column gap-1" }, [
                            createVNode("span", { class: "text-caption text-medium-emphasis" }, " Pending Report "),
                            createVNode("span", { class: "text-h3 font-weight-medium text-high-emphasis" }, toDisplayString(unref(pendingReportCount)), 1),
                            createVNode(_component_NuxtLink, {
                              to: { name: "reports" },
                              class: "text-error text-decoration-none font-weight-medium text-body-2 mt-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" See Details ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", {
                            class: "bg-error",
                            style: { "height": "4px" }
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "overflow-hidden h-100" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "pa-5 pb-4 d-flex flex-column gap-1" }, [
                          createVNode("span", { class: "text-caption text-medium-emphasis" }, " Pending Report "),
                          createVNode("span", { class: "text-h3 font-weight-medium text-high-emphasis" }, toDisplayString(unref(pendingReportCount)), 1),
                          createVNode(_component_NuxtLink, {
                            to: { name: "reports" },
                            class: "text-error text-decoration-none font-weight-medium text-body-2 mt-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" See Details ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", {
                          class: "bg-error",
                          style: { "height": "4px" }
                        })
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
                  createVNode(VCard, { class: "overflow-hidden h-100" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "pa-5 pb-4" }, [
                        createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis d-block mb-5" }, " Your statistic "),
                        createVNode("div", { class: "d-flex align-start gap-8 flex-wrap" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(statItems, (item) => {
                            return createVNode("div", {
                              key: item.label,
                              class: "d-flex align-center gap-3"
                            }, [
                              createVNode("div", {
                                class: "d-flex align-center justify-center rounded",
                                style: [{ "width": "40px", "height": "40px" }, { backgroundColor: `rgba(var(--v-theme-${item.iconColor}), 0.12)` }]
                              }, [
                                createVNode(VIcon, {
                                  icon: item.icon,
                                  color: item.iconColor,
                                  size: "22"
                                }, null, 8, ["icon", "color"])
                              ], 4),
                              createVNode("div", null, [
                                createVNode("span", { class: "text-caption text-medium-emphasis d-block" }, toDisplayString(item.label), 1),
                                createVNode("span", { class: "text-h4 font-weight-medium text-high-emphasis" }, toDisplayString(item.value), 1)
                              ])
                            ]);
                          }), 64))
                        ])
                      ]),
                      createVNode("div", {
                        class: "bg-primary",
                        style: { "height": "4px" }
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "overflow-hidden h-100" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "pa-5 pb-4 d-flex flex-column gap-1" }, [
                        createVNode("span", { class: "text-caption text-medium-emphasis" }, " Pending Journal "),
                        createVNode("span", { class: "text-h3 font-weight-medium text-high-emphasis" }, toDisplayString(unref(pendingJournalCount)), 1),
                        createVNode(_component_NuxtLink, {
                          to: { name: "reports" },
                          class: "text-primary text-decoration-none font-weight-medium text-body-2 mt-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" See Details ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", {
                        class: "bg-warning",
                        style: { "height": "4px" }
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "overflow-hidden h-100" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "pa-5 pb-4 d-flex flex-column gap-1" }, [
                        createVNode("span", { class: "text-caption text-medium-emphasis" }, " Pending Report "),
                        createVNode("span", { class: "text-h3 font-weight-medium text-high-emphasis" }, toDisplayString(unref(pendingReportCount)), 1),
                        createVNode(_component_NuxtLink, {
                          to: { name: "reports" },
                          class: "text-error text-decoration-none font-weight-medium text-body-2 mt-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" See Details ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", {
                        class: "bg-error",
                        style: { "height": "4px" }
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
      }, _parent));
      _push(`<div class="mt-7" data-v-b5b39bc1>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "border overflow-hidden h-100 d-flex flex-column",
                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="pa-4 d-flex align-center border-b" style="${ssrRenderStyle({ "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" })}" data-v-b5b39bc1${_scopeId3}><h5 class="text-h5 font-weight-medium text-high-emphasis mb-0" data-v-b5b39bc1${_scopeId3}> Upcoming class </h5></div><div class="d-flex flex-column gap-2 pa-4 overflow-y-auto" style="${ssrRenderStyle({ "max-height": "475px" })}" data-v-b5b39bc1${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(upcomingClasses), (cls) => {
                          _push4(`<div class="${ssrRenderClass([cls.id === unref(selectedClassId) ? "bg-primary text-white" : "bg-surface", "upcoming-row d-flex align-start ga-3 pa-3 rounded-lg cursor-pointer"])}" style="${ssrRenderStyle({ "border": "1px solid rgba(var(--v-theme-on-surface), 0.08)" })}" data-v-b5b39bc1${_scopeId3}><div class="d-flex flex-column align-center" style="${ssrRenderStyle({ "min-width": "48px" })}" data-v-b5b39bc1${_scopeId3}><span class="${ssrRenderClass([cls.id === unref(selectedClassId) ? "text-white" : "text-primary", "text-body-1 font-weight-medium lh-sm"])}" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(cls.startTime)}</span><span class="${ssrRenderClass([cls.id === unref(selectedClassId) ? "text-white text-opacity-70" : "text-medium-emphasis", "text-caption"])}" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(cls.endTime)}</span></div><div class="align-self-stretch" style="${ssrRenderStyle({ "width": "1px", "background-color": "rgba(var(--v-theme-on-surface), 0.12)" })}" data-v-b5b39bc1${_scopeId3}></div><div class="d-flex flex-column flex-grow-1 min-w-0" data-v-b5b39bc1${_scopeId3}><span class="${ssrRenderClass([cls.id === unref(selectedClassId) ? "text-white" : "text-high-emphasis", "text-body-1 font-weight-medium text-truncate"])}" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(cls.name)}</span><span class="${ssrRenderClass([cls.id === unref(selectedClassId) ? "text-white text-opacity-70" : "text-medium-emphasis", "text-caption"])}" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(cls.date)} <span class="mx-1" data-v-b5b39bc1${_scopeId3}>·</span> ${ssrInterpolate(cls.sessionType)}</span></div></div>`);
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: "pa-4 d-flex align-center border-b",
                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                          }, [
                            createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-0" }, " Upcoming class ")
                          ]),
                          createVNode("div", {
                            class: "d-flex flex-column gap-2 pa-4 overflow-y-auto",
                            style: { "max-height": "475px" }
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(upcomingClasses), (cls) => {
                              return openBlock(), createBlock("div", {
                                key: cls.id,
                                class: ["upcoming-row d-flex align-start ga-3 pa-3 rounded-lg cursor-pointer", cls.id === unref(selectedClassId) ? "bg-primary text-white" : "bg-surface"],
                                style: { "border": "1px solid rgba(var(--v-theme-on-surface), 0.08)" },
                                onClick: ($event) => selectClass(cls.id)
                              }, [
                                createVNode("div", {
                                  class: "d-flex flex-column align-center",
                                  style: { "min-width": "48px" }
                                }, [
                                  createVNode("span", {
                                    class: ["text-body-1 font-weight-medium lh-sm", cls.id === unref(selectedClassId) ? "text-white" : "text-primary"]
                                  }, toDisplayString(cls.startTime), 3),
                                  createVNode("span", {
                                    class: ["text-caption", cls.id === unref(selectedClassId) ? "text-white text-opacity-70" : "text-medium-emphasis"]
                                  }, toDisplayString(cls.endTime), 3)
                                ]),
                                createVNode("div", {
                                  class: "align-self-stretch",
                                  style: { "width": "1px", "background-color": "rgba(var(--v-theme-on-surface), 0.12)" }
                                }),
                                createVNode("div", { class: "d-flex flex-column flex-grow-1 min-w-0" }, [
                                  createVNode("span", {
                                    class: ["text-body-1 font-weight-medium text-truncate", cls.id === unref(selectedClassId) ? "text-white" : "text-high-emphasis"]
                                  }, toDisplayString(cls.name), 3),
                                  createVNode("span", {
                                    class: ["text-caption", cls.id === unref(selectedClassId) ? "text-white text-opacity-70" : "text-medium-emphasis"]
                                  }, [
                                    createTextVNode(toDisplayString(cls.date) + " ", 1),
                                    createVNode("span", { class: "mx-1" }, "·"),
                                    createTextVNode(" " + toDisplayString(cls.sessionType), 1)
                                  ], 2)
                                ])
                              ], 10, ["onClick"]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "border overflow-hidden h-100 d-flex flex-column",
                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" }
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "pa-4 d-flex align-center border-b",
                          style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                        }, [
                          createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-0" }, " Upcoming class ")
                        ]),
                        createVNode("div", {
                          class: "d-flex flex-column gap-2 pa-4 overflow-y-auto",
                          style: { "max-height": "475px" }
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(upcomingClasses), (cls) => {
                            return openBlock(), createBlock("div", {
                              key: cls.id,
                              class: ["upcoming-row d-flex align-start ga-3 pa-3 rounded-lg cursor-pointer", cls.id === unref(selectedClassId) ? "bg-primary text-white" : "bg-surface"],
                              style: { "border": "1px solid rgba(var(--v-theme-on-surface), 0.08)" },
                              onClick: ($event) => selectClass(cls.id)
                            }, [
                              createVNode("div", {
                                class: "d-flex flex-column align-center",
                                style: { "min-width": "48px" }
                              }, [
                                createVNode("span", {
                                  class: ["text-body-1 font-weight-medium lh-sm", cls.id === unref(selectedClassId) ? "text-white" : "text-primary"]
                                }, toDisplayString(cls.startTime), 3),
                                createVNode("span", {
                                  class: ["text-caption", cls.id === unref(selectedClassId) ? "text-white text-opacity-70" : "text-medium-emphasis"]
                                }, toDisplayString(cls.endTime), 3)
                              ]),
                              createVNode("div", {
                                class: "align-self-stretch",
                                style: { "width": "1px", "background-color": "rgba(var(--v-theme-on-surface), 0.12)" }
                              }),
                              createVNode("div", { class: "d-flex flex-column flex-grow-1 min-w-0" }, [
                                createVNode("span", {
                                  class: ["text-body-1 font-weight-medium text-truncate", cls.id === unref(selectedClassId) ? "text-white" : "text-high-emphasis"]
                                }, toDisplayString(cls.name), 3),
                                createVNode("span", {
                                  class: ["text-caption", cls.id === unref(selectedClassId) ? "text-white text-opacity-70" : "text-medium-emphasis"]
                                }, [
                                  createTextVNode(toDisplayString(cls.date) + " ", 1),
                                  createVNode("span", { class: "mx-1" }, "·"),
                                  createTextVNode(" " + toDisplayString(cls.sessionType), 1)
                                ], 2)
                              ])
                            ], 10, ["onClick"]);
                          }), 128))
                        ])
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
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(selectedClass)) {
                    _push3(ssrRenderComponent(VCard, {
                      class: "border overflow-hidden h-100 d-flex flex-column",
                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="pa-4 d-flex align-center justify-space-between flex-wrap gap-3 border-b" style="${ssrRenderStyle({ "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" })}" data-v-b5b39bc1${_scopeId3}><div class="d-flex align-center gap-3" data-v-b5b39bc1${_scopeId3}>`);
                          _push4(ssrRenderComponent(VAvatar, {
                            size: "40",
                            class: "rounded bg-primary-opacity-lighter"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "ri-user-line",
                                  color: "primary",
                                  size: "22"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: "ri-user-line",
                                    color: "primary",
                                    size: "22"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="d-flex flex-column" data-v-b5b39bc1${_scopeId3}><div class="d-flex align-center flex-wrap gap-2" data-v-b5b39bc1${_scopeId3}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(unref(selectedClass).name)}</span><span class="text-body-2 font-weight-medium text-primary" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(unref(selectedClass).startTime)} - ${ssrInterpolate(unref(selectedClass).endTime)}</span>`);
                          _push4(ssrRenderComponent(VChip, {
                            color: "primary",
                            variant: "tonal",
                            size: "x-small",
                            class: "font-weight-medium"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(selectedClass).status)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(selectedClass).status), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div></div><div class="d-flex align-center gap-2" data-v-b5b39bc1${_scopeId3}>`);
                          _push4(ssrRenderComponent(VBtn, {
                            color: "primary",
                            class: "text-capitalize",
                            rounded: "xl",
                            size: "small"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Finish Class `);
                              } else {
                                return [
                                  createTextVNode(" Finish Class ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            icon: "",
                            variant: "outlined",
                            size: "small",
                            rounded: "lg"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "ri-eye-line",
                                  size: "18"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: "ri-eye-line",
                                    size: "18"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            icon: "",
                            variant: "outlined",
                            size: "small",
                            rounded: "lg",
                            onClick: toggleStudentList
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: unref(isStudentListExpanded) ? "ri-arrow-down-s-line" : "ri-arrow-up-s-line",
                                  size: "18"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: unref(isStudentListExpanded) ? "ri-arrow-down-s-line" : "ri-arrow-up-s-line",
                                    size: "18"
                                  }, null, 8, ["icon"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                          _push4(ssrRenderComponent(VExpandTransition, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div style="${ssrRenderStyle([
                                  unref(isStudentListExpanded) ? null : { display: "none" },
                                  { "max-height": "475px" }
                                ])}" class="pa-4 d-flex flex-column gap-4 overflow-y-auto" data-v-b5b39bc1${_scopeId4}><!--[-->`);
                                ssrRenderList(unref(selectedClass).students, (student) => {
                                  _push5(`<div class="student-card pa-4 rounded-lg" style="${ssrRenderStyle({ "background-color": "rgba(var(--v-theme-on-surface), 0.02)", "border": "1px solid rgba(var(--v-theme-on-surface), 0.08)" })}" data-v-b5b39bc1${_scopeId4}><div class="d-flex align-center justify-space-between flex-wrap gap-3 mb-3" data-v-b5b39bc1${_scopeId4}><div class="d-flex align-center gap-3 flex-grow-1 min-w-0" data-v-b5b39bc1${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VAvatar, {
                                    size: "34",
                                    color: "grey-50",
                                    class: "border",
                                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span class="text-caption font-weight-medium text-high-emphasis" data-v-b5b39bc1${_scopeId5}>${ssrInterpolate(student.avatar)}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(student.avatar), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`<div class="d-flex flex-column min-w-0" data-v-b5b39bc1${_scopeId4}><span class="text-body-1 font-weight-medium text-high-emphasis text-truncate" data-v-b5b39bc1${_scopeId4}>${ssrInterpolate(student.name)}</span><span class="text-caption text-medium-emphasis text-truncate" data-v-b5b39bc1${_scopeId4}>${ssrInterpolate(student.studentId)}</span></div><div class="d-flex align-center gap-1 ms-2" data-v-b5b39bc1${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: student.isPresent ? "ri-checkbox-circle-fill" : "ri-checkbox-blank-circle-line",
                                    color: student.isPresent ? "success" : "disabled",
                                    size: "20"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span class="${ssrRenderClass([student.isPresent ? "text-success" : "text-disabled", "text-caption font-weight-medium"])}" data-v-b5b39bc1${_scopeId4}> Presence </span></div></div><div class="d-flex align-center gap-2" data-v-b5b39bc1${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VBtn, {
                                    variant: "outlined",
                                    color: "primary",
                                    size: "x-small",
                                    rounded: "xl",
                                    class: "text-capitalize font-weight-medium"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VIcon, {
                                          start: "",
                                          icon: "ri-key-line",
                                          size: "14"
                                        }, null, _parent6, _scopeId5));
                                        _push6(` Send Key `);
                                      } else {
                                        return [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "ri-key-line",
                                            size: "14"
                                          }),
                                          createTextVNode(" Send Key ")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  if (student.addOns > 0) {
                                    _push5(ssrRenderComponent(VBtn, {
                                      variant: "outlined",
                                      color: "secondary",
                                      size: "x-small",
                                      rounded: "xl",
                                      class: "text-capitalize font-weight-medium"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(student.addOns)} Add-Ons `);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(student.addOns) + " Add-Ons ", 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div></div><div class="d-flex align-center gap-1 mb-3" data-v-b5b39bc1${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "ri-book-2-line",
                                    size: "14",
                                    color: "secondary"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span class="text-caption text-medium-emphasis text-truncate" data-v-b5b39bc1${_scopeId4}>${ssrInterpolate(student.course)}</span><span class="dot-separator bg-secondary mx-1" data-v-b5b39bc1${_scopeId4}></span><span class="text-caption font-weight-medium text-medium-emphasis" data-v-b5b39bc1${_scopeId4}>${ssrInterpolate(student.lesson)}</span></div><div class="d-flex align-center flex-wrap gap-3" data-v-b5b39bc1${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VChip, {
                                    color: "success",
                                    variant: "tonal",
                                    size: "x-small",
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` Quota : ${ssrInterpolate(student.quota)}`);
                                      } else {
                                        return [
                                          createTextVNode(" Quota : " + toDisplayString(student.quota), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  if (student.rentLaptop) {
                                    _push5(ssrRenderComponent(VChip, {
                                      color: "info",
                                      variant: "tonal",
                                      size: "x-small",
                                      class: "font-weight-medium"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(` Rent Laptop ${ssrInterpolate(student.rentLaptop)}`);
                                        } else {
                                          return [
                                            createTextVNode(" Rent Laptop " + toDisplayString(student.rentLaptop), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`<div class="d-flex align-center gap-1" data-v-b5b39bc1${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VCheckbox, {
                                    "model-value": student.isLate,
                                    "hide-details": "",
                                    density: "compact",
                                    class: "late-checkbox",
                                    onChange: ($event) => toggleLate(student.id)
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span class="${ssrRenderClass([student.isLate ? "text-error" : "text-success", "text-caption font-weight-medium"])}" data-v-b5b39bc1${_scopeId4}>${ssrInterpolate(student.isLate ? "Late" : "On Time")}</span></div>`);
                                  if (student.isLate) {
                                    _push5(`<div style="${ssrRenderStyle({ "width": "80px" })}" data-v-b5b39bc1${_scopeId4}>`);
                                    _push5(ssrRenderComponent(VTextField, {
                                      "model-value": student.lateMinutes,
                                      label: "Minutes",
                                      type: "number",
                                      density: "compact",
                                      "hide-details": "",
                                      variant: "outlined",
                                      class: "minutes-input"
                                    }, null, _parent5, _scopeId4));
                                    _push5(`</div>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`<div style="${ssrRenderStyle({ "min-width": "160px", "flex": "1" })}" data-v-b5b39bc1${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VTextField, {
                                    modelValue: student.notes,
                                    "onUpdate:modelValue": ($event) => student.notes = $event,
                                    placeholder: "Notes",
                                    density: "compact",
                                    "hide-details": "",
                                    variant: "outlined"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div></div></div>`);
                                });
                                _push5(`<!--]--></div>`);
                              } else {
                                return [
                                  withDirectives(createVNode("div", {
                                    class: "pa-4 d-flex flex-column gap-4 overflow-y-auto",
                                    style: { "max-height": "475px" }
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedClass).students, (student) => {
                                      return openBlock(), createBlock("div", {
                                        key: student.id,
                                        class: "student-card pa-4 rounded-lg",
                                        style: { "background-color": "rgba(var(--v-theme-on-surface), 0.02)", "border": "1px solid rgba(var(--v-theme-on-surface), 0.08)" }
                                      }, [
                                        createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-3 mb-3" }, [
                                          createVNode("div", { class: "d-flex align-center gap-3 flex-grow-1 min-w-0" }, [
                                            createVNode(VAvatar, {
                                              size: "34",
                                              color: "grey-50",
                                              class: "border",
                                              style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(student.avatar), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode("div", { class: "d-flex flex-column min-w-0" }, [
                                              createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                              createVNode("span", { class: "text-caption text-medium-emphasis text-truncate" }, toDisplayString(student.studentId), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex align-center gap-1 ms-2" }, [
                                              createVNode(VIcon, {
                                                icon: student.isPresent ? "ri-checkbox-circle-fill" : "ri-checkbox-blank-circle-line",
                                                color: student.isPresent ? "success" : "disabled",
                                                size: "20"
                                              }, null, 8, ["icon", "color"]),
                                              createVNode("span", {
                                                class: ["text-caption font-weight-medium", student.isPresent ? "text-success" : "text-disabled"]
                                              }, " Presence ", 2)
                                            ])
                                          ]),
                                          createVNode("div", { class: "d-flex align-center gap-2" }, [
                                            createVNode(VBtn, {
                                              variant: "outlined",
                                              color: "primary",
                                              size: "x-small",
                                              rounded: "xl",
                                              class: "text-capitalize font-weight-medium"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  start: "",
                                                  icon: "ri-key-line",
                                                  size: "14"
                                                }),
                                                createTextVNode(" Send Key ")
                                              ]),
                                              _: 1
                                            }),
                                            student.addOns > 0 ? (openBlock(), createBlock(VBtn, {
                                              key: 0,
                                              variant: "outlined",
                                              color: "secondary",
                                              size: "x-small",
                                              rounded: "xl",
                                              class: "text-capitalize font-weight-medium"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(student.addOns) + " Add-Ons ", 1)
                                              ]),
                                              _: 2
                                            }, 1024)) : createCommentVNode("", true)
                                          ])
                                        ]),
                                        createVNode("div", { class: "d-flex align-center gap-1 mb-3" }, [
                                          createVNode(VIcon, {
                                            icon: "ri-book-2-line",
                                            size: "14",
                                            color: "secondary"
                                          }),
                                          createVNode("span", { class: "text-caption text-medium-emphasis text-truncate" }, toDisplayString(student.course), 1),
                                          createVNode("span", { class: "dot-separator bg-secondary mx-1" }),
                                          createVNode("span", { class: "text-caption font-weight-medium text-medium-emphasis" }, toDisplayString(student.lesson), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex align-center flex-wrap gap-3" }, [
                                          createVNode(VChip, {
                                            color: "success",
                                            variant: "tonal",
                                            size: "x-small",
                                            class: "font-weight-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Quota : " + toDisplayString(student.quota), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          student.rentLaptop ? (openBlock(), createBlock(VChip, {
                                            key: 0,
                                            color: "info",
                                            variant: "tonal",
                                            size: "x-small",
                                            class: "font-weight-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Rent Laptop " + toDisplayString(student.rentLaptop), 1)
                                            ]),
                                            _: 2
                                          }, 1024)) : createCommentVNode("", true),
                                          createVNode("div", { class: "d-flex align-center gap-1" }, [
                                            createVNode(VCheckbox, {
                                              "model-value": student.isLate,
                                              "hide-details": "",
                                              density: "compact",
                                              class: "late-checkbox",
                                              onChange: ($event) => toggleLate(student.id)
                                            }, null, 8, ["model-value", "onChange"]),
                                            createVNode("span", {
                                              class: ["text-caption font-weight-medium", student.isLate ? "text-error" : "text-success"]
                                            }, toDisplayString(student.isLate ? "Late" : "On Time"), 3)
                                          ]),
                                          student.isLate ? (openBlock(), createBlock("div", {
                                            key: 1,
                                            style: { "width": "80px" }
                                          }, [
                                            createVNode(VTextField, {
                                              "model-value": student.lateMinutes,
                                              label: "Minutes",
                                              type: "number",
                                              density: "compact",
                                              "hide-details": "",
                                              variant: "outlined",
                                              class: "minutes-input"
                                            }, null, 8, ["model-value"])
                                          ])) : createCommentVNode("", true),
                                          createVNode("div", { style: { "min-width": "160px", "flex": "1" } }, [
                                            createVNode(VTextField, {
                                              modelValue: student.notes,
                                              "onUpdate:modelValue": ($event) => student.notes = $event,
                                              placeholder: "Notes",
                                              density: "compact",
                                              "hide-details": "",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ])
                                      ]);
                                    }), 128))
                                  ], 512), [
                                    [vShow, unref(isStudentListExpanded)]
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                          _push4(`<div class="pa-4 d-flex align-center justify-end gap-3" data-v-b5b39bc1${_scopeId3}>`);
                          _push4(ssrRenderComponent(VBtn, {
                            variant: "outlined",
                            color: "secondary",
                            class: "text-capitalize",
                            rounded: "xl",
                            onClick: ($event) => {
                              toastShow.value = true;
                              toastText.value = "Changes discarded";
                              toastColor.value = "info";
                            }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Discard `);
                              } else {
                                return [
                                  createTextVNode(" Discard ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            color: "primary",
                            class: "text-capitalize",
                            rounded: "xl",
                            onClick: ($event) => {
                              toastShow.value = true;
                              toastText.value = "Changes saved successfully";
                              toastColor.value = "success";
                            }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Save Changes `);
                              } else {
                                return [
                                  createTextVNode(" Save Changes ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "pa-4 d-flex align-center justify-space-between flex-wrap gap-3 border-b",
                              style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                            }, [
                              createVNode("div", { class: "d-flex align-center gap-3" }, [
                                createVNode(VAvatar, {
                                  size: "40",
                                  class: "rounded bg-primary-opacity-lighter"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-user-line",
                                      color: "primary",
                                      size: "22"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "d-flex flex-column" }, [
                                  createVNode("div", { class: "d-flex align-center flex-wrap gap-2" }, [
                                    createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(unref(selectedClass).name), 1),
                                    createVNode("span", { class: "text-body-2 font-weight-medium text-primary" }, toDisplayString(unref(selectedClass).startTime) + " - " + toDisplayString(unref(selectedClass).endTime), 1),
                                    createVNode(VChip, {
                                      color: "primary",
                                      variant: "tonal",
                                      size: "x-small",
                                      class: "font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(selectedClass).status), 1)
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center gap-2" }, [
                                createVNode(VBtn, {
                                  color: "primary",
                                  class: "text-capitalize",
                                  rounded: "xl",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Finish Class ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  icon: "",
                                  variant: "outlined",
                                  size: "small",
                                  rounded: "lg"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-eye-line",
                                      size: "18"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  icon: "",
                                  variant: "outlined",
                                  size: "small",
                                  rounded: "lg",
                                  onClick: toggleStudentList
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: unref(isStudentListExpanded) ? "ri-arrow-down-s-line" : "ri-arrow-up-s-line",
                                      size: "18"
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode(VExpandTransition, null, {
                              default: withCtx(() => [
                                withDirectives(createVNode("div", {
                                  class: "pa-4 d-flex flex-column gap-4 overflow-y-auto",
                                  style: { "max-height": "475px" }
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedClass).students, (student) => {
                                    return openBlock(), createBlock("div", {
                                      key: student.id,
                                      class: "student-card pa-4 rounded-lg",
                                      style: { "background-color": "rgba(var(--v-theme-on-surface), 0.02)", "border": "1px solid rgba(var(--v-theme-on-surface), 0.08)" }
                                    }, [
                                      createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-3 mb-3" }, [
                                        createVNode("div", { class: "d-flex align-center gap-3 flex-grow-1 min-w-0" }, [
                                          createVNode(VAvatar, {
                                            size: "34",
                                            color: "grey-50",
                                            class: "border",
                                            style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(student.avatar), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode("div", { class: "d-flex flex-column min-w-0" }, [
                                            createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                            createVNode("span", { class: "text-caption text-medium-emphasis text-truncate" }, toDisplayString(student.studentId), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex align-center gap-1 ms-2" }, [
                                            createVNode(VIcon, {
                                              icon: student.isPresent ? "ri-checkbox-circle-fill" : "ri-checkbox-blank-circle-line",
                                              color: student.isPresent ? "success" : "disabled",
                                              size: "20"
                                            }, null, 8, ["icon", "color"]),
                                            createVNode("span", {
                                              class: ["text-caption font-weight-medium", student.isPresent ? "text-success" : "text-disabled"]
                                            }, " Presence ", 2)
                                          ])
                                        ]),
                                        createVNode("div", { class: "d-flex align-center gap-2" }, [
                                          createVNode(VBtn, {
                                            variant: "outlined",
                                            color: "primary",
                                            size: "x-small",
                                            rounded: "xl",
                                            class: "text-capitalize font-weight-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                start: "",
                                                icon: "ri-key-line",
                                                size: "14"
                                              }),
                                              createTextVNode(" Send Key ")
                                            ]),
                                            _: 1
                                          }),
                                          student.addOns > 0 ? (openBlock(), createBlock(VBtn, {
                                            key: 0,
                                            variant: "outlined",
                                            color: "secondary",
                                            size: "x-small",
                                            rounded: "xl",
                                            class: "text-capitalize font-weight-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(student.addOns) + " Add-Ons ", 1)
                                            ]),
                                            _: 2
                                          }, 1024)) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      createVNode("div", { class: "d-flex align-center gap-1 mb-3" }, [
                                        createVNode(VIcon, {
                                          icon: "ri-book-2-line",
                                          size: "14",
                                          color: "secondary"
                                        }),
                                        createVNode("span", { class: "text-caption text-medium-emphasis text-truncate" }, toDisplayString(student.course), 1),
                                        createVNode("span", { class: "dot-separator bg-secondary mx-1" }),
                                        createVNode("span", { class: "text-caption font-weight-medium text-medium-emphasis" }, toDisplayString(student.lesson), 1)
                                      ]),
                                      createVNode("div", { class: "d-flex align-center flex-wrap gap-3" }, [
                                        createVNode(VChip, {
                                          color: "success",
                                          variant: "tonal",
                                          size: "x-small",
                                          class: "font-weight-medium"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Quota : " + toDisplayString(student.quota), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        student.rentLaptop ? (openBlock(), createBlock(VChip, {
                                          key: 0,
                                          color: "info",
                                          variant: "tonal",
                                          size: "x-small",
                                          class: "font-weight-medium"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Rent Laptop " + toDisplayString(student.rentLaptop), 1)
                                          ]),
                                          _: 2
                                        }, 1024)) : createCommentVNode("", true),
                                        createVNode("div", { class: "d-flex align-center gap-1" }, [
                                          createVNode(VCheckbox, {
                                            "model-value": student.isLate,
                                            "hide-details": "",
                                            density: "compact",
                                            class: "late-checkbox",
                                            onChange: ($event) => toggleLate(student.id)
                                          }, null, 8, ["model-value", "onChange"]),
                                          createVNode("span", {
                                            class: ["text-caption font-weight-medium", student.isLate ? "text-error" : "text-success"]
                                          }, toDisplayString(student.isLate ? "Late" : "On Time"), 3)
                                        ]),
                                        student.isLate ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          style: { "width": "80px" }
                                        }, [
                                          createVNode(VTextField, {
                                            "model-value": student.lateMinutes,
                                            label: "Minutes",
                                            type: "number",
                                            density: "compact",
                                            "hide-details": "",
                                            variant: "outlined",
                                            class: "minutes-input"
                                          }, null, 8, ["model-value"])
                                        ])) : createCommentVNode("", true),
                                        createVNode("div", { style: { "min-width": "160px", "flex": "1" } }, [
                                          createVNode(VTextField, {
                                            modelValue: student.notes,
                                            "onUpdate:modelValue": ($event) => student.notes = $event,
                                            placeholder: "Notes",
                                            density: "compact",
                                            "hide-details": "",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ], 512), [
                                  [vShow, unref(isStudentListExpanded)]
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider),
                            createVNode("div", { class: "pa-4 d-flex align-center justify-end gap-3" }, [
                              createVNode(VBtn, {
                                variant: "outlined",
                                color: "secondary",
                                class: "text-capitalize",
                                rounded: "xl",
                                onClick: ($event) => {
                                  toastShow.value = true;
                                  toastText.value = "Changes discarded";
                                  toastColor.value = "info";
                                }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Discard ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VBtn, {
                                color: "primary",
                                class: "text-capitalize",
                                rounded: "xl",
                                onClick: ($event) => {
                                  toastShow.value = true;
                                  toastText.value = "Changes saved successfully";
                                  toastColor.value = "success";
                                }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Save Changes ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(VCard, {
                      class: "d-flex align-center justify-center pa-12 border",
                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p class="text-body-1 text-medium-emphasis mb-0" data-v-b5b39bc1${_scopeId3}> Select a class to view details </p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-body-1 text-medium-emphasis mb-0" }, " Select a class to view details ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(selectedClass) ? (openBlock(), createBlock(VCard, {
                      key: 0,
                      class: "border overflow-hidden h-100 d-flex flex-column",
                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" }
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "pa-4 d-flex align-center justify-space-between flex-wrap gap-3 border-b",
                          style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                        }, [
                          createVNode("div", { class: "d-flex align-center gap-3" }, [
                            createVNode(VAvatar, {
                              size: "40",
                              class: "rounded bg-primary-opacity-lighter"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-user-line",
                                  color: "primary",
                                  size: "22"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "d-flex flex-column" }, [
                              createVNode("div", { class: "d-flex align-center flex-wrap gap-2" }, [
                                createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(unref(selectedClass).name), 1),
                                createVNode("span", { class: "text-body-2 font-weight-medium text-primary" }, toDisplayString(unref(selectedClass).startTime) + " - " + toDisplayString(unref(selectedClass).endTime), 1),
                                createVNode(VChip, {
                                  color: "primary",
                                  variant: "tonal",
                                  size: "x-small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(selectedClass).status), 1)
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "d-flex align-center gap-2" }, [
                            createVNode(VBtn, {
                              color: "primary",
                              class: "text-capitalize",
                              rounded: "xl",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Finish Class ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              icon: "",
                              variant: "outlined",
                              size: "small",
                              rounded: "lg"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-eye-line",
                                  size: "18"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              icon: "",
                              variant: "outlined",
                              size: "small",
                              rounded: "lg",
                              onClick: toggleStudentList
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: unref(isStudentListExpanded) ? "ri-arrow-down-s-line" : "ri-arrow-up-s-line",
                                  size: "18"
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode(VExpandTransition, null, {
                          default: withCtx(() => [
                            withDirectives(createVNode("div", {
                              class: "pa-4 d-flex flex-column gap-4 overflow-y-auto",
                              style: { "max-height": "475px" }
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedClass).students, (student) => {
                                return openBlock(), createBlock("div", {
                                  key: student.id,
                                  class: "student-card pa-4 rounded-lg",
                                  style: { "background-color": "rgba(var(--v-theme-on-surface), 0.02)", "border": "1px solid rgba(var(--v-theme-on-surface), 0.08)" }
                                }, [
                                  createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-3 mb-3" }, [
                                    createVNode("div", { class: "d-flex align-center gap-3 flex-grow-1 min-w-0" }, [
                                      createVNode(VAvatar, {
                                        size: "34",
                                        color: "grey-50",
                                        class: "border",
                                        style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(student.avatar), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("div", { class: "d-flex flex-column min-w-0" }, [
                                        createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                        createVNode("span", { class: "text-caption text-medium-emphasis text-truncate" }, toDisplayString(student.studentId), 1)
                                      ]),
                                      createVNode("div", { class: "d-flex align-center gap-1 ms-2" }, [
                                        createVNode(VIcon, {
                                          icon: student.isPresent ? "ri-checkbox-circle-fill" : "ri-checkbox-blank-circle-line",
                                          color: student.isPresent ? "success" : "disabled",
                                          size: "20"
                                        }, null, 8, ["icon", "color"]),
                                        createVNode("span", {
                                          class: ["text-caption font-weight-medium", student.isPresent ? "text-success" : "text-disabled"]
                                        }, " Presence ", 2)
                                      ])
                                    ]),
                                    createVNode("div", { class: "d-flex align-center gap-2" }, [
                                      createVNode(VBtn, {
                                        variant: "outlined",
                                        color: "primary",
                                        size: "x-small",
                                        rounded: "xl",
                                        class: "text-capitalize font-weight-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "ri-key-line",
                                            size: "14"
                                          }),
                                          createTextVNode(" Send Key ")
                                        ]),
                                        _: 1
                                      }),
                                      student.addOns > 0 ? (openBlock(), createBlock(VBtn, {
                                        key: 0,
                                        variant: "outlined",
                                        color: "secondary",
                                        size: "x-small",
                                        rounded: "xl",
                                        class: "text-capitalize font-weight-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(student.addOns) + " Add-Ons ", 1)
                                        ]),
                                        _: 2
                                      }, 1024)) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex align-center gap-1 mb-3" }, [
                                    createVNode(VIcon, {
                                      icon: "ri-book-2-line",
                                      size: "14",
                                      color: "secondary"
                                    }),
                                    createVNode("span", { class: "text-caption text-medium-emphasis text-truncate" }, toDisplayString(student.course), 1),
                                    createVNode("span", { class: "dot-separator bg-secondary mx-1" }),
                                    createVNode("span", { class: "text-caption font-weight-medium text-medium-emphasis" }, toDisplayString(student.lesson), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex align-center flex-wrap gap-3" }, [
                                    createVNode(VChip, {
                                      color: "success",
                                      variant: "tonal",
                                      size: "x-small",
                                      class: "font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Quota : " + toDisplayString(student.quota), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    student.rentLaptop ? (openBlock(), createBlock(VChip, {
                                      key: 0,
                                      color: "info",
                                      variant: "tonal",
                                      size: "x-small",
                                      class: "font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Rent Laptop " + toDisplayString(student.rentLaptop), 1)
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true),
                                    createVNode("div", { class: "d-flex align-center gap-1" }, [
                                      createVNode(VCheckbox, {
                                        "model-value": student.isLate,
                                        "hide-details": "",
                                        density: "compact",
                                        class: "late-checkbox",
                                        onChange: ($event) => toggleLate(student.id)
                                      }, null, 8, ["model-value", "onChange"]),
                                      createVNode("span", {
                                        class: ["text-caption font-weight-medium", student.isLate ? "text-error" : "text-success"]
                                      }, toDisplayString(student.isLate ? "Late" : "On Time"), 3)
                                    ]),
                                    student.isLate ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      style: { "width": "80px" }
                                    }, [
                                      createVNode(VTextField, {
                                        "model-value": student.lateMinutes,
                                        label: "Minutes",
                                        type: "number",
                                        density: "compact",
                                        "hide-details": "",
                                        variant: "outlined",
                                        class: "minutes-input"
                                      }, null, 8, ["model-value"])
                                    ])) : createCommentVNode("", true),
                                    createVNode("div", { style: { "min-width": "160px", "flex": "1" } }, [
                                      createVNode(VTextField, {
                                        modelValue: student.notes,
                                        "onUpdate:modelValue": ($event) => student.notes = $event,
                                        placeholder: "Notes",
                                        density: "compact",
                                        "hide-details": "",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ]);
                              }), 128))
                            ], 512), [
                              [vShow, unref(isStudentListExpanded)]
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode("div", { class: "pa-4 d-flex align-center justify-end gap-3" }, [
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "secondary",
                            class: "text-capitalize",
                            rounded: "xl",
                            onClick: ($event) => {
                              toastShow.value = true;
                              toastText.value = "Changes discarded";
                              toastColor.value = "info";
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Discard ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "primary",
                            class: "text-capitalize",
                            rounded: "xl",
                            onClick: ($event) => {
                              toastShow.value = true;
                              toastText.value = "Changes saved successfully";
                              toastColor.value = "success";
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save Changes ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(VCard, {
                      key: 1,
                      class: "d-flex align-center justify-center pa-12 border",
                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" }
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-body-1 text-medium-emphasis mb-0" }, " Select a class to view details ")
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "border overflow-hidden h-100 d-flex flex-column",
                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" }
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "pa-4 d-flex align-center border-b",
                        style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                      }, [
                        createVNode("h5", { class: "text-h5 font-weight-medium text-high-emphasis mb-0" }, " Upcoming class ")
                      ]),
                      createVNode("div", {
                        class: "d-flex flex-column gap-2 pa-4 overflow-y-auto",
                        style: { "max-height": "475px" }
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(upcomingClasses), (cls) => {
                          return openBlock(), createBlock("div", {
                            key: cls.id,
                            class: ["upcoming-row d-flex align-start ga-3 pa-3 rounded-lg cursor-pointer", cls.id === unref(selectedClassId) ? "bg-primary text-white" : "bg-surface"],
                            style: { "border": "1px solid rgba(var(--v-theme-on-surface), 0.08)" },
                            onClick: ($event) => selectClass(cls.id)
                          }, [
                            createVNode("div", {
                              class: "d-flex flex-column align-center",
                              style: { "min-width": "48px" }
                            }, [
                              createVNode("span", {
                                class: ["text-body-1 font-weight-medium lh-sm", cls.id === unref(selectedClassId) ? "text-white" : "text-primary"]
                              }, toDisplayString(cls.startTime), 3),
                              createVNode("span", {
                                class: ["text-caption", cls.id === unref(selectedClassId) ? "text-white text-opacity-70" : "text-medium-emphasis"]
                              }, toDisplayString(cls.endTime), 3)
                            ]),
                            createVNode("div", {
                              class: "align-self-stretch",
                              style: { "width": "1px", "background-color": "rgba(var(--v-theme-on-surface), 0.12)" }
                            }),
                            createVNode("div", { class: "d-flex flex-column flex-grow-1 min-w-0" }, [
                              createVNode("span", {
                                class: ["text-body-1 font-weight-medium text-truncate", cls.id === unref(selectedClassId) ? "text-white" : "text-high-emphasis"]
                              }, toDisplayString(cls.name), 3),
                              createVNode("span", {
                                class: ["text-caption", cls.id === unref(selectedClassId) ? "text-white text-opacity-70" : "text-medium-emphasis"]
                              }, [
                                createTextVNode(toDisplayString(cls.date) + " ", 1),
                                createVNode("span", { class: "mx-1" }, "·"),
                                createTextVNode(" " + toDisplayString(cls.sessionType), 1)
                              ], 2)
                            ])
                          ], 10, ["onClick"]);
                        }), 128))
                      ])
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
                  unref(selectedClass) ? (openBlock(), createBlock(VCard, {
                    key: 0,
                    class: "border overflow-hidden h-100 d-flex flex-column",
                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" }
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "pa-4 d-flex align-center justify-space-between flex-wrap gap-3 border-b",
                        style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                      }, [
                        createVNode("div", { class: "d-flex align-center gap-3" }, [
                          createVNode(VAvatar, {
                            size: "40",
                            class: "rounded bg-primary-opacity-lighter"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-user-line",
                                color: "primary",
                                size: "22"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "d-flex flex-column" }, [
                            createVNode("div", { class: "d-flex align-center flex-wrap gap-2" }, [
                              createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(unref(selectedClass).name), 1),
                              createVNode("span", { class: "text-body-2 font-weight-medium text-primary" }, toDisplayString(unref(selectedClass).startTime) + " - " + toDisplayString(unref(selectedClass).endTime), 1),
                              createVNode(VChip, {
                                color: "primary",
                                variant: "tonal",
                                size: "x-small",
                                class: "font-weight-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(selectedClass).status), 1)
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "d-flex align-center gap-2" }, [
                          createVNode(VBtn, {
                            color: "primary",
                            class: "text-capitalize",
                            rounded: "xl",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Finish Class ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            icon: "",
                            variant: "outlined",
                            size: "small",
                            rounded: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-eye-line",
                                size: "18"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            icon: "",
                            variant: "outlined",
                            size: "small",
                            rounded: "lg",
                            onClick: toggleStudentList
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: unref(isStudentListExpanded) ? "ri-arrow-down-s-line" : "ri-arrow-up-s-line",
                                size: "18"
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode(VExpandTransition, null, {
                        default: withCtx(() => [
                          withDirectives(createVNode("div", {
                            class: "pa-4 d-flex flex-column gap-4 overflow-y-auto",
                            style: { "max-height": "475px" }
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedClass).students, (student) => {
                              return openBlock(), createBlock("div", {
                                key: student.id,
                                class: "student-card pa-4 rounded-lg",
                                style: { "background-color": "rgba(var(--v-theme-on-surface), 0.02)", "border": "1px solid rgba(var(--v-theme-on-surface), 0.08)" }
                              }, [
                                createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-3 mb-3" }, [
                                  createVNode("div", { class: "d-flex align-center gap-3 flex-grow-1 min-w-0" }, [
                                    createVNode(VAvatar, {
                                      size: "34",
                                      color: "grey-50",
                                      class: "border",
                                      style: { "border-color": "rgba(var(--v-theme-on-surface), 0.08) !important" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(student.avatar), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "d-flex flex-column min-w-0" }, [
                                      createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1),
                                      createVNode("span", { class: "text-caption text-medium-emphasis text-truncate" }, toDisplayString(student.studentId), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex align-center gap-1 ms-2" }, [
                                      createVNode(VIcon, {
                                        icon: student.isPresent ? "ri-checkbox-circle-fill" : "ri-checkbox-blank-circle-line",
                                        color: student.isPresent ? "success" : "disabled",
                                        size: "20"
                                      }, null, 8, ["icon", "color"]),
                                      createVNode("span", {
                                        class: ["text-caption font-weight-medium", student.isPresent ? "text-success" : "text-disabled"]
                                      }, " Presence ", 2)
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex align-center gap-2" }, [
                                    createVNode(VBtn, {
                                      variant: "outlined",
                                      color: "primary",
                                      size: "x-small",
                                      rounded: "xl",
                                      class: "text-capitalize font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "ri-key-line",
                                          size: "14"
                                        }),
                                        createTextVNode(" Send Key ")
                                      ]),
                                      _: 1
                                    }),
                                    student.addOns > 0 ? (openBlock(), createBlock(VBtn, {
                                      key: 0,
                                      variant: "outlined",
                                      color: "secondary",
                                      size: "x-small",
                                      rounded: "xl",
                                      class: "text-capitalize font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(student.addOns) + " Add-Ons ", 1)
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true)
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex align-center gap-1 mb-3" }, [
                                  createVNode(VIcon, {
                                    icon: "ri-book-2-line",
                                    size: "14",
                                    color: "secondary"
                                  }),
                                  createVNode("span", { class: "text-caption text-medium-emphasis text-truncate" }, toDisplayString(student.course), 1),
                                  createVNode("span", { class: "dot-separator bg-secondary mx-1" }),
                                  createVNode("span", { class: "text-caption font-weight-medium text-medium-emphasis" }, toDisplayString(student.lesson), 1)
                                ]),
                                createVNode("div", { class: "d-flex align-center flex-wrap gap-3" }, [
                                  createVNode(VChip, {
                                    color: "success",
                                    variant: "tonal",
                                    size: "x-small",
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Quota : " + toDisplayString(student.quota), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  student.rentLaptop ? (openBlock(), createBlock(VChip, {
                                    key: 0,
                                    color: "info",
                                    variant: "tonal",
                                    size: "x-small",
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Rent Laptop " + toDisplayString(student.rentLaptop), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true),
                                  createVNode("div", { class: "d-flex align-center gap-1" }, [
                                    createVNode(VCheckbox, {
                                      "model-value": student.isLate,
                                      "hide-details": "",
                                      density: "compact",
                                      class: "late-checkbox",
                                      onChange: ($event) => toggleLate(student.id)
                                    }, null, 8, ["model-value", "onChange"]),
                                    createVNode("span", {
                                      class: ["text-caption font-weight-medium", student.isLate ? "text-error" : "text-success"]
                                    }, toDisplayString(student.isLate ? "Late" : "On Time"), 3)
                                  ]),
                                  student.isLate ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    style: { "width": "80px" }
                                  }, [
                                    createVNode(VTextField, {
                                      "model-value": student.lateMinutes,
                                      label: "Minutes",
                                      type: "number",
                                      density: "compact",
                                      "hide-details": "",
                                      variant: "outlined",
                                      class: "minutes-input"
                                    }, null, 8, ["model-value"])
                                  ])) : createCommentVNode("", true),
                                  createVNode("div", { style: { "min-width": "160px", "flex": "1" } }, [
                                    createVNode(VTextField, {
                                      modelValue: student.notes,
                                      "onUpdate:modelValue": ($event) => student.notes = $event,
                                      placeholder: "Notes",
                                      density: "compact",
                                      "hide-details": "",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ])
                              ]);
                            }), 128))
                          ], 512), [
                            [vShow, unref(isStudentListExpanded)]
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode("div", { class: "pa-4 d-flex align-center justify-end gap-3" }, [
                        createVNode(VBtn, {
                          variant: "outlined",
                          color: "secondary",
                          class: "text-capitalize",
                          rounded: "xl",
                          onClick: ($event) => {
                            toastShow.value = true;
                            toastText.value = "Changes discarded";
                            toastColor.value = "info";
                          }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Discard ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "primary",
                          class: "text-capitalize",
                          rounded: "xl",
                          onClick: ($event) => {
                            toastShow.value = true;
                            toastText.value = "Changes saved successfully";
                            toastColor.value = "success";
                          }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Save Changes ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(VCard, {
                    key: 1,
                    class: "d-flex align-center justify-center pa-12 border",
                    style: { "border-color": "rgba(var(--v-theme-on-surface), 0.12) !important" }
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-body-1 text-medium-emphasis mb-0" }, " Select a class to view details ")
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-7" data-v-b5b39bc1><h5 class="text-h5 font-weight-medium text-high-emphasis mb-4" data-v-b5b39bc1> Real Time Progress </h5>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(progressStudents), (student) => {
              _push2(ssrRenderComponent(VCol, {
                key: student.id,
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, {
                      class: ["border overflow-hidden position-relative", { "card-disabled": !student.isPresent }],
                      style: {
                        borderColor: student.isPresent ? "rgba(var(--v-theme-primary), 0.24) !important" : "rgba(var(--v-theme-on-surface), 0.08) !important"
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b2;
                        if (_push4) {
                          _push4(`<div class="pa-4 d-flex align-center justify-space-between gap-2" data-v-b5b39bc1${_scopeId3}><div class="d-flex align-center gap-3 min-w-0" data-v-b5b39bc1${_scopeId3}>`);
                          _push4(ssrRenderComponent(VAvatar, {
                            size: "36",
                            color: "primary",
                            class: "rounded"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="text-caption font-weight-medium text-white" data-v-b5b39bc1${_scopeId4}>${ssrInterpolate(student.avatar)}</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-caption font-weight-medium text-white" }, toDisplayString(student.avatar), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<span class="text-body-1 font-weight-medium text-high-emphasis text-truncate" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(student.name)}</span></div>`);
                          _push4(ssrRenderComponent(VChip, {
                            size: "x-small",
                            color: getSupportColor(student.supportStatus),
                            variant: "flat",
                            class: "font-weight-medium text-white flex-shrink-0"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(getSupportLabel(student.supportStatus))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(getSupportLabel(student.supportStatus)), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="px-4 pb-3 d-flex align-center gap-2" data-v-b5b39bc1${_scopeId3}>`);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-book-2-line",
                            size: "16",
                            color: "secondary"
                          }, null, _parent4, _scopeId3));
                          _push4(`<span class="text-caption text-medium-emphasis text-truncate" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(student.course)}</span>`);
                          _push4(ssrRenderComponent(VChip, {
                            size: "x-small",
                            color: "info",
                            variant: "tonal",
                            class: "font-weight-medium flex-shrink-0"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(student.meetingLabel)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(student.meetingLabel), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="px-4 pb-4" data-v-b5b39bc1${_scopeId3}>`);
                          _push4(ssrRenderComponent(VProgressLinear, {
                            "model-value": student.progress,
                            color: "success",
                            height: "6",
                            rounded: "",
                            "track-color": "rgba(var(--v-theme-on-surface), 0.08)"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="mx-4 mb-4 pa-3 rounded-lg" style="${ssrRenderStyle({
                            border: `1px solid ${student.isPresent ? "rgba(var(--v-theme-primary), 0.24)" : "rgba(var(--v-theme-on-surface), 0.08)"}`
                          })}" data-v-b5b39bc1${_scopeId3}><div class="d-flex align-start justify-space-between mb-2" data-v-b5b39bc1${_scopeId3}><div class="min-w-0" data-v-b5b39bc1${_scopeId3}><span class="text-caption font-weight-medium text-primary" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(student.lessonLabel)}</span><span class="text-body-2 text-high-emphasis d-block text-truncate" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(student.lessonTitle)}</span></div><div class="text-right flex-shrink-0" data-v-b5b39bc1${_scopeId3}><div class="d-flex align-center gap-1 justify-end" data-v-b5b39bc1${_scopeId3}>`);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-flashlight-line",
                            size: "14",
                            color: "warning"
                          }, null, _parent4, _scopeId3));
                          _push4(`<span class="text-body-1 font-weight-medium text-high-emphasis" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(student.duration)}</span></div><span class="text-caption font-weight-medium" style="${ssrRenderStyle({ color: `rgb(var(--v-theme-${((_a2 = paceMap[student.pace]) == null ? void 0 : _a2.color) ?? "warning"}))` })}" data-v-b5b39bc1${_scopeId3}>${ssrInterpolate(getPaceLabel(student.pace))}</span></div></div><div class="d-flex align-center justify-space-between gap-2" data-v-b5b39bc1${_scopeId3}>`);
                          _push4(ssrRenderComponent(VCheckbox, {
                            "model-value": student.checkedByTeacher,
                            disabled: !student.isPresent,
                            label: "Checked by teacher",
                            "hide-details": "",
                            density: "compact",
                            color: "success",
                            class: "progress-checkbox",
                            onChange: ($event) => toggleCheckedByTeacher(student.id)
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VChip, {
                            size: "x-small",
                            color: "info",
                            variant: "tonal",
                            class: "font-weight-medium flex-shrink-0"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(getRatingLabel(student.rating))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(getRatingLabel(student.rating)), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                          if (!student.isPresent) {
                            _push4(`<div class="disabled-overlay" data-v-b5b39bc1${_scopeId3}><div class="d-flex align-center justify-center gap-2" data-v-b5b39bc1${_scopeId3}>`);
                            _push4(ssrRenderComponent(VIcon, {
                              icon: "ri-information-line",
                              size: "16",
                              color: "white"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span class="text-caption text-white font-weight-medium" data-v-b5b39bc1${_scopeId3}> This student not presence yet. </span></div></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode("div", { class: "pa-4 d-flex align-center justify-space-between gap-2" }, [
                              createVNode("div", { class: "d-flex align-center gap-3 min-w-0" }, [
                                createVNode(VAvatar, {
                                  size: "36",
                                  color: "primary",
                                  class: "rounded"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-caption font-weight-medium text-white" }, toDisplayString(student.avatar), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1)
                              ]),
                              createVNode(VChip, {
                                size: "x-small",
                                color: getSupportColor(student.supportStatus),
                                variant: "flat",
                                class: "font-weight-medium text-white flex-shrink-0"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(getSupportLabel(student.supportStatus)), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            createVNode("div", { class: "px-4 pb-3 d-flex align-center gap-2" }, [
                              createVNode(VIcon, {
                                icon: "ri-book-2-line",
                                size: "16",
                                color: "secondary"
                              }),
                              createVNode("span", { class: "text-caption text-medium-emphasis text-truncate" }, toDisplayString(student.course), 1),
                              createVNode(VChip, {
                                size: "x-small",
                                color: "info",
                                variant: "tonal",
                                class: "font-weight-medium flex-shrink-0"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(student.meetingLabel), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            createVNode("div", { class: "px-4 pb-4" }, [
                              createVNode(VProgressLinear, {
                                "model-value": student.progress,
                                color: "success",
                                height: "6",
                                rounded: "",
                                "track-color": "rgba(var(--v-theme-on-surface), 0.08)"
                              }, null, 8, ["model-value"])
                            ]),
                            createVNode("div", {
                              class: "mx-4 mb-4 pa-3 rounded-lg",
                              style: {
                                border: `1px solid ${student.isPresent ? "rgba(var(--v-theme-primary), 0.24)" : "rgba(var(--v-theme-on-surface), 0.08)"}`
                              }
                            }, [
                              createVNode("div", { class: "d-flex align-start justify-space-between mb-2" }, [
                                createVNode("div", { class: "min-w-0" }, [
                                  createVNode("span", { class: "text-caption font-weight-medium text-primary" }, toDisplayString(student.lessonLabel), 1),
                                  createVNode("span", { class: "text-body-2 text-high-emphasis d-block text-truncate" }, toDisplayString(student.lessonTitle), 1)
                                ]),
                                createVNode("div", { class: "text-right flex-shrink-0" }, [
                                  createVNode("div", { class: "d-flex align-center gap-1 justify-end" }, [
                                    createVNode(VIcon, {
                                      icon: "ri-flashlight-line",
                                      size: "14",
                                      color: "warning"
                                    }),
                                    createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(student.duration), 1)
                                  ]),
                                  createVNode("span", {
                                    class: "text-caption font-weight-medium",
                                    style: { color: `rgb(var(--v-theme-${((_b2 = paceMap[student.pace]) == null ? void 0 : _b2.color) ?? "warning"}))` }
                                  }, toDisplayString(getPaceLabel(student.pace)), 5)
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center justify-space-between gap-2" }, [
                                createVNode(VCheckbox, {
                                  "model-value": student.checkedByTeacher,
                                  disabled: !student.isPresent,
                                  label: "Checked by teacher",
                                  "hide-details": "",
                                  density: "compact",
                                  color: "success",
                                  class: "progress-checkbox",
                                  onChange: ($event) => toggleCheckedByTeacher(student.id)
                                }, null, 8, ["model-value", "disabled", "onChange"]),
                                createVNode(VChip, {
                                  size: "x-small",
                                  color: "info",
                                  variant: "tonal",
                                  class: "font-weight-medium flex-shrink-0"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getRatingLabel(student.rating)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ], 4),
                            !student.isPresent ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "disabled-overlay"
                            }, [
                              createVNode("div", { class: "d-flex align-center justify-center gap-2" }, [
                                createVNode(VIcon, {
                                  icon: "ri-information-line",
                                  size: "16",
                                  color: "white"
                                }),
                                createVNode("span", { class: "text-caption text-white font-weight-medium" }, " This student not presence yet. ")
                              ])
                            ])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCard, {
                        class: ["border overflow-hidden position-relative", { "card-disabled": !student.isPresent }],
                        style: {
                          borderColor: student.isPresent ? "rgba(var(--v-theme-primary), 0.24) !important" : "rgba(var(--v-theme-on-surface), 0.08) !important"
                        }
                      }, {
                        default: withCtx(() => {
                          var _a2;
                          return [
                            createVNode("div", { class: "pa-4 d-flex align-center justify-space-between gap-2" }, [
                              createVNode("div", { class: "d-flex align-center gap-3 min-w-0" }, [
                                createVNode(VAvatar, {
                                  size: "36",
                                  color: "primary",
                                  class: "rounded"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-caption font-weight-medium text-white" }, toDisplayString(student.avatar), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1)
                              ]),
                              createVNode(VChip, {
                                size: "x-small",
                                color: getSupportColor(student.supportStatus),
                                variant: "flat",
                                class: "font-weight-medium text-white flex-shrink-0"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(getSupportLabel(student.supportStatus)), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            createVNode("div", { class: "px-4 pb-3 d-flex align-center gap-2" }, [
                              createVNode(VIcon, {
                                icon: "ri-book-2-line",
                                size: "16",
                                color: "secondary"
                              }),
                              createVNode("span", { class: "text-caption text-medium-emphasis text-truncate" }, toDisplayString(student.course), 1),
                              createVNode(VChip, {
                                size: "x-small",
                                color: "info",
                                variant: "tonal",
                                class: "font-weight-medium flex-shrink-0"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(student.meetingLabel), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            createVNode("div", { class: "px-4 pb-4" }, [
                              createVNode(VProgressLinear, {
                                "model-value": student.progress,
                                color: "success",
                                height: "6",
                                rounded: "",
                                "track-color": "rgba(var(--v-theme-on-surface), 0.08)"
                              }, null, 8, ["model-value"])
                            ]),
                            createVNode("div", {
                              class: "mx-4 mb-4 pa-3 rounded-lg",
                              style: {
                                border: `1px solid ${student.isPresent ? "rgba(var(--v-theme-primary), 0.24)" : "rgba(var(--v-theme-on-surface), 0.08)"}`
                              }
                            }, [
                              createVNode("div", { class: "d-flex align-start justify-space-between mb-2" }, [
                                createVNode("div", { class: "min-w-0" }, [
                                  createVNode("span", { class: "text-caption font-weight-medium text-primary" }, toDisplayString(student.lessonLabel), 1),
                                  createVNode("span", { class: "text-body-2 text-high-emphasis d-block text-truncate" }, toDisplayString(student.lessonTitle), 1)
                                ]),
                                createVNode("div", { class: "text-right flex-shrink-0" }, [
                                  createVNode("div", { class: "d-flex align-center gap-1 justify-end" }, [
                                    createVNode(VIcon, {
                                      icon: "ri-flashlight-line",
                                      size: "14",
                                      color: "warning"
                                    }),
                                    createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(student.duration), 1)
                                  ]),
                                  createVNode("span", {
                                    class: "text-caption font-weight-medium",
                                    style: { color: `rgb(var(--v-theme-${((_a2 = paceMap[student.pace]) == null ? void 0 : _a2.color) ?? "warning"}))` }
                                  }, toDisplayString(getPaceLabel(student.pace)), 5)
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center justify-space-between gap-2" }, [
                                createVNode(VCheckbox, {
                                  "model-value": student.checkedByTeacher,
                                  disabled: !student.isPresent,
                                  label: "Checked by teacher",
                                  "hide-details": "",
                                  density: "compact",
                                  color: "success",
                                  class: "progress-checkbox",
                                  onChange: ($event) => toggleCheckedByTeacher(student.id)
                                }, null, 8, ["model-value", "disabled", "onChange"]),
                                createVNode(VChip, {
                                  size: "x-small",
                                  color: "info",
                                  variant: "tonal",
                                  class: "font-weight-medium flex-shrink-0"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getRatingLabel(student.rating)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ], 4),
                            !student.isPresent ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "disabled-overlay"
                            }, [
                              createVNode("div", { class: "d-flex align-center justify-center gap-2" }, [
                                createVNode(VIcon, {
                                  icon: "ri-information-line",
                                  size: "16",
                                  color: "white"
                                }),
                                createVNode("span", { class: "text-caption text-white font-weight-medium" }, " This student not presence yet. ")
                              ])
                            ])) : createCommentVNode("", true)
                          ];
                        }),
                        _: 2
                      }, 1032, ["class", "style"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(progressStudents), (student) => {
                return openBlock(), createBlock(VCol, {
                  key: student.id,
                  cols: "12",
                  sm: "6",
                  md: "4"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: ["border overflow-hidden position-relative", { "card-disabled": !student.isPresent }],
                      style: {
                        borderColor: student.isPresent ? "rgba(var(--v-theme-primary), 0.24) !important" : "rgba(var(--v-theme-on-surface), 0.08) !important"
                      }
                    }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode("div", { class: "pa-4 d-flex align-center justify-space-between gap-2" }, [
                            createVNode("div", { class: "d-flex align-center gap-3 min-w-0" }, [
                              createVNode(VAvatar, {
                                size: "36",
                                color: "primary",
                                class: "rounded"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-caption font-weight-medium text-white" }, toDisplayString(student.avatar), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis text-truncate" }, toDisplayString(student.name), 1)
                            ]),
                            createVNode(VChip, {
                              size: "x-small",
                              color: getSupportColor(student.supportStatus),
                              variant: "flat",
                              class: "font-weight-medium text-white flex-shrink-0"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(getSupportLabel(student.supportStatus)), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode("div", { class: "px-4 pb-3 d-flex align-center gap-2" }, [
                            createVNode(VIcon, {
                              icon: "ri-book-2-line",
                              size: "16",
                              color: "secondary"
                            }),
                            createVNode("span", { class: "text-caption text-medium-emphasis text-truncate" }, toDisplayString(student.course), 1),
                            createVNode(VChip, {
                              size: "x-small",
                              color: "info",
                              variant: "tonal",
                              class: "font-weight-medium flex-shrink-0"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(student.meetingLabel), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("div", { class: "px-4 pb-4" }, [
                            createVNode(VProgressLinear, {
                              "model-value": student.progress,
                              color: "success",
                              height: "6",
                              rounded: "",
                              "track-color": "rgba(var(--v-theme-on-surface), 0.08)"
                            }, null, 8, ["model-value"])
                          ]),
                          createVNode("div", {
                            class: "mx-4 mb-4 pa-3 rounded-lg",
                            style: {
                              border: `1px solid ${student.isPresent ? "rgba(var(--v-theme-primary), 0.24)" : "rgba(var(--v-theme-on-surface), 0.08)"}`
                            }
                          }, [
                            createVNode("div", { class: "d-flex align-start justify-space-between mb-2" }, [
                              createVNode("div", { class: "min-w-0" }, [
                                createVNode("span", { class: "text-caption font-weight-medium text-primary" }, toDisplayString(student.lessonLabel), 1),
                                createVNode("span", { class: "text-body-2 text-high-emphasis d-block text-truncate" }, toDisplayString(student.lessonTitle), 1)
                              ]),
                              createVNode("div", { class: "text-right flex-shrink-0" }, [
                                createVNode("div", { class: "d-flex align-center gap-1 justify-end" }, [
                                  createVNode(VIcon, {
                                    icon: "ri-flashlight-line",
                                    size: "14",
                                    color: "warning"
                                  }),
                                  createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(student.duration), 1)
                                ]),
                                createVNode("span", {
                                  class: "text-caption font-weight-medium",
                                  style: { color: `rgb(var(--v-theme-${((_a2 = paceMap[student.pace]) == null ? void 0 : _a2.color) ?? "warning"}))` }
                                }, toDisplayString(getPaceLabel(student.pace)), 5)
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center justify-space-between gap-2" }, [
                              createVNode(VCheckbox, {
                                "model-value": student.checkedByTeacher,
                                disabled: !student.isPresent,
                                label: "Checked by teacher",
                                "hide-details": "",
                                density: "compact",
                                color: "success",
                                class: "progress-checkbox",
                                onChange: ($event) => toggleCheckedByTeacher(student.id)
                              }, null, 8, ["model-value", "disabled", "onChange"]),
                              createVNode(VChip, {
                                size: "x-small",
                                color: "info",
                                variant: "tonal",
                                class: "font-weight-medium flex-shrink-0"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(getRatingLabel(student.rating)), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ], 4),
                          !student.isPresent ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "disabled-overlay"
                          }, [
                            createVNode("div", { class: "d-flex align-center justify-center gap-2" }, [
                              createVNode(VIcon, {
                                icon: "ri-information-line",
                                size: "16",
                                color: "white"
                              }),
                              createVNode("span", { class: "text-caption text-white font-weight-medium" }, " This student not presence yet. ")
                            ])
                          ])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1032, ["class", "style"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
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
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard-teacher.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboardTeacher = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b5b39bc1"]]);
export {
  dashboardTeacher as default
};
