import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Home from './components/Home/Home'
import Dictionary from './components/Dictionary/Dictionary'
import DictionaryMain from './components/DictionaryMain/DictionaryMain'


class App extends Component {
  constructor(props) {
    super()
    this.state = {
      dictionaries: [
        {
          path: '/',
          exact: true,
          name: 'Home',
          main: Home
        },
        {
          path: '/harry-potter',
          name: 'Harry Potter',
          main: ({match}) => (<DictionaryMain name="Harry Potter" match={match} />)
        },
        {
          path: '/things-ive-heard',
          name: 'Things I\'ve heard',
          main: ({match}) => (<DictionaryMain name="Things I've heard" match={match} />)
        },
        {
          path: '/woofing',
          name: 'Woofing',
          main: ({match}) => (<DictionaryMain name='Woofing' match={match} />)
        }
      ]
    }
    this.onDelete = this.onDelete.bind(this)
  }
  render() {
    const {dictionaries} = this.state
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

  // Custom functions
  onDelete (toDelete) {
    var updated = this.state.dictionaries.filter(function(dictionary, index) {
      return toDelete.name !== dictionary.name
    })
    this.setState({
      dictionaries: updated
    })
  }
}

export default App;
