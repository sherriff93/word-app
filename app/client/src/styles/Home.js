import styled from 'styled-components'

export const GridContainer = styled.div `
            height: 100%;
            display: grid;
            grid-auto-columns: 300px auto;
            grid-template-rows: 60px auto;
            grid-template-areas:
                'header header'
                'sidebar main'
        `
export const Main = styled.div `
            grid-area: main;
            background: var(--mainBackgroundColour);
        `
export const Header = styled.div `
            grid-area: header;
            background: var(--headerBackgroundColour);
            z-index: 1;
        `
// TODO Get rid of box shadow between sidebar and header
export const Sidebar = styled.div `
            color: var(--sidebarTextColour);
            grid-area: sidebar;
            background: var(--sidebarBackgroundColour);
            z-index: 2;
            > ul {
                listStyleType: none;
                padding: 0;
            }
        `
export const Button = styled.span `
            border-radius: 50px 15px;
            width: 70%;
        `
export const ButtonContainer = styled.span `
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        `
export const Logo = styled.div `
            height: 100%;
            width: 100px;
            margin-left: 20px;
            position: relative;
            float: left;
            align-items: center;
            background-image: url(/images/fluency.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100px; 
        `