const knex = require('../conexao');

const novaPostagem = async (req, res) => {
    const { id } = req.usuario;
    const { texto, fotos } = req.body;

    if (!fotos || fotos.length === 0) {
        return res.status(404).json('É preciso informar ao menos uma foto');
    }

    try {
        const postagem = await knex('postagens')
            .insert({
                texto,
                usuario_id: id
            })
            .returning('*');

        if (!postagem) {
            return res.status(400).json('Não foi possível concluir a postagem');
        }

        for (let foto of fotos) {
            foto.postagem_id = postagem[0].id;
        }

        const fotosCadastradas = await knex('postagem_fotos')
            .insert(fotos);

        if (!fotosCadastradas) {
            await knex('postagens')
                .where({ id: postagem[0].id })
                .del()
            return res.status(400).json('Não foi possível concluir a postagem');
        }

        return res.status(200).json('Postagem realizada com sucesso!');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const curtir = async (req, res) => {
    const { id } = req.usuario;
    const { postagemId } = req.params;

    try {
        const postagem = await knex('postagens')
            .where({ id: postagemId }).first();

        if (!postagem) {
            return res.status(404).json('Postagem não encontrada!');
        }

        const jaCurtiu = await knex('postagem_curtidas')
            .where({
                usuario_id: id,
                postagem_id: postagemId
            })
            .first();

        if (jaCurtiu) {
            return res.status(400).json('O usuário já curtiu essa postagem');
        }

        const curtida = await knex('postagem_curtidas')
            .insert({
                usuario_id: id,
                postagem_id: postagemId
            })

        if (!curtida) {
            return res.status(400).json('Não foi possível curtir esta mensagem');
        }

        return res.status(200).json('A postagem foi curtida com sucesso!');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const comentar = async (req, res) => {
    const { id } = req.usuario;
    const { postagemId } = req.params;
    const { texto } = req.body;

    if (!texto) {
        return res.status(400).json('É necessário informar texto para comentário');
    }

    try {
        const postagem = await knex('postagens')
            .where({ id: postagemId }).first();

        if (!postagem) {
            return res.status(404).json('Postagem não encontrada!');
        }

        const comentario = await knex('postagem_comentarios')
            .insert({
                usuario_id: id,
                postagem_id: postagemId,
                texto
            })

        if (!comentario) {
            return res.status(400).json('Não foi possível comentar esta mensagem');
        }

        return res.status(200).json('A postagem foi comentada com sucesso!');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const feed = async (req, res) => {
    const { id } = req.usuario;
    const { offset } = req.query;

    const o = offset ? offset : 0;

    try {
        const postagens = await knex('postagens')
            .where('usuario_id', '!=', id)
            .limit(10)
            .offset(o);

        if (postagens.length === 0) {
            return res.status(200).json(postagens);
        }

        for (let postagem of postagens) {
            const usuario = await knex('usuarios')
                .where({ id: postagem.usuario_id })
                .select('image', 'username', 'verificado')
                .first();
            postagem.usuario = usuario;

            const fotos = await knex('postagem_fotos')
                .where({ postagem_id: postagem.id })
                .select('imagem');
            postagem.fotos = fotos;

            const curtidas = await knex('postagem_curtidas')
                .where({ postagem_id: postagem.id })
                .select('usuario_id');
            postagem.curtidas = curtidas.length;

            postagem.curtidoPorMim = curtidas.find(curtida => curtida.usuario_id === id) ? true : false;

            const comentarios = await knex('postagem_comentarios')
                .leftJoin('usuarios', 'usuarios.id', 'postagem_comentarios.usuario_id')
                .where({ postagem_id: postagem.id })
                .select('usuarios.username', 'postagem_comentarios.texto')
            postagem.comentarios = comentarios;
        }

        return res.status(200).json(postagens);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    novaPostagem,
    curtir,
    comentar,
    feed
}