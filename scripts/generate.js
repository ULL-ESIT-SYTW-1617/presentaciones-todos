import gitbook from './gitbook-spawn'

export default async function generate () {
  await gitbook('build', '.', './gh-pages')
}
