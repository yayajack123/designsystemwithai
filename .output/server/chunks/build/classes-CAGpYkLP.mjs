import { defineComponent, ref, computed, withCtx, createVNode, mergeProps, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { U as UiTableView } from './UiTableView-CBjzM5XB.mjs';
import { V as VRow, a as VCol } from './VRow-BRD4hy0P.mjs';
import { V as VTooltip } from './VTooltip-vXFYhuMk.mjs';
import { aW as _export_sfc, V as VBtn } from './server.mjs';
import { V as VChip } from './VChip-C0dLsv_T.mjs';
import { V as VAvatar } from './VAvatar-B478BWXT.mjs';
import { V as VTextField } from './VTextField-jMGfwBDn.mjs';
import { V as VSelect } from './filter-BIe-IBmp.mjs';
import { V as VDialog } from './VDialog-B0Ad2yj9.mjs';
import { V as VCard, a as VCardTitle, b as VCardActions } from './VCard-B42eN0YV.mjs';
import { V as VCardText } from './VCardText-CaXtzNxg.mjs';
import { V as VSpacer } from './VSpacer-CtyhO1n2.mjs';
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from './VList-BNtS0p6J.mjs';
import { V as VSnackbar } from './VSnackbar-DgaXWzkK.mjs';
import './UiSectionHeader-BGB1bAkA.mjs';
import './VTabs-iT2EYINr.mjs';
import './forwardRefs-Oip3fNRq.mjs';
import './VOverlay-gAZb14KV.mjs';
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
import './index-CSomYp-Z.mjs';
import './VMenu-C4ct7Xz7.mjs';
import './dialog-transition-CDwwEBKm.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "classes",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const selectedBranch = ref(null);
    const selectedStatus = ref(null);
    const selectedType = ref(null);
    const branchOptions = [
      "Offline Bali - Renon",
      "Offline Bali - Canggu",
      "Online Jakarta",
      "Offline Bali - Seminyak",
      "Online Surabaya",
      "Offline Bali - Ubud"
    ];
    const statusOptions = ["Active", "Scheduled", "Completed"];
    const typeOptions = [
      "Adaptive Class",
      "Traditional Class",
      "Hybrid Class",
      "Intensive Class"
    ];
    const headers = computed(() => [
      { title: "Class Name", key: "className", sortable: true },
      { title: "Type", key: "type", sortable: true },
      { title: "Room & Schedule", key: "roomSchedule", sortable: true },
      { title: "Teachers", key: "teachers", sortable: false },
      { title: "Students", key: "students", sortable: true },
      { title: "Status", key: "status", sortable: true },
      { title: "Action", key: "action", sortable: false, align: "center", width: 120 }
    ]);
    const classes2 = ref([
      {
        id: "1",
        name: "DPS-Adaptive-8C",
        branch: "Offline Bali - Renon",
        type: "Adaptive Class",
        schedule: "3 times a week",
        detailedSchedule: "Mon, Wed, Fri \u2022 14:00 - 15:30",
        room: "Room A - Renon",
        teachers: [
          { initials: "CM", name: "Chris Martin", avatarColor: "#E8F5E9" },
          { initials: "IG", name: "Ian Gillan", avatarColor: "#FFF3E0" }
        ],
        studentsCount: 5,
        status: "Active"
      },
      {
        id: "2",
        name: "DPS-Adaptive-8D",
        branch: "Offline Bali - Canggu",
        type: "Adaptive Class",
        schedule: "3 times a week",
        detailedSchedule: "Mon, Wed, Fri \u2022 16:00 - 17:30",
        room: "Room B - Canggu",
        teachers: [
          { initials: "CM", name: "Chris Martin", avatarColor: "#E8F5E9" },
          { initials: "FB", name: "Freddie Mercury", avatarColor: "#E3F2FD" }
        ],
        studentsCount: 8,
        status: "Active"
      },
      {
        id: "3",
        name: "DPS-Traditional-10A",
        branch: "Online Jakarta",
        type: "Traditional Class",
        schedule: "3 times a week",
        detailedSchedule: "Tue, Thu, Sat \u2022 09:00 - 10:30",
        room: "Virtual Classroom 1",
        teachers: [
          { initials: "CP", name: "Chris Pratt", avatarColor: "#F3E5F5" },
          { initials: "IG", name: "Ian Gillan", avatarColor: "#FFF3E0" }
        ],
        studentsCount: 12,
        status: "Scheduled"
      },
      {
        id: "4",
        name: "DPS-Hybrid-7B",
        branch: "Offline Bali - Seminyak",
        type: "Hybrid Class",
        schedule: "3 times a week",
        detailedSchedule: "Mon, Wed, Fri \u2022 10:00 - 11:30",
        room: "Room C - Seminyak",
        teachers: [
          { initials: "CM", name: "Chris Martin", avatarColor: "#E8F5E9" },
          { initials: "YT", name: "Yuki Tsuno", avatarColor: "#E0F7FA" }
        ],
        studentsCount: 10,
        status: "Active"
      },
      {
        id: "5",
        name: "DPS-Intensive-9C",
        branch: "Online Surabaya",
        type: "Intensive Class",
        schedule: "3 times a week",
        detailedSchedule: "Mon, Wed, Fri \u2022 18:30 - 20:00",
        room: "Virtual Classroom 2",
        teachers: [
          { initials: "CP", name: "Chris Pratt", avatarColor: "#F3E5F5" },
          { initials: "TW", name: "Thom Yorke", avatarColor: "#FFEBEE" }
        ],
        studentsCount: 7,
        status: "Completed"
      },
      {
        id: "6",
        name: "DPS-Adaptive-6A",
        branch: "Offline Bali - Ubud",
        type: "Adaptive Class",
        schedule: "3 times a week",
        detailedSchedule: "Tue, Thu, Sat \u2022 14:00 - 15:30",
        room: "Room A - Ubud",
        teachers: [
          { initials: "CM", name: "Chris Martin", avatarColor: "#E8F5E9" },
          { initials: "IG", name: "Ian Gillan", avatarColor: "#FFF3E0" }
        ],
        studentsCount: 6,
        status: "Active"
      },
      {
        id: "7",
        name: "DPS-Traditional-9B",
        branch: "Offline Bali - Canggu",
        type: "Traditional Class",
        schedule: "2 times a week",
        detailedSchedule: "Tue, Thu \u2022 16:00 - 17:30",
        room: "Room A - Canggu",
        teachers: [
          { initials: "FB", name: "Freddie Mercury", avatarColor: "#E3F2FD" }
        ],
        studentsCount: 15,
        status: "Scheduled"
      },
      {
        id: "8",
        name: "DPS-Hybrid-8A",
        branch: "Offline Bali - Seminyak",
        type: "Hybrid Class",
        schedule: "3 times a week",
        detailedSchedule: "Mon, Wed, Fri \u2022 13:00 - 14:30",
        room: "Room B - Seminyak",
        teachers: [
          { initials: "YT", name: "Yuki Tsuno", avatarColor: "#E0F7FA" },
          { initials: "TW", name: "Thom Yorke", avatarColor: "#FFEBEE" }
        ],
        studentsCount: 9,
        status: "Active"
      },
      {
        id: "9",
        name: "DPS-Intensive-10B",
        branch: "Online Jakarta",
        type: "Intensive Class",
        schedule: "5 times a week",
        detailedSchedule: "Mon to Fri \u2022 08:00 - 09:30",
        room: "Virtual Classroom 3",
        teachers: [
          { initials: "CP", name: "Chris Pratt", avatarColor: "#F3E5F5" }
        ],
        studentsCount: 11,
        status: "Completed"
      },
      {
        id: "10",
        name: "DPS-Adaptive-7A",
        branch: "Offline Bali - Renon",
        type: "Adaptive Class",
        schedule: "3 times a week",
        detailedSchedule: "Tue, Thu, Sat \u2022 10:00 - 11:30",
        room: "Room B - Renon",
        teachers: [
          { initials: "CM", name: "Chris Martin", avatarColor: "#E8F5E9" },
          { initials: "YT", name: "Yuki Tsuno", avatarColor: "#E0F7FA" }
        ],
        studentsCount: 4,
        status: "Active"
      }
    ]);
    const filteredItems = computed(() => {
      return classes2.value.filter((item) => {
        const query = searchQuery.value.toLowerCase().trim();
        const matchesSearch = !query || item.name.toLowerCase().includes(query) || item.branch.toLowerCase().includes(query);
        const matchesBranch = !selectedBranch.value || item.branch === selectedBranch.value;
        const matchesStatus = !selectedStatus.value || item.status === selectedStatus.value;
        const matchesType = !selectedType.value || item.type === selectedType.value;
        return matchesSearch && matchesBranch && matchesStatus && matchesType;
      });
    });
    const resetFilters = () => {
      searchQuery.value = "";
      selectedBranch.value = null;
      selectedStatus.value = null;
      selectedType.value = null;
    };
    const getStatusColor = (status) => {
      if (status === "Active") return "primary";
      if (status === "Scheduled") return "info";
      if (status === "Completed") return "success";
      return "secondary";
    };
    const showScheduleDialog = ref(false);
    const showDetailDialog = ref(false);
    const selectedClass = ref(null);
    const handleSeeSchedule = (item) => {
      selectedClass.value = item;
      showScheduleDialog.value = true;
    };
    const handleViewDetail = (item) => {
      selectedClass.value = item;
      showDetailDialog.value = true;
    };
    const showSnackbar = ref(false);
    const snackbarColor = ref("success");
    const snackbarText = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-67a37c40><div class="d-flex align-center gap-3 mb-5" data-v-67a37c40>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4 class="text-h4 font-weight-medium text-high-emphasis" data-v-67a37c40${_scopeId2}> Class List </h4><p class="mb-0 text-body-1 text-medium-emphasis" data-v-67a37c40${_scopeId2}> Manage and view all your classes </p>`);
                } else {
                  return [
                    createVNode("h4", { class: "text-h4 font-weight-medium text-high-emphasis" }, " Class List "),
                    createVNode("p", { class: "mb-0 text-body-1 text-medium-emphasis" }, " Manage and view all your classes ")
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
                  createVNode("h4", { class: "text-h4 font-weight-medium text-high-emphasis" }, " Class List "),
                  createVNode("p", { class: "mb-0 text-body-1 text-medium-emphasis" }, " Manage and view all your classes ")
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
            _push2(`<div style="${ssrRenderStyle({ "width": "240px" })}" data-v-67a37c40${_scopeId}>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": ($event) => searchQuery.value = $event,
              placeholder: "Search class...",
              "prepend-inner-icon": "ri-search-line",
              clearable: "",
              "hide-details": "",
              density: "compact",
              variant: "outlined"
            }, null, _parent2, _scopeId));
            _push2(`</div><div style="${ssrRenderStyle({ "width": "200px" })}" data-v-67a37c40${_scopeId}>`);
            _push2(ssrRenderComponent(VSelect, {
              modelValue: selectedBranch.value,
              "onUpdate:modelValue": ($event) => selectedBranch.value = $event,
              label: "Branch",
              items: branchOptions,
              clearable: "",
              "hide-details": "",
              density: "compact",
              variant: "outlined"
            }, null, _parent2, _scopeId));
            _push2(`</div><div style="${ssrRenderStyle({ "width": "200px" })}" data-v-67a37c40${_scopeId}>`);
            _push2(ssrRenderComponent(VSelect, {
              modelValue: selectedStatus.value,
              "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
              label: "Status",
              items: statusOptions,
              clearable: "",
              "hide-details": "",
              density: "compact",
              variant: "outlined"
            }, null, _parent2, _scopeId));
            _push2(`</div><div style="${ssrRenderStyle({ "width": "200px" })}" data-v-67a37c40${_scopeId}>`);
            _push2(ssrRenderComponent(VSelect, {
              modelValue: selectedType.value,
              "onUpdate:modelValue": ($event) => selectedType.value = $event,
              label: "Type",
              items: typeOptions,
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
                  placeholder: "Search class...",
                  "prepend-inner-icon": "ri-search-line",
                  clearable: "",
                  "hide-details": "",
                  density: "compact",
                  variant: "outlined"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { style: { "width": "200px" } }, [
                createVNode(VSelect, {
                  modelValue: selectedBranch.value,
                  "onUpdate:modelValue": ($event) => selectedBranch.value = $event,
                  label: "Branch",
                  items: branchOptions,
                  clearable: "",
                  "hide-details": "",
                  density: "compact",
                  variant: "outlined"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { style: { "width": "200px" } }, [
                createVNode(VSelect, {
                  modelValue: selectedStatus.value,
                  "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
                  label: "Status",
                  items: statusOptions,
                  clearable: "",
                  "hide-details": "",
                  density: "compact",
                  variant: "outlined"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { style: { "width": "200px" } }, [
                createVNode(VSelect, {
                  modelValue: selectedType.value,
                  "onUpdate:modelValue": ($event) => selectedType.value = $event,
                  label: "Type",
                  items: typeOptions,
                  clearable: "",
                  "hide-details": "",
                  density: "compact",
                  variant: "outlined"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        "item.className": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-column py-2" data-v-67a37c40${_scopeId}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-67a37c40${_scopeId}>${ssrInterpolate(item.name)}</span><span class="text-body-2 text-medium-emphasis" data-v-67a37c40${_scopeId}>${ssrInterpolate(item.branch)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex flex-column py-2" }, [
                createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.name), 1),
                createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.branch), 1)
              ])
            ];
          }
        }),
        "item.type": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-body-1 text-high-emphasis" data-v-67a37c40${_scopeId}>${ssrInterpolate(item.type)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.type), 1)
            ];
          }
        }),
        "item.roomSchedule": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-column align-start py-2" data-v-67a37c40${_scopeId}><span class="text-body-1 text-medium-emphasis mb-1" data-v-67a37c40${_scopeId}>${ssrInterpolate(item.schedule)}</span>`);
            _push2(ssrRenderComponent(VBtn, {
              variant: "text",
              color: "primary",
              size: "small",
              class: "px-0 font-weight-medium text-capitalize",
              density: "compact",
              onClick: ($event) => handleSeeSchedule(item)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` See Schedule `);
                } else {
                  return [
                    createTextVNode(" See Schedule ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex flex-column align-start py-2" }, [
                createVNode("span", { class: "text-body-1 text-medium-emphasis mb-1" }, toDisplayString(item.schedule), 1),
                createVNode(VBtn, {
                  variant: "text",
                  color: "primary",
                  size: "small",
                  class: "px-0 font-weight-medium text-capitalize",
                  density: "compact",
                  onClick: ($event) => handleSeeSchedule(item)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" See Schedule ")
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ])
            ];
          }
        }),
        "item.teachers": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center" data-v-67a37c40${_scopeId}><!--[-->`);
            ssrRenderList(item.teachers, (teacher, idx) => {
              _push2(ssrRenderComponent(VAvatar, {
                key: idx,
                size: "34",
                color: teacher.avatarColor || "grey-100",
                class: "border border-white",
                style: {
                  marginLeft: Number(idx) > 0 ? "-10px" : "0",
                  zIndex: 10 - Number(idx),
                  borderWidth: "2px !important"
                }
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VTooltip, {
                      activator: "parent",
                      location: "top"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(teacher.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(teacher.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<span class="text-caption font-weight-medium text-high-emphasis" data-v-67a37c40${_scopeId2}>${ssrInterpolate(teacher.initials)}</span>`);
                  } else {
                    return [
                      createVNode(VTooltip, {
                        activator: "parent",
                        location: "top"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(teacher.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(teacher.initials), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(item.teachers, (teacher, idx) => {
                  return openBlock(), createBlock(VAvatar, {
                    key: idx,
                    size: "34",
                    color: teacher.avatarColor || "grey-100",
                    class: "border border-white",
                    style: {
                      marginLeft: Number(idx) > 0 ? "-10px" : "0",
                      zIndex: 10 - Number(idx),
                      borderWidth: "2px !important"
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode(VTooltip, {
                        activator: "parent",
                        location: "top"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(teacher.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(teacher.initials), 1)
                    ]),
                    _: 2
                  }, 1032, ["color", "style"]);
                }), 128))
              ])
            ];
          }
        }),
        "item.students": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-body-1 text-high-emphasis" data-v-67a37c40${_scopeId}>${ssrInterpolate(item.studentsCount)} Students</span>`);
          } else {
            return [
              createVNode("span", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.studentsCount) + " Students", 1)
            ];
          }
        }),
        "item.status": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VChip, {
              color: getStatusColor(item.status),
              variant: "tonal",
              size: "small",
              class: "font-weight-medium"
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
                color: getStatusColor(item.status),
                variant: "tonal",
                size: "small",
                class: "font-weight-medium"
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
        modelValue: showScheduleDialog.value,
        "onUpdate:modelValue": ($event) => showScheduleDialog.value = $event,
        "max-width": "400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (selectedClass.value) {
              _push2(ssrRenderComponent(VCard, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, { class: "text-h6 font-weight-medium pa-4 pb-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Class Schedule `);
                        } else {
                          return [
                            createTextVNode(" Class Schedule ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardText, { class: "pa-4 pt-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="d-flex flex-column gap-3" data-v-67a37c40${_scopeId3}><div data-v-67a37c40${_scopeId3}><div class="text-caption text-medium-emphasis" data-v-67a37c40${_scopeId3}>Class Name</div><div class="text-body-1 font-weight-medium" data-v-67a37c40${_scopeId3}>${ssrInterpolate(selectedClass.value.name)}</div></div><div data-v-67a37c40${_scopeId3}><div class="text-caption text-medium-emphasis" data-v-67a37c40${_scopeId3}>Room</div><div class="text-body-1" data-v-67a37c40${_scopeId3}>${ssrInterpolate(selectedClass.value.room)}</div></div><div data-v-67a37c40${_scopeId3}><div class="text-caption text-medium-emphasis" data-v-67a37c40${_scopeId3}>Schedule</div><div class="text-body-1 font-weight-medium text-primary" data-v-67a37c40${_scopeId3}>${ssrInterpolate(selectedClass.value.detailedSchedule)}</div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex flex-column gap-3" }, [
                              createVNode("div", null, [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Class Name"),
                                createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(selectedClass.value.name), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Room"),
                                createVNode("div", { class: "text-body-1" }, toDisplayString(selectedClass.value.room), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Schedule"),
                                createVNode("div", { class: "text-body-1 font-weight-medium text-primary" }, toDisplayString(selectedClass.value.detailedSchedule), 1)
                              ])
                            ])
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
                            onClick: ($event) => showScheduleDialog.value = false
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
                              onClick: ($event) => showScheduleDialog.value = false
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
                          createTextVNode(" Class Schedule ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "pa-4 pt-2" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex flex-column gap-3" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Class Name"),
                              createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(selectedClass.value.name), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Room"),
                              createVNode("div", { class: "text-body-1" }, toDisplayString(selectedClass.value.room), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Schedule"),
                              createVNode("div", { class: "text-body-1 font-weight-medium text-primary" }, toDisplayString(selectedClass.value.detailedSchedule), 1)
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, { class: "pa-4" }, {
                        default: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "flat",
                            onClick: ($event) => showScheduleDialog.value = false
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
              selectedClass.value ? (openBlock(), createBlock(VCard, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-h6 font-weight-medium pa-4 pb-2" }, {
                    default: withCtx(() => [
                      createTextVNode(" Class Schedule ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-4 pt-2" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex flex-column gap-3" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "text-caption text-medium-emphasis" }, "Class Name"),
                          createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(selectedClass.value.name), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-caption text-medium-emphasis" }, "Room"),
                          createVNode("div", { class: "text-body-1" }, toDisplayString(selectedClass.value.room), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-caption text-medium-emphasis" }, "Schedule"),
                          createVNode("div", { class: "text-body-1 font-weight-medium text-primary" }, toDisplayString(selectedClass.value.detailedSchedule), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "pa-4" }, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "flat",
                        onClick: ($event) => showScheduleDialog.value = false
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: showDetailDialog.value,
        "onUpdate:modelValue": ($event) => showDetailDialog.value = $event,
        "max-width": "500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (selectedClass.value) {
              _push2(ssrRenderComponent(VCard, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, { class: "text-h6 font-weight-medium pa-4 pb-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Class Details `);
                        } else {
                          return [
                            createTextVNode(" Class Details ")
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
                                            _push7(`Class Name`);
                                          } else {
                                            return [
                                              createTextVNode("Class Name")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(selectedClass.value.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(selectedClass.value.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Class Name")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(selectedClass.value.name), 1)
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
                                            _push7(`Branch &amp; Location`);
                                          } else {
                                            return [
                                              createTextVNode("Branch & Location")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(selectedClass.value.branch)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(selectedClass.value.branch), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Branch & Location")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(selectedClass.value.branch), 1)
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
                                            _push7(`Class Type`);
                                          } else {
                                            return [
                                              createTextVNode("Class Type")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(selectedClass.value.type)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(selectedClass.value.type), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Class Type")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(selectedClass.value.type), 1)
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
                                            _push7(`Room &amp; Schedule`);
                                          } else {
                                            return [
                                              createTextVNode("Room & Schedule")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(selectedClass.value.room)} \u2022 ${ssrInterpolate(selectedClass.value.detailedSchedule)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(selectedClass.value.room) + " \u2022 " + toDisplayString(selectedClass.value.detailedSchedule), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Room & Schedule")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(selectedClass.value.room) + " \u2022 " + toDisplayString(selectedClass.value.detailedSchedule), 1)
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
                                            _push7(`Teachers`);
                                          } else {
                                            return [
                                              createTextVNode("Teachers")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(selectedClass.value.teachers.map((t) => t.name).join(", "))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(selectedClass.value.teachers.map((t) => t.name).join(", ")), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Teachers")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(selectedClass.value.teachers.map((t) => t.name).join(", ")), 1)
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
                                            _push7(`Students`);
                                          } else {
                                            return [
                                              createTextVNode("Students")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(selectedClass.value.studentsCount)} active students `);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(selectedClass.value.studentsCount) + " active students ", 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Students")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(selectedClass.value.studentsCount) + " active students ", 1)
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
                                            _push7(`Status`);
                                          } else {
                                            return [
                                              createTextVNode("Status")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, { class: "pt-1" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VChip, {
                                              color: getStatusColor(selectedClass.value.status),
                                              variant: "tonal",
                                              size: "small",
                                              class: "font-weight-medium"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(selectedClass.value.status)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(selectedClass.value.status), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VChip, {
                                                color: getStatusColor(selectedClass.value.status),
                                                variant: "tonal",
                                                size: "small",
                                                class: "font-weight-medium"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(selectedClass.value.status), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["color"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-caption text-medium-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Status")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, { class: "pt-1" }, {
                                          default: withCtx(() => [
                                            createVNode(VChip, {
                                              color: getStatusColor(selectedClass.value.status),
                                              variant: "tonal",
                                              size: "small",
                                              class: "font-weight-medium"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(selectedClass.value.status), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["color"])
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
                                          createTextVNode("Class Name")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(selectedClass.value.name), 1)
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
                                          createTextVNode("Branch & Location")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(selectedClass.value.branch), 1)
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
                                          createTextVNode("Class Type")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(selectedClass.value.type), 1)
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
                                          createTextVNode("Room & Schedule")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(selectedClass.value.room) + " \u2022 " + toDisplayString(selectedClass.value.detailedSchedule), 1)
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
                                          createTextVNode("Teachers")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(selectedClass.value.teachers.map((t) => t.name).join(", ")), 1)
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
                                          createTextVNode("Students")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(selectedClass.value.studentsCount) + " active students ", 1)
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
                                          createTextVNode("Status")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, { class: "pt-1" }, {
                                        default: withCtx(() => [
                                          createVNode(VChip, {
                                            color: getStatusColor(selectedClass.value.status),
                                            variant: "tonal",
                                            size: "small",
                                            class: "font-weight-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(selectedClass.value.status), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["color"])
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
                                        createTextVNode("Class Name")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(selectedClass.value.name), 1)
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
                                        createTextVNode("Branch & Location")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(selectedClass.value.branch), 1)
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
                                        createTextVNode("Class Type")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(selectedClass.value.type), 1)
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
                                        createTextVNode("Room & Schedule")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(selectedClass.value.room) + " \u2022 " + toDisplayString(selectedClass.value.detailedSchedule), 1)
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
                                        createTextVNode("Teachers")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(selectedClass.value.teachers.map((t) => t.name).join(", ")), 1)
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
                                        createTextVNode("Students")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(selectedClass.value.studentsCount) + " active students ", 1)
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
                                        createTextVNode("Status")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, { class: "pt-1" }, {
                                      default: withCtx(() => [
                                        createVNode(VChip, {
                                          color: getStatusColor(selectedClass.value.status),
                                          variant: "tonal",
                                          size: "small",
                                          class: "font-weight-medium"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(selectedClass.value.status), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["color"])
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
                          createTextVNode(" Class Details ")
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
                                      createTextVNode("Class Name")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(selectedClass.value.name), 1)
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
                                      createTextVNode("Branch & Location")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(selectedClass.value.branch), 1)
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
                                      createTextVNode("Class Type")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(selectedClass.value.type), 1)
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
                                      createTextVNode("Room & Schedule")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(selectedClass.value.room) + " \u2022 " + toDisplayString(selectedClass.value.detailedSchedule), 1)
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
                                      createTextVNode("Teachers")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(selectedClass.value.teachers.map((t) => t.name).join(", ")), 1)
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
                                      createTextVNode("Students")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(selectedClass.value.studentsCount) + " active students ", 1)
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
                                      createTextVNode("Status")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, { class: "pt-1" }, {
                                    default: withCtx(() => [
                                      createVNode(VChip, {
                                        color: getStatusColor(selectedClass.value.status),
                                        variant: "tonal",
                                        size: "small",
                                        class: "font-weight-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(selectedClass.value.status), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["color"])
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
              selectedClass.value ? (openBlock(), createBlock(VCard, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-h6 font-weight-medium pa-4 pb-2" }, {
                    default: withCtx(() => [
                      createTextVNode(" Class Details ")
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
                                  createTextVNode("Class Name")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "text-body-1 font-weight-medium text-high-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedClass.value.name), 1)
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
                                  createTextVNode("Branch & Location")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedClass.value.branch), 1)
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
                                  createTextVNode("Class Type")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedClass.value.type), 1)
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
                                  createTextVNode("Room & Schedule")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedClass.value.room) + " \u2022 " + toDisplayString(selectedClass.value.detailedSchedule), 1)
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
                                  createTextVNode("Teachers")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedClass.value.teachers.map((t) => t.name).join(", ")), 1)
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
                                  createTextVNode("Students")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "text-body-1 text-high-emphasis" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedClass.value.studentsCount) + " active students ", 1)
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
                                  createTextVNode("Status")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, { class: "pt-1" }, {
                                default: withCtx(() => [
                                  createVNode(VChip, {
                                    color: getStatusColor(selectedClass.value.status),
                                    variant: "tonal",
                                    size: "small",
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(selectedClass.value.status), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["color"])
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
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: showSnackbar.value,
        "onUpdate:modelValue": ($event) => showSnackbar.value = $event,
        color: snackbarColor.value,
        location: "top right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(snackbarText.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(snackbarText.value), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/classes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const classes = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-67a37c40"]]);

export { classes as default };
