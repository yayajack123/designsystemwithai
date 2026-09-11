import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware(() => {
  const config = useRuntimeConfig()

  if (!config.public.authEnabled)
    return navigateTo('/')

  const { isAuth } = storeToRefs(useAuthStore())

  if (isAuth.value) {
    return navigateTo('/')
  }
})
