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


const ProductsController = {
    get
};

module.exports = ProductsController;