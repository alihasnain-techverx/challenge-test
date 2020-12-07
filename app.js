// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;





// const jsonArray = {
//   user: {
//     create: true,
//     delete: true,
//     update: false,
//     retrieve: true
//   },
//   challenge: {
//     create: true,
//     delete: true,
//     update: false,
//     retrieve: true
//   },
//   attempt: {
//     create: true,
//     delete: true,
//     update: false,
//     retrieve: true
//   },
//   reward: {
//     create: true,
//     delete: true,
//     update: false,
//     retrieve: true
//   },

// }
// console.log(jsonArray.user.delete)

// //Comparing Two Dates
// let date = new Date();
// console.log(date);
// date.setDate(date.getDate()+1);
// // console.log(date);
// let date2=new Date();
// console.log(date2)

// let result = date-date2;
// console.log(result);
// if(result>0)
// {
//   console.log('challenge time is active');
// }
// if(result<=0)
// {
//   console.log('challenge time is not active')
// }

