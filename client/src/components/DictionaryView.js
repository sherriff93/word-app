import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/DictionaryView.css'

import {fetchWordsStart} from '../actions/actions'
import {fetchWordsSuccess} from '../actions/actions'
import {fetchWordsFail} from '../actions/actions'

import WordForm from './WordForm'
import List from './List'

class DictionaryView extends Component {
    constructor() {
        super()
        this.labels = ['English', 'Spanish']
    }
    
    render() {
        console.log('view rerender')
        const {name, items, linkPath, onSubmit} = this.props
        const {labels} = this
        return (
            <div>
                {name}
                <Link to={linkPath}>Test</Link>
                <WordForm labels={labels} onSubmit={(values) => onSubmit(items, values, name)} />
                <List items={items} />
            </div>
        )
    }
    
}

const mapStateToProps = function(store, ownProps) {
    return {
        items: store.dictionaryMainState.items
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        onSubmit: (items, values, name) => { // TODO Change onSubmits. here, change to addWord
            // let newItems // ask: Why does this still exist?
            let existingItem = items.find(word => word.english === values.English)
            if (existingItem !== undefined) {
                
                if (confirm("Overrite existing?") !== false) {// ASK is using the key as a label bad?
                    dispatch(fetchWordsStart())
                    fetch('/api/words/' + existingItem._id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            english: values.English,
                            spanish: values.Spanish,
                            dictionary: name,
                            index: Date.now() // TODO Replace index with id
                        })
                    })
                    .then(response => {
                        if(response.status === 200){
                            response.json() // TODO What happens if this fails?
                            .then(json => dispatch(fetchWordsSuccess(json)))
                        }
                        else{
                            dispatch(fetchWordsFail())
                        }
                    })
                }
            } else {
                dispatch(fetchWordsStart())
                fetch('/api/words', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        english: values.English,
                        spanish: values.Spanish,
                        dictionary: name,
                        index: Date.now()
                    })
                })
                .then(response => {
                    if(response.status === 200){
                        response.json() // TODO What happens if this fails?
                        .then(json => dispatch(fetchWordsSuccess(json)))
                    }
                    else{
                        dispatch(fetchWordsFail())
                    }
                })
            }
            
            
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictionaryView)
