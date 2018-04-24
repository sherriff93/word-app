import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components';

import Dictionary from './Dictionary'

import {addDictionary} from '../actions/actions'

class App extends Component {
    
    constructor() {
        super()
        this.state = { activeIndex: 0 };
        this.addDictionary = this.addDictionary.bind(this)
    }
    
    render() {
        
        injectGlobal `
            body {
                height: 100%;
                margin: 0;
                padding: 0;
                font-family: sans-serif;
            }
            
            html {
                height: 100%;
            }
            
            #root {
                height: 100%;
            }
        `
        
        const GridContainer = styled.div `
            height: 100%;
            display: grid;
            grid-template-columns: 30% 50% 20%;
            grid-template-rows: 35px auto;
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
                            {dictionaries.map((dictionary, index) => (<Dictionary key={index} dictionary={dictionary} active={this.state.activeIndex === index} onClick={() => this.setActiveItem(index)}/>))}
                        </ul>
                        <span className="delete" onClick={this.addDictionary}>
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
    addDictionary() {
        const {addDictionary} = this.props
        const toAdd = prompt()
        addDictionary(toAdd)
    }
    
    setActiveItem(index) {
        this.setState({ activeIndex: index });
    }
}

const mapStateToProps = function(store) {
    return {dictionaries: store.appState.dictionaries}
}

const mapDispatchToProps = function(dispatch) {
    return {
        addDictionary: (value) => {
            dispatch(addDictionary(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
