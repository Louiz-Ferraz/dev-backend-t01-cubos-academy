const users = [
    { id: 11, name: 'joao', age: 23 },
    { id: 2, name: 'maria', age: 18 },
    { id: 4, name: 'ana', age: 30 },
    { id: 1, name: 'rodrigo', age: 17 },
    { id: 123, name: 'rodrigo', age: 17 }
]

users.sort((a, b) => {
    return a.id - b.id;
});

console.log(users);

users.sort((a, b) => {
    return b.id - a.id;
});

console.log(users);