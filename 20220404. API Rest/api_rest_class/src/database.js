const database = {
    idTeacher: 3,
    idClass: 2,
    teachers: [
        {
            id: 1,
            name: "Guido",
            email: "guido@email.com",
            status: true
        },
        {
            id: 2,
            name: "Dani",
            email: "dani@email.com",
            status: true
        },
    ],
    classes: [
        {
            id: 1,
            idTeacher: 1,
            name: "API REST",
            description: "Class about API REST"
        }
    ]
}

module.exports = database;