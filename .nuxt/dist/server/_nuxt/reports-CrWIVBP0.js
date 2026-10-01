import { _ as _sfc_main$1 } from "./DialogCloseBtn-CVR_yFk0.js";
import { _ as _sfc_main$2 } from "./AppDateTimePicker-BfXFyw4x.js";
import { defineComponent, ref, computed, watch, provide, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, vShow, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { a as avatarText } from "./formatters-aT3ik1oa.js";
import "/Users/user/Documents/Code Project/microdemy-DS/node_modules/hookable/dist/index.mjs";
import { b5 as useRoute, a as VIcon, V as VBtn, aZ as VBtnToggle, b3 as VProgressLinear, aY as _export_sfc } from "../server.mjs";
import { b as VExpandTransition } from "./index-CGI_inNZ.js";
import { V as VTabs, a as VTab, b as VSkeletonLoader } from "./VTabs-Bx65mjDv.js";
import { V as VCard, a as VCardTitle, b as VCardActions } from "./VCard-u8p0g_5j.js";
import { V as VCardText } from "./VCardText-Dvf5gJn3.js";
import { V as VTextField } from "./VTextField-Cx_BotQJ.js";
import { V as VSelect } from "./filter-F6JSwjTx.js";
import { V as VDivider } from "./VDivider-CWdThEEs.js";
import { V as VAvatar } from "./VAvatar-Bov4ZLUZ.js";
import { V as VChip } from "./VChip-DklVb85L.js";
import { V as VDataTableFooter } from "./VDataTableFooter-OvjebZTV.js";
import { k as VDataTable } from "./VDataTable-BRP6mm-W.js";
import { V as VTooltip } from "./VTooltip-iMMZgjjz.js";
import { V as VMenu } from "./VMenu-HR5UQDp_.js";
import { V as VList, a as VListItem, b as VListItemTitle } from "./VList-MvyrR4cM.js";
import { V as VDialog } from "./VDialog-Bx9nn4_A.js";
import { V as VTextarea } from "./VTextarea-Grf16ApK.js";
import { V as VSnackbar } from "./VSnackbar-CJfio8i7.js";
import "vue-flatpickr-component";
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
import "./forwardRefs-CtuH3aYe.js";
import "./VOverlay-2hsH7Y4R.js";
import "./VCheckboxBtn-CHmNVDFy.js";
import "./VSelectionControl-ggoddxMA.js";
import "./dialog-transition-BWrfOTuu.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reports",
  __ssrInlineRender: true,
  setup(__props) {
    const groupDailyJournalRows = (records) => {
      const groupedRecords = /* @__PURE__ */ new Map();
      records.forEach((record) => {
        const key = JSON.stringify([record.studentId, record.bookSession]);
        const group = groupedRecords.get(key) || [];
        group.push(record);
        groupedRecords.set(key, group);
      });
      return Array.from(groupedRecords.values()).map((group) => {
        const lessonDetails = group.flatMap((record) => {
          const names = record.lessonNames?.length ? record.lessonNames : record.lessonName ? [record.lessonName] : [];
          const status = record.status === "Pending" ? "Pending" : "Not Created";
          return names.map((name) => ({ name, date: record.date, status }));
        });
        const dates = group.map((record) => record.date).filter((date) => Boolean(date)).sort();
        const classNames = [...new Set(group.map((record) => record.className).filter((className) => Boolean(className && className !== "-")))];
        const journalStatuses = new Set(lessonDetails.map((lesson) => lesson.status));
        const firstRecord = group[0];
        return {
          ...firstRecord,
          id: `daily-journal-${firstRecord.studentId}-${firstRecord.bookSession}`,
          lessonNames: lessonDetails.map((lesson) => lesson.name),
          lessonDetails,
          classNames,
          className: classNames.length ? classNames.join(", ") : void 0,
          date: dates[dates.length - 1],
          dateRangeStart: dates[0],
          dateRangeEnd: dates[dates.length - 1],
          status: journalStatuses.size === 1 ? lessonDetails[0]?.status || "Not Created" : "Mixed"
        };
      });
    };
    const route = useRoute();
    const getInitialReportsTab = () => {
      const queryTab = route.query.tab;
      if (queryTab === "reports" || queryTab === "ptm" || queryTab === "daily-journal") return queryTab;
      return "daily-journal";
    };
    const activeTab = ref(getInitialReportsTab());
    const searchQuery = ref("");
    const selectedClass = ref("All Classes");
    const selectedStatus = ref("All Status");
    const viewType = ref("flat");
    const currentPage = ref(1);
    const itemsPerPage = ref(10);
    const isLoading = ref(true);
    const toastShow = ref(false);
    const toastText = ref("");
    const isReportDialogOpen = ref(false);
    const selectedReport = ref(null);
    const isPtmDialogOpen = ref(false);
    const selectedPtm = ref(null);
    const ptmNotes = ref("");
    const estimatedPtmDate = ref("");
    const isLessonsDialogOpen = ref(false);
    const selectedDailyJournal = ref(null);
    const dailyJournalRecords = [
      { id: "dj-1", studentName: "I Wayan Sahadewa Putra", studentId: "STD-20260109-001", bookSession: "Python Game Dev", lessonName: "Lesson 7 – Add Another Sprite", lessonNames: ["Lesson 7 – Add Another Sprite", "Lesson 8 – Sprite Animation"], className: "DPS-Adaptive-8C", date: "2026-04-20", status: "Not Created" },
      { id: "dj-2", studentName: "Winston Arya Liaudo", studentId: "STD-20260109-003", bookSession: "Web Developer", lessonName: "Lesson 7 – JS Basics", date: "2026-03-24", status: "Not Created" },
      { id: "dj-3", studentName: "Winston Arya Liaudo", studentId: "STD-20260109-003", bookSession: "Web Developer", lessonName: "Lesson 8 – JS Functions", date: "2026-04-07", status: "Pending" },
      { id: "dj-4", studentName: "Winston Arya Liaudo", studentId: "STD-20260109-003", bookSession: "Web Developer", lessonName: "Lesson 9 – CSS Flexbox", date: "2026-04-15", status: "Not Created" },
      { id: "dj-5", studentName: "Sean Nehemiah Pranoto", studentId: "STD-20260109-004", bookSession: "Python Game Dev", lessonName: "Lesson 1 – Intro to Pygame", date: "2026-04-07", status: "Not Created" },
      { id: "dj-6", studentName: "Sean Nehemiah Pranoto", studentId: "STD-20260109-004", bookSession: "Python Game Dev", lessonName: "Lesson 2 – Game Loop", date: "2026-04-14", status: "Not Created" },
      { id: "dj-7", studentName: "Sean Nehemiah Pranoto", studentId: "STD-20260109-004", bookSession: "Python Game Dev", lessonName: "Lesson 3 – Sprites", className: "DPS-Adaptive-8C", date: "2026-04-20", status: "Not Created" },
      { id: "dj-8", studentName: "Sean Nehemiah Pranoto", studentId: "STD-20260109-004", bookSession: "Python Game Dev", lessonName: "Lesson 4 – Canvas Setup", date: "2026-04-27", status: "Not Created" },
      { id: "dj-9", studentName: "Sean Nehemiah Pranoto", studentId: "STD-20260109-004", bookSession: "Python Game Dev", lessonName: "Lesson 5 – FPS Control", date: "2026-05-04", status: "Not Created" },
      { id: "dj-10", studentName: "Sean Nehemiah Pranoto", studentId: "STD-20260109-004", bookSession: "Python Game Dev", lessonName: "Lesson 6 – Sound Effects", date: "2026-05-11", status: "Not Created" },
      { id: "dj-11", studentName: "Sean Nehemiah Pranoto", studentId: "STD-20260109-004", bookSession: "Python Game Dev", lessonName: "Lesson 7 – Add Sprite", date: "2026-05-18", status: "Not Created" },
      { id: "dj-12", studentName: "Sean Nehemiah Pranoto", studentId: "STD-20260109-004", bookSession: "Python Game Dev", lessonName: "Lesson 8 – Collision", date: "2026-05-25", status: "Not Created" },
      { id: "dj-13", studentName: "Velcan Kido Andika", studentId: "STD-20260109-005", bookSession: "IoT Kids", lessonName: "Lesson 6 – Sensors", lessonNames: ["Lesson 6 – Sensors", "Lesson 7 – Sensor Calibration", "Lesson 8 – Smart Alerts"], date: "2026-04-16", status: "Not Created" },
      { id: "dj-14", studentName: "Velcan Kido Andika", studentId: "STD-20260109-005", bookSession: "Python Game Dev", lessonName: "Lesson 8 – Collision", date: "2026-02-28", status: "Not Created" },
      { id: "dj-15", studentName: "Reinhart Yohanes Ernathan", studentId: "STD-20260122-002", bookSession: "IoT Kids", lessonName: "Lesson 3 – LED Control", date: "2026-04-15", status: "Not Created" },
      { id: "dj-16", studentName: "Daffa Diandi Althaf", studentId: "STD-20260119-001", bookSession: "Web Developer", lessonName: "Lesson 8 – Responsive Layout", lessonNames: ["Lesson 8 – Responsive Layout", "Lesson 9 – CSS Grid", "Lesson 10 – Web Accessibility", "Lesson 11 – Final Project"], date: "2026-04-12", status: "Not Created" }
    ];
    const dailyJournalData = ref(groupDailyJournalRows(dailyJournalRecords));
    const reportsData = ref([
      { id: "report-1", studentName: "Putu Pradhira Armananda", studentId: "STD-20260109-002", bookSession: "Roblox Studio", lessons: "Lessons 1–8", dailyJournalsDone: 8, dailyJournalsTotal: 8, status: "Created" },
      { id: "report-2", studentName: "Winston Arya Liaudo", studentId: "STD-20260109-003", bookSession: "Web Developer", lessons: "Lessons 1–8", dailyJournalsDone: 7, dailyJournalsTotal: 8, status: "Waiting for Daily Journal" },
      { id: "report-3", studentName: "Winston Arya Liaudo", studentId: "STD-20260109-003", bookSession: "Python Beginner", lessons: "Lessons 1–8", dailyJournalsDone: 8, dailyJournalsTotal: 8, status: "Not Created" },
      { id: "report-4", studentName: "Sean Nehemiah Pranoto", studentId: "STD-20260109-004", bookSession: "Python Game Dev", lessons: "Lessons 1–8", className: "DPS-Adaptive-8C", dailyJournalsDone: 0, dailyJournalsTotal: 8, status: "Waiting for Daily Journal" },
      { id: "report-5", studentName: "Velcan Kido Andika", studentId: "STD-20260109-005", bookSession: "Python Game Dev", lessons: "Lessons 1–8", dailyJournalsDone: 7, dailyJournalsTotal: 8, status: "Created" },
      { id: "report-6", studentName: "Kynan Go", studentId: "STD-20260122-001", bookSession: "Web Developer", lessons: "Lessons 1–8", dailyJournalsDone: 8, dailyJournalsTotal: 8, status: "Not Created" },
      { id: "report-7", studentName: "Daffa Diandi Althaf", studentId: "STD-20260119-001", bookSession: "Web Developer", lessons: "Lessons 1–8", dailyJournalsDone: 7, dailyJournalsTotal: 8, status: "Waiting for Daily Journal" },
      { id: "report-8", studentName: "I Wayan Sahadewa Putra", studentId: "STD-20260109-001", bookSession: "Scratch Basic", lessons: "Lessons 1–2", dailyJournalsDone: 2, dailyJournalsTotal: 2, status: "Created" }
    ]);
    const ptmData = ref([
      { id: "ptm-1", studentName: "I Wayan Sahadewa Putra", studentId: "STD-20260109-001", bookSession: "Scratch Basic", className: "DPS-Adaptive-8C", reportsDone: 2, reportsTotal: 2, status: "Pending" },
      { id: "ptm-2", studentName: "Putu Pradhira Armananda", studentId: "STD-20260109-002", bookSession: "Roblox Studio", className: "DPS-Adaptive-3B", reportsDone: 1, reportsTotal: 1, status: "Pending" },
      { id: "ptm-3", studentName: "Winston Arya Liaudo", studentId: "STD-20260109-003", bookSession: "Python Beginner", className: "DPS-Teens-2B", reportsDone: 0, reportsTotal: 2, status: "Pending" },
      { id: "ptm-4", studentName: "Velcan Kido Andika", studentId: "STD-20260109-005", bookSession: "Python Game Dev", className: "DPS-Adaptive-2A", reportsDone: 1, reportsTotal: 2, status: "Pending" }
    ]);
    const dailyJournalCount = computed(() => dailyJournalData.value.length);
    const reportsCount = computed(() => reportsData.value.length);
    const ptmCount = computed(() => ptmData.value.length);
    const tabs = computed(() => [
      { label: "Pending Daily Journal", value: "daily-journal", count: dailyJournalCount.value, icon: "ri-book-open-line" },
      { label: "Reports", value: "reports", count: reportsCount.value, icon: "ri-file-list-3-line" },
      { label: "PTM", value: "ptm", count: ptmCount.value, icon: "ri-user-heart-line" }
    ]);
    const currentData = computed(() => {
      if (activeTab.value === "reports") return reportsData.value;
      if (activeTab.value === "ptm") return ptmData.value;
      return dailyJournalData.value;
    });
    const tableHeaders = computed(() => {
      if (activeTab.value === "reports") {
        return [
          { title: "STUDENT", key: "student", sortable: false, minWidth: "240px" },
          { title: "BOOK / SESSION", key: "bookSession", sortable: false, minWidth: "180px" },
          { title: "LESSONS", key: "lessons", sortable: false, minWidth: "180px" },
          { title: "CLASS", key: "className", sortable: false, minWidth: "170px" },
          { title: "PROGRESS", key: "progress", sortable: false, minWidth: "190px" },
          { title: "STATUS", key: "status", sortable: false, minWidth: "210px" },
          { title: "ACTION", key: "action", sortable: false, align: "end", minWidth: "190px" }
        ];
      }
      if (activeTab.value === "ptm") {
        return [
          { title: "STUDENT", key: "student", sortable: false, minWidth: "260px" },
          { title: "BOOK", key: "bookSession", sortable: false, minWidth: "220px" },
          { title: "REPORTS", key: "reports", sortable: false, minWidth: "240px" },
          { title: "STATUS", key: "status", sortable: false, minWidth: "180px" },
          { title: "", key: "action", sortable: false, align: "center", width: "84px" }
        ];
      }
      return [
        { title: "STUDENT", key: "student", sortable: false, minWidth: "240px" },
        { title: "BOOK / SESSION", key: "bookSession", sortable: false, minWidth: "180px" },
        { title: "LESSONS", key: "lessonName", sortable: false, minWidth: "260px" },
        { title: "CLASS", key: "className", sortable: false, minWidth: "170px" },
        { title: "DATE", key: "date", sortable: false, minWidth: "150px" },
        { title: "STATUS", key: "status", sortable: false, minWidth: "160px" },
        { title: "ACTION", key: "action", sortable: false, align: "end", minWidth: "150px" }
      ];
    });
    const getReportClassNames = (item) => {
      const classNames = item.classNames?.length ? item.classNames : item.className?.split(",") || [];
      return [...new Set(classNames.map((className) => className.trim()).filter((className) => className && className !== "-"))];
    };
    const classOptions = computed(() => {
      const classes = currentData.value.flatMap(getReportClassNames);
      return ["All Classes", ...new Set(classes)];
    });
    const reportStatusOptions = computed(() => [
      "All Status",
      ...new Set(reportsData.value.map((item) => item.status).filter((status) => status !== "Pending" && status !== "Confirmed"))
    ]);
    const currentStatusOptions = computed(() => {
      if (activeTab.value === "reports") return reportStatusOptions.value.slice(1);
      if (activeTab.value === "ptm") return ["Pending", "Confirmed"];
      return ["Not Created", "Pending"];
    });
    const filteredData = computed(() => {
      const query = searchQuery.value.trim().toLowerCase();
      return currentData.value.filter((item) => {
        const searchableValues = [
          item.studentName,
          item.studentId,
          item.bookSession,
          item.lessonName,
          ...item.lessonNames || [],
          item.lessons,
          item.className,
          ...item.classNames || []
        ];
        const matchesSearch = !query || searchableValues.some((value) => value?.toLowerCase().includes(query));
        const matchesClass = selectedClass.value === "All Classes" || item.className === selectedClass.value || Boolean(item.classNames?.includes(selectedClass.value));
        const matchesStatus = activeTab.value !== "reports" || selectedStatus.value === "All Status" || item.status === selectedStatus.value;
        return matchesSearch && matchesClass && matchesStatus;
      });
    });
    const groupedDailyJournalStudents = computed(() => {
      const groups = /* @__PURE__ */ new Map();
      filteredData.value.forEach((item) => {
        const key = item.studentId;
        const existingGroup = groups.get(key);
        if (existingGroup) {
          existingGroup.journals.push(item);
          existingGroup.classNames = [.../* @__PURE__ */ new Set([...existingGroup.classNames, ...getReportClassNames(item)])];
          return;
        }
        groups.set(key, {
          key,
          studentName: item.studentName,
          studentId: item.studentId,
          classNames: getReportClassNames(item),
          journals: [item]
        });
      });
      return Array.from(groups.values());
    });
    const groupedDailyJournalStudentsCount = computed(() => groupedDailyJournalStudents.value.length);
    const groupedDailyJournalStartIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);
    const groupedDailyJournalStopIndex = computed(() => Math.min(
      groupedDailyJournalStudentsCount.value,
      groupedDailyJournalStartIndex.value + itemsPerPage.value
    ));
    const groupedDailyJournalPageCount = computed(() => Math.ceil(
      groupedDailyJournalStudentsCount.value / itemsPerPage.value
    ));
    const paginatedDailyJournalStudents = computed(() => groupedDailyJournalStudents.value.slice(
      groupedDailyJournalStartIndex.value,
      groupedDailyJournalStopIndex.value
    ));
    const expandedStudents = ref({});
    const isStudentExpanded = (studentId) => expandedStudents.value[studentId] !== false;
    const toggleStudentExpand = (studentId) => {
      expandedStudents.value[studentId] = !isStudentExpanded(studentId);
    };
    const handleStudentHeaderKeydown = (event, studentId) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      toggleStudentExpand(studentId);
    };
    const hasActiveFilter = computed(
      () => Boolean(searchQuery.value) || selectedClass.value !== "All Classes" || selectedStatus.value !== "All Status"
    );
    const tableGroupBy = computed(() => {
      if (viewType.value === "student") return [{ key: "studentName", order: "asc" }];
      if (viewType.value === "class") return [{ key: "className", order: "asc" }];
      return [];
    });
    const pageSubtitle = computed(
      () => activeTab.value === "ptm" ? "Students with completed books — schedule parent-teacher meetings" : "Pending daily journals and student reports"
    );
    const formatDate = (dateStr) => {
      if (!dateStr) return "—";
      return (/* @__PURE__ */ new Date(dateStr + "T00:00:00Z")).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC"
      });
    };
    const formatDateRange = (item) => {
      if (!item.dateRangeStart || !item.dateRangeEnd || item.dateRangeStart === item.dateRangeEnd)
        return formatDate(item.date);
      return `${formatDate(item.dateRangeStart)} – ${formatDate(item.dateRangeEnd)}`;
    };
    const statusColor = (status) => {
      if (status === "Pending" || status === "Mixed" || status === "Waiting for Daily Journal") return "warning";
      if (status === "Created" || status === "Confirmed") return "success";
      return "secondary";
    };
    const progressColor = (done, total) => {
      if (done <= 0) return "secondary";
      if (done >= total) return "success";
      return "primary";
    };
    const resetFilters = () => {
      searchQuery.value = "";
      selectedClass.value = "All Classes";
      selectedStatus.value = "All Status";
    };
    const showToast = (message) => {
      toastText.value = message;
      toastShow.value = true;
    };
    const getDailyJournalLessons = (item) => {
      if (item.lessonNames?.length) return item.lessonNames;
      return item.lessonName ? [item.lessonName] : [];
    };
    const getJournalStatusCounts = (item) => {
      const counts = /* @__PURE__ */ new Map();
      item.lessonDetails?.forEach((lesson) => {
        counts.set(lesson.status, (counts.get(lesson.status) || 0) + 1);
      });
      return Array.from(counts, ([status, count]) => ({ status, count }));
    };
    const hasJournalStatus = (item, status) => getJournalStatusCounts(item).some((summary) => summary.status === status);
    const showDailyJournalLessons = (item) => {
      selectedDailyJournal.value = item;
      isLessonsDialogOpen.value = true;
    };
    const sendDailyJournal = (item) => {
      showToast("Send action is a prototype only for " + item.studentName + ".");
    };
    const viewReportDetails = (item) => {
      selectedReport.value = item;
      isReportDialogOpen.value = true;
    };
    const openConfirmPtm = (item) => {
      if (item.status !== "Pending") return;
      selectedPtm.value = item;
      ptmNotes.value = "";
      estimatedPtmDate.value = "";
      isPtmDialogOpen.value = true;
    };
    const confirmPtm = () => {
      const item = selectedPtm.value;
      if (!item || item.status !== "Pending" || !estimatedPtmDate.value) return;
      item.ptmNotes = ptmNotes.value.trim();
      item.estimatedPtmDate = estimatedPtmDate.value;
      item.status = "Confirmed";
      showToast("PTM confirmed for " + item.studentName + ".");
      isPtmDialogOpen.value = false;
    };
    watch([activeTab, searchQuery, selectedClass, selectedStatus, viewType], () => {
      currentPage.value = 1;
    });
    watch(activeTab, () => {
      selectedClass.value = "All Classes";
      selectedStatus.value = "All Status";
      viewType.value = "flat";
    });
    provide(/* @__PURE__ */ Symbol.for("vuetify:data-table-pagination"), {
      page: currentPage,
      itemsPerPage,
      startIndex: groupedDailyJournalStartIndex,
      stopIndex: groupedDailyJournalStopIndex,
      pageCount: groupedDailyJournalPageCount,
      itemsLength: groupedDailyJournalStudentsCount,
      nextPage: () => {
        if (currentPage.value < groupedDailyJournalPageCount.value) currentPage.value++;
      },
      prevPage: () => {
        if (currentPage.value > 1) currentPage.value--;
      },
      setPage: (value) => {
        currentPage.value = value;
      },
      setItemsPerPage: (value) => {
        itemsPerPage.value = value;
        currentPage.value = 1;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$1;
      const _component_AppDateTimePicker = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "reports-page" }, _attrs))} data-v-2d3d15a2><header class="mb-5" data-v-2d3d15a2><h1 class="text-h4 font-weight-medium text-high-emphasis mb-1" data-v-2d3d15a2> Reports </h1><p class="text-body-1 text-medium-emphasis mb-0" data-v-2d3d15a2>${ssrInterpolate(unref(pageSubtitle))}</p></header>`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(activeTab),
        "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
        class: "report-tabs v-tabs-bordered mb-6",
        "aria-label": "Report types"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(tabs), (tab) => {
              _push2(ssrRenderComponent(VTab, {
                key: tab.value,
                value: tab.value,
                class: "report-tab"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      start: "",
                      icon: tab.icon,
                      class: "me-2"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(tab.label)} <span class="${ssrRenderClass([unref(activeTab) === tab.value ? "bg-primary text-white" : "bg-secondary text-white", "count-badge ms-2"])}" data-v-2d3d15a2${_scopeId2}>${ssrInterpolate(tab.count)}</span>`);
                  } else {
                    return [
                      createVNode(VIcon, {
                        start: "",
                        icon: tab.icon,
                        class: "me-2"
                      }, null, 8, ["icon"]),
                      createTextVNode(" " + toDisplayString(tab.label) + " ", 1),
                      createVNode("span", {
                        class: ["count-badge ms-2", unref(activeTab) === tab.value ? "bg-primary text-white" : "bg-secondary text-white"]
                      }, toDisplayString(tab.count), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(tabs), (tab) => {
                return openBlock(), createBlock(VTab, {
                  key: tab.value,
                  value: tab.value,
                  class: "report-tab"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      start: "",
                      icon: tab.icon,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    createTextVNode(" " + toDisplayString(tab.label) + " ", 1),
                    createVNode("span", {
                      class: ["count-badge ms-2", unref(activeTab) === tab.value ? "bg-primary text-white" : "bg-secondary text-white"]
                    }, toDisplayString(tab.count), 3)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VCard, {
        class: ["report-card", { "report-card--daily-journal": unref(activeTab) === "daily-journal" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "report-filter-bar" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="report-filter-fields" data-v-2d3d15a2${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(searchQuery),
                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                    class: "report-filter-field",
                    label: "Search student",
                    placeholder: "Search student...",
                    "prepend-inner-icon": "ri-search-line",
                    clearable: "",
                    "hide-details": "",
                    density: "compact",
                    variant: "outlined"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: unref(selectedClass),
                    "onUpdate:modelValue": ($event) => isRef(selectedClass) ? selectedClass.value = $event : null,
                    class: "report-filter-field",
                    label: "Class",
                    items: unref(classOptions),
                    "hide-details": "",
                    density: "compact",
                    variant: "outlined"
                  }, null, _parent3, _scopeId2));
                  if (unref(activeTab) === "reports") {
                    _push3(ssrRenderComponent(VSelect, {
                      modelValue: unref(selectedStatus),
                      "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                      class: "report-filter-field",
                      label: "Status",
                      items: ["All Status", ...unref(currentStatusOptions)],
                      "hide-details": "",
                      density: "compact",
                      variant: "outlined"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(activeTab) === "daily-journal" || unref(hasActiveFilter)) {
                    _push3(ssrRenderComponent(VBtn, {
                      variant: "text",
                      color: "primary",
                      onClick: resetFilters
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Reset filter `);
                        } else {
                          return [
                            createTextVNode(" Reset filter ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  if (unref(activeTab) !== "ptm") {
                    _push3(ssrRenderComponent(VBtnToggle, {
                      modelValue: unref(viewType),
                      "onUpdate:modelValue": ($event) => isRef(viewType) ? viewType.value = $event : null,
                      class: "report-view-toggle",
                      mandatory: "",
                      "aria-label": "Change report grouping"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VBtn, {
                            value: "flat",
                            icon: "ri-list-unordered",
                            "aria-label": "Flat list",
                            title: "Flat list"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            value: "student",
                            icon: "ri-team-line",
                            "aria-label": "Group by student",
                            title: "Group by student"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            value: "class",
                            icon: "ri-door-closed-line",
                            "aria-label": "Group by class",
                            title: "Group by class"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VBtn, {
                              value: "flat",
                              icon: "ri-list-unordered",
                              "aria-label": "Flat list",
                              title: "Flat list"
                            }),
                            createVNode(VBtn, {
                              value: "student",
                              icon: "ri-team-line",
                              "aria-label": "Group by student",
                              title: "Group by student"
                            }),
                            createVNode(VBtn, {
                              value: "class",
                              icon: "ri-door-closed-line",
                              "aria-label": "Group by class",
                              title: "Group by class"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "report-filter-fields" }, [
                      createVNode(VTextField, {
                        modelValue: unref(searchQuery),
                        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                        class: "report-filter-field",
                        label: "Search student",
                        placeholder: "Search student...",
                        "prepend-inner-icon": "ri-search-line",
                        clearable: "",
                        "hide-details": "",
                        density: "compact",
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VSelect, {
                        modelValue: unref(selectedClass),
                        "onUpdate:modelValue": ($event) => isRef(selectedClass) ? selectedClass.value = $event : null,
                        class: "report-filter-field",
                        label: "Class",
                        items: unref(classOptions),
                        "hide-details": "",
                        density: "compact",
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                      unref(activeTab) === "reports" ? (openBlock(), createBlock(VSelect, {
                        key: 0,
                        modelValue: unref(selectedStatus),
                        "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                        class: "report-filter-field",
                        label: "Status",
                        items: ["All Status", ...unref(currentStatusOptions)],
                        "hide-details": "",
                        density: "compact",
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])) : createCommentVNode("", true),
                      unref(activeTab) === "daily-journal" || unref(hasActiveFilter) ? (openBlock(), createBlock(VBtn, {
                        key: 1,
                        variant: "text",
                        color: "primary",
                        onClick: resetFilters
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset filter ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    unref(activeTab) !== "ptm" ? (openBlock(), createBlock(VBtnToggle, {
                      key: 0,
                      modelValue: unref(viewType),
                      "onUpdate:modelValue": ($event) => isRef(viewType) ? viewType.value = $event : null,
                      class: "report-view-toggle",
                      mandatory: "",
                      "aria-label": "Change report grouping"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          value: "flat",
                          icon: "ri-list-unordered",
                          "aria-label": "Flat list",
                          title: "Flat list"
                        }),
                        createVNode(VBtn, {
                          value: "student",
                          icon: "ri-team-line",
                          "aria-label": "Group by student",
                          title: "Group by student"
                        }),
                        createVNode(VBtn, {
                          value: "class",
                          icon: "ri-door-closed-line",
                          "aria-label": "Group by class",
                          title: "Group by class"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            if (unref(isLoading)) {
              _push2(`<div class="pa-6" aria-label="Loading reports" data-v-2d3d15a2${_scopeId}><!--[-->`);
              ssrRenderList(3, (index) => {
                _push2(ssrRenderComponent(VSkeletonLoader, {
                  key: index,
                  type: "table-row-divider@4",
                  class: "mb-2"
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else if (unref(filteredData).length === 0) {
              _push2(`<div class="report-empty-state py-12 text-center" role="status" data-v-2d3d15a2${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                icon: "ri-file-search-line",
                size: "42",
                color: "secondary",
                class: "mb-2"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-body-1 text-medium-emphasis mb-2" data-v-2d3d15a2${_scopeId}> No matching ${ssrInterpolate(unref(activeTab) === "ptm" ? "PTM records" : unref(activeTab) === "daily-journal" ? "daily journals" : "reports")} found. </p>`);
              if (unref(hasActiveFilter)) {
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
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else if (unref(activeTab) === "daily-journal" && unref(viewType) === "student") {
              _push2(`<div class="daily-journal-student-view" data-v-2d3d15a2${_scopeId}><div class="daily-journal-list-header" data-v-2d3d15a2${_scopeId}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-2d3d15a2${_scopeId}>Student List</span><span class="text-body-2 text-medium-emphasis" data-v-2d3d15a2${_scopeId}>${ssrInterpolate(unref(groupedDailyJournalStudentsCount))} students displayed </span></div><div class="daily-journal-student-list" data-v-2d3d15a2${_scopeId}><!--[-->`);
              ssrRenderList(unref(paginatedDailyJournalStudents), (student) => {
                _push2(ssrRenderComponent(VCard, {
                  key: student.key,
                  class: "daily-journal-student-card",
                  border: "",
                  elevation: "0"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="daily-journal-student-header" role="button" tabindex="0"${ssrRenderAttr("aria-expanded", isStudentExpanded(student.key))}${ssrRenderAttr("aria-label", `${isStudentExpanded(student.key) ? "Collapse" : "Expand"} journals for ${student.studentName}`)} data-v-2d3d15a2${_scopeId2}><div class="daily-journal-student-identity" data-v-2d3d15a2${_scopeId2}>`);
                      _push3(ssrRenderComponent(VAvatar, {
                        size: "34",
                        color: "grey-50",
                        class: "daily-journal-student-avatar"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="text-body-2 text-high-emphasis" data-v-2d3d15a2${_scopeId3}>${ssrInterpolate(unref(avatarText)(student.studentName))}</span>`);
                          } else {
                            return [
                              createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(avatarText)(student.studentName)), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<div class="daily-journal-student-copy" data-v-2d3d15a2${_scopeId2}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-2d3d15a2${_scopeId2}>${ssrInterpolate(student.studentName)}</span><span class="text-body-2 text-medium-emphasis" data-v-2d3d15a2${_scopeId2}>${ssrInterpolate(student.studentId)}</span><span class="daily-journal-student-dot" aria-hidden="true" data-v-2d3d15a2${_scopeId2}></span><span class="text-body-2 text-medium-emphasis" data-v-2d3d15a2${_scopeId2}>${ssrInterpolate(student.classNames.length ? student.classNames.join(", ") : "—")}</span></div></div>`);
                      _push3(ssrRenderComponent(VBtn, {
                        icon: "",
                        variant: "outlined",
                        color: "secondary",
                        size: "small",
                        class: "daily-journal-expand-btn",
                        "aria-label": `${isStudentExpanded(student.key) ? "Collapse" : "Expand"} journals for ${student.studentName}`,
                        onClick: ($event) => toggleStudentExpand(student.key)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VIcon, {
                              icon: isStudentExpanded(student.key) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VIcon, {
                                icon: isStudentExpanded(student.key) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                              }, null, 8, ["icon"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                      _push3(ssrRenderComponent(VExpandTransition, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div style="${ssrRenderStyle(isStudentExpanded(student.key) ? null : { display: "none" })}" class="daily-journal-student-body" data-v-2d3d15a2${_scopeId3}><!--[-->`);
                            ssrRenderList(student.journals, (journal) => {
                              _push4(`<div class="daily-journal-item" data-v-2d3d15a2${_scopeId3}><div class="daily-journal-item-main" data-v-2d3d15a2${_scopeId3}>`);
                              _push4(ssrRenderComponent(VIcon, {
                                icon: "ri-book-2-line",
                                color: "primary",
                                size: "24"
                              }, null, _parent4, _scopeId3));
                              _push4(`<div class="daily-journal-item-copy" data-v-2d3d15a2${_scopeId3}><span class="text-body-1 font-weight-medium text-high-emphasis" data-v-2d3d15a2${_scopeId3}>${ssrInterpolate(journal.bookSession)}</span><div class="daily-journal-item-lesson" data-v-2d3d15a2${_scopeId3}><span class="text-body-2 text-medium-emphasis daily-journal-item-lesson-text" data-v-2d3d15a2${_scopeId3}>${ssrInterpolate(getDailyJournalLessons(journal).length > 1 ? `${getDailyJournalLessons(journal).length} Lessons` : getDailyJournalLessons(journal)[0] || "—")}</span>`);
                              if (getDailyJournalLessons(journal).length > 1) {
                                _push4(ssrRenderComponent(VBtn, {
                                  variant: "text",
                                  color: "primary",
                                  size: "small",
                                  density: "compact",
                                  class: "daily-journal-see-all",
                                  onClick: ($event) => showDailyJournalLessons(journal)
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(` See all `);
                                    } else {
                                      return [
                                        createTextVNode(" See all ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div></div></div><div class="daily-journal-item-statuses" data-v-2d3d15a2${_scopeId3}>`);
                              if ((journal.lessonDetails?.length || 0) > 1) {
                                _push4(`<!--[-->`);
                                ssrRenderList(getJournalStatusCounts(journal), (summary) => {
                                  _push4(ssrRenderComponent(VChip, {
                                    key: summary.status,
                                    color: statusColor(summary.status),
                                    variant: "tonal",
                                    size: "small",
                                    class: "font-weight-medium"
                                  }, {
                                    default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                      if (_push5) {
                                        _push5(`${ssrInterpolate(summary.count)} ${ssrInterpolate(summary.status)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(summary.count) + " " + toDisplayString(summary.status), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent4, _scopeId3));
                                });
                                _push4(`<!--]-->`);
                              } else {
                                _push4(ssrRenderComponent(VChip, {
                                  color: statusColor(journal.status),
                                  variant: "tonal",
                                  size: "small",
                                  class: "font-weight-medium"
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`${ssrInterpolate(journal.status)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(journal.status), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              }
                              _push4(`</div>`);
                              _push4(ssrRenderComponent(VDivider, {
                                vertical: "",
                                class: "daily-journal-item-divider"
                              }, null, _parent4, _scopeId3));
                              _push4(`<div class="daily-journal-item-date" data-v-2d3d15a2${_scopeId3}><span class="text-body-2 text-medium-emphasis" data-v-2d3d15a2${_scopeId3}>Date</span><span class="text-body-2 text-high-emphasis" data-v-2d3d15a2${_scopeId3}>${ssrInterpolate(formatDateRange(journal))}</span></div>`);
                              _push4(ssrRenderComponent(VDivider, {
                                vertical: "",
                                class: "daily-journal-item-divider"
                              }, null, _parent4, _scopeId3));
                              _push4(`<div class="report-actions daily-journal-item-actions" data-v-2d3d15a2${_scopeId3}>`);
                              if (hasJournalStatus(journal, "Not Created")) {
                                _push4(ssrRenderComponent(VBtn, {
                                  color: "primary",
                                  variant: "flat",
                                  rounded: "pill",
                                  size: "small",
                                  "prepend-icon": "ri-pencil-line",
                                  "aria-label": `Create journal for ${journal.studentName}`,
                                  to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(` Create `);
                                    } else {
                                      return [
                                        createTextVNode(" Create ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (hasJournalStatus(journal, "Pending")) {
                                _push4(`<!--[-->`);
                                _push4(ssrRenderComponent(VBtn, {
                                  color: "primary",
                                  variant: "flat",
                                  rounded: "pill",
                                  size: "small",
                                  "prepend-icon": "ri-send-plane-line",
                                  "aria-label": `Send journal for ${journal.studentName}`,
                                  onClick: ($event) => sendDailyJournal(journal)
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(` Send `);
                                    } else {
                                      return [
                                        createTextVNode(" Send ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                                _push4(ssrRenderComponent(VBtn, {
                                  color: "primary",
                                  variant: "outlined",
                                  rounded: "pill",
                                  size: "small",
                                  "prepend-icon": "ri-edit-box-line",
                                  "aria-label": `Edit journal for ${journal.studentName}`,
                                  to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(` Edit `);
                                    } else {
                                      return [
                                        createTextVNode(" Edit ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                                _push4(`<!--]-->`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div></div>`);
                            });
                            _push4(`<!--]--></div>`);
                          } else {
                            return [
                              withDirectives(createVNode("div", { class: "daily-journal-student-body" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(student.journals, (journal) => {
                                  return openBlock(), createBlock("div", {
                                    key: journal.id,
                                    class: "daily-journal-item"
                                  }, [
                                    createVNode("div", { class: "daily-journal-item-main" }, [
                                      createVNode(VIcon, {
                                        icon: "ri-book-2-line",
                                        color: "primary",
                                        size: "24"
                                      }),
                                      createVNode("div", { class: "daily-journal-item-copy" }, [
                                        createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(journal.bookSession), 1),
                                        createVNode("div", { class: "daily-journal-item-lesson" }, [
                                          createVNode("span", { class: "text-body-2 text-medium-emphasis daily-journal-item-lesson-text" }, toDisplayString(getDailyJournalLessons(journal).length > 1 ? `${getDailyJournalLessons(journal).length} Lessons` : getDailyJournalLessons(journal)[0] || "—"), 1),
                                          getDailyJournalLessons(journal).length > 1 ? (openBlock(), createBlock(VBtn, {
                                            key: 0,
                                            variant: "text",
                                            color: "primary",
                                            size: "small",
                                            density: "compact",
                                            class: "daily-journal-see-all",
                                            onClick: ($event) => showDailyJournalLessons(journal)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" See all ")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])) : createCommentVNode("", true)
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", { class: "daily-journal-item-statuses" }, [
                                      (journal.lessonDetails?.length || 0) > 1 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(getJournalStatusCounts(journal), (summary) => {
                                        return openBlock(), createBlock(VChip, {
                                          key: summary.status,
                                          color: statusColor(summary.status),
                                          variant: "tonal",
                                          size: "small",
                                          class: "font-weight-medium"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(summary.count) + " " + toDisplayString(summary.status), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]);
                                      }), 128)) : (openBlock(), createBlock(VChip, {
                                        key: 1,
                                        color: statusColor(journal.status),
                                        variant: "tonal",
                                        size: "small",
                                        class: "font-weight-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(journal.status), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"]))
                                    ]),
                                    createVNode(VDivider, {
                                      vertical: "",
                                      class: "daily-journal-item-divider"
                                    }),
                                    createVNode("div", { class: "daily-journal-item-date" }, [
                                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, "Date"),
                                      createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(formatDateRange(journal)), 1)
                                    ]),
                                    createVNode(VDivider, {
                                      vertical: "",
                                      class: "daily-journal-item-divider"
                                    }),
                                    createVNode("div", { class: "report-actions daily-journal-item-actions" }, [
                                      hasJournalStatus(journal, "Not Created") ? (openBlock(), createBlock(VBtn, {
                                        key: 0,
                                        color: "primary",
                                        variant: "flat",
                                        rounded: "pill",
                                        size: "small",
                                        "prepend-icon": "ri-pencil-line",
                                        "aria-label": `Create journal for ${journal.studentName}`,
                                        to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Create ")
                                        ]),
                                        _: 2
                                      }, 1032, ["aria-label"])) : createCommentVNode("", true),
                                      hasJournalStatus(journal, "Pending") ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createVNode(VBtn, {
                                          color: "primary",
                                          variant: "flat",
                                          rounded: "pill",
                                          size: "small",
                                          "prepend-icon": "ri-send-plane-line",
                                          "aria-label": `Send journal for ${journal.studentName}`,
                                          onClick: ($event) => sendDailyJournal(journal)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Send ")
                                          ]),
                                          _: 2
                                        }, 1032, ["aria-label", "onClick"]),
                                        createVNode(VBtn, {
                                          color: "primary",
                                          variant: "outlined",
                                          rounded: "pill",
                                          size: "small",
                                          "prepend-icon": "ri-edit-box-line",
                                          "aria-label": `Edit journal for ${journal.studentName}`,
                                          to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Edit ")
                                          ]),
                                          _: 2
                                        }, 1032, ["aria-label"])
                                      ], 64)) : createCommentVNode("", true)
                                    ])
                                  ]);
                                }), 128))
                              ], 512), [
                                [vShow, isStudentExpanded(student.key)]
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("div", {
                          class: "daily-journal-student-header",
                          role: "button",
                          tabindex: "0",
                          "aria-expanded": isStudentExpanded(student.key),
                          "aria-label": `${isStudentExpanded(student.key) ? "Collapse" : "Expand"} journals for ${student.studentName}`,
                          onClick: ($event) => toggleStudentExpand(student.key),
                          onKeydown: ($event) => handleStudentHeaderKeydown($event, student.key)
                        }, [
                          createVNode("div", { class: "daily-journal-student-identity" }, [
                            createVNode(VAvatar, {
                              size: "34",
                              color: "grey-50",
                              class: "daily-journal-student-avatar"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(avatarText)(student.studentName)), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", { class: "daily-journal-student-copy" }, [
                              createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(student.studentName), 1),
                              createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(student.studentId), 1),
                              createVNode("span", {
                                class: "daily-journal-student-dot",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(student.classNames.length ? student.classNames.join(", ") : "—"), 1)
                            ])
                          ]),
                          createVNode(VBtn, {
                            icon: "",
                            variant: "outlined",
                            color: "secondary",
                            size: "small",
                            class: "daily-journal-expand-btn",
                            "aria-label": `${isStudentExpanded(student.key) ? "Collapse" : "Expand"} journals for ${student.studentName}`,
                            onClick: withModifiers(($event) => toggleStudentExpand(student.key), ["stop"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: isStudentExpanded(student.key) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                              }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1032, ["aria-label", "onClick"])
                        ], 40, ["aria-expanded", "aria-label", "onClick", "onKeydown"]),
                        createVNode(VExpandTransition, null, {
                          default: withCtx(() => [
                            withDirectives(createVNode("div", { class: "daily-journal-student-body" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(student.journals, (journal) => {
                                return openBlock(), createBlock("div", {
                                  key: journal.id,
                                  class: "daily-journal-item"
                                }, [
                                  createVNode("div", { class: "daily-journal-item-main" }, [
                                    createVNode(VIcon, {
                                      icon: "ri-book-2-line",
                                      color: "primary",
                                      size: "24"
                                    }),
                                    createVNode("div", { class: "daily-journal-item-copy" }, [
                                      createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(journal.bookSession), 1),
                                      createVNode("div", { class: "daily-journal-item-lesson" }, [
                                        createVNode("span", { class: "text-body-2 text-medium-emphasis daily-journal-item-lesson-text" }, toDisplayString(getDailyJournalLessons(journal).length > 1 ? `${getDailyJournalLessons(journal).length} Lessons` : getDailyJournalLessons(journal)[0] || "—"), 1),
                                        getDailyJournalLessons(journal).length > 1 ? (openBlock(), createBlock(VBtn, {
                                          key: 0,
                                          variant: "text",
                                          color: "primary",
                                          size: "small",
                                          density: "compact",
                                          class: "daily-journal-see-all",
                                          onClick: ($event) => showDailyJournalLessons(journal)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" See all ")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "daily-journal-item-statuses" }, [
                                    (journal.lessonDetails?.length || 0) > 1 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(getJournalStatusCounts(journal), (summary) => {
                                      return openBlock(), createBlock(VChip, {
                                        key: summary.status,
                                        color: statusColor(summary.status),
                                        variant: "tonal",
                                        size: "small",
                                        class: "font-weight-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(summary.count) + " " + toDisplayString(summary.status), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"]);
                                    }), 128)) : (openBlock(), createBlock(VChip, {
                                      key: 1,
                                      color: statusColor(journal.status),
                                      variant: "tonal",
                                      size: "small",
                                      class: "font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(journal.status), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"]))
                                  ]),
                                  createVNode(VDivider, {
                                    vertical: "",
                                    class: "daily-journal-item-divider"
                                  }),
                                  createVNode("div", { class: "daily-journal-item-date" }, [
                                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, "Date"),
                                    createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(formatDateRange(journal)), 1)
                                  ]),
                                  createVNode(VDivider, {
                                    vertical: "",
                                    class: "daily-journal-item-divider"
                                  }),
                                  createVNode("div", { class: "report-actions daily-journal-item-actions" }, [
                                    hasJournalStatus(journal, "Not Created") ? (openBlock(), createBlock(VBtn, {
                                      key: 0,
                                      color: "primary",
                                      variant: "flat",
                                      rounded: "pill",
                                      size: "small",
                                      "prepend-icon": "ri-pencil-line",
                                      "aria-label": `Create journal for ${journal.studentName}`,
                                      to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Create ")
                                      ]),
                                      _: 2
                                    }, 1032, ["aria-label"])) : createCommentVNode("", true),
                                    hasJournalStatus(journal, "Pending") ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        variant: "flat",
                                        rounded: "pill",
                                        size: "small",
                                        "prepend-icon": "ri-send-plane-line",
                                        "aria-label": `Send journal for ${journal.studentName}`,
                                        onClick: ($event) => sendDailyJournal(journal)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Send ")
                                        ]),
                                        _: 2
                                      }, 1032, ["aria-label", "onClick"]),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        variant: "outlined",
                                        rounded: "pill",
                                        size: "small",
                                        "prepend-icon": "ri-edit-box-line",
                                        "aria-label": `Edit journal for ${journal.studentName}`,
                                        to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Edit ")
                                        ]),
                                        _: 2
                                      }, 1032, ["aria-label"])
                                    ], 64)) : createCommentVNode("", true)
                                  ])
                                ]);
                              }), 128))
                            ], 512), [
                              [vShow, isStudentExpanded(student.key)]
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
              _push2(ssrRenderComponent(VDataTableFooter, {
                "items-per-page-options": [5, 10, 20],
                class: "daily-journal-pagination"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(ssrRenderComponent(VDataTable, {
                page: unref(currentPage),
                "onUpdate:page": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
                "items-per-page": unref(itemsPerPage),
                "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                headers: unref(tableHeaders),
                items: unref(filteredData),
                "group-by": unref(tableGroupBy),
                "items-per-page-options": [5, 10, 20],
                class: ["report-table", "report-table--" + unref(activeTab)]
              }, {
                "item.student": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="report-student-cell" data-v-2d3d15a2${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      size: "34",
                      color: "primary",
                      variant: "tonal",
                      class: "report-student-avatar"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="text-caption font-weight-medium" data-v-2d3d15a2${_scopeId3}>${ssrInterpolate(unref(avatarText)(item.studentName))}</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(unref(avatarText)(item.studentName)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="report-student-copy" data-v-2d3d15a2${_scopeId2}><span class="text-body-2 font-weight-medium text-high-emphasis" data-v-2d3d15a2${_scopeId2}>${ssrInterpolate(item.studentName)}</span><span class="text-caption text-medium-emphasis" data-v-2d3d15a2${_scopeId2}>${ssrInterpolate(item.studentId)}</span></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "report-student-cell" }, [
                        createVNode(VAvatar, {
                          size: "34",
                          color: "primary",
                          variant: "tonal",
                          class: "report-student-avatar"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(unref(avatarText)(item.studentName)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "report-student-copy" }, [
                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, toDisplayString(item.studentName), 1),
                          createVNode("span", { class: "text-caption text-medium-emphasis" }, toDisplayString(item.studentId), 1)
                        ])
                      ])
                    ];
                  }
                }),
                "item.bookSession": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-body-2 text-high-emphasis" data-v-2d3d15a2${_scopeId2}>${ssrInterpolate(item.bookSession)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(item.bookSession), 1)
                    ];
                  }
                }),
                "item.lessonName": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="report-lessons-cell" data-v-2d3d15a2${_scopeId2}><span class="text-body-2 text-high-emphasis" data-v-2d3d15a2${_scopeId2}>${ssrInterpolate(getDailyJournalLessons(item).length > 1 ? `${getDailyJournalLessons(item).length} Lesson` : getDailyJournalLessons(item)[0] || "—")}</span>`);
                    if (getDailyJournalLessons(item).length > 1) {
                      _push3(ssrRenderComponent(VBtn, {
                        variant: "text",
                        color: "primary",
                        size: "small",
                        density: "compact",
                        class: "px-0 font-weight-medium text-capitalize",
                        onClick: ($event) => showDailyJournalLessons(item)
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` See all `);
                          } else {
                            return [
                              createTextVNode(" See all ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "report-lessons-cell" }, [
                        createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(getDailyJournalLessons(item).length > 1 ? `${getDailyJournalLessons(item).length} Lesson` : getDailyJournalLessons(item)[0] || "—"), 1),
                        getDailyJournalLessons(item).length > 1 ? (openBlock(), createBlock(VBtn, {
                          key: 0,
                          variant: "text",
                          color: "primary",
                          size: "small",
                          density: "compact",
                          class: "px-0 font-weight-medium text-capitalize",
                          onClick: ($event) => showDailyJournalLessons(item)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" See all ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                "item.lessons": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-body-2 text-high-emphasis" data-v-2d3d15a2${_scopeId2}>${ssrInterpolate(item.lessons)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(item.lessons), 1)
                    ];
                  }
                }),
                "item.className": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-body-2 text-medium-emphasis" data-v-2d3d15a2${_scopeId2}>${ssrInterpolate(item.className || "—")}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.className || "—"), 1)
                    ];
                  }
                }),
                "item.date": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-body-2 text-high-emphasis" data-v-2d3d15a2${_scopeId2}>${ssrInterpolate(unref(activeTab) === "daily-journal" ? formatDateRange(item) : formatDate(item.date))}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(activeTab) === "daily-journal" ? formatDateRange(item) : formatDate(item.date)), 1)
                    ];
                  }
                }),
                "item.progress": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="report-progress-cell" data-v-2d3d15a2${_scopeId2}>`);
                    _push3(ssrRenderComponent(VProgressLinear, {
                      "model-value": item.dailyJournalsTotal ? (item.dailyJournalsDone || 0) / item.dailyJournalsTotal * 100 : 0,
                      color: progressColor(item.dailyJournalsDone || 0, item.dailyJournalsTotal || 0),
                      height: "7",
                      rounded: "",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-body-2 font-weight-medium text-no-wrap" data-v-2d3d15a2${_scopeId2}>${ssrInterpolate(item.dailyJournalsDone || 0)}/${ssrInterpolate(item.dailyJournalsTotal || 0)} DJ </span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "report-progress-cell" }, [
                        createVNode(VProgressLinear, {
                          "model-value": item.dailyJournalsTotal ? (item.dailyJournalsDone || 0) / item.dailyJournalsTotal * 100 : 0,
                          color: progressColor(item.dailyJournalsDone || 0, item.dailyJournalsTotal || 0),
                          height: "7",
                          rounded: "",
                          "aria-hidden": "true"
                        }, null, 8, ["model-value", "color"]),
                        createVNode("span", { class: "text-body-2 font-weight-medium text-no-wrap" }, toDisplayString(item.dailyJournalsDone || 0) + "/" + toDisplayString(item.dailyJournalsTotal || 0) + " DJ ", 1)
                      ])
                    ];
                  }
                }),
                "item.reports": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="report-progress-cell" data-v-2d3d15a2${_scopeId2}>`);
                    _push3(ssrRenderComponent(VProgressLinear, {
                      "model-value": item.reportsTotal ? (item.reportsDone || 0) / item.reportsTotal * 100 : 0,
                      color: progressColor(item.reportsDone || 0, item.reportsTotal || 0),
                      height: "7",
                      rounded: "",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-body-2 font-weight-medium text-no-wrap" data-v-2d3d15a2${_scopeId2}>${ssrInterpolate(item.reportsDone || 0)}/${ssrInterpolate(item.reportsTotal || 0)}</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "report-progress-cell" }, [
                        createVNode(VProgressLinear, {
                          "model-value": item.reportsTotal ? (item.reportsDone || 0) / item.reportsTotal * 100 : 0,
                          color: progressColor(item.reportsDone || 0, item.reportsTotal || 0),
                          height: "7",
                          rounded: "",
                          "aria-hidden": "true"
                        }, null, 8, ["model-value", "color"]),
                        createVNode("span", { class: "text-body-2 font-weight-medium text-no-wrap" }, toDisplayString(item.reportsDone || 0) + "/" + toDisplayString(item.reportsTotal || 0), 1)
                      ])
                    ];
                  }
                }),
                "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(activeTab) === "daily-journal" && (item.lessonDetails?.length || 0) > 1) {
                      _push3(`<div class="report-journal-statuses" data-v-2d3d15a2${_scopeId2}><!--[-->`);
                      ssrRenderList(getJournalStatusCounts(item), (summary) => {
                        _push3(ssrRenderComponent(VChip, {
                          key: summary.status,
                          color: statusColor(summary.status),
                          variant: "tonal",
                          size: "small",
                          class: "font-weight-medium"
                        }, {
                          default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(summary.count)} ${ssrInterpolate(summary.status)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(summary.count) + " " + toDisplayString(summary.status), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(ssrRenderComponent(VChip, {
                        color: statusColor(item.status),
                        variant: "tonal",
                        size: "small",
                        class: "font-weight-medium"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.status)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.status), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                  } else {
                    return [
                      unref(activeTab) === "daily-journal" && (item.lessonDetails?.length || 0) > 1 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "report-journal-statuses"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(getJournalStatusCounts(item), (summary) => {
                          return openBlock(), createBlock(VChip, {
                            key: summary.status,
                            color: statusColor(summary.status),
                            variant: "tonal",
                            size: "small",
                            class: "font-weight-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(summary.count) + " " + toDisplayString(summary.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"]);
                        }), 128))
                      ])) : (openBlock(), createBlock(VChip, {
                        key: 1,
                        color: statusColor(item.status),
                        variant: "tonal",
                        size: "small",
                        class: "font-weight-medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.status), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"]))
                    ];
                  }
                }),
                "item.action": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(activeTab) === "daily-journal") {
                      _push3(`<div class="report-actions" data-v-2d3d15a2${_scopeId2}>`);
                      if (hasJournalStatus(item, "Not Created")) {
                        _push3(ssrRenderComponent(VTooltip, {
                          text: "Create",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(VBtn, mergeProps(props, {
                                icon: "ri-pencil-line",
                                color: "primary",
                                variant: "outlined",
                                size: "small",
                                class: "action-btn",
                                "aria-label": `Create journal for ${item.studentName}`,
                                to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                              }), null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(VBtn, mergeProps(props, {
                                  icon: "ri-pencil-line",
                                  color: "primary",
                                  variant: "outlined",
                                  size: "small",
                                  class: "action-btn",
                                  "aria-label": `Create journal for ${item.studentName}`,
                                  to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                                }), null, 16, ["aria-label"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (hasJournalStatus(item, "Pending")) {
                        _push3(`<!--[-->`);
                        _push3(ssrRenderComponent(VTooltip, {
                          text: "Edit",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(VBtn, mergeProps(props, {
                                icon: "ri-edit-box-line",
                                color: "primary",
                                variant: "outlined",
                                size: "small",
                                class: "action-btn",
                                "aria-label": `Edit journal for ${item.studentName}`,
                                to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                              }), null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(VBtn, mergeProps(props, {
                                  icon: "ri-edit-box-line",
                                  color: "primary",
                                  variant: "outlined",
                                  size: "small",
                                  class: "action-btn",
                                  "aria-label": `Edit journal for ${item.studentName}`,
                                  to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                                }), null, 16, ["aria-label"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(VTooltip, {
                          text: "Send",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(VBtn, mergeProps(props, {
                                icon: "ri-send-plane-line",
                                color: "primary",
                                variant: "outlined",
                                size: "small",
                                class: "action-btn",
                                "aria-label": `Send journal for ${item.studentName}`,
                                onClick: ($event) => sendDailyJournal(item)
                              }), null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(VBtn, mergeProps(props, {
                                  icon: "ri-send-plane-line",
                                  color: "primary",
                                  variant: "outlined",
                                  size: "small",
                                  class: "action-btn",
                                  "aria-label": `Send journal for ${item.studentName}`,
                                  onClick: ($event) => sendDailyJournal(item)
                                }), null, 16, ["aria-label", "onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`<!--]-->`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else if (unref(activeTab) === "reports") {
                      _push3(`<div class="report-actions" data-v-2d3d15a2${_scopeId2}>`);
                      if (item.status === "Created") {
                        _push3(ssrRenderComponent(VBtn, {
                          icon: "",
                          variant: "outlined",
                          color: "secondary",
                          rounded: "pill",
                          size: "small",
                          class: "pending-menu-button",
                          "aria-label": `View report details for ${item.studentName}`,
                          onClick: ($event) => viewReportDetails(item)
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
                                    _push5(` View details `);
                                  } else {
                                    return [
                                      createTextVNode(" View details ")
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
                                    createTextVNode(" View details ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(ssrRenderComponent(VMenu, { location: "bottom end" }, {
                          activator: withCtx(({ props: menuProps }, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(VBtn, mergeProps(menuProps, {
                                icon: "",
                                variant: "outlined",
                                color: "secondary",
                                rounded: "pill",
                                size: "small",
                                class: "pending-menu-button",
                                "aria-label": `More actions for ${item.studentName}`
                              }), {
                                default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VIcon, { icon: "ri-more-2-fill" }, null, _parent5, _scopeId4));
                                    _push5(ssrRenderComponent(VTooltip, {
                                      activator: "parent",
                                      location: "top"
                                    }, {
                                      default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(` More actions `);
                                        } else {
                                          return [
                                            createTextVNode(" More actions ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
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
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(VBtn, mergeProps(menuProps, {
                                  icon: "",
                                  variant: "outlined",
                                  color: "secondary",
                                  rounded: "pill",
                                  size: "small",
                                  class: "pending-menu-button",
                                  "aria-label": `More actions for ${item.studentName}`
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
                          default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(VList, {
                                density: "compact",
                                "min-width": "210"
                              }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VListItem, { to: { path: "/meeting-journal/create", query: { returnTo: "reports" } } }, {
                                      prepend: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(VIcon, { icon: "ri-book-open-line" }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(VIcon, { icon: "ri-book-open-line" })
                                          ];
                                        }
                                      }),
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(VListItemTitle, null, {
                                            default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`Create Daily Journal`);
                                              } else {
                                                return [
                                                  createTextVNode("Create Daily Journal")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
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
                                    }, _parent5, _scopeId4));
                                    _push5(ssrRenderComponent(VListItem, {
                                      to: { name: "reports" },
                                      active: false
                                    }, {
                                      prepend: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(VIcon, { icon: "ri-file-list-3-line" }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(VIcon, { icon: "ri-file-list-3-line" })
                                          ];
                                        }
                                      }),
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(VListItemTitle, null, {
                                            default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`Create Report`);
                                              } else {
                                                return [
                                                  createTextVNode("Create Report")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
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
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(VListItem, { to: { path: "/meeting-journal/create", query: { returnTo: "reports" } } }, {
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
                                        _: 1
                                      }),
                                      createVNode(VListItem, {
                                        to: { name: "reports" },
                                        active: false
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
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(VList, {
                                  density: "compact",
                                  "min-width": "210"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, { to: { path: "/meeting-journal/create", query: { returnTo: "reports" } } }, {
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
                                      _: 1
                                    }),
                                    createVNode(VListItem, {
                                      to: { name: "reports" },
                                      active: false
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
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<div class="report-actions report-actions--center" data-v-2d3d15a2${_scopeId2}>`);
                      _push3(ssrRenderComponent(VMenu, { location: "bottom end" }, {
                        activator: withCtx(({ props: menuProps }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VBtn, mergeProps(menuProps, {
                              icon: "ri-more-2-fill",
                              variant: "outlined",
                              color: "secondary",
                              size: "small",
                              class: "ptm-menu-button",
                              "aria-label": "More actions for " + item.studentName
                            }), null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VBtn, mergeProps(menuProps, {
                                icon: "ri-more-2-fill",
                                variant: "outlined",
                                color: "secondary",
                                size: "small",
                                class: "ptm-menu-button",
                                "aria-label": "More actions for " + item.studentName
                              }), null, 16, ["aria-label"])
                            ];
                          }
                        }),
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VList, {
                              density: "compact",
                              "min-width": "180"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VListItem, {
                                    disabled: item.status !== "Pending",
                                    onClick: ($event) => openConfirmPtm(item)
                                  }, {
                                    prepend: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VIcon, { icon: "ri-calendar-check-line" }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VIcon, { icon: "ri-calendar-check-line" })
                                        ];
                                      }
                                    }),
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VListItemTitle, null, {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`Confirm PTM`);
                                            } else {
                                              return [
                                                createTextVNode("Confirm PTM")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Confirm PTM")
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
                                      disabled: item.status !== "Pending",
                                      onClick: ($event) => openConfirmPtm(item)
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-calendar-check-line" })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Confirm PTM")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["disabled", "onClick"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VList, {
                                density: "compact",
                                "min-width": "180"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VListItem, {
                                    disabled: item.status !== "Pending",
                                    onClick: ($event) => openConfirmPtm(item)
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-calendar-check-line" })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Confirm PTM")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["disabled", "onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    }
                  } else {
                    return [
                      unref(activeTab) === "daily-journal" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "report-actions"
                      }, [
                        hasJournalStatus(item, "Not Created") ? (openBlock(), createBlock(VTooltip, {
                          key: 0,
                          text: "Create",
                          location: "top"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, mergeProps(props, {
                              icon: "ri-pencil-line",
                              color: "primary",
                              variant: "outlined",
                              size: "small",
                              class: "action-btn",
                              "aria-label": `Create journal for ${item.studentName}`,
                              to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                            }), null, 16, ["aria-label"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        hasJournalStatus(item, "Pending") ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createVNode(VTooltip, {
                            text: "Edit",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, mergeProps(props, {
                                icon: "ri-edit-box-line",
                                color: "primary",
                                variant: "outlined",
                                size: "small",
                                class: "action-btn",
                                "aria-label": `Edit journal for ${item.studentName}`,
                                to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                              }), null, 16, ["aria-label"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VTooltip, {
                            text: "Send",
                            location: "top"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, mergeProps(props, {
                                icon: "ri-send-plane-line",
                                color: "primary",
                                variant: "outlined",
                                size: "small",
                                class: "action-btn",
                                "aria-label": `Send journal for ${item.studentName}`,
                                onClick: ($event) => sendDailyJournal(item)
                              }), null, 16, ["aria-label", "onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ], 64)) : createCommentVNode("", true)
                      ])) : unref(activeTab) === "reports" ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "report-actions"
                      }, [
                        item.status === "Created" ? (openBlock(), createBlock(VBtn, {
                          key: 0,
                          icon: "",
                          variant: "outlined",
                          color: "secondary",
                          rounded: "pill",
                          size: "small",
                          class: "pending-menu-button",
                          "aria-label": `View report details for ${item.studentName}`,
                          onClick: ($event) => viewReportDetails(item)
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-eye-line" }),
                            createVNode(VTooltip, {
                              activator: "parent",
                              location: "top"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" View details ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["aria-label", "onClick"])) : (openBlock(), createBlock(VMenu, {
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
                              "aria-label": `More actions for ${item.studentName}`
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
                                createVNode(VListItem, { to: { path: "/meeting-journal/create", query: { returnTo: "reports" } } }, {
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
                                  _: 1
                                }),
                                createVNode(VListItem, {
                                  to: { name: "reports" },
                                  active: false
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
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1024))
                      ])) : (openBlock(), createBlock("div", {
                        key: 2,
                        class: "report-actions report-actions--center"
                      }, [
                        createVNode(VMenu, { location: "bottom end" }, {
                          activator: withCtx(({ props: menuProps }) => [
                            createVNode(VBtn, mergeProps(menuProps, {
                              icon: "ri-more-2-fill",
                              variant: "outlined",
                              color: "secondary",
                              size: "small",
                              class: "ptm-menu-button",
                              "aria-label": "More actions for " + item.studentName
                            }), null, 16, ["aria-label"])
                          ]),
                          default: withCtx(() => [
                            createVNode(VList, {
                              density: "compact",
                              "min-width": "180"
                            }, {
                              default: withCtx(() => [
                                createVNode(VListItem, {
                                  disabled: item.status !== "Pending",
                                  onClick: ($event) => openConfirmPtm(item)
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-calendar-check-line" })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Confirm PTM")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["disabled", "onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]))
                    ];
                  }
                }),
                "no-data": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="py-6 text-center text-medium-emphasis" data-v-2d3d15a2${_scopeId2}> No records found. </div>`);
                  } else {
                    return [
                      createVNode("div", { class: "py-6 text-center text-medium-emphasis" }, " No records found. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              createVNode(VCardText, { class: "report-filter-bar" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "report-filter-fields" }, [
                    createVNode(VTextField, {
                      modelValue: unref(searchQuery),
                      "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                      class: "report-filter-field",
                      label: "Search student",
                      placeholder: "Search student...",
                      "prepend-inner-icon": "ri-search-line",
                      clearable: "",
                      "hide-details": "",
                      density: "compact",
                      variant: "outlined"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VSelect, {
                      modelValue: unref(selectedClass),
                      "onUpdate:modelValue": ($event) => isRef(selectedClass) ? selectedClass.value = $event : null,
                      class: "report-filter-field",
                      label: "Class",
                      items: unref(classOptions),
                      "hide-details": "",
                      density: "compact",
                      variant: "outlined"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                    unref(activeTab) === "reports" ? (openBlock(), createBlock(VSelect, {
                      key: 0,
                      modelValue: unref(selectedStatus),
                      "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                      class: "report-filter-field",
                      label: "Status",
                      items: ["All Status", ...unref(currentStatusOptions)],
                      "hide-details": "",
                      density: "compact",
                      variant: "outlined"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])) : createCommentVNode("", true),
                    unref(activeTab) === "daily-journal" || unref(hasActiveFilter) ? (openBlock(), createBlock(VBtn, {
                      key: 1,
                      variant: "text",
                      color: "primary",
                      onClick: resetFilters
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Reset filter ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  unref(activeTab) !== "ptm" ? (openBlock(), createBlock(VBtnToggle, {
                    key: 0,
                    modelValue: unref(viewType),
                    "onUpdate:modelValue": ($event) => isRef(viewType) ? viewType.value = $event : null,
                    class: "report-view-toggle",
                    mandatory: "",
                    "aria-label": "Change report grouping"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        value: "flat",
                        icon: "ri-list-unordered",
                        "aria-label": "Flat list",
                        title: "Flat list"
                      }),
                      createVNode(VBtn, {
                        value: "student",
                        icon: "ri-team-line",
                        "aria-label": "Group by student",
                        title: "Group by student"
                      }),
                      createVNode(VBtn, {
                        value: "class",
                        icon: "ri-door-closed-line",
                        "aria-label": "Group by class",
                        title: "Group by class"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(VDivider),
              unref(isLoading) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "pa-6",
                "aria-label": "Loading reports"
              }, [
                (openBlock(), createBlock(Fragment, null, renderList(3, (index) => {
                  return createVNode(VSkeletonLoader, {
                    key: index,
                    type: "table-row-divider@4",
                    class: "mb-2"
                  });
                }), 64))
              ])) : unref(filteredData).length === 0 ? (openBlock(), createBlock("div", {
                key: 1,
                class: "report-empty-state py-12 text-center",
                role: "status"
              }, [
                createVNode(VIcon, {
                  icon: "ri-file-search-line",
                  size: "42",
                  color: "secondary",
                  class: "mb-2"
                }),
                createVNode("p", { class: "text-body-1 text-medium-emphasis mb-2" }, " No matching " + toDisplayString(unref(activeTab) === "ptm" ? "PTM records" : unref(activeTab) === "daily-journal" ? "daily journals" : "reports") + " found. ", 1),
                unref(hasActiveFilter) ? (openBlock(), createBlock(VBtn, {
                  key: 0,
                  variant: "text",
                  color: "primary",
                  onClick: resetFilters
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Clear filters ")
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ])) : unref(activeTab) === "daily-journal" && unref(viewType) === "student" ? (openBlock(), createBlock("div", {
                key: 2,
                class: "daily-journal-student-view"
              }, [
                createVNode("div", { class: "daily-journal-list-header" }, [
                  createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, "Student List"),
                  createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(unref(groupedDailyJournalStudentsCount)) + " students displayed ", 1)
                ]),
                createVNode("div", { class: "daily-journal-student-list" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(paginatedDailyJournalStudents), (student) => {
                    return openBlock(), createBlock(VCard, {
                      key: student.key,
                      class: "daily-journal-student-card",
                      border: "",
                      elevation: "0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "daily-journal-student-header",
                          role: "button",
                          tabindex: "0",
                          "aria-expanded": isStudentExpanded(student.key),
                          "aria-label": `${isStudentExpanded(student.key) ? "Collapse" : "Expand"} journals for ${student.studentName}`,
                          onClick: ($event) => toggleStudentExpand(student.key),
                          onKeydown: ($event) => handleStudentHeaderKeydown($event, student.key)
                        }, [
                          createVNode("div", { class: "daily-journal-student-identity" }, [
                            createVNode(VAvatar, {
                              size: "34",
                              color: "grey-50",
                              class: "daily-journal-student-avatar"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(avatarText)(student.studentName)), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", { class: "daily-journal-student-copy" }, [
                              createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(student.studentName), 1),
                              createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(student.studentId), 1),
                              createVNode("span", {
                                class: "daily-journal-student-dot",
                                "aria-hidden": "true"
                              }),
                              createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(student.classNames.length ? student.classNames.join(", ") : "—"), 1)
                            ])
                          ]),
                          createVNode(VBtn, {
                            icon: "",
                            variant: "outlined",
                            color: "secondary",
                            size: "small",
                            class: "daily-journal-expand-btn",
                            "aria-label": `${isStudentExpanded(student.key) ? "Collapse" : "Expand"} journals for ${student.studentName}`,
                            onClick: withModifiers(($event) => toggleStudentExpand(student.key), ["stop"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: isStudentExpanded(student.key) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                              }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1032, ["aria-label", "onClick"])
                        ], 40, ["aria-expanded", "aria-label", "onClick", "onKeydown"]),
                        createVNode(VExpandTransition, null, {
                          default: withCtx(() => [
                            withDirectives(createVNode("div", { class: "daily-journal-student-body" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(student.journals, (journal) => {
                                return openBlock(), createBlock("div", {
                                  key: journal.id,
                                  class: "daily-journal-item"
                                }, [
                                  createVNode("div", { class: "daily-journal-item-main" }, [
                                    createVNode(VIcon, {
                                      icon: "ri-book-2-line",
                                      color: "primary",
                                      size: "24"
                                    }),
                                    createVNode("div", { class: "daily-journal-item-copy" }, [
                                      createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(journal.bookSession), 1),
                                      createVNode("div", { class: "daily-journal-item-lesson" }, [
                                        createVNode("span", { class: "text-body-2 text-medium-emphasis daily-journal-item-lesson-text" }, toDisplayString(getDailyJournalLessons(journal).length > 1 ? `${getDailyJournalLessons(journal).length} Lessons` : getDailyJournalLessons(journal)[0] || "—"), 1),
                                        getDailyJournalLessons(journal).length > 1 ? (openBlock(), createBlock(VBtn, {
                                          key: 0,
                                          variant: "text",
                                          color: "primary",
                                          size: "small",
                                          density: "compact",
                                          class: "daily-journal-see-all",
                                          onClick: ($event) => showDailyJournalLessons(journal)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" See all ")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "daily-journal-item-statuses" }, [
                                    (journal.lessonDetails?.length || 0) > 1 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(getJournalStatusCounts(journal), (summary) => {
                                      return openBlock(), createBlock(VChip, {
                                        key: summary.status,
                                        color: statusColor(summary.status),
                                        variant: "tonal",
                                        size: "small",
                                        class: "font-weight-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(summary.count) + " " + toDisplayString(summary.status), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"]);
                                    }), 128)) : (openBlock(), createBlock(VChip, {
                                      key: 1,
                                      color: statusColor(journal.status),
                                      variant: "tonal",
                                      size: "small",
                                      class: "font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(journal.status), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"]))
                                  ]),
                                  createVNode(VDivider, {
                                    vertical: "",
                                    class: "daily-journal-item-divider"
                                  }),
                                  createVNode("div", { class: "daily-journal-item-date" }, [
                                    createVNode("span", { class: "text-body-2 text-medium-emphasis" }, "Date"),
                                    createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(formatDateRange(journal)), 1)
                                  ]),
                                  createVNode(VDivider, {
                                    vertical: "",
                                    class: "daily-journal-item-divider"
                                  }),
                                  createVNode("div", { class: "report-actions daily-journal-item-actions" }, [
                                    hasJournalStatus(journal, "Not Created") ? (openBlock(), createBlock(VBtn, {
                                      key: 0,
                                      color: "primary",
                                      variant: "flat",
                                      rounded: "pill",
                                      size: "small",
                                      "prepend-icon": "ri-pencil-line",
                                      "aria-label": `Create journal for ${journal.studentName}`,
                                      to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Create ")
                                      ]),
                                      _: 2
                                    }, 1032, ["aria-label"])) : createCommentVNode("", true),
                                    hasJournalStatus(journal, "Pending") ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        variant: "flat",
                                        rounded: "pill",
                                        size: "small",
                                        "prepend-icon": "ri-send-plane-line",
                                        "aria-label": `Send journal for ${journal.studentName}`,
                                        onClick: ($event) => sendDailyJournal(journal)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Send ")
                                        ]),
                                        _: 2
                                      }, 1032, ["aria-label", "onClick"]),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        variant: "outlined",
                                        rounded: "pill",
                                        size: "small",
                                        "prepend-icon": "ri-edit-box-line",
                                        "aria-label": `Edit journal for ${journal.studentName}`,
                                        to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Edit ")
                                        ]),
                                        _: 2
                                      }, 1032, ["aria-label"])
                                    ], 64)) : createCommentVNode("", true)
                                  ])
                                ]);
                              }), 128))
                            ], 512), [
                              [vShow, isStudentExpanded(student.key)]
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                createVNode(VDataTableFooter, {
                  "items-per-page-options": [5, 10, 20],
                  class: "daily-journal-pagination"
                })
              ])) : (openBlock(), createBlock(VDataTable, {
                key: 3,
                page: unref(currentPage),
                "onUpdate:page": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
                "items-per-page": unref(itemsPerPage),
                "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                headers: unref(tableHeaders),
                items: unref(filteredData),
                "group-by": unref(tableGroupBy),
                "items-per-page-options": [5, 10, 20],
                class: ["report-table", "report-table--" + unref(activeTab)]
              }, {
                "item.student": withCtx(({ item }) => [
                  createVNode("div", { class: "report-student-cell" }, [
                    createVNode(VAvatar, {
                      size: "34",
                      color: "primary",
                      variant: "tonal",
                      class: "report-student-avatar"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-caption font-weight-medium" }, toDisplayString(unref(avatarText)(item.studentName)), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", { class: "report-student-copy" }, [
                      createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, toDisplayString(item.studentName), 1),
                      createVNode("span", { class: "text-caption text-medium-emphasis" }, toDisplayString(item.studentId), 1)
                    ])
                  ])
                ]),
                "item.bookSession": withCtx(({ item }) => [
                  createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(item.bookSession), 1)
                ]),
                "item.lessonName": withCtx(({ item }) => [
                  createVNode("div", { class: "report-lessons-cell" }, [
                    createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(getDailyJournalLessons(item).length > 1 ? `${getDailyJournalLessons(item).length} Lesson` : getDailyJournalLessons(item)[0] || "—"), 1),
                    getDailyJournalLessons(item).length > 1 ? (openBlock(), createBlock(VBtn, {
                      key: 0,
                      variant: "text",
                      color: "primary",
                      size: "small",
                      density: "compact",
                      class: "px-0 font-weight-medium text-capitalize",
                      onClick: ($event) => showDailyJournalLessons(item)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" See all ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true)
                  ])
                ]),
                "item.lessons": withCtx(({ item }) => [
                  createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(item.lessons), 1)
                ]),
                "item.className": withCtx(({ item }) => [
                  createVNode("span", { class: "text-body-2 text-medium-emphasis" }, toDisplayString(item.className || "—"), 1)
                ]),
                "item.date": withCtx(({ item }) => [
                  createVNode("span", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(activeTab) === "daily-journal" ? formatDateRange(item) : formatDate(item.date)), 1)
                ]),
                "item.progress": withCtx(({ item }) => [
                  createVNode("div", { class: "report-progress-cell" }, [
                    createVNode(VProgressLinear, {
                      "model-value": item.dailyJournalsTotal ? (item.dailyJournalsDone || 0) / item.dailyJournalsTotal * 100 : 0,
                      color: progressColor(item.dailyJournalsDone || 0, item.dailyJournalsTotal || 0),
                      height: "7",
                      rounded: "",
                      "aria-hidden": "true"
                    }, null, 8, ["model-value", "color"]),
                    createVNode("span", { class: "text-body-2 font-weight-medium text-no-wrap" }, toDisplayString(item.dailyJournalsDone || 0) + "/" + toDisplayString(item.dailyJournalsTotal || 0) + " DJ ", 1)
                  ])
                ]),
                "item.reports": withCtx(({ item }) => [
                  createVNode("div", { class: "report-progress-cell" }, [
                    createVNode(VProgressLinear, {
                      "model-value": item.reportsTotal ? (item.reportsDone || 0) / item.reportsTotal * 100 : 0,
                      color: progressColor(item.reportsDone || 0, item.reportsTotal || 0),
                      height: "7",
                      rounded: "",
                      "aria-hidden": "true"
                    }, null, 8, ["model-value", "color"]),
                    createVNode("span", { class: "text-body-2 font-weight-medium text-no-wrap" }, toDisplayString(item.reportsDone || 0) + "/" + toDisplayString(item.reportsTotal || 0), 1)
                  ])
                ]),
                "item.status": withCtx(({ item }) => [
                  unref(activeTab) === "daily-journal" && (item.lessonDetails?.length || 0) > 1 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "report-journal-statuses"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(getJournalStatusCounts(item), (summary) => {
                      return openBlock(), createBlock(VChip, {
                        key: summary.status,
                        color: statusColor(summary.status),
                        variant: "tonal",
                        size: "small",
                        class: "font-weight-medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(summary.count) + " " + toDisplayString(summary.status), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"]);
                    }), 128))
                  ])) : (openBlock(), createBlock(VChip, {
                    key: 1,
                    color: statusColor(item.status),
                    variant: "tonal",
                    size: "small",
                    class: "font-weight-medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.status), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]))
                ]),
                "item.action": withCtx(({ item }) => [
                  unref(activeTab) === "daily-journal" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "report-actions"
                  }, [
                    hasJournalStatus(item, "Not Created") ? (openBlock(), createBlock(VTooltip, {
                      key: 0,
                      text: "Create",
                      location: "top"
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(VBtn, mergeProps(props, {
                          icon: "ri-pencil-line",
                          color: "primary",
                          variant: "outlined",
                          size: "small",
                          class: "action-btn",
                          "aria-label": `Create journal for ${item.studentName}`,
                          to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                        }), null, 16, ["aria-label"])
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true),
                    hasJournalStatus(item, "Pending") ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode(VTooltip, {
                        text: "Edit",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps(props, {
                            icon: "ri-edit-box-line",
                            color: "primary",
                            variant: "outlined",
                            size: "small",
                            class: "action-btn",
                            "aria-label": `Edit journal for ${item.studentName}`,
                            to: { path: "/meeting-journal/create", query: { returnTo: "reports" } }
                          }), null, 16, ["aria-label"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VTooltip, {
                        text: "Send",
                        location: "top"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps(props, {
                            icon: "ri-send-plane-line",
                            color: "primary",
                            variant: "outlined",
                            size: "small",
                            class: "action-btn",
                            "aria-label": `Send journal for ${item.studentName}`,
                            onClick: ($event) => sendDailyJournal(item)
                          }), null, 16, ["aria-label", "onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ], 64)) : createCommentVNode("", true)
                  ])) : unref(activeTab) === "reports" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "report-actions"
                  }, [
                    item.status === "Created" ? (openBlock(), createBlock(VBtn, {
                      key: 0,
                      icon: "",
                      variant: "outlined",
                      color: "secondary",
                      rounded: "pill",
                      size: "small",
                      class: "pending-menu-button",
                      "aria-label": `View report details for ${item.studentName}`,
                      onClick: ($event) => viewReportDetails(item)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-eye-line" }),
                        createVNode(VTooltip, {
                          activator: "parent",
                          location: "top"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" View details ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["aria-label", "onClick"])) : (openBlock(), createBlock(VMenu, {
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
                          "aria-label": `More actions for ${item.studentName}`
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
                            createVNode(VListItem, { to: { path: "/meeting-journal/create", query: { returnTo: "reports" } } }, {
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
                              _: 1
                            }),
                            createVNode(VListItem, {
                              to: { name: "reports" },
                              active: false
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
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1024))
                  ])) : (openBlock(), createBlock("div", {
                    key: 2,
                    class: "report-actions report-actions--center"
                  }, [
                    createVNode(VMenu, { location: "bottom end" }, {
                      activator: withCtx(({ props: menuProps }) => [
                        createVNode(VBtn, mergeProps(menuProps, {
                          icon: "ri-more-2-fill",
                          variant: "outlined",
                          color: "secondary",
                          size: "small",
                          class: "ptm-menu-button",
                          "aria-label": "More actions for " + item.studentName
                        }), null, 16, ["aria-label"])
                      ]),
                      default: withCtx(() => [
                        createVNode(VList, {
                          density: "compact",
                          "min-width": "180"
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItem, {
                              disabled: item.status !== "Pending",
                              onClick: ($event) => openConfirmPtm(item)
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, { icon: "ri-calendar-check-line" })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Confirm PTM")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["disabled", "onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]))
                ]),
                "no-data": withCtx(() => [
                  createVNode("div", { class: "py-6 text-center text-medium-emphasis" }, " No records found. ")
                ]),
                _: 1
              }, 8, ["page", "onUpdate:page", "items-per-page", "onUpdate:itemsPerPage", "headers", "items", "group-by", "class"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(isPtmDialogOpen),
        "onUpdate:modelValue": ($event) => isRef(isPtmDialogOpen) ? isPtmDialogOpen.value = $event : null,
        "max-width": "520"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(selectedPtm)) {
              _push2(ssrRenderComponent(VCard, {
                class: "ptm-confirm-dialog",
                elevation: "0"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, { class: "d-flex align-start justify-space-between gap-4 pa-6 pb-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="text-h5 text-high-emphasis" data-v-2d3d15a2${_scopeId3}>Confirm PTM</span>`);
                          _push4(ssrRenderComponent(_component_DialogCloseBtn, {
                            "aria-label": "Close confirm PTM dialog",
                            onClick: ($event) => isPtmDialogOpen.value = false
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("span", { class: "text-h5 text-high-emphasis" }, "Confirm PTM"),
                            createVNode(_component_DialogCloseBtn, {
                              "aria-label": "Close confirm PTM dialog",
                              onClick: ($event) => isPtmDialogOpen.value = false
                            }, null, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardText, { class: "px-6 pt-3" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="ptm-action-context mb-5 text-body-2 text-medium-emphasis" data-v-2d3d15a2${_scopeId3}>${ssrInterpolate(unref(selectedPtm).studentName)} · ${ssrInterpolate(unref(selectedPtm).bookSession)}</div>`);
                          _push4(ssrRenderComponent(VTextarea, {
                            modelValue: unref(ptmNotes),
                            "onUpdate:modelValue": ($event) => isRef(ptmNotes) ? ptmNotes.value = $event : null,
                            label: "PTM Notes",
                            placeholder: "Catatan untuk PTM...",
                            rows: "4",
                            variant: "outlined",
                            autofocus: ""
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="mt-4" data-v-2d3d15a2${_scopeId3}><label class="text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" data-v-2d3d15a2${_scopeId3}> Estimated PTM Date </label>`);
                          _push4(ssrRenderComponent(_component_AppDateTimePicker, {
                            modelValue: unref(estimatedPtmDate),
                            "onUpdate:modelValue": ($event) => isRef(estimatedPtmDate) ? estimatedPtmDate.value = $event : null,
                            placeholder: "Select date",
                            "append-inner-icon": "ri-calendar-line",
                            density: "compact",
                            "hide-details": "",
                            config: { dateFormat: "F j, Y" }
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "ptm-action-context mb-5 text-body-2 text-medium-emphasis" }, toDisplayString(unref(selectedPtm).studentName) + " · " + toDisplayString(unref(selectedPtm).bookSession), 1),
                            createVNode(VTextarea, {
                              modelValue: unref(ptmNotes),
                              "onUpdate:modelValue": ($event) => isRef(ptmNotes) ? ptmNotes.value = $event : null,
                              label: "PTM Notes",
                              placeholder: "Catatan untuk PTM...",
                              rows: "4",
                              variant: "outlined",
                              autofocus: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "mt-4" }, [
                              createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" }, " Estimated PTM Date "),
                              createVNode(_component_AppDateTimePicker, {
                                modelValue: unref(estimatedPtmDate),
                                "onUpdate:modelValue": ($event) => isRef(estimatedPtmDate) ? estimatedPtmDate.value = $event : null,
                                placeholder: "Select date",
                                "append-inner-icon": "ri-calendar-line",
                                density: "compact",
                                "hide-details": "",
                                config: { dateFormat: "F j, Y" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
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
                            onClick: ($event) => isPtmDialogOpen.value = false
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
                            disabled: !unref(estimatedPtmDate),
                            onClick: confirmPtm
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
                        } else {
                          return [
                            createVNode(VBtn, {
                              variant: "text",
                              color: "secondary",
                              onClick: ($event) => isPtmDialogOpen.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cancel")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              color: "primary",
                              disabled: !unref(estimatedPtmDate),
                              onClick: confirmPtm
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Confirm ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCardTitle, { class: "d-flex align-start justify-space-between gap-4 pa-6 pb-2" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-h5 text-high-emphasis" }, "Confirm PTM"),
                          createVNode(_component_DialogCloseBtn, {
                            "aria-label": "Close confirm PTM dialog",
                            onClick: ($event) => isPtmDialogOpen.value = false
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "px-6 pt-3" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "ptm-action-context mb-5 text-body-2 text-medium-emphasis" }, toDisplayString(unref(selectedPtm).studentName) + " · " + toDisplayString(unref(selectedPtm).bookSession), 1),
                          createVNode(VTextarea, {
                            modelValue: unref(ptmNotes),
                            "onUpdate:modelValue": ($event) => isRef(ptmNotes) ? ptmNotes.value = $event : null,
                            label: "PTM Notes",
                            placeholder: "Catatan untuk PTM...",
                            rows: "4",
                            variant: "outlined",
                            autofocus: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "mt-4" }, [
                            createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" }, " Estimated PTM Date "),
                            createVNode(_component_AppDateTimePicker, {
                              modelValue: unref(estimatedPtmDate),
                              "onUpdate:modelValue": ($event) => isRef(estimatedPtmDate) ? estimatedPtmDate.value = $event : null,
                              placeholder: "Select date",
                              "append-inner-icon": "ri-calendar-line",
                              density: "compact",
                              "hide-details": "",
                              config: { dateFormat: "F j, Y" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, { class: "px-6 pb-6 pt-0 justify-end gap-2" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            variant: "text",
                            color: "secondary",
                            onClick: ($event) => isPtmDialogOpen.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "primary",
                            disabled: !unref(estimatedPtmDate),
                            onClick: confirmPtm
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Confirm ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
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
              unref(selectedPtm) ? (openBlock(), createBlock(VCard, {
                key: 0,
                class: "ptm-confirm-dialog",
                elevation: "0"
              }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "d-flex align-start justify-space-between gap-4 pa-6 pb-2" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-h5 text-high-emphasis" }, "Confirm PTM"),
                      createVNode(_component_DialogCloseBtn, {
                        "aria-label": "Close confirm PTM dialog",
                        onClick: ($event) => isPtmDialogOpen.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "px-6 pt-3" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "ptm-action-context mb-5 text-body-2 text-medium-emphasis" }, toDisplayString(unref(selectedPtm).studentName) + " · " + toDisplayString(unref(selectedPtm).bookSession), 1),
                      createVNode(VTextarea, {
                        modelValue: unref(ptmNotes),
                        "onUpdate:modelValue": ($event) => isRef(ptmNotes) ? ptmNotes.value = $event : null,
                        label: "PTM Notes",
                        placeholder: "Catatan untuk PTM...",
                        rows: "4",
                        variant: "outlined",
                        autofocus: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode("label", { class: "text-body-2 text-medium-emphasis font-weight-medium d-block mb-1" }, " Estimated PTM Date "),
                        createVNode(_component_AppDateTimePicker, {
                          modelValue: unref(estimatedPtmDate),
                          "onUpdate:modelValue": ($event) => isRef(estimatedPtmDate) ? estimatedPtmDate.value = $event : null,
                          placeholder: "Select date",
                          "append-inner-icon": "ri-calendar-line",
                          density: "compact",
                          "hide-details": "",
                          config: { dateFormat: "F j, Y" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "px-6 pb-6 pt-0 justify-end gap-2" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "text",
                        color: "secondary",
                        onClick: ($event) => isPtmDialogOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "primary",
                        disabled: !unref(estimatedPtmDate),
                        onClick: confirmPtm
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Confirm ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
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
        modelValue: unref(isLessonsDialogOpen),
        "onUpdate:modelValue": ($event) => isRef(isLessonsDialogOpen) ? isLessonsDialogOpen.value = $event : null,
        "max-width": "480"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(selectedDailyJournal)) {
              _push2(ssrRenderComponent(VCard, { class: "report-detail-dialog" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, { class: "d-flex align-start justify-space-between gap-4 pa-6 pb-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div data-v-2d3d15a2${_scopeId3}><span class="text-h5 text-high-emphasis" data-v-2d3d15a2${_scopeId3}>Lessons</span><p class="text-body-2 text-medium-emphasis mb-0 mt-1" data-v-2d3d15a2${_scopeId3}>${ssrInterpolate(unref(selectedDailyJournal).studentName)} · ${ssrInterpolate(unref(selectedDailyJournal).bookSession)}</p></div>`);
                          _push4(ssrRenderComponent(_component_DialogCloseBtn, {
                            "aria-label": "Close lessons",
                            onClick: ($event) => isLessonsDialogOpen.value = false
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("div", null, [
                              createVNode("span", { class: "text-h5 text-high-emphasis" }, "Lessons"),
                              createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0 mt-1" }, toDisplayString(unref(selectedDailyJournal).studentName) + " · " + toDisplayString(unref(selectedDailyJournal).bookSession), 1)
                            ]),
                            createVNode(_component_DialogCloseBtn, {
                              "aria-label": "Close lessons",
                              onClick: ($event) => isLessonsDialogOpen.value = false
                            }, null, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardText, { class: "pt-4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VList, {
                            density: "compact",
                            class: "pa-0"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(unref(selectedDailyJournal).lessonDetails || [], (lesson, index) => {
                                  _push5(ssrRenderComponent(VListItem, {
                                    key: `${unref(selectedDailyJournal).id}-${index}`,
                                    "prepend-icon": "ri-book-open-line",
                                    title: lesson.name,
                                    subtitle: formatDate(lesson.date),
                                    class: "px-0"
                                  }, {
                                    append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VChip, {
                                          color: statusColor(lesson.status),
                                          variant: "tonal",
                                          size: "small"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(lesson.status)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(lesson.status), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VChip, {
                                            color: statusColor(lesson.status),
                                            variant: "tonal",
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(lesson.status), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedDailyJournal).lessonDetails || [], (lesson, index) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: `${unref(selectedDailyJournal).id}-${index}`,
                                      "prepend-icon": "ri-book-open-line",
                                      title: lesson.name,
                                      subtitle: formatDate(lesson.date),
                                      class: "px-0"
                                    }, {
                                      append: withCtx(() => [
                                        createVNode(VChip, {
                                          color: statusColor(lesson.status),
                                          variant: "tonal",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(lesson.status), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      _: 2
                                    }, 1032, ["title", "subtitle"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VList, {
                              density: "compact",
                              class: "pa-0"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedDailyJournal).lessonDetails || [], (lesson, index) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: `${unref(selectedDailyJournal).id}-${index}`,
                                    "prepend-icon": "ri-book-open-line",
                                    title: lesson.name,
                                    subtitle: formatDate(lesson.date),
                                    class: "px-0"
                                  }, {
                                    append: withCtx(() => [
                                      createVNode(VChip, {
                                        color: statusColor(lesson.status),
                                        variant: "tonal",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(lesson.status), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    _: 2
                                  }, 1032, ["title", "subtitle"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardActions, { class: "px-6 pb-6 pt-0 justify-end" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VBtn, {
                            color: "primary",
                            onClick: ($event) => isLessonsDialogOpen.value = false
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
                            createVNode(VBtn, {
                              color: "primary",
                              onClick: ($event) => isLessonsDialogOpen.value = false
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
                      createVNode(VCardTitle, { class: "d-flex align-start justify-space-between gap-4 pa-6 pb-2" }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("span", { class: "text-h5 text-high-emphasis" }, "Lessons"),
                            createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0 mt-1" }, toDisplayString(unref(selectedDailyJournal).studentName) + " · " + toDisplayString(unref(selectedDailyJournal).bookSession), 1)
                          ]),
                          createVNode(_component_DialogCloseBtn, {
                            "aria-label": "Close lessons",
                            onClick: ($event) => isLessonsDialogOpen.value = false
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "pt-4" }, {
                        default: withCtx(() => [
                          createVNode(VList, {
                            density: "compact",
                            class: "pa-0"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedDailyJournal).lessonDetails || [], (lesson, index) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: `${unref(selectedDailyJournal).id}-${index}`,
                                  "prepend-icon": "ri-book-open-line",
                                  title: lesson.name,
                                  subtitle: formatDate(lesson.date),
                                  class: "px-0"
                                }, {
                                  append: withCtx(() => [
                                    createVNode(VChip, {
                                      color: statusColor(lesson.status),
                                      variant: "tonal",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(lesson.status), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  _: 2
                                }, 1032, ["title", "subtitle"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, { class: "px-6 pb-6 pt-0 justify-end" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: ($event) => isLessonsDialogOpen.value = false
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
              unref(selectedDailyJournal) ? (openBlock(), createBlock(VCard, {
                key: 0,
                class: "report-detail-dialog"
              }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "d-flex align-start justify-space-between gap-4 pa-6 pb-2" }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("span", { class: "text-h5 text-high-emphasis" }, "Lessons"),
                        createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0 mt-1" }, toDisplayString(unref(selectedDailyJournal).studentName) + " · " + toDisplayString(unref(selectedDailyJournal).bookSession), 1)
                      ]),
                      createVNode(_component_DialogCloseBtn, {
                        "aria-label": "Close lessons",
                        onClick: ($event) => isLessonsDialogOpen.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pt-4" }, {
                    default: withCtx(() => [
                      createVNode(VList, {
                        density: "compact",
                        class: "pa-0"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedDailyJournal).lessonDetails || [], (lesson, index) => {
                            return openBlock(), createBlock(VListItem, {
                              key: `${unref(selectedDailyJournal).id}-${index}`,
                              "prepend-icon": "ri-book-open-line",
                              title: lesson.name,
                              subtitle: formatDate(lesson.date),
                              class: "px-0"
                            }, {
                              append: withCtx(() => [
                                createVNode(VChip, {
                                  color: statusColor(lesson.status),
                                  variant: "tonal",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(lesson.status), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              _: 2
                            }, 1032, ["title", "subtitle"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "px-6 pb-6 pt-0 justify-end" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: ($event) => isLessonsDialogOpen.value = false
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
        modelValue: unref(isReportDialogOpen),
        "onUpdate:modelValue": ($event) => isRef(isReportDialogOpen) ? isReportDialogOpen.value = $event : null,
        "max-width": "520"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(selectedReport)) {
              _push2(ssrRenderComponent(VCard, { class: "report-detail-dialog" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, { class: "d-flex align-start justify-space-between gap-4 pa-6 pb-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div data-v-2d3d15a2${_scopeId3}><span class="text-h5 text-high-emphasis" data-v-2d3d15a2${_scopeId3}>Report details</span><p class="text-body-2 text-medium-emphasis mb-0 mt-1" data-v-2d3d15a2${_scopeId3}>${ssrInterpolate(unref(selectedReport).studentName)}</p></div>`);
                          _push4(ssrRenderComponent(_component_DialogCloseBtn, {
                            "aria-label": "Close report details",
                            onClick: ($event) => isReportDialogOpen.value = false
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("div", null, [
                              createVNode("span", { class: "text-h5 text-high-emphasis" }, "Report details"),
                              createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0 mt-1" }, toDisplayString(unref(selectedReport).studentName), 1)
                            ]),
                            createVNode(_component_DialogCloseBtn, {
                              "aria-label": "Close report details",
                              onClick: ($event) => isReportDialogOpen.value = false
                            }, null, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardText, { class: "px-6 pt-4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<dl class="report-detail-list" data-v-2d3d15a2${_scopeId3}><div data-v-2d3d15a2${_scopeId3}><dt class="text-caption text-medium-emphasis" data-v-2d3d15a2${_scopeId3}>Book / Session</dt><dd class="text-body-2 text-high-emphasis" data-v-2d3d15a2${_scopeId3}>${ssrInterpolate(unref(selectedReport).bookSession)}</dd></div><div data-v-2d3d15a2${_scopeId3}><dt class="text-caption text-medium-emphasis" data-v-2d3d15a2${_scopeId3}>Lessons</dt><dd class="text-body-2 text-high-emphasis" data-v-2d3d15a2${_scopeId3}>${ssrInterpolate(unref(selectedReport).lessons)}</dd></div><div data-v-2d3d15a2${_scopeId3}><dt class="text-caption text-medium-emphasis" data-v-2d3d15a2${_scopeId3}>Daily Journal progress</dt><dd class="text-body-2 text-high-emphasis" data-v-2d3d15a2${_scopeId3}>${ssrInterpolate(unref(selectedReport).dailyJournalsDone || 0)}/${ssrInterpolate(unref(selectedReport).dailyJournalsTotal || 0)} DJ </dd></div><div data-v-2d3d15a2${_scopeId3}><dt class="text-caption text-medium-emphasis" data-v-2d3d15a2${_scopeId3}>Status</dt><dd data-v-2d3d15a2${_scopeId3}>`);
                          _push4(ssrRenderComponent(VChip, {
                            color: statusColor(unref(selectedReport).status),
                            variant: "tonal",
                            size: "small"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(selectedReport).status)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(selectedReport).status), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</dd></div></dl>`);
                        } else {
                          return [
                            createVNode("dl", { class: "report-detail-list" }, [
                              createVNode("div", null, [
                                createVNode("dt", { class: "text-caption text-medium-emphasis" }, "Book / Session"),
                                createVNode("dd", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(selectedReport).bookSession), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("dt", { class: "text-caption text-medium-emphasis" }, "Lessons"),
                                createVNode("dd", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(selectedReport).lessons), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("dt", { class: "text-caption text-medium-emphasis" }, "Daily Journal progress"),
                                createVNode("dd", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(selectedReport).dailyJournalsDone || 0) + "/" + toDisplayString(unref(selectedReport).dailyJournalsTotal || 0) + " DJ ", 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("dt", { class: "text-caption text-medium-emphasis" }, "Status"),
                                createVNode("dd", null, [
                                  createVNode(VChip, {
                                    color: statusColor(unref(selectedReport).status),
                                    variant: "tonal",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(selectedReport).status), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["color"])
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardActions, { class: "px-6 pb-6 pt-0 justify-end" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VBtn, {
                            color: "primary",
                            onClick: ($event) => isReportDialogOpen.value = false
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
                            createVNode(VBtn, {
                              color: "primary",
                              onClick: ($event) => isReportDialogOpen.value = false
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
                      createVNode(VCardTitle, { class: "d-flex align-start justify-space-between gap-4 pa-6 pb-2" }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("span", { class: "text-h5 text-high-emphasis" }, "Report details"),
                            createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0 mt-1" }, toDisplayString(unref(selectedReport).studentName), 1)
                          ]),
                          createVNode(_component_DialogCloseBtn, {
                            "aria-label": "Close report details",
                            onClick: ($event) => isReportDialogOpen.value = false
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "px-6 pt-4" }, {
                        default: withCtx(() => [
                          createVNode("dl", { class: "report-detail-list" }, [
                            createVNode("div", null, [
                              createVNode("dt", { class: "text-caption text-medium-emphasis" }, "Book / Session"),
                              createVNode("dd", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(selectedReport).bookSession), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("dt", { class: "text-caption text-medium-emphasis" }, "Lessons"),
                              createVNode("dd", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(selectedReport).lessons), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("dt", { class: "text-caption text-medium-emphasis" }, "Daily Journal progress"),
                              createVNode("dd", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(selectedReport).dailyJournalsDone || 0) + "/" + toDisplayString(unref(selectedReport).dailyJournalsTotal || 0) + " DJ ", 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("dt", { class: "text-caption text-medium-emphasis" }, "Status"),
                              createVNode("dd", null, [
                                createVNode(VChip, {
                                  color: statusColor(unref(selectedReport).status),
                                  variant: "tonal",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(selectedReport).status), 1)
                                  ]),
                                  _: 1
                                }, 8, ["color"])
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, { class: "px-6 pb-6 pt-0 justify-end" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: ($event) => isReportDialogOpen.value = false
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
              unref(selectedReport) ? (openBlock(), createBlock(VCard, {
                key: 0,
                class: "report-detail-dialog"
              }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "d-flex align-start justify-space-between gap-4 pa-6 pb-2" }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("span", { class: "text-h5 text-high-emphasis" }, "Report details"),
                        createVNode("p", { class: "text-body-2 text-medium-emphasis mb-0 mt-1" }, toDisplayString(unref(selectedReport).studentName), 1)
                      ]),
                      createVNode(_component_DialogCloseBtn, {
                        "aria-label": "Close report details",
                        onClick: ($event) => isReportDialogOpen.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "px-6 pt-4" }, {
                    default: withCtx(() => [
                      createVNode("dl", { class: "report-detail-list" }, [
                        createVNode("div", null, [
                          createVNode("dt", { class: "text-caption text-medium-emphasis" }, "Book / Session"),
                          createVNode("dd", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(selectedReport).bookSession), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("dt", { class: "text-caption text-medium-emphasis" }, "Lessons"),
                          createVNode("dd", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(selectedReport).lessons), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("dt", { class: "text-caption text-medium-emphasis" }, "Daily Journal progress"),
                          createVNode("dd", { class: "text-body-2 text-high-emphasis" }, toDisplayString(unref(selectedReport).dailyJournalsDone || 0) + "/" + toDisplayString(unref(selectedReport).dailyJournalsTotal || 0) + " DJ ", 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("dt", { class: "text-caption text-medium-emphasis" }, "Status"),
                          createVNode("dd", null, [
                            createVNode(VChip, {
                              color: statusColor(unref(selectedReport).status),
                              variant: "tonal",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(selectedReport).status), 1)
                              ]),
                              _: 1
                            }, 8, ["color"])
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "px-6 pb-6 pt-0 justify-end" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: ($event) => isReportDialogOpen.value = false
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reports = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2d3d15a2"]]);
export {
  reports as default
};
