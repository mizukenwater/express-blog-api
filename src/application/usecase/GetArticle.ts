import { IArticleRepositry } from '../repositories/IArticleRepositry'

export class GetArticle {
  private articleRepositry: IArticleRepositry

  constructor(articleRepositry: IArticleRepositry) {
    this.articleRepositry = articleRepositry
  }

  execute(id: number) {
    return this.articleRepositry.get(id)
  }
}
