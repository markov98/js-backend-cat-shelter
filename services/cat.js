const Cat = require('../models/Cat');

module.exports = {
    getAll: () => Cat.find(),

    add: (data) => Cat.create(data)
}