var express = require('express');
var path = require('path');

var routes=require('./routes/center.js')


var app = express();


app.use(express.static(path.join(__dirname, 'public')));



//config user routers  add routers control in center.js
routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  console.log("error");
  next(err);
  
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
