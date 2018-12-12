import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Dictionary from './Dictionary'
import Header from './Header'
import {fetchDictionariesByUid, insertDictionary} from "../lib/dictionary_functions";
import {GridContainer, Main, Sidebar, Button, ButtonContainer, Logo} from "../styles/HomeLoggedIn";
import withAuthorization from "./Session/WithAuthorization";
import {IS_SIGNED_IN} from "../authConditions";
import {StyledLink} from "../styles/Dictionary";
import { firebase } from '../firebase';
import {OuterContainer} from "../styles/Navigation/HeaderNavigation";
import {withRouter} from 'react-router-dom';

class HomeLoggedIn extends Component {

    componentDidMount(){
        const {populate, user} = this.props
        populate(user.uid)
    }
    
    constructor(props) {
        super(props)
        this.state = { 
            activeIndex: 0
        }
        this.insertDictionary = this.insertDictionary.bind(this)
    }
    // TODO convert logo to svg
    render() {
        const {dictionaries, match} = this.props
        return (
            <GridContainer>
                <Header />
                <Sidebar>
                    <ButtonContainer>
                        <Button className="btn btn-success" onClick={this.insertDictionary}>Add Dictionary</Button>
                    </ButtonContainer>
                    {dictionaries.map((dictionary, index) => (<Dictionary key={index} matchPath={match.path} dictionary={dictionary} active={this.state.activeIndex === index} onClick={() => this.setActiveItem(index)}/>))}
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

    insertDictionary() {
        const {insertDictionary, user} = this.props
        const dictionaryName = prompt()
        const uid = user.uid
        insertDictionary(dictionaryName, uid)
    }
}

const mapStateToProps = function(store) {
    return {
        dictionaries: store.homeState.dictionaries,
        user: store.appState.user
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        populate: (uid) => {
            fetchDictionariesByUid(uid, dispatch)
        },
        insertDictionary: (dictionaryName, uid) => {
            insertDictionary(dictionaryName, uid, dispatch)
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withAuthorization(IS_SIGNED_IN)(HomeLoggedIn))); // TODO use the compose package to do this
