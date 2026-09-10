import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { V as VCard } from './VCard-u8p0g_5j.mjs';
import { a as VImg } from './VAvatar-Bov4ZLUZ.mjs';
import { V as VCardText } from './VCardText-Dvf5gJn3.mjs';
import { V as VDivider } from './VDivider-CWdThEEs.mjs';
import { V as VChip } from './VChip-DklVb85L.mjs';
import { aY as _export_sfc, V as VBtn, a as VIcon } from './server.mjs';
import { V as VRow, a as VCol } from './VRow-BKXTxdYZ.mjs';
import { V as VTextField } from './VTextField-Cd5QA0t5.mjs';
import { V as VSelect } from './filter-CITo5F-X.mjs';
import { V as VDataTable } from './VDataTable-C1JSmJGp.mjs';
import { V as VSnackbar } from './VSnackbar-CJfio8i7.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './index-CGI_inNZ.mjs';
import 'vue-router';
import '@antfu/utils';
import './forwardRefs-CtuH3aYe.mjs';
import './VList-MvyrR4cM.mjs';
import './VMenu-HR5UQDp_.mjs';
import './VOverlay-2hsH7Y4R.mjs';
import './dialog-transition-BWrfOTuu.mjs';
import './VCheckboxBtn-HaMxb5RF.mjs';
import './VSelectionControl-CYxe30_l.mjs';
import './VDataTableFooter-fQK99chc.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ThemeCard",
  __ssrInlineRender: true,
  props: {
    name: {},
    updatedAt: {},
    image: {},
    category: {},
    visibility: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({
        class: "theme-card",
        variant: "outlined",
        "aria-label": `Open ${props.name}`,
        role: "button",
        tabindex: "0",
        onClick: ($event) => emit("select"),
        onKeydown: [($event) => emit("select"), ($event) => emit("select")]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VImg, {
              src: props.image,
              alt: `${props.name} preview`,
              cover: "",
              class: "theme-card__preview"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "theme-card__content" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-52d20307${_scopeId2}><h2 class="theme-card__title" data-v-52d20307${_scopeId2}>${ssrInterpolate(props.name)}</h2><p class="theme-card__updated" data-v-52d20307${_scopeId2}><span data-v-52d20307${_scopeId2}>Last update</span><span aria-hidden="true" data-v-52d20307${_scopeId2}>:</span><span data-v-52d20307${_scopeId2}>${ssrInterpolate(props.updatedAt)}</span></p></div>`);
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(`<div class="theme-card__badges" aria-label="Theme metadata" data-v-52d20307${_scopeId2}>`);
                  _push3(ssrRenderComponent(VChip, {
                    size: "small",
                    variant: "tonal",
                    color: "primary",
                    class: "theme-card__badge"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.category)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.category), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VChip, {
                    size: "small",
                    variant: "tonal",
                    color: "secondary",
                    class: "theme-card__badge"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.visibility)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.visibility), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("h2", { class: "theme-card__title" }, toDisplayString(props.name), 1),
                      createVNode("p", { class: "theme-card__updated" }, [
                        createVNode("span", null, "Last update"),
                        createVNode("span", { "aria-hidden": "true" }, ":"),
                        createVNode("span", null, toDisplayString(props.updatedAt), 1)
                      ])
                    ]),
                    createVNode(VDivider),
                    createVNode("div", {
                      class: "theme-card__badges",
                      "aria-label": "Theme metadata"
                    }, [
                      createVNode(VChip, {
                        size: "small",
                        variant: "tonal",
                        color: "primary",
                        class: "theme-card__badge"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.category), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VChip, {
                        size: "small",
                        variant: "tonal",
                        color: "secondary",
                        class: "theme-card__badge"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.visibility), 1)
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
              createVNode(VImg, {
                src: props.image,
                alt: `${props.name} preview`,
                cover: "",
                class: "theme-card__preview"
              }, null, 8, ["src", "alt"]),
              createVNode(VCardText, { class: "theme-card__content" }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("h2", { class: "theme-card__title" }, toDisplayString(props.name), 1),
                    createVNode("p", { class: "theme-card__updated" }, [
                      createVNode("span", null, "Last update"),
                      createVNode("span", { "aria-hidden": "true" }, ":"),
                      createVNode("span", null, toDisplayString(props.updatedAt), 1)
                    ])
                  ]),
                  createVNode(VDivider),
                  createVNode("div", {
                    class: "theme-card__badges",
                    "aria-label": "Theme metadata"
                  }, [
                    createVNode(VChip, {
                      size: "small",
                      variant: "tonal",
                      color: "primary",
                      class: "theme-card__badge"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.category), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VChip, {
                      size: "small",
                      variant: "tonal",
                      color: "secondary",
                      class: "theme-card__badge"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.visibility), 1)
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/themes/ThemeCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ThemeCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-52d20307"]]);
const farmerImage = "" + buildAssetsURL("theme-farmer.DnU4cMpZ.png");
const spaceImage = "" + buildAssetsURL("theme-space.CQosHA4f.png");
const deepSeaImage = "" + buildAssetsURL("theme-deep-sea.BUOJyPZb.png");
const springImage = "" + buildAssetsURL("theme-autumn.DkoSTqPH.png");
const summerImage = "" + buildAssetsURL("theme-farmer.DnU4cMpZ.png");
const autumnImage = "" + buildAssetsURL("theme-autumn.DkoSTqPH.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "themes",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const selectedCategory = ref(null);
    const selectedSort = ref("Recently updated");
    const page = ref(1);
    const itemsPerPage = ref(10);
    const selectedTheme = ref(null);
    const showSelectionMessage = ref(false);
    const categoryOptions = ["Nature", "Space", "Ocean", "Seasonal"];
    const sortOptions = ["Recently updated", "Name: A-Z", "Name: Z-A"];
    const themes2 = ref([
      {
        id: "farmer",
        name: "Farmer Theme",
        updatedAt: "24 Aug 2026",
        image: farmerImage,
        category: "Nature",
        visibility: "Public"
      },
      {
        id: "space",
        name: "Space Theme",
        updatedAt: "24 Aug 2026",
        image: spaceImage,
        category: "Space",
        visibility: "Private"
      },
      {
        id: "deep-sea",
        name: "Deep Sea Theme",
        updatedAt: "24 Aug 2026",
        image: deepSeaImage,
        category: "Ocean",
        visibility: "Public"
      },
      {
        id: "spring",
        name: "Spring Theme",
        updatedAt: "24 Aug 2026",
        image: springImage,
        category: "Seasonal",
        visibility: "Private"
      },
      {
        id: "summer",
        name: "Summer Vibes",
        updatedAt: "12 Jul 2026",
        image: summerImage,
        category: "Seasonal",
        visibility: "Public"
      },
      {
        id: "autumn",
        name: "Autumn Colors",
        updatedAt: "18 Oct 2026",
        image: autumnImage,
        category: "Seasonal",
        visibility: "Public"
      }
    ]);
    const filteredThemes = computed(() => {
      const query = searchQuery.value.trim().toLowerCase();
      const result = themes2.value.filter((theme) => {
        const matchesQuery = !query || theme.name.toLowerCase().includes(query);
        const matchesCategory = !selectedCategory.value || theme.category === selectedCategory.value;
        return matchesQuery && matchesCategory;
      });
      return [...result].sort((a, b) => {
        if (selectedSort.value === "Name: A-Z") return a.name.localeCompare(b.name);
        if (selectedSort.value === "Name: Z-A") return b.name.localeCompare(a.name);
        return b.updatedAt.localeCompare(a.updatedAt);
      });
    });
    const resetFilters = () => {
      searchQuery.value = "";
      selectedCategory.value = null;
      selectedSort.value = "Recently updated";
      page.value = 1;
    };
    const handleCreateTheme = () => {
      selectedTheme.value = null;
    };
    const handleSelectTheme = (theme) => {
      selectedTheme.value = theme;
      showSelectionMessage.value = true;
    };
    const unwrapTheme = (item) => {
      var _a;
      return (_a = item.raw) != null ? _a : item;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "themes-page" }, _attrs))} data-v-ddec3607><header class="d-flex align-center gap-3 mb-5 themes-page__header" data-v-ddec3607>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="themes-page__title text-h4 font-weight-medium text-high-emphasis" data-v-ddec3607${_scopeId2}> Themes </h1><p class="themes-page__description mb-0 text-body-1 text-medium-emphasis" data-v-ddec3607${_scopeId2}> Manage and organize visual themes for educational content. </p>`);
                } else {
                  return [
                    createVNode("h1", { class: "themes-page__title text-h4 font-weight-medium text-high-emphasis" }, " Themes "),
                    createVNode("p", { class: "themes-page__description mb-0 text-body-1 text-medium-emphasis" }, " Manage and organize visual themes for educational content. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4",
              class: "d-flex align-center justify-end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    color: "primary",
                    height: "38",
                    class: "themes-page__create",
                    "prepend-icon": "ri-add-line",
                    onClick: handleCreateTheme
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Create Theme `);
                      } else {
                        return [
                          createTextVNode(" Create Theme ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      color: "primary",
                      height: "38",
                      class: "themes-page__create",
                      "prepend-icon": "ri-add-line",
                      onClick: handleCreateTheme
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Create Theme ")
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
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "themes-page__title text-h4 font-weight-medium text-high-emphasis" }, " Themes "),
                  createVNode("p", { class: "themes-page__description mb-0 text-body-1 text-medium-emphasis" }, " Manage and organize visual themes for educational content. ")
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                class: "d-flex align-center justify-end"
              }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    color: "primary",
                    height: "38",
                    class: "themes-page__create",
                    "prepend-icon": "ri-add-line",
                    onClick: handleCreateTheme
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Create Theme ")
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
      _push(`</header>`);
      _push(ssrRenderComponent(VCard, {
        class: "themes-page__card",
        variant: "outlined"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="themes-page__filters" data-v-ddec3607${_scopeId}>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": [($event) => searchQuery.value = $event, ($event) => page.value = 1],
              "aria-label": "Search theme name",
              placeholder: "Search theme name....",
              "prepend-inner-icon": "ri-search-line",
              "hide-details": "",
              density: "compact",
              variant: "outlined",
              class: "themes-page__search"
            }, null, _parent2, _scopeId));
            _push2(`<div class="themes-page__filter-actions" data-v-ddec3607${_scopeId}>`);
            _push2(ssrRenderComponent(VSelect, {
              modelValue: selectedCategory.value,
              "onUpdate:modelValue": [($event) => selectedCategory.value = $event, ($event) => page.value = 1],
              items: categoryOptions,
              label: "Category",
              "hide-details": "",
              clearable: "",
              density: "compact",
              variant: "outlined",
              class: "themes-page__select"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSelect, {
              modelValue: selectedSort.value,
              "onUpdate:modelValue": ($event) => selectedSort.value = $event,
              items: sortOptions,
              label: "Sort by",
              "hide-details": "",
              density: "compact",
              variant: "outlined",
              class: "themes-page__select"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              variant: "text",
              color: "primary",
              class: "themes-page__reset",
              onClick: resetFilters
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset Filter `);
                } else {
                  return [
                    createTextVNode(" Reset Filter ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            if (filteredThemes.value.length) {
              _push2(`<div class="themes-page__table-wrap" data-v-ddec3607${_scopeId}>`);
              _push2(ssrRenderComponent(VDataTable, {
                page: page.value,
                "onUpdate:page": ($event) => page.value = $event,
                "items-per-page": itemsPerPage.value,
                "onUpdate:itemsPerPage": ($event) => itemsPerPage.value = $event,
                headers: [],
                items: filteredThemes.value,
                "hide-default-header": "",
                class: "theme-grid-table"
              }, {
                body: withCtx(({ items }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<tbody data-v-ddec3607${_scopeId2}><tr data-v-ddec3607${_scopeId2}><td data-v-ddec3607${_scopeId2}><div class="themes-page__grid" data-v-ddec3607${_scopeId2}><!--[-->`);
                    ssrRenderList(items, (item) => {
                      _push3(ssrRenderComponent(ThemeCard, mergeProps({
                        key: unwrapTheme(item).id,
                        ref_for: true
                      }, unwrapTheme(item), {
                        onSelect: ($event) => handleSelectTheme(unwrapTheme(item))
                      }), null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div></td></tr></tbody>`);
                  } else {
                    return [
                      createVNode("tbody", null, [
                        createVNode("tr", null, [
                          createVNode("td", null, [
                            createVNode("div", { class: "themes-page__grid" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                                return openBlock(), createBlock(ThemeCard, mergeProps({
                                  key: unwrapTheme(item).id,
                                  ref_for: true
                                }, unwrapTheme(item), {
                                  onSelect: ($event) => handleSelectTheme(unwrapTheme(item))
                                }), null, 16, ["onSelect"]);
                              }), 128))
                            ])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="themes-page__empty" data-v-ddec3607${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                icon: "ri-palette-line",
                size: "32"
              }, null, _parent2, _scopeId));
              _push2(`<p data-v-ddec3607${_scopeId}>No themes match your filters.</p>`);
              _push2(ssrRenderComponent(VBtn, {
                variant: "text",
                color: "primary",
                onClick: resetFilters
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
              _push2(`</div>`);
            }
          } else {
            return [
              createVNode("div", { class: "themes-page__filters" }, [
                createVNode(VTextField, {
                  modelValue: searchQuery.value,
                  "onUpdate:modelValue": [($event) => searchQuery.value = $event, ($event) => page.value = 1],
                  "aria-label": "Search theme name",
                  placeholder: "Search theme name....",
                  "prepend-inner-icon": "ri-search-line",
                  "hide-details": "",
                  density: "compact",
                  variant: "outlined",
                  class: "themes-page__search"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "themes-page__filter-actions" }, [
                  createVNode(VSelect, {
                    modelValue: selectedCategory.value,
                    "onUpdate:modelValue": [($event) => selectedCategory.value = $event, ($event) => page.value = 1],
                    items: categoryOptions,
                    label: "Category",
                    "hide-details": "",
                    clearable: "",
                    density: "compact",
                    variant: "outlined",
                    class: "themes-page__select"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VSelect, {
                    modelValue: selectedSort.value,
                    "onUpdate:modelValue": ($event) => selectedSort.value = $event,
                    items: sortOptions,
                    label: "Sort by",
                    "hide-details": "",
                    density: "compact",
                    variant: "outlined",
                    class: "themes-page__select"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VBtn, {
                    variant: "text",
                    color: "primary",
                    class: "themes-page__reset",
                    onClick: resetFilters
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Reset Filter ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(VDivider),
              filteredThemes.value.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "themes-page__table-wrap"
              }, [
                createVNode(VDataTable, {
                  page: page.value,
                  "onUpdate:page": ($event) => page.value = $event,
                  "items-per-page": itemsPerPage.value,
                  "onUpdate:itemsPerPage": ($event) => itemsPerPage.value = $event,
                  headers: [],
                  items: filteredThemes.value,
                  "hide-default-header": "",
                  class: "theme-grid-table"
                }, {
                  body: withCtx(({ items }) => [
                    createVNode("tbody", null, [
                      createVNode("tr", null, [
                        createVNode("td", null, [
                          createVNode("div", { class: "themes-page__grid" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                              return openBlock(), createBlock(ThemeCard, mergeProps({
                                key: unwrapTheme(item).id,
                                ref_for: true
                              }, unwrapTheme(item), {
                                onSelect: ($event) => handleSelectTheme(unwrapTheme(item))
                              }), null, 16, ["onSelect"]);
                            }), 128))
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["page", "onUpdate:page", "items-per-page", "onUpdate:itemsPerPage", "items"])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "themes-page__empty"
              }, [
                createVNode(VIcon, {
                  icon: "ri-palette-line",
                  size: "32"
                }),
                createVNode("p", null, "No themes match your filters."),
                createVNode(VBtn, {
                  variant: "text",
                  color: "primary",
                  onClick: resetFilters
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Clear filters ")
                  ]),
                  _: 1
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: showSelectionMessage.value,
        "onUpdate:modelValue": ($event) => showSelectionMessage.value = $event,
        timeout: "1800",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`${ssrInterpolate((_a = selectedTheme.value) == null ? void 0 : _a.name)} selected `);
          } else {
            return [
              createTextVNode(toDisplayString((_b = selectedTheme.value) == null ? void 0 : _b.name) + " selected ", 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/themes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const themes = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ddec3607"]]);

export { themes as default };
