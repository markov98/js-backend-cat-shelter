const http = require('http');
const homeTemplate = require('./views/home/index.js');
const addBreedTemplate = require('./views/addBreed.js')
const addCatTemplate = require('./views/addCat.js');
const siteCss = require('./content/styles/site.js')
const catTemplate = require('./views/home/catTemplate.js');
const catsData = require(`./data/cats.json`);
const port = 3000;

http.createServer((req, res) => {
    if (req.url === '/') {
        const modifiedHomeTemplate = homeTemplate.replace('{{cats}}', catsData.map(
            (cat) => catTemplate.replace('{{img}}', cat['picture']).replace('{{breed}}', cat['breed']).replace('{{desc}}', cat['description'])
            ));

        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.write(modifiedHomeTemplate);
    } else if (req.url === '/cats/add-breed') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.write(addBreedTemplate);
    } else if (req.url === '/cats/add-cat') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.write(addCatTemplate);
    }
     else if (req.url === '/content/styles/site.css') {
        res.writeHead(200, {
            'Content-type': 'text/css'
        });
        res.write(siteCss);
    }
    res.end();
}).listen(port, () => {
    console.log(`Server running on port ${port}`);
});