import React, { Component } from 'react';
import './DictionaryMain.css';

import DictionaryView from '../DictionaryView/DictionaryView'
import Test from '../Test/Test'

class DictionaryMain extends Component {
  constructor(props) {
    super()
    this.state = {
      items: [
        {
          index: 1,
          english: 'To dare',
          spanish: 'Atrever'
        }
      ]
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
        <Test items={items} />
      </div>
    )
  }

  // Custom Functions
  dSubmit(value) {
    console.log(value)
    var {items} = this.state
    items.unshift({
      index: Date.now(),
      english: value,
      spanish: 'SPANISH'
    })
    this.setState({
      items: items
    })
  }

  // tSubmit(guess) {
  //   const {items} = this.state
  //   items.unshift({
  //     index: Date.now(),
  //     value: value
  //   })
  //   this.setState({
  //     items: items
  //   })
  // }

  dDelete (index) {
    var items = this.state.items.filter(function(item) {
      return index !== item.index
    })
    this.setState({items: items})
  }
}

export default DictionaryMain
