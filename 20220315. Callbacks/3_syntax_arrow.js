const greeting = (callback) => {
    const name = "Luiz";
    callback(name);
}

const message = (name) => {
    console.log(`Welcome ${name}`);
}

greeting(message);

// greeting(name => {
//     console.log(`Welcome ${name}`);
// });
