export interface INews {
  uuid: string
  title: string
  description: string
}

export interface INewsResponse {
  news: Array<INews>
}
