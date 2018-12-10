import React from 'react';
import {OuterContainer, LogoContainer} from "../styles/Header";
import HeaderNavigation from "./Navigation/HeaderNavigation"

const Header = () => {
    return (
        <OuterContainer>
            <LogoContainer>
                <a href='/'>
                    <img src='/images/fluently.svg' />
                </a>    
            </LogoContainer>
            <HeaderNavigation />
        </OuterContainer>
    );
};

export default Header;
