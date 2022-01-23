import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { IUser } from 'src/app/shared/models/auth.model'
import { INews, INewsResponse } from 'src/app/shared/models/news.model'
import { AuthService } from 'src/app/shared/services/auth.service'
import { ErrorsService } from 'src/app/shared/services/errors.service'
import { NewsService } from 'src/app/shared/services/news.service'

@Component({
  selector: 'aratech-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  userInfo?: IUser
  allNews: Array<INews> = []

  constructor(
    private auth: AuthService,
    private news: NewsService,
    private router: Router,
    private errors: ErrorsService
  ) {}

  public ngOnInit(): void {
    this.userInfo = this.auth.getAuthUser()

    this.news.getNews().subscribe({
      next: (response: INewsResponse) => this.handleGetNews(response.news),
      error: (error) => console.log(error)
    })
  }

  private handleGetNews(news: Array<INews>): void {
    this.allNews = news
  }

  public turnToAdmin(): void {
    if (this.userInfo?.uuid) {
      this.auth.turnToAdmin(this.userInfo.uuid).subscribe({
        next: (response: IUser) => this.handleTurnToAdmin(response),
        error: (error) => this.errors.handleError(error)
      })
    }
  }

  private handleTurnToAdmin(data: IUser): void {
    this.auth.addUserInfo(data)
    this.userInfo = data
  }

  public actionGoTo(route: string): void {
    this.router.navigateByUrl(route)
  }
}
