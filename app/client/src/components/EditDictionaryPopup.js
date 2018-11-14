import React, {Component} from 'react'
import {hideCurrentPopup} from "../actions/actions"
import {connect} from 'react-redux'

class Popup extends Component {
    render() {

        return (
            <PopupOuter>
                <PopupInner>
                    <h1>{this.props.text}</h1>
                    <TextInput></TextInput>
                    <button onClick={this.props.hideCurrentPopup}>close me</button>
                    <button onClick={this.props.deleteDictionary}>close me</button>
                </PopupInner>
            </PopupOuter>
        );
    }

    hideCurrentPopup() {
        hideCurrentPopup()
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        hideCurrentPopup: () => {
            dispatch(hideCurrentPopup())
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Popup)