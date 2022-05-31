const axios = require('axios');
const api_key = require('../api_key');

const instanciaAxios = axios.create({
    baseURL: 'https://api.pagar.me/1/',
    params: {
        api_key
    }
});

module.exports = instanciaAxios;