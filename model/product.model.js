const products = require('../db/products.json');


async function find() {
    return new Promise((resolve, reject) => {
        resolve(products);
    })
}


const ProductModel = {
    find
};

module.exports = ProductModel;