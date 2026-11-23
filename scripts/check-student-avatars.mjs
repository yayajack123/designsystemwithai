import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

const roots = ['pages', 'components']
const violations = []

async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) {
      await inspect(path)
      continue
    }
    if (!entry.isFile() || !path.endsWith('.vue')) continue

    const source = await readFile(path, 'utf8')
    for (const match of source.matchAll(/<VAvatar\b[^>]*>[\s\S]*?<\/VAvatar>/g)) {
      if (!/\b(?:student\.initials|studentInitials|avatarText\(student\.)/.test(match[0])) continue
      const line = source.slice(0, match.index).split('\n').length
      violations.push(`${path}:${line}`)
    }
  }
}

for (const root of roots) await inspect(root)

if (violations.length) {
  console.error('Student initials must use UiStudentAvatar:')
  console.error(violations.join('\n'))
  process.exitCode = 1
}
else {
  console.log('No direct student-initial avatars found.')
}
