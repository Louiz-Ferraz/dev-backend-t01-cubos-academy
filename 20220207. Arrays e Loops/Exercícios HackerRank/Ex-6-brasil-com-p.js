const primeiraLetra = "a", segundaLetra = "v", palavras = ["ave", "balão", "aveia"];

let foundWords = false;

for (let word of palavras) {
    if (word[0] === primeiraLetra && word[1] === segundaLetra) {
        console.log(word);
        foundWords = true;
    }
}

if (!foundWords) {
    console.log("NENHUMA");
}
