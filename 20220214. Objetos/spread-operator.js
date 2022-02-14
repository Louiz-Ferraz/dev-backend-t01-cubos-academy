const pessoa = {
    nome: "Luiz",
    idade: 26,
    cidade: "Americana",
    profissao: "financeiro"
};

const endereco = {
    rua: "Aqui",
    numero: 32,
    bairro: "Aquele"
};

const objetoFundido = {
    ...pessoa,
    ...endereco,
    novaPropriedade: 20
};

console.log(objetoFundido);