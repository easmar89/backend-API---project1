const { productsData } = require('../database/db');

//GET all items from the main products database

module.exports = (req, res) => {
    const data = productsData().get('products').value();
    res.json(data);
};
