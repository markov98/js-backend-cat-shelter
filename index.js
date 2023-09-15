const http = require('http');
const homeTemplate = require('./views/home/index.js');
const siteCss = require('./content/styles/site.js')
const port = 3000;

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.write(homeTemplate);
    } else if (req.url === '/content/styles/site.css') {
        res.writeHead(200, {
            'Content-type': 'text/css'
        });
        res.write(siteCss);
    }
    res.end();
}).listen(port, () => {
    console.log(`Server running on port ${port}`);
});