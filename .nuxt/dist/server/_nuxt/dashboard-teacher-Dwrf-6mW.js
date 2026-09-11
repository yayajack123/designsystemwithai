import { q as genericComponent, C as useProxiedModel, G as useRender, ak as filterInputAttrs, m as convertToUnit, al as callEvent, I as propsFactory, an as clamp, b9 as __nuxt_component_0, a as VIcon, V as VBtn, aY as _export_sfc } from "../server.mjs";
import { _ as _sfc_main$1 } from "./DialogCloseBtn-CVR_yFk0.js";
import { computed, ref, shallowRef, watchEffect, watch, createVNode, mergeProps, Fragment, withDirectives, resolveDirective, vModelText, nextTick, defineComponent, resolveComponent, withCtx, unref, toDisplayString, isRef, createTextVNode, openBlock, createBlock, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { U as UiTableView } from "./UiTableView-DhOF1Ya0.js";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/hookable/dist/index.mjs";
import { V as VCard, a as VCardTitle, b as VCardActions } from "./VCard-u8p0g_5j.js";
import { V as VChip } from "./VChip-DklVb85L.js";
import { I as Intersect, V as VAvatar } from "./VAvatar-Bov4ZLUZ.js";
import { V as VDivider } from "./VDivider-CWdThEEs.js";
import { V as VDialog } from "./VDialog-Bx9nn4_A.js";
import { V as VCardText } from "./VCardText-Dvf5gJn3.js";
import { i as useFocus, d as VInput, f as filterFieldProps, j as VCounter, g as VField, h as makeVFieldProps, e as makeVInputProps } from "./VTextField-CQSxiXKB.js";
import { f as forwardRefs } from "./forwardRefs-CtuH3aYe.js";
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
import "./VTooltip-iMMZgjjz.js";
import "./VOverlay-2hsH7Y4R.js";
import "./VRow-BKXTxdYZ.js";
/* empty css               */
import "./VTabs-Bx65mjDv.js";
import "./VList-MvyrR4cM.js";
import "./index-CGI_inNZ.js";
import "./VDataTable-C0L9o-6N.js";
import "./VDataTableFooter-BLyT_THf.js";
import "./filter-CG6ILojS.js";
import "./VMenu-HR5UQDp_.js";
import "./dialog-transition-BWrfOTuu.js";
import "./VCheckboxBtn-TMgTU4RA.js";
import "./VSelectionControl-DaNxjNnI.js";
const teacherWelcomeIllustration = "" + __buildAssetsURL("teacher-welcome-illustration.CM2FzvjN.png");
const makeVTextareaProps = propsFactory({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (v) => !isNaN(parseFloat(v))
  },
  maxRows: {
    type: [Number, String],
    validator: (v) => !isNaN(parseFloat(v))
  },
  suffix: String,
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, "VTextarea");
const VTextarea = genericComponent()({
  name: "VTextarea",
  directives: {
    Intersect
  },
  inheritAttrs: false,
  props: makeVTextareaProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : (model.value || "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength) return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string") return void 0;
      return props.counter;
    });
    function onIntersect(isIntersecting, entries) {
      if (!props.autofocus || !isIntersecting) return;
      entries[0].target?.focus?.();
    }
    const vInputRef = ref();
    const vFieldRef = ref();
    const controlHeight = shallowRef("");
    const textareaRef = ref();
    const isActive = computed(() => props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      if (textareaRef.value !== (void 0).activeElement) {
        textareaRef.value?.focus();
      }
      if (!isFocused.value) focus();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = "";
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      const el = e.target;
      model.value = el.value;
      if (props.modelModifiers?.trim) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    const sizerRef = ref();
    const rows = ref(+props.rows);
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    watchEffect(() => {
      if (!props.autoGrow) rows.value = +props.rows;
    });
    function calculateInputHeight() {
      if (!props.autoGrow) return;
      nextTick(() => {
        if (!sizerRef.value || !vFieldRef.value) return;
        const style = getComputedStyle(sizerRef.value);
        const fieldStyle = getComputedStyle(vFieldRef.value.$el);
        const padding = parseFloat(style.getPropertyValue("--v-field-padding-top")) + parseFloat(style.getPropertyValue("--v-input-padding-top")) + parseFloat(style.getPropertyValue("--v-field-padding-bottom"));
        const height = sizerRef.value.scrollHeight;
        const lineHeight = parseFloat(style.lineHeight);
        const minHeight = Math.max(parseFloat(props.rows) * lineHeight + padding, parseFloat(fieldStyle.getPropertyValue("--v-input-control-height")));
        const maxHeight = parseFloat(props.maxRows) * lineHeight + padding || Infinity;
        const newHeight = clamp(height ?? 0, minHeight, maxHeight);
        rows.value = Math.floor((newHeight - padding) / lineHeight);
        controlHeight.value = convertToUnit(newHeight);
      });
    }
    watch(model, calculateInputHeight);
    watch(() => props.rows, calculateInputHeight);
    watch(() => props.maxRows, calculateInputHeight);
    watch(() => props.density, calculateInputHeight);
    let observer;
    watch(sizerRef, (val) => {
      if (val) {
        observer = new ResizeObserver(calculateInputHeight);
        observer.observe(sizerRef.value);
      } else {
        observer?.disconnect();
      }
    });
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = filterFieldProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-textarea v-text-field", {
          "v-textarea--prefixed": props.prefix,
          "v-textarea--suffixed": props.suffix,
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-textarea--auto-grow": props.autoGrow,
          "v-textarea--no-resize": props.noResize || props.autoGrow,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "style": {
              "--v-textarea-control-height": controlHeight.value
            },
            "onClick": onControlClick,
            "onMousedown": onControlMousedown,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"]
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              return createVNode(Fragment, null, [props.prefix && createVNode("span", {
                "class": "v-text-field__prefix"
              }, [props.prefix]), withDirectives(createVNode("textarea", mergeProps({
                "ref": textareaRef,
                "class": fieldClass,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "placeholder": props.placeholder,
                "rows": props.rows,
                "name": props.name,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[resolveDirective("intersect"), {
                handler: onIntersect
              }, null, {
                once: true
              }]]), props.autoGrow && withDirectives(createVNode("textarea", {
                "class": [fieldClass, "v-textarea__sizer"],
                "id": `${slotProps.id}-sizer`,
                "onUpdate:modelValue": ($event) => model.value = $event,
                "ref": sizerRef,
                "readonly": true,
                "aria-hidden": "true"
              }, null), [[vModelText, model.value]]), props.suffix && createVNode("span", {
                "class": "v-text-field__suffix"
              }, [props.suffix])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => createVNode(Fragment, null, [slots.details?.(slotProps), hasCounter && createVNode(Fragment, null, [createVNode("span", null, null), createVNode(VCounter, {
          "active": props.persistentCounter || isFocused.value,
          "value": counterValue.value,
          "max": max.value,
          "disabled": props.disabled
        }, slots.counter)])]) : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, textareaRef);
  }
});
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
    const getInitials = (name) => {
      const cleanName = name.replace(/^(Mr\.|Ms\.|Mrs\.|Dr\.)\s+/i, "");
      return cleanName.split(" ").map((word) => word.charAt(0)).join("").toUpperCase().slice(0, 2);
    };
    const pendingTab = ref("Journal");
    const pendingItems = {
      Journal: [
        { id: "task-1", student: "Alice Johnson", course: "Coding Xplorer", lesson: "Mtg 12", due: "Today · 16:00", action: "Create", category: "Journal" },
        { id: "task-2", student: "Diana Prince", course: "Coding Xplorer", lesson: "Mtg 12", due: "Today · 18:00", action: "Create", category: "Journal" },
        { id: "task-3", student: "Fajar Ramadhan", course: "Python Foundations", lesson: "Mtg 11", due: "Tomorrow", action: "Create", category: "Journal" }
      ],
      Reports: [
        { id: "task-4", student: "Gita Permata", course: "Web Design Basics", lesson: "Mtg 8", due: "Today · 17:00", action: "Write report", category: "Reports" },
        { id: "task-5", student: "Bima Putra", course: "Python Foundations", lesson: "Mtg 8", due: "Tomorrow", action: "Write report", category: "Reports" }
      ],
      Projects: [
        { id: "task-6", student: "Nadia Sari", course: "Game Design", lesson: "Project 2", due: "Today · 19:00", action: "Review", category: "Projects" },
        { id: "task-7", student: "Raka Aditya", course: "Scratch Studio", lesson: "Project 1", due: "12 Sep", action: "Review", category: "Projects" }
      ]
    };
    const activePendingItems = computed(() => pendingItems[pendingTab.value]);
    const pendingTotal = computed(() => Object.values(pendingItems).flat().length);
    const pendingTableTabs = computed(() => Object.keys(pendingItems).map((tab) => ({
      label: tab,
      value: tab,
      count: pendingItems[tab].length
    })));
    const pendingHeaders = [
      { title: "STUDENT", key: "student", sortable: false },
      { title: "COURSE", key: "course", sortable: false },
      { title: "MTG / LESSON", key: "lesson", sortable: false },
      { title: "DUE", key: "due", sortable: false },
      { title: "ACTION", key: "action", sortable: false, align: "center", width: 140 }
    ];
    const scheduleItems = [
      { id: "schedule-1", startsAt: "2026-09-11T09:00:00+08:00", endsAt: "2026-09-11T10:30:00+08:00", dateLabel: "Tomorrow", timeLabel: "09:00–10:30", name: "Regular Kids", type: "Adaptive", students: 5, status: "soon" },
      { id: "schedule-2", startsAt: "2026-09-11T14:00:00+08:00", endsAt: "2026-09-11T15:30:00+08:00", dateLabel: "Tomorrow", timeLabel: "14:00–15:30", name: "Advanced Teens", type: "Dynamic", students: 7, status: "ready" },
      { id: "schedule-3", startsAt: "2026-09-12T08:00:00+08:00", endsAt: "2026-09-12T09:30:00+08:00", dateLabel: "12 Sep", timeLabel: "08:00–09:30", name: "Future Coders", type: "Adaptive", students: 6, status: "ready" }
    ];
    const selfLearningItems = [
      { id: "learning-1", title: "Check LMS reflection notes", estimate: "10 min" },
      { id: "learning-2", title: "Review Python Game Dev Lesson 7 material", estimate: "15 min", deadline: "Today" },
      { id: "learning-3", title: "Prepare for Tech Explorer class tomorrow", estimate: "20 min", deadline: "Tomorrow" }
    ];
    const currentTime = ref(null);
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
    const activeAppreciation = computed(() => appreciationItems[currentAppreciation.value]);
    const changeAppreciation = (direction) => {
      currentAppreciation.value = (currentAppreciation.value + direction + appreciationItems.length) % appreciationItems.length;
    };
    const riskColor = (risk) => ({ Green: "success", Yellow: "warning", Red: "error" })[risk];
    const statusColor = (status) => ({
      Open: "secondary",
      "In Progress": "info",
      Resolved: "success",
      Failed: "error",
      "No Action": "warning",
      Closed: "secondary"
    })[status];
    const getTaskRoute = (task) => task.category === "Projects" ? { name: "assessments" } : { name: "reports" };
    const isActionDialogOpen = ref(false);
    const activeWatchlistItem = ref(null);
    const actionNote = ref("");
    const toastShow = ref(false);
    const toastText = ref("");
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
      const _component_IconBtn = resolveComponent("IconBtn");
      const _component_DialogCloseBtn = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "teacher-dashboard" }, _attrs))} data-v-6b412c5c><header class="dashboard-header dashboard-reveal dashboard-reveal--1" data-v-6b412c5c><div class="dashboard-header__content" data-v-6b412c5c><h1 class="text-h4 text-high-emphasis mb-2" data-v-6b412c5c> Good morning, Julie. </h1><p class="text-body-1 text-medium-emphasis mb-0" data-v-6b412c5c> Here’s your teaching brief. Start with what needs your attention today. </p></div><div class="dashboard-header__art" aria-hidden="true" data-v-6b412c5c>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(teacherWelcomeIllustration))} alt="" class="dashboard-header__illustration" data-v-6b412c5c${_scopeId}>`);
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
      }, _parent));
      _push(`</div></header><div class="dashboard-layout" data-v-6b412c5c><main class="dashboard-main" data-v-6b412c5c><section class="recognition-card dashboard-reveal dashboard-reveal--2" aria-label="Personal achievement" data-v-6b412c5c><div class="recognition-banner" data-v-6b412c5c><div class="recognition-rail" aria-hidden="true" data-v-6b412c5c>`);
      if (!unref(prefersReducedMotion)) {
        _push(`<lord-icon${ssrRenderAttr("src", unref(activeAppreciation).lordIconSrc)} trigger="loop" loading="lazy" class="recognition-lord-icon current-color" aria-hidden="true" data-v-6b412c5c></lord-icon>`);
      } else {
        _push(ssrRenderComponent(VIcon, {
          icon: unref(activeAppreciation).fallbackIcon,
          size: "20"
        }, null, _parent));
      }
      _push(`</div><div class="recognition-content" data-v-6b412c5c><div class="appreciation-copy" aria-live="polite" data-v-6b412c5c><h2 class="text-h6 font-weight-medium text-high-emphasis mb-1" data-v-6b412c5c>${ssrInterpolate(unref(activeAppreciation).title)}</h2><p class="text-body-2 text-medium-emphasis mb-1 appreciation-quote" data-v-6b412c5c> “${ssrInterpolate(unref(activeAppreciation).quote)}” </p><div class="d-flex align-center gap-2 text-caption text-medium-emphasis" data-v-6b412c5c>`);
      _push(ssrRenderComponent(VIcon, {
        icon: "ri-checkbox-circle-line",
        size: "15"
      }, null, _parent));
      _push(`<span data-v-6b412c5c>${ssrInterpolate(unref(activeAppreciation).detail)}</span></div></div></div><div class="recognition-banner-nav d-flex align-center gap-2" data-v-6b412c5c>`);
      _push(ssrRenderComponent(_component_IconBtn, {
        class: "recognition-nav",
        "aria-label": "Previous appreciation",
        onClick: ($event) => changeAppreciation(-1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              icon: "ri-arrow-left-line",
              size: "18"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                icon: "ri-arrow-left-line",
                size: "18"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IconBtn, {
        class: "recognition-nav",
        "aria-label": "Next appreciation",
        onClick: ($event) => changeAppreciation(1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              icon: "ri-arrow-right-line",
              size: "18"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                icon: "ri-arrow-right-line",
                size: "18"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="recognition-progress" aria-label="Appreciation carousel position" data-v-6b412c5c><!--[-->`);
      ssrRenderList(appreciationItems, (_, index) => {
        _push(`<span class="${ssrRenderClass([{ "recognition-progress__item--active": index === unref(currentAppreciation) }, "recognition-progress__item"])}" data-v-6b412c5c></span>`);
      });
      _push(`<!--]--></div></section><section class="dashboard-section dashboard-reveal dashboard-reveal--3" aria-labelledby="summary-heading" data-v-6b412c5c><div class="section-heading" data-v-6b412c5c><div data-v-6b412c5c><h2 id="summary-heading" class="text-h5 text-high-emphasis mb-0" data-v-6b412c5c> Your Statistic </h2></div><span class="section-meta text-caption" data-v-6b412c5c>Updated today</span></div><div class="summary-grid" data-v-6b412c5c><!--[-->`);
      ssrRenderList(summaryItems, (item) => {
        _push(ssrRenderComponent(VCard, {
          key: item.label,
          class: ["summary-card", `summary-card--${item.tone}`],
          elevation: "0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="summary-card__top" data-v-6b412c5c${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                icon: item.icon,
                size: "19"
              }, null, _parent2, _scopeId));
              _push2(`<span class="summary-card__period text-caption" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.period)}</span></div><span class="summary-card__value text-h3 font-weight-medium" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.value)}</span><span class="summary-card__label text-body-2 font-weight-medium" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.label)}</span>`);
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
        }, _parent));
      });
      _push(`<!--]--></div></section><section class="dashboard-section dashboard-reveal dashboard-reveal--4" aria-labelledby="watchlist-heading" data-v-6b412c5c>`);
      _push(ssrRenderComponent(UiTableView, {
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
        "card-class": "dashboard-card",
        "table-class": "dashboard-table watchlist-table",
        flat: "",
        class: "dashboard-table-view"
      }, {
        "card-header": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-heading" data-v-6b412c5c${_scopeId}><div data-v-6b412c5c${_scopeId}><div class="watchlist-title-row" data-v-6b412c5c${_scopeId}><h2 id="watchlist-heading" class="text-h5 text-high-emphasis mb-0" data-v-6b412c5c${_scopeId}> Priority Watchlist </h2>`);
            _push2(ssrRenderComponent(VChip, {
              color: "error",
              variant: "tonal",
              size: "x-small"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(watchlistRedCount))} red risks`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(watchlistRedCount)) + " red risks", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><p class="text-body-2 text-medium-emphasis mb-0" data-v-6b412c5c${_scopeId}> Latest fixed-block evaluation · refreshed every Monday </p></div>`);
            _push2(ssrRenderComponent(VBtn, {
              variant: "text",
              color: "primary",
              size: "small",
              class: "section-link",
              to: { name: "students" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View all `);
                  _push3(ssrRenderComponent(VIcon, {
                    end: "",
                    icon: "ri-arrow-right-line",
                    size: "16"
                  }, null, _parent3, _scopeId2));
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
            }, _parent2, _scopeId));
            _push2(`</div>`);
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
        "item.student": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="student-cell" data-v-6b412c5c${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, {
              size: "34",
              color: "grey-100",
              class: "border"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-caption font-weight-medium text-high-emphasis" data-v-6b412c5c${_scopeId2}>${ssrInterpolate(getInitials(item.name))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(getInitials(item.name)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="min-w-0" data-v-6b412c5c${_scopeId}><span class="student-name font-weight-medium" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.name)}</span><span class="student-course text-caption" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.course)} · ${ssrInterpolate(item.window)}</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "student-cell" }, [
                createVNode(VAvatar, {
                  size: "34",
                  color: "grey-100",
                  class: "border"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-caption font-weight-medium text-high-emphasis" }, toDisplayString(getInitials(item.name)), 1)
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
        "item.issue": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="issue-cell" data-v-6b412c5c${_scopeId}><span class="issue-title" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.issue)}</span><span class="issue-metric text-caption" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.metric)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "issue-cell" }, [
                createVNode("span", { class: "issue-title" }, toDisplayString(item.issue), 1),
                createVNode("span", { class: "issue-metric text-caption" }, toDisplayString(item.metric), 1)
              ])
            ];
          }
        }),
        "item.risk": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VChip, {
              color: riskColor(item.risk),
              variant: "tonal",
              size: "small",
              class: "status-chip text-caption font-weight-medium"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="status-dot" data-v-6b412c5c${_scopeId2}></span> ${ssrInterpolate(item.risk)}`);
                } else {
                  return [
                    createVNode("span", { class: "status-dot" }),
                    createTextVNode(" " + toDisplayString(item.risk), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
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
        "item.status": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VChip, {
              color: statusColor(item.status),
              variant: "outlined",
              size: "small",
              class: "status-chip text-caption font-weight-medium"
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
        "item.action": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              variant: "outlined",
              color: "primary",
              size: "small",
              class: "action-button",
              onClick: ($event) => openActionDialog(item)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Action `);
                } else {
                  return [
                    createTextVNode(" Action ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
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
        "no-data": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="empty-cell" data-v-6b412c5c${_scopeId}> No students in this evaluation view. </div>`);
          } else {
            return [
              createVNode("div", { class: "empty-cell" }, " No students in this evaluation view. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="dashboard-section dashboard-reveal dashboard-reveal--5" aria-labelledby="pending-heading" data-v-6b412c5c>`);
      _push(ssrRenderComponent(UiTableView, {
        activeTab: unref(pendingTab),
        "onUpdate:activeTab": ($event) => isRef(pendingTab) ? pendingTab.value = $event : null,
        title: "",
        tabs: unref(pendingTableTabs),
        headers: pendingHeaders,
        items: unref(activePendingItems),
        "items-per-page": -1,
        "hide-filters": "",
        "hide-pagination": "",
        "tabs-inside-card": "",
        "card-class": "dashboard-card",
        "table-class": "dashboard-table pending-table",
        flat: "",
        class: "dashboard-table-view"
      }, {
        "card-header": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-heading" data-v-6b412c5c${_scopeId}><div data-v-6b412c5c${_scopeId}><h2 id="pending-heading" class="text-h5 text-high-emphasis mb-1" data-v-6b412c5c${_scopeId}> Pending Task </h2><p class="text-body-2 text-medium-emphasis mb-0" data-v-6b412c5c${_scopeId}>${ssrInterpolate(unref(pendingTotal))} items are waiting across your workflows </p></div>`);
            _push2(ssrRenderComponent(VBtn, {
              variant: "text",
              color: "primary",
              size: "small",
              class: "section-link",
              to: { name: "reports" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View all `);
                  _push3(ssrRenderComponent(VIcon, {
                    end: "",
                    icon: "ri-arrow-right-line",
                    size: "16"
                  }, null, _parent3, _scopeId2));
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
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "card-heading" }, [
                createVNode("div", null, [
                  createVNode("h2", {
                    id: "pending-heading",
                    class: "text-h5 text-high-emphasis mb-1"
                  }, " Pending Task "),
                  createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0" }, toDisplayString(unref(pendingTotal)) + " items are waiting across your workflows ", 1)
                ]),
                createVNode(VBtn, {
                  variant: "text",
                  color: "primary",
                  size: "small",
                  class: "section-link",
                  to: { name: "reports" }
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
        "item.student": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="student-name font-weight-medium" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.student)}</span>`);
          } else {
            return [
              createVNode("span", { class: "student-name font-weight-medium" }, toDisplayString(item.student), 1)
            ];
          }
        }),
        "item.course": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="table-muted text-caption" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.course)}</span>`);
          } else {
            return [
              createVNode("span", { class: "table-muted text-caption" }, toDisplayString(item.course), 1)
            ];
          }
        }),
        "item.lesson": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="table-muted text-caption" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.lesson)}</span>`);
          } else {
            return [
              createVNode("span", { class: "table-muted text-caption" }, toDisplayString(item.lesson), 1)
            ];
          }
        }),
        "item.due": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="due-label text-body-2 font-weight-medium" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.due)}</span>`);
          } else {
            return [
              createVNode("span", { class: "due-label text-body-2 font-weight-medium" }, toDisplayString(item.due), 1)
            ];
          }
        }),
        "item.action": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              to: getTaskRoute(item),
              variant: "text",
              color: "primary",
              size: "small",
              class: "action-link"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.action)} `);
                  _push3(ssrRenderComponent(VIcon, {
                    end: "",
                    icon: "ri-arrow-right-up-line",
                    size: "15"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(toDisplayString(item.action) + " ", 1),
                    createVNode(VIcon, {
                      end: "",
                      icon: "ri-arrow-right-up-line",
                      size: "15"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                to: getTaskRoute(item),
                variant: "text",
                color: "primary",
                size: "small",
                class: "action-link"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.action) + " ", 1),
                  createVNode(VIcon, {
                    end: "",
                    icon: "ri-arrow-right-up-line",
                    size: "15"
                  })
                ]),
                _: 2
              }, 1032, ["to"])
            ];
          }
        }),
        "no-data": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="empty-cell" data-v-6b412c5c${_scopeId}> Nothing is waiting here. Keep the good rhythm going. </div>`);
          } else {
            return [
              createVNode("div", { class: "empty-cell" }, " Nothing is waiting here. Keep the good rhythm going. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></main><aside class="dashboard-aside dashboard-reveal dashboard-reveal--2" data-v-6b412c5c>`);
      _push(ssrRenderComponent(VCard, {
        class: "schedule-card dashboard-card",
        elevation: "0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="schedule-card__header" data-v-6b412c5c${_scopeId}><div data-v-6b412c5c${_scopeId}><h2 class="text-h5 text-high-emphasis mb-1" data-v-6b412c5c${_scopeId}>Upcoming schedule</h2><p class="text-body-2 text-medium-emphasis mb-0" data-v-6b412c5c${_scopeId}>Three moments to prepare for</p></div>`);
            _push2(ssrRenderComponent(VIcon, {
              icon: "ri-calendar-schedule-line",
              color: "primary",
              size: "22"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="schedule-list" data-v-6b412c5c${_scopeId}><!--[-->`);
            ssrRenderList(scheduleItems, (item) => {
              _push2(`<div class="schedule-item" data-v-6b412c5c${_scopeId}><div class="schedule-item__time" data-v-6b412c5c${_scopeId}><span class="schedule-item__date text-caption" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.dateLabel)}</span><span class="schedule-item__clock text-body-2 font-weight-medium" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.timeLabel)}</span></div><div class="schedule-item__rule" data-v-6b412c5c${_scopeId}></div><div class="schedule-item__content" data-v-6b412c5c${_scopeId}><div class="d-flex align-start justify-space-between gap-2" data-v-6b412c5c${_scopeId}><div class="min-w-0" data-v-6b412c5c${_scopeId}><span class="schedule-item__name text-body-2 font-weight-medium" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.name)}</span><span class="schedule-item__meta text-caption" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.type)} · ${ssrInterpolate(item.students)} students</span></div><span class="${ssrRenderClass([`schedule-status--${item.status}`, "schedule-status"])}"${ssrRenderAttr("aria-label", `Schedule status: ${item.status}`)} data-v-6b412c5c${_scopeId}><span class="status-dot" data-v-6b412c5c${_scopeId}></span></span></div><span class="schedule-item__countdown text-caption font-weight-medium" data-v-6b412c5c${_scopeId}>${ssrInterpolate(getCountdown(item))}</span></div></div>`);
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              to: { name: "schedule" },
              variant: "outlined",
              rounded: "pill",
              color: "primary",
              size: "small",
              class: "schedule-view-all"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View full schedule `);
                  _push3(ssrRenderComponent(VIcon, {
                    end: "",
                    icon: "ri-arrow-right-line",
                    size: "16"
                  }, null, _parent3, _scopeId2));
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
            }, _parent2, _scopeId));
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
                          class: ["schedule-status", `schedule-status--${item.status}`],
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
      }, _parent));
      _push(ssrRenderComponent(VCard, {
        class: "learning-card dashboard-card dashboard-reveal dashboard-reveal--3",
        elevation: "0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="learning-card__header" data-v-6b412c5c${_scopeId}><div class="learning-card__title-row" data-v-6b412c5c${_scopeId}><h2 class="text-h5 text-high-emphasis font-weight-medium mb-0" data-v-6b412c5c${_scopeId}>Self learning reminder</h2></div></div>`);
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(`<div class="learning-list" data-v-6b412c5c${_scopeId}><!--[-->`);
            ssrRenderList(selfLearningItems, (item) => {
              _push2(`<div class="learning-item" data-v-6b412c5c${_scopeId}><div class="learning-item__icon" aria-hidden="true" data-v-6b412c5c${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                icon: "ri-book-open-line",
                color: "primary",
                size: "16"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="learning-item__content" data-v-6b412c5c${_scopeId}><span class="learning-item__title text-body-2 font-weight-medium" data-v-6b412c5c${_scopeId}>${ssrInterpolate(item.title)}</span><span class="learning-item__meta text-caption" data-v-6b412c5c${_scopeId}> Estimation: ${ssrInterpolate(item.estimate)}`);
              if (item.deadline) {
                _push2(`<!--[--> · Deadline: ${ssrInterpolate(item.deadline)}<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span></div>`);
              _push2(ssrRenderComponent(VBtn, {
                variant: "outlined",
                rounded: "pill",
                color: "primary",
                size: "small",
                class: "learning-item__action",
                "aria-label": `Open ${item.title}`,
                onClick: ($event) => openSelfLearningItem(item)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Open `);
                  } else {
                    return [
                      createTextVNode(" Open ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
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
                      createVNode("span", { class: "learning-item__meta text-caption" }, [
                        createTextVNode(" Estimation: " + toDisplayString(item.estimate), 1),
                        item.deadline ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createTextVNode(" · Deadline: " + toDisplayString(item.deadline), 1)
                        ], 64)) : createCommentVNode("", true)
                      ])
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
      }, _parent));
      _push(ssrRenderComponent(VCard, {
        class: "freshness-card dashboard-reveal dashboard-reveal--4",
        elevation: "0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="freshness-icon" data-v-6b412c5c${_scopeId}>`);
            _push2(ssrRenderComponent(VIcon, {
              icon: "ri-refresh-line",
              color: "primary",
              size: "19"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-6b412c5c${_scopeId}><p class="text-body-2 text-high-emphasis mb-1" data-v-6b412c5c${_scopeId}>Risk signals refresh every Monday.</p><p class="text-caption text-medium-emphasis mb-0" data-v-6b412c5c${_scopeId}>Your next watchlist review is ready.</p></div>`);
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
      }, _parent));
      _push(`</aside></div>`);
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
                        _push4(`<div data-v-6b412c5c${_scopeId3}><span class="text-h5 text-high-emphasis" data-v-6b412c5c${_scopeId3}>Follow up with ${ssrInterpolate(unref(activeWatchlistItem)?.name)}</span></div>`);
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
                        _push4(`<div class="action-context mb-5" data-v-6b412c5c${_scopeId3}>`);
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
                        _push4(`<span class="text-body-2 text-medium-emphasis" data-v-6b412c5c${_scopeId3}>${ssrInterpolate(unref(activeWatchlistItem)?.issue)}</span></div>`);
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
const dashboardTeacher = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6b412c5c"]]);
export {
  dashboardTeacher as default
};
