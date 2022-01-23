import { NgModule } from '@angular/core'
import { SignupRoutingModule } from './signup-routing.module'
import { SignupComponent } from './signup.component'

@NgModule({
  declarations: [SignupComponent],
  imports: [SignupRoutingModule],
  providers: [],
  bootstrap: [SignupComponent]
})
export class SignupModule {}
