const { add } = require('date-fns');

const date = new Date(2018, 2, 13, 12);

console.log(date);
console.log(add(date, {
    months: 1,
    days: 1,
    seconds: 2
}));

console.log(date);