import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../route_types';
import {Button, ButtonContainer, StyledLink, StyledItem} from "../../styles/Navigation/Navigation";

class Navigation extends Component {
    constructor() {
        super();
    
        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }
    
    render() {
        return (
            <div className="dropdown">
                <ButtonContainer>
                    <Button className="btn btn-success dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.showMenu}>Show Menu</Button>
                </ButtonContainer>
                {this.state.showMenu
                    ? (
                        <div className="menu">
                            <AuthUserContext.Consumer>
                                {authUser => authUser
                                    ? <NavigationAuth/>
                                    : <NavigationNonAuth/>
                                }
                            </AuthUserContext.Consumer>
                        </div>
                    ) : null
                }
            </div>
        )
    }

    showMenu(e) {
        e.preventDefault();
        
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.hideMenu);
        });
    }

    hideMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.hideMenu);
        });
    }
}

const NavigationAuth = () =>
    <div className="dropdown-menu show">
        <StyledLink className="dropdown-item" to={ROUTES.LANDING}>Landing</StyledLink>
        <StyledLink className="dropdown-item" to={ROUTES.LANDING}>Home</StyledLink>
        <StyledLink className="dropdown-item" to={ROUTES.ACCOUNT}>Account</StyledLink>
        <StyledLink className="dropdown-item" to={ROUTES.ADMIN}>Admin</StyledLink>
        <SignOutButton />
    </div>

const NavigationNonAuth = () =>
    <div className="dropdown-menu show">
        <StyledLink className="dropdown-item" to={ROUTES.LANDING}>Landing</StyledLink>
        <StyledLink className="dropdown-item" to={ROUTES.SIGN_IN}>Sign In</StyledLink>
    </div>

export default Navigation;