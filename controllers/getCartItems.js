const { cartData } = require('../database/cartdb');

//GET all items from the cart database
module.exports = (req, res) => {
    const data = cartData().get('items').value();
    res.json(data);
};
