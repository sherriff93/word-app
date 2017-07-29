import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../css/WordForm.css'

import {addValues} from '../actions/actions'

class WordForm extends Component {
  constructor(props) {//TODO Difference here between constructor and render?
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
    const {values} = this.state

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
        <form id="form" onSubmit={(e) => this.handleSubmit(e)}>
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
    e.preventDefault()
    let {values} = this.state,
      newValues = {},
      hasBlankField = false

    Object.keys(values).forEach(function (fieldName) {
      if (values[fieldName]) { newValues[fieldName] = '' }
      else { hasBlankField = true }
    })

    if (!hasBlankField) {//TODO If the value is already in the list, this must fail
      this.props.onSubmit(values)
      // this.setState({newValues}) // Not needed as the above component refreshes?
      document.getElementById('form').firstChild.focus()
    }
  }
}

// const mapStateToProps = function(store) {
//     return {
//         isAuthenticated: store.appState.isAuthenticated,
//         menu: store.appState.menu
//     }
// }

const mapDispatchToProps = function(dispatch) {
    return {
        onSubmit: (values) => {
          dispatch(addValues(values))// TODO This needs to be generalised to addDictionaries, addWords
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(WordForm)
