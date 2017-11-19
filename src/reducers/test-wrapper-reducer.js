import * as types from '../actions/action-types'

const initialState = {
  items: {},
  score: 0
}

const testWrapperReducer = function(state = initialState, action) {
    let newState = null
    switch(action.type) {
        case types.QUESTION_ANSWERED: {
            console.log('state');console.log(state)
            let {items, score} = state
            let newItems = {...items}
            delete newItems[action.english]
            newState = {
              ...state,
              items: newItems,
              score: score + action.isCorrect
            }
            break
        }
        case types.SET_ITEMS: {
          const items = action.items
            newState = {...state, items}
            break
        }
        default:
            newState = state
    }
console.log(newState)
    return newState
}

export default testWrapperReducer
