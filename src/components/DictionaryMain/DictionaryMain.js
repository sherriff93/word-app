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
      }
    }
    this.dSubmit = this.dSubmit.bind(this)
    this.dDelete = this.dDelete.bind(this)
  }

  render() {
    const {name} = this.props
    const {items} = this.state
    return (
      <div>
        <DictionaryView name={name} items={items} onSubmit={this.dSubmit} onDelete={this.dDelete}/>
        <TestWrapper items={items} />
      </div>
    )
  }

  // Custom Functions
  dSubmit(value) {
    let {items} = this.state
    items[value] = {
      spanish: 'SPANISH',
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
}

export default DictionaryMain
