const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const favicon = require('express-favicon');
const path = require('path');
const https = require('https');
const fs = require('fs');
const port = process.env.SERVER_PORT;
const app = express();
const mongoUrl = 'mongodb://mongodb/word-app';

// TODO - HTTPS
// const options = {
//     key: fs.readFileSync('/etc/letsencrypt/live/www.fluentlyapp.com/privkey.pem'),
//     cert: fs.readFileSync('/etc/letsencrypt/live/www.fluentlyapp.com/fullchain.pem')
// };

app.use(favicon(__dirname + '/../client/build/favicon.ico'));

app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/ping', function (req, res) {
    return res.send('pong');
});

/////// This code is the same as index.js

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

////////////////////////////////////////////////////

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, function(){
    console.log('now listening for requests on port ' + port);
});

// TODO - HTTPS
// https.createServer(options, app).listen(port, function(){
//     console.log('now listening for requests on port ' + port);
// }).on('error', console.log);