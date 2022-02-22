//saber se e-mail é válido
//tem que ter pelo menos um @
//tem que ter pelo menos um . depois do arroba

const email = "luizfelipe.ferraz@gmail.com";

let temArroba = email.includes("@");
let posicaoArroba = -1;
let temPontoDepoisDoArroba = -1;

if (temArroba) {
    posicaoArroba = email.indexOf("@");
    temPontoDepoisDoArroba = email.indexOf(".", posicaoArroba) > posicaoArroba;

    if (temPontoDepoisDoArroba) {
        console.log("E-mail válido");
    } else {
        console.log("E-mail inválido: não tem . depois do @");
    }
} else {
    console.log("E-mail inválido: não tem @");
}