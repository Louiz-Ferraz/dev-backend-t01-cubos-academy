const teachers = require('../database')

const filterTeachers = (req, res) => {
    // console.log(req);
    console.log('got to controller filter teacher');
    const { stack, name } = req.query;
    let result = teachers;
    if (stack) {
        result = result.filter((teacher) => {
            return teacher.stack === stack;
        })
    }
    if (name) {
        result = result.filter((teacher) => {
            return teacher.name === name;
        })
    }
    res.send(result);
}

const findTeacher = (req, res) => {
    console.log('got to controller find teacher');
    const foundTeacher = teachers.find((teacher) => {
        return teacher.id === Number(req.params.id);
    })
    res.send(foundTeacher);
}

module.exports = {
    filterTeachers,
    findTeacher
};