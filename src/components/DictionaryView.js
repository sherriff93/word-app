import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/DictionaryView.css'

import WordForm from './WordForm'
import List from './List'

class DictionaryView extends Component {
  constructor(props) {
    super()
    this.state = {
      labels: ['English', 'Spanish']
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.changeMode = this.changeMode.bind(this)
  }

  render() {
    const {name, items, linkPath} = this.props
    const {labels} = this.state
    return (
      <div>
        {name}
        <Link to={linkPath}>Test</Link>
        <WordForm labels={labels} onSubmit={this.onSubmit} />
        <List items={items} onDelete={this.onDelete} />
      </div>
    )
  }

  // Custom Functions
  onSubmit (word) {
    const {onSubmit} = this.props,
      {labels} = this.state
    onSubmit(word, labels)
  }

  onDelete (english) {
    const {onDelete} = this.props
    onDelete(english)
  }

  changeMode () {
    const {changeMode} = this.props
    changeMode('test')
  }
}

export default DictionaryView;
