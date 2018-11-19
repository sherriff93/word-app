import styled, {keyframes} from 'styled-components';

export const appLogoSpin = keyframes `
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    `
export const App = styled.div `
        text-align: center;
    `
export const AppHeader = styled.div `
        background-color: #222;
        height: 150px;
        padding: 20px;
        color: white;
    `
export const AppLogo = styled.img `
        animation: ${appLogoSpin} infinite 20s linear;
        height: 80px;
    `
export const AppIntro = styled.p `
        font-size: large;
    `