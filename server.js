const http = require('http');
const HOST = 'localhost';
const PORT = 3000;
const ProductsController = require('./controllers/product.controller');
const ErrorHandler = require('./controllers/errorHandler.controller');
const defaultRoute = '/api/products';
const chunkRoute = /\/api\/products\/([0-9]+)/;


const server = http.createServer((req, res) => {
    if (req.url == defaultRoute && req.method == 'GET') {
        ProductsController.get(req, res);
    } else if (req.url.match(chunkRoute) && req.method == 'GET') {
        ProductsController.getById(req, res);
    } else if (req.url == defaultRoute && req.method == 'POST') {
        ProductsController.create(req, res);
    } else if (req.url.match(chunkRoute) && req.method == 'PUT') {
        ProductsController.update(req, res);
    } else if (req.url.match(chunkRoute) && req.method == 'DELETE') {
        ProductsController.remove(req, res);
    } else {
        ErrorHandler.notFound(req, res);
    }
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});