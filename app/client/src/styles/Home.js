import styled from 'styled-components'

export const GridContainer = styled.div `
            height: 100%;
            display: grid;
            grid-auto-columns: 300px auto;
            grid-template-rows: 35px auto;
            grid-template-areas:
                'header header'
                'sidebar main'
        `
export const Main = styled.div `
            grid-area: main;
        `
export const Header = styled.div `
            grid-area: header;
            background: var(--red);
            z-index: 1;
            box-shadow: 0 0 10px grey;
        `
// TODO Get rid of box shadow between sidebar and header
export const Sidebar = styled.div `
            grid-area: sidebar;
            background: #f0f0f0;
            box-shadow: 0 0 10px grey;
            z-index: 2;
            > ul {
                listStyleType: none;
                padding: 0;
            }
        `