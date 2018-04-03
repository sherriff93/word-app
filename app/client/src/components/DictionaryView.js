import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import WordForm from './WordForm'
import List from './List'

import {updateWord} from '../lib'
import {insertWord} from '../lib'

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

const mapDispatchToProps = function(dispatch) {
    return {
        onSubmit: (items, values, name) => { // TODO Change onSubmits. here, change to addWord
            // let newItems // ask: Why does this still exist?
            let existingItem = items.find(word => word.english === values.English)
            if (existingItem !== undefined) {
                if (confirm("Overrite existing?") !== false) {// ASK is using the key as a label bad?
                    updateWord(existingItem, values, name, dispatch)
                }
            } else {
                insertWord(values, name, dispatch)
            }
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(DictionaryView)