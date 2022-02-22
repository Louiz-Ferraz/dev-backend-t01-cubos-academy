//quero obter apenas 2 dígitos do estado de uma cidade

const cidade = "Salvador-BA";

let estado = cidade.slice(cidade.length - 2);
console.log(estado);