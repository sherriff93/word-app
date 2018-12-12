import React from 'react';
import {StyledLink, LinkContainer, OuterContainer, InnerContainer, LogoContainer, Header} from "../styles/Landing";
import * as ROUTES from "../route_types";

const Landing = () => {
    return (
        <OuterContainer>
            <InnerContainer>
                <LogoContainer>
                    <img src='/images/fluently.svg' />
                </LogoContainer>
                {/*<Header>Your own personal dictionary app!</Header>*/}
                <LinkContainer>
                    <StyledLink className="btn btn-success" to={ROUTES.SIGN_UP}>Sign Up</StyledLink>
                    <StyledLink className="btn btn-success" to={ROUTES.SIGN_IN}>Sign In</StyledLink>
                </LinkContainer>
            </InnerContainer>
        </OuterContainer>
    );
};

export default Landing;
