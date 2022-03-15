const sum = (firstNumber, secondNumber, callback) => {
    const result = firstNumber + secondNumber;
    callback(result);
}

sum(10, 15, (result) => {
    console.log(`O resultado da soma é ${result}.`);
})