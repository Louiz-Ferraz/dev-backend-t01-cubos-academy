const produtosConsumidos = [
    {
        nomeProduto: "Cerveja",
        precoUnitario: 1_000,
        qtdComprada: 10
    },
    {
        nomeProduto: "Pinga",
        precoUnitario: 2_010,
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

let valorPagarFinal = 0;

for (let produto of produtosConsumidos) {
    valorPagarFinal += produto.qtdComprada * produto.precoUnitario;
}

valorPagarFinal /= 100;

console.log(`Obrigado por ter vindo ao nosso bar, ${cartaoDeConsumo.nomeCliente}! O valor final da sua conta é de R$ ${valorPagarFinal.toFixed(2)}. Volte sempre!`);
