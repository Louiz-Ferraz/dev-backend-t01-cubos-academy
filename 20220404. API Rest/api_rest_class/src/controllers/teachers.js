let { teachers, idTeacher } = require('../database');

const listTeachers = (req, res) => {
    return res.status(200).json(teachers); //por padrão, express passa 200 nas respostas sem precisar informar
}

const getTeacher = (req, res) => {
    const { id } = req.params;
    const teacher = teachers.find((teacher) => {
        return teacher.id === Number(id);
    })

    if (!teacher) {
        return res.status(404).json({ "message": "Teacher not found" });
    }

    return res.status(200).json(teacher);
}

const registerTeacher = (req, res) => {
    const { name, email, status } = req.body;

    if (!name) {
        return res.status(400).json({ "message": "Name is mandatory!" });
    }

    if (!email) {
        return res.status(400).json({ "message": "Email is mandatory!" });
    }

    const newTeacher = {
        id: idTeacher++,
        name,
        email,
        status: status ?? true
    }

    teachers.push(newTeacher);
    return res.status(201).json(newTeacher);
}

const updateTeacher = (req, res) => {
    const { id } = req.params;
    const { name, email, status } = req.body;

    if (!name) {
        return res.status(400).json({ "message": "Name is mandatory!" });
    }

    if (!email) {
        return res.status(400).json({ "message": "Email is mandatory!" });
    }

    // if (!status) {
    //     return res.status(400).json({ "message": "Status is mandatory!" });
    // }

    const teacher = teachers.find((teacher) => {
        return teacher.id === Number(id);
    })

    if (!teacher) {
        return res.status(404).json({ "message": "Teacher not found" });
    }

    teacher.name = name;
    teacher.email = email;
    teacher.status = status;

    return res.status(204).send();
}

const updateStatusTeacher = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const teacher = teachers.find((teacher) => {
        return teacher.id === Number(id);
    })

    if (!teacher) {
        return res.status(404).json({ "message": "Teacher not found" });
    }

    teacher.status = status;

    return res.status(204).send();
}

const deleteTeacher = (req, res) => {
    const { id } = req.params;

    const teacher = teachers.find((teacher) => {
        return teacher.id === Number(id);
    })

    if (!teacher) {
        return res.status(404).json({ "message": "Teacher not found" });
    }

    teachers = teachers.filter((teacher) => {
        return teacher.id !== Number(id);
    })

    return res.status(204).send();
}

module.exports = {
    listTeachers,
    getTeacher,
    registerTeacher,
    updateTeacher,
    updateStatusTeacher,
    deleteTeacher
}