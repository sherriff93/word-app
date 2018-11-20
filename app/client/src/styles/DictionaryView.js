import styled from 'styled-components';
import {Link} from "react-router-dom";

export const DictionaryHeader = styled.div `
            display: grid;
            background: #66ccff;
            height: 35px;
        `
export const CenteredDiv = styled.div `
            align-self: center;
        `
export const HeaderSection = styled.div `
            display: inline-block;
            color: black;
            text-decoration: none;
            background: ${props => props.active ? '#ff6e00' : 'transparent'}
            padding: 10px;
        `
export const Title = styled(HeaderSection) `
            
        `
export const HeaderLink = HeaderSection.withComponent(Link)
export const TestLink = styled(HeaderLink) `
            float: right;
        `