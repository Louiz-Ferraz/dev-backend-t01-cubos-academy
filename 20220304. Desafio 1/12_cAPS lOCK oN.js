/*
vOCÊ ESTÁ DESENVOLVENDO UM FORMULÁRIO DE CADASTRO E NOS PRIMEIROS TESTES DE
USABILIDADE COM USUÁRIOS REAIS NOTOU ALGO PECULIAR: mUITOS USUÁRIOS PREENCHEM
O FORMULÁRIO TODO COM A TECLA cAPS lOCK ATIVA, DEIXANDO TUDO BEM MENOS AGRADÁVEL
DE LER. a SOLUÇÃO ESCOLHIDA NO dAILY DO DIA SEGUINTE FOI DE DETECTAR QUANDO O
USUÁRIO ESTÁ ESCREVENDO DESSA FORMA E CORRIGIR AUTOMATICAMENTE. vOCÊ DEVE AGORA
ESCREVER ESSE ALGORITMO.

cONSIDERAMOS QUE UMA PALAVRA FOI ESCRITA COM cAPS lOCK SE OU TODAS AS SUAS LETRAS
FOREM MAIÚSCULAS OU SE A PRIMEIRA FOR MINÚSCULA E TODAS AS OUTRAS MAIÚSCULAS.
a CORREÇÃO NESSES CASOS É INVERTER TODAS AS LETRAS.

Input Format

a ENTRADA CONSISTE DE UMA ÚNICA PALAVRA CONTENDO APENAS LETRAS
LATINAS (A-Z), MINÚSCULAS OU MAIÚSCULAS.

Constraints

uMA PALAVRA POSSUI NO MÁXIMO 100 LETRAS.

Output Format

iMPRIMA A PALAVRA CORRIGIDA, CASO O ALGORITMO TENHA DETECTADO QUE ELA FOI ESCRITA COM cAPS lOCK ATIVO.

Sample Input 0

cAPS

Sample Output 0

Caps

Sample Input 1

lock

Sample Output 1

lock
*/

function processData(input) {

    let isAllCaps = false;
    let isCapsWithFirstLowerCase = false;
    const firstLetter = input[0];

    if (input === input.toUpperCase()) {
        isAllCaps = true;
    } else if (input.slice(1) === input.slice(1).toUpperCase()) {
        isCapsWithFirstLowerCase = true;
    }

    if (!isAllCaps && !isCapsWithFirstLowerCase) {
        console.log(input);
    } else if (isAllCaps) {
        console.log(input.toLowerCase());
    } else {
        console.log(firstLetter.toUpperCase() + input.slice(1).toLowerCase());
    }

}

processData("cAPS");