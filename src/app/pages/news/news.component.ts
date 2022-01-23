import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { APP_ROUTES } from 'src/app/shared/const/routes.const'
import { Role } from 'src/app/shared/const/user.const'
import { IUser } from 'src/app/shared/models/auth.model'
import { INews, INewsResponse } from 'src/app/shared/models/news.model'
import { AuthService } from 'src/app/shared/services/auth.service'
import { NewsService } from 'src/app/shared/services/news.service'

@Component({
  selector: 'aratech-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  userInfo?: IUser
  allNews: Array<INews> = []

  constructor(private auth: AuthService, private news: NewsService, private router: Router) {}

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
        error: (error) => console.log(error)
      })
    }
  }

  private handleTurnToAdmin(data: IUser): void {
    this.auth.addUserInfo(data)
    this.userInfo = data
  }

  public goToDashboard(): void {
    if (this.userInfo?.role === Role.Admin) {
      this.router.navigateByUrl(APP_ROUTES.DASHBOARD)
    }
  }
}
