import {combineReducers} from 'redux'

// Reducers
import dictionaryMainReducer from './dictionary-main-reducer'
import yyyyReducer from './yyyy-reducer'
import homeReducer from './home-reducer'
import testWrapperReducer from './test-wrapper-reducer'
import fontawesome from '@fortawesome/fontawesome'
import faBook from '@fortawesome/fontawesome-free-solid/faBook'
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit'

fontawesome.library.add(faBook, faEdit)

// Combine Reducers
var reducers = combineReducers({
    dictionaryMainState: dictionaryMainReducer,
    yyyyState: yyyyReducer,
    homeState: homeReducer,
    testWrapperState: testWrapperReducer
})

export default reducers
