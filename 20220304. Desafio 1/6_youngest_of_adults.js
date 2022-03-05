/*
Um determinado evento é permitido apenas para maiores de idade.
Através de um lista com as idades dos potenciais participantes,
seu objetivo é fazer um programa que determine qual a idade da pessoa
mais nova, dentre os que podem participar (maiores de idade).

Input Format

A entrada é um array com as idades das pessoas que tentam participar.

Constraints

A lista contém de 1 a 1000 itens

Output Format

Imprima na tela a idade da pessoa mais jovem que pode participar. Se ninguém
puder participar, imprima na tela a mensagem CRESCA E APARECA.

Sample Input 0

12 18 27

Sample Output 0

18
*/

function solucao(lista) {
    let atLeastOneCanJoin = false;
    let smallest = Infinity;

    for (let age of lista) {
        if (smallest > age && age >= 18) {
            smallest = age;
            atLeastOneCanJoin = true;
        }
    }

    if (atLeastOneCanJoin) {
        console.log(smallest);
    } else {
        console.log("CRESCA E APARECA");
    }
}


solucao([12, 18, 27]);