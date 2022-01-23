import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { DialogModule } from './dialog/dialog.module'
import { NewsCardModule } from './news-card/news-card.module'
import { ToolbarModule } from './toolbar/toolbar.module'

@NgModule({
  imports: [CommonModule, ToolbarModule, NewsCardModule, DialogModule],
  exports: [ToolbarModule, NewsCardModule, DialogModule]
})
export class SharedComponentsModule {}
