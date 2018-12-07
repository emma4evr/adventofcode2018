const day2data = require("./day2-data");

const _test = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];

const totalOccurances = {
    twoLetterOccurances: 0,
    threeLetterOccurances: 0
};

const checkOccurances = (array) => {
    const clonedArray = array.slice(0);

    clonedArray.forEach(element => {

        const countOccurances = (stringToCheck, foundTwo, foundThree) => {
            // console.log('initial stringToCheck: ', stringToCheck, 'length: ', stringToCheck.length);
            let foundTwoLetterOccurance = foundTwo;
            let foundThreeLetterOccurance = foundThree;
            
            if (stringToCheck.length === 0) {
                return;
            }
            const characterToCheck = stringToCheck.charAt(0);
            // console.log('characterToCheck: ', characterToCheck);
            
            const numberOfRepeats = stringToCheck.split(characterToCheck).length - 1;
            // console.log('numberOfRepeats: ', numberOfRepeats);
            
            if (numberOfRepeats === 2 && !foundTwoLetterOccurance) {
                foundTwoLetterOccurance = true;
                totalOccurances.twoLetterOccurances += 1;
            }
            if (numberOfRepeats === 3 & !foundThreeLetterOccurance) {
                foundThreeLetterOccurance = true;
                totalOccurances.threeLetterOccurances += 1;
            }
            // console.log('totalOccurances: ', totalOccurances);

            const nextStringToCheck = stringToCheck.replace(new RegExp (characterToCheck, 'g'), '');
            // console.log('nextStringToCheck: ', nextStringToCheck);

            countOccurances(nextStringToCheck, foundTwoLetterOccurance, foundThreeLetterOccurance);
        }
        countOccurances(element, false, false);
    })
}

checkOccurances(day2data);

console.log('totalOccurances: ', totalOccurances);

const checksumTotal = totalOccurances.twoLetterOccurances * totalOccurances.threeLetterOccurances;

console.log('Checksum Total: ', checksumTotal);

