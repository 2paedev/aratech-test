import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { API } from '../const/api.const'
import { ISigninParams, ISigninResponse } from '../models/auth.model'
import { StorageService } from './storage.service'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

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
      httpOptions
    )
  }

  public signup(username: string, email: string, password: string): Observable<ISigninResponse> {
    return this.http.post<ISigninResponse>(
      API.AUTH.SIGNUP,
      {
        username,
        email,
        password
      },
      httpOptions
    )
  }

  public authenticate(token: string, uuid: string): void {
    this.storage.addToken(token)
    this.storage.addUser(uuid)
  }

  public getAuthToken(): string | null {
    return this.storage.getToken()
  }

  public isAuthenticated(): boolean {
    const token = this.storage.getToken()
    return token !== null
  }
}
