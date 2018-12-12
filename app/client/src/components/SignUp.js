import React, { Component } from 'react';
import {
    Link,
    withRouter,
} from 'react-router-dom';

import { auth } from '../firebase';
import * as ROUTES from '../route_types';
import {Header, Logo} from "../globalStyles";
import HeaderNavigation from "./Navigation/HeaderNavigation";
import {GridContainer, Main} from "../styles/Landing";
import {PasswordForgetLink} from "./PasswordForget";
import {SignInForm} from "./SignIn";
import {OuterContainer, ButtonContainer, Button, Contents, StyledInput, InnerContainer, StyledForm} from "../styles/SignUp";

const SignUpPage = ({ history }) =>
        <OuterContainer>
            <InnerContainer>
                <Contents>
                    <SignUpForm history={history} />
                </Contents>
            </InnerContainer>
        </OuterContainer>

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            username,
            email,
            passwordOne,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                history.push(ROUTES.LANDING);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';


        return (
            <StyledForm onSubmit={this.onSubmit}>
                <StyledInput
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <StyledInput
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <StyledInput
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <StyledInput
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <ButtonContainer>
                    <Button className="btn btn-success" disabled={isInvalid} type="submit">
                        Sign Up
                    </Button>
                </ButtonContainer>

                { error && <p className="alert alert-danger">{error.message}</p> }
            </StyledForm>
        );
    }
}

const SignUpLink = () =>
    <div>
        Don't have an account?
        {' '}
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </div>

export default withRouter(SignUpPage);

export {
    SignUpForm,
    SignUpLink,
};