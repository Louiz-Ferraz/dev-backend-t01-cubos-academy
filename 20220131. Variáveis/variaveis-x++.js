let x = 10;
//x = x + 1;
// x += 1;
x++;
console.log(x); //11

x--;
console.log(x); //10

let y = ++x; //Primeiro soma 1 ao x e depois atribui resultado ao y
console.log("X:", x); //11
console.log("Y:", y); //11

y = x++; //Primeiro atribui x ao y e depois soma 1 ao x
console.log("X:", x); //12
console.log("Y:", y); //11