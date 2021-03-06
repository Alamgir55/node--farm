const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate');
const slugify = require('slugify');



const tempOverView = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

const slug = dataObject.map(el => el.productName, {lower: true});
console.log(slug);

const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true);


    if(pathname === '/' || pathname === '/overview'){
        res.writeHead(200, {'Content-type': 'text/html'});
        const cardHTML = dataObject.map(el => replaceTemplate(tempCard, el));
        const output = tempOverView.replace('{%PRODUCT_CARD%}', cardHTML);

        res.end(output);

    }else if(pathname === '/product'){
        res.writeHead(200, {'Content-type': 'text/html'});
       const product = dataObject[query.id];
       const output = replaceTemplate(tempProduct, product);

        res.end(output);

    }else if(pathname === '/api'){
      
        res.writeHead(200, {'Content-type': 'application/json'});
        console.log(err)
        res.end(data);
    }
    else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>this page not found</h1>');
    }
    
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening');
})