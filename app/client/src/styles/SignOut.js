import styled from 'styled-components'

export const OuterContainer = styled.span`
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
    &:hover {
        background: #28a745;
        cursor: pointer;
    }
`