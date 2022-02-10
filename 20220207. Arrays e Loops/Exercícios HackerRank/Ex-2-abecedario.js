const letter = "m", words = [
    "mamao",
    "maca",
    "melao",
    "melancia",
    "laranja"
]

let countOfWrongWords = 0;

for (let word of words) {
    if (word[0] !== letter) {
        countOfWrongWords += 1;
    }
}

console.log(countOfWrongWords);
