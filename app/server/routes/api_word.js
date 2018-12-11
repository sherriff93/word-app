const express = require ('express');
const router = express.Router();
const Word = require('../models/word');

// get a list of words
router.get('/', function(req, res, next){
    Word.find().then(function(words){
        res.send(words);
    }).catch(next);
});

// get a list of words from a given dictionary
router.get('/:dictionary', function(req, res, next){
    Word.find({dictionary: {$eq: req.params.dictionary}}).then(function(words){
        res.send(words);
    }).catch(next);
});

// add a new word
router.post('/', function(req, res, next){
    Word.create(req.body).then(function(){
        Word.find().then(function(words){
            res.send(words);
        });
    }).catch(next);
});

// update a word
router.put('/:id', function(req, res, next){
    Word.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Word.find().then(function(words){
            res.send(words);
        });
    }).catch(next);
});

// delete a word
router.delete('/:id', function(req, res, next){
    Word.findByIdAndRemove({_id: req.params.id}).then(function(){
        Word.find().then(function(words){
            res.send(words);
        });
    }).catch(next);
});

module.exports = router;
