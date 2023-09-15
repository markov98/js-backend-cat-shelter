const http = require('http');
const {homeTemplate} = require('./views/home/index.js');
const port = 3000;

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.write(homeTemplate);
    }
    res.end();
}).listen(port, () => {
    console.log(`Server running on port ${port}`);
});