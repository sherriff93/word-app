import React, { Component } from 'react'
import './WordForm.css'

class WordForm extends Component {
  constructor(props) {
    super()
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render() {
    const {label} = this.props
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            {label}
            <input type="text" id="word-input" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

  // Custom functions
  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    var targetValue = this.state.value
    if (targetValue) {
      this.props.onSubmit(targetValue)
      this.setState({value: ''})
      document.getElementById("word-input").focus()
    }
    e.preventDefault()
  }
}

export default WordForm
