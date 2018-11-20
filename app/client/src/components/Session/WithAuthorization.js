import React from 'react';
import { withRouter } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import { firebase } from '../../firebase';
import * as ROUTES from '../../route_types';

const withAuthorization = (authCondition) => (Component) => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listener = firebase.auth.onAuthStateChanged(authUser => {
                if (!authCondition(authUser)) {
                    this.props.history.push(ROUTES.SIGN_IN);
                }
            });
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser => authUser ? <Component {...this.props} /> : null}
                </AuthUserContext.Consumer>
            );
        }
    }

    return withRouter(WithAuthorization);
}

export default withAuthorization;