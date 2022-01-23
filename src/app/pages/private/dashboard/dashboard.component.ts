import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component'
import { IUser } from 'src/app/shared/models/auth.model'
import { NewsDialogTypes } from 'src/app/shared/models/news-dialog-types.model'
import { INews, INewsResponse } from 'src/app/shared/models/news.model'
import { AuthService } from 'src/app/shared/services/auth.service'
import { ErrorsService } from 'src/app/shared/services/errors.service'
import { NewsService } from 'src/app/shared/services/news.service'

@Component({
  selector: 'aratech-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userInfo?: IUser
  allNews: Array<INews> = []
  readonly NewsDialogTypes = NewsDialogTypes

  constructor(
    private auth: AuthService,
    private dialog: MatDialog,
    private news: NewsService,
    private errors: ErrorsService,
    private router: Router
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
        error: (error): void => this.errors.handleError(error)
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

  public openDialog(type: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '60%',
      data: { type },
      panelClass: 'custom-dialog'
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      //this.animal = result;
    })
  }
}
