import { defineComponent, mergeModels, useModel, ref, watch, nextTick, useAttrs, resolveComponent, mergeProps, unref, isRef, withCtx, createBlock, createCommentVNode, createTextVNode, openBlock, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { r as refDebounced, b as VProgressCircular } from './server.mjs';
import { V as VAutocomplete } from './VAutocomplete-sPCSJtya.mjs';
import { a as VListItem, b as VListItemTitle } from './VList-BNtS0p6J.mjs';
import { ValidationError, object, string, mixed, ref as ref$1 } from 'yup';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiAutoComplete",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    callback: { type: Function }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const modelValue = useModel(__props, "modelValue");
    const UiAutoCompleteRef = ref();
    const search = ref("");
    const items = ref([]);
    const isLoading = ref(false);
    const isOpen = ref(false);
    const debounceSearch = refDebounced(search, 500);
    const page = ref(1);
    const hasNextPage = ref(false);
    const fetchData = async () => {
      try {
        const response = await props.callback({ search: search.value, page: page.value });
        const { data, meta } = response;
        if (meta)
          hasNextPage.value = meta.last_page > meta.current_page;
        items.value.push(...data);
      } catch (error) {
        console.error(error);
      } finally {
        isLoading.value = false;
      }
    };
    const onScroll = async (e) => {
      const el = e.target;
      const scrollToBottom = el.scrollTop + el.clientHeight >= el.scrollHeight;
      if (scrollToBottom && hasNextPage.value) {
        page.value++;
        await fetchData();
      }
    };
    const onMenuOpen = async (status) => {
      isOpen.value = status;
      if (!status)
        return;
      items.value = [];
      page.value = 1;
      await fetchData();
      if (UiAutoCompleteRef.value) {
        const menuContent = UiAutoCompleteRef.value.querySelector(".v-list");
        if (menuContent)
          menuContent.addEventListener("scroll", onScroll);
      }
    };
    watch(debounceSearch, async () => {
      if (isOpen.value) {
        items.value = [];
        page.value = 1;
        await fetchData();
      }
    }, { deep: true });
    watch(modelValue, async () => {
      var _a, _b;
      if (!modelValue.value) {
        (_a = UiAutoCompleteRef.value) == null ? void 0 : _a.focus();
        await nextTick();
        (_b = UiAutoCompleteRef.value) == null ? void 0 : _b.blur();
      }
    });
    const attrs = useAttrs();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VListItemContent = resolveComponent("VListItemContent");
      _push(ssrRenderComponent(VAutocomplete, mergeProps({
        ref_key: "UiAutoCompleteRef",
        ref: UiAutoCompleteRef,
        modelValue: modelValue.value,
        "onUpdate:modelValue": ($event) => modelValue.value = $event,
        search: unref(search),
        "onUpdate:search": ($event) => isRef(search) ? search.value = $event : null
      }, unref(attrs), {
        items: unref(items),
        "onUpdate:menu": onMenuOpen
      }, _attrs), {
        "no-data": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VListItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VListItemContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItemTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (unref(isLoading)) {
                                _push5(ssrRenderComponent(VProgressCircular, {
                                  indeterminate: "",
                                  size: 20
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(` ${ssrInterpolate(unref(isLoading) ? "Loading..." : "No data available")}`);
                            } else {
                              return [
                                unref(isLoading) ? (openBlock(), createBlock(VProgressCircular, {
                                  key: 0,
                                  indeterminate: "",
                                  size: 20
                                })) : createCommentVNode("", true),
                                createTextVNode(" " + toDisplayString(unref(isLoading) ? "Loading..." : "No data available"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              unref(isLoading) ? (openBlock(), createBlock(VProgressCircular, {
                                key: 0,
                                indeterminate: "",
                                size: 20
                              })) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(unref(isLoading) ? "Loading..." : "No data available"), 1)
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
                    createVNode(_component_VListItemContent, null, {
                      default: withCtx(() => [
                        createVNode(VListItemTitle, null, {
                          default: withCtx(() => [
                            unref(isLoading) ? (openBlock(), createBlock(VProgressCircular, {
                              key: 0,
                              indeterminate: "",
                              size: 20
                            })) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(unref(isLoading) ? "Loading..." : "No data available"), 1)
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
              createVNode(VListItem, null, {
                default: withCtx(() => [
                  createVNode(_component_VListItemContent, null, {
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          unref(isLoading) ? (openBlock(), createBlock(VProgressCircular, {
                            key: 0,
                            indeterminate: "",
                            size: 20
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(unref(isLoading) ? "Loading..." : "No data available"), 1)
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/UiAutoComplete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useValidation = (inputs, configs) => {
  const { schema } = configs;
  const errors = ref({});
  const isError = ref(false);
  const initialState = ref({});
  const dirty = ref(false);
  const dirtyInputs = ref({});
  const resetForm = async (data, withInitialValue = true) => {
    if (withInitialValue)
      inputs.value = JSON.parse(JSON.stringify(initialState.value));
    if (data) {
      for (const key in data)
        inputs.value[key] = data[key];
    }
    await nextTick();
    errors.value = {};
    isError.value = false;
    dirtyInputs.value = {};
    dirty.value = false;
  };
  const errorMapper = (errorList) => {
    const partial = () => {
      errors.value = {};
      errorList.inner.forEach((item) => {
        if (item.path && dirtyInputs.value[item.path]) {
          isError.value = true;
          errors.value[item.path] = item.errors[0];
        }
      });
    };
    const all = () => {
      errors.value = {};
      for (const key in dirtyInputs.value)
        dirtyInputs.value[key] = true;
      errorList.inner.forEach((item) => {
        if (item.path) {
          isError.value = true;
          errors.value[item.path] = item.errors[0];
        }
      });
    };
    return {
      partial,
      all
    };
  };
  const validate = async () => {
    try {
      await schema.validate(inputs.value, {
        abortEarly: false,
        strict: false
      });
      isError.value = false;
      errors.value = {};
    } catch (error) {
      if (error instanceof ValidationError)
        errorMapper(error).all();
      else
        console.error(error);
    }
    await nextTick();
  };
  watch(
    inputs,
    async (newValue) => {
      try {
        dirty.value = true;
        for (const key in newValue) {
          if (newValue[key] !== initialState.value[key])
            dirtyInputs.value[key] = true;
        }
        await schema.validate(newValue, {
          abortEarly: false,
          strict: false
        });
        isError.value = false;
        errors.value = {};
      } catch (error) {
        if (error instanceof ValidationError)
          errorMapper(error).partial();
        else
          console.error(error);
      }
    },
    { deep: true }
  );
  return {
    // variables
    errors,
    isError,
    dirty,
    dirtyInputs,
    // functions
    resetForm,
    validate
  };
};
const validateFileSize = (maxSize) => {
  return (file) => {
    if (!file)
      return true;
    if (file instanceof File)
      return false;
    return file.size <= maxSize * 1024;
  };
};
const profileValidations = object({
  email: string().email().required().label("Email"),
  name: string().required().label("Name"),
  role: string().required().label("Role")
});
const accountValidations = object({
  avatarImg: mixed().test(
    "fileSize",
    "File too big, can't exceed 800KB",
    validateFileSize(800)
  ).label("Avatar Image"),
  email: string().email().required().label("Email"),
  name: string().required().label("Name"),
  role: string().required().label("Role")
});
const createAccountValidations = object({
  avatarImg: mixed().test(
    "fileSize",
    "File too big, can't exceed 800KB",
    validateFileSize(800)
  ).label("Avatar Image"),
  email: string().email().required().label("Email"),
  name: string().required().label("Name"),
  role: string().required().label("Role"),
  password: string().required().label("Password"),
  passwordConfirmation: string().required().label("Confirm Password").oneOf(
    [ref$1("password"), ""],
    "Passwords must match"
  )
});
const changePasswordValidations = object({
  currentPassword: string().required().label("Current Password"),
  newPassword: string().required().label("New Password"),
  confirmPassword: string().required().oneOf([ref$1("newPassword"), ""], "Passwords must match").label("Confirm Password")
});

export { _sfc_main as _, accountValidations as a, changePasswordValidations as b, createAccountValidations as c, profileValidations as p, useValidation as u };
