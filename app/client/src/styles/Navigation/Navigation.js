import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Button = styled.span `
            border-radius: 50px 15px;
            padding-left: 30px;
            padding-right: 30px;
        `
export const ButtonContainer = styled.div `
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-right: 20px;
        `
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    height: 100%;
    width: 100%;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
    &:hover {
        background: #28a745;
        cursor: pointer;
    }
`;
export const StyledItem = styled.li`
`;
