const express = require('express');
const uploads = require('./controladores/uploads');

const rotas = express();

rotas.post('/upload', uploads.uploadImagem);
rotas.delete('/deletar', uploads.deletarImagem);

module.exports = rotas;