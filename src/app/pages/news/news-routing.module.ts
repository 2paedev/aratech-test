import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from 'src/app/shared/helpers/auth.guard'
import { NewsComponent } from './news.component'

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class NewsRoutingModule {}
