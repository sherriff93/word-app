import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import '../css/DictionaryMain.css'

import DictionaryView from './DictionaryView'
import TestWrapper from './TestWrapper'

class DictionaryMain extends Component {
  render() {
    console.log('main rerender')
    const {name, match, items} = this.props,
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
            linkPath={testPath} />
        )
      },
      {
        path: testPath,
        component: () => (
          <TestWrapper
            initialItems={items}
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
}

const mapStateToProps = function(store) {
    return {
        items: store.dictionaryMainState.items
    }
}

export default connect(
    mapStateToProps
)(DictionaryMain)
