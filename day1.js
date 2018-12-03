const puzzleInput = require("./day1-data");

const resultOfCombinedValues = puzzleInput.reduce((acc, cur) => acc + cur, 0);

console.log('result: ', resultOfCombinedValues);
