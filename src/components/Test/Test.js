import React, { Component } from 'react';
import './Test.css';

import WordForm from '../WordForm/WordForm'

class Test extends Component {
  constructor(props) {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  render() {
    const {english} = this.props

    return (
      <div>
        <p>{english}</p>
        <WordForm label="English" onSubmit={this.onSubmit} />
      </div>
    )
  }

  // Custom Functions
  onSubmit (guess) {
    const {english, spanish} = this.props
    if (guess.toLowerCase() === spanish.toLowerCase()) {
      alert('Correct')
    }
    this.props.onSubmit(english)
  }
}

export default Test;
