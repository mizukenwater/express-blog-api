import { IArticleRepositry } from '../repositories/IArticleRepositry'
import moment from 'moment-timezone'

export class UpdateArticle {
  private articleRepositry: IArticleRepositry

  constructor(articleRepositry: IArticleRepositry) {
    this.articleRepositry = articleRepositry
  }

  async execute(id: number, title: string, body: string) {
    const article = await this.articleRepositry.get(id)
    article.title = title
    article.body = body
    article.updatedAt = moment()
    return this.articleRepositry.update(article)
  }
}
