import express from 'express'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    res.render('./shopping/shopping-cart', {})
  } catch(err) {
    next(err)
  }
})

export default router
