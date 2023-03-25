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

async function update(id, payload) {
    return new Promise((resolve, reject) => {
        products.map(product => {
            if (product.id == id) {
                Object.assign(product, payload);
            }
            return products;
        });
        fs.writeFile(`${process.cwd()}/db/products.json`, JSON.stringify(products), err => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: 'Product updated.' });
            }
        });
    });
}

async function remove(id) {
    return new Promise((resolve, reject) => {
        const index = products.filter(product => product.id != id);
        fs.writeFile(`${process.cwd()}/db/products.json`, JSON.stringify(index), err => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: 'Product removed.' });
            }
        });
    });
}

const ProductModel = {
    find,
    findById,
    create,
    update,
    remove
};

module.exports = ProductModel;