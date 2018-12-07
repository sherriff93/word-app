import React, {Component} from 'react';
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
import Home from "./HomeLoggedIn"
import Admin from "./Admin";
import Landing from "./Landing";
import HomeLoggedOut from "./HomeLoggedOut"
import DictionaryMain from "./DictionaryMain";
import {deleteDictionary, showEditDictionaryPopup} from "../actions/actions";
import { firebase } from '../firebase';
import HomeLoggedIn from "./HomeLoggedIn"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {auth: false};
    }
    
    componentDidMount() { // check to see if already signed in.
        firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({auth: user});
            } else {
                this.setState({auth: false});
            }
        });
    }
    
    render() {
        return (
            <Router>
                <OuterContainer>
                    {
                        this.state.auth ?
                            <HomeLoggedIn /> :
                            <HomeLoggedOut />
                    }
                    {
                        this.props.showPopupWithParams ?
                        <EditDictionaryPopup
                            dictionary={this.props.showPopupWithParams.dictionary}
                        />
                        : null
                    }
                </OuterContainer>
            </Router>
        )
    }
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

