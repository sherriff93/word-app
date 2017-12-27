import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Item.css'

import {fetchWordsStart} from '../actions/actions'
import {fetchWordsSuccess} from '../actions/actions'
import {fetchWordsFail} from '../actions/actions'

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
            dispatch(fetchWordsStart())
            fetch('/api/words/' + item._id, {
                method: 'DELETE'
            })
            .then(response => {
                if(response.status === 200){
                    response.json() // TODO What happens if this fails?
                    .then(json => dispatch(fetchWordsSuccess(json)))
                }
                else{
                    dispatch(fetchWordsFail())
                }
            })
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Item)
