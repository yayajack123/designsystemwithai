import { defineComponent, ref, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { aW as _export_sfc, V as VBtn, a as VIcon } from './server.mjs';
import { V as VAvatar } from './VAvatar-B478BWXT.mjs';
import { V as VRow, a as VCol } from './VRow-BRD4hy0P.mjs';
import { V as VCard } from './VCard-B42eN0YV.mjs';
import { V as VTooltip } from './VTooltip-vXFYhuMk.mjs';
import { V as VDivider } from './VDivider-Cdypedjq.mjs';
import { V as VSnackbar } from './VSnackbar-DgaXWzkK.mjs';
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
import './VCardText-CaXtzNxg.mjs';
import './VOverlay-gAZb14KV.mjs';
import './forwardRefs-Oip3fNRq.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "student-detail",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const activeTab = ref("details");
    const snackbar = ref(false);
    const snackbarText = ref("");
    const student = ref({
      id: route.query.id || "1",
      name: "Cristofer mango",
      initials: "JS",
      countryFlag: "\u{1F1EE}\u{1F1E9}",
      countryName: "Indonesia",
      username: "PH20220102001",
      branch: "Philipine ASIA",
      fullname: "Cristofer mango",
      nickname: "Cristofer",
      birthday: "January 28, 2022",
      age: "11",
      gender: "Male",
      phoneNumber: "08918298392",
      school: "-",
      status: "Active",
      startDate: "Oct 11, 2023",
      course: "Beginner Intermediete"
    });
    const copyUsername = async () => {
      try {
        await (void 0).clipboard.writeText(student.value.username);
        snackbarText.value = "Username copied to clipboard!";
        snackbar.value = true;
      } catch (err) {
        snackbarText.value = `Username: ${student.value.username}`;
        snackbar.value = true;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "student-detail-page" }, _attrs))} data-v-03974e66><div class="d-flex align-center gap-4 mb-4" data-v-03974e66>`);
      _push(ssrRenderComponent(VBtn, {
        icon: "ri-arrow-left-line",
        variant: "outlined",
        color: "secondary",
        size: "small",
        class: "back-btn",
        to: { name: "students" }
      }, null, _parent));
      _push(`<div class="d-flex align-center gap-3" data-v-03974e66>`);
      _push(ssrRenderComponent(VAvatar, {
        size: "34",
        color: "#F0EFF0",
        class: "student-avatar"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-body-1 font-weight-regular text-high-emphasis" data-v-03974e66${_scopeId}>${ssrInterpolate(student.value.initials)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-body-1 font-weight-regular text-high-emphasis" }, toDisplayString(student.value.initials), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="d-flex flex-column" data-v-03974e66><h1 class="student-name text-h6 font-weight-medium mb-0" data-v-03974e66>${ssrInterpolate(student.value.fullname)}</h1><span class="student-country text-caption text-medium-emphasis" data-v-03974e66>${ssrInterpolate(student.value.countryFlag)} ${ssrInterpolate(student.value.countryName)}</span></div></div></div><div class="custom-tabs-container mb-6" data-v-03974e66><div class="d-flex gap-2 border-b" data-v-03974e66><button class="${ssrRenderClass([{ active: activeTab.value === "details" }, "custom-tab-btn"])}" data-v-03974e66> Student Details </button><button class="${ssrRenderClass([{ active: activeTab.value === "session" }, "custom-tab-btn"])}" data-v-03974e66> Session </button></div></div>`);
      if (activeTab.value === "details") {
        _push(`<div data-v-03974e66>`);
        _push(ssrRenderComponent(VRow, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "8",
                lg: "8"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, {
                      variant: "outlined",
                      class: "detail-card pa-6 pb-3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="d-flex align-center gap-3 mb-3" data-v-03974e66${_scopeId3}><div class="icon-wrapper" data-v-03974e66${_scopeId3}>`);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-contacts-line",
                            color: "primary",
                            size: "20"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><h2 class="card-title text-h6 font-weight-medium mb-0" data-v-03974e66${_scopeId3}> Basic Info </h2></div><div class="basic-info-list pl-md-11" data-v-03974e66${_scopeId3}><div class="info-row d-flex align-center py-4" data-v-03974e66${_scopeId3}><div class="info-label font-weight-medium" data-v-03974e66${_scopeId3}> Username </div><div class="info-value flex-grow-1 font-weight-regular" data-v-03974e66${_scopeId3}>${ssrInterpolate(student.value.username)}</div>`);
                          _push4(ssrRenderComponent(VBtn, {
                            icon: "ri-checkbox-multiple-blank-line",
                            variant: "text",
                            density: "compact",
                            color: "secondary",
                            size: "small",
                            class: "copy-btn",
                            onClick: copyUsername
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "ri-checkbox-multiple-blank-line",
                                  size: "18"
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Copy Username `);
                                    } else {
                                      return [
                                        createTextVNode(" Copy Username ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: "ri-checkbox-multiple-blank-line",
                                    size: "18"
                                  }),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "top"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Copy Username ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                          _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                          _push4(`<div class="info-row d-flex align-center py-4" data-v-03974e66${_scopeId3}><div class="info-label font-weight-medium" data-v-03974e66${_scopeId3}> Branch </div><div class="info-value flex-grow-1 font-weight-regular" data-v-03974e66${_scopeId3}>${ssrInterpolate(student.value.branch)}</div></div>`);
                          _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                          _push4(`<div class="info-row d-flex align-center py-4" data-v-03974e66${_scopeId3}><div class="info-label font-weight-medium" data-v-03974e66${_scopeId3}> Fullname </div><div class="info-value flex-grow-1 font-weight-regular" data-v-03974e66${_scopeId3}>${ssrInterpolate(student.value.fullname)}</div></div>`);
                          _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                          _push4(`<div class="info-row d-flex align-center py-4" data-v-03974e66${_scopeId3}><div class="info-label font-weight-medium" data-v-03974e66${_scopeId3}> Nickname </div><div class="info-value flex-grow-1 font-weight-regular" data-v-03974e66${_scopeId3}>${ssrInterpolate(student.value.nickname)}</div></div>`);
                          _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                          _push4(`<div class="info-row d-flex align-center py-4" data-v-03974e66${_scopeId3}><div class="info-label font-weight-medium" data-v-03974e66${_scopeId3}> Birthday </div><div class="info-value flex-grow-1 font-weight-regular" data-v-03974e66${_scopeId3}>${ssrInterpolate(student.value.birthday)}</div></div>`);
                          _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                          _push4(`<div class="info-row d-flex align-center py-4" data-v-03974e66${_scopeId3}><div class="info-label font-weight-medium" data-v-03974e66${_scopeId3}> Age </div><div class="info-value flex-grow-1 font-weight-regular" data-v-03974e66${_scopeId3}>${ssrInterpolate(student.value.age)}</div></div>`);
                          _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                          _push4(`<div class="info-row d-flex align-center py-4" data-v-03974e66${_scopeId3}><div class="info-label font-weight-medium" data-v-03974e66${_scopeId3}> Gender </div><div class="info-value flex-grow-1 font-weight-regular" data-v-03974e66${_scopeId3}>${ssrInterpolate(student.value.gender)}</div></div>`);
                          _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                          _push4(`<div class="info-row d-flex align-center py-4" data-v-03974e66${_scopeId3}><div class="info-label font-weight-medium" data-v-03974e66${_scopeId3}> Phone number </div><div class="info-value flex-grow-1 font-weight-regular" data-v-03974e66${_scopeId3}>${ssrInterpolate(student.value.phoneNumber)}</div></div>`);
                          _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                          _push4(`<div class="info-row d-flex align-center py-4" data-v-03974e66${_scopeId3}><div class="info-label font-weight-medium" data-v-03974e66${_scopeId3}> School </div><div class="info-value flex-grow-1 font-weight-regular text-secondary-emphasis" data-v-03974e66${_scopeId3}>${ssrInterpolate(student.value.school)}</div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex align-center gap-3 mb-3" }, [
                              createVNode("div", { class: "icon-wrapper" }, [
                                createVNode(VIcon, {
                                  icon: "ri-contacts-line",
                                  color: "primary",
                                  size: "20"
                                })
                              ]),
                              createVNode("h2", { class: "card-title text-h6 font-weight-medium mb-0" }, " Basic Info ")
                            ]),
                            createVNode("div", { class: "basic-info-list pl-md-11" }, [
                              createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                                createVNode("div", { class: "info-label font-weight-medium" }, " Username "),
                                createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.username), 1),
                                createVNode(VBtn, {
                                  icon: "ri-checkbox-multiple-blank-line",
                                  variant: "text",
                                  density: "compact",
                                  color: "secondary",
                                  size: "small",
                                  class: "copy-btn",
                                  onClick: copyUsername
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-checkbox-multiple-blank-line",
                                      size: "18"
                                    }),
                                    createVNode(VTooltip, {
                                      activator: "parent",
                                      location: "top"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Copy Username ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(VDivider, { class: "my-0" }),
                              createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                                createVNode("div", { class: "info-label font-weight-medium" }, " Branch "),
                                createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.branch), 1)
                              ]),
                              createVNode(VDivider, { class: "my-0" }),
                              createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                                createVNode("div", { class: "info-label font-weight-medium" }, " Fullname "),
                                createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.fullname), 1)
                              ]),
                              createVNode(VDivider, { class: "my-0" }),
                              createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                                createVNode("div", { class: "info-label font-weight-medium" }, " Nickname "),
                                createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.nickname), 1)
                              ]),
                              createVNode(VDivider, { class: "my-0" }),
                              createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                                createVNode("div", { class: "info-label font-weight-medium" }, " Birthday "),
                                createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.birthday), 1)
                              ]),
                              createVNode(VDivider, { class: "my-0" }),
                              createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                                createVNode("div", { class: "info-label font-weight-medium" }, " Age "),
                                createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.age), 1)
                              ]),
                              createVNode(VDivider, { class: "my-0" }),
                              createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                                createVNode("div", { class: "info-label font-weight-medium" }, " Gender "),
                                createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.gender), 1)
                              ]),
                              createVNode(VDivider, { class: "my-0" }),
                              createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                                createVNode("div", { class: "info-label font-weight-medium" }, " Phone number "),
                                createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.phoneNumber), 1)
                              ]),
                              createVNode(VDivider, { class: "my-0" }),
                              createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                                createVNode("div", { class: "info-label font-weight-medium" }, " School "),
                                createVNode("div", { class: "info-value flex-grow-1 font-weight-regular text-secondary-emphasis" }, toDisplayString(student.value.school), 1)
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
                        class: "detail-card pa-6 pb-3"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center gap-3 mb-3" }, [
                            createVNode("div", { class: "icon-wrapper" }, [
                              createVNode(VIcon, {
                                icon: "ri-contacts-line",
                                color: "primary",
                                size: "20"
                              })
                            ]),
                            createVNode("h2", { class: "card-title text-h6 font-weight-medium mb-0" }, " Basic Info ")
                          ]),
                          createVNode("div", { class: "basic-info-list pl-md-11" }, [
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Username "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.username), 1),
                              createVNode(VBtn, {
                                icon: "ri-checkbox-multiple-blank-line",
                                variant: "text",
                                density: "compact",
                                color: "secondary",
                                size: "small",
                                class: "copy-btn",
                                onClick: copyUsername
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "ri-checkbox-multiple-blank-line",
                                    size: "18"
                                  }),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "top"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Copy Username ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Branch "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.branch), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Fullname "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.fullname), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Nickname "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.nickname), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Birthday "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.birthday), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Age "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.age), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Gender "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.gender), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Phone number "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.phoneNumber), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " School "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular text-secondary-emphasis" }, toDisplayString(student.value.school), 1)
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
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "4",
                lg: "4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, {
                      variant: "outlined",
                      class: "detail-card pa-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="d-flex align-center gap-3 mb-6" data-v-03974e66${_scopeId3}><div class="icon-wrapper" data-v-03974e66${_scopeId3}>`);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-settings-2-line",
                            color: "primary",
                            size: "20"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><h2 class="card-title text-h6 font-weight-medium mb-0" data-v-03974e66${_scopeId3}> Settings </h2></div><div class="settings-list d-flex flex-column gap-5" data-v-03974e66${_scopeId3}><div class="settings-item" data-v-03974e66${_scopeId3}><div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1" data-v-03974e66${_scopeId3}> Student status </div><div class="d-flex align-center gap-2" data-v-03974e66${_scopeId3}><span class="status-dot green-dot" data-v-03974e66${_scopeId3}></span><span class="settings-value text-body-1 text-high-emphasis" data-v-03974e66${_scopeId3}>${ssrInterpolate(student.value.status)}</span></div></div><div class="settings-item" data-v-03974e66${_scopeId3}><div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1" data-v-03974e66${_scopeId3}> Country </div><div class="settings-value text-body-1 text-high-emphasis" data-v-03974e66${_scopeId3}>${ssrInterpolate(student.value.countryName)}</div></div><div class="settings-item" data-v-03974e66${_scopeId3}><div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1" data-v-03974e66${_scopeId3}> Start Date </div><div class="settings-value text-body-1 text-high-emphasis" data-v-03974e66${_scopeId3}>${ssrInterpolate(student.value.startDate)}</div></div><div class="settings-item" data-v-03974e66${_scopeId3}><div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1" data-v-03974e66${_scopeId3}> Course </div><div class="settings-value text-body-1 text-high-emphasis" data-v-03974e66${_scopeId3}>${ssrInterpolate(student.value.course)}</div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex align-center gap-3 mb-6" }, [
                              createVNode("div", { class: "icon-wrapper" }, [
                                createVNode(VIcon, {
                                  icon: "ri-settings-2-line",
                                  color: "primary",
                                  size: "20"
                                })
                              ]),
                              createVNode("h2", { class: "card-title text-h6 font-weight-medium mb-0" }, " Settings ")
                            ]),
                            createVNode("div", { class: "settings-list d-flex flex-column gap-5" }, [
                              createVNode("div", { class: "settings-item" }, [
                                createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Student status "),
                                createVNode("div", { class: "d-flex align-center gap-2" }, [
                                  createVNode("span", { class: "status-dot green-dot" }),
                                  createVNode("span", { class: "settings-value text-body-1 text-high-emphasis" }, toDisplayString(student.value.status), 1)
                                ])
                              ]),
                              createVNode("div", { class: "settings-item" }, [
                                createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Country "),
                                createVNode("div", { class: "settings-value text-body-1 text-high-emphasis" }, toDisplayString(student.value.countryName), 1)
                              ]),
                              createVNode("div", { class: "settings-item" }, [
                                createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Start Date "),
                                createVNode("div", { class: "settings-value text-body-1 text-high-emphasis" }, toDisplayString(student.value.startDate), 1)
                              ]),
                              createVNode("div", { class: "settings-item" }, [
                                createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Course "),
                                createVNode("div", { class: "settings-value text-body-1 text-high-emphasis" }, toDisplayString(student.value.course), 1)
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
                        class: "detail-card pa-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center gap-3 mb-6" }, [
                            createVNode("div", { class: "icon-wrapper" }, [
                              createVNode(VIcon, {
                                icon: "ri-settings-2-line",
                                color: "primary",
                                size: "20"
                              })
                            ]),
                            createVNode("h2", { class: "card-title text-h6 font-weight-medium mb-0" }, " Settings ")
                          ]),
                          createVNode("div", { class: "settings-list d-flex flex-column gap-5" }, [
                            createVNode("div", { class: "settings-item" }, [
                              createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Student status "),
                              createVNode("div", { class: "d-flex align-center gap-2" }, [
                                createVNode("span", { class: "status-dot green-dot" }),
                                createVNode("span", { class: "settings-value text-body-1 text-high-emphasis" }, toDisplayString(student.value.status), 1)
                              ])
                            ]),
                            createVNode("div", { class: "settings-item" }, [
                              createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Country "),
                              createVNode("div", { class: "settings-value text-body-1 text-high-emphasis" }, toDisplayString(student.value.countryName), 1)
                            ]),
                            createVNode("div", { class: "settings-item" }, [
                              createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Start Date "),
                              createVNode("div", { class: "settings-value text-body-1 text-high-emphasis" }, toDisplayString(student.value.startDate), 1)
                            ]),
                            createVNode("div", { class: "settings-item" }, [
                              createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Course "),
                              createVNode("div", { class: "settings-value text-body-1 text-high-emphasis" }, toDisplayString(student.value.course), 1)
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
                    createVNode(VCard, {
                      variant: "outlined",
                      class: "detail-card pa-6 pb-3"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center gap-3 mb-3" }, [
                          createVNode("div", { class: "icon-wrapper" }, [
                            createVNode(VIcon, {
                              icon: "ri-contacts-line",
                              color: "primary",
                              size: "20"
                            })
                          ]),
                          createVNode("h2", { class: "card-title text-h6 font-weight-medium mb-0" }, " Basic Info ")
                        ]),
                        createVNode("div", { class: "basic-info-list pl-md-11" }, [
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Username "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.username), 1),
                            createVNode(VBtn, {
                              icon: "ri-checkbox-multiple-blank-line",
                              variant: "text",
                              density: "compact",
                              color: "secondary",
                              size: "small",
                              class: "copy-btn",
                              onClick: copyUsername
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-checkbox-multiple-blank-line",
                                  size: "18"
                                }),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Copy Username ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Branch "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.branch), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Fullname "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.fullname), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Nickname "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.nickname), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Birthday "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.birthday), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Age "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.age), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Gender "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.gender), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Phone number "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(student.value.phoneNumber), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " School "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular text-secondary-emphasis" }, toDisplayString(student.value.school), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    })
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
                      class: "detail-card pa-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center gap-3 mb-6" }, [
                          createVNode("div", { class: "icon-wrapper" }, [
                            createVNode(VIcon, {
                              icon: "ri-settings-2-line",
                              color: "primary",
                              size: "20"
                            })
                          ]),
                          createVNode("h2", { class: "card-title text-h6 font-weight-medium mb-0" }, " Settings ")
                        ]),
                        createVNode("div", { class: "settings-list d-flex flex-column gap-5" }, [
                          createVNode("div", { class: "settings-item" }, [
                            createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Student status "),
                            createVNode("div", { class: "d-flex align-center gap-2" }, [
                              createVNode("span", { class: "status-dot green-dot" }),
                              createVNode("span", { class: "settings-value text-body-1 text-high-emphasis" }, toDisplayString(student.value.status), 1)
                            ])
                          ]),
                          createVNode("div", { class: "settings-item" }, [
                            createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Country "),
                            createVNode("div", { class: "settings-value text-body-1 text-high-emphasis" }, toDisplayString(student.value.countryName), 1)
                          ]),
                          createVNode("div", { class: "settings-item" }, [
                            createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Start Date "),
                            createVNode("div", { class: "settings-value text-body-1 text-high-emphasis" }, toDisplayString(student.value.startDate), 1)
                          ]),
                          createVNode("div", { class: "settings-item" }, [
                            createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Course "),
                            createVNode("div", { class: "settings-value text-body-1 text-high-emphasis" }, toDisplayString(student.value.course), 1)
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
      } else if (activeTab.value === "session") {
        _push(`<div data-v-03974e66>`);
        _push(ssrRenderComponent(VCard, {
          variant: "outlined",
          class: "detail-card pa-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center py-8" data-v-03974e66${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                icon: "ri-calendar-event-line",
                size: "48",
                color: "medium-emphasis",
                class: "mb-3"
              }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-h6 font-weight-medium text-high-emphasis mb-1" data-v-03974e66${_scopeId}> Student Sessions </h3><p class="text-body-2 text-medium-emphasis mb-0" data-v-03974e66${_scopeId}> Session history for ${ssrInterpolate(student.value.fullname)} will appear here. </p></div>`);
            } else {
              return [
                createVNode("div", { class: "text-center py-8" }, [
                  createVNode(VIcon, {
                    icon: "ri-calendar-event-line",
                    size: "48",
                    color: "medium-emphasis",
                    class: "mb-3"
                  }),
                  createVNode("h3", { class: "text-h6 font-weight-medium text-high-emphasis mb-1" }, " Student Sessions "),
                  createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, " Session history for " + toDisplayString(student.value.fullname) + " will appear here. ", 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: snackbar.value,
        "onUpdate:modelValue": ($event) => snackbar.value = $event,
        timeout: "2000",
        color: "success",
        location: "bottom right"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student-detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const studentDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03974e66"]]);

export { studentDetail as default };
