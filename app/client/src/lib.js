import {
    fetchWordsSuccess,
    fetchWordsFail,
    fetchDictionariesSuccess,
    fetchDictionariesFail,
    hideCurrentPopup
} from './actions/actions'



module.exports = {
    fetchWords: fetchWords,
    insertWord: insertWord,
    deleteWord: deleteWord,
    updateWord: updateWord,
}

module.exports = {
    fetchDictionaries: fetchDictionaries,
    insertDictionaryByName: insertDictionaryByName,
    deleteDictionaryById: deleteDictionaryById,
    editDictionaryNameById: editDictionaryNameById,
}