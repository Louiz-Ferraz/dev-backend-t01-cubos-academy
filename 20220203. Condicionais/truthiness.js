//https://developer.mozilla.org/pt-BR/docs/Glossary/Truthy
//Todos os valores são truthy a menos que eles sejam definidos como falsy (ou seja., exceto para false, 0, "", null, undefined, e NaN).

const nome = "";

if (nome) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}