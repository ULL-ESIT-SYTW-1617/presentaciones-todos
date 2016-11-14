import { series, parallel, src } from 'gulp'
import gclean from 'gulp-clean'
import mdlint from 'markdownlint'
import through2 from 'through2'
import path from 'path'
import plugins from './plugins.json'

// Sacar la tabla que está en el README.md
export { default as generateTable } from './scripts/generate-table'
// Generar el SUMMARY.md
export { default as index } from './scripts/generate-index'

// Refrescar el fichero contributors
export { default as contributors } from './scripts/contributors'
// Abrir un live server
export { default as serve } from './scripts/gitbook-serve'
// Generar el libro
import generate from './scripts/generate'
// Desplegar en gh-pages
import deployGhPages from './scripts/deploy-gh-pages'
// Instalar las dependencias del gitbook (las que están en el book.json)
import install from './scripts/gitbook-install'

export const build = series(install, generate)
export const deploy = parallel(deployGhPages)
export const clean = () => src(['gh-pages', 'wiki', '_book']).pipe(gclean())

export const all = series(build, deploy)

// Lintear los markdown
export async function lint () {
  src([
    'README.md',
    'txt/**/*.md'
  ]).pipe(through2.obj(function obj(file, enc, next) {
    mdlint(
      {
        files: [path.join(file.base, file.relative)],
        config: {
          MD029: {style: 'ordered'},
          MD013: {line_length: Infinity}
        }
       },
      (err, result) => {
        let resultString = (result || '').toString()
        if (resultString) console.log(resultString)
        next(err, file)
      })
  }))
}

export default all
