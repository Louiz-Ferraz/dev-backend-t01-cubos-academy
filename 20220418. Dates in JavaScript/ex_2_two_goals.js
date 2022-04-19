const worldCupFinalGameStart = new Date(2002, 5, 30, 8);
const oneMinuteInMs = 1000 * 60;
const firstGoalTimestamp = +worldCupFinalGameStart + (45 + 15 + 22) * oneMinuteInMs;
const secondGoalTimestamp = firstGoalTimestamp + (12) * oneMinuteInMs;
const firstGoal = new Date(firstGoalTimestamp);
const secondGoal = new Date(secondGoalTimestamp);

console.log(firstGoal);
console.log(secondGoal);