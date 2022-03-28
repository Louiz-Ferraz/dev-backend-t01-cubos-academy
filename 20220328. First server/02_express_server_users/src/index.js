const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    const users = require('./users');
    res.send(users);
});

app.listen(3000, () => {
    console.log("Initiated on port 3000");
    setInterval(() => {
        console.log("Server on");
    }, 10000);
});