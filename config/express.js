const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const handlebars = exphbs.create({ extname: '.hbs' });
app.engine('.hbs', handlebars.engine)
app.set('view engine', '.hbs');

app.use(express.static('content'));

module.exports = app;