import React, { Component } from 'react'
import './WordForm.css'

class WordForm extends Component {
  constructor(props) {
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
    const {label} = this.props,
      {values} = this.state

    let valuesHtml = Object.keys(values).map(function (fieldName, index) {
      return (
        <label key={index}>
          {fieldName}
          <input type="text" name={fieldName} value={values[fieldName]} onChange={this.handleChange} />
        </label>
      )
    }.bind(this))

    return (
      <div>
        <form id="form" onSubmit={this.handleSubmit}>
          {valuesHtml}
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

  // Custom functions
  handleChange(e) {
    let {values} = this.state
    values[e.target.name] = e.target.value
    this.setState({values})
  }

  handleSubmit(e) {
    let {values} = this.state,
      newValues = {},
      hasBlankField = false

    Object.keys(values).map(function (fieldName, index) {
      if (values[fieldName]) { newValues[fieldName] = '' }
      else { hasBlankField = true }
    })

    if (!hasBlankField) {
      this.props.onSubmit(values)
      this.setState({newValues})
      document.getElementById('form').firstChild.focus()
    }
    e.preventDefault()
  }
}

export default WordForm
