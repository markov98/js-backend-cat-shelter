const app = require('./config/express');
const {PORT, DBURL} = require('./config/constants');

require('./config/db')(DBURL)
    .then(() => console.log('Connected to DB!'))
    .catch((err) => console.log(err));

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