import React, { Component } from 'react';
import './DictionaryMain.css';

import DictionaryView from '../DictionaryView/DictionaryView'
import TestWrapper from '../TestWrapper/TestWrapper'

class DictionaryMain extends Component {
  constructor(props) {
    super()
    this.state = {
      items: {
        'To dare': {
          spanish: 'Atrever',
          index: 0
        }
      },
      mode: 'dictionary'
    }
    this.dSubmit = this.dSubmit.bind(this)
    this.dDelete = this.dDelete.bind(this)
    this.changeMode = this.changeMode.bind(this)
  }

  render() {
    const {name} = this.props
    const {items, mode} = this.state
    return (
      <div>
        {mode == 'dictionary' &&
          <DictionaryView name={name} items={items} onSubmit={this.dSubmit} onDelete={this.dDelete} changeMode={this.changeMode} />}
        {mode == 'test' &&
          <TestWrapper items={items} changeMode={this.changeMode}/>}
      </div>
    )
  }

  // Custom Functions
  dSubmit(word, labels) {
    let {items} = this.state
    items[word[labels[0]]] = {
      spanish: word[labels[1]],
      index: Date.now()
    }
    this.setState({
      items: items
    })
  }

  dDelete (english) {
    let {items} = this.state
    delete items[english]
    this.setState({items: items})
  }

  changeMode (mode) {
    this.setState({mode})
  }
}

export default DictionaryMain
