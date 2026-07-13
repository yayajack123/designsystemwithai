import { storeToRefs } from 'pinia'
import route from '~/permission/route'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware(to => {
  const { userPermission } = storeToRefs(useAuthStore())

  const currentRoute = route.find((r: any) => r.name === to.name)

  if (currentRoute && !userPermission.value.includes(currentRoute.permission)) {
    return navigateTo('/')
  }
})
