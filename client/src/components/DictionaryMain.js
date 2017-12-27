import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import '../css/DictionaryMain.css'

import DictionaryView from './DictionaryView'
import TestWrapper from './TestWrapper'

import {fetchWords} from '../lib'

class DictionaryMain extends Component {
    
    componentDidMount(){
        console.log(": ");console.log('fetchWords')//IS_DEBUG
        this.props.populate()
    }
    
    render() {
        console.log('main rerender') // TODO Get rid of console.logs without IS_DEBUG
        console.log(this.props.test)
        const {name, match, items} = this.props,
        dictMainPath = match.path,
        testPath = dictMainPath + '/test',
        itemsFiltered = items.filter(item => item.dictionary === name),
        routes = [
            {
                path: dictMainPath,
                exact: true,
                component: () => (
                    <DictionaryView name={name} items={itemsFiltered} linkPath={testPath} />
                )
            },
            {
                path: testPath,
                component: () => (
                    <TestWrapper initialItems={itemsFiltered} linkPath={dictMainPath} />
                )
            }
        ]
        return (
            <div>
                {routes.map((route, index) => (
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
        test: store.dictionaryMainState.test
    }
}

const mapDispatchToProps = function(dispatch) { // TODO Could put the fetch into a function
    return {
        populate: () => {
            fetchWords(dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictionaryMain)
