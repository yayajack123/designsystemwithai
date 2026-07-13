import FetchFactory from '../factory'

interface IList {
  query?: {
    page?: string | number
    limit?: string | number
    search?: string
  }
}

interface IDetail {
  params: {
    id: number
  }
}

interface IStore {
  body: {
    name: string
    email: string
    role: string
    password: string
    password_confirmation: string
  }
}

interface IUpdate {
  params: {
    id: number
  }
  body: {
    name: string
    role: string
  }
}

interface IDelete {
  params: {
    id: number
  }
}

class AdminModule extends FetchFactory<any> {
  list(payload: IList) {
    const { query } = payload

    return super.call('/api/admin', {
      method: 'GET',
      query,
    })
  }

  detail(payload: IDetail) {
    const { params } = payload

    return super.call(`/api/admin/${params.id}`, {
      method: 'GET',
    })
  }

  store(payload: IStore) {
    const { body } = payload

    return super.call('/api/admin', {
      method: 'POST',
      body,
    })
  }

  update(payload: IUpdate) {
    const { params, body } = payload

    return super.call(`/api/admin/${params.id}`, {
      method: 'PATCH',
      body,
    })
  }

  delete(payload: IDelete) {
    const { params } = payload

    return super.call(`/api/admin/${params.id}`, {
      method: 'DELETE',
    })
  }
}

export default AdminModule
