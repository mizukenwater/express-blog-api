import { Article } from '../../domain/models/Article'
import { IArticleRepositry } from '../../application/repositories/IArticleRepositry'
import { IDBConnection } from './IDBConnection'
import moment from 'moment-timezone'

export class ArticleRepositry extends IArticleRepositry {
  private connection: any

  constructor(connection: IDBConnection) {
    super()
    this.connection = connection
  }

  private convertModel(result: Article): Article {
    const article = new Article()

    article.id = result.id
    article.title = result.title
    article.body = result.body
    article.createdAt = moment.tz(result.createdAt, 'UTC')
    article.updatedAt = moment.tz(result.updatedAt, 'UTC')

    return article
  }

  async list(): Promise<Array<Article>> {
    const results = await this.connection.execute('select * from articles')
    const articles = results.map((result: Article) => {
      return this.convertModel(result)
    })
    return articles
  }

  async get(id: number): Promise<Article> {
    const results = await this.connection.execute(
      'select * from articles where id = ? limit 1',
      id
    )
    return this.convertModel(results[0])
  }

  async create(article: Article): Promise<Article> {
    const result = await this.connection.execute(
      'insert into articles (title, body, created_at, updated_at) values (?, ?, ?, ?)',
      [
        article.title,
        article.body,
        article.getUTCCreatedAt,
        article.getUTCUpdatedAt
      ]
    )
    article.id = result.insertId
    return article
  }

  async update(article: Article): Promise<Article> {
    const result = await this.connection.execute(
      'update articles set title = ?, body = ?, updated_at, where id = ?',
      [
        article.title,
        article.body,
        article.getUTCUpdatedAt,
        article.id
      ]
    )
    return article
  }

  async delete(article: Article): Promise<Article> {
    const result = await this.connection.execute(
      'delete from articles where id = ?',
      article.id
    )
    return this.convertModel(article)
  }
}
