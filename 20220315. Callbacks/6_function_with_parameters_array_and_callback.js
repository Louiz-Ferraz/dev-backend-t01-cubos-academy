const searchFruit = (arrayFruits, callback) => {
    for (let fruit of arrayFruits) {
        if (callback(fruit)) {
            console.log("Fruit found");
            return;
        }
    }
    console.log("Fruit not found");
}

const fruits = ["grape", "mango", "pineapple", "banana"];

searchFruit(fruits, (item) => {
    return item === "banana";
})