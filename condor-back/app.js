import express from 'express'
import path from 'path'

// App
const app = express()

// Security
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
  res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, PATCH, DELETE, OPTIONS')
  next()
})

// Static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// Routes
app.get('/', (req, res, next) => {
  try {
    res.json( { proy: 'Condor Backend' } )
  } catch(err) {
    next(err)
  }
})

export default app
