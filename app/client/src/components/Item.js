import React from 'react'
import {connect} from 'react-redux'
import {deleteWord} from '../lib/word_functions'
import {StyledItem, Name, TrashIcon} from "../styles/Item";

const Item = (props) => {
    const {item, onDelete} = props
    return (
        <StyledItem>
            <Name className="name">{item.english}</Name>
            <TrashIcon icon='trash' onClick={() => onDelete(item)} color='grey' />
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
