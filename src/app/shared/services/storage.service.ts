import { Injectable } from '@angular/core'

const STORAGE_KEY = {
  TOKEN: 'token',
  UUID: 'uuid'
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public getToken(): string | null {
    return window.sessionStorage.getItem(STORAGE_KEY.TOKEN)
  }

  public addToken(token: string): void {
    window.sessionStorage.removeItem(STORAGE_KEY.TOKEN)
    window.sessionStorage.setItem(STORAGE_KEY.TOKEN, token)
  }

  public getUser(): string | null {
    return window.sessionStorage.getItem(STORAGE_KEY.UUID)
  }

  public addUser(uuid: string): void {
    window.sessionStorage.removeItem(STORAGE_KEY.UUID)
    window.sessionStorage.setItem(STORAGE_KEY.UUID, JSON.stringify(uuid))
  }

  public clear(): void {
    window.sessionStorage.clear()
  }
}
