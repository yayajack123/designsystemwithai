import { defineStore } from 'pinia'
import type { Permission, User } from '~/types/index'

export const useAuthStore = defineStore('auth', () => {
  const user:Ref<User | null> = ref(null)
  const role:Ref<string[]> = ref([])
  const permission:Ref<Permission[]> = ref([])

  const isAuth = computed(() => {
    return !!user.value
  })

  const userPermission = computed(() => {
    return permission.value.map(p => p.slug)
  })

  return {
    user,
    role,
    permission,
    isAuth,
    userPermission
  }
})
