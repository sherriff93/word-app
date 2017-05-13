import React, { Component } from 'react'
import './List.css'

import Item from '../Item/Item'

class List extends Component {
  constructor(props) {
    super()
    this.onDelete = this.onDelete.bind(this)
  }

  render () {
    var {items} = this.props
    items = Object.keys(items).map(function (item, index) {
      return (
        <Item key={index} english={item} onDelete={this.onDelete} />
      )
    }.bind(this))

    return (
      <div id="item-list">
        <ul>{items}</ul>
      </div>
    )
  }

  // Custom functions
  onDelete (english) {
    const {onDelete} = this.props
    onDelete(english)
  }
}

export default List;
