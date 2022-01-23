import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NewsCardModule } from './news-card/news-card.module'
import { ToolbarModule } from './toolbar/toolbar.module'

@NgModule({
  imports: [CommonModule, ToolbarModule, NewsCardModule],
  exports: [ToolbarModule, NewsCardModule]
})
export class SharedComponentsModule {}
