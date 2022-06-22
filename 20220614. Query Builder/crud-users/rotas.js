const express = require('express');
const rotas = express.Router();
const usuarios = require('./controladores/usuarios');

rotas.get('/', usuarios.getUsers);
rotas.post('/', usuarios.insertUser);
rotas.put('/:id', usuarios.updateUser);
rotas.delete('/:id', usuarios.deleteUser);

module.exports = rotas;