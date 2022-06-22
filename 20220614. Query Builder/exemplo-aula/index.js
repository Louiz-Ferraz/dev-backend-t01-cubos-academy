const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

app.get('/select', async (req, res) => {
    // SELECT * FROM agenda;
    const agenda = await knex('agenda').debug();
    // const agenda = await knex.raw('SELECT * FROM agenda');
    return res.json(agenda);
})

app.get('/select-where', async (req, res) => {
    // SELECT * FROM agenda WHERE id = 5;
    // const agenda = await knex('agenda').where('id', 5).debug();

    // SELECT * FROM agenda WHERE id <> 5;
    // const agenda = await knex('agenda').where('id', '<>', 5).debug();

    // SELECT * FROM agenda WHERE id = 5 AND nome = 'Samantha R. Maldonado';
    // const agenda = await knex('agenda').where({ id: 5, nome: 'Samantha R. Maldonado' }).debug();

    // SELECT * FROM agenda WHERE id = 5 LIMIT 1; TRAZ SÓ O PRIMEIRO OBJETO, NÃO ARRAY
    // const agenda = await knex('agenda').where({ id: 5 }).first().debug();

    // SELECT id, nome FROM agenda WHERE id = 5 LIMIT 1; 
    // const agenda = await knex('agenda').select('id', 'nome').debug();

    // SELECT * FROM agenda WHERE email IS NULL;
    // const agenda = await knex('agenda').whereNull('email').debug();

    // SELECT * FROM agenda WHERE email IS NOT NULL;
    // const agenda = await knex('agenda').whereNotNull('email').debug();

    // SELECT * FROM agenda WHERE id BETWEEN 5 AND 10;
    // const agenda = await knex('agenda').whereBetween('id', [5, 10]).debug();

    // SELECT * FROM agenda WHERE id BETWEEN 5 AND 10 ORDER BY id DESC;
    // const agenda = await knex('agenda').whereBetween('id', [5, 10]).orderBy('id', 'DESC').debug();

    // SELECT DISTINCT(email) FROM agenda;
    const agenda = await knex('agenda').distinct('email').debug();

    return res.json(agenda);
})

app.get('/select-group', async (req, res) => {
    // SELECT email FROM agenda GROUP BY email;
    // const agenda = await knex('agenda').select('email').groupBy('email').debug();

    // SELECT email, COUNT(*) FROM agenda GROUP BY email;
    // const agenda = await knex('agenda').select('email').groupBy('email').count().debug();

    // SELECT COUNT(*) FROM agenda WHERE email IS NULL;
    // const agenda = await knex('agenda').whereNull('email').count().debug();

    // SELECT SUM(id) FROM agenda WHERE email IS NULL;
    // const agenda = await knex('agenda').whereNull('email').sum('id').debug();

    // SELECT AVG(id) FROM agenda WHERE email IS NULL;
    // const agenda = await knex('agenda').whereNull('email').avg('id').debug();

    // SELECT MIN(id) FROM agenda WHERE email IS NULL;
    // const agenda = await knex('agenda').whereNull('email').min('id').debug();

    // SELECT MAX(id) FROM agenda WHERE email IS NULL;
    const agenda = await knex('agenda').whereNull('email').max('id').debug();

    return res.json(agenda);
})

app.get('/select-limit', async (req, res) => {
    // SELECT * FROM agenda LIMIT 5;
    // const agenda = await knex('agenda').limit(5).debug();

    // SELECT * FROM agenda LIMIT 5 OFFSET 2;
    const agenda = await knex('agenda').limit(5).offset(2).debug();

    return res.json(agenda);
})

app.get('/exercises', async (req, res) => {
    // 1 - Faça uma query que retorna a quantidade de medicamentos da tabela farmacia.
    let result = await knex('farmacia').sum('estoque').debug();

    // 2 - Faça uma query que retorna apenas a idade do usuario mais novo cadastrado
    // na tabela usuarios.
    result = await knex('usuarios').min('idade').debug();

    // 3 - Faça uma query que retorna todas as categorias não nulas e a soma do estoque
    // de todos os medicamentos de cada categoria na tabela farmacia.
    result = await knex('farmacia').select('categoria').whereNotNull('categoria')
        .groupBy('categoria').sum('estoque').debug();

    // 4 - Faça uma query que retorna a quantidade de medicamentos sem categoria na tabela
    // farmacia.
    result = await knex('farmacia').whereNull('categoria').count().debug();

    // 5 - Faça uma query que retorna a categoria e a quantidade de produtos de cada categoria
    // que não seja nula da tabela farmacia.
    result = await knex('farmacia').select('categoria').whereNotNull('categoria')
        .groupBy('categoria').count('estoque').debug();

    // 6 - Faça uma query que retorna a idade e a quantidade de registros de cada idade, onde
    // a idade seja maior ou igual a 18 anos, na tabela usuarios.
    result = await knex('usuarios').select('idade').where('idade', '>=', 18)
        .groupBy('idade').count().orderBy('idade').debug();

    return res.json(result);
})

app.get('/insert', async (req, res) => {
    // const luiz = {
    //     nome: "Luiz Ferraz",
    //     email: "luiz@email.com",
    //     telefone: "(99) 99999-9999"
    // }
    // const agenda = await knex('agenda').insert(luiz).returning('*').debug();

    const maria = {
        nome: "Maria",
        email: "maria@email.com",
        telefone: "(99) 99999-9999"
    }
    const luiz = {
        nome: "Luiz Ferraz",
        email: "luiz@email.com",
        telefone: "(99) 99999-9999"
    }
    const agenda = await knex('agenda').insert([maria, luiz]).returning('*').debug();

    return res.json(agenda);
})

app.put('/update/:id', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const { id } = req.params;

    const agendaAtualizada = await knex('agenda')
        .update({ nome, email, telefone })
        .where({ id })
        .returning('*')
        .debug();

    return res.json(agendaAtualizada);
})

app.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    const agendaExcluida = await knex('agenda')
        .del()
        .where({ id })
        .returning('*')
        .debug();

    return res.json(agendaExcluida);
})

app.post('/join/:id/anotacoes', async (req, res) => {
    const { nota } = req.body;
    const { id } = req.params;

    const anotacao = await knex('anotacoes')
        .insert({
            agenda_id: id,
            nota
        })
        .returning('*')
        .debug();

    return res.json(anotacao);
})

app.get('/anotacoes', async (req, res) => {
    // const anotacoes = await knex('anotacoes')
    //     .join('agenda', 'anotacoes.agenda_id', '=', 'agenda.id')
    //     .select('anotacoes.*', 'agenda.nome')
    //     .debug();

    // const anotacoes = await knex('anotacoes')
    //     .leftJoin('agenda', 'anotacoes.agenda_id', '=', 'agenda.id')
    //     .select('anotacoes.*', 'agenda.nome')
    //     .debug();

    const anotacoes = await knex('anotacoes')
        .rightJoin('agenda', 'anotacoes.agenda_id', '=', 'agenda.id')
        .select('anotacoes.*', 'agenda.nome')
        .debug();

    return res.json(anotacoes);
})

app.listen(3000);