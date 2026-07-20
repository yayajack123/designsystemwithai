import { _ as __nuxt_component_0 } from "./nuxt-link-CH0086wS.js";
import { defineComponent, ref, computed, watch, unref, isRef, withCtx, createVNode, createTextVNode, mergeProps, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { a as avatarText } from "./formatters-BiUWZhXP.js";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/hookable/dist/index.mjs";
import { V as VTabs, a as VTab, b as VSkeletonLoader } from "./VTabs-iT2EYINr.js";
import { a as VIcon, V as VBtn, aX as VBtnToggle, aW as _export_sfc } from "../server.mjs";
import { V as VCard } from "./VCard-B42eN0YV.js";
import { V as VCardText } from "./VCardText-CaXtzNxg.js";
import { V as VTextField } from "./VTextField-jMGfwBDn.js";
import { V as VSelect } from "./filter-BIe-IBmp.js";
import { V as VDivider } from "./VDivider-Cdypedjq.js";
import { k as VDataTable } from "./VDataTable-TnWqeKKY.js";
import { V as VTooltip } from "./VTooltip-vXFYhuMk.js";
import { V as VChip } from "./VChip-C0dLsv_T.js";
import { V as VAvatar } from "./VAvatar-B478BWXT.js";
import "./forwardRefs-Oip3fNRq.js";
import "./VOverlay-gAZb14KV.js";
import "./VList-BNtS0p6J.js";
import "./index-CSomYp-Z.js";
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
import "./VMenu-C4ct7Xz7.js";
import "./dialog-transition-CDwwEBKm.js";
import "./VCheckboxBtn-BB8tUmIP.js";
import "./VSelectionControl-B1a3mcFW.js";
import "./VDataTableFooter-BmXk9xgv.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reports",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("daily-journal");
    const dailyJournalData = ref([
      { id: "1", studentName: "Cristofer Mango", studentId: "STD-293012302-12320", bookSession: "Python Game Dev", lessonName: "Lesson 4 - Canvas Setup", className: "DPS-Adaptive-C", date: "2026-02-28", status: "pending" },
      { id: "2", studentName: "Jennifer Summers", studentId: "STD-293012302-12321", bookSession: "Python Game Dev", lessonName: "Lesson 4 - Canvas Setup", className: "DPS-Adaptive-C", date: "2026-02-28", status: "not_created" },
      { id: "3", studentName: "Justin Richardson", studentId: "STD-293012302-12322", bookSession: "Python Game Dev", lessonName: "Lesson 4 - Canvas Setup", className: "DPS-Adaptive-A", date: "2026-03-01", status: "pending" },
      { id: "4", studentName: "Nicholas Tanner", studentId: "STD-293012302-12323", bookSession: "Python Game Dev", lessonName: "Lesson 4 - Canvas Setup", className: "DPS-Adaptive-B", date: "2026-03-01", status: "not_created" },
      { id: "5", studentName: "Crystal Mays", studentId: "STD-293012302-12324", bookSession: "Python Game Dev", lessonName: "Lesson 4 - Canvas Setup", className: "DPS-Adaptive-C", date: "2026-03-02", status: "pending" },
      { id: "6", studentName: "Mary Garcia", studentId: "STD-293012302-12325", bookSession: "Python Game Dev", lessonName: "Lesson 4 - Canvas Setup", className: "DPS-Adaptive-A", date: "2026-03-02", status: "not_created" },
      { id: "7", studentName: "Megan Roberts", studentId: "STD-293012302-12326", bookSession: "Python Game Dev", lessonName: "Lesson 4 - Canvas Setup", className: "DPS-Adaptive-B", date: "2026-03-03", status: "pending" },
      { id: "8", studentName: "Joseph Oliver", studentId: "STD-293012302-12327", bookSession: "Python Game Dev", lessonName: "Lesson 4 - Canvas Setup", className: "DPS-Adaptive-C", date: "2026-03-03", status: "not_created" }
    ]);
    const pendingReportData = ref([
      { id: "9", studentName: "Cristofer Mango", studentId: "STD-293012302-12320", bookSession: "Python Game Dev", lessonName: "Lesson 4 - Canvas Setup", className: "DPS-Adaptive-C", date: "2026-02-28", status: "pending" },
      { id: "10", studentName: "Justin Richardson", studentId: "STD-293012302-12322", bookSession: "Python Game Dev", lessonName: "Lesson 4 - Canvas Setup", className: "DPS-Adaptive-A", date: "2026-03-01", status: "not_created" },
      { id: "11", studentName: "Crystal Mays", studentId: "STD-293012302-12324", bookSession: "Python Game Dev", lessonName: "Lesson 4 - Canvas Setup", className: "DPS-Adaptive-C", date: "2026-03-02", status: "pending" },
      { id: "12", studentName: "Megan Roberts", studentId: "STD-293012302-12326", bookSession: "Python Game Dev", lessonName: "Lesson 4 - Canvas Setup", className: "DPS-Adaptive-B", date: "2026-03-03", status: "not_created" },
      { id: "13", studentName: "Nicholas Tanner", studentId: "STD-293012302-12323", bookSession: "Python Game Dev", lessonName: "Lesson 4 - Canvas Setup", className: "DPS-Adaptive-B", date: "2026-03-01", status: "pending" }
    ]);
    const currentData = computed(
      () => activeTab.value === "daily-journal" ? dailyJournalData.value : pendingReportData.value
    );
    const columns = computed(() => {
      const baseColumns = [
        { title: "Student Name", key: "student" },
        { title: "Book / Session", key: "book" },
        { title: "Lesson & Class", key: "lesson" },
        { title: "Date", key: "date" },
        { title: "Status", key: "status" },
        { title: "Action", key: "action", sortable: false, align: "center", width: "120px" }
      ];
      return baseColumns;
    });
    computed(
      () => dailyJournalData.value.filter((r) => r.status === "pending").length
    );
    computed(
      () => pendingReportData.value.length
    );
    const searchQuery = ref("");
    const selectedClass = ref("All Classes");
    const viewType = ref("list");
    const classOptions = computed(() => {
      const allItems = currentData.value;
      const classes = allItems.map((i) => i.className).filter((c) => !!c && c !== "-");
      return ["All Classes", ...new Set(classes)];
    });
    const resetFilter = () => {
      searchQuery.value = "";
      selectedClass.value = "All Classes";
    };
    const hasActiveFilter = computed(
      () => searchQuery.value !== "" || selectedClass.value !== "All Classes"
    );
    const filteredData = computed(() => {
      return currentData.value.filter((item) => {
        const matchesSearch = item.studentName.toLowerCase().includes(searchQuery.value.toLowerCase()) || item.studentId.toLowerCase().includes(searchQuery.value.toLowerCase()) || item.bookSession.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesClass = selectedClass.value === "All Classes" || item.className === selectedClass.value;
        return matchesSearch && matchesClass;
      });
    });
    ref(false);
    const initialLoading = ref(true);
    const statusLabel = (status) => {
      if (status === "not_created") return "Not Created";
      return "Pending";
    };
    const statusColor = (status) => {
      if (status === "not_created") return "secondary";
      return "warning";
    };
    const formatDate = (dateStr) => {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const itemsPerPage = ref(5);
    const currentPage = ref(1);
    watch([activeTab, searchQuery, selectedClass], () => {
      currentPage.value = 1;
    });
    const viewIcons = {
      list: "ri-list-unordered",
      student: "ri-team-line",
      class: "ri-door-closed-line"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-c3d0f482><div class="mb-5" data-v-c3d0f482><h4 class="text-h4 font-weight-medium text-high-emphasis" data-v-c3d0f482> Reports </h4><p class="text-body-1 text-medium-emphasis mb-0" data-v-c3d0f482> Pending daily journals and student reports </p></div>`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(activeTab),
        "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
        class: "v-tabs-bordered mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTab, { value: "daily-journal" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    start: "",
                    icon: "ri-file-list-3-line",
                    class: "me-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` Pending Daily Journal <span class="count-badge ms-2 bg-error text-white" data-v-c3d0f482${_scopeId2}> 20 </span>`);
                } else {
                  return [
                    createVNode(VIcon, {
                      start: "",
                      icon: "ri-file-list-3-line",
                      class: "me-2"
                    }),
                    createTextVNode(" Pending Daily Journal "),
                    createVNode("span", { class: "count-badge ms-2 bg-error text-white" }, " 20 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, { value: "pending-report" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    start: "",
                    icon: "ri-bar-chart-2-line",
                    class: "me-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` Pending Report <span class="count-badge ms-2 bg-secondary text-white" data-v-c3d0f482${_scopeId2}> 15 </span>`);
                } else {
                  return [
                    createVNode(VIcon, {
                      start: "",
                      icon: "ri-bar-chart-2-line",
                      class: "me-2"
                    }),
                    createTextVNode(" Pending Report "),
                    createVNode("span", { class: "count-badge ms-2 bg-secondary text-white" }, " 15 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTab, { value: "daily-journal" }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    start: "",
                    icon: "ri-file-list-3-line",
                    class: "me-2"
                  }),
                  createTextVNode(" Pending Daily Journal "),
                  createVNode("span", { class: "count-badge ms-2 bg-error text-white" }, " 20 ")
                ]),
                _: 1
              }),
              createVNode(VTab, { value: "pending-report" }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    start: "",
                    icon: "ri-bar-chart-2-line",
                    class: "me-2"
                  }),
                  createTextVNode(" Pending Report "),
                  createVNode("span", { class: "count-badge ms-2 bg-secondary text-white" }, " 15 ")
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
                  _push3(`<div class="d-flex align-center flex-wrap gap-4 flex-grow-1" data-v-c3d0f482${_scopeId2}><div style="${ssrRenderStyle({ "width": "240px" })}" data-v-c3d0f482${_scopeId2}>`);
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
                  _push3(`</div><div style="${ssrRenderStyle({ "width": "240px" })}" data-v-c3d0f482${_scopeId2}>`);
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
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "text",
                    color: "primary",
                    disabled: !unref(hasActiveFilter),
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
                          icon: viewIcons.list
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "student",
                          icon: viewIcons.student
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          value: "class",
                          icon: viewIcons.class
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            value: "list",
                            icon: viewIcons.list
                          }, null, 8, ["icon"]),
                          createVNode(VBtn, {
                            value: "student",
                            icon: viewIcons.student
                          }, null, 8, ["icon"]),
                          createVNode(VBtn, {
                            value: "class",
                            icon: viewIcons.class
                          }, null, 8, ["icon"])
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
                      createVNode(VBtn, {
                        variant: "text",
                        color: "primary",
                        disabled: !unref(hasActiveFilter),
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
                          icon: viewIcons.list
                        }, null, 8, ["icon"]),
                        createVNode(VBtn, {
                          value: "student",
                          icon: viewIcons.student
                        }, null, 8, ["icon"]),
                        createVNode(VBtn, {
                          value: "class",
                          icon: viewIcons.class
                        }, null, 8, ["icon"])
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
              _push2(`<div class="pa-6" data-v-c3d0f482${_scopeId}><!--[-->`);
              ssrRenderList(3, (n) => {
                _push2(ssrRenderComponent(VSkeletonLoader, {
                  key: n,
                  type: "table-row-divider@4",
                  class: "mb-2"
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else if (unref(filteredData).length === 0) {
              _push2(`<div class="py-12 text-center text-medium-emphasis d-flex flex-column align-center ga-2" data-v-c3d0f482${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                icon: "ri-file-search-line",
                size: "48",
                color: "disabled"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-body-1 mt-2 mb-0" data-v-c3d0f482${_scopeId}> No matching reports found. </p>`);
              if (unref(hasActiveFilter)) {
                _push2(ssrRenderComponent(VBtn, {
                  variant: "text",
                  color: "primary",
                  onClick: resetFilter
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Clear filters `);
                    } else {
                      return [
                        createTextVNode(" Clear filters ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else if (unref(viewType) === "list") {
              _push2(ssrRenderComponent(VDataTable, {
                page: unref(currentPage),
                "onUpdate:page": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
                "items-per-page": unref(itemsPerPage),
                "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                headers: unref(columns),
                items: unref(filteredData),
                "items-per-page-options": [5, 10, 20],
                class: "text-no-wrap report-table"
              }, {
                "item.student": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex align-center py-2" data-v-c3d0f482${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      size: "34",
                      class: "me-3",
                      color: "grey-50"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="text-caption font-weight-medium" data-v-c3d0f482${_scopeId3}>${ssrInterpolate(unref(avatarText)(item.studentName))}</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(unref(avatarText)(item.studentName)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="d-flex flex-column" data-v-c3d0f482${_scopeId2}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-c3d0f482${_scopeId2}>${ssrInterpolate(item.studentName)}</span><span class="text-body-2 text-medium-emphasis" data-v-c3d0f482${_scopeId2}>${ssrInterpolate(item.studentId)}</span></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex align-center py-2" }, [
                        createVNode(VAvatar, {
                          size: "34",
                          class: "me-3",
                          color: "grey-50"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(unref(avatarText)(item.studentName)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "d-flex flex-column" }, [
                          createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.studentName), 1),
                          createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.studentId), 1)
                        ])
                      ])
                    ];
                  }
                }),
                "item.book": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-body-1 text-high-emphasis" data-v-c3d0f482${_scopeId2}>${ssrInterpolate(item.bookSession)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.bookSession), 1)
                    ];
                  }
                }),
                "item.lesson": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex flex-column py-2" data-v-c3d0f482${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: "#",
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
                    _push3(`<span class="text-body-2 text-medium-emphasis" data-v-c3d0f482${_scopeId2}>${ssrInterpolate(item.className || "-")}</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex flex-column py-2" }, [
                        createVNode(_component_NuxtLink, {
                          to: "#",
                          class: "text-primary text-decoration-underline font-weight-medium text-body-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.lessonName), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.className || "-"), 1)
                      ])
                    ];
                  }
                }),
                "item.date": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-body-1 text-high-emphasis" data-v-c3d0f482${_scopeId2}>${ssrInterpolate(formatDate(item.date))}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-body-1 text-high-emphasis" }, toDisplayString(formatDate(item.date)), 1)
                    ];
                  }
                }),
                "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VChip, {
                      color: statusColor(item.status),
                      variant: "tonal",
                      size: "small",
                      class: "font-weight-medium"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(statusLabel(item.status))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(statusLabel(item.status)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VChip, {
                        color: statusColor(item.status),
                        variant: "tonal",
                        size: "small",
                        class: "font-weight-medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(statusLabel(item.status)), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ];
                  }
                }),
                "item.action": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex justify-center gap-2" data-v-c3d0f482${_scopeId2}>`);
                    _push3(ssrRenderComponent(VTooltip, {
                      text: "Edit",
                      location: "top"
                    }, {
                      activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VBtn, mergeProps(props, {
                            icon: "ri-pencil-line",
                            variant: "outlined",
                            size: "small",
                            class: "action-btn",
                            color: "secondary"
                          }), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VBtn, mergeProps(props, {
                              icon: "ri-pencil-line",
                              variant: "outlined",
                              size: "small",
                              class: "action-btn",
                              color: "secondary"
                            }), null, 16)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (item.status === "pending") {
                      _push3(ssrRenderComponent(VTooltip, {
                        text: "Start Review",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VBtn, mergeProps(props, {
                              icon: "ri-play-circle-line",
                              color: "primary",
                              variant: "outlined",
                              size: "small",
                              class: "action-btn"
                            }), null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VBtn, mergeProps(props, {
                                icon: "ri-play-circle-line",
                                color: "primary",
                                variant: "outlined",
                                size: "small",
                                class: "action-btn"
                              }), null, 16)
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
                      createVNode("div", { class: "d-flex justify-center gap-2" }, [
                        createVNode(VTooltip, {
                          text: "Edit",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, mergeProps(props, {
                              icon: "ri-pencil-line",
                              variant: "outlined",
                              size: "small",
                              class: "action-btn",
                              color: "secondary"
                            }), null, 16)
                          ]),
                          _: 1
                        }),
                        item.status === "pending" ? (openBlock(), createBlock(VTooltip, {
                          key: 0,
                          text: "Start Review",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, mergeProps(props, {
                              icon: "ri-play-circle-line",
                              color: "primary",
                              variant: "outlined",
                              size: "small",
                              class: "action-btn"
                            }), null, 16)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                "no-data": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="py-6 text-center text-medium-emphasis" data-v-c3d0f482${_scopeId2}> No records found. </div>`);
                  } else {
                    return [
                      createVNode("div", { class: "py-6 text-center text-medium-emphasis" }, " No records found. ")
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
                    createVNode(VBtn, {
                      variant: "text",
                      color: "primary",
                      disabled: !unref(hasActiveFilter),
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
                        icon: viewIcons.list
                      }, null, 8, ["icon"]),
                      createVNode(VBtn, {
                        value: "student",
                        icon: viewIcons.student
                      }, null, 8, ["icon"]),
                      createVNode(VBtn, {
                        value: "class",
                        icon: viewIcons.class
                      }, null, 8, ["icon"])
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
              ])) : unref(filteredData).length === 0 ? (openBlock(), createBlock("div", {
                key: 1,
                class: "py-12 text-center text-medium-emphasis d-flex flex-column align-center ga-2"
              }, [
                createVNode(VIcon, {
                  icon: "ri-file-search-line",
                  size: "48",
                  color: "disabled"
                }),
                createVNode("p", { class: "text-body-1 mt-2 mb-0" }, " No matching reports found. "),
                unref(hasActiveFilter) ? (openBlock(), createBlock(VBtn, {
                  key: 0,
                  variant: "text",
                  color: "primary",
                  onClick: resetFilter
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Clear filters ")
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ])) : unref(viewType) === "list" ? (openBlock(), createBlock(VDataTable, {
                key: 2,
                page: unref(currentPage),
                "onUpdate:page": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
                "items-per-page": unref(itemsPerPage),
                "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                headers: unref(columns),
                items: unref(filteredData),
                "items-per-page-options": [5, 10, 20],
                class: "text-no-wrap report-table"
              }, {
                "item.student": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center py-2" }, [
                    createVNode(VAvatar, {
                      size: "34",
                      class: "me-3",
                      color: "grey-50"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(unref(avatarText)(item.studentName)), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", { class: "d-flex flex-column" }, [
                      createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.studentName), 1),
                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.studentId), 1)
                    ])
                  ])
                ]),
                "item.book": withCtx(({ item }) => [
                  createVNode("span", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.bookSession), 1)
                ]),
                "item.lesson": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex flex-column py-2" }, [
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary text-decoration-underline font-weight-medium text-body-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.lessonName), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.className || "-"), 1)
                  ])
                ]),
                "item.date": withCtx(({ item }) => [
                  createVNode("span", { class: "text-body-1 text-high-emphasis" }, toDisplayString(formatDate(item.date)), 1)
                ]),
                "item.status": withCtx(({ item }) => [
                  createVNode(VChip, {
                    color: statusColor(item.status),
                    variant: "tonal",
                    size: "small",
                    class: "font-weight-medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(statusLabel(item.status)), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.action": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex justify-center gap-2" }, [
                    createVNode(VTooltip, {
                      text: "Edit",
                      location: "top"
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(VBtn, mergeProps(props, {
                          icon: "ri-pencil-line",
                          variant: "outlined",
                          size: "small",
                          class: "action-btn",
                          color: "secondary"
                        }), null, 16)
                      ]),
                      _: 1
                    }),
                    item.status === "pending" ? (openBlock(), createBlock(VTooltip, {
                      key: 0,
                      text: "Start Review",
                      location: "top"
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(VBtn, mergeProps(props, {
                          icon: "ri-play-circle-line",
                          color: "primary",
                          variant: "outlined",
                          size: "small",
                          class: "action-btn"
                        }), null, 16)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ]),
                "no-data": withCtx(() => [
                  createVNode("div", { class: "py-6 text-center text-medium-emphasis" }, " No records found. ")
                ]),
                _: 1
              }, 8, ["page", "onUpdate:page", "items-per-page", "onUpdate:itemsPerPage", "headers", "items"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reports = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c3d0f482"]]);
export {
  reports as default
};
