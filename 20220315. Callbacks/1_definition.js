function greeting(callback) {
    const name = "Luiz";
    callback(name);
}

greeting(function (name) {
    console.log(`Welcome ${name}`);
});
