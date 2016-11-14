import Gitbook from './gitbook-info'
import path from 'path'
import table from 'markdown-table'

export default async function generateIndex () {
  const ghPath = path.resolve(__dirname, '..', require('../book.json').root)
  let gitbook = new Gitbook(ghPath)
  await gitbook.read()
  let tb = table([
    ['Branch', 'Commit'],
    ['master', '0123456789abcdef'],
    ['staging', 'fedcba9876543210']
  ]);
  console.log(tb)
  console.log(table(toArr(gitbook)))
}

function toArr (gitbook) {
  let headers = ['Título', 'Autor', 'Directorio', 'Fecha', 'Enlace']
  let all = gitbook.chapters.map(chapterToArr)
  all.unshift(headers)
  return all
}

function chapterToArr (chapt) {
  return [chapt.title,
    chapt.author,
    `\`txt/${chapt.directory}\``,
    chapt.fecha,
    `[Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/${chapt.directory})`
  ]
}
