import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/App.css'

import Dictionary from './components/Dictionary'


class App extends Component {
  render() {
    const {dictionaries} = this.props
    return (
      <Router>
        <div style={{ display: 'flex' }}>
          <div style={{
            padding: '10px',
            width: '40%',
            background: '#f0f0f0'
          }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {dictionaries.map((dictionary, index) => (
                <Dictionary key={index} dictionary={dictionary} onDelete={ this.onDelete } />
              ))}
            </ul>
          </div>

          <div style={{ flex: 1, padding: '10px' }}>
            {dictionaries.map((dictionary, index) => (
              <Route
                key={index}
                path={dictionary.path}
                exact={dictionary.exact}
                component={dictionary.main}
              />
            ))}
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = function(store) {
    return {
        dictionaries: store.appState.dictionaries
    }
}

export default connect(
    mapStateToProps
)(App);
