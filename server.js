const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/gpgs-front'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/gpgs-front/index.html'));
});

app.get('/mapa', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/gpgs-front/index.html'));
});

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/gpgs-front/index.html'));
});

app.listen(process.env.PORT || 8080);