import React from 'react';
import {Link} from 'react-router-dom';
import AuthUserContext from './Session/AuthUserContext';
import SignOutButton from './SignOut';
import * as ROUTES from '../route_types';

const Navigation = () =>
    <AuthUserContext.Consumer>
        {authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </AuthUserContext.Consumer>

const NavigationAuth = () =>
    <ul>
        <li><Link to={ROUTES.LANDING}>Landing</Link></li>
        <li><Link to={ROUTES.HOME}>Home</Link></li>
        <li><Link to={ROUTES.ACCOUNT}>Account</Link></li>
        <li><Link to={ROUTES.ADMIN}>Admin</Link></li>
        <li><SignOutButton /></li>
    </ul>

const NavigationNonAuth = () =>
    <ul>
        <li><Link to={ROUTES.LANDING}>Landing</Link></li>
        <li><Link to={ROUTES.SIGN_IN}>Sign In</Link></li>
    </ul>

export default Navigation;