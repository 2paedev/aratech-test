import { Injectable } from '@angular/core'
import { IUser } from '../models/auth.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Este servicio se podría utilizar, pero lo ideal sería tener un endpoint donde sacar la info del usuario directamente a través del UUID

  private user!: IUser

  public get info(): IUser {
    return this.user
  }

  public set info(user: IUser) {
    this.user = user
  }
}
