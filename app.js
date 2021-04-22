//Core modules
const express = require('express');
const { connectProducts } = require('./database/db');
const { connectCart } = require('./database/cartdb');

//Controllers
const getAllProducts = require('./controllers/getAllProducts');
const getCartItems = require('./controllers/getCartItems');
const addCartItem = require('./controllers/addCartItem');
const deleteCartItem = require('./controllers/deleteCartItem');

//initializing express app and both databases
const app = express();
connectProducts();
connectCart();

//Routing
app.get('/api/products', getAllProducts);
app.get('/api/cart', getCartItems);
app.post('/api/cart/:id', addCartItem);
app.delete('/api/cart/:id', deleteCartItem);

//Server listening on port 3000
app.listen(3000, () => {
    console.log('server is running...');
});
