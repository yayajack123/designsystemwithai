import { defineComponent, ref, watch, computed, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, unref, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import { U as UiTableView } from "./UiTableView-BhoxpkGV.js";
import { s as studentRecords } from "./students-rxm8c39F.js";
import { s as sessionsForStudent, b as booksForStudent, a as sessionBook, f as formatSessionDate } from "./studentSessions-DLVEJCdB.js";
import { h as historiesForSession } from "./studentHistory-D6Asm5wf.js";
import { a as avatarText } from "./formatters-aT3ik1oa.js";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/hookable/dist/index.mjs";
import { V as VAlert } from "./VAlert-CLjViLm6.js";
import { V as VBtn, a as VIcon, aY as _export_sfc } from "../server.mjs";
import { V as VAvatar } from "./VAvatar-Bov4ZLUZ.js";
import { V as VRow, a as VCol } from "./VRow-BKXTxdYZ.js";
import { V as VCard } from "./VCard-u8p0g_5j.js";
import { V as VTooltip } from "./VTooltip-iMMZgjjz.js";
import { V as VDivider } from "./VDivider-CWdThEEs.js";
import { V as VChip } from "./VChip-DklVb85L.js";
import { V as VTextField } from "./VTextField-Cx_BotQJ.js";
import { V as VSelect } from "./filter-F6JSwjTx.js";
import { b as VPagination } from "./VDataTableFooter-OvjebZTV.js";
import { V as VSnackbar } from "./VSnackbar-CJfio8i7.js";
import "./UiSectionHeader-DuDEa5TY.js";
import "./VTabs-Bx65mjDv.js";
import "./forwardRefs-CtuH3aYe.js";
import "./VOverlay-2hsH7Y4R.js";
import "./VList-MvyrR4cM.js";
import "./index-CGI_inNZ.js";
import "./VCardText-Dvf5gJn3.js";
import "./VDataTable-BRP6mm-W.js";
import "./VCheckboxBtn-CHmNVDFy.js";
import "./VSelectionControl-ggoddxMA.js";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/unctx/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/h3/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/defu/dist/defu.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/klona/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/destr/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/ohash/dist/index.mjs";
import "@antfu/utils";
/* empty css               */
import "./VMenu-HR5UQDp_.js";
import "./dialog-transition-BWrfOTuu.js";
const sessionsPerPage = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "student-detail",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const validTab = (value) => value === "books" || value === "session" ? value : "details";
    const activeTab = ref(validTab(route.query.tab));
    watch(() => route.query.tab, (value) => {
      activeTab.value = validTab(value);
    });
    const snackbar = ref(false);
    const snackbarText = ref("");
    const snackbarColor = ref("success");
    const sessionPage = ref(1);
    const allSessions = computed(() => sessionsForStudent(selectedStudent.value?.id || ""));
    const visibleSessions = computed(() => allSessions.value.slice(
      (sessionPage.value - 1) * sessionsPerPage,
      sessionPage.value * sessionsPerPage
    ));
    const sessionPageCount = computed(() => Math.ceil(allSessions.value.length / sessionsPerPage));
    watch(() => route.query.id, () => {
      sessionPage.value = 1;
    });
    const bookSearch = ref("");
    const bookStatus = ref("all");
    const bookHeaders = [
      { title: "Book", key: "title" },
      { title: "Session", key: "session" },
      { title: "Status", key: "status" },
      { title: "Last updated", key: "updatedAt" }
    ];
    const selectedStudent = computed(() => studentRecords.find((item) => item.id === route.query.id));
    const allBooks = computed(() => booksForStudent(selectedStudent.value?.id || ""));
    const filteredBooks = computed(() => allBooks.value.filter(
      (book) => (bookStatus.value === "all" || book.status === bookStatus.value) && book.title.toLowerCase().includes(bookSearch.value.trim().toLowerCase())
    ));
    const resetBookFilters = () => {
      bookSearch.value = "";
      bookStatus.value = "all";
    };
    const bookStatusColor = (status) => status === "Completed" ? "success" : status === "Incomplete" ? "warning" : "secondary";
    const student = computed(() => ({
      id: selectedStudent.value?.id || "",
      name: selectedStudent.value?.name || "Student unavailable",
      initials: avatarText(selectedStudent.value?.name || "Student"),
      countryFlag: selectedStudent.value?.id === "1" ? "🇮🇩" : "",
      countryName: selectedStudent.value?.id === "1" ? "Indonesia" : "",
      username: selectedStudent.value?.studentId || "-",
      branch: selectedStudent.value?.id === "1" ? "Philipine ASIA" : "-",
      fullname: selectedStudent.value?.name || "Student unavailable",
      nickname: selectedStudent.value?.name.split(" ")[0] || "-",
      birthday: selectedStudent.value?.id === "1" ? "January 28, 2022" : "-",
      age: selectedStudent.value?.id === "1" ? "11" : "-",
      gender: selectedStudent.value?.id === "1" ? "Male" : "-",
      phoneNumber: selectedStudent.value?.id === "1" ? "08918298392" : "-",
      school: "-",
      status: selectedStudent.value?.id === "1" ? "Active" : "-",
      startDate: selectedStudent.value?.id === "1" ? "Oct 11, 2023" : "-",
      course: selectedStudent.value?.course || "-"
    }));
    const copyUsername = async () => {
      try {
        await (void 0).clipboard.writeText(student.value.username);
        snackbarText.value = "Username copied to clipboard!";
        snackbarColor.value = "success";
        snackbar.value = true;
      } catch (err) {
        snackbarText.value = `Username: ${student.value.username}`;
        snackbar.value = true;
      }
    };
    const copySessionCode = async (code) => {
      try {
        await (void 0).clipboard.writeText(code);
        snackbarText.value = "Session ID copied.";
        snackbarColor.value = "success";
      } catch {
        snackbarText.value = "Could not copy session ID.";
        snackbarColor.value = "error";
      }
      snackbar.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "student-detail-page" }, _attrs))} data-v-41807435>`);
      if (!selectedStudent.value) {
        _push(ssrRenderComponent(VAlert, {
          type: "warning",
          variant: "tonal",
          class: "mb-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Student not found. Return to Students and select a valid profile. `);
            } else {
              return [
                createTextVNode(" Student not found. Return to Students and select a valid profile. ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!--[--><div class="d-flex align-center gap-4 mb-4" data-v-41807435>`);
        _push(ssrRenderComponent(VBtn, {
          icon: "ri-arrow-left-line",
          variant: "outlined",
          color: "secondary",
          size: "small",
          class: "back-btn",
          to: { name: "students" }
        }, null, _parent));
        _push(`<div class="d-flex align-center gap-3" data-v-41807435>`);
        _push(ssrRenderComponent(VAvatar, {
          size: "34",
          color: "#F0EFF0",
          class: "student-avatar"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-body-1 font-weight-regular text-high-emphasis" data-v-41807435${_scopeId}>${ssrInterpolate(student.value.initials.slice(0, 2))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-body-1 font-weight-regular text-high-emphasis" }, toDisplayString(student.value.initials.slice(0, 2)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="d-flex flex-column" data-v-41807435><h1 class="student-name text-h6 font-weight-medium mb-0" data-v-41807435>${ssrInterpolate(student.value.fullname)}</h1><span class="student-country text-caption text-medium-emphasis" data-v-41807435>${ssrInterpolate(student.value.countryFlag)} ${ssrInterpolate(student.value.countryName)}</span></div></div></div><div class="custom-tabs-container mb-6" data-v-41807435><div class="d-flex gap-2 border-b" data-v-41807435><button class="${ssrRenderClass([{ active: activeTab.value === "details" }, "custom-tab-btn"])}" data-v-41807435> Student Details </button><button class="${ssrRenderClass([{ active: activeTab.value === "session" }, "custom-tab-btn"])}" data-v-41807435> Session </button><button class="${ssrRenderClass([{ active: activeTab.value === "books" }, "custom-tab-btn"])}" data-v-41807435> Books </button></div></div>`);
        if (activeTab.value === "details") {
          _push(`<div data-v-41807435>`);
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
                            _push4(`<div class="d-flex align-center gap-3 mb-3" data-v-41807435${_scopeId3}><div class="icon-wrapper" data-v-41807435${_scopeId3}>`);
                            _push4(ssrRenderComponent(VIcon, {
                              icon: "ri-contacts-line",
                              color: "primary",
                              size: "20"
                            }, null, _parent4, _scopeId3));
                            _push4(`</div><h2 class="card-title text-h6 font-weight-medium mb-0" data-v-41807435${_scopeId3}> Basic Info </h2></div><div class="basic-info-list pl-md-11" data-v-41807435${_scopeId3}><div class="info-row d-flex align-center py-4" data-v-41807435${_scopeId3}><div class="info-label font-weight-medium" data-v-41807435${_scopeId3}> Username </div><div class="info-value flex-grow-1 font-weight-regular" data-v-41807435${_scopeId3}>${ssrInterpolate(student.value.username)}</div>`);
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
                            _push4(`<div class="info-row d-flex align-center py-4" data-v-41807435${_scopeId3}><div class="info-label font-weight-medium" data-v-41807435${_scopeId3}> Branch </div><div class="info-value flex-grow-1 font-weight-regular" data-v-41807435${_scopeId3}>${ssrInterpolate(student.value.branch)}</div></div>`);
                            _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                            _push4(`<div class="info-row d-flex align-center py-4" data-v-41807435${_scopeId3}><div class="info-label font-weight-medium" data-v-41807435${_scopeId3}> Fullname </div><div class="info-value flex-grow-1 font-weight-regular" data-v-41807435${_scopeId3}>${ssrInterpolate(student.value.fullname)}</div></div>`);
                            _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                            _push4(`<div class="info-row d-flex align-center py-4" data-v-41807435${_scopeId3}><div class="info-label font-weight-medium" data-v-41807435${_scopeId3}> Nickname </div><div class="info-value flex-grow-1 font-weight-regular" data-v-41807435${_scopeId3}>${ssrInterpolate(student.value.nickname)}</div></div>`);
                            _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                            _push4(`<div class="info-row d-flex align-center py-4" data-v-41807435${_scopeId3}><div class="info-label font-weight-medium" data-v-41807435${_scopeId3}> Birthday </div><div class="info-value flex-grow-1 font-weight-regular" data-v-41807435${_scopeId3}>${ssrInterpolate(student.value.birthday)}</div></div>`);
                            _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                            _push4(`<div class="info-row d-flex align-center py-4" data-v-41807435${_scopeId3}><div class="info-label font-weight-medium" data-v-41807435${_scopeId3}> Age </div><div class="info-value flex-grow-1 font-weight-regular" data-v-41807435${_scopeId3}>${ssrInterpolate(student.value.age)}</div></div>`);
                            _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                            _push4(`<div class="info-row d-flex align-center py-4" data-v-41807435${_scopeId3}><div class="info-label font-weight-medium" data-v-41807435${_scopeId3}> Gender </div><div class="info-value flex-grow-1 font-weight-regular" data-v-41807435${_scopeId3}>${ssrInterpolate(student.value.gender)}</div></div>`);
                            _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                            _push4(`<div class="info-row d-flex align-center py-4" data-v-41807435${_scopeId3}><div class="info-label font-weight-medium" data-v-41807435${_scopeId3}> Phone number </div><div class="info-value flex-grow-1 font-weight-regular" data-v-41807435${_scopeId3}>${ssrInterpolate(student.value.phoneNumber)}</div></div>`);
                            _push4(ssrRenderComponent(VDivider, { class: "my-0" }, null, _parent4, _scopeId3));
                            _push4(`<div class="info-row d-flex align-center py-4" data-v-41807435${_scopeId3}><div class="info-label font-weight-medium" data-v-41807435${_scopeId3}> School </div><div class="info-value flex-grow-1 font-weight-regular text-secondary-emphasis" data-v-41807435${_scopeId3}>${ssrInterpolate(student.value.school)}</div></div></div>`);
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
                            _push4(`<div class="d-flex align-center gap-3 mb-6" data-v-41807435${_scopeId3}><div class="icon-wrapper" data-v-41807435${_scopeId3}>`);
                            _push4(ssrRenderComponent(VIcon, {
                              icon: "ri-settings-2-line",
                              color: "primary",
                              size: "20"
                            }, null, _parent4, _scopeId3));
                            _push4(`</div><h2 class="card-title text-h6 font-weight-medium mb-0" data-v-41807435${_scopeId3}> Settings </h2></div><div class="settings-list d-flex flex-column gap-5" data-v-41807435${_scopeId3}><div class="settings-item" data-v-41807435${_scopeId3}><div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1" data-v-41807435${_scopeId3}> Student status </div><div class="d-flex align-center gap-2" data-v-41807435${_scopeId3}><span class="status-dot green-dot" data-v-41807435${_scopeId3}></span><span class="settings-value text-body-1 text-high-emphasis" data-v-41807435${_scopeId3}>${ssrInterpolate(student.value.status)}</span></div></div><div class="settings-item" data-v-41807435${_scopeId3}><div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1" data-v-41807435${_scopeId3}> Country </div><div class="settings-value text-body-1 text-high-emphasis" data-v-41807435${_scopeId3}>${ssrInterpolate(student.value.countryName)}</div></div><div class="settings-item" data-v-41807435${_scopeId3}><div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1" data-v-41807435${_scopeId3}> Start Date </div><div class="settings-value text-body-1 text-high-emphasis" data-v-41807435${_scopeId3}>${ssrInterpolate(student.value.startDate)}</div></div><div class="settings-item" data-v-41807435${_scopeId3}><div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1" data-v-41807435${_scopeId3}> Course </div><div class="settings-value text-body-1 text-high-emphasis" data-v-41807435${_scopeId3}>${ssrInterpolate(student.value.course)}</div></div></div>`);
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
        } else if (activeTab.value === "books") {
          _push(`<div data-v-41807435><div class="mb-4" data-v-41807435><h2 class="text-h5 font-weight-medium text-high-emphasis mb-1" data-v-41807435>Books</h2><p class="text-body-2 text-medium-emphasis mb-0" data-v-41807435>Book history across all sessions for ${ssrInterpolate(student.value.fullname)}.</p></div>`);
          _push(ssrRenderComponent(UiTableView, {
            title: "",
            headers: bookHeaders,
            items: filteredBooks.value,
            "mobile-cards": true,
            "items-per-page": -1,
            "hide-pagination": true,
            onResetFilters: resetBookFilters
          }, {
            filters: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VTextField, {
                  modelValue: bookSearch.value,
                  "onUpdate:modelValue": ($event) => bookSearch.value = $event,
                  label: "Search books",
                  "prepend-inner-icon": "ri-search-line",
                  density: "compact",
                  variant: "outlined",
                  "hide-details": "",
                  clearable: "",
                  class: "book-filter"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(VSelect, {
                  modelValue: bookStatus.value,
                  "onUpdate:modelValue": ($event) => bookStatus.value = $event,
                  label: "Status",
                  items: [
                    { title: "All statuses", value: "all" },
                    { title: "Completed", value: "Completed" },
                    { title: "Incomplete", value: "Incomplete" },
                    { title: "Idle", value: "Idle" }
                  ],
                  density: "compact",
                  variant: "outlined",
                  "hide-details": "",
                  class: "book-filter"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VTextField, {
                    modelValue: bookSearch.value,
                    "onUpdate:modelValue": ($event) => bookSearch.value = $event,
                    label: "Search books",
                    "prepend-inner-icon": "ri-search-line",
                    density: "compact",
                    variant: "outlined",
                    "hide-details": "",
                    clearable: "",
                    class: "book-filter"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VSelect, {
                    modelValue: bookStatus.value,
                    "onUpdate:modelValue": ($event) => bookStatus.value = $event,
                    label: "Status",
                    items: [
                      { title: "All statuses", value: "all" },
                      { title: "Completed", value: "Completed" },
                      { title: "Incomplete", value: "Incomplete" },
                      { title: "Idle", value: "Idle" }
                    ],
                    density: "compact",
                    variant: "outlined",
                    "hide-details": "",
                    class: "book-filter"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            "item.title": withCtx(({ item }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="font-weight-medium text-high-emphasis" data-v-41807435${_scopeId}>${ssrInterpolate(item.title)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "font-weight-medium text-high-emphasis" }, toDisplayString(item.title), 1)
                ];
              }
            }),
            "item.status": withCtx(({ item }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VChip, {
                  color: bookStatusColor(item.status),
                  variant: "tonal",
                  size: "small"
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
                    color: bookStatusColor(item.status),
                    variant: "tonal",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.status), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ];
              }
            }),
            "item.updatedAt": withCtx(({ item }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.updatedAt)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.updatedAt), 1)
                ];
              }
            }),
            "no-data": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="pa-8 text-center text-body-2 text-medium-emphasis" data-v-41807435${_scopeId}>${ssrInterpolate(allBooks.value.length ? "No books match these filters." : "No book history for this student yet.")}</div>`);
              } else {
                return [
                  createVNode("div", { class: "pa-8 text-center text-body-2 text-medium-emphasis" }, toDisplayString(allBooks.value.length ? "No books match these filters." : "No book history for this student yet."), 1)
                ];
              }
            }),
            "mobile-cards": withCtx(({ items }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (items.length) {
                  _push2(`<div class="pa-4 d-flex flex-column gap-3" data-v-41807435${_scopeId}><!--[-->`);
                  ssrRenderList(items, (book) => {
                    _push2(ssrRenderComponent(VCard, {
                      key: book.id,
                      variant: "outlined",
                      class: "pa-4"
                    }, {
                      default: withCtx((_, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div class="d-flex align-start justify-space-between gap-3 mb-2" data-v-41807435${_scopeId2}><h3 class="text-body-1 font-weight-medium text-high-emphasis mb-0" data-v-41807435${_scopeId2}>${ssrInterpolate(book.title)}</h3>`);
                          _push3(ssrRenderComponent(VChip, {
                            color: bookStatusColor(book.status),
                            variant: "tonal",
                            size: "small"
                          }, {
                            default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`${ssrInterpolate(book.status)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(book.status), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                          _push3(`</div><p class="text-body-2 text-medium-emphasis mb-0" data-v-41807435${_scopeId2}>${ssrInterpolate(book.session)} · Updated ${ssrInterpolate(book.updatedAt)}</p>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex align-start justify-space-between gap-3 mb-2" }, [
                              createVNode("h3", { class: "text-body-1 font-weight-medium text-high-emphasis mb-0" }, toDisplayString(book.title), 1),
                              createVNode(VChip, {
                                color: bookStatusColor(book.status),
                                variant: "tonal",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(book.status), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(book.session) + " · Updated " + toDisplayString(book.updatedAt), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<p class="pa-8 text-center text-body-2 text-medium-emphasis mb-0" data-v-41807435${_scopeId}>${ssrInterpolate(allBooks.value.length ? "No books match these filters." : "No book history for this student yet.")}</p>`);
                }
              } else {
                return [
                  items.length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "pa-4 d-flex flex-column gap-3"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(items, (book) => {
                      return openBlock(), createBlock(VCard, {
                        key: book.id,
                        variant: "outlined",
                        class: "pa-4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-start justify-space-between gap-3 mb-2" }, [
                            createVNode("h3", { class: "text-body-1 font-weight-medium text-high-emphasis mb-0" }, toDisplayString(book.title), 1),
                            createVNode(VChip, {
                              color: bookStatusColor(book.status),
                              variant: "tonal",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(book.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(book.session) + " · Updated " + toDisplayString(book.updatedAt), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ])) : (openBlock(), createBlock("p", {
                    key: 1,
                    class: "pa-8 text-center text-body-2 text-medium-emphasis mb-0"
                  }, toDisplayString(allBooks.value.length ? "No books match these filters." : "No book history for this student yet."), 1))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else if (activeTab.value === "session") {
          _push(`<div data-v-41807435><div class="mb-4" data-v-41807435><h2 class="text-h5 font-weight-medium text-high-emphasis mb-1" data-v-41807435>${ssrInterpolate(student.value.fullname)}&#39;s learning sessions</h2><p class="text-body-2 text-medium-emphasis mb-0" data-v-41807435>Review each session&#39;s book, schedule, and remaining meetings.</p></div>`);
          if (!allSessions.value.length) {
            _push(ssrRenderComponent(VCard, {
              variant: "outlined",
              class: "pa-8 text-center"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(VIcon, {
                    icon: "ri-calendar-event-line",
                    size: "40",
                    color: "secondary",
                    class: "mb-3"
                  }, null, _parent2, _scopeId));
                  _push2(`<h3 class="text-h6 text-high-emphasis mb-1" data-v-41807435${_scopeId}>No sessions yet</h3><p class="text-body-2 text-medium-emphasis mb-0" data-v-41807435${_scopeId}>Sessions for this student will appear here.</p>`);
                } else {
                  return [
                    createVNode(VIcon, {
                      icon: "ri-calendar-event-line",
                      size: "40",
                      color: "secondary",
                      class: "mb-3"
                    }),
                    createVNode("h3", { class: "text-h6 text-high-emphasis mb-1" }, "No sessions yet"),
                    createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, "Sessions for this student will appear here.")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<div class="d-flex flex-column gap-4" data-v-41807435><!--[-->`);
            ssrRenderList(visibleSessions.value, (session) => {
              _push(ssrRenderComponent(VCard, {
                key: session.id,
                variant: "outlined",
                class: "session-card pa-5"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="d-flex align-center flex-wrap gap-3" data-v-41807435${_scopeId}>`);
                    _push2(ssrRenderComponent(VAvatar, {
                      color: "primary",
                      variant: "tonal",
                      rounded: "lg",
                      size: "40"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(VIcon, {
                            icon: "ri-user-line",
                            size: "20"
                          }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "ri-user-line",
                              size: "20"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`<div class="session-heading d-flex align-center flex-wrap gap-x-4 gap-y-1" data-v-41807435${_scopeId}><div class="d-flex align-center flex-wrap gap-2" data-v-41807435${_scopeId}><h3 class="text-h6 font-weight-medium text-high-emphasis mb-0" data-v-41807435${_scopeId}>Session ${ssrInterpolate(session.number)}</h3>`);
                    _push2(ssrRenderComponent(VChip, {
                      color: session.status === "Active" ? "success" : "secondary",
                      variant: "tonal",
                      size: "small"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(session.status)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(session.status), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`</div><div class="d-flex align-center gap-1" data-v-41807435${_scopeId}><span class="text-body-2 text-medium-emphasis" data-v-41807435${_scopeId}>${ssrInterpolate(session.code)}</span>`);
                    _push2(ssrRenderComponent(VBtn, {
                      icon: "ri-file-copy-line",
                      variant: "text",
                      color: "primary",
                      rounded: "pill",
                      size: "x-small",
                      "aria-label": `Copy session ID ${session.code}`,
                      onClick: ($event) => copySessionCode(session.code)
                    }, null, _parent2, _scopeId));
                    _push2(`</div></div></div>`);
                    _push2(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent2, _scopeId));
                    _push2(`<div class="session-main d-grid gap-4" data-v-41807435${_scopeId}><div class="d-flex align-start gap-3" data-v-41807435${_scopeId}>`);
                    _push2(ssrRenderComponent(VAvatar, {
                      color: "primary",
                      variant: "tonal",
                      rounded: "lg",
                      size: "40"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(VIcon, {
                            icon: "ri-bookmark-line",
                            size: "20"
                          }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "ri-bookmark-line",
                              size: "20"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`<span class="text-body-1 font-weight-medium text-high-emphasis pt-2" data-v-41807435${_scopeId}>${ssrInterpolate(session.productName)}</span></div><div class="session-main-details d-flex flex-column gap-3" data-v-41807435${_scopeId}><div data-v-41807435${_scopeId}><div class="text-body-2 font-weight-medium text-high-emphasis" data-v-41807435${_scopeId}>Class type</div><div class="text-body-2 text-medium-emphasis" data-v-41807435${_scopeId}>${ssrInterpolate(session.classType)}</div></div><div data-v-41807435${_scopeId}><div class="text-body-2 font-weight-medium text-high-emphasis" data-v-41807435${_scopeId}>Book</div><div class="text-body-2 text-medium-emphasis" data-v-41807435${_scopeId}>${ssrInterpolate(unref(sessionBook)(session)?.title || "—")}</div></div></div></div>`);
                    if (session.className || session.teacherName || session.schedule) {
                      _push2(`<div class="session-context mt-5 pa-3" data-v-41807435${_scopeId}>`);
                      if (session.className) {
                        _push2(`<div class="session-context-item" data-v-41807435${_scopeId}><span class="session-context-icon" data-v-41807435${_scopeId}>`);
                        _push2(ssrRenderComponent(VIcon, {
                          icon: "ri-building-line",
                          color: "primary",
                          size: "20"
                        }, null, _parent2, _scopeId));
                        _push2(`</span><div data-v-41807435${_scopeId}><div class="text-caption text-medium-emphasis" data-v-41807435${_scopeId}>Class</div><div class="text-body-2 font-weight-medium text-high-emphasis" data-v-41807435${_scopeId}>${ssrInterpolate(session.className)}</div></div></div>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      if (session.teacherName) {
                        _push2(`<div class="session-context-item" data-v-41807435${_scopeId}><span class="session-context-icon" data-v-41807435${_scopeId}>`);
                        _push2(ssrRenderComponent(VIcon, {
                          icon: "ri-user-follow-line",
                          color: "primary",
                          size: "20"
                        }, null, _parent2, _scopeId));
                        _push2(`</span><div data-v-41807435${_scopeId}><div class="text-caption text-medium-emphasis" data-v-41807435${_scopeId}>Teacher</div><div class="text-body-2 font-weight-medium text-high-emphasis" data-v-41807435${_scopeId}>${ssrInterpolate(session.teacherName)}</div></div></div>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      if (session.schedule) {
                        _push2(`<div class="session-context-item" data-v-41807435${_scopeId}><span class="session-context-icon" data-v-41807435${_scopeId}>`);
                        _push2(ssrRenderComponent(VIcon, {
                          icon: "ri-calendar-2-line",
                          color: "primary",
                          size: "20"
                        }, null, _parent2, _scopeId));
                        _push2(`</span><div data-v-41807435${_scopeId}><div class="text-caption text-medium-emphasis" data-v-41807435${_scopeId}>Schedule</div><div class="text-body-2 font-weight-medium text-high-emphasis" data-v-41807435${_scopeId}>${ssrInterpolate(session.schedule)}</div></div></div>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`</div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent2, _scopeId));
                    _push2(`<div class="d-flex align-center justify-space-between flex-wrap gap-3" data-v-41807435${_scopeId}><div class="d-flex align-center flex-wrap gap-2 text-body-2" data-v-41807435${_scopeId}><span class="text-medium-emphasis" data-v-41807435${_scopeId}>Quota: <strong class="text-high-emphasis" data-v-41807435${_scopeId}>${ssrInterpolate(session.quota)} meetings</strong></span>`);
                    _push2(ssrRenderComponent(VChip, {
                      color: "warning",
                      variant: "outlined",
                      size: "small"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`Expires ${ssrInterpolate(unref(formatSessionDate)(session.expiresAt))}`);
                        } else {
                          return [
                            createTextVNode("Expires " + toDisplayString(unref(formatSessionDate)(session.expiresAt)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`</div>`);
                    _push2(ssrRenderComponent(VBtn, {
                      color: "primary",
                      variant: "outlined",
                      rounded: "pill",
                      to: `/students/${student.value.id}/sessions/${session.id}`
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(` See details `);
                        } else {
                          return [
                            createTextVNode(" See details ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    if (unref(historiesForSession)(student.value.id, session.id).length) {
                      _push2(ssrRenderComponent(VBtn, {
                        color: "primary",
                        variant: "text",
                        rounded: "pill",
                        to: { path: `/students/${student.value.id}/sessions/${session.id}/history/${unref(historiesForSession)(student.value.id, session.id)[0].id}`, query: { tab: "meeting-history" } }
                      }, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(` See meeting history `);
                          } else {
                            return [
                              createTextVNode(" See meeting history ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex align-center flex-wrap gap-3" }, [
                        createVNode(VAvatar, {
                          color: "primary",
                          variant: "tonal",
                          rounded: "lg",
                          size: "40"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "ri-user-line",
                              size: "20"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "session-heading d-flex align-center flex-wrap gap-x-4 gap-y-1" }, [
                          createVNode("div", { class: "d-flex align-center flex-wrap gap-2" }, [
                            createVNode("h3", { class: "text-h6 font-weight-medium text-high-emphasis mb-0" }, "Session " + toDisplayString(session.number), 1),
                            createVNode(VChip, {
                              color: session.status === "Active" ? "success" : "secondary",
                              variant: "tonal",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(session.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode("div", { class: "d-flex align-center gap-1" }, [
                            createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(session.code), 1),
                            createVNode(VBtn, {
                              icon: "ri-file-copy-line",
                              variant: "text",
                              color: "primary",
                              rounded: "pill",
                              size: "x-small",
                              "aria-label": `Copy session ID ${session.code}`,
                              onClick: ($event) => copySessionCode(session.code)
                            }, null, 8, ["aria-label", "onClick"])
                          ])
                        ])
                      ]),
                      createVNode(VDivider, { class: "my-4" }),
                      createVNode("div", { class: "session-main d-grid gap-4" }, [
                        createVNode("div", { class: "d-flex align-start gap-3" }, [
                          createVNode(VAvatar, {
                            color: "primary",
                            variant: "tonal",
                            rounded: "lg",
                            size: "40"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-bookmark-line",
                                size: "20"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis pt-2" }, toDisplayString(session.productName), 1)
                        ]),
                        createVNode("div", { class: "session-main-details d-flex flex-column gap-3" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Class type"),
                            createVNode("div", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(session.classType), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Book"),
                            createVNode("div", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(unref(sessionBook)(session)?.title || "—"), 1)
                          ])
                        ])
                      ]),
                      session.className || session.teacherName || session.schedule ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "session-context mt-5 pa-3"
                      }, [
                        session.className ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "session-context-item"
                        }, [
                          createVNode("span", { class: "session-context-icon" }, [
                            createVNode(VIcon, {
                              icon: "ri-building-line",
                              color: "primary",
                              size: "20"
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Class"),
                            createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis" }, toDisplayString(session.className), 1)
                          ])
                        ])) : createCommentVNode("", true),
                        session.teacherName ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "session-context-item"
                        }, [
                          createVNode("span", { class: "session-context-icon" }, [
                            createVNode(VIcon, {
                              icon: "ri-user-follow-line",
                              color: "primary",
                              size: "20"
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Teacher"),
                            createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis" }, toDisplayString(session.teacherName), 1)
                          ])
                        ])) : createCommentVNode("", true),
                        session.schedule ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "session-context-item"
                        }, [
                          createVNode("span", { class: "session-context-icon" }, [
                            createVNode(VIcon, {
                              icon: "ri-calendar-2-line",
                              color: "primary",
                              size: "20"
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Schedule"),
                            createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis" }, toDisplayString(session.schedule), 1)
                          ])
                        ])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      createVNode(VDivider, { class: "my-4" }),
                      createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-3" }, [
                        createVNode("div", { class: "d-flex align-center flex-wrap gap-2 text-body-2" }, [
                          createVNode("span", { class: "text-medium-emphasis" }, [
                            createTextVNode("Quota: "),
                            createVNode("strong", { class: "text-high-emphasis" }, toDisplayString(session.quota) + " meetings", 1)
                          ]),
                          createVNode(VChip, {
                            color: "warning",
                            variant: "outlined",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Expires " + toDisplayString(unref(formatSessionDate)(session.expiresAt)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "outlined",
                          rounded: "pill",
                          to: `/students/${student.value.id}/sessions/${session.id}`
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" See details ")
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        unref(historiesForSession)(student.value.id, session.id).length ? (openBlock(), createBlock(VBtn, {
                          key: 0,
                          color: "primary",
                          variant: "text",
                          rounded: "pill",
                          to: { path: `/students/${student.value.id}/sessions/${session.id}/history/${unref(historiesForSession)(student.value.id, session.id)[0].id}`, query: { tab: "meeting-history" } }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" See meeting history ")
                          ]),
                          _: 2
                        }, 1032, ["to"])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]-->`);
            if (sessionPageCount.value > 1) {
              _push(`<div class="d-flex justify-end" data-v-41807435>`);
              _push(ssrRenderComponent(VPagination, {
                modelValue: sessionPage.value,
                "onUpdate:modelValue": ($event) => sessionPage.value = $event,
                length: sessionPageCount.value,
                density: "compact",
                "aria-label": "Session pages"
              }, null, _parent));
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VSnackbar, {
          modelValue: snackbar.value,
          "onUpdate:modelValue": ($event) => snackbar.value = $event,
          timeout: "2000",
          color: snackbarColor.value,
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
        _push(`<!--]-->`);
      }
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
const studentDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41807435"]]);
export {
  studentDetail as default
};
