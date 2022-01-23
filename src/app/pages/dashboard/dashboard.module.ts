import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { AuthGuard } from 'src/app/shared/helpers/auth.guard'
import { AuthService } from 'src/app/shared/services/auth.service'
import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardComponent } from './dashboard.component'

@NgModule({
  declarations: [DashboardComponent],
  imports: [DashboardRoutingModule, HttpClientModule],
  providers: [AuthGuard, AuthService],
  bootstrap: [DashboardComponent]
})
export class DashboardModule {}
