const users = [
    {
        name: "Luiz",
        age: 26
    },
    {
        name: "Lais",
        age: 25
    },
    {
        name: "Al",
        age: 18
    },
    {
        name: "Be",
        age: 26
    },
    {
        name: "La",
        age: 17
    },
    {
        name: "Lu",
        age: 18
    }
]

const checkIfIsOfAge = (users) => {

    const allAreOfAge = users.every((user) => {
        return user.age >= 18;
    })

    if (allAreOfAge) {
        console.log("Let's party!");
    } else {
        console.log("At least one person is underage");
    }

}

checkIfIsOfAge(users);