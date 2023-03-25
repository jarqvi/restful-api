const ProductModel = require('../model/product.model');


async function get(req, res) {
    try {
        const product = await ProductModel.find();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(product));
        res.end();
    } catch (err) {
        console.log(err);
    }
}

async function getById(req, res) {
    try {
        const [, , , id] = await req.url.split('/');
        const product = await ProductModel.findById(id);
        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: 'Not Found.' }));
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(product));
            res.end();
        }
    } catch (err) {
        console.log(err);
    }
}

async function create(req, res) {
    try {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async() => {
            const product = { id: Date.now(), ...JSON.parse(body) };
            const result = await ProductModel.create(product);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(result));
            res.end();
        });
    } catch (err) {
        console.log(err);
    }
}


const ProductsController = {
    get,
    getById,
    create
};

module.exports = ProductsController;