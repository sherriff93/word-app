import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/DictionaryView.css'

import {addWordStart} from '../actions/actions'
import {addWordSuccess} from '../actions/actions'
import {addWordFail} from '../actions/actions'

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
        <WordForm labels={labels} onSubmit={(values) => onSubmit(values, name)} />
        <List items={items} />
      </div>
    )
  }
}

const mapDispatchToProps = function(dispatch) {
    return {
        onSubmit: (values, name) => { // TODO Change onSubmits. here, change to addWord
            dispatch(addWordStart())
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
                    .then(json => dispatch(addWordSuccess(json)))
                }
                else{
                    dispatch(addWordFail())
                }
            })
            
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(DictionaryView)
