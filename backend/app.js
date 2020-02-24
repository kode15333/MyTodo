var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var rfs = require('rotating-file-stream');
var methodOverride = require('method-override');
var dotenv = require('dotenv');
dotenv.config();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var boardsRouter = require('./routes/boards');
var session = require('express-session');
var sessionStore = require('session-file-store')(session);

var app = express();
var {sequelize} = require('./models');
sequelize.sync({force: false});


/* logger */
var logDirectory = path.join(__dirname, 'log');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
var accessLogStream = rfs.createStream('access.log', {
  size: "10M",
  interval: "1d",
  compress: "gzip",
  path: logDirectory
})
app.use(logger('combined', { stream: accessLogStream }))



// view engine setup
app.locals.pretty = true;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('trust proxy', 1)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret              : process.env.salt,
  resave              : true,
  saveUninitialized   : true,
  store               : new sessionStore() 
}))

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.use('/', indexRouter);
app.use('/api/user', usersRouter);
app.use('/api/board', boardsRouter);

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
