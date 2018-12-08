import React from 'react';
import {OuterContainer, LogoContainer} from "../styles/Header";
import HeaderNavigation from "./Navigation/HeaderNavigation"

const Header = () => {
    return (
        <OuterContainer>
            <LogoContainer>
                <img src='/images/fluently.svg' />
            </LogoContainer>
            <HeaderNavigation />
        </OuterContainer>
    );
};

export default Header;
