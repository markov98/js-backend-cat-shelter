const express = require('express');
const exphbs = require('express-handlebars');
const catsData = require(`./data/cats.json`);

const app = express();
const port = 3000;

const handlebars = exphbs.create({ extname: '.hbs' });
app.engine('.hbs', handlebars.engine)
app.set('view engine', '.hbs');

app.use(express.static('content'));

app.get('/', function (req, res) {
    res.render('home/index', {cats: catsData});
});

app.get('/cats/add-breed', function (req, res) {
    res.render('addBreed');
});

app.get('/cats/add-cat', function (req, res) {
    res.render('addCat');
});

app.listen(port, function (req, res) {
    console.log(`Server is running on port ${port}.`);
})