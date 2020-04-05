import { Article } from '../../domain/models/Article'
import { IArticleRepositry } from '../repositories/IArticleRepositry'

export class CreateArticle {
  private articleRepositry: IArticleRepositry

  constructor(articleRepositry: IArticleRepositry) {
    this.articleRepositry = articleRepositry
  }

  execute(title: string, body: string) {
    const artilcle = new Article(title, body)
    return this.articleRepositry.create(artilcle)
  }
}
