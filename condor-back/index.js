import app from './app'
import { createServer } from 'http'
import { config } from './config'

const server = createServer(app)

async function start() {
  // Server
  server.listen(config.port, _ => {
    console.log(`Listening http://localhost:${server.address().port}`)
  })
}

start()
