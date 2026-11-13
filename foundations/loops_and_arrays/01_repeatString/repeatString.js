const repeatString = function(word, number) {
    let summedWord = "";
    if(Math.sign(number) === -1) {
        return "ERROR";
    } 
    for (let i = 0; i < number; i++) {
        summedWord += word;
    }
    return summedWord
};

// Do not edit below this line
module.exports = repeatString;
