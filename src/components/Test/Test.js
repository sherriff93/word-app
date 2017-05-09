import React, { Component } from 'react';
import './Test.css';

import WordForm from '../WordForm/WordForm'

class Test extends Component {
  constructor(props) {
    super(props)
    const {items} = this.props
    this.state = {
      randomItem: items[Math.floor(Math.random()*items.length)]
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  render() {
    const {english} = this.state.randomItem
    return (
      <div>
        <p>{english}</p>
        <WordForm label="English" onSubmit={this.onSubmit} />
      </div>
    )
  }

  // Custom Functions
  onSubmit (guess) {
    const {spanish} = this.state.randomItem
    if (guess.toLowerCase() == spanish.toLowerCase()) {
      alert('Correct')
    }
    this.setState(this.state)
  }
}

export default Test;
