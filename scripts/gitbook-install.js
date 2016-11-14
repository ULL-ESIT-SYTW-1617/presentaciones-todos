import gitbook from './gitbook-spawn'

export default async function generateGitbook () {
  await gitbook('install')
}
