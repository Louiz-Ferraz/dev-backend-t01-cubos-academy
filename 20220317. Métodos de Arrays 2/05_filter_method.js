const numbers = [1, 4, 4, 5, 3, 1, 8];

let result = numbers.filter((number) => {
    return number > 4;
})

console.log(result); //[5, 8]

result = numbers.filter((number) => {
    return number === 4;
})

console.log(result); //[4, 4]

result = numbers.filter((number) => {
    return number === 2;
})

console.log(result); //[]

console.log(numbers); //array original