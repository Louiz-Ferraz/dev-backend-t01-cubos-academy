const express = require('express');
const fs = require('fs/promises');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const text = 'hello';
    await fs.writeFile('./src/a.txt', text);
    res.json('ok');
});

app.post('/', async (req, res) => {
    const { name, age } = req.body;

    try {
        const existingFile = await fs.readFile('./src/users.json');
        const users = JSON.parse(existingFile);

        users.push({ name, age });

        const usersStringify = JSON.stringify(users);

        await fs.writeFile('./src/users.json', usersStringify);

        return res.json('User succesfully added');
    } catch (error) {
        return res.json(`Error: ${error.message}`);
    } finally {
        console.log('Always executed');
    }
});


app.listen(3000);