import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { API } from '../const/api.const'
import { INewsResponse } from '../models/news.model'

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getNews(): Observable<INewsResponse> {
    return this.http.get<INewsResponse>(API.NEWS)
  }
}
