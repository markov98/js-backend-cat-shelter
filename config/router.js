const router = require("express").Router();
const catService = require('../services/cat');

router.get('/', async function (req, res) {
    const cats = await catService.getAll().lean();
    const hasCats = cats.length > 0;
    res.render('home', {cats, hasCats});
});

router.get('/cats/add-breed', function (req, res) {
    res.render('addBreed');
});

router.post('/cats/add-cat', async function (req, res) {
    const { name, description, imgUrl, breed } = req.body;
    console.log(req.body);
    await catService.add({ name, description, imgUrl, breed });
    res.redirect('/');
});

router.get('/cats/add-cat', function (req, res) {
    res.render('addCat');
});

router.get('*', (req, res) => {
    res.redirect('/404')
});

module.exports = router;