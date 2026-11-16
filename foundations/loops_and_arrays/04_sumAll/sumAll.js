function sumAll(num1, num2) {
    if ((Number.isInteger(num1) === true && num1 > 0) && (Number.isInteger(num2) === true && num2 > 0)) {
        let totalSum = 0;
        let largestNumber = (num1 > num2) ? num1 : num2
        let smallestNumber = (num1 < num2) ? num1 : num2

        for (let i = smallestNumber; i < largestNumber + 1; i++) {
            totalSum+= i;
        }
        return totalSum;
    } else {
        return "ERROR";
    }
};
// Do not edit below this line
module.exports = sumAll;
