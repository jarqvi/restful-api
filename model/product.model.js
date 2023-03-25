const products = require('../db/products.json');
const fs = require('fs');


async function find() {
    return new Promise((resolve, reject) => {
        resolve(products);
    });
}

async function findById(id) {
    return new Promise((resolve, reject) => {
        resolve(products.find(product => product.id == id));
    });
}

async function create(product) {
    return new Promise((resolve, reject) => {
        products.push(product);
        fs.writeFile(`${process.cwd()}/db/products.json`, JSON.stringify(products), err => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: 'New product created.', data: product });
            }
        });
    });
}


const ProductModel = {
    find,
    findById,
    create
};

module.exports = ProductModel;