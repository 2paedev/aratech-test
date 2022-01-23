import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { APP_ROUTES } from 'src/app/shared/const/routes.const'
import { ISigninResponse } from 'src/app/shared/models/auth.model'
import { AuthService } from 'src/app/shared/services/auth.service'
import { UserService } from 'src/app/shared/services/user.service'

@Component({
  selector: 'aratech-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private user: UserService
  ) {}

  public ngOnInit(): void {
    this.initForm()
  }

  private initForm(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  public onSubmit(): void {
    if (this.signinForm.valid) {
      this.auth.signin(this.signinForm.value).subscribe({
        next: (response: ISigninResponse) => this.handleSubmit(response),
        error: (error: Response) => console.log(error) //Gestionar error aquí según respuesta. Crear helper común a todos.
      })
    }
  }

  handleSubmit(response: ISigninResponse): void {
    console.log(response)
    this.user.info = response.user
    this.auth.authenticate(response.token, response.user)
    this.router.navigateByUrl(APP_ROUTES.NEWS)
  }

  public goToSignup(): void {
    this.router.navigateByUrl(APP_ROUTES.SIGNUP)
  }
}
