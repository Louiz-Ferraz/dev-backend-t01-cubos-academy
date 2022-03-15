function greeting(callback) {
    const name = "Luiz";
    callback(name);
}

function message(name) {
    console.log(`Welcome ${name}`);
}

greeting(message);
