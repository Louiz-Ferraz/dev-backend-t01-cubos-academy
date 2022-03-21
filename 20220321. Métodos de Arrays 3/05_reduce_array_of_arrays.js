const array = [
    [0, 1],
    [2, 3, 4],
    [14, 22, 98]
];

const reducedArray = array.reduce((acumulator, currentItem, index, array) => {
    return [...acumulator, ...currentItem];
})

console.log(reducedArray);