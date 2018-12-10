import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'
import Store from './Store'
import fontawesome from '@fortawesome/fontawesome'
import faBook from '@fortawesome/fontawesome-free-solid/faBook'
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit'
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash'

fontawesome.library.add(faBook, faEdit, faTrash)

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
