import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { NewsCardComponent } from './news-card.component'

@NgModule({
  declarations: [NewsCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [NewsCardComponent]
})
export class NewsCardModule {}
