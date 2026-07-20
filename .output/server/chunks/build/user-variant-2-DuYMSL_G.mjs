import { _ as __nuxt_component_0 } from './nuxt-link-CH0086wS.mjs';
import { u as useDatatable, V as VDataTableServer, _ as _sfc_main$2, a as VNavigationDrawer, b as _sfc_main$1$1 } from './VDataTableServer-CnTEeRrx.mjs';
import { a as avatarText } from './formatters-BiUWZhXP.mjs';
import { defineComponent, ref, withAsyncContext, resolveComponent, withCtx, createTextVNode, createVNode, unref, toDisplayString, createBlock, createCommentVNode, openBlock, isRef, mergeProps, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './account-settings-CFMqtpMU.mjs';
import { _ as _sfc_main$1 } from './UiSectionHeader-BGB1bAkA.mjs';
import { u as useNuxtApp, V as VBtn, a as VIcon } from './server.mjs';
import { V as VCard } from './VCard-B42eN0YV.mjs';
import { V as VCardText } from './VCardText-CaXtzNxg.mjs';
import { V as VRow, a as VCol } from './VRow-BRD4hy0P.mjs';
import { V as VTextField } from './VTextField-jMGfwBDn.mjs';
import { V as VChip } from './VChip-C0dLsv_T.mjs';
import { V as VTooltip } from './VTooltip-vXFYhuMk.mjs';
import { V as VMenu } from './VMenu-C4ct7Xz7.mjs';
import { V as VList, a as VListItem, b as VListItemTitle } from './VList-BNtS0p6J.mjs';
import { V as VAvatar, a as VImg } from './VAvatar-B478BWXT.mjs';
import { V as VDivider } from './VDivider-Cdypedjq.mjs';
import { V as VSelect } from './filter-BIe-IBmp.mjs';
import './VSpacer-CtyhO1n2.mjs';
import 'vue3-perfect-scrollbar';
import './VOverlay-gAZb14KV.mjs';
import './forwardRefs-Oip3fNRq.mjs';
import './VDataTable-TnWqeKKY.mjs';
import './VDataTableFooter-BmXk9xgv.mjs';
import './VCheckboxBtn-BB8tUmIP.mjs';
import './VSelectionControl-B1a3mcFW.mjs';
import './VAutocomplete-sPCSJtya.mjs';
import 'yup';
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
import './dialog-transition-CDwwEBKm.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user-variant-2",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $api } = useNuxtApp();
    const roleList = ref([]);
    const isFilterDrawerOpen = ref(false);
    const drawerQuery = ref({});
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
      drawerQuery.value = {};
      query.value = {};
    };
    const applyFilter = () => {
      query.value = { ...query.value, ...drawerQuery.value };
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
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconBtn = resolveComponent("IconBtn");
      const _component_AppDrawerHeaderSection = _sfc_main$1$1;
      const _component_PerfectScrollbar = resolveComponent("PerfectScrollbar");
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
                  _push3(` Add New User `);
                } else {
                  return [
                    createTextVNode(" Add New User ")
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
                  createTextVNode(" Add New User ")
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
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "8"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(query).search,
                                            "onUpdate:modelValue": ($event) => unref(query).search = $event,
                                            label: "Search",
                                            placeholder: "Search by name or email",
                                            "append-inner-icon": "ri-search-line"
                                          }, null, _parent7, _scopeId6));
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4"
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
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "4"
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
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4",
                          class: "d-flex align-center justify-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            class: "w-100",
                                            color: unref(queryCounter) > 0 ? "primary" : "secondary",
                                            variant: "outlined",
                                            "prepend-icon": "ri-filter-2-line",
                                            onClick: ($event) => isFilterDrawerOpen.value = true
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<span${_scopeId7}> Show Filter </span>`);
                                                if (unref(queryCounter) > 0) {
                                                  _push8(ssrRenderComponent(VChip, {
                                                    class: "ms-3",
                                                    color: "primary",
                                                    variant: "flat",
                                                    density: "comfortable"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(unref(queryCounter))}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(unref(queryCounter)), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  _push8(`<!---->`);
                                                }
                                              } else {
                                                return [
                                                  createVNode("span", null, " Show Filter "),
                                                  unref(queryCounter) > 0 ? (openBlock(), createBlock(VChip, {
                                                    key: 0,
                                                    class: "ms-3",
                                                    color: "primary",
                                                    variant: "flat",
                                                    density: "comfortable"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(unref(queryCounter)), 1)
                                                    ]),
                                                    _: 1
                                                  })) : createCommentVNode("", true)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              class: "w-100",
                                              color: unref(queryCounter) > 0 ? "primary" : "secondary",
                                              variant: "outlined",
                                              "prepend-icon": "ri-filter-2-line",
                                              onClick: ($event) => isFilterDrawerOpen.value = true
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, " Show Filter "),
                                                unref(queryCounter) > 0 ? (openBlock(), createBlock(VChip, {
                                                  key: 0,
                                                  class: "ms-3",
                                                  color: "primary",
                                                  variant: "flat",
                                                  density: "comfortable"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(unref(queryCounter)), 1)
                                                  ]),
                                                  _: 1
                                                })) : createCommentVNode("", true)
                                              ]),
                                              _: 1
                                            }, 8, ["color", "onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            class: "w-100",
                                            color: "error",
                                            variant: "text",
                                            loading: unref(isLoading),
                                            disabled: unref(queryCounter) <= 0,
                                            onClick: resetFilter
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Reset Filter `);
                                              } else {
                                                return [
                                                  createTextVNode(" Reset Filter ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              class: "w-100",
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
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            class: "w-100",
                                            color: unref(queryCounter) > 0 ? "primary" : "secondary",
                                            variant: "outlined",
                                            "prepend-icon": "ri-filter-2-line",
                                            onClick: ($event) => isFilterDrawerOpen.value = true
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, " Show Filter "),
                                              unref(queryCounter) > 0 ? (openBlock(), createBlock(VChip, {
                                                key: 0,
                                                class: "ms-3",
                                                color: "primary",
                                                variant: "flat",
                                                density: "comfortable"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(queryCounter)), 1)
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true)
                                            ]),
                                            _: 1
                                          }, 8, ["color", "onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            class: "w-100",
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
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          class: "w-100",
                                          color: unref(queryCounter) > 0 ? "primary" : "secondary",
                                          variant: "outlined",
                                          "prepend-icon": "ri-filter-2-line",
                                          onClick: ($event) => isFilterDrawerOpen.value = true
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, " Show Filter "),
                                            unref(queryCounter) > 0 ? (openBlock(), createBlock(VChip, {
                                              key: 0,
                                              class: "ms-3",
                                              color: "primary",
                                              variant: "flat",
                                              density: "comfortable"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(queryCounter)), 1)
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["color", "onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          class: "w-100",
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
                          createVNode(VCol, {
                            cols: "12",
                            md: "8"
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "4"
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
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "4",
                            class: "d-flex align-center justify-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        class: "w-100",
                                        color: unref(queryCounter) > 0 ? "primary" : "secondary",
                                        variant: "outlined",
                                        "prepend-icon": "ri-filter-2-line",
                                        onClick: ($event) => isFilterDrawerOpen.value = true
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, " Show Filter "),
                                          unref(queryCounter) > 0 ? (openBlock(), createBlock(VChip, {
                                            key: 0,
                                            class: "ms-3",
                                            color: "primary",
                                            variant: "flat",
                                            density: "comfortable"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(queryCounter)), 1)
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }, 8, ["color", "onClick"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        class: "w-100",
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
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "8"
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "4"
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
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "4",
                          class: "d-flex align-center justify-center"
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      class: "w-100",
                                      color: unref(queryCounter) > 0 ? "primary" : "secondary",
                                      variant: "outlined",
                                      "prepend-icon": "ri-filter-2-line",
                                      onClick: ($event) => isFilterDrawerOpen.value = true
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, " Show Filter "),
                                        unref(queryCounter) > 0 ? (openBlock(), createBlock(VChip, {
                                          key: 0,
                                          class: "ms-3",
                                          color: "primary",
                                          variant: "flat",
                                          density: "comfortable"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(queryCounter)), 1)
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["color", "onClick"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      class: "w-100",
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
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "8"
                      }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "4"
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
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4",
                        class: "d-flex align-center justify-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    class: "w-100",
                                    color: unref(queryCounter) > 0 ? "primary" : "secondary",
                                    variant: "outlined",
                                    "prepend-icon": "ri-filter-2-line",
                                    onClick: ($event) => isFilterDrawerOpen.value = true
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, " Show Filter "),
                                      unref(queryCounter) > 0 ? (openBlock(), createBlock(VChip, {
                                        key: 0,
                                        class: "ms-3",
                                        color: "primary",
                                        variant: "flat",
                                        density: "comfortable"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(queryCounter)), 1)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }, 8, ["color", "onClick"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    class: "w-100",
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
      _push(ssrRenderComponent(_sfc_main$2, {
        isDrawerOpen: unref(isAddNewUserDrawerVisible),
        "onUpdate:isDrawerOpen": ($event) => isRef(isAddNewUserDrawerVisible) ? isAddNewUserDrawerVisible.value = $event : null,
        "role-list": unref(roleList),
        onUserData: addNewUser
      }, null, _parent));
      _push(ssrRenderComponent(VNavigationDrawer, {
        modelValue: unref(isFilterDrawerOpen),
        "onUpdate:modelValue": ($event) => isRef(isFilterDrawerOpen) ? isFilterDrawerOpen.value = $event : null,
        temporary: "",
        width: 400,
        location: "end",
        class: "scrollable-content"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppDrawerHeaderSection, {
              title: "Filters",
              onCancel: ($event) => isFilterDrawerOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PerfectScrollbar, { options: { wheelPropagation: false } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { flat: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<form${_scopeId4}>`);
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(drawerQuery).gender,
                                            "onUpdate:modelValue": ($event) => unref(drawerQuery).gender = $event,
                                            label: "Gender",
                                            items: [{ text: "Male", value: "male" }, { text: "Female", value: "female" }],
                                            "item-title": "text",
                                            "item-value": "value"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: unref(drawerQuery).gender,
                                              "onUpdate:modelValue": ($event) => unref(drawerQuery).gender = $event,
                                              label: "Gender",
                                              items: [{ text: "Male", value: "male" }, { text: "Female", value: "female" }],
                                              "item-title": "text",
                                              "item-value": "value"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(drawerQuery).status,
                                            "onUpdate:modelValue": ($event) => unref(drawerQuery).status = $event,
                                            label: "Status",
                                            items: [{ text: "Active", value: "active" }, { text: "Inactive", value: "inactive" }],
                                            "item-title": "text",
                                            "item-value": "value"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: unref(drawerQuery).status,
                                              "onUpdate:modelValue": ($event) => unref(drawerQuery).status = $event,
                                              label: "Status",
                                              items: [{ text: "Active", value: "active" }, { text: "Inactive", value: "inactive" }],
                                              "item-title": "text",
                                              "item-value": "value"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$3, {
                                            modelValue: unref(query).role,
                                            "onUpdate:modelValue": ($event) => unref(query).role = $event,
                                            label: "Role",
                                            callback: fetchRoleData,
                                            "item-title": "name",
                                            "item-value": "id",
                                            placeholder: "Select Role"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$3, {
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      class: "d-flex gap-3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            class: "flex-grow-1 px-5",
                                            type: "submit"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Apply Filter `);
                                              } else {
                                                return [
                                                  createTextVNode(" Apply Filter ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            class: "px-5",
                                            variant: "text",
                                            color: "error",
                                            loading: unref(isLoading),
                                            disabled: unref(queryCounter) <= 0,
                                            onClick: resetFilter
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Reset Filter `);
                                              } else {
                                                return [
                                                  createTextVNode(" Reset Filter ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              class: "flex-grow-1 px-5",
                                              type: "submit"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Apply Filter ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              class: "px-5",
                                              variant: "text",
                                              color: "error",
                                              loading: unref(isLoading),
                                              disabled: unref(queryCounter) <= 0,
                                              onClick: resetFilter
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Reset Filter ")
                                              ]),
                                              _: 1
                                            }, 8, ["loading", "disabled"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(drawerQuery).gender,
                                            "onUpdate:modelValue": ($event) => unref(drawerQuery).gender = $event,
                                            label: "Gender",
                                            items: [{ text: "Male", value: "male" }, { text: "Female", value: "female" }],
                                            "item-title": "text",
                                            "item-value": "value"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(drawerQuery).status,
                                            "onUpdate:modelValue": ($event) => unref(drawerQuery).status = $event,
                                            label: "Status",
                                            items: [{ text: "Active", value: "active" }, { text: "Inactive", value: "inactive" }],
                                            "item-title": "text",
                                            "item-value": "value"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$3, {
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
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "d-flex gap-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            class: "flex-grow-1 px-5",
                                            type: "submit"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Apply Filter ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            class: "px-5",
                                            variant: "text",
                                            color: "error",
                                            loading: unref(isLoading),
                                            disabled: unref(queryCounter) <= 0,
                                            onClick: resetFilter
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Reset Filter ")
                                            ]),
                                            _: 1
                                          }, 8, ["loading", "disabled"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</form>`);
                            } else {
                              return [
                                createVNode("form", {
                                  onSubmit: withModifiers(applyFilter, ["prevent"])
                                }, [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(drawerQuery).gender,
                                            "onUpdate:modelValue": ($event) => unref(drawerQuery).gender = $event,
                                            label: "Gender",
                                            items: [{ text: "Male", value: "male" }, { text: "Female", value: "female" }],
                                            "item-title": "text",
                                            "item-value": "value"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(drawerQuery).status,
                                            "onUpdate:modelValue": ($event) => unref(drawerQuery).status = $event,
                                            label: "Status",
                                            items: [{ text: "Active", value: "active" }, { text: "Inactive", value: "inactive" }],
                                            "item-title": "text",
                                            "item-value": "value"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$3, {
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
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "d-flex gap-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            class: "flex-grow-1 px-5",
                                            type: "submit"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Apply Filter ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            class: "px-5",
                                            variant: "text",
                                            color: "error",
                                            loading: unref(isLoading),
                                            disabled: unref(queryCounter) <= 0,
                                            onClick: resetFilter
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Reset Filter ")
                                            ]),
                                            _: 1
                                          }, 8, ["loading", "disabled"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ], 32)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("form", {
                                onSubmit: withModifiers(applyFilter, ["prevent"])
                              }, [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(drawerQuery).gender,
                                          "onUpdate:modelValue": ($event) => unref(drawerQuery).gender = $event,
                                          label: "Gender",
                                          items: [{ text: "Male", value: "male" }, { text: "Female", value: "female" }],
                                          "item-title": "text",
                                          "item-value": "value"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(drawerQuery).status,
                                          "onUpdate:modelValue": ($event) => unref(drawerQuery).status = $event,
                                          label: "Status",
                                          items: [{ text: "Active", value: "active" }, { text: "Inactive", value: "inactive" }],
                                          "item-title": "text",
                                          "item-value": "value"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$3, {
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
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "d-flex gap-3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          class: "flex-grow-1 px-5",
                                          type: "submit"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Apply Filter ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          class: "px-5",
                                          variant: "text",
                                          color: "error",
                                          loading: unref(isLoading),
                                          disabled: unref(queryCounter) <= 0,
                                          onClick: resetFilter
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Reset Filter ")
                                          ]),
                                          _: 1
                                        }, 8, ["loading", "disabled"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ], 32)
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
                    createVNode(VCard, { flat: "" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("form", {
                              onSubmit: withModifiers(applyFilter, ["prevent"])
                            }, [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(drawerQuery).gender,
                                        "onUpdate:modelValue": ($event) => unref(drawerQuery).gender = $event,
                                        label: "Gender",
                                        items: [{ text: "Male", value: "male" }, { text: "Female", value: "female" }],
                                        "item-title": "text",
                                        "item-value": "value"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(drawerQuery).status,
                                        "onUpdate:modelValue": ($event) => unref(drawerQuery).status = $event,
                                        label: "Status",
                                        items: [{ text: "Active", value: "active" }, { text: "Inactive", value: "inactive" }],
                                        "item-title": "text",
                                        "item-value": "value"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$3, {
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
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "d-flex gap-3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        class: "flex-grow-1 px-5",
                                        type: "submit"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Apply Filter ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        class: "px-5",
                                        variant: "text",
                                        color: "error",
                                        loading: unref(isLoading),
                                        disabled: unref(queryCounter) <= 0,
                                        onClick: resetFilter
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Reset Filter ")
                                        ]),
                                        _: 1
                                      }, 8, ["loading", "disabled"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ], 32)
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
              createVNode(_component_AppDrawerHeaderSection, {
                title: "Filters",
                onCancel: ($event) => isFilterDrawerOpen.value = false
              }, null, 8, ["onCancel"]),
              createVNode(VDivider),
              createVNode(_component_PerfectScrollbar, { options: { wheelPropagation: false } }, {
                default: withCtx(() => [
                  createVNode(VCard, { flat: "" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("form", {
                            onSubmit: withModifiers(applyFilter, ["prevent"])
                          }, [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(drawerQuery).gender,
                                      "onUpdate:modelValue": ($event) => unref(drawerQuery).gender = $event,
                                      label: "Gender",
                                      items: [{ text: "Male", value: "male" }, { text: "Female", value: "female" }],
                                      "item-title": "text",
                                      "item-value": "value"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(drawerQuery).status,
                                      "onUpdate:modelValue": ($event) => unref(drawerQuery).status = $event,
                                      label: "Status",
                                      items: [{ text: "Active", value: "active" }, { text: "Inactive", value: "inactive" }],
                                      "item-title": "text",
                                      "item-value": "value"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3, {
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
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "d-flex gap-3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      class: "flex-grow-1 px-5",
                                      type: "submit"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Apply Filter ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      class: "px-5",
                                      variant: "text",
                                      color: "error",
                                      loading: unref(isLoading),
                                      disabled: unref(queryCounter) <= 0,
                                      onClick: resetFilter
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Reset Filter ")
                                      ]),
                                      _: 1
                                    }, 8, ["loading", "disabled"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ], 32)
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
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user-variant-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
