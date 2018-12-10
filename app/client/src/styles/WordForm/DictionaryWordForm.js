import styled from 'styled-components';

export const OuterContainer = styled.div `
            border-radius: 4px;
            height: 50px;
            background: var(--dictionaryMainWordFormColour);
            list-style: none;
            padding: 20px 20px 20px 20px;
            margin: 20px 50px 0 50px;
            display: flex;
            align-items: center;
            box-shadow: 3px 3px 5px 0px #c7c7c7;
            box-sizing: border-box;
        `
export const TextInput = styled.input`
            width: 80%;
            background: none;
            border: none;
            margin: 0 5px 0 5px;
            color: white;
            &:focus {outline:0;}
        `
export const StyledSubmit = styled.input`
            visibility: hidden;
        `
export const StyledLabel = styled.label`
            color: #b7b7b7;
            margin: 0;
            width: 40%
        `
export const StyledForm = styled.form`
            width: 100%
            display: flex;
            justify-content: space-between;
        `