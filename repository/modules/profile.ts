import FetchFactory from '../factory'

interface IUpdateProfile {
  body: {
    name: string
  }
}

interface IChangePassword {
  body: {
    current_password: string
    new_password: string
    new_password_confirmation: string
  }
}

class ProfileModule extends FetchFactory<any> {
  getProfile() {
    return super.call('/api/user/profile', {
      method: 'GET',
    })
  }

  updateProfile(payload: IUpdateProfile) {
    const { body } = payload

    return super.call('/api/user/profile', {
      method: 'PATCH',
      body,
    })
  }

  changePassword(payload: IChangePassword) {
    const { body } = payload

    return super.call('/api/user/password', {
      method: 'POST',
      body,
    })
  }
}

export default ProfileModule
