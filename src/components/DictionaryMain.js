import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '../css/DictionaryMain.css'

import DictionaryView from './DictionaryView'
import TestWrapper from './TestWrapper'

class DictionaryMain extends Component {
  render() {
    console.log('main rerender')
    const {name, match} = this.props,
      dictMainPath = match.path,
      testPath = dictMainPath + '/test',
      routes = [
      {
        path: dictMainPath,
        exact: true,
        component: () => (
          <DictionaryView name={name} linkPath={testPath} />
        )
      },
      {
        path: testPath,
        component: () => (
          <TestWrapper linkPath={dictMainPath} />
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
}

export default DictionaryMain
