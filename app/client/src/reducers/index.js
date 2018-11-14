import {combineReducers} from 'redux'

// Reducers
import dictionaryMainReducer from './dictionary-main-reducer'
import appReducer from './app-reducer'
import testWrapperReducer from './test-wrapper-reducer'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBook from '@fortawesome/fontawesome-free-solid/faBook'
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit'

fontawesome.library.add(faBook, faEdit)

// Combine Reducers
var reducers = combineReducers({
    dictionaryMainState: dictionaryMainReducer,
    appState: appReducer,
    testWrapperState: testWrapperReducer
})

export default reducers
