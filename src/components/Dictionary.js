import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/Dictionary.css'

class Dictionary extends Component {
  constructor(props) {
    super()
    this.handleDelete = this.handleDelete.bind(this);
  }

  render () {
    const {path, name} = this.props.dictionary
    return (
      <li>
        <div className="dictionary">
          <span className="name"><Link to={path}>{name}</Link></span>
          <span className="delete" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    )
  }

  // Custom functions
  handleDelete () {
    const {dictionary, onDelete} = this.props
    onDelete(dictionary)
  }
}

export default Dictionary;
