const printData = (callback) => {
    const name = "Luiz";
    const age = 26;
    callback(name, age);
}

const data = (name, age) => {

    console.log(name);

    if (age) {
        const today = new Date();
        const currentYear = today.getFullYear();
        console.log(currentYear - age);
    }
}

printData(data);