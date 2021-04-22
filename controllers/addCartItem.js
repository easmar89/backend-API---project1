const { productsData } = require('../database/db');
const { cartData } = require('../database/cartdb');

//ADD a specfic item to the cart database

module.exports = (req, res) => {
    const item = productsData()
        .get('products')
        .find({ id: parseInt(req.params.id) })
        .value();

    if (item) {
        const cartItems = cartData().get('items').value();
        if (!cartItems.some((item) => item.id == req.params.id)) {
            cartData().get('items').push(item).write();
            res.json({
                status: true,
                message: 'item added to the cart',
            });
        } else {
            res.status(400).json({
                status: false,
                message: 'item already exists in your cart',
            });
        }
    } else {
        res.status(400).json({
            status: false,
            message: 'Item does not exist in our inventory',
        });
    }
};
