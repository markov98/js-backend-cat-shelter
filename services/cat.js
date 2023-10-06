const Cat = require('../models/Cat');

module.exports = {
    getAll: () => Cat.find()
}