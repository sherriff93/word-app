import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {setItems} from '../actions/actions'
import {resetScore} from '../actions/actions'
import Test from './Test'
import DictionaryHeader from "./DictionaryHeader";
import {OuterContainer, InnerContainer} from "../styles/TestWrapper";

class TestWrapper extends Component {
    constructor(props) {
        super(props)
        const {initialItems} = props
        this.props.setItems(initialItems)
    }

    render() {
        const {linkPath, items, score, resetScore, name} = this.props,
            inProgress = items.length > 0
        let english = null,
            spanish = null

        if (inProgress) {
            let item = items[Math.floor(Math.random() * items.length)]
            english = item.english
            spanish = item.spanish
        }

        return (
            <div>
                <DictionaryHeader linkLabel='Back to Dictionary' linkPath={linkPath} name={name}/>
                <OuterContainer>
                    <InnerContainer>
                        {inProgress ? (
                            <React.Fragment>
                                <h1>Type the translation!</h1>
                                <Test english={english} spanish={spanish}/>
                            </React.Fragment>
                        ) : (
                            <p>Test Complete! You got {score} correct</p>
                        )}
                    </InnerContainer>
                </OuterContainer>
            </div>
        )
    }
}

const mapStateToProps = function (store, ownProps) {
    return {
        items: store.testWrapperState.items,
        score: store.testWrapperState.score
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        setItems: (items) => dispatch(setItems(items)),
        resetScore: () => dispatch(resetScore())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestWrapper)
