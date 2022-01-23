import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardModule } from './pages/private/dashboard/dashboard.module'
import { NewsModule } from './pages/public/news/news.module'
import { SigninModule } from './pages/public/signin/signin.module'
import { SignupModule } from './pages/public/signup/signup.module'

const routes: Routes = [
  {
    path: 'signin',
    loadChildren: async (): Promise<typeof SigninModule> =>
      (await import('./pages/public/signin/signin.module')).SigninModule
  },
  {
    path: 'signup',
    loadChildren: async (): Promise<typeof SignupModule> =>
      (await import('./pages/public/signup/signup.module')).SignupModule
  },
  {
    path: 'news',
    loadChildren: async (): Promise<typeof NewsModule> => (await import('./pages/public/news/news.module')).NewsModule
  },
  {
    path: 'dashboard',
    loadChildren: async (): Promise<typeof DashboardModule> =>
      (await import('./pages/private/dashboard/dashboard.module')).DashboardModule
  },
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: '**', redirectTo: '/news' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
