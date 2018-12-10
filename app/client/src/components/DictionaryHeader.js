import React from 'react';
import {LinkContainer, StyledLink, Title} from "../styles/DictionaryView";
import {OuterContainer} from "../styles/DictionaryHeader";

const DictionaryHeader = (props) => {
    return (
        <OuterContainer>
            <Title>{props.name}</Title>
            <LinkContainer>
                <StyledLink className="btn btn-success" to={props.linkPath}>{props.linkLabel}</StyledLink>
            </LinkContainer>
        </OuterContainer>
    );
};

export default DictionaryHeader;
