import { spawn } from 'child_process'
import path from 'path'

export default function gitbookSpawn(...params) {
  return new Promise((res, rej) => {
    const gb = spawn('node', [
      path.resolve('node_modules/gitbook-cli/bin/gitbook.js'),
      ...params
    ])

    gb.stdout.on('data', data => process.stdout.write(data.toString()))
    gb.on('close', code => code ? rej() : res())
  })
}
