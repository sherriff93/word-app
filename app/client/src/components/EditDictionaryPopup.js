import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {hideCurrentPopup} from "../actions/actions"
import {connect} from 'react-redux'

const TextInput = styled.input `
            width: 40%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        `
const PopupOuter = styled.div`
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            background-color: rgba(0,0,0, 0.5);
        `
const PopupInner = styled.div`
            position: absolute;
            left: 25%;
            right: 25%;
            top: 25%;
            bottom: 25%;
            margin: auto;
            background: white;
        `

class Popup extends Component {
    render() {

        return (
            <PopupOuter>
                <PopupInner>
                    <h1>{this.props.text}</h1>
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