import React, { Component } from 'react';
import './DictionaryView.css';

import WordForm from '../WordForm/WordForm'
import List from '../List/List'

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
    const {name, items} = this.props
    const {labels} = this.state

    return (
      <div>
        {name}
        <button onClick={this.changeMode}>
          Test
        </button>
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
