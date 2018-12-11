const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create Dictionary Schema & model
const DictionarySchema = new Schema({
    path: {
        type: String
    },
    name: {
        type: String,
        required: [true, 'Name field is required']
    }
})

const Dictionary = mongoose.model('dictionary', DictionarySchema)

module.exports = Dictionary