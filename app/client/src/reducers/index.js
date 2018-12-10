import {combineReducers} from 'redux'

// Reducers
import dictionaryMainReducer from './dictionary-main-reducer'
import appReducer from './app-reducer'
import homeReducer from './home-reducer'
import testWrapperReducer from './test-wrapper-reducer'

// Combine Reducers
var reducers = combineReducers({
    dictionaryMainState: dictionaryMainReducer,
    appState: appReducer,
    homeState: homeReducer,
    testWrapperState: testWrapperReducer
})

export default reducers
