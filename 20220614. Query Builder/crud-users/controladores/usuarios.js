const knex = require('../conexao');

getUsers = async (req, res) => {
    const users = await knex('users');
    return res.json(users);
}

insertUser = async (req, res) => {
    const { nome, email, senha } = req.body;

    const user = await knex('users')
        .insert({ nome, email, senha })
        .returning('*');

    res.status(201).json(user);
}

updateUser = async (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.params;

    const user = await knex('users')
        .update({ nome, email, senha })
        .where({ id })
        .returning('*');

    return res.json(user);
}

deleteUser = async (req, res) => {
    const { id } = req.params;

    const user = await knex('users')
        .del()
        .where({ id })
        .returning('*');

    return res.json(user);
}

module.exports = {
    getUsers,
    insertUser,
    updateUser,
    deleteUser
}