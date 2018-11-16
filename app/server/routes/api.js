const express = require ('express');
const router = express.Router();
const Word = require('../models/word');
const Dictionary = require('../models/dictionary');

// get a list of words
router.get('/words', function(req, res, next){
    Word.find().then(function(words){
        res.send(words);
    }).catch(next);
});

// get a list of words from a given dictionary
router.get('/words/:dictionary', function(req, res, next){
    Word.find({dictionary: {$eq: req.params.dictionary}}).then(function(words){
        res.send(words);
    }).catch(next);
});

// add a new word
router.post('/words', function(req, res, next){
    Word.create(req.body).then(function(){
        Word.find().then(function(words){
            res.send(words);
        });
    }).catch(next);
});

// update a word
router.put('/words/:id', function(req, res, next){
    Word.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Word.find().then(function(words){
            res.send(words);
        });
    }).catch(next);
});

// delete a word
router.delete('/words/:id', function(req, res, next){
    Word.findByIdAndRemove({_id: req.params.id}).then(function(){
        Word.find().then(function(words){
            res.send(words);
        });
    }).catch(next);
});

// get a list of dictionaries
router.get('/dictionaries', function(req, res, next){
    Dictionary.find().then(function(dictionaries){
        res.send(dictionaries);
    }).catch(next);
});

// add a new dictionary
router.post('/dictionaries', function(req, res, next){
    Dictionary.create(req.body).then(function(){
        Dictionary.find().then(function(dictionaries){
            res.send(dictionaries);
        });
    }).catch(next);
});

// delete a given dictionary
router.delete('/dictionaries/:id', function(req, res, next){
    Dictionary.findByIdAndRemove({_id: req.params.id}).then(function(){
        Dictionary.find().then(function(dictionaries){
            res.send(dictionaries);
        });
    }).catch(next);
    // Word.deleteMany({dictionary: {$eq: req.params.dictionary}}).then(function(){
    //     Word.find().then(function(dictionaries){
    //         res.send(dictionaries);
    //     });
    // }).catch(next);
});

// update a dictionary
router.put('/dictionaries/:id', function(req, res, next){
    Dictionary.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Dictionary.find().then(function(dictionaries){
            res.send(dictionaries);
        });
    }).catch(next);
});

module.exports = router;
