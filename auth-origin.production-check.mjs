import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const files = [
  'repository/factory.ts',
  'plugins/check-auth.server.ts',
]

for (const file of files) {
  const source = readFileSync(new URL(file, import.meta.url), 'utf8')

  assert.ok(
    !source.includes('Origin: appBaseUrl') && !source.includes("'Origin': appBaseUrl"),
    `${file} hardcodes Origin from APP_BASE_URL; production requests must use the real request origin`,
  )
}

console.log('PASS auth origin production check')