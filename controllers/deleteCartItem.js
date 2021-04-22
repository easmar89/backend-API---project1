const { cartData } = require('../database/cartdb');

//Delete a specific item from the cart database

module.exports = (req, res) => {
    const itemIsThere = cartData()
        .get('items')
        .find({ id: parseInt(req.params.id) })
        .value();
    if (itemIsThere) {
        cartData()
            .get('items')
            .remove({ id: parseInt(req.params.id) })
            .write();
        res.status(200).json({
            status: true,
            message: 'Item removed from your cart',
        });
    } else {
        res.status(400).json({
            status: false,
            message: 'item is not in the cart',
        });
    }
};
