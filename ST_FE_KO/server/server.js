var express = require('express');
var app = express();


app.use('/', express.static('./'));

app.get('/', function(req, res){
    res.render('../index.html');
});

var port = process.env.PORT || 5455;

app.listen(port, function(err){
    console.log('App running on: ' + port);
    if (err)
        throw err
});