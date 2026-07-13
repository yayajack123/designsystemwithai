import type { Pinia } from 'pinia'
import { useAuthStore } from '~/stores/auth'
import { resolveAuthOrigin } from '~/utils/auth-origin'

export default defineNuxtPlugin(async ({ $pinia }) => {
  const authStore = useAuthStore($pinia as Pinia)
  const XSRF_TOKEN = useCookie('XSRF-TOKEN')
  const clientCookies = useRequestHeaders(['cookie', 'origin'])

  const headers = {
    Accept: 'application/json',
    ...clientCookies,
  } as Record<string, string>

  headers.Origin = resolveAuthOrigin(headers.origin)

  delete headers.origin

  const getProfile = async () => {
    if (!XSRF_TOKEN.value) {
      return
    }
    const profileData = await $fetch('/api/auth/me', {
      headers,
    })

    const permissionData = await $fetch('/api/auth/permission', {
      headers,
    })

    if (profileData && permissionData) {
      authStore.user = profileData.data;
      authStore.permission = permissionData.data;
    }
  }

  await getProfile()
})
