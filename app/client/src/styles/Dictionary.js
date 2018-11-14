import styled from 'styled-components';
import {Link} from "react-router-dom";
import React from 'react';

export const CenteredDiv = styled.div `
            align-self: center;
        `
export const StyledLink = styled(({ active, ...rest }) => <Link {...rest} />) `
            font-size: 15px;
            font-weight: 100;
            color: black;
            text-decoration: none;
            padding: 10px;
            height: 40px;
            display: grid;
            background: ${props => props.active ? '#ff6e00' : 'transparent'}
        `
export const BookIcon = styled.span `
            margin-right: 10px;
        `
export const EditIcon = styled.span `
            float: right;
        `