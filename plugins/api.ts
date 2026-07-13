// Import repository modules
import AdminModule from '~/repository/modules/admin'
import AuthModule from '~/repository/modules/auth'
import ProfileModule from '~/repository/modules/profile'

export interface IApiInstance {
  auth: AuthModule
  profile: ProfileModule
  admin: AdminModule
}

export default defineNuxtPlugin(() => {
  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    auth: new AuthModule(),
    profile: new ProfileModule(),
    admin: new AdminModule(),
  }

  return {
    provide: {
      api: modules,
    },
  }
})
