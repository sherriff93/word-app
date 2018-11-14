import React, {Component} from 'react'
import {hideCurrentPopup} from "../actions/actions"
import {deleteDictionary} from "../lib";
import {connect} from 'react-redux'
import WordForm from "./WordForm";
import {PopupInner, PopupOuter} from "../styles/EditDictionaryPopup";

class EditDictionaryPopup extends Component {
    constructor() {
        super()
        this.labels = ['New Name']
    }
    
    render() {
        const {labels} = this
        return (
            <PopupOuter>
                <PopupInner>
                    <h1>Edit Dictionary</h1>
                    <WordForm labels={labels} onSubmit={this.props.onSubmit} />
                    <button onClick={this.props.hideCurrentPopup}>Close popup</button>
                    <button onClick={() => this.props.deleteDictionary(this.props.dictionary)}>Delete</button>
                </PopupInner>
            </PopupOuter>
        );
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        hideCurrentPopup: () => {
            dispatch(hideCurrentPopup())
        },
        onSubmit: () => {
            dispatch(hideCurrentPopup())
        },
        deleteDictionary: (dictionary) => {
            deleteDictionary(dictionary, dispatch)
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(EditDictionaryPopup)