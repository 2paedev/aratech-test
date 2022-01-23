import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { ERRORS } from '../const/errors.const'
import { APP_ROUTES } from '../const/routes.const'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  constructor(private router: Router, private auth: AuthService) {}

  public handleError(error: Response): void {
    if (error.status === ERRORS.STATUS_CODE.UNAUTHORIZED) {
      this.auth.cleanUserInfo()
      this.router.navigateByUrl(APP_ROUTES.SIGNIN)
    }
  }
}
