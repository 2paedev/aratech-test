import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { API, CustomHttpOptions } from '../const/api.const'
import { INews, INewsActionResponse, INewsResponse } from '../models/news.model'

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getNews(): Observable<INewsResponse> {
    return this.http.get<INewsResponse>(API.NEWS)
  }

  public create(params: INews): Observable<INewsActionResponse> {
    return this.http.post<INewsActionResponse>(
      API.NEWS,
      {
        newsUuid: params.uuid,
        title: params.title,
        description: params.description
      },
      CustomHttpOptions
    )
  }

  public update(params: INews): Observable<INewsActionResponse> {
    return this.http.put<INewsActionResponse>(
      `${API.NEWS}/${params.uuid}`,
      {
        title: params.title,
        description: params.description
      },
      CustomHttpOptions
    )
  }

  public remove(params: INews): Observable<INewsActionResponse> {
    return this.http.delete<INewsActionResponse>(`${API.NEWS}/${params.uuid}`)
  }
}
