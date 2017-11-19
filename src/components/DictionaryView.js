import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/DictionaryView.css'

import {addValues} from '../actions/actions'

import WordForm from './WordForm'
import List from './List'

class DictionaryView extends Component {
  constructor() {
    super()
    this.labels = ['English', 'Spanish']
    this.onSubmit = this.onSubmit.bind(this)
  }

  render() {
    console.log('view rerender')
    const {name, items, linkPath} = this.props
    const {labels} = this
    return (
      <div>
        {name}
        <Link to={linkPath}>Test</Link>
        <WordForm labels={labels} onSubmit={this.onSubmit} />
        <List items={items} />
      </div>
    )
  }

  // Custom Functions
  onSubmit (values) {
    const {items, onSubmit} = this.props
    if (items.hasOwnProperty(values.English) && confirm("Overrite existing?") === false) {// ASK is using the key as a label bad?
      return
    }
    onSubmit(values)
  }
}

const mapDispatchToProps = function(dispatch) {
    return {
        onSubmit: (values) => {
          dispatch(addValues(values))// TODO This needs to be generalised to addDictionaries, addWords
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(DictionaryView)
