const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    imgUrl: String,
    breed: String,
    description: String
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;