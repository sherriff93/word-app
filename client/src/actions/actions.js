import * as types from './action-types'

export function deleteWord(value) {
    return {
        type: types.DELETE_WORD,
        value
    }
}

export function addDictionary(value) {
    return {
        type: types.ADD_DICTIONARY,
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

export function resetScore() {
    return {
        type: types.RESET_SCORE
    }
}

export function fetchWordsStart() {
    return {
        type: types.FETCH_WORDS_START
    }
}

export function fetchWordsSuccess(data) {
    return {
        type: types.FETCH_WORDS_SUCCESS,
        data
    }
}

export function fetchWordsFail() {
    return {
        type: types.FETCH_WORDS_FAIL
    }
}

export function addWordStart() {
    return {
        type: types.ADD_WORD_START
    }
}

export function addWordSuccess(words) {
    return {
        type: types.ADD_WORD_SUCCESS,
        words
    }
}

export function addWordFail() {
    return {
        type: types.ADD_WORD_FAIL
    }
}
