export function resolveAuthOrigin(origin?: string) {
  if (origin === 'http://localhost:3000') {
    return origin
  }

  return 'http://localhost:3000'
}