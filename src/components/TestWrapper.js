import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/TestWrapper.css'

import {setItems} from '../actions/actions'

import Test from './Test'

class TestWrapper extends Component {
  constructor(props) {
    super(props)
    const {initialItems} = props
    this.props.setItems(initialItems)
    this.changeMode = this.changeMode.bind(this)
  }

  render() {
    console.log('wrapper rerender')
    console.log(this.props.items)
    const {linkPath, items, score} = this.props,
      keys = Object.keys(items),
      inProgress = keys.length > 0
    let english = null,
      spanish = null

    if (inProgress) {
      english = keys[Math.floor(Math.random()*keys.length)]
      spanish = items[english].spanish
    }

    return (
      <div>
        <Link to={linkPath}>Back to Dictionary</Link>
        {inProgress ? (
          <Test english={english} spanish={spanish} />
        ) : (
          <p>Test Complete! You got {score} correct</p>
        )}
      </div>
    )
  }

  changeMode () {
    const {changeMode} = this.props
    changeMode('dictionary')
  }// TODO get rid
}

const mapStateToProps = function(store, ownProps) {
    return {
        items: store.testWrapperState.items,
        score: store.testWrapperState.score
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        setItems: (items) => dispatch(setItems(items))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestWrapper)
