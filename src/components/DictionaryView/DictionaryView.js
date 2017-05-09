import React, { Component } from 'react';
import './DictionaryView.css';

import WordForm from '../WordForm/WordForm'
import List from '../List/List'

class DictionaryView extends Component {
  constructor(props) {
    super()
    this.onSubmit = this.onSubmit.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  render() {
    const {name, items} = this.props
    return (
      <div>
        {name}
        <WordForm label="English" onSubmit={this.onSubmit} />
        <List items={items} onDelete={this.onDelete} />
      </div>
    )
  }

  // Custom Functions
  onSubmit (value) {
    const {onSubmit} = this.props
    onSubmit(value)
  }

  onDelete (index) {
    const {onDelete} = this.props
    onDelete(index)
  }
}

export default DictionaryView;
