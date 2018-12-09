const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const https = require('https');
const fs = require('fs');
const port = process.env.PORT;
const app = express();

// TODO - HTTPS
// const options = {
//     key: fs.readFileSync('/etc/letsencrypt/live/www.fluentlyapp.com/privkey.pem'),
//     cert: fs.readFileSync('/etc/letsencrypt/live/www.fluentlyapp.com/fullchain.pem')
// };

app.use(favicon(__dirname + '/build/favicon.ico'));

app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function(){
    console.log('now listening for requests on port ' + port);
});

// TODO - HTTPS
// https.createServer(options, app).listen(port, function(){
//     console.log('now listening for requests on port ' + port);
// }).on('error', console.log);