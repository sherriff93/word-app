import React from 'react';
import {OuterContainer, StyledSubmit, TextInput} from "../../styles/WordForm/TestWordForm";
import withWordForm from './withWordForm'

const TestWordForm = (props) => {

    const {values, onChange, onSubmit} = props
    let valuesHtml = Object.keys(values).map(function (fieldName, index) {
        return (
            <TextInput type="text" placeholder='Type in Spanish' name={fieldName} value={values[fieldName]} onChange={onChange}/>
        )
    }.bind(this))
    
    return (
        <OuterContainer>
            <form autoComplete="off" id="form" onSubmit={(e) => onSubmit(e)}>
                {valuesHtml}
                <StyledSubmit type="submit" value="Submit"/>
            </form>
        </OuterContainer>
    )
}

export default withWordForm(TestWordForm);