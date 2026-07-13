import assert from 'node:assert/strict'

const mod = await import(new URL('./utils/auth-origin.ts', import.meta.url).href)
const { resolveAuthOrigin } = mod

assert.equal(resolveAuthOrigin('http://localhost:3000'), 'http://localhost:3000')
assert.equal(resolveAuthOrigin('https://microdemy-ds.vercel.app'), 'http://localhost:3000')
assert.equal(resolveAuthOrigin(undefined), 'http://localhost:3000')

console.log('PASS auth origin compatibility check')