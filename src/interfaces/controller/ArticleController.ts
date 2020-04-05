import { ArticleSerializer } from '../serializers/ArticleSerializer'
import { ArticleRepositry } from '../database/ArticleRepository'
import { ListArticle } from '../../application/usecase/ListArticle'
import { GetArticle } from '../../application/usecase/GetArticle'
import { CreateArticle } from '../../application/usecase/CreateArticle'
import { UpdateArticle } from '../../application/usecase/UpdateArticle'
import { DeleteArticle } from '../../application/usecase/DeleteArticle'
import { IDBConnection } from '../database/IDBConnection'
import express from 'express'

export class ArticleController {
  private articleSerializer: ArticleSerializer
  private articleRepositry: ArticleRepositry

  constructor(dbConnection: IDBConnection) {
    this.articleSerializer = new ArticleSerializer()
    this.articleRepositry = new ArticleRepositry(dbConnection)
  }

  async listArticle(req: express.Request, res: express.Response) {
    const useCase = new ListArticle(this.articleRepositry)
    const results = await useCase.execute()
    return this.articleSerializer.serialize(results)
  }

  async getArticle(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id)
    const useCase = new GetArticle(this.articleRepositry)
    const result = await useCase.execute(id)
    return this.articleSerializer.serialize(result)
  }

  async createArticle(req: express.Request, res: express.Response) {
    const { title, body } = req.body
    const useCase = new CreateArticle(this.articleRepositry)
    const result = await useCase.execute(title, body)
    return this.articleSerializer.serialize(result)
  }

  async updateArticle(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id)
    const { title, body } = req.body
    const useCase = new UpdateArticle(this.articleRepositry)
    const result = await useCase.execute(id, title, body)
    return this.articleSerializer.serialize(result)
  }

  async deleteArticle(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id)
    const useCase = new DeleteArticle(this.articleRepositry)
    const result = await useCase.execute(id)
    return this.articleSerializer.serialize(result)
  }
}
