import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled, {injectGlobal} from 'styled-components'
import Dictionary from './Dictionary'
import Popup from './Popup'
import {addDictionary} from '../actions/actions' // TODO Delete spaces in all files

injectGlobal `
            :root {
              --red: #b00;
            }
            
            body {
                height: 100%;
                margin: 0;
                padding: 0;
                font-family: "Lato","Geneva CY","Lucida Grande","Arial Unicode MS","Helvetica Neue","Helvetica","Arial",sans-serif;
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
            grid-auto-columns: 300px auto;
            grid-template-rows: 35px auto;
            grid-template-areas:
                'header header'
                'sidebar main'
        `
const Main = styled.div `
            grid-area: main;
        `
const Header = styled.div `
            grid-area: header;
            background: var(--red);
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
const OuterContainer = styled.div `
            height: 100%;
        `

class App extends Component {
    
    constructor() {
        super()
        this.state = { activeIndex: 0 };
        this.addDictionary = this.addDictionary.bind(this)
    }
    
    render() {
        
        const {dictionaries} = this.props
        return (
            <Router>
                <OuterContainer>
                    <GridContainer>
                        <Header>
                        </Header>
                        <Sidebar>
                            {dictionaries.map((dictionary, index) => (<Dictionary key={index} dictionary={dictionary} active={this.state.activeIndex === index} onClick={() => this.setActiveItem(index)}/>))}
                            <span className="delete" onClick={this.addDictionary}>
                                Add Dictionary
                            </span>
                        </Sidebar>
                        
                        <Main>
                            {dictionaries.map((dictionary, index) => (<Route key={index} path={dictionary.path} exact={dictionary.exact} component={dictionary.main}/>))}
                        </Main>
                    </GridContainer>
                    {this.props.showPopupWithParams ?
                        <Popup
                            text='Close Me'
                            closePopup={this.showEditDictionaryPopup}
                        />
                        : null
                    }
                </OuterContainer>
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
    return {
        dictionaries: store.appState.dictionaries,
        showPopupWithParams: store.appState.showPopupWithParams
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        addDictionary: (value) => {
            dispatch(addDictionary(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
