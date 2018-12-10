import React from 'react';
import {OuterContainer, StyledSubmit, TextInput, StyledLabel, StyledForm} from "../../styles/WordForm/EditDictionaryPopupWordForm";
import withWordForm from './withWordForm'

const EditDictionaryPopupWordForm = (props) => {

    const {values, onChange, onSubmit} = props
    let valuesHtml = Object.keys(values).map(function (fieldName, index) {
        return (
            <StyledLabel key={index}>
                {fieldName}
                <TextInput type="text" name={fieldName} value={values[fieldName]} onChange={onChange}/>
            </StyledLabel>
        )
    }.bind(this))

    return (
        <OuterContainer>
            <StyledForm autoComplete="off" id="form" onSubmit={(e) => onSubmit(e)}>
                {valuesHtml}
                <StyledSubmit type="submit" value="Submit"/>
            </StyledForm>
        </OuterContainer>
    )
}

export default withWordForm(EditDictionaryPopupWordForm);