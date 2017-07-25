import React, { Component } from 'react';
import '../css/Test.css';

import WordForm from './WordForm'

class Test extends Component {
  constructor(props) {
    super()
    this.state = {
      label: 'English'
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  render() {
    const {english} = this.props,
      {label} = this.state,
      labels = [label]

    return (
      <div>
        <p>{english}</p>
        <WordForm labels={labels} onSubmit={this.onSubmit} />
      </div>
    )
  }

  // Custom Functions
  onSubmit (guess) {
    const {english, spanish} = this.props,
      {label} = this.state

    let isCorrect = 0
    if (guess[label].toLowerCase() === spanish.toLowerCase()) {
      alert('Correct')
      isCorrect = 1
    }
    this.props.onSubmit(english, isCorrect)
  }
}

export default Test;
