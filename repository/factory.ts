import { defu } from 'defu'
import type { UseFetchOptions } from 'nuxt/app'
import { resolveAuthOrigin } from '~/utils/auth-origin'

class FetchFactory<T> {
  async call(url: MaybeRefOrGetter<string>, options: UseFetchOptions<T> = {}): Promise<T> {
    const clientCookies = useRequestHeaders(['cookie', 'origin'])

    const headers: any = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...clientCookies,
    }

    headers.Origin = resolveAuthOrigin(headers.origin)

    delete headers.origin

    if (options.method !== 'GET') {
      await $fetch('/api/sanctum/csrf-cookie', {
        method: 'GET',
        headers,
      })
    }

    const XSRF_TOKEN = useCookie('XSRF-TOKEN')

    if (XSRF_TOKEN.value)
      headers['X-Xsrf-Token'] = XSRF_TOKEN.value

    const defaults: UseFetchOptions<T> = {
      key: toValue(url),
      headers,
    }

    const params = defu(options, defaults)

    try {
      return await $fetch<T>(toValue(url), params as any)
    }
    catch (error) {
      throw error
    }
  }
}

export default FetchFactory
