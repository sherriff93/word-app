import {fetchWordsFail, fetchWordsSuccess} from "../actions/actions";

function fetchWords(dispatch) { // TODO ask: How to do an routes call that puts/posts/deletes but need to then fetch a filtered set? One API call or many?
    // dispatch(fetchWordsStart()) // TODO Get rid of isLoading or make it less clunky
    fetch('/routes/words')
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
    fetch('/routes/words', {
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
    fetch('/routes/words/' + item._id, {
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
    fetch('/routes/words/' + existingItem._id, {
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

module.exports = {
    fetchWords: fetchWords,
    insertWord: insertWord,
    deleteWord: deleteWord,
    updateWord: updateWord,
}