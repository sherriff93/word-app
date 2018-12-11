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
            padding-left: 50px;
            padding-right: 50px;
        `
export const ButtonContainer = styled.span `
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        `
export const Main = styled.div `
            grid-area: main;
            background: var(--mainLoggedInBackgroundColour);
        `
export {Header, Logo} from "../globalStyles";










