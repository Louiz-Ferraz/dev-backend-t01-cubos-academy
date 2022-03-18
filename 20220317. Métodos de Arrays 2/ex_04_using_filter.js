const teachers = [
    { nome: "Guido", stack: "backend" },
    { nome: "Vidal", stack: "backend" },
    { nome: "Dani", stack: "frontend" },
    { nome: "Diego", stack: "frontend" },
    { nome: "Leo", stack: "backend" },
    { nome: "Ruli", stack: "frontend" }
]

const filterTeachersByStack = (stack, teachers) => {
    return teachers.filter((teacher) => {
        return teacher.stack === stack;
    })
}

console.log(filterTeachersByStack("backend", teachers));
console.log(filterTeachersByStack("frontend", teachers));