const printData = (functionCallback) => {
    const name = "Luiz Ferraz";
    const age = 26;
    functionCallback(name, age);
}

const data = (name, age) => {
    console.log("A função callback foi executada");

    if (name) {
        console.log(`Name: ${name}`);
    }

    if (age) {
        console.log(`Age: ${age}`);
    }
}

printData(data);