import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { AuthService } from '../services/auth.service'

const TOKEN_HEADER_KEY = 'token'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  intercept(httpReq: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let req = httpReq
    if (this.auth.isAuthenticated()) {
      req = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, '' + this.auth.getAuthToken()) })
    }
    return next.handle(req)
  }
}

export const authInterceptorProviders = [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
