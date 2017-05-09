import React, { Component } from 'react'
import './Item.css'

class Item extends Component {
  constructor(props) {
    super()
    this.handleDelete = this.handleDelete.bind(this);
  }

  render () {
    const {english} = this.props.item
    return (
      <li>
        <div className="item">
          <span className="name">{english}</span>
          <span className="delete" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    )
  }

  // Custom functions
  handleDelete () {
    const {item, onDelete} = this.props
    onDelete(item.index)
  }
}

export default Item;
