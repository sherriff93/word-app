import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/DictionaryView.css'

import WordForm from './WordForm'
import List from './List'

class DictionaryView extends Component {
  constructor() {
    super()
    this.labels = ['English', 'Spanish']
  }

  render() {
    const {name, items, linkPath} = this.props
    const {labels} = this
    return (
      <div>
        {name}
        <Link to={linkPath}>Test</Link>
        <WordForm labels={labels} />
        <List items={items} />
      </div>
    )
  }
}

export default DictionaryView;
