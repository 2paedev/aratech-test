import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module'
import { AuthGuard } from 'src/app/shared/helpers/auth.guard'
import { AuthService } from 'src/app/shared/services/auth.service'
import { NewsService } from 'src/app/shared/services/news.service'
import { NewsRoutingModule } from './news-routing.module'
import { NewsComponent } from './news.component'

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsRoutingModule, HttpClientModule, SharedComponentsModule],
  providers: [AuthGuard, AuthService, NewsService],
  bootstrap: [NewsComponent]
})
export class NewsModule {}
