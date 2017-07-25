import React, { Component } from 'react'
import '../css/List.css'

import Item from './Item'

class List extends Component {
  constructor(props) {
    super()
    this.onDelete = this.onDelete.bind(this)
  }

  render () {
    const {items} = this.props
    let itemsHtml = Object.keys(items).map(function (item, index) {
      return (
        <Item key={index} english={item} onDelete={this.onDelete} />
      )
    }.bind(this))

    return (
      <div id="item-list">
        <ul>{itemsHtml}</ul>
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
