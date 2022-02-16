function determinarFaixaEtaria(idade) {

    let faixaEtaria = "idoso(a)";

    if (idade <= 21) {
        faixaEtaria = "jovem";
    } else if (idade <= 65) {
        faixaEtaria = "adulto(a)";
    }

    return faixaEtaria;

}

function apresentar(perfil) {

    let faixaEtaria = determinarFaixaEtaria(perfil.idade);

    console.log(`Olá! Meu nome é ${perfil.nome}, sou um(a) ${faixaEtaria} de ${perfil.idade} anos,
    ${perfil.altura} m de altura e sou ${perfil.profissao}.`);

}

const perfil = {
    nome: "João",
    idade: 67,
    altura: 1.7,
    profissao: "mestre de obras"
}

apresentar(perfil);