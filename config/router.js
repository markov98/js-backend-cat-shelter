const router = require("express").Router();
const catService = require('../services/cat');

router.get('/', async function (req, res) {
    const cats = await catService.getAll().lean();
    res.render('home', {cats});
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