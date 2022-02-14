const produtosConsumidos = [
    {
        nomeProduto: "Cerveja",
        precoUnitario: 1_000,
        qtdComprada: 10
    },
    {
        nomeProduto: "Pinga",
        precoUnitario: 2_000,
        qtdComprada: 2
    },
    {
        nomeProduto: "Abacate",
        precoUnitario: 500,
        qtdComprada: 1
    }
]

const cartaoDeConsumo = {
    nomeCliente: "Luiz",
    idadeCliente: 26,
    produtosConsumidos
};

console.log(cartaoDeConsumo.nomeCliente);
console.log(cartaoDeConsumo.idadeCliente);

cartaoDeConsumo.idadeCliente = 27;
console.log(cartaoDeConsumo.idadeCliente);

console.log(cartaoDeConsumo.produtosConsumidos[0].nomeProduto);
console.log(cartaoDeConsumo.produtosConsumidos[produtosConsumidos.length - 1].precoUnitario);