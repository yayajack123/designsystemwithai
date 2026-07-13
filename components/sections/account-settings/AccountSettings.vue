<script setup lang="ts">
import type { UiAutoCompleteCallbackResponse } from '@/components/ui/UiAutoComplete.vue'
import { useValidation } from '@/composables/starter/useValidation'
import { useAuthStore } from '@/stores/auth'
import { profileValidations } from '@/validations/account-settings'

const authStore = useAuthStore()

const { $api } = useNuxtApp()

const inputs = ref({
  name: '',
  email: '',
  role: null,
})

onMounted(() => {
  // Set initial values from auth store
  inputs.value.name = authStore.user?.name || ''
  inputs.value.email = authStore.user?.email || ''
  inputs.value.role = authStore.user?.role || null
})

const {
  errors,
  isError,
  resetForm,
  validate,
} = useValidation(inputs, {
  schema: profileValidations,
})

const roles = ref([])

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

const fetchProfile = async () => {
  const { data: profileData } = await $api.profile.getProfile()

  if (profileData.value) {
    const profile = profileData.value.data

    inputs.value = {
      avatarImg: profile.photo,
      name: profile.name,
      email: profile.email,
      role: profile.role,
    }
  }
}

const fetchRole = async () => {
  const { data: roleData } = await $api.auth.getRole()

  if (roleData.value) {
    const role = roleData.value.data

    const mappedRole = role.map((r: any) => r.name)

    roles.value = mappedRole
  }
}

await fetchProfile()
await fetchRole()

const isConfirmDialogOpen = ref(false)

const onSubmit = async () => {
  // Validate all inputs before submit
  await validate()

  // If error exist return null
  if (!isError.value) {
    await $api.profile.updateProfile({
      body: {
        name: inputs.value.name,
      },
    })
  }

  // Your Logic when data is valid
  console.log('Form submitted successfully!')
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <VCard class="mb-5">
      <VCardItem class="pb-6">
        <VCardTitle>Edit Profile</VCardTitle>
      </VCardItem>
      <VCardText>
        <!-- 👉 Form -->
        <VRow>
          <!-- 👉 Name -->
          <VCol cols="12">
            <VTextField
              v-model="inputs.name"
              placeholder="John"
              label="Name"
              :error-messages="errors.name"
            />
          </VCol>

          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="6"
          >
            <VTextField
              v-model="inputs.email"
              label="E-mail"
              type="email"
              :error-messages="errors.email"
            />
          </VCol>

          <!-- 👉 Role -->
          <VCol
            cols="12"
            md="6"
          >
            <UiAutoComplete
              v-model="inputs.role"
              disabled
              label="Role"
              :callback="fetchRoleData"
              :error-messages="errors.role"
              item-title="name"
              item-value="id"
              placeholder="Select Role"
            />
          </VCol>

          <!-- 👉 Form Actions -->
          <VCol
            cols="12"
            class="d-flex flex-wrap gap-4 justify-end"
          >
            <VBtn
              color="secondary"
              variant="outlined"
              type="reset"
              @click.prevent="resetForm"
            >
              Reset Inputs
            </VBtn>
            <VBtn type="submit">
              Save changes
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </form>

  <!-- Confirm Dialog -->
  <Teleport to="body">
    <ConfirmDialog
      v-model:isDialogVisible="isConfirmDialogOpen"
      confirmation-question="Are you sure you want to deactivate your account?"
      confirm-title="Deactivated!"
      confirm-msg="Your account has been deactivated successfully."
      cancel-title="Cancelled"
      cancel-msg="Account Deactivation Cancelled!"
    />
  </Teleport>
</template>
