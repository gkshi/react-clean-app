import { AuthDomain } from './domain'
import { sendRequest } from '../../api'
import {
  RegisterPayload,
  LoginPayload,
  LoginResponse,
  AuthCheckResponse,
  User
} from './types'

export const register = AuthDomain.effect<RegisterPayload, User>().use((payload) => {
  return sendRequest({
    method: 'post',
    data: {
      username: payload.username,
      password: payload.password
    },
    url: '/register'
  })
})

export const login = AuthDomain.effect<LoginPayload, LoginResponse>().use((payload) => {
  return sendRequest({
    method: 'post',
    data: {
      username: payload.username,
      password: payload.password
    },
    url: '/login'
  })
})

export const logout = AuthDomain.effect<void, void>().use(() => {
  return sendRequest({
    url: '/logout'
  })
})

export const checkAuth = AuthDomain.effect<void, AuthCheckResponse>().use(() => {
  return sendRequest({
    url: '/auth'
  }).catch(() => ({ user: null }))
})
