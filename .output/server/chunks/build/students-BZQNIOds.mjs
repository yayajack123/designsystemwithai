import { defineComponent, ref, computed, withCtx, createVNode, mergeProps, toDisplayString, createTextVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { U as UiTableView } from './UiTableView-CBjzM5XB.mjs';
import { V as VRow, a as VCol } from './VRow-BRD4hy0P.mjs';
import { V as VTooltip } from './VTooltip-vXFYhuMk.mjs';
import { aW as _export_sfc, V as VBtn } from './server.mjs';
import { V as VAvatar } from './VAvatar-B478BWXT.mjs';
import { V as VTextField } from './VTextField-jMGfwBDn.mjs';
import { V as VDialog } from './VDialog-B0Ad2yj9.mjs';
import { V as VCard, a as VCardTitle, b as VCardActions } from './VCard-B42eN0YV.mjs';
import { V as VCardText } from './VCardText-CaXtzNxg.mjs';
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from './VList-BNtS0p6J.mjs';
import { V as VSpacer } from './VSpacer-CtyhO1n2.mjs';
import './UiSectionHeader-BGB1bAkA.mjs';
import './VTabs-iT2EYINr.mjs';
import './forwardRefs-Oip3fNRq.mjs';
import './VOverlay-gAZb14KV.mjs';
import './VChip-C0dLsv_T.mjs';
import './index-CSomYp-Z.mjs';
import './VDivider-Cdypedjq.mjs';
import './VDataTable-TnWqeKKY.mjs';
import './VDataTableFooter-BmXk9xgv.mjs';
import './filter-BIe-IBmp.mjs';
import './VMenu-C4ct7Xz7.mjs';
import './dialog-transition-CDwwEBKm.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "students",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const activeTab = ref("my-student");
    const tabs = [
      { label: "My Student", value: "my-student" },
      { label: "Homeroom Student", value: "homeroom-student" },
      { label: "Replacement Student", value: "replacement-student", count: 1, badgeColor: "error" },
      { label: "Event\u2019s Student", value: "events-student" }
    ];
    const headers = computed(() => [
      { title: "STUDENT NAME", key: "student", sortable: true },
      { title: "COURSE", key: "course", sortable: true },
      { title: "SESSION", key: "session", sortable: true },
      { title: "ACTION", key: "action", sortable: false, align: "center", width: 120 }
    ]);
    const students2 = ref([
      // My Student tab (10 rows for pagination testing)
      {
        id: "1",
        name: "Cristofer Mango",
        studentId: "STD-20091032-001",
        course: "Python Game Dev",
        session: "1 Active",
        tab: "my-student"
      },
      {
        id: "2",
        name: "Jennifer Summers",
        studentId: "STD-20091032-001",
        course: "Web Developer",
        session: "1 Active",
        tab: "my-student"
      },
      {
        id: "3",
        name: "Mr. Justin Richardson",
        studentId: "STD-20091032-001",
        course: "IoT Kids",
        session: "1 Active",
        tab: "my-student"
      },
      {
        id: "4",
        name: "Nicholas Tanner",
        studentId: "STD-20091032-001",
        course: "Web Developer",
        session: "1 Active",
        tab: "my-student"
      },
      {
        id: "5",
        name: "Crystal Mays",
        studentId: "STD-20091032-001",
        course: "Web Developer",
        session: "1 Active",
        tab: "my-student"
      },
      {
        id: "6",
        name: "Alexander Hamilton",
        studentId: "STD-20091032-002",
        course: "Python Game Dev",
        session: "2 Active",
        tab: "my-student"
      },
      {
        id: "7",
        name: "Eliza Schuyler",
        studentId: "STD-20091032-003",
        course: "IoT Kids",
        session: "1 Active",
        tab: "my-student"
      },
      {
        id: "8",
        name: "Angelica Schuyler",
        studentId: "STD-20091032-004",
        course: "Web Developer",
        session: "1 Active",
        tab: "my-student"
      },
      {
        id: "9",
        name: "Peggy Schuyler",
        studentId: "STD-20091032-005",
        course: "Python Game Dev",
        session: "1 Active",
        tab: "my-student"
      },
      {
        id: "10",
        name: "Aaron Burr",
        studentId: "STD-20091032-006",
        course: "Web Developer",
        session: "2 Active",
        tab: "my-student"
      },
      // Homeroom Student tab
      {
        id: "11",
        name: "Thomas Jefferson",
        studentId: "STD-20091032-007",
        course: "Python Game Dev",
        session: "1 Active",
        tab: "homeroom-student"
      },
      {
        id: "12",
        name: "James Madison",
        studentId: "STD-20091032-008",
        course: "IoT Kids",
        session: "1 Active",
        tab: "homeroom-student"
      },
      {
        id: "13",
        name: "George Washington",
        studentId: "STD-20091032-009",
        course: "Web Developer",
        session: "2 Active",
        tab: "homeroom-student"
      },
      // Replacement Student tab (exactly 1 row to match the count 1)
      {
        id: "14",
        name: "Marquis de Lafayette",
        studentId: "STD-20091032-010",
        course: "Python Game Dev",
        session: "1 Active",
        tab: "replacement-student"
      },
      // Event’s Student tab
      {
        id: "15",
        name: "Hercules Mulligan",
        studentId: "STD-20091032-011",
        course: "IoT Kids",
        session: "3 Active",
        tab: "events-student"
      }
    ]);
    const filteredItems = computed(() => {
      return students2.value.filter((item) => {
        if (item.tab !== activeTab.value) return false;
        const query = searchQuery.value.toLowerCase().trim();
        if (!query) return true;
        return item.name.toLowerCase().includes(query) || item.studentId.toLowerCase().includes(query) || item.course.toLowerCase().includes(query);
      });
    });
    const resetFilters = () => {
      searchQuery.value = "";
    };
    const router = useRouter();
    const handleViewDetail = (item) => {
      router.push({ path: "/student-detail", query: { id: item.id } });
    };
    const getInitials = (name) => {
      const cleanName = name.replace(/^(Mr\.|Ms\.|Mrs\.|Dr\.)\s+/i, "");
      return cleanName.split(" ").map((word) => word.charAt(0)).join("").toUpperCase().slice(0, 2);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2dd21902><div class="d-flex align-center gap-3 mb-5" data-v-2dd21902>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4 class="text-h4 font-weight-medium text-high-emphasis" data-v-2dd21902${_scopeId2}> Student </h4><p class="mb-0 text-body-1 text-medium-emphasis" data-v-2dd21902${_scopeId2}> Check your related student based on your active class </p>`);
                } else {
                  return [
                    createVNode("h4", { class: "text-h4 font-weight-medium text-high-emphasis" }, " Student "),
                    createVNode("p", { class: "mb-0 text-body-1 text-medium-emphasis" }, " Check your related student based on your active class ")
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
                  createVNode("h4", { class: "text-h4 font-weight-medium text-high-emphasis" }, " Student "),
                  createVNode("p", { class: "mb-0 text-body-1 text-medium-emphasis" }, " Check your related student based on your active class ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(UiTableView, {
        activeTab: activeTab.value,
        "onUpdate:activeTab": ($event) => activeTab.value = $event,
        title: "",
        tabs,
        headers: headers.value,
        items: filteredItems.value,
        onResetFilters: resetFilters
      }, {
        filters: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "width": "250px" })}" data-v-2dd21902${_scopeId}>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": ($event) => searchQuery.value = $event,
              placeholder: "Search student...",
              "prepend-inner-icon": "ri-search-line",
              clearable: "",
              "hide-details": "",
              density: "compact",
              variant: "outlined"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { style: { "width": "250px" } }, [
                createVNode(VTextField, {
                  modelValue: searchQuery.value,
                  "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                  placeholder: "Search student...",
                  "prepend-inner-icon": "ri-search-line",
                  clearable: "",
                  "hide-details": "",
                  density: "compact",
                  variant: "outlined"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        "item.student": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center gap-3 py-2" data-v-2dd21902${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, {
              size: "34",
              color: "grey-100",
              class: "border border-white"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-caption font-weight-medium text-high-emphasis" data-v-2dd21902${_scopeId2}>${ssrInterpolate(getInitials(item.name))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(getInitials(item.name)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex flex-column" data-v-2dd21902${_scopeId}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-2dd21902${_scopeId}>${ssrInterpolate(item.name)}</span><span class="text-body-2 text-medium-emphasis" data-v-2dd21902${_scopeId}>${ssrInterpolate(item.studentId)}</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center gap-3 py-2" }, [
                createVNode(VAvatar, {
                  size: "34",
                  color: "grey-100",
                  class: "border border-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(getInitials(item.name)), 1)
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
        "item.course": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-body-1 text-high-emphasis" data-v-2dd21902${_scopeId}>${ssrInterpolate(item.course)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.course), 1)
            ];
          }
        }),
        "item.session": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-body-1 text-high-emphasis" data-v-2dd21902${_scopeId}>${ssrInterpolate(item.session)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.session), 1)
            ];
          }
        }),
        "item.action": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTooltip, {
              text: "View Details",
              location: "top"
            }, {
              activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, mergeProps(props, {
                    icon: "ri-eye-line",
                    variant: "outlined",
                    size: "small",
                    color: "secondary",
                    class: "action-btn",
                    onClick: ($event) => handleViewDetail(item)
                  }), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, mergeProps(props, {
                      icon: "ri-eye-line",
                      variant: "outlined",
                      size: "small",
                      color: "secondary",
                      class: "action-btn",
                      onClick: ($event) => handleViewDetail(item)
                    }), null, 16, ["onClick"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTooltip, {
                text: "View Details",
                location: "top"
              }, {
                activator: withCtx(({ props }) => [
                  createVNode(VBtn, mergeProps(props, {
                    icon: "ri-eye-line",
                    variant: "outlined",
                    size: "small",
                    color: "secondary",
                    class: "action-btn",
                    onClick: ($event) => handleViewDetail(item)
                  }), null, 16, ["onClick"])
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: _ctx.showDetailDialog,
        "onUpdate:modelValue": ($event) => _ctx.showDetailDialog = $event,
        "max-width": "500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.selectedStudent) {
              _push2(ssrRenderComponent(VCard, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, { class: "text-h6 font-weight-medium pa-4 pb-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Student Details `);
                        } else {
                          return [
                            createTextVNode(" Student Details ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardText, { class: "pa-4 pt-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VList, {
                            lines: "two",
                            class: "pa-0"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItem, { class: "px-0" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Student Name`);
                                          } else {
                                            return [
                                              createTextVNode("Student Name")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(_ctx.selectedStudent.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(_ctx.selectedStudent.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Student Name")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.selectedStudent.name), 1)
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItem, { class: "px-0" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Student ID`);
                                          } else {
                                            return [
                                              createTextVNode("Student ID")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(_ctx.selectedStudent.studentId)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(_ctx.selectedStudent.studentId), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Student ID")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.selectedStudent.studentId), 1)
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItem, { class: "px-0" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Course`);
                                          } else {
                                            return [
                                              createTextVNode("Course")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(_ctx.selectedStudent.course)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(_ctx.selectedStudent.course), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Course")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.selectedStudent.course), 1)
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItem, { class: "px-0" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Session Status`);
                                          } else {
                                            return [
                                              createTextVNode("Session Status")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(_ctx.selectedStudent.session)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(_ctx.selectedStudent.session), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Session Status")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.selectedStudent.session), 1)
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItem, { class: "px-0" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Classification`);
                                          } else {
                                            return [
                                              createTextVNode("Classification")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          var _a, _b;
                                          if (_push7) {
                                            _push7(`${ssrInterpolate((_a = tabs.find((t) => {
                                              var _a2;
                                              return t.value === ((_a2 = _ctx.selectedStudent) == null ? void 0 : _a2.tab);
                                            })) == null ? void 0 : _a.label)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString((_b = tabs.find((t) => {
                                                var _a2;
                                                return t.value === ((_a2 = _ctx.selectedStudent) == null ? void 0 : _a2.tab);
                                              })) == null ? void 0 : _b.label), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Classification")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                          default: withCtx(() => {
                                            var _a;
                                            return [
                                              createTextVNode(toDisplayString((_a = tabs.find((t) => {
                                                var _a2;
                                                return t.value === ((_a2 = _ctx.selectedStudent) == null ? void 0 : _a2.tab);
                                              })) == null ? void 0 : _a.label), 1)
                                            ];
                                          }),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItem, { class: "px-0" }, {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Student Name")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.selectedStudent.name), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItem, { class: "px-0" }, {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Student ID")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.selectedStudent.studentId), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItem, { class: "px-0" }, {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Course")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.selectedStudent.course), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItem, { class: "px-0" }, {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Session Status")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.selectedStudent.session), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItem, { class: "px-0" }, {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Classification")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx(() => {
                                          var _a;
                                          return [
                                            createTextVNode(toDisplayString((_a = tabs.find((t) => {
                                              var _a2;
                                              return t.value === ((_a2 = _ctx.selectedStudent) == null ? void 0 : _a2.tab);
                                            })) == null ? void 0 : _a.label), 1)
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
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VList, {
                              lines: "two",
                              class: "pa-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(VListItem, { class: "px-0" }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Student Name")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.selectedStudent.name), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, { class: "px-0" }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Student ID")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.selectedStudent.studentId), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, { class: "px-0" }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Course")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.selectedStudent.course), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, { class: "px-0" }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Session Status")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.selectedStudent.session), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, { class: "px-0" }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Classification")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                      default: withCtx(() => {
                                        var _a;
                                        return [
                                          createTextVNode(toDisplayString((_a = tabs.find((t) => {
                                            var _a2;
                                            return t.value === ((_a2 = _ctx.selectedStudent) == null ? void 0 : _a2.tab);
                                          })) == null ? void 0 : _a.label), 1)
                                        ];
                                      }),
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
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardActions, { class: "pa-4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            color: "primary",
                            variant: "flat",
                            onClick: ($event) => _ctx.showDetailDialog = false
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Close `);
                              } else {
                                return [
                                  createTextVNode(" Close ")
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
                              variant: "flat",
                              onClick: ($event) => _ctx.showDetailDialog = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Close ")
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
                      createVNode(VCardTitle, { class: "text-h6 font-weight-medium pa-4 pb-2" }, {
                        default: withCtx(() => [
                          createTextVNode(" Student Details ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "pa-4 pt-2" }, {
                        default: withCtx(() => [
                          createVNode(VList, {
                            lines: "two",
                            class: "pa-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItem, { class: "px-0" }, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Student Name")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.selectedStudent.name), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, { class: "px-0" }, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Student ID")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.selectedStudent.studentId), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, { class: "px-0" }, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Course")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.selectedStudent.course), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, { class: "px-0" }, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Session Status")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.selectedStudent.session), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, { class: "px-0" }, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Classification")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createTextVNode(toDisplayString((_a = tabs.find((t) => {
                                          var _a2;
                                          return t.value === ((_a2 = _ctx.selectedStudent) == null ? void 0 : _a2.tab);
                                        })) == null ? void 0 : _a.label), 1)
                                      ];
                                    }),
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
                      }),
                      createVNode(VCardActions, { class: "pa-4" }, {
                        default: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "flat",
                            onClick: ($event) => _ctx.showDetailDialog = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Close ")
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
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.selectedStudent ? (openBlock(), createBlock(VCard, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-h6 font-weight-medium pa-4 pb-2" }, {
                    default: withCtx(() => [
                      createTextVNode(" Student Details ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-4 pt-2" }, {
                    default: withCtx(() => [
                      createVNode(VList, {
                        lines: "two",
                        class: "pa-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(VListItem, { class: "px-0" }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode("Student Name")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.selectedStudent.name), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, { class: "px-0" }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode("Student ID")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.selectedStudent.studentId), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, { class: "px-0" }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode("Course")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.selectedStudent.course), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, { class: "px-0" }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode("Session Status")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.selectedStudent.session), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, { class: "px-0" }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode("Classification")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                default: withCtx(() => {
                                  var _a;
                                  return [
                                    createTextVNode(toDisplayString((_a = tabs.find((t) => {
                                      var _a2;
                                      return t.value === ((_a2 = _ctx.selectedStudent) == null ? void 0 : _a2.tab);
                                    })) == null ? void 0 : _a.label), 1)
                                  ];
                                }),
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
                  }),
                  createVNode(VCardActions, { class: "pa-4" }, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "flat",
                        onClick: ($event) => _ctx.showDetailDialog = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Close ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/students.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const students = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2dd21902"]]);

export { students as default };
