import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NewsModule } from './pages/news/news.module'
import { SigninModule } from './pages/signin/signin.module'
import { SignupModule } from './pages/signup/signup.module'

const routes: Routes = [
  {
    path: 'signin',
    loadChildren: async (): Promise<typeof SigninModule> => (await import('./pages/signin/signin.module')).SigninModule
  },
  {
    path: 'signup',
    loadChildren: async (): Promise<typeof SignupModule> => (await import('./pages/signup/signup.module')).SignupModule
  },
  {
    path: 'news',
    loadChildren: async (): Promise<typeof NewsModule> => (await import('./pages/news/news.module')).NewsModule
  },
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: '**', redirectTo: '/news' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
