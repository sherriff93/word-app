import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components';

import Dictionary from './components/Dictionary'

import {addDictionary} from './actions/actions'

class App extends Component {

    constructor() {
        super()
        this.onClick = this.onClick.bind(this)
    }

    render() {

        injectGlobal `
            body {
                margin: 0;
                padding: 0;
                font-family: sans-serif;
            }
        `

        const Sidebar = styled.div `
           padding: 10px;
           width: 40%;
           background: #f0f0f0;
           > ul {
               listStyleType: none;
               padding: 0;
           }
        `

        const {dictionaries} = this.props
        return (
            <Router>
                <div style={{
                    display: 'flex'
                }}>
                    <Sidebar>
                        <ul>
                            {dictionaries.map((dictionary, index) => (<Dictionary key={index} dictionary={dictionary} onDelete={this.onDelete}/>))}
                        </ul>
                        <span className="delete" onClick={this.onClick}>
                            Add Dictionary
                        </span>
                    </Sidebar>

                    <div style={{
                        flex: 1,
                        padding: '10px'
                    }}>
                        {dictionaries.map((dictionary, index) => (<Route key={index} path={dictionary.path} exact={dictionary.exact} component={dictionary.main}/>))}
                    </div>
                </div>
            </Router>
        )
    }

    // Custom Functions
    onClick() {
        const {onClick} = this.props
        const toAdd = prompt()
        onClick(toAdd)
    }
}

const mapStateToProps = function(store) {
    return {dictionaries: store.appState.dictionaries}
}

const mapDispatchToProps = function(dispatch) {
    return {
        onClick: (value) => {
            dispatch(addDictionary(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
