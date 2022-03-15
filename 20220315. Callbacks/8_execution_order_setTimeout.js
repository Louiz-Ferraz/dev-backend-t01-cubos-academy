const greeting = (name) => {
    console.log(`Hello, ${name}`);
}

console.log("chamada 1");
greeting("Luiz");
console.log("chamada 2");
console.log("chamada 3");
setTimeout(() => {
    console.log("setTimeout foi finalizado")
}, 1000);
console.log("chamada 4");
console.log("chamada 5");