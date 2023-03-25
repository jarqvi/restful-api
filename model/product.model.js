const products = require('../db/products.json');


async function find() {
    return new Promise((resolve, reject) => {
        resolve(products);
    })
}

async function findById(id) {
    return new Promise((resolve, reject) => {
        resolve(products.find(product => product.id == id));
    })
}


const ProductModel = {
    find,
    findById
};

module.exports = ProductModel;