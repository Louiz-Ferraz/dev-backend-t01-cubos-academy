function cumprimentar(pessoa, idade) {
    console.log(`Olá, ${pessoa}! Fiquei sabendo que você tem ${idade} anos.`);
}

cumprimentar("Maria", 10);
cumprimentar("Luiz", 20);
cumprimentar("Pedro", 30);
cumprimentar("João", 40);

const pessoa = {
    nome: "Laís",
    idade: 26
}

cumprimentar(pessoa.nome, pessoa.idade);