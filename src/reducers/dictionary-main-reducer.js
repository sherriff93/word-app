import * as types from '../actions/action-types'

const initialState = {
    isAuthenticated: false,
    user: {}
}

const appReducer = function(state = initialState, action) {
    let newState = null
    switch(action.type) {
        case types.ADD_VALUES:
            newState = {
                ...state,
                isAuthenticated: action.values,
                user: action.user,
            }
            break
        default:
            newState = state
    }

    return newState
}

export default appReducer
