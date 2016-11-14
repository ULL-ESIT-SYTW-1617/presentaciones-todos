import gitbook from './gitbook-spawn'

export default async function gitbookServe () {
  await gitbook('serve', '--port', '8080')
}
