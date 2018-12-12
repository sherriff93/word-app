import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {SignUpLink} from './SignUp';
import {PasswordForgetLink} from './PasswordForget';
import {auth} from '../firebase';
import * as ROUTES from '../route_types';
import {Header, Logo} from "../globalStyles";
import {GridContainer, LogoLarge, Main} from "../styles/Landing";
import {OuterContainer, InnerContainer, StyledInput, Contents, Button, ButtonContainer, StyledForm} from "../styles/SignIn";

const SignInPage = ({ history }) =>
    <OuterContainer>
        <InnerContainer>
            <Contents>
                <SignInForm history={history} />
                <PasswordForgetLink />
                <SignUpLink />
            </Contents>
        </InnerContainer>
    </OuterContainer>

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
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
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <StyledForm onSubmit={this.onSubmit}>
                <StyledInput
                    name="email"
                    value={email}
                    onChange={this.onChange}
                type="text"
                  placeholder="Email Address"
            />
        <StyledInput
            name="password"
            value={password}
            onChange={this.onChange}
    type="password"
    placeholder="Password"
    />
    <ButtonContainer>
        <Button className="btn btn-success" disabled={isInvalid} type="submit">Sign In</Button>
    </ButtonContainer>

    { error && <p className="alert alert-danger">{error.message}</p> }
    </StyledForm>
    );
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
};