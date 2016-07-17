var express = require('express');
var path = require('path');
var data = require('./data.js');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', function (req, res) {
  res.render('index', {data: data});
});

app.listen(3000, function () {
  console.log('listening...');
});
