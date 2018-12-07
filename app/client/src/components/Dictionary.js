import React, {Component} from 'react'
import {connect} from 'react-redux'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {deleteDictionary, showEditDictionaryPopup} from '../actions/actions'
import {CenteredDiv, StyledLink, BookIcon, EditIcon} from "../styles/Dictionary";
import AuthUserContext from "./Session/AuthUserContext";

class Dictionary extends Component {
    constructor(props) {
        super()
        this.labels = ['Spanish']
    }
    
    render () {

        const {dictionary, active, matchPath} = this.props
        const fullPath = dictionary.path
        return (
            <StyledLink active={active} onClick={this.props.onClick} to={fullPath}>
                <CenteredDiv>
                    <BookIcon>
                        <FontAwesomeIcon icon="book" color="grey"/>
                    </BookIcon>
                    {this.props.active
                        ? (
                            <strong>{dictionary.name}</strong>
                        ) : dictionary.name
                    }
                    <EditIcon>
                        <FontAwesomeIcon onClick={() => this.props.showEditDictionaryPopup(dictionary)} icon="edit" color="grey"/>
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
