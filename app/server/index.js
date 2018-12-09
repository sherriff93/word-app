const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT;

// set up express app
const app = express();
const mongoUrl = 'mongodb://mongodb/word-app';

var connectWithRetry = function() {
  return mongoose.connect(mongoUrl, function(err) {
    if (err) {
      console.error('Failed to connect to mongoDB. Retrying in 5 seconds');
      setTimeout(connectWithRetry, 5000);
    }
  });
};

// connect to mongodb
connectWithRetry();
mongoose.Promise = global.Promise;

//set up static files
app.use(express.static('public'));

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/routes/words', require('./routes/api_word'));
app.use('/routes/dictionaries', require('./routes/api_dictionary'));

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(port, function(){
    console.log('now listening for requests on port ' + port);
});
