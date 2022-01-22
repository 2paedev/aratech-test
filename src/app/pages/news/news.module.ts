import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { AuthGuard } from 'src/app/shared/helpers/auth.guard'
import { AuthService } from 'src/app/shared/services/auth.service'
import { NewsRoutingModule } from './news-routing.module'
import { NewsComponent } from './news.component'

@NgModule({
  declarations: [NewsComponent],
  imports: [NewsRoutingModule, HttpClientModule],
  providers: [AuthGuard, AuthService],
  bootstrap: [NewsComponent]
})
export class NewsModule {}
