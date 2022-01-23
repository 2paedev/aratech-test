import { Role } from './user.model'

export interface ISigninParams {
  email: string
  password: string
}

export interface ISignupParams {
  email: string
  name: string
  password: string
  uuid: string
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

export interface ITurnAdminResponse {
  user: IUser
}

export interface ISignupResponse {
  token: string
}
