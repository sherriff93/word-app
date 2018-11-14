import React, {Component} from 'react'
import {Link} from "react-router-dom"
import {hideCurrentPopup} from "../actions/actions"
import {connect} from 'react-redux'
import {PopupInner, PopupOuter} from "../styles/Popup";

class Popup extends Component {
    render() {

        return (
            <PopupOuter>
                <PopupInner>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.hideCurrentPopup}>close me</button>
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