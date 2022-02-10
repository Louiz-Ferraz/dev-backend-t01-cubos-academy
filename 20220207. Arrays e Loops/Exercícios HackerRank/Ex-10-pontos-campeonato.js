const resultados = ["V", "V", "E", "D", "E"];

let totalPoints = 0;

for (let result of resultados) {
    if (result === "V") {
        totalPoints += 3;
    } else if (result === "E") {
        totalPoints += 1;
    }
}

console.log(totalPoints);