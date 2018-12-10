import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import DictionaryView from './DictionaryView'
import TestWrapper from './TestWrapper'
import {fetchWords} from '../lib/word_functions'

class DictionaryMain extends Component {
    
    componentDidMount(){
        this.props.populate()
    }
    
    render() {
        const {name, match, items, isLoading} = this.props,
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
                    <TestWrapper name={name} initialItems={itemsFiltered} linkPath={dictMainPath} />
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
        populate: () => {
            fetchWords(dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictionaryMain)
