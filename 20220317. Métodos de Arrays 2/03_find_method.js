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
    }
]

let result = users.find((user) => {
    return user.name === "Be";
})

console.log(result);

result = users.find((user) => {
    return user.name === "a";
})

console.log(result);