const express = require('express');
const {
    listTeachers,
    getTeacher,
    registerTeacher,
    updateTeacher,
    updateStatusTeacher,
    deleteTeacher
} = require('./controllers/teachers');

const routes = express();

routes.get('/teachers', listTeachers);
routes.get('/teachers/:id', getTeacher);
routes.post('/teachers', registerTeacher);
routes.put('/teachers/:id', updateTeacher);
routes.patch('/teachers/:id/status', updateStatusTeacher);
routes.delete('/teachers/:id', deleteTeacher);

module.exports = routes;