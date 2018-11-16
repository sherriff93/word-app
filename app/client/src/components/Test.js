import React, {Component} from 'react';
import {connect} from 'react-redux'
import {questionAnswered} from '../actions/actions'
import WordForm from './WordForm'

class Test extends Component {
    constructor() {
        super()
        this.labels = ['Spanish']
        this.onSubmit = this.onSubmit.bind(this)
    }

    render() {
        const {english} = this.props,
            {labels} = this

        return (
            <div>
                <p>{english}</p>
                <WordForm labels={labels} onSubmit={this.onSubmit} />
            </div>
        )
    }

    onSubmit (guess) {
        const {labels} = this // TODO is there a way to get rid of this function?
        this.props.onSubmit(guess, labels)
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        onSubmit: (guess, labels) => {
            const {english, spanish} = ownProps
            let isCorrect = 0
            if (guess[labels[0]].toLowerCase() === spanish.toLowerCase()) {
                alert('Correct')
                isCorrect = 1
            }
            dispatch(questionAnswered(english, isCorrect))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Test)
