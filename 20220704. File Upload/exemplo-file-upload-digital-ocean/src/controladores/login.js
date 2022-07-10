const knex = require('../conexao');
const aws = require('../servicos/aws');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const senhaHash = process.env.SENHA_HASH;

const login = async (req, res) => {
    const { username, senha } = req.body;

    if (!username || !senha) {
        return res.status(404).json('É obrigatório username e senha');
    }

    try {
        const usuarioALogar = await knex('usuarios')
            .where({ username });

        if (usuarioALogar.length === 0) {
            return res.status(400).json("O usuario não foi encontrado");
        }

        const usuario = usuarioALogar[0];

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(400).json("Usuário e senha não conferem");
        }

        const token = jwt.sign({
            id: usuario.id,
            username: usuario.username
        }, senhaHash, { expiresIn: '8h' });

        usuario.urlImagem = usuario.imagem ? aws.urlCompleta(usuario.imagem) : null;

        const { senha: _, ...dadosUsuario } = usuario;

        return res.status(200).json({
            usuario: dadosUsuario,
            token
        });
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    login
}