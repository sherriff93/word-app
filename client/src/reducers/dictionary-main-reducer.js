import * as types from '../actions/action-types'

const initialState = {
    items: [
      {
        english: 'To dare',
        spanish: 'Atrever',
        dictionary: 'Harry Potter',
        index: 0
      }
    ],
    test: 'none'
}

const dictionaryMainReducer = function(state = initialState, action) {
    let newState = null
    switch(action.type) {
        case types.FETCH_WORDS_SUCCESS: {
            newState = {
                ...state,
                items: action.words
            }
            break
        }
        case types.FETCH_DATA:
            newState = state
            break
        case types.FETCH_SUCCESS:
            newState = {...state, test: action.data}
            break
        case types.FETCH_FAIL:
            newState = {...state, test: 'fail'}
            break
        default:
            newState = state
    }

    return newState
}

export default dictionaryMainReducer
