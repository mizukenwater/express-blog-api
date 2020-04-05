import { IArticleRepositry } from '../repositories/IArticleRepositry'

export class ListArticle {
  private articleRepositry: IArticleRepositry

  constructor(articleRepositry: IArticleRepositry) {
    this.articleRepositry = articleRepositry
  }

  execute() {
    return this.articleRepositry.list()
  }
}
