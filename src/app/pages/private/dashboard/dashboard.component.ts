import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component'
import { IUser } from 'src/app/shared/models/auth.model'
import { NewsDialogTypes } from 'src/app/shared/models/news-dialog-types.model'
import { INews } from 'src/app/shared/models/news.model'
import { AuthService } from 'src/app/shared/services/auth.service'

@Component({
  selector: 'aratech-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userInfo?: IUser
  allNews: Array<INews> = []
  readonly NewsDialogTypes = NewsDialogTypes

  constructor(private auth: AuthService, private dialog: MatDialog, private router: Router) {}

  public ngOnInit(): void {
    this.userInfo = this.auth.getAuthUser()
  }

  public actionGoTo(route: string): void {
    this.router.navigateByUrl(route)
  }

  public openDialog(type: string): void {
    this.dialog.open(DialogComponent, {
      width: '60%',
      data: { type },
      panelClass: 'custom-dialog'
    })
  }
}
