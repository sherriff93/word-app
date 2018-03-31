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

// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// 
// // create geolocation Schema
// const GeoSchema = new Schema({
//     type: {
//         type: String,
//         default: 'Point'
//     },
//     coordinates: {
//         type: [Number],
//         index: '2dsphere'
//     }
// })
// 
// // create ninja Schema & model
// const NinjaSchema = new Schema({
//     name: {
//         type: String,
//         required: [true, 'Name field is required']
//     },
//     rank: {
//         type: String
//     },
//     available: {
//         type: Boolean,
//         default: false
//     },
//     geometry: GeoSchema
// })
// 
// const Ninja = mongoose.model('ninja', NinjaSchema)
// 
// module.exports = Ninja
