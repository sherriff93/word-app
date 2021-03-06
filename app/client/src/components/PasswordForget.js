import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase';
import * as ROUTES from '../route_types';
import {SignUpLink} from "./SignUp";
import {SignInForm} from "./SignIn";
import {OuterContainer, InnerContainer, StyledInput, Contents, Button, ButtonContainer, StyledForm} from "../styles/PasswordForget";

const PasswordForgetPage = () =>
    <OuterContainer>
        <InnerContainer>
            <Contents>
                <PasswordForgetForm />
            </Contents>
        </InnerContainer>
    </OuterContainer>

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const { email } = this.state;

        auth.doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
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
            email,
            error,
        } = this.state;

        const isInvalid = email === '';

        return (
            <StyledForm onSubmit={this.onSubmit}>
                <StyledInput
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <ButtonContainer>
                    <Button className="btn btn-success" disabled={isInvalid} type="submit">Reset My Password</Button>
                </ButtonContainer>

                { error && <p>{error.message}</p> }
            </StyledForm>
        );
    }
}

const PasswordForgetLink = () =>
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>

export default PasswordForgetPage;

export {
    PasswordForgetForm,
    PasswordForgetLink,
};