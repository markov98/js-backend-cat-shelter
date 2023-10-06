const router = require("express").Router();

router.get('/', function (req, res) {
    res.render('home', {cats: catsData});
});

router.get('/cats/add-breed', function (req, res) {
    res.render('addBreed');
});

router.get('/cats/add-cat', function (req, res) {
    res.render('addCat');
});

router.get('*', (req, res) => {
    res.redirect('/404')
});

module.exports = router;