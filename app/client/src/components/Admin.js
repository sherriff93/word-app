import React from 'react';
import AuthUserContext from './Session/AuthUserContext';
import {IS_ADMIN_USER} from "../authConditions";
import withAuthorization from "./Session/WithAuthorization";

const Admin = () =>
    <AuthUserContext.Consumer>
        {authUser =>
            <div>
                <h1>Admin</h1>
                <p>Restricted area! Only users with the admin rule are authorized.</p>
            </div>
        }
    </AuthUserContext.Consumer>

export default withAuthorization(IS_ADMIN_USER)(Admin);