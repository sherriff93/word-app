import React, {Component} from 'react'
// import {connect} from 'react-redux'
import styled from 'styled-components'

class WordForm extends Component {
    constructor(props) {//TODO Difference here between constructor and render?
        console.log('wordform constructor')
        super(props)
        const {labels} = this.props
        
        const values = {}
        for (let i = 0; i < labels.length; i ++) {
            values[labels[i]] = ''
        }
        this.state = {values}
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    render() {

        const TextInput = styled.input `
            width: 40%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        `
        
        console.log('wordform rerender')
        const {values} = this.state
        
        let valuesHtml = Object.keys(values).map(function (fieldName, index) {
            return (
                <label key={index}>
                    {fieldName}
                    <TextInput type="text" name={fieldName} value={values[fieldName]} onChange={this.handleChange} />
                </label>
            )
        }.bind(this))
        
        return (
            <div>
                <form id="form" onSubmit={(e) => this.handleSubmit(e)}>
                    {valuesHtml}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
    
    // Custom functions
    handleChange(e) { // TODO Give all functions correct names
        let {values} = this.state // TODO const in function definitions
        values[e.target.name] = e.target.value
        this.setState({values})
    }
    
    handleSubmit(e) {
        e.preventDefault()
        let {values} = this.state,
        newValues = {},
        hasBlankField = false
        
        Object.keys(values).forEach(function (fieldName) {
            if (values[fieldName]) { newValues[fieldName] = '' }
            else { hasBlankField = true }
        })
        
        if (!hasBlankField) {//TODO If the value is already in the list, this must fail
            this.setState({values: newValues})
            this.props.onSubmit(values)
            document.getElementById('form').firstChild.focus()
        }
    }
}

export default WordForm
// export default connect(
//     null,
//     mapDispatchToProps
// )(WordForm)
