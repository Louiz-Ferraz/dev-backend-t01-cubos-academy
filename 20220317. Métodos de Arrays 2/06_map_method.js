const users = [
    {
        name: "Luiz",
        surname: "Ferraz",
        age: 26
    },
    {
        name: "Lais",
        surname: "Amorim",
        age: 25
    },
    {
        name: "Al",
        surname: "Bets",
        age: 18
    },
    {
        name: "Be",
        surname: "Algore",
        age: 26
    }
]

const unifiedNameAndSurname = users.map((user) => {
    return {
        completeName: user.name + " " + user.surname,
        age: user.age
    }
})

console.log(unifiedNameAndSurname);
console.log(users);