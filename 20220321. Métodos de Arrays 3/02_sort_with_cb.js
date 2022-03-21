const numbers = [1, 30, 4, 1, 80, 34];

//ordenação crescente
numbers.sort((a, b) => {
    // if (a < b) {
    //     return -1;
    // } else if (a > b) {
    //     return 1;
    // } else {
    //     return 0;
    // }
    return a - b;
});

console.log(numbers);

//ordenação decrescente
numbers.sort((a, b) => {
    // if (a < b) {
    //     return 1;
    // } else if (a > b) {
    //     return -1;
    // } else {
    //     return 0;
    // }
    return b - a;
});

console.log(numbers);