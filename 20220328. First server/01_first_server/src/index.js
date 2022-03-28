// const lodash = require('lodash');
// const array = [1, 2, 4, 4, 6, 7, 1];
// const uniqueArray = lodash.uniq(array); //retorna novo array com valores únicos

const { uniq } = require('lodash'); //importando apenas método a ser utilizado
const array = require('./array'); //importando arquivo criado por mim
const { arrayNumbers, arrayLetters } = require('./array');
const uniqueArrayNumbers = uniq(arrayNumbers); //retorna novo array com valores únicos
const uniqueArrayLetters = uniq(arrayLetters);

console.log(array);
console.log(arrayNumbers);
console.log(arrayLetters);
console.log(uniqueArrayNumbers);
console.log(uniqueArrayLetters);