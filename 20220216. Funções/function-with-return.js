function verificarMaiorIdade(idade) {
    if (idade >= 18) {
        return true;
        console.log("essa linha nunca será executada, pois o código para de rodar a função quando chega em um return");
    } else {
        return false;
    }
}

let ehMaiorDeIdade = verificarMaiorIdade(23);

if (ehMaiorDeIdade) {
    console.log("É maior de idade!");
} else {
    console.log("Não é maior de idade!");
}