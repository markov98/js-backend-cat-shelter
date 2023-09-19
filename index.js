const http = require('http');
const fs = require('fs/promises');
const catsData = require(`./data/cats.json`);
const port = 3000;

http.createServer(async (req, res) => {
    if (req.url === '/') {
        const homeTemplate = await fs.readFile('./views/home/index.html', 'utf-8');
        const catTemplate = await fs.readFile('./views/home/catTemplate.html', 'utf-8');

        const modifiedHomeTemplate = homeTemplate.replace('{{cats}}', catsData.map(
            (cat) => catTemplate.replace('{{img}}', cat['picture']).replace('{{breed}}', cat['breed']).replace('{{desc}}', cat['description'])
            ));

        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.write(modifiedHomeTemplate);
    } else if (req.url === '/cats/add-breed') {
        const addBreedTemplate = await fs.readFile('./views/addBreed.html', 'utf-8');

        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.write(addBreedTemplate);
    } else if (req.url === '/cats/add-cat') {
        const addCatTemplate = await fs.readFile('./views/addCat.html', 'utf-8');

        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.write(addCatTemplate);
    }
     else if (req.url === '/content/styles/site.css') {
        const siteCss = await fs.readFile('./content/styles/site.css', 'utf-8');

        res.writeHead(200, {
            'Content-type': 'text/css'
        });
        res.write(siteCss);
    }
    res.end();
}).listen(port, () => {
    console.log(`Server running on port ${port}`);
});