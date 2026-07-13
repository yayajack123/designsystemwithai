import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware(() => {
  const { isAuth } = storeToRefs(useAuthStore())

  if (!isAuth.value) {
    return navigateTo({name: 'login'})
  }
})
