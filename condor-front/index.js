import app from './app'
import { createServer } from 'http'

const server = createServer(app)

// Server
server.listen(3000, _ => console.log(`Listening http://localhost:${server.address().port}`))
