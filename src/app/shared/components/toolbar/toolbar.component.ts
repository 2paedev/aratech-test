import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() name?: string
  @Input() isAdmin: boolean
  @Output() turnAdminCallback = new EventEmitter<boolean>()
  @Output() dashboardCallback = new EventEmitter<boolean>()

  public turnAdminButton(): void {
    this.turnAdminCallback.emit(true)
  }

  public dashboardButton(): void {
    this.dashboardCallback.emit(true)
  }
}
