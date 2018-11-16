import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Dictionary from './Dictionary'
import EditDictionaryPopup from './EditDictionaryPopup'
import {fetchDictionaries, insertDictionary} from "../lib/dictionary_functions";
import {GridContainer, Main, Header, Sidebar, OuterContainer} from "../styles/App";

class App extends Component {

    componentDidMount(){
        this.props.populate()
    }
    
    constructor() {
        super()
        this.state = { activeIndex: 0 };
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
                            <span className="delete" onClick={this.props.insertDictionary}>
                                Add Dictionary
                            </span>
                        </Sidebar>
                        
                        <Main>
                            {dictionaries.map((dictionary, index) => (<Route key={index} path={dictionary.path} exact={dictionary.exact} component={dictionary.main}/>))}
                        </Main>
                    </GridContainer>
                    {this.props.showPopupWithParams ?
                        <EditDictionaryPopup
                            dictionary={this.props.showPopupWithParams.dictionary}
                            closePopup={this.showEditDictionaryPopup}
                        />
                        : null
                    }
                </OuterContainer>
            </Router>
        )
    }

    // Custom Functions
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
        populate: () => {
            fetchDictionaries(dispatch)
        },
        insertDictionary: () => {
            const dictionaryName = prompt()
            insertDictionary(dictionaryName, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
