let a = 10;

function somar(x, y) {
    let z = 5;
    return x + y + z + a;
}

console.log(somar(5, 5));
//console.log(x); // a variável x está dentro do escopo da função, não existe no escopo do arquivo
//console.log(z); // a variável z está dentro do escopo da função, não existe no escopo do arquivo
console.log(a); // a variável a existe no escopo do arquivo e, portanto, também no escopo da função