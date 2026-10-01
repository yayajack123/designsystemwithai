import { ba as __nuxt_component_0, a as VIcon, V as VBtn, b3 as VProgressLinear, aY as _export_sfc } from "../server.mjs";
import { _ as _sfc_main$1 } from "./DialogCloseBtn-CVR_yFk0.js";
import { defineComponent, ref, computed, watch, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Transition, toDisplayString, Fragment, renderList, isRef, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { a as avatarText } from "./formatters-aT3ik1oa.js";
import { U as UiTableView } from "./UiTableView-BhoxpkGV.js";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/hookable/dist/index.mjs";
import { V as VRow, a as VCol } from "./VRow-BKXTxdYZ.js";
import { V as VCard, a as VCardTitle, b as VCardActions } from "./VCard-u8p0g_5j.js";
import { V as VChip } from "./VChip-DklVb85L.js";
import { V as VAvatar } from "./VAvatar-Bov4ZLUZ.js";
import { V as VMenu } from "./VMenu-HR5UQDp_.js";
import { V as VList, a as VListItem, b as VListItemTitle } from "./VList-MvyrR4cM.js";
import { V as VTooltip } from "./VTooltip-iMMZgjjz.js";
import { V as VDivider } from "./VDivider-CWdThEEs.js";
import { V as VDialog } from "./VDialog-Bx9nn4_A.js";
import { V as VCardText } from "./VCardText-Dvf5gJn3.js";
import { V as VTextarea } from "./VTextarea-Grf16ApK.js";
import { V as VSnackbar } from "./VSnackbar-CJfio8i7.js";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/unctx/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/defu/dist/defu.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/klona/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/destr/dist/index.mjs";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/ohash/dist/index.mjs";
import "@antfu/utils";
import "./UiSectionHeader-DuDEa5TY.js";
import "./VTabs-Bx65mjDv.js";
import "./forwardRefs-CtuH3aYe.js";
import "./VOverlay-2hsH7Y4R.js";
import "./VDataTable-BRP6mm-W.js";
import "./VDataTableFooter-OvjebZTV.js";
import "./filter-F6JSwjTx.js";
import "./VTextField-Cx_BotQJ.js";
import "./index-CGI_inNZ.js";
import "./VCheckboxBtn-CHmNVDFy.js";
import "./VSelectionControl-ggoddxMA.js";
import "./dialog-transition-BWrfOTuu.js";
/* empty css               */
const teacherWelcomeIllustration = "" + __buildAssetsURL("teacher-welcome-illustration.CM2FzvjN.png");
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
const pendingLoadMoreAmount = 20;
const pendingInitialVisibleCount = 5;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard-teacher",
  __ssrInlineRender: true,
  setup(__props) {
    const appreciationItems = [
      {
        title: "Your consistency gives students room to grow.",
        quote: "Small moments of clarity become big leaps over time.",
        detail: "You have sent 12 parent updates this month.",
        fallbackIcon: "ri-sparkling-2-line",
        lordIconSrc: "/icons/lordicon/recognition/bar-chart-vertical-grow.json"
      },
      {
        title: "Eight students moved up a level this month.",
        quote: "Progress looks different for every student. You keep making space for it.",
        detail: "Student impact is up from your previous review window.",
        fallbackIcon: "ri-flag-2-line",
        lordIconSrc: "/icons/lordicon/recognition/arrow-trending-up-system-outline.json"
      },
      {
        title: "You are in the top 10% for student satisfaction.",
        quote: "The way you listen is part of what students remember.",
        detail: "Based on the latest student survey cycle.",
        fallbackIcon: "ri-heart-3-line",
        lordIconSrc: "/icons/lordicon/recognition/confetti-system-outline.json"
      },
      {
        title: "Three new skills are now part of your toolkit.",
        quote: "A prepared teacher makes curiosity feel safe.",
        detail: "Your learning record is up to date.",
        fallbackIcon: "ri-lightbulb-flash-line",
        lordIconSrc: "/icons/lordicon/recognition/badge-ribbon-system-outline.json"
      }
    ];
    const summaryItems = [
      { label: "Parents updated", value: 12, period: "This month", icon: "ri-chat-3-line", tone: "primary" },
      { label: "Students impacted", value: 8, period: "This month", icon: "ri-arrow-up-circle-line", tone: "info" },
      { label: "Skill growth", value: 3, period: "This month", icon: "ri-lightbulb-line", tone: "warning" },
      { label: "Projects submitted", value: 6, period: "Ready to review", icon: "ri-folder-check-line", tone: "success" }
    ];
    const watchlistTabs = ["Attendance", "Productivity", "Quiz"];
    const watchlistTab = ref("Attendance");
    const watchlistItems = ref([
      { id: "wl-1", name: "Alice Johnson", initials: "AJ", course: "Coding Xplorer", issue: "Missed 2 assigned meetings", metric: "2 absences", type: "Attendance", risk: "Red", status: "Open", window: "Meetings 9–12" },
      { id: "wl-2", name: "Fajar Ramadhan", initials: "FR", course: "Python Foundations", issue: "Learning velocity dropped", metric: "0.25 lessons / meeting", type: "Productivity", risk: "Red", status: "In Progress", window: "Meetings 9–12" },
      { id: "wl-3", name: "Gita Permata", initials: "GP", course: "Web Design Basics", issue: "Quiz score needs attention", metric: "62 average score", type: "Quiz", risk: "Red", status: "No Action", window: "Meetings 5–8" },
      { id: "wl-4", name: "Diana Prince", initials: "DP", course: "Coding Xplorer", issue: "One absence in the window", metric: "1 absence", type: "Attendance", risk: "Yellow", status: "Resolved", window: "Meetings 9–12" },
      { id: "wl-5", name: "Bima Putra", initials: "BP", course: "Python Foundations", issue: "Progress is slower than target", metric: "0.50 lessons / meeting", type: "Productivity", risk: "Yellow", status: "Open", window: "Meetings 5–8" },
      { id: "wl-6", name: "Nadia Sari", initials: "NS", course: "Game Design", issue: "Quiz score is below target", metric: "74 average score", type: "Quiz", risk: "Yellow", status: "Open", window: "Meetings 9–12" }
    ]);
    const filteredWatchlist = computed(() => watchlistItems.value.filter((item) => item.type === watchlistTab.value));
    const watchlistRedCount = computed(() => watchlistItems.value.filter((item) => item.risk === "Red").length);
    const watchlistTableTabs = watchlistTabs.map((tab) => ({ label: tab, value: tab }));
    const watchlistHeaders = [
      { title: "STUDENT", key: "student", sortable: false },
      { title: "ISSUE", key: "issue", sortable: false },
      { title: "RISK", key: "risk", sortable: false },
      { title: "STATUS", key: "status", sortable: false },
      { title: "ACTION", key: "action", sortable: false, align: "center", width: 120 }
    ];
    const getAvatarText = (name) => {
      const cleanName = name.replace(/^(Mr\.|Ms\.|Mrs\.|Dr\.)\s+/i, "");
      return avatarText(cleanName);
    };
    const pendingTab = ref("Journal");
    const pendingStudents = [
      "Alice Johnson",
      "Diana Prince",
      "Fajar Ramadhan",
      "Gita Permata",
      "Bima Putra",
      "Nadia Sari",
      "Raka Aditya"
    ];
    const pendingBooks = ["Coding Xplorer", "Python Foundations", "Web Design Basics", "Game Design", "Scratch Studio"];
    const pendingItems = {
      Journal: Array.from({ length: 70 }, (_, index) => ({
        id: `journal-${index + 1}`,
        student: pendingStudents[index % pendingStudents.length],
        studentId: `s${index + 1}`,
        classId: `${index % 3 + 1}`,
        book: pendingBooks[index % pendingBooks.length],
        meetingLesson: `Meeting ${12 - index % 4} - Lesson ${12 - index % 4}`,
        dueDate: index === 0 ? "Today · 16:00" : index === 1 ? "Today · 18:00" : index < 5 ? "Tomorrow" : `${13 + index % 4} Sep`,
        category: "Journal"
      })),
      Reports: Array.from({ length: 12 }, (_, index) => ({
        id: `report-${index + 1}`,
        student: pendingStudents[(index + 3) % pendingStudents.length],
        book: pendingBooks[(index + 2) % pendingBooks.length],
        progressDone: Math.max(1, 8 - index % 4),
        progressTotal: 8,
        status: ["Waiting for Daily Journal", "Not Created", "Created"][index % 3],
        category: "Reports"
      })),
      Projects: Array.from({ length: 8 }, (_, index) => ({
        id: `project-${index + 1}`,
        student: pendingStudents[(index + 5) % pendingStudents.length],
        book: pendingBooks[(index + 3) % pendingBooks.length],
        lesson: `Lesson ${8 - index % 5}`,
        date: index === 0 ? "Today · 19:00" : index === 1 ? "12 Sep" : `${13 + index % 4} Sep`,
        category: "Projects"
      }))
    };
    const activePendingItems = computed(() => pendingItems[pendingTab.value].slice(0, pendingInitialVisibleCount));
    const pendingTotal = computed(() => Object.values(pendingItems).flat().length);
    const activePendingTotal = computed(() => pendingItems[pendingTab.value].length);
    const activePendingRemaining = computed(() => Math.max(0, activePendingTotal.value - activePendingItems.value.length));
    const pendingMoreCount = computed(() => Math.min(pendingLoadMoreAmount, activePendingRemaining.value));
    const hasMorePendingItems = computed(() => activePendingRemaining.value > 0);
    const pendingTableTabs = computed(() => Object.keys(pendingItems).map((tab) => ({
      label: tab,
      value: tab,
      count: pendingItems[tab].length
    })));
    const pendingHeaders = computed(() => {
      if (pendingTab.value === "Reports") {
        return [
          { title: "STUDENT NAME", key: "student", sortable: false },
          { title: "BOOK", key: "book", sortable: false },
          { title: "PROGRESS", key: "progress", sortable: false, minWidth: 180 },
          { title: "STATUS", key: "status", sortable: false, minWidth: 180 },
          { title: "ACTION", key: "action", sortable: false, align: "center", width: 88 }
        ];
      }
      if (pendingTab.value === "Projects") {
        return [
          { title: "STUDENT NAME", key: "student", sortable: false },
          { title: "BOOK", key: "book", sortable: false },
          { title: "LESSON", key: "lesson", sortable: false },
          { title: "DATE", key: "date", sortable: false },
          { title: "ACTION", key: "action", sortable: false, align: "center", width: 120 }
        ];
      }
      return [
        { title: "STUDENT NAME", key: "student", sortable: false },
        { title: "BOOK", key: "book", sortable: false },
        { title: "MEETING - LESSON", key: "meetingLesson", sortable: false },
        { title: "DUE DATE", key: "dueDate", sortable: false },
        { title: "ACTION", key: "action", sortable: false, align: "center", width: 120 }
      ];
    });
    const scheduleItems = [
      { id: "schedule-1", startsAt: "2026-09-11T09:00:00+08:00", endsAt: "2026-09-11T10:30:00+08:00", dateLabel: "Tomorrow", timeLabel: "09:00–10:30", name: "Regular Kids", type: "Adaptive", students: 5, status: "soon" },
      { id: "schedule-2", startsAt: "2026-09-11T14:00:00+08:00", endsAt: "2026-09-11T15:30:00+08:00", dateLabel: "Tomorrow", timeLabel: "14:00–15:30", name: "Advanced Teens", type: "Dynamic", students: 7, status: "ready" },
      { id: "schedule-3", startsAt: "2026-09-12T08:00:00+08:00", endsAt: "2026-09-12T09:30:00+08:00", dateLabel: "12 Sep", timeLabel: "08:00–09:30", name: "Future Coders", type: "Adaptive", students: 6, status: "ready" }
    ];
    const selfLearningItems = [
      { id: "learning-1", title: "Check LMS reflection notes", estimate: "10 min" },
      { id: "learning-2", title: "Review Python Game Dev Lesson 7 material", estimate: "15 min" },
      { id: "learning-3", title: "Prepare for Tech Explorer class tomorrow", estimate: "20 min" }
    ];
    const currentTime = ref(null);
    const nearestScheduleId = computed(() => {
      const now = currentTime.value ?? Date.now();
      const upcoming = scheduleItems.filter((item) => new Date(item.endsAt).getTime() > now).sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());
      return upcoming[0]?.id ?? scheduleItems[0]?.id;
    });
    const getCountdown = (item) => {
      if (!currentTime.value) return item.status === "soon" ? "In 45 min" : item.dateLabel;
      const start = new Date(item.startsAt).getTime();
      const end = new Date(item.endsAt).getTime();
      const diff = start - currentTime.value;
      if (currentTime.value >= start && currentTime.value < end) return "Live now";
      if (diff <= 0) return item.dateLabel;
      if (diff < 60 * 60 * 1e3) return `In ${Math.max(1, Math.round(diff / 6e4))} min`;
      if (diff < 24 * 60 * 60 * 1e3) return `In ${Math.floor(diff / 36e5)} hrs`;
      return item.dateLabel;
    };
    const currentAppreciation = ref(0);
    const prefersReducedMotion = ref(false);
    const isMobileViewport = ref(false);
    let appreciationTimer;
    const activeAppreciation = computed(() => appreciationItems[currentAppreciation.value]);
    const shouldAutoRotateAppreciation = computed(() => !prefersReducedMotion.value && !isMobileViewport.value);
    const startAppreciationRotation = () => {
      if (!shouldAutoRotateAppreciation.value) return;
      if (appreciationTimer) clearInterval(appreciationTimer);
      appreciationTimer = setInterval();
    };
    const pauseAppreciationRotation = () => {
      if (!appreciationTimer) return;
      clearInterval(appreciationTimer);
      appreciationTimer = void 0;
    };
    watch(shouldAutoRotateAppreciation, (shouldRotate) => {
      if (shouldRotate) startAppreciationRotation();
      else pauseAppreciationRotation();
    });
    const riskColor = (risk) => ({ Green: "success", Yellow: "warning", Red: "error" })[risk];
    const statusColor = (status) => ({
      Open: "secondary",
      "In Progress": "info",
      Resolved: "success",
      Failed: "error",
      "No Action": "warning",
      Closed: "secondary"
    })[status];
    const getPendingActionRoute = (task, action) => {
      if (action === "journal" || task.category === "Journal") {
        return {
          name: "meeting-journal-create",
          query: {
            classId: task.classId || "1",
            studentId: task.studentId || "s1",
            returnTo: "dashboard-teacher"
          }
        };
      }
      if (task.category === "Projects") return { name: "assessments" };
      return { name: "reports" };
    };
    const getPendingProgressPercent = (task) => {
      if (!task.progressTotal) return 0;
      return Math.round((task.progressDone || 0) / task.progressTotal * 100);
    };
    const pendingStatusColor = (status) => ({
      "Not Created": "secondary",
      "Waiting for Daily Journal": "warning",
      Created: "success"
    })[status || "Not Created"];
    const getPendingViewAllRoute = (tab) => {
      if (tab === "Journal") return { name: "reports", query: { tab: "daily-journal" } };
      if (tab === "Reports") return { name: "reports", query: { tab: "reports" } };
      return { name: "assessments" };
    };
    const isActionDialogOpen = ref(false);
    const activeWatchlistItem = ref(null);
    const actionNote = ref("");
    const toastShow = ref(false);
    const toastText = ref("");
    const dashboardHeaderAnimationLayout = {
      fit: "contain",
      align: [0.5, 1]
    };
    const dashboardHeaderAnimationRenderConfig = {
      autoResize: true,
      freezeOnOffscreen: true
    };
    const openActionDialog = (item) => {
      activeWatchlistItem.value = item;
      actionNote.value = "";
      isActionDialogOpen.value = true;
    };
    const submitAction = () => {
      if (!activeWatchlistItem.value) return;
      activeWatchlistItem.value.status = "In Progress";
      isActionDialogOpen.value = false;
      toastText.value = `Action saved for ${activeWatchlistItem.value.name}`;
      toastShow.value = true;
    };
    const openSelfLearningItem = (item) => {
      toastText.value = `${item.title} opened in demo mode`;
      toastShow.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      const _component_DialogCloseBtn = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "teacher-dashboard" }, _attrs))} data-v-61a25fc4>`);
      _push(ssrRenderComponent(VRow, { class: "dashboard-layout" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8",
              lg: "8",
              class: "dashboard-main-column"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<main class="dashboard-main" data-v-61a25fc4${_scopeId2}><header class="dashboard-header-wrap dashboard-reveal dashboard-reveal--1" data-v-61a25fc4${_scopeId2}>`);
                  _push3(ssrRenderComponent(VCard, {
                    class: "dashboard-card dashboard-header__combined",
                    elevation: "0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="dashboard-header__intro" data-v-61a25fc4${_scopeId3}><div class="dashboard-header__content" data-v-61a25fc4${_scopeId3}><h1 class="dashboard-page-title text-h4 text-high-emphasis" data-v-61a25fc4${_scopeId3}> Good morning, Julie. </h1><p class="text-body-2 text-medium-emphasis mb-0" data-v-61a25fc4${_scopeId3}> A quick view of your classes, student progress, and today’s priorities. </p></div><div class="dashboard-header__art" aria-hidden="true" data-v-61a25fc4${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ClientOnly, null, {
                          fallback: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img${ssrRenderAttr("src", unref(teacherWelcomeIllustration))} alt="" class="dashboard-header__illustration" data-v-61a25fc4${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  src: unref(teacherWelcomeIllustration),
                                  alt: "",
                                  class: "dashboard-header__illustration"
                                }, null, 8, ["src"])
                              ];
                            }
                          })
                        }, _parent4, _scopeId3));
                        _push4(`</div></div><section class="recognition-card" aria-label="Personal achievement" data-v-61a25fc4${_scopeId3}><div class="recognition-banner" data-v-61a25fc4${_scopeId3}><div class="recognition-rail" aria-hidden="true" data-v-61a25fc4${_scopeId3}>`);
                        if (!unref(prefersReducedMotion)) {
                          _push4(`<lord-icon${ssrRenderAttr("src", unref(activeAppreciation).lordIconSrc)} trigger="loop" loading="lazy" class="recognition-lord-icon current-color" aria-hidden="true" data-v-61a25fc4${_scopeId3}></lord-icon>`);
                        } else {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: unref(activeAppreciation).fallbackIcon,
                            size: "20"
                          }, null, _parent4, _scopeId3));
                        }
                        _push4(`</div><div class="recognition-content" data-v-61a25fc4${_scopeId3}><div class="appreciation-copy" aria-live="polite" data-v-61a25fc4${_scopeId3}><h2 class="text-h6 font-weight-medium text-high-emphasis mb-1" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(unref(activeAppreciation).title)}</h2><p class="text-body-2 text-medium-emphasis mb-1 appreciation-quote" data-v-61a25fc4${_scopeId3}> “${ssrInterpolate(unref(activeAppreciation).quote)}” </p><div class="d-flex align-center gap-2 text-caption text-medium-emphasis" data-v-61a25fc4${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-checkbox-circle-line",
                          size: "15",
                          color: "secondary"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="text-secondary" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(unref(activeAppreciation).detail)}</span></div></div></div></div><div class="recognition-progress" aria-label="Appreciation carousel position" data-v-61a25fc4${_scopeId3}><!--[-->`);
                        ssrRenderList(appreciationItems, (_4, index) => {
                          _push4(`<span class="${ssrRenderClass([{ "recognition-progress__item--active": index === unref(currentAppreciation) }, "recognition-progress__item"])}" data-v-61a25fc4${_scopeId3}></span>`);
                        });
                        _push4(`<!--]--></div></section>`);
                      } else {
                        return [
                          createVNode("div", { class: "dashboard-header__intro" }, [
                            createVNode("div", { class: "dashboard-header__content" }, [
                              createVNode("h1", { class: "dashboard-page-title text-h4 text-high-emphasis" }, " Good morning, Julie. "),
                              createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, " A quick view of your classes, student progress, and today’s priorities. ")
                            ]),
                            createVNode("div", {
                              class: "dashboard-header__art",
                              "aria-hidden": "true"
                            }, [
                              createVNode(_component_ClientOnly, null, {
                                fallback: withCtx(() => [
                                  createVNode("img", {
                                    src: unref(teacherWelcomeIllustration),
                                    alt: "",
                                    class: "dashboard-header__illustration"
                                  }, null, 8, ["src"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(unref(DotLottieVue), {
                                    src: "/animations/dashboard-teacher-header.lottie",
                                    "animation-id": "icon",
                                    autoplay: !unref(prefersReducedMotion),
                                    loop: !unref(prefersReducedMotion),
                                    layout: dashboardHeaderAnimationLayout,
                                    "render-config": dashboardHeaderAnimationRenderConfig,
                                    "background-color": "transparent",
                                    "aria-hidden": "true",
                                    class: "dashboard-header__animation"
                                  }, null, 8, ["autoplay", "loop"])
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("section", {
                            class: "recognition-card",
                            "aria-label": "Personal achievement",
                            onMouseenter: pauseAppreciationRotation,
                            onMouseleave: startAppreciationRotation,
                            onTouchstart: pauseAppreciationRotation,
                            onTouchend: startAppreciationRotation
                          }, [
                            createVNode("div", { class: "recognition-banner" }, [
                              createVNode("div", {
                                class: "recognition-rail",
                                "aria-hidden": "true"
                              }, [
                                !unref(prefersReducedMotion) ? (openBlock(), createBlock("lord-icon", {
                                  key: unref(activeAppreciation).lordIconSrc,
                                  src: unref(activeAppreciation).lordIconSrc,
                                  trigger: "loop",
                                  loading: "lazy",
                                  class: "recognition-lord-icon current-color",
                                  "aria-hidden": "true"
                                }, null, 8, ["src"])) : (openBlock(), createBlock(VIcon, {
                                  key: 1,
                                  icon: unref(activeAppreciation).fallbackIcon,
                                  size: "20"
                                }, null, 8, ["icon"]))
                              ]),
                              createVNode("div", { class: "recognition-content" }, [
                                createVNode(Transition, {
                                  name: "appreciation-fade",
                                  mode: "out-in"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("div", {
                                      key: unref(activeAppreciation).title,
                                      class: "appreciation-copy",
                                      "aria-live": "polite"
                                    }, [
                                      createVNode("h2", { class: "text-h6 font-weight-medium text-high-emphasis mb-1" }, toDisplayString(unref(activeAppreciation).title), 1),
                                      createVNode("p", { class: "text-body-2 text-medium-emphasis mb-1 appreciation-quote" }, " “" + toDisplayString(unref(activeAppreciation).quote) + "” ", 1),
                                      createVNode("div", { class: "d-flex align-center gap-2 text-caption text-medium-emphasis" }, [
                                        createVNode(VIcon, {
                                          icon: "ri-checkbox-circle-line",
                                          size: "15",
                                          color: "secondary"
                                        }),
                                        createVNode("span", { class: "text-secondary" }, toDisplayString(unref(activeAppreciation).detail), 1)
                                      ])
                                    ]))
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", {
                              class: "recognition-progress",
                              "aria-label": "Appreciation carousel position"
                            }, [
                              (openBlock(), createBlock(Fragment, null, renderList(appreciationItems, (_4, index) => {
                                return createVNode("span", {
                                  key: index,
                                  class: ["recognition-progress__item", { "recognition-progress__item--active": index === unref(currentAppreciation) }]
                                }, null, 2);
                              }), 64))
                            ])
                          ], 32)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</header><section class="dashboard-section dashboard-reveal dashboard-reveal--2" aria-labelledby="summary-heading" data-v-61a25fc4${_scopeId2}><div class="section-heading" data-v-61a25fc4${_scopeId2}><div data-v-61a25fc4${_scopeId2}><h2 id="summary-heading" class="text-h5 text-high-emphasis mb-0" data-v-61a25fc4${_scopeId2}> Your Statistic </h2></div><span class="section-meta text-caption" data-v-61a25fc4${_scopeId2}>Updated today</span></div><div class="summary-grid" data-v-61a25fc4${_scopeId2}><!--[-->`);
                  ssrRenderList(summaryItems, (item) => {
                    _push3(ssrRenderComponent(VCard, {
                      key: item.label,
                      class: ["summary-card", `summary-card--${item.tone}`],
                      elevation: "0"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="summary-card__top" data-v-61a25fc4${_scopeId3}>`);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: item.icon,
                            size: "19"
                          }, null, _parent4, _scopeId3));
                          _push4(`<span class="summary-card__period text-caption" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.period)}</span></div><span class="summary-card__value text-h3 font-weight-medium" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.value)}</span><span class="summary-card__label text-body-2 font-weight-medium" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.label)}</span>`);
                        } else {
                          return [
                            createVNode("div", { class: "summary-card__top" }, [
                              createVNode(VIcon, {
                                icon: item.icon,
                                size: "19"
                              }, null, 8, ["icon"]),
                              createVNode("span", { class: "summary-card__period text-caption" }, toDisplayString(item.period), 1)
                            ]),
                            createVNode("span", { class: "summary-card__value text-h3 font-weight-medium" }, toDisplayString(item.value), 1),
                            createVNode("span", { class: "summary-card__label text-body-2 font-weight-medium" }, toDisplayString(item.label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div></section><section class="dashboard-section dashboard-reveal dashboard-reveal--3" aria-labelledby="watchlist-heading" data-v-61a25fc4${_scopeId2}>`);
                  _push3(ssrRenderComponent(UiTableView, {
                    activeTab: unref(watchlistTab),
                    "onUpdate:activeTab": ($event) => isRef(watchlistTab) ? watchlistTab.value = $event : null,
                    title: "",
                    tabs: unref(watchlistTableTabs),
                    headers: watchlistHeaders,
                    items: unref(filteredWatchlist),
                    "items-per-page": -1,
                    "hide-filters": "",
                    "hide-pagination": "",
                    "tabs-inside-card": "",
                    "mobile-cards": "",
                    "card-class": "dashboard-card",
                    "table-class": "dashboard-table watchlist-table",
                    flat: "",
                    class: "dashboard-table-view"
                  }, {
                    "card-header": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-heading" data-v-61a25fc4${_scopeId3}><div data-v-61a25fc4${_scopeId3}><div class="watchlist-title-row" data-v-61a25fc4${_scopeId3}><h2 id="watchlist-heading" class="text-h5 text-high-emphasis mb-0" data-v-61a25fc4${_scopeId3}> Priority Watchlist </h2>`);
                        _push4(ssrRenderComponent(VChip, {
                          color: "error",
                          variant: "tonal",
                          size: "x-small"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(watchlistRedCount))} red risks`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(watchlistRedCount)) + " red risks", 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><p class="text-body-2 text-medium-emphasis mb-0" data-v-61a25fc4${_scopeId3}> Latest fixed-block evaluation · refreshed every Monday </p></div>`);
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          color: "primary",
                          size: "small",
                          class: "section-link",
                          to: { name: "students" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` View all `);
                              _push5(ssrRenderComponent(VIcon, {
                                end: "",
                                icon: "ri-arrow-right-line",
                                size: "16"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" View all "),
                                createVNode(VIcon, {
                                  end: "",
                                  icon: "ri-arrow-right-line",
                                  size: "16"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-heading" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "watchlist-title-row" }, [
                                createVNode("h2", {
                                  id: "watchlist-heading",
                                  class: "text-h5 text-high-emphasis mb-0"
                                }, " Priority Watchlist "),
                                createVNode(VChip, {
                                  color: "error",
                                  variant: "tonal",
                                  size: "x-small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(watchlistRedCount)) + " red risks", 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, " Latest fixed-block evaluation · refreshed every Monday ")
                            ]),
                            createVNode(VBtn, {
                              variant: "text",
                              color: "primary",
                              size: "small",
                              class: "section-link",
                              to: { name: "students" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" View all "),
                                createVNode(VIcon, {
                                  end: "",
                                  icon: "ri-arrow-right-line",
                                  size: "16"
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    "mobile-cards": withCtx(({ items }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (items.length) {
                          _push4(`<div class="watchlist-mobile-list" data-v-61a25fc4${_scopeId3}><!--[-->`);
                          ssrRenderList(items, (item) => {
                            _push4(`<article class="watchlist-mobile-card" data-v-61a25fc4${_scopeId3}><div class="watchlist-mobile-card__topline" data-v-61a25fc4${_scopeId3}><div class="student-cell watchlist-mobile-card__student" data-v-61a25fc4${_scopeId3}>`);
                            _push4(ssrRenderComponent(VAvatar, {
                              size: "34",
                              color: "grey-100",
                              class: "border"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span class="text-caption font-weight-medium text-high-emphasis" data-v-61a25fc4${_scopeId4}>${ssrInterpolate(getAvatarText(item.name))}</span>`);
                                } else {
                                  return [
                                    createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(getAvatarText(item.name)), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<div class="min-w-0" data-v-61a25fc4${_scopeId3}><h3 class="text-body-1 font-weight-medium mb-1" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.name)}</h3><p class="text-caption text-medium-emphasis mb-0" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.course)} · ${ssrInterpolate(item.window)}</p></div></div><div class="watchlist-mobile-card__risk" data-v-61a25fc4${_scopeId3}><span class="text-caption text-medium-emphasis" data-v-61a25fc4${_scopeId3}>Risk</span>`);
                            _push4(ssrRenderComponent(VChip, {
                              color: riskColor(item.risk),
                              variant: "tonal",
                              size: "small",
                              class: "status-chip text-caption font-weight-medium"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span class="status-dot" data-v-61a25fc4${_scopeId4}></span> ${ssrInterpolate(item.risk)}`);
                                } else {
                                  return [
                                    createVNode("span", { class: "status-dot" }),
                                    createTextVNode(" " + toDisplayString(item.risk), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div></div><div class="watchlist-mobile-card__issue" data-v-61a25fc4${_scopeId3}><span class="text-caption text-medium-emphasis" data-v-61a25fc4${_scopeId3}>Issue</span><span class="text-body-2 text-high-emphasis" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.issue)}</span><span class="text-caption text-medium-emphasis" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.metric)}</span></div><div class="watchlist-mobile-card__status" data-v-61a25fc4${_scopeId3}><span class="text-caption text-medium-emphasis" data-v-61a25fc4${_scopeId3}>Status</span>`);
                            _push4(ssrRenderComponent(VChip, {
                              color: statusColor(item.status),
                              variant: "outlined",
                              size: "small",
                              class: "status-chip text-caption font-weight-medium"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                            _push4(ssrRenderComponent(VBtn, {
                              variant: "outlined",
                              color: "primary",
                              rounded: "pill",
                              block: "",
                              size: "small",
                              class: "watchlist-mobile-card__action",
                              onClick: ($event) => openActionDialog(item)
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` Action `);
                                  _push5(ssrRenderComponent(VIcon, {
                                    end: "",
                                    icon: "ri-arrow-right-up-line",
                                    size: "15"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createTextVNode(" Action "),
                                    createVNode(VIcon, {
                                      end: "",
                                      icon: "ri-arrow-right-up-line",
                                      size: "15"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</article>`);
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          _push4(`<div class="empty-cell" data-v-61a25fc4${_scopeId3}> No students in this evaluation view. </div>`);
                        }
                      } else {
                        return [
                          items.length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "watchlist-mobile-list"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                              return openBlock(), createBlock("article", {
                                key: item.id,
                                class: "watchlist-mobile-card"
                              }, [
                                createVNode("div", { class: "watchlist-mobile-card__topline" }, [
                                  createVNode("div", { class: "student-cell watchlist-mobile-card__student" }, [
                                    createVNode(VAvatar, {
                                      size: "34",
                                      color: "grey-100",
                                      class: "border"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(getAvatarText(item.name)), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "min-w-0" }, [
                                      createVNode("h3", { class: "text-body-1 font-weight-medium mb-1" }, toDisplayString(item.name), 1),
                                      createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, toDisplayString(item.course) + " · " + toDisplayString(item.window), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "watchlist-mobile-card__risk" }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Risk"),
                                    createVNode(VChip, {
                                      color: riskColor(item.risk),
                                      variant: "tonal",
                                      size: "small",
                                      class: "status-chip text-caption font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "status-dot" }),
                                        createTextVNode(" " + toDisplayString(item.risk), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ])
                                ]),
                                createVNode("div", { class: "watchlist-mobile-card__issue" }, [
                                  createVNode("span", { class: "text-caption text-medium-emphasis" }, "Issue"),
                                  createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(item.issue), 1),
                                  createVNode("span", { class: "text-caption text-medium-emphasis" }, toDisplayString(item.metric), 1)
                                ]),
                                createVNode("div", { class: "watchlist-mobile-card__status" }, [
                                  createVNode("span", { class: "text-caption text-medium-emphasis" }, "Status"),
                                  createVNode(VChip, {
                                    color: statusColor(item.status),
                                    variant: "outlined",
                                    size: "small",
                                    class: "status-chip text-caption font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.status), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                createVNode(VBtn, {
                                  variant: "outlined",
                                  color: "primary",
                                  rounded: "pill",
                                  block: "",
                                  size: "small",
                                  class: "watchlist-mobile-card__action",
                                  onClick: ($event) => openActionDialog(item)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Action "),
                                    createVNode(VIcon, {
                                      end: "",
                                      icon: "ri-arrow-right-up-line",
                                      size: "15"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]);
                            }), 128))
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "empty-cell"
                          }, " No students in this evaluation view. "))
                        ];
                      }
                    }),
                    "item.student": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="student-cell" data-v-61a25fc4${_scopeId3}>`);
                        _push4(ssrRenderComponent(VAvatar, {
                          size: "34",
                          color: "grey-100",
                          class: "border"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-caption font-weight-medium text-high-emphasis" data-v-61a25fc4${_scopeId4}>${ssrInterpolate(getAvatarText(item.name))}</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(getAvatarText(item.name)), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`<div class="min-w-0" data-v-61a25fc4${_scopeId3}><span class="student-name font-weight-medium" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.name)}</span><span class="student-course text-caption" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.course)} · ${ssrInterpolate(item.window)}</span></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "student-cell" }, [
                            createVNode(VAvatar, {
                              size: "34",
                              color: "grey-100",
                              class: "border"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(getAvatarText(item.name)), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", { class: "min-w-0" }, [
                              createVNode("span", { class: "student-name font-weight-medium" }, toDisplayString(item.name), 1),
                              createVNode("span", { class: "student-course text-caption" }, toDisplayString(item.course) + " · " + toDisplayString(item.window), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    "item.issue": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="issue-cell" data-v-61a25fc4${_scopeId3}><span class="issue-title" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.issue)}</span><span class="issue-metric text-caption" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.metric)}</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "issue-cell" }, [
                            createVNode("span", { class: "issue-title" }, toDisplayString(item.issue), 1),
                            createVNode("span", { class: "issue-metric text-caption" }, toDisplayString(item.metric), 1)
                          ])
                        ];
                      }
                    }),
                    "item.risk": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VChip, {
                          color: riskColor(item.risk),
                          variant: "tonal",
                          size: "small",
                          class: "status-chip text-caption font-weight-medium"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="status-dot" data-v-61a25fc4${_scopeId4}></span> ${ssrInterpolate(item.risk)}`);
                            } else {
                              return [
                                createVNode("span", { class: "status-dot" }),
                                createTextVNode(" " + toDisplayString(item.risk), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VChip, {
                            color: riskColor(item.risk),
                            variant: "tonal",
                            size: "small",
                            class: "status-chip text-caption font-weight-medium"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "status-dot" }),
                              createTextVNode(" " + toDisplayString(item.risk), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ];
                      }
                    }),
                    "item.status": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VChip, {
                          color: statusColor(item.status),
                          variant: "outlined",
                          size: "small",
                          class: "status-chip text-caption font-weight-medium"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(item.status)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(item.status), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VChip, {
                            color: statusColor(item.status),
                            variant: "outlined",
                            size: "small",
                            class: "status-chip text-caption font-weight-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ];
                      }
                    }),
                    "item.action": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          color: "primary",
                          size: "small",
                          class: "action-button",
                          onClick: ($event) => openActionDialog(item)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Action `);
                            } else {
                              return [
                                createTextVNode(" Action ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "primary",
                            size: "small",
                            class: "action-button",
                            onClick: ($event) => openActionDialog(item)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Action ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ];
                      }
                    }),
                    "no-data": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="empty-cell" data-v-61a25fc4${_scopeId3}> No students in this evaluation view. </div>`);
                      } else {
                        return [
                          createVNode("div", { class: "empty-cell" }, " No students in this evaluation view. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</section><section class="dashboard-section dashboard-reveal dashboard-reveal--4" aria-labelledby="pending-heading" data-v-61a25fc4${_scopeId2}>`);
                  _push3(ssrRenderComponent(UiTableView, {
                    activeTab: unref(pendingTab),
                    "onUpdate:activeTab": ($event) => isRef(pendingTab) ? pendingTab.value = $event : null,
                    title: "",
                    tabs: unref(pendingTableTabs),
                    headers: unref(pendingHeaders),
                    items: unref(activePendingItems),
                    "items-per-page": -1,
                    "hide-filters": "",
                    "hide-pagination": "",
                    "tabs-inside-card": "",
                    "mobile-cards": "",
                    "card-class": "dashboard-card",
                    "table-class": "dashboard-table pending-table",
                    flat: "",
                    class: "dashboard-table-view"
                  }, {
                    "card-header": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-heading" data-v-61a25fc4${_scopeId3}><div data-v-61a25fc4${_scopeId3}><h2 id="pending-heading" class="text-h5 text-high-emphasis mb-1" data-v-61a25fc4${_scopeId3}> Pending Task </h2><p class="text-body-2 text-medium-emphasis mb-0" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(unref(pendingTotal))} items are waiting across your workflows </p></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-heading" }, [
                            createVNode("div", null, [
                              createVNode("h2", {
                                id: "pending-heading",
                                class: "text-h5 text-high-emphasis mb-1"
                              }, " Pending Task "),
                              createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(unref(pendingTotal)) + " items are waiting across your workflows ", 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    "mobile-cards": withCtx(({ items }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (items.length) {
                          _push4(`<div class="pending-mobile-list" data-v-61a25fc4${_scopeId3}><!--[-->`);
                          ssrRenderList(items, (item) => {
                            _push4(`<article class="pending-task-card" data-v-61a25fc4${_scopeId3}><div class="pending-task-card__topline" data-v-61a25fc4${_scopeId3}><div class="min-w-0" data-v-61a25fc4${_scopeId3}><h3 class="text-body-1 font-weight-medium mb-1" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.student)}</h3></div>`);
                            if (unref(pendingTab) === "Journal") {
                              _push4(`<div class="pending-task-card__due" data-v-61a25fc4${_scopeId3}><span class="text-caption text-medium-emphasis" data-v-61a25fc4${_scopeId3}>Due Date</span><span class="due-label text-body-2 font-weight-medium" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.dueDate)}</span></div>`);
                            } else if (unref(pendingTab) === "Projects") {
                              _push4(`<div class="pending-task-card__due" data-v-61a25fc4${_scopeId3}><span class="text-caption text-medium-emphasis" data-v-61a25fc4${_scopeId3}>Date</span><span class="text-body-2 font-weight-medium" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.date)}</span></div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div><div class="pending-task-card__details" data-v-61a25fc4${_scopeId3}><div data-v-61a25fc4${_scopeId3}><span class="text-caption text-medium-emphasis" data-v-61a25fc4${_scopeId3}>Book</span><span class="text-body-2" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.book)}</span></div>`);
                            if (unref(pendingTab) === "Journal") {
                              _push4(`<div data-v-61a25fc4${_scopeId3}><span class="text-caption text-medium-emphasis" data-v-61a25fc4${_scopeId3}>Meeting - Lesson</span><span class="text-body-2" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.meetingLesson)}</span></div>`);
                            } else if (unref(pendingTab) === "Projects") {
                              _push4(`<div data-v-61a25fc4${_scopeId3}><span class="text-caption text-medium-emphasis" data-v-61a25fc4${_scopeId3}>Lesson</span><span class="text-body-2" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.lesson)}</span></div>`);
                            } else {
                              _push4(`<div data-v-61a25fc4${_scopeId3}><span class="text-caption text-medium-emphasis" data-v-61a25fc4${_scopeId3}>Progress</span><div class="pending-progress" data-v-61a25fc4${_scopeId3}>`);
                              _push4(ssrRenderComponent(VProgressLinear, {
                                "model-value": getPendingProgressPercent(item),
                                color: "primary",
                                height: "6",
                                rounded: "",
                                class: "pending-progress__bar",
                                "aria-hidden": "true"
                              }, null, _parent4, _scopeId3));
                              _push4(`<span class="text-body-2 font-weight-medium text-no-wrap" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.progressDone)}/${ssrInterpolate(item.progressTotal)}</span></div></div>`);
                            }
                            if (unref(pendingTab) === "Reports") {
                              _push4(`<div data-v-61a25fc4${_scopeId3}><span class="text-caption text-medium-emphasis" data-v-61a25fc4${_scopeId3}>Status</span>`);
                              _push4(ssrRenderComponent(VChip, {
                                color: pendingStatusColor(item.status),
                                variant: "tonal",
                                size: "small",
                                class: "pending-status-chip"
                              }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(item.status)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(item.status), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div>`);
                            if (unref(pendingTab) !== "Reports") {
                              _push4(ssrRenderComponent(VBtn, {
                                to: getPendingActionRoute(item),
                                variant: "outlined",
                                color: "primary",
                                rounded: "pill",
                                block: "",
                                size: "small",
                                class: "pending-task-card__action"
                              }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(unref(pendingTab) === "Journal" ? "Create" : "Review")} `);
                                    _push5(ssrRenderComponent(VIcon, {
                                      end: "",
                                      icon: "ri-arrow-right-up-line",
                                      size: "15"
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(unref(pendingTab) === "Journal" ? "Create" : "Review") + " ", 1),
                                      createVNode(VIcon, {
                                        end: "",
                                        icon: "ri-arrow-right-up-line",
                                        size: "15"
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<div class="pending-task-card__action-row" data-v-61a25fc4${_scopeId3}>`);
                              _push4(ssrRenderComponent(VMenu, { location: "bottom end" }, {
                                activator: withCtx(({ props: menuProps }, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VBtn, mergeProps({ ref_for: true }, menuProps, {
                                      icon: "",
                                      variant: "outlined",
                                      color: "secondary",
                                      rounded: "pill",
                                      size: "small",
                                      class: "pending-menu-button",
                                      "aria-label": `More actions for ${item.student}`
                                    }), {
                                      default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(VIcon, { icon: "ri-more-2-fill" }, null, _parent6, _scopeId5));
                                          _push6(ssrRenderComponent(VTooltip, {
                                            activator: "parent",
                                            location: "top"
                                          }, {
                                            default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(` More actions `);
                                              } else {
                                                return [
                                                  createTextVNode(" More actions ")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(VIcon, { icon: "ri-more-2-fill" }),
                                            createVNode(VTooltip, {
                                              activator: "parent",
                                              location: "top"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" More actions ")
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
                                      createVNode(VBtn, mergeProps({ ref_for: true }, menuProps, {
                                        icon: "",
                                        variant: "outlined",
                                        color: "secondary",
                                        rounded: "pill",
                                        size: "small",
                                        class: "pending-menu-button",
                                        "aria-label": `More actions for ${item.student}`
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { icon: "ri-more-2-fill" }),
                                          createVNode(VTooltip, {
                                            activator: "parent",
                                            location: "top"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" More actions ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1040, ["aria-label"])
                                    ];
                                  }
                                }),
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VList, {
                                      density: "compact",
                                      "min-width": "210"
                                    }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(VListItem, {
                                            to: getPendingActionRoute(item, "journal")
                                          }, {
                                            prepend: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(VIcon, { icon: "ri-book-open-line" }, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(VIcon, { icon: "ri-book-open-line" })
                                                ];
                                              }
                                            }),
                                            default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(VListItemTitle, null, {
                                                  default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(`Create Daily Journal`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Create Daily Journal")
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Create Daily Journal")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                          _push6(ssrRenderComponent(VListItem, {
                                            to: getPendingActionRoute(item, "report")
                                          }, {
                                            prepend: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(VIcon, { icon: "ri-file-list-3-line" }, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(VIcon, { icon: "ri-file-list-3-line" })
                                                ];
                                              }
                                            }),
                                            default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(VListItemTitle, null, {
                                                  default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(`Create Report`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Create Report")
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Create Report")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(VListItem, {
                                              to: getPendingActionRoute(item, "journal")
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, { icon: "ri-book-open-line" })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Create Daily Journal")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["to"]),
                                            createVNode(VListItem, {
                                              to: getPendingActionRoute(item, "report")
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, { icon: "ri-file-list-3-line" })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Create Report")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["to"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(VList, {
                                        density: "compact",
                                        "min-width": "210"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VListItem, {
                                            to: getPendingActionRoute(item, "journal")
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, { icon: "ri-book-open-line" })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Create Daily Journal")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["to"]),
                                          createVNode(VListItem, {
                                            to: getPendingActionRoute(item, "report")
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, { icon: "ri-file-list-3-line" })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Create Report")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`<span class="text-caption text-medium-emphasis" data-v-61a25fc4${_scopeId3}>Action</span></div>`);
                            }
                            _push4(`</article>`);
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          _push4(`<div class="empty-cell" data-v-61a25fc4${_scopeId3}> Nothing is waiting here. Keep the good rhythm going. </div>`);
                        }
                      } else {
                        return [
                          items.length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "pending-mobile-list"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                              return openBlock(), createBlock("article", {
                                key: item.id,
                                class: "pending-task-card"
                              }, [
                                createVNode("div", { class: "pending-task-card__topline" }, [
                                  createVNode("div", { class: "min-w-0" }, [
                                    createVNode("h3", { class: "text-body-1 font-weight-medium mb-1" }, toDisplayString(item.student), 1)
                                  ]),
                                  unref(pendingTab) === "Journal" ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "pending-task-card__due"
                                  }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Due Date"),
                                    createVNode("span", { class: "due-label text-body-2 font-weight-medium" }, toDisplayString(item.dueDate), 1)
                                  ])) : unref(pendingTab) === "Projects" ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "pending-task-card__due"
                                  }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Date"),
                                    createVNode("span", { class: "text-body-2 font-weight-medium" }, toDisplayString(item.date), 1)
                                  ])) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "pending-task-card__details" }, [
                                  createVNode("div", null, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Book"),
                                    createVNode("span", { class: "text-body-2" }, toDisplayString(item.book), 1)
                                  ]),
                                  unref(pendingTab) === "Journal" ? (openBlock(), createBlock("div", { key: 0 }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Meeting - Lesson"),
                                    createVNode("span", { class: "text-body-2" }, toDisplayString(item.meetingLesson), 1)
                                  ])) : unref(pendingTab) === "Projects" ? (openBlock(), createBlock("div", { key: 1 }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Lesson"),
                                    createVNode("span", { class: "text-body-2" }, toDisplayString(item.lesson), 1)
                                  ])) : (openBlock(), createBlock("div", { key: 2 }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Progress"),
                                    createVNode("div", { class: "pending-progress" }, [
                                      createVNode(VProgressLinear, {
                                        "model-value": getPendingProgressPercent(item),
                                        color: "primary",
                                        height: "6",
                                        rounded: "",
                                        class: "pending-progress__bar",
                                        "aria-hidden": "true"
                                      }, null, 8, ["model-value"]),
                                      createVNode("span", { class: "text-body-2 font-weight-medium text-no-wrap" }, toDisplayString(item.progressDone) + "/" + toDisplayString(item.progressTotal), 1)
                                    ])
                                  ])),
                                  unref(pendingTab) === "Reports" ? (openBlock(), createBlock("div", { key: 3 }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Status"),
                                    createVNode(VChip, {
                                      color: pendingStatusColor(item.status),
                                      variant: "tonal",
                                      size: "small",
                                      class: "pending-status-chip"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.status), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ])) : createCommentVNode("", true)
                                ]),
                                unref(pendingTab) !== "Reports" ? (openBlock(), createBlock(VBtn, {
                                  key: 0,
                                  to: getPendingActionRoute(item),
                                  variant: "outlined",
                                  color: "primary",
                                  rounded: "pill",
                                  block: "",
                                  size: "small",
                                  class: "pending-task-card__action"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(pendingTab) === "Journal" ? "Create" : "Review") + " ", 1),
                                    createVNode(VIcon, {
                                      end: "",
                                      icon: "ri-arrow-right-up-line",
                                      size: "15"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["to"])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "pending-task-card__action-row"
                                }, [
                                  createVNode(VMenu, { location: "bottom end" }, {
                                    activator: withCtx(({ props: menuProps }) => [
                                      createVNode(VBtn, mergeProps({ ref_for: true }, menuProps, {
                                        icon: "",
                                        variant: "outlined",
                                        color: "secondary",
                                        rounded: "pill",
                                        size: "small",
                                        class: "pending-menu-button",
                                        "aria-label": `More actions for ${item.student}`
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { icon: "ri-more-2-fill" }),
                                          createVNode(VTooltip, {
                                            activator: "parent",
                                            location: "top"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" More actions ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1040, ["aria-label"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VList, {
                                        density: "compact",
                                        "min-width": "210"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VListItem, {
                                            to: getPendingActionRoute(item, "journal")
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, { icon: "ri-book-open-line" })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Create Daily Journal")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["to"]),
                                          createVNode(VListItem, {
                                            to: getPendingActionRoute(item, "report")
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, { icon: "ri-file-list-3-line" })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Create Report")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("span", { class: "text-caption text-medium-emphasis" }, "Action")
                                ]))
                              ]);
                            }), 128))
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "empty-cell"
                          }, " Nothing is waiting here. Keep the good rhythm going. "))
                        ];
                      }
                    }),
                    "item.student": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="student-name font-weight-medium" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.student)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "student-name font-weight-medium" }, toDisplayString(item.student), 1)
                        ];
                      }
                    }),
                    "item.book": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="table-muted text-caption" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.book)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "table-muted text-caption" }, toDisplayString(item.book), 1)
                        ];
                      }
                    }),
                    "item.meetingLesson": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="table-muted text-caption" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.meetingLesson)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "table-muted text-caption" }, toDisplayString(item.meetingLesson), 1)
                        ];
                      }
                    }),
                    "item.progress": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="pending-progress" data-v-61a25fc4${_scopeId3}>`);
                        _push4(ssrRenderComponent(VProgressLinear, {
                          "model-value": getPendingProgressPercent(item),
                          color: "primary",
                          height: "6",
                          rounded: "",
                          class: "pending-progress__bar",
                          "aria-hidden": "true"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="text-body-2 font-weight-medium text-no-wrap" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.progressDone)}/${ssrInterpolate(item.progressTotal)}</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "pending-progress" }, [
                            createVNode(VProgressLinear, {
                              "model-value": getPendingProgressPercent(item),
                              color: "primary",
                              height: "6",
                              rounded: "",
                              class: "pending-progress__bar",
                              "aria-hidden": "true"
                            }, null, 8, ["model-value"]),
                            createVNode("span", { class: "text-body-2 font-weight-medium text-no-wrap" }, toDisplayString(item.progressDone) + "/" + toDisplayString(item.progressTotal), 1)
                          ])
                        ];
                      }
                    }),
                    "item.status": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VChip, {
                          color: pendingStatusColor(item.status),
                          variant: "tonal",
                          size: "small",
                          class: "pending-status-chip"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(item.status)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(item.status), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VChip, {
                            color: pendingStatusColor(item.status),
                            variant: "tonal",
                            size: "small",
                            class: "pending-status-chip"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ];
                      }
                    }),
                    "item.lesson": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="table-muted text-caption" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.lesson)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "table-muted text-caption" }, toDisplayString(item.lesson), 1)
                        ];
                      }
                    }),
                    "item.date": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-body-2 text-high-emphasis" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.date)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(item.date), 1)
                        ];
                      }
                    }),
                    "item.dueDate": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="due-label text-body-2 font-weight-medium" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.dueDate)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "due-label text-body-2 font-weight-medium" }, toDisplayString(item.dueDate), 1)
                        ];
                      }
                    }),
                    "item.action": withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(pendingTab) !== "Reports") {
                          _push4(ssrRenderComponent(VBtn, {
                            to: getPendingActionRoute(item),
                            variant: "text",
                            color: "primary",
                            size: "small",
                            class: "action-link"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(pendingTab) === "Journal" ? "Create" : "Review")} `);
                                _push5(ssrRenderComponent(VIcon, {
                                  end: "",
                                  icon: "ri-arrow-right-up-line",
                                  size: "15"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(pendingTab) === "Journal" ? "Create" : "Review") + " ", 1),
                                  createVNode(VIcon, {
                                    end: "",
                                    icon: "ri-arrow-right-up-line",
                                    size: "15"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(VMenu, { location: "bottom end" }, {
                            activator: withCtx(({ props: menuProps }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtn, mergeProps(menuProps, {
                                  icon: "",
                                  variant: "outlined",
                                  color: "secondary",
                                  rounded: "pill",
                                  size: "small",
                                  class: "pending-menu-button",
                                  "aria-label": `More actions for ${item.student}`
                                }), {
                                  default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { icon: "ri-more-2-fill" }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VTooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` More actions `);
                                          } else {
                                            return [
                                              createTextVNode(" More actions ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, { icon: "ri-more-2-fill" }),
                                        createVNode(VTooltip, {
                                          activator: "parent",
                                          location: "top"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" More actions ")
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
                                  createVNode(VBtn, mergeProps(menuProps, {
                                    icon: "",
                                    variant: "outlined",
                                    color: "secondary",
                                    rounded: "pill",
                                    size: "small",
                                    class: "pending-menu-button",
                                    "aria-label": `More actions for ${item.student}`
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-more-2-fill" }),
                                      createVNode(VTooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" More actions ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1040, ["aria-label"])
                                ];
                              }
                            }),
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VList, {
                                  density: "compact",
                                  "min-width": "210"
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItem, {
                                        to: getPendingActionRoute(item, "journal")
                                      }, {
                                        prepend: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, { icon: "ri-book-open-line" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, { icon: "ri-book-open-line" })
                                            ];
                                          }
                                        }),
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Create Daily Journal`);
                                                } else {
                                                  return [
                                                    createTextVNode("Create Daily Journal")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Create Daily Journal")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItem, {
                                        to: getPendingActionRoute(item, "report")
                                      }, {
                                        prepend: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, { icon: "ri-file-list-3-line" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, { icon: "ri-file-list-3-line" })
                                            ];
                                          }
                                        }),
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Create Report`);
                                                } else {
                                                  return [
                                                    createTextVNode("Create Report")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Create Report")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItem, {
                                          to: getPendingActionRoute(item, "journal")
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, { icon: "ri-book-open-line" })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Create Daily Journal")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["to"]),
                                        createVNode(VListItem, {
                                          to: getPendingActionRoute(item, "report")
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, { icon: "ri-file-list-3-line" })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Create Report")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VList, {
                                    density: "compact",
                                    "min-width": "210"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, {
                                        to: getPendingActionRoute(item, "journal")
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { icon: "ri-book-open-line" })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Create Daily Journal")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["to"]),
                                      createVNode(VListItem, {
                                        to: getPendingActionRoute(item, "report")
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { icon: "ri-file-list-3-line" })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Create Report")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          unref(pendingTab) !== "Reports" ? (openBlock(), createBlock(VBtn, {
                            key: 0,
                            to: getPendingActionRoute(item),
                            variant: "text",
                            color: "primary",
                            size: "small",
                            class: "action-link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(pendingTab) === "Journal" ? "Create" : "Review") + " ", 1),
                              createVNode(VIcon, {
                                end: "",
                                icon: "ri-arrow-right-up-line",
                                size: "15"
                              })
                            ]),
                            _: 2
                          }, 1032, ["to"])) : (openBlock(), createBlock(VMenu, {
                            key: 1,
                            location: "bottom end"
                          }, {
                            activator: withCtx(({ props: menuProps }) => [
                              createVNode(VBtn, mergeProps(menuProps, {
                                icon: "",
                                variant: "outlined",
                                color: "secondary",
                                rounded: "pill",
                                size: "small",
                                class: "pending-menu-button",
                                "aria-label": `More actions for ${item.student}`
                              }), {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-more-2-fill" }),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "top"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" More actions ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1040, ["aria-label"])
                            ]),
                            default: withCtx(() => [
                              createVNode(VList, {
                                density: "compact",
                                "min-width": "210"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VListItem, {
                                    to: getPendingActionRoute(item, "journal")
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-book-open-line" })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Create Daily Journal")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]),
                                  createVNode(VListItem, {
                                    to: getPendingActionRoute(item, "report")
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-file-list-3-line" })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Create Report")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024))
                        ];
                      }
                    }),
                    "no-data": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="empty-cell" data-v-61a25fc4${_scopeId3}> Nothing is waiting here. Keep the good rhythm going. </div>`);
                      } else {
                        return [
                          createVNode("div", { class: "empty-cell" }, " Nothing is waiting here. Keep the good rhythm going. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(hasMorePendingItems)) {
                    _push3(`<div class="pending-more-section" aria-live="polite" data-v-61a25fc4${_scopeId2}><div class="pending-more-copy" data-v-61a25fc4${_scopeId2}><span class="text-body-2 text-high-emphasis" data-v-61a25fc4${_scopeId2}>${ssrInterpolate(unref(activePendingRemaining))} more ${ssrInterpolate(unref(pendingTab))} tasks </span><span class="text-caption text-medium-emphasis" data-v-61a25fc4${_scopeId2}> Showing ${ssrInterpolate(unref(activePendingItems).length)} of ${ssrInterpolate(unref(activePendingTotal))}</span></div>`);
                    _push3(ssrRenderComponent(VBtn, {
                      variant: "outlined",
                      color: "primary",
                      rounded: "pill",
                      size: "small",
                      class: "pending-more-button",
                      to: getPendingViewAllRoute(unref(pendingTab)),
                      "aria-label": `See ${unref(pendingMoreCount)} more ${unref(pendingTab)} tasks`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` See +${ssrInterpolate(unref(pendingMoreCount))} More `);
                          _push4(ssrRenderComponent(VIcon, {
                            end: "",
                            icon: "ri-arrow-right-up-line",
                            size: "15"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createTextVNode(" See +" + toDisplayString(unref(pendingMoreCount)) + " More ", 1),
                            createVNode(VIcon, {
                              end: "",
                              icon: "ri-arrow-right-up-line",
                              size: "15"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (unref(activePendingTotal) > 0) {
                    _push3(`<div class="pending-more-section pending-more-section--complete" aria-live="polite" data-v-61a25fc4${_scopeId2}><span class="text-caption text-medium-emphasis" data-v-61a25fc4${_scopeId2}> All ${ssrInterpolate(unref(pendingTab))} tasks are shown </span></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</section></main>`);
                } else {
                  return [
                    createVNode("main", { class: "dashboard-main" }, [
                      createVNode("header", { class: "dashboard-header-wrap dashboard-reveal dashboard-reveal--1" }, [
                        createVNode(VCard, {
                          class: "dashboard-card dashboard-header__combined",
                          elevation: "0"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "dashboard-header__intro" }, [
                              createVNode("div", { class: "dashboard-header__content" }, [
                                createVNode("h1", { class: "dashboard-page-title text-h4 text-high-emphasis" }, " Good morning, Julie. "),
                                createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, " A quick view of your classes, student progress, and today’s priorities. ")
                              ]),
                              createVNode("div", {
                                class: "dashboard-header__art",
                                "aria-hidden": "true"
                              }, [
                                createVNode(_component_ClientOnly, null, {
                                  fallback: withCtx(() => [
                                    createVNode("img", {
                                      src: unref(teacherWelcomeIllustration),
                                      alt: "",
                                      class: "dashboard-header__illustration"
                                    }, null, 8, ["src"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(unref(DotLottieVue), {
                                      src: "/animations/dashboard-teacher-header.lottie",
                                      "animation-id": "icon",
                                      autoplay: !unref(prefersReducedMotion),
                                      loop: !unref(prefersReducedMotion),
                                      layout: dashboardHeaderAnimationLayout,
                                      "render-config": dashboardHeaderAnimationRenderConfig,
                                      "background-color": "transparent",
                                      "aria-hidden": "true",
                                      class: "dashboard-header__animation"
                                    }, null, 8, ["autoplay", "loop"])
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("section", {
                              class: "recognition-card",
                              "aria-label": "Personal achievement",
                              onMouseenter: pauseAppreciationRotation,
                              onMouseleave: startAppreciationRotation,
                              onTouchstart: pauseAppreciationRotation,
                              onTouchend: startAppreciationRotation
                            }, [
                              createVNode("div", { class: "recognition-banner" }, [
                                createVNode("div", {
                                  class: "recognition-rail",
                                  "aria-hidden": "true"
                                }, [
                                  !unref(prefersReducedMotion) ? (openBlock(), createBlock("lord-icon", {
                                    key: unref(activeAppreciation).lordIconSrc,
                                    src: unref(activeAppreciation).lordIconSrc,
                                    trigger: "loop",
                                    loading: "lazy",
                                    class: "recognition-lord-icon current-color",
                                    "aria-hidden": "true"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock(VIcon, {
                                    key: 1,
                                    icon: unref(activeAppreciation).fallbackIcon,
                                    size: "20"
                                  }, null, 8, ["icon"]))
                                ]),
                                createVNode("div", { class: "recognition-content" }, [
                                  createVNode(Transition, {
                                    name: "appreciation-fade",
                                    mode: "out-in"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock("div", {
                                        key: unref(activeAppreciation).title,
                                        class: "appreciation-copy",
                                        "aria-live": "polite"
                                      }, [
                                        createVNode("h2", { class: "text-h6 font-weight-medium text-high-emphasis mb-1" }, toDisplayString(unref(activeAppreciation).title), 1),
                                        createVNode("p", { class: "text-body-2 text-medium-emphasis mb-1 appreciation-quote" }, " “" + toDisplayString(unref(activeAppreciation).quote) + "” ", 1),
                                        createVNode("div", { class: "d-flex align-center gap-2 text-caption text-medium-emphasis" }, [
                                          createVNode(VIcon, {
                                            icon: "ri-checkbox-circle-line",
                                            size: "15",
                                            color: "secondary"
                                          }),
                                          createVNode("span", { class: "text-secondary" }, toDisplayString(unref(activeAppreciation).detail), 1)
                                        ])
                                      ]))
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              createVNode("div", {
                                class: "recognition-progress",
                                "aria-label": "Appreciation carousel position"
                              }, [
                                (openBlock(), createBlock(Fragment, null, renderList(appreciationItems, (_3, index) => {
                                  return createVNode("span", {
                                    key: index,
                                    class: ["recognition-progress__item", { "recognition-progress__item--active": index === unref(currentAppreciation) }]
                                  }, null, 2);
                                }), 64))
                              ])
                            ], 32)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("section", {
                        class: "dashboard-section dashboard-reveal dashboard-reveal--2",
                        "aria-labelledby": "summary-heading"
                      }, [
                        createVNode("div", { class: "section-heading" }, [
                          createVNode("div", null, [
                            createVNode("h2", {
                              id: "summary-heading",
                              class: "text-h5 text-high-emphasis mb-0"
                            }, " Your Statistic ")
                          ]),
                          createVNode("span", { class: "section-meta text-caption" }, "Updated today")
                        ]),
                        createVNode("div", { class: "summary-grid" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(summaryItems, (item) => {
                            return createVNode(VCard, {
                              key: item.label,
                              class: ["summary-card", `summary-card--${item.tone}`],
                              elevation: "0"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "summary-card__top" }, [
                                  createVNode(VIcon, {
                                    icon: item.icon,
                                    size: "19"
                                  }, null, 8, ["icon"]),
                                  createVNode("span", { class: "summary-card__period text-caption" }, toDisplayString(item.period), 1)
                                ]),
                                createVNode("span", { class: "summary-card__value text-h3 font-weight-medium" }, toDisplayString(item.value), 1),
                                createVNode("span", { class: "summary-card__label text-body-2 font-weight-medium" }, toDisplayString(item.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"]);
                          }), 64))
                        ])
                      ]),
                      createVNode("section", {
                        class: "dashboard-section dashboard-reveal dashboard-reveal--3",
                        "aria-labelledby": "watchlist-heading"
                      }, [
                        createVNode(UiTableView, {
                          activeTab: unref(watchlistTab),
                          "onUpdate:activeTab": ($event) => isRef(watchlistTab) ? watchlistTab.value = $event : null,
                          title: "",
                          tabs: unref(watchlistTableTabs),
                          headers: watchlistHeaders,
                          items: unref(filteredWatchlist),
                          "items-per-page": -1,
                          "hide-filters": "",
                          "hide-pagination": "",
                          "tabs-inside-card": "",
                          "mobile-cards": "",
                          "card-class": "dashboard-card",
                          "table-class": "dashboard-table watchlist-table",
                          flat: "",
                          class: "dashboard-table-view"
                        }, {
                          "card-header": withCtx(() => [
                            createVNode("div", { class: "card-heading" }, [
                              createVNode("div", null, [
                                createVNode("div", { class: "watchlist-title-row" }, [
                                  createVNode("h2", {
                                    id: "watchlist-heading",
                                    class: "text-h5 text-high-emphasis mb-0"
                                  }, " Priority Watchlist "),
                                  createVNode(VChip, {
                                    color: "error",
                                    variant: "tonal",
                                    size: "x-small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(watchlistRedCount)) + " red risks", 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, " Latest fixed-block evaluation · refreshed every Monday ")
                              ]),
                              createVNode(VBtn, {
                                variant: "text",
                                color: "primary",
                                size: "small",
                                class: "section-link",
                                to: { name: "students" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" View all "),
                                  createVNode(VIcon, {
                                    end: "",
                                    icon: "ri-arrow-right-line",
                                    size: "16"
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          "mobile-cards": withCtx(({ items }) => [
                            items.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "watchlist-mobile-list"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                                return openBlock(), createBlock("article", {
                                  key: item.id,
                                  class: "watchlist-mobile-card"
                                }, [
                                  createVNode("div", { class: "watchlist-mobile-card__topline" }, [
                                    createVNode("div", { class: "student-cell watchlist-mobile-card__student" }, [
                                      createVNode(VAvatar, {
                                        size: "34",
                                        color: "grey-100",
                                        class: "border"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(getAvatarText(item.name)), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("div", { class: "min-w-0" }, [
                                        createVNode("h3", { class: "text-body-1 font-weight-medium mb-1" }, toDisplayString(item.name), 1),
                                        createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, toDisplayString(item.course) + " · " + toDisplayString(item.window), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "watchlist-mobile-card__risk" }, [
                                      createVNode("span", { class: "text-caption text-medium-emphasis" }, "Risk"),
                                      createVNode(VChip, {
                                        color: riskColor(item.risk),
                                        variant: "tonal",
                                        size: "small",
                                        class: "status-chip text-caption font-weight-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "status-dot" }),
                                          createTextVNode(" " + toDisplayString(item.risk), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "watchlist-mobile-card__issue" }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Issue"),
                                    createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(item.issue), 1),
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, toDisplayString(item.metric), 1)
                                  ]),
                                  createVNode("div", { class: "watchlist-mobile-card__status" }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Status"),
                                    createVNode(VChip, {
                                      color: statusColor(item.status),
                                      variant: "outlined",
                                      size: "small",
                                      class: "status-chip text-caption font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.status), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  createVNode(VBtn, {
                                    variant: "outlined",
                                    color: "primary",
                                    rounded: "pill",
                                    block: "",
                                    size: "small",
                                    class: "watchlist-mobile-card__action",
                                    onClick: ($event) => openActionDialog(item)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Action "),
                                      createVNode(VIcon, {
                                        end: "",
                                        icon: "ri-arrow-right-up-line",
                                        size: "15"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]);
                              }), 128))
                            ])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "empty-cell"
                            }, " No students in this evaluation view. "))
                          ]),
                          "item.student": withCtx(({ item }) => [
                            createVNode("div", { class: "student-cell" }, [
                              createVNode(VAvatar, {
                                size: "34",
                                color: "grey-100",
                                class: "border"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(getAvatarText(item.name)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "min-w-0" }, [
                                createVNode("span", { class: "student-name font-weight-medium" }, toDisplayString(item.name), 1),
                                createVNode("span", { class: "student-course text-caption" }, toDisplayString(item.course) + " · " + toDisplayString(item.window), 1)
                              ])
                            ])
                          ]),
                          "item.issue": withCtx(({ item }) => [
                            createVNode("div", { class: "issue-cell" }, [
                              createVNode("span", { class: "issue-title" }, toDisplayString(item.issue), 1),
                              createVNode("span", { class: "issue-metric text-caption" }, toDisplayString(item.metric), 1)
                            ])
                          ]),
                          "item.risk": withCtx(({ item }) => [
                            createVNode(VChip, {
                              color: riskColor(item.risk),
                              variant: "tonal",
                              size: "small",
                              class: "status-chip text-caption font-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "status-dot" }),
                                createTextVNode(" " + toDisplayString(item.risk), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          "item.status": withCtx(({ item }) => [
                            createVNode(VChip, {
                              color: statusColor(item.status),
                              variant: "outlined",
                              size: "small",
                              class: "status-chip text-caption font-weight-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          "item.action": withCtx(({ item }) => [
                            createVNode(VBtn, {
                              variant: "outlined",
                              color: "primary",
                              size: "small",
                              class: "action-button",
                              onClick: ($event) => openActionDialog(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Action ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          "no-data": withCtx(() => [
                            createVNode("div", { class: "empty-cell" }, " No students in this evaluation view. ")
                          ]),
                          _: 1
                        }, 8, ["activeTab", "onUpdate:activeTab", "tabs", "items"])
                      ]),
                      createVNode("section", {
                        class: "dashboard-section dashboard-reveal dashboard-reveal--4",
                        "aria-labelledby": "pending-heading"
                      }, [
                        createVNode(UiTableView, {
                          activeTab: unref(pendingTab),
                          "onUpdate:activeTab": ($event) => isRef(pendingTab) ? pendingTab.value = $event : null,
                          title: "",
                          tabs: unref(pendingTableTabs),
                          headers: unref(pendingHeaders),
                          items: unref(activePendingItems),
                          "items-per-page": -1,
                          "hide-filters": "",
                          "hide-pagination": "",
                          "tabs-inside-card": "",
                          "mobile-cards": "",
                          "card-class": "dashboard-card",
                          "table-class": "dashboard-table pending-table",
                          flat: "",
                          class: "dashboard-table-view"
                        }, {
                          "card-header": withCtx(() => [
                            createVNode("div", { class: "card-heading" }, [
                              createVNode("div", null, [
                                createVNode("h2", {
                                  id: "pending-heading",
                                  class: "text-h5 text-high-emphasis mb-1"
                                }, " Pending Task "),
                                createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(unref(pendingTotal)) + " items are waiting across your workflows ", 1)
                              ])
                            ])
                          ]),
                          "mobile-cards": withCtx(({ items }) => [
                            items.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "pending-mobile-list"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                                return openBlock(), createBlock("article", {
                                  key: item.id,
                                  class: "pending-task-card"
                                }, [
                                  createVNode("div", { class: "pending-task-card__topline" }, [
                                    createVNode("div", { class: "min-w-0" }, [
                                      createVNode("h3", { class: "text-body-1 font-weight-medium mb-1" }, toDisplayString(item.student), 1)
                                    ]),
                                    unref(pendingTab) === "Journal" ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "pending-task-card__due"
                                    }, [
                                      createVNode("span", { class: "text-caption text-medium-emphasis" }, "Due Date"),
                                      createVNode("span", { class: "due-label text-body-2 font-weight-medium" }, toDisplayString(item.dueDate), 1)
                                    ])) : unref(pendingTab) === "Projects" ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "pending-task-card__due"
                                    }, [
                                      createVNode("span", { class: "text-caption text-medium-emphasis" }, "Date"),
                                      createVNode("span", { class: "text-body-2 font-weight-medium" }, toDisplayString(item.date), 1)
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "pending-task-card__details" }, [
                                    createVNode("div", null, [
                                      createVNode("span", { class: "text-caption text-medium-emphasis" }, "Book"),
                                      createVNode("span", { class: "text-body-2" }, toDisplayString(item.book), 1)
                                    ]),
                                    unref(pendingTab) === "Journal" ? (openBlock(), createBlock("div", { key: 0 }, [
                                      createVNode("span", { class: "text-caption text-medium-emphasis" }, "Meeting - Lesson"),
                                      createVNode("span", { class: "text-body-2" }, toDisplayString(item.meetingLesson), 1)
                                    ])) : unref(pendingTab) === "Projects" ? (openBlock(), createBlock("div", { key: 1 }, [
                                      createVNode("span", { class: "text-caption text-medium-emphasis" }, "Lesson"),
                                      createVNode("span", { class: "text-body-2" }, toDisplayString(item.lesson), 1)
                                    ])) : (openBlock(), createBlock("div", { key: 2 }, [
                                      createVNode("span", { class: "text-caption text-medium-emphasis" }, "Progress"),
                                      createVNode("div", { class: "pending-progress" }, [
                                        createVNode(VProgressLinear, {
                                          "model-value": getPendingProgressPercent(item),
                                          color: "primary",
                                          height: "6",
                                          rounded: "",
                                          class: "pending-progress__bar",
                                          "aria-hidden": "true"
                                        }, null, 8, ["model-value"]),
                                        createVNode("span", { class: "text-body-2 font-weight-medium text-no-wrap" }, toDisplayString(item.progressDone) + "/" + toDisplayString(item.progressTotal), 1)
                                      ])
                                    ])),
                                    unref(pendingTab) === "Reports" ? (openBlock(), createBlock("div", { key: 3 }, [
                                      createVNode("span", { class: "text-caption text-medium-emphasis" }, "Status"),
                                      createVNode(VChip, {
                                        color: pendingStatusColor(item.status),
                                        variant: "tonal",
                                        size: "small",
                                        class: "pending-status-chip"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.status), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  unref(pendingTab) !== "Reports" ? (openBlock(), createBlock(VBtn, {
                                    key: 0,
                                    to: getPendingActionRoute(item),
                                    variant: "outlined",
                                    color: "primary",
                                    rounded: "pill",
                                    block: "",
                                    size: "small",
                                    class: "pending-task-card__action"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(pendingTab) === "Journal" ? "Create" : "Review") + " ", 1),
                                      createVNode(VIcon, {
                                        end: "",
                                        icon: "ri-arrow-right-up-line",
                                        size: "15"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "pending-task-card__action-row"
                                  }, [
                                    createVNode(VMenu, { location: "bottom end" }, {
                                      activator: withCtx(({ props: menuProps }) => [
                                        createVNode(VBtn, mergeProps({ ref_for: true }, menuProps, {
                                          icon: "",
                                          variant: "outlined",
                                          color: "secondary",
                                          rounded: "pill",
                                          size: "small",
                                          class: "pending-menu-button",
                                          "aria-label": `More actions for ${item.student}`
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { icon: "ri-more-2-fill" }),
                                            createVNode(VTooltip, {
                                              activator: "parent",
                                              location: "top"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" More actions ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1040, ["aria-label"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VList, {
                                          density: "compact",
                                          "min-width": "210"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VListItem, {
                                              to: getPendingActionRoute(item, "journal")
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, { icon: "ri-book-open-line" })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Create Daily Journal")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["to"]),
                                            createVNode(VListItem, {
                                              to: getPendingActionRoute(item, "report")
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, { icon: "ri-file-list-3-line" })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Create Report")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["to"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Action")
                                  ]))
                                ]);
                              }), 128))
                            ])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "empty-cell"
                            }, " Nothing is waiting here. Keep the good rhythm going. "))
                          ]),
                          "item.student": withCtx(({ item }) => [
                            createVNode("span", { class: "student-name font-weight-medium" }, toDisplayString(item.student), 1)
                          ]),
                          "item.book": withCtx(({ item }) => [
                            createVNode("span", { class: "table-muted text-caption" }, toDisplayString(item.book), 1)
                          ]),
                          "item.meetingLesson": withCtx(({ item }) => [
                            createVNode("span", { class: "table-muted text-caption" }, toDisplayString(item.meetingLesson), 1)
                          ]),
                          "item.progress": withCtx(({ item }) => [
                            createVNode("div", { class: "pending-progress" }, [
                              createVNode(VProgressLinear, {
                                "model-value": getPendingProgressPercent(item),
                                color: "primary",
                                height: "6",
                                rounded: "",
                                class: "pending-progress__bar",
                                "aria-hidden": "true"
                              }, null, 8, ["model-value"]),
                              createVNode("span", { class: "text-body-2 font-weight-medium text-no-wrap" }, toDisplayString(item.progressDone) + "/" + toDisplayString(item.progressTotal), 1)
                            ])
                          ]),
                          "item.status": withCtx(({ item }) => [
                            createVNode(VChip, {
                              color: pendingStatusColor(item.status),
                              variant: "tonal",
                              size: "small",
                              class: "pending-status-chip"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          "item.lesson": withCtx(({ item }) => [
                            createVNode("span", { class: "table-muted text-caption" }, toDisplayString(item.lesson), 1)
                          ]),
                          "item.date": withCtx(({ item }) => [
                            createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(item.date), 1)
                          ]),
                          "item.dueDate": withCtx(({ item }) => [
                            createVNode("span", { class: "due-label text-body-2 font-weight-medium" }, toDisplayString(item.dueDate), 1)
                          ]),
                          "item.action": withCtx(({ item }) => [
                            unref(pendingTab) !== "Reports" ? (openBlock(), createBlock(VBtn, {
                              key: 0,
                              to: getPendingActionRoute(item),
                              variant: "text",
                              color: "primary",
                              size: "small",
                              class: "action-link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(pendingTab) === "Journal" ? "Create" : "Review") + " ", 1),
                                createVNode(VIcon, {
                                  end: "",
                                  icon: "ri-arrow-right-up-line",
                                  size: "15"
                                })
                              ]),
                              _: 2
                            }, 1032, ["to"])) : (openBlock(), createBlock(VMenu, {
                              key: 1,
                              location: "bottom end"
                            }, {
                              activator: withCtx(({ props: menuProps }) => [
                                createVNode(VBtn, mergeProps(menuProps, {
                                  icon: "",
                                  variant: "outlined",
                                  color: "secondary",
                                  rounded: "pill",
                                  size: "small",
                                  class: "pending-menu-button",
                                  "aria-label": `More actions for ${item.student}`
                                }), {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-more-2-fill" }),
                                    createVNode(VTooltip, {
                                      activator: "parent",
                                      location: "top"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" More actions ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1040, ["aria-label"])
                              ]),
                              default: withCtx(() => [
                                createVNode(VList, {
                                  density: "compact",
                                  "min-width": "210"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, {
                                      to: getPendingActionRoute(item, "journal")
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-book-open-line" })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Create Daily Journal")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]),
                                    createVNode(VListItem, {
                                      to: getPendingActionRoute(item, "report")
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-file-list-3-line" })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Create Report")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024))
                          ]),
                          "no-data": withCtx(() => [
                            createVNode("div", { class: "empty-cell" }, " Nothing is waiting here. Keep the good rhythm going. ")
                          ]),
                          _: 1
                        }, 8, ["activeTab", "onUpdate:activeTab", "tabs", "headers", "items"]),
                        unref(hasMorePendingItems) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "pending-more-section",
                          "aria-live": "polite"
                        }, [
                          createVNode("div", { class: "pending-more-copy" }, [
                            createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(activePendingRemaining)) + " more " + toDisplayString(unref(pendingTab)) + " tasks ", 1),
                            createVNode("span", { class: "text-caption text-medium-emphasis" }, " Showing " + toDisplayString(unref(activePendingItems).length) + " of " + toDisplayString(unref(activePendingTotal)), 1)
                          ]),
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "primary",
                            rounded: "pill",
                            size: "small",
                            class: "pending-more-button",
                            to: getPendingViewAllRoute(unref(pendingTab)),
                            "aria-label": `See ${unref(pendingMoreCount)} more ${unref(pendingTab)} tasks`
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" See +" + toDisplayString(unref(pendingMoreCount)) + " More ", 1),
                              createVNode(VIcon, {
                                end: "",
                                icon: "ri-arrow-right-up-line",
                                size: "15"
                              })
                            ]),
                            _: 1
                          }, 8, ["to", "aria-label"])
                        ])) : unref(activePendingTotal) > 0 ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "pending-more-section pending-more-section--complete",
                          "aria-live": "polite"
                        }, [
                          createVNode("span", { class: "text-caption text-medium-emphasis" }, " All " + toDisplayString(unref(pendingTab)) + " tasks are shown ", 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4",
              lg: "4",
              class: "dashboard-aside-column"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<aside class="dashboard-aside dashboard-reveal dashboard-reveal--2" data-v-61a25fc4${_scopeId2}>`);
                  _push3(ssrRenderComponent(VCard, {
                    class: "schedule-card dashboard-card",
                    elevation: "0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="schedule-card__header" data-v-61a25fc4${_scopeId3}><div data-v-61a25fc4${_scopeId3}><h2 class="text-h5 text-high-emphasis mb-1" data-v-61a25fc4${_scopeId3}>Upcoming schedule</h2><p class="text-body-2 text-medium-emphasis mb-0" data-v-61a25fc4${_scopeId3}>Three moments to prepare for</p></div>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-calendar-schedule-line",
                          color: "primary",
                          size: "22"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="schedule-list" data-v-61a25fc4${_scopeId3}><!--[-->`);
                        ssrRenderList(scheduleItems, (item) => {
                          _push4(`<div class="schedule-item" data-v-61a25fc4${_scopeId3}><div class="schedule-item__time" data-v-61a25fc4${_scopeId3}><span class="schedule-item__date text-caption" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.dateLabel)}</span><span class="schedule-item__clock text-body-2 font-weight-medium" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.timeLabel)}</span></div><div class="schedule-item__rule" data-v-61a25fc4${_scopeId3}></div><div class="schedule-item__content" data-v-61a25fc4${_scopeId3}><div class="d-flex align-start justify-space-between gap-2" data-v-61a25fc4${_scopeId3}><div class="min-w-0" data-v-61a25fc4${_scopeId3}><span class="schedule-item__name text-body-2 font-weight-medium" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.name)}</span><span class="schedule-item__meta text-caption" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.type)} · ${ssrInterpolate(item.students)} students</span></div><span class="${ssrRenderClass([[
                            `schedule-status--${item.status}`,
                            { "schedule-status--nearest": item.id === unref(nearestScheduleId) }
                          ], "schedule-status"])}"${ssrRenderAttr("aria-label", `Schedule status: ${item.status}`)} data-v-61a25fc4${_scopeId3}><span class="status-dot" data-v-61a25fc4${_scopeId3}></span></span></div><span class="schedule-item__countdown text-caption font-weight-medium" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(getCountdown(item))}</span></div></div>`);
                        });
                        _push4(`<!--]--></div>`);
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          to: { name: "schedule" },
                          variant: "outlined",
                          rounded: "pill",
                          color: "primary",
                          size: "small",
                          class: "schedule-view-all"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` View full schedule `);
                              _push5(ssrRenderComponent(VIcon, {
                                end: "",
                                icon: "ri-arrow-right-line",
                                size: "16"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" View full schedule "),
                                createVNode(VIcon, {
                                  end: "",
                                  icon: "ri-arrow-right-line",
                                  size: "16"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "schedule-card__header" }, [
                            createVNode("div", null, [
                              createVNode("h2", { class: "text-h5 text-high-emphasis mb-1" }, "Upcoming schedule"),
                              createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, "Three moments to prepare for")
                            ]),
                            createVNode(VIcon, {
                              icon: "ri-calendar-schedule-line",
                              color: "primary",
                              size: "22"
                            })
                          ]),
                          createVNode("div", { class: "schedule-list" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(scheduleItems, (item) => {
                              return createVNode("div", {
                                key: item.id,
                                class: "schedule-item"
                              }, [
                                createVNode("div", { class: "schedule-item__time" }, [
                                  createVNode("span", { class: "schedule-item__date text-caption" }, toDisplayString(item.dateLabel), 1),
                                  createVNode("span", { class: "schedule-item__clock text-body-2 font-weight-medium" }, toDisplayString(item.timeLabel), 1)
                                ]),
                                createVNode("div", { class: "schedule-item__rule" }),
                                createVNode("div", { class: "schedule-item__content" }, [
                                  createVNode("div", { class: "d-flex align-start justify-space-between gap-2" }, [
                                    createVNode("div", { class: "min-w-0" }, [
                                      createVNode("span", { class: "schedule-item__name text-body-2 font-weight-medium" }, toDisplayString(item.name), 1),
                                      createVNode("span", { class: "schedule-item__meta text-caption" }, toDisplayString(item.type) + " · " + toDisplayString(item.students) + " students", 1)
                                    ]),
                                    createVNode("span", {
                                      class: ["schedule-status", [
                                        `schedule-status--${item.status}`,
                                        { "schedule-status--nearest": item.id === unref(nearestScheduleId) }
                                      ]],
                                      "aria-label": `Schedule status: ${item.status}`
                                    }, [
                                      createVNode("span", { class: "status-dot" })
                                    ], 10, ["aria-label"])
                                  ]),
                                  createVNode("span", { class: "schedule-item__countdown text-caption font-weight-medium" }, toDisplayString(getCountdown(item)), 1)
                                ])
                              ]);
                            }), 64))
                          ]),
                          createVNode(VDivider),
                          createVNode(VBtn, {
                            to: { name: "schedule" },
                            variant: "outlined",
                            rounded: "pill",
                            color: "primary",
                            size: "small",
                            class: "schedule-view-all"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" View full schedule "),
                              createVNode(VIcon, {
                                end: "",
                                icon: "ri-arrow-right-line",
                                size: "16"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCard, {
                    class: "learning-card dashboard-card dashboard-reveal dashboard-reveal--3",
                    elevation: "0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="learning-card__header" data-v-61a25fc4${_scopeId3}><div class="learning-card__title-row" data-v-61a25fc4${_scopeId3}><h2 class="text-h5 text-high-emphasis font-weight-medium mb-0" data-v-61a25fc4${_scopeId3}>Self learning reminder</h2></div></div>`);
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(`<div class="learning-list" data-v-61a25fc4${_scopeId3}><!--[-->`);
                        ssrRenderList(selfLearningItems, (item) => {
                          _push4(`<div class="learning-item" data-v-61a25fc4${_scopeId3}><div class="learning-item__icon" aria-hidden="true" data-v-61a25fc4${_scopeId3}>`);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-book-open-line",
                            color: "primary",
                            size: "16"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="learning-item__content" data-v-61a25fc4${_scopeId3}><span class="learning-item__title text-body-2 font-weight-medium" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(item.title)}</span><span class="learning-item__meta text-caption" data-v-61a25fc4${_scopeId3}> Estimation: ${ssrInterpolate(item.estimate)}</span></div>`);
                          _push4(ssrRenderComponent(VBtn, {
                            variant: "outlined",
                            rounded: "pill",
                            color: "primary",
                            size: "small",
                            class: "learning-item__action",
                            "aria-label": `Open ${item.title}`,
                            onClick: ($event) => openSelfLearningItem(item)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Open `);
                              } else {
                                return [
                                  createTextVNode(" Open ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "learning-card__header" }, [
                            createVNode("div", { class: "learning-card__title-row" }, [
                              createVNode("h2", { class: "text-h5 text-high-emphasis font-weight-medium mb-0" }, "Self learning reminder")
                            ])
                          ]),
                          createVNode(VDivider),
                          createVNode("div", { class: "learning-list" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(selfLearningItems, (item) => {
                              return createVNode("div", {
                                key: item.id,
                                class: "learning-item"
                              }, [
                                createVNode("div", {
                                  class: "learning-item__icon",
                                  "aria-hidden": "true"
                                }, [
                                  createVNode(VIcon, {
                                    icon: "ri-book-open-line",
                                    color: "primary",
                                    size: "16"
                                  })
                                ]),
                                createVNode("div", { class: "learning-item__content" }, [
                                  createVNode("span", { class: "learning-item__title text-body-2 font-weight-medium" }, toDisplayString(item.title), 1),
                                  createVNode("span", { class: "learning-item__meta text-caption" }, " Estimation: " + toDisplayString(item.estimate), 1)
                                ]),
                                createVNode(VBtn, {
                                  variant: "outlined",
                                  rounded: "pill",
                                  color: "primary",
                                  size: "small",
                                  class: "learning-item__action",
                                  "aria-label": `Open ${item.title}`,
                                  onClick: ($event) => openSelfLearningItem(item)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Open ")
                                  ]),
                                  _: 2
                                }, 1032, ["aria-label", "onClick"])
                              ]);
                            }), 64))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCard, {
                    class: "freshness-card dashboard-reveal dashboard-reveal--4",
                    elevation: "0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="freshness-icon" data-v-61a25fc4${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-refresh-line",
                          color: "primary",
                          size: "19"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div data-v-61a25fc4${_scopeId3}><p class="text-body-2 text-high-emphasis mb-1" data-v-61a25fc4${_scopeId3}>Risk signals refresh every Monday.</p><p class="text-caption text-medium-emphasis mb-0" data-v-61a25fc4${_scopeId3}>Your next watchlist review is ready.</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "freshness-icon" }, [
                            createVNode(VIcon, {
                              icon: "ri-refresh-line",
                              color: "primary",
                              size: "19"
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode("p", { class: "text-body-2 text-high-emphasis mb-1" }, "Risk signals refresh every Monday."),
                            createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, "Your next watchlist review is ready.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</aside>`);
                } else {
                  return [
                    createVNode("aside", { class: "dashboard-aside dashboard-reveal dashboard-reveal--2" }, [
                      createVNode(VCard, {
                        class: "schedule-card dashboard-card",
                        elevation: "0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "schedule-card__header" }, [
                            createVNode("div", null, [
                              createVNode("h2", { class: "text-h5 text-high-emphasis mb-1" }, "Upcoming schedule"),
                              createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, "Three moments to prepare for")
                            ]),
                            createVNode(VIcon, {
                              icon: "ri-calendar-schedule-line",
                              color: "primary",
                              size: "22"
                            })
                          ]),
                          createVNode("div", { class: "schedule-list" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(scheduleItems, (item) => {
                              return createVNode("div", {
                                key: item.id,
                                class: "schedule-item"
                              }, [
                                createVNode("div", { class: "schedule-item__time" }, [
                                  createVNode("span", { class: "schedule-item__date text-caption" }, toDisplayString(item.dateLabel), 1),
                                  createVNode("span", { class: "schedule-item__clock text-body-2 font-weight-medium" }, toDisplayString(item.timeLabel), 1)
                                ]),
                                createVNode("div", { class: "schedule-item__rule" }),
                                createVNode("div", { class: "schedule-item__content" }, [
                                  createVNode("div", { class: "d-flex align-start justify-space-between gap-2" }, [
                                    createVNode("div", { class: "min-w-0" }, [
                                      createVNode("span", { class: "schedule-item__name text-body-2 font-weight-medium" }, toDisplayString(item.name), 1),
                                      createVNode("span", { class: "schedule-item__meta text-caption" }, toDisplayString(item.type) + " · " + toDisplayString(item.students) + " students", 1)
                                    ]),
                                    createVNode("span", {
                                      class: ["schedule-status", [
                                        `schedule-status--${item.status}`,
                                        { "schedule-status--nearest": item.id === unref(nearestScheduleId) }
                                      ]],
                                      "aria-label": `Schedule status: ${item.status}`
                                    }, [
                                      createVNode("span", { class: "status-dot" })
                                    ], 10, ["aria-label"])
                                  ]),
                                  createVNode("span", { class: "schedule-item__countdown text-caption font-weight-medium" }, toDisplayString(getCountdown(item)), 1)
                                ])
                              ]);
                            }), 64))
                          ]),
                          createVNode(VDivider),
                          createVNode(VBtn, {
                            to: { name: "schedule" },
                            variant: "outlined",
                            rounded: "pill",
                            color: "primary",
                            size: "small",
                            class: "schedule-view-all"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" View full schedule "),
                              createVNode(VIcon, {
                                end: "",
                                icon: "ri-arrow-right-line",
                                size: "16"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCard, {
                        class: "learning-card dashboard-card dashboard-reveal dashboard-reveal--3",
                        elevation: "0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "learning-card__header" }, [
                            createVNode("div", { class: "learning-card__title-row" }, [
                              createVNode("h2", { class: "text-h5 text-high-emphasis font-weight-medium mb-0" }, "Self learning reminder")
                            ])
                          ]),
                          createVNode(VDivider),
                          createVNode("div", { class: "learning-list" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(selfLearningItems, (item) => {
                              return createVNode("div", {
                                key: item.id,
                                class: "learning-item"
                              }, [
                                createVNode("div", {
                                  class: "learning-item__icon",
                                  "aria-hidden": "true"
                                }, [
                                  createVNode(VIcon, {
                                    icon: "ri-book-open-line",
                                    color: "primary",
                                    size: "16"
                                  })
                                ]),
                                createVNode("div", { class: "learning-item__content" }, [
                                  createVNode("span", { class: "learning-item__title text-body-2 font-weight-medium" }, toDisplayString(item.title), 1),
                                  createVNode("span", { class: "learning-item__meta text-caption" }, " Estimation: " + toDisplayString(item.estimate), 1)
                                ]),
                                createVNode(VBtn, {
                                  variant: "outlined",
                                  rounded: "pill",
                                  color: "primary",
                                  size: "small",
                                  class: "learning-item__action",
                                  "aria-label": `Open ${item.title}`,
                                  onClick: ($event) => openSelfLearningItem(item)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Open ")
                                  ]),
                                  _: 2
                                }, 1032, ["aria-label", "onClick"])
                              ]);
                            }), 64))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCard, {
                        class: "freshness-card dashboard-reveal dashboard-reveal--4",
                        elevation: "0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "freshness-icon" }, [
                            createVNode(VIcon, {
                              icon: "ri-refresh-line",
                              color: "primary",
                              size: "19"
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode("p", { class: "text-body-2 text-high-emphasis mb-1" }, "Risk signals refresh every Monday."),
                            createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, "Your next watchlist review is ready.")
                          ])
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
              createVNode(VCol, {
                cols: "12",
                md: "8",
                lg: "8",
                class: "dashboard-main-column"
              }, {
                default: withCtx(() => [
                  createVNode("main", { class: "dashboard-main" }, [
                    createVNode("header", { class: "dashboard-header-wrap dashboard-reveal dashboard-reveal--1" }, [
                      createVNode(VCard, {
                        class: "dashboard-card dashboard-header__combined",
                        elevation: "0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "dashboard-header__intro" }, [
                            createVNode("div", { class: "dashboard-header__content" }, [
                              createVNode("h1", { class: "dashboard-page-title text-h4 text-high-emphasis" }, " Good morning, Julie. "),
                              createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, " A quick view of your classes, student progress, and today’s priorities. ")
                            ]),
                            createVNode("div", {
                              class: "dashboard-header__art",
                              "aria-hidden": "true"
                            }, [
                              createVNode(_component_ClientOnly, null, {
                                fallback: withCtx(() => [
                                  createVNode("img", {
                                    src: unref(teacherWelcomeIllustration),
                                    alt: "",
                                    class: "dashboard-header__illustration"
                                  }, null, 8, ["src"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(unref(DotLottieVue), {
                                    src: "/animations/dashboard-teacher-header.lottie",
                                    "animation-id": "icon",
                                    autoplay: !unref(prefersReducedMotion),
                                    loop: !unref(prefersReducedMotion),
                                    layout: dashboardHeaderAnimationLayout,
                                    "render-config": dashboardHeaderAnimationRenderConfig,
                                    "background-color": "transparent",
                                    "aria-hidden": "true",
                                    class: "dashboard-header__animation"
                                  }, null, 8, ["autoplay", "loop"])
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("section", {
                            class: "recognition-card",
                            "aria-label": "Personal achievement",
                            onMouseenter: pauseAppreciationRotation,
                            onMouseleave: startAppreciationRotation,
                            onTouchstart: pauseAppreciationRotation,
                            onTouchend: startAppreciationRotation
                          }, [
                            createVNode("div", { class: "recognition-banner" }, [
                              createVNode("div", {
                                class: "recognition-rail",
                                "aria-hidden": "true"
                              }, [
                                !unref(prefersReducedMotion) ? (openBlock(), createBlock("lord-icon", {
                                  key: unref(activeAppreciation).lordIconSrc,
                                  src: unref(activeAppreciation).lordIconSrc,
                                  trigger: "loop",
                                  loading: "lazy",
                                  class: "recognition-lord-icon current-color",
                                  "aria-hidden": "true"
                                }, null, 8, ["src"])) : (openBlock(), createBlock(VIcon, {
                                  key: 1,
                                  icon: unref(activeAppreciation).fallbackIcon,
                                  size: "20"
                                }, null, 8, ["icon"]))
                              ]),
                              createVNode("div", { class: "recognition-content" }, [
                                createVNode(Transition, {
                                  name: "appreciation-fade",
                                  mode: "out-in"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock("div", {
                                      key: unref(activeAppreciation).title,
                                      class: "appreciation-copy",
                                      "aria-live": "polite"
                                    }, [
                                      createVNode("h2", { class: "text-h6 font-weight-medium text-high-emphasis mb-1" }, toDisplayString(unref(activeAppreciation).title), 1),
                                      createVNode("p", { class: "text-body-2 text-medium-emphasis mb-1 appreciation-quote" }, " “" + toDisplayString(unref(activeAppreciation).quote) + "” ", 1),
                                      createVNode("div", { class: "d-flex align-center gap-2 text-caption text-medium-emphasis" }, [
                                        createVNode(VIcon, {
                                          icon: "ri-checkbox-circle-line",
                                          size: "15",
                                          color: "secondary"
                                        }),
                                        createVNode("span", { class: "text-secondary" }, toDisplayString(unref(activeAppreciation).detail), 1)
                                      ])
                                    ]))
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", {
                              class: "recognition-progress",
                              "aria-label": "Appreciation carousel position"
                            }, [
                              (openBlock(), createBlock(Fragment, null, renderList(appreciationItems, (_2, index) => {
                                return createVNode("span", {
                                  key: index,
                                  class: ["recognition-progress__item", { "recognition-progress__item--active": index === unref(currentAppreciation) }]
                                }, null, 2);
                              }), 64))
                            ])
                          ], 32)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("section", {
                      class: "dashboard-section dashboard-reveal dashboard-reveal--2",
                      "aria-labelledby": "summary-heading"
                    }, [
                      createVNode("div", { class: "section-heading" }, [
                        createVNode("div", null, [
                          createVNode("h2", {
                            id: "summary-heading",
                            class: "text-h5 text-high-emphasis mb-0"
                          }, " Your Statistic ")
                        ]),
                        createVNode("span", { class: "section-meta text-caption" }, "Updated today")
                      ]),
                      createVNode("div", { class: "summary-grid" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(summaryItems, (item) => {
                          return createVNode(VCard, {
                            key: item.label,
                            class: ["summary-card", `summary-card--${item.tone}`],
                            elevation: "0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "summary-card__top" }, [
                                createVNode(VIcon, {
                                  icon: item.icon,
                                  size: "19"
                                }, null, 8, ["icon"]),
                                createVNode("span", { class: "summary-card__period text-caption" }, toDisplayString(item.period), 1)
                              ]),
                              createVNode("span", { class: "summary-card__value text-h3 font-weight-medium" }, toDisplayString(item.value), 1),
                              createVNode("span", { class: "summary-card__label text-body-2 font-weight-medium" }, toDisplayString(item.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["class"]);
                        }), 64))
                      ])
                    ]),
                    createVNode("section", {
                      class: "dashboard-section dashboard-reveal dashboard-reveal--3",
                      "aria-labelledby": "watchlist-heading"
                    }, [
                      createVNode(UiTableView, {
                        activeTab: unref(watchlistTab),
                        "onUpdate:activeTab": ($event) => isRef(watchlistTab) ? watchlistTab.value = $event : null,
                        title: "",
                        tabs: unref(watchlistTableTabs),
                        headers: watchlistHeaders,
                        items: unref(filteredWatchlist),
                        "items-per-page": -1,
                        "hide-filters": "",
                        "hide-pagination": "",
                        "tabs-inside-card": "",
                        "mobile-cards": "",
                        "card-class": "dashboard-card",
                        "table-class": "dashboard-table watchlist-table",
                        flat: "",
                        class: "dashboard-table-view"
                      }, {
                        "card-header": withCtx(() => [
                          createVNode("div", { class: "card-heading" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "watchlist-title-row" }, [
                                createVNode("h2", {
                                  id: "watchlist-heading",
                                  class: "text-h5 text-high-emphasis mb-0"
                                }, " Priority Watchlist "),
                                createVNode(VChip, {
                                  color: "error",
                                  variant: "tonal",
                                  size: "x-small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(watchlistRedCount)) + " red risks", 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, " Latest fixed-block evaluation · refreshed every Monday ")
                            ]),
                            createVNode(VBtn, {
                              variant: "text",
                              color: "primary",
                              size: "small",
                              class: "section-link",
                              to: { name: "students" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" View all "),
                                createVNode(VIcon, {
                                  end: "",
                                  icon: "ri-arrow-right-line",
                                  size: "16"
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        "mobile-cards": withCtx(({ items }) => [
                          items.length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "watchlist-mobile-list"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                              return openBlock(), createBlock("article", {
                                key: item.id,
                                class: "watchlist-mobile-card"
                              }, [
                                createVNode("div", { class: "watchlist-mobile-card__topline" }, [
                                  createVNode("div", { class: "student-cell watchlist-mobile-card__student" }, [
                                    createVNode(VAvatar, {
                                      size: "34",
                                      color: "grey-100",
                                      class: "border"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(getAvatarText(item.name)), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "min-w-0" }, [
                                      createVNode("h3", { class: "text-body-1 font-weight-medium mb-1" }, toDisplayString(item.name), 1),
                                      createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, toDisplayString(item.course) + " · " + toDisplayString(item.window), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "watchlist-mobile-card__risk" }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Risk"),
                                    createVNode(VChip, {
                                      color: riskColor(item.risk),
                                      variant: "tonal",
                                      size: "small",
                                      class: "status-chip text-caption font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "status-dot" }),
                                        createTextVNode(" " + toDisplayString(item.risk), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ])
                                ]),
                                createVNode("div", { class: "watchlist-mobile-card__issue" }, [
                                  createVNode("span", { class: "text-caption text-medium-emphasis" }, "Issue"),
                                  createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(item.issue), 1),
                                  createVNode("span", { class: "text-caption text-medium-emphasis" }, toDisplayString(item.metric), 1)
                                ]),
                                createVNode("div", { class: "watchlist-mobile-card__status" }, [
                                  createVNode("span", { class: "text-caption text-medium-emphasis" }, "Status"),
                                  createVNode(VChip, {
                                    color: statusColor(item.status),
                                    variant: "outlined",
                                    size: "small",
                                    class: "status-chip text-caption font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.status), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                createVNode(VBtn, {
                                  variant: "outlined",
                                  color: "primary",
                                  rounded: "pill",
                                  block: "",
                                  size: "small",
                                  class: "watchlist-mobile-card__action",
                                  onClick: ($event) => openActionDialog(item)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Action "),
                                    createVNode(VIcon, {
                                      end: "",
                                      icon: "ri-arrow-right-up-line",
                                      size: "15"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]);
                            }), 128))
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "empty-cell"
                          }, " No students in this evaluation view. "))
                        ]),
                        "item.student": withCtx(({ item }) => [
                          createVNode("div", { class: "student-cell" }, [
                            createVNode(VAvatar, {
                              size: "34",
                              color: "grey-100",
                              class: "border"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(getAvatarText(item.name)), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", { class: "min-w-0" }, [
                              createVNode("span", { class: "student-name font-weight-medium" }, toDisplayString(item.name), 1),
                              createVNode("span", { class: "student-course text-caption" }, toDisplayString(item.course) + " · " + toDisplayString(item.window), 1)
                            ])
                          ])
                        ]),
                        "item.issue": withCtx(({ item }) => [
                          createVNode("div", { class: "issue-cell" }, [
                            createVNode("span", { class: "issue-title" }, toDisplayString(item.issue), 1),
                            createVNode("span", { class: "issue-metric text-caption" }, toDisplayString(item.metric), 1)
                          ])
                        ]),
                        "item.risk": withCtx(({ item }) => [
                          createVNode(VChip, {
                            color: riskColor(item.risk),
                            variant: "tonal",
                            size: "small",
                            class: "status-chip text-caption font-weight-medium"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "status-dot" }),
                              createTextVNode(" " + toDisplayString(item.risk), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        "item.status": withCtx(({ item }) => [
                          createVNode(VChip, {
                            color: statusColor(item.status),
                            variant: "outlined",
                            size: "small",
                            class: "status-chip text-caption font-weight-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        "item.action": withCtx(({ item }) => [
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "primary",
                            size: "small",
                            class: "action-button",
                            onClick: ($event) => openActionDialog(item)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Action ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        "no-data": withCtx(() => [
                          createVNode("div", { class: "empty-cell" }, " No students in this evaluation view. ")
                        ]),
                        _: 1
                      }, 8, ["activeTab", "onUpdate:activeTab", "tabs", "items"])
                    ]),
                    createVNode("section", {
                      class: "dashboard-section dashboard-reveal dashboard-reveal--4",
                      "aria-labelledby": "pending-heading"
                    }, [
                      createVNode(UiTableView, {
                        activeTab: unref(pendingTab),
                        "onUpdate:activeTab": ($event) => isRef(pendingTab) ? pendingTab.value = $event : null,
                        title: "",
                        tabs: unref(pendingTableTabs),
                        headers: unref(pendingHeaders),
                        items: unref(activePendingItems),
                        "items-per-page": -1,
                        "hide-filters": "",
                        "hide-pagination": "",
                        "tabs-inside-card": "",
                        "mobile-cards": "",
                        "card-class": "dashboard-card",
                        "table-class": "dashboard-table pending-table",
                        flat: "",
                        class: "dashboard-table-view"
                      }, {
                        "card-header": withCtx(() => [
                          createVNode("div", { class: "card-heading" }, [
                            createVNode("div", null, [
                              createVNode("h2", {
                                id: "pending-heading",
                                class: "text-h5 text-high-emphasis mb-1"
                              }, " Pending Task "),
                              createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(unref(pendingTotal)) + " items are waiting across your workflows ", 1)
                            ])
                          ])
                        ]),
                        "mobile-cards": withCtx(({ items }) => [
                          items.length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "pending-mobile-list"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                              return openBlock(), createBlock("article", {
                                key: item.id,
                                class: "pending-task-card"
                              }, [
                                createVNode("div", { class: "pending-task-card__topline" }, [
                                  createVNode("div", { class: "min-w-0" }, [
                                    createVNode("h3", { class: "text-body-1 font-weight-medium mb-1" }, toDisplayString(item.student), 1)
                                  ]),
                                  unref(pendingTab) === "Journal" ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "pending-task-card__due"
                                  }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Due Date"),
                                    createVNode("span", { class: "due-label text-body-2 font-weight-medium" }, toDisplayString(item.dueDate), 1)
                                  ])) : unref(pendingTab) === "Projects" ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "pending-task-card__due"
                                  }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Date"),
                                    createVNode("span", { class: "text-body-2 font-weight-medium" }, toDisplayString(item.date), 1)
                                  ])) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "pending-task-card__details" }, [
                                  createVNode("div", null, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Book"),
                                    createVNode("span", { class: "text-body-2" }, toDisplayString(item.book), 1)
                                  ]),
                                  unref(pendingTab) === "Journal" ? (openBlock(), createBlock("div", { key: 0 }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Meeting - Lesson"),
                                    createVNode("span", { class: "text-body-2" }, toDisplayString(item.meetingLesson), 1)
                                  ])) : unref(pendingTab) === "Projects" ? (openBlock(), createBlock("div", { key: 1 }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Lesson"),
                                    createVNode("span", { class: "text-body-2" }, toDisplayString(item.lesson), 1)
                                  ])) : (openBlock(), createBlock("div", { key: 2 }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Progress"),
                                    createVNode("div", { class: "pending-progress" }, [
                                      createVNode(VProgressLinear, {
                                        "model-value": getPendingProgressPercent(item),
                                        color: "primary",
                                        height: "6",
                                        rounded: "",
                                        class: "pending-progress__bar",
                                        "aria-hidden": "true"
                                      }, null, 8, ["model-value"]),
                                      createVNode("span", { class: "text-body-2 font-weight-medium text-no-wrap" }, toDisplayString(item.progressDone) + "/" + toDisplayString(item.progressTotal), 1)
                                    ])
                                  ])),
                                  unref(pendingTab) === "Reports" ? (openBlock(), createBlock("div", { key: 3 }, [
                                    createVNode("span", { class: "text-caption text-medium-emphasis" }, "Status"),
                                    createVNode(VChip, {
                                      color: pendingStatusColor(item.status),
                                      variant: "tonal",
                                      size: "small",
                                      class: "pending-status-chip"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.status), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ])) : createCommentVNode("", true)
                                ]),
                                unref(pendingTab) !== "Reports" ? (openBlock(), createBlock(VBtn, {
                                  key: 0,
                                  to: getPendingActionRoute(item),
                                  variant: "outlined",
                                  color: "primary",
                                  rounded: "pill",
                                  block: "",
                                  size: "small",
                                  class: "pending-task-card__action"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(pendingTab) === "Journal" ? "Create" : "Review") + " ", 1),
                                    createVNode(VIcon, {
                                      end: "",
                                      icon: "ri-arrow-right-up-line",
                                      size: "15"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["to"])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "pending-task-card__action-row"
                                }, [
                                  createVNode(VMenu, { location: "bottom end" }, {
                                    activator: withCtx(({ props: menuProps }) => [
                                      createVNode(VBtn, mergeProps({ ref_for: true }, menuProps, {
                                        icon: "",
                                        variant: "outlined",
                                        color: "secondary",
                                        rounded: "pill",
                                        size: "small",
                                        class: "pending-menu-button",
                                        "aria-label": `More actions for ${item.student}`
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { icon: "ri-more-2-fill" }),
                                          createVNode(VTooltip, {
                                            activator: "parent",
                                            location: "top"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" More actions ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1040, ["aria-label"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VList, {
                                        density: "compact",
                                        "min-width": "210"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VListItem, {
                                            to: getPendingActionRoute(item, "journal")
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, { icon: "ri-book-open-line" })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Create Daily Journal")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["to"]),
                                          createVNode(VListItem, {
                                            to: getPendingActionRoute(item, "report")
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, { icon: "ri-file-list-3-line" })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Create Report")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("span", { class: "text-caption text-medium-emphasis" }, "Action")
                                ]))
                              ]);
                            }), 128))
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "empty-cell"
                          }, " Nothing is waiting here. Keep the good rhythm going. "))
                        ]),
                        "item.student": withCtx(({ item }) => [
                          createVNode("span", { class: "student-name font-weight-medium" }, toDisplayString(item.student), 1)
                        ]),
                        "item.book": withCtx(({ item }) => [
                          createVNode("span", { class: "table-muted text-caption" }, toDisplayString(item.book), 1)
                        ]),
                        "item.meetingLesson": withCtx(({ item }) => [
                          createVNode("span", { class: "table-muted text-caption" }, toDisplayString(item.meetingLesson), 1)
                        ]),
                        "item.progress": withCtx(({ item }) => [
                          createVNode("div", { class: "pending-progress" }, [
                            createVNode(VProgressLinear, {
                              "model-value": getPendingProgressPercent(item),
                              color: "primary",
                              height: "6",
                              rounded: "",
                              class: "pending-progress__bar",
                              "aria-hidden": "true"
                            }, null, 8, ["model-value"]),
                            createVNode("span", { class: "text-body-2 font-weight-medium text-no-wrap" }, toDisplayString(item.progressDone) + "/" + toDisplayString(item.progressTotal), 1)
                          ])
                        ]),
                        "item.status": withCtx(({ item }) => [
                          createVNode(VChip, {
                            color: pendingStatusColor(item.status),
                            variant: "tonal",
                            size: "small",
                            class: "pending-status-chip"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        "item.lesson": withCtx(({ item }) => [
                          createVNode("span", { class: "table-muted text-caption" }, toDisplayString(item.lesson), 1)
                        ]),
                        "item.date": withCtx(({ item }) => [
                          createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(item.date), 1)
                        ]),
                        "item.dueDate": withCtx(({ item }) => [
                          createVNode("span", { class: "due-label text-body-2 font-weight-medium" }, toDisplayString(item.dueDate), 1)
                        ]),
                        "item.action": withCtx(({ item }) => [
                          unref(pendingTab) !== "Reports" ? (openBlock(), createBlock(VBtn, {
                            key: 0,
                            to: getPendingActionRoute(item),
                            variant: "text",
                            color: "primary",
                            size: "small",
                            class: "action-link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(pendingTab) === "Journal" ? "Create" : "Review") + " ", 1),
                              createVNode(VIcon, {
                                end: "",
                                icon: "ri-arrow-right-up-line",
                                size: "15"
                              })
                            ]),
                            _: 2
                          }, 1032, ["to"])) : (openBlock(), createBlock(VMenu, {
                            key: 1,
                            location: "bottom end"
                          }, {
                            activator: withCtx(({ props: menuProps }) => [
                              createVNode(VBtn, mergeProps(menuProps, {
                                icon: "",
                                variant: "outlined",
                                color: "secondary",
                                rounded: "pill",
                                size: "small",
                                class: "pending-menu-button",
                                "aria-label": `More actions for ${item.student}`
                              }), {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-more-2-fill" }),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "top"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" More actions ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1040, ["aria-label"])
                            ]),
                            default: withCtx(() => [
                              createVNode(VList, {
                                density: "compact",
                                "min-width": "210"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VListItem, {
                                    to: getPendingActionRoute(item, "journal")
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-book-open-line" })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Create Daily Journal")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]),
                                  createVNode(VListItem, {
                                    to: getPendingActionRoute(item, "report")
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-file-list-3-line" })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Create Report")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024))
                        ]),
                        "no-data": withCtx(() => [
                          createVNode("div", { class: "empty-cell" }, " Nothing is waiting here. Keep the good rhythm going. ")
                        ]),
                        _: 1
                      }, 8, ["activeTab", "onUpdate:activeTab", "tabs", "headers", "items"]),
                      unref(hasMorePendingItems) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "pending-more-section",
                        "aria-live": "polite"
                      }, [
                        createVNode("div", { class: "pending-more-copy" }, [
                          createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(activePendingRemaining)) + " more " + toDisplayString(unref(pendingTab)) + " tasks ", 1),
                          createVNode("span", { class: "text-caption text-medium-emphasis" }, " Showing " + toDisplayString(unref(activePendingItems).length) + " of " + toDisplayString(unref(activePendingTotal)), 1)
                        ]),
                        createVNode(VBtn, {
                          variant: "outlined",
                          color: "primary",
                          rounded: "pill",
                          size: "small",
                          class: "pending-more-button",
                          to: getPendingViewAllRoute(unref(pendingTab)),
                          "aria-label": `See ${unref(pendingMoreCount)} more ${unref(pendingTab)} tasks`
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" See +" + toDisplayString(unref(pendingMoreCount)) + " More ", 1),
                            createVNode(VIcon, {
                              end: "",
                              icon: "ri-arrow-right-up-line",
                              size: "15"
                            })
                          ]),
                          _: 1
                        }, 8, ["to", "aria-label"])
                      ])) : unref(activePendingTotal) > 0 ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "pending-more-section pending-more-section--complete",
                        "aria-live": "polite"
                      }, [
                        createVNode("span", { class: "text-caption text-medium-emphasis" }, " All " + toDisplayString(unref(pendingTab)) + " tasks are shown ", 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                lg: "4",
                class: "dashboard-aside-column"
              }, {
                default: withCtx(() => [
                  createVNode("aside", { class: "dashboard-aside dashboard-reveal dashboard-reveal--2" }, [
                    createVNode(VCard, {
                      class: "schedule-card dashboard-card",
                      elevation: "0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "schedule-card__header" }, [
                          createVNode("div", null, [
                            createVNode("h2", { class: "text-h5 text-high-emphasis mb-1" }, "Upcoming schedule"),
                            createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, "Three moments to prepare for")
                          ]),
                          createVNode(VIcon, {
                            icon: "ri-calendar-schedule-line",
                            color: "primary",
                            size: "22"
                          })
                        ]),
                        createVNode("div", { class: "schedule-list" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(scheduleItems, (item) => {
                            return createVNode("div", {
                              key: item.id,
                              class: "schedule-item"
                            }, [
                              createVNode("div", { class: "schedule-item__time" }, [
                                createVNode("span", { class: "schedule-item__date text-caption" }, toDisplayString(item.dateLabel), 1),
                                createVNode("span", { class: "schedule-item__clock text-body-2 font-weight-medium" }, toDisplayString(item.timeLabel), 1)
                              ]),
                              createVNode("div", { class: "schedule-item__rule" }),
                              createVNode("div", { class: "schedule-item__content" }, [
                                createVNode("div", { class: "d-flex align-start justify-space-between gap-2" }, [
                                  createVNode("div", { class: "min-w-0" }, [
                                    createVNode("span", { class: "schedule-item__name text-body-2 font-weight-medium" }, toDisplayString(item.name), 1),
                                    createVNode("span", { class: "schedule-item__meta text-caption" }, toDisplayString(item.type) + " · " + toDisplayString(item.students) + " students", 1)
                                  ]),
                                  createVNode("span", {
                                    class: ["schedule-status", [
                                      `schedule-status--${item.status}`,
                                      { "schedule-status--nearest": item.id === unref(nearestScheduleId) }
                                    ]],
                                    "aria-label": `Schedule status: ${item.status}`
                                  }, [
                                    createVNode("span", { class: "status-dot" })
                                  ], 10, ["aria-label"])
                                ]),
                                createVNode("span", { class: "schedule-item__countdown text-caption font-weight-medium" }, toDisplayString(getCountdown(item)), 1)
                              ])
                            ]);
                          }), 64))
                        ]),
                        createVNode(VDivider),
                        createVNode(VBtn, {
                          to: { name: "schedule" },
                          variant: "outlined",
                          rounded: "pill",
                          color: "primary",
                          size: "small",
                          class: "schedule-view-all"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" View full schedule "),
                            createVNode(VIcon, {
                              end: "",
                              icon: "ri-arrow-right-line",
                              size: "16"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCard, {
                      class: "learning-card dashboard-card dashboard-reveal dashboard-reveal--3",
                      elevation: "0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "learning-card__header" }, [
                          createVNode("div", { class: "learning-card__title-row" }, [
                            createVNode("h2", { class: "text-h5 text-high-emphasis font-weight-medium mb-0" }, "Self learning reminder")
                          ])
                        ]),
                        createVNode(VDivider),
                        createVNode("div", { class: "learning-list" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(selfLearningItems, (item) => {
                            return createVNode("div", {
                              key: item.id,
                              class: "learning-item"
                            }, [
                              createVNode("div", {
                                class: "learning-item__icon",
                                "aria-hidden": "true"
                              }, [
                                createVNode(VIcon, {
                                  icon: "ri-book-open-line",
                                  color: "primary",
                                  size: "16"
                                })
                              ]),
                              createVNode("div", { class: "learning-item__content" }, [
                                createVNode("span", { class: "learning-item__title text-body-2 font-weight-medium" }, toDisplayString(item.title), 1),
                                createVNode("span", { class: "learning-item__meta text-caption" }, " Estimation: " + toDisplayString(item.estimate), 1)
                              ]),
                              createVNode(VBtn, {
                                variant: "outlined",
                                rounded: "pill",
                                color: "primary",
                                size: "small",
                                class: "learning-item__action",
                                "aria-label": `Open ${item.title}`,
                                onClick: ($event) => openSelfLearningItem(item)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Open ")
                                ]),
                                _: 2
                              }, 1032, ["aria-label", "onClick"])
                            ]);
                          }), 64))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCard, {
                      class: "freshness-card dashboard-reveal dashboard-reveal--4",
                      elevation: "0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "freshness-icon" }, [
                          createVNode(VIcon, {
                            icon: "ri-refresh-line",
                            color: "primary",
                            size: "19"
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode("p", { class: "text-body-2 text-high-emphasis mb-1" }, "Risk signals refresh every Monday."),
                          createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, "Your next watchlist review is ready.")
                        ])
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(isActionDialogOpen),
        "onUpdate:modelValue": ($event) => isRef(isActionDialogOpen) ? isActionDialogOpen.value = $event : null,
        "max-width": "520"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              class: "action-dialog",
              elevation: "0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "d-flex align-start justify-space-between gap-4 pa-6 pb-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div data-v-61a25fc4${_scopeId3}><span class="text-h5 text-high-emphasis" data-v-61a25fc4${_scopeId3}>Follow up with ${ssrInterpolate(unref(activeWatchlistItem)?.name)}</span></div>`);
                        _push4(ssrRenderComponent(_component_DialogCloseBtn, {
                          "aria-label": "Close action dialog",
                          onClick: ($event) => isActionDialogOpen.value = false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("span", { class: "text-h5 text-high-emphasis" }, "Follow up with " + toDisplayString(unref(activeWatchlistItem)?.name), 1)
                          ]),
                          createVNode(_component_DialogCloseBtn, {
                            "aria-label": "Close action dialog",
                            onClick: ($event) => isActionDialogOpen.value = false
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "px-6 pt-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="action-context mb-5" data-v-61a25fc4${_scopeId3}>`);
                        if (unref(activeWatchlistItem)) {
                          _push4(ssrRenderComponent(VChip, {
                            color: riskColor(unref(activeWatchlistItem).risk),
                            variant: "tonal",
                            size: "small"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(activeWatchlistItem).risk)} risk `);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(activeWatchlistItem).risk) + " risk ", 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<span class="text-body-2 text-medium-emphasis" data-v-61a25fc4${_scopeId3}>${ssrInterpolate(unref(activeWatchlistItem)?.issue)}</span></div>`);
                        _push4(ssrRenderComponent(VTextarea, {
                          modelValue: unref(actionNote),
                          "onUpdate:modelValue": ($event) => isRef(actionNote) ? actionNote.value = $event : null,
                          label: "Action note",
                          placeholder: "Write the next step you will take…",
                          rows: "4",
                          variant: "outlined",
                          autofocus: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "action-context mb-5" }, [
                            unref(activeWatchlistItem) ? (openBlock(), createBlock(VChip, {
                              key: 0,
                              color: riskColor(unref(activeWatchlistItem).risk),
                              variant: "tonal",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(activeWatchlistItem).risk) + " risk ", 1)
                              ]),
                              _: 1
                            }, 8, ["color"])) : createCommentVNode("", true),
                            createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(unref(activeWatchlistItem)?.issue), 1)
                          ]),
                          createVNode(VTextarea, {
                            modelValue: unref(actionNote),
                            "onUpdate:modelValue": ($event) => isRef(actionNote) ? actionNote.value = $event : null,
                            label: "Action note",
                            placeholder: "Write the next step you will take…",
                            rows: "4",
                            variant: "outlined",
                            autofocus: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "px-6 pb-6 pt-0 justify-end gap-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          color: "secondary",
                          onClick: ($event) => isActionDialogOpen.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Cancel`);
                            } else {
                              return [
                                createTextVNode("Cancel")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          onClick: submitAction
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Save action`);
                            } else {
                              return [
                                createTextVNode("Save action")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "text",
                            color: "secondary",
                            onClick: ($event) => isActionDialogOpen.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: submitAction
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Save action")
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
                    createVNode(VCardTitle, { class: "d-flex align-start justify-space-between gap-4 pa-6 pb-2" }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("span", { class: "text-h5 text-high-emphasis" }, "Follow up with " + toDisplayString(unref(activeWatchlistItem)?.name), 1)
                        ]),
                        createVNode(_component_DialogCloseBtn, {
                          "aria-label": "Close action dialog",
                          onClick: ($event) => isActionDialogOpen.value = false
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "px-6 pt-3" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "action-context mb-5" }, [
                          unref(activeWatchlistItem) ? (openBlock(), createBlock(VChip, {
                            key: 0,
                            color: riskColor(unref(activeWatchlistItem).risk),
                            variant: "tonal",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(activeWatchlistItem).risk) + " risk ", 1)
                            ]),
                            _: 1
                          }, 8, ["color"])) : createCommentVNode("", true),
                          createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(unref(activeWatchlistItem)?.issue), 1)
                        ]),
                        createVNode(VTextarea, {
                          modelValue: unref(actionNote),
                          "onUpdate:modelValue": ($event) => isRef(actionNote) ? actionNote.value = $event : null,
                          label: "Action note",
                          placeholder: "Write the next step you will take…",
                          rows: "4",
                          variant: "outlined",
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, { class: "px-6 pb-6 pt-0 justify-end gap-2" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "text",
                          color: "secondary",
                          onClick: ($event) => isActionDialogOpen.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancel")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "primary",
                          onClick: submitAction
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Save action")
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
              createVNode(VCard, {
                class: "action-dialog",
                elevation: "0"
              }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "d-flex align-start justify-space-between gap-4 pa-6 pb-2" }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("span", { class: "text-h5 text-high-emphasis" }, "Follow up with " + toDisplayString(unref(activeWatchlistItem)?.name), 1)
                      ]),
                      createVNode(_component_DialogCloseBtn, {
                        "aria-label": "Close action dialog",
                        onClick: ($event) => isActionDialogOpen.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "px-6 pt-3" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "action-context mb-5" }, [
                        unref(activeWatchlistItem) ? (openBlock(), createBlock(VChip, {
                          key: 0,
                          color: riskColor(unref(activeWatchlistItem).risk),
                          variant: "tonal",
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(activeWatchlistItem).risk) + " risk ", 1)
                          ]),
                          _: 1
                        }, 8, ["color"])) : createCommentVNode("", true),
                        createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(unref(activeWatchlistItem)?.issue), 1)
                      ]),
                      createVNode(VTextarea, {
                        modelValue: unref(actionNote),
                        "onUpdate:modelValue": ($event) => isRef(actionNote) ? actionNote.value = $event : null,
                        label: "Action note",
                        placeholder: "Write the next step you will take…",
                        rows: "4",
                        variant: "outlined",
                        autofocus: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "px-6 pb-6 pt-0 justify-end gap-2" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "text",
                        color: "secondary",
                        onClick: ($event) => isActionDialogOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: submitAction
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Save action")
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
        modelValue: unref(toastShow),
        "onUpdate:modelValue": ($event) => isRef(toastShow) ? toastShow.value = $event : null,
        color: "success",
        timeout: "3000"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(toastText))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(toastText)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard-teacher.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboardTeacher = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61a25fc4"]]);
export {
  dashboardTeacher as default
};
