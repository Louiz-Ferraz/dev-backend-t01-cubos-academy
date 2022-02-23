let numero1 = 5;
let numero2 = numero1;
numero1 = 10;
console.log("numero1: ", numero1);
console.log("numero2: ", numero2);
console.log();

let texto1 = "abra";
let texto2 = texto1;
texto1 += "cadabra";
console.log("texto1: ", texto1);
console.log("texto2: ", texto2);
console.log();

let obj1 = { prop: 5 };
let obj2 = obj1;
obj1.prop = 10;
obj2.prop = 20;
console.log("obj1: ", obj1);
console.log("obj2: ", obj2);
console.log();

let array1 = [1, 2, 3];
let array2 = array1;
array1.push(4);
array2.push(5);
console.log("array1: ", array1);
console.log("array2: ", array2);
console.log();