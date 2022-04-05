const express = require('express');
const {
    listTeachers,
    getTeacher,
    registerTeacher,
    updateTeacher,
    updateStatusTeacher,
    deleteTeacher
} = require('./controllers/teachers');
const {
    postClass,
    listClasses,
    getClass,
    listClassesByTeacher
} = require('./controllers/classes');


const routes = express();

routes.get('/teachers', listTeachers);
routes.get('/teachers/:id', getTeacher);
routes.post('/teachers', registerTeacher);
routes.put('/teachers/:id', updateTeacher);
routes.patch('/teachers/:id/status', updateStatusTeacher);
routes.delete('/teachers/:id', deleteTeacher);

routes.post('/teachers/:id/classes', postClass);
routes.get('/classes', listClasses);
routes.get('/classes/:idClass', getClass);
routes.get('/teachers/:id/classes', listClassesByTeacher);

module.exports = routes;