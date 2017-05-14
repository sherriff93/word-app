import React, { Component } from 'react';
import './TestWrapper.css';

import Test from '../Test/Test'

class TestWrapper extends Component {
  constructor(props) {
    super(props)
    const {items} = this.props
    this.state = {
      items: {...items},
      score: 0
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.changeMode = this.changeMode.bind(this)
  }

  render() {
    const {items, score} = this.state
    const keys = Object.keys(items),
      inProgress = keys.length > 0
    let english = null,
      spanish = null

    if (inProgress) {
      english = keys[Math.floor(Math.random()*keys.length)]
      spanish = items[english].spanish
    }

    return (
      <div>
        <button onClick={this.changeMode}>
          Back to Dictionary
        </button>
        {inProgress ? (
          <Test english={english} spanish={spanish} onSubmit={this.onSubmit} />
        ) : (
          <p>Test Complete! You got {score} correct</p>
        )}
      </div>
    )
  }

  //Custom functions
  onSubmit(english, isCorrect) {
    let {items, score} = this.state
    delete items[english]
    score += isCorrect
    this.setState({items, score})
  }

  changeMode () {
    const {changeMode} = this.props
    changeMode('dictionary')
  }
}

export default TestWrapper;
