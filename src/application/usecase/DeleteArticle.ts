import { IArticleRepositry } from '../repositories/IArticleRepositry'

export class DeleteArticle {
  private articleRepositry: IArticleRepositry

  constructor(articleRepositry: IArticleRepositry) {
    this.articleRepositry = articleRepositry
  }

  async execute(id: number) {
    const article = await this.articleRepositry.get(id)
    return this.articleRepositry.delete(article)
  }
}
