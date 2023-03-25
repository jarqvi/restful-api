const http = require('http');
const HOST = 'localhost';
const PORT = 3000;
const ProductsController = require('./controllers/product.controller');
const ErrorHandler = require('./controllers/errorHandler.controller');


const server = http.createServer((req, res) => {
    if (req.url == '/api/products' && req.method == 'GET') {
        res.end('hello world');
    } else {
        res.end('not found');
    }
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});