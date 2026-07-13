<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

import type { UiAutoCompleteCallbackResponse } from '@/components/ui/UiAutoComplete.vue'
import { useValidation } from '@/composables/starter/useValidation'
import { createAccountValidations } from '@/validations/account-settings'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    default: false,
  },
  roleList: {
    type: Array,
    default: () => ([]),
  },
})

const emit = defineEmits(['update:isDrawerOpen', 'userData'])
const { $api } = useNuxtApp()

const inputs = ref({
  name: '',
  email: '',
  role: null,
  password: '',
  passwordConfirmation: '',
})

const {
  errors,
  isError,
  resetForm,
  validate,
} = useValidation(inputs, {
  schema: createAccountValidations,
})

const isPasswordVisible = ref(false)
const isPasswordConfirmationVisible = ref(false)

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)

  nextTick(() => {
    resetForm()
  })
}

const fetchRoleData = async (): Promise<UiAutoCompleteCallbackResponse> => {
  const response = await $api.auth.getRole()

  return {
    data: response.data.map((role: any) => ({
      id: role.id,
      name: role.name,
    })),
    meta: response.meta,
  }
}

const onSubmit = async () => {
  await validate()

  if (isError.value)
    return

  emit('userData', {
    id: 0,
    name: inputs.value.name,
    email: inputs.value.email,
    role: inputs.value.role,
    password: inputs.value.password,
    passwordConfirmation: inputs.value.passwordConfirmation,
  })

  emit('update:isDrawerOpen', false)

  await nextTick()
  resetForm()
}

const handleDrawerModelValueUpdate = (val: boolean) => {
  emit('update:isDrawerOpen', val)
}
</script>

<template>
  <VNavigationDrawer
    temporary
    :width="400"
    location="end"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Title -->
    <AppDrawerHeaderSection
      title="Add User"
      @cancel="closeNavigationDrawer"
    />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <form @submit.prevent="onSubmit">
            <VRow>
              <!-- 👉 Full name -->
              <VCol cols="12">
                <VTextField
                  v-model="inputs.name"
                  :error-messages="errors.name"
                  label="Full Name"
                  placeholder="John Doe"
                />
              </VCol>

              <!-- 👉 Email -->
              <VCol cols="12">
                <VTextField
                  v-model="inputs.email"
                  :error-messages="errors.email"
                  label="Email"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <!-- 👉 Role -->
              <VCol cols="12">
                <UiAutoComplete
                  v-model="inputs.role"
                  label="Role"
                  :callback="fetchRoleData"
                  :error-messages="errors.role"
                  item-title="name"
                  item-value="id"
                  placeholder="Select Role"
                />
              </VCol>

              <!-- 👉 Password -->
              <VCol cols="12">
                <VTextField
                  v-model="inputs.password"
                  :error-messages="errors.password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  label="Password"
                  autocomplete="on"
                  placeholder="············"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <!-- 👉 Password Confirmation -->
              <VCol cols="12">
                <VTextField
                  v-model="inputs.passwordConfirmation"
                  :error-messages="errors.passwordConfirmation"
                  :type="isPasswordConfirmationVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordConfirmationVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  autocomplete="on"
                  label="Confirm Password"
                  placeholder="············"
                  @click:append-inner="isPasswordConfirmationVisible = !isPasswordConfirmationVisible"
                />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-4"
                >
                  Submit
                </VBtn>
                <VBtn
                  type="reset"
                  variant="outlined"
                  color="error"
                  @click="closeNavigationDrawer"
                >
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </form>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
