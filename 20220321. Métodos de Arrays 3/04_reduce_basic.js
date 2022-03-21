const array = [0, 1, 2, 3, 4];

// let sum = array[0];
// for (let i = 1; i < array.length; i++) {
//     const currentItem = array[i];
//     sum += currentItem;
// }

// console.log(sum);

const reduceResult = array.reduce((acumulator, currentItem, index, array) => {
    return acumulator + currentItem;
})

console.log(reduceResult);

const reduceResultNew = array.reduce((acumulator, currentItem, index, array) => {
    return acumulator + currentItem;
}, 10)

console.log(reduceResultNew);