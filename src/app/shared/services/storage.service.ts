import { Injectable } from '@angular/core'
import { IUser } from '../models/auth.model'

const STORAGE_KEY = {
  TOKEN: 'token',
  USER: 'user'
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public getToken(): string | undefined {
    const token = window.sessionStorage.getItem(STORAGE_KEY.TOKEN)
    return token ? token : undefined
  }

  public addToken(token: string): void {
    window.sessionStorage.removeItem(STORAGE_KEY.TOKEN)
    window.sessionStorage.setItem(STORAGE_KEY.TOKEN, token)
  }

  public getUser(): IUser | undefined {
    const user = window.sessionStorage.getItem(STORAGE_KEY.USER)
    return user ? JSON.parse(user) : undefined
  }

  public addUser(user: IUser): void {
    window.sessionStorage.removeItem(STORAGE_KEY.USER)
    window.sessionStorage.setItem(STORAGE_KEY.USER, JSON.stringify(user))
  }

  public clear(): void {
    window.sessionStorage.clear()
  }
}
