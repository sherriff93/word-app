import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {deleteDictionary, showEditDictionaryPopup} from '../actions/actions'

class Dictionary extends Component {
    constructor(props) {
        super()
        this.labels = ['Spanish']
        this.onDictionaryClick = this.onDictionaryClick.bind(this)
        this.showEditDictionaryPopup = this.showEditDictionaryPopup.bind(this)
    }
    
    render () {
        
        const CenteredDiv = styled.div `
            align-self: center;
        `
        
        const StyledLink = styled(Link) `
            font-size: 15px;
            font-weight: 100;
            color: black;
            text-decoration: none;
            padding: 10px;
            height: 40px;
            display: grid;
            background: ${props => props.active ? '#ff6e00' : 'transparent'}
        `
        
        const BookIcon = styled.span `
            margin-right: 10px;
        `
        
        const EditIcon = styled.span `
            float: right;
        `

        const {dictionary, onDelete, active} = this.props
        const {path, name} = dictionary
        return (
            <StyledLink active={active} onClick={this.onDictionaryClick} to={path}>
                <CenteredDiv>
                    <BookIcon>
                        <FontAwesomeIcon icon="book" color="grey"/>
                    </BookIcon>
                    {name}
                    <EditIcon>
                        <FontAwesomeIcon onClick={() => this.showEditDictionaryPopup()} icon="edit" color="grey"/>
                    </EditIcon>
                </CenteredDiv>
            </StyledLink>
        )
    }
    
    onDictionaryClick() {
        this.props.onClick()
    }

    showEditDictionaryPopup() {
        const {dictionary, showEditDictionaryPopup} = this.props
        showEditDictionaryPopup(dictionary)
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
