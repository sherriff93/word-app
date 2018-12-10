import styled from 'styled-components';

export const OuterContainer = styled.div`
            height: 50px;
            list-style: none;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid #CCC;
        `
export const TextInput = styled.input`
            width: 300px;
            background: none;
            border: none;
            margin: 0 5px 0 5px;
            color: #676767;
            &:focus {outline:0;}
            
            ::-webkit-input-placeholder { 
              color: #c7c7c7;
            }
            ::-moz-placeholder {
              color: #c7c7c7;
            }
            :-ms-input-placeholder {
              color: #c7c7c7;
            }
            :-moz-placeholder {
              color: #c7c7c7;
            }
        `
export const StyledSubmit = styled.input`
            visibility: hidden;
        `