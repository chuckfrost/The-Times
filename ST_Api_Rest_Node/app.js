var express = require('express');
var  path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var app = express();

var seattleTimesrouter = require('./src/routes/SeattleTimesDemoRouter')();

app.use(favicon(path.join('public', 'img', 'favicon.ico')));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
    res.send('main API page over');
});

app.use('/seattletimes', seattleTimesrouter);

var port = process.env.PORT || 5450;

app.listen(port, function(err){
    console.log('App running on: ' + port);
    if (err)
        throw err

});