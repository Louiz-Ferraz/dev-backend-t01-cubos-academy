const knex = require('../conexao');
const aws = require('../servicos/aws');
const jwt = require('jsonwebtoken');
const senhaHash = process.env.SENHA_HASH;

const verificaLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json('Não autorizado');
    }

    try {
        const token = authorization.replace('Bearer ', '').trim();

        const { id } = jwt.verify(token, senhaHash);

        const usuarioALogar = await knex('usuarios')
            .where({ id })
            .first();

        if (!usuarioALogar) {
            return res.status(404).json('Usuario não encontrado');
        }

        usuarioALogar.urlImagem = usuarioALogar.imagem ? aws.urlCompleta(usuarioALogar.imagem) : null;

        const { senha, ...usuario } = usuarioALogar;

        req.usuario = usuario;

        next();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = verificaLogin