import React, {Component} from 'react'
import Item from './Item'

class List extends Component {
  constructor(props) {
    super()
  }

  render () {
    const {items} = this.props
    let itemsHtml = items.map(function (item, index) {
      return (
        <Item key={index} item={item} />
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
