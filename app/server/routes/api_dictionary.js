const express = require ('express');
const router = express.Router();
const Dictionary = require('../models/dictionary');

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

// delete a given dictionary
router.delete('/:id', function(req, res, next){
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
router.put('/:id', function(req, res, next){
    Dictionary.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Dictionary.find().then(function(dictionaries){
            res.send(dictionaries);
        });
    }).catch(next);
});

module.exports = router;