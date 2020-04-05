import { Article } from '../../domain/models/Article'

export abstract class IArticleRepositry {
  abstract async list(): Promise<Array<Article>>
  abstract async get(id: number): Promise<Article>
  abstract async create(article: Article): Promise<Article>
  abstract async update(article: Article): Promise<Article>
  abstract async delete(article: Article): Promise<Article>
}
