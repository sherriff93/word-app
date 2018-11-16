import {
    fetchWordsSuccess,
    fetchWordsFail,
    fetchDictionariesSuccess,
    fetchDictionariesFail,
    hideCurrentPopup
} from './actions/actions'

function fetchWords(dispatch) { // TODO ask: How to do an api call that puts/posts/deletes but need to then fetch a filtered set? One API call or many?
    // dispatch(fetchWordsStart()) // TODO Get rid of isLoading or make it less clunky
    fetch('/api/words')
    .then(response => {
        if(response.status === 200){
            response.json() // TODO What happens if this fails?
            .then(json => dispatch(fetchWordsSuccess(json)))
        }
        else{
            dispatch(fetchWordsFail())
        }
    })
}

function insertWord(values, dictionaryName, dispatch) {
    // dispatch(fetchWordsStart())
    fetch('/api/words', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            english: values.English,
            spanish: values.Spanish,
            dictionary: dictionaryName,
            index: Date.now()
        })
    })
    .then(response => {
        if(response.status === 200){
            response.json() // TODO What happens if this fails?
            .then(json => dispatch(fetchWordsSuccess(json)))
        }
        else{
            dispatch(fetchWordsFail())
        }
    })
}

function deleteWord(item, dispatch) {
    // dispatch(fetchWordsStart())
    fetch('/api/words/' + item._id, {
        method: 'DELETE'
    })
    .then(response => {
        if(response.status === 200){
            response.json() // TODO What happens if this fails?
            .then(json => dispatch(fetchWordsSuccess(json)))
        }
        else{
            dispatch(fetchWordsFail())
        }
    })
}

function updateWord(existingItem, values, dictionaryName, dispatch) {
    // dispatch(fetchWordsStart())
    fetch('/api/words/' + existingItem._id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            english: values.English,
            spanish: values.Spanish,
            dictionary: dictionaryName,
            index: Date.now() // TODO Replace index with id
        })
    })
    .then(response => {
        if(response.status === 200){
            response.json() // TODO What happens if this fails?
            .then(json => dispatch(fetchWordsSuccess(json)))
        }
        else{
            dispatch(fetchWordsFail())
        }
    })
}

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
    fetch('/api/dictionaries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            path: '/' + dictionaryName.trim().replace(/\s/g, '%20'),
            name: dictionaryName
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
    fetchWords: fetchWords,
    insertWord: insertWord,
    deleteWord: deleteWord,
    updateWord: updateWord,
    fetchDictionaries: fetchDictionaries,
    insertDictionary: insertDictionaryByName,
    deleteDictionaryById: deleteDictionaryById,
    editDictionaryNameById: editDictionaryNameById,
}
