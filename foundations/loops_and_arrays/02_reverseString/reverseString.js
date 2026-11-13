const reverseString = function(words) {
    let reversedWords = ""
    let reverseIndex = words.length - 1;
    for (let i = 0; i < words.length; i++) {
        reversedWords += words.at([reverseIndex])
        reverseIndex--;
    }
    return reversedWords
};
// Do not edit below this line
module.exports = reverseString;
