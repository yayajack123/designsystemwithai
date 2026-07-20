import { defineComponent, ref, computed, watch, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, createBlock, createCommentVNode, openBlock, Fragment, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { _ as _sfc_main$1 } from './UiSectionHeader-BGB1bAkA.mjs';
import { U as UiTableView } from './UiTableView-CBjzM5XB.mjs';
import { P as PresenceDialog } from './PresenceDialog-BqoYp1Xb.mjs';
import { aW as _export_sfc, a as VIcon, V as VBtn, n as navigateTo } from './server.mjs';
import { V as VRow, a as VCol } from './VRow-BRD4hy0P.mjs';
import { V as VCard } from './VCard-B42eN0YV.mjs';
import { V as VAvatar } from './VAvatar-B478BWXT.mjs';
import { V as VChip } from './VChip-C0dLsv_T.mjs';
import { V as VDataTable } from './VDataTable-TnWqeKKY.mjs';
import { V as VTextField } from './VTextField-jMGfwBDn.mjs';
import { V as VSnackbar } from './VSnackbar-DgaXWzkK.mjs';
import './VTooltip-vXFYhuMk.mjs';
import './VOverlay-gAZb14KV.mjs';
import './forwardRefs-Oip3fNRq.mjs';
import './VTabs-iT2EYINr.mjs';
import './VList-BNtS0p6J.mjs';
import './index-CSomYp-Z.mjs';
import './VDivider-Cdypedjq.mjs';
import './VCardText-CaXtzNxg.mjs';
import './DialogCloseBtn-CVR_yFk0.mjs';
import './VDialog-B0Ad2yj9.mjs';
import './dialog-transition-CDwwEBKm.mjs';
import './VCheckbox-BUqu-k0J.mjs';
import './VCheckboxBtn-BB8tUmIP.mjs';
import './VSelectionControl-B1a3mcFW.mjs';
import 'node:http';
import 'node:https';
import '../nitro/nitro.mjs';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-devtools-stub';
import '@antfu/utils';
import './VDataTableFooter-BmXk9xgv.mjs';
import './filter-BIe-IBmp.mjs';
import './VMenu-C4ct7Xz7.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "attendance-detail",
  __ssrInlineRender: true,
  setup(__props) {
    const mockClasses = ref([
      {
        id: "1",
        name: "RDA-9012",
        room: "Rio Room",
        date: "Thu, 26 Feb 2026",
        teachersCount: 2,
        teachers: [
          { id: "TCR-20260123-003", name: "Kaylynn Herwitz", isMain: true },
          { id: "TCR-20260123-004", name: "Randy Aminoff", isMain: false }
        ],
        timeStart: "00:00",
        timeEnd: "01:30",
        duration: "2 hrs",
        className: "Private Teen Class Coding Camp",
        meetingType: "Group Class",
        meetingNumber: "Meeting 20",
        status: "Active",
        students: [
          { id: "s1", studentId: "STD-20260326-019", name: "Cristofer Mango", sessionText: "Session 6", bookTitle: "Web Developer for Beginner", bookStatus: "Completed", hasLaptop: true, presence: "On time", notes: "The Web Developer for Beginners class had a good attendance rate, with students engaging in discussions.", status: "-", actionText: "Create Journal", actionIcon: "ri-pencil-line" },
          { id: "s2", studentId: "STD-20260326-019", name: "Richard Payne", sessionText: "Session 6", bookTitle: "Web Developer for Beginner", bookStatus: "Idle", hasLaptop: true, presence: "On time", notes: "In the Android Developer for Beginners course, attendance was strong, with most students actively participating.", status: "Sent", actionText: "View", actionIcon: "ri-eye-line" },
          { id: "s3", studentId: "STD-20260326-019", name: "Mr. Justin Richardson", sessionText: "Session 6", bookTitle: "Web Developer for Beginner", bookStatus: "Incomplete", hasLaptop: true, presence: "Late 5 minutes", notes: "This week in Coding Kids, attendance was perfect, with every student eager to learn.", status: "Not send yet", actionText: "Continue", actionIcon: "ri-share-forward-2-line" },
          { id: "s4", studentId: "STD-20260326-019", name: "Cristofer Mango", sessionText: "Session 6", bookTitle: "Web Developer for Beginner", bookStatus: "Completed", hasLaptop: true, presence: "On time", notes: "The Coding Kids session saw a full turnout, showcasing great enthusiasm among the participants.", status: "-", actionText: "Continue", actionIcon: "ri-share-forward-2-line" },
          { id: "s5", studentId: "STD-20260326-019", name: "Jennifer Summers", sessionText: "Session 6", bookTitle: "Web Developer for Beginner", bookStatus: "Completed", hasLaptop: false, presence: "Absent", notes: "Attendance for the Coding Kids class was excellent this week, with all students present.", status: "-", actionText: "Create Journal", actionIcon: "ri-pencil-line" }
        ]
      },
      {
        id: "2",
        name: "Advanced Teens",
        room: "Zoom Room 12",
        date: "Thu, 26 Feb 2026",
        teachersCount: 3,
        teachers: [
          { id: "TCR-20260123-001", name: "Liam O'Connor", isMain: true },
          { id: "TCR-20260123-002", name: "Sophia Tran", isMain: false },
          { id: "TCR-20260123-005", name: "Marcus Aurelius", isMain: false }
        ],
        timeStart: "00:00",
        timeEnd: "01:30",
        duration: "2 hrs",
        className: "Private Teen Class Coding Camp",
        meetingType: "Group Class",
        meetingNumber: "Meeting 20",
        status: "Ongoing",
        students: [
          { id: "s11", studentId: "STD-20260326-011", name: "Alex Rivera", sessionText: "Session 6", bookTitle: "AI Enthusiast", bookStatus: "Completed", hasLaptop: true, presence: "On time", notes: "Student participated actively.", status: "Sent", actionText: "View", actionIcon: "ri-eye-line" },
          { id: "s12", studentId: "STD-20260326-012", name: "Jamie Lee", sessionText: "Session 6", bookTitle: "Robotics Explorer", bookStatus: "Idle", hasLaptop: false, presence: "Absent", notes: "Excused absence.", status: "-", actionText: "Create Journal", actionIcon: "ri-pencil-line" }
        ]
      }
    ]);
    const route = useRoute();
    useRouter();
    const classId = computed(() => route.query.id || "1");
    const classSession = computed(() => {
      const found = mockClasses.value.find((c) => c.id === classId.value);
      if (found) return found;
      return {
        id: classId.value,
        name: `Class-${classId.value}`,
        room: "Virtual Room",
        date: "Thu, 26 Feb 2026",
        teachersCount: 1,
        teachers: [
          { id: "TCR-20260123-999", name: "Default Instructor", isMain: true }
        ],
        timeStart: "10:00",
        timeEnd: "12:00",
        duration: "2 hrs",
        className: "Standard Learning Track",
        meetingType: "Group Class",
        meetingNumber: "Meeting 1",
        status: "Active",
        students: [
          { id: "s99", studentId: "STD-20260326-999", name: "Default Student", sessionText: "Session 6", bookTitle: "Introductory Course", bookStatus: "Completed", hasLaptop: true, presence: "On time", notes: "Good progress.", status: "-", actionText: "Create Journal", actionIcon: "ri-pencil-line" }
        ]
      };
    });
    const studentsList = ref([]);
    watch(classSession, (newVal) => {
      if (newVal) {
        studentsList.value = JSON.parse(JSON.stringify(newVal.students));
      }
    }, { immediate: true });
    const searchQuery = ref("");
    const filteredStudents = computed(() => {
      return studentsList.value.filter((s) => {
        const query = searchQuery.value.toLowerCase().trim();
        return !query || s.name.toLowerCase().includes(query) || s.studentId.toLowerCase().includes(query);
      });
    });
    const resetFilters = () => {
      searchQuery.value = "";
    };
    const teacherHeaders = computed(() => [
      { title: "NAME", key: "name", sortable: false }
    ]);
    const headers = computed(() => [
      { title: "STUDENT NAME", key: "studentName", sortable: true },
      { title: "BOOK", key: "book", sortable: true },
      { title: "ADDONS", key: "addons", sortable: true, align: "center" },
      { title: "PRESENCE", key: "presence", sortable: true },
      { title: "NOTES", key: "notes", sortable: false },
      { title: "STATUS", key: "status", sortable: true },
      { title: "MEETING JOURNAL", key: "action", sortable: false, align: "center", width: "160px" }
    ]);
    const getInitials = (name) => {
      if (!name) return "";
      const parts = name.split(" ");
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return name.slice(0, 2).toUpperCase();
    };
    const getBookBadgeColor = (status) => {
      if (status === "Completed") return "primary";
      if (status === "Idle") return "warning";
      return "info";
    };
    const getPresenceCircleColor = (presence) => {
      if (presence === "On time") return "primary";
      if (presence === "Late 5 minutes") return "warning";
      return "error";
    };
    const getPresenceIcon = (presence) => {
      if (presence === "Absent") return "ri-close-line";
      return "ri-check-line";
    };
    const getStatusCircleColor = (status) => {
      if (status === "Sent") return "primary";
      return "warning";
    };
    const getStatusIcon = (status) => {
      if (status === "Sent") return "ri-send-plane-2-line";
      if (status === "Not send yet") return "ri-alert-line";
      if (status === "Revision") return "ri-refresh-line";
      return "";
    };
    const toastShow = ref(false);
    const toastText = ref("");
    const toastColor = ref("success");
    const showToast = (message, color = "success") => {
      toastText.value = message;
      toastColor.value = color;
      toastShow.value = true;
    };
    const handleActionClick = (item) => {
      if (item.actionText === "Create Journal" || item.actionText === "Continue") {
        navigateTo({
          path: "/meeting-journal/create",
          query: {
            classId: classId.value,
            studentId: item.id
          }
        });
      } else if (item.actionText === "View") {
        showToast(`Opening journal record for ${item.name}...`, "info");
      } else {
        showToast(`Resuming journal review for ${item.name}...`, "warning");
      }
    };
    const isPresenceDialogActive = ref(false);
    const openPresenceDialog = () => {
      isPresenceDialogActive.value = true;
    };
    const dialogClassSession = computed(() => {
      if (!classSession.value) return null;
      return {
        id: classSession.value.id,
        name: classSession.value.name,
        room: classSession.value.room,
        date: classSession.value.date,
        teachersCount: classSession.value.teachersCount,
        teachers: classSession.value.teachers.map((t) => ({ id: t.id, name: t.name })),
        timeStart: classSession.value.timeStart,
        timeEnd: classSession.value.timeEnd,
        duration: classSession.value.duration,
        className: classSession.value.className,
        meetingType: classSession.value.meetingType,
        meetingNumber: classSession.value.meetingNumber,
        status: classSession.value.status,
        students: studentsList.value.map((s) => ({
          id: s.id,
          name: s.name,
          course: s.bookTitle,
          badgeText: "Quota : 0",
          badgeColor: s.presence === "Absent" ? "error" : "success",
          isPresent: s.presence !== "Absent",
          hasLaptop: s.hasLaptop
        }))
      };
    });
    const handlePresenceSubmit = (payload) => {
      studentsList.value = studentsList.value.map((student) => {
        const updated = payload.students.find((s) => s.id === student.id);
        if (updated) {
          return {
            ...student,
            hasLaptop: updated.hasLaptop,
            presence: updated.isPresent ? "On time" : "Absent"
          };
        }
        return student;
      });
      showToast("Attendance updated successfully.", "success");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "attendance-detail-page" }, _attrs))} data-v-175736f1>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Class Attendance",
        description: "Manage detail attendance student",
        back: { name: "attendance" },
        class: "mb-6"
      }, null, _parent));
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
                    border: "",
                    class: "d-flex align-center pa-5",
                    elevation: "0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<div class="flex-grow-1" data-v-175736f1${_scopeId3}><span class="text-body-1 text-medium-emphasis mb-1 d-block" data-v-175736f1${_scopeId3}>Class name</span><span class="text-h4 font-weight-medium text-high-emphasis" data-v-175736f1${_scopeId3}>${ssrInterpolate((_a = classSession.value) == null ? void 0 : _a.name)}</span></div>`);
                        _push4(ssrRenderComponent(VAvatar, {
                          size: "42",
                          color: "rgba(var(--v-theme-primary), 0.08)",
                          class: "rounded-lg text-primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "ri-suitcase-line",
                                size: "24"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  icon: "ri-suitcase-line",
                                  size: "24"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "flex-grow-1" }, [
                            createVNode("span", { class: "text-body-1 text-medium-emphasis mb-1 d-block" }, "Class name"),
                            createVNode("span", { class: "text-h4 font-weight-medium text-high-emphasis" }, toDisplayString((_b = classSession.value) == null ? void 0 : _b.name), 1)
                          ]),
                          createVNode(VAvatar, {
                            size: "42",
                            color: "rgba(var(--v-theme-primary), 0.08)",
                            class: "rounded-lg text-primary"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-suitcase-line",
                                size: "24"
                              })
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
                    createVNode(VCard, {
                      border: "",
                      class: "d-flex align-center pa-5",
                      elevation: "0"
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("div", { class: "flex-grow-1" }, [
                            createVNode("span", { class: "text-body-1 text-medium-emphasis mb-1 d-block" }, "Class name"),
                            createVNode("span", { class: "text-h4 font-weight-medium text-high-emphasis" }, toDisplayString((_a = classSession.value) == null ? void 0 : _a.name), 1)
                          ]),
                          createVNode(VAvatar, {
                            size: "42",
                            color: "rgba(var(--v-theme-primary), 0.08)",
                            class: "rounded-lg text-primary"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-suitcase-line",
                                size: "24"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }),
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
                    border: "",
                    class: "d-flex align-center pa-5",
                    elevation: "0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<div class="flex-grow-1" data-v-175736f1${_scopeId3}><span class="text-body-1 text-medium-emphasis mb-1 d-block" data-v-175736f1${_scopeId3}>Room Name</span><span class="text-h4 font-weight-medium text-high-emphasis" data-v-175736f1${_scopeId3}>${ssrInterpolate((_a = classSession.value) == null ? void 0 : _a.room)}</span></div>`);
                        _push4(ssrRenderComponent(VAvatar, {
                          size: "42",
                          color: "rgba(var(--v-theme-primary), 0.08)",
                          class: "rounded-lg text-primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "ri-user-follow-line",
                                size: "24"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  icon: "ri-user-follow-line",
                                  size: "24"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "flex-grow-1" }, [
                            createVNode("span", { class: "text-body-1 text-medium-emphasis mb-1 d-block" }, "Room Name"),
                            createVNode("span", { class: "text-h4 font-weight-medium text-high-emphasis" }, toDisplayString((_b = classSession.value) == null ? void 0 : _b.room), 1)
                          ]),
                          createVNode(VAvatar, {
                            size: "42",
                            color: "rgba(var(--v-theme-primary), 0.08)",
                            class: "rounded-lg text-primary"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-user-follow-line",
                                size: "24"
                              })
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
                    createVNode(VCard, {
                      border: "",
                      class: "d-flex align-center pa-5",
                      elevation: "0"
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("div", { class: "flex-grow-1" }, [
                            createVNode("span", { class: "text-body-1 text-medium-emphasis mb-1 d-block" }, "Room Name"),
                            createVNode("span", { class: "text-h4 font-weight-medium text-high-emphasis" }, toDisplayString((_a = classSession.value) == null ? void 0 : _a.room), 1)
                          ]),
                          createVNode(VAvatar, {
                            size: "42",
                            color: "rgba(var(--v-theme-primary), 0.08)",
                            class: "rounded-lg text-primary"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-user-follow-line",
                                size: "24"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }),
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
                    border: "",
                    class: "d-flex align-center pa-5",
                    elevation: "0"
                  }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode("div", { class: "flex-grow-1" }, [
                          createVNode("span", { class: "text-body-1 text-medium-emphasis mb-1 d-block" }, "Class name"),
                          createVNode("span", { class: "text-h4 font-weight-medium text-high-emphasis" }, toDisplayString((_a = classSession.value) == null ? void 0 : _a.name), 1)
                        ]),
                        createVNode(VAvatar, {
                          size: "42",
                          color: "rgba(var(--v-theme-primary), 0.08)",
                          class: "rounded-lg text-primary"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "ri-suitcase-line",
                              size: "24"
                            })
                          ]),
                          _: 1
                        })
                      ];
                    }),
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
                    border: "",
                    class: "d-flex align-center pa-5",
                    elevation: "0"
                  }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode("div", { class: "flex-grow-1" }, [
                          createVNode("span", { class: "text-body-1 text-medium-emphasis mb-1 d-block" }, "Room Name"),
                          createVNode("span", { class: "text-h4 font-weight-medium text-high-emphasis" }, toDisplayString((_a = classSession.value) == null ? void 0 : _a.room), 1)
                        ]),
                        createVNode(VAvatar, {
                          size: "42",
                          color: "rgba(var(--v-theme-primary), 0.08)",
                          class: "rounded-lg text-primary"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "ri-user-follow-line",
                              size: "24"
                            })
                          ]),
                          _: 1
                        })
                      ];
                    }),
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
      _push(`<div class="d-flex align-center mb-4 gap-2" data-v-175736f1><span class="text-h5 font-weight-medium text-high-emphasis" data-v-175736f1>Teacher</span>`);
      _push(ssrRenderComponent(VChip, {
        color: "primary",
        size: "small",
        class: "font-weight-medium text-caption px-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a = classSession.value) == null ? void 0 : _a.teachers.length) || 0)} Teachers `);
          } else {
            return [
              createTextVNode(toDisplayString(((_b = classSession.value) == null ? void 0 : _b.teachers.length) || 0) + " Teachers ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VCard, {
        border: "",
        class: "mb-6 overflow-hidden",
        elevation: "0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(VDataTable, {
              headers: teacherHeaders.value,
              items: ((_a = classSession.value) == null ? void 0 : _a.teachers) || [],
              class: "text-no-wrap",
              "hide-default-footer": ""
            }, {
              "item.name": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center py-2 gap-3" data-v-175736f1${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "34",
                    color: "grey-100",
                    class: "text-subtitle-1 font-weight-medium text-high-emphasis border"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(getInitials(item.name))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(getInitials(item.name)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-column justify-center" data-v-175736f1${_scopeId2}><span class="text-body-1 font-weight-medium text-high-emphasis leading-normal" data-v-175736f1${_scopeId2}>${ssrInterpolate(item.name)}</span><span class="text-body-2 text-medium-emphasis" data-v-175736f1${_scopeId2}>${ssrInterpolate(item.id)}</span></div>`);
                  if (item.isMain) {
                    _push3(ssrRenderComponent(VChip, {
                      color: "info",
                      size: "small",
                      class: "font-weight-medium text-caption px-3 ms-auto me-4"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Main Teacher `);
                        } else {
                          return [
                            createTextVNode(" Main Teacher ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center py-2 gap-3" }, [
                      createVNode(VAvatar, {
                        size: "34",
                        color: "grey-100",
                        class: "text-subtitle-1 font-weight-medium text-high-emphasis border"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(getInitials(item.name)), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", { class: "d-flex flex-column justify-center" }, [
                        createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis leading-normal" }, toDisplayString(item.name), 1),
                        createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.id), 1)
                      ]),
                      item.isMain ? (openBlock(), createBlock(VChip, {
                        key: 0,
                        color: "info",
                        size: "small",
                        class: "font-weight-medium text-caption px-3 ms-auto me-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Main Teacher ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VDataTable, {
                headers: teacherHeaders.value,
                items: ((_b = classSession.value) == null ? void 0 : _b.teachers) || [],
                class: "text-no-wrap",
                "hide-default-footer": ""
              }, {
                "item.name": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center py-2 gap-3" }, [
                    createVNode(VAvatar, {
                      size: "34",
                      color: "grey-100",
                      class: "text-subtitle-1 font-weight-medium text-high-emphasis border"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(getInitials(item.name)), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", { class: "d-flex flex-column justify-center" }, [
                      createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis leading-normal" }, toDisplayString(item.name), 1),
                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.id), 1)
                    ]),
                    item.isMain ? (openBlock(), createBlock(VChip, {
                      key: 0,
                      color: "info",
                      size: "small",
                      class: "font-weight-medium text-caption px-3 ms-auto me-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Main Teacher ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }, 8, ["headers", "items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="d-flex align-center justify-space-between mb-4 mt-6" data-v-175736f1><div class="d-flex align-center gap-2" data-v-175736f1><span class="text-h5 font-weight-medium text-high-emphasis" data-v-175736f1>Students</span>`);
      _push(ssrRenderComponent(VChip, {
        color: "primary",
        size: "small",
        class: "font-weight-medium text-caption px-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(filteredStudents.value.length)} Students `);
          } else {
            return [
              createTextVNode(toDisplayString(filteredStudents.value.length) + " Students ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VBtn, {
        color: "primary",
        rounded: "xl",
        class: "text-capitalize",
        onClick: openPresenceDialog
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Change Presence `);
          } else {
            return [
              createTextVNode(" Change Presence ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(UiTableView, {
        title: "",
        headers: headers.value,
        items: filteredStudents.value,
        "items-per-page": 5,
        onResetFilters: resetFilters
      }, {
        filters: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "width": "240px" })}" data-v-175736f1${_scopeId}>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": ($event) => searchQuery.value = $event,
              placeholder: "Search student name or ID...",
              "prepend-inner-icon": "ri-search-line",
              clearable: "",
              density: "compact",
              "hide-details": "",
              variant: "outlined"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { style: { "width": "240px" } }, [
                createVNode(VTextField, {
                  modelValue: searchQuery.value,
                  "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                  placeholder: "Search student name or ID...",
                  "prepend-inner-icon": "ri-search-line",
                  clearable: "",
                  density: "compact",
                  "hide-details": "",
                  variant: "outlined"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        "item.studentName": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center gap-3 py-2" data-v-175736f1${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, {
              size: "34",
              color: "grey-100",
              class: "text-body-1 font-weight-medium text-high-emphasis border"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(getInitials(item.name))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(getInitials(item.name)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex flex-column justify-center" data-v-175736f1${_scopeId}><span class="text-body-1 font-weight-medium text-high-emphasis leading-normal" data-v-175736f1${_scopeId}>${ssrInterpolate(item.name)}</span><div class="d-flex align-center mt-0.5" data-v-175736f1${_scopeId}><span class="text-body-2 text-medium-emphasis" data-v-175736f1${_scopeId}>${ssrInterpolate(item.studentId)}</span><span class="dot-separator" data-v-175736f1${_scopeId}></span><span class="text-body-2 text-medium-emphasis" data-v-175736f1${_scopeId}>${ssrInterpolate(item.sessionText)}</span></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center gap-3 py-2" }, [
                createVNode(VAvatar, {
                  size: "34",
                  color: "grey-100",
                  class: "text-body-1 font-weight-medium text-high-emphasis border"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(getInitials(item.name)), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode("div", { class: "d-flex flex-column justify-center" }, [
                  createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis leading-normal" }, toDisplayString(item.name), 1),
                  createVNode("div", { class: "d-flex align-center mt-0.5" }, [
                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.studentId), 1),
                    createVNode("span", { class: "dot-separator" }),
                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.sessionText), 1)
                  ])
                ])
              ])
            ];
          }
        }),
        "item.book": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-column py-2 gap-1 align-start" data-v-175736f1${_scopeId}><span class="text-body-2 text-high-emphasis leading-normal" data-v-175736f1${_scopeId}>${ssrInterpolate(item.bookTitle)}</span>`);
            _push2(ssrRenderComponent(VChip, {
              color: getBookBadgeColor(item.bookStatus),
              variant: "tonal",
              size: "small",
              class: "font-weight-medium text-caption"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.bookStatus)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.bookStatus), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex flex-column py-2 gap-1 align-start" }, [
                createVNode("span", { class: "text-body-2 text-high-emphasis leading-normal" }, toDisplayString(item.bookTitle), 1),
                createVNode(VChip, {
                  color: getBookBadgeColor(item.bookStatus),
                  variant: "tonal",
                  size: "small",
                  class: "font-weight-medium text-caption"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.bookStatus), 1)
                  ]),
                  _: 2
                }, 1032, ["color"])
              ])
            ];
          }
        }),
        "item.addons": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center justify-center" data-v-175736f1${_scopeId}>`);
            if (item.hasLaptop) {
              _push2(ssrRenderComponent(VAvatar, {
                size: "24",
                color: "rgba(var(--v-theme-primary), 0.12)",
                class: "rounded-circle text-primary border-none"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      icon: "ri-macbook-line",
                      size: "14"
                    }, null, _parent3, _scopeId2));
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
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(VIcon, {
                icon: "ri-subtract-line",
                color: "disabled",
                size: "16"
              }, null, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center justify-center" }, [
                item.hasLaptop ? (openBlock(), createBlock(VAvatar, {
                  key: 0,
                  size: "24",
                  color: "rgba(var(--v-theme-primary), 0.12)",
                  class: "rounded-circle text-primary border-none"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      icon: "ri-macbook-line",
                      size: "14"
                    })
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(VIcon, {
                  key: 1,
                  icon: "ri-subtract-line",
                  color: "disabled",
                  size: "16"
                }))
              ])
            ];
          }
        }),
        "item.presence": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center gap-2" data-v-175736f1${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, {
              color: getPresenceCircleColor(item.presence),
              size: "20",
              class: "rounded-circle text-white"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    icon: getPresenceIcon(item.presence),
                    size: "12"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, {
                      icon: getPresenceIcon(item.presence),
                      size: "12"
                    }, null, 8, ["icon"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<span class="text-body-2 text-high-emphasis" data-v-175736f1${_scopeId}>${ssrInterpolate(item.presence)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center gap-2" }, [
                createVNode(VAvatar, {
                  color: getPresenceCircleColor(item.presence),
                  size: "20",
                  class: "rounded-circle text-white"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      icon: getPresenceIcon(item.presence),
                      size: "12"
                    }, null, 8, ["icon"])
                  ]),
                  _: 2
                }, 1032, ["color"]),
                createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(item.presence), 1)
              ])
            ];
          }
        }),
        "item.notes": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-body-2 text-medium-emphasis text-wrap py-2" style="${ssrRenderStyle({ "max-width": "200px", "min-width": "150px", "line-height": "1.4" })}" data-v-175736f1${_scopeId}>${ssrInterpolate(item.notes)}</div>`);
          } else {
            return [
              createVNode("div", {
                class: "text-body-2 text-medium-emphasis text-wrap py-2",
                style: { "max-width": "200px", "min-width": "150px", "line-height": "1.4" }
              }, toDisplayString(item.notes), 1)
            ];
          }
        }),
        "item.status": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center gap-2" data-v-175736f1${_scopeId}>`);
            if (item.status !== "-") {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(VAvatar, {
                color: getStatusCircleColor(item.status),
                size: "24",
                class: "rounded-circle text-white"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      icon: getStatusIcon(item.status),
                      size: "14"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, {
                        icon: getStatusIcon(item.status),
                        size: "14"
                      }, null, 8, ["icon"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<span class="text-body-2 text-medium-emphasis" data-v-175736f1${_scopeId}>${ssrInterpolate(item.status)}</span><!--]-->`);
            } else {
              _push2(`<span class="text-body-2 text-medium-emphasis" data-v-175736f1${_scopeId}>-</span>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center gap-2" }, [
                item.status !== "-" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode(VAvatar, {
                    color: getStatusCircleColor(item.status),
                    size: "24",
                    class: "rounded-circle text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        icon: getStatusIcon(item.status),
                        size: "14"
                      }, null, 8, ["icon"])
                    ]),
                    _: 2
                  }, 1032, ["color"]),
                  createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.status), 1)
                ], 64)) : (openBlock(), createBlock("span", {
                  key: 1,
                  class: "text-body-2 text-medium-emphasis"
                }, "-"))
              ])
            ];
          }
        }),
        "item.action": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              variant: "outlined",
              size: "small",
              color: "primary",
              rounded: "xl",
              class: "text-capitalize font-weight-medium",
              style: { "border-color": "rgba(var(--v-theme-primary), 0.3) !important" },
              onClick: ($event) => handleActionClick(item)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    icon: item.actionIcon,
                    start: "",
                    size: "14",
                    class: "me-1"
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(item.actionText)}`);
                } else {
                  return [
                    createVNode(VIcon, {
                      icon: item.actionIcon,
                      start: "",
                      size: "14",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    createTextVNode(" " + toDisplayString(item.actionText), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                variant: "outlined",
                size: "small",
                color: "primary",
                rounded: "xl",
                class: "text-capitalize font-weight-medium",
                style: { "border-color": "rgba(var(--v-theme-primary), 0.3) !important" },
                onClick: ($event) => handleActionClick(item)
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    icon: item.actionIcon,
                    start: "",
                    size: "14",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  createTextVNode(" " + toDisplayString(item.actionText), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(PresenceDialog, {
        "is-dialog-visible": isPresenceDialogActive.value,
        "onUpdate:isDialogVisible": ($event) => isPresenceDialogActive.value = $event,
        "class-session": dialogClassSession.value,
        onSubmitAttendance: handlePresenceSubmit
      }, null, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: toastShow.value,
        "onUpdate:modelValue": ($event) => toastShow.value = $event,
        color: toastColor.value,
        location: "top right",
        timeout: 3e3
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(toastText.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(toastText.value), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/attendance-detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const attendanceDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-175736f1"]]);

export { attendanceDetail as default };
