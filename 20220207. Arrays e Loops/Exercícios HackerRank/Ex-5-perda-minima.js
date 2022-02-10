const precos = [20, 15, 8, 2, 12];

let perdaMinima = Infinity;

for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {
        let perda = precos[i] - precos[j];
        if (perda < perdaMinima && perda > 0) {
            perdaMinima = perda;
        }
    }
}

console.log(perdaMinima);