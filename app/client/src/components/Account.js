import React from 'react';
import AuthUserContext from './Session/AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from "./Session/WithAuthorization";
import {IS_SIGNED_IN} from "../authConditions";

const AccountPage = () =>
    <AuthUserContext.Consumer>
        {authUser =>
            <div>
                <h1>Account: {authUser.email}</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
            </div>
        }
    </AuthUserContext.Consumer>

export default withAuthorization(IS_SIGNED_IN)(AccountPage);