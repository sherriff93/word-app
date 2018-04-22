import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components';

import Dictionary from './Dictionary'

import {addDictionary} from '../actions/actions'

class App extends Component {
    
    constructor() {
        super()
        this.onClick = this.onClick.bind(this)
    }
    
    render() {
        
        injectGlobal `
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
        `
        
        const GridContainer = styled.div `
            display: grid;
            grid-template-columns: 30% 50% 20%;
            grid-template-rows: 3vh 97vh;
            grid-template-areas:
                'header header header'
                'sidebar main main'
        `
        
        const Main = styled.div `
            grid-area: main;
        `
        
        const Header = styled.div `
            grid-area: header;
            background: #33ccff;
            z-index: 1;
            box-shadow: 0 0 10px grey;
        `
        // TODO Get rid of box shadow between sidebar and header
        const Sidebar = styled.div `
            grid-area: sidebar;
            padding: 10px;
            background: #f0f0f0;
            box-shadow: 0 0 10px grey;
            z-index: 2;
            > ul {
                listStyleType: none;
                padding: 0;
            }
        `
        
        const {dictionaries} = this.props
        return (
            <Router>
                <GridContainer>
                    <Header>
                    </Header>
                    <Sidebar>
                        <ul>
                            {dictionaries.map((dictionary, index) => (<Dictionary key={index} dictionary={dictionary} onDelete={this.onDelete}/>))}
                        </ul>
                        <span className="delete" onClick={this.onClick}>
                            Add Dictionary
                        </span>
                    </Sidebar>
                    
                    <Main>
                        {dictionaries.map((dictionary, index) => (<Route key={index} path={dictionary.path} exact={dictionary.exact} component={dictionary.main}/>))}
                    </Main>
                </GridContainer>
            </Router>
        )
    }

    // Custom Functions
    onClick() {
        const {onClick} = this.props
        const toAdd = prompt()
        onClick(toAdd)
    }
}

const mapStateToProps = function(store) {
    return {dictionaries: store.appState.dictionaries}
}

const mapDispatchToProps = function(dispatch) {
    return {
        onClick: (value) => {
            dispatch(addDictionary(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
