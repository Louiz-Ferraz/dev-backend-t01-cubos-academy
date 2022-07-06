const knex = require('../conexao');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => {
    const { username, senha } = req.body;

    if (!username) {
        return res.status(404).json("O campo username é obrigatório");
    }

    if (!senha) {
        return res.status(404).json("O campo senha é obrigatório");
    }

    try {
        const usuariosJahCadastrado = await knex('usuarios')
            .where({ username });

        if (usuariosJahCadastrado.length > 0) {
            return res.status(400).json("O username já existe");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = {
            username,
            senha: senhaCriptografada
        }

        const novoUsuario = await knex('usuarios')
            .insert(usuario)
            .returning('*');

        if (novoUsuario.length === 0) {
            return res.status(400).json('Não foi possível cadastrar o usuário');
        }

        return res.status(200).json(novoUsuario[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterPerfil = async (req, res) => {
    return res.status(200).json(req.usuario);
}

const atualizarPerfil = async (req, res) => {
    const {
        nome,
        email,
        senha,
        imagem,
        username,
        site,
        bio,
        telefone,
        genero
    } = req.body;

    if (!nome && !email && !senha && !imagem && !username && !site && !bio && !telefone && !genero) {
        return res.status(404).json('É obrigatório informar ao menos um campo para atualização');
    }

    try {
        const body = {};
        const params = [];
        let n = 1;

        if (nome) {
            body.nome = nome;
            params.push(`nome = $${n}`);
            n++;
        }

        if (email) {
            if (email !== req.usuario.email) {
                const usuarios = await knex('usuarios')
                    .where({ email });

                if (usuarios.length > 0) {
                    return res.status(400).json("O email já existe");
                }
            }

            body.email = email;
            params.push(`email = $${n}`);
            n++;
        }

        if (senha) {
            body.senha = await bcrypt.hash(senha, 10);
            params.push(`senha = $${n}`);
            n++;
        }

        if (imagem) {
            body.imagem = imagem;
            params.push(`imagem = $${n}`);
            n++;
        }

        if (username) {
            if (username !== req.usuario.username) {
                const usuarios = await knex('usuarios')
                    .where({ username });

                if (usuarios.length > 0) {
                    return res.status(400).json("O username já existe");
                }
            }

            body.username = username;
            params.push(`username = $${n}`);
            n++;
        }

        if (site) {
            body.site = site;
            params.push(`site = $${n}`);
            n++;
        }

        if (bio) {
            body.bio = bio;
            params.push(`bio = $${n}`);
            n++;
        }

        if (telefone) {
            body.telefone = telefone;
            params.push(`telefone = $${n}`);
            n++;
        }

        if (genero) {
            body.genero = genero;
            params.push(`genero = $${n}`);
            n++;
        }

        const usuarioAtualizado = await knex('usuarios')
            .update(body)
            .where({ id: req.usuario.id })
            .returning('*');

        if (usuarioAtualizado.length === 0) {
            return res.status(400).json("O usuario não foi atualizado");
        }

        return res.status(200).json(usuarioAtualizado);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastrarUsuario,
    obterPerfil,
    atualizarPerfil
}