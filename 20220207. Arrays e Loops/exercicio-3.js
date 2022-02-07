const palavra = 'Aaaaaaaalemanha'; //10 letras a

let quantidadeDeLetrasA = 0;

for (let letra of palavra) {
    if (letra === 'a' || letra === 'A') {
        quantidadeDeLetrasA++;
    }
}

console.log(`A palavra ${palavra} possui ${quantidadeDeLetrasA} letras A, maiúsculas e minúsculas.`);