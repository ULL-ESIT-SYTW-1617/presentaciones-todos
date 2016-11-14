import gitbook from './gitbook-spawn'

export default async function generateGitbook () {
  await gitbook('serve', '--port', '8080')
}
