//Initializing app
const app = require('./config/express');
const {PORT, DBURL} = require('./config/constants');

// Connecting DB
require('./config/db')(DBURL)
    .then(() => console.log('Connected to DB!'))
    .catch((err) => console.log(err));

// Setting up Router
const router = require('./config/router');
app.use(router);

//Running the server
app.listen(PORT, function (req, res) {
    console.log(`Server is running on port ${PORT}.`);
})