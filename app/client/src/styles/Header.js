import styled, {injectGlobal} from 'styled-components'

export const OuterContainer = styled.div `
            grid-area: header;
            background: var(--headerBackgroundColour);
            z-index: 1;
        `
export const LogoContainer = styled.div `
            height: 100%;
            width: 100px;
            margin-left: 20px;
            position: relative;
            float: left;
            display: flex;
            align-items: center;
            &>img {
                width: 100%;
            }
    `