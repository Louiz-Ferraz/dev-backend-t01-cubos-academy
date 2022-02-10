const stringCorrompida = "*Canis %lupus )familiaris";

let newString = [];

for (let letter of stringCorrompida) {
    if (letter === "!" || letter === "@" || letter === "#" || letter === "$" || letter === "%" || letter === "&" || letter === "*" || letter === "(" || letter === ")" || letter === ".") {
        // nada
    } else {
        newString += letter;
    }
}

console.log(newString);


// Resolução com método replace

/* 
let newString = "";

newString = stringCorrompida.replace("!", "");
newString = newString.replace("@", "");
newString = newString.replace("#", "");
newString = newString.replace("$", "");
newString = newString.replace("%", "");
newString = newString.replace("&", "");
newString = newString.replace("*", "");
newString = newString.replace("(", "");
newString = newString.replace(")", "");
newString = newString.replace(".", "");

console.log(newString);
*/