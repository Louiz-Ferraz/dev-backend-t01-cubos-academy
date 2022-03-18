const fruits = ["mango", "watermelon", "pineapple"];
const numbers = [1, 2, 3, 4, 5];

let result = fruits.every((currentFruit) => {
    return currentFruit !== "banana";
})

console.log(result); //true

result = numbers.every((number) => {
    return number <= 5;
})

console.log(result); //true

result = numbers.every((number) => {
    return number < 5;
})

console.log(result); //false
