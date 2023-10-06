const app = require('./config/express');
const {PORT, DBURL} = require('./config/constants');


app.get('/', function (req, res) {
    res.render('home', {cats: catsData});
});

app.get('/cats/add-breed', function (req, res) {
    res.render('addBreed');
});

app.get('/cats/add-cat', function (req, res) {
    res.render('addCat');
});

app.listen(PORT, function (req, res) {
    console.log(`Server is running on port ${PORT}.`);
})