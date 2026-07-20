import { defineComponent, ref, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/hookable/dist/index.mjs";
import { V as VAvatar } from "./VAvatar-B478BWXT.js";
import { V as VRow, a as VCol } from "./VRow-BRD4hy0P.js";
import { V as VCard } from "./VCard-B42eN0YV.js";
import { a as VIcon, V as VBtn, aW as _export_sfc } from "../server.mjs";
import { V as VTooltip } from "./VTooltip-vXFYhuMk.js";
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
import "./VOverlay-gAZb14KV.js";
import "./forwardRefs-Oip3fNRq.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "account",
  __ssrInlineRender: true,
  setup(__props) {
    const snackbar = ref(false);
    const snackbarText = ref("");
    const teacher = ref({
      id: "PH202201020",
      name: "Cristofer Mango",
      location: "Denpasar",
      avatar: "",
      initials: "CM",
      fullname: "Kristin Watson",
      generation: "2",
      email: "harvey@email.com",
      phone: "089182983232",
      birthdayAndAge: "26 Aug 1999 & 24",
      npwp: "-",
      gender: "Male",
      region: "Denpasar, Bali, Indonesia",
      address: "Jl. Segara Madu No.88, Kelan Abian",
      // Details
      branch: "Branch Renon",
      program: "Coding",
      language: "English, Indonesia",
      skill: "Coding",
      score: "20",
      baseTeacher: "20",
      note: "-",
      // Settings
      status: "Active",
      registeredDate: "January 01, 2023",
      level: "Gold",
      username: "kristinwatson"
    });
    const copyTeacherId = async () => {
      try {
        await (void 0).clipboard.writeText(teacher.value.id);
        snackbarText.value = "Teacher ID copied to clipboard!";
        snackbar.value = true;
      } catch (err) {
        snackbarText.value = `Teacher ID: ${teacher.value.id}`;
        snackbar.value = true;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-page" }, _attrs))} data-v-fb6b2e91><div class="d-flex align-center gap-4 mb-6" data-v-fb6b2e91>`);
      _push(ssrRenderComponent(VAvatar, {
        size: "48",
        color: "#F0EFF0",
        class: "teacher-avatar"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-h6 font-weight-medium text-high-emphasis" data-v-fb6b2e91${_scopeId}>${ssrInterpolate(teacher.value.initials)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, toDisplayString(teacher.value.initials), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="d-flex flex-column" data-v-fb6b2e91><h1 class="teacher-title text-h5 font-weight-medium mb-0" data-v-fb6b2e91>${ssrInterpolate(teacher.value.name)}</h1><span class="teacher-location text-body-1 text-medium-emphasis" data-v-fb6b2e91>${ssrInterpolate(teacher.value.location)}</span></div></div>`);
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
                    class: "detail-card pa-6 pb-3 mb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex align-center justify-space-between mb-3" data-v-fb6b2e91${_scopeId3}><div class="d-flex align-center gap-3" data-v-fb6b2e91${_scopeId3}><div class="icon-wrapper" data-v-fb6b2e91${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-book-read-line",
                          color: "primary",
                          size: "20"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><h2 class="card-title text-h6 font-weight-medium mb-0" data-v-fb6b2e91${_scopeId3}> Teacher Information </h2></div>`);
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          color: "primary",
                          class: "text-capitalize font-weight-medium px-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "ri-pencil-line",
                                size: "16",
                                class: "me-1"
                              }, null, _parent5, _scopeId4));
                              _push5(` Edit Teacher Info `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  icon: "ri-pencil-line",
                                  size: "16",
                                  class: "me-1"
                                }),
                                createTextVNode(" Edit Teacher Info ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="info-list pl-md-11" data-v-fb6b2e91${_scopeId3}><div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Teacher ID </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.id)}</div>`);
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "ri-file-copy-line",
                          variant: "text",
                          density: "compact",
                          color: "secondary",
                          size: "small",
                          class: "copy-btn",
                          onClick: copyTeacherId
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "ri-file-copy-line",
                                size: "18"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Copy Teacher ID `);
                                  } else {
                                    return [
                                      createTextVNode(" Copy Teacher ID ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  icon: "ri-file-copy-line",
                                  size: "18"
                                }),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Copy Teacher ID ")
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
                        _push4(`<div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Name </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.fullname)}</div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                        _push4(`<div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Generation </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.generation)}</div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                        _push4(`<div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Email </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.email)}</div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                        _push4(`<div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Phone </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.phone)}</div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                        _push4(`<div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Birthday &amp; Age </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.birthdayAndAge)}</div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                        _push4(`<div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> NPWP </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.npwp)}</div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                        _push4(`<div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Gender </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.gender)}</div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                        _push4(`<div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Region </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.region)}</div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                        _push4(`<div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Address </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.address)}</div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                            createVNode("div", { class: "d-flex align-center gap-3" }, [
                              createVNode("div", { class: "icon-wrapper" }, [
                                createVNode(VIcon, {
                                  icon: "ri-book-read-line",
                                  color: "primary",
                                  size: "20"
                                })
                              ]),
                              createVNode("h2", { class: "card-title text-h6 font-weight-medium mb-0" }, " Teacher Information ")
                            ]),
                            createVNode(VBtn, {
                              variant: "text",
                              color: "primary",
                              class: "text-capitalize font-weight-medium px-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-pencil-line",
                                  size: "16",
                                  class: "me-1"
                                }),
                                createTextVNode(" Edit Teacher Info ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "info-list pl-md-11" }, [
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Teacher ID "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.id), 1),
                              createVNode(VBtn, {
                                icon: "ri-file-copy-line",
                                variant: "text",
                                density: "compact",
                                color: "secondary",
                                size: "small",
                                class: "copy-btn",
                                onClick: copyTeacherId
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "ri-file-copy-line",
                                    size: "18"
                                  }),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "top"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Copy Teacher ID ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Name "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.fullname), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Generation "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.generation), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Email "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.email), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Phone "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.phone), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Birthday & Age "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.birthdayAndAge), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " NPWP "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.npwp), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Gender "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.gender), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Region "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.region), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Address "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.address), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCard, {
                    variant: "outlined",
                    class: "detail-card pa-6 pb-3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex align-center justify-space-between mb-3" data-v-fb6b2e91${_scopeId3}><div class="d-flex align-center gap-3" data-v-fb6b2e91${_scopeId3}><div class="icon-wrapper" data-v-fb6b2e91${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-contacts-line",
                          color: "primary",
                          size: "20"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><h2 class="card-title text-h6 font-weight-medium mb-0" data-v-fb6b2e91${_scopeId3}> Teacher Details </h2></div>`);
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          color: "primary",
                          class: "text-capitalize font-weight-medium px-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "ri-pencil-line",
                                size: "16",
                                class: "me-1"
                              }, null, _parent5, _scopeId4));
                              _push5(` Edit Teacher Details `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  icon: "ri-pencil-line",
                                  size: "16",
                                  class: "me-1"
                                }),
                                createTextVNode(" Edit Teacher Details ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="info-list pl-md-11" data-v-fb6b2e91${_scopeId3}><div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Branch </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.branch)}</div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                        _push4(`<div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Program </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.program)}</div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                        _push4(`<div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Language </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.language)}</div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                        _push4(`<div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Skill </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.skill)}</div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                        _push4(`<div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Score </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.score)}</div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                        _push4(`<div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Base Teacher </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.baseTeacher)}</div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                        _push4(`<div class="info-row d-flex align-center py-4" data-v-fb6b2e91${_scopeId3}><div class="info-label font-weight-medium" data-v-fb6b2e91${_scopeId3}> Note </div><div class="info-value flex-grow-1 font-weight-regular" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.note)}</div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                            createVNode("div", { class: "d-flex align-center gap-3" }, [
                              createVNode("div", { class: "icon-wrapper" }, [
                                createVNode(VIcon, {
                                  icon: "ri-contacts-line",
                                  color: "primary",
                                  size: "20"
                                })
                              ]),
                              createVNode("h2", { class: "card-title text-h6 font-weight-medium mb-0" }, " Teacher Details ")
                            ]),
                            createVNode(VBtn, {
                              variant: "text",
                              color: "primary",
                              class: "text-capitalize font-weight-medium px-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-pencil-line",
                                  size: "16",
                                  class: "me-1"
                                }),
                                createTextVNode(" Edit Teacher Details ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "info-list pl-md-11" }, [
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Branch "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.branch), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Program "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.program), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Language "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.language), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Skill "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.skill), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Score "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.score), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Base Teacher "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.baseTeacher), 1)
                            ]),
                            createVNode(VDivider, { class: "my-0" }),
                            createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                              createVNode("div", { class: "info-label font-weight-medium" }, " Note "),
                              createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.note), 1)
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
                      class: "detail-card pa-6 pb-3 mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                          createVNode("div", { class: "d-flex align-center gap-3" }, [
                            createVNode("div", { class: "icon-wrapper" }, [
                              createVNode(VIcon, {
                                icon: "ri-book-read-line",
                                color: "primary",
                                size: "20"
                              })
                            ]),
                            createVNode("h2", { class: "card-title text-h6 font-weight-medium mb-0" }, " Teacher Information ")
                          ]),
                          createVNode(VBtn, {
                            variant: "text",
                            color: "primary",
                            class: "text-capitalize font-weight-medium px-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-pencil-line",
                                size: "16",
                                class: "me-1"
                              }),
                              createTextVNode(" Edit Teacher Info ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "info-list pl-md-11" }, [
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Teacher ID "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.id), 1),
                            createVNode(VBtn, {
                              icon: "ri-file-copy-line",
                              variant: "text",
                              density: "compact",
                              color: "secondary",
                              size: "small",
                              class: "copy-btn",
                              onClick: copyTeacherId
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-file-copy-line",
                                  size: "18"
                                }),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Copy Teacher ID ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Name "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.fullname), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Generation "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.generation), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Email "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.email), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Phone "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.phone), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Birthday & Age "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.birthdayAndAge), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " NPWP "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.npwp), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Gender "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.gender), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Region "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.region), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Address "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.address), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCard, {
                      variant: "outlined",
                      class: "detail-card pa-6 pb-3"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                          createVNode("div", { class: "d-flex align-center gap-3" }, [
                            createVNode("div", { class: "icon-wrapper" }, [
                              createVNode(VIcon, {
                                icon: "ri-contacts-line",
                                color: "primary",
                                size: "20"
                              })
                            ]),
                            createVNode("h2", { class: "card-title text-h6 font-weight-medium mb-0" }, " Teacher Details ")
                          ]),
                          createVNode(VBtn, {
                            variant: "text",
                            color: "primary",
                            class: "text-capitalize font-weight-medium px-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-pencil-line",
                                size: "16",
                                class: "me-1"
                              }),
                              createTextVNode(" Edit Teacher Details ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "info-list pl-md-11" }, [
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Branch "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.branch), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Program "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.program), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Language "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.language), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Skill "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.skill), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Score "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.score), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Base Teacher "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.baseTeacher), 1)
                          ]),
                          createVNode(VDivider, { class: "my-0" }),
                          createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                            createVNode("div", { class: "info-label font-weight-medium" }, " Note "),
                            createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.note), 1)
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
                        _push4(`<div class="d-flex flex-column align-center justify-center mb-5" data-v-fb6b2e91${_scopeId3}><span class="text-body-1 font-weight-medium text-high-emphasis mb-3" data-v-fb6b2e91${_scopeId3}> Photo Profile </span><div class="profile-avatar-container relative" data-v-fb6b2e91${_scopeId3}>`);
                        _push4(ssrRenderComponent(VAvatar, {
                          size: "64",
                          color: "#F0EFF0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-h6 font-weight-medium text-high-emphasis" data-v-fb6b2e91${_scopeId4}>${ssrInterpolate(teacher.value.initials)}</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, toDisplayString(teacher.value.initials), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<button class="avatar-edit-badge d-flex align-center justify-center" data-v-fb6b2e91${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-pencil-line",
                          size: "14",
                          color: "high-emphasis"
                        }, null, _parent4, _scopeId3));
                        _push4(`</button></div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-5" }, null, _parent4, _scopeId3));
                        _push4(`<div class="d-flex align-center gap-3 mb-5" data-v-fb6b2e91${_scopeId3}><div class="icon-wrapper" data-v-fb6b2e91${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-settings-3-line",
                          color: "primary",
                          size: "20"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><h2 class="card-title text-body-1 font-weight-medium mb-0" data-v-fb6b2e91${_scopeId3}> Settings </h2></div><div class="settings-list d-flex flex-column gap-4 mb-6" data-v-fb6b2e91${_scopeId3}><div class="settings-item" data-v-fb6b2e91${_scopeId3}><div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1" data-v-fb6b2e91${_scopeId3}> Status </div><div class="d-flex align-center" data-v-fb6b2e91${_scopeId3}><span class="status-badge active-badge" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.status)}</span></div></div><div class="settings-item" data-v-fb6b2e91${_scopeId3}><div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1" data-v-fb6b2e91${_scopeId3}> Registered date </div><div class="settings-value text-body-1 text-medium-emphasis" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.registeredDate)}</div></div><div class="settings-item" data-v-fb6b2e91${_scopeId3}><div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1" data-v-fb6b2e91${_scopeId3}> Level </div><div class="d-flex align-center gap-1" data-v-fb6b2e91${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-vip-crown-line",
                          size: "18",
                          color: "warning"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="settings-value text-body-1 text-medium-emphasis" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.level)}</span></div></div><div class="settings-item" data-v-fb6b2e91${_scopeId3}><div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1" data-v-fb6b2e91${_scopeId3}> Username </div><div class="settings-value text-body-1 text-medium-emphasis" data-v-fb6b2e91${_scopeId3}>${ssrInterpolate(teacher.value.username)}</div></div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-5" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          color: "primary",
                          block: "",
                          class: "change-password-btn text-capitalize font-weight-medium rounded-pill"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "ri-lock-password-line",
                                size: "16",
                                class: "me-1"
                              }, null, _parent5, _scopeId4));
                              _push5(` Change Password `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  icon: "ri-lock-password-line",
                                  size: "16",
                                  class: "me-1"
                                }),
                                createTextVNode(" Change Password ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "d-flex flex-column align-center justify-center mb-5" }, [
                            createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis mb-3" }, " Photo Profile "),
                            createVNode("div", { class: "profile-avatar-container relative" }, [
                              createVNode(VAvatar, {
                                size: "64",
                                color: "#F0EFF0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, toDisplayString(teacher.value.initials), 1)
                                ]),
                                _: 1
                              }),
                              createVNode("button", { class: "avatar-edit-badge d-flex align-center justify-center" }, [
                                createVNode(VIcon, {
                                  icon: "ri-pencil-line",
                                  size: "14",
                                  color: "high-emphasis"
                                })
                              ])
                            ])
                          ]),
                          createVNode(VDivider, { class: "my-5" }),
                          createVNode("div", { class: "d-flex align-center gap-3 mb-5" }, [
                            createVNode("div", { class: "icon-wrapper" }, [
                              createVNode(VIcon, {
                                icon: "ri-settings-3-line",
                                color: "primary",
                                size: "20"
                              })
                            ]),
                            createVNode("h2", { class: "card-title text-body-1 font-weight-medium mb-0" }, " Settings ")
                          ]),
                          createVNode("div", { class: "settings-list d-flex flex-column gap-4 mb-6" }, [
                            createVNode("div", { class: "settings-item" }, [
                              createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Status "),
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode("span", { class: "status-badge active-badge" }, toDisplayString(teacher.value.status), 1)
                              ])
                            ]),
                            createVNode("div", { class: "settings-item" }, [
                              createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Registered date "),
                              createVNode("div", { class: "settings-value text-body-1 text-medium-emphasis" }, toDisplayString(teacher.value.registeredDate), 1)
                            ]),
                            createVNode("div", { class: "settings-item" }, [
                              createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Level "),
                              createVNode("div", { class: "d-flex align-center gap-1" }, [
                                createVNode(VIcon, {
                                  icon: "ri-vip-crown-line",
                                  size: "18",
                                  color: "warning"
                                }),
                                createVNode("span", { class: "settings-value text-body-1 text-medium-emphasis" }, toDisplayString(teacher.value.level), 1)
                              ])
                            ]),
                            createVNode("div", { class: "settings-item" }, [
                              createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Username "),
                              createVNode("div", { class: "settings-value text-body-1 text-medium-emphasis" }, toDisplayString(teacher.value.username), 1)
                            ])
                          ]),
                          createVNode(VDivider, { class: "my-5" }),
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "primary",
                            block: "",
                            class: "change-password-btn text-capitalize font-weight-medium rounded-pill"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-lock-password-line",
                                size: "16",
                                class: "me-1"
                              }),
                              createTextVNode(" Change Password ")
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
                      variant: "outlined",
                      class: "detail-card pa-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex flex-column align-center justify-center mb-5" }, [
                          createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis mb-3" }, " Photo Profile "),
                          createVNode("div", { class: "profile-avatar-container relative" }, [
                            createVNode(VAvatar, {
                              size: "64",
                              color: "#F0EFF0"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, toDisplayString(teacher.value.initials), 1)
                              ]),
                              _: 1
                            }),
                            createVNode("button", { class: "avatar-edit-badge d-flex align-center justify-center" }, [
                              createVNode(VIcon, {
                                icon: "ri-pencil-line",
                                size: "14",
                                color: "high-emphasis"
                              })
                            ])
                          ])
                        ]),
                        createVNode(VDivider, { class: "my-5" }),
                        createVNode("div", { class: "d-flex align-center gap-3 mb-5" }, [
                          createVNode("div", { class: "icon-wrapper" }, [
                            createVNode(VIcon, {
                              icon: "ri-settings-3-line",
                              color: "primary",
                              size: "20"
                            })
                          ]),
                          createVNode("h2", { class: "card-title text-body-1 font-weight-medium mb-0" }, " Settings ")
                        ]),
                        createVNode("div", { class: "settings-list d-flex flex-column gap-4 mb-6" }, [
                          createVNode("div", { class: "settings-item" }, [
                            createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Status "),
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode("span", { class: "status-badge active-badge" }, toDisplayString(teacher.value.status), 1)
                            ])
                          ]),
                          createVNode("div", { class: "settings-item" }, [
                            createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Registered date "),
                            createVNode("div", { class: "settings-value text-body-1 text-medium-emphasis" }, toDisplayString(teacher.value.registeredDate), 1)
                          ]),
                          createVNode("div", { class: "settings-item" }, [
                            createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Level "),
                            createVNode("div", { class: "d-flex align-center gap-1" }, [
                              createVNode(VIcon, {
                                icon: "ri-vip-crown-line",
                                size: "18",
                                color: "warning"
                              }),
                              createVNode("span", { class: "settings-value text-body-1 text-medium-emphasis" }, toDisplayString(teacher.value.level), 1)
                            ])
                          ]),
                          createVNode("div", { class: "settings-item" }, [
                            createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Username "),
                            createVNode("div", { class: "settings-value text-body-1 text-medium-emphasis" }, toDisplayString(teacher.value.username), 1)
                          ])
                        ]),
                        createVNode(VDivider, { class: "my-5" }),
                        createVNode(VBtn, {
                          variant: "outlined",
                          color: "primary",
                          block: "",
                          class: "change-password-btn text-capitalize font-weight-medium rounded-pill"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "ri-lock-password-line",
                              size: "16",
                              class: "me-1"
                            }),
                            createTextVNode(" Change Password ")
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
                    class: "detail-card pa-6 pb-3 mb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                        createVNode("div", { class: "d-flex align-center gap-3" }, [
                          createVNode("div", { class: "icon-wrapper" }, [
                            createVNode(VIcon, {
                              icon: "ri-book-read-line",
                              color: "primary",
                              size: "20"
                            })
                          ]),
                          createVNode("h2", { class: "card-title text-h6 font-weight-medium mb-0" }, " Teacher Information ")
                        ]),
                        createVNode(VBtn, {
                          variant: "text",
                          color: "primary",
                          class: "text-capitalize font-weight-medium px-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "ri-pencil-line",
                              size: "16",
                              class: "me-1"
                            }),
                            createTextVNode(" Edit Teacher Info ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "info-list pl-md-11" }, [
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Teacher ID "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.id), 1),
                          createVNode(VBtn, {
                            icon: "ri-file-copy-line",
                            variant: "text",
                            density: "compact",
                            color: "secondary",
                            size: "small",
                            class: "copy-btn",
                            onClick: copyTeacherId
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-file-copy-line",
                                size: "18"
                              }),
                              createVNode(VTooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Copy Teacher ID ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(VDivider, { class: "my-0" }),
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Name "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.fullname), 1)
                        ]),
                        createVNode(VDivider, { class: "my-0" }),
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Generation "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.generation), 1)
                        ]),
                        createVNode(VDivider, { class: "my-0" }),
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Email "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.email), 1)
                        ]),
                        createVNode(VDivider, { class: "my-0" }),
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Phone "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.phone), 1)
                        ]),
                        createVNode(VDivider, { class: "my-0" }),
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Birthday & Age "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.birthdayAndAge), 1)
                        ]),
                        createVNode(VDivider, { class: "my-0" }),
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " NPWP "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.npwp), 1)
                        ]),
                        createVNode(VDivider, { class: "my-0" }),
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Gender "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.gender), 1)
                        ]),
                        createVNode(VDivider, { class: "my-0" }),
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Region "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.region), 1)
                        ]),
                        createVNode(VDivider, { class: "my-0" }),
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Address "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.address), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCard, {
                    variant: "outlined",
                    class: "detail-card pa-6 pb-3"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center justify-space-between mb-3" }, [
                        createVNode("div", { class: "d-flex align-center gap-3" }, [
                          createVNode("div", { class: "icon-wrapper" }, [
                            createVNode(VIcon, {
                              icon: "ri-contacts-line",
                              color: "primary",
                              size: "20"
                            })
                          ]),
                          createVNode("h2", { class: "card-title text-h6 font-weight-medium mb-0" }, " Teacher Details ")
                        ]),
                        createVNode(VBtn, {
                          variant: "text",
                          color: "primary",
                          class: "text-capitalize font-weight-medium px-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "ri-pencil-line",
                              size: "16",
                              class: "me-1"
                            }),
                            createTextVNode(" Edit Teacher Details ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "info-list pl-md-11" }, [
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Branch "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.branch), 1)
                        ]),
                        createVNode(VDivider, { class: "my-0" }),
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Program "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.program), 1)
                        ]),
                        createVNode(VDivider, { class: "my-0" }),
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Language "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.language), 1)
                        ]),
                        createVNode(VDivider, { class: "my-0" }),
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Skill "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.skill), 1)
                        ]),
                        createVNode(VDivider, { class: "my-0" }),
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Score "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.score), 1)
                        ]),
                        createVNode(VDivider, { class: "my-0" }),
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Base Teacher "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.baseTeacher), 1)
                        ]),
                        createVNode(VDivider, { class: "my-0" }),
                        createVNode("div", { class: "info-row d-flex align-center py-4" }, [
                          createVNode("div", { class: "info-label font-weight-medium" }, " Note "),
                          createVNode("div", { class: "info-value flex-grow-1 font-weight-regular" }, toDisplayString(teacher.value.note), 1)
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
                      createVNode("div", { class: "d-flex flex-column align-center justify-center mb-5" }, [
                        createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis mb-3" }, " Photo Profile "),
                        createVNode("div", { class: "profile-avatar-container relative" }, [
                          createVNode(VAvatar, {
                            size: "64",
                            color: "#F0EFF0"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, toDisplayString(teacher.value.initials), 1)
                            ]),
                            _: 1
                          }),
                          createVNode("button", { class: "avatar-edit-badge d-flex align-center justify-center" }, [
                            createVNode(VIcon, {
                              icon: "ri-pencil-line",
                              size: "14",
                              color: "high-emphasis"
                            })
                          ])
                        ])
                      ]),
                      createVNode(VDivider, { class: "my-5" }),
                      createVNode("div", { class: "d-flex align-center gap-3 mb-5" }, [
                        createVNode("div", { class: "icon-wrapper" }, [
                          createVNode(VIcon, {
                            icon: "ri-settings-3-line",
                            color: "primary",
                            size: "20"
                          })
                        ]),
                        createVNode("h2", { class: "card-title text-body-1 font-weight-medium mb-0" }, " Settings ")
                      ]),
                      createVNode("div", { class: "settings-list d-flex flex-column gap-4 mb-6" }, [
                        createVNode("div", { class: "settings-item" }, [
                          createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Status "),
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode("span", { class: "status-badge active-badge" }, toDisplayString(teacher.value.status), 1)
                          ])
                        ]),
                        createVNode("div", { class: "settings-item" }, [
                          createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Registered date "),
                          createVNode("div", { class: "settings-value text-body-1 text-medium-emphasis" }, toDisplayString(teacher.value.registeredDate), 1)
                        ]),
                        createVNode("div", { class: "settings-item" }, [
                          createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Level "),
                          createVNode("div", { class: "d-flex align-center gap-1" }, [
                            createVNode(VIcon, {
                              icon: "ri-vip-crown-line",
                              size: "18",
                              color: "warning"
                            }),
                            createVNode("span", { class: "settings-value text-body-1 text-medium-emphasis" }, toDisplayString(teacher.value.level), 1)
                          ])
                        ]),
                        createVNode("div", { class: "settings-item" }, [
                          createVNode("div", { class: "settings-label text-caption font-weight-medium text-high-emphasis mb-1" }, " Username "),
                          createVNode("div", { class: "settings-value text-body-1 text-medium-emphasis" }, toDisplayString(teacher.value.username), 1)
                        ])
                      ]),
                      createVNode(VDivider, { class: "my-5" }),
                      createVNode(VBtn, {
                        variant: "outlined",
                        color: "primary",
                        block: "",
                        class: "change-password-btn text-capitalize font-weight-medium rounded-pill"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "ri-lock-password-line",
                            size: "16",
                            class: "me-1"
                          }),
                          createTextVNode(" Change Password ")
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
      }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const account = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fb6b2e91"]]);
export {
  account as default
};
