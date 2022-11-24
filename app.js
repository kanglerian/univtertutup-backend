let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let levelRouter = require('./routes/level');
let programRouter = require('./routes/program');
let registrarRouter = require('./routes/registrar');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/level', levelRouter);
app.use('/program', programRouter);
app.use('/registrar', registrarRouter);

module.exports = app;
