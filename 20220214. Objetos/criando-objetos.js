const pessoa = {
    nome: "Luiz",
    altura: 1.70,
    peso: 75
};

pessoa.nome = "Pedro";
pessoa["altura"] = 1.8;
pessoa["peso"] = 50;

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura} m de altura e peso ${pessoa.peso} kg.`);