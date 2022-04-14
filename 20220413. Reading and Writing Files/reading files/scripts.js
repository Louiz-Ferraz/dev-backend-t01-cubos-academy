const fs = require('fs');

console.log('before reading');

//sync
// const test = fs.readFileSync('test.txt').toString();
// console.log(test);

//async
fs.readFile('test.txt', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
});

console.log('after reading');