const precos = [100, 500, 100, 50]

let precoTotal = 0;
let menorPreco = precos[0];

for (let preco of precos) {
    precoTotal += preco;
    if (menorPreco > preco) {
        menorPreco = preco;
    }
}

if (precos.length >= 5) {
    precoTotal -= menorPreco;
}

console.log(precoTotal);
