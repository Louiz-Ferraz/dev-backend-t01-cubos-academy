let number = 1;

const count = () => {
    if (number >= 5) {
        clearInterval(idSetInterval);
    }

    console.log(`${number}...`);
    number++;
}

const idSetInterval = setInterval(count, 1000);