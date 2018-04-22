import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {deleteDictionary} from '../actions/actions'

class Dictionary extends Component {
    render () {
        
        const Dictionary = styled.li `
            margin-bottom: 10px;
        `
        
        const StyledLink = styled(Link) `
            font-family: "Lato","Geneva CY","Lucida Grande","Arial Unicode MS","Helvetica Neue","Helvetica","Arial",sans-serif;
            color: black;
            text-decoration: none;
        `
        
        const BookIcon = styled.span `
            margin-right: 10px;
        `
        
        const EditIcon = styled.span `
            float: right;
        `

        console.log('dictionary rerender')
        const {dictionary, onDelete} = this.props
        const {path, name} = dictionary
        return (
            <Dictionary>
                <BookIcon>
                    <FontAwesomeIcon icon="book" color="grey"/>
                </BookIcon>
                <StyledLink to={path}>{name}</StyledLink>
                <EditIcon>
                    <FontAwesomeIcon onClick={() => onDelete(name)} icon="edit" color="grey"/>
                </EditIcon>
            </Dictionary>
        )
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        onDelete: (value) => { // TODO change to edit, not delete
            dispatch(deleteDictionary(value))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Dictionary)
