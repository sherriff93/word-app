import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {deleteDictionary} from '../actions/actions'

class Dictionary extends Component {
    constructor(props) {
        super()
        this.labels = ['Spanish']
        this.onDictionaryClick = this.onDictionaryClick.bind(this)
    }
    
    render () {
        
        const Dictionary = styled.li `
            padding: 10px;
            height: 40px;
            display: grid;
            background: ${props => props.active ? '#ff6e00' : 'transparent'}
        `
        
        const CenteredDiv = styled.div `
            align-self: center;
        `
        
        const StyledLink = styled(Link) `
            font-family: "Lato","Geneva CY","Lucida Grande","Arial Unicode MS","Helvetica Neue","Helvetica","Arial",sans-serif;
            font-size: 15px;
            font-weight: 100;
            color: black;
            text-decoration: none;
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
            <Dictionary active={active} onClick={this.onDictionaryClick}>
                <CenteredDiv>
                    <BookIcon>
                        <FontAwesomeIcon icon="book" color="grey"/>
                    </BookIcon>
                    <StyledLink to={path}>{name}</StyledLink>
                    <EditIcon>
                        <FontAwesomeIcon onClick={() => onDelete(name)} icon="edit" color="grey"/>
                    </EditIcon>
                </CenteredDiv>
            </Dictionary>
        )
    }
    
    onDictionaryClick() {
        this.props.onClick()
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
