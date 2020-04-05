import express from 'express'
import { ArticleController } from '../interfaces/controller/ArticleController'
import { MysqlConnection } from '../infrastructure/MysqlConnection'

const mysqlConnection = new MysqlConnection()
const articleController = new ArticleController(mysqlConnection)
const router = express.Router()

router.get('/', async (req: express.Request, res: express.Response) => {
  const results = 'Hello World!'
  res.send(results)
})

router.get('/articles', async (req: express.Request, res: express.Response) => {
  const results = await articleController.listArticle(req, res)
  res.send(results)
})

router.get('/articles/:id', async (req: express.Request, res: express.Response) => {
  const result = await articleController.getArticle(req, res)
  res.send(result)
})

router.post('articles', async (req: express.Request, res: express.Response) => {
  const result = await articleController.createArticle(req, res)
  res.send(result)
})

router.patch('articles/:id', async (req: express.Request, res: express.Response) => {
  const result = await articleController.updateArticle(req, res)
  res.send(result)
})

router.delete('articles/:id', async (req: express.Request, res: express.Response) => {
  const result = await articleController.deleteArticle(req, res)
  res.send(result)
})

export default router
