function apresentar(perfil) {

    let faixaEtaria = "idoso";

    if (perfil.idade < 25) {
        faixaEtaria = "jovem";
    } else if (perfil.idade <= 60) {
        faixaEtaria = "adulto";
    }

    console.log(`Olá! Meu nome é ${perfil.nome}, sou um ${faixaEtaria} de ${perfil.idade} anos,
    ${perfil.altura} m de altura e sou ${perfil.profissao}.`);
}

const perfil = {
    nome: "João",
    idade: 61,
    altura: 1.7,
    profissao: "mestre de obras"
}

apresentar(perfil);