import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../route_types';
import {Button, ButtonContainer} from "../../styles/Navigation/Navigation";

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
            <div>
                <ButtonContainer>
                    <Button className="btn btn-success" onClick={this.showMenu}>Show Menu</Button>
                </ButtonContainer>
                {this.state.showMenu
                    ? (
                        <div className="menu" ref={(element) => {this.dropdownMenu = element}}>
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
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.hideMenu);
            });
        }
    }
}

const NavigationAuth = () =>
    <ul>
        <li><Link to={ROUTES.LANDING}>Landing</Link></li>
        <li><Link to={ROUTES.HOME}>Home</Link></li>
        <li><Link to={ROUTES.ACCOUNT}>Account</Link></li>
        <li><Link to={ROUTES.ADMIN}>Admin</Link></li>
        <li><SignOutButton /></li>
    </ul>

const NavigationNonAuth = () =>
    <ul>
        <li><Link to={ROUTES.LANDING}>Landing</Link></li>
        <li><Link to={ROUTES.SIGN_IN}>Sign In</Link></li>
    </ul>

export default Navigation;