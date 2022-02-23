function filter80(data) {

    const startIndex = Math.round(data.length / 10);
    const finalIndex = data.length - startIndex;

    const adjustedData = data.slice(startIndex, finalIndex);
    return adjustedData;

}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filter80(data));