import React from 'react'
import {connect} from 'react-redux'
import {deleteWord} from '../lib/word_functions'
import {StyledItem} from "../styles/Item";

const Item = (props) => {
    const {item, onDelete} = props
    return (
        <StyledItem>
            <div>
                <span className="name">{item.english}</span>
                <span className="delete" onClick={() => onDelete(item)}> x </span>
            </div>
        </StyledItem>
    )
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
