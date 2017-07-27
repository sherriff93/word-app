import * as types from './action-types'

export function addValues(values) {
  return {
    type: types.ADD_VALUES,
    values
  }
}
