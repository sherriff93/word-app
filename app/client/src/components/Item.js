import React, { Component } from 'react'
import { connect } from 'react-redux'

import {deleteWord} from '../lib'

class Item extends Component {
    render () {
        console.log('item rerender')
        const {item, onDelete} = this.props
        return (
            <li>
                <div className="item">
                    <span className="name">{item.english}</span>
                    <span className="delete" onClick={() => onDelete(item)}> x </span>
                </div>
            </li>
        )
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        onDelete: (item) => {
            deleteWord(item, dispatch)
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Item)
