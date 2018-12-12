import styled from 'styled-components';

export const OuterContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    grid-template-columns: 14fr 15fr 14fr;
`
export const InnerContainer = styled.div`
    grid-row: 2/3;
    grid-column: 2/3;
    background: white;
    border-radius: 10px;
    padding: 50px 0 50px 0;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-content: center;
`
export const StyledInput = styled.input`
    display: block;
    background: #fff;
    color: #525865;
    border-radius: 4px;
    border: 1px solid #d1d1d1;
    box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.07);
    font-family: inherit;
    font-size: 1em;
    line-height: 1.45;
    outline: none;
    padding: 0.6em 1.45em 0.7em;
    -webkit-transition: .18s ease-out;
    -moz-transition: .18s ease-out;
    -o-transition: .18s ease-out;
    transition: .18s ease-out;
    &:hover {
        box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
    }
    &:focus {
        color: #4b515d;
        border: 1px solid #B8B6B6;
        box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
    margin-bottom: 5px;
`
export const Contents = styled.div`
    grid-column: 2/3;
    text-align: center;
`
export const Button = styled.button `
            border-radius: 50px 15px;
            padding-left: 50px;
            padding-right: 50px;
        `
export const ButtonContainer = styled.span `
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
        `
export const StyledHeader = styled.h1 `
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        `