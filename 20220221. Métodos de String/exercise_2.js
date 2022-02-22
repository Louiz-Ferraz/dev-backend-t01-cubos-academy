//replace comma for point

function replaceAll(number, text, newText) {
    while (number.includes(text)) {
        number = number.replace(text, newText);
    }
    return number;
}

const number = "9,111,115,730,000";
console.log(replaceAll(number, ",", "."));
