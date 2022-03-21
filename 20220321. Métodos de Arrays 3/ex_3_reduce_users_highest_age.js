const users = [
    { id: 11, name: 'joao', age: 23 },
    { id: 2, name: 'maria', age: 18 },
    { id: 4, name: 'ana', age: 30 },
    { id: 1, name: 'rodrigo', age: 17 },
    { id: 123, name: 'rodrigo', age: 50 }
];

const oldestUser = users.reduce((accumulator, currentItem) => {
    if (accumulator.age < currentItem.age) {
        accumulator = currentItem;
    }
    return accumulator;
});

console.log(oldestUser);