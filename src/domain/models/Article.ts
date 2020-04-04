import moment from 'moment-timezone'

export class Article {
  private _id: number
  private _title: string
  private _body: string
  private _createdAt: moment.Moment
  private _updatedAt: moment.Moment

  get id(): number {
    return this._id
  }

  set id(id: number) {
    this._id = id
  }

  get title(): string {
    return this._title
  }

  set title(title: string) {
    this._title = title
  }

  get body(): string {
    return this._body
  }

  set body(body: string) {
    this._body = body
  }

  get createdAt(): moment.Moment {
    return this._createdAt
  }

  getUTCCreatedAt(): string {
    if (this._createdAt) {
      return this._createdAt.utc().format('YYYY-MM-DD HH:mm:ss')
    }
    return null
  }

  set createdAt(timestamp: moment.Moment) {
    this._createdAt = timestamp
  }

  get updatedAt(): moment.Moment {
    return this._updatedAt
  }

  getUTCUpdatedAt(): string {
    if (this._updatedAt) {
      return this._updatedAt.utc().format('YYYY-MM-DD HH:mm:ss')
    }
    return null
  }

  set updatedAt(timestamp: moment.Moment) {
    this._updatedAt = timestamp
  }

  constructor(title: string = null, body: string = null) {
    this._title = title
    this._body = body
  }
}
