import * as types from '../actions/action-types'

const initialState = {
    items: [
      {}
    ],
    isLoading: true
}

const dictionaryMainReducer = function(state = initialState, action) {
    let newState = null
    switch(action.type) {
        case types.FETCH_WORDS_START: {
            newState = {
                ...state,
                isLoading: true
            }
            break
        }
        case types.FETCH_WORDS_SUCCESS: {
            newState = {
                ...state,
                items: action.words,
                isLoading: false
            }
            break
        }
        case types.FETCH_WORDS_FAIL: {
            newState = {
                ...state,
                isLoading: false
            }
            break
        }
        default:
            newState = state
    }

    return newState
}

export default dictionaryMainReducer
