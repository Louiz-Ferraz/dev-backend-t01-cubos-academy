const palpite = "a", palavra = "abelha";

let countOfRightLetters = 0;

for (let letter of palavra) {
    if (letter === palpite) {
        countOfRightLetters += 1;
    }
}

console.log(countOfRightLetters);