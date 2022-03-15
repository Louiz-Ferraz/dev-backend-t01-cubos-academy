const microwave = (time, callbackStart, callbackFinish) => {
    callbackStart(time);
    setTimeout(callbackFinish, time * 1000);
}

const microwaveStart = (time) => {
    console.log(`Heating started. Process will end in ${time} seconds...`);
}

const microwaveFinish = () => {
    console.log(`Heating finished.`);
}

const timeInSeconds = 3;

microwave(timeInSeconds, microwaveStart, microwaveFinish);