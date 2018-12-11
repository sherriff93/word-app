const express = require ('express');
const router = express.Router();
const Dictionary = require('../models/dictionary');
const Word = require('../models/word');

// get a list of dictionaries
router.get('/', function(req, res, next){
    Dictionary.find().then(function(dictionaries){
        res.send(dictionaries);
    }).catch(next);
});

// add a new dictionary
router.post('/', function(req, res, next){
    Dictionary.create(req.body).then(function(){
        Dictionary.find().then(function(dictionaries){
            res.send(dictionaries);
        });
    }).catch(next);
});

// delete a given dictionary and all it's words
router.delete('/:id', function(req, res, next){
    Dictionary.findByIdAndRemove({_id: req.params.id}).then(function(dictionary){
        Word.deleteMany({dictionary: {$eq: dictionary.name}}).then(function(){
            Dictionary.find().then(function(dictionaries){
                res.send(dictionaries);
            })
        }).catch(next);
    }).catch(next);
});

// update a dictionary and all it's words
router.put('/:id', function(req, res, next){
    Dictionary.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}).then(function(dictionary){
        Word.update({dictionary: {$eq: dictionary.name}}, {$set: {dictionary: req.body.name}}, {multi: true}).then(function(){
            Dictionary.find().then(function(dictionaries){
                res.send(dictionaries);
            })
        }).catch(next);
    }).catch(next);
});

module.exports = router;