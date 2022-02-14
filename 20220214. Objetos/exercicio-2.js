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

console.log(cartaoDeConsumo);