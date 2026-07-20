import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as _sfc_main$6 } from './UiSectionHeader-BGB1bAkA.mjs';
import { defineComponent, withCtx, createVNode, ref, withAsyncContext, unref, createBlock, createCommentVNode, createTextVNode, openBlock, toDisplayString, isRef, withModifiers, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderTeleport, ssrRenderList } from 'vue/server-renderer';
import { V as VDialog } from './VDialog-B0Ad2yj9.mjs';
import { V as VCard, c as VCardItem, a as VCardTitle } from './VCard-B42eN0YV.mjs';
import { V as VCardText } from './VCardText-CaXtzNxg.mjs';
import { aW as _export_sfc, u as useNuxtApp, V as VBtn, a as VIcon, aU as useAuthStore } from './server.mjs';
import { u as useValidation, _ as _sfc_main$7, a as accountValidations, p as profileValidations, b as changePasswordValidations } from './account-settings-CFMqtpMU.mjs';
import { a as VImg } from './VAvatar-B478BWXT.mjs';
import { V as VRow, a as VCol } from './VRow-BRD4hy0P.mjs';
import { V as VTextField } from './VTextField-jMGfwBDn.mjs';
import { V as VList, a as VListItem, b as VListItemTitle } from './VList-BNtS0p6J.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './VTooltip-vXFYhuMk.mjs';
import './VOverlay-gAZb14KV.mjs';
import './forwardRefs-Oip3fNRq.mjs';
import './dialog-transition-CDwwEBKm.mjs';
import 'vue-router';
import 'vue-devtools-stub';
import '@antfu/utils';
import './VAutocomplete-sPCSJtya.mjs';
import './filter-BIe-IBmp.mjs';
import './VMenu-C4ct7Xz7.mjs';
import './VCheckboxBtn-BB8tUmIP.mjs';
import './VSelectionControl-B1a3mcFW.mjs';
import './VChip-C0dLsv_T.mjs';
import './index-CSomYp-Z.mjs';
import 'yup';
import './VDivider-Cdypedjq.mjs';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ConfirmDialog",
  __ssrInlineRender: true,
  props: {
    confirmationQuestion: {},
    isDialogVisible: { type: Boolean },
    confirmTitle: {},
    confirmMsg: {},
    cancelTitle: {},
    cancelMsg: {}
  },
  emits: ["update:isDialogVisible", "confirm"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const unsubscribed = ref(false);
    const cancelled = ref(false);
    const updateModelValue = (val) => {
      emit("update:isDialogVisible", val);
    };
    const onConfirmation = () => {
      emit("confirm", true);
      updateModelValue(false);
      unsubscribed.value = true;
    };
    const onCancel = () => {
      emit("confirm", false);
      emit("update:isDialogVisible", false);
      cancelled.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VDialog, {
        "max-width": "500",
        "model-value": props.isDialogVisible,
        "onUpdate:modelValue": updateModelValue
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "text-center px-10 py-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "",
                          variant: "outlined",
                          color: "warning",
                          class: "my-4",
                          size: "x-large"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-4xl"${_scopeId4}>!</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-4xl" }, "!")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<h6 class="text-lg font-weight-medium"${_scopeId3}>${ssrInterpolate(props.confirmationQuestion)}</h6>`);
                      } else {
                        return [
                          createVNode(VBtn, {
                            icon: "",
                            variant: "outlined",
                            color: "warning",
                            class: "my-4",
                            size: "x-large"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-4xl" }, "!")
                            ]),
                            _: 1
                          }),
                          createVNode("h6", { class: "text-lg font-weight-medium" }, toDisplayString(props.confirmationQuestion), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex align-center justify-center gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "elevated",
                          onClick: onConfirmation
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Confirm `);
                            } else {
                              return [
                                createTextVNode(" Confirm ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "secondary",
                          variant: "outlined",
                          onClick: onCancel
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Cancel `);
                            } else {
                              return [
                                createTextVNode(" Cancel ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "elevated",
                            onClick: onConfirmation
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Confirm ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "secondary",
                            variant: "outlined",
                            onClick: onCancel
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
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
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "",
                          variant: "outlined",
                          color: "warning",
                          class: "my-4",
                          size: "x-large"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-4xl" }, "!")
                          ]),
                          _: 1
                        }),
                        createVNode("h6", { class: "text-lg font-weight-medium" }, toDisplayString(props.confirmationQuestion), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "d-flex align-center justify-center gap-4" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "elevated",
                          onClick: onConfirmation
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Confirm ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "secondary",
                          variant: "outlined",
                          onClick: onCancel
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
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
              createVNode(VCard, { class: "text-center px-10 py-6" }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        icon: "",
                        variant: "outlined",
                        color: "warning",
                        class: "my-4",
                        size: "x-large"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-4xl" }, "!")
                        ]),
                        _: 1
                      }),
                      createVNode("h6", { class: "text-lg font-weight-medium" }, toDisplayString(props.confirmationQuestion), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "d-flex align-center justify-center gap-4" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "elevated",
                        onClick: onConfirmation
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Confirm ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "secondary",
                        variant: "outlined",
                        onClick: onCancel
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(unsubscribed),
        "onUpdate:modelValue": ($event) => isRef(unsubscribed) ? unsubscribed.value = $event : null,
        "max-width": "500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "text-center px-10 py-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "",
                          variant: "outlined",
                          color: "success",
                          class: "my-4",
                          size: "x-large"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-xl"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VIcon, { icon: "ri-check-line" }, null, _parent5, _scopeId4));
                              _push5(`</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-xl" }, [
                                  createVNode(VIcon, { icon: "ri-check-line" })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<h1 class="text-h4 mb-4"${_scopeId3}>${ssrInterpolate(props.confirmTitle)}</h1><p${_scopeId3}>${ssrInterpolate(props.confirmMsg)}</p>`);
                        _push4(ssrRenderComponent(VBtn, {
                          color: "success",
                          onClick: ($event) => unsubscribed.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Ok `);
                            } else {
                              return [
                                createTextVNode(" Ok ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            icon: "",
                            variant: "outlined",
                            color: "success",
                            class: "my-4",
                            size: "x-large"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-xl" }, [
                                createVNode(VIcon, { icon: "ri-check-line" })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode("h1", { class: "text-h4 mb-4" }, toDisplayString(props.confirmTitle), 1),
                          createVNode("p", null, toDisplayString(props.confirmMsg), 1),
                          createVNode(VBtn, {
                            color: "success",
                            onClick: ($event) => unsubscribed.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Ok ")
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
                    createVNode(VCardText, { class: "text-center px-10 py-6" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "",
                          variant: "outlined",
                          color: "success",
                          class: "my-4",
                          size: "x-large"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-xl" }, [
                              createVNode(VIcon, { icon: "ri-check-line" })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode("h1", { class: "text-h4 mb-4" }, toDisplayString(props.confirmTitle), 1),
                        createVNode("p", null, toDisplayString(props.confirmMsg), 1),
                        createVNode(VBtn, {
                          color: "success",
                          onClick: ($event) => unsubscribed.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Ok ")
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
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "text-center px-10 py-6" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        icon: "",
                        variant: "outlined",
                        color: "success",
                        class: "my-4",
                        size: "x-large"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-xl" }, [
                            createVNode(VIcon, { icon: "ri-check-line" })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode("h1", { class: "text-h4 mb-4" }, toDisplayString(props.confirmTitle), 1),
                      createVNode("p", null, toDisplayString(props.confirmMsg), 1),
                      createVNode(VBtn, {
                        color: "success",
                        onClick: ($event) => unsubscribed.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Ok ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(cancelled),
        "onUpdate:modelValue": ($event) => isRef(cancelled) ? cancelled.value = $event : null,
        "max-width": "500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "text-center px-10 py-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "",
                          variant: "outlined",
                          color: "error",
                          class: "my-4",
                          size: "x-large"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-2xl font-weight-light"${_scopeId4}>X</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-2xl font-weight-light" }, "X")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<h1 class="text-h4 mb-4"${_scopeId3}>${ssrInterpolate(props.cancelTitle)}</h1><p${_scopeId3}>${ssrInterpolate(props.cancelMsg)}</p>`);
                        _push4(ssrRenderComponent(VBtn, {
                          color: "success",
                          onClick: ($event) => cancelled.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Ok `);
                            } else {
                              return [
                                createTextVNode(" Ok ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            icon: "",
                            variant: "outlined",
                            color: "error",
                            class: "my-4",
                            size: "x-large"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-2xl font-weight-light" }, "X")
                            ]),
                            _: 1
                          }),
                          createVNode("h1", { class: "text-h4 mb-4" }, toDisplayString(props.cancelTitle), 1),
                          createVNode("p", null, toDisplayString(props.cancelMsg), 1),
                          createVNode(VBtn, {
                            color: "success",
                            onClick: ($event) => cancelled.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Ok ")
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
                    createVNode(VCardText, { class: "text-center px-10 py-6" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "",
                          variant: "outlined",
                          color: "error",
                          class: "my-4",
                          size: "x-large"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-2xl font-weight-light" }, "X")
                          ]),
                          _: 1
                        }),
                        createVNode("h1", { class: "text-h4 mb-4" }, toDisplayString(props.cancelTitle), 1),
                        createVNode("p", null, toDisplayString(props.cancelMsg), 1),
                        createVNode(VBtn, {
                          color: "success",
                          onClick: ($event) => cancelled.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Ok ")
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
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "text-center px-10 py-6" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        icon: "",
                        variant: "outlined",
                        color: "error",
                        class: "my-4",
                        size: "x-large"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-2xl font-weight-light" }, "X")
                        ]),
                        _: 1
                      }),
                      createVNode("h1", { class: "text-h4 mb-4" }, toDisplayString(props.cancelTitle), 1),
                      createVNode("p", null, toDisplayString(props.cancelMsg), 1),
                      createVNode(VBtn, {
                        color: "success",
                        onClick: ($event) => cancelled.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Ok ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dialogs/ConfirmDialog.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AVATAR_1 = "" + buildAssetsURL("avatar-1.CxOKCzdw.png");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AccountAvatar",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $api } = useNuxtApp();
    const inputs = ref({
      avatarImg: "",
      name: "",
      email: "",
      role: null
    });
    const {
      errors
    } = useValidation(inputs, {
      schema: accountValidations
    });
    const roles = ref([]);
    const fetchProfile = async () => {
      const { data: profileData } = await $api.profile.getProfile();
      if (profileData.value) {
        const profile = profileData.value.data;
        inputs.value = {
          avatarImg: profile.photo,
          name: profile.name,
          email: profile.email,
          role: profile.role
        };
      }
    };
    const fetchRole = async () => {
      const { data: roleData } = await $api.auth.getRole();
      if (roleData.value) {
        const role = roleData.value.data;
        const mappedRole = role.map((r) => r.name);
        roles.value = mappedRole;
      }
    };
    [__temp, __restore] = withAsyncContext(() => fetchProfile()), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => fetchRole()), await __temp, __restore();
    const refInputEl = ref();
    const isConfirmDialogOpen = ref(false);
    const changeAvatar = (file) => {
      const fileReader = new FileReader();
      const { files } = file.target;
      if (files && files.length) {
        fileReader.readAsDataURL(files[0]);
        fileReader.onload = () => {
          if (typeof fileReader.result === "string")
            inputs.value.avatarImg = fileReader.result;
        };
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ConfirmDialog = _sfc_main$5;
      _push(`<!--[--><form>`);
      _push(ssrRenderComponent(VCard, { class: "mb-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class=""${_scopeId2}>`);
                  _push3(ssrRenderComponent(VImg, {
                    "aspect-ratio": "1/1",
                    cover: "",
                    src: unref(inputs).avatarImg || unref(AVATAR_1),
                    class: [{ "invalid-border": unref(errors).avatarImg }, "mb-4"],
                    rounded: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-column justify-center gap-4"${_scopeId2}><div class="d-flex flex-wrap gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    block: "",
                    color: "primary",
                    variant: "outlined",
                    onClick: ($event) => {
                      var _a;
                      return (_a = unref(refInputEl)) == null ? void 0 : _a.click();
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-upload-cloud-line",
                          start: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="d-none d-sm-block"${_scopeId3}>Upload new photo</span>`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: "ri-upload-cloud-line",
                            start: ""
                          }),
                          createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<input type="file" name="file" accept=".jpeg,.png,.jpg" hidden${_scopeId2}></div><div${_scopeId2}><p class="text-body-1 mb-0 text-center"${_scopeId2}> Allowed JPG or PNG.<br${_scopeId2}>Max size of 800K </p>`);
                  if (unref(errors).avatarImg) {
                    _push3(`<p class="text-error mb-0"${_scopeId2}><small${_scopeId2}>${ssrInterpolate(unref(errors).avatarImg)}</small></p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "" }, [
                      createVNode(VImg, {
                        "aspect-ratio": "1/1",
                        cover: "",
                        src: unref(inputs).avatarImg || unref(AVATAR_1),
                        class: [{ "invalid-border": unref(errors).avatarImg }, "mb-4"],
                        rounded: ""
                      }, null, 8, ["src", "class"]),
                      createVNode("div", { class: "d-flex flex-column justify-center gap-4" }, [
                        createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                          createVNode(VBtn, {
                            block: "",
                            color: "primary",
                            variant: "outlined",
                            onClick: ($event) => {
                              var _a;
                              return (_a = unref(refInputEl)) == null ? void 0 : _a.click();
                            }
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-upload-cloud-line",
                                start: ""
                              }),
                              createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode("input", {
                            ref_key: "refInputEl",
                            ref: refInputEl,
                            type: "file",
                            name: "file",
                            accept: ".jpeg,.png,.jpg",
                            hidden: "",
                            onInput: changeAvatar
                          }, null, 544)
                        ]),
                        createVNode("div", null, [
                          createVNode("p", { class: "text-body-1 mb-0 text-center" }, [
                            createTextVNode(" Allowed JPG or PNG."),
                            createVNode("br"),
                            createTextVNode("Max size of 800K ")
                          ]),
                          unref(errors).avatarImg ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-error mb-0"
                          }, [
                            createVNode("small", null, toDisplayString(unref(errors).avatarImg), 1)
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "" }, [
                    createVNode(VImg, {
                      "aspect-ratio": "1/1",
                      cover: "",
                      src: unref(inputs).avatarImg || unref(AVATAR_1),
                      class: [{ "invalid-border": unref(errors).avatarImg }, "mb-4"],
                      rounded: ""
                    }, null, 8, ["src", "class"]),
                    createVNode("div", { class: "d-flex flex-column justify-center gap-4" }, [
                      createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                        createVNode(VBtn, {
                          block: "",
                          color: "primary",
                          variant: "outlined",
                          onClick: ($event) => {
                            var _a;
                            return (_a = unref(refInputEl)) == null ? void 0 : _a.click();
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "ri-upload-cloud-line",
                              start: ""
                            }),
                            createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode("input", {
                          ref_key: "refInputEl",
                          ref: refInputEl,
                          type: "file",
                          name: "file",
                          accept: ".jpeg,.png,.jpg",
                          hidden: "",
                          onInput: changeAvatar
                        }, null, 544)
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-body-1 mb-0 text-center" }, [
                          createTextVNode(" Allowed JPG or PNG."),
                          createVNode("br"),
                          createTextVNode("Max size of 800K ")
                        ]),
                        unref(errors).avatarImg ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-error mb-0"
                        }, [
                          createVNode("small", null, toDisplayString(unref(errors).avatarImg), 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_ConfirmDialog, {
          isDialogVisible: unref(isConfirmDialogOpen),
          "onUpdate:isDialogVisible": ($event) => isRef(isConfirmDialogOpen) ? isConfirmDialogOpen.value = $event : null,
          "confirmation-question": "Are you sure you want to deactivate your account?",
          "confirm-title": "Deactivated!",
          "confirm-msg": "Your account has been deactivated successfully.",
          "cancel-title": "Cancelled",
          "cancel-msg": "Account Deactivation Cancelled!"
        }, null, _parent));
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/account-settings/AccountAvatar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AccountSettings",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useAuthStore();
    const { $api } = useNuxtApp();
    const inputs = ref({
      name: "",
      email: "",
      role: null
    });
    const {
      errors,
      resetForm
    } = useValidation(inputs, {
      schema: profileValidations
    });
    const roles = ref([]);
    const fetchRoleData = async () => {
      const response = await $api.auth.getRole();
      return {
        data: response.data.map((role) => ({
          id: role.id,
          name: role.name
        })),
        meta: response.meta
      };
    };
    const fetchProfile = async () => {
      const { data: profileData } = await $api.profile.getProfile();
      if (profileData.value) {
        const profile = profileData.value.data;
        inputs.value = {
          avatarImg: profile.photo,
          name: profile.name,
          email: profile.email,
          role: profile.role
        };
      }
    };
    const fetchRole = async () => {
      const { data: roleData } = await $api.auth.getRole();
      if (roleData.value) {
        const role = roleData.value.data;
        const mappedRole = role.map((r) => r.name);
        roles.value = mappedRole;
      }
    };
    [__temp, __restore] = withAsyncContext(() => fetchProfile()), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => fetchRole()), await __temp, __restore();
    const isConfirmDialogOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiAutoComplete = _sfc_main$7;
      const _component_ConfirmDialog = _sfc_main$5;
      _push(`<!--[--><form>`);
      _push(ssrRenderComponent(VCard, { class: "mb-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { class: "pb-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Edit Profile`);
                      } else {
                        return [
                          createTextVNode("Edit Profile")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Edit Profile")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(inputs).name,
                                "onUpdate:modelValue": ($event) => unref(inputs).name = $event,
                                placeholder: "John",
                                label: "Name",
                                "error-messages": unref(errors).name
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: unref(inputs).name,
                                  "onUpdate:modelValue": ($event) => unref(inputs).name = $event,
                                  placeholder: "John",
                                  label: "Name",
                                  "error-messages": unref(errors).name
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(inputs).email,
                                "onUpdate:modelValue": ($event) => unref(inputs).email = $event,
                                label: "E-mail",
                                type: "email",
                                "error-messages": unref(errors).email
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: unref(inputs).email,
                                  "onUpdate:modelValue": ($event) => unref(inputs).email = $event,
                                  label: "E-mail",
                                  type: "email",
                                  "error-messages": unref(errors).email
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiAutoComplete, {
                                modelValue: unref(inputs).role,
                                "onUpdate:modelValue": ($event) => unref(inputs).role = $event,
                                disabled: "",
                                label: "Role",
                                callback: fetchRoleData,
                                "error-messages": unref(errors).role,
                                "item-title": "name",
                                "item-value": "id",
                                placeholder: "Select Role"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiAutoComplete, {
                                  modelValue: unref(inputs).role,
                                  "onUpdate:modelValue": ($event) => unref(inputs).role = $event,
                                  disabled: "",
                                  label: "Role",
                                  callback: fetchRoleData,
                                  "error-messages": unref(errors).role,
                                  "item-title": "name",
                                  "item-value": "id",
                                  placeholder: "Select Role"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "d-flex flex-wrap gap-4 justify-end"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                type: "reset",
                                onClick: unref(resetForm)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Reset Inputs `);
                                  } else {
                                    return [
                                      createTextVNode(" Reset Inputs ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, { type: "submit" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Save changes `);
                                  } else {
                                    return [
                                      createTextVNode(" Save changes ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  type: "reset",
                                  onClick: withModifiers(unref(resetForm), ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Reset Inputs ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, { type: "submit" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Save changes ")
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
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(inputs).name,
                                "onUpdate:modelValue": ($event) => unref(inputs).name = $event,
                                placeholder: "John",
                                label: "Name",
                                "error-messages": unref(errors).name
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(inputs).email,
                                "onUpdate:modelValue": ($event) => unref(inputs).email = $event,
                                label: "E-mail",
                                type: "email",
                                "error-messages": unref(errors).email
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiAutoComplete, {
                                modelValue: unref(inputs).role,
                                "onUpdate:modelValue": ($event) => unref(inputs).role = $event,
                                disabled: "",
                                label: "Role",
                                callback: fetchRoleData,
                                "error-messages": unref(errors).role,
                                "item-title": "name",
                                "item-value": "id",
                                placeholder: "Select Role"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "d-flex flex-wrap gap-4 justify-end"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                type: "reset",
                                onClick: withModifiers(unref(resetForm), ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Reset Inputs ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VBtn, { type: "submit" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Save changes ")
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
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: unref(inputs).name,
                              "onUpdate:modelValue": ($event) => unref(inputs).name = $event,
                              placeholder: "John",
                              label: "Name",
                              "error-messages": unref(errors).name
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: unref(inputs).email,
                              "onUpdate:modelValue": ($event) => unref(inputs).email = $event,
                              label: "E-mail",
                              type: "email",
                              "error-messages": unref(errors).email
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiAutoComplete, {
                              modelValue: unref(inputs).role,
                              "onUpdate:modelValue": ($event) => unref(inputs).role = $event,
                              disabled: "",
                              label: "Role",
                              callback: fetchRoleData,
                              "error-messages": unref(errors).role,
                              "item-title": "name",
                              "item-value": "id",
                              placeholder: "Select Role"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          class: "d-flex flex-wrap gap-4 justify-end"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              color: "secondary",
                              variant: "outlined",
                              type: "reset",
                              onClick: withModifiers(unref(resetForm), ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Reset Inputs ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode(" Save changes ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, { class: "pb-6" }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Edit Profile")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(inputs).name,
                            "onUpdate:modelValue": ($event) => unref(inputs).name = $event,
                            placeholder: "John",
                            label: "Name",
                            "error-messages": unref(errors).name
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(inputs).email,
                            "onUpdate:modelValue": ($event) => unref(inputs).email = $event,
                            label: "E-mail",
                            type: "email",
                            "error-messages": unref(errors).email
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiAutoComplete, {
                            modelValue: unref(inputs).role,
                            "onUpdate:modelValue": ($event) => unref(inputs).role = $event,
                            disabled: "",
                            label: "Role",
                            callback: fetchRoleData,
                            "error-messages": unref(errors).role,
                            "item-title": "name",
                            "item-value": "id",
                            placeholder: "Select Role"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "d-flex flex-wrap gap-4 justify-end"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            color: "secondary",
                            variant: "outlined",
                            type: "reset",
                            onClick: withModifiers(unref(resetForm), ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset Inputs ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode(" Save changes ")
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
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_ConfirmDialog, {
          isDialogVisible: unref(isConfirmDialogOpen),
          "onUpdate:isDialogVisible": ($event) => isRef(isConfirmDialogOpen) ? isConfirmDialogOpen.value = $event : null,
          "confirmation-question": "Are you sure you want to deactivate your account?",
          "confirm-title": "Deactivated!",
          "confirm-msg": "Your account has been deactivated successfully.",
          "cancel-title": "Cancelled",
          "cancel-msg": "Account Deactivation Cancelled!"
        }, null, _parent));
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/account-settings/AccountSettings.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AccountSettingsSecurity",
  __ssrInlineRender: true,
  setup(__props) {
    const isCurrentPasswordVisible = ref(false);
    const isNewPasswordVisible = ref(false);
    const isConfirmPasswordVisible = ref(false);
    const passwordRequirements = [
      "At least one lowercase character",
      "At least one number (0-9)",
      "Minimum 8 characters long"
    ];
    const inputs = ref({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    const {
      errors,
      resetForm
    } = useValidation(inputs, {
      schema: changePasswordValidations
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VCard, { class: "mb-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { class: "pb-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Change Password`);
                      } else {
                        return [
                          createTextVNode("Change Password")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Change Password")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "pt-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(inputs).currentPassword,
                                "onUpdate:modelValue": ($event) => unref(inputs).currentPassword = $event,
                                type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                "append-inner-icon": unref(isCurrentPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                autocomplete: "on",
                                label: "Current Password",
                                placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                "error-messages": unref(errors).currentPassword,
                                "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: unref(inputs).currentPassword,
                                  "onUpdate:modelValue": ($event) => unref(inputs).currentPassword = $event,
                                  type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                  "append-inner-icon": unref(isCurrentPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                  autocomplete: "on",
                                  label: "Current Password",
                                  placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                  "error-messages": unref(errors).currentPassword,
                                  "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "error-messages", "onClick:appendInner"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(inputs).currentPassword,
                                "onUpdate:modelValue": ($event) => unref(inputs).currentPassword = $event,
                                type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                "append-inner-icon": unref(isCurrentPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                autocomplete: "on",
                                label: "Current Password",
                                placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                "error-messages": unref(errors).currentPassword,
                                "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "error-messages", "onClick:appendInner"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(inputs).newPassword,
                                "onUpdate:modelValue": ($event) => unref(inputs).newPassword = $event,
                                type: unref(isNewPasswordVisible) ? "text" : "password",
                                "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                label: "New Password",
                                autocomplete: "on",
                                placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                "error-messages": unref(errors).newPassword,
                                "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: unref(inputs).newPassword,
                                  "onUpdate:modelValue": ($event) => unref(inputs).newPassword = $event,
                                  type: unref(isNewPasswordVisible) ? "text" : "password",
                                  "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                  label: "New Password",
                                  autocomplete: "on",
                                  placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                  "error-messages": unref(errors).newPassword,
                                  "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "error-messages", "onClick:appendInner"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(inputs).confirmPassword,
                                "onUpdate:modelValue": ($event) => unref(inputs).confirmPassword = $event,
                                type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                autocomplete: "on",
                                label: "Confirm New Password",
                                placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                "error-messages": unref(errors).confirmPassword,
                                "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: unref(inputs).confirmPassword,
                                  "onUpdate:modelValue": ($event) => unref(inputs).confirmPassword = $event,
                                  type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                  "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                  autocomplete: "on",
                                  label: "Confirm New Password",
                                  placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                  "error-messages": unref(errors).confirmPassword,
                                  "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "error-messages", "onClick:appendInner"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(inputs).newPassword,
                                "onUpdate:modelValue": ($event) => unref(inputs).newPassword = $event,
                                type: unref(isNewPasswordVisible) ? "text" : "password",
                                "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                label: "New Password",
                                autocomplete: "on",
                                placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                "error-messages": unref(errors).newPassword,
                                "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "error-messages", "onClick:appendInner"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(inputs).confirmPassword,
                                "onUpdate:modelValue": ($event) => unref(inputs).confirmPassword = $event,
                                type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                autocomplete: "on",
                                label: "Confirm New Password",
                                placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                "error-messages": unref(errors).confirmPassword,
                                "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "error-messages", "onClick:appendInner"])
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
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: unref(inputs).currentPassword,
                              "onUpdate:modelValue": ($event) => unref(inputs).currentPassword = $event,
                              type: unref(isCurrentPasswordVisible) ? "text" : "password",
                              "append-inner-icon": unref(isCurrentPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                              autocomplete: "on",
                              label: "Current Password",
                              placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                              "error-messages": unref(errors).currentPassword,
                              "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "error-messages", "onClick:appendInner"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: unref(inputs).newPassword,
                              "onUpdate:modelValue": ($event) => unref(inputs).newPassword = $event,
                              type: unref(isNewPasswordVisible) ? "text" : "password",
                              "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                              label: "New Password",
                              autocomplete: "on",
                              placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                              "error-messages": unref(errors).newPassword,
                              "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "error-messages", "onClick:appendInner"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: unref(inputs).confirmPassword,
                              "onUpdate:modelValue": ($event) => unref(inputs).confirmPassword = $event,
                              type: unref(isConfirmPasswordVisible) ? "text" : "password",
                              "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                              autocomplete: "on",
                              label: "Confirm New Password",
                              placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                              "error-messages": unref(errors).confirmPassword,
                              "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "error-messages", "onClick:appendInner"])
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
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6 text-medium-emphasis mt-1"${_scopeId2}> Password Requirements: </h6>`);
                  _push3(ssrRenderComponent(VList, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(passwordRequirements, (item, index) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: index,
                            class: "px-0"
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  size: "8",
                                  icon: "ri-circle-fill",
                                  color: "rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    size: "8",
                                    icon: "ri-circle-fill",
                                    color: "rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, { class: "text-medium-emphasis text-wrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, { class: "text-medium-emphasis text-wrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(passwordRequirements, (item, index) => {
                            return createVNode(VListItem, {
                              key: index,
                              class: "px-0"
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "8",
                                  icon: "ri-circle-fill",
                                  color: "rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "text-medium-emphasis text-wrap" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-wrap gap-4 justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    color: "secondary",
                    variant: "outlined",
                    type: "reset",
                    onClick: unref(resetForm)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Reset Inputs `);
                      } else {
                        return [
                          createTextVNode(" Reset Inputs ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, { type: "submit" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Change Password `);
                      } else {
                        return [
                          createTextVNode(" Change Password ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6 text-medium-emphasis mt-1" }, " Password Requirements: "),
                    createVNode(VList, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(passwordRequirements, (item, index) => {
                          return createVNode(VListItem, {
                            key: index,
                            class: "px-0"
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, {
                                size: "8",
                                icon: "ri-circle-fill",
                                color: "rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "text-medium-emphasis text-wrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "d-flex flex-wrap gap-4 justify-end" }, [
                      createVNode(VBtn, {
                        color: "secondary",
                        variant: "outlined",
                        type: "reset",
                        onClick: withModifiers(unref(resetForm), ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset Inputs ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, { type: "submit" }, {
                        default: withCtx(() => [
                          createTextVNode(" Change Password ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, { class: "pb-6" }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Change Password")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, { class: "pt-0" }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(inputs).currentPassword,
                            "onUpdate:modelValue": ($event) => unref(inputs).currentPassword = $event,
                            type: unref(isCurrentPasswordVisible) ? "text" : "password",
                            "append-inner-icon": unref(isCurrentPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                            autocomplete: "on",
                            label: "Current Password",
                            placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                            "error-messages": unref(errors).currentPassword,
                            "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "error-messages", "onClick:appendInner"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(inputs).newPassword,
                            "onUpdate:modelValue": ($event) => unref(inputs).newPassword = $event,
                            type: unref(isNewPasswordVisible) ? "text" : "password",
                            "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                            label: "New Password",
                            autocomplete: "on",
                            placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                            "error-messages": unref(errors).newPassword,
                            "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "error-messages", "onClick:appendInner"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(inputs).confirmPassword,
                            "onUpdate:modelValue": ($event) => unref(inputs).confirmPassword = $event,
                            type: unref(isConfirmPasswordVisible) ? "text" : "password",
                            "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                            autocomplete: "on",
                            label: "Confirm New Password",
                            placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                            "error-messages": unref(errors).confirmPassword,
                            "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "error-messages", "onClick:appendInner"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("h6", { class: "text-h6 text-medium-emphasis mt-1" }, " Password Requirements: "),
                  createVNode(VList, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(passwordRequirements, (item, index) => {
                        return createVNode(VListItem, {
                          key: index,
                          class: "px-0"
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VIcon, {
                              size: "8",
                              icon: "ri-circle-fill",
                              color: "rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "text-medium-emphasis text-wrap" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "d-flex flex-wrap gap-4 justify-end" }, [
                    createVNode(VBtn, {
                      color: "secondary",
                      variant: "outlined",
                      type: "reset",
                      onClick: withModifiers(unref(resetForm), ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Reset Inputs ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(VBtn, { type: "submit" }, {
                      default: withCtx(() => [
                        createTextVNode(" Change Password ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/account-settings/AccountSettingsSecurity.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VCard, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardText, { class: "d-flex align-center justify-space-between" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div${_scopeId2}><h5 class="text-h5 text-error"${_scopeId2}> Danger Zone </h5><p class="mb-0 text-body-1"${_scopeId2}> Deactive user account </p></div>`);
              _push3(ssrRenderComponent(VBtn, {
                class: "flex-grow-0",
                color: "error"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Deactive Account `);
                  } else {
                    return [
                      createTextVNode(" Deactive Account ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("div", null, [
                  createVNode("h5", { class: "text-h5 text-error" }, " Danger Zone "),
                  createVNode("p", { class: "mb-0 text-body-1" }, " Deactive user account ")
                ]),
                createVNode(VBtn, {
                  class: "flex-grow-0",
                  color: "error"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Deactive Account ")
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
          createVNode(VCardText, { class: "d-flex align-center justify-space-between" }, {
            default: withCtx(() => [
              createVNode("div", null, [
                createVNode("h5", { class: "text-h5 text-error" }, " Danger Zone "),
                createVNode("p", { class: "mb-0 text-body-1" }, " Deactive user account ")
              ]),
              createVNode(VBtn, {
                class: "flex-grow-0",
                color: "error"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Deactive Account ")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/account-settings/AccountSettingsDelete.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "account-settings",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSectionHeader = _sfc_main$6;
      const _component_AccountAvatar = _sfc_main$4;
      const _component_AccountSettings = _sfc_main$3;
      const _component_AccountSettingsSecurity = _sfc_main$2;
      const _component_AccountSettingsDelete = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiSectionHeader, {
        title: "Profile",
        description: "Settings for your personal profile"
      }, null, _parent));
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AccountAvatar, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AccountAvatar)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AccountSettings, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AccountSettingsSecurity, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AccountSettingsDelete, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AccountSettings),
                    createVNode(_component_AccountSettingsSecurity),
                    createVNode(_component_AccountSettingsDelete)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AccountAvatar)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "9"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AccountSettings),
                  createVNode(_component_AccountSettingsSecurity),
                  createVNode(_component_AccountSettingsDelete)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account-settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
