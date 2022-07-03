const knex = require('../conexao');
const bcrypt = require('bcrypt');
const nodemailer = require('../nodemailer');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    if (!nome) {
        return res.status(404).json("O campo nome é obrigatório");
    }

    if (!email) {
        return res.status(404).json("O campo email é obrigatório");
    }

    if (!senha) {
        return res.status(404).json("O campo senha é obrigatório");
    }

    if (!nome_loja) {
        return res.status(404).json("O campo nome_loja é obrigatório");
    }

    try {
        const usuariosEmailCadastrado = await knex('usuarios')
            .where({ email });

        if (usuariosEmailCadastrado.length > 0) {
            return res.status(400).json("O email já existe");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = {
            nome,
            email,
            nome_loja,
            senha: senhaCriptografada
        }

        const novoUsuario = await knex('usuarios')
            .insert(usuario)
            .returning('*');

        if (novoUsuario.length === 0) {
            return res.status(400).json('Não foi possível cadastrar o usuário');
        }

        //envio de email
        const dadosEnvio = {
            from: 'Market Cubos <nao-responder@smtp.mailgun.org>', // sender address
            to: email, // list of receivers
            subject: 'Bem vindo ao Market Cubos', // Subject line
            // text: `Olá, ${nome}! Você realizou cadastro no Market Cubos e pode fazer o login com o e-mail ${email}`, // plain text body,
            template: 'cadastro',
            context: {
                nome,
                email
            }
        };
        nodemailer.sendMail(dadosEnvio);

        return res.status(200).json(novoUsuario[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterPerfil = async (req, res) => {
    return res.status(200).json(req.usuario);
}

const atualizarPerfil = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    if (!nome && !email && !senha && !nome_loja) {
        return res.status(404).json('É obrigatório informar ao menos um campo para atualização');
    }

    try {
        // update usuarios set nome = $1, email = $2...
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

        if (nome_loja) {
            body.nome_loja = nome_loja;
            params.push(`nome_loja = $${n}`);
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