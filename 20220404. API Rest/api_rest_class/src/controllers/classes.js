let { teachers, classes, idClass } = require('../database');

const postClass = (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    const teacher = teachers.find((teacher) => {
        return teacher.id === Number(id);
    })

    if (!teacher) {
        return res.status(404).json({ "message": "Teacher not found" });
    }

    if (!name) {
        return res.status(400).json({ "message": "Name is mandatory!" });
    }

    if (!description) {
        return res.status(400).json({ "message": "Description is mandatory!" });
    }

    const classToPost = {
        id: idClass++,
        idTeacher: Number(id),
        name,
        description
    };
    classes.push(classToPost)

    return res.status(201).json(classToPost);
}

const listClasses = (req, res) => {
    return res.json(classes);
}

const getClass = (req, res) => {
    const { idClass } = req.params;

    const classToGet = classes.find((classToGet) => {
        return classToGet.id === Number(idClass);
    })

    if (!classToGet) {
        return res.status(404).json({ "message": "Class not found" });
    }

    return res.status(200).json(classToGet);
}

const listClassesByTeacher = (req, res) => {
    const { id } = req.params;

    const teacher = teachers.find((teacher) => {
        return teacher.id === Number(id);
    })

    if (!teacher) {
        return res.status(404).json({ "message": "Teacher not found" });
    }

    let classesByTeacher = classes.filter((classToGet) => {
        return classToGet.idTeacher === Number(id);
    })

    return res.json(classesByTeacher);
}

module.exports = {
    postClass,
    listClasses,
    getClass,
    listClassesByTeacher
}