import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { APP_ROUTES } from 'src/app/shared/const/routes.const'
import { ISignupResponse } from 'src/app/shared/models/auth.model'
import { AuthService } from 'src/app/shared/services/auth.service'
import { UserService } from 'src/app/shared/services/user.service'

@Component({
  selector: 'aratech-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    uuid: new FormControl('') //uuid debería ser creado por el backend. Lo pongo para introducirlo hardcodeado
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private user: UserService
  ) {}

  public onSubmit(): void {
    if (this.signupForm.valid) {
      this.auth.signup(this.signupForm.value).subscribe({
        next: (response: ISignupResponse) => this.handleSubmit(response),
        error: (error: Response) => console.log(error)
      })
    }
  }

  handleSubmit(response: ISignupResponse): void {
    console.log(response)
    this.router.navigateByUrl(APP_ROUTES.SIGNIN)
  }

  public goToSignin(): void {
    this.router.navigateByUrl(APP_ROUTES.SIGNIN)
  }
}
