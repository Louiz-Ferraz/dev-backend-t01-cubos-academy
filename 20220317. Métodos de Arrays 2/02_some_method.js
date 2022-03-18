const names = ["Luiz", "João", "Maria", "José"];
const numbers = [2, 3, 5, 7];

let result = names.some((name) => {
    return name === "Luiz";
})

console.log(result); //true

result = names.some((name) => {
    return name === "Laís";
})

console.log(result); //false

result = names.some((name) => {
    return name === "Maria";
})

console.log(result); //true

console.result = numbers.some((number) => {
    return number % 2 === 0;
})

console.log(result); //true