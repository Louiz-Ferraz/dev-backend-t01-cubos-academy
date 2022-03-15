const microwave = (time) => {
    console.log(`Heating started. Process will end in ${time} seconds...`);
    console.log(`${time} seconds...`);
    time--;

    const microwaveFinish = () => {
        console.log(`${time} seconds...`);
        time--;

        if (time < 0) {
            console.log(`Heating finished.`);
            clearInterval(idSetInterval);
        }
    }

    const idSetInterval = setInterval(microwaveFinish, 1000, time);
}

let timeInSeconds = 3;

microwave(timeInSeconds);