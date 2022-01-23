import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'
import { APP_ROUTES } from '../../const/routes.const'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() name?: string
  @Input() isAdmin: boolean
  @Output() turnAdminCallback = new EventEmitter<boolean>()
  @Output() buttonCallback = new EventEmitter<string>()

  buttonText: string
  isDashboard: boolean

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.isDashboard = this.router.url.includes(APP_ROUTES.DASHBOARD)
    this.buttonText = this.isAdmin && this.isDashboard ? 'Público' : 'Dashboard'
  }

  public turnAdminButton(): void {
    this.turnAdminCallback.emit(true)
  }

  public actionButton(): void {
    const emitValue = this.isAdmin && this.isDashboard ? APP_ROUTES.NEWS : APP_ROUTES.DASHBOARD
    this.buttonCallback.emit(emitValue)
  }
}
