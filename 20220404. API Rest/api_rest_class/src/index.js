const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json()); //middleware nativo que faz com que requisições PRECISEM ser JSON para transitar

app.use(routes);

app.listen(3000);