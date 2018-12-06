import React from 'react';
import {OuterContainer} from "../styles/SignOut";
import {auth} from '../firebase';

const SignOutButton = () =>
    <OuterContainer className="dropdown-item" onClick={auth.doSignOut}>
        Sign Out
    </OuterContainer>

export default SignOutButton;