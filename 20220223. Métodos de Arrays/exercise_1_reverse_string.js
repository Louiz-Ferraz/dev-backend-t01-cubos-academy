function reverseString(text) {

    let arrayOfCharacters = [];
    let reversedString = "";

    // for (const character of text) {
    //     arrayOfCharacters.push(character);
    // }

    arrayOfCharacters = text.split("");

    arrayOfCharacters.reverse();

    for (const item of arrayOfCharacters) {
        reversedString += item;
    }

    return reversedString;

}

const text = "A Joana tava lá na rua";
console.log(reverseString(text));