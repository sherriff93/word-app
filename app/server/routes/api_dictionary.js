const express = require ('express');
const router = express.Router();
const Dictionary = require('../models/dictionary');
const Word = require('../models/word');

const fetchDictionaries = function(res, next){
    Dictionary.find().then(function(dictionaries){
        res.send(dictionaries);
    }).catch(next);
}

const fetchDictionariesByUid = function(uid, res, next){
    Dictionary.find({uid: uid}).then(function(dictionaries){
        res.send(dictionaries);
    }).catch(next);
}

const insertDictionary = function(dictionaryName, uid, res, next){
    Dictionary.create({
        name: dictionaryName,
        uid: uid
    }).then(function(dictionary){
        Dictionary.findByIdAndUpdate({_id: dictionary.id}, {$set: {path: '/' + dictionary.id}}).then(
            () => fetchDictionariesByUid(uid, res, next)
        )
    }).catch(next);
}

const deleteDictionaryAndWordsByDictionaryId = function(id, res, next) {
    Dictionary.findByIdAndRemove({_id: id}).then(function (dictionary) {
        Word.deleteMany({dictionary: {$eq: dictionary.name}}).then(
            () => fetchDictionariesByUid(dictionary.uid, res, next)
        ).catch(next);
    }).catch(next);
}

const updateDictionaryAndWordsByDictionaryId = function(id, name, res, next){
    Dictionary.findByIdAndUpdate({_id: id}, {$set: {name: name}}).then(function(dictionary){
        Word.update({dictionary: {$eq: dictionary.name}}, {$set: {dictionary: name}}, {multi: true}).then(
            () => fetchDictionariesByUid(dictionary.uid, res, next)
        ).catch(next);
    }).catch(next);
}

router.get('/', (req, res, next) => fetchDictionaries(res, next));
router.get('/:uid', (req, res, next) => fetchDictionariesByUid(req.params.uid, res, next));
router.post('/', (req, res, next) => insertDictionary(req.body.name, req.body.uid, res, next));
router.delete('/:id', (req, res, next) => deleteDictionaryAndWordsByDictionaryId(req.params.id, res, next));
router.put('/:id', (req, res, next) => updateDictionaryAndWordsByDictionaryId(req.params.id, req.body.name, res, next));

module.exports = router;