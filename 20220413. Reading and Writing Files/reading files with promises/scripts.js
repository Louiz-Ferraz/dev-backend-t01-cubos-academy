const fs = require('fs/promises');

console.log('before reading');

// const test = fs.readFile('test.txt');
// 
// test.then((data) => {
//     console.log(data.toString());
// })
// 
// test.catch((error) => {
//     console.log(error);
// })

(async function () {
    const test = await fs.readFile('test.txt');
    console.log(test.toString());
})();

console.log('after reading');