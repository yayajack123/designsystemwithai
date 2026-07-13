<script setup lang="ts">
import { useValidation } from '@/composables/starter/useValidation'
import { changePasswordValidations } from '@/validations/account-settings'

const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)

const passwordRequirements = [
  'At least one lowercase character',
  'At least one number (0-9)',
  'Minimum 8 characters long',
]

const inputs = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
})

const {
  errors,
  isError,
  resetForm,
  validate,
} = useValidation(inputs, {
  schema: changePasswordValidations,
})

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
      <VCardItem class="pb-6">
        <VCardTitle>Change Password</VCardTitle>
      </VCardItem>
      <VCardText class="pt-0">
        <!-- 👉 Current Password -->
        <VRow>
          <VCol
            cols="12"
            md="6"
          >
            <!-- 👉 current password -->
            <VTextField
              v-model="inputs.currentPassword"
              :type="isCurrentPasswordVisible ? 'text' : 'password'"
              :append-inner-icon="isCurrentPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
              autocomplete="on"
              label="Current Password"
              placeholder="············"
              :error-messages="errors.currentPassword"
              @click:append-inner="isCurrentPasswordVisible = !isCurrentPasswordVisible"
            />
          </VCol>
        </VRow>

        <!-- 👉 New Password -->
        <VRow>
          <VCol
            cols="12"
            md="6"
          >
            <!-- 👉 new password -->
            <VTextField
              v-model="inputs.newPassword"
              :type="isNewPasswordVisible ? 'text' : 'password'"
              :append-inner-icon="isNewPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
              label="New Password"
              autocomplete="on"
              placeholder="············"
              :error-messages="errors.newPassword"
              @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
            />
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <!-- 👉 confirm password -->
            <VTextField
              v-model="inputs.confirmPassword"
              :type="isConfirmPasswordVisible ? 'text' : 'password'"
              :append-inner-icon="isConfirmPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
              autocomplete="on"
              label="Confirm New Password"
              placeholder="············"
              :error-messages="errors.confirmPassword"
              @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
            />
          </VCol>
        </VRow>
      </VCardText>

      <!-- 👉 Password Requirements -->
      <VCardText>
        <h6 class="text-h6 text-medium-emphasis mt-1">
          Password Requirements:
        </h6>

        <VList>
          <VListItem
            v-for="(item, index) in passwordRequirements"
            :key="index"
            class="px-0"
          >
            <template #prepend>
              <VIcon
                size="8"
                icon="ri-circle-fill"
                color="rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"
              />
            </template>
            <VListItemTitle class="text-medium-emphasis text-wrap">
              {{ item }}
            </VListItemTitle>
          </VListItem>
        </VList>

        <!-- 👉 Action Buttons -->
        <div class="d-flex flex-wrap gap-4 justify-end">
          <VBtn
            color="secondary"
            variant="outlined"
            type="reset"
            @click.prevent="resetForm"
          >
            Reset Inputs
          </VBtn>
          <VBtn type="submit">
            Change Password
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </form>
</template>
