<script setup lang="ts">
import { themeConfig } from "@themeConfig";

import { VNodeRenderer } from "@layouts/components/VNodeRenderer";

import { useAuthStore } from "~/stores/auth";

const { $api } = useNuxtApp();

const userStore = useAuthStore();

const router = useRouter();

const form = ref({
  email: "demo@timedoor.net",
  password: "demo123",
  remember: false,
});

const isPasswordVisible = ref(false);

const loginLoading = ref(false)

const login = async () => {
  try {
    loginLoading.value = true

    await $api.auth.login({
      body: {
        email: form.value.email,
        password: form.value.password,
      },
    });

    const profileData = await $api.auth.getProfile();
    const permissionData = await $api.auth.getUserPermission();

    if (profileData && permissionData) {
      userStore.user = profileData.data;
      userStore.permission = permissionData.data;

      navigateTo({ name: 'index' })
    }

  } catch (error) {
    console.log(error);
  } finally {
    loginLoading.value = false
  }
};

definePageMeta({
  layout: "blank",
  middleware: ["guest"],
});
</script>

<template>
  <div class="auth-logo d-flex align-center gap-x-3">
    <VNodeRenderer :nodes="themeConfig.app.logo" />

    <h1 class="auth-title">
      {{ themeConfig.app.title }}
    </h1>
  </div>

  <VRow no-gutters class="auth-wrapper h-100">
    <VCol md="8" class="d-none d-md-flex position-relative">
      <div class="d-flex align-center justify-end w-100 h-100 pa-10 pe-0" />
    </VCol>

    <VCol cols="12" md="4" class="auth-card-v2 d-flex align-center justify-center"
      style="background-color: rgb(var(--v-theme-surface))">
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
        <VCardText>
          <h4 class="text-h4 mb-1">
            Welcome to {{ themeConfig.app.title }}! 👋🏻
          </h4>
          <p class="mb-0">
            Please sign-in to your account and start the adventure
          </p>
        </VCardText>
        <VCardText>
          <VForm @submit.prevent="login">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <VTextField v-model="form.email" autofocus label="Email" type="email" placeholder="johndoe@email.com" />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VTextField v-model="form.password" label="Password" placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'" :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'
                    " @click:append-inner="isPasswordVisible = !isPasswordVisible" />

                <VBtn class="mt-5" block :loading="loginLoading" type="submit"> Login </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
