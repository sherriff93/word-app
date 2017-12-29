import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import '../css/DictionaryMain.css'

import DictionaryView from './DictionaryView'
import TestWrapper from './TestWrapper'

import {fetchWordsByDictionary} from '../lib'

class DictionaryMain extends Component {
    
    componentDidMount(){
        const {name} = this.props
        console.log(": ");console.log('fetchWords')//IS_DEBUG
        this.props.populate(name)
    }
    
    render() {
        console.log('main rerender') // TODO Get rid of console.logs without IS_DEBUG
        const {name, match, items, isLoading} = this.props,
        dictMainPath = match.path,
        testPath = dictMainPath + '/test',
        routes = [
            {
                path: dictMainPath,
                exact: true,
                component: () => (
                    <DictionaryView name={name} items={items} linkPath={testPath} />
                )
            },
            {
                path: testPath,
                component: () => (
                    <TestWrapper initialItems={items} linkPath={dictMainPath} />
                )
            }
        ]
        return (
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = function(store, ownProps) {
    return {
        items: store.dictionaryMainState.items,
        isLoading: store.dictionaryMainState.isLoading
    }
}

const mapDispatchToProps = function(dispatch) { // TODO Could put the fetch into a function
    return {
        populate: (dictionary) => {
            fetchWordsByDictionary(dictionary, dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictionaryMain)
