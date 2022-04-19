const worldCupFinal = new Date(2002, 5, 30, 8);
const timestamp = +worldCupFinal; // or timestamp = worldCupFinal.getTime()
const finalPlusAnHourTimestamp = +worldCupFinal + 1000 * 60 * 60;
const finalPlusAnHourDate = new Date(finalPlusAnHourTimestamp);

console.log(worldCupFinal);
console.log(timestamp);
console.log(finalPlusAnHourTimestamp);
console.log(finalPlusAnHourDate);