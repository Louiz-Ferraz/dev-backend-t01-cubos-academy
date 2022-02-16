const perfil = {
    nome: "João",
    idade: 67,
    altura: 1.7,
    profissao: "mestre de obras",
    determinarFaixaEtaria: function () {
        let faixaEtaria = "idoso(a)";

        if (this.idade <= 21) {
            faixaEtaria = "jovem";
        } else if (this.idade <= 65) {
            faixaEtaria = "adulto(a)";
        }

        return faixaEtaria;
    },
    apresentar: function () {
        let faixaEtaria = this.determinarFaixaEtaria(this.idade);

        console.log(`Olá! Meu nome é ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos,
        ${this.altura} m de altura e sou ${this.profissao}.`);
    }
}

perfil.apresentar();
console.log(perfil.determinarFaixaEtaria());