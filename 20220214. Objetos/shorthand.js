const carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano: 2022,
    potencia: 80
};

const altura = 1.70;

const pessoa = {
    nome: "Luiz",
    altura, //shorthand - não é necessário passar a variável explicitamente, pois nome da propriedade e da variável são iguais
    peso: 75,
    carro //shorthand - não é necessário passar a variável explicitamente, pois nome da propriedade e da variável são iguais
}

console.log(pessoa);
console.log(carro);
console.log(pessoa.carro);
console.log(pessoa.carro.marca);