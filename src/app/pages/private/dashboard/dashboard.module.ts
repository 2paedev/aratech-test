import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module'
import { AuthGuard } from 'src/app/shared/helpers/auth.guard'
import { AuthService } from 'src/app/shared/services/auth.service'
import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardComponent } from './dashboard.component'

@NgModule({
  declarations: [DashboardComponent],
  imports: [DashboardRoutingModule, MatButtonModule, SharedComponentsModule],
  providers: [AuthGuard, AuthService],
  bootstrap: [DashboardComponent]
})
export class DashboardModule {}
