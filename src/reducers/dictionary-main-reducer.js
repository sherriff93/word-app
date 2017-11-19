import * as types from '../actions/action-types'

const initialState = {
    items: {
      'To dare': {
        spanish: 'Atrever',
        index: 0
      }
    },
    mode: null//TODO remove
}

const dictionaryMainReducer = function(state = initialState, action) {
    let newState = null
    switch(action.type) {
        case types.ADD_WORD: {
            const {values} = action
            let {items} = state

            const keys = Object.keys(values)

            newState = {
                ...state,
                items: {
                  ...items,
                  [values[keys[0]]]: {
                    spanish: values[keys[1]],
                    index: Date.now()
                  }
                }
            }
            break
        }
        case types.DELETE_WORD: {
            let {items} = state
            delete items[action.value]
            newState = {
                ...state,
                items: {...items}
            }
            break
        }
        default:
            newState = state
    }

    return newState
}

export default dictionaryMainReducer
