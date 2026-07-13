export interface User {
  id: number | null
  email: string
  name: string
  photo: string
  role: string
}

export interface Permission {
  name: string
  slug: string
}

export interface ResponseFormat<T> {
  links?: any
  data: T
  meta: any
}
