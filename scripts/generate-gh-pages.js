import gitbook from './gitbook-spawn'

export default async function generateGitbook () {
  await gitbook('build', '.', './gh-pages')
}
