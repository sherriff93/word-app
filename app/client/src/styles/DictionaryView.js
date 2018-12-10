import styled from 'styled-components';
import {Link} from "react-router-dom";

export const HeaderSection = styled.div `
            display: inline-block;
            color: black;
            text-decoration: none;
            background: ${props => props.active ? '#ff6e00' : 'transparent'}
            padding: 13px 10px 10px 10px;
        `
export const Title = styled(HeaderSection) `
            color: var(--sidebarTextColour);
        `
export const HeaderLink = HeaderSection.withComponent(Link)
export const StyledLink = styled(Link) `
            border-radius: 50px 15px;
            padding-left: 30px;
            padding-right: 30px;
        `
export const LinkContainer = styled.div `
            display: flex;
            align-items: center;
            padding-right: 20px;
        `