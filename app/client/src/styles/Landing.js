import styled from 'styled-components';

export const Button = styled.span `
            border-radius: 50px 15px;
        `
export const ButtonContainer = styled.span `
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-column-gap: 20px;
            grid-row-gap:10px;
            align-items: center;
            justify-content: center;
            padding: 0 70px 0 70px;
        `
export const OuterContainer = styled.div `
            height: 100%;
            display: grid;
            grid-template-columns: 24% 52% 24%;
    `
export const InnerContainer = styled.div `
            grid-column: 2/3;
    `
export const LogoContainer = styled.div `
            width: 100%;
            position: relative;
            display: flex;
            padding: 180px 0 20px 0;
            align-items: center;
            &>img {
                width: 100%;
            }
    `