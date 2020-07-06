import express from 'express'
import path from 'path'

import { shoppingCartRouter } from './routes'

// App
const app = express()

// Static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Routes
app.use('/shopping', shoppingCartRouter)

// Redirect
app.get('/', (req, res, next) => {
  res.redirect('/shopping')
})

export default app
