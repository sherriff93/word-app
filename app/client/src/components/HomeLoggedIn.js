import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Dictionary from './Dictionary'
import {fetchDictionaries, insertDictionaryByName} from "../lib/dictionary_functions";
import {GridContainer, Main, Header, Sidebar, Button, ButtonContainer, Logo} from "../styles/HomeLoggedIn";
import withAuthorization from "./Session/WithAuthorization";
import {IS_SIGNED_IN} from "../authConditions";
import HeaderNavigation from "./Navigation/HeaderNavigation"
import {StyledLink} from "../styles/Dictionary";
import { firebase } from '../firebase';
import {OuterContainer} from "../styles/Navigation/HeaderNavigation";
import {withRouter} from 'react-router-dom';

class HomeLoggedIn extends Component {

    componentDidMount(){
        this.props.populate()
    }
    
    constructor(props) {
        super(props)
        this.state = { 
            activeIndex: 0
        }
    }
    // TODO convert logo to svg
    render() {
        const {dictionaries, match} = this.props
        return (
            <GridContainer>
                <Header>
                    <Logo />
                    <HeaderNavigation />
                </Header>
                <Sidebar>
                    <ButtonContainer>
                        <Button className="btn btn-success" onClick={this.props.insertDictionaryByName}>Add Dictionary</Button>
                    </ButtonContainer>
                    {dictionaries.map((dictionary, index) => (<Dictionary key={index} matchPath={match.path} dictionary={dictionary} active={this.state.activeIndex === index} onClick={() => this.setActiveItem(index)}/>))}
                </Sidebar>
                
                <Main>
                    {dictionaries.map((dictionary, index) => (<Route key={index} path={decodeURI(dictionary.path)} exact={dictionary.exact} component={dictionary.main}/>))}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withAuthorization(IS_SIGNED_IN)(HomeLoggedIn))); // TODO use the compose package to do this
