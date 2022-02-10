const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

let bestGrade = notas[0];
let worstGrade = notas[0];
let sumOfGrades = 0;

for (let grade of notas) {
    if (bestGrade < grade) {
        bestGrade = grade;
    }
    if (worstGrade > grade) {
        worstGrade = grade;
    }
    sumOfGrades += grade;
}

console.log((sumOfGrades - bestGrade - worstGrade) / (notas.length - 2));