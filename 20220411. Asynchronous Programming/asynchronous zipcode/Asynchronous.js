const { getCityFromZipcode } = require('utils-playground');

console.log("begin");

getCityFromZipcode('13467300').then(cidade => {
    console.log(cidade);
});

console.log("end");

// const cidade = getCityFromZipcode('13467300');
// console.log(cidade); /Promise { <pending> } - pode ser resolvida ou rejeitada