const pessoa = {
    nome: "Luiz",
    idade: 26,
    cidade: "Americana",
    profissao: "Financeiro"
};

//const nome = pessoa.nome;
//const idade = pessoa.idade;

const { nome, idade, ...outros } = pessoa; // isso é desestrutaração do objeto, não estou criando um objeto

console.log(nome, idade, outros);
console.log(pessoa);