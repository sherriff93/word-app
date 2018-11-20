import React from 'react';
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {OuterContainer} from "../styles/App";
import Navigation from "./Navigation";
import * as ROUTES from "../route_types";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import PasswordForgetPage from "./PasswordForget";
import AccountPage from "./Account";
import EditDictionaryPopup from "./EditDictionaryPopup";
import withAuthentication from "./Session/WithAuthentication";
import Home from "./Home"
import Admin from "./Admin";

const App = (props) =>
        <Router>
            <OuterContainer>
                <Navigation />
                {/*<Route exact path={ROUTES.LANDING} component={LandingPage} /> /!*TODO refactor*!/*/}
                <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
                <Route exact path={ROUTES.ADMIN} component={Admin} />
                {props.showPopupWithParams ?
                    <EditDictionaryPopup
                        dictionary={props.showPopupWithParams.dictionary}
                        closePopup={this.showEditDictionaryPopup}
                    />
                    : null
                }
            </OuterContainer>
        </Router>

const mapStateToProps = function(store) {
    return {
        showPopupWithParams: store.appState.showPopupWithParams
    }
}

export default connect(mapStateToProps)(withAuthentication(App))

