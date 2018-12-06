import React from 'react';
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {OuterContainer} from "../styles/App";
import * as ROUTES from "../route_types";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import PasswordForgetPage from "./PasswordForget";
import AccountPage from "./Account";
import EditDictionaryPopup from "./EditDictionaryPopup";
import withAuthentication from "./Session/WithAuthentication";
import Home from "./Home"
import Admin from "./Admin";
import LandingPage from "./Landing";
import DictionaryMain from "./DictionaryMain";
import {deleteDictionary, showEditDictionaryPopup} from "../actions/actions";

const App = (props) => {
    const routes = [
        {
            path: ROUTES.LANDING,
            component: LandingPage,
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
            path: ROUTES.HOME,
            component: Home
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
        <Router>
            <OuterContainer>
                {routes.map((route, index) => (<Route key={index} path={route.path} exact={route.exact} component={route.component}/>))}
                {props.showPopupWithParams ?
                    <EditDictionaryPopup
                        dictionary={props.showPopupWithParams.dictionary}
                    />
                    : null
                }
            </OuterContainer>
        </Router>
    )
}
        

const mapStateToProps = function(store) {
    return {
        showPopupWithParams: store.appState.showPopupWithParams
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        showEditDictionaryPopup: (dictionary) => {
            dispatch(showEditDictionaryPopup(dictionary))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuthentication(App))

