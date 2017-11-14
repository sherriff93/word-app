import * as types from './action-types'

export function addValues(values) {
  return {
    type: types.ADD_VALUES,
    values
  }
}

export function deleteWord(value) {
  return {
    type: types.DELETE_WORD,
    value
  }
}

export function deleteDictionary(value) {
  return {
    type: types.DELETE_DICTIONARY,
    value
  }
}

export function questionAnswered(english, isCorrect) {
  return {
    type: types.QUESTION_ANSWERED,
    english,
    isCorrect
  }
}
export function setItems(items) {
  return {
    type: types.SET_ITEMS,
    items
  }
}
