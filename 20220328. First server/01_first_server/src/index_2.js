const express = require('express');

const app = express();

app.get('/home', (req, res) => { //req = request; res = response
    res.send('Hello, this is my first server with express');
});

app.get('/', (req, res) => {
    res.send('This is the main route');
});

app.get('/array', (req, res) => {
    const array = [1, 2, 3, 4, 5];
    res.send(array);
});


app.listen(3000);