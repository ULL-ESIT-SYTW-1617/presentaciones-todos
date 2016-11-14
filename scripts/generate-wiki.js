import fsp from 'fs-promise'
import path from 'path'

async function copyFiles (input, output) {
  await fsp.copy(input, output)
  await fsp.copy(path.join(input, 'README.md'), path.join(output, 'Home.md'))
  await generateSidebar(path.join(input, 'SUMMARY.md'), path.join(output, '_Sidebar.md'))
  await Promise.all([
    fsp.remove(path.join(output, 'README.md')),
    fsp.remove(path.join(output, 'SUMMARY.md'))
  ])
}

async function generateSidebar (input, output) {
  let data = await fsp.readFile(input, 'utf8')
  data = data.replace(/.md/g, '')
  await fsp.writeFile(output, data)
}

export default async function generateWiki () {
  let output = './wiki'
  try {
    await fsp.mkdir(output)
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
  await copyFiles(require('../book.json').root, output)
}
