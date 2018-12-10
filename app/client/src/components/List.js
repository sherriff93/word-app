import React from 'react'
import Item from './Item'
import {StyledList} from '../styles/List'

const List = (props) => {
    const {items} = props
    let itemsHtml = items.map(function (item, index) {
        return (
            <Item key={index} item={item}/>
        )
    })

    return (
        <div>
            <StyledList>{itemsHtml}</StyledList>
        </div>
    )
}

export default List;
