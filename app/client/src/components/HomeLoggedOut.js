import React from 'react';
import {Header, Logo} from "../globalStyles";
import HeaderNavigation from "./Navigation/HeaderNavigation";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {GridContainer, Main, SignInForm} from "../styles/HomeLoggedOut";
import {PasswordForgetLink} from "./PasswordForget";
import {SignUpLink} from "./SignUp";
import * as ROUTES from "../route_types";
import Landing from "./Landing";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import PasswordForgetPage from "./PasswordForget";
import HomeLoggedIn from "./HomeLoggedIn";
import AccountPage from "./Account";
import Admin from "./Admin";

const HomeLoggedOut = () => {
    const routes = [
        {
            path: ROUTES.LANDING,
            component: Landing,
            exact: true
        },
        {
            path: ROUTES.SIGN_UP,
            component: SignUpPage
        },
        {
            path: ROUTES.SIGN_IN,
            component: SignInPage
        },
        {
            path: ROUTES.PASSWORD_FORGET,
            component: PasswordForgetPage
        },
        {
            path: ROUTES.ACCOUNT,
            component: AccountPage
        },
        {
            path: ROUTES.ADMIN,
            component: Admin
        }
    ]
    
    return (
        <GridContainer>
            <Header>
                <Logo />
                <HeaderNavigation />
            </Header>
            <Main>
                {routes.map((route, index) => (<Route key={index} path={route.path} exact={route.exact} component={route.component}/>))}
            </Main>
        </GridContainer>
    );
};

export default HomeLoggedOut;
