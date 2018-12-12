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
import {fetchUser} from "../actions/actions";
import { firebase } from '../firebase';
import HomeLoggedIn from "./HomeLoggedIn"
import LoadingPage from "./LoadingPage"
import {deleteWord} from "../lib/word_functions";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }
    
    componentDidMount() { // check to see if already signed in.
        this.props.fetchUser()
        this.setState({loading: false})
    }
    
    render() {
        return (
            <Router>
                <OuterContainer>
                    {
                        this.state.loading ?
                            <LoadingPage />
                            :
                            this.props.user ?
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
        showPopupWithParams: store.appState.showPopupWithParams,
        user: store.appState.user
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        fetchUser: () => {
            firebase.auth.onAuthStateChanged(user => {
                dispatch(fetchUser(user))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuthentication(App))

