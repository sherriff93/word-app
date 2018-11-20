import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Dictionary from './Dictionary'
import {fetchDictionaries, insertDictionaryByName} from "../lib/dictionary_functions";
import {GridContainer, Main, Header, Sidebar} from "../styles/Home";

class Home extends Component {

    componentDidMount(){
        this.props.populate()
    }
    
    constructor(props) {
        super(props)
        this.state = { 
            activeIndex: 0
        }
    }
    
    render() {
        
        const {dictionaries} = this.props
        return (
            <GridContainer>
                <Header>
                </Header>
                <Sidebar>
                    {dictionaries.map((dictionary, index) => (<Dictionary key={index} dictionary={dictionary} active={this.state.activeIndex === index} onClick={() => this.setActiveItem(index)}/>))}
                    <span className="delete" onClick={this.props.insertDictionaryByName}>
                        Add Dictionary
                    </span>
                </Sidebar>
                
                <Main>
                    {dictionaries.map((dictionary, index) => (<Route key={index} path={dictionary.path} exact={dictionary.exact} component={dictionary.main}/>))}
                </Main>
            </GridContainer>
        )
    }

    // Custom Functions
    setActiveItem(index) {
        this.setState({ activeIndex: index });
    }
}

const mapStateToProps = function(store) {
    return {
        dictionaries: store.homeState.dictionaries,
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        populate: () => {
            fetchDictionaries(dispatch)
        },
        insertDictionaryByName: () => {
            const dictionaryName = prompt()
            insertDictionaryByName(dictionaryName, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
