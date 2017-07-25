import * as types from '../actions/action-types'

export function setCurrentUser(user) {
  return {
    type: types.SET_CURRENT_USER,
    user
  }
}

export function loginError(error) {
  return {
    type: types.LOGIN_ERROR,
    error
  }
}
