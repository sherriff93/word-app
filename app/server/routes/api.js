const express = require ('express');
const router = express.Router();
const Word = require('../models/word');

// get a list of words from the db
router.get('/words', function(req, res, next){
    Word.find().then(function(words){
        res.send(words);
    }).catch(next);
});

// get a list of words from the db
router.get('/words/:dictionary', function(req, res, next){
    Word.find({dictionary: {$eq: req.params.dictionary}}).then(function(words){
        res.send(words);
    }).catch(next);
});

// add a new word to the db
router.post('/words', function(req, res, next){
    Word.create(req.body).then(function(){
        Word.find().then(function(words){
            res.send(words);
        });
    }).catch(next);
});

// update a word in the db
router.put('/words/:id', function(req, res, next){
    Word.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Word.find().then(function(words){
            res.send(words);
        });
    }).catch(next);
});

// delete a word from the db
router.delete('/words/:id', function(req, res, next){
    Word.findByIdAndRemove({_id: req.params.id}).then(function(){
        Word.find().then(function(words){
            res.send(words);
        });
    }).catch(next);
});

module.exports = router;
