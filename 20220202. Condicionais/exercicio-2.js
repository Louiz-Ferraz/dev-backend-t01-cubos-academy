const valorDoProduto = 100;
const quantidadeParcelas = 12;
const juros = 1 / 100;

const descontoEmPercentual = quantidadeParcelas === 1 ? 10 / 100 : 0 / 100;
const valorDoProdutoComDesconto = valorDoProduto * (1 - descontoEmPercentual);
const valorDoProdutoComJuros = quantidadeParcelas >= 7 ? valorDoProdutoComDesconto * ((1 + juros) ** quantidadeParcelas) : valorDoProdutoComDesconto;
const valorDaParcela = valorDoProdutoComJuros / quantidadeParcelas;
const unidadeParcelas = quantidadeParcelas === 1 ? "parcela" : "parcelas";
const unidadeReais = valorDaParcela <= 1 ? "real" : "reais";

if (quantidadeParcelas > 12 || quantidadeParcelas < 1) {
    console.log("Número de parcelas inválido");
} else {
    console.log(`Olá, cliente! Você deverá pagar ${quantidadeParcelas} ${unidadeParcelas} de ${valorDaParcela.toFixed(2)} ${unidadeReais}, totalizando ${valorDoProdutoComJuros.toFixed(2)}.`);
}