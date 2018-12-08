import React from 'react';
import HeaderNavigation from "./Navigation/HeaderNavigation";
import Dictionary from "./Dictionary";
import {Button, ButtonContainer, OuterContainer, InnerContainer, LogoContainer} from "../styles/Landing";

const Landing = () => {
    return (
        <OuterContainer>
            <InnerContainer>
                <LogoContainer>
                    <img src='/images/fluently.svg' />
                </LogoContainer>
                <ButtonContainer>
                    <Button className="btn btn-success">Sign Up</Button>
                    <Button className="btn btn-success">Sign In</Button>
                </ButtonContainer>
            </InnerContainer>
        </OuterContainer>
    );
};

export default Landing;
