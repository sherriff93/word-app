import React, { Component } from 'react';
import logo from '../logo.svg';
import styled, { keyframes } from 'styled-components';

class Home extends Component {
  render() {
  
    const appLogoSpin = keyframes `
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    `
      
    const App = styled.div `
        text-align: center;
    `
    
    const AppHeader = styled.div `
        background-color: #222;
        height: 150px;
        padding: 20px;
        color: white;
    `
  
    const AppLogo = styled.img `
        animation: ${appLogoSpin} infinite 20s linear;
        height: 80px;
    `
    
    const AppIntro = styled.p `
        font-size: large;
    `
          
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

export default Home
