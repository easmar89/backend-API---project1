const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

let cartDB;

function connectCart() {
    const adapter = new FileSync('cartDB.json');
    cartDB = low(adapter);
    cartDB.defaults({ items: [] }).write();
}

const cartData = () => cartDB;

module.exports = {
    connectCart,
    cartData,
};
