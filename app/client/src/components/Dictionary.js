import React, {Component} from 'react'
import {connect} from 'react-redux'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {deleteDictionary, showEditDictionaryPopup} from '../actions/actions'
import {CenteredDiv, StyledLink, BookIcon, EditIcon} from "../styles/Dictionary";

class Dictionary extends Component {
    constructor(props) {
        super()
        this.labels = ['Spanish']
    }
    
    render () {

        const {dictionary, active} = this.props
        const {path, name} = dictionary
        return (
            <StyledLink active={active} onClick={this.props.onClick} to={path}>
                <CenteredDiv>
                    <BookIcon>
                        <FontAwesomeIcon icon="book" color="grey"/>
                    </BookIcon>
                    {name}
                    <EditIcon>
                        <FontAwesomeIcon onClick={(dictionary) => this.props.showEditDictionaryPopup(dictionary)} icon="edit" color="grey"/>
                    </EditIcon>
                </CenteredDiv>
            </StyledLink>
        )
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        onDelete: (value) => { // TODO change to edit, not delete
            dispatch(deleteDictionary(value))
        },
        showEditDictionaryPopup: (dictionary) => {
            dispatch(showEditDictionaryPopup(dictionary))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Dictionary)
