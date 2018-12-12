import styled from 'styled-components';
import {Link} from "react-router-dom";

export const StyledLink = styled(Link) `
            border-radius: 50px 15px;
        `
export const LinkContainer = styled.span `
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-column-gap: 20px;
            grid-row-gap:10px;
            align-items: center;
            justify-content: center;
            padding: 0 70px 0 70px;
        `
export const OuterContainer = styled.div `
            height: 100%;
            display: grid;
            grid-template-columns: 24% 52% 24%;
    `
export const InnerContainer = styled.div `
            grid-column: 2/3;
            text-align: center;
    `
export const LogoContainer = styled.div `
            width: 100%;
            position: relative;
            display: flex;
            padding: 150px 0 20px 0;
            align-items: center;
            &>img {
                width: 100%;
            }
    `
export const Header = styled.h2 `
            color: white;
    `