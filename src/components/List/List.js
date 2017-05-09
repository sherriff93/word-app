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
    items = items.map(function (item, index) {
      return (
        <Item key={index} item={item} onDelete={this.onDelete} />
      )
    }.bind(this))

    return (
      <div id="item-list">
        <ul>{items}</ul>
      </div>
    )
  }

  // Custom functions
  onDelete (index) {
    const {onDelete} = this.props
    onDelete(index)
  }
}

export default List;
