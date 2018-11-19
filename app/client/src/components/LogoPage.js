import React, {Component} from 'react';
import logo from '../logo.svg';
import {App, AppHeader, AppLogo, AppIntro} from "../styles/LogoPage";

class LogoPage extends Component {
  render() {
          
    return (
        <App>
            <AppHeader>
                <AppLogo src={logo} alt="logo" />
                <h2>Word App</h2>
            </AppHeader>
            <AppIntro>
                Your own personal dictionary.
            </AppIntro>
                {/*<DictionaryList />*/}
        </App>
    )
  }
}

export default LogoPage
