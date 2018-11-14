import {fetchWordsSuccess, fetchWordsFail, fetchDictionariesSuccess, fetchDictionariesFail} from './actions/actions'

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

function insertDictionary(dictionaryName, dispatch) {
    fetch('/api/dictionaries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            path: '/' + dictionaryName, // TODO need to urlify
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

function deleteDictionary(dictionary, dispatch) {
    fetch('/api/dictionaries/' + dictionary._id, {
        method: 'DELETE'
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

module.exports = {
    fetchWords: fetchWords,
    insertWord: insertWord,
    deleteWord: deleteWord,
    updateWord: updateWord,
    fetchDictionaries: fetchDictionaries,
    insertDictionary: insertDictionary,
    deleteDictionary: deleteDictionary,
}
