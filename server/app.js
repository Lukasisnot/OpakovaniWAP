const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose
.connect('mongodb+srv://admin:adminadmin@cluster0.jaah7.mongodb.net/bohata?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const bohataRouter = require('./routes/bohata');
const carRouter = require('./routes/car');
const athleteRouter = require('./routes/athlete');
const historicalEventRouter = require('./routes/historical-event');
const environmentRouter = require('./routes/environment');
const monkeyRouter = require('./routes/monkey');

const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bohata', bohataRouter);
app.use('/car', carRouter);
app.use('/athlete', athleteRouter);
app.use('/historical-event', historicalEventRouter);
app.use('/environment', environmentRouter);
app.use('/monkey', monkeyRouter);

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
