import {fetchWordsStart} from './actions/actions'
import {fetchWordsSuccess} from './actions/actions'
import {fetchWordsFail} from './actions/actions'

function fetchWordsByDictionary(dictionary, dispatch) {
    // dispatch(fetchWordsStart()) // TODO Get rid of isLoading or make it less clunky
    fetch('/api/words/' + dictionary)
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

function insertWord(values, name, dispatch) {
    // dispatch(fetchWordsStart())
    fetch('/api/words', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            english: values.English,
            spanish: values.Spanish,
            dictionary: name,
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

function updateWord(existingItem, values, name, dispatch) {
    // dispatch(fetchWordsStart())
    fetch('/api/words/' + existingItem._id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            english: values.English,
            spanish: values.Spanish,
            dictionary: name,
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

module.exports = {
    fetchWordsByDictionary: fetchWordsByDictionary,
    insertWord: insertWord,
    deleteWord: deleteWord,
    updateWord: updateWord,
}
