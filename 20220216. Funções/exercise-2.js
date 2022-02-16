function determinarFaixaEtaria(idade) {

    let faixaEtaria = "idoso(a)";

    if (idade <= 21) {
        faixaEtaria = "jovem";
    } else if (idade <= 65) {
        faixaEtaria = "adulto(a)";
    }

    return faixaEtaria;

}

console.log(determinarFaixaEtaria(22));