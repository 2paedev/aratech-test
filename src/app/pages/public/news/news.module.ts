import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module'
import { AuthGuard } from 'src/app/shared/helpers/auth.guard'
import { AuthService } from 'src/app/shared/services/auth.service'
import { ErrorsService } from 'src/app/shared/services/errors.service'
import { NewsService } from 'src/app/shared/services/news.service'
import { NewsRoutingModule } from './news-routing.module'
import { NewsComponent } from './news.component'

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsRoutingModule, SharedComponentsModule],
  providers: [AuthGuard, AuthService, NewsService, ErrorsService],
  bootstrap: [NewsComponent]
})
export class NewsModule {}
