var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger  = require('morgan');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var apiRouter = require('./routes/book');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mean-angular6', {promiseLibrary: require('bluebird')}).then(() => console.log('connection successful')).catch((err)=> console.log(err));


var app = express();


app.disable('etag');
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/api', apiRouter);

app.use(function(req, res, next){
	next(createError(404));
});


app.use(function(err, req, res, next){
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.send(err.status);
});

module.exports = app;