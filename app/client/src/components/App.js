import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Dictionary from './Dictionary'
import EditDictionaryPopup from './EditDictionaryPopup'
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './LogoPage';
import AccountPage from './Account';
import AdminPage from './Admin';
import withAuthentication from './Session/WithAuthentication';
import * as ROUTES from '../route_types';
import {fetchDictionaries, insertDictionaryByName} from "../lib/dictionary_functions";
import {GridContainer, Main, Header, Sidebar, OuterContainer} from "../styles/App";

class App extends Component {

    componentDidMount(){
        this.props.populate() // Is this still correct with higher order component above?
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
            <Router>
                <OuterContainer>
                    <Navigation authUser={this.state.authUser} />
                    {/*<Route exact path={ROUTES.LANDING} component={LandingPage} /> /!*TODO refactor*!/*/}
                    <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
                    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
                    <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                    <Route exact path={ROUTES.HOME} component={HomePage} />
                    <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
                    {/*<Route exact path={ROUTES.ADMIN} component={AdminPage} />*/}
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
        insertDictionaryByName: () => {
            const dictionaryName = prompt()
            insertDictionaryByName(dictionaryName, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withAuthentication(App));
