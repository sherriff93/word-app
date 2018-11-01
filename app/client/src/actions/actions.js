import * as types from './action-types'

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

export function fetchWordsSuccess(words) {
    return {
        type: types.FETCH_WORDS_SUCCESS,
        words
    }
}

export function fetchWordsFail() {
    return {
        type: types.FETCH_WORDS_FAIL
    }
}

export function showEditDictionaryPopup(dictionary) {
    return {
        type: types.SHOW_EDIT_DICTIONARY_POPUP,
        dictionary
    }
}

export function hideCurrentPopup() {
    return {
        type: types.HIDE_CURRENT_POPUP,
    }
}
