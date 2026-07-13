import FetchFactory from '../factory'

interface ILogin {
  body: {
    email: string
    password: string
  }
}

interface ICheckPermission {
  body: {
    permissions: string[]
  }
}

class AuthModule extends FetchFactory<any> {
  login(payload: ILogin) {
    const { body } = payload

    return super.call('/api/auth/login', {
      method: 'POST',
      body,
    })
  }

  getProfile() {
    return super.call('/api/auth/me', {
      method: 'GET',
    })
  }

  getRole() {
    return super.call('/api/auth/role', {
      method: 'GET',
    })
  }

  getUserPermission() {
    return super.call('/api/auth/permission', {
      method: 'GET',
    })
  }

  checkPermission(payload: ICheckPermission) {
    const { body } = payload

    return super.call('/api/auth/permission/check', {
      method: 'POST',
      body,
    })
  }

  logout() {
    return super.call('/api/auth/logout', {
      method: 'DELETE',
    })
  }
}

export default AuthModule
