import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Item.css'

import {deleteValue} from '../actions/actions'

class Item extends Component {
  render () {
    const {english, onDelete} = this.props
    return (
      <li>
        <div className="item">
          <span className="name">{english}</span>
          <span className="delete" onClick={() => onDelete(english)}> x </span>
        </div>
      </li>
    )
  }
}

const mapDispatchToProps = function(dispatch) {
    return {
        onDelete: (value) => {
          dispatch(deleteValue(value))// TODO This needs to be generalised to deleteDictionaries, deleteWords
        }
    }
}

export default connect(
  null,
  mapDispatchToProps
)(Item)
