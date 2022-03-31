const express = require('express');
const {
    filterTeachers,
    findTeacher
} = require('./controllers/teachers');

const app = express();

const firstMiddleware = (req, res, next) => {
    console.log('went through first middleware');
    next();
}

const secondMiddleware = (req, res, next) => {
    console.log('went through second middleware');
    next();
}

const routeMiddleware = (req, res, next) => {
    console.log('went through route middleware');
    next();
}

app.use(firstMiddleware);
app.use(secondMiddleware);

// localhost:3000/teachers
app.get('/teachers', routeMiddleware, filterTeachers);

// localhost:3000/teachers/3 - id é um parâmetro e qualquer valor pode ser informado
app.get('/teachers/:id', findTeacher);

app.listen(3000);