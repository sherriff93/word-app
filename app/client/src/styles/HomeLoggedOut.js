import styled from 'styled-components';

export const GridContainer = styled.div `
            height: 100%;
            display: grid;
            grid-auto-columns: auto;
            grid-template-rows: 60px auto;
            grid-template-areas:
                'header'
                'main'
        `
export const Main = styled.div `
            grid-area: main;
            background: var(--dictionaryMainHeaderBackgroundColour);
        `
