import React, { Component } from 'react';
import './TestWrapper.css';

import Test from '../Test/Test'

class TestWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = this.props
    this.onSubmit = this.onSubmit.bind(this)
  }

  render() {
    const {items} = this.state
    const keys = Object.keys(items)
    const english = keys[Math.floor(Math.random()*keys.length)]
    const spanish = items[english].spanish
    return (
      <Test english={english} spanish={spanish} onSubmit={this.onSubmit} />
    )
  }

  //Custom functions
  onSubmit(english) {
    const {items} = this.state
    delete items[english]
    this.setState({items: items})
  }

}

export default TestWrapper;
