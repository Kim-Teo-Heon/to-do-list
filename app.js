const express = require('express');
const app = express();
const index_router = require('./routes/index');
const update_router = require('./routes/update');
const body_parser = require('body-parser');

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(body_parser.urlencoded({ extended : false }));

app.use('/', index_router);
app.use('/update', update_router);

module.exports = app;