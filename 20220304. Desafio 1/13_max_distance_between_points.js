/*
Thacila está preocupada com as condições de trabalho em nosso ambiente cúbico,
em especial com o quanto as pessoas precisam andar dentro da sala. Também é
comum na Cubos que uma pessoa tire dúvidas com outra indo até a mesa do colega,
caminhando a distância. Ela está fazendo um trabalho de realocar as mesas da sala
para que as pessoas precisem andar o mínimo possível. Para tal, ela precisa
primeiro rever a posição atual e determinar qual é a maior distância que precisa
ser andada para uma pessoa chegar na mesa do colega. Como o número de pessoas está
ficando bem grande, ela precisa escrever um programa para isso. Considere que
cada pessoa é um ponto no plano euclidiano e que a distância é sempre uma linha
reta entre dois pontos.

Input Format

Neste problema a entranda é um único string que você deve tratar adequadamente
para obter as informações que você precisa em variáveis separadas.

A primeira linha deste string será o inteiro N que indica o número de
funcionários da Cubos. Nas próximas N linhas você lerá dois números,
as coordenadas X e Y do i-ésimo funcionário.

Constraints

2 ≤ N ≤ 10^3 -1000 ≤ X, Y ≤ 1000

Output Format

Imprima um único número, a resposta para o problema.

Sample Input 0

3
0 0
0 3
4 0

Sample Output 0

5.0

Sample Input 1

5
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7

Sample Output 1

54.141371427033505
*/

function distanceBetweenTwoPoints(pointA, pointB) {
    return Math.sqrt((pointB.x - pointA.x) ** 2 + (pointB.y - pointA.y) ** 2);
}

function processData(input) {

    let arrayFromInput = input.trim().split("\n");
    const numberOfEmployees = parseInt(arrayFromInput.shift(), 10);

    let coordinates = [];
    for (let coord of arrayFromInput) {
        let point = coord.split(" ");
        coordinates.push({
            x: point[0],
            y: point[1]
        })
    }

    let maxDistance = 0;
    for (let i = 0; i < coordinates.length; i++) {
        for (let j = i + 1; j < coordinates.length; j++) {
            let distance = distanceBetweenTwoPoints(coordinates[i], coordinates[j]);
            if (maxDistance < distance) {
                maxDistance = distance;
            }
        }
    }

    console.log(maxDistance);

}

const input = `5
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7`

processData(input);