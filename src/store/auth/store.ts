import { AuthState } from './types'
import { AuthDomain } from './domain'

import {
  register,
  login,
  logout,
  checkAuth
} from './events'

const initialState: AuthState = {
  user: null
}

export const $auth = AuthDomain.store<AuthState>(initialState)
  .on(register.done, (state, { result }) => {
    state = {
      ...state,
      user: result
    }
    return state
  })
  .on(login.done, (state, { result }) => {
    state = {
      ...state,
      user: result.user
    }
    return state
  })
  .on(logout.done, (state) => {
    state = {
      ...state,
      user: null
    }
    return state
  })
  .on(checkAuth.done, (state, { result }) => {
    state = {
      ...state,
      user: result.user
    }
    return state
  })

export default { $auth }
