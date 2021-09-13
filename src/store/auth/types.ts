export type SecurityCode = string

export interface User {
  _id?: string,
  username: string
}

export interface AuthState {
  user: User | null
}

export interface RegisterPayload {
  username: string,
  email?: string,
  password: string
}

export interface LoginPayload {
  username: string,
  password: string
}

export interface LoginResponse {
  user: User
}

export interface AuthCheckResponse {
  user: User
}
