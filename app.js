var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var personal_indexRouter = require('./routes/personal_index');
var education_indexRouter = require('./routes/education_index');
var experience_indexRouter = require('./routes/experience_index');
var objective_indexRouter = require('./routes/objective_index');
var project_indexRouter = require('./routes/project_index');
var reference_indexRouter = require('./routes/reference_index');
var skills_indexRouter = require('./routes/skills_index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',personal_indexRouter);
app.use('/',education_indexRouter);
app.use('/',experience_indexRouter);
app.use('/',objective_indexRouter);
app.use('/',project_indexRouter);
app.use('/',reference_indexRouter);
app.use('/',skills_indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
