export interface IUser {
  user_id: string
  pseudonym: string
  email: string
  password_hash: string
  avatar_url?: string
  role_id: number
  role_name: string
}

export type IAuthUser = Omit<IUser, "password_hash">

export interface ILoginInput {
  email: string
  password: string
}

export interface IRegisterInput {
  email: string
  password: string
  pseudonym: string
  avatar_url?: string
}
