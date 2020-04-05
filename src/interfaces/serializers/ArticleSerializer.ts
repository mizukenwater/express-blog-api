import { Article } from '../../domain/models/Article'
import moment from 'moment-timezone'

const _serializeArticle = (article: Article) => {
  return {
    id: article.id,
    title: article.title,
    body: article.body,
    createdAt: moment(article.createdAt)
      .tz('Asia/Tokyo')
      .format(),
    updatedAt: moment(article.updatedAt)
      .tz('Asia/Tokyo')
      .format(),
  }
}

export class ArticleSerializer {
  serialize(data: Article | Article[]) {
    if (!data) {
      throw new Error('the data must be not null or undefined')
    }
    if (Array.isArray(data)) {
      return data.map(_serializeArticle)
    }
    return _serializeArticle(data)
  }
}
