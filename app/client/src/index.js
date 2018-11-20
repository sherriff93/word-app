import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Yyyy from './components/Yyyy'
import Store from './Store'

ReactDOM.render(
    <Provider store={Store}>
        <Yyyy />
    </Provider>,
    document.getElementById('root')
)
