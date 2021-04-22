const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

let productsDB;

function connectProducts() {
    const adapter = new FileSync('productsDB.json');
    productsDB = low(adapter);
    productsDB.defaults({ products: [] }).write();
}

const productsData = () => productsDB;

module.exports = {
    connectProducts,
    productsData,
};
