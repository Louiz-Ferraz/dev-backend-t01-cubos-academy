const sequencia = [">", ">", ">", "<", ">"];

//const images = [0, 1, 2, 3, 4, 5, 6];

position = 0;

for (let click of sequencia) {
    if (position === 0 && click === "<") {
        position = 6;
    } else if (position === 6 && click === ">") {
        position = 0;
    } else if (click === ">") {
        position += 1;
    } else {
        position -= 1;
    }
}

console.log(position);