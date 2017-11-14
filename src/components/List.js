import React, { Component } from 'react'
import '../css/List.css'

import Item from './Item'

class List extends Component {
  constructor(props) {
    super()
  }

  render () {
    const {items} = this.props//TODO Its inconsistent to have this as props and the dictionaries in DictionaryList as state
    let itemsHtml = Object.keys(items).map(function (item, index) {
      return (
        <Item key={index} english={item} />
      )
    })

    return (
      <div id="item-list">
        <ul>{itemsHtml}</ul>
      </div>
    )
  }
}

export default List;
