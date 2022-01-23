import { Role } from './user.model'

export interface ISigninParams {
  email: string
  password: string
}

export interface IUser {
  uuid: string
  name: string
  email: string
  role: Role
}

export interface ISigninResponse {
  user: IUser
  token: string
}
