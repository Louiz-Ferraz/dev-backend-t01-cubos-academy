const express = require('express');
const {
    filterCars,
    findCars
} = require('./controllers/cars');
const { passwordMiddleware } = require('./middlewares');
const app = express();

app.use(passwordMiddleware);

app.get('/cars', filterCars);

app.get('/cars/:id', findCars);

app.listen(3000);