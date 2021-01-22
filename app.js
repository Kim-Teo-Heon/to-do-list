const express = require('express');
const app = express();
const body_parser = require('body-parser');
const path = require('path');

const index_router = require('./routes/index');
const update_router = require('./routes/update');
const create_router = require('./routes/create');
const delete_router = require('./routes/delete');

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,'public')));//다른 경로에서 실행했을 경우를 위해 __dirname 사용
app.use('/update',express.static(path.join(__dirname,'public')))
app.use(body_parser.urlencoded({ extended : false }));

app.use('/', index_router);
app.use('/update', update_router);
app.use('/create', create_router);
app.use('/delete', delete_router);

module.exports = app;