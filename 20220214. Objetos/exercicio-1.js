const pessoa = {
    nome: "Luiz",
    idade: 26,
    altura: 1.70,
    temCNH: false,
    apelidos: ["Louiz", "Lewis", "Lulu"]
}

const simOuNaoCNH = pessoa.temCNH ? "possui CNH" : "não possui CNH";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} m de altura, ${simOuNaoCNH} e os seguintes apelidos:`);

for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
}