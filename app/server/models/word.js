const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create Word Schema & model
const WordSchema = new Schema({
      english: {
          type: String,
          required: [true, 'English field is required']
      },
      spanish: {
          type: String,
          required: [true, 'Spanish field is required']
      },
      dictionary: {
          type: String,
          required: [true, 'Dictionary field is required']
      },
      index: {
          type: Number,
          required: [true, 'Index field is required']
      },
})

const Word = mongoose.model('word', WordSchema)

module.exports = Word
