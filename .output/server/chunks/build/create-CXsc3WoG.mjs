import { defineComponent, computed, ref, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, withDirectives, createBlock, openBlock, Fragment, renderList, vShow, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { _ as _sfc_main$1 } from './UiSectionHeader-BGB1bAkA.mjs';
import { V as VExpandTransition } from './index-CSomYp-Z.mjs';
import { aW as _export_sfc, b as VProgressCircular, a as VIcon, V as VBtn } from './server.mjs';
import { V as VDivider } from './VDivider-Cdypedjq.mjs';
import { V as VRow, a as VCol } from './VRow-BRD4hy0P.mjs';
import { V as VCard, a as VCardTitle, b as VCardActions } from './VCard-B42eN0YV.mjs';
import { V as VTextField } from './VTextField-jMGfwBDn.mjs';
import { V as VCheckbox } from './VCheckbox-BUqu-k0J.mjs';
import { a as VImg, V as VAvatar } from './VAvatar-B478BWXT.mjs';
import { V as VDialog } from './VDialog-B0Ad2yj9.mjs';
import { V as VCardText } from './VCardText-CaXtzNxg.mjs';
import { V as VSpacer } from './VSpacer-CtyhO1n2.mjs';
import { V as VSnackbar } from './VSnackbar-DgaXWzkK.mjs';
import './VTooltip-vXFYhuMk.mjs';
import './VOverlay-gAZb14KV.mjs';
import './forwardRefs-Oip3fNRq.mjs';
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
import './VCheckboxBtn-BB8tUmIP.mjs';
import './VSelectionControl-B1a3mcFW.mjs';
import './dialog-transition-CDwwEBKm.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const classId = computed(() => route.query.classId || "1");
    const studentId = computed(() => route.query.studentId || "s1");
    const mockClasses = ref([
      {
        id: "1",
        name: "RDA-9012",
        room: "Rio Room",
        date: "Thu, 26 Feb 2026",
        teachersCount: 2,
        teachers: [
          { id: "TCR-20260123-003", name: "Kaylynn Herwitz", isMain: true },
          { id: "TCR-20260123-004", name: "Randy Aminoff", isMain: false }
        ],
        timeStart: "00:00",
        timeEnd: "01:30",
        duration: "2 hrs",
        className: "Private Teen Class Coding Camp",
        meetingType: "Group Class",
        meetingNumber: "Meeting 20",
        status: "Active",
        students: [
          { id: "s1", studentId: "STD-20260326-019", name: "Cristofer Mango", sessionText: "Session 6", bookTitle: "Python for Beginners", bookStatus: "Completed", hasLaptop: true, presence: "On time", notes: "The Web Developer for Beginners class had a good attendance rate, with students engaging in discussions.", status: "-", actionText: "Create Journal", actionIcon: "ri-pencil-line" },
          { id: "s2", studentId: "STD-20260326-019", name: "Richard Payne", sessionText: "Session 6", bookTitle: "Python for Beginners", bookStatus: "Idle", hasLaptop: true, presence: "On time", notes: "In the Android Developer for Beginners course, attendance was strong, with most students actively participating.", status: "Sent", actionText: "View", actionIcon: "ri-eye-line" },
          { id: "s3", studentId: "STD-20260326-019", name: "Mr. Justin Richardson", sessionText: "Session 6", bookTitle: "Python for Beginners", bookStatus: "Incomplete", hasLaptop: true, presence: "Late 5 minutes", notes: "This week in Coding Kids, attendance was perfect, with every student eager to learn.", status: "Not send yet", actionText: "Continue", actionIcon: "ri-share-forward-2-line" },
          { id: "s4", studentId: "STD-20260326-019", name: "Cristofer Mango", sessionText: "Session 6", bookTitle: "Python for Beginners", bookStatus: "Completed", hasLaptop: true, presence: "On time", notes: "The Coding Kids session saw a full turnout, showcasing great enthusiasm among the participants.", status: "-", actionText: "Continue", actionIcon: "ri-share-forward-2-line" },
          { id: "s5", studentId: "STD-20260326-019", name: "Jennifer Summers", sessionText: "Session 6", bookTitle: "Python for Beginners", bookStatus: "Completed", hasLaptop: false, presence: "Absent", notes: "Attendance for the Coding Kids class was excellent this week, with all students present.", status: "-", actionText: "Create Journal", actionIcon: "ri-pencil-line" }
        ]
      },
      {
        id: "2",
        name: "Advanced Teens",
        room: "Zoom Room 12",
        date: "Thu, 26 Feb 2026",
        teachersCount: 3,
        teachers: [
          { id: "TCR-20260123-001", name: "Liam O'Connor", isMain: true },
          { id: "TCR-20260123-002", name: "Sophia Tran", isMain: false },
          { id: "TCR-20260123-005", name: "Marcus Aurelius", isMain: false }
        ],
        timeStart: "00:00",
        timeEnd: "01:30",
        duration: "2 hrs",
        className: "Private Teen Class Coding Camp",
        meetingType: "Group Class",
        meetingNumber: "Meeting 20",
        status: "Ongoing",
        students: [
          { id: "s11", studentId: "STD-20260326-011", name: "Alex Rivera", sessionText: "Session 6", bookTitle: "AI Enthusiast", bookStatus: "Completed", hasLaptop: true, presence: "On time", notes: "Student participated actively.", status: "Sent", actionText: "View", actionIcon: "ri-eye-line" },
          { id: "s12", studentId: "STD-20260326-012", name: "Jamie Lee", sessionText: "Session 6", bookTitle: "Robotics Explorer", bookStatus: "Idle", hasLaptop: false, presence: "Absent", notes: "Excused absence.", status: "-", actionText: "Create Journal", actionIcon: "ri-pencil-line" }
        ]
      }
    ]);
    const classSession = computed(() => {
      return mockClasses.value.find((c) => c.id === classId.value) || null;
    });
    const currentStudent = computed(() => {
      if (classSession.value) {
        const s = classSession.value.students.find((student) => student.id === studentId.value);
        if (s) return s;
      }
      return {
        id: "s1",
        studentId: "STD-20260326-019",
        name: "Cristofer Mango",
        sessionText: "Session 6",
        bookTitle: "Python for Beginners",
        presence: "On time",
        hasLaptop: true,
        bookStatus: "Completed",
        notes: "",
        status: "-",
        actionText: "Create Journal",
        actionIcon: "ri-pencil-line"
      };
    });
    const currentTeacherName = computed(() => {
      var _a;
      if (classSession.value && classSession.value.teachers.length > 0) {
        return ((_a = classSession.value.teachers.find((t) => t.isMain)) == null ? void 0 : _a.name) || classSession.value.teachers[0].name;
      }
      return "I Putu Andi Sentosa";
    });
    const currentStep = computed({
      get: () => {
        const s = route.query.step;
        return s === "2" ? 2 : 1;
      },
      set: (val) => {
        router.replace({
          query: {
            ...route.query,
            step: val.toString()
          }
        });
      }
    });
    const backRoute = computed(() => {
      if (currentStep.value === 2) {
        return {
          path: "/meeting-journal/create",
          query: {
            ...route.query,
            step: "1"
          }
        };
      }
      return {
        path: "/attendance-detail",
        query: { id: classId.value }
      };
    });
    const projectName = ref("Project A");
    const isActiveProject = ref(true);
    const teacherNotes = ref("Student already good to apply the pelajaran");
    const isDetailsCollapsed = ref(false);
    const aiSummary = ref("");
    const isGeneratingAI = ref(false);
    const aiGenerationCount = ref(0);
    const generateAISummary = () => {
      if (isGeneratingAI.value) return;
      isGeneratingAI.value = true;
      setTimeout(() => {
        aiSummary.value = `Student ${currentStudent.value.name} has demonstrated excellent progress in Session 6 (${currentStudent.value.bookTitle}). They achieved high scores in covered lessons and actively completed practical objectives. Notes: "${teacherNotes.value}".`;
        isGeneratingAI.value = false;
        aiGenerationCount.value++;
        showToast("AI Summary generated successfully.", "success");
      }, 1e3);
    };
    const coveredLessons = ref([
      {
        id: 1,
        title: "Lesson 1 - Introduction to Pygame",
        progress: "100%",
        statusText: "Complete",
        statusColor: "success",
        score: 85,
        maxScore: 100,
        objectives: [
          "Introducing concepts related to Game development",
          "Know how to develop games using Pygame",
          "Know how to set the environment in Pygame",
          "Know how to initialize FPS in Pygame",
          "Add another object to the Pygame canvas",
          "Understand list operations in Python"
        ],
        expanded: true
      },
      {
        id: 2,
        title: "Lesson 1 - Introduction to Pygame",
        progress: "100%",
        statusText: "Complete",
        statusColor: "success",
        score: 85,
        maxScore: 100,
        objectives: [
          "Introducing concepts related to Game development",
          "Know how to develop games using Pygame",
          "Understand basic variables and main loops"
        ],
        expanded: false
      },
      {
        id: 3,
        title: "Lesson 1 - Introduction to Pygame",
        progress: "88%",
        statusText: "Progress",
        statusColor: "info",
        score: 0,
        maxScore: 100,
        objectives: [
          "Know how to initialize FPS in Pygame",
          "Add another object to the Pygame canvas",
          "Understand list operations in Python"
        ],
        expanded: false
      }
    ]);
    const deleteLesson = (id) => {
      coveredLessons.value = coveredLessons.value.filter((l) => l.id !== id);
      showToast("Lesson removed.", "warning");
    };
    const showAddLessonDialog = ref(false);
    const searchLessonQuery = ref("");
    const selectedLessonIds = ref([]);
    const availableLessonsList = ref([
      { id: 1, title: "Lesson 1 - Introduction to Pygame", progress: "100%", statusText: "Complete", statusColor: "success", score: 85, maxScore: 100 },
      { id: 2, title: "Lesson 2 - Drawing Shapes in Pygame", progress: "100%", statusText: "Complete", statusColor: "success", score: 85, maxScore: 100 },
      { id: 3, title: "Lesson 3 - Keyboard and Mouse Events", progress: "88%", statusText: "Progress", statusColor: "info", score: 0, maxScore: 100 },
      { id: 4, title: "Lesson 4 - Sprites and Collisions", progress: "0%", statusText: "Progress", statusColor: "info", score: 0, maxScore: 100 },
      { id: 5, title: "Lesson 5 - Game Loop and Sound FX", progress: "0%", statusText: "Progress", statusColor: "info", score: 0, maxScore: 100 },
      { id: 6, title: "Lesson 6 - Project Build and Finalization", progress: "0%", statusText: "Progress", statusColor: "info", score: 0, maxScore: 100 }
    ]);
    const filteredAvailableLessons = computed(() => {
      if (!searchLessonQuery.value) return availableLessonsList.value;
      const q = searchLessonQuery.value.toLowerCase();
      return availableLessonsList.value.filter((l) => l.title.toLowerCase().includes(q));
    });
    const openAddLessonDialog = () => {
      selectedLessonIds.value = coveredLessons.value.map((l) => l.id);
      searchLessonQuery.value = "";
      showAddLessonDialog.value = true;
    };
    const toggleLessonSelection = (id) => {
      const index = selectedLessonIds.value.indexOf(id);
      if (index > -1) {
        selectedLessonIds.value.splice(index, 1);
      } else {
        selectedLessonIds.value.push(id);
      }
    };
    const confirmLessonSelection = () => {
      const newCovered = [];
      selectedLessonIds.value.forEach((id) => {
        const existing = coveredLessons.value.find((l) => l.id === id);
        if (existing) {
          newCovered.push(existing);
        } else {
          const avail = availableLessonsList.value.find((l) => l.id === id);
          if (avail) {
            newCovered.push({
              id: avail.id,
              title: avail.title,
              progress: avail.progress,
              statusText: avail.statusText,
              statusColor: avail.statusColor,
              score: avail.score,
              maxScore: avail.maxScore,
              objectives: [
                "Introducing concepts related to Game development",
                "Understand basic logic of the selected module",
                "Implement practical applications and verify results"
              ],
              expanded: true
            });
          }
        }
      });
      coveredLessons.value = newCovered;
      showAddLessonDialog.value = false;
      showToast("Covered lessons updated.", "success");
    };
    const uploadedPhotos = ref([]);
    const cameraFileInput = ref(null);
    const galleryFileInput = ref(null);
    const showUploadPhotoDialog = ref(false);
    const triggerCameraInput = () => {
      var _a;
      showUploadPhotoDialog.value = false;
      (_a = cameraFileInput.value) == null ? void 0 : _a.click();
    };
    const triggerGalleryInput = () => {
      var _a;
      showUploadPhotoDialog.value = false;
      (_a = galleryFileInput.value) == null ? void 0 : _a.click();
    };
    const onFileChange = (e) => {
      const target = e.target;
      if (!target.files) return;
      const files = Array.from(target.files);
      if (uploadedPhotos.value.length + files.length > 3) {
        showToast("You can upload up to 3 photos only.", "error");
        return;
      }
      for (const file of files) {
        if (file.size > 1024 * 1024) {
          showToast(`File "${file.name}" exceeds 1MB limit.`, "error");
          continue;
        }
        uploadedPhotos.value.push({
          name: file.name,
          url: URL.createObjectURL(file)
        });
      }
    };
    const removePhoto = (index) => {
      uploadedPhotos.value.splice(index, 1);
      showToast("Photo removed.", "info");
    };
    const showExampleDialog = ref(false);
    const showBackConfirmDialog = ref(false);
    const initialData = {
      projectName: "Project A",
      isActiveProject: true,
      teacherNotes: "Student already good to apply the pelajaran",
      uploadedPhotosCount: 0,
      coveredLessonsCount: 3
    };
    const isDataChanged = computed(() => {
      if (projectName.value !== initialData.projectName || isActiveProject.value !== initialData.isActiveProject || teacherNotes.value !== initialData.teacherNotes || uploadedPhotos.value.length !== initialData.uploadedPhotosCount) {
        return true;
      }
      if (coveredLessons.value.length !== initialData.coveredLessonsCount) {
        return true;
      }
      const initialScores = [85, 85, 0];
      for (let i = 0; i < coveredLessons.value.length; i++) {
        if (i < initialScores.length && coveredLessons.value[i].score !== initialScores[i]) {
          return true;
        }
      }
      return false;
    });
    const handleCustomBackClick = () => {
      if (isDataChanged.value) {
        showBackConfirmDialog.value = true;
      } else {
        router.push(backRoute.value);
      }
    };
    const confirmBackNavigation = () => {
      showBackConfirmDialog.value = false;
      router.push(backRoute.value);
    };
    const showToastActive = ref(false);
    const toastMessage = ref("");
    const toastColor = ref("success");
    const showToast = (message, color = "success") => {
      toastMessage.value = message;
      toastColor.value = color;
      showToastActive.value = true;
    };
    const saveAsDraft = () => {
      showToast("Journal saved as draft.", "success");
    };
    const saveAndContinue = () => {
      showToast("Journal Step 1 saved as draft.", "success");
      currentStep.value = 2;
    };
    const downloadPDF = () => {
      showToast("Report PDF downloaded successfully.", "success");
    };
    const sendReport = () => {
      showToast("Report sent to parents successfully!", "success");
      setTimeout(() => {
        router.push({
          path: "/attendance-detail",
          query: { id: classId.value }
        });
      }, 1500);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "meeting-journal-create-page" }, _attrs))} data-v-05d73627><div class="full-width-header bg-surface border-b px-6" data-v-05d73627>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: currentStudent.value.name,
        description: `${currentStudent.value.studentId} \u2022 ${currentStudent.value.sessionText} \u2022 ${currentStudent.value.bookTitle}`,
        back: backRoute.value,
        "custom-back": currentStep.value === 1,
        "onClick:back": handleCustomBackClick,
        class: "mb-0"
      }, null, _parent));
      _push(`</div><div class="full-width-stepper bg-surface border-b px-6 py-4 mb-6" data-v-05d73627><div class="d-flex align-center justify-space-between flex-wrap gap-4" data-v-05d73627><div class="d-flex align-center gap-4" data-v-05d73627>`);
      _push(ssrRenderComponent(VProgressCircular, {
        "model-value": currentStep.value === 1 ? 50 : 100,
        color: "primary",
        size: "64",
        width: "5",
        class: "font-weight-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-body-1 font-weight-medium text-high-emphasis" data-v-05d73627${_scopeId}>${ssrInterpolate(currentStep.value)}/2 </span>`);
          } else {
            return [
              createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(currentStep.value) + "/2 ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="d-flex flex-column" data-v-05d73627><h5 class="text-h5 font-weight-medium text-high-emphasis" data-v-05d73627>${ssrInterpolate(currentStep.value === 1 ? "Lesson & Details" : "Preview")}</h5><span class="text-body-2 text-medium-emphasis" data-v-05d73627>${ssrInterpolate(currentStep.value === 1 ? "Topics, Photo & Observation" : "Preview and send report to parents")}</span></div></div><div class="teacher-info-badge px-4 py-2 rounded-pill d-flex align-center gap-2 border" data-v-05d73627>`);
      _push(ssrRenderComponent(VIcon, {
        icon: "ri-user-line",
        size: "20",
        class: "text-medium-emphasis"
      }, null, _parent));
      _push(`<span class="text-body-2 text-medium-emphasis" data-v-05d73627>Teacher :</span><span class="text-body-2 font-weight-medium text-primary" data-v-05d73627>${ssrInterpolate(currentTeacherName.value)}</span></div></div></div>`);
      if (currentStep.value === 1) {
        _push(`<div class="create-journal-content-container" data-v-05d73627><div class="mb-6" data-v-05d73627><div class="d-flex align-center justify-space-between mb-4" data-v-05d73627><div data-v-05d73627><h5 class="text-h5 font-weight-medium text-high-emphasis" data-v-05d73627>Covered lessons</h5><span class="text-body-2 text-medium-emphasis" data-v-05d73627>Choose lessons covered in this meeting and add photo</span></div>`);
        _push(ssrRenderComponent(VBtn, {
          variant: "outlined",
          color: "primary",
          "prepend-icon": "ri-add-line",
          class: "rounded-pill",
          size: "small",
          onClick: openAddLessonDialog
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Add Another `);
            } else {
              return [
                createTextVNode(" Add Another ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (coveredLessons.value.length > 0) {
          _push(`<div class="custom-lesson-list" data-v-05d73627><!--[-->`);
          ssrRenderList(coveredLessons.value, (lesson, idx) => {
            _push(`<div class="lesson-card border rounded-lg mb-4 overflow-hidden" data-v-05d73627><div class="lesson-header-row d-flex align-center justify-space-between pa-4 bg-surface gap-4" data-v-05d73627><div class="d-flex align-center" data-v-05d73627><div class="${ssrRenderClass(["status-circle d-flex align-center justify-center me-3", lesson.statusColor])}" data-v-05d73627>`);
            _push(ssrRenderComponent(VIcon, {
              icon: lesson.statusColor === "success" ? "ri-check-line" : "ri-loader-line",
              size: "14",
              color: "white"
            }, null, _parent));
            _push(`</div><div class="d-flex flex-column" data-v-05d73627><span class="text-body-1 font-weight-medium text-high-emphasis leading-normal" data-v-05d73627>${ssrInterpolate(lesson.title)}</span><div class="d-flex align-center gap-1 mt-1" data-v-05d73627>`);
            _push(ssrRenderComponent(VIcon, {
              icon: lesson.statusColor === "success" ? "ri-check-line" : "ri-loader-2-line",
              size: "12",
              class: `text-${lesson.statusColor === "success" ? "primary" : "info"}`
            }, null, _parent));
            _push(`<span class="${ssrRenderClass([`text-${lesson.statusColor === "success" ? "primary" : "info"}`, "text-caption font-weight-medium"])}" data-v-05d73627>${ssrInterpolate(lesson.progress)} ${ssrInterpolate(lesson.statusText)}</span></div></div></div><div class="d-flex align-center gap-4" data-v-05d73627><div class="d-flex align-center gap-2" data-v-05d73627><span class="text-body-2 text-medium-emphasis" data-v-05d73627>Score :</span><div class="score-input-box" data-v-05d73627><input type="number"${ssrRenderAttr("value", lesson.score)} min="0" max="100" class="${ssrRenderClass([lesson.score > 0 ? "text-primary" : "text-medium-emphasis", "text-center font-weight-medium"])}" data-v-05d73627></div><span class="text-body-2 text-medium-emphasis" data-v-05d73627>/ 100</span></div><div class="vertical-divider" data-v-05d73627></div>`);
            _push(ssrRenderComponent(VBtn, {
              icon: "ri-delete-bin-line",
              variant: "outlined",
              color: "error",
              class: "delete-btn rounded border-solid",
              onClick: ($event) => deleteLesson(lesson.id)
            }, null, _parent));
            _push(`</div></div><div class="lesson-accordion-section" data-v-05d73627><div class="accordion-header d-flex align-center justify-space-between px-4 py-3 cursor-pointer" data-v-05d73627><div class="d-flex align-center gap-2" data-v-05d73627><div class="objective-circle d-flex align-center justify-center" data-v-05d73627>`);
            _push(ssrRenderComponent(VIcon, {
              icon: "ri-focus-2-line",
              size: "12",
              color: "white"
            }, null, _parent));
            _push(`</div><span class="text-body-2 font-weight-medium text-high-emphasis" data-v-05d73627> Lesson Objective </span></div><div class="accordion-arrow bg-white border rounded" data-v-05d73627>`);
            _push(ssrRenderComponent(VIcon, {
              icon: lesson.expanded ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
              size: "18",
              class: "text-medium-emphasis"
            }, null, _parent));
            _push(`</div></div>`);
            _push(ssrRenderComponent(VExpandTransition, null, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div style="${ssrRenderStyle(lesson.expanded ? null : { display: "none" })}" class="accordion-content px-4 pb-4" data-v-05d73627${_scopeId}><ul class="objective-list text-body-2 text-medium-emphasis pl-6" data-v-05d73627${_scopeId}><!--[-->`);
                  ssrRenderList(lesson.objectives, (obj, oIdx) => {
                    _push2(`<li class="mb-1 leading-relaxed" data-v-05d73627${_scopeId}>${ssrInterpolate(obj)}</li>`);
                  });
                  _push2(`<!--]--></ul></div>`);
                } else {
                  return [
                    withDirectives(createVNode("div", { class: "accordion-content px-4 pb-4" }, [
                      createVNode("ul", { class: "objective-list text-body-2 text-medium-emphasis pl-6" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(lesson.objectives, (obj, oIdx) => {
                          return openBlock(), createBlock("li", {
                            key: oIdx,
                            class: "mb-1 leading-relaxed"
                          }, toDisplayString(obj), 1);
                        }), 128))
                      ])
                    ], 512), [
                      [vShow, lesson.expanded]
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (coveredLessons.value.length === 0) {
          _push(`<div class="text-center py-6 border rounded-lg bg-surface" data-v-05d73627><span class="text-body-1 text-medium-emphasis" data-v-05d73627>No covered lessons added yet. Click &quot;Add Another&quot; to add.</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent));
        _push(`<div class="d-flex align-center justify-space-between mb-4 mt-6" data-v-05d73627><div class="d-flex flex-column gap-1" data-v-05d73627><h5 class="text-h5 font-weight-medium text-high-emphasis" data-v-05d73627>Add Details</h5><span class="text-body-2 text-medium-emphasis" data-v-05d73627> Complete the project detail and your observation </span></div>`);
        _push(ssrRenderComponent(VBtn, {
          variant: "outlined",
          color: "secondary",
          size: "small",
          style: { "border-color": "rgba(46, 38, 61, 0.08) !important", "background-color": "white", "border-radius": "4px" },
          class: "pa-0 min-width-0",
          onClick: ($event) => isDetailsCollapsed.value = !isDetailsCollapsed.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, {
                icon: isDetailsCollapsed.value ? "ri-arrow-down-s-line" : "ri-arrow-up-s-line",
                size: "22",
                color: "secondary"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VIcon, {
                  icon: isDetailsCollapsed.value ? "ri-arrow-down-s-line" : "ri-arrow-up-s-line",
                  size: "22",
                  color: "secondary"
                }, null, 8, ["icon"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(VExpandTransition, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VRow, {
                style: !isDetailsCollapsed.value ? null : { display: "none" },
                class: "mb-6 gap-y-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6",
                      class: "d-flex flex-column gap-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            border: "",
                            elevation: "0",
                            class: "rounded-lg py-6 px-5"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h5 class="text-body-1 font-weight-medium text-high-emphasis mb-4" data-v-05d73627${_scopeId4}>Project Details</h5><div class="d-flex flex-column gap-4" data-v-05d73627${_scopeId4}><div class="d-flex align-center gap-3" data-v-05d73627${_scopeId4}>`);
                                _push5(ssrRenderComponent(VTextField, {
                                  modelValue: projectName.value,
                                  "onUpdate:modelValue": ($event) => projectName.value = $event,
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": "",
                                  placeholder: "Enter project name",
                                  label: "Project",
                                  class: "bg-surface flex-grow-1"
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCheckbox, {
                                  modelValue: isActiveProject.value,
                                  "onUpdate:modelValue": ($event) => isActiveProject.value = $event,
                                  label: "Active project",
                                  color: "primary",
                                  "hide-details": "",
                                  class: "mt-0 pt-0"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                                _push5(ssrRenderComponent(VTextField, {
                                  modelValue: teacherNotes.value,
                                  "onUpdate:modelValue": ($event) => teacherNotes.value = $event,
                                  variant: "outlined",
                                  density: "compact",
                                  placeholder: "Write student observation notes...",
                                  "hide-details": "",
                                  label: "Teacher Notes",
                                  class: "bg-surface w-100"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("h5", { class: "text-body-1 font-weight-medium text-high-emphasis mb-4" }, "Project Details"),
                                  createVNode("div", { class: "d-flex flex-column gap-4" }, [
                                    createVNode("div", { class: "d-flex align-center gap-3" }, [
                                      createVNode(VTextField, {
                                        modelValue: projectName.value,
                                        "onUpdate:modelValue": ($event) => projectName.value = $event,
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": "",
                                        placeholder: "Enter project name",
                                        label: "Project",
                                        class: "bg-surface flex-grow-1"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VCheckbox, {
                                        modelValue: isActiveProject.value,
                                        "onUpdate:modelValue": ($event) => isActiveProject.value = $event,
                                        label: "Active project",
                                        color: "primary",
                                        "hide-details": "",
                                        class: "mt-0 pt-0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode(VTextField, {
                                      modelValue: teacherNotes.value,
                                      "onUpdate:modelValue": ($event) => teacherNotes.value = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      placeholder: "Write student observation notes...",
                                      "hide-details": "",
                                      label: "Teacher Notes",
                                      class: "bg-surface w-100"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCard, {
                            border: "",
                            elevation: "0",
                            class: "rounded-lg pa-5"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center justify-space-between mb-4" data-v-05d73627${_scopeId4}><h5 class="text-body-1 font-weight-medium text-high-emphasis mb-0" data-v-05d73627${_scopeId4}>Evidence Photo</h5>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  variant: "text",
                                  color: "primary",
                                  density: "compact",
                                  "prepend-icon": "ri-information-line",
                                  onClick: ($event) => showExampleDialog.value = true,
                                  class: "font-weight-medium text-capitalize pa-0"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` See Example `);
                                    } else {
                                      return [
                                        createTextVNode(" See Example ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div><div class="upload-dashed-box d-flex flex-column align-center justify-center py-12 px-4 mb-4" data-v-05d73627${_scopeId4}><input type="file" accept="image/*" capture="environment" class="d-none" data-v-05d73627${_scopeId4}><input type="file" accept="image/*" multiple class="d-none" data-v-05d73627${_scopeId4}>`);
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "ri-image-line",
                                  size: "24",
                                  class: "text-medium-emphasis mb-2"
                                }, null, _parent5, _scopeId4));
                                if (uploadedPhotos.value.length === 0) {
                                  _push5(`<span class="text-body-2 text-medium-emphasis text-center" data-v-05d73627${_scopeId4}> There are no photos uploaded yet. </span>`);
                                } else {
                                  _push5(`<span class="text-body-2 text-primary font-weight-medium text-center" data-v-05d73627${_scopeId4}>${ssrInterpolate(uploadedPhotos.value.length)} photo(s) selected </span>`);
                                }
                                _push5(`</div>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  block: "",
                                  variant: "outlined",
                                  color: "primary",
                                  class: "rounded-pill mb-3 text-capitalize font-weight-medium",
                                  size: "small",
                                  style: { "border-color": "rgba(var(--v-theme-primary), 0.3) !important" },
                                  "prepend-icon": "ri-upload-2-line",
                                  onClick: ($event) => showUploadPhotoDialog.value = true
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Choose Photo `);
                                    } else {
                                      return [
                                        createTextVNode(" Choose Photo ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<span class="text-caption text-medium-emphasis d-block" data-v-05d73627${_scopeId4}> You can upload up to 3 photos from your camera or gallery, and each photo can be a maximum of 1 MB. </span>`);
                                if (uploadedPhotos.value.length > 0) {
                                  _push5(ssrRenderComponent(VRow, { class: "mt-4" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<!--[-->`);
                                        ssrRenderList(uploadedPhotos.value, (photo, idx) => {
                                          _push6(ssrRenderComponent(VCol, {
                                            key: idx,
                                            cols: "4",
                                            class: "position-relative"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(VCard, {
                                                  border: "",
                                                  flat: "",
                                                  class: "rounded-lg overflow-hidden ratio-square"
                                                }, {
                                                  default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(ssrRenderComponent(VImg, {
                                                        src: photo.url,
                                                        cover: "",
                                                        class: "w-100 h-100"
                                                      }, null, _parent8, _scopeId7));
                                                      _push8(ssrRenderComponent(VBtn, {
                                                        icon: "ri-close-line",
                                                        color: "error",
                                                        size: "x-small",
                                                        variant: "flat",
                                                        class: "photo-delete-badge",
                                                        onClick: ($event) => removePhoto(idx)
                                                      }, null, _parent8, _scopeId7));
                                                    } else {
                                                      return [
                                                        createVNode(VImg, {
                                                          src: photo.url,
                                                          cover: "",
                                                          class: "w-100 h-100"
                                                        }, null, 8, ["src"]),
                                                        createVNode(VBtn, {
                                                          icon: "ri-close-line",
                                                          color: "error",
                                                          size: "x-small",
                                                          variant: "flat",
                                                          class: "photo-delete-badge",
                                                          onClick: ($event) => removePhoto(idx)
                                                        }, null, 8, ["onClick"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(VCard, {
                                                    border: "",
                                                    flat: "",
                                                    class: "rounded-lg overflow-hidden ratio-square"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VImg, {
                                                        src: photo.url,
                                                        cover: "",
                                                        class: "w-100 h-100"
                                                      }, null, 8, ["src"]),
                                                      createVNode(VBtn, {
                                                        icon: "ri-close-line",
                                                        color: "error",
                                                        size: "x-small",
                                                        variant: "flat",
                                                        class: "photo-delete-badge",
                                                        onClick: ($event) => removePhoto(idx)
                                                      }, null, 8, ["onClick"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        });
                                        _push6(`<!--]-->`);
                                      } else {
                                        return [
                                          (openBlock(true), createBlock(Fragment, null, renderList(uploadedPhotos.value, (photo, idx) => {
                                            return openBlock(), createBlock(VCol, {
                                              key: idx,
                                              cols: "4",
                                              class: "position-relative"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCard, {
                                                  border: "",
                                                  flat: "",
                                                  class: "rounded-lg overflow-hidden ratio-square"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VImg, {
                                                      src: photo.url,
                                                      cover: "",
                                                      class: "w-100 h-100"
                                                    }, null, 8, ["src"]),
                                                    createVNode(VBtn, {
                                                      icon: "ri-close-line",
                                                      color: "error",
                                                      size: "x-small",
                                                      variant: "flat",
                                                      class: "photo-delete-badge",
                                                      onClick: ($event) => removePhoto(idx)
                                                    }, null, 8, ["onClick"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex align-center justify-space-between mb-4" }, [
                                    createVNode("h5", { class: "text-body-1 font-weight-medium text-high-emphasis mb-0" }, "Evidence Photo"),
                                    createVNode(VBtn, {
                                      variant: "text",
                                      color: "primary",
                                      density: "compact",
                                      "prepend-icon": "ri-information-line",
                                      onClick: ($event) => showExampleDialog.value = true,
                                      class: "font-weight-medium text-capitalize pa-0"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" See Example ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  createVNode("div", {
                                    class: "upload-dashed-box d-flex flex-column align-center justify-center py-12 px-4 mb-4",
                                    onClick: ($event) => showUploadPhotoDialog.value = true
                                  }, [
                                    createVNode("input", {
                                      type: "file",
                                      ref_key: "cameraFileInput",
                                      ref: cameraFileInput,
                                      accept: "image/*",
                                      capture: "environment",
                                      onChange: onFileChange,
                                      class: "d-none"
                                    }, null, 544),
                                    createVNode("input", {
                                      type: "file",
                                      ref_key: "galleryFileInput",
                                      ref: galleryFileInput,
                                      accept: "image/*",
                                      multiple: "",
                                      onChange: onFileChange,
                                      class: "d-none"
                                    }, null, 544),
                                    createVNode(VIcon, {
                                      icon: "ri-image-line",
                                      size: "24",
                                      class: "text-medium-emphasis mb-2"
                                    }),
                                    uploadedPhotos.value.length === 0 ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "text-body-2 text-medium-emphasis text-center"
                                    }, " There are no photos uploaded yet. ")) : (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "text-body-2 text-primary font-weight-medium text-center"
                                    }, toDisplayString(uploadedPhotos.value.length) + " photo(s) selected ", 1))
                                  ], 8, ["onClick"]),
                                  createVNode(VBtn, {
                                    block: "",
                                    variant: "outlined",
                                    color: "primary",
                                    class: "rounded-pill mb-3 text-capitalize font-weight-medium",
                                    size: "small",
                                    style: { "border-color": "rgba(var(--v-theme-primary), 0.3) !important" },
                                    "prepend-icon": "ri-upload-2-line",
                                    onClick: ($event) => showUploadPhotoDialog.value = true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Choose Photo ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode("span", { class: "text-caption text-medium-emphasis d-block" }, " You can upload up to 3 photos from your camera or gallery, and each photo can be a maximum of 1 MB. "),
                                  uploadedPhotos.value.length > 0 ? (openBlock(), createBlock(VRow, {
                                    key: 0,
                                    class: "mt-4"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(uploadedPhotos.value, (photo, idx) => {
                                        return openBlock(), createBlock(VCol, {
                                          key: idx,
                                          cols: "4",
                                          class: "position-relative"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              border: "",
                                              flat: "",
                                              class: "rounded-lg overflow-hidden ratio-square"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: photo.url,
                                                  cover: "",
                                                  class: "w-100 h-100"
                                                }, null, 8, ["src"]),
                                                createVNode(VBtn, {
                                                  icon: "ri-close-line",
                                                  color: "error",
                                                  size: "x-small",
                                                  variant: "flat",
                                                  class: "photo-delete-badge",
                                                  onClick: ($event) => removePhoto(idx)
                                                }, null, 8, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, {
                              border: "",
                              elevation: "0",
                              class: "rounded-lg py-6 px-5"
                            }, {
                              default: withCtx(() => [
                                createVNode("h5", { class: "text-body-1 font-weight-medium text-high-emphasis mb-4" }, "Project Details"),
                                createVNode("div", { class: "d-flex flex-column gap-4" }, [
                                  createVNode("div", { class: "d-flex align-center gap-3" }, [
                                    createVNode(VTextField, {
                                      modelValue: projectName.value,
                                      "onUpdate:modelValue": ($event) => projectName.value = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": "",
                                      placeholder: "Enter project name",
                                      label: "Project",
                                      class: "bg-surface flex-grow-1"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VCheckbox, {
                                      modelValue: isActiveProject.value,
                                      "onUpdate:modelValue": ($event) => isActiveProject.value = $event,
                                      label: "Active project",
                                      color: "primary",
                                      "hide-details": "",
                                      class: "mt-0 pt-0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(VTextField, {
                                    modelValue: teacherNotes.value,
                                    "onUpdate:modelValue": ($event) => teacherNotes.value = $event,
                                    variant: "outlined",
                                    density: "compact",
                                    placeholder: "Write student observation notes...",
                                    "hide-details": "",
                                    label: "Teacher Notes",
                                    class: "bg-surface w-100"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCard, {
                              border: "",
                              elevation: "0",
                              class: "rounded-lg pa-5"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center justify-space-between mb-4" }, [
                                  createVNode("h5", { class: "text-body-1 font-weight-medium text-high-emphasis mb-0" }, "Evidence Photo"),
                                  createVNode(VBtn, {
                                    variant: "text",
                                    color: "primary",
                                    density: "compact",
                                    "prepend-icon": "ri-information-line",
                                    onClick: ($event) => showExampleDialog.value = true,
                                    class: "font-weight-medium text-capitalize pa-0"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" See Example ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                createVNode("div", {
                                  class: "upload-dashed-box d-flex flex-column align-center justify-center py-12 px-4 mb-4",
                                  onClick: ($event) => showUploadPhotoDialog.value = true
                                }, [
                                  createVNode("input", {
                                    type: "file",
                                    ref_key: "cameraFileInput",
                                    ref: cameraFileInput,
                                    accept: "image/*",
                                    capture: "environment",
                                    onChange: onFileChange,
                                    class: "d-none"
                                  }, null, 544),
                                  createVNode("input", {
                                    type: "file",
                                    ref_key: "galleryFileInput",
                                    ref: galleryFileInput,
                                    accept: "image/*",
                                    multiple: "",
                                    onChange: onFileChange,
                                    class: "d-none"
                                  }, null, 544),
                                  createVNode(VIcon, {
                                    icon: "ri-image-line",
                                    size: "24",
                                    class: "text-medium-emphasis mb-2"
                                  }),
                                  uploadedPhotos.value.length === 0 ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "text-body-2 text-medium-emphasis text-center"
                                  }, " There are no photos uploaded yet. ")) : (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "text-body-2 text-primary font-weight-medium text-center"
                                  }, toDisplayString(uploadedPhotos.value.length) + " photo(s) selected ", 1))
                                ], 8, ["onClick"]),
                                createVNode(VBtn, {
                                  block: "",
                                  variant: "outlined",
                                  color: "primary",
                                  class: "rounded-pill mb-3 text-capitalize font-weight-medium",
                                  size: "small",
                                  style: { "border-color": "rgba(var(--v-theme-primary), 0.3) !important" },
                                  "prepend-icon": "ri-upload-2-line",
                                  onClick: ($event) => showUploadPhotoDialog.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Choose Photo ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode("span", { class: "text-caption text-medium-emphasis d-block" }, " You can upload up to 3 photos from your camera or gallery, and each photo can be a maximum of 1 MB. "),
                                uploadedPhotos.value.length > 0 ? (openBlock(), createBlock(VRow, {
                                  key: 0,
                                  class: "mt-4"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(uploadedPhotos.value, (photo, idx) => {
                                      return openBlock(), createBlock(VCol, {
                                        key: idx,
                                        cols: "4",
                                        class: "position-relative"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            border: "",
                                            flat: "",
                                            class: "rounded-lg overflow-hidden ratio-square"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: photo.url,
                                                cover: "",
                                                class: "w-100 h-100"
                                              }, null, 8, ["src"]),
                                              createVNode(VBtn, {
                                                icon: "ri-close-line",
                                                color: "error",
                                                size: "x-small",
                                                variant: "flat",
                                                class: "photo-delete-badge",
                                                onClick: ($event) => removePhoto(idx)
                                              }, null, 8, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            border: "",
                            elevation: "0",
                            class: "rounded-lg pa-5 h-100 d-flex flex-column"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center justify-space-between mb-4" data-v-05d73627${_scopeId4}><div class="d-flex align-center gap-2" data-v-05d73627${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  size: "24",
                                  color: "primary",
                                  class: "text-white"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: "ri-magic-line",
                                        size: "14"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: "ri-magic-line",
                                          size: "14"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<h5 class="text-body-1 font-weight-medium text-high-emphasis mb-0" data-v-05d73627${_scopeId4}>AI Summary</h5></div><div class="d-flex align-center gap-1" data-v-05d73627${_scopeId4}>`);
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "ri-time-line",
                                  size: "16",
                                  class: "text-medium-emphasis"
                                }, null, _parent5, _scopeId4));
                                _push5(`<span class="text-caption text-medium-emphasis font-weight-medium" data-v-05d73627${_scopeId4}>${ssrInterpolate(aiGenerationCount.value)} AI Generation </span></div></div>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "info",
                                  variant: "flat",
                                  rounded: "xl",
                                  size: "default",
                                  loading: isGeneratingAI.value,
                                  onClick: generateAISummary,
                                  class: "font-weight-medium text-capitalize mb-4 align-self-start"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Generate AI Summary `);
                                    } else {
                                      return [
                                        createTextVNode(" Generate AI Summary ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<div class="flex-grow-1 ai-summary-box border rounded-lg pa-4 bg-light-gray" data-v-05d73627${_scopeId4}><p class="${ssrRenderClass([aiSummary.value ? "text-high-emphasis" : "text-medium-emphasis", "text-body-2 mb-0"])}" data-v-05d73627${_scopeId4}>${ssrInterpolate(aiSummary.value || "AI Summary will shown here")}</p></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex align-center justify-space-between mb-4" }, [
                                    createVNode("div", { class: "d-flex align-center gap-2" }, [
                                      createVNode(VAvatar, {
                                        size: "24",
                                        color: "primary",
                                        class: "text-white"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "ri-magic-line",
                                            size: "14"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("h5", { class: "text-body-1 font-weight-medium text-high-emphasis mb-0" }, "AI Summary")
                                    ]),
                                    createVNode("div", { class: "d-flex align-center gap-1" }, [
                                      createVNode(VIcon, {
                                        icon: "ri-time-line",
                                        size: "16",
                                        class: "text-medium-emphasis"
                                      }),
                                      createVNode("span", { class: "text-caption text-medium-emphasis font-weight-medium" }, toDisplayString(aiGenerationCount.value) + " AI Generation ", 1)
                                    ])
                                  ]),
                                  createVNode(VBtn, {
                                    color: "info",
                                    variant: "flat",
                                    rounded: "xl",
                                    size: "default",
                                    loading: isGeneratingAI.value,
                                    onClick: generateAISummary,
                                    class: "font-weight-medium text-capitalize mb-4 align-self-start"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Generate AI Summary ")
                                    ]),
                                    _: 1
                                  }, 8, ["loading"]),
                                  createVNode("div", { class: "flex-grow-1 ai-summary-box border rounded-lg pa-4 bg-light-gray" }, [
                                    createVNode("p", {
                                      class: ["text-body-2 mb-0", aiSummary.value ? "text-high-emphasis" : "text-medium-emphasis"]
                                    }, toDisplayString(aiSummary.value || "AI Summary will shown here"), 3)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, {
                              border: "",
                              elevation: "0",
                              class: "rounded-lg pa-5 h-100 d-flex flex-column"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center justify-space-between mb-4" }, [
                                  createVNode("div", { class: "d-flex align-center gap-2" }, [
                                    createVNode(VAvatar, {
                                      size: "24",
                                      color: "primary",
                                      class: "text-white"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-magic-line",
                                          size: "14"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("h5", { class: "text-body-1 font-weight-medium text-high-emphasis mb-0" }, "AI Summary")
                                  ]),
                                  createVNode("div", { class: "d-flex align-center gap-1" }, [
                                    createVNode(VIcon, {
                                      icon: "ri-time-line",
                                      size: "16",
                                      class: "text-medium-emphasis"
                                    }),
                                    createVNode("span", { class: "text-caption text-medium-emphasis font-weight-medium" }, toDisplayString(aiGenerationCount.value) + " AI Generation ", 1)
                                  ])
                                ]),
                                createVNode(VBtn, {
                                  color: "info",
                                  variant: "flat",
                                  rounded: "xl",
                                  size: "default",
                                  loading: isGeneratingAI.value,
                                  onClick: generateAISummary,
                                  class: "font-weight-medium text-capitalize mb-4 align-self-start"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Generate AI Summary ")
                                  ]),
                                  _: 1
                                }, 8, ["loading"]),
                                createVNode("div", { class: "flex-grow-1 ai-summary-box border rounded-lg pa-4 bg-light-gray" }, [
                                  createVNode("p", {
                                    class: ["text-body-2 mb-0", aiSummary.value ? "text-high-emphasis" : "text-medium-emphasis"]
                                  }, toDisplayString(aiSummary.value || "AI Summary will shown here"), 3)
                                ])
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
                      createVNode(VCol, {
                        cols: "12",
                        md: "6",
                        class: "d-flex flex-column gap-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            border: "",
                            elevation: "0",
                            class: "rounded-lg py-6 px-5"
                          }, {
                            default: withCtx(() => [
                              createVNode("h5", { class: "text-body-1 font-weight-medium text-high-emphasis mb-4" }, "Project Details"),
                              createVNode("div", { class: "d-flex flex-column gap-4" }, [
                                createVNode("div", { class: "d-flex align-center gap-3" }, [
                                  createVNode(VTextField, {
                                    modelValue: projectName.value,
                                    "onUpdate:modelValue": ($event) => projectName.value = $event,
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": "",
                                    placeholder: "Enter project name",
                                    label: "Project",
                                    class: "bg-surface flex-grow-1"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VCheckbox, {
                                    modelValue: isActiveProject.value,
                                    "onUpdate:modelValue": ($event) => isActiveProject.value = $event,
                                    label: "Active project",
                                    color: "primary",
                                    "hide-details": "",
                                    class: "mt-0 pt-0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(VTextField, {
                                  modelValue: teacherNotes.value,
                                  "onUpdate:modelValue": ($event) => teacherNotes.value = $event,
                                  variant: "outlined",
                                  density: "compact",
                                  placeholder: "Write student observation notes...",
                                  "hide-details": "",
                                  label: "Teacher Notes",
                                  class: "bg-surface w-100"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCard, {
                            border: "",
                            elevation: "0",
                            class: "rounded-lg pa-5"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center justify-space-between mb-4" }, [
                                createVNode("h5", { class: "text-body-1 font-weight-medium text-high-emphasis mb-0" }, "Evidence Photo"),
                                createVNode(VBtn, {
                                  variant: "text",
                                  color: "primary",
                                  density: "compact",
                                  "prepend-icon": "ri-information-line",
                                  onClick: ($event) => showExampleDialog.value = true,
                                  class: "font-weight-medium text-capitalize pa-0"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" See Example ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              createVNode("div", {
                                class: "upload-dashed-box d-flex flex-column align-center justify-center py-12 px-4 mb-4",
                                onClick: ($event) => showUploadPhotoDialog.value = true
                              }, [
                                createVNode("input", {
                                  type: "file",
                                  ref_key: "cameraFileInput",
                                  ref: cameraFileInput,
                                  accept: "image/*",
                                  capture: "environment",
                                  onChange: onFileChange,
                                  class: "d-none"
                                }, null, 544),
                                createVNode("input", {
                                  type: "file",
                                  ref_key: "galleryFileInput",
                                  ref: galleryFileInput,
                                  accept: "image/*",
                                  multiple: "",
                                  onChange: onFileChange,
                                  class: "d-none"
                                }, null, 544),
                                createVNode(VIcon, {
                                  icon: "ri-image-line",
                                  size: "24",
                                  class: "text-medium-emphasis mb-2"
                                }),
                                uploadedPhotos.value.length === 0 ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "text-body-2 text-medium-emphasis text-center"
                                }, " There are no photos uploaded yet. ")) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "text-body-2 text-primary font-weight-medium text-center"
                                }, toDisplayString(uploadedPhotos.value.length) + " photo(s) selected ", 1))
                              ], 8, ["onClick"]),
                              createVNode(VBtn, {
                                block: "",
                                variant: "outlined",
                                color: "primary",
                                class: "rounded-pill mb-3 text-capitalize font-weight-medium",
                                size: "small",
                                style: { "border-color": "rgba(var(--v-theme-primary), 0.3) !important" },
                                "prepend-icon": "ri-upload-2-line",
                                onClick: ($event) => showUploadPhotoDialog.value = true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Choose Photo ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode("span", { class: "text-caption text-medium-emphasis d-block" }, " You can upload up to 3 photos from your camera or gallery, and each photo can be a maximum of 1 MB. "),
                              uploadedPhotos.value.length > 0 ? (openBlock(), createBlock(VRow, {
                                key: 0,
                                class: "mt-4"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(uploadedPhotos.value, (photo, idx) => {
                                    return openBlock(), createBlock(VCol, {
                                      key: idx,
                                      cols: "4",
                                      class: "position-relative"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          border: "",
                                          flat: "",
                                          class: "rounded-lg overflow-hidden ratio-square"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              src: photo.url,
                                              cover: "",
                                              class: "w-100 h-100"
                                            }, null, 8, ["src"]),
                                            createVNode(VBtn, {
                                              icon: "ri-close-line",
                                              color: "error",
                                              size: "x-small",
                                              variant: "flat",
                                              class: "photo-delete-badge",
                                              onClick: ($event) => removePhoto(idx)
                                            }, null, 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            border: "",
                            elevation: "0",
                            class: "rounded-lg pa-5 h-100 d-flex flex-column"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center justify-space-between mb-4" }, [
                                createVNode("div", { class: "d-flex align-center gap-2" }, [
                                  createVNode(VAvatar, {
                                    size: "24",
                                    color: "primary",
                                    class: "text-white"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-magic-line",
                                        size: "14"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("h5", { class: "text-body-1 font-weight-medium text-high-emphasis mb-0" }, "AI Summary")
                                ]),
                                createVNode("div", { class: "d-flex align-center gap-1" }, [
                                  createVNode(VIcon, {
                                    icon: "ri-time-line",
                                    size: "16",
                                    class: "text-medium-emphasis"
                                  }),
                                  createVNode("span", { class: "text-caption text-medium-emphasis font-weight-medium" }, toDisplayString(aiGenerationCount.value) + " AI Generation ", 1)
                                ])
                              ]),
                              createVNode(VBtn, {
                                color: "info",
                                variant: "flat",
                                rounded: "xl",
                                size: "default",
                                loading: isGeneratingAI.value,
                                onClick: generateAISummary,
                                class: "font-weight-medium text-capitalize mb-4 align-self-start"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Generate AI Summary ")
                                ]),
                                _: 1
                              }, 8, ["loading"]),
                              createVNode("div", { class: "flex-grow-1 ai-summary-box border rounded-lg pa-4 bg-light-gray" }, [
                                createVNode("p", {
                                  class: ["text-body-2 mb-0", aiSummary.value ? "text-high-emphasis" : "text-medium-emphasis"]
                                }, toDisplayString(aiSummary.value || "AI Summary will shown here"), 3)
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
              }, _parent2, _scopeId));
            } else {
              return [
                withDirectives(createVNode(VRow, { class: "mb-6 gap-y-6" }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      md: "6",
                      class: "d-flex flex-column gap-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          border: "",
                          elevation: "0",
                          class: "rounded-lg py-6 px-5"
                        }, {
                          default: withCtx(() => [
                            createVNode("h5", { class: "text-body-1 font-weight-medium text-high-emphasis mb-4" }, "Project Details"),
                            createVNode("div", { class: "d-flex flex-column gap-4" }, [
                              createVNode("div", { class: "d-flex align-center gap-3" }, [
                                createVNode(VTextField, {
                                  modelValue: projectName.value,
                                  "onUpdate:modelValue": ($event) => projectName.value = $event,
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": "",
                                  placeholder: "Enter project name",
                                  label: "Project",
                                  class: "bg-surface flex-grow-1"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VCheckbox, {
                                  modelValue: isActiveProject.value,
                                  "onUpdate:modelValue": ($event) => isActiveProject.value = $event,
                                  label: "Active project",
                                  color: "primary",
                                  "hide-details": "",
                                  class: "mt-0 pt-0"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(VTextField, {
                                modelValue: teacherNotes.value,
                                "onUpdate:modelValue": ($event) => teacherNotes.value = $event,
                                variant: "outlined",
                                density: "compact",
                                placeholder: "Write student observation notes...",
                                "hide-details": "",
                                label: "Teacher Notes",
                                class: "bg-surface w-100"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCard, {
                          border: "",
                          elevation: "0",
                          class: "rounded-lg pa-5"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center justify-space-between mb-4" }, [
                              createVNode("h5", { class: "text-body-1 font-weight-medium text-high-emphasis mb-0" }, "Evidence Photo"),
                              createVNode(VBtn, {
                                variant: "text",
                                color: "primary",
                                density: "compact",
                                "prepend-icon": "ri-information-line",
                                onClick: ($event) => showExampleDialog.value = true,
                                class: "font-weight-medium text-capitalize pa-0"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" See Example ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            createVNode("div", {
                              class: "upload-dashed-box d-flex flex-column align-center justify-center py-12 px-4 mb-4",
                              onClick: ($event) => showUploadPhotoDialog.value = true
                            }, [
                              createVNode("input", {
                                type: "file",
                                ref_key: "cameraFileInput",
                                ref: cameraFileInput,
                                accept: "image/*",
                                capture: "environment",
                                onChange: onFileChange,
                                class: "d-none"
                              }, null, 544),
                              createVNode("input", {
                                type: "file",
                                ref_key: "galleryFileInput",
                                ref: galleryFileInput,
                                accept: "image/*",
                                multiple: "",
                                onChange: onFileChange,
                                class: "d-none"
                              }, null, 544),
                              createVNode(VIcon, {
                                icon: "ri-image-line",
                                size: "24",
                                class: "text-medium-emphasis mb-2"
                              }),
                              uploadedPhotos.value.length === 0 ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-body-2 text-medium-emphasis text-center"
                              }, " There are no photos uploaded yet. ")) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-body-2 text-primary font-weight-medium text-center"
                              }, toDisplayString(uploadedPhotos.value.length) + " photo(s) selected ", 1))
                            ], 8, ["onClick"]),
                            createVNode(VBtn, {
                              block: "",
                              variant: "outlined",
                              color: "primary",
                              class: "rounded-pill mb-3 text-capitalize font-weight-medium",
                              size: "small",
                              style: { "border-color": "rgba(var(--v-theme-primary), 0.3) !important" },
                              "prepend-icon": "ri-upload-2-line",
                              onClick: ($event) => showUploadPhotoDialog.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Choose Photo ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode("span", { class: "text-caption text-medium-emphasis d-block" }, " You can upload up to 3 photos from your camera or gallery, and each photo can be a maximum of 1 MB. "),
                            uploadedPhotos.value.length > 0 ? (openBlock(), createBlock(VRow, {
                              key: 0,
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(uploadedPhotos.value, (photo, idx) => {
                                  return openBlock(), createBlock(VCol, {
                                    key: idx,
                                    cols: "4",
                                    class: "position-relative"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        border: "",
                                        flat: "",
                                        class: "rounded-lg overflow-hidden ratio-square"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            src: photo.url,
                                            cover: "",
                                            class: "w-100 h-100"
                                          }, null, 8, ["src"]),
                                          createVNode(VBtn, {
                                            icon: "ri-close-line",
                                            color: "error",
                                            size: "x-small",
                                            variant: "flat",
                                            class: "photo-delete-badge",
                                            onClick: ($event) => removePhoto(idx)
                                          }, null, 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          border: "",
                          elevation: "0",
                          class: "rounded-lg pa-5 h-100 d-flex flex-column"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center justify-space-between mb-4" }, [
                              createVNode("div", { class: "d-flex align-center gap-2" }, [
                                createVNode(VAvatar, {
                                  size: "24",
                                  color: "primary",
                                  class: "text-white"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-magic-line",
                                      size: "14"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("h5", { class: "text-body-1 font-weight-medium text-high-emphasis mb-0" }, "AI Summary")
                              ]),
                              createVNode("div", { class: "d-flex align-center gap-1" }, [
                                createVNode(VIcon, {
                                  icon: "ri-time-line",
                                  size: "16",
                                  class: "text-medium-emphasis"
                                }),
                                createVNode("span", { class: "text-caption text-medium-emphasis font-weight-medium" }, toDisplayString(aiGenerationCount.value) + " AI Generation ", 1)
                              ])
                            ]),
                            createVNode(VBtn, {
                              color: "info",
                              variant: "flat",
                              rounded: "xl",
                              size: "default",
                              loading: isGeneratingAI.value,
                              onClick: generateAISummary,
                              class: "font-weight-medium text-capitalize mb-4 align-self-start"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Generate AI Summary ")
                              ]),
                              _: 1
                            }, 8, ["loading"]),
                            createVNode("div", { class: "flex-grow-1 ai-summary-box border rounded-lg pa-4 bg-light-gray" }, [
                              createVNode("p", {
                                class: ["text-body-2 mb-0", aiSummary.value ? "text-high-emphasis" : "text-medium-emphasis"]
                              }, toDisplayString(aiSummary.value || "AI Summary will shown here"), 3)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 512), [
                  [vShow, !isDetailsCollapsed.value]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (currentStep.value === 2) {
        _push(`<div class="create-journal-content-container" data-v-05d73627><div class="d-flex align-center justify-space-between mb-4" data-v-05d73627><div data-v-05d73627><h5 class="text-h5 font-weight-medium text-high-emphasis" data-v-05d73627>Review report</h5><span class="text-body-2 text-medium-emphasis" data-v-05d73627>Check the report below before sending to parents</span></div><div class="last-sent-badge px-4 py-2 rounded-pill d-flex align-center gap-2 border" data-v-05d73627>`);
        _push(ssrRenderComponent(VIcon, {
          icon: "ri-send-plane-2-line",
          size: "16",
          class: "text-primary"
        }, null, _parent));
        _push(`<span class="text-body-2 text-medium-emphasis" data-v-05d73627>Last sent time :</span><span class="text-body-2 font-weight-medium text-high-emphasis" data-v-05d73627>24 Jun 2026, 20:30</span></div></div>`);
        _push(ssrRenderComponent(VCard, {
          border: "",
          elevation: "0",
          class: "rounded-lg pa-4 bg-surface mb-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(`<div class="report-document-preview border rounded-lg d-flex flex-column align-center justify-center py-16 bg-light-gray mb-4" style="${ssrRenderStyle({ "min-height": "400px" })}" data-v-05d73627${_scopeId}><div class="pdf-icon-wrapper d-flex align-center justify-center rounded-circle bg-error-light mb-4" style="${ssrRenderStyle({ "width": "72px", "height": "72px" })}" data-v-05d73627${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                icon: "ri-file-pdf-2-line",
                size: "40",
                color: "error"
              }, null, _parent2, _scopeId));
              _push2(`</div><h4 class="text-h6 font-weight-medium text-high-emphasis mb-2" data-v-05d73627${_scopeId}>Report Preview</h4><p class="text-body-2 text-medium-emphasis text-center max-w-sm px-4" data-v-05d73627${_scopeId}> In production, the system will generate and embed the final progress report PDF here for your review. </p></div><div class="preview-card-footer d-flex align-center justify-space-between px-5 py-3 rounded-lg bg-light-gray" data-v-05d73627${_scopeId}><div class="d-flex align-center gap-3" data-v-05d73627${_scopeId}><div class="avatar-icon-box d-flex align-center justify-center rounded pa-1-5 bg-primary-light" data-v-05d73627${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                icon: "ri-user-line",
                size: "16",
                color: "primary"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="student-meta-info d-flex align-center gap-3 text-body-2" data-v-05d73627${_scopeId}><span class="font-weight-medium text-high-emphasis" data-v-05d73627${_scopeId}>${ssrInterpolate(currentStudent.value.name)}</span><span class="text-medium-emphasis" data-v-05d73627${_scopeId}>\u2022</span><span class="text-medium-emphasis" data-v-05d73627${_scopeId}>${ssrInterpolate(((_a = classSession.value) == null ? void 0 : _a.name) || "DPS-Adaptive8C")}</span><span class="text-medium-emphasis" data-v-05d73627${_scopeId}>\u2022</span><span class="text-medium-emphasis" data-v-05d73627${_scopeId}>${ssrInterpolate(currentStudent.value.bookTitle)}</span></div></div><span class="text-body-2 text-medium-emphasis" data-v-05d73627${_scopeId}> Mon, June 22, 2026 - 13:30 </span></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "report-document-preview border rounded-lg d-flex flex-column align-center justify-center py-16 bg-light-gray mb-4",
                  style: { "min-height": "400px" }
                }, [
                  createVNode("div", {
                    class: "pdf-icon-wrapper d-flex align-center justify-center rounded-circle bg-error-light mb-4",
                    style: { "width": "72px", "height": "72px" }
                  }, [
                    createVNode(VIcon, {
                      icon: "ri-file-pdf-2-line",
                      size: "40",
                      color: "error"
                    })
                  ]),
                  createVNode("h4", { class: "text-h6 font-weight-medium text-high-emphasis mb-2" }, "Report Preview"),
                  createVNode("p", { class: "text-body-2 text-medium-emphasis text-center max-w-sm px-4" }, " In production, the system will generate and embed the final progress report PDF here for your review. ")
                ]),
                createVNode("div", { class: "preview-card-footer d-flex align-center justify-space-between px-5 py-3 rounded-lg bg-light-gray" }, [
                  createVNode("div", { class: "d-flex align-center gap-3" }, [
                    createVNode("div", { class: "avatar-icon-box d-flex align-center justify-center rounded pa-1-5 bg-primary-light" }, [
                      createVNode(VIcon, {
                        icon: "ri-user-line",
                        size: "16",
                        color: "primary"
                      })
                    ]),
                    createVNode("div", { class: "student-meta-info d-flex align-center gap-3 text-body-2" }, [
                      createVNode("span", { class: "font-weight-medium text-high-emphasis" }, toDisplayString(currentStudent.value.name), 1),
                      createVNode("span", { class: "text-medium-emphasis" }, "\u2022"),
                      createVNode("span", { class: "text-medium-emphasis" }, toDisplayString(((_b = classSession.value) == null ? void 0 : _b.name) || "DPS-Adaptive8C"), 1),
                      createVNode("span", { class: "text-medium-emphasis" }, "\u2022"),
                      createVNode("span", { class: "text-medium-emphasis" }, toDisplayString(currentStudent.value.bookTitle), 1)
                    ])
                  ]),
                  createVNode("span", { class: "text-body-2 text-medium-emphasis" }, " Mon, June 22, 2026 - 13:30 ")
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
      _push(`<div class="action-footer-bar border-t d-flex align-center justify-end gap-3 py-4 bg-surface mt-6" data-v-05d73627>`);
      if (currentStep.value === 1) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(VBtn, {
          variant: "outlined",
          color: "primary",
          class: "px-6 rounded-pill",
          onClick: saveAsDraft
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Save As Draft `);
            } else {
              return [
                createTextVNode(" Save As Draft ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VBtn, {
          color: "primary",
          variant: "flat",
          class: "px-6 rounded-pill",
          onClick: saveAndContinue
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Save &amp; Continue `);
            } else {
              return [
                createTextVNode(" Save & Continue ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else if (currentStep.value === 2) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(VBtn, {
          variant: "outlined",
          color: "secondary",
          class: "px-6 rounded-pill me-auto",
          to: { path: "/attendance-detail", query: { id: classId.value } },
          "prepend-icon": "ri-arrow-left-line"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Back to list `);
            } else {
              return [
                createTextVNode(" Back to list ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VBtn, {
          variant: "outlined",
          color: "primary",
          class: "px-6 rounded-pill",
          "prepend-icon": "ri-download-line",
          onClick: downloadPDF
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Download PDF `);
            } else {
              return [
                createTextVNode(" Download PDF ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VBtn, {
          color: "primary",
          variant: "flat",
          class: "px-6 rounded-pill",
          "prepend-icon": "ri-send-plane-2-line",
          onClick: sendReport
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Send To Parent `);
            } else {
              return [
                createTextVNode(" Send To Parent ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(VDialog, {
        modelValue: showAddLessonDialog.value,
        "onUpdate:modelValue": ($event) => showAddLessonDialog.value = $event,
        "max-width": "700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "rounded-lg overflow-hidden shadow-xl bg-surface" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "px-6 pt-5 pb-3 border-b d-flex align-center justify-space-between position-relative" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-h6 font-weight-medium text-high-emphasis" data-v-05d73627${_scopeId3}>Select covered lessons</span>`);
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          color: "secondary",
                          class: "rounded-circle",
                          size: "small",
                          onClick: ($event) => showAddLessonDialog.value = false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Select covered lessons"),
                          createVNode(VBtn, {
                            icon: "ri-close-line",
                            variant: "text",
                            color: "secondary",
                            class: "rounded-circle",
                            size: "small",
                            onClick: ($event) => showAddLessonDialog.value = false
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pa-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-4" data-v-05d73627${_scopeId3}>`);
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: searchLessonQuery.value,
                          "onUpdate:modelValue": ($event) => searchLessonQuery.value = $event,
                          placeholder: "Search lessons",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          "prepend-inner-icon": "ri-search-line",
                          class: "search-lessons-input"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="lessons-selection-list" style="${ssrRenderStyle({ "max-height": "400px", "overflow-y": "auto" })}" data-v-05d73627${_scopeId3}><!--[-->`);
                        ssrRenderList(filteredAvailableLessons.value, (lesson) => {
                          _push4(`<div class="${ssrRenderClass([{ "border-primary bg-primary-light-tint": selectedLessonIds.value.includes(lesson.id) }, "lesson-select-card border rounded-lg pa-4 mb-4 d-flex align-center cursor-pointer transition-all"])}" data-v-05d73627${_scopeId3}><div class="checkbox-box me-3 flex-shrink-0 d-flex align-center justify-center" data-v-05d73627${_scopeId3}>`);
                          if (selectedLessonIds.value.includes(lesson.id)) {
                            _push4(`<div class="checkbox-checked bg-primary d-flex align-center justify-center rounded" data-v-05d73627${_scopeId3}>`);
                            _push4(ssrRenderComponent(VIcon, {
                              icon: "ri-check-line",
                              size: "14",
                              color: "white"
                            }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<div class="checkbox-unchecked rounded border-2" data-v-05d73627${_scopeId3}></div>`);
                          }
                          _push4(`</div><div class="d-flex flex-column flex-grow-1" data-v-05d73627${_scopeId3}><span class="text-body-1 font-weight-medium text-high-emphasis leading-normal" data-v-05d73627${_scopeId3}>${ssrInterpolate(lesson.title)}</span><div class="d-flex align-center flex-wrap gap-1 mt-1 text-body-2 text-medium-emphasis" data-v-05d73627${_scopeId3}>`);
                          _push4(ssrRenderComponent(VIcon, {
                            icon: lesson.statusColor === "success" ? "ri-check-line" : "ri-loader-2-line",
                            size: "12",
                            class: `text-${lesson.statusColor === "success" ? "primary" : "info"}`
                          }, null, _parent4, _scopeId3));
                          _push4(`<span class="${ssrRenderClass([`text-${lesson.statusColor === "success" ? "primary" : "info"}`, "font-weight-medium"])}" data-v-05d73627${_scopeId3}>${ssrInterpolate(lesson.progress)} ${ssrInterpolate(lesson.statusText)}</span><span class="mx-2 text-disabled" data-v-05d73627${_scopeId3}>\u2022</span><span class="text-medium-emphasis" data-v-05d73627${_scopeId3}>Score :</span><span class="font-weight-medium text-high-emphasis ms-1" data-v-05d73627${_scopeId3}>${ssrInterpolate(lesson.score > 0 ? lesson.score : "85")}</span><span class="text-medium-emphasis" data-v-05d73627${_scopeId3}>/ 100</span></div></div></div>`);
                        });
                        _push4(`<!--]-->`);
                        if (filteredAvailableLessons.value.length === 0) {
                          _push4(`<div class="text-center py-6 text-body-2 text-medium-emphasis" data-v-05d73627${_scopeId3}> No lessons match your search. </div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mb-4" }, [
                            createVNode(VTextField, {
                              modelValue: searchLessonQuery.value,
                              "onUpdate:modelValue": ($event) => searchLessonQuery.value = $event,
                              placeholder: "Search lessons",
                              variant: "outlined",
                              density: "compact",
                              "hide-details": "",
                              "prepend-inner-icon": "ri-search-line",
                              class: "search-lessons-input"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", {
                            class: "lessons-selection-list",
                            style: { "max-height": "400px", "overflow-y": "auto" }
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(filteredAvailableLessons.value, (lesson) => {
                              return openBlock(), createBlock("div", {
                                key: lesson.id,
                                class: ["lesson-select-card border rounded-lg pa-4 mb-4 d-flex align-center cursor-pointer transition-all", { "border-primary bg-primary-light-tint": selectedLessonIds.value.includes(lesson.id) }],
                                onClick: ($event) => toggleLessonSelection(lesson.id)
                              }, [
                                createVNode("div", { class: "checkbox-box me-3 flex-shrink-0 d-flex align-center justify-center" }, [
                                  selectedLessonIds.value.includes(lesson.id) ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "checkbox-checked bg-primary d-flex align-center justify-center rounded"
                                  }, [
                                    createVNode(VIcon, {
                                      icon: "ri-check-line",
                                      size: "14",
                                      color: "white"
                                    })
                                  ])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "checkbox-unchecked rounded border-2"
                                  }))
                                ]),
                                createVNode("div", { class: "d-flex flex-column flex-grow-1" }, [
                                  createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis leading-normal" }, toDisplayString(lesson.title), 1),
                                  createVNode("div", { class: "d-flex align-center flex-wrap gap-1 mt-1 text-body-2 text-medium-emphasis" }, [
                                    createVNode(VIcon, {
                                      icon: lesson.statusColor === "success" ? "ri-check-line" : "ri-loader-2-line",
                                      size: "12",
                                      class: `text-${lesson.statusColor === "success" ? "primary" : "info"}`
                                    }, null, 8, ["icon", "class"]),
                                    createVNode("span", {
                                      class: ["font-weight-medium", `text-${lesson.statusColor === "success" ? "primary" : "info"}`]
                                    }, toDisplayString(lesson.progress) + " " + toDisplayString(lesson.statusText), 3),
                                    createVNode("span", { class: "mx-2 text-disabled" }, "\u2022"),
                                    createVNode("span", { class: "text-medium-emphasis" }, "Score :"),
                                    createVNode("span", { class: "font-weight-medium text-high-emphasis ms-1" }, toDisplayString(lesson.score > 0 ? lesson.score : "85"), 1),
                                    createVNode("span", { class: "text-medium-emphasis" }, "/ 100")
                                  ])
                                ])
                              ], 10, ["onClick"]);
                            }), 128)),
                            filteredAvailableLessons.value.length === 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-center py-6 text-body-2 text-medium-emphasis"
                            }, " No lessons match your search. ")) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "px-6 py-4 bg-light-gray border-t d-flex justify-end gap-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          color: "secondary",
                          class: "px-6 rounded-pill text-capitalize",
                          onClick: ($event) => showAddLessonDialog.value = false
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
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          variant: "flat",
                          class: "px-6 rounded-pill text-capitalize",
                          onClick: confirmLessonSelection
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Confirm Selection `);
                            } else {
                              return [
                                createTextVNode(" Confirm Selection ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "secondary",
                            class: "px-6 rounded-pill text-capitalize",
                            onClick: ($event) => showAddLessonDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Close ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "flat",
                            class: "px-6 rounded-pill text-capitalize",
                            onClick: confirmLessonSelection
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Confirm Selection ")
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
                    createVNode(VCardTitle, { class: "px-6 pt-5 pb-3 border-b d-flex align-center justify-space-between position-relative" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Select covered lessons"),
                        createVNode(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          color: "secondary",
                          class: "rounded-circle",
                          size: "small",
                          onClick: ($event) => showAddLessonDialog.value = false
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "pa-6" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-4" }, [
                          createVNode(VTextField, {
                            modelValue: searchLessonQuery.value,
                            "onUpdate:modelValue": ($event) => searchLessonQuery.value = $event,
                            placeholder: "Search lessons",
                            variant: "outlined",
                            density: "compact",
                            "hide-details": "",
                            "prepend-inner-icon": "ri-search-line",
                            class: "search-lessons-input"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", {
                          class: "lessons-selection-list",
                          style: { "max-height": "400px", "overflow-y": "auto" }
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredAvailableLessons.value, (lesson) => {
                            return openBlock(), createBlock("div", {
                              key: lesson.id,
                              class: ["lesson-select-card border rounded-lg pa-4 mb-4 d-flex align-center cursor-pointer transition-all", { "border-primary bg-primary-light-tint": selectedLessonIds.value.includes(lesson.id) }],
                              onClick: ($event) => toggleLessonSelection(lesson.id)
                            }, [
                              createVNode("div", { class: "checkbox-box me-3 flex-shrink-0 d-flex align-center justify-center" }, [
                                selectedLessonIds.value.includes(lesson.id) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "checkbox-checked bg-primary d-flex align-center justify-center rounded"
                                }, [
                                  createVNode(VIcon, {
                                    icon: "ri-check-line",
                                    size: "14",
                                    color: "white"
                                  })
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "checkbox-unchecked rounded border-2"
                                }))
                              ]),
                              createVNode("div", { class: "d-flex flex-column flex-grow-1" }, [
                                createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis leading-normal" }, toDisplayString(lesson.title), 1),
                                createVNode("div", { class: "d-flex align-center flex-wrap gap-1 mt-1 text-body-2 text-medium-emphasis" }, [
                                  createVNode(VIcon, {
                                    icon: lesson.statusColor === "success" ? "ri-check-line" : "ri-loader-2-line",
                                    size: "12",
                                    class: `text-${lesson.statusColor === "success" ? "primary" : "info"}`
                                  }, null, 8, ["icon", "class"]),
                                  createVNode("span", {
                                    class: ["font-weight-medium", `text-${lesson.statusColor === "success" ? "primary" : "info"}`]
                                  }, toDisplayString(lesson.progress) + " " + toDisplayString(lesson.statusText), 3),
                                  createVNode("span", { class: "mx-2 text-disabled" }, "\u2022"),
                                  createVNode("span", { class: "text-medium-emphasis" }, "Score :"),
                                  createVNode("span", { class: "font-weight-medium text-high-emphasis ms-1" }, toDisplayString(lesson.score > 0 ? lesson.score : "85"), 1),
                                  createVNode("span", { class: "text-medium-emphasis" }, "/ 100")
                                ])
                              ])
                            ], 10, ["onClick"]);
                          }), 128)),
                          filteredAvailableLessons.value.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-center py-6 text-body-2 text-medium-emphasis"
                          }, " No lessons match your search. ")) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, { class: "px-6 py-4 bg-light-gray border-t d-flex justify-end gap-3" }, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          variant: "outlined",
                          color: "secondary",
                          class: "px-6 rounded-pill text-capitalize",
                          onClick: ($event) => showAddLessonDialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "flat",
                          class: "px-6 rounded-pill text-capitalize",
                          onClick: confirmLessonSelection
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Confirm Selection ")
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
              createVNode(VCard, { class: "rounded-lg overflow-hidden shadow-xl bg-surface" }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "px-6 pt-5 pb-3 border-b d-flex align-center justify-space-between position-relative" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Select covered lessons"),
                      createVNode(VBtn, {
                        icon: "ri-close-line",
                        variant: "text",
                        color: "secondary",
                        class: "rounded-circle",
                        size: "small",
                        onClick: ($event) => showAddLessonDialog.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-6" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-4" }, [
                        createVNode(VTextField, {
                          modelValue: searchLessonQuery.value,
                          "onUpdate:modelValue": ($event) => searchLessonQuery.value = $event,
                          placeholder: "Search lessons",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          "prepend-inner-icon": "ri-search-line",
                          class: "search-lessons-input"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", {
                        class: "lessons-selection-list",
                        style: { "max-height": "400px", "overflow-y": "auto" }
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(filteredAvailableLessons.value, (lesson) => {
                          return openBlock(), createBlock("div", {
                            key: lesson.id,
                            class: ["lesson-select-card border rounded-lg pa-4 mb-4 d-flex align-center cursor-pointer transition-all", { "border-primary bg-primary-light-tint": selectedLessonIds.value.includes(lesson.id) }],
                            onClick: ($event) => toggleLessonSelection(lesson.id)
                          }, [
                            createVNode("div", { class: "checkbox-box me-3 flex-shrink-0 d-flex align-center justify-center" }, [
                              selectedLessonIds.value.includes(lesson.id) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "checkbox-checked bg-primary d-flex align-center justify-center rounded"
                              }, [
                                createVNode(VIcon, {
                                  icon: "ri-check-line",
                                  size: "14",
                                  color: "white"
                                })
                              ])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "checkbox-unchecked rounded border-2"
                              }))
                            ]),
                            createVNode("div", { class: "d-flex flex-column flex-grow-1" }, [
                              createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis leading-normal" }, toDisplayString(lesson.title), 1),
                              createVNode("div", { class: "d-flex align-center flex-wrap gap-1 mt-1 text-body-2 text-medium-emphasis" }, [
                                createVNode(VIcon, {
                                  icon: lesson.statusColor === "success" ? "ri-check-line" : "ri-loader-2-line",
                                  size: "12",
                                  class: `text-${lesson.statusColor === "success" ? "primary" : "info"}`
                                }, null, 8, ["icon", "class"]),
                                createVNode("span", {
                                  class: ["font-weight-medium", `text-${lesson.statusColor === "success" ? "primary" : "info"}`]
                                }, toDisplayString(lesson.progress) + " " + toDisplayString(lesson.statusText), 3),
                                createVNode("span", { class: "mx-2 text-disabled" }, "\u2022"),
                                createVNode("span", { class: "text-medium-emphasis" }, "Score :"),
                                createVNode("span", { class: "font-weight-medium text-high-emphasis ms-1" }, toDisplayString(lesson.score > 0 ? lesson.score : "85"), 1),
                                createVNode("span", { class: "text-medium-emphasis" }, "/ 100")
                              ])
                            ])
                          ], 10, ["onClick"]);
                        }), 128)),
                        filteredAvailableLessons.value.length === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-center py-6 text-body-2 text-medium-emphasis"
                        }, " No lessons match your search. ")) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "px-6 py-4 bg-light-gray border-t d-flex justify-end gap-3" }, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        variant: "outlined",
                        color: "secondary",
                        class: "px-6 rounded-pill text-capitalize",
                        onClick: ($event) => showAddLessonDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Close ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "flat",
                        class: "px-6 rounded-pill text-capitalize",
                        onClick: confirmLessonSelection
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Confirm Selection ")
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
        modelValue: showExampleDialog.value,
        "onUpdate:modelValue": ($event) => showExampleDialog.value = $event,
        "max-width": "700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "rounded-lg overflow-hidden shadow-xl bg-surface" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "px-6 pt-6 pb-4 d-flex align-center justify-space-between position-relative" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-h5 font-weight-medium text-high-emphasis" data-v-05d73627${_scopeId3}>Photo Guidelines</span>`);
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          color: "secondary",
                          class: "rounded-circle",
                          size: "small",
                          onClick: ($event) => showExampleDialog.value = false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "text-h5 font-weight-medium text-high-emphasis" }, "Photo Guidelines"),
                          createVNode(VBtn, {
                            icon: "ri-close-line",
                            variant: "text",
                            color: "secondary",
                            class: "rounded-circle",
                            size: "small",
                            onClick: ($event) => showExampleDialog.value = false
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "px-6 py-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-6" data-v-05d73627${_scopeId3}><h6 class="text-body-1 font-weight-medium text-high-emphasis mb-3" data-v-05d73627${_scopeId3}>Guidelines</h6><div class="guideline-tips-box rounded-lg pa-4 bg-light-gray d-flex flex-column gap-3" data-v-05d73627${_scopeId3}><div class="d-flex align-center gap-2" data-v-05d73627${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-check-line",
                          size: "18",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="text-body-2 text-high-emphasis" data-v-05d73627${_scopeId3}> Show the student actively working or engaged in the lesson </span></div><div class="d-flex align-center gap-2" data-v-05d73627${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-check-line",
                          size: "18",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="text-body-2 text-high-emphasis" data-v-05d73627${_scopeId3}> Ensure the photo is clear and well-lit </span></div><div class="d-flex align-center gap-2" data-v-05d73627${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-check-line",
                          size: "18",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="text-body-2 text-high-emphasis" data-v-05d73627${_scopeId3}> Avoid capturing other students&#39; faces without consent </span></div></div></div><div data-v-05d73627${_scopeId3}><h6 class="text-body-1 font-weight-medium text-high-emphasis mb-3" data-v-05d73627${_scopeId3}>Example</h6>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="example-card good border rounded-xl pa-3 bg-primary-light-tint" data-v-05d73627${_scopeId5}><div class="example-img-wrapper border rounded-lg overflow-hidden ratio-4-3 mb-3" style="${ssrRenderStyle({ "border-color": "rgb(var(--v-theme-primary)) !important" })}" data-v-05d73627${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VImg, {
                                      src: "/good-photo.png",
                                      cover: "",
                                      class: "w-100 h-100"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="d-flex align-center gap-2 mb-1" data-v-05d73627${_scopeId5}><div class="status-icon-wrapper good rounded-circle bg-primary d-flex align-center justify-center" data-v-05d73627${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "ri-check-line",
                                      size: "12",
                                      color: "white"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><span class="text-body-2 font-weight-medium text-high-emphasis" data-v-05d73627${_scopeId5}>Good photo</span></div><p class="text-caption text-medium-emphasis mb-0" data-v-05d73627${_scopeId5}> Student clearly visible, well-lit, activity shown </p></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "example-card good border rounded-xl pa-3 bg-primary-light-tint" }, [
                                        createVNode("div", {
                                          class: "example-img-wrapper border rounded-lg overflow-hidden ratio-4-3 mb-3",
                                          style: { "border-color": "rgb(var(--v-theme-primary)) !important" }
                                        }, [
                                          createVNode(VImg, {
                                            src: "/good-photo.png",
                                            cover: "",
                                            class: "w-100 h-100"
                                          })
                                        ]),
                                        createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                                          createVNode("div", { class: "status-icon-wrapper good rounded-circle bg-primary d-flex align-center justify-center" }, [
                                            createVNode(VIcon, {
                                              icon: "ri-check-line",
                                              size: "12",
                                              color: "white"
                                            })
                                          ]),
                                          createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Good photo")
                                        ]),
                                        createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, " Student clearly visible, well-lit, activity shown ")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="example-card bad border rounded-xl pa-3 bg-error-light-tint" data-v-05d73627${_scopeId5}><div class="example-img-wrapper border rounded-lg overflow-hidden ratio-4-3 mb-3" style="${ssrRenderStyle({ "border-color": "rgb(var(--v-theme-error)) !important" })}" data-v-05d73627${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VImg, {
                                      src: "/bad-photo.png",
                                      cover: "",
                                      class: "w-100 h-100"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="d-flex align-center gap-2 mb-1" data-v-05d73627${_scopeId5}><div class="status-icon-wrapper bad rounded-circle bg-error d-flex align-center justify-center" data-v-05d73627${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "ri-close-line",
                                      size: "12",
                                      color: "white"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><span class="text-body-2 font-weight-medium text-error" data-v-05d73627${_scopeId5}>Bad Photo</span></div><p class="text-caption text-medium-emphasis mb-0" data-v-05d73627${_scopeId5}> Dark, blurry, or unrelated to lesson </p></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "example-card bad border rounded-xl pa-3 bg-error-light-tint" }, [
                                        createVNode("div", {
                                          class: "example-img-wrapper border rounded-lg overflow-hidden ratio-4-3 mb-3",
                                          style: { "border-color": "rgb(var(--v-theme-error)) !important" }
                                        }, [
                                          createVNode(VImg, {
                                            src: "/bad-photo.png",
                                            cover: "",
                                            class: "w-100 h-100"
                                          })
                                        ]),
                                        createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                                          createVNode("div", { class: "status-icon-wrapper bad rounded-circle bg-error d-flex align-center justify-center" }, [
                                            createVNode(VIcon, {
                                              icon: "ri-close-line",
                                              size: "12",
                                              color: "white"
                                            })
                                          ]),
                                          createVNode("span", { class: "text-body-2 font-weight-medium text-error" }, "Bad Photo")
                                        ]),
                                        createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, " Dark, blurry, or unrelated to lesson ")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "example-card good border rounded-xl pa-3 bg-primary-light-tint" }, [
                                      createVNode("div", {
                                        class: "example-img-wrapper border rounded-lg overflow-hidden ratio-4-3 mb-3",
                                        style: { "border-color": "rgb(var(--v-theme-primary)) !important" }
                                      }, [
                                        createVNode(VImg, {
                                          src: "/good-photo.png",
                                          cover: "",
                                          class: "w-100 h-100"
                                        })
                                      ]),
                                      createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                                        createVNode("div", { class: "status-icon-wrapper good rounded-circle bg-primary d-flex align-center justify-center" }, [
                                          createVNode(VIcon, {
                                            icon: "ri-check-line",
                                            size: "12",
                                            color: "white"
                                          })
                                        ]),
                                        createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Good photo")
                                      ]),
                                      createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, " Student clearly visible, well-lit, activity shown ")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "example-card bad border rounded-xl pa-3 bg-error-light-tint" }, [
                                      createVNode("div", {
                                        class: "example-img-wrapper border rounded-lg overflow-hidden ratio-4-3 mb-3",
                                        style: { "border-color": "rgb(var(--v-theme-error)) !important" }
                                      }, [
                                        createVNode(VImg, {
                                          src: "/bad-photo.png",
                                          cover: "",
                                          class: "w-100 h-100"
                                        })
                                      ]),
                                      createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                                        createVNode("div", { class: "status-icon-wrapper bad rounded-circle bg-error d-flex align-center justify-center" }, [
                                          createVNode(VIcon, {
                                            icon: "ri-close-line",
                                            size: "12",
                                            color: "white"
                                          })
                                        ]),
                                        createVNode("span", { class: "text-body-2 font-weight-medium text-error" }, "Bad Photo")
                                      ]),
                                      createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, " Dark, blurry, or unrelated to lesson ")
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mb-6" }, [
                            createVNode("h6", { class: "text-body-1 font-weight-medium text-high-emphasis mb-3" }, "Guidelines"),
                            createVNode("div", { class: "guideline-tips-box rounded-lg pa-4 bg-light-gray d-flex flex-column gap-3" }, [
                              createVNode("div", { class: "d-flex align-center gap-2" }, [
                                createVNode(VIcon, {
                                  icon: "ri-check-line",
                                  size: "18",
                                  color: "primary"
                                }),
                                createVNode("span", { class: "text-body-2 text-high-emphasis" }, " Show the student actively working or engaged in the lesson ")
                              ]),
                              createVNode("div", { class: "d-flex align-center gap-2" }, [
                                createVNode(VIcon, {
                                  icon: "ri-check-line",
                                  size: "18",
                                  color: "primary"
                                }),
                                createVNode("span", { class: "text-body-2 text-high-emphasis" }, " Ensure the photo is clear and well-lit ")
                              ]),
                              createVNode("div", { class: "d-flex align-center gap-2" }, [
                                createVNode(VIcon, {
                                  icon: "ri-check-line",
                                  size: "18",
                                  color: "primary"
                                }),
                                createVNode("span", { class: "text-body-2 text-high-emphasis" }, " Avoid capturing other students' faces without consent ")
                              ])
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("h6", { class: "text-body-1 font-weight-medium text-high-emphasis mb-3" }, "Example"),
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "example-card good border rounded-xl pa-3 bg-primary-light-tint" }, [
                                      createVNode("div", {
                                        class: "example-img-wrapper border rounded-lg overflow-hidden ratio-4-3 mb-3",
                                        style: { "border-color": "rgb(var(--v-theme-primary)) !important" }
                                      }, [
                                        createVNode(VImg, {
                                          src: "/good-photo.png",
                                          cover: "",
                                          class: "w-100 h-100"
                                        })
                                      ]),
                                      createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                                        createVNode("div", { class: "status-icon-wrapper good rounded-circle bg-primary d-flex align-center justify-center" }, [
                                          createVNode(VIcon, {
                                            icon: "ri-check-line",
                                            size: "12",
                                            color: "white"
                                          })
                                        ]),
                                        createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Good photo")
                                      ]),
                                      createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, " Student clearly visible, well-lit, activity shown ")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "example-card bad border rounded-xl pa-3 bg-error-light-tint" }, [
                                      createVNode("div", {
                                        class: "example-img-wrapper border rounded-lg overflow-hidden ratio-4-3 mb-3",
                                        style: { "border-color": "rgb(var(--v-theme-error)) !important" }
                                      }, [
                                        createVNode(VImg, {
                                          src: "/bad-photo.png",
                                          cover: "",
                                          class: "w-100 h-100"
                                        })
                                      ]),
                                      createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                                        createVNode("div", { class: "status-icon-wrapper bad rounded-circle bg-error d-flex align-center justify-center" }, [
                                          createVNode(VIcon, {
                                            icon: "ri-close-line",
                                            size: "12",
                                            color: "white"
                                          })
                                        ]),
                                        createVNode("span", { class: "text-body-2 font-weight-medium text-error" }, "Bad Photo")
                                      ]),
                                      createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, " Dark, blurry, or unrelated to lesson ")
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "px-6 py-4 bg-light-gray border-t d-flex justify-end" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          variant: "flat",
                          class: "px-8 rounded-pill text-capitalize font-weight-medium",
                          onClick: ($event) => showExampleDialog.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Got It `);
                            } else {
                              return [
                                createTextVNode(" Got It ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "flat",
                            class: "px-8 rounded-pill text-capitalize font-weight-medium",
                            onClick: ($event) => showExampleDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Got It ")
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
                    createVNode(VCardTitle, { class: "px-6 pt-6 pb-4 d-flex align-center justify-space-between position-relative" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-h5 font-weight-medium text-high-emphasis" }, "Photo Guidelines"),
                        createVNode(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          color: "secondary",
                          class: "rounded-circle",
                          size: "small",
                          onClick: ($event) => showExampleDialog.value = false
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "px-6 py-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-6" }, [
                          createVNode("h6", { class: "text-body-1 font-weight-medium text-high-emphasis mb-3" }, "Guidelines"),
                          createVNode("div", { class: "guideline-tips-box rounded-lg pa-4 bg-light-gray d-flex flex-column gap-3" }, [
                            createVNode("div", { class: "d-flex align-center gap-2" }, [
                              createVNode(VIcon, {
                                icon: "ri-check-line",
                                size: "18",
                                color: "primary"
                              }),
                              createVNode("span", { class: "text-body-2 text-high-emphasis" }, " Show the student actively working or engaged in the lesson ")
                            ]),
                            createVNode("div", { class: "d-flex align-center gap-2" }, [
                              createVNode(VIcon, {
                                icon: "ri-check-line",
                                size: "18",
                                color: "primary"
                              }),
                              createVNode("span", { class: "text-body-2 text-high-emphasis" }, " Ensure the photo is clear and well-lit ")
                            ]),
                            createVNode("div", { class: "d-flex align-center gap-2" }, [
                              createVNode(VIcon, {
                                icon: "ri-check-line",
                                size: "18",
                                color: "primary"
                              }),
                              createVNode("span", { class: "text-body-2 text-high-emphasis" }, " Avoid capturing other students' faces without consent ")
                            ])
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("h6", { class: "text-body-1 font-weight-medium text-high-emphasis mb-3" }, "Example"),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "example-card good border rounded-xl pa-3 bg-primary-light-tint" }, [
                                    createVNode("div", {
                                      class: "example-img-wrapper border rounded-lg overflow-hidden ratio-4-3 mb-3",
                                      style: { "border-color": "rgb(var(--v-theme-primary)) !important" }
                                    }, [
                                      createVNode(VImg, {
                                        src: "/good-photo.png",
                                        cover: "",
                                        class: "w-100 h-100"
                                      })
                                    ]),
                                    createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                                      createVNode("div", { class: "status-icon-wrapper good rounded-circle bg-primary d-flex align-center justify-center" }, [
                                        createVNode(VIcon, {
                                          icon: "ri-check-line",
                                          size: "12",
                                          color: "white"
                                        })
                                      ]),
                                      createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Good photo")
                                    ]),
                                    createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, " Student clearly visible, well-lit, activity shown ")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "example-card bad border rounded-xl pa-3 bg-error-light-tint" }, [
                                    createVNode("div", {
                                      class: "example-img-wrapper border rounded-lg overflow-hidden ratio-4-3 mb-3",
                                      style: { "border-color": "rgb(var(--v-theme-error)) !important" }
                                    }, [
                                      createVNode(VImg, {
                                        src: "/bad-photo.png",
                                        cover: "",
                                        class: "w-100 h-100"
                                      })
                                    ]),
                                    createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                                      createVNode("div", { class: "status-icon-wrapper bad rounded-circle bg-error d-flex align-center justify-center" }, [
                                        createVNode(VIcon, {
                                          icon: "ri-close-line",
                                          size: "12",
                                          color: "white"
                                        })
                                      ]),
                                      createVNode("span", { class: "text-body-2 font-weight-medium text-error" }, "Bad Photo")
                                    ]),
                                    createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, " Dark, blurry, or unrelated to lesson ")
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, { class: "px-6 py-4 bg-light-gray border-t d-flex justify-end" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "flat",
                          class: "px-8 rounded-pill text-capitalize font-weight-medium",
                          onClick: ($event) => showExampleDialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Got It ")
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
              createVNode(VCard, { class: "rounded-lg overflow-hidden shadow-xl bg-surface" }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "px-6 pt-6 pb-4 d-flex align-center justify-space-between position-relative" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-h5 font-weight-medium text-high-emphasis" }, "Photo Guidelines"),
                      createVNode(VBtn, {
                        icon: "ri-close-line",
                        variant: "text",
                        color: "secondary",
                        class: "rounded-circle",
                        size: "small",
                        onClick: ($event) => showExampleDialog.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "px-6 py-4" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("h6", { class: "text-body-1 font-weight-medium text-high-emphasis mb-3" }, "Guidelines"),
                        createVNode("div", { class: "guideline-tips-box rounded-lg pa-4 bg-light-gray d-flex flex-column gap-3" }, [
                          createVNode("div", { class: "d-flex align-center gap-2" }, [
                            createVNode(VIcon, {
                              icon: "ri-check-line",
                              size: "18",
                              color: "primary"
                            }),
                            createVNode("span", { class: "text-body-2 text-high-emphasis" }, " Show the student actively working or engaged in the lesson ")
                          ]),
                          createVNode("div", { class: "d-flex align-center gap-2" }, [
                            createVNode(VIcon, {
                              icon: "ri-check-line",
                              size: "18",
                              color: "primary"
                            }),
                            createVNode("span", { class: "text-body-2 text-high-emphasis" }, " Ensure the photo is clear and well-lit ")
                          ]),
                          createVNode("div", { class: "d-flex align-center gap-2" }, [
                            createVNode(VIcon, {
                              icon: "ri-check-line",
                              size: "18",
                              color: "primary"
                            }),
                            createVNode("span", { class: "text-body-2 text-high-emphasis" }, " Avoid capturing other students' faces without consent ")
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("h6", { class: "text-body-1 font-weight-medium text-high-emphasis mb-3" }, "Example"),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "example-card good border rounded-xl pa-3 bg-primary-light-tint" }, [
                                  createVNode("div", {
                                    class: "example-img-wrapper border rounded-lg overflow-hidden ratio-4-3 mb-3",
                                    style: { "border-color": "rgb(var(--v-theme-primary)) !important" }
                                  }, [
                                    createVNode(VImg, {
                                      src: "/good-photo.png",
                                      cover: "",
                                      class: "w-100 h-100"
                                    })
                                  ]),
                                  createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                                    createVNode("div", { class: "status-icon-wrapper good rounded-circle bg-primary d-flex align-center justify-center" }, [
                                      createVNode(VIcon, {
                                        icon: "ri-check-line",
                                        size: "12",
                                        color: "white"
                                      })
                                    ]),
                                    createVNode("span", { class: "text-body-2 font-weight-medium text-high-emphasis" }, "Good photo")
                                  ]),
                                  createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, " Student clearly visible, well-lit, activity shown ")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "example-card bad border rounded-xl pa-3 bg-error-light-tint" }, [
                                  createVNode("div", {
                                    class: "example-img-wrapper border rounded-lg overflow-hidden ratio-4-3 mb-3",
                                    style: { "border-color": "rgb(var(--v-theme-error)) !important" }
                                  }, [
                                    createVNode(VImg, {
                                      src: "/bad-photo.png",
                                      cover: "",
                                      class: "w-100 h-100"
                                    })
                                  ]),
                                  createVNode("div", { class: "d-flex align-center gap-2 mb-1" }, [
                                    createVNode("div", { class: "status-icon-wrapper bad rounded-circle bg-error d-flex align-center justify-center" }, [
                                      createVNode(VIcon, {
                                        icon: "ri-close-line",
                                        size: "12",
                                        color: "white"
                                      })
                                    ]),
                                    createVNode("span", { class: "text-body-2 font-weight-medium text-error" }, "Bad Photo")
                                  ]),
                                  createVNode("p", { class: "text-caption text-medium-emphasis mb-0" }, " Dark, blurry, or unrelated to lesson ")
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "px-6 py-4 bg-light-gray border-t d-flex justify-end" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "flat",
                        class: "px-8 rounded-pill text-capitalize font-weight-medium",
                        onClick: ($event) => showExampleDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Got It ")
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
        modelValue: showBackConfirmDialog.value,
        "onUpdate:modelValue": ($event) => showBackConfirmDialog.value = $event,
        "max-width": "500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "rounded-lg overflow-hidden shadow-xl bg-surface" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "px-6 pt-5 pb-3 border-b d-flex align-center justify-space-between" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-h6 font-weight-medium text-high-emphasis" data-v-05d73627${_scopeId3}>Back to detail attendance?</span>`);
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          color: "secondary",
                          class: "rounded-circle",
                          size: "small",
                          onClick: ($event) => showBackConfirmDialog.value = false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Back to detail attendance?"),
                          createVNode(VBtn, {
                            icon: "ri-close-line",
                            variant: "text",
                            color: "secondary",
                            class: "rounded-circle",
                            size: "small",
                            onClick: ($event) => showBackConfirmDialog.value = false
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "px-6 py-4 text-body-2 text-medium-emphasis" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Are you sure you want to go back? Your current progress won&#39;t be saved. If you want to keep your changes, please click the &#39;Save as Draft&#39; button below. `);
                      } else {
                        return [
                          createTextVNode(" Are you sure you want to go back? Your current progress won't be saved. If you want to keep your changes, please click the 'Save as Draft' button below. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "px-6 py-4 bg-light-gray border-t d-flex justify-end gap-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          color: "secondary",
                          class: "px-6 rounded-pill text-capitalize",
                          onClick: confirmBackNavigation
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Back `);
                            } else {
                              return [
                                createTextVNode(" Back ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          variant: "flat",
                          class: "px-6 rounded-pill text-capitalize",
                          onClick: ($event) => showBackConfirmDialog.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Stay on this page `);
                            } else {
                              return [
                                createTextVNode(" Stay on this page ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "secondary",
                            class: "px-6 rounded-pill text-capitalize",
                            onClick: confirmBackNavigation
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Back ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "flat",
                            class: "px-6 rounded-pill text-capitalize",
                            onClick: ($event) => showBackConfirmDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Stay on this page ")
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
                    createVNode(VCardTitle, { class: "px-6 pt-5 pb-3 border-b d-flex align-center justify-space-between" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Back to detail attendance?"),
                        createVNode(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          color: "secondary",
                          class: "rounded-circle",
                          size: "small",
                          onClick: ($event) => showBackConfirmDialog.value = false
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "px-6 py-4 text-body-2 text-medium-emphasis" }, {
                      default: withCtx(() => [
                        createTextVNode(" Are you sure you want to go back? Your current progress won't be saved. If you want to keep your changes, please click the 'Save as Draft' button below. ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, { class: "px-6 py-4 bg-light-gray border-t d-flex justify-end gap-3" }, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          variant: "outlined",
                          color: "secondary",
                          class: "px-6 rounded-pill text-capitalize",
                          onClick: confirmBackNavigation
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Back ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "flat",
                          class: "px-6 rounded-pill text-capitalize",
                          onClick: ($event) => showBackConfirmDialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Stay on this page ")
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
              createVNode(VCard, { class: "rounded-lg overflow-hidden shadow-xl bg-surface" }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "px-6 pt-5 pb-3 border-b d-flex align-center justify-space-between" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Back to detail attendance?"),
                      createVNode(VBtn, {
                        icon: "ri-close-line",
                        variant: "text",
                        color: "secondary",
                        class: "rounded-circle",
                        size: "small",
                        onClick: ($event) => showBackConfirmDialog.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "px-6 py-4 text-body-2 text-medium-emphasis" }, {
                    default: withCtx(() => [
                      createTextVNode(" Are you sure you want to go back? Your current progress won't be saved. If you want to keep your changes, please click the 'Save as Draft' button below. ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "px-6 py-4 bg-light-gray border-t d-flex justify-end gap-3" }, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        variant: "outlined",
                        color: "secondary",
                        class: "px-6 rounded-pill text-capitalize",
                        onClick: confirmBackNavigation
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Back ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "flat",
                        class: "px-6 rounded-pill text-capitalize",
                        onClick: ($event) => showBackConfirmDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Stay on this page ")
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
        modelValue: showUploadPhotoDialog.value,
        "onUpdate:modelValue": ($event) => showUploadPhotoDialog.value = $event,
        "max-width": "500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "rounded-lg overflow-hidden shadow-xl bg-surface" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "px-6 pt-5 pb-3 border-b d-flex align-center justify-space-between" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-h6 font-weight-medium text-high-emphasis" data-v-05d73627${_scopeId3}>Upload photo</span>`);
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          color: "secondary",
                          class: "rounded-circle",
                          size: "small",
                          onClick: ($event) => showUploadPhotoDialog.value = false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Upload photo"),
                          createVNode(VBtn, {
                            icon: "ri-close-line",
                            variant: "text",
                            color: "secondary",
                            class: "rounded-circle",
                            size: "small",
                            onClick: ($event) => showUploadPhotoDialog.value = false
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pa-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex flex-column gap-4" data-v-05d73627${_scopeId3}><div class="upload-option-card border rounded-lg pa-4 d-flex align-center cursor-pointer transition-all" data-v-05d73627${_scopeId3}><div class="upload-icon-box rounded me-3 d-flex align-center justify-center text-primary" data-v-05d73627${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-camera-line",
                          size: "24"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><span class="text-body-1 font-weight-medium text-high-emphasis flex-grow-1" data-v-05d73627${_scopeId3}> Pick from camera </span>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-arrow-right-s-line",
                          size: "20",
                          class: "text-medium-emphasis"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="upload-option-card border rounded-lg pa-4 d-flex align-center cursor-pointer transition-all" data-v-05d73627${_scopeId3}><div class="upload-icon-box rounded me-3 d-flex align-center justify-center text-primary" data-v-05d73627${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-folder-5-line",
                          size: "24"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><span class="text-body-1 font-weight-medium text-high-emphasis flex-grow-1" data-v-05d73627${_scopeId3}> Select from gallery </span>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-arrow-right-s-line",
                          size: "20",
                          class: "text-medium-emphasis"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex flex-column gap-4" }, [
                            createVNode("div", {
                              class: "upload-option-card border rounded-lg pa-4 d-flex align-center cursor-pointer transition-all",
                              onClick: triggerCameraInput
                            }, [
                              createVNode("div", { class: "upload-icon-box rounded me-3 d-flex align-center justify-center text-primary" }, [
                                createVNode(VIcon, {
                                  icon: "ri-camera-line",
                                  size: "24"
                                })
                              ]),
                              createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis flex-grow-1" }, " Pick from camera "),
                              createVNode(VIcon, {
                                icon: "ri-arrow-right-s-line",
                                size: "20",
                                class: "text-medium-emphasis"
                              })
                            ]),
                            createVNode("div", {
                              class: "upload-option-card border rounded-lg pa-4 d-flex align-center cursor-pointer transition-all",
                              onClick: triggerGalleryInput
                            }, [
                              createVNode("div", { class: "upload-icon-box rounded me-3 d-flex align-center justify-center text-primary" }, [
                                createVNode(VIcon, {
                                  icon: "ri-folder-5-line",
                                  size: "24"
                                })
                              ]),
                              createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis flex-grow-1" }, " Select from gallery "),
                              createVNode(VIcon, {
                                icon: "ri-arrow-right-s-line",
                                size: "20",
                                class: "text-medium-emphasis"
                              })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "px-6 pt-5 pb-3 border-b d-flex align-center justify-space-between" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Upload photo"),
                        createVNode(VBtn, {
                          icon: "ri-close-line",
                          variant: "text",
                          color: "secondary",
                          class: "rounded-circle",
                          size: "small",
                          onClick: ($event) => showUploadPhotoDialog.value = false
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "pa-6" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex flex-column gap-4" }, [
                          createVNode("div", {
                            class: "upload-option-card border rounded-lg pa-4 d-flex align-center cursor-pointer transition-all",
                            onClick: triggerCameraInput
                          }, [
                            createVNode("div", { class: "upload-icon-box rounded me-3 d-flex align-center justify-center text-primary" }, [
                              createVNode(VIcon, {
                                icon: "ri-camera-line",
                                size: "24"
                              })
                            ]),
                            createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis flex-grow-1" }, " Pick from camera "),
                            createVNode(VIcon, {
                              icon: "ri-arrow-right-s-line",
                              size: "20",
                              class: "text-medium-emphasis"
                            })
                          ]),
                          createVNode("div", {
                            class: "upload-option-card border rounded-lg pa-4 d-flex align-center cursor-pointer transition-all",
                            onClick: triggerGalleryInput
                          }, [
                            createVNode("div", { class: "upload-icon-box rounded me-3 d-flex align-center justify-center text-primary" }, [
                              createVNode(VIcon, {
                                icon: "ri-folder-5-line",
                                size: "24"
                              })
                            ]),
                            createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis flex-grow-1" }, " Select from gallery "),
                            createVNode(VIcon, {
                              icon: "ri-arrow-right-s-line",
                              size: "20",
                              class: "text-medium-emphasis"
                            })
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
              createVNode(VCard, { class: "rounded-lg overflow-hidden shadow-xl bg-surface" }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "px-6 pt-5 pb-3 border-b d-flex align-center justify-space-between" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-h6 font-weight-medium text-high-emphasis" }, "Upload photo"),
                      createVNode(VBtn, {
                        icon: "ri-close-line",
                        variant: "text",
                        color: "secondary",
                        class: "rounded-circle",
                        size: "small",
                        onClick: ($event) => showUploadPhotoDialog.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-6" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex flex-column gap-4" }, [
                        createVNode("div", {
                          class: "upload-option-card border rounded-lg pa-4 d-flex align-center cursor-pointer transition-all",
                          onClick: triggerCameraInput
                        }, [
                          createVNode("div", { class: "upload-icon-box rounded me-3 d-flex align-center justify-center text-primary" }, [
                            createVNode(VIcon, {
                              icon: "ri-camera-line",
                              size: "24"
                            })
                          ]),
                          createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis flex-grow-1" }, " Pick from camera "),
                          createVNode(VIcon, {
                            icon: "ri-arrow-right-s-line",
                            size: "20",
                            class: "text-medium-emphasis"
                          })
                        ]),
                        createVNode("div", {
                          class: "upload-option-card border rounded-lg pa-4 d-flex align-center cursor-pointer transition-all",
                          onClick: triggerGalleryInput
                        }, [
                          createVNode("div", { class: "upload-icon-box rounded me-3 d-flex align-center justify-center text-primary" }, [
                            createVNode(VIcon, {
                              icon: "ri-folder-5-line",
                              size: "24"
                            })
                          ]),
                          createVNode("span", { class: "text-body-1 font-weight-medium text-high-emphasis flex-grow-1" }, " Select from gallery "),
                          createVNode(VIcon, {
                            icon: "ri-arrow-right-s-line",
                            size: "20",
                            class: "text-medium-emphasis"
                          })
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
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: showToastActive.value,
        "onUpdate:modelValue": ($event) => showToastActive.value = $event,
        color: toastColor.value,
        location: "top right",
        timeout: "3000"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(toastMessage.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(toastMessage.value), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/meeting-journal/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-05d73627"]]);

export { create as default };
