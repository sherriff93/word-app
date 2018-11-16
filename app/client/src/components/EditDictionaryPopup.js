import React, {Component} from 'react'
import {hideCurrentPopup} from "../actions/actions"
import {deleteDictionaryById} from "../lib";
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
                    <button onClick={() => this.props.deleteDictionaryById(this.props.dictionary._id)}>Delete</button>
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
        deleteDictionaryById: (id) => {
            deleteDictionaryById(id, dispatch)
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(EditDictionaryPopup)