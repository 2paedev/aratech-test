import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { API, CustomHttpOptions } from '../const/api.const'
import {
  ISigninParams,
  ISigninResponse,
  ISignupParams,
  ISignupResponse,
  ITurnAdminResponse,
  IUser
} from '../models/auth.model'
import { StorageService } from './storage.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private storage: StorageService) {}

  public signin(bodyParams: ISigninParams): Observable<ISigninResponse> {
    return this.http.post<ISigninResponse>(
      API.AUTH.SIGNIN,
      {
        email: bodyParams.email,
        password: bodyParams.password
      },
      CustomHttpOptions
    )
  }

  public signup(bodyParams: ISignupParams): Observable<ISignupResponse> {
    return this.http.post<ISignupResponse>(
      API.AUTH.SIGNUP,
      {
        name: bodyParams.name,
        email: bodyParams.email,
        password: bodyParams.password,
        uuid: bodyParams.uuid
      },
      CustomHttpOptions
    )
  }

  public turnToAdmin(uuid: string): Observable<ITurnAdminResponse> {
    return this.http.post<ITurnAdminResponse>(API.AUTH.TURN_ADMIN(uuid), {}, CustomHttpOptions)
  }

  public authenticate(token: string, user: IUser): void {
    this.storage.addToken(token)
    this.addUserInfo(user)
  }

  public addUserInfo(data: IUser): void {
    this.storage.addUser(data)
  }

  public getAuthToken(): string | undefined {
    return this.storage.getToken()
  }

  public getAuthUser(): IUser | undefined {
    return this.storage.getUser()
  }

  public isAuthenticated(): boolean {
    const token = this.storage.getToken()
    return token !== undefined
  }

  public cleanUserInfo(): void {
    this.storage.clear()
  }
}
