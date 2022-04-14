const express = require('express');
const {
    showAllProducts,
    registerSale
} = require('./controllers/products');

const routes = express();

routes.get('/products', showAllProducts);
routes.post('/products', registerSale);

module.exports = routes;