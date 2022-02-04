const valorDoProduto = 100;
const quantidadeParcelas = 100;

const descontoEmPercentual = quantidadeParcelas === 1 ? 10 / 100 : 0 / 100;
const valorDoProdutoComDesconto = valorDoProduto * (1 - descontoEmPercentual);
const valorDaParcela = valorDoProdutoComDesconto / quantidadeParcelas;
const unidadeParcelas = quantidadeParcelas === 1 ? "parcela" : "parcelas";
const unidadeReais = valorDaParcela === 1 ? "real" : "reais";

console.log(`Olá, cliente! Você deverá pagar ${quantidadeParcelas} ${unidadeParcelas} de ${valorDaParcela.toFixed(2)} ${unidadeReais}.`);