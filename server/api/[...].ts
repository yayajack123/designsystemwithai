import { joinURL } from 'ufo'

export default defineEventHandler(async event => {
  const config = useRuntimeConfig()
  const apiBaseUrl = config.public.apiBaseUrl
  const sanctumBaseUrl = config.public.sanctumBaseUrl

  let path = ''
  let target = ''

  if (event.path.includes('/api/sanctum')) {
    path = event.path.replace(/^\/api\/sanctum\//, '/')
    target = joinURL(sanctumBaseUrl, path)
  } else if (event.path.includes('/api')) {
    path = event.path.replace(/^\/api\//, '/')
    target = joinURL(apiBaseUrl, path)
  }

  return proxyRequest(event, target, {
    headers: {
      'Accept-Encoding': 'gzip, deflate, br',
    },
  })
})
