import { defineComponent, ref, computed, withCtx, createVNode, mergeProps, toDisplayString, createTextVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { U as UiTableView } from './UiTableView-CBjzM5XB.mjs';
import { V as VRow, a as VCol } from './VRow-BRD4hy0P.mjs';
import { V as VTooltip } from './VTooltip-vXFYhuMk.mjs';
import { aW as _export_sfc, V as VBtn } from './server.mjs';
import { V as VTextField } from './VTextField-jMGfwBDn.mjs';
import { V as VSelect } from './filter-BIe-IBmp.mjs';
import { V as VDialog } from './VDialog-B0Ad2yj9.mjs';
import { V as VCard, a as VCardTitle, b as VCardActions } from './VCard-B42eN0YV.mjs';
import { V as VCardText } from './VCardText-CaXtzNxg.mjs';
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from './VList-BNtS0p6J.mjs';
import { V as VSpacer } from './VSpacer-CtyhO1n2.mjs';
import './UiSectionHeader-BGB1bAkA.mjs';
import './VTabs-iT2EYINr.mjs';
import './forwardRefs-Oip3fNRq.mjs';
import './VOverlay-gAZb14KV.mjs';
import './VAvatar-B478BWXT.mjs';
import './VChip-C0dLsv_T.mjs';
import './index-CSomYp-Z.mjs';
import './VDivider-Cdypedjq.mjs';
import './VDataTable-TnWqeKKY.mjs';
import './VDataTableFooter-BmXk9xgv.mjs';
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
import 'vue-router';
import 'vue-devtools-stub';
import '@antfu/utils';
import './VMenu-C4ct7Xz7.mjs';
import './dialog-transition-CDwwEBKm.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "course",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const selectedSubject = ref(null);
    const selectedLearningPath = ref(null);
    const subjectOptions = [
      "Coding",
      "Skill Lab",
      "Debug Zone",
      "Creative Hub",
      "Analytics Arena"
    ];
    const learningPathOptions = [
      "Adaptive Class",
      "Interactive Workshop",
      "Project Sprint",
      "Insight Session"
    ];
    const headers = computed(() => [
      { title: "Course & Subject", key: "course", sortable: true },
      { title: "Learning Path", key: "learningPath", sortable: true },
      { title: "Created At", key: "createdAt", sortable: true },
      { title: "Action", key: "action", sortable: false, align: "center", width: 120 }
    ]);
    const courses = ref([
      {
        id: "1",
        name: "AI Workshop",
        subject: "Coding",
        learningPath: "Adaptive Class",
        createdAt: "24 Mar 2026"
      },
      {
        id: "2",
        name: "AI Buddy",
        subject: "Skill Lab",
        learningPath: "Adaptive Class",
        createdAt: "24 Mar 2026"
      },
      {
        id: "3",
        name: "Code Companion",
        subject: "Debug Zone",
        learningPath: "Interactive Workshop",
        createdAt: "25 Mar 2026"
      },
      {
        id: "4",
        name: "Design Guru",
        subject: "Creative Hub",
        learningPath: "Project Sprint",
        createdAt: "26 Mar 2026"
      },
      {
        id: "5",
        name: "Data Whisperer",
        subject: "Analytics Arena",
        learningPath: "Insight Session",
        createdAt: "27 Mar 2026"
      },
      {
        id: "6",
        name: "Web Dev Starter",
        subject: "Coding",
        learningPath: "Interactive Workshop",
        createdAt: "28 Mar 2026"
      },
      {
        id: "7",
        name: "Mobile App Basics",
        subject: "Coding",
        learningPath: "Project Sprint",
        createdAt: "29 Mar 2026"
      },
      {
        id: "8",
        name: "UX/UI Foundations",
        subject: "Creative Hub",
        learningPath: "Adaptive Class",
        createdAt: "30 Mar 2026"
      },
      {
        id: "9",
        name: "Database Architectures",
        subject: "Debug Zone",
        learningPath: "Insight Session",
        createdAt: "31 Mar 2026"
      },
      {
        id: "10",
        name: "Math for AI",
        subject: "Skill Lab",
        learningPath: "Adaptive Class",
        createdAt: "01 Apr 2026"
      },
      {
        id: "11",
        name: "Robotics Lab",
        subject: "Coding",
        learningPath: "Project Sprint",
        createdAt: "02 Apr 2026"
      },
      {
        id: "12",
        name: "Creative Writing",
        subject: "Creative Hub",
        learningPath: "Interactive Workshop",
        createdAt: "03 Apr 2026"
      },
      {
        id: "13",
        name: "Data Visualization",
        subject: "Analytics Arena",
        learningPath: "Insight Session",
        createdAt: "04 Apr 2026"
      }
    ]);
    const filteredItems = computed(() => {
      return courses.value.filter((item) => {
        const query = searchQuery.value.toLowerCase().trim();
        const matchesSearch = !query || item.name.toLowerCase().includes(query) || item.subject.toLowerCase().includes(query);
        const matchesSubject = !selectedSubject.value || item.subject === selectedSubject.value;
        const matchesLearningPath = !selectedLearningPath.value || item.learningPath === selectedLearningPath.value;
        return matchesSearch && matchesSubject && matchesLearningPath;
      });
    });
    const resetFilters = () => {
      searchQuery.value = "";
      selectedSubject.value = null;
      selectedLearningPath.value = null;
    };
    const showDetailDialog = ref(false);
    const selectedCourse = ref(null);
    const handleViewDetail = (item) => {
      selectedCourse.value = item;
      showDetailDialog.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e1cfbe3e><div class="d-flex align-center gap-3 mb-5" data-v-e1cfbe3e>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4 class="text-h4 font-weight-medium text-high-emphasis" data-v-e1cfbe3e${_scopeId2}> Course </h4><p class="mb-0 text-body-1 text-medium-emphasis" data-v-e1cfbe3e${_scopeId2}> Manage and find all course data </p>`);
                } else {
                  return [
                    createVNode("h4", { class: "text-h4 font-weight-medium text-high-emphasis" }, " Course "),
                    createVNode("p", { class: "mb-0 text-body-1 text-medium-emphasis" }, " Manage and find all course data ")
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
                  createVNode("h4", { class: "text-h4 font-weight-medium text-high-emphasis" }, " Course "),
                  createVNode("p", { class: "mb-0 text-body-1 text-medium-emphasis" }, " Manage and find all course data ")
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
        title: "",
        headers: headers.value,
        items: filteredItems.value,
        onResetFilters: resetFilters
      }, {
        filters: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "width": "240px" })}" data-v-e1cfbe3e${_scopeId}>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": ($event) => searchQuery.value = $event,
              placeholder: "Search course...",
              "prepend-inner-icon": "ri-search-line",
              clearable: "",
              "hide-details": "",
              density: "compact",
              variant: "outlined"
            }, null, _parent2, _scopeId));
            _push2(`</div><div style="${ssrRenderStyle({ "width": "200px" })}" data-v-e1cfbe3e${_scopeId}>`);
            _push2(ssrRenderComponent(VSelect, {
              modelValue: selectedSubject.value,
              "onUpdate:modelValue": ($event) => selectedSubject.value = $event,
              label: "Subject",
              items: subjectOptions,
              clearable: "",
              "hide-details": "",
              density: "compact",
              variant: "outlined"
            }, null, _parent2, _scopeId));
            _push2(`</div><div style="${ssrRenderStyle({ "width": "200px" })}" data-v-e1cfbe3e${_scopeId}>`);
            _push2(ssrRenderComponent(VSelect, {
              modelValue: selectedLearningPath.value,
              "onUpdate:modelValue": ($event) => selectedLearningPath.value = $event,
              label: "Learning Path",
              items: learningPathOptions,
              clearable: "",
              "hide-details": "",
              density: "compact",
              variant: "outlined"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { style: { "width": "240px" } }, [
                createVNode(VTextField, {
                  modelValue: searchQuery.value,
                  "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                  placeholder: "Search course...",
                  "prepend-inner-icon": "ri-search-line",
                  clearable: "",
                  "hide-details": "",
                  density: "compact",
                  variant: "outlined"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { style: { "width": "200px" } }, [
                createVNode(VSelect, {
                  modelValue: selectedSubject.value,
                  "onUpdate:modelValue": ($event) => selectedSubject.value = $event,
                  label: "Subject",
                  items: subjectOptions,
                  clearable: "",
                  "hide-details": "",
                  density: "compact",
                  variant: "outlined"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { style: { "width": "200px" } }, [
                createVNode(VSelect, {
                  modelValue: selectedLearningPath.value,
                  "onUpdate:modelValue": ($event) => selectedLearningPath.value = $event,
                  label: "Learning Path",
                  items: learningPathOptions,
                  clearable: "",
                  "hide-details": "",
                  density: "compact",
                  variant: "outlined"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        "item.course": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-column py-2" data-v-e1cfbe3e${_scopeId}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-e1cfbe3e${_scopeId}>${ssrInterpolate(item.name)}</span><span class="text-body-2 text-medium-emphasis" data-v-e1cfbe3e${_scopeId}>${ssrInterpolate(item.subject)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex flex-column py-2" }, [
                createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.name), 1),
                createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.subject), 1)
              ])
            ];
          }
        }),
        "item.learningPath": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-body-1 text-high-emphasis" data-v-e1cfbe3e${_scopeId}>${ssrInterpolate(item.learningPath)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.learningPath), 1)
            ];
          }
        }),
        "item.createdAt": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-body-1 text-high-emphasis" data-v-e1cfbe3e${_scopeId}>${ssrInterpolate(item.createdAt)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.createdAt), 1)
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
        modelValue: showDetailDialog.value,
        "onUpdate:modelValue": ($event) => showDetailDialog.value = $event,
        "max-width": "500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (selectedCourse.value) {
              _push2(ssrRenderComponent(VCard, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, { class: "text-h6 font-weight-medium pa-4 pb-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Course Details `);
                        } else {
                          return [
                            createTextVNode(" Course Details ")
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
                                            _push7(`Course Name`);
                                          } else {
                                            return [
                                              createTextVNode("Course Name")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(selectedCourse.value.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(selectedCourse.value.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Course Name")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(selectedCourse.value.name), 1)
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
                                            _push7(`Subject`);
                                          } else {
                                            return [
                                              createTextVNode("Subject")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(selectedCourse.value.subject)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(selectedCourse.value.subject), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Subject")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(selectedCourse.value.subject), 1)
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
                                            _push7(`Learning Path`);
                                          } else {
                                            return [
                                              createTextVNode("Learning Path")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(selectedCourse.value.learningPath)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(selectedCourse.value.learningPath), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Learning Path")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(selectedCourse.value.learningPath), 1)
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
                                            _push7(`Created At`);
                                          } else {
                                            return [
                                              createTextVNode("Created At")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(selectedCourse.value.createdAt)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(selectedCourse.value.createdAt), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Created At")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(selectedCourse.value.createdAt), 1)
                                          ]),
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
                                          createTextVNode("Course Name")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(selectedCourse.value.name), 1)
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
                                          createTextVNode("Subject")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(selectedCourse.value.subject), 1)
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
                                          createTextVNode("Learning Path")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(selectedCourse.value.learningPath), 1)
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
                                          createTextVNode("Created At")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(selectedCourse.value.createdAt), 1)
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
                                        createTextVNode("Course Name")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(selectedCourse.value.name), 1)
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
                                        createTextVNode("Subject")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(selectedCourse.value.subject), 1)
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
                                        createTextVNode("Learning Path")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(selectedCourse.value.learningPath), 1)
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
                                        createTextVNode("Created At")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(selectedCourse.value.createdAt), 1)
                                      ]),
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
                            onClick: ($event) => showDetailDialog.value = false
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
                              onClick: ($event) => showDetailDialog.value = false
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
                          createTextVNode(" Course Details ")
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
                                      createTextVNode("Course Name")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(selectedCourse.value.name), 1)
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
                                      createTextVNode("Subject")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(selectedCourse.value.subject), 1)
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
                                      createTextVNode("Learning Path")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(selectedCourse.value.learningPath), 1)
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
                                      createTextVNode("Created At")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(selectedCourse.value.createdAt), 1)
                                    ]),
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
                            onClick: ($event) => showDetailDialog.value = false
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
              selectedCourse.value ? (openBlock(), createBlock(VCard, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-h6 font-weight-medium pa-4 pb-2" }, {
                    default: withCtx(() => [
                      createTextVNode(" Course Details ")
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
                                  createTextVNode("Course Name")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedCourse.value.name), 1)
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
                                  createTextVNode("Subject")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedCourse.value.subject), 1)
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
                                  createTextVNode("Learning Path")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedCourse.value.learningPath), 1)
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
                                  createTextVNode("Created At")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedCourse.value.createdAt), 1)
                                ]),
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
                        onClick: ($event) => showDetailDialog.value = false
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const course = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e1cfbe3e"]]);

export { course as default };
