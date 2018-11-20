import * as types from '../actions/action-types'

const initialState = {
    showPopupWithParams: null
}

const appReducer = function (state = initialState, action) {
    let newState = null
    let {showPopupWithParams} = state
    switch (action.type) {
        case types.SHOW_EDIT_DICTIONARY_POPUP: {
            const {dictionary} = action
            showPopupWithParams = {
                type: 'edit_dictionary',
                dictionary: dictionary
            }
            newState = {...state, showPopupWithParams}
            break
        }
        case types.HIDE_CURRENT_POPUP: {
            showPopupWithParams = null
            newState = {...state, showPopupWithParams}
            break
        }
        default:
            newState = state
    }
    return newState
}

export default appReducer
