import {fetchDictionariesFail, fetchDictionariesSuccess, hideCurrentPopup} from "../actions/actions";

function fetchDictionaries(dispatch) {
    fetch('/routes/dictionaries')
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
    fetch('/routes/dictionaries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: dictionaryName,
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
    fetch('/routes/dictionaries/' + id, {
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
    fetch('/routes/dictionaries/' + id, {
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