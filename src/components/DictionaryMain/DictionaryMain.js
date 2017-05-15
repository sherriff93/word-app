import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './DictionaryMain.css'

import DictionaryView from '../DictionaryView/DictionaryView'
import TestWrapper from '../TestWrapper/TestWrapper'

class DictionaryMain extends Component {
  constructor(props) {
    super()
    this.state = {
      items: {
        'To dare': {
          spanish: 'Atrever',
          index: 0
        }
      },
      mode: 'dictionary'
    }
    this.dSubmit = this.dSubmit.bind(this)
    this.dDelete = this.dDelete.bind(this)
    this.changeMode = this.changeMode.bind(this)
  }

  render() {
    console.log()
    const {name, match} = this.props,
      {items, mode} = this.state,
      dictMainPath = match.path,
      testPath = dictMainPath + '/test',
      routes = [
      {
        path: dictMainPath,
        exact: true,
        component: () => (
          <DictionaryView
            name={name}
            items={items}
            linkPath={testPath}
            onSubmit={this.dSubmit}
            onDelete={this.dDelete}
            changeMode={this.changeMode} />
        )
      },
      {
        path: testPath,
        component: () => (
          <TestWrapper
            items={items}
            linkPath={dictMainPath}
            changeMode={this.changeMode} />
        )
      }
    ]
    return (
      <div>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </div>
    )
  }

  // Custom Functions
  dSubmit(word, labels) {
    let {items} = this.state
    items[word[labels[0]]] = {
      spanish: word[labels[1]],
      index: Date.now()
    }
    this.setState({
      items: items
    })
  }

  dDelete (english) {
    let {items} = this.state
    delete items[english]
    this.setState({items: items})
  }

  changeMode (mode) {
    this.setState({mode})
  }
}

export default DictionaryMain
