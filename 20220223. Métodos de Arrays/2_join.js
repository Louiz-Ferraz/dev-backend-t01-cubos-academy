function reverseString(text) {

    let arrayOfCharacters = [];

    arrayOfCharacters = text.split("");
    arrayOfCharacters.reverse();
    let reversedString = arrayOfCharacters.join("");

    return reversedString;

}

const text = "A Joana tava lá na rua";
console.log(reverseString(text));