import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { APP_ROUTES } from 'src/app/shared/const/routes.const'
import { ISigninResponse } from 'src/app/shared/models/auth.model'
import { AuthService } from 'src/app/shared/services/auth.service'
import { StorageService } from 'src/app/shared/services/storage.service'
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
    private storage: StorageService,
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
        error: (error) => this.handleError(error)
      })
    }
  }

  handleSubmit(response: ISigninResponse): void {
    console.log(response)
    this.user.info = response.user
    this.auth.authenticate(response.token, response.user.uuid)
    this.router.navigateByUrl(APP_ROUTES.NEWS)
  }

  handleError(error: string): void {
    //Gestionar error aquí según respuesta. Este helper debería ir en un servicio común a todos.
    console.log(error)
  }
}
