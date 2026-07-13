<script setup lang="ts">
import type { UiAutoCompleteCallbackResponse } from '@/components/ui/UiAutoComplete.vue';
import { useValidation } from '@/composables/starter/useValidation';
import { accountValidations } from '@/validations/account-settings';
import AVATAR_1 from '@images/avatars/avatar-1.png';

const { $api } = useNuxtApp()

const inputs = ref({
  avatarImg: '',
  name: '',
  email: '',
  role: null,
})

const {
  errors,
  isError,
  resetForm,
  validate,
} = useValidation(inputs, {
  schema: accountValidations,
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

const refInputEl = ref<HTMLElement>()

const isConfirmDialogOpen = ref(false)

// changeAvatar function
const changeAvatar = (file: Event) => {
  const fileReader = new FileReader()
  const { files } = file.target as HTMLInputElement

  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        inputs.value.avatarImg = fileReader.result
    }
  }
}

const onSubmit = async () => {
  // Validate all inputs before submit
  await validate()

  // If error exist return null
  if (isError.value)
    return

  // Your Logic when data is valid
  console.log('Form submitted successfully!')

  // Reset Form
  resetForm()

  // or Reset Form with initial value
  // resetForm({
  //   first_name: 'John',
  //   last_name: 'Doe',
  // })
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <VCard class="mb-5">
      <VCardText>
        <div class="">
          <!-- 👉 Avatar -->
          <VImg
            aspect-ratio="1/1"
            cover
            :src="inputs.avatarImg || AVATAR_1"
            :class="{ 'invalid-border': errors.avatarImg }"
            rounded
            class="mb-4"
        />

          <!-- 👉 Upload Photo -->
          <div class="d-flex flex-column justify-center gap-4">
            <div class="d-flex flex-wrap gap-4">
              <VBtn
                block
                color="primary"
                variant="outlined"
                @click="refInputEl?.click()"
              >
                <VIcon
                  icon="ri-upload-cloud-line"
                  start
                />
                <span class="d-none d-sm-block">Upload new photo</span>
              </VBtn>
              <input
                ref="refInputEl"
                type="file"
                name="file"
                accept=".jpeg,.png,.jpg"
                hidden
                @input="changeAvatar"
              >
            </div>
            <div>
              <p class="text-body-1 mb-0 text-center">
                Allowed JPG or PNG.<br/>Max size of 800K
              </p>
              <p
                v-if="errors.avatarImg"
                class="text-error mb-0"
              >
                <small>{{ errors.avatarImg }}</small>
              </p>
            </div>
          </div>
        </div>
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
