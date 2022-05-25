const conexao = require('../conexao');

const listarLivros = async (req, res) => {
    try {
        const query = `
            SELECT l.id, a.nome autor, l.nome, l.editora, l.genero, l.data_publicacao
            FROM livros l
            LEFT JOIN autores a ON l.autor_id = a.id
        `;
        const { rows: livros } = await conexao.query(query);
        return res.status(200).json(livros);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterLivro = async (req, res) => {
    const { id } = req.params;
    try {
        const livro = await conexao.query('SELECT * FROM livros WHERE id = $1', [id]);

        if (livro.rowCount === 0) {
            return res.status(404).json('Livro não encontrado');
        }

        return res.status(200).json(livro.rows[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const cadastrarLivro = async (req, res) => {
    const { autor_id, nome, editora, genero, data_publicacao } = req.body;

    if (autor_id === undefined || nome === undefined || genero === undefined) {
        return res.status(400).json('Os campos autor_id, nome e gênero são obrigatórios');
    }

    try {
        const autor = await conexao.query('SELECT * FROM autores WHERE id = $1', [autor_id]);

        if (autor.rowCount === 0) {
            return res.status(404).json('Autor não encontrado');
        }

        const query = 'INSERT INTO livros (autor_id, nome, editora, genero, data_publicacao) VALUES ($1, $2, $3, $4, $5)';
        const livro = await conexao.query(query, [autor_id, nome, editora, genero, data_publicacao]);

        if (livro.rowCount === 0) {
            return res.status(400).json('Não foi possível cadastrar o livro');
        }

        return res.status(201).json('Livro cadastrado com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const atualizarLivro = async (req, res) => {
    const { id } = req.params;
    const { autor_id, nome, editora, genero, data_publicacao } = req.body;

    try {
        const livro = await conexao.query('SELECT * FROM livros WHERE id = $1', [id]);

        if (livro.rowCount === 0) {
            return res.status(404).json('Livro não encontrado');
        }

        if (autor_id === undefined || nome === undefined || genero === undefined) {
            return res.status(400).json('Os campos autor_id, nome e gênero são obrigatórios');
        }

        const autor = await conexao.query('SELECT * FROM autores WHERE id = $1', [autor_id]);

        if (autor.rowCount === 0) {
            return res.status(404).json('Autor não encontrado');
        }

        const query = 'UPDATE livros SET autor_id = $1, nome = $2, editora = $3, genero = $4, data_publicacao = $5 WHERE id = $6';
        const livroAtualizado = await conexao.query(query, [autor_id, nome, editora, genero, data_publicacao, id]);

        if (livroAtualizado.rowCount === 0) {
            return res.status(404).json('Não foi possível realizar atualização');
        }

        return res.status(200).json('Livro foi atualizado com sucesso!');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirLivro = async (req, res) => {
    const { id } = req.params;

    try {
        const livro = await conexao.query('SELECT * FROM livros WHERE id = $1', [id]);

        if (livro.rowCount === 0) {
            return res.status(404).json('Livro não encontrado');
        }

        const query = 'DELETE FROM livros WHERE id = $1';
        const livroDeletado = await conexao.query(query, [id]);

        if (livroDeletado.rowCount === 0) {
            return res.status(404).json('Não foi possível realizar exclusão');
        }

        return res.status(200).json('Livro foi excluído com sucesso!');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarLivros,
    obterLivro,
    cadastrarLivro,
    atualizarLivro,
    excluirLivro
}