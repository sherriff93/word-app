import * as types from './action-types'

export function addValues(values) {
  return {
    type: types.ADD_VALUES,
    values
  }
}

export function deleteValue(value) {
  return {
    type: types.DELETE_VALUE,
    value
  }
}
