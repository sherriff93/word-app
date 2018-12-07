import React from 'react';
import {OuterContainer} from "../styles/SignOut";
import {auth} from '../firebase';
import * as ROUTES from "../route_types";
import {withRouter} from 'react-router-dom';

const SignOutButton = (props) => {
    const onSubmit = (props) => {
        const {history} = props
        auth.doSignOut()
            .then(() => {
                history.push(ROUTES.LANDING);
            })
    }
    return (
        <OuterContainer className="dropdown-item" onClick={() => onSubmit(props)}>
            Sign Out
        </OuterContainer>
    )
}

export default withRouter(SignOutButton);