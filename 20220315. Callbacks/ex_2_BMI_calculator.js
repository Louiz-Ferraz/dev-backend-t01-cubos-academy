const bmiCalculator = (height, weight, callback) => {
    const bmi = weight / height ** 2;
    let range;

    if (bmi < 18) {
        range = "Malnutrition";
    } else if (bmi <= 25) {
        range = "Normal";
    } else {
        range = "Overweight ";
    }

    callback(bmi, range);
}

const printBmi = (bmi, range) => {
    console.log(bmi.toFixed(2));
    console.log(range);
}

bmiCalculator(1.7, 75, printBmi);