import { combineReducers } from 'redux'

// Reducers
import dictionaryMainReducer from './dictionary-main-reducer'

// Combine Reducers
var reducers = combineReducers({
    dictionaryMainState: dictionaryMainReducer,

})

export default reducers
