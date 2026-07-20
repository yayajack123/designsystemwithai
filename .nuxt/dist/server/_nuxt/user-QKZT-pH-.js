import { _ as _sfc_main$2 } from "./account-settings-CFMqtpMU.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-CH0086wS.js";
import { a as avatarText } from "./formatters-BiUWZhXP.js";
import { defineComponent, ref, withAsyncContext, resolveComponent, withCtx, createVNode, createTextVNode, unref, isRef, mergeProps, createBlock, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UiSectionHeader-BGB1bAkA.js";
import { u as useDatatable, V as VDataTableServer, _ as _sfc_main$3 } from "./VDataTableServer-CnTEeRrx.js";
import { u as useNuxtApp, V as VBtn, a as VIcon } from "../server.mjs";
import { V as VCard } from "./VCard-B42eN0YV.js";
import { V as VCardText } from "./VCardText-CaXtzNxg.js";
import { V as VRow, a as VCol } from "./VRow-BRD4hy0P.js";
import { V as VTextField } from "./VTextField-jMGfwBDn.js";
import { V as VSelect } from "./filter-BIe-IBmp.js";
import { V as VTooltip } from "./VTooltip-vXFYhuMk.js";
import { V as VMenu } from "./VMenu-C4ct7Xz7.js";
import { V as VList, a as VListItem, b as VListItemTitle } from "./VList-BNtS0p6J.js";
import { V as VAvatar, a as VImg } from "./VAvatar-B478BWXT.js";
import "./VAutocomplete-sPCSJtya.js";
import "./forwardRefs-Oip3fNRq.js";
import "./VCheckboxBtn-BB8tUmIP.js";
import "./VSelectionControl-B1a3mcFW.js";
import "./VChip-C0dLsv_T.js";
import "./index-CSomYp-Z.js";
import "yup";
import "./VSpacer-CtyhO1n2.js";
/* empty css               */
import "vue3-perfect-scrollbar";
import "./VOverlay-gAZb14KV.js";
import "./VDivider-Cdypedjq.js";
import "./VDataTable-TnWqeKKY.js";
import "./VDataTableFooter-BmXk9xgv.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/hookable/dist/index.mjs";
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
import "./dialog-transition-CDwwEBKm.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $api } = useNuxtApp();
    const roleList = ref([]);
    const {
      itemsPerPage,
      query,
      queryCounter,
      totalItems,
      fetchItems,
      data: adminList,
      isLoading,
      itemPerPageOptions
    } = useDatatable(async (params, queryParams) => {
      return await $api.admin.list({
        query: {
          page: params.page,
          limit: params.itemsPerPage,
          ...queryParams
        }
      });
    });
    const resetFilter = () => {
      query.value = {};
    };
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
    [__temp, __restore] = withAsyncContext(() => fetchRoleData()), await __temp, __restore();
    const headers = [
      { title: "User", key: "name" },
      { title: "Email", key: "email" },
      { title: "Role", key: "role_name" },
      { title: "Actions", key: "actions", sortable: false, width: "0" }
    ];
    const isAddNewUserDrawerVisible = ref(false);
    const addNewUser = async (userData) => {
      await $api.admin.store({
        body: {
          name: userData.name,
          email: userData.email,
          role: userData.role,
          password: userData.password,
          password_confirmation: userData.passwordConfirmation
        }
      });
      await fetchItems();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiAutoComplete = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "User List",
        description: "List of all users"
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              onClick: ($event) => isAddNewUserDrawerVisible.value = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    start: "",
                    icon: "ri-add-circle-line"
                  }, null, _parent3, _scopeId2));
                  _push3(` Add New `);
                } else {
                  return [
                    createVNode(VIcon, {
                      start: "",
                      icon: "ri-add-circle-line"
                    }),
                    createTextVNode(" Add New ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                onClick: ($event) => isAddNewUserDrawerVisible.value = true
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    start: "",
                    icon: "ri-add-circle-line"
                  }),
                  createTextVNode(" Add New ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VCard, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-between align-center ga-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(query).search,
                                "onUpdate:modelValue": ($event) => unref(query).search = $event,
                                label: "Search",
                                placeholder: "Search by name or email",
                                "append-inner-icon": "ri-search-line"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: unref(query).search,
                                  "onUpdate:modelValue": ($event) => unref(query).search = $event,
                                  label: "Search",
                                  placeholder: "Search by name or email",
                                  "append-inner-icon": "ri-search-line"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(query).gender,
                                "onUpdate:modelValue": ($event) => unref(query).gender = $event,
                                label: "Gender",
                                items: [{ text: "Male", value: "male" }, { text: "Female", value: "female" }],
                                "item-title": "text",
                                "item-value": "value"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(query).gender,
                                  "onUpdate:modelValue": ($event) => unref(query).gender = $event,
                                  label: "Gender",
                                  items: [{ text: "Male", value: "male" }, { text: "Female", value: "female" }],
                                  "item-title": "text",
                                  "item-value": "value"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(query).status,
                                "onUpdate:modelValue": ($event) => unref(query).status = $event,
                                label: "Status",
                                items: [{ text: "Active", value: "active" }, { text: "Inactive", value: "inactive" }],
                                "item-title": "text",
                                "item-value": "value"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(query).status,
                                  "onUpdate:modelValue": ($event) => unref(query).status = $event,
                                  label: "Status",
                                  items: [{ text: "Active", value: "active" }, { text: "Inactive", value: "inactive" }],
                                  "item-title": "text",
                                  "item-value": "value"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiAutoComplete, {
                                modelValue: unref(query).role,
                                "onUpdate:modelValue": ($event) => unref(query).role = $event,
                                label: "Role",
                                callback: fetchRoleData,
                                "item-title": "name",
                                "item-value": "id",
                                placeholder: "Select Role"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiAutoComplete, {
                                  modelValue: unref(query).role,
                                  "onUpdate:modelValue": ($event) => unref(query).role = $event,
                                  label: "Role",
                                  callback: fetchRoleData,
                                  "item-title": "name",
                                  "item-value": "id",
                                  placeholder: "Select Role"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(query).search,
                                "onUpdate:modelValue": ($event) => unref(query).search = $event,
                                label: "Search",
                                placeholder: "Search by name or email",
                                "append-inner-icon": "ri-search-line"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(query).gender,
                                "onUpdate:modelValue": ($event) => unref(query).gender = $event,
                                label: "Gender",
                                items: [{ text: "Male", value: "male" }, { text: "Female", value: "female" }],
                                "item-title": "text",
                                "item-value": "value"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(query).status,
                                "onUpdate:modelValue": ($event) => unref(query).status = $event,
                                label: "Status",
                                items: [{ text: "Active", value: "active" }, { text: "Inactive", value: "inactive" }],
                                "item-title": "text",
                                "item-value": "value"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiAutoComplete, {
                                modelValue: unref(query).role,
                                "onUpdate:modelValue": ($event) => unref(query).role = $event,
                                label: "Role",
                                callback: fetchRoleData,
                                "item-title": "name",
                                "item-value": "id",
                                placeholder: "Select Role"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    color: "error",
                    variant: "text",
                    loading: unref(isLoading),
                    disabled: unref(queryCounter) <= 0,
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
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-between align-center ga-6" }, [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(query).search,
                                "onUpdate:modelValue": ($event) => unref(query).search = $event,
                                label: "Search",
                                placeholder: "Search by name or email",
                                "append-inner-icon": "ri-search-line"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(query).gender,
                                "onUpdate:modelValue": ($event) => unref(query).gender = $event,
                                label: "Gender",
                                items: [{ text: "Male", value: "male" }, { text: "Female", value: "female" }],
                                "item-title": "text",
                                "item-value": "value"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(query).status,
                                "onUpdate:modelValue": ($event) => unref(query).status = $event,
                                label: "Status",
                                items: [{ text: "Active", value: "active" }, { text: "Inactive", value: "inactive" }],
                                "item-title": "text",
                                "item-value": "value"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiAutoComplete, {
                                modelValue: unref(query).role,
                                "onUpdate:modelValue": ($event) => unref(query).role = $event,
                                label: "Role",
                                callback: fetchRoleData,
                                "item-title": "name",
                                "item-value": "id",
                                placeholder: "Select Role"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "error",
                        variant: "text",
                        loading: unref(isLoading),
                        disabled: unref(queryCounter) <= 0,
                        onClick: resetFilter
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset Filter ")
                        ]),
                        _: 1
                      }, 8, ["loading", "disabled"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDataTableServer, {
              "items-per-page": unref(itemsPerPage),
              "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
              class: "text-no-wrap rounded-0",
              items: unref(adminList),
              "items-per-page-options": unref(itemPerPageOptions),
              "items-length": unref(totalItems),
              headers,
              loading: unref(isLoading),
              "onUpdate:options": unref(fetchItems)
            }, {
              "item.name": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "34",
                    class: "me-3"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (item.photo) {
                          _push4(ssrRenderComponent(VImg, {
                            src: item.photo
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<span${_scopeId3}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.name))}</span>`);
                        }
                      } else {
                        return [
                          item.photo ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: item.photo
                          }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.name)), 1))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-column"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: { name: "user" },
                    class: "text-h6 font-weight-medium user-list-name"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.name)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.name), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode(VAvatar, {
                        size: "34",
                        class: "me-3"
                      }, {
                        default: withCtx(() => [
                          item.photo ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: item.photo
                          }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.name)), 1))
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", { class: "d-flex flex-column" }, [
                        createVNode(_component_NuxtLink, {
                          to: { name: "user" },
                          class: "text-h6 font-weight-medium user-list-name"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ])
                  ];
                }
              }),
              "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconBtn, {
                    color: "error",
                    size: "small",
                    onClick: ($event) => console.log("delete_items", item)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "ri-delete-bin-7-line" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTooltip, {
                          activator: "parent",
                          location: "top"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Delete `);
                            } else {
                              return [
                                createTextVNode(" Delete ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "ri-delete-bin-7-line" }),
                          createVNode(VTooltip, {
                            activator: "parent",
                            location: "top"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Delete ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_IconBtn, {
                    size: "small",
                    onClick: ($event) => console.log("detail", item)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "ri-eye-line" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTooltip, {
                          activator: "parent",
                          location: "top"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Details `);
                            } else {
                              return [
                                createTextVNode(" Details ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "ri-eye-line" }),
                          createVNode(VTooltip, {
                            activator: "parent",
                            location: "top"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Details ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VMenu, { location: "bottom" }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_IconBtn, mergeProps(props, { size: "small" }), {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { icon: "ri-more-fill" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` More `);
                                  } else {
                                    return [
                                      createTextVNode(" More ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, { icon: "ri-more-fill" }),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" More ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_IconBtn, mergeProps(props, { size: "small" }), {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-more-fill" }),
                              createVNode(VTooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" More ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1040)
                        ];
                      }
                    }),
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VList, { density: "compact" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItem, {
                                onClick: ($event) => console.log("dummy", item)
                              }, {
                                prepend: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { icon: "ri-checkbox-multiple-blank-line" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, { icon: "ri-checkbox-multiple-blank-line" })
                                    ];
                                  }
                                }),
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Dummy Option 1`);
                                        } else {
                                          return [
                                            createTextVNode("Dummy Option 1")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Dummy Option 1")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VListItem, {
                                onClick: ($event) => console.log("edit", item)
                              }, {
                                prepend: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { icon: "ri-pencil-line" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, { icon: "ri-pencil-line" })
                                    ];
                                  }
                                }),
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Edit`);
                                        } else {
                                          return [
                                            createTextVNode("Edit")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Edit")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItem, {
                                  onClick: ($event) => console.log("dummy", item)
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-checkbox-multiple-blank-line" })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Dummy Option 1")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(VListItem, {
                                  onClick: ($event) => console.log("edit", item)
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-pencil-line" })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Edit")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VList, { density: "compact" }, {
                            default: withCtx(() => [
                              createVNode(VListItem, {
                                onClick: ($event) => console.log("dummy", item)
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-checkbox-multiple-blank-line" })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Dummy Option 1")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(VListItem, {
                                onClick: ($event) => console.log("edit", item)
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-pencil-line" })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Edit")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_IconBtn, {
                      color: "error",
                      size: "small",
                      onClick: ($event) => console.log("delete_items", item)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-delete-bin-7-line" }),
                        createVNode(VTooltip, {
                          activator: "parent",
                          location: "top"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Delete ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_IconBtn, {
                      size: "small",
                      onClick: ($event) => console.log("detail", item)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-eye-line" }),
                        createVNode(VTooltip, {
                          activator: "parent",
                          location: "top"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Details ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(VMenu, { location: "bottom" }, {
                      activator: withCtx(({ props }) => [
                        createVNode(_component_IconBtn, mergeProps(props, { size: "small" }), {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-more-fill" }),
                            createVNode(VTooltip, {
                              activator: "parent",
                              location: "top"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" More ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: withCtx(() => [
                        createVNode(VList, { density: "compact" }, {
                          default: withCtx(() => [
                            createVNode(VListItem, {
                              onClick: ($event) => console.log("dummy", item)
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-checkbox-multiple-blank-line" })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Dummy Option 1")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(VListItem, {
                              onClick: ($event) => console.log("edit", item)
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-pencil-line" })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Edit")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-between align-center ga-6" }, [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: unref(query).search,
                              "onUpdate:modelValue": ($event) => unref(query).search = $event,
                              label: "Search",
                              placeholder: "Search by name or email",
                              "append-inner-icon": "ri-search-line"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(query).gender,
                              "onUpdate:modelValue": ($event) => unref(query).gender = $event,
                              label: "Gender",
                              items: [{ text: "Male", value: "male" }, { text: "Female", value: "female" }],
                              "item-title": "text",
                              "item-value": "value"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(query).status,
                              "onUpdate:modelValue": ($event) => unref(query).status = $event,
                              label: "Status",
                              items: [{ text: "Active", value: "active" }, { text: "Inactive", value: "inactive" }],
                              "item-title": "text",
                              "item-value": "value"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiAutoComplete, {
                              modelValue: unref(query).role,
                              "onUpdate:modelValue": ($event) => unref(query).role = $event,
                              label: "Role",
                              callback: fetchRoleData,
                              "item-title": "name",
                              "item-value": "id",
                              placeholder: "Select Role"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "error",
                      variant: "text",
                      loading: unref(isLoading),
                      disabled: unref(queryCounter) <= 0,
                      onClick: resetFilter
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Reset Filter ")
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ])
                ]),
                _: 1
              }),
              createVNode(VDataTableServer, {
                "items-per-page": unref(itemsPerPage),
                "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                class: "text-no-wrap rounded-0",
                items: unref(adminList),
                "items-per-page-options": unref(itemPerPageOptions),
                "items-length": unref(totalItems),
                headers,
                loading: unref(isLoading),
                "onUpdate:options": unref(fetchItems)
              }, {
                "item.name": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode(VAvatar, {
                      size: "34",
                      class: "me-3"
                    }, {
                      default: withCtx(() => [
                        item.photo ? (openBlock(), createBlock(VImg, {
                          key: 0,
                          src: item.photo
                        }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.name)), 1))
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", { class: "d-flex flex-column" }, [
                      createVNode(_component_NuxtLink, {
                        to: { name: "user" },
                        class: "text-h6 font-weight-medium user-list-name"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ])
                ]),
                "item.actions": withCtx(({ item }) => [
                  createVNode(_component_IconBtn, {
                    color: "error",
                    size: "small",
                    onClick: ($event) => console.log("delete_items", item)
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-delete-bin-7-line" }),
                      createVNode(VTooltip, {
                        activator: "parent",
                        location: "top"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Delete ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_IconBtn, {
                    size: "small",
                    onClick: ($event) => console.log("detail", item)
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-eye-line" }),
                      createVNode(VTooltip, {
                        activator: "parent",
                        location: "top"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Details ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(VMenu, { location: "bottom" }, {
                    activator: withCtx(({ props }) => [
                      createVNode(_component_IconBtn, mergeProps(props, { size: "small" }), {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "ri-more-fill" }),
                          createVNode(VTooltip, {
                            activator: "parent",
                            location: "top"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" More ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1040)
                    ]),
                    default: withCtx(() => [
                      createVNode(VList, { density: "compact" }, {
                        default: withCtx(() => [
                          createVNode(VListItem, {
                            onClick: ($event) => console.log("dummy", item)
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-checkbox-multiple-blank-line" })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Dummy Option 1")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(VListItem, {
                            onClick: ($event) => console.log("edit", item)
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-pencil-line" })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Edit")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              }, 8, ["items-per-page", "onUpdate:itemsPerPage", "items", "items-per-page-options", "items-length", "loading", "onUpdate:options"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        isDrawerOpen: unref(isAddNewUserDrawerVisible),
        "onUpdate:isDrawerOpen": ($event) => isRef(isAddNewUserDrawerVisible) ? isAddNewUserDrawerVisible.value = $event : null,
        "role-list": unref(roleList),
        onUserData: addNewUser
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
