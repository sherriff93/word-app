import * as types from './action-types'

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

export function fetchDictionariesSuccess(dictionaries) {
    return {
        type: types.FETCH_DICTIONARIES_SUCCESS,
        dictionaries
    }
}

export function fetchDictionariesFail() {
    return {
        type: types.FETCH_DICTIONARIES_FAIL
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

export function fetchUser(user) {
    return {
        type: types.FETCH_USER,
        user
    }
}
