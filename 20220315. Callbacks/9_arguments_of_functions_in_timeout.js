const printMessage = (name, age) => {
    console.log(`Hello, ${name}. You're ${age} years old.`);
}

setTimeout(printMessage, 2000, "Luiz", 20);