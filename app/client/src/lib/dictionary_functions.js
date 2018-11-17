import {fetchDictionariesFail, fetchDictionariesSuccess, hideCurrentPopup} from "../actions/actions";
import React from "react";

function fetchDictionaries(dispatch) {
    fetch('/api/dictionaries')
        .then(response => {
            if(response.status === 200){
                response.json() // TODO What happens if this fails?
                    .then(json => dispatch(fetchDictionariesSuccess(json)))
            }
            else{
                dispatch(fetchDictionariesFail())
            }
        })
}

function insertDictionaryByName(dictionaryName, dispatch) {
    const dictionaryNameFormatted = dictionaryName.charAt(0).toUpperCase() + dictionaryName.slice(1)
    fetch('/api/dictionaries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            path: '/' + encodeURI(dictionaryName),
            name: dictionaryNameFormatted,
        },)
    })
        .then(response => {
            if(response.status === 200){
                response.json() // TODO What happens if this fails?
                    .then(json => dispatch(fetchDictionariesSuccess(json)))
            }
            else{
                dispatch(fetchDictionariesFail())
            }
        })
}

function deleteDictionaryById(id, dispatch) {
    fetch('/api/dictionaries/' + id, {
        method: 'DELETE'
    })
        .then(response => {
            if(response.status === 200){
                response.json() // TODO What happens if this fails?
                    .then(
                        json => {
                            dispatch(fetchDictionariesSuccess(json))
                            dispatch(hideCurrentPopup())
                        }
                    )
            }
            else{
                dispatch(fetchDictionariesFail())
            }
        })
}

function editDictionaryNameById(id, newName, dispatch) {
    fetch('/api/dictionaries/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newName,
        })
    })
        .then(response => {
            if(response.status === 200){
                response.json() // TODO What happens if this fails?
                    .then(json => {
                        dispatch(fetchDictionariesSuccess(json))
                        dispatch(hideCurrentPopup())
                    })
            }
            else{
                dispatch(fetchDictionariesFail())
            }
        })
}

module.exports = {
    fetchDictionaries: fetchDictionaries,
    insertDictionaryByName: insertDictionaryByName,
    deleteDictionaryById: deleteDictionaryById,
    editDictionaryNameById: editDictionaryNameById,
}