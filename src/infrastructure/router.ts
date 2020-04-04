import express from 'express'

const router = express.Router()

router.get('/', async (req: express.Request, res: express.Response) => {
  const results = 'Hello World!'
  res.send(results)
})

export default router
