import styled from 'styled-components';

export const TextInput = styled.input `
        width: 40%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        `
export const Header = styled.div `
            grid-area: header;
            background: var(--headerBackgroundColour);
            z-index: 1;
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