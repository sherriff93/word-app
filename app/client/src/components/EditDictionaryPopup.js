import React, {Component} from 'react'
import {hideCurrentPopup} from "../actions/actions"
import {deleteDictionaryById, editDictionaryNameById} from "../lib/dictionary_functions";
import {connect} from 'react-redux'
import EditDictionaryPopupWordForm from "./WordForm/EditDictionaryPopupWordForm";
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
                    <EditDictionaryPopupWordForm labels={labels} onSubmit={(values) => this.props.editDictionaryNameById(this.props.dictionary._id, values)} />
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
        editDictionaryNameById: (id, values) => {
            editDictionaryNameById(id, values['New Name'], dispatch)
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